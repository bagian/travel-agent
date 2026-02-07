"use client";

import {useState, useEffect} from "react";
import {Menu, X, Search, User} from "lucide-react";
import Link from "next/link";
import {usePathname} from "next/navigation";
import Image from "next/image";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
  }, [isOpen]);

  const navLinks = [
    {name: "Home", href: "/"},
    // {name: "Paket Tour", href: "/packages"},
    {name: "Armada Kami", href: "/armada"},
    {name: "Destinasi", href: "/destinasi"},
    {name: "Tentang Kami", href: "/tentang-kami"},
  ];

  return (
    <nav
      className={`fixed w-full z-[100] transition-all duration-500 ${
        isScrolled
          ? "top-0 bg-white/90 backdrop-blur-md border-b border-slate-100 py-5"
          : "top-0 bg-white py-4 border-b border-slate-100"
      }`}
    >
      <div className="max-w-[1440px] mx-auto px-6 flex justify-between items-center relative z-[110] h-[46px]">
        {/* Logo Section - Ukuran fixed untuk semua device */}
        <Link
          href="/"
          className="flex items-center flex-shrink-0 group cursor-pointer"
        >
          <div className="relative w-[90px] h-[40px] md:w-[90px] md:h-[47px] flex-shrink-0">
            <Image
              src="/img/logo/rahayu-transport.png"
              alt="Rahayu Transport"
              fill
              priority
              className="object-contain"
            />
          </div>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden lg:flex items-center bg-slate-50/50 px-2 py-2.5 rounded-full border border-slate-100 gap-3">
          {navLinks.map((link) => {
            const isActive = pathname === link.href;
            return (
              <Link
                key={link.name}
                href={link.href}
                className={`px-5 py-2 text-sm font-semibold transition-colors rounded-full cursor-pointer ${
                  isActive
                    ? "bg-white shadow-sm text-red-600"
                    : "text-slate-600 hover:text-red-600 hover:bg-white hover:shadow-sm"
                }`}
              >
                {link.name}
              </Link>
            );
          })}
        </div>

        {/* Right Actions - Desktop */}
        <div className="hidden lg:flex items-center gap-3">
          <Link
            href="/contact"
            className="flex items-center gap-2 bg-red-700 text-white px-5 py-2.5 rounded-full text-sm font-bold hover:bg-red-800 transition shadow-lg shadow-red-200 cursor-pointer"
          >
            <User size={18} /> Booking Sekarang
          </Link>
        </div>

        {/* Tablet & Mobile Toggle */}
        <div className="lg:hidden flex items-center gap-3">
          <button
            className="bg-red-600 text-white p-2 rounded-lg transition-transform active:scale-90 cursor-pointer"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Slide Down Menu Overlay - Mobile & Tablet */}
      <div
        className={`lg:hidden fixed left-0 w-full bg-white border-t border-slate-100 shadow-2xl transition-all duration-500 ease-in-out z-[90] ${
          isOpen
            ? "translate-y-0 opacity-100 visible"
            : "-translate-y-full opacity-0 invisible"
        }`}
        style={{
          top: isScrolled ? "80px" : "78px",
          height: `calc(100vh - ${isScrolled ? "80px" : "80px"})`,
        }}
      >
        <div className="flex flex-col gap-6 py-8 px-6 h-full overflow-y-auto">
          <div className="flex flex-col gap-2">
            {navLinks.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.name}
                  href={link.href}
                  className={`text-lg font-bold p-4 rounded-2xl transition-all duration-300 cursor-pointer ${
                    isActive
                      ? " text-red-600"
                      : "text-slate-700 hover:text-red-600"
                  }`}
                  onClick={() => setIsOpen(false)}
                >
                  {link.name}
                </Link>
              );
            })}
          </div>

          <div className="mt-auto pb-10 flex flex-col gap-4">
            <button className="w-full bg-red-600 text-white py-4 rounded-2xl font-bold text-md shadow-lg shadow-red-200 active:scale-95 transition-transform cursor-pointer">
              Booking Sekarang
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}
