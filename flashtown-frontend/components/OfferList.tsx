import OfferCard from "./OfferCard";

export default function OfferList({ offers }: { offers: any[] }) {
  if (!offers || offers.length === 0) {
    return <p className="px-4 text-sm text-gray-500">No offers found</p>;
  }

  return (
    <section className="px-4 py-4">
      <h2 className="text-lg font-semibold mb-3">Active Offers Near You</h2>

      <div className="space-y-4">
        {offers.map((offer) => (
          <OfferCard
            key={offer.offer_id}   // 🔥 THIS FIXES THE BUILD
            shopName={offer.shop_name}
            title={offer.offer_title}
            location={offer.area}
            validity={offer.valid_till}
            image={offer.shop_image_url}
          />
        ))}
      </div>
    </section>
  );
}
