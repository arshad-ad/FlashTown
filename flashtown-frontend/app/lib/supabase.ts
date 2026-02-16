import { createClient } from '@supabase/supabase-js'
import { Database } from '@/app/types/database.types'

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL
const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY

if (!supabaseUrl || !supabaseKey) {
    // We don't want to throw an error at build time if these are missing, 
    // but we want to know at runtime if we try to use the client.
    // For now, allow it to be undefined but logged.
    console.warn('Missing Supabase environment variables: NEXT_PUBLIC_SUPABASE_URL or NEXT_PUBLIC_SUPABASE_ANON_KEY')
}

export const supabase = createClient<Database>(
    supabaseUrl || '',
    supabaseKey || ''
)
