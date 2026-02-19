import { createClient } from "@supabase/supabase-js";
import { cookies } from "next/headers";
import { NextResponse } from "next/server";

export async function GET(request: Request) {
    const { searchParams, origin } = new URL(request.url);
    const code = searchParams.get("code");
    // const next = searchParams.get('next') ?? '/shop'

    if (code) {
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
                            cookieStore.set(key, value, {
                                path: "/",
                                sameSite: "lax",
                                secure: process.env.NODE_ENV === "production",
                                // maxAge: 60 * 60 * 24 * 7 // 1 week
                            });
                        },
                        removeItem(key) {
                            cookieStore.delete(key);
                        },
                    },
                },
            }
        );

        const { error } = await supabase.auth.exchangeCodeForSession(code);

        if (!error) {
            return NextResponse.redirect(`${origin}/shop`);
        }
    }

    // return the user to an error page with instructions
    return NextResponse.redirect(`${origin}/login?error=auth_failed`);
}
