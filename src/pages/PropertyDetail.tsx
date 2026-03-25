import { useParams, Link } from "react-router-dom";
import { ArrowLeft, MapPin, Maximize, BedDouble, Building, Check, MessageSquare } from "lucide-react";
import { properties } from "@/lib/data";
import { useState } from "react";
import PropertyMap from "@/components/PropertyMap";
const paymentModeLabels: Record<string, string> = {
  talep: "Talep Bırakın",
  kapora: "Online Ödeme / Kapora",
  bilgi: "Bilgi Alın",
};

const PropertyDetail = () => {
  const { id } = useParams();
  const property = properties.find((p) => p.id === id);
  const [selectedImage, setSelectedImage] = useState(0);

  if (!property) {
    return (
      <main className="pt-28 section-padding text-center">
        <p className="text-muted-foreground">İlan bulunamadı.</p>
        <Link to="/portfoy" className="text-gold mt-4 inline-block">Portföye dön</Link>
      </main>
    );
  }

  return (
    <main className="pt-24 md:pt-28">
      <div className="container-narrow px-6 py-8">
        <Link to="/portfoy" className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-gold transition-colors mb-6">
          <ArrowLeft size={16} /> Portföye Dön
        </Link>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Left: Images + Details */}
          <div className="lg:col-span-2 space-y-6">
            {/* Gallery */}
            <div className="rounded-lg overflow-hidden">
              <img
                src={property.images[selectedImage]}
                alt={property.title}
                className="w-full aspect-[16/10] object-cover"
              />
            </div>
            {property.images.length > 1 && (
              <div className="flex gap-2">
                {property.images.map((img, i) => (
                  <button
                    key={i}
                    onClick={() => setSelectedImage(i)}
                    className={`rounded overflow-hidden border-2 transition-all ${
                      selectedImage === i ? "border-gold" : "border-transparent opacity-60 hover:opacity-100"
                    }`}
                  >
                    <img src={img} alt="" className="w-20 h-14 object-cover" />
                  </button>
                ))}
              </div>
            )}

            {/* Info */}
            <div>
              <h1 className="font-heading text-2xl md:text-3xl font-bold text-foreground mb-2">
                {property.title}
              </h1>
              <div className="flex items-center gap-1 text-muted-foreground mb-4">
                <MapPin size={16} /> {property.location}
              </div>
              <div className="flex flex-wrap gap-6 text-sm text-muted-foreground mb-6">
                <span className="flex items-center gap-1"><BedDouble size={16} /> {property.rooms}</span>
                <span className="flex items-center gap-1"><Maximize size={16} /> {property.area} m²</span>
                <span className="flex items-center gap-1"><Building size={16} /> {property.floor}</span>
                <span>{property.furnished ? "Eşyalı" : "Boş"}</span>
              </div>
              <p className="text-foreground/80 leading-relaxed mb-6">{property.description}</p>

              <h3 className="font-heading text-lg font-semibold mb-3">Özellikler</h3>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-2 mb-6">
                {property.features.map((f) => (
                  <div key={f} className="flex items-center gap-2 text-sm text-muted-foreground">
                    <Check size={14} className="text-gold" /> {f}
                  </div>
                ))}
              </div>

              {property.investmentNotes && (
                <div className="bg-gold/5 border border-gold/20 rounded-lg p-5 mb-6">
                  <h3 className="font-heading text-lg font-semibold text-gold mb-2">Yatırım Notu</h3>
                  <p className="text-sm text-foreground/70">{property.investmentNotes}</p>
                  {property.estimatedReturn && (
                    <p className="text-sm font-semibold text-gold mt-2">{property.estimatedReturn}</p>
                  )}
                </div>
              )}

              {/* Map */}
              <div>
                <h3 className="font-heading text-lg font-semibold mb-3 flex items-center gap-2">
                  <MapPin size={18} className="text-gold" /> Konum
                </h3>
                <PropertyMap
                  properties={[property]}
                  single
                  center={[property.lat, property.lng]}
                  zoom={15}
                  className="h-[300px]"
                />
              </div>
            </div>
          </div>

          {/* Right: Price + Consultant + Action */}
          <div className="space-y-6">
            {/* Price card */}
            <div className="bg-card rounded-lg p-6 card-hover sticky top-28">
              <div className="mb-5">
                <p className="text-sm text-muted-foreground">Kira Bedeli</p>
                <p className="font-heading text-3xl font-bold text-gold">
                  {property.price.toLocaleString("tr-TR")} {property.currency}
                  <span className="text-base font-normal text-muted-foreground"> {property.priceLabel}</span>
                </p>
              </div>

              <div className="bg-secondary rounded p-3 mb-5 text-center">
                <p className="text-xs text-muted-foreground">İlan Modu</p>
                <p className="text-sm font-semibold text-foreground">{paymentModeLabels[property.paymentMode]}</p>
              </div>

              {/* CTA based on ctaMode */}
              {property.ctaMode === "pay_now" && (
                <Link
                  to={`/portfoy/${property.id}/odeme`}
                  className="block w-full bg-gradient-gold text-accent-foreground py-3 rounded font-semibold text-sm text-center hover:opacity-90 transition-opacity mb-3"
                >
                  Şimdi Öde / Kapora
                </Link>
              )}
              {(property.ctaMode === "request_then_pay" || property.ctaMode === "hidden") && (
                <Link
                  to="/iletisim"
                  className="block w-full border border-gold text-gold py-3 rounded font-semibold text-sm text-center hover:bg-gold/10 transition-colors mb-3"
                >
                  <span className="inline-flex items-center gap-2"><MessageSquare size={16} /> İletişime Geçin</span>
                </Link>
              )}

              {/* Consultant mini card */}
              <div className="border-t border-border pt-5 mt-5">
                <p className="text-xs text-muted-foreground uppercase tracking-wider mb-3">İlgili Danışman</p>
                <div className="flex items-center gap-3">
                  <img
                    src={property.consultant.photo}
                    alt={property.consultant.name}
                    className="w-12 h-12 rounded-full object-cover border border-gold/30"
                  />
                  <div>
                    <p className="text-sm font-semibold text-foreground">{property.consultant.name}</p>
                    <p className="text-xs text-muted-foreground">{property.consultant.title}</p>
                  </div>
                </div>
                <Link
                  to="/iletisim"
                  className="mt-3 w-full inline-flex items-center justify-center gap-2 border border-border py-2 rounded text-sm text-muted-foreground hover:text-gold hover:border-gold transition-colors"
                >
                  <MessageSquare size={14} /> Danışmana Mesaj Gönder
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default PropertyDetail;
