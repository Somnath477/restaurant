"use client";

import { useState } from "react";

const menu = [
  { name: "Chicken Biryani", price: 300 },
  { name: "Paneer Butter Masala", price: 250 },
  { name: "Veg Pizza", price: 200 },
];

export default function OrderPage() {
  const [cart, setCart] = useState([]);

  const addToCart = (item) => {
    setCart([...cart, item]);
  };

  const sendOrder = () => {
    const text = cart
      .map((item) => `${item.name} - ₹${item.price}`)
      .join("\n");

    const total = cart.reduce((sum, item) => sum + item.price, 0);

    const message = `
🛒 Order Details

${text}

Total: ₹${total}
`;

    window.open(
      `https://wa.me/91XXXXXXXXXX?text=${encodeURIComponent(message)}`
    );
  };

  return (
    <div className="min-h-screen bg-black text-white px-4 py-20">
      <h1 className="text-4xl text-yellow-400 mb-10 text-center">
        Order Online 🍽️
      </h1>

      {/* MENU */}
      <div className="max-w-xl mx-auto space-y-4">
        {menu.map((item, i) => (
          <div
            key={i}
            className="flex justify-between border-b border-zinc-700 pb-2"
          >
            <span>{item.name}</span>
            <button
              onClick={() => addToCart(item)}
              className="text-yellow-400"
            >
              Add
            </button>
          </div>
        ))}
      </div>

      {/* CART */}
      <div className="max-w-xl mx-auto mt-10">
        <h2 className="text-xl mb-3">Your Cart</h2>

        {cart.map((item, i) => (
          <div key={i} className="text-gray-300 text-sm">
            {item.name}
          </div>
        ))}

        {cart.length > 0 && (
          <button
            onClick={sendOrder}
            className="w-full mt-4 bg-green-500 py-3 rounded"
          >
            Order via WhatsApp
          </button>
        )}
      </div>
    </div>
  );
}