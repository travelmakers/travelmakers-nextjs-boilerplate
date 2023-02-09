// import { isAuthorized } from '@/lib/auth';
import { withAuth } from 'next-auth/middleware';
import { NextResponse } from 'next/server';

// const legacyPrefixes = ['/docs', '/blog'];

export default withAuth(
  // `withAuth` augments your `Request` with the user's token.
  function middleware(req) {
    // Check if a user has access...
    // if (
    //   !isAuthorized(request) &&
    //   legacyPrefixes.some(prefix => request.url.startsWith(prefix))
    // ) {
    //   return NextResponse.json({ message: 'Unauthorized' });
    // }

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
      authorized: ({ token }) => token?.role === 'admin',
    },
  }
);

export const config = { matcher: ['/admin'] };
