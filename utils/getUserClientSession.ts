'use client';

import { useSession } from 'next-auth/react';

import { Session } from './getUserServerSession';

export function getUserClientSession(): {
  session: Session | null;
  status: 'authenticated' | 'loading' | 'unauthenticated';
} {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const { data: session, status } = useSession();
  return { session, status };
}
