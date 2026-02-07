"use client";

import {motion} from "framer-motion";
import ScrollReveal from "@/components/ScrollReveal"; // Impor pembungkus tadi
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
    <motion.main
      initial={{opacity: 0}}
      animate={{opacity: 1}}
      transition={{duration: 0.5}}
    >
      {/* Hero biasanya muncul langsung, jadi tidak perlu ScrollReveal */}
      <HeroRental />

      {/* Gunakan ScrollReveal untuk section selanjutnya */}
      <ScrollReveal>
        <Partners />
      </ScrollReveal>

      <ScrollReveal>
        <WhyChooseUs />
      </ScrollReveal>

      <ScrollReveal>
        <FeaturedFleet />
      </ScrollReveal>

      <ScrollReveal>
        <BookingSteps />
      </ScrollReveal>

      <ScrollReveal>
        <Testimonials />
      </ScrollReveal>

      <ScrollReveal>
        <Faq />
      </ScrollReveal>

      <ScrollReveal>
        <CtaBanner />
      </ScrollReveal>
    </motion.main>
  );
}
