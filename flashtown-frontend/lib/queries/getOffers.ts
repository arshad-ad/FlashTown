import { createServerSupabaseClient } from "@/lib/supabase/server";

export async function getOffers(town?: string) {
  const supabase = createServerSupabaseClient();

  let query = supabase
    .from("offers")
    .select(`
      *,
      shops (
        id,
        name,
        slug,
        town,
        category,
        logo_url
      )
    `)
    .eq("status", "active");

  // optional town filter (for /[town] page later)
  if (town) {
    query = query.eq("shops.town", town);
  }

  const { data, error } = await query.order("created_at", { ascending: false });

  if (error) {
    console.error("Error fetching offers:", error);
    return [];
  }

  return data ?? [];
}
