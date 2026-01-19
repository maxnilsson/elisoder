import { useState } from "react";
import { Phone, Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navLinks = [
    { href: "#tjanster", label: "Tjänster" },
    { href: "#om-oss", label: "Om oss" },
    { href: "#omdomen", label: "Omdömen" },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background border-b border-section-border">
      <div className="container flex items-center justify-between h-16">
        {/* Logo */}
        <a href="#" className="text-xl font-bold tracking-tight">
          EL I SÖDER
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* CTA Button */}
        <div className="hidden md:block">
          <Button asChild>
            <a href="tel:0709906399" className="flex items-center gap-2">
              <Phone className="h-4 w-4" />
              Ring 0709-906399
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
                href={link.href}
                className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                {link.label}
              </a>
            ))}
            <Button asChild className="w-full mt-2">
              <a href="tel:0709906399" className="flex items-center justify-center gap-2">
                <Phone className="h-4 w-4" />
                Ring 0709-906399
              </a>
            </Button>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Navbar;
