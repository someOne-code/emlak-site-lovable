import property1 from "@/assets/property-1.jpg";
import property2 from "@/assets/property-2.jpg";
import property3 from "@/assets/property-3.jpg";
import property4 from "@/assets/property-4.jpg";

export interface Property {
  id: string;
  title: string;
  location: string;
  district: string;
  price: number;
  currency: string;
  priceLabel: string;
  type: "kiralik" | "satilik" | "yatirim";
  category: "daire" | "residence" | "villa" | "penthouse";
  rooms: string;
  area: number;
  floor: string;
  furnished: boolean;
  image: string;
  images: string[];
  description: string;
  features: string[];
  consultant: Consultant;
  paymentMode: "talep" | "kapora" | "bilgi";
  ctaMode: "pay_now" | "request_then_pay" | "hidden";
  investmentNotes?: string;
  estimatedReturn?: string;
  isOwned: boolean;
}

export interface Consultant {
  id: string;
  name: string;
  title: string;
  photo: string;
  languages: string[];
  specialization: string[];
  bio: string;
}

export const consultants: Consultant[] = [
  {
    id: "1",
    name: "Ahmet Yılmaz",
    title: "Kıdemli Gayrimenkul Danışmanı",
    photo: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&h=300&fit=crop&crop=face",
    languages: ["Türkçe", "İngilizce", "Arapça"],
    specialization: ["Lüks Konut", "Yatırım Danışmanlığı"],
    bio: "15 yıllık sektör deneyimi ile İstanbul'un en prestijli bölgelerinde uzmanlaşmış gayrimenkul danışmanı.",
  },
  {
    id: "2",
    name: "Elif Kara",
    title: "Portföy Yöneticisi",
    photo: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=300&h=300&fit=crop&crop=face",
    languages: ["Türkçe", "İngilizce", "Fransızca"],
    specialization: ["Uzun Dönem Kiralama", "Portföy Yönetimi"],
    bio: "10 yıllık deneyimi ile kurumsal ve bireysel müşterilere özel kiralama çözümleri sunan portföy yöneticisi.",
  },
  {
    id: "3",
    name: "Mehmet Demir",
    title: "Yatırım Danışmanı",
    photo: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=300&h=300&fit=crop&crop=face",
    languages: ["Türkçe", "İngilizce", "Rusça"],
    specialization: ["Yatırım Analizi", "Bölge Araştırması"],
    bio: "Gayrimenkul yatırım stratejileri ve bölge analizi konusunda uzmanlaşmış, veri odaklı danışman.",
  },
  {
    id: "4",
    name: "Zeynep Aydın",
    title: "Müşteri İlişkileri Uzmanı",
    photo: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=300&h=300&fit=crop&crop=face",
    languages: ["Türkçe", "İngilizce", "Almanca"],
    specialization: ["Müşteri Yönetimi", "Kiralama Süreçleri"],
    bio: "Müşteri memnuniyeti odaklı çalışma anlayışı ile kiralama süreçlerini yöneten deneyimli uzman.",
  },
];

