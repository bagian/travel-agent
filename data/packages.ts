// data/packages.ts

export interface TourPackage {
  id: number;
  slug: string;
  name: string;
  location: string;
  price: number;
  duration: string;
  images: string[];
  rating: number;
  reviews: number;
  category: "Adventure" | "Family" | "Couple" | "Honeymoon";
  description: string;
  itinerary: {
    day: number;
    title: string;
    activities: string[];
  }[];
  isBestSeller?: boolean;
}

export const TOUR_PACKAGES: TourPackage[] = [
  {
    id: 1,
    slug: "bali-nusa-penida",
    name: "Eksplor Nusa Penida & Snorkeling",
    location: "Nusa Penida, Bali",
    price: 2500000,
    rating: 4.9,
    reviews: 120,
    duration: "3 Hari 2 Malam",
    images: [
      "https://images.unsplash.com/photo-1537996194471-e657df975ab4",
      "https://images.unsplash.com/photo-1518548419970-58e3b4079ab2",
    ],
    category: "Adventure",
    description:
      "Nikmati keindahan tebing ikonik Kelingking Beach, pasir putih Crystal Bay, dan pengalaman snorkeling tak terlupakan bersama ikan manta di perairan jernih Nusa Penida.",
    itinerary: [
      {
        day: 1,
        title: "Kedatangan & Penjemputan",
        activities: [
          "Penjemputan di Bandara/Hotel",
          "Menuju Pelabuhan Sanur",
          "Check-in Hotel di Nusa Penida",
        ],
      },
      {
        day: 2,
        title: "West Penida Tour",
        activities: [
          "Kelingking Beach",
          "Broken Beach & Angel Billabong",
          "Snorkeling di Crystal Bay",
        ],
      },
      {
        day: 3,
        title: "Belanja Oleh-oleh & Kepulangan",
        activities: [
          "Sarapan & Check-out",
          "Pusat Oleh-oleh Khas Bali",
          "Pengantaran kembali ke Bandara",
        ],
      },
    ],
    isBestSeller: true,
  },
  {
    id: 2,
    slug: "bromo-sunrise-midnight",
    name: "Bromo Sunrise Midnight Tour",
    location: "Probolinggo, Jawa Timur",
    price: 1200000,
    rating: 4.8,
    reviews: 85,
    duration: "1 Hari (Midnight)",
    images: [
      "https://images.unsplash.com/photo-1588668214407-6ea9a6d8c272?q=80&w=1771&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      "https://images.unsplash.com/photo-1585357214259-f977cc7d73a4?q=80&w=1770&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    ],
    category: "Adventure",
    description:
      "Rasakan pengalaman magis menyaksikan matahari terbit dari Puncak Penanjakan, menjelajahi Lautan Pasir dengan Jeep 4x4, dan mendaki kawah aktif Gunung Bromo yang ikonik.",
    itinerary: [
      {
        day: 1,
        title: "Penjemputan & Perjalanan",
        activities: [
          "Penjemputan di Meeting Point (Malang/Surabaya) jam 00:00",
          "Perjalanan menuju Pos Wonokitri/Cemoro Lawang",
          "Transfer ke Jeep 4x4",
        ],
      },
      {
        day: 1,
        title: "Golden Sunrise & Kawah",
        activities: [
          "Menyaksikan Sunrise di Puncak Penanjakan/Kingkong Hill",
          "Eksplorasi Widodaren & Kawah Bromo",
          "Mengunjungi Pasir Berbisik & Savana Teletubbies",
        ],
      },
      {
        day: 1,
        title: "Kembali & Selesai",
        activities: [
          "Sarapan pagi di lokal resto",
          "Perjalanan kembali ke titik penjemputan awal",
          "Tour selesai sekitar jam 13:00",
        ],
      },
    ],
    isBestSeller: false,
  },
];
