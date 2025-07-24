import { Module } from "@nestjs/common";
import { PrismaService } from "../prisma.service";
import { NextNumberController } from "./next-number.controller";
import { NextNumberService } from "./next-number.service";

@Module({
  controllers: [NextNumberController],
  providers: [NextNumberService, PrismaService],
})
export class NextNumberModule {}
