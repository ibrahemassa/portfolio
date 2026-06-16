import { EXPERIENCE } from '../../data';
import SectionHeader from '../ui/SectionHeader';

export default function Experience() {
  return (
    <section className="experience" id="experience">
      <div className="container">
        <SectionHeader label="experience" title="Where I've Worked" />

        <div className="timeline">
          {EXPERIENCE.map((exp, i) => (
            <div
              key={exp.id}
              className="timeline-item reveal"
              style={{ animationDelay: `${i * 0.15}s` }}
            >
              <div className="exp-card">
                <div className="exp-header">
                  <span className="exp-company">{exp.company}</span>
                  <span className="exp-period">{exp.period}</span>
                </div>
                <p className="exp-role">{exp.role}</p>
                <p className="exp-description">{exp.description}</p>
                <div className="exp-tags">
                  {exp.tags.map((tag) => (
                    <span key={tag} className="exp-tag">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
