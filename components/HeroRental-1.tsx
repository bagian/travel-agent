"use client";

import {useState} from "react";
import Image from "next/image";
import {Swiper, SwiperSlide} from "swiper/react";
import {Autoplay, EffectFade, Scrollbar} from "swiper/modules";
import {CalendarDays, Car, MapPin, ArrowRight} from "lucide-react";

import {LocalizationProvider} from "@mui/x-date-pickers/LocalizationProvider";
import {AdapterDateFns} from "@mui/x-date-pickers/AdapterDateFns";
import {DatePicker} from "@mui/x-date-pickers/DatePicker";
import {id} from "date-fns/locale/id";

import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/scrollbar";

const heroSlides = [
  {
    id: 1,
    src: "https://images.unsplash.com/photo-1568605117036-5fe5e7bab0b7?q=80&w=1770&auto=format&fit=crop",
    alt: "Mobil",
  },
  {
    id: 2,
    src: "https://images.unsplash.com/photo-1624240823765-fa0f33497629?q=80&w=1769&auto=format&fit=crop",
    alt: "Mobil",
  },
  {
    id: 3,
    src: "https://images.unsplash.com/photo-1603584173870-7f23fdae1b7a?q=80&w=1769&auto=format&fit=crop",
    alt: "Mobil",
  },
];

export default function HeroRental() {
  const [selectedLocation, setSelectedLocation] = useState("");
  const [pickupDate, setPickupDate] = useState<Date | null>(null);
  const [returnDate, setReturnDate] = useState<Date | null>(null);

  const [openPickup, setOpenPickup] = useState(false);
  const [openReturn, setOpenReturn] = useState(false);

  return (
    <LocalizationProvider dateAdapter={AdapterDateFns} adapterLocale={id}>
      <section className="relative h-[90vh] md:h-[calc(100vh-80px)] overflow-hidden">
        <Swiper
          modules={[Autoplay, EffectFade, Scrollbar]}
          effect="fade"
          autoplay={{delay: 5000}}
          loop
          speed={1000}
          scrollbar={{draggable: true}}
          className="w-full h-full absolute inset-0 hero-swiper"
        >
          {heroSlides.map((slide) => (
            <SwiperSlide key={slide.id}>
              <Image
                src={slide.src}
                alt={slide.alt}
                fill
                priority
                className="object-cover brightness-[0.6]"
                unoptimized
              />
            </SwiperSlide>
          ))}
        </Swiper>

        <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent z-10" />

        <div className="absolute bottom-0 w-full z-20 pb-16">
          <div className="container mx-auto px-6">
            <div className="bg-white/10 backdrop-blur-2xl rounded-[2.5rem] p-6 md:p-10 border border-white/20 shadow-2xl">
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-end">
                {/* 1. LOKASI */}
                <div className="lg:col-span-4 flex flex-col">
                  <span className="text-[11px] font-black text-white uppercase mb-3 ml-2 tracking-[0.2em]">
                    Lokasi
                  </span>
                  <div className="relative h-[60px]">
                    <MapPin
                      className="absolute left-5 top-1/2 -translate-y-1/2 text-orange-500 z-30"
                      size={20}
                    />
                    <input
                      type="text"
                      placeholder="Pilih lokasi..."
                      value={selectedLocation}
                      onChange={(e) => setSelectedLocation(e.target.value)}
                      className="w-full h-full pl-14 pr-4 bg-white rounded-2xl text-slate-900 border-none outline-none focus:ring-0 transition-all placeholder:text-slate-400"
                    />
                  </div>
                </div>

                {/* 2. DURASI SEWA */}
                <div className="lg:col-span-5 flex flex-col">
                  <span className="text-[11px] font-black text-white uppercase mb-3 ml-2 tracking-[0.2em] text-center lg:text-left">
                    Durasi Sewa
                  </span>
                  <div className="flex flex-col md:flex-row items-center gap-3">
                    {/* Tgl Mulai */}
                    <div className="relative w-full h-[60px]">
                      <CalendarDays
                        className="absolute left-5 top-1/2 -translate-y-1/2 text-orange-500 z-30 pointer-events-none"
                        size={20}
                      />
                      <DatePicker
                        open={openPickup}
                        onOpen={() => setOpenPickup(true)}
                        onClose={() => setOpenPickup(false)}
                        value={pickupDate}
                        onChange={(val) => setPickupDate(val)}
                        slots={{openPickerIcon: () => null}}
                        slotProps={{
                          textField: {
                            fullWidth: true,
                            placeholder: pickupDate ? "" : "Tgl Mulai",
                            onClick: () => setOpenPickup(true),
                            inputProps: {readOnly: true},
                            className:
                              "custom-datepicker w-full h-full bg-white rounded-2xl font-bold text-slate-900 border-none outline-none focus:ring-0 transition-all placeholder:text-slate-400",
                            sx: {
                              "& .MuiOutlinedInput-root": {
                                padding: 0,
                                height: 60,
                              },
                              "& .MuiPickersInputBase-sectionsContainer": {
                                paddingLeft: "35px",
                                paddingTop: "20px",
                                cursor: "pointer",
                                color: "#0f172a",
                              },
                            },
                          },
                        }}
                      />
                    </div>

                    <ArrowRight
                      className="hidden md:block text-white/50 shrink-0"
                      size={24}
                    />

                    {/* Tgl Selesai */}
                    <div className="relative w-full h-[60px]">
                      <CalendarDays
                        className="absolute left-5 top-1/2 -translate-y-1/2 text-orange-500 z-30 pointer-events-none"
                        size={20}
                      />
                      <DatePicker
                        open={openReturn}
                        onOpen={() => setOpenReturn(true)}
                        onClose={() => setOpenReturn(false)}
                        value={returnDate}
                        minDate={pickupDate || undefined}
                        onChange={(val) => setReturnDate(val)}
                        slots={{openPickerIcon: () => null}}
                        slotProps={{
                          textField: {
                            fullWidth: true,
                            placeholder: returnDate ? "" : "Tgl Selesai",
                            onClick: () => setOpenReturn(true),
                            inputProps: {readOnly: true},
                            className:
                              "custom-datepicker w-full h-full bg-white rounded-2xl font-bold text-slate-900 border-none outline-none focus:ring-0 transition-all placeholder:text-slate-400",
                            sx: {
                              "& .MuiOutlinedInput-root": {
                                padding: 0,
                                height: 60,
                              },
                              "& .MuiPickersInputBase-sectionsContainer": {
                                paddingLeft: "35px",
                                paddingTop: "20px",
                                cursor: "pointer",
                                color: "#0f172a",
                              },
                            },
                          },
                        }}
                      />
                    </div>
                  </div>
                </div>

                {/* 3. BUTTON */}
                <div className="lg:col-span-3">
                  <button className="bg-[#ff8800] hover:bg-orange-600 active:scale-95 text-white font-black h-[60px] rounded-2xl w-full flex items-center justify-center gap-3 transition-all shadow-lg shadow-orange-500/40 uppercase tracking-wider text-sm">
                    <Car size={22} /> Cari Unit
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </LocalizationProvider>
  );
}
