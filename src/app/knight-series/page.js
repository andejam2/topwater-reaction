"use client";

import Image from "next/image";
import { useState } from "react";
import { useCart } from "../components/cartcontext";
import { priceIds } from "../lib/priceIds";

// Select which price ID to use based on your env
const MODE = process.env.NEXT_PUBLIC_STRIPE_MODE === "live" ? "live" : "test";

// ---- DATA: White on the left, Black on the right ----
const PAIRS = [
  {
    model: "Feather Pop",
    white: {
      id: "featherpop-whiteknight",
      name: "White Knight Feather Pop",
      price: 15.78,
      image: "/featherWhiteKnight.jpg",
    },
    black: {
      id: "featherpop-blackknight",
      name: "Black Knight Feather Pop",
      price: 15.78,
      image: "/featherBlackKnight.jpg",
    },
  },
  {
    model: "Gilled Popper",
    white: {
      id: "gilledpopper-whiteknight",
      name: "White Knight Gilled Popper",
      price: 15.78,
      image: "/gilledWhiteKnight.jpg",
    },
    black: {
      id: "gilledpopper-blackknight",
      name: "Black Knight Gilled Popper",
      price: 15.78,
      image: "/gilledBlackKnight.jpg",
    },
  },
  {
    model: "TopWalker",
    white: {
      id: "topwalker-whiteknight",
      name: "White Knight TopWalker",
      price: 15.78,
      image: "/topwalkerWhiteKnight.jpg",
    },
    black: {
      id: "topwalker-blackknight",
      name: "Black Knight TopWalker",
      price: 15.78,
      image: "/topwalkerBlackKnight.jpg",
    },
  },
];

const money = (n) =>
  new Intl.NumberFormat("en-US", { style: "currency", currency: "USD" }).format(n);

export default function KnightSeriesPage() {
  const { addToCart } = useCart();

  // Single card for either White or Black item
  const Card = ({ item }) => {
    const [quantity, setQuantity] = useState(1);
    const priceId = priceIds[item.id]?.[MODE]; // must exist in src/app/lib/priceIds.js

    const clampQty = (n) => {
      const q = Number.isFinite(n) ? Math.max(1, Math.floor(n)) : 1;
      return q;
    };

    const handleAdd = () => {
      addToCart({
        id: item.id,
        name: item.name,
        price: item.price,
        quantity,
        image: item.image,
        priceId,
      });
    };

    return (
      <article className="rounded-2xl border border-white/10 overflow-hidden bg-black/40">
        {/* full image (no crop), exact size hints to prevent layout shift */}
        <div className="relative w-full bg-black">
          <Image
            src={item.image}
            alt={item.name}
            width={1670}
            height={600}
            className="w-full h-auto object-contain rounded-t-2xl"
            priority={false}
          />
        </div>

        <div className="p-4 space-y-3">
          <h2 className="text-xl font-bold">{item.name}</h2>

          <div className="flex items-center justify-between">
            <span className="text-lg font-semibold">{money(item.price)}</span>
          </div>

          {/* Quantity + Add to Cart (matches your existing styling) */}
          <div className="flex items-center justify-between gap-3">
            <label className="text-white">Quantity</label>
            <input
              type="number"
              min={1}
              value={quantity}
              onChange={(e) => setQuantity(clampQty(parseInt(e.target.value, 10)))}
              className="bg-gray-300 text-black w-16 text-center border border-gray-400 rounded px-2 py-1"
            />

            <button
              onClick={handleAdd}
              className="bg-[#7A9C45] hover:bg-[#8FB952] active:bg-odgreen text-white px-4 py-2 rounded"
            >
              Add to Cart
            </button>
          </div>
        </div>
      </article>
    );
  };

  return (
    <div className="mx-auto max-w-7xl py-10 space-y-8">
      <header className="text-center space-y-3">
        <h1 className="text-4xl font-bold mb-2 text-center">Knight Series</h1>
        <p className="text-white/80 max-w-2xl mx-auto">
          Fishing's not luck - it's strategy. Move smart. Strike fast.
        </p>
      </header>

      {/* One row per model; two columns on desktop */}
      <div className="space-y-8">
        {PAIRS.map((pair) => (
          <section key={pair.model} aria-label={pair.model}>
            <div className="mb-3 px-1">
              <h3 className="text-lg font-semibold text-white/90">{pair.model}</h3>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Left: White */}
              <Card item={pair.white} />
              {/* Right: Black */}
              <Card item={pair.black} />
            </div>
          </section>
        ))}
      </div>

      <section className="rounded-2xl border border-white/10 p-6 md:p-8 bg-black/40">
        <h3 className="text-xl font-semibold mb-2">About the Knight Series</h3>
        <p className="text-white/80">
          Hand-finished, small-batch runs. White and Black finishes nod to the chessboard—tuned for long casts and
          explosive strikes. 
        </p>
      </section>
    </div>
  );
}
