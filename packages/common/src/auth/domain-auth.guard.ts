import { Injectable, CanActivate, ExecutionContext, ForbiddenException, UnauthorizedException } from '@nestjs/common';
import { Reflector } from '@nestjs/core';
import { ConfigService } from '@nestjs/config';
import { SKIP_JWT_AUTH_KEY } from './skip-jwt-auth.decorator';
import { SKIP_DOMAIN_AUTH_KEY } from './skip-domain-auth.decorator';

@Injectable()
export class DomainAuthGuard implements CanActivate {
  private readonly allowedDomain: string;

  constructor(
    private readonly reflector: Reflector,
    private readonly configService: ConfigService,
  ) {
    // Allow configuration via environment variable, default to amajormusic.co.uk
    this.allowedDomain = this.configService.get('ALLOWED_EMAIL_DOMAIN') || 'amajormusic.co.uk';
  }

  canActivate(context: ExecutionContext): boolean {
    // Check if JWT auth is skipped (domain auth should also be skipped for webhooks, etc.)
    const skipJwtAuth = this.reflector.getAllAndOverride<boolean>(SKIP_JWT_AUTH_KEY, [
      context.getHandler(),
      context.getClass(),
    ]);

    // Check if domain auth is specifically skipped
    const skipDomainAuth = this.reflector.getAllAndOverride<boolean>(SKIP_DOMAIN_AUTH_KEY, [
      context.getHandler(),
      context.getClass(),
    ]);

    if (skipJwtAuth || skipDomainAuth) {
      return true;
    }

    const request = context.switchToHttp().getRequest();
    const user = request.user;

    // User should be set by the Auth0JwtGuard that runs before this guard
    if (!user) {
      throw new UnauthorizedException('User not authenticated');
    }

    // Check if user has an email field
    if (!user.email) {
      throw new ForbiddenException('User email not found in token');
    }

    // Extract domain from email
    const email = user.email.toLowerCase();
    const emailDomain = email.split('@')[1];

    if (!emailDomain) {
      throw new ForbiddenException('Invalid email format');
    }

    // Check if email domain matches allowed domain
    if (emailDomain !== this.allowedDomain.toLowerCase()) {
      throw new ForbiddenException(`Access restricted to ${this.allowedDomain} domain users only`);
    }

    return true;
  }
}