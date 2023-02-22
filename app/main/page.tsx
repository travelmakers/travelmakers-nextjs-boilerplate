import { fetchMain } from '@/api/domain/travelmakers';
import React from 'react';

import Container from './_components/Container';

const Page = async () => {
  const data = await fetchMain();

  return <Container data={data} />;
};

export default Page;
