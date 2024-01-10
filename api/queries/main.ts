import { fetchMainCharacter } from '@/api/domains/main';
import { useQuery, useSuspenseQuery } from '@tanstack/react-query';

/**
 * ANCHOR: MAIN API fetch
 * @param
 * @returns
 */
export const useFetchMainCharacter = () =>
  useQuery({
    queryKey: ['fetchMainCharacter'],
    queryFn: async () => {
      const result = await fetchMainCharacter();
      return result;
    },
  });

export const useSuspenseFetchMainCharacter = () =>
  useSuspenseQuery({
    queryKey: ['fetchMainCharacter'],
    queryFn: async () => {
      const result = await fetchMainCharacter();
      return result;
    },
  });
