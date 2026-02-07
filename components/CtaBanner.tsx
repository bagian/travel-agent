import {MessageCircle, ArrowRight} from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function CtaBanner() {
  return (
    <section className="py-24 max-w-[1440px] mx-auto px-6">
      <div className="relative  rounded-[50px] overflow-hidden shadow-2xl shadow-red-200 min-h-[500px] flex items-center bg-gradient-to-r from-rose-300 to-red-700">
        {/* Dekorasi Background */}
        <div className="absolute -top-24 -left-24 w-96 h-96 bg-white/10 rounded-full blur-3xl z-0" />
        <div className="absolute -bottom-24 -right-24 w-80 h-80 bg-black/10 rounded-full blur-3xl z-0" />

        <div className="relative z-10 w-full grid grid-cols-1 lg:grid-cols-2 gap-12 items-center px-8 md:px-20 py-16">
          {/* SISI MOBIL: Disembunyikan di Mobile & Tablet, Muncul di Desktop (lg) */}
          <div className="hidden lg:flex relative h-[450px] w-full items-center justify-center order-2 lg:order-1 lg:-translate-x-32 xl:-translate-x-48">
            <Image
              src="/img/car/platinum-white-pearl-mc-split.png"
              alt="Premium Fleet Rahayu Trans"
              width={1200}
              height={800}
              className="object-contain drop-shadow-[0_20px_50px_rgba(0,0,0,0.3)] scale-150 pointer-events-none"
              priority
              quality={90}
              sizes="800px"
            />
          </div>

          {/* SISI TEKS */}
          <div className="text-center lg:text-left order-1 lg:order-2">
            <span className="bg-white/20 text-white px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider">
              Info Info
            </span>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-white mt-6 mb-6 leading-tight">
              Siap Menjelajahi <br />
              <span className="text-slate-900">Perjalanan?</span>
            </h2>
            <p className="text-white/90 text-base md:text-lg mb-10 font-medium leading-relaxed max-w-xl mx-auto lg:mx-0">
              Nikmati kenyamanan berkendara dengan armada terbaru kami. Dapatkan
              diskon spesial hingga 20% untuk penyewaan di atas 7 hari hanya di
              Rahayu Trans.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Link href="/armada" className="contents">
                <button className="bg-slate-900 text-white px-8 lg:px-10 py-4 lg:py-5 rounded-2xl  hover:bg-slate-800 transition-all shadow-xl flex items-center justify-center gap-3 group cursor-pointer">
                  Booking Sekarang
                  <ArrowRight
                    size={20}
                    className="group-hover:translate-x-2 transition-transform"
                  />
                </button>
              </Link>

              <button className="bg-white text-red-600 px-8 lg:px-10 py-4 lg:py-5 rounded-2xl  hover:bg-red-50 transition-all flex items-center justify-center gap-3 cursor-pointer">
                <MessageCircle size={20} />
                Hubungi CS
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
