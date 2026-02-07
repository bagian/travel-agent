"use client";

import {useState} from "react";
import {MapPin, Clock, Star, ArrowUpRight, Search} from "lucide-react";
import Image from "next/image";
import Link from "next/link";

// Tipe data tetap sama
export interface TourPackage {
  id: number;
  slug: string;
  name: string;
  location: string;
  price: number;
  duration: string;
  image: string;
  rating: number;
  reviews: number;
  category: "Adventure" | "Family" | "Couple" | "Honeymoon";
  isBestSeller?: boolean;
}

const TOUR_PACKAGES: TourPackage[] = [
  {
    id: 1,
    slug: "bali-nusa-penida",
    name: "Eksplor Nusa Penida & Snorkeling",
    location: "Bali, Indonesia",
    price: 2500000,
    duration: "3D 2N",
    image: "https://images.unsplash.com/photo-1537996194471-e657df975ab4",
    rating: 4.9,
    reviews: 120,
    category: "Adventure",
    isBestSeller: true,
  },
  {
    id: 2,
    slug: "bromo-sunrise-midnight",
    name: "Bromo Sunrise Midnight Tour",
    location: "Jawa Timur",
    price: 1200000,
    duration: "1D",
    image:
      "https://images.unsplash.com/photo-1588668214407-6ea9a6d7c272?q=80&w=1771&auto=format&fit=crop",
    rating: 4.8,
    reviews: 85,
    category: "Adventure",
  },
];

export default function PackagesPage() {
  const [activeCategory, setActiveCategory] = useState("Semua");
  const categories = ["Semua", "Adventure", "Family", "Couple", "Honeymoon"];

  return (
    <div className="pt-24 md:pt-32 pb-24 bg-white min-h-screen selection:bg-tiger-orange-100">
      <div className="container mx-auto px-4 md:px-6">
        {/* Header Section - Responsive Layout */}
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-end mb-12 lg:mb-16 gap-6 md:gap-8">
          <div className="max-w-xl">
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-slate-900 tracking-tight leading-tight">
              Temukan{" "}
              <span className="text-tiger-orange-500 font-extrabold">
                Pengalaman
              </span>{" "}
              Baru
            </h1>
            <p className="text-slate-500 mt-3 md:mt-4 text-base md:text-lg font-medium">
              Jelajahi destinasi pilihan dengan layanan premium Bagian Travel.
            </p>
          </div>

          {/* Search Bar - Full width on Mobile */}
          <div className="relative w-full lg:w-80 group cursor-text">
            <Search
              className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 group-focus-within:text-tiger-orange-500 transition-colors"
              size={18}
            />
            <input
              type="text"
              placeholder="Cari destinasi..."
              className="w-full pl-11 pr-4 py-3 md:py-3.5 bg-slate-50 border border-slate-100 rounded-2xl focus:outline-none focus:ring-1 focus:ring-tiger-orange-500 focus:bg-white transition-all text-sm font-medium placeholder:text-slate-400"
            />
          </div>
        </div>

        {/* Filter Chips - Scrollable on Small Devices */}
        <div className="flex overflow-x-auto no-scrollbar pb-4 md:pb-0 md:flex-wrap gap-2 mb-8 md:mb-12">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-5 md:px-6 py-2 rounded-full text-xs md:text-sm font-semibold transition-all whitespace-nowrap cursor-pointer ${
                activeCategory === cat
                  ? "bg-tiger-orange-500 text-white shadow-md shadow-tiger-orange-200"
                  : "bg-white text-slate-500 hover:bg-slate-50 border border-slate-100"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Tour Grid - 1 Col (Mobile), 2 Col (Tablet), 3 Col (Desktop) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 lg:gap-10">
          {TOUR_PACKAGES.map((pkg) => (
            <Link
              key={pkg.id}
              href={`/packages/${pkg.slug}`}
              className="group relative flex flex-col h-full bg-white rounded-[24px] md:rounded-[32px] border border-slate-100 hover:border-tiger-orange-200 hover:shadow-xl hover:shadow-tiger-orange-50 transition-all duration-500 overflow-hidden cursor-pointer"
            >
              {/* Image Container */}
              <div className="relative h-56 sm:h-64 w-full overflow-hidden">
                <Image
                  src={pkg.image}
                  alt={pkg.name}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  className="object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute top-4 left-4 md:top-5 md:left-5 flex flex-col gap-2">
                  {pkg.isBestSeller && (
                    <span className="bg-tiger-orange-500 text-white text-[9px] md:text-[10px] font-bold uppercase tracking-wider px-3 py-1 rounded-full shadow-sm">
                      Best Seller
                    </span>
                  )}
                  <span className="bg-white/90 backdrop-blur-sm text-slate-900 text-[9px] md:text-[10px] font-bold uppercase tracking-wider px-3 py-1 rounded-full shadow-sm border border-white/20">
                    {pkg.category}
                  </span>
                </div>
              </div>

              {/* Content - Responsive Padding & Text */}
              <div className="p-5 md:p-7 flex flex-col flex-grow">
                <div className="flex justify-between items-center mb-3 md:mb-4">
                  <div className="flex items-center gap-1.5 text-slate-400">
                    <MapPin size={13} className="text-tiger-orange-500" />
                    <span className="text-[10px] md:text-[11px] font-bold uppercase tracking-wider text-slate-500 truncate max-w-[120px] sm:max-w-none">
                      {pkg.location}
                    </span>
                  </div>
                  <div className="flex items-center gap-1 bg-slate-50 px-2 py-0.5 rounded-lg">
                    <Star
                      size={11}
                      className="text-tiger-orange-500 fill-tiger-orange-500"
                    />
                    <span className="text-[11px] md:text-xs font-bold text-slate-900">
                      {pkg.rating}
                    </span>
                  </div>
                </div>

                <h3 className="text-base md:text-lg font-bold text-slate-900 mb-4 md:mb-6 leading-snug group-hover:text-tiger-orange-600 transition-colors">
                  {pkg.name}
                </h3>

                <div className="flex items-center gap-2 mb-6 md:mb-8">
                  <div className="flex items-center gap-1.5 bg-slate-50 px-2.5 py-1 rounded-lg border border-slate-100">
                    <Clock size={12} className="text-slate-400" />
                    <span className="text-[9px] md:text-[10px] font-bold text-slate-600 uppercase">
                      {pkg.duration}
                    </span>
                  </div>
                </div>

                {/* Footer Card */}
                <div className="mt-auto flex justify-between items-center pt-4 md:pt-5 border-t border-slate-50">
                  <div>
                    <span className="text-slate-400 text-[9px] md:text-[10px] font-bold uppercase tracking-widest">
                      Mulai Dari
                    </span>
                    <p className="text-base md:text-lg font-bold text-slate-900">
                      Rp {(pkg.price / 1000000).toFixed(1)}jt
                      <span className="text-[10px] md:text-xs font-medium text-slate-400 ml-1">
                        /pax
                      </span>
                    </p>
                  </div>
                  <div className="w-9 h-9 md:w-10 md:h-10 bg-slate-50 text-slate-900 rounded-xl flex items-center justify-center group-hover:bg-tiger-orange-500 group-hover:text-white transition-all duration-300 group-hover:rotate-12">
                    <ArrowUpRight className="w-[18px] h-[18px] md:w-5 md:h-5" />
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
