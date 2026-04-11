import { Link, Navigate, useParams } from "react-router-dom";
import { ArrowLeft, ArrowRight, CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import Seo from "@/components/Seo";
import SchemaMarkup from "@/components/SchemaMarkup";
import { serviceSections } from "@/lib/serviceSections";

const ServiceDetail = () => {
  const { serviceId } = useParams<{ serviceId: string }>();
  const service = serviceSections.find((section) => section.id === serviceId);

  if (!service) {
    return <Navigate to="/sidan-finns-inte" replace />;
  }

  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    serviceType: service.title,
    description: service.intro,
    areaServed: "Blekinge",
    provider: {
      "@type": "Electrician",
      name: "El i Söder",
      url: "https://www.elisoder.se",
    },
    url: `https://www.elisoder.se/tjanster/${service.id}`,
  };

  const showFullImage = service.id === "batteri" || service.id === "solceller";
  const useAdaptiveImageBox = service.id === "solceller" || service.id === "laddboxar";
  const isLaddboxar = service.id === "laddboxar";

  return (
    <main className="min-h-screen bg-background">
      <Seo
        title={`${service.title} i Blekinge`}
        description={`${service.intro} Begär kostnadsfri offert från El i Söder.`}
        path={`/tjanster/${service.id}`}
      />
      <SchemaMarkup id={`service-${service.id}`} data={serviceSchema} />

      <section className="pt-28 pb-12 md:pt-32 md:pb-16 bg-secondary/30 border-b border-section-border">
        <div className="container max-w-5xl">
          <Button asChild variant="ghost" className="mb-6 pl-0 hover:bg-transparent">
            <Link to="/tjanster" className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground">
              <ArrowLeft className="w-4 h-4" /> Tillbaka till tjänster
            </Link>
          </Button>

          {isLaddboxar && service.detailImages?.length ? (
            <div className="mb-8 rounded-3xl overflow-hidden border border-border/60 bg-secondary/15 p-2 md:p-3">
              <div className="rounded-2xl overflow-hidden">
                <img
                  src={service.detailImages[0].src}
                  alt={service.detailImages[0].alt}
                  className="w-full h-auto max-h-[280px] md:max-h-[420px] object-contain object-center rounded-2xl"
                />
              </div>
            </div>
          ) : (
            <div
              className={`rounded-3xl overflow-hidden border border-border/60 mb-8 bg-secondary/15 ${
                useAdaptiveImageBox ? "p-2 md:p-3" : ""
              }`}
            >
              <div className="rounded-2xl overflow-hidden">
                <img
                  src={service.imageSrc}
                  alt={service.imageAlt}
                  className={`w-full object-center ${
                    useAdaptiveImageBox
                      ? "h-auto max-h-[280px] md:max-h-[420px] object-contain rounded-2xl"
                      : `h-56 md:h-[360px] ${showFullImage ? "object-contain rounded-2xl" : "object-cover"}`
                  }`}
                />
              </div>
            </div>
          )}

          <h1 className="text-4xl md:text-5xl font-serif mb-5">{service.title}</h1>
          <p className="text-base md:text-lg text-muted-foreground leading-relaxed max-w-3xl">{service.intro}</p>
        </div>
      </section>

      <section className="py-12 md:py-16">
        <div className="container max-w-5xl grid lg:grid-cols-[1.4fr_1fr] gap-8 md:gap-10 items-start">
          <article className="rounded-3xl border border-border/60 bg-card p-6 md:p-8">
            <h2 className="text-2xl md:text-3xl font-serif mb-5">Det här ingår</h2>
            <ul className="space-y-3">
              {service.points.map((point) => (
                <li key={point} className="flex items-start gap-3 text-foreground/90">
                  <CheckCircle2 className="w-5 h-5 text-primary mt-0.5 shrink-0" />
                  <span>{point}</span>
                </li>
              ))}
            </ul>
          </article>

          <aside className="rounded-3xl border border-border/60 bg-card p-6 md:p-8 sticky top-24">
            <h3 className="text-xl md:text-2xl font-serif mb-3">Begär offert</h3>
            <p className="text-muted-foreground mb-6 leading-relaxed">
              Berätta kort om ditt behov så återkommer vi med en kostnadsfri offert.
            </p>
            <Button asChild className="rounded-full w-full md:w-auto px-7">
              <Link to="/kontakt" className="inline-flex items-center gap-2">
                Begär offert <ArrowRight className="w-4 h-4" />
              </Link>
            </Button>
          </aside>
        </div>
      </section>
    </main>
  );
};

export default ServiceDetail;
