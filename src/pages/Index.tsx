import { Link } from "react-router-dom";
import { ArrowRight, Building, TrendingUp, Shield, Users } from "lucide-react";
import heroBg from "@/assets/hero-bg.jpg";
import { properties, services } from "@/lib/data";
import { blogPosts } from "@/lib/blog-data";
import PropertyCard from "@/components/PropertyCard";
import BlogCard from "@/components/BlogCard";

const iconMap: Record<string, React.ReactNode> = {
  Home: <Building size={28} />,
  TrendingUp: <TrendingUp size={28} />,
  Building: <Users size={28} />,
  Shield: <Shield size={28} />,
};

const stats = [
  { value: "150+", label: "Yönetilen Mülk" },
  { value: "12", label: "Yıllık Deneyim" },
  { value: "98%", label: "Müşteri Memnuniyeti" },
  { value: "₺2M+", label: "Aylık Kira Hacmi" },
];

const Index = () => (
  <main>
    {/* Hero */}
    <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden">
      <img src={heroBg} alt="" className="absolute inset-0 w-full h-full object-cover" />
      <div className="absolute inset-0" style={{ background: "var(--gradient-overlay)" }} />
      <div className="relative z-10 text-center px-6 max-w-4xl mx-auto animate-fade-up">
        <p className="text-gold text-sm md:text-base font-semibold tracking-[0.2em] uppercase mb-4">
          Premium Gayrimenkul Yönetimi
        </p>
        <h1 className="font-heading text-4xl md:text-6xl lg:text-7xl font-bold text-primary-foreground leading-tight mb-6">
          Yaşam Alanınızı
          <span className="block text-gradient-gold">Yeniden Keşfedin</span>
        </h1>
        <p className="text-primary-foreground/70 text-lg md:text-xl max-w-2xl mx-auto mb-10">
          İstanbul'un en prestijli lokasyonlarında uzun dönem kiralama ve yatırım danışmanlığı.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            to="/portfoy"
            className="bg-gradient-gold text-accent-foreground px-8 py-3.5 rounded font-semibold text-sm hover:opacity-90 transition-opacity inline-flex items-center gap-2"
          >
            Portföyü İncele <ArrowRight size={16} />
          </Link>
          <Link
            to="/iletisim"
            className="border border-primary-foreground/30 text-primary-foreground px-8 py-3.5 rounded font-semibold text-sm hover:bg-primary-foreground/10 transition-colors"
          >
            Bizimle İletişime Geçin
          </Link>
        </div>
      </div>
    </section>

    {/* Stats */}
    <section className="bg-primary py-12">
      <div className="container-narrow px-6">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat) => (
            <div key={stat.label} className="text-center">
              <p className="font-heading text-3xl md:text-4xl font-bold text-gold">{stat.value}</p>
              <p className="text-primary-foreground/60 text-sm mt-1">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>

    {/* Featured Properties */}
    <section className="section-padding bg-background">
      <div className="container-narrow">
        <div className="text-center mb-12">
          <p className="text-gold text-sm font-semibold tracking-[0.15em] uppercase mb-2">Portföy</p>
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground">
            Öne Çıkan İlanlar
          </h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {properties.slice(0, 3).map((property) => (
            <PropertyCard key={property.id} property={property} />
          ))}
        </div>
        <div className="text-center mt-10">
          <Link
            to="/portfoy"
            className="inline-flex items-center gap-2 bg-gradient-gold text-accent-foreground px-8 py-3 rounded font-semibold text-sm hover:opacity-90 transition-opacity"
          >
            Tüm Portföyü Gör <ArrowRight size={16} />
          </Link>
        </div>
      </div>
    </section>

    {/* Services */}
    <section className="section-padding bg-secondary">
      <div className="container-narrow">
        <div className="text-center mb-12">
          <p className="text-gold text-sm font-semibold tracking-[0.15em] uppercase mb-2">
            Hizmetlerimiz
          </p>
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground">
            Profesyonel Çözümler
          </h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {services.map((service) => (
            <div key={service.title} className="bg-card p-8 rounded-lg card-hover">
              <div className="w-12 h-12 rounded-lg bg-gold/10 flex items-center justify-center text-gold mb-5">
                {iconMap[service.icon]}
              </div>
              <h3 className="font-heading text-xl font-semibold text-foreground mb-3">
                {service.title}
              </h3>
              <p className="text-muted-foreground text-sm leading-relaxed">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>

    {/* CTA */}
    <section className="bg-gradient-navy section-padding">
      <div className="container-narrow text-center">
        <h2 className="font-heading text-3xl md:text-4xl font-bold text-primary-foreground mb-4">
          Yatırım Fırsatlarını Kaçırmayın
        </h2>
        <p className="text-primary-foreground/60 text-lg max-w-xl mx-auto mb-8">
          Uzman danışmanlarımızla iletişime geçin, size özel yatırım stratejisi oluşturalım.
        </p>
        <Link
          to="/iletisim"
          className="inline-flex items-center gap-2 bg-gradient-gold text-accent-foreground px-8 py-3.5 rounded font-semibold text-sm hover:opacity-90 transition-opacity"
        >
          Hemen Başlayın <ArrowRight size={16} />
        </Link>
      </div>
    </section>
  </main>
);

export default Index;
