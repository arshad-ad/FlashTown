import { supabase } from '@/lib/supabase/client'

/**
 * Fetches offers from the database.
 * @param shopId Optional shop ID to filter by specific shop.
 */
export async function getOffers(shopId?: string) {
    let query = supabase
        .from('offers')
        .select(`
      *,
      shops (
        shop_name,
        area,
        category
      )
    `)
        .order('created_at', { ascending: false })

    if (shopId) {
        query = query.eq('shop_id', shopId)
    }

    const { data, error } = await query

    if (error) {
        console.error('Error fetching offers:', error)
        throw error
    }

    return data
}
