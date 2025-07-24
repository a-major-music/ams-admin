import { Injectable, Logger } from "@nestjs/common";
import { AuditEvent } from "../../prisma/generated/client";
import { PrismaService } from "../prisma.service";

export const EVENT_TYPES = {
  SALE: "SALE",
  REFUND: "REFUND",
};
@Injectable()
export class AuditEventService {
  constructor(private prisma: PrismaService) {}

  logger = new Logger(AuditEventService.name);

  auditSaleEvent(
    date: Date,
    soNumber: string,
    sku: string,
    quantity: number
  ): Promise<AuditEvent> {
    return this.auditEvent({
      eventType: EVENT_TYPES.SALE,
      sourceId: soNumber,
      targetId: sku,
      id: undefined,
      createdAt: date,
      data: `{quantity: ${quantity}}`,
    });
  }

  auditRefundEvent(
    date: Date,
    soNumber: string,
    sku: string,
    quantity: number
  ): Promise<AuditEvent> {
    return this.auditEvent({
      eventType: EVENT_TYPES.REFUND,
      sourceId: soNumber,
      targetId: sku,
      id: undefined,
      createdAt: date,
      data: `{quantity: ${-quantity}}`,
    });
  }

  private async auditEvent(event: AuditEvent): Promise<AuditEvent> {
    this.logger.log(
      `Recording ${event.eventType} event in the audit log (${JSON.stringify(
        event
      )})`
    );

    return this.prisma.auditEvent.create({
      data: event,
    });
  }

  search(where: any): Promise<AuditEvent[]> {
    return this.prisma.auditEvent.findMany({
      where: where,
      orderBy: {
        createdAt: "desc",
      },
    });
  }
}
