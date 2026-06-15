/**
 * ============================================================================
 *  portfolioData.js  —  THE SINGLE SOURCE OF TRUTH FOR YOUR WHOLE WEBSITE
 * ============================================================================
 *
 *  Edit ANY content on your site by changing this one file.
 *  Every section reads from the arrays/objects below.
 *
 *  GOLDEN RULES
 *  ------------
 *  1. If an array is EMPTY  ( = [] )  its whole section disappears automatically.
 *  2. Every external link opens in a new tab. Leave a link "" (empty) to hide its button.
 *  3. For images you can use:
 *        - a web URL:            "https://..."
 *        - a local file:         "/assets/images/my-photo.jpg"
 *          (put the file in  public/assets/images/  and reference it as above)
 *     If an image fails to load, a clean placeholder is shown automatically.
 *
 *  HOW TO ADD / EDIT / DELETE  (quick reference — full guide in README.md)
 *  ----------------------------------------------------------------------
 *    ADD     →  copy an existing { ... } block, paste it, change the values.
 *    EDIT    →  change the text between the quotes.
 *    DELETE  →  remove the whole { ... } block (including its trailing comma).
 *
 *  Tip: every "id" must be unique inside its own array.
 * ============================================================================
 */

/* ------------------------------------------------------------------ */
/*  1. HERO                                                            */
/* ------------------------------------------------------------------ */
export const heroData = {
  name: "Omar Faruque",
  title: "Electrical & Electronic Engineering Student",
  tagline:
    "Researching lithium-ion battery technology and renewable energy to build sustainable, community-focused engineering solutions.",
  // Put your photo in public/assets/images/ and use "/assets/images/profile.jpg"
  profileImage: "/assets/images/profile.jpg",
  // Status pill shown above the name — set to "" to hide it
  status: "Open to research collaborations",
  // Call-to-action buttons. "scrollTo" jumps to a section id on this page.
  // For an external link use "href" instead of "scrollTo".
  ctaButtons: [
    { label: "View Projects", scrollTo: "research", primary: true },
    { label: "View Research", scrollTo: "research", primary: false },
    { label: "Contact Me", scrollTo: "contact", primary: false },
  ],
  // Small stat badges under the hero. Delete any block to remove it.
  stats: [
    { value: "EEE", label: "Major Discipline" },
    { value: "Li-ion", label: "Core Research" },
    { value: "IoT", label: "Applied Focus" },
  ],
};

/* ------------------------------------------------------------------ */
/*  2. ABOUT                                                           */
/* ------------------------------------------------------------------ */
export const aboutData = {
  heading: "About Me",
  // Each string is a paragraph. Add or remove paragraphs freely.
  paragraphs: [
    "I am an Electrical and Electronic Engineering student at Islamic University, Bangladesh, with a focus on energy storage, renewable systems, and embedded intelligence. My work sits at the intersection of materials research and practical, deployable hardware.",
    "My current research centers on lithium-ion battery chemistry — including doped electrode materials for improved capacity and stability — alongside renewable-energy systems and IoT prototypes designed for real communities. I care about engineering that is both rigorous and useful.",
  ],
  image: "/assets/images/about.jpg",
  // Quick-fact cards beside the text. Add/remove any card.
  infoCards: [
    { label: "Department", value: "Electrical & Electronic Engineering" },
    { label: "University", value: "Islamic University, Bangladesh" },
    { label: "Research Interest", value: "Li-ion Batteries & Renewable Energy" },
    { label: "Location", value: "Kushtia, Bangladesh" },
    { label: "Current Focus", value: "Doped Anode Materials & IoT Energy Systems" },
  ],
};

/* ------------------------------------------------------------------ */
/*  3. DYNAMIC HIGHLIGHTS  (image + details, alternating)             */
/* ------------------------------------------------------------------ */
export const highlightSections = [
  {
    id: "hl-1",
    title: "Energy Storage Research",
    subtitle: "Lithium-ion Battery Technology",
    description:
      "Investigating electrode materials and cell behaviour to push the balance between energy density, cycle life, and safety. The goal is storage that is affordable and reliable enough for everyday renewable deployment.",
    image: "/assets/images/highlight-battery.jpg",
    buttonText: "Explore Research",
    buttonLink: "#research",
    tags: ["Li-ion", "Materials", "Energy Density"],
  },
  {
    id: "hl-2",
    title: "Renewable & IoT Systems",
    subtitle: "Sustainable Engineering in Practice",
    description:
      "Designing solar-powered and connected devices that bring clean energy and data to communities. From off-grid lighting to monitored swapping systems, the focus is technology that works where it is needed most.",
    image: "/assets/images/highlight-solar.jpg",
    buttonText: "See Prototypes",
    buttonLink: "#research",
    tags: ["Solar", "IoT", "Embedded"],
  },
];

