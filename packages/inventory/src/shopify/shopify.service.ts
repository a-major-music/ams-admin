// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { Injectable, Logger } from '@nestjs/common';
import { HttpService } from '@nestjs/axios';
import { Product } from '@amm/types';
import { isEmpty } from 'lodash';

const graphqlConfig = {
  headers: {
    'X-Shopify-Access-Token': process.env.SHOPIFY_ACCESS_TOKEN,
    'Content-Type': 'application/json',
    Accept: 'application/graphql-response+json',
  },
};

const restConfig = {
  headers: {
    'X-Shopify-Access-Token': process.env.SHOPIFY_ACCESS_TOKEN,
    'Content-Type': 'application/json',
  },
};

@Injectable()
export class ShopifyService {
  constructor(private httpService: HttpService) {}

  private readonly logger = new Logger(ShopifyService.name);

  async findProductIdByVariantSkus(skus: string[]): Promise<string> {
    if (!process.env.SHOPIFY_GRAPHQL_URL) {
      this.logger.warn(
        'No SHOPIFY_GRAPHQL_URL env var set up - unable to read product IDs from Shopify!',
      );
      return;
    }

    if (!process.env.SHOPIFY_ACCESS_TOKEN) {
      this.logger.warn(
        'No SHOPIFY_ACCESS_TOKEN env var set up - unable to read product IDs from Shopify!',
      );
      return;
    }

    this.logger.debug(
      `Trying to find Shopify product with one of these variant skus: ${skus}`,
    );

    let vCount: number;

    // We loop over each variant sku trying to find a product for it in Shopify
    for (vCount = 0; vCount < skus.length; vCount++) {
      const sku = skus[vCount];
      const data = `query {
              productVariants(first: 1, query: "sku:${sku}") {
                edges { node { id product { id title } } }
              }
        }`;

      this.logger.debug(
        `Using Shopify endpoint: ${process.env.SHOPIFY_GRAPHQL_URL} to find ${sku}`,
      );

      const pRes = await this._shopifyPost(data);
      const pId = pRes.productVariants.edges[0]?.node?.product?.id;

      if (pId) {
        // We found a product ID, so return it
        this.logger.debug(`Found id [${pId}] from Shopify`);
        return pId;
      }
    }

    this.logger.warn(`Could not find a Shopify id for any of those SKUs`);
    return undefined;
  }

  async updateInventory(
    inventory: { variantSku: string; stockOnHand: number }[],
  ) {
    // Get the location ID
    const locationId = await this._getLocationId();

    if (!locationId) {
      return this.logger.error(
        'Cannot get location id - cannot update inventory in Shopify',
      );
    }

    this.logger.debug(
      `Updating ${inventory.length} inventory items at shopify location ${locationId}`,
    );

    // Now update each item's inventory level
    for (const item of inventory) {
      // Get the inventory item id
      const r = await this._shopifyPost(`
          query { 
            productVariants(first: 1, query: "sku:${item.variantSku}") {
              edges {
                node {
                  id
                  inventoryQuantity 
                  inventoryItem {
                    id
                  }
                }
              }
            }
          }`);

      const node = r?.productVariants?.edges[0]?.node;

      if (!node) {
        this.logger.error(
          `Cannot get inventoryItemId for ${item.variantSku} - does this product exist in Shopify?`,
        );

        continue;
      }

      const inventoryItemId = node.inventoryItem?.id.replaceAll(/[^0-9]/g, '');

      // Set the available level (has to be POST, can't do with GraphQL). There is a 2 request per second rate limit on
      // Shopify so we stagger these 500ms apart.
      await this.httpService
        .post(
          `${process.env.SHOPIFY_REST_URL}inventory_levels/set.json`,
          {
            location_id: +locationId.replace(/[^0-9]/g, ''),
            inventory_item_id: +inventoryItemId,
            available: item.stockOnHand < 0 ? 0 : item.stockOnHand, // Shopify doesn't like -ve stock levels
          },
          restConfig,
        )
        .toPromise()
        .then(async (r) => {
          const callLimit = r.headers['x-shopify-shop-api-call-limit'];

          this.logger.debug(`Shopify REST call limit status: ${callLimit}`);

          if (+callLimit.substring(0, 2) > 35) {
            // Stop for 60S to allow the API call limit to recover
            this.logger.warn(
              `Nearing Shopify REST API rate limits (${callLimit}) - pausing for 60s`,
            );

            await new Promise((res) => setTimeout(res, 60000));
          }

          this.logger.debug(
            `Updated available stock in Shopify for ${item.variantSku} to ${item.stockOnHand}`,
          );
        })
        .catch((err) =>
          this.logger.error(
            `Unable to update ${item.variantSku} (stock level: ${
              item.stockOnHand
            }). Error was: ${JSON.stringify(err)}`,
          ),
        );
    }
  }

