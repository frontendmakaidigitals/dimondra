import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function middleware(request: NextRequest) {
  const token = request.cookies.get("admin-auth")?.value;
  const pathname = request.nextUrl.pathname;

  const isDashboardRoute = pathname.startsWith("/dashboard");
  const isLoginPage = pathname === "/dashboard/login";

  // 🔐 Redirect to login only if it's a dashboard route AND NOT the login page
  if (!token && isDashboardRoute && !isLoginPage) {
    return NextResponse.redirect(new URL("/dashboard/login", request.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/dashboard/:path*"],
};
