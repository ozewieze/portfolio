import thainookScreenshot from "../assets/thainook.png";
import beesBeesScreenshot from "../assets/bees-bees.png";
import grandLibraryScreenshot from "../assets/grand-library.png";

export type ProjectItem = {
  id: string;
  title: string;
  shortDescription: string;
  problem: string;
  whatIBuilt: string;
  technicalDecisions: string;
  technologies: string[];
  skillsLearned: string;
  screenshot: { alt: string; path: string };
  projectLink?: string;
  githubLink?: string;
};

export const projects: ProjectItem[] = [
  {
    id: "grand-library",
    title: "The Grand Library",
    shortDescription:
      "Een webapplicatie voor studenten en medewerkers van Arteveldehogeschool om een bibliotheek te raadplegen.",
    problem:
      "De opleiding Programmeren had nood aan een centrale toepassing waarin studenten de beschikbare boekencollectie kunnen doorzoeken en opvolgen, terwijl medewerkers dezelfde collectie en de uitleenadministratie kunnen beheren.",
    whatIBuilt:
      "Ik bouwde een bibliotheekapplicatie met verschillende gebruikersrollen. Bezoekers kunnen boeken zoeken en filteren, studenten kunnen een verlanglijst beheren, boeken beoordelen en uitleningen verlengen, en medewerkers kunnen de collectie, gebruikers en uitleningen beheren.",
    technicalDecisions:
      "Ik koos ervoor om zoveel mogelijk met Server Components te werken en Client Components alleen te gebruiken waar interactie dat vereiste. De applicatie werd opgebouwd rond duidelijke gebruikersrollen, zodat autorisatie niet alleen in de interface maar ook in de achterliggende logica werd gecontroleerd. Prisma werd gebruikt om de relaties tussen gebruikers, boeken, auteurs, genres, verlanglijsten en uitleningen type-safe te beheren.",
    technologies: ["Next.js", "TypeScript", "Prisma", "SQLite", "React"],
    skillsLearned:
      "Ik leerde tijdens de ontwikkeling van The Grand Library een full-stack Next.js-applicatie structureren rond gebruikersrollen en toegangsrechten. Ik deed ervaring op met relationele databanken en Prisma, server- en client components, formulieren en validatie, dynamische routing en het herbruikbaar opbouwen van componenten.",
    screenshot: {
      alt: "homepagina van de ingelogde gebruiker",
      path: grandLibraryScreenshot,
    },
  },
  {
    id: "bees-bees",
    title: "Bees Bees",
    shortDescription:
      "Een platform voor bijenhouders om bijenstanden, bijenkasten en waarnemingen te beheren.",
    problem:
      "Bijenhouders verzamelen informatie over hun bijenstanden, kasten, waarnemingen en beschikbare drachtplanten. Die gegevens zijn vaak verspreid en moeilijk met elkaar in verband te brengen. Het doel van Bees Bees was om deze informatie samen te brengen en geografische en historische gegevens overzichtelijk te maken.",
    whatIBuilt:
      "Samen met een medestudente bouwde ik een webapplicatie waarin bijenhouders bijenstanden en bijenkasten kunnen beheren en waarnemingen kunnen registreren. Het platform bevat interactieve kaarten met foerageergebieden, een drachtkalender met meer dan 60 planten en statistieken om verzamelde gegevens te analyseren.",
    technicalDecisions:
      "Ik werkte vooral aan de achterliggende structuur van de applicatie. Een belangrijke keuze was om de gegevens rond gebruikers, bijenstanden, bijenkasten, waarnemingen en planten relationeel op te bouwen met Prisma en PostgreSQL. Daarnaast zorgde ik voor authenticatie, validatie en de koppeling met externe databronnen. Zo bleef de applicatielogica gescheiden van de kaartvisualisaties en UI, waaraan mijn medestudente voornamelijk werkte.",
    technologies: [
      "Next.js",
      "TypeScript",
      "PostgreSQL",
      "Prisma",
      "NextAuth",
      "Leaflet",
      "Mapbox",
    ],
    skillsLearned:
      "Tijdens het ontwerpen van Bees Bees leerde ik hoe je een grotere full-stack applicatie opbouwt waarin een relationele database, authenticatie, API-routes en interactieve kaarten samenwerken. Daarnaast deed ik ervaring op met samenwerken aan één codebase en het integreren van externe API's.",
    screenshot: {
      alt: "het admin overzicht van de waarnemingen van de leden",
      path: beesBeesScreenshot,
    },
    projectLink: "https://platform.biodynimkers.be/",
  },
  {
    id: "thainook",
    title: "ThaiNook",
    shortDescription:
      "Een premium CEFR-gestructureerd online platform voor het leren van Thai.",
    problem:
      "Tijdens het leren van Thai merkte ik dat veel leermiddelen weinig controle geven over opbouw en herhaling. Nieuwe woorden worden vaak uitgelegd met andere onbekende woorden. Revisie is beperkt en transcriptie, vertaling en uitlegvragen vaak extra omwegen die de leerflow verstoren.",
    whatIBuilt:
      "ThaiNook is vandaag een responsieve webapplicatie in opbouw met de eerste vijf CEFR A1-dialogen, illustraties, audio, vocabulary en language notes. De combinatie van databaseregels en een gecontroleerde contentpipeline maakt de lesinhoud consistent, progressief en herbruikbaar. De volgende stap is het aanmaken van interactieve oefeningen.",
    technicalDecisions:
      "Voor ThaiNook koos ik voor een sterk gestructureerd datamodel waarin dialogen, woordenschat, uitleg en media afzonderlijk maar onderling verbonden worden opgeslagen. AI wordt gebruikt om lesinhoud en ondersteunend materiaal te genereren, maar binnen vaste CEFR-regels, woordenschatbeperkingen en een gecontroleerde contentpipeline. Veel regels rond volgorde, hergebruik en consistentie worden bovendien in de database afgedwongen. Daardoor blijft de gegenereerde inhoud controleerbaar en kan ze later hergebruikt worden voor oefeningen, revisielessen en een mobiele applicatie.",
    technologies: [
      "Next.js",
      "Supabase",
      "PostgreSQL",
      "Supabase Storage",
      "Vercel",
    ],
    skillsLearned:
      "Met ThaiNook kon ik verder oefenen met React/Next.js, Supabase en PostgreSQL, maar ik leerde vooral hoe je een schaalbare datastructuur, consistente contentregels en een volledige workflow van database tot live applicatie opzet.",
    screenshot: {
      alt: "interface van de dialoogspeler met bewegende illustraties",
      path: thainookScreenshot,
    },
    projectLink: "https://www.thainook.app/",
    githubLink: "https://github.com/ozewieze/thai-app",
  },
];
