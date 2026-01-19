import { CheckCircle } from "lucide-react";

const features = [
  "Certifierad elektriker",
  "Lokalt förankrad i Blekinge",
  "Snabb och pålitlig service",
  "Konkurrenskraftiga priser",
];

const About = () => {
  return (
    <section id="om-oss" className="py-16 lg:py-20 border-b border-section-border bg-secondary/30">
      <div className="container">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-2xl md:text-3xl font-bold mb-4">Om EL I SÖDER</h2>
          <p className="text-muted-foreground mb-8">
            Vi är ett lokalt elföretag som brinner för kvalitet och kundnöjdhet. 
            Med gedigen erfarenhet och ett personligt bemötande ser vi till att varje jobb 
            utförs professionellt och enligt gällande säkerhetsföreskrifter.
          </p>

          <div className="grid sm:grid-cols-2 gap-3 text-left">
            {features.map((feature) => (
              <div key={feature} className="flex items-center gap-3">
                <CheckCircle className="h-5 w-5 text-primary flex-shrink-0" />
                <span className="text-sm font-medium">{feature}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
