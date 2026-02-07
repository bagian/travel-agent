export default function BookingSteps() {
  const steps = [
    {
      title: "Pilih Armada",
      desc: "Tentukan mobil yang sesuai dengan gaya dan kebutuhan perjalanan Anda.",
    },
    {
      title: "Atur Jadwal",
      desc: "Pilih tanggal dan lokasi penjemputan unit di area yang kami jangkau.",
    },
    {
      title: "Selesaikan Pembayaran",
      desc: "Proses transaksi aman dengan berbagai pilihan metode pembayaran.",
    },
    {
      title: "Nikmati Perjalanan",
      desc: "Unit kami antarkan ke lokasi Anda dalam kondisi bersih dan bensin penuh.",
    },
  ];

  return (
    <section className="py-24">
      <div className="container mx-auto px-6">
        <div className="text-center max-w-2xl mx-auto mb-20">
          <span className="text-red-600 font-bold tracking-widest uppercase text-sm">
            Proses Sewa
          </span>
          <h2 className="text-4xl font-extrabold text-slate-900 mt-3">
            Cara Mudah Pesan Kendaraan
          </h2>
        </div>

        <div className="relative grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Garis Penghubung (Hanya muncul di Desktop) */}
          <div className="hidden lg:block absolute top-14 left-0 w-full h-[2px] bg-slate-200 z-0" />

          {steps.map((step, index) => (
            <div
              key={index}
              className="relative z-10 flex flex-col group items-center text-center"
            >
              {/* Lingkaran Nomor dengan Aksen Merah */}
              <div className="w-28 h-28 rounded-full bg-white border-4 border-[#fafafa] shadow-xl flex items-center justify-center mb-8 group-hover:scale-110 group-hover:border-red-600 transition-all duration-500 overflow-hidden">
                <span className="text-4xl font-black text-slate-200 group-hover:text-red-600 transition-colors">
                  0{index + 1}
                </span>
              </div>

              <div className="px-4">
                <h3 className="text-xl font-bold text-slate-900 mb-4 group-hover:text-red-600 transition-colors">
                  {step.title}
                </h3>
                <p className="text-slate-500 text-sm leading-relaxed">
                  {step.desc}
                </p>
              </div>

              {/* Panah Indikator (Mobile/Tablet) */}
              {index !== steps.length - 1 && (
                <div className="lg:hidden mt-8 text-slate-300">
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="m7 7 5 5-5 5" />
                    <path d="m13 7 5 5-5 5" />
                  </svg>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
