import { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { NAV_LINKS } from '../../data';
import { useActiveSection } from '../../hooks';

export default function Nav() {
  const [menuOpen, setMenuOpen] = useState(false);
  const sectionIds = NAV_LINKS.map((l) => l.href.replace('#', ''));
  const active = useActiveSection(sectionIds);

  const scrollTo = (href: string) => {
    setMenuOpen(false);
    const id = href.replace('#', '');
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <>
      <nav className="nav">
        <div className="container nav-inner">
          <a
            className="nav-logo"
            href="#"
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          >
            <span>&gt;_</span> ibrahemassa
          </a>

          <ul className="nav-links">
            {NAV_LINKS.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  data-prefix={link.prefix}
                  style={{
                    color:
                      active === link.href.replace('#', '')
                        ? 'var(--ctp-mauve)'
                        : undefined,
                  }}
                  onClick={(e) => {
                    e.preventDefault();
                    scrollTo(link.href);
                  }}
                >
                  {link.label}
                </a>
              </li>
            ))}
            <li className="nav-cta-group">
              <a
                href="/resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="nav-cta"
              >
                resume
              </a>
              <a href="mailto:ibrahem.fares204@gmail.com" className="nav-cta">
                hire me
              </a>
            </li>
          </ul>

          <button
            id="hamburger-btn"
            className="nav-hamburger"
            aria-label="Toggle navigation menu"
            onClick={() => setMenuOpen(true)}
          >
            <Menu size={22} color="var(--ctp-text)" />
          </button>
        </div>
      </nav>

      {/* Mobile drawer */}
      <ul
        className={`nav-mobile-menu ${menuOpen ? 'open' : ''}`}
        role="dialog"
        aria-modal="true"
        aria-label="Navigation menu"
      >
        <button
          className="nav-mobile-close"
          aria-label="Close menu"
          onClick={() => setMenuOpen(false)}
        >
          <X size={28} />
        </button>
        {NAV_LINKS.map((link) => (
          <li key={link.href}>
            <a
              href={link.href}
              onClick={(e) => {
                e.preventDefault();
                scrollTo(link.href);
              }}
            >
              <span
                style={{
                  color: 'var(--ctp-mauve)',
                  marginRight: '0.5rem',
                  fontSize: '1rem',
                }}
              >
                {link.prefix}
              </span>
              {link.label}
            </a>
          </li>
        ))}
      </ul>
    </>
  );
}
