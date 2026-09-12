import type { ProjectItem } from "../data/projects";

export default function ProjectCard({ project }: { project: ProjectItem }) {
  return (
    <article className="project-card">
      <div className="project-card__media">
        <img
          className="project-card__image"
          src={project.screenshot.path}
          alt={project.screenshot.alt}
        />
        <div className="project-card__image-description">
          {project.screenshot.imageDescription}
        </div>
        <div className="project-card__label">
          {project.status === "in opbouw" && <div>In opbouw</div>}
        </div>
      </div>
      <div className="project-card__content">
        <h2 className="project-card__title">{project.title}</h2>
        <p className="project-card__short-description">
          {project.shortDescription}
        </p>
        <div className="project-card__paragraph">
          <h3 className="project-card__subtitle">The problem</h3>
          <p>{project.problem}</p>
        </div>
        <div className="project-card__paragraph">
          <h3 className="project-card__subtitle">What I built</h3>
          <p>{project.whatIBuilt}</p>
        </div>

        <div className="project-card__paragraph">
          <h3 className="project-card__subtitle">Technical decisions</h3>
          <p>{project.technicalDecisions}</p>
        </div>
        <div className="project-card__paragraph">
          <h3 className="project-card__subtitle">What I learned</h3>
          <p>{project.skillsLearned}</p>
        </div>
        <ul className="project-card__list">
          {project.technologies.map((technology) => (
            <li className="project-card__technology">{technology}</li>
          ))}
        </ul>

        {project.links && (
          <ul>
            {project.links.projectLink && (
              <li>
                <a>{project.links.projectLink}</a>
              </li>
            )}
            {project.links.githubLink && (
              <li>
                <a>{project.links.githubLink}</a>
              </li>
            )}
          </ul>
        )}
      </div>
    </article>
  );
}
