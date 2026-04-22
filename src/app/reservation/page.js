"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";

const images = [
  "/images/hero1.jpg",
  "/images/hero2.jpg",
  "/images/hero3.jpg",
  "/images/hero4.jpg",
];

export default function Reservation() {
  const [index, setIndex] = useState(0);

  const [form, setForm] = useState({
    name: "",
    phone: "",
    date: "",
    time: "",
    guests: "",
  });

  const [error, setError] = useState("");
  const [success, setSuccess] = useState(false);

  // 🎬 background slider
  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % images.length);
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = () => {
    if (!form.name || !form.phone || !form.date || !form.time) {
      setError("Please fill all required fields");
      return;
    }

    setError("");
    setSuccess(true);

    const message = `📅 *Table Reservation*

Name: ${form.name}
Phone: ${form.phone}
Guests: ${form.guests || "Not specified"}
Date: ${form.date}
Time: ${form.time}`;

    setTimeout(() => {
      window.open(
        `https://wa.me/91XXXXXXXXXX?text=${encodeURIComponent(message)}`
      );
    }, 1200);
  };

  return (
    <div className="relative min-h-screen overflow-hidden">

      {/* 🔥 BACKGROUND SLIDER */}
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

      {/* 🔥 DARK OVERLAY */}
      <div className="absolute inset-0 bg-black/75 backdrop-blur-sm"></div>

      {/* 🔥 CONTENT */}
      <div className="relative z-10 min-h-screen px-6 py-24 text-white">

        {/* HEADER */}
        <div className="text-center mb-16">
          <p className="text-yellow-400 uppercase tracking-[0.3em] text-xs mb-3">
            Reservation
          </p>

          <h1 className="text-5xl md:text-7xl font-serif italic">
            Spice Garden
          </h1>

          <p className="text-gray-300 mt-4 text-lg">
            Reserve your table for a premium dining experience
          </p>
        </div>

        {/* MAIN */}
        <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-10 items-center">

          {/* LEFT INFO */}
          <div className="space-y-6">
            <h2 className="text-3xl text-yellow-400 font-semibold">
              Experience Fine Dining
            </h2>

            <p className="text-gray-300">
              Enjoy handcrafted dishes, luxurious ambiance, and seamless service.
              Book your table in advance for the best experience.
            </p>

            <div className="text-sm text-gray-400 space-y-2">
              <p>📍 Park Street, Kolkata</p>
              <p>⏰ 11:00 AM – 11:00 PM</p>
              <p>📞 +91 98765 43210</p>
            </div>
          </div>

          {/* FORM */}
          <div className="p-8 rounded-3xl bg-white/10 backdrop-blur-xl border border-white/20 shadow-2xl space-y-4">

            <input
              name="name"
              placeholder="Full Name"
              onChange={handleChange}
              className="w-full p-3 rounded bg-transparent border border-white/20 focus:border-yellow-400 outline-none"
            />

            <input
              name="phone"
              placeholder="Phone Number"
              onChange={handleChange}
              className="w-full p-3 rounded bg-transparent border border-white/20 focus:border-yellow-400 outline-none"
            />

            <input
              name="guests"
              placeholder="Number of Guests"
              onChange={handleChange}
              className="w-full p-3 rounded bg-transparent border border-white/20 focus:border-yellow-400 outline-none"
            />

            <div className="grid grid-cols-2 gap-4">
              <input
                type="date"
                name="date"
                onChange={handleChange}
                className="w-full p-3 rounded bg-transparent border border-white/20 focus:border-yellow-400 outline-none"
              />

              <input
                type="time"
                name="time"
                onChange={handleChange}
                className="w-full p-3 rounded bg-transparent border border-white/20 focus:border-yellow-400 outline-none"
              />
            </div>

            {error && <p className="text-red-400 text-sm">{error}</p>}
            {success && (
              <p className="text-green-400 text-sm">
                Redirecting to WhatsApp...
              </p>
            )}

            <button
              onClick={handleSubmit}
              className="w-full mt-2 py-3 rounded-full bg-gradient-to-r from-yellow-400 to-orange-400 text-black font-semibold hover:scale-105 transition shadow-lg"
            >
              Confirm Reservation
            </button>

          </div>

        </div>
      </div>
    </div>
  );
}