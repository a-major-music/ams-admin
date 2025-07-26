import { ConfigService } from '@nestjs/config';
import { NestFactory, Reflector } from '@nestjs/core';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';
import { AppModule } from './app.module';
import * as bodyParser from 'body-parser';
import { Auth0JwtGuard, DomainAuthGuard } from '../../common/src/auth';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  const config = new DocumentBuilder()
    .setTitle('AAM Services - Inventory')
    .setDescription(
      'Services for accessing products and variants within AMM Services. You will need an API key to access these services, which can be provided either using the X_API_KEY header or an api_key query param.',
    )
    .setVersion('1.0')
    .addTag('products', 'API Endpoint for Products')
    .build();
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('/', app, document);

  const configService: ConfigService = app.get(ConfigService);
  app.use(bodyParser.json({ limit: '50mb' }));
  app.use(bodyParser.urlencoded({ limit: '50mb', extended: true }));
  app.enableCors();
  const auth0Guard = app.get(Auth0JwtGuard);
  const domainGuard = app.get(DomainAuthGuard);
  
  app.useGlobalGuards(auth0Guard, domainGuard);
  await app.listen(configService.get('PORT') || 3000);
}
bootstrap();
