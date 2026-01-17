import { Search, MapPin } from 'lucide-react';

export default function Header() {
    return (
        <header className="sticky top-0 z-50 bg-white border-b border-gray-200">
            <div className="max-w-md mx-auto px-4 py-3 flex items-center gap-3">
                <div className="flex items-center gap-1 min-w-fit cursor-pointer">
                    <MapPin className="w-4 h-4 text-gray-600" />
                    <span className="font-medium text-sm text-gray-900">Manjeri</span>
                </div>

                <div className="flex-1 relative">
                    <input
                        type="text"
                        placeholder="Search offers or shops"
                        className="w-full h-10 pl-9 pr-4 bg-gray-100 rounded-full text-sm focus:outline-none focus:ring-1 focus:ring-gray-300"
                    />
                    <Search className="w-4 h-4 text-gray-400 absolute left-3 top-1/2 -translate-y-1/2" />
                </div>
            </div>
        </header>
    );
}
