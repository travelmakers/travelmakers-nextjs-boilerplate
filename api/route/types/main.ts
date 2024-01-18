import type { ApiRouteParamsWithSearchParams } from '@/api/route/types/index';

export type Subset<T, U extends T> = U;

export type MainKeys =
  | 'main.sections'
  | 'main.catalogs'
  | 'main.featureHotels'
  | 'main.faqs'
  | 'main.reviews';

export type MainApiRouteKey = Subset<MainKeys, 'main.sections'>;

export type MainApiRouteParams<K extends MainApiRouteKey> =
  K extends 'main.sections'
    ? ApiRouteParamsWithSearchParams<K, { index: number }>
    : never;
