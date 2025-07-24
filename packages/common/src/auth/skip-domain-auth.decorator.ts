import { SetMetadata } from '@nestjs/common';

export const SKIP_DOMAIN_AUTH_KEY = 'skipDomainAuth';
export const SkipDomainAuth = () => SetMetadata(SKIP_DOMAIN_AUTH_KEY, true);