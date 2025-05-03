// File: middleware.ts
import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

// Define paths that don't require authentication
const publicPaths = ["/sign-in", "/sign-up"];

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  // Check if the current path is in our public paths list
  const isPublicPath = publicPaths.some((path) => pathname.startsWith(path));

  // Get the session cookie
  const sessionCookie = request.cookies.get("session")?.value;
  const isAuthenticated = !!sessionCookie; // Simple check for cookie existence

  // CASE 1: User is NOT authenticated and tries to access protected route
  if (!isAuthenticated && !isPublicPath) {
    // Redirect to sign-in
    return NextResponse.redirect(new URL("/sign-in", request.url));
  }

  // CASE 2: User IS authenticated and tries to access sign-in
  if (isAuthenticated && isPublicPath) {
    // Redirect to home page
    return NextResponse.redirect(new URL("/", request.url));
  }

  // For all other cases, proceed normally
  return NextResponse.next();
}

// Configure which paths the middleware runs on
export const config = {
  matcher: ["/((?!api|_next/static|_next/image|favicon.ico).*)"],
};
