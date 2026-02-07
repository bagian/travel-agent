"use client";

import {useMemo, use, useState, useEffect} from "react";
import Image from "next/image";
import Link from "next/link";
import {notFound} from "next/navigation";
import {
  Users,
  Settings2,
  ArrowLeft,
  ShieldCheck,
  Fuel,
  ChevronLeft,
  ChevronRight,
  CheckCircle,
  CalendarDays,
  MessageSquare,
  Briefcase,
  Calendar,
  Zap,
  Activity,
  Milestone,
} from "lucide-react";

// Swiper components & types
import {Swiper, SwiperSlide} from "swiper/react";
import type {Swiper as SwiperClass} from "swiper/types";
import {FreeMode, Navigation, Thumbs, EffectFade} from "swiper/modules";

// Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/thumbs";
import "swiper/css/effect-fade";

import {FLEET_DATA} from "@/data/fleet";

export default function ArmadaDetail({
  params,
}: {
  params: Promise<{slug: string}>;
}) {
  const resolvedParams = use(params);
  const slug = resolvedParams.slug;

  const [thumbsSwiper, setThumbsSwiper] = useState<SwiperClass | null>(null);

  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");

  const vehicle = useMemo(() => {
    return FLEET_DATA.find((v) => v.slug === slug);
  }, [slug]);

  if (!vehicle) notFound();

  const handleBooking = () => {
    const message = `Halo, saya ingin reservasi ${vehicle.name}.\nPeriode: ${startDate || "-"} s/d ${endDate || "-"}`;
    window.open(
      `https://wa.me/628123456789?text=${encodeURIComponent(message)}`,
      "_blank",
    );
  };

  return (
    <div className="min-h-screen pb-20">
      {/* HEADER */}
      <nav className="sticky top-0 z-[60] bg-white/80 backdrop-blur-md border-b border-slate-100 h-16 flex items-center">
        <div className="container mx-auto px-6 flex items-center justify-between">
          <Link
            href="/armada"
            className="flex items-center gap-2 text-slate-500 hover:text-tiger-orange-600 transition-colors text-sm font-medium"
          >
            <ArrowLeft size={18} />
            <span>Katalog</span>
          </Link>
          <span className="text-slate-900 font-medium text-sm">
            {vehicle.name}
          </span>
        </div>
      </nav>

      <main className="container mx-auto px-4 md:px-6 pt-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* LEFT SIDE */}
          <div className="lg:col-span-7 xl:col-span-8">
            <div className="relative group">
              <div className="rounded-3xl overflow-hidden bg-white border border-slate-100 aspect-video relative shadow-sm">
                <Swiper
                  modules={[FreeMode, Navigation, Thumbs, EffectFade]}
                  effect="fade"
                  speed={600}
                  navigation={{nextEl: ".next-v", prevEl: ".prev-v"}}
                  thumbs={{
                    swiper:
                      thumbsSwiper && !thumbsSwiper.destroyed && thumbsSwiper.el
                        ? thumbsSwiper
                        : null,
                  }}
                  className="h-full w-full"
                >
                  {vehicle.images.map((img, i) => (
                    <SwiperSlide key={`main-${i}`}>
                      <div className="relative w-full h-full">
                        <Image
                          src={img}
                          alt={vehicle.name}
                          fill
                          className="object-cover transition-transform duration-700"
                          unoptimized
                          priority={i === 0}
                        />
                      </div>
                    </SwiperSlide>
                  ))}
                </Swiper>
                <button className="prev-v absolute left-4 top-1/2 -translate-y-1/2 z-10 w-10 h-10 rounded-full bg-white/90 shadow-sm border border-slate-100 flex items-center justify-center text-slate-600 hover:text-tiger-orange-600 transition-all opacity-0 group-hover:opacity-100 cursor-pointer">
                  <ChevronLeft size={20} />
                </button>
                <button className="next-v absolute right-4 top-1/2 -translate-y-1/2 z-10 w-10 h-10 rounded-full bg-white/90 shadow-sm border border-slate-100 flex items-center justify-center text-slate-600 hover:text-tiger-orange-600 transition-all opacity-0 group-hover:opacity-100 cursor-pointer">
                  <ChevronRight size={20} />
                </button>
              </div>
              <div className="mt-4 px-2">
                <Swiper
                  onSwiper={setThumbsSwiper}
                  modules={[FreeMode, Thumbs]}
                  spaceBetween={12}
                  slidesPerView={"auto"}
                  freeMode={true}
                  watchSlidesProgress={true}
                  className="thumb-nav"
                >
                  {vehicle.images.map((img, i) => (
                    <SwiperSlide
                      key={`thumb-${i}`}
                      className="!w-24 !h-16 cursor-pointer"
                    >
                      <div className="relative w-full h-full rounded-xl overflow-hidden border-2 border-transparent transition-all thumb-overlay">
                        <Image
                          src={img}
                          alt="thumb"
                          fill
                          className="object-cover"
                          unoptimized={true} // INI PERBAIKANNYA: Wajib ada biar WebP muncul
                        />
                      </div>
                    </SwiperSlide>
                  ))}
                </Swiper>
              </div>
            </div>

            {/* INFO TAMBAHAN */}
            <div className="mt-12 space-y-10">
              <section>
                <h2 className="text-xl font-bold text-slate-900 mb-6">
                  Car Specifications
                </h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                  {[
                    {icon: Zap, label: "Engine", val: vehicle.engine},
                    {
                      icon: Activity,
                      label: "Kapasitas",
                      val: `${vehicle.capacity} Kursi`,
                    },
                    {
                      icon: Briefcase,
                      label: "Bagasi",
                      val: `${vehicle.luggage} Koper`,
                    },
                    {icon: Calendar, label: "Tahun", val: vehicle.year},
                    {icon: Fuel, label: "Fuel Type", val: vehicle.fuelType},
                    {
                      icon: Settings2,
                      label: "Transmissions",
                      val: vehicle.transmission,
                    },
                  ].map((spec, i) => (
                    <div
                      key={i}
                      className="flex flex-col items-center justify-center p-6 rounded-2xl bg-white border border-slate-100 text-center hover:border-tiger-orange-200 transition-colors group"
                    >
                      <spec.icon
                        size={20}
                        className="text-slate-400 mb-3 group-hover:text-tiger-orange-500 transition-colors"
                      />
                      <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-1">
                        {spec.label}
                      </span>
                      <span className="text-sm font-semibold text-slate-800 uppercase">
                        {spec.val}
                      </span>
                    </div>
                  ))}
                </div>
              </section>

              <section>
                <h2 className="text-xl font-bold text-slate-900 mb-6">
                  Insurance & Policies
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div className="flex flex-col items-center justify-center p-6 rounded-2xl bg-white border border-slate-100 text-center">
                    <Milestone size={20} className="text-slate-400 mb-3" />
                    <span className="text-sm font-bold text-slate-800 mb-1 tracking-tight">
                      Unlimited Mile
                    </span>
                    <span className="text-[10px] text-slate-400 font-medium">
                      Free of charge
                    </span>
                  </div>
                  <div className="flex flex-col items-center justify-center p-6 rounded-2xl bg-white border border-slate-100 text-center">
                    <ShieldCheck size={20} className="text-slate-400 mb-3" />
                    <span className="text-sm font-bold text-slate-800 mb-1 tracking-tight">
                      Full Coverage
                    </span>
                    <span className="text-[10px] text-slate-400 font-medium">
                      Safe & Protected
                    </span>
                  </div>
                  <div className="flex flex-col items-center justify-center p-6 rounded-2xl bg-white border border-slate-100 text-center">
                    <Fuel size={20} className="text-slate-400 mb-3" />
                    <span className="text-sm font-bold text-slate-800 mb-1 tracking-tight">
                      Fuel Policy
                    </span>
                    <span className="text-[10px] text-slate-400 font-medium">
                      Same to same
                    </span>
                  </div>
                </div>
              </section>

              <div className="h-px bg-slate-100 w-full" />

              <section>
                <h2 className="text-xl font-bold text-slate-900 mb-4">
                  Deskripsi & Fitur
                </h2>
                <p className="text-slate-500 text-sm leading-relaxed italic mb-8">
                  &quot;{vehicle.description}&quot;
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-y-4 gap-x-8">
                  {vehicle.features.map((f, i) => (
                    <div key={i} className="flex items-center gap-3">
                      <CheckCircle size={16} className="text-green-500" />
                      <span className="text-sm font-medium text-slate-600">
                        {f}
                      </span>
                    </div>
                  ))}
                </div>
              </section>
            </div>
          </div>

          {/* SIDEBAR */}
          <div className="lg:col-span-5 xl:col-span-4">
            <div className="bg-white rounded-[2rem] p-8 border border-slate-100 shadow-sm sticky top-24">
              <div className="mb-8">
                <span className="text-[10px] font-bold text-tiger-orange-600 uppercase tracking-[0.2em] mb-2 block">
                  Sewa Mobil Sidoarjo
                </span>
                <h1 className="text-3xl font-semibold text-slate-900 tracking-tight">
                  {vehicle.name}
                </h1>
                <div className="flex items-center gap-2 mt-3">
                  <span className="px-2 py-0.5 rounded bg-slate-50 text-[10px] font-bold text-slate-500 uppercase">
                    {vehicle.category}
                  </span>
                  <span className="px-2 py-0.5 rounded bg-slate-50 text-[10px] font-bold text-slate-500 uppercase">
                    {vehicle.transmission}
                  </span>
                </div>
              </div>

              <div className="space-y-6">
                <div className="py-4 border-y border-slate-50">
                  <span className="text-slate-400 text-xs font-medium block mb-1">
                    Harga per hari
                  </span>
                  <div className="flex items-baseline gap-1">
                    <span className="text-3xl font-semibold text-slate-900">
                      Rp {vehicle.pricePerDay.toLocaleString("id-ID")}
                    </span>
                  </div>
                </div>

                <div className="space-y-4 pt-2">
                  <div className="space-y-1.5">
                    <label className="text-[10px] font-bold text-slate-400 uppercase tracking-widest ml-1">
                      Mulai Sewa
                    </label>
                    <div className="relative">
                      <CalendarDays
                        className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400"
                        size={18}
                      />
                      <input
                        type="date"
                        onChange={(e) => setStartDate(e.target.value)}
                        className="w-full pl-11 pr-4 py-3.5 rounded-xl bg-slate-50 border border-slate-100 text-sm font-medium outline-none focus:border-tiger-orange-500/50 transition-all cursor-pointer"
                      />
                    </div>
                  </div>
                  <div className="space-y-1.5">
                    <label className="text-[10px] font-bold text-slate-400 uppercase tracking-widest ml-1">
                      Selesai Sewa
                    </label>
                    <div className="relative">
                      <CalendarDays
                        className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400"
                        size={18}
                      />
                      <input
                        type="date"
                        onChange={(e) => setEndDate(e.target.value)}
                        className="w-full pl-11 pr-4 py-3.5 rounded-xl bg-slate-50 border border-slate-100 text-sm font-medium outline-none focus:border-tiger-orange-500/50 transition-all cursor-pointer"
                      />
                    </div>
                  </div>
                </div>

                <button
                  onClick={handleBooking}
                  className="w-full bg-slate-900 hover:bg-tiger-orange-600 text-white py-4.5 rounded-xl font-semibold text-sm transition-all flex items-center justify-center gap-2 active:scale-[0.98]"
                >
                  <MessageSquare size={18} /> Hubungi Admin
                </button>
              </div>
            </div>
          </div>
        </div>
      </main>

      <style jsx global>{`
        .thumb-nav .swiper-slide-thumb-active .thumb-overlay {
          border-color: #f97316 !important;
          opacity: 1 !important;
        }
        .thumb-overlay {
          opacity: 0.4;
          transition: all 0.3s ease;
        }
        input[type="date"]::-webkit-calendar-picker-indicator {
          cursor: pointer;
          opacity: 0.5;
        }
      `}</style>
    </div>
  );
}
