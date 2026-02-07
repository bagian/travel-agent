"use client";

import {Swiper, SwiperSlide} from "swiper/react";
import {Autoplay} from "swiper/modules";
import {Star, Quote} from "lucide-react";

// WAJIB: Import CSS Swiper
import "swiper/css";

const reviews = [
  {
    id: 1,
    name: "Budi Santoso",
    role: "Wisatawan",
    comment:
      "Mobil Zenix-nya sangat bersih dan wangi. Pelayanan jemput bandara tepat waktu banget!",
    rating: 5,
  },
  {
    id: 2,
    name: "Siska Amelia",
    role: "Business Traveler",
    comment:
      "Sewa lepas kunci di Rahayu Trans prosesnya cepat dan nggak ribet. Recommended!",
    rating: 5,
  },
  {
    id: 3,
    name: "Andi Wijaya",
    role: "Keluarga",
    comment:
      "Driver-nya ramah dan paham rute jalan tikus buat hindari macet. Liburan jadi tenang.",
    rating: 5,
  },
  {
    id: 4,
    name: "Dewi Citra",
    role: "Backpacker",
    comment:
      "Harga sangat kompetitif untuk sewa mingguan. Kondisi mobil sangat prima.",
    rating: 5,
  },
  {
    id: 5,
    name: "Rizky Pratama",
    role: "Event Organizer",
    comment:
      "Armada lengkap dan adminnya fast response. Sangat membantu kebutuhan event kami!",
    rating: 5,
  },
  {
    id: 6,
    name: "Hendra",
    role: "Local Guide",
    comment: "Unit selalu ready dan bersih. Sangat profesional.",
    rating: 5,
  },
];

export default function Testimonials() {
  return (
    <section className="py-24 overflow-hidden w-full max-w-[1440px] mx-auto bg-transparent">
      <div className="mx-auto px-6 text-center mb-16">
        <span className="text-red-600 font-bold tracking-widest uppercase text-sm">
          Testimoni
        </span>
        <h2 className="text-4xl font-extrabold text-slate-900 mt-2">
          Apa Kata Mereka?
        </h2>
      </div>

      {/* Container Slider dengan Efek Fade */}
      <div className="relative w-full px-4">
        {/* Overlay Fade Kiri - Menggunakan #fafafa agar blend dengan global bg */}
        <div className="absolute left-0 top-0 bottom-0 w-20 md:w-40 bg-gradient-to-r from-[#fafafa] to-transparent z-10 pointer-events-none" />

        {/* Overlay Fade Kanan - Menggunakan #fafafa agar blend dengan global bg */}
        <div className="absolute right-0 top-0 bottom-0 w-20 md:w-40 bg-gradient-to-l from-[#fafafa] to-transparent z-10 pointer-events-none" />

        <Swiper
          modules={[Autoplay]}
          loop={true}
          speed={8000}
          autoplay={{
            delay: 0,
            disableOnInteraction: false,
            pauseOnMouseEnter: false,
          }}
          slidesPerView={1.2}
          spaceBetween={10}
          breakpoints={{
            640: {slidesPerView: 2},
            1024: {slidesPerView: 3.5},
          }}
          allowTouchMove={false}
          className="testimonial-marquee-swiper"
        >
          {reviews.map((rvw) => (
            <SwiperSlide key={rvw.id} className="!h-auto py-10">
              <div className="bg-white p-8 rounded-[20px] relative border border-slate-100 h-full flex flex-col justify-between shadow-sm hover:shadow-red-500/10 transition-shadow duration-500">
                {/* Quote Icon disesuaikan ke Merah Muda */}
                <Quote
                  className="absolute top-6 right-8 text-red-100"
                  size={40}
                />

                <div>
                  {/* Rating Stars disesuaikan ke Merah */}
                  <div className="flex gap-1 mb-4 text-red-500">
                    {[...Array(rvw.rating)].map((_, i) => (
                      <Star key={i} size={14} fill="currentColor" />
                    ))}
                  </div>
                  <p className="text-slate-600 text-sm leading-relaxed mb-8">
                    &quot;{rvw.comment}&quot;
                  </p>
                </div>

                <div className="flex items-center gap-4 border-t border-slate-200 pt-6">
                  {/* Avatar Background disesuaikan ke Merah */}
                  <div className="w-12 h-12 bg-red-600 rounded-full flex items-center justify-center font-bold text-white shadow-lg shadow-red-500/20 uppercase">
                    {rvw.name.charAt(0)}
                  </div>
                  <div className="text-left">
                    <h4 className="font-bold text-slate-900 text-sm">
                      {rvw.name}
                    </h4>
                    <p className="text-[10px] font-bold text-slate-400 uppercase tracking-wider">
                      {rvw.role}
                    </p>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      <style jsx global>{`
        .testimonial-marquee-swiper .swiper-wrapper {
          transition-timing-function: linear !important;
          -webkit-transition-timing-function: linear !important;
        }
      `}</style>
    </section>
  );
}
