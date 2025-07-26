import { ConfigService } from "@nestjs/config";
import { NestFactory, Reflector } from "@nestjs/core";
import { SwaggerModule, DocumentBuilder } from "@nestjs/swagger";
import { AppModule } from "./app.module";
import * as bodyParser from "body-parser";
import { Auth0JwtGuard, DomainAuthGuard } from "../../common/src/auth";

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  const config = new DocumentBuilder()
    .setTitle("AMM - Purchasing Services")
    .setDescription("The Inventory for AAM Purchasing Services")
    .setVersion("1.0")
    .addTag("purchasing", "API Endpoint for purchasing")
    .addTag("supplier", "API Endpoint for supplier")
    .build();
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup("swagger-ui", app, document);

  const configService: ConfigService = app.get(ConfigService);
  app.use(bodyParser.json({ limit: "50mb" }));
  app.use(bodyParser.urlencoded({ limit: "50mb", extended: true }));
  app.enableCors();
  const auth0Guard = app.get(Auth0JwtGuard);
  const domainGuard = app.get(DomainAuthGuard);
  
  app.useGlobalGuards(auth0Guard, domainGuard);
  await app.listen(configService.get("PORT") || 3001);
}
bootstrap();
