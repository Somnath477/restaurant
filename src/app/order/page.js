"use client";

import { useState } from "react";
import { menu } from "@/data/menuData";

export default function OrderPage() {
  const [cart, setCart] = useState({});

  // 🔥 flatten all items
  const allItems = menu.flatMap((section) => section.items);

  // ➕ add
  const addToCart = (item) => {
    setCart((prev) => ({
      ...prev,
      [item.name]: {
        ...item,
        qty: prev[item.name] ? prev[item.name].qty + 1 : 1,
      },
    }));
  };

  // ➖ remove
  const removeFromCart = (item) => {
    setCart((prev) => {
      const updated = { ...prev };

      if (updated[item.name].qty === 1) {
        delete updated[item.name];
      } else {
        updated[item.name].qty -= 1;
      }

      return updated;
    });
  };

  // 💰 total
  const total = Object.values(cart).reduce(
    (sum, item) => sum + item.price * item.qty,
    0
  );

  // 📲 WhatsApp
  const sendOrder = () => {
    const items = Object.values(cart)
      .map(
        (item) =>
          `${item.name} x${item.qty} = ₹${item.price * item.qty}`
      )
      .join("\n");

    const message = `🛒 *New Order*\n\n${items}\n\nTotal: ₹${total}`;

    window.open(
      `https://wa.me/91XXXXXXXXXX?text=${encodeURIComponent(message)}`
    );
  };

  return (
    <div className="min-h-screen bg-black text-white px-6 py-20">

      {/* HEADER */}
      <h1 className="text-4xl text-yellow-400 text-center mb-10">
        Order Online
      </h1>

      {/* MENU LIST */}
      <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-6">

        {allItems.map((item, i) => (
          <div
            key={i}
            className="p-5 rounded-2xl bg-white/5 border border-white/10 flex justify-between items-center"
          >

            <div>
              <h3>{item.name}</h3>
              <p className="text-yellow-400 text-sm">₹{item.price}</p>
            </div>

            {/* CONTROLS */}
            <div className="flex items-center gap-3">
              {cart[item.name] ? (
                <>
                  <button
                    onClick={() => removeFromCart(item)}
                    className="w-8 h-8 bg-zinc-800 rounded-full"
                  >
                    -
                  </button>

                  <span>{cart[item.name].qty}</span>

                  <button
                    onClick={() => addToCart(item)}
                    className="w-8 h-8 bg-yellow-400 text-black rounded-full"
                  >
                    +
                  </button>
                </>
              ) : (
                <button
                  onClick={() => addToCart(item)}
                  className="px-4 py-1 bg-yellow-400 text-black rounded-full text-sm"
                >
                  Add
                </button>
              )}
            </div>

          </div>
        ))}

      </div>

      {/* CART */}
      <div className="max-w-5xl mx-auto mt-12 p-6 bg-white/5 rounded-3xl border border-white/10">

        <h2 className="text-xl mb-4 text-yellow-400">Your Cart</h2>

        {Object.values(cart).map((item, i) => (
          <div key={i} className="flex justify-between text-sm mb-2">
            <span>
              {item.name} x{item.qty}
            </span>
            <span>₹{item.price * item.qty}</span>
          </div>
        ))}

        {total > 0 && (
          <>
            <div className="border-t border-white/10 mt-4 pt-4 flex justify-between font-semibold">
              <span>Total</span>
              <span className="text-yellow-400">₹{total}</span>
            </div>

            <button
              onClick={sendOrder}
              className="w-full mt-6 py-3 rounded-full bg-green-500"
            >
              Order via WhatsApp
            </button>
          </>
        )}
      </div>

    </div>
  );
}