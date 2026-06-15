/**
 * ============================================================================
 *  portfolioData.js — THE SINGLE SOURCE OF TRUTH FOR YOUR WHOLE WEBSITE
 * ============================================================================
 *
 * Edit ANY content on your site by changing this one file.
 * Every section reads from the arrays/objects below.
 *
 * Image rule:
 * Put all image files inside public/assets/images/
 * Then use imagePath("your-image-name.jpg")
 * ============================================================================
 */

const imagePath = (fileName) =>
  `${import.meta.env.BASE_URL}assets/images/${fileName}`;

/* ------------------------------------------------------------------ */
/*  1. HERO                                                           */
/* ------------------------------------------------------------------ */
export const heroData = {
  name: "Omar Faruque",
  title: "Electrical & Electronic Engineering\nIslamic University, Bangladesh",
  tagline:
    "Researching lithium-ion battery technology and renewable energy to build sustainable, community-focused engineering solutions.",

  profileImage: imagePath("profile.jpg.jpg"),

  status: "Open to research collaborations",

  ctaButtons: [
    { label: "View Projects", scrollTo: "research", primary: true },
    { label: "View Research", scrollTo: "research", primary: false },
    { label: "Contact Me", scrollTo: "contact", primary: false },
  ],

  stats: [
    { value: "EEE", label: "Major Discipline" },
    { value: "Li-ion", label: "Core Research" },
    { value: "BMS", label: "Applied Focus" },
  ],
};

/* ------------------------------------------------------------------ */
/*  2. ABOUT                                                          */
/* ------------------------------------------------------------------ */
export const aboutData = {
  heading: "About Me",

  paragraphs: [
    "As an Electrical and Electronic Engineering undergraduate at Islamic University, Bangladesh, my focus is on keeping lithium-ion batteries safe, cool, and reliable. My current research investigates PCM-based thermal management of Li-ion battery packs, using COMSOL Multiphysics to simulate heat generation, thermal distribution, and composite PCM cooling behavior under real operating conditions.",

    "For the past three years, I have been working in the Materials Science Laboratory at Islamic University, where I have developed my research foundation in battery materials, energy storage, and simulation-based analysis.",

    "Beyond academic research, I am working as a BMS and Battery Pack Testing Intern, gaining hands-on experience with 4S, 16S, and 32S BMS configurations, battery pack testing, PCB-related work, pack monitoring, and performance analysis.",

    "I am proficient with tools such as COMSOL Multiphysics, MATLAB, Python, C/C++, Proteus, Multisim, and EasyEDA, with hands-on experience in microcontroller programming, circuit simulation, and Li-ion battery modeling. Currently, I am actively seeking fully funded graduate study and scholarship opportunities in battery thermal management, BMS, or EV energy storage, where I can contribute to safer and smarter battery technologies while continuously expanding my research knowledge, technical skills, and practical engineering experience.",
  ],

  image: imagePath("WhatsApp Image 2026-06-15 at 4.29.13 PM.jpeg"),

  infoCards: [
    { label: "Department", value: "Electrical & Electronic Engineering" },
    { label: "University", value: "Islamic University, Bangladesh" },
    { label: "Research Focus", value: "Li-ion Battery Research" },
    { label: "Thermal Management", value: "PCM-Based Battery Cooling" },
    { label: "Simulation", value: "COMSOL Multiphysics" },
    { label: "Practical Experience", value: "BMS & Battery Pack Testing" },
    { label: "EV Focus", value: "EV Batteries" },
    { label: "Technical Skills", value: "Embedded Systems & PCB" },
  ],
};

