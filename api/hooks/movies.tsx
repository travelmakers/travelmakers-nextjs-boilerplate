import { useInfiniteQuery, useMutation, useQuery } from 'react-query';

// Fetch function
import { fetchMovies, mutateMovies } from '../domain/movies';
// Types
import { Movies } from '../types';

/**
 * ANCHOR: MOVIE API fetch
 * @param search
 * @returns
 */
export const useFetchMovies = (search?: string) =>
  useQuery(['movies', search], async () => {
    const result = await fetchMovies(search);
    return result;
  });

export const useFetchInfiniteMovies = (search: string) =>
  useInfiniteQuery(
    ['movies-infinite', search],
    ({ pageParam = 1 }) => fetchMovies(search, pageParam),
    {
      getNextPageParam: (lastPage: Movies) => {
        // NOTE: 실제 infinite 호출시 사용해야할 로직
        // if (lastPage.page < lastPage.total_pages) {
        //   return lastPage.page + 1;
        // }

        // NOTE: delete code
        if (lastPage) {
          return 1;
        }

        return undefined;
      },
      refetchOnWindowFocus: false,
    }
  );

export const useMutationMovies = (
  method: 'post' | 'put' | 'patch' | 'delete' = 'post'
) =>
  useMutation(async (data?: Object) => {
    mutateMovies(method, data);
  });
