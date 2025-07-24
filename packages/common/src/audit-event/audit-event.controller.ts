import {
  Body,
  Controller,
  Get,
  HttpException,
  HttpStatus,
  Logger,
  Post,
  Query,
} from "@nestjs/common";
import { AuditEventService } from "./audit-event.service";

@Controller("audit-event")
export class AuditEventController {
  constructor(private service: AuditEventService) {}

  logger = new Logger(AuditEventController.name);

  @Post("/sale")
  createSaleAuditEvent(@Body() event) {
    if (!event?.sku || !event?.soNumber || !event?.quantity) {
      this.logger.warn(
        `Ignoring request to audit invalid record: ${JSON.stringify(event)}`
      );
      throw new HttpException(
        "Please provide a valid event type",
        HttpStatus.BAD_REQUEST
      );
    }

    this.service.auditSaleEvent(
      event.date || undefined,
      event.soNumber,
      event.sku,
      event.quantity
    );
  }

  @Get("/search")
  search(@Query("targetId") targetId, @Query("eventType") eventType) {
    if (!eventType) {
      throw new HttpException(
        "Please provide an event type for the search",
        HttpStatus.BAD_REQUEST
      );
    }

    return this.service.search({
      eventType: eventType,
      targetId: targetId,
    });
  }
}
