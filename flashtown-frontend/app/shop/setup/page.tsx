
import React from 'react';
import Link from 'next/link';

export default function ShopSetupPage() {
    return (
        <div className="min-h-screen bg-gray-50 py-8 px-4">
            <div className="max-w-md mx-auto">
                {/* Header */}
                <header className="mb-8 text-center">
                    <h1 className="text-2xl font-bold text-gray-900 tracking-tight">
                        Setup Your Shop
                    </h1>
                    <p className="text-gray-500 mt-1">
                        One-time setup to start posting offers
                    </p>
                </header>

                {/* Setup Form */}
                <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 space-y-6">

                    {/* Shop Name */}
                    <div>
                        <label htmlFor="shopName" className="block text-sm font-medium text-gray-700 mb-1">
                            Shop Name
                        </label>
                        <input
                            type="text"
                            id="shopName"
                            className="w-full px-4 py-2 rounded-lg border border-gray-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-100 outline-none transition-all"
                            placeholder="e.g. Kerala Store"
                        />
                    </div>

                    {/* Area / Location */}
                    <div>
                        <label htmlFor="area" className="block text-sm font-medium text-gray-700 mb-1">
                            Area / Location
                        </label>
                        <input
                            type="text"
                            id="area"
                            className="w-full px-4 py-2 rounded-lg border border-gray-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-100 outline-none transition-all"
                            placeholder="e.g. Manjeri Town"
                        />
                    </div>

                    {/* Category */}
                    <div>
                        <label htmlFor="category" className="block text-sm font-medium text-gray-700 mb-1">
                            Category
                        </label>
                        <select
                            id="category"
                            className="w-full px-4 py-2 rounded-lg border border-gray-200 bg-white focus:border-blue-500 focus:ring-2 focus:ring-blue-100 outline-none transition-all"
                        >
                            <option value="">Select Category</option>
                            <option value="fashion">Fashion & Clothing</option>
                            <option value="electronics">Electronics</option>
                            <option value="grocery">Grocery & Supermarket</option>
                            <option value="food">Restaurant & Cafe</option>
                            <option value="other">Other</option>
                        </select>
                    </div>

                    {/* Phone (Read Only Mock) */}
                    <div>
                        <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
                            Phone Number
                        </label>
                        <input
                            type="tel"
                            id="phone"
                            value="+91 98765 43210"
                            readOnly
                            className="w-full px-4 py-2 rounded-lg border border-gray-200 bg-gray-50 text-gray-500 cursor-not-allowed"
                        />
                        <p className="text-xs text-gray-400 mt-1">Verified via OTP</p>
                    </div>

                    {/* Description */}
                    <div>
                        <label htmlFor="description" className="block text-sm font-medium text-gray-700 mb-1">
                            Shop Description (Optional)
                        </label>
                        <textarea
                            id="description"
                            rows={3}
                            className="w-full px-4 py-2 rounded-lg border border-gray-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-100 outline-none transition-all resize-none"
                            placeholder="Tell customers about your shop..."
                        />
                    </div>

                    {/* Submit Button */}
                    <Link
                        href="/shop"
                        className="block w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-xl shadow-lg shadow-blue-600/20 transition-all transform hover:scale-[1.02] active:scale-[0.98] text-center"
                    >
                        Create Shop
                    </Link>
                </div>
            </div>
        </div>
    );
}
