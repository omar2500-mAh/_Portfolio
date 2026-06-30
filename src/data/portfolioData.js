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
    { value: "Li-ion Battery", label: "Core Research" },
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
    images: [
      imagePath("Battery Pack.jpg"),
      imagePath("battery-thermal-2.jpg"),
      imagePath("battery-thermal-3.jpg"),
      imagePath("battery-thermal-4.jpg"),
    ],
    buttonText: "Explore Research",
    buttonLink: "#research",
    tags: ["Li-ion", "PCM", "Thermal Management"],
  },
  {
    id: "hl-2",
    title: "BMS & Battery Pack Testing",
    subtitle: "Practical Energy Storage Engineering",
    description:
      "Gaining hands-on experience with BMS configurations, battery pack testing, PCB-related work, pack monitoring, and performance analysis for safer battery systems.",
    image: imagePath("pcb-2.png"),
    images: [
      imagePath("pcb-2.png"),
      imagePath("bms-testing-2.jpg"),
      imagePath("bms-testing-3.jpg"),
      imagePath("bms-testing-4.jpg"),
    ],
    buttonText: "See Projects",
    buttonLink: "#research",
    tags: ["BMS", "Battery Pack", "Testing"],
  },
  {
    id: "hl-3",
    title: "For The Light — Solar Guardian Lantern",
    subtitle: "CTO — Disaster Response & Smart Safety System",
    description:
      "Developing a solar-powered emergency lantern that works as both a sustainable lighting solution and an intelligent rescue system. The device integrates solar charging, Li-ion battery storage, LED lighting, GPS/GSM communication, and sensor-based SOS alerts for disaster-prone and off-grid communities.",
    image: imagePath("ph-img-20.webp"),
    images: [
      imagePath("ph-img-20.webp"),
      imagePath("for-the-light-2.webp"),
      imagePath("for-the-light-3.webp"),
      imagePath("for-the-light-4.webp"),
    ],
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
    image: imagePath("TRC.png"),
    images: [
      imagePath("TRC.png"),
      imagePath("thermal-runaway-2.png"),
      imagePath("thermal-runaway-3.png"),
      imagePath("thermal-runaway-4.png"),
    ],
    buttonText: "Explore Simulation",
    buttonLink: "#research",
    tags: ["COMSOL", "Thermal Runaway", "Li-ion Safety", "HWS Test"],
  },
  {
    id: "hl-5",
    title: "High-Capacity Battery Pack Testing",
    subtitle: "16S 100Ah Battery Pack Testing with Neware System",
    description:
      "Tested a 16S 100Ah lithium-ion battery pack using the Neware Battery Test System. This work involved cell-level connections, voltage monitoring, test setup, pack monitoring, and performance evaluation to support safer and more reliable high-capacity battery systems.",
    image: imagePath("neware-16s-100ah-battery-test.jpeg"),
    images: [
      imagePath("neware-16s-100ah-battery-test.jpeg"),
      imagePath("neware-16s-test-2.jpeg"),
      imagePath("neware-16s-test-3.jpeg"),
      imagePath("neware-16s-test-4.jpeg"),
    ],
    buttonText: "See Project",
    buttonLink: "#research",
    tags: ["16S Battery Pack", "100Ah", "Neware", "BMS Testing"],
  },
  {
    id: "hl-6",
    title: "Li-ion Battery Pack Assembly & BMS Testing",
    subtitle: "15S 30-Cell Battery Pack Developed and Tested",
    description:
      "Built a 15S lithium-ion battery pack consisting of 30 cells, where each cell was rated at 15Ah. The pack was assembled and tested with a Daly BMS to verify wiring configuration, protection behavior, pack operation, and practical battery system performance.",
    image: imagePath("15s-battery-pack-daly-bms.jpeg"),
    images: [
      imagePath("15s-battery-pack-daly-bms.jpeg"),
      imagePath("15s-pack-2.jpeg"),
      imagePath("15s-pack-3.jpeg"),
      imagePath("15s-pack-4.jpeg"),
    ],
    buttonText: "See Project",
    buttonLink: "#research",
    tags: ["15S Pack", "30 Cells", "Daly BMS", "Battery Testing"],
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
    title: "Python Programming Boot-Camp",
    organization: "IEEE IU Student Branch",
    date: "2024",
    category: "Certificate",
    description:
      "Successfully completed the Python Programming Boot-Camp: Beginner to Intermediate, strengthening practical skills in Python development.",
    image: imagePath("python-bootcamp.webp"),
    link: "https://www.facebook.com/ieee.iu.student.branch/",
  },
  {
    id: "aw-2",
    title: "Digital Innovation Challenge 2024",
    organization: "ActionAid Bangladesh",
    date: "2024",
    category: "Competition",
    description:
      "Participated in the Digital Innovation Challenge 2024, showcasing creative and technology-driven problem-solving ideas.",
    image: imagePath("digital-innovation-challenge-2024.webp"),
    link: "https://globalplatforms.org/",
  },
  {
    id: "aw-3",
    title: "Certified Volunteerism",
    organization: "Lead Academy",
    date: "June 2024",
    category: "Certificate",
    description:
      "Completed the Certified Volunteerism: Connect, Engage & Develop course from Lead Academy, endorsed by the UN Global Compact and assured by Pearson.",
    image: imagePath("certified-volunteerism.webp"),
    link: "https://www.lead.academy/",
  },
  {
    id: "aw-4",
    title: "Virtual Internship",
    organization: "YSSE \n Communication Department",
    date: "May 2024 - October 2024",
    category: "Internship",
    description:
      "Completed the Virtual Internship Program in the YSSE Communication Department and received a Bronze Certificate for performance and contribution.",
    image: imagePath("virtual-internship.webp"),
    link: "https://ysseacademy.com/",
  },
  {
    id: "aw-5",
    title: "IUSC National Science Festival 2024",
    organization: "Islamic University Science Club",
    date: "March 2024",
    category: "Award",
    description:
      "Achieved Runner-Up position in the Poster Presentation category at the 1st IUSC National Science Festival 2024.",
    image: imagePath("iusc-national-science-festival-2024.jpeg"),
    link: "https://www.facebook.com/groups/1117675018875480/user/100086142219558",
  },
  {
    id: "aw-6",
    title: "Energy Innovation Challenge 2024",
    organization: "PRAAN",
    date: "2024",
    category: "Competition",
    description:
      "Showcased an innovative solution in renewable energy, energy storage, and efficiency at the Energy Innovation Challenge 2024.",
    image: imagePath("energy-innovation-challenge-2024.jpeg"),
    link: "https://praan.org.bd/",
  },
  {
    id: "aw-7",
    title: "Spoken English and IELTS Workshop 2025",
    organization: "Islamic University Career Club",
    date: "19 January 2025",
    category: "Workshop",
    description:
      "Received a certificate for active participation in the Workshop on Basics of Spoken English and IELTS Program.",
    image: imagePath("spoken-english-ielts-workshop-2025.webp"),
    link: "https://www.facebook.com/IUCareerClub",
  },
  {
    id: "aw-8",
    title: "EcoPreneurs Bootcamp 2025",
    organization: "LSS",
    date: "2025",
    category: "Bootcamp",
    description:
      "Participated in the EcoPreneurs Bootcamp 2025, focusing on green entrepreneurship and climate-resilient innovation.",
    image: imagePath("ecopreneurs-bootcamp-2025.webp"),
    link: "https://lss.org.bd/",
  },
  {
    id: "aw-9",
    title: "Green Energy Olympiad 2025",
    organization: "Clean Bangladesh",
    date: "2025",
    category: "Olympiad",
    description:
      "Engaged in GEO 2025 to explore green energy initiatives, environmental development, and sustainable energy strategies.",
    image: imagePath("green-energy-olympiad-2025.webp"),
    link: "https://www.cleanbd.org/geo2026",
  },
  {
    id: "aw-10",
    title: "Global SDG Youth Summit 2025",
    organization: "Global SDG Youth Summit",
    date: "2025",
    category: "Summit",
    description:
      "Participated as a delegate in the Global SDG Youth Summit 2025, exchanging ideas on innovation and solutions aligned with the United Nations Sustainable Development Goals.",
    image: imagePath("global-sdg-youth-summit-2025.webp"),
    link: "https://www.facebook.com/GlobalSDGYouthSummit/",
  },
  {
    id: "aw-11",
    title: "Workshop on VLSI",
    organization: "ChipXpert Technologies Pvt. Ltd.",
    date: "September 2025",
    category: "Workshop",
    description:
      "Participated in a Two-Day Workshop on VLSI Design Flow, from RTL to GDS, using industry tools by ChipXpert Technologies Pvt. Ltd., Hyderabad.",
    image: imagePath("ChipXpert Technologies Pvt. Ltd..webp"),
    link: "https://chipxpert.in/",
  },
  {
    id: "aw-12",
    title: "PCB Designing Workshop",
    organization: "IEEE RAS IUT Student Branch & Cybernetics.",
    date: "October 2025",
    category: "Workshop",
    description:
      "Successfully completed the Cybernetics PCB Designing Workshop organized by IEEE Robotics and Automation Society IUT Student Branch, including three online sessions on PCB design fundamentals and practical electronics design workflow.",
    image: imagePath("pcb-designing-workshop.jpg"),
    link: "",
  },
  {
    id: "aw-13",
    title: "Industrial Technology on Electrical Engineering & Instrumentation",
    organization: "Training Institute for Chemical Industries",
    date: "February 2026",
    category: "Training",
    description:
      "Completed a three-week industrial training course on Electrical Engineering and Instrumentation at the Training Institute for Chemical Industries, Polash, Narsingdi, Bangladesh, obtaining an A+ grade in the final evaluation.",
    image: imagePath("industrial-technology-electrical-instrumentation.jpg"),
    link: "https://tici.gov.bd/",
  },
  {
    id: "aw-14",
    title: "SOC Estimation with Kalman Filters",
    organization: "Certified Course",
    date: "June 2026",
    category: "Certificate",
    description:
      "Successfully completed a certified course on State of Charge estimation using Kalman Filters, strengthening knowledge in battery modeling, estimation algorithms, and battery management system applications.",
    image: imagePath("soc-estimation-kalman-filters.jpg"),
    link: "https://lms.decibelslab.com/",
  },
    {
    id: "aw-15",
    title: "Restoration Factory Bangladesh Incubation Program",
    organization: "UN Environment Programme, Bridge for Billions & iDE",
    date: "December 2025",
    category: "Incubation",
    description:
      "Awarded for successfully completing participation in The Restoration Factory Bangladesh incubation program, receiving innovation-focused entrepreneurship training, business mentorship, and support to develop the project 'For The Light', focused on restoration and conservation of the forest ecosystem.",
    image: imagePath("restoration-factory-bangladesh.jpeg"),
    link: "https://www.bridgeforbillions.org/",
  },
  {
  id: "aw-16",
  title: "Precise Energy 2025",
  organization: "Energy of the Future / ASE Rosatom",
  date: "October 2025",
  category: "Olympiad",
  description:
    "Participated in the final stage of the Precise Energy 2025 Olympiad in Mathematics, Chemistry, and Physics for students of the Rooppur NPP region.",
  image: imagePath("precise Energy.jpeg"),
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
      { name: "CFD Simulation", level: 80 },
    ],
  },
  {
    category: "Simulation Tools",
    items: [
      { name: "COMSOL Multiphysics", level: 85 },
      { name: "MATLAB / Simulink", level: 78 },
      
    ],
  },
  {
    category: "BMS & Battery Pack Testing",
    items: [
      { name: "4S / 16S / 32S BMS Configuration", level: 80 },
      { name: "Battery Pack Testing with NEWARE BTS", level: 82 },
      { name: "Pack Monitoring & Performance Analysis", level: 78 },
    ],
  },
  {
    category: "Programming",
    items: [
      { name: "Python", level: 75 },
      { name: "C / C++", level: 80 },
      { name: "ESP/PIC Microcontroller Programming", level: 78 },
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
    "Undergraduate study in Electrical and Electronic Engineering with a major concentration in Power Electronics. My career-relevant coursework includes Power Electronics, Power Electronics Sessional, Electrical Circuits, Electronics, Electrical Machines, Control Systems, Microprocessors and Interfacing, Power System Analysis, and Switchgear and Protection. This academic background supports my current work in Li-ion battery thermal management, BMS, EV battery systems, power conversion, and simulation-based energy storage research.",
  tags: [
    "EEE",
    "Major: Power Electronics",
    "Power Conversion",
    "Battery Systems",
    "BMS",
    "EV Energy Storage",
  ],
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
    title: "Intern",
    institution: "OMI Battery Innovation Center",
    date: "Apr 2026 — Present",
    description:
      "Part-time internship focused on LFP battery pack applications. Configured and analyzed 4S, 16S, and 32S Battery Management System architectures, supported PCB schematic and layout design, including component placement and pack-monitoring connections, and assisted with battery pack simulation, BMS performance analysis, system behavior interpretation, and pack-level safety evaluation.",
    tags: ["BMS", "LFP Battery Pack", "PCB Design", "Pack Safety"],
    link: "",
  },
  {
    id: "ex-2",
    title: "Research Assistant",
    institution:
      "Materials Science Laboratory, Department of Electrical & Electronic Engineering, Islamic University",
    date: "Jan 2023 — Present",
    description:
      "Supported Li-ion battery and materials research related to electrochemical behavior, thermal behavior, and energy storage performance. Assisted with literature review, data interpretation, and technical documentation for battery and materials studies under the supervision of Dr. Momtazul Islam.",
    tags: ["Li-ion Battery", "Materials Research", "Energy Storage", "Technical Documentation"],
    link: "",
  },
  {
    id: "ex-3",
    title: "Intern",
    institution: "Simulation Support BD (SSBD)",
    date: "Feb 2026 — Present",
    description:
      "Part-time internship supporting physics-based modeling and analysis tasks using COMSOL Multiphysics, MATLAB, and ANSYS. Worked on thermal and electrochemical simulation, parameter optimization, result visualization, and interpretation of simulation outputs while collaborating with senior engineers to validate models, improve simulation accuracy, and communicate technical findings.",
    tags: ["COMSOL", "MATLAB", "ANSYS", "Simulation", "Model Validation"],
    link: "",
  },
  {
    id: "ex-4",
    title: "Embedded Systems Developer",
    institution: "Solar Lighting & Security System — For The Light",
    date: "Feb 2024 — Jan 2026",
    description:
      "Developed solar-powered embedded hardware using microcontrollers, sensors, power-management circuits, and field-oriented renewable-energy design. Performed PCB prototyping, circuit testing, embedded programming, diagnostics, and hardware troubleshooting for a solar lighting and security system.",
    tags: ["Embedded Systems", "Solar Energy", "PCB Prototyping", "Microcontrollers"],
    link: "",
  },
  {
    id: "ex-5",
    title: "Intern",
    institution: "Mage Squad, YSSE",
    date: "May 2024 — Aug 2024",
    description:
      "Part-time internship involving technical writing and communication. Authored technical articles on AI, innovation, sustainability, and development, while strengthening scientific communication, technical writing, and documentation skills for engineering reporting.",
    tags: ["Technical Writing", "AI", "Sustainability", "Documentation"],
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
  phone: "+880-1719194874",
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