/* ------------------------------------------------------------------ */
/*  3. DYNAMIC HIGHLIGHTS                                             */
/* ------------------------------------------------------------------ */
export const highlightSections = [
  {
    id: "hl-1",
    title: "Battery Thermal Management Research",
    subtitle: "PCM-Based Li-ion Battery Pack Cooling",
    description:
      "Investigating phase change material based thermal management systems for lithium-ion battery packs. The work focuses on heat generation, temperature distribution, and composite PCM cooling behavior under real operating conditions.",
    image: imagePath("Battery Pack.jpg"),
    buttonText: "Explore Research",
    buttonLink: "#research",
    tags: ["Li-ion", "PCM", "Thermal Management"],
  },
  {
    id: "hl-2",
    title: "BMS & Battery Pack Testing",
    subtitle: "Practical Energy Storage Engineering",
    description:
      "Gaining hands-on experience with 4S, 16S, and 32S BMS configurations, battery pack testing, PCB-related work, pack monitoring, and performance analysis for safer battery systems.",
    image: imagePath("pcb-2.png"),
    buttonText: "See Projects",
    buttonLink: "#research",
    tags: ["BMS", "Battery Pack", "Testing"],
  },
  {
  id: "hl-3",
  title: "For The Light — Solar Guardian Lantern",
  subtitle: "Disaster Response & Smart Safety System",
  description:
    "Developing a solar-powered emergency lantern that works as both a sustainable lighting solution and an intelligent rescue system. The device integrates solar charging, Li-ion battery storage, LED lighting, GPS/GSM communication, and sensor-based SOS alerts for disaster-prone and off-grid communities.",
  image: imagePath("ph-img-20.webp"),
  buttonText: "See Project",
  buttonLink: "#research",
  tags: ["Solar Lantern", "SOS System", "GPS/GSM", "Disaster Response"],
},
  {
  id: "hl-4",
  title: "COMSOL Battery Thermal Runaway Simulation",
  subtitle: "Multiphysics Modeling of Li-ion Battery Safety",
  description:
    "Simulating lithium-ion battery thermal runaway behavior in COMSOL Multiphysics using heat transfer, reaction heat generation, and temperature evolution models. The work focuses on pouch cell thermal safety, Heat-Wait-Seek abuse conditions, decomposition heat sources, and temperature rise prediction under worst-case operating scenarios.",
  image: imagePath("1779636174191.jpg"),
  buttonText: "Explore Simulation",
  buttonLink: "#research",
  tags: ["COMSOL", "Thermal Runaway", "Li-ion Safety", "HWS Test"],
},
];

/* ------------------------------------------------------------------ */
/*  4. GALLERY                                                        */
/* ------------------------------------------------------------------ */
export const galleryCategories = [
  "Research",
  "Project",
  "Award",
  "Event",
  "Workshop",
  "Presentation",
];

export const galleryItems = [
  {
    id: "g-1",
    title: "Battery Cell Testing",
    description: "Characterising charge-discharge cycles in the lab.",
    category: "Research",
    date: "2025",
    image: imagePath("gallery-1.jpg"),
    link: "",
  },
  {
    id: "g-2",
    title: "Battery Pack Work",
    description: "Hands-on work with BMS configuration and pack monitoring.",
    category: "Project",
    date: "2025",
    image: imagePath("gallery-2.jpg"),
    link: "",
  },
  {
    id: "g-3",
    title: "Research Presentation",
    description: "Presenting research work on battery thermal management.",
    category: "Presentation",
    date: "2024",
    image: imagePath("gallery-3.jpg"),
    link: "",
  },
  {
    id: "g-4",
    title: "Engineering Workshop",
    description: "Hands-on embedded systems and circuit training session.",
    category: "Workshop",
    date: "2024",
    image: imagePath("gallery-4.jpg"),
    link: "",
  },
  {
    id: "g-5",
    title: "Materials Science Laboratory",
    description:
      "Research foundation in battery materials and simulation-based analysis.",
    category: "Research",
    date: "2025",
    image: imagePath("gallery-5.jpg"),
    link: "",
  },
  {
    id: "g-6",
    title: "Academic Recognition",
    description: "Recognition for academic and research contribution.",
    category: "Award",
    date: "2024",
    image: imagePath("gallery-6.jpg"),
    link: "",
  },
];

