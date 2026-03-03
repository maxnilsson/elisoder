import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import { useEffect, useState } from "react";
// VIKTIGT: Importera bilden från assets-mappen
import heroVan from "@/assets/hero-van.jpg"; 

const Index = () => {
  const [scrollY, setScrollY] = useState(0);
  const heroTranslateY = Math.max(-42, Math.min(42, scrollY * -0.12));

  useEffect(() => {
    let ticking = false;

    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          setScrollY(window.scrollY);
          ticking = false;
        });
        ticking = true;
      }
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    const elements = document.querySelectorAll<HTMLElement>(".reveal");
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.15, rootMargin: "0px 0px -40px 0px" },
    );

    elements.forEach((el) => observer.observe(el));

    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <div className="min-h-screen flex flex-col bg-background">
      {/* --- HERO SECTION --- */}
<section className="relative h-[100svh] flex items-center justify-center overflow-hidden">
  {/* HÄR ÄR DIN HUVUDBILD (Söder.jpg) */}
  <div className="absolute inset-0 z-0">
    <img 
  src="/Solcell.png"
  /* Här ändrade jag till [center_30%] vilket betyder: 
     Centrera i sidled, men fokusera 30% ner från toppen i höjdled. */
  className="w-full h-full object-cover object-center"
  style={{ transform: `translate3d(0, ${heroTranslateY}px, 0) scale(1.22)` }}
/>
    {/* Jag ökade mörkret lite (bg-black/50) så texten syns bra ovanpå din bild */}
    <div className="absolute inset-0 bg-black/50" /> 
  </div>

        <div className="container relative z-10 text-center text-white max-w-4xl px-4 mt-16">
          <h1 className="text-5xl md:text-7xl font-serif font-medium mb-6 leading-tight animate-fade-in">
            Vi säkrar din vardag med <span className="text-primary italic">kvalitet</span>
          </h1>
          <p className="text-lg md:text-xl text-white/90 mb-10 max-w-2xl mx-auto leading-relaxed animate-fade-in">
            Från små installationer till kompletta smarta hem. Vi hjälper dig med allt inom el.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in">
            <Button asChild size="lg" className="rounded-full text-lg h-14 px-8 bg-primary hover:bg-primary/90 text-primary-foreground">
              <Link to="/kontakt">Kontakta oss</Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="rounded-full text-lg h-14 px-8 bg-white/10 border-white/20 text-white hover:bg-white hover:text-black transition-colors">
              <Link to="/utforda-arbeten">Se våra jobb</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* --- TJÄNSTER --- */}
      <section className="py-24 bg-secondary/30 reveal">
        <div className="container xl:max-w-[1500px]">
          <div className="text-center mb-16 max-w-2xl mx-auto reveal" style={{ transitionDelay: "100ms" }}>
            <h2 className="text-3xl md:text-4xl font-serif mb-4 text-foreground">Vad behöver du hjälp med?</h2>
            <p className="text-muted-foreground text-lg">Vi erbjuder bred kompetens inom elinstallation och service.</p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-5 gap-8">
            <ServiceCard
              cardIndex={4}
              title="Laddboxar"
              desc="Säker laddning för din elbil."
              imageSrc="/zaptec.jpg"
              imageAlt="Laddbox installation"
              scrollY={scrollY}
              parallaxFactor={0.025}
              readMoreHref="/tjanster#laddboxar"
                imagePositionClass="object-[53%_62%] lg:object-[53%_70%] xl:object-[53%_74%] 2xl:object-[53%_78%]"
              maxParallax={10}
              imageScale={1.13}
            />
            <ServiceCard
              cardIndex={2}
              title="Solceller"
              desc="Installation och inkoppling av solcellssystem."
              imageSrc="/Solcell_installation.png"
              imageAlt="Solceller"
              scrollY={scrollY}
              parallaxFactor={0.04}
              readMoreHref="/tjanster#solceller"
              maxParallax={12}
              imageScale={1.15}
            />
            <ServiceCard
              cardIndex={0}
              title="Batteri"
              desc="Batterilösningar för lagring och smart energianvändning."
              imageSrc="/pylontech-force-h3-30kw.webp"
              imageAlt="Batterilösningar"
              scrollY={scrollY}
              parallaxFactor={0.05}
              readMoreHref="/tjanster#batteri"
              imagePositionClass="object-[50%_25%]"
              imageScale={0.9}
            />
            <ServiceCard
              cardIndex={1}
              title="Energilösningar"
              desc="Smarta energilösningar för ett effektivt och hållbart hem."
              imageSrc="/Elinstallation.jpg"
              imageAlt="Energilösningar"
              scrollY={scrollY}
              parallaxFactor={0.05}
              readMoreHref="/tjanster#energilösningar"
            />
            <ServiceCard
              cardIndex={3}
              title="Smarta Hem"
              desc="Styr belysning och värme från mobilen."
              imageSrc="/smarthome.jpg"
              imageAlt="Smarta hem lösningar"
              scrollY={scrollY}
              parallaxFactor={0.09}
              readMoreHref="/tjanster#smarta-hem"
            />
          </div>
        </div>
      </section>

      {/* --- OM OSS (Med din andra bild) --- */}
      <section className="py-24 reveal" style={{ transitionDelay: "60ms" }}>
        <div className="container grid md:grid-cols-2 gap-12 items-center">
          <div className="relative rounded-3xl overflow-hidden h-[500px] shadow-2xl">
             {/* HÄR ÄR DIN ANDRA BILD (hero-van.jpg) */}
             <img 
              src={heroVan} 
              alt="El i söder servicebil" 
              className="w-full h-full object-cover"
            />
          </div>
          <div className="space-y-6 pl-0 md:pl-8">
            <h2 className="text-3xl md:text-4xl font-serif text-foreground">
              Trygghet, kunskap och <br/> personligt engagemang
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Vi på El i Söder sätter alltid kunden i fokus. Med rätt utrustning och rätt kompetens ser vi till att jobbet blir gjort på bästa sätt.
            </p>
            <ul className="space-y-4 mt-4">
              <ListItem text="Behöriga elektriker" />
              <ListItem text="Rot-avdrag direkt på fakturan" />
              <ListItem text="Personlig service" />
            </ul>
            <div className="pt-4">
               <Button variant="link" asChild className="p-0 text-primary font-semibold text-lg">
                <Link to="/om-oss" className="flex items-center gap-2">
                  Läs mer om oss <ArrowRight className="w-5 h-5" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* --- UTHYRNING --- */}
      <section className="py-20 reveal" style={{ transitionDelay: "80ms" }}>
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-8 items-stretch">
            <div className="overflow-hidden rounded-3xl border border-border/60 min-h-[360px] lg:min-h-[460px] bg-card">
              <img
                src="/allställning.jpg"
                alt="Aluminiumställning med trailer"
                className="w-full h-full object-cover object-center"
              />
            </div>

            <div className="rounded-3xl border border-border/60 bg-card p-8 md:p-10 lg:p-12 flex flex-col justify-center">
              <p className="text-sm md:text-base uppercase tracking-[0.12em] text-primary mb-3">Uthyrning</p>
              <h2 className="text-3xl md:text-5xl font-serif leading-tight mb-4">
                Aluminiumställning med trailer uthyres
              </h2>
              <p className="text-muted-foreground text-base md:text-lg leading-relaxed mb-6">
                Behöver du ställning till projektet? Hör av dig så hjälper vi dig med en smidig och säker lösning.
              </p>
              <Button asChild className="rounded-full w-fit px-7">
                <Link to="/kontakt">Kontakta oss</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* --- CTA --- */}
      <section className="py-24 bg-foreground text-background text-center reveal" style={{ transitionDelay: "90ms" }}>
        <div className="container max-w-3xl">
          <h2 className="text-3xl md:text-4xl font-serif mb-6">Redo att dra igång?</h2>
          <Button asChild size="lg" className="rounded-full bg-background text-foreground hover:bg-white/90 text-lg h-14 px-10">
             <Link to="/kontakt">Kontakta oss idag</Link>
          </Button>
        </div>
      </section>
    </div>
  );
};

