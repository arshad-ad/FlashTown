import { createServerSupabaseClient } from "@/lib/supabase/server";

export async function getShopDashboardData() {
    const supabase = createServerSupabaseClient();

    // 1. Get the latest shop (MVP logic: assumes user owns the latest shop)
    const { data: shop, error: shopError } = await supabase
        .from("shops")
        .select("*")
        .order("created_at", { ascending: false })
        .limit(1)
        .single();

    if (shopError || !shop) {
        if (shopError && shopError.code !== 'PGRST116') { // PGRST116 is "The result contains 0 rows"
            console.error("Error fetching shop:", shopError);
        }
        return { shop: null, offers: [] };
    }

    // 2. Get offers for this shop
    const { data: offers, error: offersError } = await supabase
        .from("offers")
        .select("*")
        .eq("shop_id", shop.id)
        .order("created_at", { ascending: false });

    if (offersError) {
        console.error("Error fetching offers:", offersError);
        return { shop, offers: [] };
    }

    return { shop, offers: offers ?? [] };
}
