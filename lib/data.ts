export type SkillCategory = {
  title: string;
  skills: string[];
};

export type ProjectItem = {
  title: string;
  description: string;
  stack: string[];
  github: string;
  demo: string;
};

export const skillCategories: SkillCategory[] = [
  {
    title: 'Frontend',
    skills: ['React', 'Next.js', 'Tailwind CSS', 'TypeScript', 'Framer Motion']
  },
  {
    title: 'Backend',
    skills: ['Node.js', 'Express', 'MongoDB', 'REST APIs', 'Authentication']
  },
  {
    title: 'AI/ML',
    skills: ['Python', 'OpenCV', 'Keras', 'Facenet', 'NLP']
  },
  {
    title: 'Tools',
    skills: ['Git', 'Vercel', 'Postman', 'GitHub Actions', 'Figma']
  }
];

export const projects: ProjectItem[] = [
  {
    title: 'Automated Attendance System using Face Recognition',
    description:
      'Real-time attendance automation using OpenCV and Keras-Facenet embeddings with KNN-based identity matching, CSV reporting, automated email dispatch, and unknown-face snapshot storage for auditability.',
    stack: ['Python', 'OpenCV', 'Keras-Facenet', 'KNN', 'SMTP'],
    github: 'https://github.com/mahithesh/face-attendance-system',
    demo: 'https://face-attendance-demo.vercel.app'
  },
  {
    title: 'Pet Product E-commerce App (React Native)',
    description:
      'Mobile commerce app featuring category-wise catalog browsing, cart and total-calculation workflow, and AsyncStorage-backed authentication for fast session continuity.',
    stack: ['React Native', 'JavaScript', 'AsyncStorage', 'Context API'],
    github: 'https://github.com/mahithesh/petstore-native-app',
    demo: 'https://petstore-native-preview.vercel.app'
  },
  {
    title: 'NLP Patent Eligibility Checker',
    description:
      'AI-assisted document intelligence concept that analyzes invention text using NLP features and predicts patent eligibility confidence for founders and innovation teams.',
    stack: ['Python', 'NLP', 'Scikit-learn', 'Classification', 'AI'],
    github: 'https://github.com/mahithesh/nlp-patent-checker',
    demo: 'https://nlp-patent-checker.vercel.app'
  }
];
