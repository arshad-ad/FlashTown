import React from 'react';
import Link from 'next/link';
import Image from 'next/image';


export default function ForBusinessPage() {
    return (
        <div className="min-h-screen bg-white font-inter text-gray-800">

            {/* 1. Hero Section */}
            <section className="relative h-[550px] flex items-center justify-center overflow-hidden">
                {/* Background Image */}
                <div className="absolute inset-0 z-0">
                    <Image
                        src="/hero (4).jpg"
                        alt="Local shop background"
                        fill
                        priority
                        className="object-cover"
                    />
                    <div className="absolute inset-0 bg-black/50"></div>
                </div>

                <div className="relative z-10 max-w-5xl mx-auto px-6 text-center text-white">
                    <h1 className="text-4xl md:text-6xl font-semibold mb-6 tracking-tight">
                        Partner with FlashTown <br /> and grow your business
                    </h1>
                    <p className="text-lg md:text-xl font-light mb-10 opacity-90">
                        List your shop for free and reach nearby customers instantly.
                    </p>

                    <Link
                        href="/shop/setup"
                        className="bg-[#EF4F5F] hover:bg-[#d83a4a] text-white text-lg font-medium py-4 px-12 rounded-lg transition-all shadow-lg inline-block"
                    >
                        Register your shop →
                    </Link>

                    <p className="text-xs text-white/80 mt-4">
                        Free forever · No credit card required
                    </p>
                </div>
            </section>

            {/* 2. Floating Checklist */}
            <section className="max-w-5xl mx-auto px-6 -mt-12 relative z-20">
                <div className="bg-white rounded-xl shadow-xl border border-gray-100 p-8">
                    <h2 className="text-2xl font-semibold mb-6 text-center md:text-left">
                        Get started — it only takes 5 minutes
                    </h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {['Shop location', 'Phone number', 'Shop category', 'Basic details'].map((item) => (
                            <div key={item} className="flex items-center gap-3">
                                <div className="min-w-[20px] h-5 w-5 rounded-full bg-green-500 flex items-center justify-center">
                                    <svg
                                        className="w-3 h-3 text-white"
                                        fill="none"
                                        stroke="currentColor"
                                        viewBox="0 0 24 24"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth="3"
                                            d="M5 13l4 4L19 7"
                                        />
                                    </svg>
                                </div>
                                <span className="text-gray-600 font-medium">{item}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* 3. Why Partner */}
            <section className="py-24 px-6 bg-white">
                <div className="max-w-6xl mx-auto">
                    <h2 className="text-3xl font-bold text-center mb-16">
                        Why partner with FlashTown?
                    </h2>

                    <div className="grid md:grid-cols-3 gap-16">
                        {[
                            {
                                title: 'Attract nearby customers',
                                desc: 'People around you see your offers and walk in.',
                                icon: '👥',
                            },
                            {
                                title: 'Local visibility',
                                desc: 'Be discovered in Manjeri, Malappuram & nearby towns.',
                                icon: '📍',
                            },
                            {
                                title: 'Zero commission',
                                desc: 'No listing fees. No hidden charges.',
                                icon: '💰',
                            },
                        ].map((item) => (
                            <div key={item.title} className="text-center">
                                <div className="w-20 h-20 mx-auto bg-gray-50 rounded-full flex items-center justify-center text-4xl mb-6">
                                    {item.icon}
                                </div>
                                <h3 className="text-xl font-bold mb-3">{item.title}</h3>
                                <p className="text-gray-500 leading-relaxed">{item.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* 4. Testimonials */}
            <section className="py-20 px-6 bg-gray-50">
                <div className="max-w-5xl mx-auto">
                    <h2 className="text-2xl font-bold mb-12">
                        Shop owner success stories
                    </h2>

                    <div className="grid md:grid-cols-2 gap-8">
                        <div className="bg-white p-8 rounded-xl border border-gray-200">
                            <p className="text-gray-600 italic mb-6">
                                “FlashTown helped us bring more local customers without spending on ads.”
                            </p>
                            <p className="font-bold">Arshad Khan</p>
                            <p className="text-sm text-gray-400">
                                Fashion Hub, Manjeri
                            </p>
                        </div>

                        <div className="bg-white p-8 rounded-xl border border-gray-200">
                            <p className="text-gray-600 italic mb-6">
                                “Simple to use. We add offers whenever we want.”
                            </p>
                            <p className="font-bold">Vijay Kumar</p>
                            <p className="text-sm text-gray-400">
                                Electro World
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* 5. FAQ */}
            <section className="py-24 px-6 bg-white">
                <div className="max-w-3xl mx-auto">
                    <h2 className="text-2xl font-bold mb-10 text-center">
                        Frequently asked questions
                    </h2>

                    <div className="space-y-4">
                        {[
                            'Is FlashTown really free?',
                            'How long does it take to go live?',
                            'Can I add offers anytime?',
                        ].map((q) => (
                            <details
                                key={q}
                                className="group border-b border-gray-100 pb-4"
                            >
                                <summary className="flex justify-between items-center cursor-pointer list-none py-2">
                                    <span className="text-lg font-medium text-gray-700">
                                        {q}
                                    </span>
                                    <span className="group-open:rotate-180 transition-transform">
                                        ▼
                                    </span>
                                </summary>
                                <p className="text-gray-500 pt-3">
                                    Yes. Register your shop and start posting offers immediately.
                                </p>
                            </details>
                        ))}
                    </div>
                </div>
            </section>

            {/* Footer */}
            <footer className="bg-gray-900 text-gray-400 py-16 px-6">
                <div className="max-w-6xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-12">
                    <div>
                        <h4 className="text-white font-bold mb-6 tracking-widest uppercase text-sm">
                            FlashTown
                        </h4>
                        <p className="text-xs">
                            Connecting local shops with nearby customers.
                        </p>
                    </div>
                    {['About', 'Privacy', 'Terms', 'Contact'].map((item) => (
                        <div key={item} className="hover:text-white cursor-pointer">
                            {item}
                        </div>
                    ))}
                </div>
            </footer>
        </div>
    );
}
