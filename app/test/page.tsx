'use client';
import { Suspense } from 'react';

import { useSuspenseQuery } from '@tanstack/react-query';

function getBaseURL() {
  return 'https://api.sampleapis.com';
}
const baseUrl = getBaseURL();
function useWaitQuery(props: { wait: number }) {
  const query = useSuspenseQuery({
    queryKey: ['wait', props.wait],
    queryFn: async () => {
      const path = `/codingresources/codingResources`;
      const url = baseUrl + path;

      const res: string = await (
        await fetch(url, {
          cache: 'no-store',
        })
      ).json();
      return res;
    },
  });

  return [query.data as string, query] as const;
}

const MyComponent = (props: { wait: number }) => {
  const [data] = useWaitQuery(props);

  return <div>result: {JSON.stringify(data)}</div>;
};

const MyPage = () => {
  return (
    <>
      <Suspense fallback={<div>waiting 100....</div>}>
        <MyComponent wait={100} />
      </Suspense>
    </>
  );
};

export default MyPage;
