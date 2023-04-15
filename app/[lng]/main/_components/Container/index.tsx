'use client';

import { useFetchMain } from '@/api/hooks/main';
import { useTranslation } from '@/lib/i18n/client';
import { useRouter } from 'next/navigation';
import React, { useTransition } from 'react';

interface Props {
  params: {
    lng: string;
  };
}

const Container: React.FC<Props> = ({ params: { lng } }) => {
  const router = useRouter();
  const { data, isSuccess } = useFetchMain();
  const { t } = useTranslation(lng, 'common');

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

  if (!isSuccess) return null;

  return (
    <div>
      Container: {t('Korean')}
      <input type="checkbox" onChange={handleChange} disabled={isPending} />
      <br />
      <br />
      <div>curator: {JSON.stringify(data.is_curator)}</div>
    </div>
  );
};

export default Container;
