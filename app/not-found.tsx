"use client";

import {Home, ArrowLeft} from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center px-6 py-24 selection:bg-red-100">
      <div className="container max-w-4xl mx-auto flex flex-col items-center text-center">
        {/* Visual Section - Menggunakan Aset Mobil Utama */}
        <div className="relative w-full max-w-lg aspect-video mb-12 animate-in fade-in zoom-in duration-700">
          <div className="absolute inset-0 bg-red-600/10 rounded-[40px] blur-3xl -z-10" />
          <Image
            src="/img/car/HIACE-PREMIO-SILVER.webp" // Menggunakan aset lokal
            alt="Page Not Found"
            fill
            className="object-contain drop-shadow-[0_20px_50px_rgba(220,38,38,0.15)] pointer-events-none"
            priority
          />
        </div>

        {/* Text Section */}
        <div className="flex flex-col items-center">
          <span className="text-red-600 font-black text-7xl md:text-9xl tracking-tighter opacity-20 mb-4">
            404
          </span>
          <h1 className="text-3xl md:text-5xl font-black text-slate-900 mb-6 leading-tight">
            Ups! Sepertinya Anda <br />
            <span className="text-red-600">Salah Jalur.</span>
          </h1>
          <p className="max-w-md text-slate-500 text-sm md:text-base leading-relaxed mb-12 font-medium">
            Halaman yang Anda cari tidak tersedia atau mungkin telah
            dipindahkan. Tenang, Rahayu Trans siap membantu Anda kembali ke rute
            yang benar.
          </p>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
            <Link
              href="/"
              className="flex items-center justify-center gap-2 bg-red-600 text-white px-8 py-4 rounded-2xl hover:bg-red-700 transition-all shadow-xl shadow-red-200 cursor-pointer"
            >
              <Home size={18} /> Kembali ke Home
            </Link>
            <button
              onClick={() => window.history.back()}
              className="flex items-center justify-center gap-2 bg-white text-slate-900 border border-slate-200 px-8 py-4 rounded-2xl hover:bg-slate-50 transition-all cursor-pointer"
            >
              <ArrowLeft size={18} /> Halaman Sebelumnya
            </button>
          </div>
        </div>

        {/* Support Contact */}
        <div className="mt-16 pt-8 border-t border-slate-100 w-full max-w-xs">
          <p className="text-slate-400 text-xs font-bold uppercase tracking-widest mb-2">
            Butuh Bantuan?
          </p>
          <Link
            href="/contact"
            className="text-red-600 text-sm hover:underline transition-all"
          >
            Hubungi Customer Service
          </Link>
        </div>
      </div>
    </div>
  );
}
