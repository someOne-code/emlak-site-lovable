import aboutBg from "@/assets/about-bg.jpg";
import PageHero from "@/components/PageHero";

const values = [
  { title: "Güvenilirlik", desc: "Her işlemde şeffaf ve dürüst yaklaşım." },
  { title: "Profesyonellik", desc: "Sektör deneyimi ile kaliteli hizmet." },
  { title: "Müşteri Odaklılık", desc: "İhtiyaçlarınıza özel çözümler." },
  { title: "Sürekli Gelişim", desc: "Teknoloji ve pazar takibi ile güncel kalma." },
];

const About = () => (
  <main>
    <PageHero title="Hakkımızda" subtitle="12 yıllık deneyim, 150'den fazla yönetilen mülk" />

    <section className="section-padding bg-background">
      <div className="container-narrow">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <p className="text-gold text-sm font-semibold tracking-[0.15em] uppercase mb-2">
              Hikayemiz
            </p>
            <h2 className="font-heading text-3xl font-bold text-foreground mb-6">
              İstanbul'un Güvenilir Gayrimenkul Partneri
            </h2>
            <div className="space-y-4 text-muted-foreground leading-relaxed">
              <p>
                Prestige Estates, 2014 yılında İstanbul'da kurulmuş, uzun dönem kiralama ve
                gayrimenkul yatırım danışmanlığı alanında faaliyet gösteren bir gayrimenkul
                yönetim şirketidir.
              </p>
              <p>
                Portföyümüzde şirketimize ait mülkler, vekaletli daireler ve yatırım odaklı
                gayrimenkuller bulunmaktadır. Her mülkü profesyonel bir yaklaşımla yöneterek,
                mülk sahiplerine ve kiracılara güvenilir bir hizmet sunuyoruz.
              </p>
              <p>
                Ana iş modelimiz uzun dönem kiralama ve yatırım danışmanlığıdır. Günlük
                kiralama veya otel rezervasyon sistemi ile çalışmıyoruz.
              </p>
            </div>
          </div>
          <div className="rounded-lg overflow-hidden">
            <img src={aboutBg} alt="Ofisimiz" className="w-full h-auto object-cover rounded-lg" />
          </div>
        </div>

        {/* Values */}
        <div className="mt-20">
          <h2 className="font-heading text-3xl font-bold text-foreground text-center mb-12">
            Değerlerimiz
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((v) => (
              <div key={v.title} className="bg-card p-6 rounded-lg card-hover text-center">
                <h3 className="font-heading text-lg font-semibold text-foreground mb-2">{v.title}</h3>
                <p className="text-sm text-muted-foreground">{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  </main>
);

export default About;