/* ------------------------------------------------------------------ */
/*  5. RESEARCH / THESIS / PROJECTS                                   */
/* ------------------------------------------------------------------ */
export const researchProjects = [
  {
    id: "rp-1",
    title: "PCM-Based Thermal Management of Li-ion Battery Packs",
    category: "Research",
    status: "Ongoing",
    summary:
      "Investigating PCM-based cooling strategies to improve lithium-ion battery safety, temperature control, and reliability.",
    description:
      "This research focuses on phase change material based thermal management of lithium-ion battery packs. COMSOL Multiphysics is used to simulate heat generation, thermal distribution, and composite PCM cooling behavior under real operating conditions.",
    problem:
      "Lithium-ion battery packs can experience excessive heat generation and uneven temperature distribution, which may reduce performance, shorten life, and create safety risks.",
    objective:
      "Develop and analyze PCM-based cooling strategies to keep battery packs safe, cool, and reliable during operation.",
    methodology:
      "COMSOL Multiphysics simulation is used to model heat generation, temperature distribution, and thermal behavior of composite PCM around Li-ion battery cells.",
    tools: [
      "COMSOL Multiphysics",
      "MATLAB",
      "Li-ion Battery Modeling",
      "Thermal Simulation",
    ],
    results:
      "The study aims to identify effective PCM cooling behavior and improve thermal stability for safer battery pack operation.",
    image: imagePath("graph.jpg"),
    tags: ["Li-ion", "PCM", "COMSOL", "Thermal Management"],
    links: [],
  },
  {
    id: "rp-2",
    title: "BMS & Battery Pack Testing",
    category: "Project",
    status: "Ongoing",
    summary:
      "Hands-on work with BMS configurations, pack testing, PCB-related tasks, monitoring, and performance analysis.",
    description:
      "This work involves practical battery pack testing and BMS-related tasks, including 4S, 16S, and 32S BMS configurations, PCB-related work, pack monitoring, and performance analysis.",
    problem:
      "Reliable battery packs require proper monitoring, balancing, safety protection, and performance evaluation through practical testing.",
    objective:
      "Gain hands-on expertise in BMS configuration, battery pack testing, and performance monitoring for safer energy storage systems.",
    methodology:
      "Battery packs are tested and monitored using BMS configurations and practical performance analysis methods.",
    tools: ["4S BMS", "16S BMS", "32S BMS", "PCB Work", "Pack Monitoring"],
    results:
      "Developing practical experience in battery pack safety, monitoring, and testing for real engineering applications.",
    image: imagePath("research-lantern.jpg"),
    tags: ["BMS", "Battery Pack", "Testing", "PCB"],
    links: [],
  },
  {
    id: "rp-3",
    title: "Embedded Systems and Circuit Simulation Projects",
    category: "Project",
    status: "Completed",
    summary:
      "Practical engineering work using microcontrollers, circuit simulation, and programming tools.",
    description:
      "This project area includes microcontroller programming, circuit simulation, and electronics design using tools such as Proteus, Multisim, EasyEDA, C/C++, Python, and MATLAB.",
    problem:
      "Practical engineering solutions require strong integration between circuit design, embedded programming, and simulation-based validation.",
    objective:
      "Build practical skills in embedded systems, circuit simulation, and electronics prototyping.",
    methodology:
      "Microcontroller programming, circuit simulation, PCB-related design work, and analysis using engineering software tools.",
    tools: ["C/C++", "Python", "Proteus", "Multisim", "EasyEDA", "MATLAB"],
    results:
      "Hands-on experience in microcontroller programming, circuit simulation, and electronics design workflows.",
    image: imagePath("research-solpe.jpg"),
    tags: ["Embedded Systems", "Circuit Simulation", "Programming"],
    links: [],
  },
];

/* ------------------------------------------------------------------ */
/*  6. HONOURS / AWARDS / CERTIFICATES                                */
/* ------------------------------------------------------------------ */
export const awardsCertificates = [
  {
    id: "aw-1",
    title: "Academic Excellence Recognition",
    organization: "Islamic University, Bangladesh",
    date: "2024",
    category: "Award",
    description:
      "Recognised for strong academic performance and contribution to departmental research activity.",
    image: imagePath("award-1.jpg"),
    link: "",
  },
  {
    id: "aw-2",
    title: "Embedded Systems & IoT Workshop",
    organization: "Engineering Skills Program",
    date: "2024",
    category: "Workshop",
    description:
      "Completed hands-on training in microcontroller programming, sensor integration, and IoT communication.",
    image: imagePath("award-2.jpg"),
    link: "",
  },
  {
    id: "aw-3",
    title: "Battery Pack Testing Experience",
    organization: "BMS & Battery Pack Testing Internship",
    date: "2025",
    category: "Internship",
    description:
      "Gaining practical experience with BMS configurations, battery pack testing, PCB-related work, pack monitoring, and performance analysis.",
    image: imagePath("award-3.jpg"),
    link: "",
  },
];

/* ------------------------------------------------------------------ */
/*  7. SKILLS                                                         */
/* ------------------------------------------------------------------ */
export const skills = [
  {
    category: "Battery Thermal Management",
    items: [
      { name: "PCM-Based Cooling", level: 85 },
      { name: "Li-ion Battery Pack Thermal Analysis", level: 82 },
      { name: "Heat Generation Simulation", level: 80 },
    ],
  },
  {
    category: "Simulation Tools",
    items: [
      { name: "COMSOL Multiphysics", level: 85 },
      { name: "MATLAB / Simulink", level: 78 },
      { name: "Li-ion Battery Modeling", level: 78 },
    ],
  },
  {
    category: "BMS & Battery Pack Testing",
    items: [
      { name: "4S / 16S / 32S BMS Configuration", level: 80 },
      { name: "Battery Pack Testing", level: 82 },
      { name: "Pack Monitoring & Performance Analysis", level: 78 },
    ],
  },
  {
    category: "Programming",
    items: [
      { name: "Python", level: 75 },
      { name: "C / C++", level: 80 },
      { name: "Microcontroller Programming", level: 78 },
    ],
  },
  {
    category: "Circuit & PCB Tools",
    items: [
      { name: "Proteus", level: 78 },
      { name: "Multisim", level: 74 },
      { name: "EasyEDA", level: 76 },
    ],
  },
  {
    category: "Research & Writing",
    items: [
      { name: "Technical Writing", level: 80 },
      { name: "Simulation-Based Analysis", level: 82 },
      { name: "Data Analysis", level: 76 },
    ],
  },
];

