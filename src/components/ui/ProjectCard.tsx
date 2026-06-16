import { ExternalLink } from 'lucide-react';
import { GithubIcon } from '../../icons/BrandIcons';
import { PROJECTS } from '../../data';

type Project = typeof PROJECTS[0];

interface ProjectCardProps {
  project: Project;
  delay: number;
}

export default function ProjectCard({ project, delay }: ProjectCardProps) {
  return (
    <article
      className={`project-card reveal ${project.featured ? 'featured' : ''}`}
      style={{ transitionDelay: `${delay}s` }}
      id={`project-${project.id}`}
    >
      <div className="project-card-header">
        <span className="project-icon" role="img" aria-label={project.title}>
          {project.icon}
        </span>
        <div className="project-links">
          <a
            href={project.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="project-link"
            aria-label={`View ${project.title} on GitHub`}
          >
            <GithubIcon size={15} />
          </a>
          <a
            href={project.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="project-link"
            aria-label={`Open ${project.title}`}
          >
            <ExternalLink size={15} />
          </a>
        </div>
      </div>

      {project.badge && (
        <span className="project-badge">⭐ {project.badge}</span>
      )}

      <h3 className="project-title">{project.title}</h3>
      <p className="project-description">{project.description}</p>

      {project.highlights && (
        <ul className="project-highlights" aria-label="Key features">
          {project.highlights.map((h) => (
            <li key={h}>{h}</li>
          ))}
        </ul>
      )}

      <div className="project-tech" aria-label="Technologies used">
        {project.tech.map((t) => (
          <span key={t} className="tech-tag">{t}</span>
        ))}
      </div>
    </article>
  );
}
