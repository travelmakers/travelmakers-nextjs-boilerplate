'use client';

import type { Session } from 'next-auth';
import { SessionProvider } from 'next-auth/react';

export interface AuthContextProps {
  children: React.ReactNode;
  session: Session | null;
}

const AuthContext = ({ children, session }: AuthContextProps) => (
  <SessionProvider session={session}>{children}</SessionProvider>
);

export default AuthContext;
