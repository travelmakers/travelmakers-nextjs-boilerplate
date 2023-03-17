import { IUser } from '@/types/api.user';
import { ISODateString, getServerSession } from 'next-auth';
import { authOptions } from 'pages/api/auth/[...nextauth]';

export type Session = {
  user?: IUser;
  expires: ISODateString;
};

async function getSession() {
  const session = await getServerSession(authOptions);

  try {
    return session;
  } catch (error) {
    return null;
  }
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
export async function getUserServerSession() {
  // TODO: getServerSession 사용? unstable_getServerSession 사용?
  const session = await getSession();
  return session;
}
