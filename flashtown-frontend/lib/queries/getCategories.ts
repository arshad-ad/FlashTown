import { supabase } from "@/lib/supabase/client";

export async function getCategories() {
  const { data: shops, error } = await supabase
    .from("shops")
    .select("category")
    .not("category", "is", null);

  if (error) {
    console.error("Error fetching categories:", error);
    return [];
  }

  const unique = Array.from(
    new Set((shops ?? []).map((s: any) => s.category).filter(Boolean))
  );

  return unique.map((cat) => ({
    slug: cat,
    name: cat,
  }));
}
