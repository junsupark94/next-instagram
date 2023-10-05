import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest) {

  console.log('SIGNOUT-GET')
  try {
    const response = NextResponse.redirect(`${req.nextUrl.origin}/signin`);
    response.cookies.delete("JUNSU-AUTH");
    response.cookies.delete("INSTAGRAM-CLONE-TOKEN")
    return response;
  } catch (error) {
    console.log("[SIGNOUT_GET]", error);
    return new NextResponse("Internal Error", { status: 500})
  }
}