"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";

const reviews = [
  {
    name: "Arjun Mehta",
    rating: 5,
    text: "The butter chicken was outstanding. Rich, creamy, and full of flavor. Definitely coming back.",
  },
  {
    name: "Neha Kapoor",
    rating: 4,
    text: "Loved the ambiance and lighting. Food was great, but desserts could be improved slightly.",
  },
  {
    name: "Rohit Sen",
    rating: 5,
    text: "Perfect place for family dinners. Biryani was aromatic and portion size was generous.",
  },
  {
    name: "Pooja Sharma",
    rating: 4,
    text: "Nice place overall. Food quality is good, but weekends can get a bit crowded.",
  },
  {
    name: "Amit Das",
    rating: 5,
    text: "One of the best dining experiences I’ve had. Everything from service to food was top notch.",
  },
  {
    name: "Sneha Roy",
    rating: 4,
    text: "Loved the interiors and vibe. Food was delicious, just a bit slow during peak hours.",
  },
  {
    name: "Karan Verma",
    rating: 5,
    text: "Authentic taste and great presentation. Feels like a premium restaurant experience.",
  },
  {
    name: "Priya Nair",
    rating: 3,
    text: "Food was decent but slightly overpriced. Ambience is beautiful though.",
  },
  {
    name: "Vikram Singh",
    rating: 5,
    text: "Absolutely loved the grilled dishes. Service was fast and staff were very polite.",
  },
  {
    name: "Ananya Gupta",
    rating: 4,
    text: "Great place for a date night. Calm environment and tasty food. Would recommend.",
  },
];

export default function Reviews() {
  const rowRef = useRef(null);

  useEffect(() => {
    const el = rowRef.current;
    if (!el) return;

    gsap.to(el, {
      xPercent: -50,
      duration: 25,
      ease: "none",
      repeat: -1,
    });
  }, []);

  return (
    <section className="py-28 bg-black overflow-hidden">

      {/* HEADER */}
      <div className="text-center mb-12 px-6">
        <p className="text-yellow-400 uppercase tracking-[0.3em] text-xs mb-3">
          Testimonials
        </p>

        <h2 className="text-4xl md:text-5xl font-semibold text-white">
          Loved by Our Customers
        </h2>

        <p className="text-gray-400 mt-4 max-w-xl mx-auto">
          Real feedback from guests who experienced our food and ambiance.
        </p>
      </div>

      {/* SCROLLING ROW */}
      <div className="relative">
        <div
          ref={rowRef}
          className="flex gap-6 w-max px-6"
        >
          {[...reviews, ...reviews].map((r, i) => (
            <div
              key={i}
              className="min-w-[280px] max-w-[280px] p-5 rounded-2xl bg-white/5 backdrop-blur-xl border border-white/10 shadow-lg transition hover:-translate-y-2"
            >

              {/* ⭐ Stars */}
              <div className="text-yellow-400 text-sm mb-2">
                {"★".repeat(r.rating)}
                {"☆".repeat(5 - r.rating)}
              </div>

              {/* TEXT */}
              <p className="text-gray-300 text-sm leading-relaxed">
                “{r.text}”
              </p>

              {/* NAME */}
              <h4 className="mt-4 text-yellow-400 font-medium text-sm">
                {r.name}
              </h4>
            </div>
          ))}
        </div>

        {/* EDGE FADE */}
        <div className="pointer-events-none absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-black to-transparent"></div>
        <div className="pointer-events-none absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-black to-transparent"></div>
      </div>

    </section>
  );
}