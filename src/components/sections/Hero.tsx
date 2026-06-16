import { Mail, ArrowRight, FileText } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from '../../icons/BrandIcons';
import { useTypedText } from '../../hooks';

const ROLES = [
  'Backend Engineer',
  'AI/MLOps Engineer',
  'DevOps',
  'Linux Enthusiast',
];

function TerminalWidget() {
  return (
    <div className="hero-terminal" aria-hidden="true">
      <div className="terminal-titlebar">
        <span className="terminal-dot red" />
        <span className="terminal-dot yellow" />
        <span className="terminal-dot green" />
        <span className="terminal-title">~/ibrahim-faress.zsh</span>
      </div>

      <div className="terminal-line">
        <span className="terminal-prompt">❯</span>
        <span className="terminal-cmd">whoami --verbose</span>
      </div>
      <div className="terminal-line">
        <span className="terminal-out">
          <span className="terminal-key">name</span>
          {'       '}
          <span className="terminal-val">"Ibrahim Faress"</span>
        </span>
      </div>
      <div className="terminal-line">
        <span className="terminal-out">
          <span className="terminal-key">location</span>
          {'   '}
          <span className="terminal-val">"Istanbul, Türkiye 🇹🇷"</span>
        </span>
      </div>
      <div className="terminal-line">
        <span className="terminal-out">
          <span className="terminal-key">university</span>
          {' '}
          <span className="terminal-val">"Istinye University"</span>
        </span>
      </div>
      <div className="terminal-line">
        <span className="terminal-out">
          <span className="terminal-key">degree</span>
          {'       '}
          <span className="terminal-val">"B.Sc. in Software Engineering"</span>
        </span>
      </div>
      <div className="terminal-line">
        <span className="terminal-out">
          <span className="terminal-key">gpa</span>
          {'        '}
          <span className="terminal-val">3.95 / 4.00</span>
        </span>
      </div>
      <br />
      <div className="terminal-line">
        <span className="terminal-prompt">❯</span>
        <span className="terminal-cmd">cat passions.txt</span>
      </div>
      <div className="terminal-line">
        <span className="terminal-out" style={{ color: 'var(--ctp-text)' }}>
          linux, backend architecture,
        </span>
      </div>
      <div className="terminal-line">
        <span className="terminal-out" style={{ color: 'var(--ctp-text)' }}>
          ai pipelines, devops &amp; automation,
        </span>
      </div>
      <div className="terminal-line">
        <span className="terminal-out" style={{ color: 'var(--ctp-text)' }}>
          open-source everything
        </span>
      </div>
      <br />
      <div className="terminal-line">
        <span className="terminal-prompt">❯</span>
        <span className="terminal-cursor" />
      </div>
    </div>
  );
}

export default function Hero() {
  const role = useTypedText(ROLES, 65, 2400);

  const scrollTo = (id: string) =>
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });

  return (
    <section className="hero" id="hero">
      <div className="container" style={{ width: '100%', position: 'relative' }}>
        <div className="hero-content">

          <h1 className="hero-title">
            <span className="name">Ibrahim Faress</span>
            <span className="role">
              {role}
              <span className="terminal-cursor" aria-hidden="true" />
            </span>
          </h1>

          <p className="hero-subtitle">
            Building scalable backend systems,{' '}
            <span className="highlight">end-to-end AI &amp; MLOps pipelines</span>, and
            battle-tested DevOps workflows; all running on Linux, the way it should be.
          </p>

          <div className="hero-cta">
            <button
              id="view-projects-btn"
              className="btn-primary"
              onClick={() => scrollTo('projects')}
            >
              <span>View Projects</span>
              <ArrowRight size={16} />
            </button>
            <button
              id="contact-btn"
              className="btn-secondary"
              onClick={() => scrollTo('contact')}
            >
              Contact Me
            </button>
            <a
              id="resume-btn"
              href="./resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-secondary"
              style={{ display: 'inline-flex' }}
            >
              <FileText size={16} />
              Resume
            </a>
          </div>

          <div className="hero-socials">
            <span className="hero-socials-label">find me on.</span>
            <a
              id="github-link"
              href="https://github.com/ibrahemassa"
              target="_blank"
              rel="noopener noreferrer"
              className="social-icon-btn"
              aria-label="GitHub profile"
            >
              <GithubIcon size={18} />
            </a>
            <a
              id="linkedin-link"
              href="https://www.linkedin.com/in/ibrahim-faress-534b0a281/"
              target="_blank"
              rel="noopener noreferrer"
              className="social-icon-btn"
              aria-label="LinkedIn profile"
            >
              <LinkedinIcon size={18} />
            </a>
            <a
              id="email-link"
              href="mailto:ibrahem.fares204@gmail.com"
              className="social-icon-btn"
              aria-label="Send email"
            >
              <Mail size={18} />
            </a>
          </div>
        </div>

        <TerminalWidget />
      </div>
    </section>
  );
}
