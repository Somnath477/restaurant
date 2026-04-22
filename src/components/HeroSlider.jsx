"use client";

import { useEffect, useState, useRef } from "react";
import { motion } from "framer-motion";
import gsap from "gsap";

const images = [
  "/images/hero1.jpg",
  "/images/hero2.jpg",
  "/images/hero3.jpg",
  "/images/hero4.jpg",
];

export default function HeroSlider() {
  const [index, setIndex] = useState(0);
  const heroRef = useRef(null);

  // 🔥 Auto slider
  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % images.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  // 🔥 3D mouse parallax (client-safe)
  useEffect(() => {
    if (typeof window === "undefined") return;

    const handleMove = (e) => {
      const x = (e.clientX / window.innerWidth - 0.5) * 20;
      const y = (e.clientY / window.innerHeight - 0.5) * 20;

      gsap.to(".hero-content", {
        x,
        y,
        duration: 0.6,
        ease: "power3.out",
      });
    };

    window.addEventListener("mousemove", handleMove);
    return () => window.removeEventListener("mousemove", handleMove);
  }, []);

  return (
    <div ref={heroRef} className="relative h-screen w-full overflow-hidden">

      {/* 🔥 IMAGE SLIDES */}
      {images.map((img, i) => (
        <motion.div
          key={i}
          initial={{ opacity: 0, scale: 1.1 }}
          animate={{
            opacity: i === index ? 1 : 0,
            scale: i === index ? 1 : 1.1,
          }}
          transition={{ duration: 1.5 }}
          className="absolute inset-0"
          style={{
            backgroundImage: `url(${img})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        />
      ))}

      {/* 🔥 OVERLAY */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/60 to-black/90"></div>

      {/* 🔥 CONTENT */}
      <div className="hero-content relative z-10 h-full flex flex-col justify-center items-center text-center px-6">

        {/* TAG */}
        <motion.p
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-yellow-400 tracking-[0.3em] uppercase text-xs mb-4"
        >
          Fine Dining Experience
        </motion.p>

        {/* HEADING */}
        <motion.h1
          initial={{ y: 60, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1 }}
          className="text-5xl md:text-7xl font-semibold text-white leading-tight"
        >
          Spice Garden
          <br />
          <span className="text-yellow-400">
            A Taste You’ll Remember
          </span>
        </motion.h1>

        {/* DESCRIPTION */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="mt-6 text-gray-300 max-w-xl text-lg"
        >
          Experience handcrafted dishes, premium ambience, and unforgettable flavors.
        </motion.p>

        {/* CTA */}
        <motion.div
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.8 }}
          className="flex gap-5 mt-10 flex-wrap justify-center"
        >
          <a
            href="/menu"
            className="px-8 py-3 rounded-full text-black font-semibold bg-gradient-to-r from-yellow-400 via-orange-400 to-yellow-500 shadow-lg hover:shadow-yellow-400/50 hover:scale-105 transition"
          >
            Explore Menu
          </a>

          <a
            href="/reservation"
            className="px-8 py-3 rounded-full text-yellow-400 border border-yellow-400 hover:bg-yellow-400 hover:text-black transition"
          >
            Book Table
          </a>
        </motion.div>

        {/* TRUST */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
          className="mt-6 text-gray-400 text-sm"
        >
          ⭐ 4.8 Rating • 500+ Happy Customers
        </motion.p>

      </div>
    </div>
  );
}