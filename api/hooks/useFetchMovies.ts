import { useInfiniteQuery, useQuery } from 'react-query';

import { fetchMovies } from '../fetch';
import { Movies } from '../types';

export const useFetchInfiniteMovies = (search: string) =>
  useInfiniteQuery(
    ['movies-infinite', search],
    ({ pageParam = 1 }) => fetchMovies(search, pageParam),
    {
      getNextPageParam: (lastPage: Movies) => {
        if (lastPage.page < lastPage.total_pages) {
          return lastPage.page + 1;
        }

        return undefined;
      },
    }
  );

export const useFetchMovies = (search: string) =>
  useQuery(['movies', search], () => fetchMovies(search));
