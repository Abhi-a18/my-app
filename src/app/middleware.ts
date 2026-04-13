import { NextResponse } from "next/server"; 
import type { NextRequest } from "next/server";
 export function middleware(request: NextRequest) {
   const cookieValue = request.cookies.get("user")?.value; let user = null; 
   if (cookieValue) { 
    try { user = JSON.parse(decodeURIComponent(cookieValue));

     } catch { user = null; } } const { pathname } = request.nextUrl; 
     if (!user && pathname !== "/login") { 
      return NextResponse.redirect(new URL("/login", request.url));
     } if (user) { 
      if (pathname.startsWith("/admin") && user.role !== "admin") {
         return NextResponse.redirect(new URL("/user/dashboard", request.url)); 
        } if (pathname === "/login") {
           if (user.role === "admin") { 
            return NextResponse.redirect(new URL("/admin/user", request.url)); 
          } else { return NextResponse.redirect(new URL("/user/dashboard", request.url)); 
            
          } } } return NextResponse.next(); }