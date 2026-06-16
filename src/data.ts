// ================================================
// Portfolio Data: Ibrahim Faress
// ================================================

export const NAV_LINKS = [
  { label: 'about',      href: '#about',      prefix: '01.' },
  { label: 'projects',   href: '#projects',   prefix: '02.' },
  { label: 'skills',     href: '#skills',     prefix: '03.' },
  { label: 'experience', href: '#experience', prefix: '04.' },
  { label: 'contact',    href: '#contact',    prefix: '05.' },
];

export const PROJECTS = [
  {
    id: 'attendify',
    title: 'Attendify',
    icon: '🎓',
    badge: 'Capstone Project',
    featured: true,
    githubUrl: 'https://github.com/ibrahemassa',
    description:
      'An intelligent, anti-cheat attendance tracking system achieving real presence validation in under 3 seconds. Built to solve the fundamental problem of proxy attendance through a triple-layer verification architecture.',
    highlights: [
      'Cryptographic time-limited tokens to stop photo-sharing cheats',
      'GPS geofencing via the Haversine formula for physical classroom presence',
      'Biometric AI face-matching using 512-dim FaceNet embeddings + pgvector cosine distance',
      'Sub-50ms vector search using HNSW indexing on PostgreSQL',
    ],
    tech: [
      'Go (Gin-Gonic)', 'FastAPI', 'DeepFace', 'React 19', 'TypeScript',
      'React Native (Expo)', 'PostgreSQL', 'pgvector', 'HNSW',
    ],
  },
  {
    id: 'mlops-housing',
    title: 'Housing Price Classification MLOps Pipeline',
    icon: '🤖',
    featured: false,
    githubUrl: 'https://github.com/ibrahemassa',
    description:
      'End-to-end Level 2 MLOps pipeline automating continuous training, monitoring, and deployment. Achieves full reproducibility with automated retraining triggers, drift detection, and a live inference API.',
    highlights: [
      'Level 2 MLOps with automated continuous training',
      'Full CI/CD pipeline with Pytest + GitHub Actions',
      'Experiment tracking with MLflow & workflow orchestration with Prefect',
      'Live inference via FastAPI + Streamlit dashboard',
    ],
    tech: ['Python', 'Prefect', 'MLflow', 'FastAPI', 'Streamlit', 'Docker', 'GitHub Actions'],
  },
  {
    id: 'study-env',
    title: 'ML Study Environment Predictor',
    icon: '📊',
    featured: false,
    githubUrl: 'https://github.com/ibrahemassa',
    description:
      'Data science project analyzing survey data from 155 students to predict ideal study environments. Achieves ~90% accuracy with a stacking ensemble integrating a custom ANN.',
    highlights: [
      'Random Forest, Gradient Boosting & custom ANN stacking ensemble',
      '~90% prediction accuracy on held-out test set',
      'Integrated into a functional web recommendation engine',
    ],
    tech: ['Python', 'scikit-learn', 'TensorFlow', 'NumPy', 'Pandas', 'Flask'],
  },
  {
    id: 'stockdolphin',
    title: 'StockDolphin: Chess Engine',
    icon: '♟️',
    featured: false,
    githubUrl: 'https://github.com/ibrahemassa',
    description:
      'A custom chess engine built in Python capable of generating and evaluating moves using a tailored static evaluation function, built from first principles with no game engine library dependencies.',
    highlights: [
      'Custom static evaluation function for position scoring',
      'Full legal move generation including edge cases',
      'Alpha-beta pruning for efficient tree search',
    ],
    tech: ['Python', 'NumPy', 'Alpha-Beta Pruning'],
  },
  {
    id: 'leettracker',
    title: 'LeetTracker',
    icon: '📈',
    featured: false,
    githubUrl: 'https://github.com/ibrahemassa',
    description:
      'Full-stack application to track and analyze LeetCode problem-solving progress. Uses a hybrid MVC/microservices architecture spanning multiple languages.',
    highlights: [
      'Hybrid MVC + microservices architecture',
      'Multi-language backend: Laravel, Python, Go',
      'Analytics dashboard with React frontend',
    ],
    tech: ['Laravel', 'Python', 'Go', 'React', 'MySQL'],
  },
];

export const EXPERIENCE = [
  {
    id: 'isu-xr',
    company: 'ISU XR Lab',
    role: 'Research Intern',
    period: '2025 – 2026',
    description:
      'Contributed to an early-stage pediatric cardiovascular anomaly detection project at Istinye University. Assisted with data processing and structural analysis pipelines for patient-specific models, with work contributing to published scientific papers on medical imaging and anomaly detection.',
    tags: ['Medical Imaging', 'Data Pipelines', 'Research', 'Scientific Publication'],
  },
  {
    id: 'scramble-bit',
    company: 'Scramble Bit',
    role: 'Web Development Intern',
    period: 'Sep 2024 – Nov 2024',
    description:
      'Assisted in the design, development, and maintenance of modern web applications. Collaborated with a cross-functional team to deliver production-ready features, improving code quality and implementing responsive UI components.',
    tags: ['Web Development', 'React', 'UI/UX', 'Team Collaboration'],
  },
];

export const SKILLS = [
  {
    category: 'Languages',
    icon: '⌨️',
    items: ['Python', 'Go', 'TypeScript', 'JavaScript', 'C', 'C++', 'SQL', 'PHP', 'Java', 'MATLAB'],
  },
  {
    category: 'Backend & APIs',
    icon: '⚙️',
    items: ['Gin-Gonic', 'FastAPI', 'Node.js', 'Express', 'Laravel', 'Flask'],
  },
  {
    category: 'AI & MLOps',
    icon: '🤖',
    items: ['MLflow', 'Prefect', 'scikit-learn', 'TensorFlow', 'DeepFace', 'RAG', 'Pandas', 'NumPy'],
  },
  {
    category: 'DevOps & CI/CD',
    icon: '🚀',
    items: ['Docker', 'GitHub Actions', 'Pytest', 'AWS', 'Git', 'Linux (Arch)'],
  },
  {
    category: 'Databases',
    icon: '🗄️',
    items: ['PostgreSQL', 'pgvector', 'HNSW indexing', 'MySQL'],
  },
  {
    category: 'Frontend',
    icon: '🎨',
    items: ['React 19', 'React Native', 'TypeScript', 'Expo', 'Vite', 'HTML5', 'CSS3'],
  },
];
