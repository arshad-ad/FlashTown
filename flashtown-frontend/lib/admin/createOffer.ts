import { supabase } from '@/lib/supabase/client'
import { Database } from '@/app/types/database.types'

type OfferInsert = Database['public']['Tables']['offers']['Insert']

/**
 * Creates a new offer for a specific shop.
 * This is an admin-only function intended for backend usage.
 */
export async function createOffer(offerData: OfferInsert) {
    const { data, error } = await supabase
        .from('offers')
        .insert(offerData)
        .select()
        .single()

    if (error) {
        console.error('Error creating offer:', error)
        throw error
    }

    return data
}
