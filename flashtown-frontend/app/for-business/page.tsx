
import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

export default function ForBusinessPage() {
    return (
        <div className="min-h-screen bg-white">
            {/* 1. Hero Section */}
            <section className="px-4 py-16 md:py-24 max-w-4xl mx-auto text-center">
                <h1 className="text-3xl md:text-5xl font-bold text-gray-900 mb-4 tracking-tight">
                    Bring More Customers to Your Shop
                </h1>
                <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
                    Post your offers on FlashTown and reach customers near you instantly.
                </p>

                {/* Trust Bullets */}
                <div className="flex flex-wrap justify-center gap-4 mb-10">
                    <span className="inline-flex items-center px-3 py-1 rounded-full bg-green-50 text-green-700 text-sm font-medium">
                        ✅ 100% Free
                    </span>
                    <span className="inline-flex items-center px-3 py-1 rounded-full bg-blue-50 text-blue-700 text-sm font-medium">
                        🏪 For local shops only
                    </span>
                    <span className="inline-flex items-center px-3 py-1 rounded-full bg-purple-50 text-purple-700 text-sm font-medium">
                        ⚡ No tech knowledge needed
                    </span>
                </div>
            </section>

            {/* 2. How It Works */}
            <section className="bg-gray-50 py-16 px-4">
                <div className="max-w-4xl mx-auto">
                    <h2 className="text-2xl font-bold text-center text-gray-900 mb-12">
                        How It Works
                    </h2>
                    <div className="grid md:grid-cols-3 gap-8">
                        {/* Step 1 */}
                        <div className="bg-white p-6 rounded-xl shadow-sm text-center">
                            <div className="w-12 h-12 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-4">
                                1
                            </div>
                            <h3 className="font-semibold text-lg mb-2">Register your shop</h3>
                            <p className="text-gray-500 text-sm">
                                Enter your phone number to set up your shop profile in seconds.
                            </p>
                        </div>

                        {/* Step 2 */}
                        <div className="bg-white p-6 rounded-xl shadow-sm text-center">
                            <div className="w-12 h-12 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-4">
                                2
                            </div>
                            <h3 className="font-semibold text-lg mb-2">Add offers anytime</h3>
                            <p className="text-gray-500 text-sm">
                                Post daily deals, discounts, or special arrivals to attract attention.
                            </p>
                        </div>

                        {/* Step 3 */}
                        <div className="bg-white p-6 rounded-xl shadow-sm text-center">
                            <div className="w-12 h-12 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-4">
                                3
                            </div>
                            <h3 className="font-semibold text-lg mb-2">Customers discover you</h3>
                            <p className="text-gray-500 text-sm">
                                Locals in Manjeri & Malappuram see your offers and visit your store.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* 3. Primary CTA */}
            <section className="px-4 py-16 max-w-md mx-auto text-center">
                <h2 className="text-xl font-bold text-gray-900 mb-6">
                    Start Growing Your Business Today
                </h2>

                <div className="bg-white p-6 rounded-2xl shadow-lg border border-gray-100">
                    <label htmlFor="phone" className="block text-left text-sm font-medium text-gray-700 mb-2">
                        Enter Phone Number to Start
                    </label>
                    <div className="flex gap-3 mb-4">
                        <input
                            type="tel"
                            id="phone"
                            placeholder="98765 43210"
                            className="flex-1 px-4 py-3 rounded-lg border border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-100 outline-none text-lg"
                        />
                    </div>

                    <Link
                        href="/shop/setup"
                        className="block w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-3.5 rounded-lg transition-colors"
                    >
                        Continue with Phone
                    </Link>

                    <p className="text-xs text-gray-400 mt-4">
                        We will never spam you. Your number is only used to manage your shop.
                    </p>
                </div>
            </section>

            {/* 4. Local Reassurance */}
            <section className="py-8 text-center border-t border-gray-100">
                <p className="text-gray-500 text-sm">
                    Trusted by shop owners in <span className="font-medium text-gray-700">Manjeri</span>, <span className="font-medium text-gray-700">Malappuram</span>, and nearby towns.
                </p>
            </section>
        </div>
    );
}
