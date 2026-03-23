import { useState } from "react";
import { MapPin, Phone, Mail, Clock, Send } from "lucide-react";
import PageHero from "@/components/PageHero";

const Contact = () => {
  const [form, setForm] = useState({
    name: "", phone: "", email: "", property: "", budget: "", duration: "", message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert("Talebiniz alınmıştır. En kısa sürede sizinle iletişime geçeceğiz.");
  };

  return (
    <main>
      <PageHero title="İletişim" subtitle="Sizinle tanışmak ve ihtiyaçlarınızı dinlemek istiyoruz" />

      <section className="section-padding bg-background">
        <div className="container-narrow">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Contact info */}
            <div className="space-y-8">
              <div>
                <h3 className="font-heading text-xl font-semibold text-foreground mb-4">
                  İletişim Bilgileri
                </h3>
                <div className="space-y-4">
                  {[
                    { icon: <MapPin size={18} />, text: "Levent Mah., Büyükdere Cad. No:185, İstanbul" },
                    { icon: <Phone size={18} />, text: "+90 (212) 555 00 00" },
                    { icon: <Mail size={18} />, text: "info@prestigeestates.com" },
                    { icon: <Clock size={18} />, text: "Pzt-Cum: 09:00-18:00 | Cts: 10:00-15:00" },
                  ].map((item, i) => (
                    <div key={i} className="flex items-start gap-3">
                      <span className="text-gold mt-0.5">{item.icon}</span>
                      <span className="text-sm text-muted-foreground">{item.text}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Form */}
            <div className="lg:col-span-2">
              <div className="bg-card rounded-lg p-8 card-hover">
                <h3 className="font-heading text-xl font-semibold text-foreground mb-6">
                  Talep Formu
                </h3>
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-sm font-medium text-foreground mb-1.5">Ad Soyad *</label>
                      <input
                        required
                        value={form.name}
                        onChange={(e) => setForm({ ...form, name: e.target.value })}
                        className="w-full px-4 py-2.5 rounded bg-secondary border border-border text-foreground text-sm focus:outline-none focus:border-gold transition-colors"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-foreground mb-1.5">Telefon *</label>
                      <input
                        required
                        value={form.phone}
                        onChange={(e) => setForm({ ...form, phone: e.target.value })}
                        className="w-full px-4 py-2.5 rounded bg-secondary border border-border text-foreground text-sm focus:outline-none focus:border-gold transition-colors"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-foreground mb-1.5">E-posta *</label>
                      <input
                        required
                        type="email"
                        value={form.email}
                        onChange={(e) => setForm({ ...form, email: e.target.value })}
                        className="w-full px-4 py-2.5 rounded bg-secondary border border-border text-foreground text-sm focus:outline-none focus:border-gold transition-colors"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-foreground mb-1.5">İlgilendiği Mülk</label>
                      <input
                        value={form.property}
                        onChange={(e) => setForm({ ...form, property: e.target.value })}
                        className="w-full px-4 py-2.5 rounded bg-secondary border border-border text-foreground text-sm focus:outline-none focus:border-gold transition-colors"
                        placeholder="Opsiyonel"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-foreground mb-1.5">Bütçe</label>
                      <input
                        value={form.budget}
                        onChange={(e) => setForm({ ...form, budget: e.target.value })}
                        className="w-full px-4 py-2.5 rounded bg-secondary border border-border text-foreground text-sm focus:outline-none focus:border-gold transition-colors"
                        placeholder="Opsiyonel"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-foreground mb-1.5">Kiralama Süresi</label>
                      <input
                        value={form.duration}
                        onChange={(e) => setForm({ ...form, duration: e.target.value })}
                        className="w-full px-4 py-2.5 rounded bg-secondary border border-border text-foreground text-sm focus:outline-none focus:border-gold transition-colors"
                        placeholder="Opsiyonel"
                      />
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-1.5">Mesaj</label>
                    <textarea
                      rows={4}
                      value={form.message}
                      onChange={(e) => setForm({ ...form, message: e.target.value })}
                      className="w-full px-4 py-2.5 rounded bg-secondary border border-border text-foreground text-sm focus:outline-none focus:border-gold transition-colors resize-none"
                    />
                  </div>
                  <button
                    type="submit"
                    className="inline-flex items-center gap-2 bg-gradient-gold text-accent-foreground px-8 py-3 rounded font-semibold text-sm hover:opacity-90 transition-opacity"
                  >
                    <Send size={14} /> Talep Gönder
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Contact;
