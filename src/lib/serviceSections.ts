export type ServiceSection = {
  id: string;
  title: string;
  imageSrc: string;
  imageAlt: string;
  intro: string;
  points: string[];
  detailImages?: Array<{
    src: string;
    alt: string;
  }>;
};

export const serviceSections: ServiceSection[] = [
  {
    id: "batteri",
    title: "Batteri",
    imageSrc: "/pylontech-force-h3-30kw.webp",
    imageAlt: "Batterilösning för energilagring",
    intro:
      "Vi installerar batterilösningar som lagrar överskottsel och hjälper dig använda energi smartare över dygnet.",
    points: [
      "Dimensionering utifrån förbrukning och behov",
      "Säker installation och driftsättning",
      "Optimering för lägre effekttoppar",
      "Genomgång av app och uppföljning av prestanda",
    ],
  },
  {
    id: "energilosningar",
    title: "Energilösningar",
    imageSrc: "/Elinstallation.jpg",
    imageAlt: "Energilösningar och elinstallation",
    intro:
      "Vi hjälper dig att planera och bygga energilösningar som minskar förbrukning, jämnar ut effekttoppar och gör hemmet mer framtidssäkert.",
    points: [
      "Energigenomgång av befintlig elanläggning",
      "Förslag på smart kombination av solceller, batteri och styrning",
      "Praktiska åtgärder för lägre kostnader över tid",
      "Löpande rådgivning kring optimering och drift",
    ],
  },
  {
    id: "solceller",
    title: "Solceller",
    imageSrc: "/Solcell_installation.png",
    imageAlt: "Installation av solceller",
    intro:
      "Vi hjälper dig från planering till färdig installation av solcellssystem för villa och mindre fastigheter.",
    points: [
      "Rådgivning och projektering",
      "Montering av paneler och växelriktare",
      "Säker inkoppling i befintlig elanläggning",
      "Kontroll och genomgång efter installation",
    ],
  },
  {
    id: "smarta-hem",
    title: "Smarta hem",
    imageSrc: "/smarthome.jpg",
    imageAlt: "Smarta hem-lösningar",
    intro:
      "Vi bygger smarta lösningar för styrning av belysning, värme och energiförbrukning med fokus på enkel användning.",
    points: [
      "Styrning via mobil och schemaläggning",
      "Integration av belysning och sensorer",
      "Optimering av komfort och energiförbrukning",
      "Anpassning efter dina vardagsrutiner",
    ],
  },
  {
    id: "laddboxar",
    title: "Laddboxar",
    imageSrc: "/zaptec.jpg",
    imageAlt: "Laddbox för elbil",
    intro:
      "Vi hjälper dig med hela processen från rådgivning till färdig installation av laddlösning hemma eller i BRF.",
    points: [
      "Dimensionering efter fastighet och bil",
      "Säker installation och konfigurering",
      "Lastbalansering vid behov",
      "Genomgång av app och användning efter montage",
    ],
    detailImages: [
      {
        src: "/zaptec-pro-mid.webp",
        alt: "Zaptec Pro MID laddbox",
      },
    ],
  },
];
