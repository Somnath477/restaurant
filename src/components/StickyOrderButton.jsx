"use client";

export default function StickyOrderButton() {
  return (
    <a
      href="/order"
      className="fixed bottom-4 left-1/2 -translate-x-1/2 bg-green-500 text-white px-6 py-3 rounded-full shadow-lg md:hidden z-50"
    >
      🛒 Order Now
    </a>
  );
}