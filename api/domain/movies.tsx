import { basicFetch, mutateFetch } from '../fetchFunctions';
import { Movies } from '../types';
import { MOVIES_URL } from '../urls/movies';

export const fetchMovies = async (search = '', page = 1): Promise<Movies> => {
  const result = await basicFetch<Movies>(
    `${MOVIES_URL}?search=${search}&page=${page}`
  );
  return result;
};

export const mutateMovies = async (
  method: 'post' | 'put' | 'patch' | 'delete',
  data?: Object
): Promise<Movies> => {
  const result = await mutateFetch(`${MOVIES_URL}`, method, data);
  return result;
};
