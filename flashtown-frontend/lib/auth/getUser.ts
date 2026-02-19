import { createClient } from "@supabase/supabase-js";
import { cookies } from "next/headers";

export async function getUser() {
    const cookieStore = await cookies();

    const supabase = createClient(
        process.env.NEXT_PUBLIC_SUPABASE_URL!,
        process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!,
        {
            auth: {
                storage: {
                    getItem(key) {
                        return cookieStore.get(key)?.value ?? null;
                    },
                    setItem(key, value) {
                        // getUser doesn't need to set cookies usually, but we define it for interface compliance
                        // or if refresh token rotation happens
                        try {
                            // cookieStore.set(key, value) - Server Components can't set cookies easily in all contexts
                            // but getUser is usually read-only. We leave empty or try-catch.
                        } catch (e) {
                            // ignore
                        }
                    },
                    removeItem(key) {
                        try {
                            // cookieStore.delete(key)
                        } catch (e) {
                            // ignore
                        }
                    },
                },
            },
        }
    );

    const {
        data: { user },
    } = await supabase.auth.getUser();

    return user;
}
