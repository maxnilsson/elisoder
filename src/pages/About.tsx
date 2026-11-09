import { Link } from "react-router-dom";
import heroVan from "@/assets/hero-van.jpg";
import { Button } from "@/components/ui/button";
import { CheckCircle2, Award, Users, ShieldCheck } from "lucide-react";
import Seo from "@/components/Seo";

const About = () => {
  return (
    <div className="min-h-screen bg-background flex flex-col">
      <Seo
        title="Om oss – Behörig elektriker i Karlskrona & Blekinge"
        description="Lär känna El i Söder i Nättraby – behöriga elektriker med fokus på kvalitet, elsäkerhet och personlig service i Karlskrona och hela Blekinge."
        path="/om-oss"
      />

      
      {/* --- SEKTION 1: INTRO & BILD --- */}
      <section className="container pt-32 pb-16 md:py-24">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          
          {/* Vänster: Text */}
          <div className="space-y-6 animate-fade-in">
            <span className="text-primary font-semibold tracking-wide uppercase text-sm">
              Vilka är vi?
            </span>
            <h1 className="text-4xl md:text-5xl font-serif text-foreground leading-tight">
              Din trygga partner för <br />
              <span className="text-primary italic">elsäkerhet</span> i Karlskrona & Blekinge
            </h1>
            <div className="prose prose-lg text-muted-foreground">
              <p>
                El i Söder grundades med en enkel vision: att erbjuda trygga och moderna elinstallationer som folk faktiskt förstår sig på. Vi tror inte på krångliga termer eller dolda avgifter.
              </p>
              <p>
                Vi utgår från Nättraby och hjälper privatpersoner, bostadsrättsföreningar och företag i Karlskrona, Ronneby, Karlshamn och hela Blekinge. Oavsett om det handlar om att installera en laddbox, montera solceller med batterilagring, renovera köket eller felsöka en krånglande jordfelsbrytare möter vi dig alltid med personligt engagemang och rätt kompetens.
              </p>
            </div>
            
            <div className="pt-4">
               <Button asChild size="lg" className="rounded-full px-8">
                <Link to="/kontakt">Kontakta oss</Link>
              </Button>
            </div>
          </div>

          {/* Höger: Bild på bilen */}
          <div className="relative animate-fade-in">
            {/* Dekorativ bakgrundsplatta */}
            <div className="absolute -inset-4 bg-secondary rounded-3xl -z-10 transform rotate-2 md:rotate-3" />
            
            <div className="rounded-2xl overflow-hidden shadow-xl aspect-[4/3]">
              <img 
                src={heroVan} 
                alt="El i Söder servicebil i Karlskrona och Blekinge" 
                loading="lazy"
                decoding="async"
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
              />
            </div>
            
            {/* Liten badge/stämpel */}
            <div className="absolute -bottom-6 -left-6 bg-background p-4 rounded-xl shadow-lg border border-border hidden md:block">
              <div className="flex items-center gap-3">
                <div className="bg-primary/10 p-2 rounded-full">
                  <Award className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <p className="font-bold text-foreground">Behörig elektriker</p>
                  <p className="text-xs text-muted-foreground">Trygghet & Kvalitet</p>
                </div>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* --- SEKTION 2: VÅRA VÄRDERINGAR --- */}
      <section className="bg-secondary/30 py-24">
        <div className="container grid md:grid-cols-3 gap-8">
          <ValueCard 
            icon={<ShieldCheck className="w-8 h-8 text-primary" />}
            title="Säkerhet först"
            text="Vi följer alla branschregler och är registrerade hos Elsäkerhetsverket. Hos oss är du och din fastighet i trygga händer."
          />
          <ValueCard 
            icon={<Users className="w-8 h-8 text-primary" />}
            title="Personlig service"
            text="Du får alltid prata direkt med en behörig elektriker som kan svara på dina frågor. Vi värdesätter långsiktiga relationer med våra kunder."
          />
          <ValueCard 
            icon={<CheckCircle2 className="w-8 h-8 text-primary" />}
            title="Rätt pris direkt"
            text="Inga överraskningar. Vi ger tydliga kostnadsfria offerter och hanterar både ROT-avdrag (30 %) och Grön Teknik-avdrag (upp till 50 %) direkt på fakturan."
          />
        </div>
      </section>
    </div>
  );
};

// Liten hjälp-komponent för värderingskorten
const ValueCard = ({ icon, title, text }: { icon: React.ReactNode; title: string; text: string }) => (
  <div className="bg-background p-8 rounded-2xl shadow-sm border border-border hover:shadow-md transition-shadow">
    <div className="bg-secondary w-14 h-14 rounded-xl flex items-center justify-center mb-6">
      {icon}
    </div>
    <h3 className="text-xl font-serif font-semibold mb-3">{title}</h3>
    <p className="text-muted-foreground leading-relaxed">
      {text}
    </p>
  </div>
);

export default About;