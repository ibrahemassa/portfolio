import { Mail, MapPin } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from '../../icons/BrandIcons';

export default function Contact() {
  return (
    <section className="contact" id="contact">
      <div className="container">
        <div className="contact-inner">
          <div className="reveal">
            <p className="section-label" style={{ textAlign: 'center' }}>
              contact
            </p>
            <h2 className="contact-heading">Let's Build Something</h2>
            <p className="contact-subtext">
              I'm actively looking for new opportunities; whether it's a full-time role,
              internship, or an exciting project to collaborate on. My inbox is always open.
            </p>
          </div>

          <div className="contact-card reveal">
            <div className="contact-info-row">
              <MapPin size={16} />
              <span>Istanbul, Türkiye</span>
            </div>
            <div className="contact-info-row">
              <Mail size={16} />
              <span>ibrahem.fares204@gmail.com</span>
            </div>
            <a
              id="send-email-btn"
              href="mailto:ibrahem.fares204@gmail.com"
              className="contact-email-btn"
            >
              <Mail size={18} />
              Send an Email
            </a>
          </div>

          <div className="contact-socials reveal">
            <a
              id="contact-github"
              href="https://github.com/ibrahemassa"
              target="_blank"
              rel="noopener noreferrer"
              className="social-icon-btn"
              aria-label="GitHub"
              style={{ width: '52px', height: '52px' }}
            >
              <GithubIcon size={20} />
            </a>
            <a
              id="contact-linkedin"
              href="https://www.linkedin.com/in/ibrahim-faress-534b0a281/"
              target="_blank"
              rel="noopener noreferrer"
              className="social-icon-btn"
              aria-label="LinkedIn"
              style={{ width: '52px', height: '52px' }}
            >
              <LinkedinIcon size={20} />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
