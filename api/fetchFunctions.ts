import { fetchMovies } from './fetch';

const basicFetch = async (endpoint: string) => {
  const response = await fetch(endpoint);

  if (!response.ok) throw new Error('Error!');

  const data = await response.json();

  return data;
};

export { basicFetch, fetchMovies };
