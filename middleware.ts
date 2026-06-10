import createMiddleware from 'next-intl/middleware';
import { routing } from '@/i18n/routing';
import { NextRequest, NextResponse } from 'next/server';

const intlMiddleware = createMiddleware(routing);

const locales = ['en', 'pt','es'];

export default function middleware(req: NextRequest) {
  const pathname = req.nextUrl.pathname;
  const hasLocale = locales.some(locale => pathname.startsWith(`/${locale}`));

  if (!hasLocale) {
    const cookieLocale = req.cookies.get('NEXT_LOCALE')?.value;
    const locale = cookieLocale && locales.includes(cookieLocale) 
      ? cookieLocale 
      : 'en';
    return NextResponse.redirect(new URL(`/${locale}${pathname}`, req.url));
  }

  const response = intlMiddleware(req);
  const currentLocale = locales.find(l => pathname.startsWith(`/${l}`));
  if (currentLocale) {
    response.cookies.set('NEXT_LOCALE', currentLocale, { 
      maxAge: 60 * 60 * 24 * 365 
    });
  }

  return response;
}

export const config = {
  matcher: '/((?!api|trpc|_next|_vercel|.*\\..*).*)'
};