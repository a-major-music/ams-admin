import {
  Body,
  Controller,
  Get,
  HttpException,
  HttpStatus,
  Param,
  Put,
} from "@nestjs/common";
import { ApiBody, ApiProperty } from "@nestjs/swagger";
import { NextNumber } from "../../prisma/generated/client";

import { NextNumberService } from "./next-number.service";

class NextNumberDto implements NextNumber {
  id: number;

  @ApiProperty()
  name: string;

  @ApiProperty()
  value: number;
}

@Controller("next-number")
export class NextNumberController {
  constructor(private service: NextNumberService) {}

  @Get(":name")
  async getNext(@Param("name") name: string): Promise<NextNumber> {
    if (!name || name.trim() === "") {
      throw new HttpException(
        "Please provide a valid key",
        HttpStatus.BAD_REQUEST
      );
    }

    return this.service.getNext(name);
  }
}
