"use client";

import { useState } from "react";
import { supabase } from "@/lib/supabase/client";

export default function LoginPage() {
    const [email, setEmail] = useState("");
    const [loading, setLoading] = useState(false);
    const [message, setMessage] = useState("");
    const [errorMsg, setErrorMsg] = useState("");

    async function handleLogin(e: React.FormEvent) {
        e.preventDefault();
        setLoading(true);
        setMessage("");
        setErrorMsg("");

        const { error } = await supabase.auth.signInWithOtp({
            email,
            options: {
                emailRedirectTo: `${location.origin}/auth/callback`,
            },
        });

        if (error) {
            setErrorMsg(error.message);
            setLoading(false);
        } else {
            setMessage("Check your email for the login link!");
            setLoading(false);
        }
    }

    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-50 px-4">
            <div className="max-w-md w-full bg-white p-8 rounded-xl shadow-sm border border-gray-200">
                <div className="text-center mb-8">
                    <h1 className="text-2xl font-bold text-gray-900">Sign in to Shop</h1>
                    <p className="text-gray-500 text-sm mt-1">
                        Manage your shop and offers
                    </p>
                </div>

                {message ? (
                    <div className="bg-green-50 text-green-700 p-4 rounded-lg text-center">
                        <p className="font-medium">{message}</p>
                    </div>
                ) : (
                    <form onSubmit={handleLogin} className="space-y-4">
                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-1">
                                Email Address
                            </label>
                            <input
                                type="email"
                                required
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                placeholder="you@example.com"
                                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all"
                            />
                        </div>

                        {errorMsg && (
                            <p className="text-red-500 text-sm bg-red-50 p-3 rounded-lg">
                                {errorMsg}
                            </p>
                        )}

                        <button
                            type="submit"
                            disabled={loading}
                            className={`w-full py-3 rounded-xl text-white font-bold transition-all ${loading
                                    ? "bg-blue-400 cursor-not-allowed"
                                    : "bg-blue-600 hover:bg-blue-700 shadow-md shadow-blue-600/20"
                                }`}
                        >
                            {loading ? "Sending link..." : "Send Magic Link"}
                        </button>
                    </form>
                )}
            </div>
        </div>
    );
}
