import { withAuth } from 'next-auth/middleware';
import { NextResponse } from 'next/server';

const isUserRoute = pathname => pathname.startsWith('/api/users');
const isAdminRoute = pathname => pathname.startsWith('/api/admin');
const LOGIN_PAGE = '/auth/login';

// NOTE: `withAuth` augments your `Request` with the user's token.
export default withAuth(
  function middleware(req) {
    const role = req.headers.get('authorization');
    const { pathname } = req.nextUrl;
    if (isUserRoute(pathname) && !['user', 'admin'].includes(role))
      NextResponse.redirect(new URL(LOGIN_PAGE, req.url));

    if (isAdminRoute(pathname) && role !== 'admin')
      NextResponse.redirect(new URL(LOGIN_PAGE, req.url));

    // Add a new header, this will change the incoming request headers
    // that you can read in getServerSideProps and API routes
    const requestHeaders = new Headers(req.headers);
    requestHeaders.set('x-version', '13.1');

    return NextResponse.next({
      request: {
        // Apply new request headers
        headers: requestHeaders,
      },
    });
  },
  {
    callbacks: {
      authorized: () =>
        // This is a work-around for handling redirect on auth pages.
        // We return true here so that the middleware function above
        // is always called.
        true,
    },
  }
);

// NOTE: Limit the middleware to paths starting with `/api/`
export const config = {
  matcher: [
    // Skip all internal paths (_next)
    '/((?!_next).*)',
    // Optional: only run on root (/api) URL
    '/api/:path*',
  ],
};
