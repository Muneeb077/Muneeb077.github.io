import profilePhoto from '../assets/ProfileImg_1.jpeg';

export const site = {
  name: "Muneeb Ur Rehman",
  role: "Software Developer",
  tagline: "Software developer in health tech. I automate testing and CI/CD in C++, and build full-stack apps with React and Node.",
  location: "St. John's, NL",
  status: "Open to new roles",        // shown with a green dot; set to null to hide
  photo: profilePhoto,
  links: {
    github: "https://github.com/Muneeb077",
    linkedin: "https://www.linkedin.com/in/muneeb130779/",
    resume: "[RESUME_URL]",          // e.g. a PDF in /public
    email: "murehman077@gmail.com",
  },
  about: {
    heading: "I like making software that people can rely on.",
    paragraphs: [
      "I studied Computer Science at Memorial University of Newfoundland and have spent the past year as a Software Developer at Voronoi Health Analytics. I started in manual testing, working through two internal releases of CAST (4.6 and 4.7) and catching crash-causing bugs before they shipped. For CAST 5.0, an external release, I moved into automation: I wrote unit and integration tests in C++ with Google Test, built them into the CI/CD pipeline, and created a bridge so other repositories could reuse the same pipeline.",
      "Outside work, I build full-stack JavaScript apps (React on the front, Node, Express and MongoDB behind it) and data tools in Python with Pandas and scikit-learn.",
    ],
  },
  experience: [
    {
      dates: "2025 — Present",
      title: "Software Developer",
      company: "Voronoi Health Analytics",
      bullets: [
        "Built the automated test suite for CAST 5.0, an external release: 50 unit tests in C++ with Google Test, plus integration tests, reaching 100% code coverage across 2 repositories.",
        "Integrated the tests into the GitLab CI pipeline, so every change is tested automatically instead of through manual test cycles.",
        "Designed a scalable pipeline bridge, now used by 2 repositories, that lets any repository adopt the same CI/CD pipeline without duplicating setup.",
        "Tested CAST 4.6 and 4.7 through to internal release, finding and reporting several crash-causing bugs.",
      ],
      tech: ["C++", "Google Test", "CMake", "GitLab CI"],
    },
    {
      dates: "2023 — 2025",
      title: "Research Assistant",
      company: "DIAG Lab",
      bullets: [
        "Conducted image inconsistency detection and data validation to enhance diagnostic reliability and workflow efficiency.",
        "Executed manual annotation and data preprocessing to improve downstream ML model accuracy.",
      ],
    },
  ],
  education: [
    {
      dates: "2022 - 2025",
      title: "B.Sc. Computer Science · Memorial University of Newfoundland",
      awards: ["Bachelor of Science - Dean's List · 2022–23, 2023–24"],
    },
  ],
  stack: [
    { title: "Frontend", items: ["React", "JavaScript", "Tailwind CSS", "Vite"] },
    { title: "Backend", items: ["Node.js", "Express", "Flask"] },
    { title: "Databases", items: ["MongoDB", "MySQL", "SQLite"] },
    { title: "Data & ML", items: ["Python", "Pandas", "NumPy", "SciPy", "scikit-learn", "Matplotlib"] },
    { title: "Testing & DevOps", items: ["C++", "Google Test", "CMake", "GitLab CI"] },
  ],
};