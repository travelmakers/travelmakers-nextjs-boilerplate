'use client';

import { useFetchMovies, useMutationMovies } from '@/api/hooks/movies';
import React from 'react';

const Home = () => {
  const { data } = useFetchMovies();
  const { mutate } = useMutationMovies();
  const onClick = () => {
    mutate({ test: '1' });
  };

  return (
    <div>
      Home
      <button type="button" onClick={onClick}>
        mutate
      </button>
      <ul>
        {data?.map(item => (
          <li key={item.id.toString()}>{item.title}</li>
        ))}
      </ul>
    </div>
  );
};

export default Home;