/* ------------------------------------------------------------------ */
/*  4. GALLERY                                                         */
/* ------------------------------------------------------------------ */
// Filter categories shown as buttons. "All" is added automatically.
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
    description: "Characterising charge–discharge cycles in the lab.",
    category: "Research",
    date: "2025",
    image: "/assets/images/gallery-1.jpg",
    link: "",
  },
  {
    id: "g-2",
    title: "Solar IoT Lantern Build",
    description: "Assembling the solar-powered connected lantern prototype.",
    category: "Project",
    date: "2025",
    image: "/assets/images/gallery-2.jpg",
    link: "",
  },
  {
    id: "g-3",
    title: "Research Presentation",
    description: "Presenting findings on doped anode materials.",
    category: "Presentation",
    date: "2024",
    image: "/assets/images/gallery-3.jpg",
    link: "",
  },
  {
    id: "g-4",
    title: "Engineering Workshop",
    description: "Hands-on embedded systems training session.",
    category: "Workshop",
    date: "2024",
    image: "/assets/images/gallery-4.jpg",
    link: "",
  },
  {
    id: "g-5",
    title: "Innovation Showcase",
    description: "Demonstrating the SolPe swapping concept.",
    category: "Event",
    date: "2025",
    image: "/assets/images/gallery-5.jpg",
    link: "",
  },
  {
    id: "g-6",
    title: "Recognition of Excellence",
    description: "Award for academic and research contribution.",
    category: "Award",
    date: "2024",
    image: "/assets/images/gallery-6.jpg",
    link: "",
  },
];

/* ------------------------------------------------------------------ */
/*  5. RESEARCH / THESIS / PROJECTS                                   */
/* ------------------------------------------------------------------ */
// category: Research | Thesis | Project | Publication | Prototype
// status:   Ongoing  | Completed | Published | Prototype
export const researchProjects = [
  {
    id: "rp-1",
    title: "Li-doped BaTiO₃ as an Anode Material",
    category: "Research",
    status: "Ongoing",
    summary:
      "Exploring lithium-doped barium titanate to improve capacity and cycling stability in lithium-ion cells.",
    description:
      "This study investigates the electrochemical potential of lithium-doped barium titanate (BaTiO₃) as an alternative anode material. By tuning dopant concentration, the work aims to enhance lithium-ion diffusion and structural stability across charge cycles.",
    problem:
      "Conventional graphite anodes limit energy density and degrade over extended cycling, constraining battery longevity and performance.",
    objective:
      "Evaluate Li-doped BaTiO₃ as a higher-capacity, structurally stable anode candidate and characterise its electrochemical behaviour.",
    methodology:
      "Material synthesis with controlled doping, structural characterisation (XRD/SEM), and galvanostatic charge–discharge testing to assess capacity, rate capability, and cycle retention.",
    tools: ["XRD", "SEM", "Electrochemical Workstation", "MATLAB"],
    results:
      "Early results indicate improved structural stability and promising lithium-ion mobility, supporting further optimisation of dopant ratios.",
    image: "/assets/images/research-batio3.jpg",
    tags: ["Li-ion", "Anode Materials", "Electrochemistry"],
    links: [
      // { label: "Read Report", url: "https://..." },
    ],
  },
  {
    id: "rp-2",
    title: "Solar-Powered IoT Lantern",
    category: "Prototype",
    status: "Completed",
    summary:
      "An off-grid lantern combining solar charging, efficient LED lighting, and IoT-based usage monitoring.",
    description:
      "A low-cost connected lantern designed for off-grid and low-resource settings. It integrates a solar panel, lithium battery, efficient driver circuitry, and a microcontroller that reports usage and battery health over IoT.",
    problem:
      "Many off-grid communities rely on costly, polluting kerosene lighting with no visibility into energy availability.",
    objective:
      "Deliver an affordable, sustainable lighting solution with remote monitoring of charge state and usage patterns.",
    methodology:
      "Circuit design and embedded firmware development, solar charge management, and IoT telemetry using a low-power microcontroller and wireless module.",
    tools: ["Arduino", "ESP32", "Solar PV", "Embedded C"],
    results:
      "Functional prototype delivering stable lighting on a single daily solar charge, with live battery and usage reporting.",
    image: "/assets/images/research-lantern.jpg",
    tags: ["Solar", "IoT", "Embedded", "Sustainability"],
    links: [
      // { label: "View Demo", url: "https://..." },
      // { label: "GitHub", url: "https://github.com/..." },
    ],
  },
  {
    id: "rp-3",
    title: "SolPe — Rooftop Solar EV Battery Swapping",
    category: "Project",
    status: "Prototype",
    summary:
      "A concept system pairing rooftop solar with standardised EV battery swapping for fast, clean energy turnaround.",
    description:
      "SolPe proposes a rooftop-solar-charged battery swapping network for electric vehicles, reducing charging downtime and grid dependence. The design covers swappable battery packs, solar charging stations, and a management layer for pack health and availability.",
    problem:
      "EV charging is slow and grid-dependent, limiting adoption in regions with unreliable power and high daytime solar potential.",
    objective:
      "Design a solar-first swapping architecture that minimises downtime and maximises use of locally generated clean energy.",
    methodology:
      "System architecture design, solar capacity estimation, swappable pack specification, and a station-management concept for tracking pack state.",
    tools: ["System Design", "Solar PV", "Battery Management", "IoT"],
    results:
      "A documented architecture and prototype concept demonstrating feasibility of solar-powered swapping for light EVs.",
    image: "/assets/images/research-solpe.jpg",
    tags: ["Solar", "EV", "Battery Swapping", "Sustainability"],
    links: [],
  },
];

