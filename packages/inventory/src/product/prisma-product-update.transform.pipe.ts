import { PipeTransform, Injectable, ArgumentMetadata, Logger } from '@nestjs/common';

import * as _ from 'lodash';

/* 
The types defined in @amm/types are related, and these relationships mirror the structure of the database. However,
Prisma does not use DTOs and repositories like other ORMs. Instead it uses a JSON format to define both data and
operation in the same structure. Top level items are the same, but nested objects need operations inserted in the
object tree to tell Prisma what to do. So a create({id: 1, nested: {id: 1}}) becomes 
create({id: 1, nested: create: {id: 1}}). This interceptor inserts these operations into the objects before they hit
the controller to create variants, and to connectOrCreate suppliers and tags (to avoid duplicates)
*/
@Injectable()
export class PrismaProductUpdateTransformPipe implements PipeTransform {
  logger = new Logger(PrismaProductUpdateTransformPipe.name);
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  transform(value: any, metadata: ArgumentMetadata) {
    const augments: any = {};

    // True if the product has more than 1 variant
    const hasVariants =
      value.variants.filter((v) => !v.pendingDelete).length > 1;

    if (!_.isEmpty(value.suppliers)) {
      augments.suppliers = {
        // Delete existing suppier - DB supports many-to-many, but not ready to support that yet
        deleteMany: {},
        connect: value.suppliers.map((s) => {
          return { guid: s.guid };
        }),
      };
    } else {
      value.suppliers = undefined;
    }

    if (!_.isEmpty(value.variants)) {
      augments.variants = { upsert: [] };

      value.variants.forEach((variant) => {
        if (variant.pendingDelete === true) {
          if (!augments.variants.delete) {
            augments.variants.delete = [];
          }

          augments.variants.delete.push({ id: variant.id });
        } else {
          augments.variants.pendingDelete = undefined;

          // Remove stock levels data from the variants - this should only be affected by explicit stock level
          // update calls to prevent accidental overwriting of stock values
          // delete variant.stockOnHand;

          if (hasVariants) {
            variant.filterValues = variant.filterValues.toString();
          } else {
            variant.filterValues = '';
          }

          if (!_.isEmpty(variant.imageUrls)) {
            const imageUrlField = { connectOrCreate: [] };
            variant.imageUrls.forEach((i) => {
              if (i.guid) {
                imageUrlField.connectOrCreate.push({
                  where: { guid: i.guid },
                  create: i,
                });
              } else {
                imageUrlField.connectOrCreate.push({
                  where: { uri: i },
                  create: { uri: i },
                });
              }
            });
            variant.imageUrls = imageUrlField;
          } else {
            variant.imageUrls = undefined;
          }

          const where: any = variant.guid
            ? { guid: variant.guid }
            : { sku: variant.sku };

          augments.variants.upsert.push({
            // Remove stock levels from and update, and IDs from a create call
            where,
            update: { ...variant, stockOnHand: undefined },
            create: { ...variant, id: undefined },
          });
        }
      });
    }

    if (hasVariants) {
      augments.filterFields = value.filterFields.toString();
    } else {
      augments.filterFields = '';
    }

    return { ...value, ...augments };
  }
}
