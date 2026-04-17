"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";

const images = [
  "/images/hero1.jpg",
  "/images/hero2.jpg",
  "/images/hero3.jpg",
  "/images/hero4.jpg",
];

export default function HeroSlider() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % images.length);
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative h-screen w-full overflow-hidden">

      {/* IMAGE SLIDES */}
      {images.map((img, i) => (
        <motion.div
          key={i}
          initial={{ opacity: 0 }}
          animate={{ opacity: i === index ? 1 : 0 }}
          transition={{ duration: 1.2 }}
          className="absolute inset-0"
          style={{
            backgroundImage: `url(${img})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        />
      ))}

      {/* DARK OVERLAY CONTENT */}
      <div className="absolute inset-0 bg-black/70 flex flex-col justify-center items-center text-center px-4">

        {/* SMALL TAGLINE */}
        <motion.p
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-yellow-400 tracking-widest uppercase text-sm mb-3"
        >
          Fine Dining • Since 2020
        </motion.p>

        {/* MAIN HEADING */}
        <motion.h1
          initial={{ y: 40, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          className="text-5xl md:text-7xl font-extrabold text-white leading-tight"
        >
          Spice Garden
        </motion.h1>

        {/* SUBTITLE */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="italic text-gray-400 mt-2"
        >
          “Where every flavor tells a story”
        </motion.p>

        {/* DESCRIPTION */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="mt-5 text-gray-300 max-w-xl text-lg"
        >
          Indulge in rich flavors, handcrafted dishes, and a luxurious ambience
          that transforms every meal into an unforgettable experience.
        </motion.p>

        {/* CTA BUTTONS */}
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          className="flex gap-4 mt-8 flex-wrap justify-center"
        >
          <a
            href="/menu"
            className="bg-yellow-400 text-black px-7 py-3 rounded-full font-semibold hover:scale-105 transition"
          >
            Explore Menu
          </a>

          <a
            href="/reservation"
            className="border border-yellow-400 text-yellow-400 px-7 py-3 rounded-full hover:bg-yellow-400 hover:text-black transition"
          >
            Book a Table
          </a>
        </motion.div>

        {/* TRUST LINE */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="mt-6 text-gray-400 text-sm"
        >
          ⭐ Rated 4.8 by 500+ happy customers
        </motion.p>

      </div>
    </div>
  );
}