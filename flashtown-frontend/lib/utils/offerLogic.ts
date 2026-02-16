export function getActiveOffers(offers: any[]) {
  const today = new Date();

  return offers.filter((offer: any) => {
    const from = offer.start_date ? new Date(offer.start_date) : null;
    const till = offer.expiry_date ? new Date(offer.expiry_date) : null;

    return (
      offer.status === "active" &&
      (!from || today >= from) &&
      (!till || today <= till)
    );
  });
}

export function searchOffers(offers: any[], query: string) {
  if (!query || !query.trim()) return offers;

  const q = query.toLowerCase();

  return offers.filter((offer: any) => {
    return (
      offer.title?.toLowerCase().includes(q) ||
      offer.shops?.name?.toLowerCase().includes(q) ||
      offer.shops?.category?.toLowerCase().includes(q) ||
      offer.shops?.town?.toLowerCase().includes(q)
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
