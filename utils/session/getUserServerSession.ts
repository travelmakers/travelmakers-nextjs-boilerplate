import { authOptions } from '@/pages/api/auth/[...nextauth]';
import { getServerSession } from 'next-auth';

async function getSession() {
  try {
    const session = await getServerSession(authOptions);

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
  const session = await getSession();
  return { session };
}
