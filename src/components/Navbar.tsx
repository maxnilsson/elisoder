import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Phone } from "lucide-react";
import { Button } from "@/components/ui/button";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [hoveredMobileLink, setHoveredMobileLink] = useState<string | null>(null);
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => {
      setIsScrolled(window.scrollY > 18);
    };

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", onScroll);
    };
  }, []);

  useEffect(() => {
    document.body.style.overflow = isMenuOpen ? "hidden" : "";

    if (!isMenuOpen) {
      setHoveredMobileLink(null);
    }

    return () => {
      document.body.style.overflow = "";
    };
  }, [isMenuOpen]);

  const navLinks = [
    { href: "/", label: "Hem" },
    { href: "/tjanster", label: "Tjänster" },
    { href: "/utforda-arbeten", label: "Utförda Arbeten" },
    { href: "/om-oss", label: "Om oss" },
    { href: "/kontakt", label: "Kontakt" },
  ];

  // En hjälpfunktion för att se om länken är aktiv (för styling)
  const isActive = (path: string) => {
    if (path === "/" && location.pathname !== "/") return false;
    return location.pathname.startsWith(path);
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 border-b bg-background transition-all duration-300 ${
        isScrolled ? "border-border shadow-md" : "border-border/70 shadow-sm"
      }`}
    >
      <div className={`container flex items-center justify-between transition-all duration-300 ${isScrolled ? "h-16" : "h-20"}`}>
        
        {/* Logo */}
        <Link to="/" className="flex items-center hover:opacity-80 transition-opacity">
          <img 
            src="/Logga.png" 
            alt="El i Söder" 
            className={`w-auto object-contain transition-all duration-300 ${isScrolled ? "h-12" : "h-14"}`}
          />
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-2">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              to={link.href}
              className={`text-sm font-semibold px-4 py-2 rounded-full transition-all duration-300 ${
                isActive(link.href) 
                  ? "text-foreground bg-primary/15 shadow-sm"
                  : "text-muted-foreground hover:text-foreground hover:bg-muted/70"
              }`}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        {/* CTA Button */}
        <div className="hidden md:block">
          <Button asChild className="rounded-full px-6 font-sans font-bold">
            <a href="tel:0703992952" className="flex items-center gap-2">
              <Phone className="h-4 w-4" />
              <span>070-399 29 52</span>
            </a>
          </Button>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden group relative w-11 h-11 rounded-full border border-border bg-card/80 text-foreground transition-all duration-300 hover:bg-muted hover:scale-105"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Toggle menu"
          aria-expanded={isMenuOpen}
        >
          <span
            className={`absolute left-1/2 top-[14px] h-0.5 w-5 -translate-x-1/2 bg-current transition-all duration-300 ${
              isMenuOpen
                ? "translate-y-[7px] rotate-45"
                : "rotate-0 group-hover:w-6 group-hover:-translate-y-0.5"
            }`}
          />
          <span
            className={`absolute left-1/2 top-[21px] h-0.5 w-5 -translate-x-1/2 bg-current transition-all duration-300 ${
              isMenuOpen ? "opacity-0" : "opacity-100 group-hover:w-4"
            }`}
          />
          <span
            className={`absolute left-1/2 top-[28px] h-0.5 w-5 -translate-x-1/2 bg-current transition-all duration-300 ${
              isMenuOpen
                ? "-translate-y-[7px] -rotate-45"
                : "rotate-0 group-hover:w-6 group-hover:translate-y-0.5"
            }`}
          />
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden fixed inset-0 z-40 bg-foreground/90 backdrop-blur-md transition-all duration-500 ${
          isMenuOpen ? "opacity-100 translate-y-0 pointer-events-auto" : "opacity-0 -translate-y-2 pointer-events-none"
        }`}
      >
        <nav className="container h-full pt-28 pb-10 flex flex-col justify-between">
          <div className="flex flex-col gap-3">
            {navLinks.map((link, index) => (
              <Link
                key={link.href}
                to={link.href}
                className={`text-3xl font-semibold py-2 transition-all duration-300 ${
                  hoveredMobileLink === link.href || (hoveredMobileLink === null && isActive(link.href))
                    ? "text-primary"
                    : "text-background/90 hover:text-background"
                } ${isMenuOpen ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0"}`}
                style={{ transitionDelay: `${80 + index * 60}ms` }}
                onMouseEnter={() => setHoveredMobileLink(link.href)}
                onMouseLeave={() => setHoveredMobileLink(null)}
                onClick={() => setIsMenuOpen(false)}
              >
                {link.label}
              </Link>
            ))}
          </div>

          <Button asChild className="w-full rounded-full py-6 text-lg">
            <a href="tel:0703992952" className="flex items-center justify-center gap-2">
              <Phone className="h-5 w-5" />
              Ring 070-399 29 52
            </a>
          </Button>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;