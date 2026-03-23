interface PageHeroProps {
  title: string;
  subtitle?: string;
}

const PageHero = ({ title, subtitle }: PageHeroProps) => (
  <section className="bg-gradient-navy pt-28 pb-16 md:pt-36 md:pb-20 px-6">
    <div className="container-narrow text-center">
      <h1 className="font-heading text-3xl md:text-5xl font-bold text-primary-foreground mb-4">
        {title}
      </h1>
      {subtitle && (
        <p className="text-primary-foreground/60 text-lg max-w-2xl mx-auto">{subtitle}</p>
      )}
      <div className="w-16 h-0.5 bg-gradient-gold mx-auto mt-6" />
    </div>
  </section>
);

export default PageHero;
