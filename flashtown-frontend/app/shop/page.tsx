
import { redirect } from 'next/navigation';
import Link from 'next/link';
import { getUser } from '@/lib/auth/getUser';
import { getShopDashboardData } from '@/lib/queries/getShopDashboard';

export default async function ShopDashboardPage() {
    const user = await getUser();
    if (!user) {
        redirect('/login');
    }

    const { shop, offers } = await getShopDashboardData();
    const shopName = shop?.name || "Your Shop";
    const shopInitial = shopName.charAt(0).toUpperCase();

    return (
        <div className="min-h-screen bg-gray-50">
            {/* Dashboard Header */}
            <header className="bg-white border-b border-gray-200 px-4 py-4 sticky top-0 z-10">
                <div className="max-w-md mx-auto flex justify-between items-center">
                    <h1 className="text-lg font-bold text-gray-900">Your Shop Dashboard</h1>
                    <div className="w-8 h-8 bg-gray-200 rounded-full flex items-center justify-center text-xs font-bold text-gray-600 uppercase">
                        {shopInitial}
                    </div>
                </div>
            </header>

            <main className="max-w-md mx-auto px-4 py-8">

                {/* Welcome / Stats (Simplistic for now) */}
                <div className="mb-8">
                    <h2 className="text-2xl font-bold text-gray-900 mb-1">Hello, {shopName}!</h2>
                    <p className="text-gray-500 text-sm">Manage your offers and reach more customers.</p>
                </div>

                {/* OFFERS LIST or EMPTY STATE */}
                {offers.length === 0 ? (
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
                ) : (
                    <div className="space-y-4">
                        <div className="flex justify-between items-center mb-4">
                            <h3 className="text-lg font-semibold text-gray-900">Your Offers</h3>
                            <Link href="/shop/add-offer" className="text-blue-600 text-sm font-medium hover:underline">
                                + Add New
                            </Link>
                        </div>

                        {offers.map((offer) => (
                            <div key={offer.id} className="bg-white p-4 rounded-xl shadow-sm border border-gray-200 flex gap-4">
                                {/* Optional Image */}
                                {offer.image_url && (
                                    <div className="w-20 h-20 bg-gray-100 rounded-lg flex-shrink-0 overflow-hidden">
                                        <img src={offer.image_url} alt={offer.title} className="w-full h-full object-cover" />
                                    </div>
                                )}

                                <div className="flex-1 min-w-0">
                                    <div className="flex justify-between items-start">
                                        <h4 className="font-bold text-gray-900 truncate pr-2">{offer.title}</h4>
                                        <span className={`text-[10px] uppercase font-bold px-2 py-0.5 rounded-full ${offer.status === 'active'
                                            ? 'bg-green-100 text-green-700'
                                            : 'bg-gray-100 text-gray-600'
                                            }`}>
                                            {offer.status}
                                        </span>
                                    </div>
                                    <p className="text-gray-500 text-xs line-clamp-2 mt-1 mb-2">
                                        {offer.description}
                                    </p>
                                    <div className="text-xs text-gray-400">
                                        <span>Exp: {new Date(offer.expiry_date).toLocaleDateString()}</span>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                )}

                {/* Quick Links / Help (Optional, usually good for dashboard) */}
                <div className="mt-8 grid grid-cols-2 gap-4">
                    <Link href={`/`} className="bg-white p-4 rounded-lg border border-gray-100 text-center hover:bg-gray-50 transition">
                        <p className="text-2xl mb-1">👀</p>
                        <p className="text-xs font-medium text-gray-600">View Live Site</p>
                    </Link>
                    <div className="bg-white p-4 rounded-lg border border-gray-100 text-center opacity-50 cursor-not-allowed">
                        <p className="text-2xl mb-1">⚙️</p>
                        <p className="text-xs font-medium text-gray-600">Settings (Soon)</p>
                    </div>
                </div>

            </main>
        </div>
    );
}
