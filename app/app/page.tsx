import Header from "@/components/Header";
import Hero from "@/components/Hero";
import CategoryChips from "@/components/CategoryChips";
import OfferList from "@/components/OfferList";
import Footer from "@/components/Footer";
import { NewlyAddedOffers } from "@/components/NewlyAddedOffers";

import { getOffers, getShops } from "@/app/lib/sheets";
import { joinOffersWithShops } from "@/app/lib/joinData";
import { getActiveOffers, searchOffers } from "@/app/lib/offerLogic";

export default async function Home() {
  const [offers, shops] = await Promise.all([
    getOffers(),
    getShops(),
  ]);

  const enrichedOffers = joinOffersWithShops(offers, shops);
  const activeOffers = getActiveOffers(enrichedOffers);
  const visibleOffers = searchOffers(activeOffers, "");

  return (
    <main className="min-h-screen bg-white">
      <Header />
      <Hero />
      <CategoryChips />

      <OfferList offers={visibleOffers} />
      <NewlyAddedOffers offers={visibleOffers} />

      <Footer />
    </main>
  );
}
