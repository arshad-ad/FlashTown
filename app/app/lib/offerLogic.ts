export function getActiveOffers(offers :any) {
  const today = new Date();

  return offers.filter((offer:any) => {
    const from = new Date(offer.valid_from);
    const till = new Date(offer.valid_till);

    return (
      offer.computed_status === "active" &&
      today >= from &&
      today <= till
    );
  });
}
export function searchOffers(offers :any, query:any) {
  if (!query || !query.trim()) return offers;

  const q = query.toLowerCase();

  return offers.filter((offer:any) => {
    return (
      offer.offer_title?.toLowerCase().includes(q) ||
      offer.shop_name?.toLowerCase().includes(q) ||
      offer.category?.toLowerCase().includes(q) ||
      offer.area?.toLowerCase().includes(q)
    );
  });
}
export function formatValidity(validTill: string) {
  const today = new Date();
  const till = new Date(validTill);

  if (today.toDateString() === till.toDateString()) {
    return "Ends Today";
  }

  return `Till ${till.toLocaleDateString()}`;
}


