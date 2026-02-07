"use client";

import React from "react";
import Image from "next/image";
import {Swiper, SwiperSlide} from "swiper/react";
import {Autoplay, EffectFade, Pagination} from "swiper/modules";
import {ArrowUpRight, Play} from "lucide-react";
import Link from "next/link";

import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/pagination";

const slides = [
  {
    id: 1,
    image:
      "https://images.unsplash.com/photo-1533473359331-0135ef1b58bf?q=80&w=1770&auto=format&fit=crop",
  },
  {
    id: 2,
    image:
      "https://images.unsplash.com/photo-1737289385340-204818e71d3b?q=80&w=1773&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 3,
    image: "/img/car/Toyota-Alphard-2024.jpeg",
  },
  {
    id: 4,
    image: "/img/car/Mitsubishi-Pajero-Sport.webp",
  },
];

export default function HeroSection() {
  return (
    <section className="relative w-full h-[calc(100vh-80px)] md:h-[calc(80vh-80px)] min-h-[600px] overflow-hidden pb-10 pt-32 max-w-[2440px] mx-auto px-4">
      <div className="relative w-full h-full rounded-[2.5rem] overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Swiper
            modules={[Autoplay, EffectFade, Pagination]}
            effect="fade"
            fadeEffect={{crossFade: true}}
            autoplay={{delay: 6000, disableOnInteraction: false}}
            loop={true}
            speed={1500}
            pagination={{clickable: true}}
            className="w-full h-full hero-swiper"
          >
            {slides.map((slide) => (
              <SwiperSlide key={slide.id} className="bg-black">
                <div className="absolute inset-0 z-10 bg-gradient-to-t from-black/90 via-transparent to-black/20" />
                <Image
                  src={slide.image}
                  alt="Rental Mobil"
                  fill
                  priority
                  loading="eager"
                  quality={100}
                  className="object-cover"
                />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
        <div
          className="absolute inset-0 z-10 pointer-events-none opacity-[0.03] mix-blend-overlay"
          style={{
            backgroundImage: `url('https://grainy-gradients.vercel.app/noise.svg')`,
          }}
        ></div>
        <div className="relative z-20 h-full w-full flex flex-col justify-between px-8 md:px-16 py-12 md:py-16">
          <div className="flex justify-start pt-4 md:pt-8 animate-fade-in-down">
            <div className="bg-white/90 backdrop-blur-md p-3 rounded-2xl w-fit md:flex items-center gap-4 shadow-xl border border-white/20 group cursor-pointer hover:bg-white transition-all hidden">
              <div className="relative h-12 w-20 rounded-lg overflow-hidden flex items-center justify-center bg-slate-200">
                <Play
                  size={16}
                  className="fill-slate-800 text-slate-800 relative z-10"
                />
                <Image
                  src="https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?q=80&w=200&auto=format&fit=crop"
                  fill
                  priority
                  loading="eager"
                  className="object-cover opacity-50"
                  alt="Video thumbnail"
                  quality={100}
                />
              </div>
              <div className="pr-4">
                <div className="flex -space-x-2 mb-1">
                  {[1, 2, 3].map((i) => (
                    <div
                      key={i}
                      className="w-6 h-6 rounded-full border-2 border-white bg-slate-300 overflow-hidden"
                    >
                      <Image
                        src={`https://i.pravatar.cc/150?u=${i}`}
                        width={24}
                        height={24}
                        alt="User"
                        quality={100}
                      />
                    </div>
                  ))}
                  <div className="w-6 h-6 rounded-full border-2 border-white bg-red-500 flex items-center justify-center text-[8px] text-white font-bold">
                    +
                  </div>
                </div>
                <p className="text-[10px] font-bold text-slate-900 uppercase">
                  12k+ Membership
                </p>
                <p className="text-[9px] text-slate-500 font-medium italic">
                  enjoy our rent car
                </p>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-end animate-fade-in-up">
            <div className="hidden md:block">
              <h1 className="text-4xl md:text-3xl lg:text-4xl xl:text-6xl font-bold text-white leading-[1.1] tracking-tight">
                Solusi Transportasi Anda <br />
                <span className="italic font-light opacity-90">
                  a new travel experience.
                </span>
              </h1>
            </div>

            <div className="flex flex-col items-center md:items-end gap-6 md:gap-10 pb-12">
              <p className="text-white/80 text-sm md:text-base max-w-sm text-center md:text-right leading-relaxed font-light">
                Kami berada diberbagai lokasi seperti di Kota Surabaya,
                Yogyakarta, Bandung dan Bali.
              </p>

              <Link
                href="/armada"
                className="group bg-white text-black pl-8 pr-2 py-2 rounded-full font-bold flex items-center gap-4 transition-all hover:pr-3 active:scale-95 shadow-xl cursor-pointer"
              >
                <span className="uppercase text-xs font-bold">
                  Cari Kendaraan
                </span>
                <div className="bg-red-600 text-white p-2.5 rounded-full transition-transform group-hover:rotate-45">
                  <ArrowUpRight size={20} />
                </div>
              </Link>
            </div>
          </div>
        </div>
      </div>

      <style jsx global>{`
        .hero-swiper .swiper-pagination-bullet {
          background: #ffffff !important;
          opacity: 0.3;
          transition: all 0.4s ease;
        }
        .hero-swiper .swiper-pagination-bullet-active {
          background: #f50c00 !important;
          opacity: 1;
          width: 32px;
          border-radius: 4px;
        }
        .hero-swiper .swiper-pagination {
          bottom: 30px !important;
          width: fit-content !important;
          left: 50% !important;
          transform: translateX(-50%);
        }
        @keyframes fade-in-up {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        @keyframes fade-in-down {
          from {
            opacity: 0;
            transform: translateY(-20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-fade-in-up {
          animation: fade-in-up 1s ease-out forwards;
        }
        .animate-fade-in-down {
          animation: fade-in-down 1s ease-out forwards;
        }
      `}</style>
    </section>
  );
}
