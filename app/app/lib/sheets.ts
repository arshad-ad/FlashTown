// app/lib/sheets.ts

export type Shop = {
  shop_id: string;
  shop_name: string;
  category: string;
  area: string;
  phone: string;
  google_maps_url: string;
  instagram_username: string;
  is_active: string;
  shop_image_url: string;
};

export type Offer = {
  offer_id: string;
  shop_id: string;
  offer_title: string;
  offer_description: string;
  offer_mechanism: string;
  offer_value: string;
  offer_currency: string;
  valid_from: string;
  valid_till: string;
  source: string;
  source_url: string;
  status: string;
};

const SHOPS_URL =
  "https://opensheet.elk.sh/1jZrn0QgY66V0KMOH864P_cjQ0aR7uf_0L23nywuw0_c/Shops";

const OFFERS_URL =
  "https://opensheet.elk.sh/1jZrn0QgY66V0KMOH864P_cjQ0aR7uf_0L23nywuw0_c/Offers";

export async function getShops(): Promise<Shop[]> {
  const res = await fetch(SHOPS_URL, { cache: "no-store" });
  return res.json();

}

export async function getOffers(): Promise<Offer[]> {
  const res = await fetch(OFFERS_URL, { cache: "no-store" });
  return res.json();
}
