import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
export function middleware(request: NextRequest) {
  const token = request.cookies.get("admin-auth")?.value;
  const { pathname, origin } = request.nextUrl;

  if (!token) {
    const loginUrl = new URL("/login", origin);
    loginUrl.searchParams.set("next", pathname);
    return NextResponse.redirect(loginUrl);
  }

  return NextResponse.next();
}
