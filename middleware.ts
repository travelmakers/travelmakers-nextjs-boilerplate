import { NextResponse } from 'next/server';

export function middleware(request: Request) {
  // Check if a user has access...
  // if (!isAuthorized(request)) {
  //   return NextResponse.json({ message: 'Unauthorized' });
  // }

  // Add a new header, this will change the incoming request headers
  // that you can read in getServerSideProps and API routes
  const requestHeaders = new Headers(request.headers);
  requestHeaders.set('x-version', '13.1');

  return NextResponse.next({
    request: {
      // Apply new request headers
      headers: requestHeaders,
    },
  });
}
