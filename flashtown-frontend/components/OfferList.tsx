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
            key={offer.id}
            shopName={offer.shops?.name}
            title={offer.title}
            location={offer.shops?.town}
            validity={offer.expiry_date}
            image={offer.shops?.logo_url}
          />
        ))}
      </div>
    </section>
  );
}
