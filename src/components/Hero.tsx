import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const Hero = () => {
  return (
    <section className="pt-16 border-b border-section-border">
      <div className="container">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center py-12 lg:py-20">
          {/* Text Content */}
          <div className="order-2 lg:order-1 animate-fade-in">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight mb-4">
              Din pålitliga elektriker i Blekinge
            </h1>
            <p className="text-lg text-muted-foreground mb-8 max-w-lg">
              Professionella elinstallationer för privatpersoner och företag. Snabbt, säkert och lokalt.
            </p>
            <Button asChild size="lg" className="group">
              <a href="#kontakt">
                Kontakta oss
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </a>
            </Button>
          </div>

          {/* Image */}
          <div className="order-1 lg:order-2 animate-fade-in" style={{ animationDelay: "0.2s" }}>
            <div className="relative aspect-[4/3] lg:aspect-[5/4] overflow-hidden rounded-lg border border-section-border">
              <img
                src="/Söder.jpg"
                alt="EL I SÖDER elektriker med firmabil"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
