import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import Seo from "@/components/Seo";
import SchemaMarkup from "@/components/SchemaMarkup";
import { serviceSections } from "@/lib/serviceSections";

const Services = () => {
  const servicesSchema = serviceSections.map((section) => ({
    "@context": "https://schema.org",
    "@type": "Service",
    serviceType: section.title,
    description: section.intro,
    areaServed: ["Karlskrona", "Nättraby", "Ronneby", "Karlshamn", "Blekinge"],
    provider: {
      "@type": "Electrician",
      name: "El i Söder",
      url: "https://www.elisoder.se",
    },
    url: `https://www.elisoder.se/tjanster/${section.id}`,
  }));

  return (
    <main className="min-h-screen bg-background">
      <Seo
        title="Elinstallation, Laddboxar, Solceller & Batteri i Karlskrona"
        description="Behörig elektriker i Karlskrona och Blekinge. Vi installerar laddboxar, solceller, batterilagring, elinstallationer och smarta hem med ROT och Grön Teknik-avdrag."
        path="/tjanster"
      />
      <SchemaMarkup id="services" data={servicesSchema} />

      <section className="pt-32 pb-16 bg-secondary/30 border-b border-section-border">
        <div className="container max-w-4xl text-center">
          <span className="text-primary font-semibold tracking-wide uppercase text-sm mb-2 block">
            Elinstallation & Energi i Blekinge
          </span>
          <h1 className="text-4xl md:text-5xl font-serif mb-6">Tjänster vi erbjuder</h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Från elservice, belysning och smarta hem till nyckelfärdiga solceller, batterilagring och laddboxar. Vi hjälper privatpersoner, BRF:er och företag i Karlskrona med omnejd.
          </p>
        </div>
      </section>

      <section className="py-16 md:py-20 bg-secondary/30">
        <div className="container xl:max-w-[1500px]">
          <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-5 gap-6 md:gap-8">
            {serviceSections.map((section, index) => (
              <ServiceOverviewCard
                key={section.id}
                title={section.title}
                desc={section.intro}
                imageSrc={section.imageSrc}
                imageAlt={section.imageAlt}
                readMoreHref={`/tjanster/${section.id}`}
                cardIndex={index}
              />
            ))}
          </div>
        </div>
      </section>
    </main>
  );
};

export default Services;

const ServiceOverviewCard = ({
  title,
  desc,
  imageSrc,
  imageAlt,
  readMoreHref,
  cardIndex,
}: {
  title: string;
  desc: string;
  imageSrc: string;
  imageAlt: string;
  readMoreHref: string;
  cardIndex: number;
}) => {
  return (
    <div
      className="group relative overflow-hidden p-7 md:p-9 xl:p-10 rounded-3xl border border-transparent hover:shadow-lg hover:-translate-y-1 transition-all duration-300 min-h-[290px] md:min-h-[340px] xl:min-h-[390px] flex flex-col justify-end"
      style={{ transitionDelay: `${80 + cardIndex * 60}ms` }}
    >
      <div className="absolute inset-0" aria-hidden="true">
        <img
          src={imageSrc}
          alt={imageAlt}
          loading="lazy"
          decoding="async"
          className="w-full h-full object-cover object-center"
        />
      </div>
      <div className="absolute inset-0 bg-black/45" aria-hidden="true" />

      <div className="relative z-10">
        <h2 className="text-2xl font-serif mb-3 text-white">{title}</h2>
        <p className="text-white/85 leading-relaxed line-clamp-3">{desc}</p>
        <Button asChild variant="secondary" className="mt-5 rounded-full px-6">
          <Link to={readMoreHref}>Läs mer</Link>
        </Button>
      </div>
    </div>
  );
};
