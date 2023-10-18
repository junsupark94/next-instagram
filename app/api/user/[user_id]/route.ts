import { db } from "@/lib/db";
import { NextRequest, NextResponse } from "next/server";

export async function PATCH(
  req: NextRequest,
  { params }: { params: { user_id: string } },
) {
  try {
    const body = await req.json();

    const response = await db.user.update({
      where: {
        id: params.user_id
      },
      data: {
        profile_picture_url: body.profile_picture_url
      }
    })

    return NextResponse.json(response);
  } catch (error) {
    console.log("[USER_ID_PATCH]", error);
    return new NextResponse("Internal error", { status: 500 });
  }
}

export async function POST(
  req: NextRequest,
  { params } : { params: { user_id: string}}
) {
  try {
    const {profile_name, bio} = await req.json();

    const response = await db.user.update({
      where: {
        id: params.user_id
      },
      data: {
        profile_name,
        bio
      }
    })

    return NextResponse.json(response);
  } catch (error) {
    console.log('[POST_ID_POST]', error);
    return new NextResponse("Internal error", { status: 500 })
  }
}