/* ------------------------------------------------------------------ */
/*  6. HONOURS / AWARDS / CERTIFICATES                                */
/* ------------------------------------------------------------------ */
// category: Award | Certificate | Workshop | Internship | Competition | Volunteerism
export const awardsCertificates = [
  {
    id: "aw-1",
    title: "Academic Excellence Recognition",
    organization: "Islamic University, Bangladesh",
    date: "2024",
    category: "Award",
    description:
      "Recognised for strong academic performance and contribution to departmental research activity.",
    image: "/assets/images/award-1.jpg",
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
    image: "/assets/images/award-2.jpg",
    link: "",
  },
  {
    id: "aw-3",
    title: "Renewable Energy Innovation Challenge",
    organization: "Inter-University Competition",
    date: "2025",
    category: "Competition",
    description:
      "Participated with a solar-powered IoT solution focused on sustainable community energy access.",
    image: "/assets/images/award-3.jpg",
    link: "",
  },
];

/* ------------------------------------------------------------------ */
/*  7. SKILLS                                                          */
/* ------------------------------------------------------------------ */
// Each category has a list of skills with a level from 0–100.
export const skills = [
  {
    category: "Embedded Systems",
    items: [
      { name: "Microcontrollers (Arduino/ESP32)", level: 85 },
      { name: "Embedded C", level: 80 },
      { name: "Sensor Integration", level: 82 },
    ],
  },
  {
    category: "IoT",
    items: [
      { name: "Wireless Communication", level: 78 },
      { name: "Telemetry & Monitoring", level: 75 },
    ],
  },
  {
    category: "Battery Technology",
    items: [
      { name: "Li-ion Cell Characterisation", level: 80 },
      { name: "Battery Management Concepts", level: 75 },
      { name: "Electrode Materials", level: 78 },
    ],
  },
  {
    category: "Renewable Energy",
    items: [
      { name: "Solar PV Systems", level: 80 },
      { name: "Energy Storage Integration", level: 76 },
    ],
  },
  {
    category: "Simulation Tools",
    items: [
      { name: "MATLAB / Simulink", level: 78 },
      { name: "Proteus / Multisim", level: 74 },
    ],
  },
  {
    category: "Programming",
    items: [
      { name: "C / C++", level: 80 },
      { name: "Python", level: 72 },
    ],
  },
  {
    category: "Research & Writing",
    items: [
      { name: "Technical Writing", level: 80 },
      { name: "Data Analysis", level: 76 },
    ],
  },
  {
    category: "Leadership & Communication",
    items: [
      { name: "Team Collaboration", level: 85 },
      { name: "Presentation", level: 82 },
    ],
  },
];

