import { PipeTransform, Injectable, ArgumentMetadata } from "@nestjs/common";
import { PurchaseOrder } from "../../prisma/generated/client";

import * as _ from "lodash";

/* 
The types defined in @amm/types are related, and these relationships mirror the structure of the database. However,
Prisma does not use DTOs and repositories like other ORMs. Instead it uses a JSON format to define both data and
operation in the same structure. Top level items are the same, but nested objects need operations inserted in the
object tree to tell Prisma what to do. So a create({id: 1, nested: {id: 1}}) becomes 
create({id: 1, nested: create: {id: 1}}). This interceptor inserts these operations into the objects before they hit
the controller to create variants, and to connectOrCreate suppliers and tags (to avoid duplicates)
*/
@Injectable()
export class PrismaPurchaseOrderCreateTransformPipe implements PipeTransform {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  transform(value: any, metadata: ArgumentMetadata) {
    const augments: any = {};

    // Always set this flag to ensure Xero gets updated by the offline job. There is a separate call to reset it.
    augments.pendingXero = true;

    if (!_.isEmpty(value.lineItems)) {
      value.lineItems.forEach((i) => {
        if (!_.isEmpty(i.receipts)) {
          i.receipts = {
            create: i.receipts,
          };
        } else {
          delete i.receipts;
        }
      });

      augments.lineItems = { create: [] };

      value.lineItems.forEach((li) => {
        augments.lineItems.create.push(li);
      });
    }

    if (!_.isEmpty(value.supplier)) {
      if (value.supplier.guid) {
        augments.supplier = {
          connect: { guid: value.supplier.guid },
        };
      } else if (value.supplier.name) {
        augments.supplier = {
          connect: { name: value.supplier.name },
        };
      } else {
        console.error(
          `Unable to map supplier for [${value}]. No 'name' or 'guid' property found.`
        );
      }
    }

    return { ...value, ...augments };
  }
}
