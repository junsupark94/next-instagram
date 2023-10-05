import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest) {
  try {
    const response = new NextResponse();
    response.cookies.delete("JUNSU-AUTH");
    response.cookies.delete("INSTAGRAM-CLONE-TOKEN")
    return response;
  } catch (error) {
    console.log("[SIGNOUT_GET]", error);
    return new NextResponse("Internal Error", { status: 500})
  }
}