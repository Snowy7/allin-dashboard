import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

export function middleware(request: NextRequest) {
  // Check if the request is for a dashboard page
  if (request.nextUrl.pathname.startsWith('/dashboard')) {
    // Check for authentication (temporary implementation)
    // In production, verify Supabase session
    const isAuthenticated = request.cookies.get('isAuthenticated')?.value === 'true'
    
    if (!isAuthenticated) {
      // Redirect to login page
      return NextResponse.redirect(new URL('/login', request.url))
    }
  }

  return NextResponse.next()
}

export const config = {
  matcher: '/dashboard/:path*',
}
