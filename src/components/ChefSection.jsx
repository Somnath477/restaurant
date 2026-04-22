"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";

export default function ChefSection() {
  const sectionRef = useRef(null);

  useEffect(() => {
    const el = sectionRef.current;

    gsap.from(el.querySelectorAll(".chef-animate"), {
      y: 60,
      opacity: 0,
      stagger: 0.2,
      duration: 1,
      ease: "power3.out",
    });
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative py-28 bg-zinc-900 px-6 overflow-hidden"
    >
      {/* 🔥 background glow */}
      <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-yellow-500/10 blur-[120px] rounded-full"></div>

      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-16 items-center relative z-10">

        {/* 🍽️ IMAGE */}
        <div className="chef-animate relative group">

          {/* glow */}
          <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-yellow-400/20 to-orange-500/20 blur-2xl opacity-60 group-hover:opacity-100 transition"></div>

          <div className="relative overflow-hidden rounded-3xl">
            <img
              src="/images/chef.jpg"
              alt="Chef"
              className="w-full h-[320px] md:h-[420px] object-cover transition duration-700 group-hover:scale-105"
            />
          </div>

        </div>

        {/* ✨ TEXT */}
        <div className="space-y-6">

          <p className="chef-animate text-yellow-400 uppercase tracking-[0.3em] text-xs">
            Our Master Chef
          </p>

          <h2 className="chef-animate text-3xl md:text-4xl font-semibold text-white leading-tight">
            Crafted by Passion.
            <br />
            <span className="text-yellow-400">
              Served with Excellence.
            </span>
          </h2>

          <p className="chef-animate text-gray-300 leading-relaxed">
            Our chefs blend tradition with innovation to create dishes that go
            beyond taste. Every ingredient is carefully selected, every plate is
            thoughtfully designed, and every experience is made unforgettable.
          </p>

          <p className="chef-animate text-gray-500 text-sm">
            With years of culinary mastery, our kitchen is driven by creativity,
            precision, and a deep love for food.
          </p>

          {/* CTA */}
          <div className="chef-animate pt-4">
            <a
              href="/reservation"
              className="inline-block px-7 py-3 rounded-full text-black font-semibold bg-gradient-to-r from-yellow-400 via-orange-400 to-yellow-500 shadow-lg hover:shadow-yellow-400/50 hover:scale-105 transition"
            >
              Book a Dining Experience
            </a>
          </div>

        </div>
      </div>
    </section>
  );
}