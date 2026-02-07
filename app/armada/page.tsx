"use client";

import {useState} from "react";
import {Users, Settings2, CheckCircle2} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import {FLEET_DATA} from "@/data/fleet";

export default function FleetPage() {
  const [activeFilter, setActiveFilter] = useState("Semua");
  const categories = ["Semua", "Premium", "MPV", "SUV", "City Car"];

  const filteredFleet =
    activeFilter === "Semua"
      ? FLEET_DATA
      : FLEET_DATA.filter((v) => v.category === activeFilter);

  return (
    <div className="pt-24 md:pt-32 pb-24 min-h-screen selection:bg-red-100">
      <div className="container mx-auto px-4 md:px-6">
        {/* Header - Minimalist */}
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-end mb-12 lg:mb-16 gap-6">
          <div className="max-w-xl">
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-slate-900 tracking-tight leading-tight">
              Pilihan{" "}
              <span className="text-red-600 font-extrabold">Armada</span>{" "}
              Terbaik
            </h1>
            <p className="text-slate-500 mt-3 md:mt-4 text-base md:text-lg font-medium">
              Unit terbaru dan terawat untuk kenyamanan perjalanan Anda di
              Sidoarjo dan sekitarnya.
            </p>
          </div>
        </div>

        {/* Categories Filter - Aksen Merah */}
        <div className="flex overflow-x-auto no-scrollbar pb-4 md:pb-0 md:flex-wrap gap-2 mb-8 md:mb-12">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveFilter(cat)}
              className={`px-5 md:px-6 py-2 rounded-full text-xs md:text-sm font-semibold transition-all whitespace-nowrap cursor-pointer ${
                activeFilter === cat
                  ? "bg-red-600 text-white shadow-md shadow-red-200"
                  : "bg-white text-slate-500 hover:bg-red-50 hover:text-red-600 border border-slate-100"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Fleet Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 lg:gap-6">
          {filteredFleet.map((vehicle) => (
            <Link
              key={vehicle.id}
              href={`/armada/${vehicle.slug}`}
              className="group flex flex-col bg-white rounded-[24px] md:rounded-[32px] border border-slate-100 hover:border-red-200 transition-all duration-500 overflow-hidden shadow-sm hover:shadow-2xl hover:shadow-red-500/10 cursor-pointer"
            >
              {/* Image Section */}
              <div className="relative h-48 sm:h-56 w-full bg-slate-100 overflow-hidden">
                {vehicle.images && vehicle.images[0] ? (
                  <Image
                    src={vehicle.images[0]}
                    alt={vehicle.name}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-700"
                    unoptimized
                  />
                ) : (
                  <div className="w-full h-full bg-slate-200 animate-pulse" />
                )}

                <div className="absolute top-4 right-4">
                  <span className="bg-white/95 backdrop-blur-sm text-slate-900 text-[9px] md:text-[10px] font-black uppercase tracking-wider px-3 py-1 rounded-full border border-slate-100 shadow-sm">
                    {vehicle.transmission}
                  </span>
                </div>
              </div>

              {/* Content Section */}
              <div className="p-6 md:p-8 flex flex-col flex-grow">
                <div className="flex items-center gap-2 mb-2">
                  <span className="text-[10px] font-bold text-red-600 uppercase tracking-widest">
                    {vehicle.category}
                  </span>
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-6 group-hover:text-red-600 transition-colors">
                  {vehicle.name}
                </h3>

                {/* Specs Row */}
                <div className="grid grid-cols-2 gap-4 mb-8">
                  <div className="flex items-center gap-2 p-3 bg-slate-50 rounded-2xl border border-slate-100">
                    <Users size={16} className="text-slate-400" />
                    <span className="text-xs font-bold text-slate-700">
                      {vehicle.capacity} Kursi
                    </span>
                  </div>
                  <div className="flex items-center gap-2 p-3 bg-slate-50 rounded-2xl border border-slate-100">
                    <Settings2 size={16} className="text-slate-400" />
                    <span className="text-xs font-bold text-slate-700">
                      {vehicle.transmission}
                    </span>
                  </div>
                </div>

                {/* Features List */}
                <ul className="space-y-2 mb-8 flex-grow">
                  {vehicle.features.slice(0, 3).map((feature, index) => (
                    <li
                      key={index}
                      className="flex items-center gap-2 text-[11px] md:text-xs text-slate-500 font-medium"
                    >
                      <CheckCircle2 size={14} className="text-red-600" />
                      {feature}
                    </li>
                  ))}
                </ul>

                {/* Footer / Price */}
                <div className="mt-auto pt-6 border-t border-slate-50 flex justify-between items-center">
                  <div>
                    <span className="text-slate-400 text-[10px] font-bold uppercase tracking-widest">
                      Sewa Per Hari
                    </span>
                    <p className="text-xl font-black text-slate-900">
                      Rp {(vehicle.pricePerDay / 1000).toLocaleString("id-ID")}k
                      <span className="text-xs font-medium text-slate-400 ml-1">
                        /hari
                      </span>
                    </p>
                  </div>
                  <div className="bg-slate-900 text-white px-5 py-3 rounded-2xl text-xs font-black group-hover:bg-red-600 transition-all shadow-lg shadow-slate-200 group-hover:shadow-red-500/30">
                    Sewa Sekarang
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
