import HeroSlider from "@/components/HeroSlider";
import Reviews from "@/components/Reviews";
import StickyOrderButton from "@/components/StickyOrderButton";

export default function Home() {
  return (
    <main className="bg-black text-white">
      {/* HERO */}
      <HeroSlider />

      {/* ABOUT EXPERIENCE */}
      <section className="bg-black py-24 px-6 text-center">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-4xl text-yellow-400 font-bold mb-6">
            A Culinary Experience Like No Other
          </h2>

          <p className="text-gray-300 leading-relaxed text-lg">
            At Spice Garden, we blend tradition with innovation to bring you an
            unforgettable dining experience. From aromatic spices to beautifully
            crafted dishes, every detail is designed to delight your senses.
          </p>
        </div>
      </section>

      {/* MENU SECTION */}
      <section className="py-28 bg-gradient-to-b from-black to-zinc-900 px-4">
        <h2 className="text-4xl font-bold text-center mb-12 text-yellow-400">
          Signature Dishes
        </h2>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {[
            {
              name: "Chicken Biryani",
              img: "/images/food1.jpg",
              price: "₹300",
            },
            {
              name: "Paneer Butter Masala",
              img: "/images/food2.jpg",
              price: "₹250",
            },
            { name: "Veg Pizza", img: "/images/food3.jpg", price: "₹200" },
          ].map((item, i) => (
            <div
              key={i}
              className="group rounded-2xl overflow-hidden bg-zinc-900 border border-zinc-800 hover:scale-105 transition duration-300"
            >
              <img
                src={item.img}
                alt={item.name}
                className="h-56 w-full object-cover group-hover:opacity-80 transition"
              />

              <div className="p-5">
                <h3 className="font-bold text-lg">{item.name}</h3>
                <p className="text-yellow-400">{item.price}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CHEF SECTION */}
      <section className="py-24 bg-zinc-900 px-4">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10 items-center">
          <img
            src="/images/chef.jpg"
            alt="Chef"
            className="rounded-2xl shadow-xl"
          />

          <div>
            <h2 className="text-3xl text-yellow-400 font-bold mb-4">
              Crafted by Passion. Served with excellence.
            </h2>

            <p className="text-gray-300">
              Our chefs bring years of culinary expertise, blending authentic
              flavors with modern techniques to create dishes that tell a story.
              Every plate is designed with passion and perfection. From
              carefully sourced ingredients to meticulous presentation, we
              ensure that each dish delivers both taste and visual delight. Our
              kitchen is driven by creativity, consistency, and a deep love for
              food. Whether it's a classic favorite or a signature creation,
              every bite reflects our commitment to excellence and unforgettable
              dining experiences.
            </p>
          </div>
        </div>
      </section>

      {/* GALLERY */}
      <section className="py-24 bg-black">
        <h2 className="text-center text-4xl text-yellow-400 mb-12">
          Experience Our Ambience
        </h2>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-2">
          {[
            "/images/hero1.jpg",
            "/images/hero2.jpg",
            "/images/hero3.jpg",
            "/images/hero4.jpg",
          ].map((img, i) => (
            <img
              key={i}
              src={img}
              alt="Ambience"
              className="h-60 w-full object-cover"
            />
          ))}
        </div>
      </section>

      {/* REVIEWS */}
      <Reviews />

      {/* RESERVATION CTA */}
      <section className="py-24 bg-yellow-400 text-black text-center">
        <h2 className="text-4xl font-bold mb-4">Reserve Your Table Today</h2>

        <p className="mb-6">Experience fine dining like never before</p>

        <a
          href="/reservation"
          className="bg-black text-white px-8 py-3 rounded-full"
        >
          Book Now
        </a>
      </section>

      {/* MAP */}
      <section className="bg-black py-20 px-4">
        <h2 className="text-3xl text-yellow-400 text-center mb-6">
          Visit Us 📍
        </h2>

        <div className="max-w-5xl mx-auto">
          <iframe
            src="https://www.google.com/maps?q=Park+Street+Kolkata&output=embed"
            className="w-full h-96 rounded-2xl border border-zinc-800"
            loading="lazy"
          ></iframe>

          <p className="text-center text-gray-400 mt-4">
            📍 Park Street, Kolkata, West Bengal, India
          </p>
        </div>
      </section>

      {/* STICKY BUTTON */}
      <StickyOrderButton />
    </main>
  );
}
