"use client";

import {useState, useMemo, use} from "react"; // Tambahkan use
import Image from "next/image";
import {
  MapPin,
  Clock,
  Star,
  CheckCircle2,
  ArrowLeft,
  Share2,
  Heart,
  Calendar,
  Users,
  ShieldCheck,
} from "lucide-react";
import Link from "next/link";
import {notFound} from "next/navigation";
import {TOUR_PACKAGES} from "@/data/packages"; // Import data terpisah

export default function PackageDetail({
  params,
}: {
  params: Promise<{slug: string}>;
}) {
  // Unwrap params menggunakan hook use() agar kompatibel dengan Next.js 15/16
  const resolvedParams = use(params);
  const slug = resolvedParams.slug;

  const [activeTab, setActiveTab] = useState("itinerary");
  const pkg = useMemo(() => {
    return TOUR_PACKAGES.find((p) => p.slug === slug);
  }, [slug]);
  if (!pkg) {
    notFound();
  }

  return (
    <div className="min-h-screen pt-36 pb-20 selection:bg-tiger-orange-100">
      <div className="container mx-auto px-6">
        {/* Navigation & Actions */}
        <div className="flex justify-between items-center mb-8">
          <Link
            href="/packages"
            className="flex items-center gap-2 text-slate-500 hover:text-tiger-orange-600 transition-colors group cursor-pointer"
          >
            <ArrowLeft
              size={20}
              className="group-hover:-translate-x-1 transition-transform"
            />
            <span className="text-sm font-bold">Kembali</span>
          </Link>
          <div className="flex gap-3">
            <button className="p-2.5 border border-slate-100 rounded-full hover:bg-slate-50 cursor-pointer transition active:scale-90">
              <Share2 size={18} className="text-slate-600" />
            </button>
            <button className="p-2.5 border border-slate-100 rounded-full hover:bg-slate-50 cursor-pointer transition active:scale-90 text-slate-600 hover:text-red-500">
              <Heart size={18} />
            </button>
          </div>
        </div>

        {/* Galeri Foto - Minimalist Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 h-[300px] md:h-[500px] mb-12 rounded-[32px] overflow-hidden shadow-sm">
          <div className="relative h-full w-full">
            <Image
              src={pkg.images[0]}
              alt={pkg.name}
              fill
              className="object-cover"
              priority
            />
          </div>
          <div className="hidden md:grid grid-rows-2 gap-4 h-full">
            <div className="relative h-full w-full">
              <Image
                src={pkg.images[1] || pkg.images[0]}
                alt={pkg.name}
                fill
                className="object-cover"
              />
            </div>
            <div className="relative h-full w-full bg-slate-100 flex items-center justify-center cursor-pointer group">
              <span className="text-slate-900 font-bold text-lg group-hover:underline transition">
                + Lihat Semua Foto
              </span>
            </div>
          </div>
        </div>

        {/* Content Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-16">
          {/* Main Info */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-2 text-tiger-orange-600 mb-4">
              <MapPin size={18} />
              <span className="text-sm font-bold uppercase tracking-widest">
                {pkg.location}
              </span>
            </div>
            <h1 className="text-4xl font-bold text-slate-900 mb-6 leading-tight">
              {pkg.name}
            </h1>

            {/* Stats Ringkas */}
            <div className="flex flex-wrap gap-8 py-6 border-y border-slate-100 mb-10">
              <div className="flex items-center gap-3">
                <div className="bg-slate-50 p-3 rounded-2xl text-slate-400">
                  <Clock size={20} />
                </div>
                <div>
                  <p className="text-[10px] font-bold text-slate-400 uppercase">
                    Durasi
                  </p>
                  <p className="text-sm font-bold text-slate-900">
                    {pkg.duration}
                  </p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <div className="bg-slate-50 p-3 rounded-2xl text-slate-400">
                  <Users size={20} />
                </div>
                <div>
                  <p className="text-[10px] font-bold text-slate-400 uppercase">
                    Grup
                  </p>
                  <p className="text-sm font-bold text-slate-900">
                    Min. 2 Orang
                  </p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <div className="bg-slate-50 p-3 rounded-2xl text-slate-400">
                  <Star
                    size={20}
                    className="text-tiger-orange-500 fill-tiger-orange-500"
                  />
                </div>
                <div>
                  <p className="text-[10px] font-bold text-slate-400 uppercase">
                    Rating
                  </p>
                  <p className="text-sm font-bold text-slate-900">
                    {pkg.rating} ({pkg.reviews} Review)
                  </p>
                </div>
              </div>
            </div>

            {/* Description */}
            <div className="mb-12">
              <h3 className="text-xl font-bold text-slate-900 mb-4 tracking-tight">
                Tentang Wisata Ini
              </h3>
              <p className="text-slate-500 leading-relaxed font-medium">
                {pkg.description}
              </p>
            </div>

            {/* Itinerary Accordion - Minimalist */}
            <div>
              <h3 className="text-xl font-bold text-slate-900 mb-6 tracking-tight">
                Rencana Perjalanan
              </h3>
              <div className="space-y-4">
                {pkg.itinerary.map((item, i) => (
                  <div
                    key={i}
                    className="border border-slate-100 rounded-3xl p-6 bg-slate-50/30"
                  >
                    <div className="flex items-center gap-4 mb-4">
                      <span className="w-8 h-8 bg-tiger-orange-500 text-white rounded-xl flex items-center justify-center text-xs font-bold">
                        {i + 1}
                      </span>
                      <h4 className="font-bold text-slate-900">{item.title}</h4>
                    </div>
                    <ul className="space-y-3 ml-12">
                      {item.activities.map((act, j) => (
                        <li
                          key={j}
                          className="flex items-center gap-3 text-slate-500 text-sm font-medium"
                        >
                          <CheckCircle2
                            size={16}
                            className="text-tiger-orange-500"
                          />
                          {act}
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Booking Card - Sticky */}
          <div className="lg:col-span-1">
            <div className="sticky top-32 bg-white border border-slate-100 rounded-[40px] p-8 shadow-xl shadow-slate-100">
              <span className="text-slate-400 text-xs font-bold uppercase tracking-widest">
                Harga Per Pax
              </span>
              <div className="flex items-baseline gap-1 mt-2 mb-8">
                <h2 className="text-4xl font-bold text-slate-900">
                  Rp {(pkg.price / 1000000).toFixed(1)}jt
                </h2>
                <span className="text-slate-400 font-medium">/orang</span>
              </div>

              <div className="space-y-4 mb-8">
                <div className="bg-slate-50 p-4 rounded-2xl flex items-center justify-between cursor-pointer border border-transparent hover:border-tiger-orange-200 transition">
                  <div className="flex items-center gap-3">
                    <Calendar size={18} className="text-slate-400" />
                    <span className="text-sm font-bold text-slate-700">
                      Pilih Tanggal
                    </span>
                  </div>
                  <ArrowLeft size={16} className="rotate-180 text-slate-400" />
                </div>
                <div className="bg-slate-50 p-4 rounded-2xl flex items-center justify-between cursor-pointer border border-transparent hover:border-tiger-orange-200 transition">
                  <div className="flex items-center gap-3">
                    <Users size={18} className="text-slate-400" />
                    <span className="text-sm font-bold text-slate-700">
                      2 Peserta
                    </span>
                  </div>
                  <ArrowLeft size={16} className="rotate-180 text-slate-400" />
                </div>
              </div>

              <button className="w-full bg-tiger-orange-500 text-white py-4 rounded-2xl font-bold hover:bg-tiger-orange-600 transition-colors shadow-lg shadow-tiger-orange-200 mb-6 cursor-pointer active:scale-95 duration-200">
                Booking Sekarang
              </button>

              <div className="flex items-center justify-center gap-2 text-slate-400">
                <ShieldCheck size={16} />
                <span className="text-[10px] font-bold uppercase tracking-widest">
                  Aman & Terpercaya
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