/* ------------------------------------------------------------------ */
/*  8. EDUCATION                                                      */
/* ------------------------------------------------------------------ */
export const education = [
  {
    id: "ed-1",
    title: "B.Sc. in Electrical & Electronic Engineering",
    institution: "Islamic University, Bangladesh",
    date: "Ongoing",
    description:
      "Undergraduate study focused on electrical and electronic engineering, with research interests in lithium-ion battery thermal management, BMS, and EV energy storage.",
    tags: ["EEE", "Battery", "Research"],
    link: "",
  },
  {
    id: "ed-2",
    title: "Higher Secondary Certificate (Science)",
    institution: "College",
    date: "Completed",
    description:
      "Foundation in physics, chemistry, and mathematics that shaped an early interest in energy and electronics.",
    tags: ["Science"],
    link: "",
  },
];

/* ------------------------------------------------------------------ */
/*  8b. EXPERIENCE                                                    */
/* ------------------------------------------------------------------ */
export const experience = [
  {
    id: "ex-1",
    title: "Researcher",
    institution: "Materials Science Laboratory, Islamic University",
    date: "2021 — Present",
    description:
      "Working on battery materials, energy storage, and simulation-based analysis, with a current focus on PCM-based thermal management of Li-ion battery packs.",
    tags: ["Battery Materials", "Energy Storage", "COMSOL"],
    link: "",
  },
  {
    id: "ex-2",
    title: "BMS & Battery Pack Testing Intern",
    institution: "Battery Pack Testing / BMS Internship",
    date: "Present",
    description:
      "Gaining hands-on experience with 4S, 16S, and 32S BMS configurations, battery pack testing, PCB-related work, pack monitoring, and performance analysis.",
    tags: ["BMS", "Battery Pack", "Testing"],
    link: "",
  },
];

/* ------------------------------------------------------------------ */
/*  9. PUBLICATIONS                                                   */
/* ------------------------------------------------------------------ */
export const publications = [];

/* ------------------------------------------------------------------ */
/*  10. CONTACT                                                       */
/* ------------------------------------------------------------------ */
export const contactInfo = {
  heading: "Let's Connect",
  intro:
    "Open to research collaborations, graduate study opportunities, scholarship opportunities, and conversations about safer and smarter battery technologies.",
  location: "",
  phone: "+880 0000 000000",
  email: "omar.faruque@example.com",
  formRecipient: "omar.faruque@example.com",
};

/* ------------------------------------------------------------------ */
/*  11. SOCIAL LINKS                                                  */
/* ------------------------------------------------------------------ */
export const socialLinks = [
  { platform: "Facebook", icon: "facebook", url: "https://facebook.com/" },
  { platform: "LinkedIn", icon: "linkedin", url: "https://linkedin.com/in/" },
  { platform: "GitHub", icon: "github", url: "https://github.com/" },
  { platform: "Instagram", icon: "instagram", url: "https://instagram.com/" },
  { platform: "Google Scholar", icon: "scholar", url: "" },
  { platform: "ResearchGate", icon: "researchgate", url: "" },
];

/* ------------------------------------------------------------------ */
/*  NAVIGATION                                                        */
/* ------------------------------------------------------------------ */
export const navLinks = [
  { label: "Home", to: "home" },
  { label: "About", to: "about" },
  { label: "Highlights", to: "highlights" },
  { label: "Gallery", to: "gallery" },
  { label: "Research", to: "research" },
  { label: "Awards", to: "awards" },
  { label: "Skills", to: "skills" },
  { label: "Journey", to: "journey" },
  { label: "Publications", to: "publications" },
  { label: "Contact", to: "contact" },
];

/* ------------------------------------------------------------------ */
/*  SITE META                                                         */
/* ------------------------------------------------------------------ */
export const siteMeta = {
  brandShort: "Omar Faruque",
  brandInitials: "OF",
  footerTagline:
    "Electrical & Electronic Engineering · Battery thermal management, BMS, and EV energy storage.",
  copyrightName: "Omar Faruque",
};
