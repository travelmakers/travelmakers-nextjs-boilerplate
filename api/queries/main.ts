import { fetchMainCharacter } from '@/api/domains/main';
import { queryOptions } from '@tanstack/react-query';

/**
 * ANCHOR: MAIN API fetch
 * @param
 * @returns
 */
export const queryFetchMainCharacter = () =>
  queryOptions({
    queryKey: ['fetchMainCharacter'],
    queryFn: async () => {
      const result = await fetchMainCharacter();
      return result;
    },
  });

export const queryFetchMainCharacter2 = () =>
  queryOptions({
    queryKey: ['fetchMainCharacter2'],
    queryFn: async () => {
      const result = await fetchMainCharacter();
      return result;
    },
  });
