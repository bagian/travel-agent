// data/fleet.ts

export interface Vehicle {
  id: number;
  slug: string;
  name: string;
  category: "Premium" | "MPV" | "SUV" | "City Car";
  transmission: "Manual" | "Automatic";
  capacity: number;
  pricePerDay: number;
  images: string[];
  features: string[];
  // Tambahan Data Penting:
  year: string; // Menentukan unit baru/lama
  engine: string; // Misal: 2.0L, 1.5L, dll
  fuelType: string; // Bensin/Diesel
  luggage: number; // Estimasi muat koper
  isAvailable: boolean; // Status unit
  description: string; // Deskripsi singkat per unit
}

export const FLEET_DATA: Vehicle[] = [
  {
    id: 1,
    slug: "toyota-innova-zenix",
    name: "Toyota Innova Zenix",
    category: "MPV",
    transmission: "Automatic",
    capacity: 7,
    pricePerDay: 850000,
    images: [
      "/img/car/Toyota-Innova-Zenix-2.jpg",
      "/img/car/Toyota-Innova-Zenix.webp",
    ],
    features: [
      "AC Double Blower",
      "USB Charger",
      "Bluetooth Connector",
      "ISOFIX",
    ],
    year: "2023",
    engine: "2.0L VVTi",
    fuelType: "Bensin",
    luggage: 4,
    isAvailable: true,
    description:
      "Medium MPV tercanggih dengan kabin sangat luas dan suspensi yang sangat nyaman untuk perjalanan keluarga.",
  },
  {
    id: 2,
    slug: "mitsubishi-pajero-sport",
    name: "Mitsubishi Pajero Sport",
    category: "SUV",
    transmission: "Automatic",
    capacity: 7,
    pricePerDay: 1200000,
    images: ["/img/car/Mitsubishi-Pajero-Sport.webp"],
    features: ["Sunroof", "4WD", "Leather Seats", "Cruise Control"],
    year: "2022",
    engine: "2.4L MIVEC Diesel",
    fuelType: "Diesel",
    luggage: 3,
    isAvailable: true,
    description:
      "SUV tangguh dengan tampilan gagah, sangat cocok untuk kebutuhan bisnis atau perjalanan medan berat.",
  },
  {
    id: 3,
    slug: "honda-brio",
    name: "Honda Brio",
    category: "City Car",
    transmission: "Manual",
    capacity: 5,
    pricePerDay: 350000,
    images: ["/img/car/Honda-Brio.webp"],
    features: [
      "Irit Bahan Bakar",
      "Mudah Parkir",
      "Audio System",
      "Digital AC",
    ],
    year: "2021",
    engine: "1.2L i-VTEC",
    fuelType: "Bensin",
    luggage: 2,
    isAvailable: true,
    description:
      "Mobil lincah dan sangat irit bahan bakar, pilihan utama untuk mobilitas di dalam kota Sidoarjo.",
  },
];
