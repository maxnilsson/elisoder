import { useState } from "react";
import { Link, useLocation } from "react-router-dom"; // <-- Importera dessa
import { Phone, Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation(); // <-- Kollar vilken sida vi är på

  // Kollar om vi är på startsidan (exakt "/")
  const isHomePage = location.pathname === "/";

  const navLinks = [
    { href: "#tjanster", label: "Tjänster" },
    { href: "#om-oss", label: "Om oss" },
    { href: "#omdomen", label: "Omdömen" },
  ];

  // Hjälpfunktion: Om vi är på startsidan kör vi bara "#hash", annars "/#hash"
  const getLinkUrl = (href: string) => {
    return isHomePage ? href : `/${href}`;
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background border-b border-section-border">
      <div className="container flex items-center justify-between h-16">
        
        {/* Logo - Nu klickbar länk till startsidan */}
        <Link to="/" className="text-xl font-bold tracking-tight hover:opacity-80 transition-opacity">
          EL I SÖDER
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={getLinkUrl(link.href)} // <-- Här använder vi logiken
              className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* CTA Button - Uppdaterat nummer */}
        <div className="hidden md:block">
          <Button asChild>
            <a href="tel:0703992959" className="flex items-center gap-2">
              <Phone className="h-4 w-4" />
              Ring 070-399 29 59
            </a>
          </Button>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden p-2"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Toggle menu"
        >
          {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-background border-t border-section-border">
          <nav className="container py-4 flex flex-col gap-4">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={getLinkUrl(link.href)} // <-- Samma logik här
                className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                {link.label}
              </a>
            ))}
            
            {/* Mobilknapp - Uppdaterat nummer */}
            <Button asChild className="w-full mt-2">
              <a href="tel:0703992959" className="flex items-center justify-center gap-2">
                <Phone className="h-4 w-4" />
                Ring 070-399 29 59
              </a>
            </Button>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Navbar;