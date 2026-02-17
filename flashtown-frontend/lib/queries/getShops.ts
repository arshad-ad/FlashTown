import { supabase } from "@/lib/supabase/client";

export async function getShops() {
  

  const { data: shops, error } = await supabase
    .from("shops")
    .select("*")
    .eq("verified", true)
    .order("created_at", { ascending: false });

  if (error) {
    console.error("Error fetching shops:", error);
    return [];
  }

  return (shops ?? []).map((shop) => ({
    ...shop,
    shop_id: shop.id,
    shop_name: shop.name,
    category: shop.category,
    area: shop.town,
    phone: shop.phone,
    shop_image_url: shop.logo_url,
  }));
}
