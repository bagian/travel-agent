export default function Faq() {
  const faqs = [
    {
      q: "Apa saja syarat sewa mobil lepas kunci?",
      a: "Cukup siapkan KTP, SIM A aktif yang masih berlaku, dan jaminan kendaraan bermotor (STNK asli) atau deposit uang jaminan yang akan dikembalikan setelah masa sewa berakhir.",
    },
    {
      q: "Apakah bisa antar jemput ke Bandara?",
      a: "Tentu saja! Rahayu Trans melayani antar jemput unit di Bandara Juanda serta berbagai titik lokasi strategis lainnya di area Sidoarjo dan Surabaya.",
    },
    {
      q: "Bagaimana jika terjadi kerusakan atau kendala di jalan?",
      a: "Kami menyediakan layanan bantuan darurat 24/7. Anda cukup menghubungi nomor darurat yang tertera pada kunci kendaraan atau pusat bantuan kami untuk penanganan cepat.",
    },
    {
      q: "Apakah ada batas penggunaan kilometer (KM)?",
      a: "Untuk sewa harian di dalam provinsi, kami memberikan fasilitas penggunaan kilometer yang fleksibel. Namun, untuk penggunaan luar provinsi, mohon koordinasikan dengan admin kami terlebih dahulu.",
    },
    {
      q: "Bagaimana kebijakan pengembalian bensin?",
      a: "Kami menerapkan kebijakan 'Same-to-Same'. Kendaraan diberikan dengan kondisi bensin tertentu (misal: penuh), maka wajib dikembalikan dalam kondisi level bensin yang sama.",
    },
    {
      q: "Apakah harga sewa sudah termasuk asuransi?",
      a: "Semua unit kami telah diproteksi dengan asuransi. Namun, terdapat biaya risiko sendiri (own risk) yang menjadi tanggung jawab penyewa jika terjadi insiden kecil sesuai dengan ketentuan yang berlaku.",
    },
  ];

  return (
    // Background disesuaikan ke #fafafa agar konsisten dengan section lainnya
    <section className="py-24 bg-slate-100">
      <div className="mx-auto px-6 max-w-[1440px]">
        <div className="text-center mb-16">
          <span className="text-red-600 font-bold tracking-widest uppercase text-sm">
            F.A.Q
          </span>
          <h2 className="text-4xl font-extrabold text-slate-900 mt-3 mb-4">
            Pertanyaan Populer
          </h2>
          <p className="text-slate-500">
            Punya pertanyaan mengenai layanan Rahayu Trans? Mungkin sudah kami
            jawab di sini.
          </p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, i) => (
            <details
              key={i}
              className="group bg-white rounded-[32px] border border-slate-100 overflow-hidden transition-all duration-300 hover:shadow-xl hover:shadow-red-500/5"
            >
              <summary className="flex justify-between items-center p-7 cursor-pointer font-bold text-slate-800 list-none select-none">
                <span className="pr-4">{faq.q}</span>
                {/* Ikon panah disesuaikan ke warna merah logo */}
                <div className="w-8 h-8 rounded-full bg-red-50 text-red-600 flex items-center justify-center group-open:rotate-180 transition-transform duration-300">
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="3"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="m6 9 6 6 6-6" />
                  </svg>
                </div>
              </summary>
              <div className="px-7 pb-7 text-slate-500 text-sm leading-relaxed border-t border-slate-50 pt-5 animate-in fade-in slide-in-from-top-2 duration-300">
                {faq.a}
              </div>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
