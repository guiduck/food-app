import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

const publicRoutes = ["/login", "/register", "/landing"];

export function middleware(req: NextRequest) {
  const token = req.cookies.get("access_token")?.value;
  const isPublicRoute = publicRoutes.includes(req.nextUrl.pathname);

  if (!token && !isPublicRoute) {
    const url = req.nextUrl.clone();
    url.pathname = "/login";
    return NextResponse.redirect(url);
  }

  const isLandingpage = req.nextUrl.pathname === "/landing";

  if (token && isPublicRoute && !isLandingpage) {
    const url = req.nextUrl.clone();
    url.pathname = "/localizacao";
    return NextResponse.redirect(url);
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/((?!api|_next|favicon.ico).*)"],
};
