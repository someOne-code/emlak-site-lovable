import { useParams, Link, useNavigate } from "react-router-dom";
import { ArrowLeft, Check, Plus, Minus, ShieldCheck, CreditCard, Building, Sparkles, Truck, PaintBucket, WashingMachine } from "lucide-react";
import { properties } from "@/lib/data";
import { useState, useMemo } from "react";

interface AddOn {
  id: string;
  label: string;
  description: string;
  price: number;
  icon: React.ReactNode;
}

const addOns: AddOn[] = [
  {
    id: "cleaning",
    label: "Profesyonel Temizlik",
    description: "Giriş öncesi derin temizlik hizmeti",
    price: 7500,
    icon: <WashingMachine size={20} />,
  },
  {
    id: "painting",
    label: "Boya & Tadilat",
    description: "İç cephe boyama ve küçük onarımlar",
    price: 15000,
    icon: <PaintBucket size={20} />,
  },
  {
    id: "transfer",
    label: "Havalimanı Transfer",
    description: "VIP havalimanı karşılama ve transfer",
    price: 3500,
    icon: <Truck size={20} />,
  },
  {
    id: "furnishing",
    label: "Mobilya Paketi",
    description: "Temel mobilya ve ev eşyası kurulumu",
    price: 25000,
    icon: <Sparkles size={20} />,
  },
];

type PaymentType = "reservation" | "first_month";

