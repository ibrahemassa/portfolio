import { GithubIcon } from '../../icons/BrandIcons';
import { PROJECTS } from '../../data';
import ProjectCard from '../ui/ProjectCard';
import SectionHeader from '../ui/SectionHeader';

export default function Projects() {
  return (
    <section className="projects" id="projects">
      <div className="container">
        <SectionHeader label="featured projects" title="Things I've Built" />

        <div className="projects-grid">
          {PROJECTS.map((project, i) => (
            <ProjectCard key={project.id} project={project} delay={i * 0.1} />
          ))}
        </div>

        <div className="reveal" style={{ textAlign: 'center', marginTop: '3rem' }}>
          <a
            id="view-all-github"
            href="https://github.com/ibrahemassa"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-secondary"
            style={{ display: 'inline-flex' }}
          >
            <GithubIcon size={16} />
            View All on GitHub
          </a>
        </div>
      </div>
    </section>
  );
}
