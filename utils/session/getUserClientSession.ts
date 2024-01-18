'use client';

import { getSession, useSession } from 'next-auth/react';

export async function getUserClientSession() {
  const session = await getSession();
  return { session };
}

export const useClientSession = () => {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const { data, status } = useSession();
  const session = data;

  return {
    session,
    status,
  };
};