  async updateProduct(product: Product) {
    // Get the location ID
    const locationId = await this._getLocationId();

    if (!locationId) {
      throw Error(
        'Cannot get Shopify location id - cannot update product in Shopify',
      );
    }

    if (!process.env.SUPPLIERS_API) {
      throw Error(`SUPPLIERS_API env var not set up - cannot get Suppliers`);
    }

    let supplier;

    if (!product.supplierGuid) {
      this.logger.warn(
        `Product [${product.name}] does not appear to have a supplier`,
      );
    } else {
      this.logger.debug(`Using Suppliers API: ${process.env.SUPPLIERS_API}`);

      supplier = await this.httpService
        .get(`${process.env.SUPPLIERS_API}${product.supplierGuid}`, {
          headers: {
            'X-API-KEY': process.env.API_KEY,
          },
        })
        .toPromise()
        .then((res) => {
          if (res.data.errors) {
            this.logger.error(JSON.stringify(res.data.errors));
            return undefined;
          }

          return res.data.name;
        })
        .catch((err) => {
          this.logger.error(err);
          return undefined;
        });

      if (!supplier) {
        this.logger.warn(
          `Cannot get name of supplier for guid: ${product.supplierGuid}`,
        );
      }
    }

    const variants = product.variants.map((v) => {
      const barcodeStr = v.barcode !== null ? `barcode: "${v.barcode}",` : '';
      let optionsStr: string;

      // If filters are specified on the top level product, so we need to map to option values in this variant
      if (product.filterFields && product.filterFields !== '') {
        // Turn the current variant values into an array, escaping quotes as we go
        const vValues =
          v.filterValues && v.filterValues !== ''
            ? v.filterValues
                .split(',')
                .map((fv) => `${fv.replaceAll(/"/g, '\\"')}`)
            : undefined;

        // Now build the correct structure for Shopify, using the name from the product and our value
        const optionsVal = vValues
          ? product.filterFields
              .split(',')
              .map((o, i) => `{optionName: "${o}", name: "${vValues[i]}"}`)
          : undefined;

        optionsStr = optionsVal ? `optionValues: [${optionsVal}]` : undefined;
      }

      return `{${barcodeStr}
          ${
            optionsStr
              ? optionsStr
              : 'optionValues: [{optionName: "Title", name: "Default Title"}]'
          },
          inventoryItem: {
              cost: ${v.buyPrice ? v.buyPrice / 100 : 0},
              sku: "${v.sku}",
              tracked: true,
              measurement: {
                weight: {
                  unit: ${v.weightUnit === 'KG' ? 'KILOGRAMS' : 'GRAMS'},
                  value: ${v.weight ? v.weight : 0}
                }
              },
          },
          inventoryQuantities: {
            locationId: "${locationId}",
            name: "on_hand",
            quantity: ${v.stockOnHand}
          },
          price: ${v.retailPrice / 100},
          compareAtPrice: ${v.previousPrice / 100}
          taxable: ${product.taxable},
          }`;
    });

    if (isEmpty(product.shopifyId)) {
      this.logger.warn(
        `Product has no shopifyId, so will try to retrieve by sku: ${product.variants[0].sku}`,
      );

      // This is a problem, because with no ID we'd create a duplicate, so let's try to find a product by SKU. If
      // that doesn't work we'll go ahead and create it.
      product.shopifyId = await this.findProductIdByVariantSkus(
        product.variants.map((v) => v.sku),
      );
    }

    const idStr =
      product.shopifyId && product.shopifyId !== null
        ? `id: "${product.shopifyId}",`
        : ``;

    const optionsStr =
      product.filterFields && product.filterFields !== ''
        ? `productOptions: [${product.filterFields
            .split(',')
            .map(
              (ff, idx) =>
                `{name:"${ff}", values: [${product.variants.map(
                  (v) =>
                    `{name: "${
                      v.filterValues
                        ? v.filterValues.split(',')[idx].replaceAll(/"/g, '\\"')
                        : ''
                    }"}`,
                )}]}`,
            )}],`
        : 'productOptions: [{name: "Title", values: [{name: "Default Title"}]}]';

    const body = `
      mutation UpdateProductAndVariants {
          productSet (input: {
              ${idStr}
              title: "${product.name.replace(/"/g, '\\"')}",
              productType: "${product.productType}",
              descriptionHtml: "${product.description
                .replace(/\n/g, '<br/>')
                .replace(/"/g, '\\"')
                .replace(/[’]/g, "'")}",            
              tags: "${product.tags}",
              ${optionsStr}
              variants: [${variants}],
              vendor: "${
                !isEmpty(product.brand) ? product.brand : 'A Major Music'
              }",
          }) {
            product {
              id
              title
              description
              options {
                name
                values
              }
              variants(first: 5) {
                nodes {
                  id
                  price
                  compareAtPrice
                  selectedOptions {
                    name
                    value
                  }
                }
              }
            }
            userErrors {
              field
              message
            }
          }
      }`;

    const res = await this._shopifyPost(body);

    if (!res) {
      throw Error(
        `Failed to update product [${product.name}] - please check the logs`,
      );
    }

    if (product.shopifyId) {
      this.logger.log(`Product [${product.name}] updated successfully`);
    } else {
      this.logger.log(`Product [${product.name}] created successfully`);
    }

    return res;
  }

