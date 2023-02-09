import { useMutation } from 'react-query';

import { mutateMovies } from '../fetch';

export const useMutationMovies = (
  method: 'post' | 'put' | 'patch' | 'delete' = 'post'
) =>
  useMutation(async (data?: Object) => {
    mutateMovies(method, data);
  });
