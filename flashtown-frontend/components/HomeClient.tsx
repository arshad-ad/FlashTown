"use client";

import { useState } from "react";
import Header from "./Header";
import CategoryChips from "./CategoryChips";
import OfferList from "./OfferList";
import { getActiveOffers, searchOffers } from "@/app/lib/offerLogic";

export default function HomeClient({ offers, categories }: any) {
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [searchQuery, setSearchQuery] = useState("");

  const activeOffers = getActiveOffers(offers);

  const categoryFiltered =
    selectedCategory === "all"
      ? activeOffers
      : activeOffers.filter(
          (o: any) => o.category === selectedCategory
        );

  const visibleOffers = searchOffers(categoryFiltered, searchQuery);

  return (
    <>
      <Header search={searchQuery} onSearch={setSearchQuery} />

      <CategoryChips
        categories={categories}
        selected={selectedCategory}
        onChange={setSelectedCategory}
      />

      <OfferList offers={visibleOffers} />
    </>
  );
}
