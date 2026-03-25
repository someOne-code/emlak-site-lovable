import { Link } from "react-router-dom";
import { MapPin, Maximize, BedDouble } from "lucide-react";
import type { Property } from "@/lib/data";

const typeLabels: Record<string, string> = {
  kiralik: "Kiralık",
  satilik: "Satılık",
};

const PropertyCard = ({ property }: { property: Property }) => (
  <Link
    to={`/portfoy/${property.id}`}
    className="group block bg-card rounded-lg overflow-hidden card-hover"
  >
    <div className="relative overflow-hidden aspect-[4/3]">
      <img
        src={property.image}
        alt={property.title}
        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
      />
      <div className="absolute top-3 left-3">
        <span className="bg-gradient-gold text-accent-foreground px-3 py-1 rounded text-xs font-semibold">
          {typeLabels[property.type]}
        </span>
      </div>
    </div>
    <div className="p-5">
      <h3 className="font-heading text-lg font-semibold text-foreground mb-1 group-hover:text-gold transition-colors">
        {property.title}
      </h3>
      <div className="flex items-center gap-1 text-muted-foreground text-sm mb-3">
        <MapPin size={14} />
        <span>{property.location}</span>
      </div>
      <div className="flex items-center gap-4 text-sm text-muted-foreground mb-4">
        <span className="flex items-center gap-1">
          <BedDouble size={14} /> {property.rooms}
        </span>
        <span className="flex items-center gap-1">
          <Maximize size={14} /> {property.area} m²
        </span>
        <span>{property.floor}</span>
      </div>
      <div className="flex items-center justify-between pt-3 border-t border-border">
        <span className="font-heading text-xl font-bold text-gold">
          {property.price.toLocaleString("tr-TR")} {property.currency}
        </span>
        <span className="text-sm text-muted-foreground">{property.priceLabel}</span>
      </div>
    </div>
  </Link>
);

export default PropertyCard;
