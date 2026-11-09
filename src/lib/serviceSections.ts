export type ServiceSection = {
  id: string;
  title: string;
  seoTitle: string;
  seoDescription: string;
  taxDeduction: string;
  imageSrc: string;
  imageAlt: string;
  intro: string;
  details: string[];
  points: string[];
  faqs: Array<{
    question: string;
    answer: string;
  }>;
  detailImages?: Array<{
    src: string;
    alt: string;
  }>;
};

export const serviceSections: ServiceSection[] = [
  {
    id: "batteri",
    title: "Batteri",
    seoTitle: "Batterilagring för solceller i Karlskrona & Blekinge",
    seoDescription:
      "Installera hemmabatteri och batterilagring i Karlskrona, Nättraby och Blekinge. Kapa effekttoppar, lagra solel och få upp till 50 % Grön Teknik-avdrag.",
    taxDeduction: "Upp till 50 % Grön Teknik-avdrag direkt på fakturan",
    imageSrc: "/pylontech-force-h3-30kw.webp",
    imageAlt: "Batterilösning för energilagring i Karlskrona och Blekinge",
    intro:
      "Vi installerar batterilösningar som lagrar överskottsel och hjälper dig använda energi smartare över dygnet.",
    details: [
      "Med ett modernt hemmabatteri kan du lagra solel som produceras under dagen och använda den på kvällen när elpriset är som högst, eller ladda batteriet under billiga nattimmar. Dessutom hjälper batteriet till att kapa dyra effekttoppar i elnätet.",
      "El i Söder hjälper villaägare, lantbruk och företag i Karlskrona, Nättraby och hela Blekinge med komplett installation, säker inkoppling och smart styrning anpassad efter din fastighet.",
    ],
    points: [
      "Dimensionering utifrån förbrukning och behov",
      "Säker installation och driftsättning av behörig elektriker",
      "Optimering för lägre effekttoppar och elpriser",
      "Genomgång av app och uppföljning av prestanda",
    ],
    faqs: [
      {
        question: "Får man Grön Teknik-avdrag vid installation av batteri?",
        answer:
          "Ja, vid installation av system för lagring av egenproducerad el har du som privatperson rätt till 50 % skattereduktion för Grön Teknik på både arbete och material. Vi drar av det direkt på fakturan.",
      },
      {
        question: "Hur stort batteri behöver min villa?",
        answer:
          "Det beror på din årsförbrukning, storleken på din solcellsanläggning och hur dina effekttoppar ser ut. Vanligtvis väljer villaägare mellan 10 kWh och 30 kWh. Vi hjälper dig att räkna på rätt storlek kostnadsfritt.",
      },
    ],
  },
  {
    id: "energilosningar",
    title: "Energilösningar",
    seoTitle: "Elinstallation & Energilösningar i Karlskrona & Blekinge",
    seoDescription:
      "Behörig elektriker för elinstallation, elcentralbyte, felsökning och smarta energilösningar i Karlskrona, Nättraby och Blekinge. 30 % ROT-avdrag på arbetet.",
    taxDeduction: "30 % ROT-avdrag på arbetskostnaden direkt på fakturan",
    imageSrc: "/Elinstallation.jpg",
    imageAlt: "Energilösningar och elinstallation i Blekinge",
    intro:
      "Vi hjälper dig att planera och bygga energilösningar och elinstallationer som minskar förbrukning, jämnar ut effekttoppar och gör hemmet mer framtidssäkert.",
    details: [
      "Oavsett om du ska renovera kök och badrum, byta ut en äldre elcentral till automatsäkringar och jordfelsbrytare, eller vill energieffektivisera hela fastigheten tar vi hand om elarbetet tryggt och fackmannamässigt.",
      "Vi analyserar din befintliga elanläggning och föreslår åtgärder som ger lägre driftkostnad, högre elsäkerhet och förbereder huset för framtidens energibehov med solceller, batteri och elbilsladdning.",
    ],
    points: [
      "Energigenomgång och elservice av befintlig elanläggning",
      "Elcentralbyte, jordfelsbrytare, belysning och nyinstallation",
      "Förslag på smart kombination av solceller, batteri och styrning",
      "Praktiska åtgärder för lägre elkostnader över tid",
    ],
    faqs: [
      {
        question: "Utför ni även vanliga elinstallationer och felsökning?",
        answer:
          "Ja! Vi utför alla typer av elinstallationer för privatpersoner och företag i Karlskrona med omnejd – från byte av elcentral, uttag och belysning till köksrenoveringar och felsökning.",
      },
      {
        question: "Gäller ROT-avdraget på elinstallationer?",
        answer:
          "Ja, du får 30 % ROT-avdrag på arbetskostnaden vid elarbeten i din bostad. Vi sköter hela ansökan hos Skatteverket och drar av beloppet direkt på din faktura.",
      },
    ],
  },
  {
    id: "solceller",
    title: "Solceller",
    seoTitle: "Installera solceller i Karlskrona & Blekinge",
    seoDescription:
      "Nyckelfärdig installation av solceller för villa, BRF och företag i Karlskrona, Nättraby och Blekinge. Behörig elektriker och Grön Teknik-avdrag. Begär offert!",
    taxDeduction: "Grön Teknik-avdrag direkt på fakturan vid nyckelfärdig installation",
    imageSrc: "/Solcell_installation.png",
    imageAlt: "Installation av solceller i Karlskrona och Blekinge",
    intro:
      "Vi hjälper dig från planering till färdig installation av solcellssystem för villa och mindre fastigheter.",
    details: [
      "Att investera i solceller i södra Sverige och Blekinge ger mycket god solinstrålning under stor del av året. Du producerar din egen förnybara el, sänker dina löpande elkostnader och höjer samtidigt värdet på din fastighet.",
      "Som registrerat elföretag hos Elsäkerhetsverket ansvarar vi för hela kedjan: dimensionering efter ditt tak, säker montering av paneler och växelriktare, för- och färdiganmälan till nätägaren samt noggrann driftsättning.",
    ],
    points: [
      "Kostnadsfri rådgivning, takanalys och projektering",
      "Montering av kvalitativa solpaneler och växelriktare",
      "Säker inkoppling i befintlig elanläggning och nätanmälan",
      "Fullständig kontroll och genomgång av app efter installation",
    ],
    faqs: [
      {
        question: "Sköter ni kontakten med elnätsbolaget?",
        answer:
          "Ja, vi tar hand om både föranmälan och färdiganmälan till ditt lokala elnätsbolag (t.ex. Affärsverken eller E.ON) så att din anläggning blir godkänd för att mata ut el på nätet.",
      },
      {
        question: "Kan solcellerna förberedas för batteri direkt?",
        answer:
          "Absolut. Vi installerar gärna en hybridväxelriktare direkt från start, vilket gör det enkelt och kostnadseffektivt att koppla in ett batteri antingen direkt eller vid ett senare tillfälle.",
      },
    ],
  },
  {
    id: "smarta-hem",
    title: "Smarta hem",
    seoTitle: "Smarta hem & Plejd-installation i Karlskrona & Blekinge",
    seoDescription:
      "Styr belysning, värme och energi via mobilen. Vi installerar Plejd och smarta hem-lösningar i Karlskrona, Nättraby och Blekinge. 30 % ROT-avdrag.",
    taxDeduction: "30 % ROT-avdrag på arbetskostnaden direkt på fakturan",
    imageSrc: "/smarthome.jpg",
    imageAlt: "Smarta hem-lösningar och belysningsstyrning",
    intro:
      "Vi bygger smarta lösningar för styrning av belysning, värme och energiförbrukning med fokus på enkel användning.",
    details: [
      "Med smart styrning (exempelvis Plejd) kan du enkelt schemalägga utomhusbelysning efter solens upp- och nedgång, dimra rum via mobilen eller vanliga strömbrytare och skapa scenarier som ”Godnatt” eller ”Borta”.",
      "Du behöver inte dra om all el i huset – smarta puckar monteras diskret bakom dina befintliga strömbrytare och ger dig full kontroll direkt i telefonen samtidigt som du sparar energi.",
    ],
    points: [
      "Styrning via mobil och automatisk astro-schemaläggning",
      "Smidig installation av Plejd och smarta dimmers bakom befintliga knappar",
      "Optimering av komfort, säkerhet och energiförbrukning",
      "Anpassning och programmering efter dina vardagsrutiner",
    ],
    faqs: [
      {
        question: "Fungerar mina vanliga lampknappar som vanligt med Plejd?",
        answer:
          "Ja! Dina strömbrytare på väggen fungerar precis som vanligt, men du får dessutom möjligheten att dimra, tidsinställa och styra allt i appen.",
      },
      {
        question: "Kan man börja i liten skala och bygga ut senare?",
        answer:
          "Ja, många börjar med fasadbelysning, vardagsrum eller kök och bygger enkelt på med fler rum efter hand.",
      },
    ],
  },
  {
    id: "laddboxar",
    title: "Laddboxar",
    seoTitle: "Installera laddbox i Karlskrona & Blekinge (50 % Grön Teknik)",
    seoDescription:
      "Säker installation av laddbox (t.ex. Zaptec) med dynamisk lastbalansering i Karlskrona, Nättraby och Blekinge. 50 % Grön Teknik-avdrag direkt på fakturan!",
    taxDeduction: "50 % Grön Teknik-avdrag på både laddbox och installation",
    imageSrc: "/zaptec.jpg",
    imageAlt: "Laddbox för elbil installerad av El i Söder",
    intro:
      "Vi hjälper dig med hela processen från rådgivning till färdig installation av laddlösning hemma eller i BRF.",
    details: [
      "Att ladda elbilen eller laddhybriden via en godkänd laddbox är en självklarhet för både brandsäkerhet och laddhastighet. Med dynamisk lastbalansering anpassas laddningen automatiskt efter husets övriga elförbrukning så att huvudsäkringen aldrig löser ut.",
      "Vi installerar marknadsledande och framtidssäkra laddboxar (som Zaptec Go och Zaptec Pro) för både villor, bostadsrättsföreningar och företag i Karlskrona, Nättraby och hela Blekinge – med 50 % skattereduktion för Grön Teknik direkt på fakturan.",
    ],
    points: [
      "Dimensionering efter fastighet, huvudsäkring och bil",
      "Säker installation och konfigurering av behörig elektriker",
      "Dynamisk lastbalansering som skyddar dina huvudsäkringar",
      "Genomgång av app, RFID och smart styrning efter montage",
    ],
    faqs: [
      {
        question: "Hur fungerar 50 % Grön Teknik-avdrag för laddbox?",
        answer:
          "När du köper både laddbox och installation av oss drar vi av 50 % av totalkostnaden (arbete och material, inklusive lastbalansering) direkt på fakturan via Skatteverkets avdrag för Grön Teknik.",
      },
      {
        question: "Behöver jag lastbalansering till min laddbox?",
        answer:
          "Vi rekommenderar alltid dynamisk lastbalansering. Den känner av hur mycket el huset förbrukar i realtid (t.ex. när spis och värmepump går) och justerar bilens laddning automatiskt så att huvudsäkringen inte går.",
      },
    ],
    detailImages: [
      {
        src: "/zaptec-pro-mid.webp",
        alt: "Zaptec Pro MID laddbox för villa, BRF och företag",
      },
    ],
  },
];
