import { PipeTransform, Injectable, ArgumentMetadata } from "@nestjs/common";

import * as _ from "lodash";

/* 
The types defined in @amm/types are related, and these relationships mirror the structure of the database. However,
Prisma does not use DTOs and repositories like other ORMs. Instead it uses a JSON format to define both data and
operation in the same structure. Top level items are the same, but nested objects need operations inserted in the
object tree to tell Prisma what to do. Nested lineItems and suppliers are not manipulated in this update. These are
done by more specific, targeted calls.
*/
@Injectable()
export class PrismaPurchaseOrderUpdateTransformPipe implements PipeTransform {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  transform(value: any, metadata: ArgumentMetadata) {
    const augments: any = {};

    // Always set this flag to ensure Xero gets updated by the offline job. There is a separate call to reset it.
    augments.pendingXero = true;

    // Using GUID, so leaving ID here confuses prisma
    delete value.id;

    if (!_.isEmpty(value.lineItems)) {
      // Remove any receipts - these
      // must be updated using their own API
      value.lineItems.forEach((i) => {
        delete i.receipts;
      });

      augments.lineItems = { delete: [], create: [], update: [] };

      value.lineItems.forEach((li) => {
        if (li.pendingDelete === true) {
          if (li.id && li.id !== 0) {
            // New items which are deleted before saving will not have an ID.
            augments.lineItems.delete.push({ id: li.id });
          }
        } else if (li.id) {
          augments.lineItems.update.push({
            where: { id: li.id },
            data: li,
          });
        } else {
          augments.lineItems.create.push(li);
        }
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
