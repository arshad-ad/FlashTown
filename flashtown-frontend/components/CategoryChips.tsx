"use client";

interface Category {
  slug: string;
  name: string;
}

interface CategoryChipsProps {
  categories: Category[];
  selected: string;
  onChange: (slug: string) => void;
}

export default function CategoryChips({
  categories,
  selected,
  onChange,
}: CategoryChipsProps) {
  return (
    <div className="overflow-x-auto whitespace-nowrap px-4 py-3 bg-white max-w-md mx-auto">
      <div className="flex gap-2">
        {/* All */}
        <button
          onClick={() => onChange("all")}
          className={`px-4 py-1.5 rounded-full text-sm font-medium ${
            selected === "all"
              ? "bg-black text-white"
              : "bg-gray-100 text-gray-700 border"
          }`}
        >
          All
        </button>

        {categories.map((cat) => (
          <button
            key={cat.slug}
            onClick={() => onChange(cat.slug)}
            className={`px-4 py-1.5 rounded-full text-sm font-medium ${
              selected === cat.slug
                ? "bg-black text-white"
                : "bg-gray-100 text-gray-700 border"
            }`}
          >
            {cat.name}
          </button>
        ))}
      </div>
    </div>
  );
}
