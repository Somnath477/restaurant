import AboutSection from "@/components/AboutSection";
import ChefSection from "@/components/ChefSection";
import GallerySection from "@/components/GallerySection";
import HeroSlider from "@/components/HeroSlider";
import ReservationSection from "@/components/ReservationSection";
import Reviews from "@/components/Reviews";
import SignatureDishes from "@/components/SignatureDishes";
import StickyOrderButton from "@/components/StickyOrderButton";

export default function Home() {
  return (
    <main className="bg-black text-white">
      {/* HERO */}
      <HeroSlider />
      <AboutSection/>
      <SignatureDishes/>
      <ChefSection/>
      <GallerySection/>
      {/* REVIEWS */}
      <Reviews />
      <ReservationSection/>
      {/* STICKY BUTTON */}
      <StickyOrderButton />
    </main>
  );
}
