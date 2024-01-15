'use client';
import { Suspense } from 'react';

import useMainCharacterViewModel from '@/app/test/hooks/useMainCharacterViewModel';

const MyComponent = () => {
  const { dataMainCharacter } = useMainCharacterViewModel();

  return <div>result: {JSON.stringify(dataMainCharacter)}</div>;
};

const MyPage = () => {
  return (
    <>
      <Suspense fallback={<div>waiting 100....</div>}>
        <MyComponent />
      </Suspense>
    </>
  );
};

export default MyPage;