/* ------------------------------------------------------------------ */
/*  8. EDUCATION  (timeline)                                          */
/* ------------------------------------------------------------------ */
export const education = [
  {
    id: "ed-1",
    title: "B.Sc. in Electrical & Electronic Engineering",
    institution: "Islamic University, Bangladesh",
    date: "Ongoing",
    description:
      "Specialising in energy systems, electronics, and embedded design, with a research focus on lithium-ion battery technology and renewable energy.",
    tags: ["EEE", "Energy", "Research"],
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
/*  8b. EXPERIENCE  (timeline)                                        */
/* ------------------------------------------------------------------ */
export const experience = [
  {
    id: "ex-1",
    title: "Undergraduate Researcher",
    institution: "EEE Research Group, Islamic University",
    date: "2024 — Present",
    description:
      "Conducting research on doped electrode materials and assisting in battery characterisation and renewable-energy experiments.",
    tags: ["Research", "Li-ion", "Lab Work"],
    link: "",
  },
  {
    id: "ex-2",
    title: "Project Developer — IoT & Renewable Prototypes",
    institution: "Independent / Academic Projects",
    date: "2024 — Present",
    description:
      "Designing and building solar-powered IoT prototypes and embedded systems aimed at sustainable, community-focused applications.",
    tags: ["IoT", "Embedded", "Solar"],
    link: "",
  },
];

/* ------------------------------------------------------------------ */
/*  9. PUBLICATIONS  (section auto-hides if empty)                    */
/* ------------------------------------------------------------------ */
// status: In Preparation | Under Review | Published
export const publications = [
  // {
  //   id: "pub-1",
  //   title: "Lithium-doped BaTiO3 as a Candidate Anode Material",
  //   authors: "O. Faruque, et al.",
  //   venue: "Journal / Conference Name",
  //   year: "2025",
  //   status: "In Preparation",
  //   abstract: "Short summary of the paper's contribution and findings.",
  //   link: "",
  // },
];

/* ------------------------------------------------------------------ */
/*  10. CONTACT                                                       */
/* ------------------------------------------------------------------ */
export const contactInfo = {
  heading: "Let's Connect",
  intro:
    "Open to research collaborations, engineering projects, and conversations about sustainable energy. Reach out anytime.",
  location: "Kushtia, Bangladesh",
  phone: "+880 0000 000000",
  email: "omar.faruque@example.com",
  // The contact form sends through the visitor's email client (mailto).
  // To use EmailJS instead, see the note in components/Contact.jsx.
  formRecipient: "omar.faruque@example.com",
};

/* ------------------------------------------------------------------ */
/*  11. SOCIAL LINKS  (used in hero, contact, footer)                 */
/* ------------------------------------------------------------------ */
// Leave a url "" to hide that icon everywhere. "icon" must match a key
// in components/SocialIcons (facebook, linkedin, github, instagram,
// scholar, researchgate, email, phone).
export const socialLinks = [
  { platform: "Facebook", icon: "facebook", url: "https://facebook.com/" },
  { platform: "LinkedIn", icon: "linkedin", url: "https://linkedin.com/in/" },
  { platform: "GitHub", icon: "github", url: "https://github.com/" },
  { platform: "Instagram", icon: "instagram", url: "https://instagram.com/" },
  { platform: "Google Scholar", icon: "scholar", url: "" },
  { platform: "ResearchGate", icon: "researchgate", url: "" },
];

/* ------------------------------------------------------------------ */
/*  NAVIGATION  (controls the navbar links + order)                  */
/* ------------------------------------------------------------------ */
// Each "to" must match a section id used in App.jsx.
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
    "Electrical & Electronic Engineering · Energy storage, renewable systems, and sustainable innovation.",
  copyrightName: "Omar Faruque",
};