const ServiceCard = ({
  title,
  desc,
  imageSrc,
  imageAlt,
  scrollY,
  parallaxFactor,
  readMoreHref,
  cardIndex,
  imagePositionClass,
  maxParallax,
  imageScale,
}: {
  title: string;
  desc: string;
  imageSrc: string;
  imageAlt: string;
  scrollY: number;
  parallaxFactor: number;
  readMoreHref: string;
  cardIndex: number;
  imagePositionClass?: string;
  maxParallax?: number;
  imageScale?: number;
}) => {
  const clampedParallax = maxParallax ?? 28;
  const translateY = Math.max(-clampedParallax, Math.min(clampedParallax, scrollY * -parallaxFactor));
  const scale = imageScale ?? 1.2;

  return (
    <div
      className="group relative overflow-hidden p-8 lg:p-10 xl:p-12 rounded-3xl border border-border/50 hover:border-primary/50 hover:shadow-lg hover:-translate-y-1 transition-all duration-300 min-h-[320px] lg:min-h-[400px] xl:min-h-[500px] flex flex-col justify-end reveal"
      style={{ transitionDelay: `${120 + cardIndex * 120}ms` }}
    >
      <div className="absolute inset-0" aria-hidden="true">
        <img
          src={imageSrc}
          alt={imageAlt}
          className={`w-full h-full object-cover object-center ${imagePositionClass ?? ""}`}
          style={{ transform: `translate3d(0, ${translateY}px, 0) scale(${scale})` }}
        />
      </div>
      <div className="absolute inset-0 bg-black/45" aria-hidden="true" />

      <div className="relative z-10">
        <h3 className="text-2xl font-serif mb-3 text-white">{title}</h3>
        <p className="text-white/85 leading-relaxed">{desc}</p>
        <Button asChild variant="secondary" className="mt-5 rounded-full px-6">
          <Link to={readMoreHref}>Läs mer</Link>
        </Button>
      </div>
    </div>
  );
};

const ListItem = ({ text }: { text: string }) => (
  <li className="flex items-center gap-3 text-foreground/80">
    <CheckCircle2 className="w-5 h-5 text-primary" />
    <span>{text}</span>
  </li>
);

export default Index;
