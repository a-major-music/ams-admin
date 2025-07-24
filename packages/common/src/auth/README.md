# Authentication & Authorization

This module provides comprehensive authentication and authorization for AMM services.

## Components

### 1. Auth0 JWT Authentication (`Auth0JwtGuard`)
- Validates JWT tokens using Auth0's public keys (JWKS)
- Extracts user information from validated tokens
- Adds user data to the request object

### 2. Domain Authorization (`DomainAuthGuard`)
- Restricts access to users from the `amajormusic.co.uk` domain
- Checks the `email` field in the JWT payload
- Configurable via `ALLOWED_EMAIL_DOMAIN` environment variable

### 3. Combined Authentication (`@AmmAuth()`)
- Decorator that applies both JWT and domain guards
- Recommended for most protected endpoints

## Usage Examples

### Basic Protection (Recommended)
```typescript
import { Controller, Get } from '@nestjs/common';
import { AmmAuth } from './auth';

@Controller('products')
export class ProductController {
  @Get()
  @AmmAuth() // Requires valid JWT + amajormusic.co.uk domain
  async getProducts() {
    return 'Only AMM users can see this';
  }
}
```

### Individual Guards
```typescript
import { Controller, Get, UseGuards } from '@nestjs/common';
import { Auth0JwtGuard, DomainAuthGuard } from './auth';

@Controller('products')
export class ProductController {
  @Get()
  @UseGuards(Auth0JwtGuard, DomainAuthGuard)
  async getProducts() {
    return 'Protected endpoint';
  }
}
```

### Skip Authentication (for webhooks, public endpoints)
```typescript
import { Controller, Post } from '@nestjs/common';
import { SkipJwtAuth } from './auth';

@Controller('webhooks')
export class WebhookController {
  @Post('shopify')
  @SkipJwtAuth() // Skips both JWT and domain validation
  async handleWebhook() {
    return 'Public webhook endpoint';
  }
}
```

### Skip Only Domain Check (authenticated but allow external domains)
```typescript
import { Controller, Get, UseGuards } from '@nestjs/common';
import { Auth0JwtGuard, SkipDomainAuth } from './auth';

@Controller('external')
export class ExternalController {
  @Get()
  @UseGuards(Auth0JwtGuard)
  @SkipDomainAuth() // Requires JWT but allows any email domain
  async getExternalData() {
    return 'JWT authenticated but domain unrestricted';
  }
}
```

## Configuration

### Environment Variables
- `AUTH0_DOMAIN`: Your Auth0 domain (required)
- `AUTH0_AUDIENCE`: Your Auth0 API audience (required)
- `ALLOWED_EMAIL_DOMAIN`: Email domain to restrict access to (default: `amajormusic.co.uk`)

### Global Guards
The guards are automatically applied globally in `main.ts`:
```typescript
app.useGlobalGuards(auth0Guard, domainGuard);
```

## Error Responses

### JWT Validation Errors
- `401 Unauthorized`: Invalid or missing JWT token
- `401 Unauthorized`: Token signature validation failed

### Domain Authorization Errors
- `403 Forbidden`: User email not from allowed domain
- `403 Forbidden`: Missing email in JWT payload
- `403 Forbidden`: Invalid email format

## Security Features

- ✅ JWT signature validation using Auth0's public keys
- ✅ Domain-based access control
- ✅ Configurable allowed domains
- ✅ Webhook endpoint exceptions
- ✅ Flexible decorator system
- ✅ Proper error handling and messages