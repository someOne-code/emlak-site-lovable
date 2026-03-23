import { Link } from "react-router-dom";
import { MessageSquare } from "lucide-react";
import type { Consultant } from "@/lib/data";

const ConsultantCard = ({ consultant }: { consultant: Consultant }) => (
  <div className="bg-card rounded-lg overflow-hidden card-hover text-center p-8">
    <img
      src={consultant.photo}
      alt={consultant.name}
      className="w-28 h-28 rounded-full object-cover mx-auto mb-5 border-2 border-gold/30"
    />
    <h3 className="font-heading text-lg font-semibold text-foreground">{consultant.name}</h3>
    <p className="text-sm text-gold font-medium mt-1 mb-3">{consultant.title}</p>
    <div className="flex flex-wrap justify-center gap-2 mb-4">
      {consultant.languages.map((lang) => (
        <span key={lang} className="text-xs bg-secondary px-2 py-1 rounded text-muted-foreground">
          {lang}
        </span>
      ))}
    </div>
    <p className="text-sm text-muted-foreground leading-relaxed mb-5">{consultant.bio}</p>
    <div className="flex flex-wrap justify-center gap-2 mb-5">
      {consultant.specialization.map((spec) => (
        <span key={spec} className="text-xs bg-gold/10 text-gold px-2 py-1 rounded font-medium">
          {spec}
        </span>
      ))}
    </div>
    <Link
      to="/iletisim"
      className="inline-flex items-center gap-2 bg-gradient-gold text-accent-foreground px-5 py-2.5 rounded text-sm font-semibold hover:opacity-90 transition-opacity"
    >
      <MessageSquare size={14} />
      Mesaj Gönder
    </Link>
  </div>
);

export default ConsultantCard;
