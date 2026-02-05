import { Link } from "react-router-dom";
import { Phone, Mail, MapPin, Facebook } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-secondary/30 border-t border-border pt-16 pb-8">
      <div className="container grid md:grid-cols-3 gap-12 mb-12">
        
        {/* Kolumn 1: Logga & Info */}
        <div className="space-y-4">
          <Link to="/" className="block">
            <img 
              src="/Logga.png" 
              alt="El i Söder" 
              className="h-16 w-auto object-contain -ml-2"
            />
          </Link>
          <p className="text-muted-foreground leading-relaxed max-w-xs">
            Din trygga partner för elinstallationer. Vi levererar kvalitet och säkerhet i varje projekt.
          </p>
        </div>

        {/* Kolumn 2: Kontaktuppgifter */}
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
                Nättraby, Sweden
              </span>
            </li>
          </ul>
        </div>

        {/* Kolumn 3: Socialt & F-skatt */}
        <div>
          <h3 className="font-serif text-lg font-semibold mb-4">Följ oss</h3>
          <div className="flex gap-4 mb-6">
            <a 
              href="https://www.facebook.com/p/EL-i-S%C3%B6der-100084525871865/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-full bg-background border border-border flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary transition-all"
            >
              <Facebook className="w-5 h-5" />
            </a>
          </div>
          <div className="inline-block px-4 py-2 bg-background rounded-lg border border-border">
            <span className="text-sm font-semibold text-primary">✓ Godkänd för F-skatt</span>
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