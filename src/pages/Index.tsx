import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ArrowRight, CheckCircle2, Phone, ShieldCheck } from "lucide-react";
import { useEffect, useRef } from "react";
import Seo from "@/components/Seo";
import SchemaMarkup from "@/components/SchemaMarkup";
import heroVan from "@/assets/hero-van.jpg";

const homeFaqs = [
  {
    question: "Vilka områden i Blekinge arbetar ni i?",
    answer:
      "Vi utgår från Nättraby och utför elinstallationer, laddboxinstallationer, solceller och batterilagring i hela Karlskrona, Ronneby, Karlshamn och övriga Blekinge.",
  },
  {
    question: "Hur fungerar ROT-avdrag och Grön Teknik-avdrag hos er?",
    answer:
      "Vi drar av skattereduktionen direkt på din faktura och sköter hela administrationen mot Skatteverket. Du får 30 % ROT-avdrag på arbetskostnaden vid vanliga elarbeten och upp till 50 % Grön Teknik-avdrag på både arbete och material vid installation av laddbox eller hemmabatteri.",
  },
  {
    question: "Är El i Söder registrerade hos Elsäkerhetsverket?",
    answer:
      "Ja, vi är ett registrerat elföretag hos Elsäkerhetsverket med auktoriserade och behöriga elektriker samt godkända för F-skatt.",
  },
  {
    question: "Kostar det något att få en offert?",
    answer:
      "Nej, det är alltid kostnadsfritt och helt förutsättningslöst att begära en offert eller rådgivning från oss.",
  },
];

