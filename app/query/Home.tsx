'use client';

import { useFetchMovies } from '@/api/fetchHooks';
import React from 'react';

const Home = () => {
  const { data } = useFetchMovies('');
  return (
    <div>
      Home
      {JSON.stringify(data)}
    </div>
  );
};

export default Home;
