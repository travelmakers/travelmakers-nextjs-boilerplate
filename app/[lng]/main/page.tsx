import { fetchMain, fetchMainKey } from '@/api/domain/main';
import withHydration from '@/lib/react-query/withHydration';
import React from 'react';

import Container from './_components/Container';

interface Props {
  params: {
    lng: string;
  };
}

const Page = async ({ params }: Props) => {
  const HydratedContent = await withHydration(Container)([
    { key: fetchMainKey, func: fetchMain },
  ]);

  return <HydratedContent params={params} />;
};

export default Page;
