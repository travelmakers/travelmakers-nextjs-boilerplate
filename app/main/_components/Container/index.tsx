'use client';

import { IHotelInfo } from '@hotel/api';
import { useRouter } from 'next/navigation';
import React, { useTransition } from 'react';

interface Props {
  data: IHotelInfo;
}
const Container: React.FC<Props> = ({ data }) => {
  const router = useRouter();

  const [isPending, startTransition] = useTransition();

  async function handleChange() {
    // NOTE: Mutate external data source
    // await basicFetch(`https://api.example.com/todo/${id}`, {
    //   method: 'PUT',
    //   body: JSON.stringify({ completed: !completed }),
    // });

    startTransition(() => {
      // Refresh the current route and fetch new data from the server without
      // losing client-side browser or React state.
      router.refresh();
    });
  }

  return (
    <div>
      Container
      <input type="checkbox" onChange={handleChange} disabled={isPending} />
      <br />
      <br />
      <div>curator: {JSON.stringify(data.is_curator)}</div>
    </div>
  );
};

export default Container;
