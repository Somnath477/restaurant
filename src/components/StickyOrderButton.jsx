"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";

export default function StickyOrderButton() {
  const btnRef = useRef(null);

  useEffect(() => {
    const btn = btnRef.current;

    // 🎬 floating animation
    gsap.to(btn, {
      y: -8,
      repeat: -1,
      yoyo: true,
      duration: 1.5,
      ease: "power1.inOut",
    });

    // 🧲 magnetic hover
    const move = (e) => {
      const rect = btn.getBoundingClientRect();
      const x = e.clientX - rect.left - rect.width / 2;
      const y = e.clientY - rect.top - rect.height / 2;

      gsap.to(btn, {
        x: x * 0.2,
        y: y * 0.2,
        duration: 0.3,
      });
    };

    const leave = () => {
      gsap.to(btn, { x: 0, y: 0, duration: 0.3 });
    };

    btn.addEventListener("mousemove", move);
    btn.addEventListener("mouseleave", leave);

    return () => {
      btn.removeEventListener("mousemove", move);
      btn.removeEventListener("mouseleave", leave);
    };
  }, []);

  return (
    <>
      {/* 🔥 BUTTON */}
      <a
        ref={btnRef}
        href="/order"
        className="fixed bottom-5 left-1/2 -translate-x-1/2 z-50 md:hidden"
      >
        <div className="relative px-7 py-3 rounded-full text-white font-semibold bg-gradient-to-r from-green-500 to-emerald-600 shadow-xl transition hover:scale-105">

          Order Now

          {/* 🔥 glow pulse */}
          <span className="absolute inset-0 rounded-full bg-green-400 opacity-30 blur-xl animate-ping"></span>
        </div>
      </a>
    </>
  );
}