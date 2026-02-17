"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { supabase } from "@/lib/supabase/client";

export default function ShopSetupPage() {
  const router = useRouter();

  const [name, setName] = useState("");
  const [town, setTown] = useState("");
  const [category, setCategory] = useState("");
  const [description, setDescription] = useState("");

  const [loading, setLoading] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");

  function generateSlug(value: string) {
    return value
      .toLowerCase()
      .trim()
      .replace(/[^a-z0-9\s-]/g, "")
      .replace(/\s+/g, "-")
      .replace(/-+/g, "-");
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();

    setErrorMsg("");

    // Basic validation
    if (!name || !town || !category) {
      setErrorMsg("Please fill all required fields.");
      return;
    }

    try {
      setLoading(true);

      const slug = generateSlug(name);

      // Optional: check duplicate slug
      const { data: existing } = await supabase
        .from("shops")
        .select("id")
        .eq("slug", slug)
        .single();

      if (existing) {
        setErrorMsg("Shop name already exists. Try a different name.");
        setLoading(false);
        return;
      }

      const { error } = await supabase.from("shops").insert({
        name,
        slug,
        town,
        category,
        description,
        verified: true,
      });

      if (error) throw error;

      router.push("/shop");

    } catch (err: any) {
  console.error("Create shop error FULL:", JSON.stringify(err, null, 2));
  setErrorMsg(err?.message || "Something went wrong. Please try again.");


    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="min-h-screen bg-gray-50 py-8 px-4">
      <div className="max-w-md mx-auto">

        <header className="mb-8 text-center">
          <h1 className="text-2xl font-bold">Setup Your Shop</h1>
          <p className="text-gray-500">
            One-time setup to start posting offers
          </p>
        </header>

        <form
          onSubmit={handleSubmit}
          className="bg-white p-6 rounded-xl shadow-sm border space-y-6"
        >
          <input
            placeholder="Shop Name *"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="w-full px-4 py-2 border rounded-lg"
          />

          <input
            placeholder="Town / Area *"
            value={town}
            onChange={(e) => setTown(e.target.value)}
            className="w-full px-4 py-2 border rounded-lg"
          />

          <select
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            className="w-full px-4 py-2 border rounded-lg"
          >
            <option value="">Select Category *</option>
            <option value="Clothing">Fashion & Clothing</option>
            <option value="Electronics">Electronics</option>
            <option value="Grocery">Grocery</option>
          </select>

          <textarea
            placeholder="Description (optional)"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            className="w-full px-4 py-2 border rounded-lg"
          />

          {errorMsg && (
            <p className="text-red-500 text-sm">{errorMsg}</p>
          )}

          <button
            type="submit"
            disabled={loading}
            className={`w-full py-3 rounded-xl text-white font-medium transition ${
              loading
                ? "bg-blue-400 cursor-not-allowed"
                : "bg-blue-600 hover:bg-blue-700"
            }`}
          >
            {loading ? "Creating..." : "Create Shop"}
          </button>
        </form>
      </div>
    </div>
  );
}
