import { PipeTransform, Injectable, ArgumentMetadata } from "@nestjs/common";

import _ = require("lodash");

/* 
The types defined in @amm/types are related, and these relationships mirror the structure of the database. However,
Prisma does not use DTOs and repositories like other ORMs. Instead it uses a JSON format to define both data and
operation in the same structure. Top level items are the same, but nested objects need operations inserted in the
object tree to tell Prisma what to do. So a create({id: 1, nested: {id: 1}}) becomes 
create({id: 1, nested: create: {id: 1}}). This interceptor inserts these operations into the objects before they hit
the controller to create variants, and to connectOrCreate suppliers and tags (to avoid duplicates)
*/
@Injectable()
export class PrismaSupplierCreateTransformPipe implements PipeTransform {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  transform(value: any, metadata: ArgumentMetadata) {
    const augments: any = {};

    if (!_.isEmpty(value.contacts)) {
      augments.contacts = {
        create: value.contacts,
      };
    }

    if (!_.isEmpty(value.address)) {
      augments.address = {
        create: value.address,
      };
    }

    return { ...value, ...augments };
  }
}
