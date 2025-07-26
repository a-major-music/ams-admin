import { PipeTransform, Injectable, ArgumentMetadata } from '@nestjs/common';

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
export class PrismaProductCreateTransformPipe implements PipeTransform {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  transform(value: any, metadata: ArgumentMetadata) {
    const augments: any = {};

    // True if the product has more than 1 variant
    const hasVariants = value.variants.filter(v => !v.pendingDelete).length > 1;

    if (!_.isEmpty(value.suppliers)) {
      augments.suppliers = {
        connect: value.suppliers.map((s) => {
          return { guid: s.guid };
        }),
      };
    } else {
      value.suppliers = undefined;
    }

    if (!_.isEmpty(value.variants)) {
      augments.variants = { create: [] };

      // If there is only one variant we don't store filterValues and filterFields. You don't need them if
      // there is a single variant, and it improves the look of the storefront.
      value.variants.forEach((variant) => {
        if (hasVariants) {
          variant.filterValues = variant.filterValues.toString();
        }
        else {
          variant.filterValues = "";
        }

        if (!_.isEmpty(variant.imageUrls)) {
          const newField = { create: [] };
          variant.imageUrls.forEach((i) => {
            newField.create.push({ uri: i });
          });
          variant.imageUrls = newField;
        } else {
          variant.imageUrls = undefined;
        }

        augments.variants.create.push(variant);
      });
    }

    if (hasVariants) {
      augments.filterFields = value.filterFields.toString();
    }
    else {
      augments.filterFields = "";
    }

    return { ...value, ...augments };
  }
}
