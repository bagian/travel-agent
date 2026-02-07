import {Mail, MapPin, Phone, ArrowRight} from "lucide-react";
import Link from "next/link";
import Image from "next/image";

import {FaTiktok, FaFacebook, FaInstagram} from "react-icons/fa6";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  // Data sosial media dengan link tujuan
  const socialLinks = [
    {
      Icon: FaInstagram,
      href: "https://www.instagram.com/rahayu_transport/",
      label: "Instagram",
    },
    {
      Icon: FaFacebook,
      href: "https://facebook.com/rahayutrans",
      label: "Facebook",
    },
    {Icon: FaTiktok, href: "https://tiktok.com/@rahayutrans", label: "TikTok"},
  ];

  const footerLinks = {
    layanan: [
      {name: "Sewa Mobil Lepas Kunci", href: "/armada"},
      {name: "Sewa Mobil + Driver", href: "/armada"},
      {name: "Sewa Bus & Elf", href: "/armada"},
      {name: "Antar Jemput Bandara", href: "/armada"},
    ],
    perusahaan: [
      {name: "Tentang Kami", href: "/about"},
      {name: "Syarat & Ketentuan", href: "#"},
      {name: "Kebijakan Privasi", href: "#"},
      {name: "Hubungi Kami", href: "/contact"},
    ],
  };

  return (
    <footer className="bg-white border-t border-slate-100 pt-20 pb-10">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          <div className="flex flex-col gap-6">
            <Link href="/" className="w-fit block">
              <div className="relative w-24 h-10">
                <Image
                  src="/img/logo/rahayu-transport.png"
                  alt="Rahayu Transport"
                  fill
                  priority
                  className="object-contain"
                  quality={100}
                />
              </div>
            </Link>
            <p className="text-slate-500 text-sm leading-relaxed">
              Solusi sewa kendaraan terpercaya dengan unit terbaru dan pelayanan
              prima. Siap menemani perjalanan bisnis dan liburan Anda di seluruh
              Indonesia.
            </p>

            {/* Bagian Sosial Media Berlink */}
            <div className="flex gap-3">
              {socialLinks.map((social, i) => (
                <a
                  key={i}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.label}
                  className="w-10 h-10 rounded-full border border-slate-200 flex items-center justify-center text-slate-400 hover:border-red-600 hover:text-red-600 transition-all cursor-pointer"
                >
                  <social.Icon size={18} />
                </a>
              ))}
            </div>
          </div>

          {/* Layanan Links */}
          <div>
            <h4 className="text-slate-900 font-bold mb-6">Layanan Kami</h4>
            <ul className="flex flex-col gap-2">
              {footerLinks.layanan.map((link, i) => (
                <li key={i}>
                  <Link
                    href={link.href}
                    className="text-slate-500 text-sm hover:text-red-600 hover:translate-x-1 transition-all inline-block"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Perusahaan Links */}
          <div>
            <h4 className="text-slate-900 font-bold mb-6">Perusahaan</h4>
            <ul className="flex flex-col gap-2">
              {footerLinks.perusahaan.map((link, i) => (
                <li key={i}>
                  <Link
                    href={link.href}
                    className="text-slate-500 text-sm hover:text-red-600 hover:translate-x-1 transition-all inline-block"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-slate-900 font-bold mb-6">Hubungi Kami</h4>
            <div className="flex flex-col gap-4 mb-8">
              <div className="flex items-start gap-3">
                <MapPin className="h-5 w-5 text-red-600 shrink-0" />
                <span className="text-slate-500 text-sm">
                  Surabaya, Jawa Timur, Indonesia
                </span>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="h-5 w-5 text-red-600 shrink-0" />
                <span className="text-slate-500 text-sm">
                  +62 812 3456 7890
                </span>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="h-5 w-5 text-red-600 shrink-0" />
                <span className="text-slate-500 text-sm">
                  hello@rahayutrans.com
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-slate-100 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-slate-400 text-xs font-medium">
            &copy; {currentYear}{" "}
            <span className="text-slate-600 font-bold">Rahayu Trans</span>.
            Semua Hak Dilindungi.
          </p>
          <div className="flex gap-6 items-center">
            <span className="text-slate-400 text-xs font-bold uppercase tracking-wider">
              Metode Pembayaran:
            </span>
            <div className="flex gap-3 opacity-60 grayscale hover:grayscale-0 transition-all">
              <div className="w-10 h-6 bg-slate-100 border border-slate-200 rounded flex items-center justify-center text-[8px] font-bold text-slate-400">
                BCA
              </div>
              <div className="w-10 h-6 bg-slate-100 border border-slate-200 rounded flex items-center justify-center text-[8px] font-bold text-slate-400">
                MANDIRI
              </div>
              <div className="w-10 h-6 bg-slate-100 border border-slate-200 rounded flex items-center justify-center text-[8px] font-bold text-slate-400">
                VISA
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
