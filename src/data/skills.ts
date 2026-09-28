interface Category {
  title: string;
  skills: string[];
}
export const categories: Category[] = [
  {
    title: "Programmeertalen",
    skills: ["HTML", "CSS", "JavaScript", "TypeScript", "SQL"],
  },
  {
    title: "Frameworks & libraries",
    skills: ["React", "React Native", "Next.js", "Express", "TanStack Query"],
  },
  {
    title: "Databases & ORM",
    skills: ["PostgreSQL", "MySQL", "SQLite", "Prisma"],
  },
  {
    title: "Tools & runtime",
    skills: ["Node.js", "Git", "GitHub", "VS Code", "Vite"],
  },
  {
    title: "Concepten",
    skills: [
      "REST APIs",
      "Responsive design",
      "Componentarchitectuur",
      "Toegankelijkheid",
    ],
  },
];
