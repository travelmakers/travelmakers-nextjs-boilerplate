import {
  AUTHENTICATED_PATH,
  NON_AUTHENTICATED_PATH,
} from '@/constants/pathname';
import type { NextRequest } from 'next/server';
import { NextResponse } from 'next/server';
import { getToken } from 'next-auth/jwt';

export async function middleware(req: NextRequest) {
  const session = await getToken({ req });
  const { pathname } = req.nextUrl;
  const redirectToHome = NextResponse.redirect(new URL('/', req.url));

  // If the user is on a path that requires authentication and doesn't have a session, redirect to home
  if (
    !session &&
    AUTHENTICATED_PATH.some((path) => pathname.startsWith(path))
  ) {
    return redirectToHome;
  }

  // If the user is on a path that should not be accessed by authenticated users and has a session, redirect to home
  if (
    session &&
    NON_AUTHENTICATED_PATH.some((path) => pathname.startsWith(path))
  ) {
    return redirectToHome;
  }

  // Continue with the response if none of the conditions above are met
  return NextResponse.next();
}

export const config = {
  matcher: '/((?!api|_next/static|_next/image|favicon.ico).*)',
};
