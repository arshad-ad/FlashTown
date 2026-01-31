import React from "react";

export default function AddOfferPage() {
  return (
    <div className="min-h-screen bg-gray-50 py-8 px-4">
      <div className="max-w-md mx-auto">
        {/* 1. Page Header */}
        <header className="mb-8 text-center">
          <h1 className="text-2xl font-bold text-gray-900 tracking-tight">
            Add Your Offer
          </h1>
          <p className="text-gray-500 mt-1">
            Reach local customers in minutes
          </p>
        </header>

        {/* 2. Offer Form */}
        <div className="space-y-6">

          {/* Offer Details */}
          <section className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
            <h2 className="text-lg font-semibold text-gray-800 mb-4">
              🎁 Offer Details
            </h2>

            <div className="space-y-4">
              <input
                type="text"
                placeholder="Offer Title"
                className="w-full px-4 py-2 rounded-lg border border-gray-200"
              />

              <textarea
                rows={3}
                placeholder="Offer Description"
                className="w-full px-4 py-2 rounded-lg border border-gray-200 resize-none"
              />

              <div className="grid grid-cols-2 gap-4">
                <select className="w-full px-4 py-2 rounded-lg border border-gray-200 bg-white">
                  <option>Flat Discount</option>
                  <option>Percentage Off</option>
                  <option>Buy 1 Get 1</option>
                  <option>Special Deal</option>
                </select>

                <input
                  type="text"
                  placeholder="Offer Value"
                  className="w-full px-4 py-2 rounded-lg border border-gray-200"
                />
              </div>
            </div>
          </section>

          {/* Validity */}
          <section className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
            <h2 className="text-lg font-semibold text-gray-800 mb-4">
              📅 Validity
            </h2>

            <div className="grid grid-cols-2 gap-4">
              <input
                type="date"
                className="w-full px-4 py-2 rounded-lg border border-gray-200"
              />
              <input
                type="date"
                className="w-full px-4 py-2 rounded-lg border border-gray-200"
              />
            </div>
          </section>

          {/* Image */}
          <section className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
            <h2 className="text-lg font-semibold text-gray-800 mb-4">
              🖼️ Offer Image (Optional)
            </h2>

            <input
              type="url"
              placeholder="Image URL"
              className="w-full px-4 py-2 rounded-lg border border-gray-200"
            />
          </section>
        </div>

        {/* CTA */}
        <div className="mt-8">
          <button className="w-full bg-blue-600 text-white font-bold py-3 rounded-xl">
            Submit Offer
          </button>
        </div>

        {/* Trust Note */}
        <p className="text-center text-xs text-gray-400 mt-4">
          Your offer will be reviewed before going live.
        </p>
      </div>
    </div>
  );
}
