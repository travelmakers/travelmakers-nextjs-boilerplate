import type { ISODateString } from 'next-auth';
import { getServerSession } from 'next-auth/next';

export type Session = {
  user?: {
    name?: string | null;
    email?: string | null;
    image?: string | null;
  };
  expires: ISODateString;
};

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
  const session = await getServerSession();
  return session;
}
