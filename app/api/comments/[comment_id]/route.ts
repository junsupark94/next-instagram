import { db } from "@/lib/db";
import { NextRequest, NextResponse } from "next/server";

export async function PATCH(
  req: NextRequest,
  { params }: { params: { comment_id: string } },
) {
  try {
    const {comment_id} = params;
    const { user_id, liked } = await req.json();

    const response = await db.commentInteraction.upsert({
      where: {
        comment_id_user_id: {
          comment_id,
          user_id,
        },
      },
      create: {
        liked,
        user_id,
        comment_id
      },
      update: {
        liked,
        user_id,
        comment_id
      }
    });

    return NextResponse.json(response);

  } catch (error) {
    console.log("[COMMENT_ID_PATCH]", error);
    return new NextResponse("Internal error", {status: 500})
  }

  return NextResponse.json({ message: "hi" });
}
