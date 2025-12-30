import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'
import { AUTH_ROUTES, REDIRECT_ROUTES, isProtectedRoute } from '@/lib/routes'

export function middleware(request: NextRequest) {
    const token = request.cookies.get('auth_token')
    const { pathname } = request.nextUrl

    // 1. Protect Dashboard and Onboarding Routes
    if (isProtectedRoute(pathname) && !token) {
        return NextResponse.redirect(new URL(AUTH_ROUTES.login, request.url))
    }

    // 2. Redirect Authenticated Users away from Login
    if (pathname === AUTH_ROUTES.login && token) {
        return NextResponse.redirect(new URL(REDIRECT_ROUTES.afterLogin, request.url))
    }

    return NextResponse.next()
}

export const config = {
    matcher: [
        /*
         * Match all request paths except for the ones starting with:
         * - api (API routes)
         * - _next/static (static files)
         * - _next/image (image optimization files)
         * - favicon.ico (favicon file)
         * - assets (public assets)
         */
        '/((?!api|_next/static|_next/image|favicon.ico|assets).*)',
    ],
}
