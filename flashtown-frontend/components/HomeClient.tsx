"use client";

import { useState, useMemo } from "react";
import Header from "./Header";
import CategoryChips from "./CategoryChips";
import OfferList from "./OfferList";
import { getActiveOffers, searchOffers } from "@/lib/utils/offerLogic";

export default function HomeClient({ offers, categories }: any) {
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [searchQuery, setSearchQuery] = useState("");

  // ✅ NEW: selected town state
  const [selectedTown, setSelectedTown] = useState("All");

  // ✅ NEW: build towns list from offers (safe, no server fetch needed)
  const towns = useMemo(() => {
    const list =
      offers?.map((o: any) => o.shops?.town).filter(Boolean) ?? [];
    return ["All", ...Array.from(new Set(list))];
  }, [offers]);

  const activeOffers = getActiveOffers(offers);

  // ✅ filter by town first
  const townFiltered =
    selectedTown === "All"
      ? activeOffers
      : activeOffers.filter(
          (o: any) => o.shops?.town === selectedTown
        );

  // ✅ category filter
  const categoryFiltered =
    selectedCategory === "all"
      ? townFiltered
      : townFiltered.filter(
          (o: any) => o.shops?.category === selectedCategory
        );

  const visibleOffers = searchOffers(categoryFiltered, searchQuery);

  return (
    <>
      <Header
        search={searchQuery}
        onSearch={setSearchQuery}
        towns={towns}
        selectedTown={selectedTown}
        onTownChange={setSelectedTown}
      />

      <CategoryChips
        categories={categories}
        selected={selectedCategory}
        onChange={setSelectedCategory}
      />

      <OfferList offers={visibleOffers} />
    </>
  );
}
