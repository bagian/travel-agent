import Image from "next/image";

const partnerLogos = [
  {
    name: "Garuda Indonesia",
    // Menggunakan URL yang lebih stabil dan ramah hotlinking
    src: "/img/logo/garuda-indonesia.png",
  },
  {
    name: "Marriott Putrajaya",
    src: "/img/logo/marriot-putrajaya.png",
  },
  {
    name: "Telkomsel",
    src: "/img/logo/telkomsel.png",
  },
  {
    name: "Traveloka",
    src: "/img/logo/traveloka.png",
  },
  {
    name: "Citilink",
    src: "/img/logo/citilink.png",
  },
  {
    name: "Lion Air",
    src: "/img/logo/lion-air.png",
  },
];

export default function Partners() {
  return (
    <section className="py-20 border-y border-slate-100 bg-transparent">
      <div className="container mx-auto px-6">
        <p className="text-center text-[10px] font-black text-slate-400 uppercase tracking-[0.4em] mb-12">
          Trusted Partner & Collaboration
        </p>

        <div className="flex flex-wrap justify-center items-center gap-12 md:gap-20">
          {partnerLogos.map((logo, index) => (
            <div
              key={index}
              className="relative h-8 md:h-12 w-32 md:w-44 grayscale opacity-50 hover:grayscale-0 hover:opacity-100 transition-all duration-500 ease-in-out cursor-pointer"
            >
              <Image
                src={logo.src}
                alt={logo.name}
                fill
                className="object-contain"
                sizes="(max-width: 768px) 100vw, 200px"
                unoptimized
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
