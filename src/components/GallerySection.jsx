"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const slides = [
  {
    img: "/images/hero1.jpg",
    title: "Welcome to Spice Garden",
    desc: "Elegant dining with unforgettable ambiance.",
  },
  {
    img: "/images/hero2.jpg",
    title: "Premium Dining Space",
    desc: "Luxury comfort for every occasion.",
  },
  {
    img: "/images/hero3.jpg",
    title: "Crafted Interiors",
    desc: "Designed to elevate your experience.",
  },
  {
    img: "/images/hero4.jpg",
    title: "Moments That Stay",
    desc: "More than just food, it's a memory.",
  },
];

export default function GalleryHorizontal() {
  const containerRef = useRef(null);

  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;

    const panels = gsap.utils.toArray(el.querySelectorAll(".panel"));

    const totalWidth = panels.length * window.innerWidth;

    gsap.to(panels, {
      xPercent: -100 * (panels.length - 1),
      ease: "none",
      scrollTrigger: {
        trigger: el,
        pin: true,
        scrub: 1,
        snap: 1 / (panels.length - 1),
        end: () => `+=${totalWidth}`,
      },
    });

    ScrollTrigger.refresh();
  }, []);

  return (
    <section className="bg-black py-24">

      {/* 🔥 HEADER */}
      <div className="text-center mb-16 px-6">
        <p className="text-yellow-400 uppercase tracking-[0.3em] text-xs mb-3">
          Gallery
        </p>

        <h2 className="text-4xl md:text-6xl font-serif italic text-white">
          Restaurant Gallery
        </h2>

        <p className="text-gray-400 mt-4 max-w-xl mx-auto">
          A glimpse into our ambiance, design, and unforgettable dining moments.
        </p>
      </div>

      {/* 🔥 HORIZONTAL SCROLL */}
      <div ref={containerRef} className="overflow-hidden">

        <div className="flex h-[420px] md:h-[500px] w-[400vw]">

          {slides.map((item, i) => (
            <div
              key={i}
              className="panel w-screen flex items-center justify-center"
            >

              <div className="relative w-[90%] md:w-[70%] h-full rounded-3xl overflow-hidden shadow-2xl group">

                {/* IMAGE */}
                <div
                  className="absolute inset-0 bg-cover bg-center transition duration-700 group-hover:scale-110"
                  style={{ backgroundImage: `url(${item.img})` }}
                ></div>

                {/* OVERLAY */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent"></div>

                {/* CONTENT */}
                <div className="absolute bottom-0 p-6 md:p-10 z-10">
                  <h3 className="text-2xl md:text-3xl font-semibold text-white">
                    {item.title}
                  </h3>

                  <p className="text-gray-300 mt-2 text-sm md:text-base">
                    {item.desc}
                  </p>
                </div>

              </div>

            </div>
          ))}

        </div>
      </div>
    </section>
  );
}