import { useEffect, useRef } from "react";
import L from "leaflet";
import "leaflet/dist/leaflet.css";
import { Property } from "@/lib/data";

// Fix default marker icons for Leaflet + bundlers
import markerIcon2x from "leaflet/dist/images/marker-icon-2x.png";
import markerIcon from "leaflet/dist/images/marker-icon.png";
import markerShadow from "leaflet/dist/images/marker-shadow.png";

delete (L.Icon.Default.prototype as any)._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl: markerIcon2x,
  iconUrl: markerIcon,
  shadowUrl: markerShadow,
});

const goldIcon = new L.Icon({
  iconUrl: markerIcon,
  iconRetinaUrl: markerIcon2x,
  shadowUrl: markerShadow,
  iconSize: [25, 41],
  iconAnchor: [12, 41],
  popupAnchor: [1, -34],
  shadowSize: [41, 41],
});

interface PropertyMapProps {
  properties: Property[];
  selectedId?: string;
  onMarkerClick?: (id: string) => void;
  className?: string;
  center?: [number, number];
  zoom?: number;
  single?: boolean;
}

const PropertyMap = ({
  properties,
  selectedId,
  onMarkerClick,
  className = "",
  center,
  zoom,
  single = false,
}: PropertyMapProps) => {
  const mapRef = useRef<HTMLDivElement>(null);
  const mapInstanceRef = useRef<L.Map | null>(null);

  useEffect(() => {
    if (!mapRef.current || properties.length === 0) return;

    // Clean up previous map
    if (mapInstanceRef.current) {
      mapInstanceRef.current.remove();
      mapInstanceRef.current = null;
    }

    const defaultCenter: [number, number] = center || [38.72, 35.50];
    const defaultZoom = zoom || (single ? 15 : 12);

    const map = L.map(mapRef.current, {
      scrollWheelZoom: !single,
      zoomControl: true,
    }).setView(defaultCenter, defaultZoom);

    L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
      attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>',
      maxZoom: 19,
    }).addTo(map);

    properties.forEach((p) => {
      const marker = L.marker([p.lat, p.lng], { icon: goldIcon }).addTo(map);

      const popupContent = `
        <div style="min-width:180px; font-family: 'DM Sans', sans-serif;">
          <strong style="font-size:13px; display:block; margin-bottom:4px;">${p.title}</strong>
          <span style="font-size:12px; color:#666;">${p.location}</span><br/>
          <span style="font-size:13px; font-weight:600; color:hsl(38,65%,50%);">
            ${p.price.toLocaleString("tr-TR")} ${p.currency} ${p.priceLabel}
          </span>
          <br/>
          <span style="font-size:11px; color:#888;">${p.rooms} · ${p.area} m²</span>
          ${!single ? `<br/><a href="/portfoy/${p.id}" style="font-size:12px; color:hsl(38,65%,50%); text-decoration:underline; margin-top:4px; display:inline-block;">Detayı Gör →</a>` : ""}
        </div>
      `;

      marker.bindPopup(popupContent);

      if (selectedId === p.id) {
        marker.openPopup();
      }

      if (onMarkerClick) {
        marker.on("click", () => onMarkerClick(p.id));
      }
    });

    // Fit bounds if multiple
    if (!single && properties.length > 1) {
      const bounds = L.latLngBounds(properties.map((p) => [p.lat, p.lng]));
      map.fitBounds(bounds, { padding: [40, 40] });
    }

    mapInstanceRef.current = map;

    // Force resize after render
    setTimeout(() => map.invalidateSize(), 100);

    return () => {
      if (mapInstanceRef.current) {
        mapInstanceRef.current.remove();
        mapInstanceRef.current = null;
      }
    };
  }, [properties, selectedId, center, zoom, single]);

  return (
    <div
      ref={mapRef}
      className={`w-full rounded-lg overflow-hidden border border-border ${className}`}
      style={{ minHeight: "300px" }}
    />
  );
};

export default PropertyMap;
