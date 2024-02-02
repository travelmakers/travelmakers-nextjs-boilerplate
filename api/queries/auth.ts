import { fetchAuthSession } from '@/api/domains/auth';
import { queryOptions } from '@tanstack/react-query';

/**
 * ANCHOR: AUTH API fetch
 * @param
 * @returns
 */
export const queryFetchAuthSession = () =>
  queryOptions({
    queryKey: ['fetchAuthSession'],
    queryFn: async () => {
      const result = await fetchAuthSession();
      return result;
    },
  });
