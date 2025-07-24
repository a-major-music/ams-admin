import { ConfigService } from "@nestjs/config";
import { NestFactory } from "@nestjs/core";
import { SwaggerModule, DocumentBuilder } from "@nestjs/swagger";
import { INestApplication } from "@nestjs/common";
import { CommonModule } from "./common.module";
import { Auth0JwtGuard } from "./auth/auth0-jwt.guard";
import { DomainAuthGuard } from "./auth/domain-auth.guard";

async function bootstrap() {
  const app: INestApplication = await NestFactory.create(CommonModule, { rawBody: true });

  const config = new DocumentBuilder()
    .setTitle("AAM Services - Common")
    .setDescription(
      "Common services required across the the other microservices."
    )
    .setVersion("1.0")
    .addTag("next-number", "API Endpoint for the Next Number service")
    .addTag("order-processor", "API Endpoing for processing new orders")
    .build();
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup("/", app, document);

  const configService: ConfigService = app.get(ConfigService);
  const auth0Guard = app.get(Auth0JwtGuard);
  const domainGuard = app.get(DomainAuthGuard);
  
  app.enableCors();
  // Apply guards in order: JWT authentication first, then domain authorization
  app.useGlobalGuards(auth0Guard, domainGuard);
  await app.listen(configService.get("PORT") || 3002);
}
bootstrap();
