import type { ApiRouteParamsWithSearchParams } from '@/api/route/types/index';

export type AuthKeys = 'auth.session';

export type AuthApiRouteKey = AuthKeys;

export type AuthApiRouteParams<K extends AuthApiRouteKey> =
  K extends 'auth.session'
    ? ApiRouteParamsWithSearchParams<K, undefined>
    : never;
