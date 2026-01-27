"use client";

import { useState } from "react";
import CategoryChips from "./CategoryChips";
import OfferList from "./OfferList";
import { getActiveOffers } from "@/app/lib/offerLogic";

export default function HomeClient({ offers, categories }: any) {
  const [selectedCategory, setSelectedCategory] = useState("all");

  const activeOffers = getActiveOffers(offers);

  const filteredOffers =
    selectedCategory === "all"
      ? activeOffers
      : activeOffers.filter(
          (o: any) => o.category === selectedCategory
        );
console.log('filteredOffers :',categories)
  return (
    <>
      <CategoryChips
        categories={categories}
        selected={selectedCategory}
        onChange={setSelectedCategory}
      />
      <OfferList offers={filteredOffers} />
    </>
  );
}
