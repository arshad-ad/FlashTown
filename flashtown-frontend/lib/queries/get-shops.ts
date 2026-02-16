import { createServerSupabaseClient } from "@/lib/supabase/server";

export async function getShops() {
  const supabase = createServerSupabaseClient();

  const { data, error } = await supabase
    .from("shops")
    .select("*")
    .eq("verified", true);

  if (error) {
    console.error("Supabase error:", error);
    return [];
  }

  return data;
}
