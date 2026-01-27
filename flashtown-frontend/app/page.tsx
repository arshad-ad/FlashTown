import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Footer from "@/components/Footer";
import HomeClient from "@/components/HomeClient";

import { getOffers, getShops, getCategories } from "@/app/lib/sheets";
import { joinOffersWithShops } from "@/app/lib/joinData";

export default async function Home() {
  const [offers, shops, categories] = await Promise.all([
    getOffers(),
    getShops(),
    getCategories(),
  ]);

  const enrichedOffers = joinOffersWithShops(offers, shops);

  return (
    <main className="min-h-screen bg-white">
      {/* <Header /> */}
      <Hero />

      {/* Client-side logic lives here */}
      <HomeClient
        offers={enrichedOffers}
        categories={categories}
      />

      <Footer />
    </main>
  );
}
