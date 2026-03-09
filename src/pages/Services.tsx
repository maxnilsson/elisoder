import { Link } from "react-router-dom";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import Seo from "@/components/Seo";
import SchemaMarkup from "@/components/SchemaMarkup";

const serviceSections = [
  {
    id: "batteri",
    title: "Batteri",
    intro:
      "Vi installerar batterilösningar som lagrar överskottsel och hjälper dig använda energi smartare över dygnet.",
    points: [
      "Dimensionering utifrån förbrukning och behov",
      "Säker installation och driftsättning",
      "Optimering för lägre effekttoppar",
      "Genomgång av app och uppföljning av prestanda",
    ],
  },
  {
    id: "energilösningar",
    title: "Energilösningar",
    intro:
      "Vi hjälper dig att planera och bygga energilösningar som minskar förbrukning, jämnar ut effekttoppar och gör hemmet mer framtidssäkert.",
    points: [
      "Energigenomgång av befintlig elanläggning",
      "Förslag på smart kombination av solceller, batteri och styrning",
      "Praktiska åtgärder för lägre kostnader över tid",
      "Löpande rådgivning kring optimering och drift",
    ],
  },
  {
    id: "solceller",
    title: "Solceller",
    intro:
      "Vi hjälper dig från planering till färdig installation av solcellssystem för villa och mindre fastigheter.",
    points: [
      "Rådgivning och projektering",
      "Montering av paneler och växelriktare",
      "Säker inkoppling i befintlig elanläggning",
      "Kontroll och genomgång efter installation",
    ],
  },
  {
    id: "smarta-hem",
    title: "Smarta hem",
    intro:
      "Vi bygger smarta lösningar för styrning av belysning, värme och energiförbrukning med fokus på enkel användning.",
    points: [
      "Styrning via mobil och schemaläggning",
      "Integration av belysning och sensorer",
      "Optimering av komfort och energiförbrukning",
      "Anpassning efter dina vardagsrutiner",
    ],
  },
  {
    id: "laddboxar",
    title: "Laddboxar",
    intro:
      "Vi hjälper dig med hela processen från rådgivning till färdig installation av laddlösning hemma eller i BRF.",
    points: [
      "Dimensionering efter fastighet och bil",
      "Säker installation och konfigurering",
      "Lastbalansering vid behov",
      "Genomgång av app och användning efter montage",
    ],
  },
];

const Services = () => {
  const servicesSchema = serviceSections.map((section) => ({
    "@context": "https://schema.org",
    "@type": "Service",
    serviceType: section.title,
    description: section.intro,
    areaServed: "Blekinge",
    provider: {
      "@type": "Electrician",
      name: "El i Söder",
      url: "https://www.elisoder.se",
    },
    url: `https://www.elisoder.se/tjanster#${section.id}`,
  }));

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "Erbjuder ni kostnadsfri offert?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Ja, vi erbjuder kostnadsfri offert för elarbeten, laddboxar, solceller och energilösningar.",
        },
      },
      {
        "@type": "Question",
        name: "I vilka områden jobbar ni?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Vi utgår från Nättraby och tar uppdrag i Karlskrona med omnejd samt stora delar av Blekinge.",
        },
      },
      {
        "@type": "Question",
        name: "Kan ni hjälpa med både installation och rådgivning?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Ja, vi hjälper både med rådgivning, planering och komplett installation beroende på behov.",
        },
      },
      {
        "@type": "Question",
        name: "Arbetar ni med ROT-avdrag?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Ja, vi hanterar ROT-avdrag direkt på fakturan när arbetet uppfyller Skatteverkets villkor.",
        },
      },
    ],
  };

  return (
    <main className="min-h-screen bg-background">
      <Seo
        title="Tjänster inom el"
        description="Läs om våra tjänster: batteri, energilösningar, solceller, smarta hem och laddboxar i Blekinge."
        path="/tjanster"
      />
      <SchemaMarkup id="services" data={servicesSchema} />
      <SchemaMarkup id="services-faq" data={faqSchema} />

      <section className="pt-32 pb-16 bg-secondary/30 border-b border-section-border">
        <div className="container max-w-4xl text-center">
          <h1 className="text-4xl md:text-5xl font-serif mb-6">Tjänster vi erbjuder</h1>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Här kan du läsa mer om de vanligaste jobben vi hjälper våra kunder med.
          </p>
        </div>
      </section>

      <section className="py-16">
        <div className="container space-y-10">
          {serviceSections.map((section) => (
            <article
              key={section.id}
              id={section.id}
              className="scroll-mt-32 rounded-3xl border border-border/60 bg-card p-8 md:p-10"
            >
              <h2 className="text-3xl font-serif mb-4">{section.title}</h2>
              <p className="text-muted-foreground text-lg leading-relaxed mb-6">{section.intro}</p>

              <ul className="space-y-3 mb-8">
                {section.points.map((point) => (
                  <li key={point} className="flex items-start gap-3 text-foreground/90">
                    <CheckCircle2 className="w-5 h-5 text-primary mt-0.5 shrink-0" />
                    <span>{point}</span>
                  </li>
                ))}
              </ul>

              <Button asChild className="rounded-full px-7">
                <Link to="/kontakt" className="inline-flex items-center gap-2">
                  Be om offert <ArrowRight className="w-4 h-4" />
                </Link>
              </Button>
            </article>
          ))}
        </div>
      </section>
    </main>
  );
};

export default Services;
