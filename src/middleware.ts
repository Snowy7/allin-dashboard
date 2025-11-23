import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'
import createMiddleware from 'next-intl/middleware';
import {routing} from './i18n/routing';

const intlMiddleware = createMiddleware(routing);

export function middleware(request: NextRequest) {
  // 1. Run next-intl middleware first to handle locale redirection
  const response = intlMiddleware(request);

  // 2. Check if the request is for a dashboard page
  // Note: We need to check for localized dashboard paths too, e.g., /en/dashboard
  const pathname = request.nextUrl.pathname;
  const isDashboard = pathname.includes('/dashboard');

  if (isDashboard) {
    // Check for authentication (temporary implementation)
    // In production, verify Supabase session
    const isAuthenticated = request.cookies.get('isAuthenticated')?.value === 'true'
    
    if (!isAuthenticated) {
      // Redirect to login page, preserving locale if possible or defaulting to en
      // For simplicity, we'll just redirect to /en/login or /ar/login based on current locale
      // But since we are in middleware, we might need to extract locale from path
      const locale = pathname.split('/')[1] || 'en';
      if (routing.locales.includes(locale as any)) {
         return NextResponse.redirect(new URL(`/${locale}/login`, request.url));
      }
      return NextResponse.redirect(new URL('/en/login', request.url))
    }
  }

  return response;
}

export const config = {
  // Match only internationalized pathnames
  matcher: ['/', '/(ar|en)/:path*']
};
