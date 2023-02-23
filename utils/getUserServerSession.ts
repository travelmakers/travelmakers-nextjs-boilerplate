import { IUser } from '@/types/api.user';
import type { ISODateString } from 'next-auth';
import { headers } from 'next/headers';

export type Session = {
  user?: IUser;
  expires: ISODateString;
};

async function getSession(cookie: string): Promise<Session> {
  const response = await fetch('http://localhost:3000/api/auth/session', {
    headers: {
      cookie,
    },
  });

  const session = await response.json();

  return Object.keys(session).length > 0 ? session : null;
}

/**
 * Returned by `useSession`, `getSession`, returned by the `session` callback
 * and also the shape received as a prop on the `SessionProvider` React Context
 *
 * [`useSession`](https://next-auth.js.org/getting-started/client#usesession) |
 * [`getSession`](https://next-auth.js.org/getting-started/client#getsession) |
 * [`SessionProvider`](https://next-auth.js.org/getting-started/client#sessionprovider) |
 * [`session` callback](https://next-auth.js.org/configuration/callbacks#jwt-callback)
 */
export async function getUserServerSession(): Promise<Session | null> {
  // TODO: getServerSession 사용? unstable_getServerSession 사용?
  const session = await getSession(headers().get('cookie') ?? '');
  return session;
}
