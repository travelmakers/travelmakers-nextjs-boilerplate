'use client';

import { useFetchMovies } from '@/api/fetchHooks';
// import { useMutationMovies } from '@/api/mutateHooks';
import React from 'react';

const Home = () => {
  const { data } = useFetchMovies();
  // const { mutate } = useMutationMovies();
  const onClick = () => {
    // mutate({ test: '1' });
  };

  return (
    <div>
      Home
      <button type="button" onClick={onClick}>
        mutate
      </button>
      {JSON.stringify(data)}
    </div>
  );
};

export default Home;
