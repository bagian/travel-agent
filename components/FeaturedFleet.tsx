import {Users, Fuel, Settings2, ArrowRight} from "lucide-react";
import Link from "next/link";
import Image from "next/image";

const cars = [
  {
    id: 1,
    name: "BMW M4 Coupe",
    slug: "bmw-m4-coupe", // Slug untuk URL detail
    type: "Luxury",
    price: "5.500.000",
    seats: 2,
    transmission: "AT",
    fuel: "Pertamax Turbo",
    image:
      "https://images.unsplash.com/photo-1617814076367-b759c7d7e738?q=80&w=800&auto=format&fit=crop",
  },
  {
    id: 2,
    name: "Toyota Innova Zenix",
    slug: "toyota-innova-zenix",
    type: "MPV",
    price: "850.000",
    seats: 7,
    transmission: "AT",
    fuel: "Hybrid",
    image: "/img/car/Toyota-Innova-Zenix.webp",
  },
  {
    id: 3,
    name: "Toyota Alphard 2024",
    slug: "toyota-alphard-2024",
    type: "VVIP",
    price: "2.800.000",
    seats: 6,
    transmission: "AT",
    fuel: "Bensin",
    image: "/img/car/Toyota-Alphard-2024.jpeg",
  },
  {
    id: 4,
    name: "BMW M4 Coupe",
    slug: "bmw-m4-coupe", // Slug untuk URL detail
    type: "Luxury",
    price: "5.500.000",
    seats: 2,
    transmission: "AT",
    fuel: "Pertamax Turbo",
    image:
      "https://images.unsplash.com/photo-1617814076367-b759c7d7e738?q=80&w=800&auto=format&fit=crop",
  },
  {
    id: 5,
    name: "Toyota Innova Zenix",
    slug: "toyota-innova-zenix",
    type: "MPV",
    price: "850.000",
    seats: 7,
    transmission: "AT",
    fuel: "Hybrid",
    image: "/img/car/Toyota-Innova-Zenix.webp",
  },
  {
    id: 6,
    name: "Toyota Alphard 2024",
    slug: "toyota-alphard-2024",
    type: "VVIP",
    price: "2.800.000",
    seats: 6,
    transmission: "AT",
    fuel: "Bensin",
    image: "/img/car/Toyota-Alphard-2024.jpeg",
  },
];

export default function FeaturedFleet() {
  return (
    <section className="py-24 max-w-[1440px] mx-auto px-4">
      <div className="container mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-4">
          <div>
            <span className="text-red-600 font-bold tracking-widest uppercase text-sm">
              Armada Kami
            </span>
            <h2 className="text-4xl font-extrabold text-slate-900 mt-2">
              Pilih Kendaraan Impian
            </h2>
          </div>
          <Link
            href="/armada"
            className="flex items-center gap-2 text-red-600 font-bold hover:gap-4 transition-all"
          >
            Lihat Semua Unit <ArrowRight size={20} />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {cars.map((car) => (
            <div
              key={car.id}
              className="group bg-white rounded-[40px] p-5 border border-slate-200/60 hover:shadow-2xl hover:shadow-red-500/10 transition-all duration-500 flex flex-col"
            >
              {/* Image Section - Dibungkus Link agar gambar bisa diklik */}
              <Link
                href={`/armada/${car.slug}`}
                className="relative h-80 w-full mb-6 overflow-hidden rounded-[30px] bg-slate-100 block"
              >
                <Image
                  src={car.image}
                  alt={car.name}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                  unoptimized
                />
                <div className="absolute top-4 left-4 bg-white/95 backdrop-blur px-4 py-1.5 rounded-full text-[10px] font-black uppercase tracking-wider text-red-600 shadow-sm z-10">
                  {car.type}
                </div>
              </Link>

              <div className="px-2 flex-grow">
                {/* Judul Mobil - Dibungkus Link */}
                <Link href={`/armada/${car.slug}`}>
                  <h3 className="text-xl font-bold text-slate-900 mb-4 hover:text-red-600 transition-colors">
                    {car.name}
                  </h3>
                </Link>

                <div className="grid grid-cols-2 md:grid-cols-3 gap-3 mb-8">
                  <div className="flex flex-col items-center p-3 bg-slate-50 rounded-[20px] border border-slate-100">
                    <Users size={18} className="text-slate-400 mb-1.5" />
                    <span className="text-[10px] font-bold text-slate-700">
                      {car.seats} Kursi
                    </span>
                  </div>
                  <div className="flex flex-col items-center p-3 bg-slate-50 rounded-[20px] border border-slate-100">
                    <Settings2 size={18} className="text-slate-400 mb-1.5" />
                    <span className="text-[10px] font-bold text-slate-700">
                      {car.transmission}
                    </span>
                  </div>
                  <div className="flex flex-col items-center p-3 bg-slate-50 rounded-[20px] border border-slate-100">
                    <Fuel size={18} className="text-slate-400 mb-1.5" />
                    <span className="text-[10px] font-bold text-slate-700">
                      {car.fuel}
                    </span>
                  </div>
                </div>

                <div className="flex justify-between items-center border-t border-slate-100 pt-6 mt-auto">
                  <div>
                    <span className="text-slate-400 text-[10px] font-bold uppercase tracking-wider">
                      Harga/Hari
                    </span>
                    <p className="text-xl font-black text-slate-900">
                      Rp {car.price}
                    </p>
                  </div>

                  {/* Action Button - Dibungkus Link */}
                  <Link href={`/armada/${car.slug}`}>
                    <button className="bg-slate-900 text-white w-12 h-12 flex items-center justify-center rounded-2xl hover:bg-red-600 transition-all duration-300 shadow-lg shadow-slate-200 hover:shadow-red-500/40 cursor-pointer">
                      <ArrowRight size={22} />
                    </button>
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="py-10 flex justify-center items-center">
          <span className="bg-red-800 text-white px-5 py-3 rounded-full text-sm font-bold hover:bg-red-700 transition shadow-lg shadow-red-200 cursor-pointer">
            <Link
              href="/armada"
              className="flex items-center gap-2 text-white font-bold hover:gap-4 transition-all"
            >
              Lihat Semua Unit <ArrowRight size={20} />
            </Link>
          </span>
        </div>
      </div>
    </section>
  );
}
