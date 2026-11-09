import { Link, Navigate, useParams } from "react-router-dom";
import { ArrowLeft, ArrowRight, CheckCircle2, Phone, ShieldCheck, Sparkles } from "lucide-react";
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

  const serviceSchema = [
    {
      "@context": "https://schema.org",
      "@type": "Service",
      serviceType: service.title,
      name: service.seoTitle,
      description: service.seoDescription,
      areaServed: ["Karlskrona", "Nättraby", "Ronneby", "Karlshamn", "Blekinge"],
      provider: {
        "@type": "Electrician",
        name: "El i Söder",
        url: "https://www.elisoder.se",
        telephone: "+46-70-399-29-52",
      },
      url: `https://www.elisoder.se/tjanster/${service.id}`,
    },
    {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      itemListElement: [
        {
          "@type": "ListItem",
          position: 1,
          name: "Hem",
          item: "https://www.elisoder.se/",
        },
        {
          "@type": "ListItem",
          position: 2,
          name: "Tjänster",
          item: "https://www.elisoder.se/tjanster",
        },
        {
          "@type": "ListItem",
          position: 3,
          name: service.title,
          item: `https://www.elisoder.se/tjanster/${service.id}`,
        },
      ],
    },
    ...(service.faqs.length
      ? [
          {
            "@context": "https://schema.org",
            "@type": "FAQPage",
            mainEntity: service.faqs.map((faq) => ({
              "@type": "Question",
              name: faq.question,
              acceptedAnswer: {
                "@type": "Answer",
                text: faq.answer,
              },
            })),
          },
        ]
      : []),
  ];

  const showFullImage = service.id === "batteri" || service.id === "solceller";
  const useAdaptiveImageBox = service.id === "solceller" || service.id === "laddboxar";
  const isLaddboxar = service.id === "laddboxar";

  return (
    <main className="min-h-screen bg-background">
      <Seo
        title={service.seoTitle}
        description={service.seoDescription}
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
                  decoding="async"
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
                  decoding="async"
                  className={`w-full object-center ${
                    useAdaptiveImageBox
                      ? "h-auto max-h-[280px] md:max-h-[420px] object-contain rounded-2xl"
                      : `h-56 md:h-[360px] ${showFullImage ? "object-contain rounded-2xl" : "object-cover"}`
                  }`}
                />
              </div>
            </div>
          )}

          <div className="inline-flex items-center gap-2 rounded-full bg-primary/15 px-4 py-1.5 text-sm font-medium text-foreground mb-4">
            <Sparkles className="w-4 h-4 text-primary" />
            <span>{service.taxDeduction}</span>
          </div>

          <h1 className="text-4xl md:text-5xl font-serif mb-5">{service.seoTitle}</h1>
          <p className="text-base md:text-lg text-muted-foreground leading-relaxed max-w-3xl">{service.intro}</p>
        </div>
      </section>

      <section className="py-12 md:py-16">
        <div className="container max-w-5xl grid lg:grid-cols-[1.4fr_1fr] gap-8 md:gap-10 items-start">
          <div className="space-y-8">
            <article className="rounded-3xl border border-border/60 bg-card p-6 md:p-8 space-y-6">
              <div>
                <h2 className="text-2xl md:text-3xl font-serif mb-4">Det här ingår</h2>
                <ul className="space-y-3">
                  {service.points.map((point) => (
                    <li key={point} className="flex items-start gap-3 text-foreground/90">
                      <CheckCircle2 className="w-5 h-5 text-primary mt-0.5 shrink-0" />
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="pt-4 border-t border-border/60 space-y-4 text-muted-foreground leading-relaxed">
                <h2 className="text-xl md:text-2xl font-serif text-foreground">
                  Trygg installation i Karlskrona, Nättraby & Blekinge
                </h2>
                {service.details.map((paragraph, idx) => (
                  <p key={idx}>{paragraph}</p>
                ))}
              </div>
            </article>

            {service.faqs.length > 0 && (
              <section className="rounded-3xl border border-border/60 bg-card p-6 md:p-8">
                <h2 className="text-2xl md:text-3xl font-serif mb-6">Vanliga frågor om {service.title.toLowerCase()}</h2>
                <div className="space-y-6">
                  {service.faqs.map((faq) => (
                    <div key={faq.question} className="border-b border-border/50 last:border-0 pb-5 last:pb-0">
                      <h3 className="text-lg font-semibold text-foreground mb-2">{faq.question}</h3>
                      <p className="text-muted-foreground leading-relaxed">{faq.answer}</p>
                    </div>
                  ))}
                </div>
              </section>
            )}
          </div>

          <aside className="rounded-3xl border border-border/60 bg-card p-6 md:p-8 sticky top-24 shadow-sm">
            <div className="flex items-center gap-2 text-primary font-semibold text-sm mb-2">
              <ShieldCheck className="w-5 h-5" />
              <span>Behörig elektriker • F-skatt</span>
            </div>
            <h3 className="text-xl md:text-2xl font-serif mb-3">Begär kostnadsfri offert</h3>
            <p className="text-muted-foreground mb-6 leading-relaxed">
              Berätta kort om ditt behov så återkommer vi snabbt med rådgivning och ett tydligt prisförslag.
            </p>
            <ul className="space-y-2.5 text-sm text-foreground/85 mb-6">
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-primary shrink-0" />
                <span>{service.taxDeduction}</span>
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-primary shrink-0" />
                <span>Svar normalt inom 24 timmar</span>
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-primary shrink-0" />
                <span>Registrerade hos Elsäkerhetsverket</span>
              </li>
            </ul>
            <div className="flex flex-col gap-3">
              <Button asChild size="lg" className="rounded-full w-full px-7">
                <Link to="/kontakt" className="inline-flex items-center justify-center gap-2">
                  Begär offert <ArrowRight className="w-4 h-4" />
                </Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="rounded-full w-full px-7">
                <a href="tel:0703992952" className="inline-flex items-center justify-center gap-2">
                  <Phone className="w-4 h-4" /> Ring 070-399 29 52
                </a>
              </Button>
            </div>
          </aside>
        </div>
      </section>
    </main>
  );
};

export default ServiceDetail;
