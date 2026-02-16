import { supabase } from '@/lib/supabase/client'

/**
 * Fetches all shops from the database, ordered by creation date (newest first).
 * This is an admin-only function intended for backend usage.
 */
export async function getShops() {
    const { data, error } = await supabase
        .from('shops')
        .select('*')
        .order('created_at', { ascending: false })

    if (error) {
        console.error('Error fetching shops:', error)
        throw error
    }

    return data
}
