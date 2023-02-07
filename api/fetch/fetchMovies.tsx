import { basicFetch } from '../fetchFunctions';
import { Movies } from '../types';

export const fetchMovies = async (search = '', page = 1): Promise<Movies> => {
  const result = await basicFetch(`/api/movies?search=${search}&page=${page}`);
  return result;
};
