import { Phone } from "lucide-react";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-white border-t border-gray-100 mt-12">

      <div className="max-w-md mx-auto px-4 py-10 text-center">

        {/* SHOP OWNER CTA */}
        <div className="bg-gradient-to-r from-[#7B2CBF]/10 to-[#7B2CBF]/5 border border-[#7B2CBF]/20 rounded-2xl p-5 mb-10 shadow-sm">

          <p className="text-[#7B2CBF] font-semibold text-sm mb-2">
            Are you a shop owner?
          </p>

          <p className="text-gray-600 text-xs mb-4">
            List your shop and start getting local customers today.
          </p>

          <Link
            href="/for-business"
            className="bg-[#7B2CBF] hover:brightness-95 text-white text-sm font-semibold px-5 py-2.5 rounded-xl inline-block transition shadow-sm"
          >
            Add your offer for free
          </Link>

        </div>

        {/* QUICK LINKS */}
        <div className="flex justify-center gap-8 text-sm text-gray-500 mb-6">

          <Link href="#" className="hover:text-gray-900 transition">
            About
          </Link>

          <Link href="#" className="hover:text-gray-900 transition">
            Areas
          </Link>

          <Link href="#" className="hover:text-gray-900 transition">
            Contact
          </Link>

        </div>

        {/* OPTIONAL WHATSAPP CONTACT (HIGHLY RECOMMENDED) */}
        <a
          href="https://wa.me/919876543210"
          target="_blank"
          className="inline-flex items-center gap-2 text-sm text-green-600 font-medium mb-6 hover:underline"
        >
          <Phone className="w-4 h-4" />
          Chat with us on WhatsApp
        </a>

        {/* COPYRIGHT */}
        <p className="text-xs text-gray-400">
          © {new Date().getFullYear()} FlashTown · Discover local offers near you
        </p>

      </div>

    </footer>
  );
}
