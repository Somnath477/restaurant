"use client";

import { motion } from "framer-motion";

const reviews = [
  {
    name: "Rahul Sharma",
    text: "Amazing food and great ambience. Loved the biryani!",
  },
  {
    name: "Priya Das",
    text: "Best restaurant experience in Kolkata. Highly recommended!",
  },
  {
    name: "Amit Roy",
    text: "Quick service and delicious food. Will visit again.",
  },
  {
    name: "Sneha Gupta",
    text: "Loved the vibe and taste. Perfect place for dinner.",
  },
];

export default function Reviews() {
  return (
    <section className="py-24 bg-black text-white px-4">

      <h2 className="text-4xl text-yellow-400 text-center mb-12">
        What Our Customers Say ⭐
      </h2>

      <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
        {reviews.map((r, i) => (
          <motion.div
            key={i}
            whileHover={{ scale: 1.03 }}
            className="bg-zinc-900 border border-zinc-800 p-6 rounded-2xl shadow-lg"
          >
            {/* Stars */}
            <div className="text-yellow-400 mb-2">★★★★★</div>

            <p className="text-gray-300 text-sm">“{r.text}”</p>

            <h4 className="mt-4 font-semibold text-yellow-400">
              {r.name}
            </h4>
          </motion.div>
        ))}
      </div>

    </section>
  );
}