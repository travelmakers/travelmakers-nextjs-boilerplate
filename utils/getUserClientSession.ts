'use client';

import { UserSession } from '@/types/api.session';
import { useSession } from 'next-auth/react';

export function getUserClientSession(): {
  session: UserSession | null;
  status: 'authenticated' | 'loading' | 'unauthenticated';
} {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const { data, status } = useSession();
  // @ts-ignore
  const session: UserSession = data;

  return {
    session,
    status,
  };
}
