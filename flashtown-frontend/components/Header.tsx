"use client";

import Image from "next/image";
import { Search, MapPin, ChevronDown } from "lucide-react";
import { useEffect, useState } from "react";
import { getTowns } from "@/lib/queries/getTowns";
// import { getTowns } from "@/lib/queries/getTowns";

export default function Header({
  search,
  onSearch,
}: {
  search: string;
  onSearch: (v: string) => void;
}) {
  const [towns, setTowns] = useState<string[]>([]);
  const [selectedTown, setSelectedTown] = useState("Select town");
  const [open, setOpen] = useState(false);

  useEffect(() => {
    async function load() {
      const t = await getTowns();
      setTowns(t);
      if (t.length) setSelectedTown(t[0]);
    }
    load();
  }, []);

  return (
    <header className="sticky top-0 z-50 bg-white border-b shadow-sm">
      <div className="max-w-md mx-auto px-4 py-3">

        {/* TOP ROW */}
        <div className="flex items-center justify-between mb-3">

          <div className="flex items-center gap-2">
            <Image src="/Logo.png" alt="FlashTown" width={32} height={32} />
            <span className="font-bold text-[#7B2CBF] text-lg">
              FlashTown
            </span>
          </div>

        </div>

        {/* LOCATION + SEARCH */}
        <div className="flex items-center gap-3 relative">

          {/* LOCATION DROPDOWN */}
          <div className="relative">

            <button
              onClick={() => setOpen(!open)}
              className="flex items-center gap-1 text-sm font-medium text-gray-700"
            >
              <MapPin className="w-4 h-4 text-[#7B2CBF]" />
              {selectedTown}
              <ChevronDown className="w-4 h-4" />
            </button>

            {open && (
              <div className="absolute top-8 left-0 bg-white border rounded-lg shadow-md w-40 z-50">
                {towns.map((town) => (
                  <button
                    key={town}
                    onClick={() => {
                      setSelectedTown(town);
                      setOpen(false);
                    }}
                    className="block w-full text-left px-3 py-2 text-sm hover:bg-gray-100"
                  >
                    {town}
                  </button>
                ))}
              </div>
            )}

          </div>

          {/* SEARCH */}
          <div className="flex-1 relative">
            <input
              value={search}
              onChange={(e) => onSearch(e.target.value)}
              placeholder="Search offers or shops"
              className="w-full h-10 pl-9 pr-4 bg-gray-100 rounded-full text-sm focus:outline-none focus:ring-2 focus:ring-[#7B2CBF]/20"
            />
            <Search className="w-4 h-4 text-gray-400 absolute left-3 top-1/2 -translate-y-1/2" />
          </div>

        </div>
      </div>
    </header>
  );
}
