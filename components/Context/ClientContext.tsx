'use client';

import type { PropsWithChildren } from 'react';

import AuthContext from '@/components/Context/AuthContext';
import ReactQueryContext from '@/components/Context/ReactQueryContext';
import type { Session } from 'next-auth';

interface Props extends PropsWithChildren {
  session: Session | null;
}

const ClientContext: React.FC<Props> = async ({ session, children }) => {
  return (
    <AuthContext session={session}>
      <ReactQueryContext>{children}</ReactQueryContext>
    </AuthContext>
  );
};

export default ClientContext;
