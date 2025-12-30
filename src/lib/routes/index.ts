/**
 * Application Routes Configuration
 * Central location for all route definitions
 */

/**
 * Authentication Routes
 * Routes for login, signup, password recovery, etc.
 */
export const AUTH_ROUTES = {
    login: "/",
    createOrg: "/create-org",
} as const;

/**
 * Main Application Routes
 * Primary app routes after authentication
 */
export const MAIN_APP_ROUTES = {
    dashboard: "/dashboard",
    landing: "/landing",
} as const;

/**
 * API Routes
 * Internal API endpoints
 */
export const API_ROUTES = {
    auth: {
        nonce: "/api/auth/nonce",
        verify: "/api/auth/verify",
    },
} as const;

/**
 * Public Routes
 * Routes accessible without authentication
 */
export const PUBLIC_ROUTES = [
    AUTH_ROUTES.login,
    MAIN_APP_ROUTES.landing,
    "/terms",
    "/privacy",
] as const;

/**
 * Protected Routes
 * Routes that require authentication
 */
export const PROTECTED_ROUTES = [
    MAIN_APP_ROUTES.dashboard,
    AUTH_ROUTES.createOrg,
] as const;

/**
 * Redirect Routes
 * Default redirect routes for different scenarios
 */
export const REDIRECT_ROUTES = {
    afterLogin: MAIN_APP_ROUTES.dashboard,
    afterLogout: AUTH_ROUTES.login,
} as const;

/**
 * Helper function to check if a route is public
 */
export function isPublicRoute(pathname: string): boolean {
    return PUBLIC_ROUTES.some((route) => pathname === route || pathname.startsWith(route + "/"));
}

/**
 * Helper function to check if a route is protected
 */
export function isProtectedRoute(pathname: string): boolean {
    return PROTECTED_ROUTES.some((route) => pathname === route || pathname.startsWith(route + "/"));
}

/**
 * Type exports for type safety
 */
export type AuthRoute = (typeof AUTH_ROUTES)[keyof typeof AUTH_ROUTES];
export type MainAppRoute = (typeof MAIN_APP_ROUTES)[keyof typeof MAIN_APP_ROUTES];
export type PublicRoute = (typeof PUBLIC_ROUTES)[number];
export type ProtectedRoute = (typeof PROTECTED_ROUTES)[number];
