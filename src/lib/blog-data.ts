export interface BlogPost {
  id: string;
  title: string;
  slug: string;
  excerpt: string;
  content: string;
  category: "yatirim" | "bolge" | "rehber" | "hukuk" | "piyasa";
  tags: string[];
  author: string;
  authorPhoto: string;
  date: string;
  readTime: string;
  image: string;
  featured: boolean;
}

const categoryLabels: Record<string, string> = {
  yatirim: "Yatırım",
  bolge: "Bölge Rehberi",
  rehber: "Alıcı Rehberi",
  hukuk: "Hukuk & Vergi",
  piyasa: "Piyasa Analizi",
};

export { categoryLabels };

export const blogPosts: BlogPost[] = [
  {
    id: "1",
    title: "2024'te İstanbul'da Kira Getirisi En Yüksek 5 Semt",
    slug: "istanbul-kira-getirisi-en-yuksek-semtler",
    excerpt:
      "Yatırım amaçlı gayrimenkul arayanlar için İstanbul'un en yüksek kira getirisi sunan bölgelerini analiz ettik. Veriye dayalı karşılaştırma ve uzman yorumları.",
    content: `
İstanbul, gayrimenkul yatırımında Türkiye'nin en dinamik pazarıdır. Ancak her semt aynı getiriyi sunmuyor. 2024 verilerine göre kira getirisi en yüksek 5 semti inceledik.

## 1. Kadıköy – Anadolu Yakası'nın Kalbi

Kadıköy, özellikle Caferağa ve Moda çevresinde yüksek talep görüyor. Metro bağlantısı ve sosyal yaşam alanları sayesinde boş kalma süresi minimum.

**Ortalama kira getirisi:** %7-9 yıllık

## 2. Başakşehir – Yükselen Değer

Yeni havalimanı ve metro hattı ile Başakşehir, yatırımcıların gözdesi. Özellikle site içi dairelerde kira talebi çok yüksek.

**Ortalama kira getirisi:** %9-12 yıllık

## 3. Beşiktaş – Premium Segment

Boğaz manzaralı lüks daireler ve penthouse'lar ile Beşiktaş, yüksek kira bedelleri sunuyor. Kurumsal kiracı oranı yüksek.

**Ortalama kira getirisi:** %6-8 yıllık

## 4. Maltepe – Sahil Hattı Potansiyeli

Sahil düzenleme projesi ve Marmaray bağlantısı ile Maltepe, değer artışı potansiyeli en yüksek bölgelerden.

**Ortalama kira getirisi:** %8-10 yıllık

## 5. Şişli – Merkezi Konum Avantajı

İş merkezlerine yakınlığı ile Şişli, özellikle profesyonel ve yabancı kiracılar için tercih ediliyor.

**Ortalama kira getirisi:** %7-9 yıllık

## Sonuç

Yatırım yaparken sadece kira getirisine değil, bölgenin gelecek projelerine ve ulaşım altyapısına da dikkat edin. Uzman danışmanlarımızla iletişime geçerek size özel yatırım analizi alabilirsiniz.
    `,
    category: "yatirim",
    tags: ["Kira Getirisi", "Yatırım", "İstanbul", "Semt Analizi"],
    author: "Mehmet Demir",
    authorPhoto:
      "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=300&h=300&fit=crop&crop=face",
    date: "2024-03-15",
    readTime: "6 dk",
    image:
      "https://images.unsplash.com/photo-1524231757912-21f4fe3a7200?w=800&h=500&fit=crop",
    featured: true,
  },
  {
    id: "2",
    title: "Ev Alırken Dikkat Edilmesi Gereken 10 Kritik Nokta",
    slug: "ev-alirken-dikkat-edilmesi-gerekenler",
    excerpt:
      "İlk kez ev alacaklar için kapsamlı rehber. Tapu kontrolünden kredi sürecine, ekspertizden sözleşme detaylarına kadar bilmeniz gereken her şey.",
    content: `
Ev almak hayatınızın en büyük finansal kararlarından biridir. Doğru adımları atarak riskleri minimize edebilirsiniz.

## 1. Tapu Kaydını Kontrol Edin

Mülkün üzerinde ipotek, haciz veya şerh olup olmadığını mutlaka kontrol edin. Tapu müdürlüğünden güncel tapu kaydı alın.

## 2. İmar Durumunu Araştırın

Belediyeden imar durumu belgesi alarak binanın yasal durumunu doğrulayın. İmar dışı yapılar ciddi riskler taşır.

## 3. Ekspertiz Raporu Alın

Banka kredisi kullanmasanız bile bağımsız bir ekspertiz raporu alın. Bu, mülkün gerçek piyasa değerini öğrenmenizi sağlar.

## 4. DASK Sigortası

Zorunlu deprem sigortası (DASK) olmadan tapu devri yapılamaz. Mevcut poliçenin geçerlilik tarihini kontrol edin.

## 5. Aidat ve Ortak Giderleri Sorun

Aylık aidat miktarı, yakıt türü ve ortak alan giderleri hakkında bilgi alın. Bu giderler bütçenizi etkileyecektir.

## 6-10. Diğer Kritik Noktalar

Kredi faiz oranları karşılaştırması, sözleşme detayları, vergi yükümlülükleri, çevre analizi ve gelecek projeler hakkında da detaylı araştırma yapın.

Profesyonel destek için danışmanlarımızla iletişime geçin.
    `,
    category: "rehber",
    tags: ["Ev Alma", "Rehber", "Tapu", "Kredi"],
    author: "Elif Kara",
    authorPhoto:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=300&h=300&fit=crop&crop=face",
    date: "2024-03-08",
    readTime: "8 dk",
    image:
      "https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=800&h=500&fit=crop",
    featured: true,
  },
  {
    id: "3",
    title: "Kadıköy'de Yaşam Rehberi: Mahalleler, Ulaşım ve Yaşam Kalitesi",
    slug: "kadikoy-yasam-rehberi",
    excerpt:
      "Kadıköy'ün en popüler mahallelerini, ulaşım ağını, sosyal olanaklarını ve gayrimenkul piyasasını detaylı inceledik.",
    content: `
Kadıköy, İstanbul'un Anadolu Yakası'nın en dinamik ve tercih edilen ilçelerinden biridir.

## Mahalle Rehberi

### Caferağa
Moda'ya yakınlığı, kafeler ve butik dükkanlarıyla Kadıköy'ün en canlı mahallesi.

### Fenerbahçe
Sahil şeridi, parklar ve sakin yaşam alanları ile aileler için ideal.

### Bostancı
Marmaray bağlantısı ve alışveriş merkezleri ile pratik yaşam sunar.

## Ulaşım

Metro, Marmaray, vapur ve minibüs hatları ile İstanbul'un her noktasına kolay erişim.

## Gayrimenkul Piyasası

Kadıköy'de ortalama kira fiyatları son 1 yılda %40 artış gösterdi. Özellikle 2+1 daireler en çok talep gören segment.

Kadıköy'de yatırım fırsatlarını değerlendirmek için portföyümüzü inceleyin.
    `,
    category: "bolge",
    tags: ["Kadıköy", "Bölge Rehberi", "İstanbul", "Yaşam"],
    author: "Zeynep Aydın",
    authorPhoto:
      "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=300&h=300&fit=crop&crop=face",
    date: "2024-02-20",
    readTime: "7 dk",
    image:
      "https://images.unsplash.com/photo-1567449303183-ae0d6ed1498e?w=800&h=500&fit=crop",
    featured: false,
  },
  {
    id: "4",
    title: "Gayrimenkul Yatırımında Vergi Avantajları ve Yasal Düzenlemeler",
    slug: "gayrimenkul-vergi-avantajlari",
    excerpt:
      "Gayrimenkul alım-satım ve kiralamada vergi yükümlülükleri, muafiyetler ve yatırımcılar için yasal avantajlar.",
    content: `
Gayrimenkul yatırımında vergi planlaması, getirinizi doğrudan etkileyen kritik bir faktördür.

## Kira Geliri Vergisi

Yıllık kira geliri belirli bir tutarı aştığında beyanname verilmesi gerekir. İstisna tutarı her yıl güncellenir.

## Tapu Harcı

Alım-satımda tapu harcı oranı %4'tür (alıcı ve satıcı %2'şer öder). Ancak uygulamada bu oran pazarlık konusu olabilir.

## Değer Artış Kazancı

5 yıldan önce satılan gayrimenkullerde değer artış kazancı vergisi ödenir. 5 yıl sonra satışta bu vergi uygulanmaz.

## Yabancılara Özel Düzenlemeler

Belirli koşulları sağlayan yabancı yatırımcılar KDV istisnasından faydalanabilir. Vatandaşlık programı kapsamında minimum yatırım tutarları mevcuttur.

Detaylı bilgi ve kişiye özel vergi planlaması için hukuk danışmanlarımızla görüşün.
    `,
    category: "hukuk",
    tags: ["Vergi", "Hukuk", "Yatırım", "KDV"],
    author: "Ahmet Yılmaz",
    authorPhoto:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&h=300&fit=crop&crop=face",
    date: "2024-02-10",
    readTime: "5 dk",
    image:
      "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=800&h=500&fit=crop",
    featured: false,
  },
  {
    id: "5",
    title: "İstanbul Konut Piyasası 2024 Q1 Raporu",
    slug: "istanbul-konut-piyasasi-2024-q1",
    excerpt:
      "2024 ilk çeyrek İstanbul konut piyasası analizi. Fiyat trendleri, talep değişimleri ve bölgesel karşılaştırmalar.",
    content: `
2024'ün ilk çeyreğinde İstanbul konut piyasası önemli gelişmelere sahne oldu.

## Genel Görünüm

Konut fiyatları ilk çeyrekte ortalama %12 artış gösterdi. Kiralık segmentte talep, arz fazlası karşısında hala güçlü.

## Bölgesel Trendler

- **Avrupa Yakası:** Başakşehir ve Bahçeşehir'de yeni proje lansmanları fiyatları yukarı taşıdı.
- **Anadolu Yakası:** Kadıköy ve Ataşehir'de sınırlı arz nedeniyle fiyat baskısı devam ediyor.

## Kira Piyasası

Kiralık daire talebi, özellikle mobilyalı segmentte güçlü seyretti. Kurumsal kiracı oranı artıyor.

## Öngörüler

Faiz oranlarındaki değişimler ve yeni düzenlemeler ikinci çeyrekte piyasa dinamiklerini şekillendirecek.

Detaylı piyasa analizi ve yatırım önerileri için danışmanlarımızla görüşün.
    `,
    category: "piyasa",
    tags: ["Piyasa Analizi", "İstanbul", "2024", "Konut"],
    author: "Mehmet Demir",
    authorPhoto:
      "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=300&h=300&fit=crop&crop=face",
    date: "2024-04-01",
    readTime: "6 dk",
    image:
      "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=800&h=500&fit=crop",
    featured: false,
  },
  {
    id: "6",
    title: "Yabancılar İçin Türkiye'de Gayrimenkul Satın Alma Rehberi",
    slug: "yabancilar-icin-gayrimenkul-rehberi",
    excerpt:
      "Yabancı yatırımcılar için Türkiye'de mülk edinme süreci, gerekli belgeler, vatandaşlık programı ve oturum izni bilgileri.",
    content: `
Türkiye, yabancı yatırımcılar için cazip gayrimenkul fırsatları sunuyor.

## Gerekli Belgeler

- Pasaport (noter onaylı tercümesi)
- Vergi numarası
- DASK poliçesi
- Askeri yasak bölge kontrolü

## Satın Alma Süreci

1. Mülk seçimi ve fiyat müzakeresi
2. Ön sözleşme ve kapora
3. Değerleme raporu
4. Tapu müdürlüğü başvurusu
5. Tapu devri

## Vatandaşlık Programı

400.000 USD ve üzeri gayrimenkul alımı ile Türk vatandaşlığına başvuru hakkı kazanabilirsiniz. 3 yıl satmama taahhüdü gereklidir.

## Oturum İzni

Gayrimenkul sahibi yabancılar kısa dönem oturum izni alabilir. Bu izin her yıl yenilenebilir.

Süreç hakkında detaylı bilgi ve rehberlik için danışmanlarımızla iletişime geçin.
    `,
    category: "rehber",
    tags: ["Yabancı Yatırımcı", "Vatandaşlık", "Oturum", "Rehber"],
    author: "Ahmet Yılmaz",
    authorPhoto:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&h=300&fit=crop&crop=face",
    date: "2024-01-25",
    readTime: "9 dk",
    image:
      "https://images.unsplash.com/photo-1527838832700-5059252407fa?w=800&h=500&fit=crop",
    featured: true,
  },
];
