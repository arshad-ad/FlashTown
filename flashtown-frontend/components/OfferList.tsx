import { formatValidity } from "@/app/lib/offerLogic";
import OfferCard from "./OfferCard";
type Offer = {
  offer_title: string;
  shop_name: string;
  area: string;
}

export default function OfferList({ offers }: { offers: any[] }) {
  if (!offers || offers.length === 0) {
     console.log('offer from offerlist :',offers)
return (
      <div className="px-4 py-8 text-sm text-gray-500 text-center">
        No active offers right now
      </div>
    );
    
  }

  return (
    <section className="px-4 py-4 max-w-md mx-auto">
      <h2 className="text-lg font-semibold mb-4">
        Active Offers Near You
      </h2>

      <div className="space-y-4">
        {offers.map((offer) => (
          <OfferCard
  id={offer.offer_id}
  shopName={offer.shop_name}
  title={offer.offer_title}
  location={offer.area}
  validity={formatValidity(offer.valid_till)}
  image="" // placeholder for now
/>
        ))}
      </div>
    </section>
  );
}
