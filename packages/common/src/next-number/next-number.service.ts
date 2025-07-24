import { Injectable } from "@nestjs/common";
import { NextNumber } from "../../prisma/generated/client";
import { PrismaService } from "../prisma.service";

// Utility keys - the service doesn't actually care what keys you use.
export const PO_NUMBER = "po.number";

const defaults = {
  "po.number": 3000,
  "sku.book": 9493,
  "sku.accessory": 874,
  "sku.gift": 988,
  "sku.instrument": 335,
};

@Injectable()
export class NextNumberService {
  constructor(private prisma: PrismaService) {}

  async getNext(name: string): Promise<NextNumber> {
    let nn = await this.prisma.nextNumber.findUnique({
      where: { name: name },
    });

    if (!nn) {
      nn = { id: undefined, name: name, value: defaults[name] || 1 };
    }

    await this.update({ ...nn, value: nn.value + 1 });
    return nn;
  }

  private async update(n: NextNumber): Promise<NextNumber> {
    return await this.prisma.nextNumber.upsert({
      where: { name: n.name },
      create: n,
      update: { value: n.value },
    });
  }
}
