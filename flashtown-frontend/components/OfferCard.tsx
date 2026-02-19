import { Phone, Navigation } from "lucide-react";
import { getDaysLeft } from "@/lib/utils/offerLogic";
import Image from "next/image";

interface OfferCardProps {
  shopName: string;
  title: string;
  image?: string;
  location: string;
  validity: string;
}

export default function OfferCard({
  shopName,
  title,
  location,
  validity,
  image,
}: OfferCardProps) {
  return (
    <div className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition border border-gray-100">

      {/* IMAGE */}
      <div className="relative h-40 w-full bg-gray-100">
        {image ? (
          <Image
            src={image}
            alt={shopName}
            fill
            className="object-cover"
          />
        ) : (
          <div className="w-full h-full flex items-center justify-center text-gray-300 text-sm">
            No Image
          </div>
        )}

        {/* FLASH BADGE */}
        <div className="absolute top-2 left-2 bg-[#7B2CBF] text-white text-xs px-3 py-1 rounded-full shadow">
          Flash Deal
        </div>
      </div>

      {/* CONTENT */}
      <div className="p-4">

        {/* SHOP NAME */}
        <p className="text-xs text-gray-500 font-medium">
          {shopName}
        </p>

        {/* TITLE */}
        <h2 className="text-sm font-bold text-gray-900 leading-snug mt-1 line-clamp-2">
          {title}
        </h2>

        {/* LOCATION + VALIDITY */}
        <p className="text-xs text-gray-500 mt-2">
          {location}
        </p>

        <p className="text-xs font-semibold text-red-600 mt-1">
          {getDaysLeft(validity)}
        </p>

        {/* ACTIONS */}
        <div className="flex gap-2 mt-4">

          <button className="flex-1 h-9 flex items-center justify-center gap-2 bg-gray-100 text-gray-900 rounded-xl text-xs font-semibold hover:bg-gray-200 transition">
            <Phone className="w-4 h-4" />
            Call
          </button>

          <button className="flex-1 h-9 flex items-center justify-center gap-2 bg-[#00D26A] text-white rounded-xl text-xs font-semibold hover:brightness-95 transition shadow-sm">
            <Navigation className="w-4 h-4" />
            Directions
          </button>

        </div>

      </div>
    </div>
  );
}
