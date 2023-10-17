import { db } from "@/lib/db";
import { CommentType, commentSchema } from "@/lib/zod";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  try {
    const formData: CommentType = await req.json();
    const isValidData = commentSchema.safeParse(formData).success;
    if (!isValidData) {
      return new NextResponse("Invalid data", { status: 400 });
    }

    const response = await db.comment.create({
      data: formData,
      select: {
        user: {
          select: {
            username: true,
            profile_name: true,
            profile_picture_url: true,
          },
        },
        text: true,
        replies: true,
        id: true,
        created_at: true,
        replying_to_id: true,
      },
    });

    return NextResponse.json(response);
  } catch (error) {
    console.log("[COMMENTS_POST]", error);
    return new NextResponse("Internal error", { status: 500 });
  }
}
