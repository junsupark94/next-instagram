import { NextRequest, NextResponse } from "next/server";

export function middleware(req: NextRequest) {
  if (req.nextUrl.href === `${req.nextUrl.origin}/`) {
    return NextResponse.next();
  }

  if (req.nextUrl.pathname.startsWith('/_next')) {
    return NextResponse.next();
  }

  const auth = req.cookies.get('JUNSU-AUTH');
  if (!auth || auth.value !== 'some_secret') {
    return NextResponse.redirect(req.nextUrl.origin)
  }

  return NextResponse.next();
  // saving this code for the sign in logic
  // response.cookies.set('JUNSU-AUTH', 'some_secret')
}