import SectionHeader from '../ui/SectionHeader';

const STATS = [
  {
    icon: '🎓',
    title: 'Istinye University, Graduated',
    body: (
      <>
        B.Sc. Software Engineering ·{' '}
        <strong style={{ color: 'var(--ctp-mauve)' }}>3.95 / 4.00 GPA</strong>
        <br />
        Minor: Electrical &amp; Electronics Engineering
      </>
    ),
  },
  {
    icon: '🐧',
    title: 'Linux Native',
    body: 'Daily driving Arch Linux + Vim. Comfort in the terminal is non-negotiable.',
  },
  {
    icon: '🤖',
    title: 'AI & MLOps Focus',
    body: 'End-to-end ML pipelines, from raw data to deployed, monitored production APIs',
  },
  {
    icon: '⚙️',
    title: 'Backend & DevOps',
    body: 'Go, Python, Docker, CI/CD, cloud infra. Shipping reliable systems that scale',
  },
];

export default function About() {
  return (
    <section className="about" id="about">
      <div className="container">
        <SectionHeader label="about me" title="The Engineer Behind the Code" />

        <div className="about-grid">
          <div className="about-text reveal">
            <p>
              I'm <strong>Ibrahim Faress</strong>, a Software Engineer who recently graduated with a{' '}
              <span className="accent">B.Sc. in Software Engineering</span> from{' '}
              <strong>Istinye University, Istanbul</strong>, finishing with a{' '}
              <span className="accent">3.95 / 4.00 GPA</span> and a minor in{' '}
              <strong>Electrical &amp; Electronics Engineering</strong>.
            </p>
            <p>
              My sweet spot sits at the intersection of{' '}
              <strong>AI/ML</strong>, <strong>backend engineering</strong>, and{' '}
              <strong>DevOps</strong>. I care about systems that are reliable, observable, and
              actually deployed; not just notebooks. That means building proper MLOps pipelines,
              designing clean APIs, and wiring everything together with solid CI/CD.
            </p>
            <p>
              I'm also a committed <span className="accent">Linux user</span>. Arch, Vim, the whole deal.
              There's something about owning your environment from the kernel up that makes
              you a better engineer. I build custom HTTP servers and train ANNs from scratch
              not because I have to, but because understanding fundamentals makes every
              abstraction more powerful.
            </p>
            <p>
              Outside of shipping code I contribute to research at the{' '}
              <span className="accent">ISU XR Lab</span>, where I've had work published in scientific
              papers; a reminder that rigorous thinking applies whether you're writing a
              Dockerfile or a research methodology.
            </p>
          </div>

          <div className="about-stats reveal">
            {STATS.map((s) => (
              <div key={s.title} className="stat-card">
                <span className="stat-icon">{s.icon}</span>
                <div className="stat-info">
                  <h4>{s.title}</h4>
                  <p>{s.body}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
