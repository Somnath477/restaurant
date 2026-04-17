"use client";

import { useState } from "react";

export default function Reservation() {
  const [form, setForm] = useState({
    name: "",
    phone: "",
    date: "",
    time: "",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = () => {
    const message = `
📅 Table Reservation Request

Name: ${form.name}
Phone: ${form.phone}
Date: ${form.date}
Time: ${form.time}
`;

    window.open(
      `https://wa.me/91XXXXXXXXXX?text=${encodeURIComponent(message)}`
    );
  };

  return (
    <div className="min-h-screen bg-black text-white px-4 py-20 max-w-xl mx-auto">
      <h1 className="text-4xl text-yellow-400 font-bold mb-6 text-center">
        Book a Table 🍽️
      </h1>

      <input
        name="name"
        placeholder="Name"
        onChange={handleChange}
        className="w-full p-3 mb-3 rounded bg-zinc-900 border border-zinc-700"
      />

      <input
        name="phone"
        placeholder="Phone"
        onChange={handleChange}
        className="w-full p-3 mb-3 rounded bg-zinc-900 border border-zinc-700"
      />

      <input
        type="date"
        name="date"
        onChange={handleChange}
        className="w-full p-3 mb-3 rounded bg-zinc-900 border border-zinc-700"
      />

      <input
        type="time"
        name="time"
        onChange={handleChange}
        className="w-full p-3 mb-3 rounded bg-zinc-900 border border-zinc-700"
      />

      <button
        onClick={handleSubmit}
        className="w-full bg-yellow-400 text-black py-3 rounded font-semibold mt-4"
      >
        Confirm via WhatsApp
      </button>
    </div>
  );
}