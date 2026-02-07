"use client";

import {useState} from "react";
import {MapPin, ArrowUpRight, Compass, Camera, Calendar} from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const DESTINATIONS = [
  {
    id: 1,
    name: "Gunung Bromo",
    location: "Probolinggo, Jawa Timur",
    category: "Alam",
    image:
      "https://images.unsplash.com/photo-1588666309990-d68f08e3d4a6?auto=format&fit=crop&q=80&w=800",
    description:
      "Nikmati keindahan matahari terbit yang ikonik dan hamparan pasir laut di kawah Bromo.",
  },
  {
    id: 2,
    name: "Kawah Ijen",
    location: "Banyuwangi, Jawa Timur",
    category: "Petualangan",
    image:
      "https://images.unsplash.com/photo-1622760807800-478f7b24939a?auto=format&fit=crop&q=80&w=800",
    description:
      "Fenomena api biru (Blue Fire) yang langka dan danau asam berwarna toska yang memukau.",
  },
  {
    id: 3,
    name: "Tumpak Sewu",
    location: "Lumajang, Jawa Timur",
    category: "Alam",
    image:
      "https://images.unsplash.com/photo-1623880843231-50e189870d06?auto=format&fit=crop&q=80&w=800",
    description:
      "Air terjun termegah di Pulau Jawa dengan formasi tirai air yang melingkar sempurna.",
  },
  {
    id: 4,
    name: "Malang Kota",
    location: "Malang, Jawa Timur",
    category: "Kota",
    image:
      "https://images.unsplash.com/photo-1611638361849-a7206ba75344?auto=format&fit=crop&q=80&w=800",
    description:
      "Kota sejuk dengan berbagai destinasi edukasi, taman bunga, dan kuliner legendaris.",
  },
  {
    id: 5,
    name: "Pantai Pulau Merah",
    location: "Banyuwangi, Jawa Timur",
    category: "Pantai",
    image:
      "https://images.unsplash.com/photo-1544644181-1484b3fdfc62?auto=format&fit=crop&q=80&w=800",
    description:
      "Pantai dengan pasir kemerahan yang eksotis, sangat cocok untuk bersantai dan berselancar.",
  },
  {
    id: 6,
    name: "Batu Night Spectacular",
    location: "Kota Batu, Jawa Timur",
    category: "Hiburan",
    image:
      "https://images.unsplash.com/photo-1590523277543-a94d2e4eb00b?auto=format&fit=crop&q=80&w=800",
    description:
      "Taman hiburan keluarga dengan lampion warna-warni dan berbagai wahana seru di malam hari.",
  },
];

