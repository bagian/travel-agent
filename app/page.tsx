import Image from "next/image";
import HeroRental from "@/components/HeroRental";
import WhyChooseUs from "@/components/WhyChooseUs";
import FeaturedFleet from "@/components/FeaturedFleet";
import BookingSteps from "@/components/BookingSteps";
import CtaBanner from "@/components/CtaBanner";
import Testimonials from "@/components/Testimonial";
import Faq from "@/components/FaQ";
import Partners from "@/components/Partners";

export default function Home() {
  return (
    <main>
      <HeroRental />
      <Partners />
      <WhyChooseUs />
      <FeaturedFleet />
      <BookingSteps />
      <Testimonials />
      <Faq />
      <CtaBanner />
    </main>
  );
}
