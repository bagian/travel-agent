"use client";

import { useMemo, use, useState, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import {
  Users,
  Settings2,
  ArrowLeft,
  ShieldCheck,
  Fuel,
  ChevronLeft,
  ChevronRight,
  CalendarDays,
  MessageSquare,
  Briefcase,
  Calendar,
  Zap,
  CheckCircle2,
  Info,
  ChevronRight as ChevronSmall,
} from "lucide-react";

// MUI Components & Dayjs
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { MobileDatePicker } from "@mui/x-date-pickers/MobileDatePicker";
// idID dihapus karena menyebabkan build error di Turbopack
import dayjs, { Dayjs } from "dayjs";
import "dayjs/locale/id";

// Swiper components
import { Swiper, SwiperSlide } from "swiper/react";
import type { Swiper as SwiperClass } from "swiper/types";
import { FreeMode, Navigation, Thumbs, EffectFade } from "swiper/modules";

// Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/thumbs";
import "swiper/css/effect-fade";

import { FLEET_DATA } from "@/data/fleet";

// Definisi interface untuk keamanan TypeScript
interface ArmadaParams {
  slug: string;
}

export default function ArmadaDetail({
  params,
}: {
  params: Promise<ArmadaParams>;
}) {
  const resolvedParams = use(params);
  const slug = resolvedParams.slug;

  const [thumbsSwiper, setThumbsSwiper] = useState<SwiperClass | null>(null);
  const [startDate, setStartDate] = useState<Dayjs | null>(null);
  const [endDate, setEndDate] = useState<Dayjs | null>(null);

  const vehicle = useMemo(() => {
    return FLEET_DATA.find((v) => v.slug === slug);
  }, [slug]);

  if (!vehicle) notFound();

  const handleBooking = () => {
    const start = startDate ? startDate.format("DD/MM/YYYY") : "-";
    const end = endDate ? endDate.format("DD/MM/YYYY") : "-";

    const message = `Halo Rahayu Trans, saya ingin reservasi mobil:\n\nUnit: ${vehicle.name}\nMulai: ${start}\nSelesai: ${end}\n\nApakah unit tersedia?`;
    window.open(
      `https://wa.me/6281234567890?text=${encodeURIComponent(message)}`,
      "_blank"
    );
  };

  return (
    <LocalizationProvider dateAdapter={AdapterDayjs} adapterLocale="id">
      <div className="bg-[#fafafa] min-h-screen pb-20 selection:bg-red-100 pt-28">
        {/* HEADER NAVIGATION */}
        <nav className="sticky top-0 z-[60] border-b border-slate-100 h-16 flex items-center bg-white/90 backdrop-blur-md">
          <div className="container mx-auto px-6 flex items-center justify-between">
            <Link
              href="/armada"
              className="flex items-center gap-2 text-slate-500 hover:text-red-600 transition-colors text-sm cursor-pointer"
            >
              <ArrowLeft size={18} />
              <span className="font-medium">Kembali ke Katalog</span>
            </Link>
            <div className="hidden md:flex items-center gap-2 text-slate-400 text-xs">
              <Link href="/" className="hover:text-red-600 cursor-pointer">
                Home
              </Link>
              <ChevronSmall size={12} />
              <Link href="/armada" className="hover:text-red-600 cursor-pointer">
                Armada
              </Link>
              <ChevronSmall size={12} />
              <span className="text-slate-900 font-medium">{vehicle.name}</span>
            </div>
          </div>
        </nav>

        <main className="container mx-auto px-4 md:px-6 pt-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 xl:gap-12">
            {/* LEFT SIDE: GALLERY & SPECS */}
            <div className="lg:col-span-7 xl:col-span-8">
              <div className="relative group">
                <div className="rounded-[2.5rem] overflow-hidden bg-white border border-slate-100 aspect-video relative shadow-sm">
                  <Swiper
                    modules={[FreeMode, Navigation, Thumbs, EffectFade]}
                    effect="fade"
                    speed={600}
                    navigation={{ nextEl: ".next-v", prevEl: ".prev-v" }}
                    thumbs={{
                      swiper:
                        thumbsSwiper && !thumbsSwiper.destroyed
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
                            className="object-cover"
                            unoptimized
                            priority={i === 0}
                          />
                        </div>
                      </SwiperSlide>
                    ))}
                  </Swiper>

                  <button className="prev-v absolute left-6 top-1/2 -translate-y-1/2 z-10 w-12 h-12 rounded-2xl bg-white/90 shadow-xl border border-slate-100 flex items-center justify-center text-slate-900 hover:bg-red-600 hover:text-white transition-all opacity-0 group-hover:opacity-100 cursor-pointer">
                    <ChevronLeft size={24} />
                  </button>
                  <button className="next-v absolute right-6 top-1/2 -translate-y-1/2 z-10 w-12 h-12 rounded-2xl bg-white/90 shadow-xl border border-slate-100 flex items-center justify-center text-slate-900 hover:bg-red-600 hover:text-white transition-all opacity-0 group-hover:opacity-100 cursor-pointer">
                    <ChevronRight size={24} />
                  </button>
                </div>

                <div className="mt-6">
                  <Swiper
                    onSwiper={setThumbsSwiper}
                    modules={[FreeMode, Thumbs]}
                    spaceBetween={16}
                    slidesPerView={"auto"}
                    freeMode={true}
                    watchSlidesProgress={true}
                    className="thumb-nav"
                  >
                    {vehicle.images.map((img, i) => (
                      <SwiperSlide
                        key={`thumb-${i}`}
                        className="!w-28 !h-20 cursor-pointer"
                      >
                        <div className="relative w-full h-full rounded-2xl overflow-hidden border-2 border-transparent transition-all thumb-overlay">
                          <Image
                            src={img}
                            alt="thumb"
                            fill
                            className="object-cover"
                            unoptimized
                          />
                        </div>
                      </SwiperSlide>
                    ))}
                  </Swiper>
                </div>
              </div>

              <div className="mt-16">
                <div className="flex items-center gap-3 mb-8">
                  <div className="w-1 h-8 bg-red-600 rounded-full" />
                  <h2 className="text-2xl font-semibold text-slate-900 tracking-tight">
                    Spesifikasi Kendaraan
                  </h2>
                </div>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
                  {[
                    { icon: Zap, label: "Engine", val: vehicle.engine },
                    { icon: Users, label: "Kapasitas", val: `${vehicle.capacity} Kursi` },
                    { icon: Briefcase, label: "Bagasi", val: `${vehicle.luggage} Koper` },
                    { icon: Calendar, label: "Tahun", val: vehicle.year },
                    { icon: Fuel, label: "Bahan Bakar", val: vehicle.fuelType },
                    { icon: Settings2, label: "Transmisi", val: vehicle.transmission },
                  ].map((spec, i) => (
                    <div
                      key={i}
                      className="bg-white p-6 rounded-[2rem] border border-slate-100 flex flex-col items-center text-center group hover:border-red-200 transition-all cursor-default"
                    >
                      <div className="w-12 h-12 rounded-2xl bg-slate-50 flex items-center justify-center text-slate-400 group-hover:bg-red-50 group-hover:text-red-600 transition-colors mb-4">
                        <spec.icon size={22} />
                      </div>
                      <span className="text-[10px] text-slate-400 uppercase tracking-widest mb-1">
                        {spec.label}
                      </span>
                      <span className="text-sm font-medium text-slate-900">
                        {spec.val}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-12 p-10 bg-white rounded-[3rem] border border-slate-100">
                <section>
                  <h3 className="text-lg font-semibold text-slate-900 mb-4">
                    Tentang Unit
                  </h3>
                  <p className="text-slate-500 text-sm leading-relaxed">
                    {vehicle.description}
                  </p>
                  <div className="mt-8 flex items-center gap-4 p-4 bg-red-50 rounded-2xl border border-red-100">
                    <ShieldCheck className="text-red-600 shrink-0" size={24} />
                    <div className="text-xs">
                      <p className="font-semibold text-red-900">
                        Unit Terverifikasi
                      </p>
                      <p className="text-red-700/70">
                        Melewati inspeksi 50+ titik keamanan.
                      </p>
                    </div>
                  </div>
                </section>
                <section>
                  <h3 className="text-lg font-semibold text-slate-900 mb-4">
                    Fitur Utama
                  </h3>
                  <div className="space-y-3">
                    {vehicle.features.map((f, i) => (
                      <div key={i} className="flex items-center gap-3">
                        <CheckCircle2 size={18} className="text-red-600" />
                        <span className="text-sm text-slate-600">{f}</span>
                      </div>
                    ))}
                  </div>
                </section>
              </div>

              <div className="mt-12 bg-white p-8 rounded-[3rem] border border-slate-100">
                <div className="flex items-center gap-3 mb-6">
                  <Info className="text-red-600" size={20} />
                  <h3 className="text-lg font-semibold text-slate-900">
                    Ketentuan Sewa
                  </h3>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-slate-500">
                  {[
                    "KTP Asli / Paspor",
                    "SIM A Aktif",
                    "Jaminan Motor",
                    "Foto Serah Terima",
                  ].map((txt, i) => (
                    <div
                      key={i}
                      className="flex items-center gap-2 bg-slate-50 p-3 rounded-xl border border-slate-100 text-xs"
                    >
                      <CheckCircle2 size={14} className="text-red-600 shrink-0" />{" "}
                      {txt}
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* RIGHT SIDE: BOOKING CARD */}
            <div className="lg:col-span-5 xl:col-span-4">
              <div className="bg-white rounded-[2.5rem] p-8 md:p-10 border border-slate-100 shadow-2xl shadow-slate-200/50 sticky top-32">
                <div className="mb-8">
                  <span className="bg-red-50 text-red-600 px-3 py-1 rounded-full text-[10px] font-medium uppercase tracking-widest mb-4 inline-block">
                    Informasi Booking
                  </span>
                  <h1 className="text-3xl font-semibold text-slate-900 mb-2 leading-tight">
                    {vehicle.name}
                  </h1>
                  <div className="flex items-center gap-4 text-slate-400 text-xs">
                    <div className="flex items-center gap-1">
                      <Users size={14} /> {vehicle.capacity} Kursi
                    </div>
                    <div className="flex items-center gap-1">
                      <Settings2 size={14} /> {vehicle.transmission}
                    </div>
                  </div>
                </div>

                <div className="py-6 border-y border-slate-50">
                  <p className="text-slate-400 text-[10px] uppercase tracking-widest mb-1">
                    Harga Sewa / Hari
                  </p>
                  <div className="flex items-baseline gap-2 text-slate-900">
                    <span className="text-4xl font-semibold">
                      Rp {vehicle.pricePerDay.toLocaleString("id-ID")}
                    </span>
                    <span className="text-slate-400 text-xs">/ Hari</span>
                  </div>
                </div>

                <div className="space-y-4 mt-8">
                  <div className="space-y-2">
                    <label className="text-[10px] text-slate-400 uppercase tracking-widest ml-1">
                      Mulai Perjalanan
                    </label>
                    <MobileDatePicker
                      value={startDate}
                      onChange={(val) => setStartDate(val)}
                      slotProps={{
                        textField: {
                          fullWidth: true,
                          InputProps: {
                            startAdornment: (
                              <CalendarDays
                                className="mr-3 text-slate-400"
                                size={18}
                              />
                            ),
                          },
                          sx: {
                            "& .MuiInputBase-root": {
                              borderRadius: "1rem",
                              padding: "0.65rem 1rem",
                              backgroundColor: "#f8fafc",
                              border: "1px solid #f1f5f9",
                              fontSize: "0.875rem",
                              cursor: "pointer",
                              "& fieldset": { border: "none" },
                              "&.Mui-focused": { border: "1px solid #dc2626" },
                            },
                            "& input": {
                              padding: "0.5rem 0",
                              fontWeight: 500,
                              cursor: "pointer",
                            },
                          },
                        },
                      }}
                    />
                  </div>

                  <div className="space-y-2">
                    <label className="text-[10px] text-slate-400 uppercase tracking-widest ml-1">
                      Selesai Perjalanan
                    </label>
                    <MobileDatePicker
                      value={endDate}
                      onChange={(val) => setEndDate(val)}
                      slotProps={{
                        textField: {
                          fullWidth: true,
                          InputProps: {
                            startAdornment: (
                              <CalendarDays
                                className="mr-3 text-slate-400"
                                size={18}
                              />
                            ),
                          },
                          sx: {
                            "& .MuiInputBase-root": {
                              borderRadius: "1rem",
                              padding: "0.65rem 1rem",
                              backgroundColor: "#f8fafc",
                              border: "1px solid #f1f5f9",
                              fontSize: "0.875rem",
                              cursor: "pointer",
                              "& fieldset": { border: "none" },
                              "&.Mui-focused": { border: "1px solid #dc2626" },
                            },
                            "& input": {
                              padding: "0.5rem 0",
                              fontWeight: 500,
                              cursor: "pointer",
                            },
                          },
                        },
                      }}
                    />
                  </div>
                </div>

                <button
                  onClick={handleBooking}
                  className="w-full bg-slate-900 hover:bg-red-600 text-white py-5 rounded-[1.5rem] font-medium text-sm transition-all flex items-center justify-center gap-3 mt-8 shadow-xl shadow-slate-200 hover:shadow-red-200 active:scale-[0.96] cursor-pointer"
                >
                  <MessageSquare size={20} /> Booking Sekarang
                </button>

                <div className="mt-6 flex flex-col gap-3">
                  <Link
                    href="/contact"
                    className="text-center text-red-600 text-[10px] font-bold uppercase tracking-wider hover:underline cursor-pointer"
                  >
                    Butuh Bantuan Customer Service?
                  </Link>
                  <p className="text-center text-slate-400 text-[10px]">
                    *Admin Rahayu Trans akan segera menghubungi Anda.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>

      <style jsx global>{`
        .thumb-nav .swiper-slide-thumb-active .thumb-overlay {
          border-color: #dc2626 !important;
          opacity: 1 !important;
        }
        .thumb-overlay {
          opacity: 0.5;
          border-width: 2px;
          transition: all 0.3s ease;
        }
      `}</style>
    </LocalizationProvider>
  );
}