import { Injectable, CanActivate, ExecutionContext, UnauthorizedException } from '@nestjs/common';
import { Reflector } from '@nestjs/core';
import { JwtService } from '@nestjs/jwt';
import { ConfigService } from '@nestjs/config';
import * as jwksRsa from 'jwks-rsa';
import { promisify } from 'util';
import { SKIP_JWT_AUTH_KEY } from './skip-jwt-auth.decorator';

@Injectable()
export class Auth0JwtGuard implements CanActivate {
  private jwksClient: jwksRsa.JwksClient;

  constructor(
    private readonly jwtService: JwtService,
    private readonly configService: ConfigService,
    private readonly reflector: Reflector,
  ) {
    this.jwksClient = jwksRsa({
      cache: true,
      rateLimit: true,
      jwksRequestsPerMinute: 5,
      jwksUri: `https://${this.configService.get('AUTH0_DOMAIN')}/.well-known/jwks.json`,
    });
  }

  async canActivate(context: ExecutionContext): Promise<boolean> {
    // Check if JWT auth should be skipped for this endpoint
    const skipJwtAuth = this.reflector.getAllAndOverride<boolean>(SKIP_JWT_AUTH_KEY, [
      context.getHandler(),
      context.getClass(),
    ]);

    if (skipJwtAuth) {
      return true;
    }

    const request = context.switchToHttp().getRequest();
    const authHeader = request.headers.authorization;

    if (!authHeader || !authHeader.startsWith('Bearer ')) {
      throw new UnauthorizedException('No valid authorization header found');
    }

    const token = authHeader.substring(7);

    try {
      // Decode the token to get the header
      const decoded = this.jwtService.decode(token, { complete: true }) as any;
      if (!decoded || !decoded.header || !decoded.header.kid) {
        throw new UnauthorizedException('Invalid token format');
      }

      // Get the signing key
      const getSigningKey = promisify(this.jwksClient.getSigningKey);
      const key = await getSigningKey(decoded.header.kid);
      const signingKey = key.getPublicKey();

      // Verify the token
      const payload = this.jwtService.verify(token, {
        algorithms: ['RS256'],
        audience: this.configService.get('AUTH0_AUDIENCE'),
        issuer: `https://${this.configService.get('AUTH0_DOMAIN')}/`,
        publicKey: signingKey,
      });

      // Add user info to request
      request.user = payload;
      return true;
    } catch (error) {
      throw new UnauthorizedException('Invalid token');
    }
  }
}