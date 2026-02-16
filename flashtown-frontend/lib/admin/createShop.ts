import { supabase } from '@/lib/supabase/client'
import { Database } from '@/app/types/database.types'

type ShopInsert = Database['public']['Tables']['shops']['Insert']

/**
 * Creates a new shop in the database.
 * This is an admin-only function intended for backend usage.
 */
export async function createShop(shopData: ShopInsert) {
    const { data, error } = await supabase
        .from('shops')
        .insert(shopData)
        .select()
        .single()

    if (error) {
        console.error('Error creating shop:', error)
        throw error
    }

    return data
}