const Index = () => {
  const pageRef = useRef<HTMLDivElement>(null);

  const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": "Electrician",
    "@id": "https://www.elisoder.se/#electrician",
    name: "El i Söder",
    url: "https://www.elisoder.se",
    logo: "https://www.elisoder.se/Logga.png",
    image: "https://www.elisoder.se/Logga.png",
    description:
      "Behörig elektriker i Karlskrona, Nättraby och Blekinge. Elinstallationer, laddboxar, solceller, batterilagring och smarta hem.",
    telephone: "+46-70-399-29-52",
    email: "elisoder@outlook.com",
    priceRange: "$$",
    address: {
      "@type": "PostalAddress",
      streetAddress: "Koltrastvägen 25",
      postalCode: "370 24",
      addressLocality: "Nättraby",
      addressRegion: "Blekinge",
      addressCountry: "SE",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: 56.2015,
      longitude: 15.5342,
    },
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
        opens: "07:00",
        closes: "16:00",
      },
    ],
    areaServed: ["Karlskrona", "Nättraby", "Ronneby", "Karlshamn", "Blekinge"],
    sameAs: [
      "https://www.facebook.com/p/EL-i-S%C3%B6der-100084525871865/",
      "https://www.instagram.com/elisoder.se/",
    ],
  };

  const websiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "El i Söder",
    url: "https://www.elisoder.se",
    inLanguage: "sv-SE",
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: homeFaqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  };

  // Uppdatera parallax direkt i DOM via requestAnimationFrame utan att trigga React re-renders
  useEffect(() => {
    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (prefersReducedMotion) return;

    const container = pageRef.current;
    if (!container) return;

    const parallaxNodes = container.querySelectorAll<HTMLElement>("[data-parallax-factor]");
    let ticking = false;

    const updateParallax = () => {
      const currentScrollY = window.scrollY;
      parallaxNodes.forEach((node) => {
        const factor = parseFloat(node.dataset.parallaxFactor || "0");
        const max = parseFloat(node.dataset.parallaxMax || "28");
        const scale = parseFloat(node.dataset.parallaxScale || "1.2");
        const translateY = Math.max(-max, Math.min(max, currentScrollY * -factor));
        node.style.transform = `translate3d(0, ${translateY}px, 0) scale(${scale})`;
      });
      ticking = false;
    };

    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(updateParallax);
        ticking = true;
      }
    };

    updateParallax();
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
    <div ref={pageRef} className="min-h-screen flex flex-col bg-background">
      <Seo
        title="Elektriker i Karlskrona, Nättraby & Blekinge"
        description="Behörig elektriker i Karlskrona, Nättraby och hela Blekinge. Elinstallationer, laddboxar, solceller, batterilösningar och smarta hem. 30% ROT & 50% Grön Teknik."
        path="/"
      />
      <SchemaMarkup id="local-business" data={localBusinessSchema} />
      <SchemaMarkup id="website" data={websiteSchema} />
      <SchemaMarkup id="home-faq" data={faqSchema} />

      {/* --- HERO SECTION --- */}
      <section className="relative min-h-[100svh] flex items-center justify-center overflow-hidden py-24 md:py-0">
        <div className="absolute inset-0 z-0">
          <img
            src="/Solcell.webp"
            alt="Solceller, laddboxar och elinstallation i Karlskrona och Blekinge – El i Söder"
            fetchPriority="high"
            decoding="async"
            data-parallax-factor="0.12"
            data-parallax-max="42"
            data-parallax-scale="1.22"
            className="w-full h-full object-cover object-center will-change-transform"
            style={{ transform: "translate3d(0, 0px, 0) scale(1.22)" }}
          />
          <div className="absolute inset-0 bg-black/55" />
        </div>

        <div className="container relative z-10 text-center text-white max-w-4xl px-4 mt-10 md:mt-16">
          <div className="inline-flex items-center gap-2 rounded-full bg-white/15 backdrop-blur-sm border border-white/25 px-4 py-1.5 text-xs sm:text-sm font-medium text-white mb-5 animate-fade-in">
            <ShieldCheck className="w-4 h-4 text-primary shrink-0" />
            <span>Behörig elektriker i Karlskrona, Nättraby & Blekinge</span>
          </div>

          <h1 className="text-4xl sm:text-5xl md:text-7xl font-serif font-medium mb-5 md:mb-6 leading-tight animate-fade-in">
            Vi säkrar din vardag med <span className="text-primary italic">kvalitet</span>
          </h1>
          <p className="text-base sm:text-lg md:text-xl text-white/90 mb-7 md:mb-10 max-w-2xl mx-auto leading-relaxed animate-fade-in">
            Din lokala elektriker i Karlskrona och Blekinge. Vi hjälper privatpersoner, BRF:er och företag med elinstallationer, laddboxar, solceller, batterilagring och smarta hem.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 md:gap-4 justify-center animate-fade-in">
            <Button asChild size="lg" className="rounded-full text-base md:text-lg h-12 md:h-14 px-6 md:px-8 bg-primary hover:bg-primary/90 text-primary-foreground">
              <Link to="/kontakt">Begär kostnadsfri offert</Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="rounded-full text-base md:text-lg h-12 md:h-14 px-6 md:px-8 bg-white/10 border-white/25 text-white hover:bg-white hover:text-black transition-colors">
              <a href="tel:0703992952" className="inline-flex items-center gap-2">
                <Phone className="w-4 h-4" /> Ring 070-399 29 52
              </a>
            </Button>
          </div>

          <div className="mt-8 md:mt-10 flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-xs sm:text-sm text-white/85 animate-fade-in">
            <span className="inline-flex items-center gap-1.5">
              <CheckCircle2 className="w-4 h-4 text-primary" /> 30 % ROT-avdrag
            </span>
            <span className="inline-flex items-center gap-1.5">
              <CheckCircle2 className="w-4 h-4 text-primary" /> Upp till 50 % Grön Teknik-avdrag
            </span>
            <span className="inline-flex items-center gap-1.5">
              <CheckCircle2 className="w-4 h-4 text-primary" /> Registrerade hos Elsäkerhetsverket
            </span>
          </div>
        </div>
      </section>

      {/* --- TJÄNSTER --- */}
      <section className="py-24 bg-secondary/30 reveal">
        <div className="container xl:max-w-[1500px]">
          <div className="text-center mb-16 max-w-2xl mx-auto reveal" style={{ transitionDelay: "100ms" }}>
            <h2 className="text-3xl md:text-4xl font-serif mb-4 text-foreground">Vad behöver du hjälp med?</h2>
            <p className="text-muted-foreground text-lg">
              Vi erbjuder bred kompetens inom elinstallation, energilagring och elservice i hela Blekinge.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-5 gap-8">
            <ServiceCard
              cardIndex={4}
              title="Laddboxar"
              desc="Säker elbilsladdning med lastbalansering och 50 % Grön Teknik."
              imageSrc="/zaptec.jpg"
              imageAlt="Installation av Zaptec laddbox i Karlskrona"
              parallaxFactor={0.025}
              readMoreHref="/tjanster/laddboxar"
              imagePositionClass="object-[53%_62%] lg:object-[53%_70%] xl:object-[53%_74%] 2xl:object-[53%_78%]"
              maxParallax={10}
              imageScale={1.13}
            />
            <ServiceCard
              cardIndex={2}
              title="Solceller"
              desc="Nyckelfärdig installation och inkoppling av solcellssystem."
              imageSrc="/Solcell_installation.png"
              imageAlt="Solceller installerade på villatak i Blekinge"
              parallaxFactor={0.04}
              readMoreHref="/tjanster/solceller"
              maxParallax={12}
              imageScale={1.15}
            />
            <ServiceCard
              cardIndex={0}
              title="Batteri"
              desc="Batterilagring som kapar effekttoppar med 50 % Grön Teknik."
              imageSrc="/pylontech-force-h3-30kw.webp"
              imageAlt="Batterilagring Pylontech för solceller"
              parallaxFactor={0.05}
              readMoreHref="/tjanster/batteri"
              imagePositionClass="object-[50%_25%]"
              imageScale={0.9}
            />
            <ServiceCard
              cardIndex={1}
              title="Energilösningar"
              desc="Elinstallation, elcentralbyte och smarta energilösningar."
              imageSrc="/Elinstallation.jpg"
              imageAlt="Elinstallation och elcentral i Karlskrona"
              parallaxFactor={0.05}
              readMoreHref="/tjanster/energilosningar"
            />
            <ServiceCard
              cardIndex={3}
              title="Smarta Hem"
              desc="Styr belysning och värme smidigt från mobilen med Plejd."
              imageSrc="/smarthome.jpg"
              imageAlt="Smarta hem-lösningar och belysningsstyrning"
              parallaxFactor={0.09}
              readMoreHref="/tjanster/smarta-hem"
            />
          </div>
        </div>
      </section>

      {/* --- OM OSS --- */}
      <section className="py-24 reveal" style={{ transitionDelay: "60ms" }}>
        <div className="container grid md:grid-cols-2 gap-12 items-center">
          <div className="relative rounded-3xl overflow-hidden h-[500px] shadow-2xl">
            <img
              src={heroVan}
              alt="El i Söder servicebil – Elektriker i Karlskrona och Nättraby"
              loading="lazy"
              decoding="async"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="space-y-6 pl-0 md:pl-8">
            <h2 className="text-3xl md:text-4xl font-serif text-foreground">
              Trygghet, kunskap och <br /> personligt engagemang
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Vi på El i Söder utgår från Nättraby och sätter alltid kunden i fokus. Med rätt utrustning och behörig kompetens ser vi till att elarbetet blir säkert och snyggt utfört i hela Karlskrona och Blekinge.
            </p>
            <ul className="space-y-4 mt-4">
              <ListItem text="Behöriga elektriker registrerade hos Elsäkerhetsverket" />
              <ListItem text="ROT-avdrag (30 %) & Grön Teknik (upp till 50 %) direkt på fakturan" />
              <ListItem text="Personlig service och kostnadsfri offert" />
            </ul>
            <div className="pt-4 flex flex-wrap gap-4 items-center">
              <Button variant="link" asChild className="p-0 text-primary font-semibold text-lg">
                <Link to="/om-oss" className="flex items-center gap-2">
                  Läs mer om oss <ArrowRight className="w-5 h-5" />
                </Link>
              </Button>
              <Button variant="link" asChild className="p-0 text-muted-foreground hover:text-foreground font-medium text-base">
                <Link to="/utforda-arbeten" className="flex items-center gap-2">
                  Se våra utförda arbeten <ArrowRight className="w-4 h-4" />
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
                alt="Hyra aluminiumställning med trailer i Karlskrona och Blekinge"
                loading="lazy"
                decoding="async"
                className="w-full h-full object-cover object-center"
              />
            </div>

            <div className="rounded-3xl border border-border/60 bg-card p-8 md:p-10 lg:p-12 flex flex-col justify-center">
              <p className="text-sm md:text-base uppercase tracking-[0.12em] text-primary mb-3">Uthyrning i Karlskrona & Blekinge</p>
              <h2 className="text-3xl md:text-5xl font-serif leading-tight mb-4">
                Aluminiumställning med trailer uthyres
              </h2>
              <p className="text-muted-foreground text-base md:text-lg leading-relaxed mb-6">
                Behöver du byggställning till måleriet, takarbetet eller fasadprojektet? Hör av dig så hjälper vi dig med en smidig och säker ställning på trailer redo att hämtas eller levereras.
              </p>
              <Button asChild className="rounded-full w-fit px-7">
                <Link to="/kontakt">Boka eller fråga om pris</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* --- VANLIGA FRÅGOR (FAQ) --- */}
      <section className="py-20 bg-secondary/30 reveal" style={{ transitionDelay: "85ms" }}>
        <div className="container max-w-4xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-serif mb-4 text-foreground">Vanliga frågor</h2>
            <p className="text-muted-foreground text-lg">
              Svar på vanliga frågor om elinstallationer, laddboxar, solceller och skatteavdrag.
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-6">
            {homeFaqs.map((faq) => (
              <div key={faq.question} className="rounded-2xl border border-border/60 bg-card p-6 shadow-sm">
                <h3 className="text-lg font-serif font-semibold mb-2 text-foreground">{faq.question}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* --- CTA --- */}
      <section className="py-24 bg-foreground text-background text-center reveal" style={{ transitionDelay: "90ms" }}>
        <div className="container max-w-3xl">
          <h2 className="text-3xl md:text-4xl font-serif mb-4">Redo att dra igång ditt projekt?</h2>
          <p className="text-background/80 text-lg mb-8 max-w-xl mx-auto">
            Kontakta oss för rådgivning eller en kostnadsfri offert på elinstallation, laddbox, solceller eller batteri.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" className="rounded-full bg-primary text-primary-foreground hover:bg-primary/90 text-lg h-14 px-10">
              <Link to="/kontakt">Kontakta oss idag</Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="rounded-full bg-transparent border-background/30 text-background hover:bg-background hover:text-foreground text-lg h-14 px-8">
              <a href="tel:0703992952" className="inline-flex items-center gap-2">
                <Phone className="w-5 h-5" /> 070-399 29 52
              </a>
            </Button>
          </div>
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
  parallaxFactor: number;
  readMoreHref: string;
  cardIndex: number;
  imagePositionClass?: string;
  maxParallax?: number;
  imageScale?: number;
}) => {
  const clampedParallax = maxParallax ?? 28;
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
          loading="lazy"
          decoding="async"
          data-parallax-factor={parallaxFactor}
          data-parallax-max={clampedParallax}
          data-parallax-scale={scale}
          className={`w-full h-full object-cover object-center will-change-transform ${imagePositionClass ?? ""}`}
          style={{ transform: `translate3d(0, 0px, 0) scale(${scale})` }}
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
    <CheckCircle2 className="w-5 h-5 text-primary shrink-0" />
    <span>{text}</span>
  </li>
);

export default Index;
