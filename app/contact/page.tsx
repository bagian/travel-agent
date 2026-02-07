"use client";

import {useState} from "react";
import {Mail, MapPin, Phone, MessageSquare, Send, Clock} from "lucide-react";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    car: "",
    date: "",
    message: "",
  });

  const handleInputChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >,
  ) => {
    const {name, value} = e.target;
    setFormData((prev) => ({...prev, [name]: value}));
  };

  const handleWhatsAppRedirect = (e: React.FormEvent) => {
    e.preventDefault();
    const adminPhone = "6281234567890";
    const text =
      `Halo Rahayu Trans, saya ingin memesan kendaraan:%0A%0A` +
      `*Nama:* ${formData.name}%0A` +
      `*Unit Mobil:* ${formData.car}%0A` +
      `*Tanggal Sewa:* ${formData.date}%0A` +
      `*Pesan:* ${formData.message}`;

    const whatsappUrl = `https://wa.me/${adminPhone}?text=${text}`;
    window.open(whatsappUrl, "_blank");
  };

  return (
    <div className="pt-24 md:pt-32 pb-24 selection:bg-red-100">
      <div className="max-w-[1440px] mx-auto px-6">
        {/* Header Section */}
        <div className="max-w-3xl mb-16">
          <h1 className="text-4xl md:text-6xl font-black text-slate-900 leading-tight mb-6">
            Siap Membantu <br />
            <span className="text-red-600 italic font-light">
              Perjalanan Anda.
            </span>
          </h1>
          <p className="text-slate-500 text-sm md:text-base leading-relaxed max-w-xl">
            Punya pertanyaan mengenai unit armada atau ingin melakukan pemesanan
            khusus? Tim Rahayu Trans siap melayani Anda 24/7 di wilayah Sidoarjo
            dan sekitarnya.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
          {/* SISI KIRI: Info Kontak & Maps (Sejajar dengan Form) */}
          <div className="lg:col-span-5 flex flex-col gap-8 h-full">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-6">
              <div className="flex gap-4 group bg-white p-4 rounded-2xl border border-slate-100 shadow-sm">
                <div className="w-12 h-12 shrink-0 rounded-xl bg-red-50 flex items-center justify-center text-red-600">
                  <MapPin size={20} />
                </div>
                <div>
                  <h4 className="font-bold text-slate-900 text-sm mb-1">
                    Kantor Pusat
                  </h4>
                  <p className="text-slate-500 text-xs leading-relaxed">
                    Sidoarjo, Jawa Timur, Indonesia
                  </p>
                </div>
              </div>

              <div className="flex gap-4 group bg-white p-4 rounded-2xl border border-slate-100 shadow-sm">
                <div className="w-12 h-12 shrink-0 rounded-xl bg-red-50 flex items-center justify-center text-red-600">
                  <Phone size={20} />
                </div>
                <div>
                  <h4 className="font-bold text-slate-900 text-sm mb-1">
                    WhatsApp
                  </h4>
                  <p className="text-slate-500 text-xs leading-relaxed">
                    +62 812 3456 7890
                  </p>
                </div>
              </div>
            </div>

            {/* Google Maps - Height disesuaikan agar sejajar dengan Form */}
            <div className="w-full flex-grow min-h-[400px] lg:min-h-0 rounded-[40px] overflow-hidden border border-slate-100 shadow-sm grayscale hover:grayscale-0 transition-all duration-700">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d126628.2435496417!2d112.63234988674558!3d-7.450410403750831!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2dd7e10df19c0165%3A0x3027a76352920f0!2sSidoarjo%20Regency%2C%20East%20Java!5e0!3m2!1sen!2sid!4v1700000000000!5m2!1sen!2sid"
                className="w-full h-full border-0"
                allowFullScreen={true}
                loading="lazy"
              />
            </div>
          </div>

          {/* SISI KANAN: Form Pemesanan */}
          <div className="lg:col-span-7">
            <div className="p-8 md:p-12 rounded-[40px] border border-slate-100 shadow-2xl shadow-red-500/5 bg-white">
              <div className="flex items-center gap-3 mb-8">
                <div className="w-10 h-10 rounded-xl bg-red-50 text-red-600 flex items-center justify-center">
                  <MessageSquare size={20} />
                </div>
                <h3 className="text-xl font-bold text-slate-900">
                  Form Pemesanan Cepat
                </h3>
              </div>

              <form onSubmit={handleWhatsAppRedirect} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-xs font-bold text-slate-400 uppercase tracking-widest ml-1">
                      Nama Lengkap
                    </label>
                    <input
                      required
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      placeholder="Masukkan nama Anda..."
                      className="w-full px-6 py-4 rounded-2xl bg-slate-50 border border-slate-100 focus:outline-none focus:border-red-600 transition-all text-sm font-medium"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-xs font-bold text-slate-400 uppercase tracking-widest ml-1">
                      Unit Kendaraan
                    </label>
                    <select
                      required
                      name="car"
                      value={formData.car}
                      onChange={handleInputChange}
                      className="w-full px-6 py-4 rounded-2xl bg-slate-50 border border-slate-100 focus:outline-none focus:border-red-600 transition-all text-sm font-medium appearance-none cursor-pointer"
                    >
                      <option value="">Pilih Mobil...</option>
                      <option value="Toyota Zenix">Toyota Zenix</option>
                      <option value="Innova Reborn">Innova Reborn</option>
                      <option value="Toyota Fortuner">Toyota Fortuner</option>
                      <option value="Toyota Alphard">Toyota Alphard</option>
                      <option value="Honda Brio">Honda Brio</option>
                    </select>
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-xs font-bold text-slate-400 uppercase tracking-widest ml-1">
                    Rencana Tanggal Sewa
                  </label>
                  {/* Perbaikan: Menambahkan onClick showPicker() agar seluruh area input memicu kalender */}
                  <input
                    required
                    type="date"
                    name="date"
                    value={formData.date}
                    onChange={handleInputChange}
                    onClick={(e) => (e.target as HTMLInputElement).showPicker()}
                    className="w-full px-6 py-4 rounded-2xl bg-slate-50 border border-slate-100 focus:outline-none focus:border-red-600 transition-all text-sm font-medium cursor-pointer"
                  />
                </div>

                <div className="space-y-2">
                  <label className="text-xs font-bold text-slate-400 uppercase tracking-widest ml-1">
                    Catatan Tambahan
                  </label>
                  <textarea
                    rows={4}
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    placeholder="Contoh: Lepas kunci / dengan driver, lokasi jemput..."
                    className="w-full px-6 py-4 rounded-2xl bg-slate-50 border border-slate-100 focus:outline-none focus:border-red-600 transition-all text-sm font-medium resize-none"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full bg-red-600 text-white py-5 rounded-2xl font-semibold flex items-center justify-center gap-3 hover:bg-red-700 transition-all shadow-xl shadow-red-200 cursor-pointer group active:scale-[0.98]"
                >
                  <Send
                    size={20}
                    className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform"
                  />
                  Kirim ke WhatsApp
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
