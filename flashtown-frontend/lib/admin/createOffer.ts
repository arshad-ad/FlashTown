import { supabase } from '@/lib/supabase/client'
import { Database } from '@/app/types/database.types'

type OfferInsert = Database['public']['Tables']['offers']['Insert']

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
