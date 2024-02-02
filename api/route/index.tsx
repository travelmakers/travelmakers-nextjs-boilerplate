import type { ApiRouteKey, ApiRouteParams } from './types';

import { authRoute, mainRoute } from '@/api/route/route';

const getDomain = (key: ApiRouteKey) => key.split('.')[0];

export const apiRoute = <K extends ApiRouteKey>(params: ApiRouteParams<K>) => {
  const domain = getDomain(params.key);

  switch (domain) {
    case 'main':
      return mainRoute(params);
    case 'auth':
      return authRoute(params);
    default:
      throw new Error(`Invalid route key: ${params.key}`);
  }
};
