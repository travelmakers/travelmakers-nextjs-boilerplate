import { useQuery } from '@tanstack/react-query';

import { fetchMain, fetchMainKey } from '../domain/main';

/**
 * ANCHOR: MAIN API fetch
 * @param
 * @returns
 */
export const useFetchMain = () =>
  useQuery(fetchMainKey, async () => {
    const result = await fetchMain();
    return result;
  });
