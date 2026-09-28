import { projects } from "../data/projects.ts";
import ProjectCard from "./ProjectCard.tsx";

export default function Projects() {
  return (
    <section className="projects" id="projects">
      <div className="container">
        <h2 className="projects__title">Geselecteerde projecten</h2>
        <div className="projects__list">
          {projects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
}
