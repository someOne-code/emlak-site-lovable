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
  type: "kiralik" | "satilik";
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
  lat: number;
  lng: number;
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
    title: "Kalealtı Manzaralı Lüks Penthouse",
    location: "Kayseri, Melikgazi",
    district: "Melikgazi",
    price: 45000,
    currency: "TL",
    priceLabel: "/ ay",
    type: "kiralik",
    category: "penthouse",
    rooms: "4+1",
    area: 260,
    floor: "14. Kat",
    furnished: true,
    image: property2,
    images: [property2, property4],
    description: "Kayseri Kalesi ve Erciyes Dağı manzarasına sahip, tam teşekküllü mobilyalı lüks penthouse. Özel teras, jakuzi ve akıllı ev sistemi ile donatılmıştır.",
    features: ["Erciyes Manzarası", "Özel Teras", "Jakuzi", "Akıllı Ev", "Otopark", "7/24 Güvenlik"],
    consultant: consultants[0],
    paymentMode: "kapora",
    ctaMode: "pay_now",
    investmentNotes: "Melikgazi bölgesinde kira artış oranı yıllık %40 üzerindedir.",
    estimatedReturn: "%10-12 yıllık getiri",
    isOwned: true,
    lat: 38.7312,
    lng: 35.4787,
  },
  {
    id: "2",
    title: "Modern Residence Dairesi",
    location: "Kayseri, Kocasinan",
    district: "Kocasinan",
    price: 28000,
    currency: "TL",
    priceLabel: "/ ay",
    type: "kiralik",
    category: "residence",
    rooms: "2+1",
    area: 120,
    floor: "10. Kat",
    furnished: true,
    image: property1,
    images: [property1, property4],
    description: "Kocasinan'ın merkezinde, tramvaya yürüme mesafesinde modern residence dairesi. Tam mobilyalı, sosyal alanlar ve fitness merkezi dahil.",
    features: ["Havuz", "Fitness", "Otopark", "Güvenlik", "Tramvay Yakını", "Eşyalı"],
    consultant: consultants[1],
    paymentMode: "talep",
    ctaMode: "request_then_pay",
    isOwned: false,
    lat: 38.7350,
    lng: 35.5100,
  },
  {
    id: "3",
    title: "Yatırımlık Havuzlu Site Dairesi",
    location: "Kayseri, Talas",
    district: "Talas",
    price: 22000,
    currency: "TL",
    priceLabel: "/ ay",
    type: "satilik",
    category: "daire",
    rooms: "3+1",
    area: 145,
    floor: "5. Kat",
    furnished: false,
    image: property3,
    images: [property3, property4],
    description: "Talas'ın gelişen bölgesinde, havuzlu site içinde yatırımlık daire. Ali Dağı manzarası ve doğa ile iç içe yaşam.",
    features: ["Havuz", "Site İçi", "Otopark", "Güvenlik", "Çocuk Parkı", "Dağ Manzarası"],
    consultant: consultants[2],
    paymentMode: "bilgi",
    ctaMode: "hidden",
    investmentNotes: "Talas bölgesinde yeni konut projeleri ile değer artışı hızla devam etmektedir.",
    estimatedReturn: "%14-18 yıllık değer artışı",
    isOwned: true,
    lat: 38.6900,
    lng: 35.5500,
  },
  {
    id: "4",
    title: "Erciyes Manzaralı Dublex Daire",
    location: "Kayseri, Melikgazi",
    district: "Melikgazi",
    price: 38000,
    currency: "TL",
    priceLabel: "/ ay",
    type: "kiralik",
    category: "daire",
    rooms: "3+1",
    area: 190,
    floor: "12-13. Kat",
    furnished: true,
    image: property4,
    images: [property4, property2],
    description: "Erciyes Dağı ve şehir manzaralı dublex daire. Premium malzemelerle döşenmiş, geniş balkonlu, sosyal tesisli sitede.",
    features: ["Erciyes Manzarası", "Dublex", "Balkon", "Otopark", "Güvenlik", "Eşyalı"],
    consultant: consultants[3],
    paymentMode: "kapora",
    ctaMode: "pay_now",
    isOwned: true,
    lat: 38.7250,
    lng: 35.4650,
  },
  {
    id: "5",
    title: "Merkezi Konumda Stüdyo Daire",
    location: "Kayseri, Kocasinan",
    district: "Kocasinan",
    price: 15000,
    currency: "TL",
    priceLabel: "/ ay",
    type: "kiralik",
    category: "daire",
    rooms: "1+1",
    area: 65,
    floor: "6. Kat",
    furnished: true,
    image: property1,
    images: [property1, property4],
    description: "Kocasinan'ın merkezinde, tüm ulaşım imkanlarına yakın, modern stüdyo daire. Üniversite öğrencileri ve profesyoneller için ideal.",
    features: ["Merkezi Konum", "Tramvay Yakını", "Eşyalı", "Güvenlik", "Asansör"],
    consultant: consultants[1],
    paymentMode: "talep",
    ctaMode: "request_then_pay",
    isOwned: false,
    lat: 38.7400,
    lng: 35.4900,
  },
  {
    id: "6",
    title: "Ali Dağı Eteklerinde Villa",
    location: "Kayseri, Talas",
    district: "Talas",
    price: 65000,
    currency: "TL",
    priceLabel: "/ ay",
    type: "kiralik",
    category: "villa",
    rooms: "5+2",
    area: 350,
    floor: "Müstakil",
    furnished: true,
    image: property3,
    images: [property3, property2, property4],
    description: "Ali Dağı eteklerinde, özel bahçeli müstakil villa. Doğa ile iç içe, Erciyes manzaralı prestijli yaşam.",
    features: ["Özel Bahçe", "Dağ Manzarası", "Havuz", "Otopark", "Güvenlik", "Eşyalı"],
    consultant: consultants[0],
    paymentMode: "kapora",
    ctaMode: "pay_now",
    investmentNotes: "Talas villalarına talep her geçen yıl artmaktadır.",
    estimatedReturn: "%8-10 yıllık getiri",
    isOwned: true,
    lat: 38.6850,
    lng: 35.5650,
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
