import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Footer from "@/components/Footer";
import HomeClient from "@/components/HomeClient";

import { getOffers } from "@/lib/queries/getOffers";
import { getCategories } from "@/lib/queries/getCategories";

export default async function Home() {
  const [offers, categories] = await Promise.all([
    getOffers(),
    getCategories(),
  ]);
  console.log("OFFERS:", offers);


  return (
    <main className="min-h-screen bg-white">
      {/* <Header /> */}
      {/* <Hero /> */}

      <HomeClient
        offers={offers}
        categories={categories}
      />

      <Footer />
    </main>
  );
}
