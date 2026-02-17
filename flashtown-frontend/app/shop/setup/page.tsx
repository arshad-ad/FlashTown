"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { supabase } from "@/lib/supabase/client";

export default function ShopSetupPage() {
  // const supabase = createSupabaseClient();
  const router = useRouter();

  const [name, setName] = useState("");
  const [town, setTown] = useState("");
  const [category, setCategory] = useState("");
  const [description, setDescription] = useState("");

  async function handleSubmit(e: any) {
    e.preventDefault();

    const { error } = await supabase.from("shops").insert({
      name,
      slug: name.toLowerCase().replace(/\s+/g, "-"),
      town,
      category,
      description,
      verified: true,
    });

    if (error) {
      alert("Error creating shop");
      console.error(error);
      return;
    }

    router.push("/shop");
  }

  return (
    <div className="min-h-screen bg-gray-50 py-8 px-4">
      <div className="max-w-md mx-auto">

        <header className="mb-8 text-center">
          <h1 className="text-2xl font-bold">Setup Your Shop</h1>
          <p className="text-gray-500">One-time setup to start posting offers</p>
        </header>

        <form
          onSubmit={handleSubmit}
          className="bg-white p-6 rounded-xl shadow-sm border space-y-6"
        >

          <input
            placeholder="Shop Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="w-full px-4 py-2 border rounded-lg"
          />

          <input
            placeholder="Town / Area"
            value={town}
            onChange={(e) => setTown(e.target.value)}
            className="w-full px-4 py-2 border rounded-lg"
          />

          <select
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            className="w-full px-4 py-2 border rounded-lg"
          >
            <option value="">Select Category</option>
            <option value="Clothing">Fashion & Clothing</option>
            <option value="Electronics">Electronics</option>
            <option value="Grocery">Grocery</option>
          </select>

          <textarea
            placeholder="Description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            className="w-full px-4 py-2 border rounded-lg"
          />

          <button className="w-full bg-blue-600 text-white py-3 rounded-xl">
            Create Shop
          </button>

        </form>
      </div>
    </div>
  );
}
