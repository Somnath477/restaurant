"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";

export default function ReservationSection() {
  const sectionRef = useRef(null);

  useEffect(() => {
    const el = sectionRef.current;

    gsap.from(el.querySelectorAll(".fade-up"), {
      y: 80,
      opacity: 0,
      stagger: 0.2,
      duration: 1,
      ease: "power3.out",
    });
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative py-28 bg-black px-6 overflow-hidden"
    >
      {/* 🔥 glow background */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-yellow-500/10 blur-[140px] rounded-full"></div>

      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center relative z-10">

        {/* 🍽️ LEFT SIDE (CTA) */}
        <div className="space-y-6">

          <p className="fade-up text-yellow-400 uppercase tracking-[0.3em] text-xs">
            Reservation
          </p>

          <h2 className="fade-up text-4xl md:text-5xl font-semibold text-white leading-tight">
            Reserve Your Table
            <br />
            <span className="text-yellow-400">
              For an Unforgettable Experience
            </span>
          </h2>

          <p className="fade-up text-gray-300 max-w-md">
            Book your table in advance and enjoy a seamless dining experience
            with premium ambiance and exceptional service.
          </p>

          {/* CTA BUTTON */}
          <div className="fade-up pt-4">
            <a
              href="/reservation"
              className="inline-block px-8 py-3 rounded-full text-black font-semibold bg-gradient-to-r from-yellow-400 via-orange-400 to-yellow-500 shadow-lg hover:shadow-yellow-400/50 hover:scale-105 transition"
            >
              Book a Table
            </a>
          </div>

          {/* EXTRA INFO */}
          <div className="fade-up text-sm text-gray-500 pt-4 space-y-1">
            <p>📞 Call: +91 98765 43210</p>
            <p>⏰ Open: 11:00 AM – 11:00 PM</p>
          </div>

        </div>

        {/* 📍 RIGHT SIDE (MAP CARD) */}
        <div className="fade-up relative group">

          {/* glow */}
          <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-yellow-400/20 to-orange-500/20 blur-2xl opacity-60 group-hover:opacity-100 transition"></div>

          <div className="relative rounded-3xl overflow-hidden border border-white/10 backdrop-blur-xl bg-white/5 shadow-2xl">

            <iframe
              src="https://www.google.com/maps?q=Park+Street+Kolkata&output=embed"
              className="w-full h-[350px] md:h-[420px] border-0"
              loading="lazy"
            ></iframe>

            {/* LOCATION TEXT */}
            <div className="p-4 text-center">
              <p className="text-yellow-400 font-medium">
                Park Street, Kolkata
              </p>
              <p className="text-gray-400 text-sm">
                Easily accessible prime location
              </p>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}