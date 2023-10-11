import { supabase } from "@/lib/db";
import { NextRequest, NextResponse } from "next/server";

// Create a single supabase client for interacting with your database


export async function GET(req: NextRequest) {
  const { data } = supabase.storage.from('media').getPublicUrl('test.jpg')

  // if (error) {
  //   console.log(error);
  //   return new NextResponse("Internal error", { status: 500 });
  // }

  return NextResponse.json(data);
}
