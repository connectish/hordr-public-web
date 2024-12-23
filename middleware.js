import { NextResponse } from 'next/server'

export function middleware(request) {
  const { pathname } = request.nextUrl

  // Allow Next.js internals, static files, and API routes
  if (
    pathname.startsWith('/_next') ||  // Next.js files
    pathname.startsWith('/api') ||    // API routes
    pathname.includes('.')            // Static files (.png, .jpg, etc.)
  ) {
    return NextResponse.next()
  }

  // Redirect everything else (404) to landing page
  return NextResponse.redirect(new URL('/', request.url))
}
