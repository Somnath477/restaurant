"use client";

import { useState } from "react";

const menuData = {
  veg: [
    { name: "Paneer Butter Masala", price: "₹250" },
    { name: "Veg Biryani", price: "₹220" },
    { name: "Dal Tadka", price: "₹180" },
  ],
  nonveg: [
    { name: "Chicken Biryani", price: "₹300" },
    { name: "Butter Chicken", price: "₹320" },
    { name: "Mutton Curry", price: "₹400" },
  ],
  drinks: [
    { name: "Cold Coffee", price: "₹120" },
    { name: "Lassi", price: "₹80" },
    { name: "Soft Drinks", price: "₹50" },
  ],
};

export default function MenuPage() {
  const [active, setActive] = useState("veg");

  return (
    <div className="min-h-screen bg-black text-white px-4 py-20">

      <h1 className="text-4xl font-bold text-center text-yellow-400 mb-10">
        Our Menu 🍽️
      </h1>

      {/* TABS */}
      <div className="flex justify-center gap-4 mb-10">
        {["veg", "nonveg", "drinks"].map((cat) => (
          <button
            key={cat}
            onClick={() => setActive(cat)}
            className={`px-5 py-2 rounded-full capitalize transition ${
              active === cat
                ? "bg-yellow-400 text-black"
                : "border border-yellow-400 text-yellow-400"
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* MENU ITEMS */}
      <div className="max-w-3xl mx-auto space-y-4">
        {menuData[active].map((item, i) => (
          <div
            key={i}
            className="flex justify-between border-b border-zinc-700 pb-2"
          >
            <span>{item.name}</span>
            <span className="text-yellow-400">{item.price}</span>
          </div>
        ))}
      </div>

    </div>
  );
}