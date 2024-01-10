'use client';

import { useSession } from 'next-auth/react';

export function getUserClientSession() {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const { data, status } = useSession();
  const session = data;

  return {
    session,
    status,
  };
}
