import type { ProjectItem } from "../data/projects";
import ExternalLinkIcon from "./icons/ExternalLinkIcon";

export default function ProjectCard({ project }: { project: ProjectItem }) {
  const projectContent = [
    { subtitle: "Probleem", paragraph: project.problem },
    { subtitle: "Wat ik heb ontwikkeld", paragraph: project.whatIBuilt },
    {
      subtitle: "Technische beslissingen",
      paragraph: project.technicalDecisions,
    },
    { subtitle: "Wat ik heb geleerd", paragraph: project.skillsLearned },
  ];
  return (
    <article className="project-card">
      <figure className="project-card__media">
        <picture>
          <source srcSet={project.screenshot.avif} type="image/avif" />
          <source srcSet={project.screenshot.webp} type="image/webp" />
          <img
            className="project-card__image"
            src={project.screenshot.path}
            alt={project.screenshot.alt}
            width={project.screenshot.width}
            height={project.screenshot.height}
            loading="lazy"
          />
        </picture>
        <figcaption className="project-card__caption">
          {project.screenshot.caption}
        </figcaption>
      </figure>
      <div className="project-card__content">
        <h3 className="project-card__title">
          {project.title}
          {project.status === "in opbouw" && (
            <span className="project-card__label">In opbouw</span>
          )}
        </h3>
        <p className="project-card__short-description">
          {project.shortDescription}
        </p>

        {projectContent.map((item) => {
          return (
            <div className="project-card__paragraph" key={item.subtitle}>
              <h4 className="project-card__subtitle">{item.subtitle}</h4>
              <p>{item.paragraph}</p>
            </div>
          );
        })}
        <ul className="project-card__technology-list">
          {project.technologies.map((technology) => (
            <li key={technology} className="project-card__technology">
              {technology}
            </li>
          ))}
        </ul>

        {project.links && (
          <ul className="project-card__link-list">
            {project.links?.projectLink && (
              <li className="project-card__link-item">
                <a
                  className="project-card__link"
                  href={project.links.projectLink}
                  target="_blank"
                  rel="noreferrer"
                >
                  Live site
                  <span className="sr-only">, opent in nieuw tabblad</span>
                  <ExternalLinkIcon />
                </a>
              </li>
            )}
            {project.links?.githubLink && (
              <li>
                <a
                  className="project-card__link"
                  href={project.links.githubLink}
                  target="_blank"
                  rel="noreferrer"
                >
                  GitHub
                  <span className="sr-only">, opent in nieuw tabblad</span>{" "}
                  <ExternalLinkIcon />
                </a>
              </li>
            )}
          </ul>
        )}
      </div>
    </article>
  );
}
