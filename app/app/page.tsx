import Header from '@/components/Header';
import Hero from '@/components/Hero';
import CategoryChips from '@/components/CategoryChips';
import OfferList from '@/components/OfferList';
import Footer from '@/components/Footer';
import { NewlyAddedOffers } from '@/components/NewlyAddedOffers';

export default function Home() {
  return (
    <main className="min-h-screen bg-white">
      <Header />
      <Hero />
      <CategoryChips />
      <OfferList />
      <NewlyAddedOffers/>

      {/* Secondary Section: Newly Added (Simplified reuse of OfferList or custom for now)
          The prompt asks for a "Secondary section: Newly Added Offers (Smaller cards)".
          For MVP speed and consistency, I'll basically replicate a smaller list or just another section.
          Let's just add a divider and another list for now, or keep it simple as per "No infinite sections".
          Actually, let's strictly follow the prompt structure.
      */}
     

      <Footer />
    </main>
  );
}
