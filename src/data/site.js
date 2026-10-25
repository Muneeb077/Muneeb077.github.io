import profilePhoto from '../assets/ProfileImg_1.jpeg';

export const site = {
  name: "Muneeb Ur Rehman",
  role: "Software Developer",
  tagline: "I build full-stack web apps with React and Node, and data tools in Python.",
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
    heading: "I like turning messy data and rough ideas into tools people can actually use.",
    paragraphs: [
      "I studied Computer Science at Memorial University of Newfoundland and have about a year of industry experience. [Right now I'm a ___ at ___, where I ___.]",
      "Most of my side projects are full-stack JavaScript — React on the front, Node, Express and MongoDB behind it. On the data side I work in Python with Pandas and scikit-learn, from cleaning raw datasets to training and tuning models.",
    ],
  },
  experience: [
    {
      dates: "[2025 — Present]",
      title: "Software Developer",
      company: "Voronoi Health Analytics",
      bullets: [
        "[Something you shipped, and what changed because of it]",
        "[A problem you fixed or a process you improved — add a number if you have one]",
      ],
      tech: ["[Tech you used]"],
    },
    {
      dates: "[2023 — 2024]",
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
  lookingFor: "[junior / intermediate developer]",
  stack: [
    { title: "Frontend", items: ["React", "JavaScript", "Tailwind CSS", "Vite"] },
    { title: "Backend", items: ["Node.js", "Express", "Flask"] },
    { title: "Databases", items: ["MongoDB", "MySQL", "SQLite"] },
    { title: "Data & ML", items: ["Python", "Pandas", "NumPy", "SciPy", "scikit-learn", "Matplotlib"] },
  ],
};