"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { supabase } from "@/lib/supabase/client";

export default function AddOfferPage() {
  const router = useRouter();

  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [value, setValue] = useState("");
  const [start, setStart] = useState("");
  const [end, setEnd] = useState("");
  const [image, setImage] = useState("");

  async function handleSubmit() {

    // 1️⃣ get latest shop (MVP logic)
    const { data: shop } = await supabase
      .from("shops")
      .select("id")
      .order("created_at", { ascending: false })
      .limit(1)
      .single();

    if (!shop) {
      alert("Create shop first");
      return;
    }

    // 2️⃣ insert offer
    const { error } = await supabase.from("offers").insert({
      shop_id: shop.id,
      title,
      description,
      start_date: start,
      expiry_date: end,
      image_url: image || null,
      status: "active",
    });

    if (error) {
      console.error("Create offer error:", error);
      alert("Failed to create offer");
      return;
    }

    // 3️⃣ redirect
    router.push("/shop");
  }

  return (
    <div className="min-h-screen bg-gray-50 py-8 px-4">
      <div className="max-w-md mx-auto">

        <header className="mb-8 text-center">
          <h1 className="text-2xl font-bold">Add Your Offer</h1>
          <p className="text-gray-500">Reach local customers in minutes</p>
        </header>

        <div className="space-y-6">

          <section className="bg-white p-6 rounded-xl shadow-sm border">
            <h2 className="font-semibold mb-4">🎁 Offer Details</h2>

            <input
              placeholder="Offer Title"
              value={title}
              onChange={(e)=>setTitle(e.target.value)}
              className="w-full px-4 py-2 border rounded-lg mb-3"
            />

            <textarea
              rows={3}
              placeholder="Offer Description"
              value={description}
              onChange={(e)=>setDescription(e.target.value)}
              className="w-full px-4 py-2 border rounded-lg"
            />
          </section>

          <section className="bg-white p-6 rounded-xl shadow-sm border">
            <h2 className="font-semibold mb-4">📅 Validity</h2>

            <div className="grid grid-cols-2 gap-4">
              <input
                type="date"
                value={start}
                onChange={(e)=>setStart(e.target.value)}
                className="border px-4 py-2 rounded-lg"
              />
              <input
                type="date"
                value={end}
                onChange={(e)=>setEnd(e.target.value)}
                className="border px-4 py-2 rounded-lg"
              />
            </div>
          </section>

          <section className="bg-white p-6 rounded-xl shadow-sm border">
            <h2 className="font-semibold mb-4">🖼️ Offer Image</h2>

            <input
              placeholder="Image URL"
              value={image}
              onChange={(e)=>setImage(e.target.value)}
              className="border px-4 py-2 rounded-lg w-full"
            />
          </section>

        </div>

        <button
          onClick={handleSubmit}
          className="w-full mt-8 bg-blue-600 text-white py-3 rounded-xl"
        >
          Submit Offer
        </button>

      </div>
    </div>
  );
}
