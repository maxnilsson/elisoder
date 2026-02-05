import Navbar from "@/components/Navbar";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ArrowRight, CheckCircle2, Zap, Home, Car } from "lucide-react";
// VIKTIGT: Importera bilden från assets-mappen
import heroVan from "@/assets/hero-van.jpg"; 

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Navbar />

      {/* --- HERO SECTION --- */}
<section className="relative h-[80vh] flex items-center justify-center overflow-hidden">
  {/* HÄR ÄR DIN HUVUDBILD (Söder.jpg) */}
  <div className="absolute inset-0 z-0">
    <img 
  src="/Söder.jpg" 
  alt="Elektriker i arbete" 
  /* Här ändrade jag till [center_30%] vilket betyder: 
     Centrera i sidled, men fokusera 30% ner från toppen i höjdled. */
  className="w-full h-full object-cover object-[center_top]"
/>
    {/* Jag ökade mörkret lite (bg-black/50) så texten syns bra ovanpå din bild */}
    <div className="absolute inset-0 bg-black/50" /> 
  </div>

        <div className="container relative z-10 text-center text-white max-w-4xl px-4 mt-16">
          <span className="inline-block py-1 px-3 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-sm font-medium mb-6 animate-fade-in">
            Din lokala elektriker i Söder
          </span>
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
      <section className="py-24 bg-secondary/30">
        <div className="container">
          <div className="text-center mb-16 max-w-2xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-serif mb-4 text-foreground">Vad behöver du hjälp med?</h2>
            <p className="text-muted-foreground text-lg">Vi erbjuder bred kompetens inom elinstallation och service.</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <ServiceCard icon={<Zap className="w-8 h-8 text-primary" />} title="Elinstallation" desc="Nyinstallation, renovering och utbyggnad." />
            <ServiceCard icon={<Car className="w-8 h-8 text-primary" />} title="Laddboxar" desc="Säker laddning för din elbil." />
            <ServiceCard icon={<Home className="w-8 h-8 text-primary" />} title="Smarta Hem" desc="Styr belysning och värme från mobilen." />
          </div>
        </div>
      </section>

      {/* --- OM OSS (Med din andra bild) --- */}
      <section className="py-24">
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

      {/* --- CTA --- */}
      <section className="py-24 bg-foreground text-background text-center">
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

const ServiceCard = ({ icon, title, desc }: { icon: any, title: string, desc: string }) => (
  <div className="bg-card p-8 rounded-3xl border border-border/50 hover:border-primary/50 hover:shadow-lg transition-all duration-300">
    <div className="mb-6 bg-primary/10 w-16 h-16 rounded-2xl flex items-center justify-center">{icon}</div>
    <h3 className="text-2xl font-serif mb-3">{title}</h3>
    <p className="text-muted-foreground leading-relaxed">{desc}</p>
  </div>
);

const ListItem = ({ text }: { text: string }) => (
  <li className="flex items-center gap-3 text-foreground/80">
    <CheckCircle2 className="w-5 h-5 text-primary" />
    <span>{text}</span>
  </li>
);

export default Index;
