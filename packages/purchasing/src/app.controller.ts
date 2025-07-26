import { Res } from "@nestjs/common";
import { Controller, Get } from "@nestjs/common";
import { ApiTags, ApiOperation } from "@nestjs/swagger";
import { AppService } from "./app.service";

@ApiTags("Main")
@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  @ApiOperation({ description: "Loads this swagger page" })
  redirect(@Res() res) {
    return res.redirect("/swagger-ui");
  }
}
