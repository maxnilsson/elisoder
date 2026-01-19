import { Zap, Battery, Sun, Wrench } from "lucide-react";

const services = [
  {
    icon: Zap,
    title: "Elinstallation",
    description: "Professionell elinstallation för hem och företag",
  },
  {
    icon: Battery,
    title: "Laddboxar",
    description: "Installation av laddboxar för elbilar",
  },
  {
    icon: Sun,
    title: "Solceller",
    description: "Montering och inkoppling av solcellsanläggningar",
  },
  {
    icon: Wrench,
    title: "Service & Underhåll",
    description: "Löpande service och felsökning",
  },
];

const Services = () => {
  return (
    <section id="tjanster" className="py-16 lg:py-20 border-b border-section-border">
      <div className="container">
        <div className="text-center mb-12">
          <h2 className="text-2xl md:text-3xl font-bold mb-3">Våra tjänster</h2>
          <p className="text-muted-foreground max-w-md mx-auto">
            Vi erbjuder kompletta ellösningar för alla behov
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {services.map((service, index) => (
            <div
              key={service.title}
              className="group p-6 border border-section-border rounded-lg hover:border-primary/50 transition-colors animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="w-10 h-10 rounded-md bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                <service.icon className="h-5 w-5 text-primary" />
              </div>
              <h3 className="font-semibold mb-2">{service.title}</h3>
              <p className="text-sm text-muted-foreground">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