const Checkout = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const property = properties.find((p) => p.id === id);
  const [selectedAddOns, setSelectedAddOns] = useState<string[]>([]);
  const [paymentType, setPaymentType] = useState<PaymentType>("reservation");
  const [agreed, setAgreed] = useState(false);

  const serviceFee = Math.round((property?.price ?? 0) * 0.15);
  
  const baseAmount = useMemo(() => {
    if (!property) return 0;
    if (paymentType === "reservation") {
      return Math.round(property.price * 0.5);
    }
    return property.price + serviceFee;
  }, [paymentType, property, serviceFee]);

  const addOnsTotal = useMemo(() => {
    return addOns
      .filter((a) => selectedAddOns.includes(a.id))
      .reduce((sum, a) => sum + a.price, 0);
  }, [selectedAddOns]);

  const totalAmount = baseAmount + addOnsTotal;

  if (!property) {
    return (
      <main className="pt-28 section-padding text-center">
        <p className="text-muted-foreground">İlan bulunamadı.</p>
        <Link to="/portfoy" className="text-gold mt-4 inline-block">Portföye dön</Link>
      </main>
    );
  }

  const toggleAddOn = (id: string) => {
    setSelectedAddOns((prev) =>
      prev.includes(id) ? prev.filter((a) => a !== id) : [...prev, id]
    );
  };

  const serviceFee = Math.round(property.price * 0.15);
  
  const baseAmount = useMemo(() => {
    if (paymentType === "reservation") {
      return Math.round(property.price * 0.5);
    }
    return property.price + serviceFee;
  }, [paymentType, property.price, serviceFee]);

  const addOnsTotal = useMemo(() => {
    return addOns
      .filter((a) => selectedAddOns.includes(a.id))
      .reduce((sum, a) => sum + a.price, 0);
  }, [selectedAddOns]);

  const totalAmount = baseAmount + addOnsTotal;

  const handleProceed = () => {
    // Demo: In production, this would redirect to Turkish bank's hosted payment page
    // For now, show a summary alert
    const summary = {
      property: property.title,
      paymentType: paymentType === "reservation" ? "Rezervasyon Bedeli" : "İlk Ay + Hizmet Bedeli",
      baseAmount,
      addOns: addOns.filter((a) => selectedAddOns.includes(a.id)).map((a) => a.label),
      addOnsTotal,
      totalAmount,
    };
    
    alert(
      `DEMO — Banka ödeme sayfasına yönlendirileceksiniz.\n\n` +
      `Toplam: ${totalAmount.toLocaleString("tr-TR")} TL\n\n` +
      `Gerçek entegrasyonda bu noktada Türk bankasının\nhosted ödeme sayfası açılacaktır.`
    );
    
    console.log("Payment session data:", summary);
  };

  return (
    <main className="pt-24 md:pt-28 pb-16">
      <div className="container-narrow px-6">
        <Link to={`/portfoy/${id}`} className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-gold transition-colors mb-8">
          <ArrowLeft size={16} /> İlana Dön
        </Link>

        <div className="mb-8">
          <h1 className="font-heading text-2xl md:text-3xl font-bold text-foreground">
            Ödeme Özeti
          </h1>
          <p className="text-muted-foreground mt-1">Seçimlerinizi yapın, ardından güvenli ödeme sayfasına yönlendirileceksiniz.</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Left column: Selections */}
          <div className="lg:col-span-2 space-y-8">
            
            {/* Property summary */}
            <section className="bg-card rounded-lg p-6 border border-border">
              <h2 className="font-heading text-lg font-semibold text-foreground mb-4 flex items-center gap-2">
                <Building size={20} className="text-gold" /> Seçilen Daire
              </h2>
              <div className="flex gap-4">
                <img
                  src={property.images[0]}
                  alt={property.title}
                  className="w-28 h-20 rounded object-cover flex-shrink-0"
                />
                <div>
                  <h3 className="font-semibold text-foreground">{property.title}</h3>
                  <p className="text-sm text-muted-foreground">{property.location}</p>
                  <p className="text-sm text-muted-foreground">{property.rooms} · {property.area} m² · {property.floor}</p>
                  <p className="text-gold font-semibold mt-1">
                    {property.price.toLocaleString("tr-TR")} {property.currency} {property.priceLabel}
                  </p>
                </div>
              </div>
            </section>

            {/* Payment type */}
            <section className="bg-card rounded-lg p-6 border border-border">
              <h2 className="font-heading text-lg font-semibold text-foreground mb-4 flex items-center gap-2">
                <CreditCard size={20} className="text-gold" /> Ödeme Tipi
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <button
                  onClick={() => setPaymentType("reservation")}
                  className={`text-left p-4 rounded-lg border-2 transition-all ${
                    paymentType === "reservation"
                      ? "border-gold bg-gold/5"
                      : "border-border hover:border-gold/40"
                  }`}
                >
                  <p className="font-semibold text-foreground">Rezervasyon / Blokaj</p>
                  <p className="text-sm text-muted-foreground mt-1">
                    Daireyi ayırtmak için ön ödeme yapın. Kalan tutar ofis ile netleştirilir.
                  </p>
                  <p className="text-gold font-bold text-lg mt-2">
                    {Math.round(property.price * 0.5).toLocaleString("tr-TR")} TL
                  </p>
                </button>
                <button
                  onClick={() => setPaymentType("first_month")}
                  className={`text-left p-4 rounded-lg border-2 transition-all ${
                    paymentType === "first_month"
                      ? "border-gold bg-gold/5"
                      : "border-border hover:border-gold/40"
                  }`}
                >
                  <p className="font-semibold text-foreground">İlk Ay + Hizmet Bedeli</p>
                  <p className="text-sm text-muted-foreground mt-1">
                    İlk ay kirası ve emlak hizmet bedelini ödeyin. Süreci hızlandırın.
                  </p>
                  <p className="text-gold font-bold text-lg mt-2">
                    {(property.price + serviceFee).toLocaleString("tr-TR")} TL
                  </p>
                </button>
              </div>
            </section>

            {/* Add-on services */}
            <section className="bg-card rounded-lg p-6 border border-border">
              <h2 className="font-heading text-lg font-semibold text-foreground mb-2 flex items-center gap-2">
                <Sparkles size={20} className="text-gold" /> Ek Hizmetler
              </h2>
              <p className="text-sm text-muted-foreground mb-4">İsteğe bağlı — ihtiyacınız olan hizmetleri seçin.</p>
              <div className="space-y-3">
                {addOns.map((addon) => {
                  const isSelected = selectedAddOns.includes(addon.id);
                  return (
                    <button
                      key={addon.id}
                      onClick={() => toggleAddOn(addon.id)}
                      className={`w-full flex items-center gap-4 p-4 rounded-lg border-2 transition-all text-left ${
                        isSelected
                          ? "border-gold bg-gold/5"
                          : "border-border hover:border-gold/40"
                      }`}
                    >
                      <div className={`w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0 ${
                        isSelected ? "bg-gold text-accent-foreground" : "bg-secondary text-muted-foreground"
                      }`}>
                        {addon.icon}
                      </div>
                      <div className="flex-1 min-w-0">
                        <p className="font-semibold text-foreground">{addon.label}</p>
                        <p className="text-sm text-muted-foreground">{addon.description}</p>
                      </div>
                      <div className="text-right flex-shrink-0">
                        <p className="font-semibold text-foreground">{addon.price.toLocaleString("tr-TR")} TL</p>
                        <div className={`w-6 h-6 rounded border-2 flex items-center justify-center mt-1 ml-auto ${
                          isSelected ? "bg-gold border-gold" : "border-border"
                        }`}>
                          {isSelected && <Check size={14} className="text-accent-foreground" />}
                        </div>
                      </div>
                    </button>
                  );
                })}
              </div>
            </section>
          </div>

          {/* Right column: Summary */}
          <div>
            <div className="bg-card rounded-lg p-6 border border-border sticky top-28 space-y-5">
              <h2 className="font-heading text-lg font-semibold text-foreground">Ödeme Özeti</h2>

              <div className="space-y-3 text-sm">
                <div className="flex justify-between">
                  <span className="text-muted-foreground">
                    {paymentType === "reservation" ? "Rezervasyon Bedeli" : "İlk Ay Kirası"}
                  </span>
                  <span className="text-foreground font-medium">
                    {paymentType === "reservation"
                      ? Math.round(property.price * 0.5).toLocaleString("tr-TR")
                      : property.price.toLocaleString("tr-TR")
                    } TL
                  </span>
                </div>

                {paymentType === "first_month" && (
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Hizmet Bedeli</span>
                    <span className="text-foreground font-medium">{serviceFee.toLocaleString("tr-TR")} TL</span>
                  </div>
                )}

                {selectedAddOns.length > 0 && (
                  <>
                    <div className="border-t border-border pt-3">
                      <p className="text-muted-foreground text-xs uppercase tracking-wider mb-2">Ek Hizmetler</p>
                    </div>
                    {addOns
                      .filter((a) => selectedAddOns.includes(a.id))
                      .map((a) => (
                        <div key={a.id} className="flex justify-between">
                          <span className="text-muted-foreground">{a.label}</span>
                          <span className="text-foreground font-medium">{a.price.toLocaleString("tr-TR")} TL</span>
                        </div>
                      ))}
                  </>
                )}

                <div className="border-t border-border pt-3">
                  <div className="flex justify-between items-baseline">
                    <span className="font-semibold text-foreground text-base">Toplam</span>
                    <span className="font-heading text-2xl font-bold text-gold">
                      {totalAmount.toLocaleString("tr-TR")} TL
                    </span>
                  </div>
                </div>
              </div>

              {/* Agreement */}
              <label className="flex items-start gap-3 cursor-pointer">
                <input
                  type="checkbox"
                  checked={agreed}
                  onChange={(e) => setAgreed(e.target.checked)}
                  className="mt-1 w-4 h-4 rounded border-border accent-gold"
                />
                <span className="text-xs text-muted-foreground leading-relaxed">
                  Ödeme koşullarını ve hizmet sözleşmesini okudum, kabul ediyorum. Kart bilgilerim güvenli banka ödeme sayfasında alınacaktır.
                </span>
              </label>

              {/* CTA */}
              <button
                onClick={handleProceed}
                disabled={!agreed}
                className="w-full bg-gradient-gold text-accent-foreground py-3.5 rounded-lg font-semibold text-sm text-center hover:opacity-90 transition-opacity disabled:opacity-40 disabled:cursor-not-allowed flex items-center justify-center gap-2"
              >
                <ShieldCheck size={18} />
                Güvenli Ödeme Sayfasına Git
              </button>

              <div className="flex items-center gap-2 justify-center text-xs text-muted-foreground">
                <ShieldCheck size={14} />
                <span>3D Secure ile korunan banka ödeme sayfası</span>
              </div>

              <div className="bg-secondary rounded-lg p-4 text-xs text-muted-foreground space-y-1.5">
                <p className="font-semibold text-foreground text-sm">Nasıl çalışır?</p>
                <p>1. Seçimlerinizi yapın ve özeti onaylayın</p>
                <p>2. Banka ödeme sayfasında kart bilgilerinizi girin</p>
                <p>3. 3D Secure doğrulamasını tamamlayın</p>
                <p>4. Danışmanımız sizi arayarak süreci başlatır</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Checkout;
