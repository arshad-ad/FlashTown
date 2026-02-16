import { createSupabaseClient } from "@/lib/supabase/client";

export async function getCategories() {
  const supabase = createSupabaseClient();

  const { data: shops, error } = await supabase
    .from("shops")
    .select("category")
    .not("category", "is", null);

  if (error) {
    console.error("Error fetching categories:", error);
    return [];
  }

  // distinct categories
  const categoryNames = Array.from(
    new Set((shops ?? []).map((s) => s.category).filter(Boolean))
  );

  return categoryNames.map((cat) => ({
    slug: cat.toLowerCase().replace(/\s+/g, "-"),
    name: cat,
  }));
}
