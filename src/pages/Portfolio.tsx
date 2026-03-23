import { useState } from "react";
import { properties } from "@/lib/data";
import PropertyCard from "@/components/PropertyCard";
import PageHero from "@/components/PageHero";

const types = [
  { value: "all", label: "Tümü" },
  { value: "kiralik", label: "Kiralık" },
  { value: "yatirim", label: "Yatırımlık" },
];

const categories = [
  { value: "all", label: "Tümü" },
  { value: "daire", label: "Daire" },
  { value: "residence", label: "Residence" },
  { value: "penthouse", label: "Penthouse" },
  { value: "villa", label: "Villa" },
];

const Portfolio = () => {
  const [type, setType] = useState("all");
  const [category, setCategory] = useState("all");

  const filtered = properties.filter((p) => {
    if (type !== "all" && p.type !== type) return false;
    if (category !== "all" && p.category !== category) return false;
    return true;
  });

  return (
    <main>
      <PageHero title="Portföyümüz" subtitle="Özenle seçilmiş gayrimenkul portföyümüzü keşfedin" />

      <section className="section-padding bg-background">
        <div className="container-narrow">
          {/* Filters */}
          <div className="flex flex-col md:flex-row gap-4 mb-10">
            <div className="flex flex-wrap gap-2">
              {types.map((t) => (
                <button
                  key={t.value}
                  onClick={() => setType(t.value)}
                  className={`px-4 py-2 rounded text-sm font-medium transition-all ${
                    type === t.value
                      ? "bg-gradient-gold text-accent-foreground"
                      : "bg-secondary text-muted-foreground hover:text-foreground"
                  }`}
                >
                  {t.label}
                </button>
              ))}
            </div>
            <div className="flex flex-wrap gap-2">
              {categories.map((c) => (
                <button
                  key={c.value}
                  onClick={() => setCategory(c.value)}
                  className={`px-4 py-2 rounded text-sm font-medium transition-all ${
                    category === c.value
                      ? "bg-primary text-primary-foreground"
                      : "bg-secondary text-muted-foreground hover:text-foreground"
                  }`}
                >
                  {c.label}
                </button>
              ))}
            </div>
          </div>

          {/* Results */}
          <p className="text-sm text-muted-foreground mb-6">{filtered.length} ilan bulundu</p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filtered.map((property) => (
              <PropertyCard key={property.id} property={property} />
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
