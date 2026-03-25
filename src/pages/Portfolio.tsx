import { useState, useMemo } from "react";
import { properties } from "@/lib/data";
import PropertyCard from "@/components/PropertyCard";
import PropertyMap from "@/components/PropertyMap";
import PageHero from "@/components/PageHero";
import { Map, List, Search, X } from "lucide-react";
import { Input } from "@/components/ui/input";

const types = [
  { value: "all", label: "Tümü" },
  { value: "kiralik", label: "Kiralık" },
  { value: "satilik", label: "Satılık" },
];

const categories = [
  { value: "all", label: "Tümü" },
  { value: "daire", label: "Daire" },
  { value: "residence", label: "Residence" },
  { value: "penthouse", label: "Penthouse" },
  { value: "villa", label: "Villa" },
];

const roomOptions = [
  { value: "all", label: "Oda Sayısı" },
  { value: "1+1", label: "1+1" },
  { value: "2+1", label: "2+1" },
  { value: "3+1", label: "3+1" },
  { value: "4+1", label: "4+1" },
  { value: "5+2", label: "5+2" },
];

const districts = ["Tümü", ...Array.from(new Set(properties.map((p) => p.district)))];

const Portfolio = () => {
  const [type, setType] = useState("all");
  const [category, setCategory] = useState("all");
  const [rooms, setRooms] = useState("all");
  const [district, setDistrict] = useState("Tümü");
  const [search, setSearch] = useState("");
  const [showMap, setShowMap] = useState(true);
  const [hoveredId, setHoveredId] = useState<string | undefined>();

  const filtered = useMemo(() => {
    return properties.filter((p) => {
      if (type !== "all" && p.type !== type) return false;
      if (category !== "all" && p.category !== category) return false;
      if (rooms !== "all" && p.rooms !== rooms) return false;
      if (district !== "Tümü" && p.district !== district) return false;
      if (search.trim()) {
        const q = search.toLowerCase();
        const haystack = `${p.title} ${p.location} ${p.district} ${p.description} ${p.rooms}`.toLowerCase();
        if (!haystack.includes(q)) return false;
      }
      return true;
    });
  }, [type, category, rooms, district, search]);

  const hasActiveFilters = type !== "all" || category !== "all" || rooms !== "all" || district !== "Tümü" || search.trim() !== "";

  const clearAll = () => {
    setType("all");
    setCategory("all");
    setRooms("all");
    setDistrict("Tümü");
    setSearch("");
  };

  return (
    <main>
      <PageHero title="Portföyümüz" subtitle="Kayseri'nin en prestijli lokasyonlarında özenle seçilmiş gayrimenkul portföyümüzü keşfedin" />

      <section className="section-padding bg-background">
        <div className="container-narrow">
          {/* Search Bar */}
          <div className="bg-card border border-border rounded-xl p-4 md:p-6 mb-6 shadow-sm">
            <div className="relative mb-4">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground" size={18} />
              <Input
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                placeholder="Konum, ilan adı veya özellik ara..."
                className="pl-10 pr-10 h-12 text-base bg-background border-border"
              />
              {search && (
                <button onClick={() => setSearch("")} className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground">
                  <X size={16} />
                </button>
              )}
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
              {/* Type select */}
              <select
                value={type}
                onChange={(e) => setType(e.target.value)}
                className="h-10 rounded-md border border-border bg-background px-3 text-sm text-foreground focus:outline-none focus:ring-2 focus:ring-ring"
              >
                {types.map((t) => (
                  <option key={t.value} value={t.value}>{t.label === "Tümü" ? "İlan Tipi" : t.label}</option>
                ))}
              </select>

              {/* Category select */}
              <select
                value={category}
                onChange={(e) => setCategory(e.target.value)}
                className="h-10 rounded-md border border-border bg-background px-3 text-sm text-foreground focus:outline-none focus:ring-2 focus:ring-ring"
              >
                {categories.map((c) => (
                  <option key={c.value} value={c.value}>{c.label === "Tümü" ? "Kategori" : c.label}</option>
                ))}
              </select>

              {/* Rooms select */}
              <select
                value={rooms}
                onChange={(e) => setRooms(e.target.value)}
                className="h-10 rounded-md border border-border bg-background px-3 text-sm text-foreground focus:outline-none focus:ring-2 focus:ring-ring"
              >
                {roomOptions.map((r) => (
                  <option key={r.value} value={r.value}>{r.label}</option>
                ))}
              </select>

              {/* District select */}
              <select
                value={district}
                onChange={(e) => setDistrict(e.target.value)}
                className="h-10 rounded-md border border-border bg-background px-3 text-sm text-foreground focus:outline-none focus:ring-2 focus:ring-ring"
              >
                {districts.map((d) => (
                  <option key={d} value={d}>{d === "Tümü" ? "İlçe" : d}</option>
                ))}
              </select>
            </div>

            {hasActiveFilters && (
              <div className="flex items-center justify-between mt-3 pt-3 border-t border-border">
                <span className="text-sm text-muted-foreground">{filtered.length} ilan bulundu</span>
                <button onClick={clearAll} className="text-sm text-gold hover:underline font-medium">
                  Filtreleri Temizle
                </button>
              </div>
            )}
          </div>

          {/* Map / List toggle */}
          <div className="flex items-center justify-between mb-6">
            <p className="text-sm text-muted-foreground">{filtered.length} ilan bulundu</p>
            <button
              onClick={() => setShowMap(!showMap)}
              className="inline-flex items-center gap-2 px-4 py-2 rounded text-sm font-medium bg-secondary text-muted-foreground hover:text-foreground transition-all"
            >
              {showMap ? <List size={16} /> : <Map size={16} />}
              {showMap ? "Liste Görünümü" : "Harita Görünümü"}
            </button>
          </div>

          {/* Map */}
          {showMap && filtered.length > 0 && (
            <div className="mb-8">
              <PropertyMap
                properties={filtered}
                selectedId={hoveredId}
                className="h-[400px]"
              />
            </div>
          )}

          {/* Results */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filtered.map((property) => (
              <div
                key={property.id}
                onMouseEnter={() => setHoveredId(property.id)}
                onMouseLeave={() => setHoveredId(undefined)}
              >
                <PropertyCard property={property} />
              </div>
            ))}
          </div>
          {filtered.length === 0 && (
            <p className="text-center text-muted-foreground py-16">
              Bu kriterlere uygun ilan bulunamadı.
            </p>
          )}
        </div>
      </section>
    </main>
  );
};

export default Portfolio;
