"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";

/* 🔥 BACKGROUND IMAGES */
const images = [
  "/images/hero1.jpg",
  "/images/hero2.jpg",
  "/images/hero3.jpg",
  "/images/hero4.jpg",
];

/* 🔥 MENU DATA */
const createItems = (names) =>
  names.map((name, i) => ({
    name,
    price: `₹${150 + i * 20}`,
    desc: "Chef special preparation with premium ingredients",
  }));

const menu = [
  {
    category: "Starters",
    items: createItems([
      "Paneer Tikka", "Chicken Tikka", "Veg Cutlet", "Fish Fry",
      "Hara Bhara Kabab", "Seekh Kabab", "Crispy Corn", "Spring Roll",
      "Chicken Lollipop", "Cheese Balls",
    ]),
  },
  {
    category: "Appetizers",
    items: createItems([
      "Chilli Paneer", "Chilli Chicken", "Garlic Mushrooms", "Veg Manchurian",
      "Chicken 65", "Baby Corn Fry", "Crispy Veg", "Pepper Chicken",
      "Fried Prawns", "Cheese Nachos",
    ]),
  },
  {
    category: "Sizzlers",
    items: createItems([
      "Paneer Sizzler", "Chicken Sizzler", "Veg Sizzler", "BBQ Chicken",
      "Mixed Grill", "Fish Sizzler", "Mushroom Sizzler", "Cheese Sizzler",
      "Spicy Chicken Sizzler", "Tandoori Platter",
    ]),
  },
  {
    category: "Main Course",
    items: createItems([
      "Butter Chicken", "Dal Makhani", "Paneer Butter Masala", "Chicken Curry",
      "Mutton Rogan Josh", "Kadai Paneer", "Palak Paneer", "Egg Curry",
      "Malai Kofta", "Mixed Veg Curry",
    ]),
  },
  {
    category: "Pizza / Pasta",
    items: createItems([
      "Margherita Pizza", "Farmhouse Pizza", "Veg Loaded Pizza", "Chicken Pizza",
      "White Sauce Pasta", "Red Sauce Pasta", "Penne Alfredo", "Spaghetti",
      "Cheese Burst Pizza", "Mushroom Pasta",
    ]),
  },
  {
    category: "Chinese",
    items: createItems([
      "Hakka Noodles", "Schezwan Noodles", "Veg Fried Rice", "Chicken Fried Rice",
      "Chilli Garlic Noodles", "Manchurian", "Spring Rolls", "Chilli Paneer",
      "Hot & Sour Soup", "Sweet Corn Soup",
    ]),
  },
  {
    category: "Cocktails",
    items: createItems([
      "Mojito", "Martini", "Whiskey Sour", "Bloody Mary",
      "Pina Colada", "Cosmopolitan", "Old Fashioned", "Long Island",
      "Margarita", "Tequila Sunrise",
    ]),
  },
  {
    category: "Mocktails",
    items: createItems([
      "Virgin Mojito", "Blue Lagoon", "Fruit Punch", "Mint Cooler",
      "Lemon Iced Tea", "Strawberry Splash", "Orange Blast", "Watermelon Cooler",
      "Pineapple Fizz", "Green Apple Soda",
    ]),
  },
  {
    category: "Drinks",
    items: createItems([
      "Cold Coffee", "Hot Coffee", "Masala Chai", "Green Tea",
      "Milkshake", "Iced Latte", "Cappuccino", "Espresso",
      "Hot Chocolate", "Black Coffee",
    ]),
  },
  {
    category: "Soft Drinks",
    items: createItems([
      "Coke", "Pepsi", "Sprite", "Fanta",
      "Soda", "Mineral Water", "Tonic Water", "Diet Coke",
      "Sparkling Water", "Energy Drink",
    ]),
  },
  {
    category: "Desserts",
    items: createItems([
      "Gulab Jamun", "Rasmalai", "Ice Cream", "Brownie",
      "Cheesecake", "Chocolate Lava Cake", "Kulfi", "Fruit Salad",
      "Caramel Custard", "Pudding",
    ]),
  },
];

export default function MenuPage() {
  const [index, setIndex] = useState(0);

  /* 🎬 BACKGROUND SLIDER */
  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % images.length);
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative min-h-screen overflow-hidden">

      {/* 🔥 BACKGROUND */}
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

      {/* 🔥 OVERLAY */}
      <div className="absolute inset-0 bg-black/80 backdrop-blur-sm"></div>

      {/* 🔥 CONTENT */}
      <div className="relative z-10 text-white px-6 py-20">

        {/* HEADER */}
        <div className="text-center mb-16">
          <p className="text-yellow-400 uppercase tracking-[0.3em] text-xs mb-3">
            Our Menu
          </p>

          <h1 className="text-4xl md:text-5xl font-semibold">
            Digital Menu Card
          </h1>

          <p className="text-gray-300 mt-4">
            Crafted with passion. Served with perfection.
          </p>
        </div>

        {/* MENU */}
        <div className="max-w-5xl mx-auto space-y-12">

          {menu.map((section, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
              className="p-6 md:p-8 rounded-3xl bg-white/10 backdrop-blur-xl border border-white/20 shadow-xl"
            >

              <h2 className="text-2xl md:text-3xl text-yellow-400 mb-6 font-semibold">
                {section.category}
              </h2>

              <div className="max-h-[420px] overflow-y-auto pr-2 space-y-4">

                {section.items.map((item, j) => (
                  <div
                    key={j}
                    className="group flex justify-between items-start gap-4 border-b border-white/10 pb-3 hover:border-yellow-400 transition"
                  >

                    <div>
                      <h3 className="text-lg font-medium">
                        {item.name}
                      </h3>
                      <p className="text-gray-300 text-sm">
                        {item.desc}
                      </p>
                    </div>

                    <div className="text-right">
                      <p className="text-yellow-400 font-semibold">
                        {item.price}
                      </p>

                      <button className="mt-1 text-xs px-4 py-1 rounded-full bg-yellow-400 text-black hover:scale-105 transition">
                        Order
                      </button>
                    </div>

                  </div>
                ))}

              </div>

            </motion.div>
          ))}

        </div>
      </div>
    </div>
  );
}