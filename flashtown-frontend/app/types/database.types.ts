export type Json =
    | string
    | number
    | boolean
    | null
    | { [key: string]: Json | undefined }
    | Json[]

export interface Database {
    public: {
        Tables: {
            profiles: {
                Row: {
                    id: string
                    email: string | null
                    role: 'admin' | 'owner' | 'user' | null
                    created_at: string
                }
                Insert: {
                    id: string
                    email?: string | null
                    role?: 'admin' | 'owner' | 'user' | null
                    created_at?: string
                }
                Update: {
                    id?: string
                    email?: string | null
                    role?: 'admin' | 'owner' | 'user' | null
                    created_at?: string
                }
            }
            shops: {
                Row: {
                    id: string
                    owner_id: string | null
                    name: string
                    slug: string
                    town: string
                    category: string
                    description: string | null
                    address: string | null
                    phone: string | null
                    logo_url: string | null
                    verified: boolean | null
                    created_at: string
                }
                Insert: {
                    id?: string
                    owner_id?: string | null
                    name: string
                    slug: string
                    town: string
                    category: string
                    description?: string | null
                    address?: string | null
                    phone?: string | null
                    logo_url?: string | null
                    verified?: boolean | null
                    created_at?: string
                }
                Update: {
                    id?: string
                    owner_id?: string | null
                    name?: string
                    slug?: string
                    town?: string
                    category?: string
                    description?: string | null
                    address?: string | null
                    phone?: string | null
                    logo_url?: string | null
                    verified?: boolean | null
                    created_at?: string
                }
            }
            offers: {
                Row: {
                    id: string
                    shop_id: string
                    title: string
                    description: string | null
                    discount_percent: number | null
                    offer_price: number | null
                    original_price: number | null
                    image_url: string | null
                    start_date: string | null
                    expiry_date: string
                    is_featured: boolean | null
                    status: 'active' | 'pending' | 'rejected' | 'expired' | null
                    created_at: string
                }
                Insert: {
                    id?: string
                    shop_id: string
                    title: string
                    description?: string | null
                    discount_percent?: number | null
                    offer_price?: number | null
                    original_price?: number | null
                    image_url?: string | null
                    start_date?: string | null
                    expiry_date: string
                    is_featured?: boolean | null
                    status?: 'active' | 'pending' | 'rejected' | 'expired' | null
                    created_at?: string
                }
                Update: {
                    id?: string
                    shop_id?: string
                    title?: string
                    description?: string | null
                    discount_percent?: number | null
                    offer_price?: number | null
                    original_price?: number | null
                    image_url?: string | null
                    start_date?: string | null
                    expiry_date?: string
                    is_featured?: boolean | null
                    status?: 'active' | 'pending' | 'rejected' | 'expired' | null
                    created_at?: string
                }
            }
        }
        Views: {
            [_ in never]: never
        }
        Functions: {
            [_ in never]: never
        }
        Enums: {
            [_ in never]: never
        }
    }
}
