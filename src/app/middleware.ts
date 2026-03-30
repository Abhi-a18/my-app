import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function middleware(request: NextRequest) {
  const userCookie = request.cookies.get("user")?.value;
  const { pathname } = request.nextUrl;

  // If not logged in
  if (!userCookie && pathname !== "/login") {
    return NextResponse.redirect(new URL("/login", request.url));
  }

  if (userCookie) {
    const user = JSON.parse(userCookie);

    // Restrict admin routes
    if (pathname.startsWith("/admin") && user.role !== "admin") {
      return NextResponse.redirect(new URL("/user/dashboard", request.url));
    }

    // Prevent going to login again
    if (pathname === "/login") {
      return NextResponse.redirect(new URL("/user/dashboard", request.url));
    }
  }

  return NextResponse.next();
}