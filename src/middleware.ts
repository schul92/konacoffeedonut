import createMiddleware from 'next-intl/middleware';
import { NextResponse } from 'next/server';
import { auth } from './auth';
import { locales, defaultLocale } from './i18n';

const intlMiddleware = createMiddleware({
  // A list of all locales that are supported
  locales,

  // Used when no locale matches
  defaultLocale,

  // Always use a locale prefix
  localePrefix: 'always',
});

// `auth(...)` injects the session as `request.auth` so we can gate /admin.
export default auth((request) => {
  const { pathname } = request.nextUrl;

  // --- Admin area: NOT localized, gated by Google sign-in (email allowlist) ---
  if (pathname === '/admin' || pathname.startsWith('/admin/')) {
    const isLogin = pathname === '/admin/login';
    if (!request.auth && !isLogin) {
      const url = request.nextUrl.clone();
      url.pathname = '/admin/login';
      return NextResponse.redirect(url);
    }
    if (request.auth && isLogin) {
      const url = request.nextUrl.clone();
      url.pathname = '/admin';
      return NextResponse.redirect(url);
    }
    return NextResponse.next();
  }

  // Skip static files and API routes
  if (
    pathname.startsWith('/_next') ||
    pathname.startsWith('/api') ||
    pathname.includes('.') // static files like .svg, .png, .txt, etc.
  ) {
    return NextResponse.next();
  }

  // Force the bare root to the canonical default-locale URL with a permanent redirect.
  // This makes GSC's root-domain redirect signal explicit and avoids next-intl's temporary hop.
  if (pathname === '/') {
    const url = request.nextUrl.clone();
    url.pathname = `/${defaultLocale}`;
    return NextResponse.redirect(url, 308);
  }

  // Check if the pathname already has a locale prefix
  const pathnameHasLocale = locales.some(
    (locale) => pathname.startsWith(`/${locale}/`) || pathname === `/${locale}`
  );

  // If no locale prefix and it's a valid path, redirect to default locale version
  if (!pathnameHasLocale && pathname !== '/') {
    const url = request.nextUrl.clone();
    url.pathname = `/${defaultLocale}${pathname}`;
    return NextResponse.redirect(url, 308); // 308 = Permanent Redirect
  }

  return intlMiddleware(request);
});

export const config = {
  // Match all pathnames except static files
  matcher: ['/((?!_next|api|.*\\..*).*)'],
};
