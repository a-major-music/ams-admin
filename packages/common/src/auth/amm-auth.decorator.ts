import { applyDecorators, UseGuards } from '@nestjs/common';
import { Auth0JwtGuard } from './auth0-jwt.guard';
import { DomainAuthGuard } from './domain-auth.guard';

/**
 * Decorator that applies both JWT authentication and domain authorization
 * Ensures users are authenticated via Auth0 and belong to the amajormusic.co.uk domain
 * 
 * @example
 * ```typescript
 * @Controller('products')
 * export class ProductController {
 *   @Get()
 *   @AmmAuth() // Requires JWT token AND amajormusic.co.uk email domain
 *   async getProducts() {
 *     // Only authenticated amajormusic.co.uk users can access this
 *   }
 * }
 * ```
 */
export const AmmAuth = () => applyDecorators(
  UseGuards(Auth0JwtGuard, DomainAuthGuard)
);