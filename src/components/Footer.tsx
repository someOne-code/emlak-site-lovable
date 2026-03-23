import { Link } from "react-router-dom";
import { MapPin, Phone, Mail } from "lucide-react";

const Footer = () => (
  <footer className="bg-primary text-primary-foreground">
    <div className="container-narrow section-padding pb-8">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
        <div>
          <h3 className="font-heading text-xl font-semibold mb-4">Prestige Estates</h3>
          <p className="text-primary-foreground/60 text-sm leading-relaxed">
            Uzun dönem kiralama ve gayrimenkul yatırım danışmanlığında güvenilir çözüm ortağınız.
          </p>
        </div>

        <div>
          <h4 className="font-heading text-sm font-semibold uppercase tracking-wider text-gold mb-4">
            Hızlı Bağlantılar
          </h4>
          <nav className="flex flex-col gap-2">
            {[
              { label: "Portföy", path: "/portfoy" },
              { label: "Hizmetler", path: "/hizmetler" },
              { label: "Danışmanlarımız", path: "/danismanlar" },
              { label: "Hakkımızda", path: "/hakkimizda" },
            ].map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className="text-sm text-primary-foreground/60 hover:text-gold transition-colors"
              >
                {item.label}
              </Link>
            ))}
          </nav>
        </div>

        <div>
          <h4 className="font-heading text-sm font-semibold uppercase tracking-wider text-gold mb-4">
            İletişim
          </h4>
          <div className="flex flex-col gap-3 text-sm text-primary-foreground/60">
            <div className="flex items-start gap-2">
              <MapPin size={16} className="text-gold mt-0.5 shrink-0" />
              <span>Levent, İstanbul, Türkiye</span>
            </div>
            <div className="flex items-center gap-2">
              <Phone size={16} className="text-gold shrink-0" />
              <span>+90 (212) 555 00 00</span>
            </div>
            <div className="flex items-center gap-2">
              <Mail size={16} className="text-gold shrink-0" />
              <span>info@prestigeestates.com</span>
            </div>
          </div>
        </div>

        <div>
          <h4 className="font-heading text-sm font-semibold uppercase tracking-wider text-gold mb-4">
            Çalışma Saatleri
          </h4>
          <div className="text-sm text-primary-foreground/60 space-y-1">
            <p>Pazartesi - Cuma: 09:00 - 18:00</p>
            <p>Cumartesi: 10:00 - 15:00</p>
            <p>Pazar: Kapalı</p>
          </div>
        </div>
      </div>

      <div className="border-t border-primary-foreground/10 pt-8 text-center text-sm text-primary-foreground/40">
        © 2026 Prestige Estates. Tüm hakları saklıdır.
      </div>
    </div>
  </footer>
);

export default Footer;
