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
export function getDaysLeft(validTill: string) {
  if (!validTill) return "";

  const today = new Date();
  const till = new Date(validTill);

  // remove time part
  today.setHours(0,0,0,0);
  till.setHours(0,0,0,0);

  const diffMs = till.getTime() - today.getTime();
  const days = Math.ceil(diffMs / (1000 * 60 * 60 * 24));

  if (days < 0) return "Expired";
  if (days === 0) return "Ends Today";
  if (days === 1) return "1 day left";

  return `${days} days left`;
}

