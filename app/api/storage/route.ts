import { createClient } from "@supabase/supabase-js";
import { NextRequest, NextResponse } from "next/server";

// Create a single supabase client for interacting with your database
const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.NEXT_PUBLIC_SUPABASE_KEY!
);

export async function GET(req: NextRequest, res: NextResponse) {
  const { data } = await supabase.storage.from('media').getPublicUrl('/post1.jpg')


  // if (error) {
  //   console.log(error);
  //   return new NextResponse("Internal error", { status: 500 });
  // }

  return NextResponse.json(data);
}
