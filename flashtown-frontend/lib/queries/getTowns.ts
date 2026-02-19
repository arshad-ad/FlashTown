import { supabase } from "@/lib/supabase/client";

export async function getTowns(): Promise<string[]> {
  const { data, error } = await supabase
    .from("shops")
    .select("town");

  if (error) {
    console.error("getTowns error:", error.message);
    return [];
  }

  return [...new Set((data ?? []).map((s) => s.town).filter(Boolean))];
}
