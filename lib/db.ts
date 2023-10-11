import { PrismaClient } from "@prisma/client";
import { SupabaseClient, createClient } from "@supabase/supabase-js";

declare global {
  var prisma: PrismaClient | undefined;
  var supabase: SupabaseClient | undefined;
}

export const db = globalThis.prisma || new PrismaClient();
export const supabase =
  globalThis.supabase ||
  createClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_KEY!,
  );

if (process.env.NODE_ENV !== "production") {
  globalThis.prisma = db;
  globalThis.supabase = supabase;
}