export default function DestinationsPage() {
  const [filter, setFilter] = useState("Semua");
  const categories = [
    "Semua",
    "Alam",
    "Petualangan",
    "Pantai",
    "Kota",
    "Hiburan",
  ];

  const filteredDestinations =
    filter === "Semua"
      ? DESTINATIONS
      : DESTINATIONS.filter((d) => d.category === filter);

  return (
    <div className="pt-24 md:pt-32 pb-24 selection:bg-red-100">
      <div className="max-w-[1440px] mx-auto px-6">
        {/* Header Section */}
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-end gap-8 mb-16">
          <div className="max-w-2xl">
            <h1 className="text-4xl md:text-6xl font-semibold text-slate-900 leading-tight">
              Destinasi <span className="text-red-600 font-light">Eksotis</span>{" "}
              <br className="hidden md:block" /> Menanti Anda.
            </h1>
          </div>
          <p className="max-w-xs text-slate-500 text-sm md:text-base leading-relaxed">
            Rahayu Trans siap menemani perjalanan wisata Anda ke berbagai titik
            terbaik di Jawa Timur dengan armada premium.
          </p>
        </div>

        {/* Categories Filter */}
        <div className="flex overflow-x-auto no-scrollbar gap-2 mb-12 pb-4 md:pb-10 pl-3">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setFilter(cat)}
              className={`px-6 py-2.5 rounded-full text-xs font-bold transition-all whitespace-nowrap border cursor-pointer ${
                filter === cat
                  ? "bg-red-600 text-white border-red-600 shadow-lg shadow-red-200"
                  : "bg-white text-slate-500 border-slate-100 hover:border-red-600 hover:text-red-600"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Destinations Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10">
          {filteredDestinations.map((dest) => (
            <div
              key={dest.id}
              className="group flex flex-col rounded-[32px] overflow-hidden border border-slate-100 hover:shadow-2xl hover:shadow-red-500/5 transition-all duration-500"
            >
              {/* Image Container */}
              <div className="relative aspect-[4/5] overflow-hidden">
                <Image
                  src={dest.image}
                  alt={dest.name}
                  fill
                  className="object-cover transition-transform duration-1000 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/100 via-transparent to-transparent opacity-80 group-hover:opacity-90 transition-opacity" />

                {/* Category Badge */}
                <div className="absolute top-6 left-6">
                  <span className="bg-white/20 backdrop-blur-md border border-white/30 text-white text-[10px] font-bold uppercase tracking-widest px-4 py-1.5 rounded-full">
                    {dest.category}
                  </span>
                </div>

                {/* Info Overlay */}
                <div className="absolute bottom-8 left-8 right-8 text-white">
                  <div className="flex items-center gap-2 mb-2">
                    <MapPin size={14} className="text-red-400" />
                    <span className="text-xs font-medium text-white/80">
                      {dest.location}
                    </span>
                  </div>
                  <h3 className="text-2xl font-bold mb-4">{dest.name}</h3>
                  <p className="text-xs text-white/70 line-clamp-2 leading-relaxed opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                    {dest.description}
                  </p>
                </div>
              </div>

              {/* Action Bar */}
              <Link
                href="/contact"
                className="flex items-center justify-between p-6 bg-white hover:bg-slate-50 transition-colors border-t border-slate-50"
              >
                <span className="text-sm font-bold text-slate-900">
                  Konsultasi Paket Tour
                </span>
                <div className="w-10 h-10 rounded-full bg-red-50 text-red-600 flex items-center justify-center group-hover:bg-red-600 group-hover:text-white transition-all">
                  <ArrowUpRight size={18} />
                </div>
              </Link>
            </div>
          ))}
        </div>

        {/* Feature Information Section */}
        <div className="mt-32 grid grid-cols-1 md:grid-cols-3 gap-12 py-16 border-y border-slate-100">
          <div className="flex flex-col items-center text-center px-4">
            <div className="w-12 h-12 rounded-2xl bg-red-50 text-red-600 flex items-center justify-center mb-6">
              <Calendar size={24} />
            </div>
            <h4 className="text-lg font-bold text-slate-900 mb-2">
              Jadwal Fleksibel
            </h4>
            <p className="text-sm text-slate-500 leading-relaxed">
              Atur waktu perjalanan sesuai keinginan Anda tanpa terikat jadwal
              kaku.
            </p>
          </div>
          <div className="flex flex-col items-center text-center px-4">
            <div className="w-12 h-12 rounded-2xl bg-red-50 text-red-600 flex items-center justify-center mb-6">
              <Camera size={24} />
            </div>
            <h4 className="text-lg font-bold text-slate-900 mb-2">
              Spot Fotogenik
            </h4>
            <p className="text-sm text-slate-500 leading-relaxed">
              Driver kami juga berperan sebagai guide yang paham sudut foto
              terbaik di setiap lokasi.
            </p>
          </div>
          <div className="flex flex-col items-center text-center px-4">
            <div className="w-12 h-12 rounded-2xl bg-red-50 text-red-600 flex items-center justify-center mb-6">
              <MapPin size={24} />
            </div>
            <h4 className="text-lg font-bold text-slate-900 mb-2">
              Rute Terpendek
            </h4>
            <p className="text-sm text-slate-500 leading-relaxed">
              Driver profesional berpengalaman yang paham rute efektif untuk
              menghindari kemacetan.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
