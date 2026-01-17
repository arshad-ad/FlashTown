import Header from '@/components/Header';
import Hero from '@/components/Hero';
import CategoryChips from '@/components/CategoryChips';
import OfferList from '@/components/OfferList';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <main className="min-h-screen bg-white">
      <Header />
      <Hero />
      <CategoryChips />
      <OfferList />

      {/* Secondary Section: Newly Added (Simplified reuse of OfferList or custom for now)
          The prompt asks for a "Secondary section: Newly Added Offers (Smaller cards)".
          For MVP speed and consistency, I'll basically replicate a smaller list or just another section.
          Let's just add a divider and another list for now, or keep it simple as per "No infinite sections".
          Actually, let's strictly follow the prompt structure.
      */}
      <div className="px-4 py-6 max-w-md mx-auto">
        <div className="h-px bg-gray-100 w-full mb-6"></div>
        <h2 className="text-base font-bold text-gray-900 mb-3">Newly Added Offers</h2>
        {/* Reusing OfferList logic but perhaps we can just show a few more or different ones. 
            For now, I'll just render a few static ones to visualize the section. */}
        <div className="grid grid-cols-2 gap-3">
          <div className="bg-gray-50 p-3 rounded-lg border border-gray-100">
            <div className="w-full aspect-square bg-gray-200 rounded mb-2"></div>
            <p className="text-xs font-bold text-gray-900 truncate">50% Off Pizza</p>
            <p className="text-[10px] text-gray-500">Dominos • 2h ago</p>
          </div>
          <div className="bg-gray-50 p-3 rounded-lg border border-gray-100">
            <div className="w-full aspect-square bg-gray-200 rounded mb-2"></div>
            <p className="text-xs font-bold text-gray-900 truncate">New Arrival Kurti</p>
            <p className="text-[10px] text-gray-500">Zudio • 3h ago</p>
          </div>
        </div>
      </div>

      <Footer />
    </main>
  );
}