  async deleteProduct(p: string) {
    const pResObj = await this._shopifyPost(`
    query {
      products(first: 1, query: "title:${p.replace(/"/g, '\\"')}") {
          edges { node { title, id }}
      }
    }
    `);

    const pId = pResObj.products.edges[0]
      ? pResObj.products.edges[0].node.id
      : undefined;

    if (pId) {
      // Delete this product
      await this._shopifyPost(`
        mutation {
          productDelete(input: {id: "${pId}"}) {
            deletedProductId
              userErrors {
              field
              message
            }
          }
        }`);

      this.logger.log(`Deleted product [${p}] from Shopify`);
    } else {
      this.logger.warn(`No id found for product [${p}] - unable to delete.`);
    }
  }

  _getLocationId = async (): Promise<string> => {
    const r = await this._shopifyPost(
      '{ locations(first:1) { edges { node { id } } } }',
    );

    return r.locations?.edges[0]?.node?.id;
  };

  _shopifyPost = async (query: string): Promise<any> => {
    if (!process.env.SHOPIFY_GRAPHQL_URL) {
      this.logger.warn(
        'No SHOPIFY_GRAPHQL_URL env var set up - unable to read product IDs from Shopify!',
      );
      return {};
    }

    if (process.env.LOG_GRAPHQL === 'true') {
      this.logger.debug(`GraphQL query logging is enabled:\n${query}`);
    }
    return await this.httpService
      .post(process.env.SHOPIFY_GRAPHQL_URL, { query: query }, graphqlConfig)
      .toPromise()
      .then(async (res) => {
        if (res.data.errors) {
          this.logger.error(JSON.stringify(res.data.errors));
          return undefined;
        }

        // Shopify imposes some fairly hefty API rate limits, so we keep an eye on this and delay returning from this function
        // if we're getting close to them.
        const a = +res.data.extensions.cost.throttleStatus.currentlyAvailable;

        this.logger.debug(`Shopify GraphQL API rate limit: ${a}`);

        if (a < 100) {
          // Delay for 1 second
          this.logger.warn(
            `Nearing Shopify GraphQL API rate limits (${a}) - pausing for 1s`,
          );

          await new Promise((res) => setTimeout(res, 1000));
        }

        return res.data.data;
      })
      .catch((e) => this.logger.error(e));
  };
}
