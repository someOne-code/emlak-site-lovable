import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";
import logo from "@/assets/logo.png";

const navItems = [
  { label: "Ana Sayfa", path: "/" },
  { label: "Portföy", path: "/portfoy" },
  { label: "Hizmetler", path: "/hizmetler" },
  { label: "Danışmanlarımız", path: "/danismanlar" },
  { label: "Hakkımızda", path: "/hakkimizda" },
  { label: "İletişim", path: "/iletisim" },
];

const Header = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const location = useLocation();

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-primary/95 backdrop-blur-md border-b border-primary-foreground/10">
      <div className="container-narrow flex items-center justify-between h-16 md:h-20 px-6">
        <Link to="/" className="flex items-center gap-3">
          <img src={logo} alt="Prestige Estates" className="h-8 md:h-10 w-auto" />
          <span className="font-heading text-lg md:text-xl font-semibold text-primary-foreground tracking-wide">
            Prestige Estates
          </span>
        </Link>

        {/* Desktop nav */}
        <nav className="hidden lg:flex items-center gap-8">
          {navItems.map((item) => (
            <Link
              key={item.path}
              to={item.path}
              className={`text-sm font-medium tracking-wide transition-colors duration-300 ${
                location.pathname === item.path
                  ? "text-gold"
                  : "text-primary-foreground/70 hover:text-gold"
              }`}
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <Link
          to="/iletisim"
          className="hidden lg:inline-flex bg-gradient-gold text-accent-foreground px-5 py-2.5 rounded text-sm font-semibold hover:opacity-90 transition-opacity"
        >
          Teklif Al
        </Link>

        {/* Mobile toggle */}
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="lg:hidden text-primary-foreground"
        >
          {mobileOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="lg:hidden bg-primary border-t border-primary-foreground/10 animate-fade-in">
          <nav className="flex flex-col py-4 px-6 gap-1">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                onClick={() => setMobileOpen(false)}
                className={`py-3 text-sm font-medium tracking-wide transition-colors ${
                  location.pathname === item.path
                    ? "text-gold"
                    : "text-primary-foreground/70"
                }`}
              >
                {item.label}
              </Link>
            ))}
            <Link
              to="/iletisim"
              onClick={() => setMobileOpen(false)}
              className="mt-3 bg-gradient-gold text-accent-foreground px-5 py-2.5 rounded text-sm font-semibold text-center"
            >
              Teklif Al
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
