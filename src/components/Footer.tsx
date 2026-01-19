import { Phone, Mail, MapPin } from "lucide-react";

const Footer = () => {
  return (
    <footer id="kontakt" className="py-12 lg:py-16 bg-foreground text-background">
      <div className="container">
        <div className="grid md:grid-cols-3 gap-8">
          {/* Company Info */}
          <div>
            <h3 className="text-lg font-bold mb-4">EL I SÖDER</h3>
            <p className="text-sm text-background/70 leading-relaxed">
              Din lokala elektriker i Blekinge. Vi utför alla typer av elarbeten 
              för privatpersoner och företag.
            </p>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wider mb-4 text-background/70">
              Kontakt
            </h4>
            <ul className="space-y-3">
              <li>
                <a 
                  href="tel:0709906399" 
                  className="flex items-center gap-3 text-sm hover:text-primary transition-colors"
                >
                  <Phone className="h-4 w-4" />
                  0709-906399
                </a>
              </li>
              <li>
                <a 
                  href="mailto:info@elisoder.se" 
                  className="flex items-center gap-3 text-sm hover:text-primary transition-colors"
                >
                  <Mail className="h-4 w-4" />
                  info@elisoder.se
                </a>
              </li>
              <li className="flex items-center gap-3 text-sm text-background/70">
                <MapPin className="h-4 w-4" />
                Verksam i hela Blekinge
              </li>
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wider mb-4 text-background/70">
              Snabblänkar
            </h4>
            <ul className="space-y-2">
              <li>
                <a href="#tjanster" className="text-sm hover:text-primary transition-colors">
                  Tjänster
                </a>
              </li>
              <li>
                <a href="#om-oss" className="text-sm hover:text-primary transition-colors">
                  Om oss
                </a>
              </li>
              <li>
                <a href="#omdomen" className="text-sm hover:text-primary transition-colors">
                  Omdömen
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-6 border-t border-background/10 text-center">
          <p className="text-xs text-background/50">
            © {new Date().getFullYear()} EL I SÖDER. Alla rättigheter förbehållna.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
