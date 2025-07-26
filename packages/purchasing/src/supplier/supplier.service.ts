import { Injectable } from "@nestjs/common";
import { Prisma, Supplier } from "../../prisma/generated/client";
import { PrismaService } from "../prisma.service";

@Injectable()
export class SupplierService {
  constructor(private prisma: PrismaService) {}

  async findByGuid(
    guid: string,
    includePurchaseOrders?: boolean
  ): Promise<Supplier | null> {
    return this.prisma.supplier.findUnique({
      where: { guid: guid },
      include: {
        address: true,
        contacts: true,
        purchaseOrders: includePurchaseOrders ? includePurchaseOrders : false,
      },
    });
  }

  async countSuppliers() {
    return this.prisma.supplier.aggregate({
      _count: { id: true },
    });
  }

  async findMany(params: {
    skip?: number;
    take?: number;
    cursor?: Prisma.SupplierWhereUniqueInput;
    where?: Prisma.SupplierWhereInput;
    orderBy?: Prisma.SupplierOrderByWithRelationInput;
    includePurchaseOrders?: boolean;
  }): Promise<Supplier[]> {
    const { skip, take, cursor, where, orderBy } = params;
    return this.prisma.supplier.findMany({
      skip,
      take,
      cursor,
      where,
      // orderBy,
      orderBy: [{ name: "asc" }],
      include: {
        address: true,
        contacts: true,
        purchaseOrders:
          params.includePurchaseOrders === true
            ? params.includePurchaseOrders
            : false,
      },
    });
  }

  async create(data: Prisma.SupplierCreateInput): Promise<Supplier> {
    return this.prisma.supplier.create({
      data,
    });
  }

  async update(params: {
    where: Prisma.SupplierWhereUniqueInput;
    data: Prisma.SupplierUpdateInput;
  }): Promise<Supplier> {
    const { where, data } = params;
    return this.prisma.supplier.update({
      where,
      data,
    });
  }

  async delete(guid: string) {
    return this.prisma.supplier.delete({ where: { guid: guid } });
  }
}
