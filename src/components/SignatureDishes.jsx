"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";

const dishes = [
  {
    name: "Chicken Biryani",
    img: "/images/food1.jpg",
    price: "₹300",
    desc: "Aromatic basmati rice layered with tender chicken & rich spices.",
  },
  {
    name: "Paneer Butter Masala",
    img: "/images/food2.jpg",
    price: "₹250",
    desc: "Creamy tomato gravy with soft paneer cubes.",
  },
  {
    name: "Veg Pizza",
    img: "/images/food3.jpg",
    price: "₹200",
    desc: "Fresh veggies with melted cheese on a crispy base.",
  },
];

export default function SignatureDishes() {
  const cardsRef = useRef([]);

  useEffect(() => {
    // 🔥 reveal animation
    gsap.from(cardsRef.current, {
      y: 80,
      opacity: 0,
      stagger: 0.2,
      duration: 1,
      ease: "power3.out",
    });

    // 🔥 3D tilt effect
    cardsRef.current.forEach((card) => {
      if (!card) return;

      const handleMove = (e) => {
        const rect = card.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;

        const rotateX = (y / rect.height - 0.5) * 10;
        const rotateY = (x / rect.width - 0.5) * -10;

        gsap.to(card, {
          rotateX,
          rotateY,
          transformPerspective: 800,
          ease: "power2.out",
          duration: 0.3,
        });
      };

      const handleLeave = () => {
        gsap.to(card, {
          rotateX: 0,
          rotateY: 0,
          duration: 0.5,
          ease: "power3.out",
        });
      };

      card.addEventListener("mousemove", handleMove);
      card.addEventListener("mouseleave", handleLeave);

      // cleanup
      return () => {
        card.removeEventListener("mousemove", handleMove);
        card.removeEventListener("mouseleave", handleLeave);
      };
    });
  }, []);

  return (
    <section className="relative py-32 bg-gradient-to-b from-black via-zinc-900 to-black px-6 overflow-visible">

      {/* 🔥 background glow */}
      <div className="absolute top-20 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-yellow-500/10 blur-[140px] rounded-full"></div>

      {/* HEADER */}
      <div className="text-center mb-20 relative z-10">
        <p className="text-yellow-400 uppercase tracking-[0.3em] text-xs mb-3">
          Our Specials
        </p>

        <h2 className="text-4xl md:text-5xl font-semibold text-white">
          Signature Dishes
        </h2>

        <p className="text-gray-400 mt-4 max-w-xl mx-auto">
          Crafted with passion, served with perfection.
        </p>
      </div>

      {/* 🔥 GRID FIXED */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-10 max-w-6xl mx-auto relative z-10">

        {dishes.map((item, i) => (
          <div
            key={i}
            ref={(el) => {
              if (el) cardsRef.current[i] = el;
            }}
            className="group relative rounded-3xl bg-zinc-900/80 border border-zinc-800 overflow-visible shadow-xl transition">

            {/* IMAGE */}
            <div className="overflow-hidden">
              <img
                src={item.img}
                alt={item.name}
                className="h-64 w-full object-cover transition duration-700 group-hover:scale-110"
              />
            </div>

            {/* CONTENT */}
            <div className="p-6">
              <h3 className="text-xl font-semibold text-white">
                {item.name}
              </h3>

              <p className="text-gray-400 text-sm mt-2">
                {item.desc}
              </p>

              <div className="flex items-center justify-between mt-5">
                <span className="text-yellow-400 font-semibold text-lg">
                  {item.price}
                </span>

                <button className="text-sm px-4 py-2 rounded-full bg-yellow-400 text-black hover:scale-105 transition">
                  Order
                </button>
              </div>
            </div>

            {/* glow effect */}
            <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition bg-gradient-to-br from-yellow-400/10 to-transparent pointer-events-none"></div>

          </div>
        ))}

      </div>
    </section>
  );
}