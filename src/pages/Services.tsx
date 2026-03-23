import { Building, TrendingUp, Users, Shield } from "lucide-react";
import { services } from "@/lib/data";
import PageHero from "@/components/PageHero";
import { Link } from "react-router-dom";

const iconMap: Record<string, React.ReactNode> = {
  Home: <Building size={32} />,
  TrendingUp: <TrendingUp size={32} />,
  Building: <Users size={32} />,
  Shield: <Shield size={32} />,
};

const Services = () => (
  <main>
    <PageHero title="Hizmetlerimiz" subtitle="Gayrimenkul yönetiminde kapsamlı ve profesyonel çözümler" />

    <section className="section-padding bg-background">
      <div className="container-narrow">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {services.map((service) => (
            <div key={service.title} className="bg-card p-10 rounded-lg card-hover">
              <div className="w-14 h-14 rounded-lg bg-gold/10 flex items-center justify-center text-gold mb-6">
                {iconMap[service.icon]}
              </div>
              <h3 className="font-heading text-2xl font-semibold text-foreground mb-4">
                {service.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed">{service.description}</p>
            </div>
          ))}
        </div>

        <div className="text-center mt-16">
          <Link
            to="/iletisim"
            className="inline-flex bg-gradient-gold text-accent-foreground px-8 py-3.5 rounded font-semibold text-sm hover:opacity-90 transition-opacity"
          >
            Detaylı Bilgi Alın
          </Link>
        </div>
      </div>
    </section>
  </main>
);

export default Services;
