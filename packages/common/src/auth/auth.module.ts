import { Module } from '@nestjs/common';
import { JwtModule } from '@nestjs/jwt';
import { ConfigModule } from '@nestjs/config';
import { Auth0JwtGuard } from './auth0-jwt.guard';
import { DomainAuthGuard } from './domain-auth.guard';

@Module({
  imports: [
    ConfigModule,
    JwtModule.register({
      // We don't need to specify secret here since we're validating with Auth0's public keys
    }),
  ],
  providers: [Auth0JwtGuard, DomainAuthGuard],
  exports: [Auth0JwtGuard, DomainAuthGuard],
})
export class AuthModule {}