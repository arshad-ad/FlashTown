import { createSupabaseClient } from '@/lib/supabase/client'

/**
//  * Fetches offers from the database.
 * @param shopId Optional shop ID to filter by specific shop.
 */
export async function getOffers(shopId?: string) {

  const supabase = createSupabaseClient();

  let query = supabase
    .from('offers')
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
    .order('created_at', { ascending: false });

  if (shopId) {
    query = query.eq('shop_id', shopId);
  }

  const { data, error } = await query;

  if (error) {
    console.error('Error fetching offers:', error);
    throw error;
  }

  return data ?? [];
}
