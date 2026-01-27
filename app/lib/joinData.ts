export function joinOffersWithShops(offers: any[], shops: any[]) {
  return offers.map((offer) => {
    const shop = shops.find(
      (s) => s.shop_id === offer.shop_id
    );

    return {
      ...offer,

      // enrich from shop
      shop_name: shop?.shop_name || "",
      category: shop?.category || "",
      area: shop?.area || "",
      phone: shop?.phone || "",
      google_maps_url: shop?.google_maps_url || "",
      shop_image_url: shop?.shop_image_url || "",
    };
  });
}
