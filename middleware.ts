import { NextRequest, NextResponse } from "next/server";

const regex = /\.(jpg|jpeg|png|gif|bmp|tiff|webp|svg|mp4|avi|mkv|mov|wmv|flv|3gp|mpg|mpeg|webm|ogg|ogv|mp3|wav|flac|aac|wma|wmv|mkv)$/i;


export function middleware(req: NextRequest) {

  if (req.nextUrl.href === `${req.nextUrl.origin}/`) {
    return NextResponse.next();
  }

  if (req.nextUrl.pathname.startsWith('/_next')) {
    return NextResponse.next();
  }

  const isMediaRequest = req.nextUrl.pathname.match(regex);

  if (isMediaRequest) {
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