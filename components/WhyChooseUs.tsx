import {ShieldCheck, Clock, MapPin, BadgePercent} from "lucide-react";

const perks = [
  {
    title: "Kondisi Prima",
    desc: "Unit rutin diservis di dealer resmi untuk menjamin keamanan Anda.",
    icon: <ShieldCheck size={32} />,
  },
  {
    title: "Layanan 24/7",
    desc: "Bantuan darurat di jalan siap siaga kapanpun Anda butuhkan.",
    icon: <Clock size={32} />,
  },
  {
    title: "Antar Jemput",
    desc: "Layanan pengiriman unit langsung ke depan rumah atau bandara.",
    icon: <MapPin size={32} />,
  },
  {
    title: "Harga Jujur",
    desc: "Tanpa biaya tersembunyi. Harga yang tertera adalah harga final.",
    icon: <BadgePercent size={32} />,
  },
];

export default function WhyChooseUs() {
  return (
    <section className="py-24 bg-slate-100">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-red-600 font-bold tracking-widest uppercase text-sm">
            Keunggulan
          </span>
          <h2 className="text-4xl font-extrabold text-slate-900 mt-3 mb-4">
            Kenapa Sewa di Rahayu Trans?
          </h2>
          <p className="text-slate-500 leading-relaxed">
            Kami memberikan standar pelayanan terbaik untuk menjamin kenyamanan
            dan keselamatan perjalanan Anda.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-3 max-w-[1440px] mx-auto">
          {perks.map((perk, index) => (
            <div
              key={index}
              className="bg-white p-8 rounded-[32px] border border-slate-100 hover:border-red-200 hover:shadow-2xl hover:shadow-red-500/10 transition-all duration-300 group"
            >
              {/* Warna background ikon diubah dari orange ke red-50 (merah muda) */}
              <div className="w-16 h-16 bg-red-50 text-red-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 group-hover:bg-red-600 group-hover:text-white transition-all duration-300">
                {perk.icon}
              </div>
              <h3 className="text-lg font-bold text-slate-900 mb-2">
                {perk.title}
              </h3>
              <p className="text-sm text-slate-500 leading-relaxed">
                {perk.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
