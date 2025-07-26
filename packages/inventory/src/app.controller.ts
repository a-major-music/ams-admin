import { Res } from '@nestjs/common';
import { Controller, Get } from '@nestjs/common';
import { ApiOperation, ApiTags } from '@nestjs/swagger';

@ApiTags('inventory')
@Controller()
export class AppController {
  @Get()
  @ApiOperation({ description: 'Loads this swagger page' })
  redirect(@Res() res) {
    return res.redirect('/swagger-ui');
  }
}
