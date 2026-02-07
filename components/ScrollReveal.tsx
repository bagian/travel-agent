"use client";
import {motion} from "framer-motion";
import {ReactNode} from "react";

interface ScrollRevealProps {
  children: ReactNode;
}

export default function ScrollReveal({children}: ScrollRevealProps) {
  return (
    <motion.div
      initial={{opacity: 0, y: 40}} // Mulai dari transparan dan agak ke bawah
      whileInView={{opacity: 1, y: 0}} // Muncul saat masuk ke layar
      viewport={{once: true, margin: "-100px"}} // Animasi hanya jalan sekali & trigger 100px sebelum masuk
      transition={{duration: 0.7, ease: "easeOut"}}
    >
      {children}
    </motion.div>
  );
}
