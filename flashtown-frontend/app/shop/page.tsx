
import React from 'react';
import Link from 'next/link';

export default function ShopDashboardPage() {
    return (
        <div className="min-h-screen bg-gray-50">
            {/* Dashboard Header */}
            <header className="bg-white border-b border-gray-200 px-4 py-4 sticky top-0 z-10">
                <div className="max-w-md mx-auto flex justify-between items-center">
                    <h1 className="text-lg font-bold text-gray-900">Your Shop Dashboard</h1>
                    <div className="w-8 h-8 bg-gray-200 rounded-full flex items-center justify-center text-xs font-bold text-gray-600 uppercase">
                        S
                    </div>
                </div>
            </header>

            <main className="max-w-md mx-auto px-4 py-8">

                {/* Welcome / Stats (Simplistic for now) */}
                <div className="mb-8">
                    <h2 className="text-2xl font-bold text-gray-900 mb-1">Hello, Shop Owner!</h2>
                    <p className="text-gray-500 text-sm">Manage your offers and reach more customers.</p>
                </div>

                {/* Empty State */}
                <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-8 text-center">
                    <div className="w-16 h-16 bg-gray-50 rounded-full flex items-center justify-center text-3xl mx-auto mb-4">
                        🏷️
                    </div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">
                        No active offers
                    </h3>
                    <p className="text-gray-500 text-sm mb-8">
                        You haven’t added any offers yet. Post your first offer to start getting customers.
                    </p>

                    <Link
                        href="/shop/add-offer"
                        className="inline-flex items-center justify-center w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-xl transition-all shadow-md shadow-blue-600/20"
                    >
                        <span className="mr-2">➕</span> Add New Offer
                    </Link>
                </div>

                {/* Quick Links / Help (Optional, usually good for dashboard) */}
                <div className="mt-8 grid grid-cols-2 gap-4">
                    <div className="bg-white p-4 rounded-lg border border-gray-100 text-center">
                        <p className="text-2xl mb-1">👀</p>
                        <p className="text-xs font-medium text-gray-600">View Shop Page</p>
                    </div>
                    <div className="bg-white p-4 rounded-lg border border-gray-100 text-center">
                        <p className="text-2xl mb-1">⚙️</p>
                        <p className="text-xs font-medium text-gray-600">Settings</p>
                    </div>
                </div>

            </main>
        </div>
    );
}
