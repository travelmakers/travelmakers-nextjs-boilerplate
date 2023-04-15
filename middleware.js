/* eslint-disable no-unused-vars */
import { fallbackLng, languages } from '@/lib/i18n/defaultOptions';
import acceptLanguage from 'accept-language';
import { withAuth } from 'next-auth/middleware';
import { NextResponse } from 'next/server';

const isUserRoute = pathname => pathname.startsWith('/api/users');
const isAdminRoute = pathname => pathname.startsWith('/api/admin');
const LOGIN_PAGE = '/auth/login';

acceptLanguage.languages(languages);
const cookieName = 'i18next';

// NOTE: `withAuth` augments your `Request` with the user's token.
export default withAuth(
  function middleware(req) {
    // const role = req.headers.get('authorization');
    // if (isUserRoute(pathname) && !['user', 'admin'].includes(role))
    //   NextResponse.redirect(new URL(LOGIN_PAGE, req.url));
    // if (isAdminRoute(pathname) && role !== 'admin')
    //   NextResponse.redirect(new URL(LOGIN_PAGE, req.url));

    const { pathname, search } = req.nextUrl;
    const requestHeaders = new Headers(req.headers);
    requestHeaders.set('x-version', '13.2');

    // NOTE: i18n
    if (
      pathname.indexOf('icon') > -1 ||
      pathname.startsWith('/images') === true ||
      pathname.indexOf('chrome') > -1 ||
      pathname.indexOf('robots.txt') > -1 ||
      pathname.indexOf('sitemap.xml') > -1 ||
      pathname.indexOf('sitemap-index.xml') > -1
    )
      return NextResponse.next({
        request: {
          // Apply new request headers
          headers: requestHeaders,
        },
      });
    let lng;
    if (req.cookies.has(cookieName))
      lng = acceptLanguage.get(req.cookies.get(cookieName).value);
    if (!lng) lng = acceptLanguage.get(req.headers.get('Accept-Language'));
    if (!lng) lng = fallbackLng;

    // Redirect if lng in path is not supported
    if (
      !languages.some(loc => pathname.startsWith(`/${loc}`)) &&
      !pathname.startsWith('/_next')
    ) {
      return NextResponse.redirect(
        new URL(`/${lng}${pathname}${search}`, req.url)
      );
    }

    if (req.headers.has('referer')) {
      const refererUrl = new URL(req.headers.get('referer'));
      const lngInReferer = languages.find(l =>
        refererUrl.pathname.startsWith(`/${l}`)
      );
      const response = NextResponse.next({
        request: {
          // Apply new request headers
          headers: requestHeaders,
        },
      });
      if (lngInReferer) response.cookies.set(cookieName, lngInReferer);
      return response;
    }
    // NOTE: i18n-END

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
  // matcher: ['/((?!api|_next/static|_next/image|assets|favicon.ico|sw.js).*)'],
};
