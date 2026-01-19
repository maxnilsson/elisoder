import { Star } from "lucide-react";

const testimonials = [
  {
    name: "Anna Johansson",
    location: "Karlskrona",
    text: "Snabb och professionell service! Installerade laddbox till vår elbil på rekordtid. Rekommenderas varmt!",
    rating: 5,
  },
  {
    name: "Erik Lindström",
    location: "Ronneby",
    text: "Mycket nöjd med elinstallationen i vårt nybyggda hus. Noggrann och städar alltid efter sig.",
    rating: 5,
  },
  {
    name: "Maria Svensson",
    location: "Karlshamn",
    text: "Hjälpte oss med solceller på taket. Fantastiskt resultat och trevligt bemötande genom hela processen.",
    rating: 5,
  },
  {
    name: "Johan Andersson",
    location: "Sölvesborg",
    text: "Pålitlig elektriker som kommer när han säger och gör ett grymt jobb. Använder alltid EL I SÖDER!",
    rating: 5,
  },
];

const Testimonials = () => {
  return (
    <section id="omdomen" className="py-16 lg:py-20 border-b border-section-border">
      <div className="container">
        <div className="text-center mb-12">
          <h2 className="text-2xl md:text-3xl font-bold mb-3">Kundomdömen</h2>
          <p className="text-muted-foreground max-w-md mx-auto">
            Se vad våra kunder säger om oss
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {testimonials.map((testimonial, index) => (
            <div
              key={testimonial.name}
              className="p-5 bg-testimonial-bg border border-section-border rounded-lg animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Stars */}
              <div className="flex gap-0.5 mb-3">
                {Array.from({ length: testimonial.rating }).map((_, i) => (
                  <Star key={i} className="h-4 w-4 fill-primary text-primary" />
                ))}
              </div>

              {/* Quote */}
              <p className="text-sm text-muted-foreground mb-4 leading-relaxed">
                "{testimonial.text}"
              </p>

              {/* Author */}
              <div>
                <p className="text-sm font-semibold">{testimonial.name}</p>
                <p className="text-xs text-muted-foreground">{testimonial.location}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
