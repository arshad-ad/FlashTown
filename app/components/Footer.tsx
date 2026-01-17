import { Phone } from 'lucide-react';

export default function Footer() {
    return (
        <footer className="bg-gray-50 border-t border-gray-100 mt-8 pb-8 pt-8">
            <div className="max-w-md mx-auto px-4 text-center">
                {/* CTA */}
                <div className="bg-blue-50 border border-blue-100 rounded-xl p-4 mb-8">
                    <p className="text-blue-900 font-medium text-sm mb-2">
                        Are you a shop owner?
                    </p>
                    <button className="bg-blue-600 text-white text-sm font-semibold px-4 py-2 rounded-lg w-full active:scale-95 transition-transform">
                        Add your offer for free
                    </button>
                </div>

                <div className="flex justify-center gap-6 text-sm text-gray-500 mb-6">
                    <a href="#" className="hover:text-gray-900">About</a>
                    <a href="#" className="hover:text-gray-900">Areas</a>
                    <a href="#" className="hover:text-gray-900">Contact</a>
                </div>

                <p className="text-xs text-gray-400">
                    © 2024 FlashTown. Local offers in real-time.
                </p>
            </div>
        </footer>
    );
}
