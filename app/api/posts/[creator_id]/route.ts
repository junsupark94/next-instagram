import { db } from "@/lib/db";
import { NextRequest, NextResponse } from "next/server";

export async function GET(
  req: NextRequest,
  { params }: { params: { creator_id: string } },
) {
  try {
    const { creator_id } = params;
    const pinnedPosts = await db.post.findMany({
      where: {
        pinned: true,
        creator_id,
      },
      include: {
        media: true,
      },
    });

    const posts = await db.post.findMany({
      where: {
        creator_id,
      },
      include: {
        media: true,
      },
      take: 3,
    });
    const returnPosts = [...pinnedPosts, ...posts].slice(0, 3);
    return NextResponse.json({ data: returnPosts });
  } catch (error) {
    console.log("[POSTS_GET]", error);
    return new NextResponse("Internal error", { status: 500 });
  }
}
