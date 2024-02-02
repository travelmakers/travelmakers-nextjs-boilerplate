import type { ApiRouteKey, ApiRouteParams, URLParams } from './types';

import { BASE_URL } from '@/api/config';

const removeNullAndUndefined = <T extends URLParams>(obj: T) => {
  const result: Partial<T> = {};
  for (const key in obj) {
    if (obj[key] !== null && obj[key] !== undefined) {
      result[key] = obj[key];
    }
  }

  return result;
};

const urlGenerator = (apiUrl: string, params?: URLParams) => {
  const url = new URL(`${BASE_URL}${apiUrl}`);

  if (params) {
    const urlParams = new URLSearchParams(
      removeNullAndUndefined(params) as Record<string, never>
    );
    url.search = urlParams.toString();
  }

  return url.toString();
};

export const mainRoute = <K extends ApiRouteKey>(params: ApiRouteParams<K>) => {
  switch (params.key) {
    case 'main.sections':
      return urlGenerator('/codingresources/codingResources');
    default:
      return '';
  }
};

export const authRoute = <K extends ApiRouteKey>(params: ApiRouteParams<K>) => {
  switch (params.key) {
    case 'auth.session':
      return '/api/auth/session';
    default:
      return '';
  }
};
