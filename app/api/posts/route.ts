import { db } from "@/lib/db";
import { postSchema, PostType } from "@/lib/zod";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  try {
    const data: PostType = await req.json();
    const isValidData = postSchema.safeParse(data).success;
    if (!isValidData) {
      return new NextResponse("Invalid data", { status: 400 });
    }

    const existingUser = await db.user.findUnique({
      where: {
        id: data.creator_id,
      },
    });

    if (!existingUser) {
      return new NextResponse("Internal error", { status: 500 });
    }

    const {
      creator_id,
      description,
      hide_comments,
      hide_stats,
      media,
      location_name,
    } = data;

    const response = await db.post.create({
      data: {
        hide_stats,
        hide_comments,
        creator_id,
        description,
        location_name,
        media: {
          createMany: {
            data: media.map(({ position, src, type, uuid, alt_text }) => ({
              src,
              type,
              id: uuid,
              alt_text,
              position,
              user_id: creator_id,
            })),
          },
        },
      },
    });

    return NextResponse.redirect(`${req.nextUrl.origin}/p/${response.id}`)
  } catch (error) {
    console.log("[POSTS_POST]", error);
    return new NextResponse("Internal error", { status: 500 });
  }
}