export const properties: Property[] = [
  {
    id: "1",
    title: "Boğaz Manzaralı Lüks Penthouse",
    location: "İstanbul, Beşiktaş",
    district: "Beşiktaş",
    price: 85000,
    currency: "TL",
    priceLabel: "/ ay",
    type: "kiralik",
    category: "penthouse",
    rooms: "4+1",
    area: 280,
    floor: "18. Kat",
    furnished: true,
    image: property2,
    images: [property2, property4],
    description: "Boğaz'ın eşsiz manzarasına sahip, tam teşekküllü mobilyalı lüks penthouse. Özel teras, jakuzi ve akıllı ev sistemi ile donatılmıştır.",
    features: ["Boğaz Manzarası", "Özel Teras", "Jakuzi", "Akıllı Ev", "Otopark", "7/24 Güvenlik"],
    consultant: consultants[0],
    paymentMode: "kapora",
    ctaMode: "pay_now",
    investmentNotes: "Bölgedeki kira artış oranı yıllık %35 üzerindedir.",
    estimatedReturn: "%8-10 yıllık getiri",
    isOwned: true,
  },
  {
    id: "2",
    title: "Modern Residence Dairesi",
    location: "İstanbul, Kadıköy",
    district: "Kadıköy",
    price: 42000,
    currency: "TL",
    priceLabel: "/ ay",
    type: "kiralik",
    category: "residence",
    rooms: "2+1",
    area: 120,
    floor: "12. Kat",
    furnished: true,
    image: property1,
    images: [property1, property4],
    description: "Kadıköy'ün merkezinde, metroya yürüme mesafesinde modern residence dairesi. Tam mobilyalı, sosyal alanlar ve fitness merkezi dahil.",
    features: ["Havuz", "Fitness", "Otopark", "Güvenlik", "Metro Yakını", "Eşyalı"],
    consultant: consultants[1],
    paymentMode: "talep",
    ctaMode: "request_then_pay",
    isOwned: false,
  },
  {
    id: "3",
    title: "Yatırımlık Havuzlu Site Dairesi",
    location: "İstanbul, Başakşehir",
    district: "Başakşehir",
    price: 28000,
    currency: "TL",
    priceLabel: "/ ay",
    type: "yatirim",
    category: "daire",
    rooms: "3+1",
    area: 145,
    floor: "5. Kat",
    furnished: false,
    image: property3,
    images: [property3, property4],
    description: "Yeni metro hattına yakın, havuzlu site içinde yatırımlık daire. Bölgedeki değer artışı potansiyeli yüksek.",
    features: ["Havuz", "Site İçi", "Otopark", "Güvenlik", "Çocuk Parkı", "Metro Yakını"],
    consultant: consultants[2],
    paymentMode: "bilgi",
    ctaMode: "hidden",
    investmentNotes: "Yeni havalimanı ve metro bağlantısı ile bölgenin değeri hızla artmaktadır.",
    estimatedReturn: "%12-15 yıllık değer artışı",
    isOwned: true,
  },
  {
    id: "4",
    title: "Deniz Manzaralı Dublex Daire",
    location: "İstanbul, Maltepe",
    district: "Maltepe",
    price: 55000,
    currency: "TL",
    priceLabel: "/ ay",
    type: "kiralik",
    category: "daire",
    rooms: "3+1",
    area: 190,
    floor: "14-15. Kat",
    furnished: true,
    image: property4,
    images: [property4, property2],
    description: "Adalar ve deniz manzaralı dublex daire. Premium malzemelerle döşenmiş, geniş balkonlu, sosyal tesisli sitede.",
    features: ["Deniz Manzarası", "Dublex", "Balkon", "Otopark", "Güvenlik", "Eşyalı"],
    consultant: consultants[3],
    paymentMode: "kapora",
    ctaMode: "pay_now",
    isOwned: true,
  },
  {
    id: "5",
    title: "Merkezi Konumda Stüdyo Daire",
    location: "İstanbul, Şişli",
    district: "Şişli",
    price: 22000,
    currency: "TL",
    priceLabel: "/ ay",
    type: "kiralik",
    category: "daire",
    rooms: "1+1",
    area: 65,
    floor: "8. Kat",
    furnished: true,
    image: property1,
    images: [property1, property4],
    description: "Şişli'nin kalbinde, tüm ulaşım imkanlarına yakın, modern stüdyo daire. İş insanları ve profesyoneller için ideal.",
    features: ["Merkezi Konum", "Metro Yakını", "Eşyalı", "Güvenlik", "Asansör"],
    consultant: consultants[1],
    paymentMode: "talep",
    ctaMode: "request_then_pay",
    isOwned: false,
  },
  {
    id: "6",
    title: "Orman Manzaralı Villa",
    location: "İstanbul, Sarıyer",
    district: "Sarıyer",
    price: 120000,
    currency: "TL",
    priceLabel: "/ ay",
    type: "kiralik",
    category: "villa",
    rooms: "5+2",
    area: 380,
    floor: "Müstakil",
    furnished: true,
    image: property3,
    images: [property3, property2, property4],
    description: "Belgrad Ormanı'na komşu, özel bahçeli müstakil villa. Doğa ile iç içe yaşam arayanlara özel.",
    features: ["Özel Bahçe", "Orman Manzarası", "Havuz", "Otopark", "Güvenlik", "Eşyalı"],
    consultant: consultants[0],
    paymentMode: "kapora",
    investmentNotes: "Sarıyer bölgesinde lüks villa talebi sürekli artmaktadır.",
    estimatedReturn: "%6-8 yıllık getiri",
    isOwned: true,
  },
];

export const services = [
  {
    title: "Uzun Dönem Kiralama",
    description: "Profesyonel portföy yönetimi ile güvenilir uzun dönem kiralama çözümleri. Kiracı seçimi, sözleşme yönetimi ve operasyonel destek.",
    icon: "Home",
  },
  {
    title: "Yatırım Danışmanlığı",
    description: "Veri odaklı bölge analizleri ve getiri hesaplamaları ile gayrimenkul yatırım stratejileri oluşturuyoruz.",
    icon: "TrendingUp",
  },
  {
    title: "Portföy Yönetimi",
    description: "Mülk sahiplerine vekaletli portföy yönetimi hizmeti. Bakım, kiracı ilişkileri ve gelir optimizasyonu.",
    icon: "Building",
  },
  {
    title: "Hukuki Destek",
    description: "Kiralama sözleşmeleri, tapu işlemleri ve yasal süreçlerde profesyonel danışmanlık hizmeti.",
    icon: "Shield",
  },
];
