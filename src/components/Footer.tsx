import { Link } from "react-router-dom";
import { Phone, Mail, MapPin, Facebook, Instagram } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-secondary/30 border-t border-border pt-16 pb-8">
      <div className="container grid sm:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
        
        {/* Kolumn 1: Logga & Info */}
        <div className="space-y-4">
          <Link to="/" className="block">
            <img 
              src="/Logga.png" 
              alt="El i Söder – Elektriker i Karlskrona och Blekinge" 
              loading="lazy"
              decoding="async"
              className="h-16 w-auto object-contain -ml-2"
            />
          </Link>
          <p className="text-muted-foreground leading-relaxed max-w-xs">
            Din trygga elektriker i Karlskrona, Nättraby och hela Blekinge. Vi levererar kvalitet och elsäkerhet i varje projekt.
          </p>
        </div>

        {/* Kolumn 2: Tjänster (Interna SEO-länkar) */}
        <div>
          <h3 className="font-serif text-lg font-semibold mb-4">Våra tjänster</h3>
          <ul className="space-y-2.5 text-muted-foreground">
            <li>
              <Link to="/tjanster/laddboxar" className="hover:text-foreground transition-colors">
                Installera laddbox
              </Link>
            </li>
            <li>
              <Link to="/tjanster/solceller" className="hover:text-foreground transition-colors">
                Solceller
              </Link>
            </li>
            <li>
              <Link to="/tjanster/batteri" className="hover:text-foreground transition-colors">
                Batterilagring
              </Link>
            </li>
            <li>
              <Link to="/tjanster/energilosningar" className="hover:text-foreground transition-colors">
                Elinstallation & Energilösningar
              </Link>
            </li>
            <li>
              <Link to="/tjanster/smarta-hem" className="hover:text-foreground transition-colors">
                Smarta hem & Plejd
              </Link>
            </li>
          </ul>
        </div>

        {/* Kolumn 3: Kontaktuppgifter */}
        <div>
          <h3 className="font-serif text-lg font-semibold mb-4">Kontakt</h3>
          <ul className="space-y-4">
            <li className="flex items-start gap-3 text-muted-foreground">
              <Phone className="w-5 h-5 text-primary shrink-0 mt-0.5" />
              <a href="tel:0703992952" className="hover:text-foreground transition-colors">
                070-399 29 52
              </a>
            </li>
            <li className="flex items-start gap-3 text-muted-foreground">
              <Mail className="w-5 h-5 text-primary shrink-0 mt-0.5" />
              <a href="mailto:Elisoder@outlook.com" className="hover:text-foreground transition-colors break-all">
                Elisoder@outlook.com
              </a>
            </li>
            <li className="flex items-start gap-3 text-muted-foreground">
              <MapPin className="w-5 h-5 text-primary shrink-0 mt-0.5" />
              <span>
                Koltrastvägen 25,<br />
                370 24 Nättraby (Karlskrona)
              </span>
            </li>
          </ul>
        </div>

        {/* Kolumn 4: Socialt & F-skatt */}
        <div>
          <h3 className="font-serif text-lg font-semibold mb-4">Följ oss</h3>
          <div className="flex gap-4 mb-6">
            <a 
              href="https://www.facebook.com/p/EL-i-S%C3%B6der-100084525871865/" 
              target="_blank" 
              rel="noopener noreferrer"
              aria-label="Följ El i Söder på Facebook"
              className="w-10 h-10 rounded-full bg-background border border-border flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary transition-all"
            >
              <Facebook className="w-5 h-5" />
            </a>
            <a
              href="https://www.instagram.com/elisoder.se/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Följ El i Söder på Instagram"
              className="w-10 h-10 rounded-full bg-background border border-border flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary transition-all"
            >
              <Instagram className="w-5 h-5" />
            </a>
          </div>
          <div className="inline-block px-4 py-2 bg-background rounded-lg border border-border">
            <span className="text-sm font-semibold text-primary">✓ Godkänd för F-skatt</span>
          </div>
          <div className="mt-4">
            <img
              src="/kolla_elforetaget.png"
              alt="Kolla elföretaget – Elsäkerhetsverket"
              className="h-16 w-auto object-contain"
              loading="lazy"
              decoding="async"
            />
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="container pt-8 border-t border-border/50 text-center md:text-left text-sm text-muted-foreground">
        <p>&copy; {currentYear} El i Söder. Alla rättigheter förbehållna.</p>
      </div>
    </footer>
  );
};

export default Footer;