import Image from "next/image";
import HeroSection from "@/components/sections/HeroSection";
import DonationOption from "@/components/sections/DonationOption";
import Testimonials from "@/components/sections/Testimonials";
export default function Home() {
  return (
    <div>
      <HeroSection/>
      <DonationOption/>
      <Testimonials/>
    </div>
  );
}
