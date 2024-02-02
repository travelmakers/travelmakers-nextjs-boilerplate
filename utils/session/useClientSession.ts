'use client';

import { useSession } from 'next-auth/react';

export const useClientSession = () => {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const { data, status, update } = useSession();
  const session = data;

  return {
    session,
    status,
    update,
  };
};
