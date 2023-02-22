import { useQuery } from 'react-query';

// Fetch function
import { fetchMain } from '../domain/travelmakers';

// Types

/**
 * ANCHOR: MAIN API fetch
 * @param search
 * @returns
 */
export const useFetchMain = () =>
  useQuery(['main', '-'], async () => {
    const result = await fetchMain();
    return result;
  });
