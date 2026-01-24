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
