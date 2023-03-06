import { fetchMypage } from '@/api/domain/travelmakers';
import { getUserServerSession } from '@/utils/getUserServerSession';
import { redirect } from 'next/navigation';
import React from 'react';

import Container from './_components/Container';

const Page = async () => {
  const data = await fetchMypage();
  const session = await getUserServerSession();
  if (!session) {
    redirect('/auth/login?callbackUrl=/mypage');
  }

  return <Container data={data} />;
};

export default Page;
