import thainookScreenshot from "../assets/thainook.png";
import thainookScreenshotAvif from "../assets/thainook.avif";
import thainookScreenshotWebp from "../assets/thainook.webp";
import beesBeesScreenshot from "../assets/bees-bees.png";
import beesBeesScreenshotAvif from "../assets/bees-bees.avif";
import beesBeesScreenshotWebp from "../assets/bees-bees.webp";
import grandLibraryScreenshot from "../assets/grand-library.png";
import grandLibraryScreenshotAvif from "../assets/grand-library.avif";
import grandLibraryScreenshotWebp from "../assets/grand-library.webp";

export type ProjectItem = {
  id: string;
  title: string;
  shortDescription: string;
  problem: string;
  whatIBuilt: string;
  technicalDecisions: string;
  technologies: string[];
  skillsLearned: string;
  screenshot: {
    alt: string;
    caption: string;
    path: string;
    avif: string;
    webp: string;
    width: number;
    height: number;
  };
  links?: {
    projectLink?: string;
    githubLink?: string;
  };
  status: "afgewerkt" | "in opbouw";
};

export const projects: ProjectItem[] = [
  {
    id: "bees-bees",
    title: "Bees Bees",
    shortDescription:
      "Een platform voor bijenhouders om bijenstanden, bijenkasten en waarnemingen te beheren.",
    problem:
      "Informatie over bijenstanden, kasten, waarnemingen en drachtplanten is vaak verspreid. Bees Bees brengt die gegevens samen in één overzichtelijk platform.",
    whatIBuilt:
      "Samen met een medestudente bouwde ik een webapp met beheer van bijenstanden en kasten, waarnemingen, interactieve kaarten, een drachtkalender en statistieken.",
    technicalDecisions:
      "Ik werkte vooral aan de achterliggende structuur: een relationeel datamodel met Prisma en PostgreSQL, authenticatie, validatie en koppelingen met externe databronnen.",
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
      "Ik leerde hoe database, authenticatie, API-routes en kaartfunctionaliteit samenkomen in een grotere full-stack applicatie, en deed ervaring op met samenwerken aan één codebase.",
    screenshot: {
      alt: "Adminoverzicht van de waarnemingen van de leden",
      caption: "Adminoverzicht van de waarnemingen door de leden",
      path: beesBeesScreenshot,
      avif: beesBeesScreenshotAvif,
      webp: beesBeesScreenshotWebp,
      width: 797,
      height: 862,
    },
    links: {
      projectLink: "https://platform.biodynimkers.be/",
    },
    status: "afgewerkt",
  },

  {
    id: "thainook",
    title: "ThaiNook",
    shortDescription:
      "Een CEFR-gestructureerd platform voor het leren van Thai.",
    problem:
      "Veel Thaileermiddelen bouwen woordenschat en herhaling weinig gecontroleerd op. ThaiNook wil lessen progressief, voorspelbaar en makkelijk herhaalbaar maken.",
    whatIBuilt:
      "Ik bouw een responsieve leerapp met CEFR A1-dialogen, illustraties, audio, woordenschat en language notes. De volgende stap is interactieve oefencontent.",
    technicalDecisions:
      "ThaiNook gebruikt een gestructureerd datamodel en gecontroleerde contentpipeline. AI ondersteunt de contentgeneratie, terwijl CEFR- en databaseregels opbouw, woordenschat en consistentie bewaken.",
    technologies: [
      "Next.js",
      "Supabase",
      "PostgreSQL",
      "Supabase Storage",
      "Vercel",
    ],
    skillsLearned:
      "Ik oefende verder met React/Next.js, Supabase en PostgreSQL en leerde vooral hoe je gestructureerde content van database tot live applicatie organiseert.",
    screenshot: {
      alt: "Dialoogspeler met bewegende illustraties",
      caption: "Dialoogspeler met bewegende illustraties",
      path: thainookScreenshot,
      avif: thainookScreenshotAvif,
      webp: thainookScreenshotWebp,
      width: 786,
      height: 852,
    },
    links: {
      projectLink: "https://www.thainook.app/",
      githubLink: "https://github.com/ozewieze/thai-app",
    },
    status: "in opbouw",
  },

  {
    id: "grand-library",
    title: "The Grand Library",
    shortDescription:
      "Een bibliotheekapplicatie voor studenten en medewerkers van Arteveldehogeschool.",
    problem:
      "Er was nood aan één toepassing waarin studenten de boekencollectie kunnen raadplegen en medewerkers de collectie en uitleningen kunnen beheren.",
    whatIBuilt:
      "Ik bouwde een bibliotheekapp met verschillende gebruikersrollen, zoek- en filterfuncties, verlanglijsten, beoordelingen, uitleningen en beheerfunctionaliteit.",
    technicalDecisions:
      "Ik gebruikte zoveel mogelijk Server Components en Client Components alleen waar interactie nodig was. Rollen en autorisatie werden ook in de achterliggende logica afgedwongen.",
    technologies: ["Next.js", "TypeScript", "Prisma", "SQLite", "React"],
    skillsLearned:
      "Ik leerde een full-stack Next.js-app structureren rond gebruikersrollen, relationele data, formulieren, validatie, dynamische routing en herbruikbare componenten.",
    screenshot: {
      alt: "Filteropdracht op de homepagina",
      caption: "Filteropdracht op de homepagina",
      path: grandLibraryScreenshot,
      avif: grandLibraryScreenshotAvif,
      webp: grandLibraryScreenshotWebp,
      width: 807,
      height: 855,
    },
    status: "afgewerkt",
  },
];
