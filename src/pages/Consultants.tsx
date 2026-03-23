import { consultants } from "@/lib/data";
import ConsultantCard from "@/components/ConsultantCard";
import PageHero from "@/components/PageHero";

const Consultants = () => (
  <main>
    <PageHero
      title="Danışmanlarımız"
      subtitle="Alanında uzman ekibimiz ile size en uygun gayrimenkul çözümünü sunuyoruz"
    />

    <section className="section-padding bg-background">
      <div className="container-narrow">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {consultants.map((consultant) => (
            <ConsultantCard key={consultant.id} consultant={consultant} />
          ))}
        </div>
      </div>
    </section>
  </main>
);

export default Consultants;
