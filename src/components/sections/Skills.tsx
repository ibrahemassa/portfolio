import { SKILLS } from '../../data';
import SectionHeader from '../ui/SectionHeader';

export default function Skills() {
  return (
    <section className="skills" id="skills">
      <div className="container">
        <SectionHeader label="technical skills" title="My Toolkit" />

        <div className="skills-grid">
          {SKILLS.map((category, i) => (
            <div
              key={category.category}
              className="skill-category reveal"
              style={{ transitionDelay: `${i * 0.08}s` }}
              id={`skill-${category.category.toLowerCase().replace(/\s+/g, '-')}`}
            >
              <div className="skill-category-header">
                <span
                  className="skill-category-icon"
                  role="img"
                  aria-label={category.category}
                >
                  {category.icon}
                </span>
                <span className="skill-category-name">{category.category}</span>
              </div>
              <div className="skill-tags">
                {category.items.map((item) => (
                  <span key={item} className="skill-tag">
                    {item}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
