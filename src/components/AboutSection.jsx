"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";

export default function AboutSection() {
  const sectionRef = useRef(null);

  useEffect(() => {
    const el = sectionRef.current;

    gsap.fromTo(
      el.querySelectorAll(".fade-up"),
      { y: 80, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        stagger: 0.2,
        duration: 1,
        ease: "power3.out",
      }
    );
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative bg-black py-32 px-6 overflow-hidden "
    >
      {/* 🔥 Background glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[500px] h-[500px] bg-yellow-500/10 blur-[120px] rounded-full"></div>

      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-16 items-center relative z-10">

        {/* 🍽️ IMAGE */}
        <div className="fade-up relative group">
          <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-yellow-400/20 to-orange-500/20 blur-2xl opacity-70 group-hover:opacity-100 transition"></div>

          <img
            src="/images/restaurant-interior.jpg"
            alt="restaurant"
            className="relative rounded-3xl object-cover w-full h-[400px] shadow-2xl group-hover:scale-105 transition duration-700"
          />
        </div>

        {/* ✨ TEXT */}
        <div className="space-y-6">

          <p className="fade-up text-yellow-400 uppercase tracking-[0.3em] text-xs">
            About Our Experience
          </p>

          <h2 className="fade-up text-4xl md:text-5xl font-semibold text-white leading-tight">
            A Culinary Journey
            <br />
            <span className="text-yellow-400">
              Crafted With Passion
            </span>
          </h2>

          <p className="fade-up text-gray-300 text-lg leading-relaxed">
            At Spice Garden, every dish tells a story — a blend of rich
            tradition and modern creativity. We don’t just serve food, we
            create moments that stay with you long after the last bite.
          </p>

          <p className="fade-up text-gray-500 text-sm">
            From handpicked ingredients to carefully designed ambience,
            every detail is curated to deliver an unforgettable dining
            experience.
          </p>

          {/* CTA */}
          <div className="fade-up pt-4">
            <a
              href="/reservation"
              className="inline-block px-8 py-3 rounded-full text-black font-semibold bg-gradient-to-r from-yellow-400 via-orange-400 to-yellow-500 shadow-lg hover:shadow-yellow-400/50 hover:scale-105 transition"
            >
              Reserve Your Table
            </a>
          </div>

        </div>
      </div>
    </section>
  );
}