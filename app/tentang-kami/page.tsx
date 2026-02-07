"use client";

import {useState} from "react";
import {
  ShieldCheck,
  ChevronRight,
  Target,
  Eye,
  Clock,
  ThumbsUp,
  UserCheck,
  MapPin,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function AboutPage() {
  const [activeTab, setActiveTab] = useState<"visi" | "misi">("misi");

  const stats = [
    {label: "Armada Tersedia", val: "50+", sub: "Unit Terawat"},
    {label: "Pelanggan Puas", val: "1K+", sub: "Telah Dilayani"},
    {label: "Agen Profesional", val: "100+", sub: "Driver Terlatih"},
    {label: "Tingkat Kepuasan", val: "95%", sub: "Rating Bintang 5"},
  ];

  return (
    <div className="min-h-screen selection:bg-red-100">
      {/* 1. HERO SECTION */}
      <div className="max-w-[1440px] mx-auto px-6">
        <section className="mt-24 pb-16 lg:mt-32 lg:pb-24">
          <div className="flex flex-col lg:flex-row justify-between items-start gap-8 border-b border-slate-100 pb-16">
            <h1 className="text-4xl md:text-6xl font-bold text-slate-900 leading-[1.1] max-w-2xl">
              Mewujudkan Perjalanan <br />
              <span className="italic font-light text-red-600">
                Nyaman Jadi Nyata.
              </span>
            </h1>
            <p className="max-w-md text-slate-500 text-sm md:text-base leading-relaxed mt-4">
              Merevolusi cara Anda menyewa kendaraan dengan kepercayaan,
              teknologi terbaru, dan transparansi di wilayah Sidoarjo dan
              Surabaya.
            </p>
          </div>
        </section>

        {/* 2. MAIN VISUAL */}
        <section className="mb-16 md:mb-24">
          <div className="relative aspect-video w-full h-[680px] rounded-[24px] md:rounded-[32px] overflow-hidden shadow-2xl group">
            <Image
              src="https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&q=80&w=1600"
              alt="Luxury Fleet Experience"
              fill
              className="object-cover transition-transform duration-1000 group-hover:scale-105"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
          </div>
        </section>
        {/* 3. NARRATIVE & STATS SECTION (Bawah Banner) */}
        <section className="pb-24">
          {/* Deskripsi Narasi Responsif */}
          <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-12 mb-20 text-left">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 max-w-lg leading-tight">
              Membentuk Masa Depan <br className="hidden md:block" />{" "}
              Transportasi Inovatif.
            </h2>
            <p className="max-w-md text-slate-500 text-sm md:text-base leading-relaxed">
              Kami mendefinisikan ulang standar penyewaan mobil di Jawa Timur
              melalui keunggulan layanan harian dan bulanan yang mulus bagi
              setiap pelanggan.
            </p>
          </div>

          {/* Stats Grid - Clean & Responsive */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 py-12 border-y border-slate-100">
            {stats.map((stat, i) => (
              <div key={i} className="text-center lg:text-left">
                <h3 className="text-3xl md:text-5xl font-bold text-slate-900 mb-2">
                  {stat.val}
                </h3>
                <p className="text-[10px] md:text-xs font-bold text-slate-900 uppercase tracking-widest mb-1">
                  {stat.label}
                </p>
                <p className="text-[9px] md:text-[10px] text-slate-400 font-medium uppercase">
                  {stat.sub}
                </p>
              </div>
            ))}
          </div>
        </section>
      </div>
      {/* 4. VISION & MISSION TOGGLE SECTION */}
      <section className="relative py-24 md:py-32 lg:py-48 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="https://images.unsplash.com/photo-1541899481282-d53bffe3c35d?auto=format&fit=crop&q=80&w=1600"
            alt="Interior Luxury Car"
            fill
            className="object-cover grayscale brightness-[0.2]"
          />
        </div>

        <div className="container mx-auto px-6 relative z-10 flex justify-center lg:justify-end">
          <div className="bg-white p-8 md:p-16 rounded-[32px] md:rounded-[40px] max-w-2xl shadow-2xl">
            {/* Toggle Switch */}
            <div className="flex bg-slate-50 p-1 rounded-full mb-10 w-fit border border-slate-100 mx-auto lg:mx-0">
              <button
                onClick={() => setActiveTab("visi")}
                className={`flex items-center gap-2 px-4 md:px-6 py-2 md:py-2.5 rounded-full text-[10px] md:text-xs font-bold transition-all cursor-pointer ${
                  activeTab === "visi"
                    ? "bg-red-600 text-white shadow-md"
                    : "text-slate-400"
                }`}
              >
                <Eye size={14} className="md:w-4 md:h-4" /> Visi Kami
              </button>
              <button
                onClick={() => setActiveTab("misi")}
                className={`flex items-center gap-2 px-4 md:px-6 py-2 md:py-2.5 rounded-full text-[10px] md:text-xs font-bold transition-all cursor-pointer ${
                  activeTab === "misi"
                    ? "bg-red-600 text-white shadow-md"
                    : "text-slate-400"
                }`}
              >
                <Target size={14} className="md:w-4 md:h-4" /> Misi Kami
              </button>
            </div>

            {/* Content Display */}
            <div className="min-h-[220px] md:min-h-[250px] animate-in fade-in slide-in-from-bottom-4 duration-500 text-center lg:text-left">
              {activeTab === "visi" ? (
                <div>
                  <h2 className="text-2xl md:text-4xl font-bold text-slate-900 mb-6 leading-tight">
                    Menjadi Standar Baru <br /> Transportasi di Jawa Timur.
                  </h2>
                  <p className="text-slate-500 text-sm md:text-base leading-relaxed mb-8">
                    Visi kami adalah memimpin industri jasa transportasi dengan
                    mengedepankan integrasi teknologi dan pelayanan personal
                    bagi warga Sidoarjo dan Surabaya.
                  </p>
                </div>
              ) : (
                <div>
                  <h2 className="text-2xl md:text-4xl font-bold text-slate-900 mb-6 leading-tight">
                    Inovasi Pelayanan demi <br /> Kepuasan Mutlak Anda.
                  </h2>
                  <p className="text-slate-500 text-sm md:text-base leading-relaxed mb-8">
                    Misi kami adalah menyediakan armada terbaru dengan perawatan
                    rutin ketat serta driver profesional yang memahami rute
                    terbaik demi efisiensi waktu Anda.
                  </p>
                </div>
              )}

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6 mb-10">
                <div className="flex items-center justify-center lg:justify-start gap-3 text-slate-700">
                  <ShieldCheck className="text-red-600" size={18} />
                  <span className="text-xs md:text-sm font-bold">
                    Unit Terverifikasi
                  </span>
                </div>
                <div className="flex items-center justify-center lg:justify-start gap-3 text-slate-700">
                  <Clock className="text-red-600" size={18} />
                  <span className="text-xs md:text-sm font-bold">
                    Respons Cepat 24/7
                  </span>
                </div>
              </div>

              <Link
                href="/armada"
                className="inline-flex items-center gap-2 text-red-600 hover:gap-4 transition-all group text-sm md:text-base"
              >
                Jelajahi Armada{" "}
                <ChevronRight
                  size={18}
                  className="group-hover:translate-x-1 transition-transform"
                />
              </Link>
            </div>
          </div>
        </div>
      </section>

      <div className="max-w-[1440px] mx-auto px-6">
        {/* 5. CORE VALUES SECTION */}
        <section className="py-24 md:py-32">
          <div className="flex flex-col lg:flex-row gap-16 items-center">
            <div className="w-full lg:w-1/2">
              <h2 className="text-3xl md:text-5xl font-bold text-slate-900 mb-8 leading-tight">
                Komitmen yang Mendefinisikan <br className="hidden md:block" />{" "}
                Siapa Kami.
              </h2>
              <div className="space-y-6 md:space-y-8">
                {[
                  {
                    Icon: UserCheck,
                    title: "Driver Profesional",
                    desc: "Setiap driver melewati seleksi ketat dan pelatihan etika pelayanan harian.",
                  },
                  {
                    Icon: ThumbsUp,
                    title: "Transparansi Harga",
                    desc: "Tidak ada biaya tersembunyi. Apa yang Anda lihat adalah apa yang Anda bayar.",
                  },
                  {
                    Icon: MapPin,
                    title: "Jangkauan Luas",
                    desc: "Melayani penjemputan bandara hingga perjalanan lintas kota di Jawa Timur.",
                  },
                ].map((item, i) => (
                  <div key={i} className="flex gap-4 md:gap-6 group">
                    <div className="w-12 h-12 md:w-14 md:h-14 shrink-0 rounded-2xl bg-white border border-slate-200 flex items-center justify-center text-red-600 shadow-sm group-hover:bg-red-600 group-hover:text-white transition-all duration-300">
                      <item.Icon size={20} className="md:w-6 md:h-6" />
                    </div>
                    <div>
                      <h4 className="font-bold text-slate-900 text-base md:text-lg mb-1">
                        {item.title}
                      </h4>
                      <p className="text-slate-500 text-xs md:text-sm leading-relaxed">
                        {item.desc}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="w-full lg:w-1/2 relative mt-12 lg:mt-0">
              <div className="relative aspect-square bg-white rounded-[32px] md:rounded-[40px] overflow-hidden border border-slate-100 shadow-xl p-8">
                <Image
                  src="/img/car/platinum-white-pearl-mc-split.png"
                  alt="Reliability"
                  fill
                  className="object-contain p-6 md:p-10 hover:scale-110 transition-transform duration-700"
                />
              </div>
              <div className="absolute -bottom-4 -right-4 md:-bottom-6 md:-right-6 bg-red-600 text-white p-6 md:p-8 rounded-[24px] md:rounded-[30px] shadow-2xl">
                <p className="text-2xl md:text-3xl font-black italic">10Y+</p>
                <p className="text-[8px] md:text-[10px] font-bold uppercase tracking-widest">
                  Experience
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* 6. CALL TO ACTION */}
        <section className="py-24">
          <div className="bg-slate-900 rounded-[32px] md:rounded-[50px] p-10 md:p-24 text-center relative overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none">
              <div className="absolute top-[-50%] left-[-10%] w-[120%] h-[200%] rotate-12 bg-[repeating-linear-gradient(90deg,transparent,transparent_40px,rgba(255,255,255,0.1)_40px,rgba(255,255,255,0.1)_41px)]" />
            </div>
            <h2 className="text-2xl md:text-5xl font-bold text-white mb-8 relative z-10 leading-tight">
              Mulai Perjalanan Anda Bersama <br className="hidden md:block" />{" "}
              <span className="text-red-600">Rahayu Trans</span> Hari Ini.
            </h2>
            <div className="flex flex-col sm:flex-row gap-4 justify-center relative z-10">
              <Link
                href="/armada"
                className="bg-red-600 text-white px-8 md:px-10 py-4 md:py-5 rounded-2xl  hover:bg-red-700 transition-all shadow-xl shadow-red-900/20 text-sm md:text-base"
              >
                Lihat Katalog Mobil
              </Link>
              <Link
                href="/contact"
                className="bg-white text-slate-900 px-8 md:px-10 py-4 md:py-5 rounded-2xl  hover:bg-slate-50 transition-all text-sm md:text-base"
              >
                Hubungi WhatsApp
              </Link>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
