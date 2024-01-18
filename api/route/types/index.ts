import type {
  MainApiRouteKey,
  MainApiRouteParams,
  MainKeys,
} from '@/api/route/types/main';

export type ApiRouteKey = MainKeys;

export type ApiRouteParamsWithSearchParams<
  K extends ApiRouteKey,
  P extends object,
> = {
  key: K;
  searchParams: P;
};

export type ApiRouteParamsWithoutSearchParams<K extends ApiRouteKey> = {
  key: K;
};

export type ApiRouteParams<K extends ApiRouteKey> = K extends MainApiRouteKey
  ? MainApiRouteParams<K>
  : ApiRouteParamsWithoutSearchParams<K>;

export type URLParams = {
  [key: string]: string | number | boolean | null | undefined;
};
