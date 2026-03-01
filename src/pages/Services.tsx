import { Link } from "react-router-dom";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";

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
  return (
    <main className="min-h-screen bg-background">
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
