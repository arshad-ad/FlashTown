import { Phone, Navigation } from 'lucide-react';
import Image from 'next/image';

interface OfferCardProps {
    id: string;
    shopName: string;
    title: string;
    image: string; // Ideally a URL
    location: string;
    validity: string;
}

export default function OfferCard({ shopName, title, location, validity }: OfferCardProps) {
    return (
        <div className="bg-white border border-gray-100 rounded-xl p-3 flex gap-4 shadow-sm">
            {/* Image Placeholder */}
            <div className="w-20 h-20 bg-gray-100 rounded-lg shrink-0 overflow-hidden relative">
                {/* In a real app, use next/image here. Using a div placeholder for now as per "Shop image placeholder (square)" requirement, 
            but the prompt asks for "Shop image placeholder". I'll add a subtle icon or text. */}
                <div className="w-full h-full flex items-center justify-center text-gray-300 text-xs">
                    IMG
                </div>
            </div>

            <div className="flex-1 flex flex-col justify-between">
                <div>
                    <h3 className="text-xs text-gray-500 font-medium mb-0.5">{shopName}</h3>
                    <h2 className="text-sm font-bold text-gray-900 leading-snug line-clamp-2">
                        {title}
                    </h2>
                    <p className="text-xs text-gray-500 mt-1">
                        {location} • <span className="text-red-600 font-medium">{validity}</span>
                    </p>
                </div>

                <div className="flex gap-2 mt-3">
                    <button className="flex-1 h-8 flex items-center justify-center gap-1.5 bg-gray-50 text-gray-900 rounded-lg text-xs font-semibold border border-gray-200 hover:bg-gray-100 active:bg-gray-200 transition-colors">
                        <Phone className="w-3.5 h-3.5" />
                        Call
                    </button>
                    <button className="flex-1 h-8 flex items-center justify-center gap-1.5 bg-emerald-50 text-emerald-700 rounded-lg text-xs font-semibold border border-emerald-100 hover:bg-emerald-100 active:bg-emerald-200 transition-colors">
                        <Navigation className="w-3.5 h-3.5" />
                        Directions
                    </button>
                </div>
            </div>
        </div>
    );
}
