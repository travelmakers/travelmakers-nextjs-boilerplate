'use client';
import { Suspense } from 'react';

import { queryFetchMainCharacter2 } from '@/api/queries/main';
import { useQuery, useSuspenseQuery } from '@tanstack/react-query';

const MyComponent = () => {
  const { data } = useSuspenseQuery({
    ...queryFetchMainCharacter2(),
  });

  return <div>result: {JSON.stringify(data)}</div>;
};

const MyPage = () => {
  const { data } = useQuery({
    ...queryFetchMainCharacter2(),
  });

  return (
    <>
      {JSON.stringify(data)}
      <Suspense fallback={<div>waiting 100....</div>}>
        <MyComponent />
      </Suspense>
    </>
  );
};

export default MyPage;
