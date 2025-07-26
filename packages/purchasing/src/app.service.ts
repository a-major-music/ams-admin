import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello World! <a href=/swagger-ui>swagger-ui</a>';
  }
}
