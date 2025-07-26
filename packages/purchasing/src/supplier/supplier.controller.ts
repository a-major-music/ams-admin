import {
  Body,
  Controller,
  Delete,
  Get,
  HttpException,
  HttpStatus,
  Param,
  Post,
  Put,
  Query,
} from "@nestjs/common";
import { Prisma, Supplier } from "../../prisma/generated/client";
import { ApiOperation, ApiParam } from '@nestjs/swagger';
import { PrismaSupplierCreateTransformPipe } from "./prisma-supplier-create.transform.pipe";
import { SupplierService } from "./supplier.service";

@Controller("supplier")
export class SupplierController {
  constructor(private supplierService: SupplierService) {}

  @Get('count')
  async countSuppliers(): Promise<any> {
    return { rows: (await this.supplierService.countSuppliers())._count.id };
  }

  @Get(":guid")
  async findByGuid(@Param("guid") guid: string): Promise<Supplier> {
    return this.supplierService.findByGuid(guid);
  }

  @Get()
  @ApiOperation({
    description:
      'Returns all suppliers as array of Supplier, with deep fetch of nested objects',
  })
  @ApiParam({
    name: 'skip',
    required: false,
    description: 'number of records to skip',
    type: 'integer',
  })
  @ApiParam({
    name: 'take',
    required: false,
    description: 'number of records to return',
    type: 'integer',
  })
  @ApiParam({
    name: 'where',
    required: false,
    description: 'optional where clause',
    type: 'object',
  })
  @ApiParam({
    name: 'orderBy',
    required: false,
    description: 'optional orderBy clause',
    type: 'object',
  })
  async findAll(
    @Query('skip') skip?: number,
    @Query('take') take?: number,
    @Query('where') where?: Prisma.SupplierWhereInput,
    @Query('orderBy') orderBy? : Prisma.SupplierOrderByWithRelationInput
  ): Promise<Supplier[]> {
    const params: any = {};
    if (skip) params.skip = +skip;
    if (take) params.take = +take;
    if (where) params.where = where;
    if (orderBy) params.orderBy = orderBy;

    return this.supplierService.findMany(params);
  }

  @Post("create")
  async create(
    @Body(PrismaSupplierCreateTransformPipe) supplier: Supplier
  ): Promise<Supplier> {
    return this.supplierService.create(supplier).catch((e) => {
      console.error(e);
      throw new HttpException(e, HttpStatus.BAD_REQUEST);
    });
  }

  @Put(":guid/update")
  async update(
    @Param("guid") guid: string,
    @Body() data: Supplier
  ): Promise<any> {
    const params = { where: { guid: guid }, data: data };
    return this.supplierService.update(params);
  }

  @Delete(":guid/delete")
  async delete(@Param("guid") guid: string): Promise<Supplier> {
    return this.supplierService.delete(guid);
  }
}
