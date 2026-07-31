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

  title:
    "Electrical & Electronic Engineering\nIslamic University, Bangladesh",

 tagline:
  "Currently working as an Intern at OMI Battery Innovation Center and open to full-time \n opportunities in battery systems, BMS, EV energy storage, and power electronics.",
  profileImage: imagePath("profile.jpg.jpg"),

 floatingSkills: [
  {
    name: "COMSOL",
    icon: imagePath("software/comsol.png"),
    accent: "blue",
  },
  {
    name: "MATLAB",
    icon: imagePath("software/matlab.png"),
    accent: "orange",
  },
  {
    name: "Python",
    icon: imagePath("software/Python.webp"),
    accent: "yellow",
  },
  {
    name: "ANSYS",
    icon: imagePath("software/ansys.jpg"),
    accent: "red",
  },
  {
    name: "Proteus",
    icon: imagePath("software/proteus.png"),
    accent: "green",
  },
  {
    name: "EasyEDA",
    icon: imagePath("software/images.png"),
    accent: "purple",
  },
],

  status: "Open to research collaborations",

  ctaButtons: [
    {
      label: "View Projects",
      scrollTo: "research",
      primary: true,
    },
    {
      label: "View Research",
      scrollTo: "research",
      primary: false,
    },
    {
      label: "Contact Me",
      scrollTo: "contact",
      primary: false,
    },
  ],

  stats: [
    {
      value: "EEE",
      label: "Major Discipline",
    },
    {
      value: "Li-ion Battery",
      label: "Core Research",
    },
    {
      value: "BMS",
      label: "Applied Focus",
    },
  ],
};

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

  image: imagePath(
    "WhatsApp Image 2026-06-15 at 4.29.13 PM.jpeg"
  ),

  infoCards: [
    {
      label: "Department",
      value: "Electrical & Electronic Engineering",
    },
    {
      label: "University",
      value: "Islamic University, Bangladesh",
    },
    {
      label: "Research Focus",
      value: "Li-ion Battery Research",
    },
    {
      label: "Thermal Management",
      value: "PCM-Based Battery Cooling",
    },
    {
      label: "Simulation",
      value: "COMSOL Multiphysics",
    },
    {
      label: "Practical Experience",
      value: "BMS & Battery Pack Testing",
    },
    {
      label: "EV Focus",
      value: "EV Batteries",
    },
    {
      label: "Technical Skills",
      value: "Embedded Systems & PCB",
    },
  ],
};

/* ------------------------------------------------------------------ */
/*  3. FOCUS AREAS                                                    */
/* ------------------------------------------------------------------ */

export const highlightSections = [
  {
    id: "hl-1",

    title:
      "Battery Electrochemical and Thermal Management",

    subtitle:
      "Cell Modeling and PCM-Based Pack Cooling",

    description:
      "Modeling how a lithium-ion cell works and how PCM cooling can control battery-pack temperature. The completed studies cover electrochemical behavior, material comparison, PCM thickness, and cell spacing.",

    image:
      imagePath(
        "Battery Pack.jpg"
      ),

    images: [
      imagePath(
        "Battery Pack.jpg"
      ),
      imagePath("c1.png"),
      
    ],

    buttonText:
      "Explore Research",

    buttonLink: "#research",

    tags: [
      "Electrochemical Modeling",
      "PCM Cooling",
      "Material Comparison",
      "Cell Spacing",
    ],

    category: "Research",

    status: "Ongoing",

    detailTitle:
      "Electrochemical and PCM Thermal Modeling of a Li-ion Battery Pack",

    summary:
      "Built a battery model and completed design studies to understand how PCM material, PCM thickness, and cell spacing affect temperature control and temperature uniformity.",

    fullDescription:
      "This research connects a physics-based electrochemical cell model with a thermal model of a battery pack. The aim is to explain cell behavior, heat generation, and the cooling effect of phase change materials in a clear and practical way.",

    problem:
      "Battery cells generate heat during operation, and all cells may not remain at the same temperature. High temperature and uneven heating can reduce performance, shorten battery life, and increase safety risk.",

    objective:
      "Find a practical battery-pack design that keeps the cells cooler and reduces the temperature difference between the hottest and coolest cells.",

    methodology:
      "COMSOL Multiphysics was used to model LFP/graphite cell behavior and pack-level heat transfer. Existing PCM materials were compared, including paraffin or OM32 and composite PCM options using SiO2 and expanded graphite. PCM thicknesses of 10, 20, 25, and 30 mm were studied together with cell pitches of 24, 26, 28, and 30 mm. The results were generated from available and established material-property data.",

    results:
      "The electrochemical model, material comparison, PCM-thickness study, and cell-spacing study are complete. In the tested design space, increasing PCM thickness generally reduced temperature non-uniformity. The lowest peak temperature difference was about 6.00 K at 30 mm cell pitch and 30 mm PCM thickness.",

    nextStep:
      "Further studies are planned. A gelatin-based thermal material was considered, but it has not been simulated because reliable thermal-property data were not available. The study will be extended when suitable data are found.",

    tools: [
      "COMSOL Multiphysics",
      "MATLAB",
      "Python",
      "Electrochemical Modeling",
      "Heat Transfer",
    ],

    detailImage:
      imagePath("graph.jpg"),

    detailTags: [
      "LFP/Graphite Cell",
      "Temperature Uniformity",
      "PCM Thickness",
      "Cell Pitch",
    ],

    links: [],
  },

  {
    id: "hl-2",

    title:
      "BMS and Battery Pack Testing",

    subtitle:
      "Monitoring, Protection, and Performance Checks",

    description:
      "Hands-on work with battery management systems and battery packs, including wiring checks, voltage monitoring, protection review, and performance testing.",

    image:
      imagePath("pcb-2.png"),

    images: [
      imagePath("pcb-2.png"),
   
    ],

    buttonText:
      "See Projects",

    buttonLink: "#research",

    tags: [
      "BMS Configuration",
      "Battery Pack",
      "Voltage Monitoring",
      "Protection Testing",
    ],

    category: "Engineering",

    status: "Ongoing",

    detailTitle:
      "BMS Configuration and Battery Pack Testing",

    summary:
      "Working with 4S, 16S, and 32S BMS setups to check pack wiring, cell voltage, protection behavior, balancing, and overall battery performance.",

    fullDescription:
      "This work focuses on the practical side of safe battery-pack operation. It includes connecting and checking BMS wiring, monitoring individual cell groups, reviewing protection settings, and studying pack behavior during testing.",

    problem:
      "A battery pack can become unsafe or unreliable if its cells are not monitored correctly, if the wiring is wrong, or if the protection system does not respond as expected.",

    objective:
      "Build practical skills in configuring and checking BMS-equipped battery packs for safe and reliable operation.",

    methodology:
      "Different BMS configurations are connected and checked using cell-voltage measurements, pack-voltage monitoring, balance-wire verification, protection review, and practical charge-discharge observations.",

    results:
      "Developed hands-on experience with 4S, 16S, and 32S BMS systems, pack monitoring, wiring verification, protection checks, and battery-test data interpretation.",

    nextStep:
      "Continue testing larger packs and improve skills in BMS communication, fault diagnosis, balancing, and pack-level validation.",

    tools: [
      "4S BMS",
      "16S BMS",
      "32S BMS",
      "Multimeter",
      "Neware BTS",
      "PCB Tools",
    ],

    detailImage:
      imagePath("pcb-2.png"),

    detailTags: [
      "Cell Monitoring",
      "Balance Wiring",
      "Pack Safety",
      "Battery Validation",
    ],

    links: [],
  },

  {
    id: "hl-3",

    title:
      "For The Light — Solar Guardian Lantern",

    subtitle:
      "Solar Lighting and Emergency Safety System",

    description:
      "A solar-powered emergency lantern designed to provide lighting, battery backup, and safety support for disaster-prone and off-grid communities.",

    image:
      imagePath(
        "ph-img-20.webp"
      ),

    images: [
      imagePath(
        "ph-img-20.webp"
      ),
      imagePath(
        "for-the-light-2.webp"
      ),
      
    ],

    buttonText:
      "See Project",

    buttonLink: "#research",

    tags: [
      "Solar Energy",
      "Emergency Lighting",
      "GPS and GSM",
      "Embedded System",
    ],

    category: "Project",

    status: "Prototype",

    detailTitle:
      "For The Light — Solar Guardian Lantern",

    summary:
      "Developing a portable solar lantern that combines clean lighting with emergency communication and safety features.",

    fullDescription:
      "The project is designed for places where electricity and communication may be limited, especially during floods, cyclones, and power failures. It combines solar charging, lithium-ion battery storage, LED lighting, sensors, and emergency communication features.",

    problem:
      "People in off-grid and disaster-prone areas may lose access to lighting, mobile communication, and emergency support when they need them most.",

    objective:
      "Create a portable device that provides dependable lighting and helps users send emergency information during difficult conditions.",

    methodology:
      "The system is developed through circuit design, microcontroller programming, sensor connection, solar charging, battery integration, PCB prototyping, and practical hardware testing.",

    results:
      "A working project concept and hardware prototype were developed by combining renewable-energy lighting with emergency-support functions in one portable system.",

    nextStep:
      "Improve the enclosure, communication reliability, power use, and field-testing process for real community use.",

    tools: [
      "Solar Panel",
      "Li-ion Battery",
      "Microcontroller",
      "GPS Module",
      "GSM Module",
      "Sensors",
      "PCB Design",
    ],

    detailImage:
      imagePath(
        "ph-img-20.webp"
      ),

    detailTags: [
      "Disaster Response",
      "Off-Grid Community",
      "SOS Alert",
      "Renewable Energy",
    ],

    links: [],
  },

  {
    id: "hl-4",

    title:
      "Battery Thermal Runaway Simulation",

    subtitle:
      "Understanding Battery Failure and Heat Spread",

    description:
      "Using simulation to study how a lithium-ion cell can overheat, enter thermal runaway, and transfer heat to nearby cells.",

    image:
      imagePath("TRC.png"),

    images: [
      imagePath("TRC.png"),
      
    ],

    buttonText:
      "Explore Simulation",

    buttonLink: "#research",

    tags: [
      "Thermal Runaway",
      "Battery Safety",
      "Heat Spread",
      "COMSOL",
    ],

    category: "Research",

    status: "Ongoing",

    detailTitle:
      "Thermal Runaway and Cell-to-Cell Heat Propagation Simulation",

    summary:
      "Building a simulation that shows when dangerous self-heating begins and how heat may spread from one battery cell to another.",

    fullDescription:
      "Thermal runaway is a rapid and dangerous rise in battery temperature. This work uses simulation to study the heat-producing reactions inside a failing cell and the movement of heat between nearby cells.",

    problem:
      "Severe overheating can cause battery damage, fire, and failure of nearby cells. Physical abuse testing is also expensive and risky.",

    objective:
      "Use simulation to identify unsafe temperature conditions and understand how battery failure may spread through a pack.",

    methodology:
      "A Heat-Wait-Seek simulation is built in COMSOL using temperature-dependent reaction heat. Single-cell and multi-cell models are used to study self-heating, temperature rise, and heat transfer to neighboring cells.",

    results:
      "A simulation framework was developed to study thermal-runaway onset and heat propagation under severe conditions. It helps examine safety risks before carrying out physical abuse tests.",

    nextStep:
      "Extend the model with more pack layouts, cooling conditions, and material data, followed by comparison with experimental results when available.",

    tools: [
      "COMSOL Multiphysics",
      "Heat-Wait-Seek",
      "Heat Transfer",
      "Reaction Kinetics",
      "MATLAB",
    ],

    detailImage:
      imagePath("TRC.png"),

    detailTags: [
      "Self-Heating",
      "Failure Propagation",
      "Pouch Cell",
      "Safety Analysis",
    ],

    links: [],
  },

  {
    id: "hl-5",

    title:
      "High-Capacity Battery Pack Testing",

    subtitle:
      "16S 100Ah Pack Testing with Neware BTS",

    description:
      "Completed practical testing of a 16S 100Ah lithium-ion battery pack using a Neware Battery Test System.",

    image:
      imagePath(
        "neware-16s-100ah-battery-test.jpeg"
      ),

    images: [
      imagePath(
        "neware-16s-100ah-battery-test.jpeg"
      ),
      
    ],

    buttonText:
      "See Project",

    buttonLink: "#research",

    tags: [
      "16S Battery Pack",
      "100Ah Capacity",
      "Neware BTS",
      "Performance Testing",
    ],

    category: "Testing",

    status: "Completed",

    detailTitle:
      "Testing a 16S 100Ah Battery Pack with Neware BTS",

    summary:
      "Set up, monitored, and evaluated a high-capacity battery pack using controlled battery-test equipment.",

    fullDescription:
      "The work involved preparing the test setup, checking the pack and cell-monitoring connections, observing voltage behavior, and reviewing performance data from a 16S 100Ah battery pack.",

    problem:
      "Large battery packs need careful connection checks and controlled testing because wiring errors, cell imbalance, or abnormal voltage can affect performance and safety.",

    objective:
      "Test the pack safely and understand its electrical behavior under controlled operating conditions.",

    methodology:
      "The battery pack was connected to the Neware test system. Test channels, pack voltage, cell-monitoring leads, and BMS response were checked before and during the test. The recorded data were then reviewed.",

    results:
      "Completed the test setup and pack-level monitoring process, gaining practical experience in high-capacity battery testing, connection verification, and performance evaluation.",

    nextStep:
      "Continue with longer cycle tests, resistance checks, and detailed comparison of pack performance under different operating conditions.",

    tools: [
      "Neware BTS",
      "16S Battery Pack",
      "100Ah Battery",
      "BMS",
      "Voltage Monitoring",
    ],

    detailImage:
      imagePath(
        "neware-16s-100ah-battery-test.jpeg"
      ),

    detailTags: [
      "Pack Monitoring",
      "Test Setup",
      "Battery Data",
      "Safety Check",
    ],

    links: [],
  },

  {
    id: "hl-6",

    title:
      "Li-ion Battery Pack Assembly and BMS Testing",

    subtitle:
      "15S Pack Built from 30 Cells",

    description:
      "Completed the assembly and testing of a 15S lithium-ion battery pack made from 30 cells and connected to a Daly BMS.",

    image:
      imagePath(
        "15s-battery-pack-daly-bms.jpeg"
      ),

    images: [
      imagePath(
        "15s-battery-pack-daly-bms.jpeg"
      ),
      
    ],

    buttonText:
      "See Project",

    buttonLink: "#research",

    tags: [
      "15S Pack",
      "30 Cells",
      "Daly BMS",
      "Battery Testing",
    ],

    category: "Project",

    status: "Completed",

    detailTitle:
      "15S 30-Cell Battery Pack Assembly and Daly BMS Testing",

    summary:
      "Built a 15S battery pack using 30 lithium-ion cells and checked its wiring, voltage sensing, BMS connection, and basic operation.",

    fullDescription:
      "Each cell was rated at 15Ah. The cells were arranged into the required series and parallel groups, connected to the Daly BMS, and checked before practical operation.",

    problem:
      "Incorrect cell grouping, balance wiring, or BMS connection can cause wrong voltage readings, poor performance, component damage, or safety problems.",

    objective:
      "Build a working battery pack and confirm that the cell groups, balance wires, BMS, and pack terminals are connected correctly.",

    methodology:
      "The cells were arranged into a 15S configuration. Cell-group voltage, interconnections, balance leads, pack terminals, and Daly BMS wiring were checked with measurement tools before operation.",

    results:
      "Successfully assembled and tested the 15S 30-cell pack, gaining practical experience in battery-pack construction, balance-wire checking, BMS integration, and safe operation.",

    nextStep:
      "Continue with controlled charge-discharge testing, longer-term monitoring, and more detailed pack-performance analysis.",

    tools: [
      "Daly BMS",
      "15S Battery Pack",
      "30 Li-ion Cells",
      "15Ah Cells",
      "Multimeter",
      "Assembly Tools",
    ],

    detailImage:
      imagePath(
        "15s-battery-pack-daly-bms.jpeg"
      ),

    detailTags: [
      "Pack Assembly",
      "Balance Wiring",
      "Voltage Check",
      "BMS Integration",
    ],

    links: [],
  },
];

/* ------------------------------------------------------------------ */
/*  4. GALLERY                                                        */
/* ------------------------------------------------------------------ */

export const galleryCategories = [
  "Project",
  "Award",
  "Event",
  "Workshop",
  "Presentation",
  "Training",
  "Industrial Visit",
];

export const galleryItems = [
  {
    id: "g-1",

    title:
      "1st IUSC National Science Olympiad — Runner-Up",

    description:
      "Received the runner-up distinction at the 1st IUSC National Science Olympiad, marking a significant achievement in a competitive scientific event.",

    category: "Award",

    date: "",

    image: imagePath("01.jpg"),

    link: "",
  },

  {
    id: "g-2",

    title:
      "GP Accelerator Bootcamp — Rapid Ideation Session",

    description:
      "Collaborated in a time-constrained group exercise to generate a business concept, organize the core value proposition, and prepare it for immediate presentation.",

    category: "Workshop",

    date: "",

    image: imagePath("02.JPG"),

    link: "",
  },

  {
    id: "g-3",

    title:
      "Renewable Energy Fest — Delegate and Panel Participant",

    description:
      "Represented the program as a delegate and participated in an invited panel discussion on renewable-energy innovation, sustainability, and emerging opportunities.",

    category: "Event",

    date: "",

    image: imagePath("03.jpg"),

    link: "",
  },

  {
    id: "g-4",

    title:
      "Digital Innovation Challenge 2024 — Idea Presentation",

    description:
      "Presented an innovation concept to the judging panel, communicating the problem statement, proposed solution, implementation approach, and expected impact.",

    category: "Presentation",

    date: "2024",

    image: imagePath("04.jpg"),

    link: "",
  },

  {
    id: "g-5",

    title:
      "Energy Innovation Challenge 2024 — Renewable-Energy Pitch",

    description:
      "Presented a renewable-energy concept at the Energy Innovation Challenge organized by PRAAN, highlighting its technical approach, practical relevance, and sustainability potential.",

    category: "Presentation",

    date: "2024",

    image: imagePath("05.jpg"),

    link: "",
  },

  {
    id: "g-6",

    title:
      "Islamic University Science Fest 2024 — Project Showcase",

    description:
      "Showcased an engineering project to visitors and explained its design, operating principle, technical features, and potential real-world applications.",

    category: "Project",

    date: "2024",

    image: imagePath("06.jpg"),

    link: "",
  },

  {
    id: "g-7",

    title:
      "GP Accelerator Bootcamp — Three-Minute Business Pitch",

    description:
      "Delivered a three-minute pitch on a business idea developed under strict time constraints, demonstrating rapid ideation, structured communication, and confident delivery.",

    category: "Presentation",

    date: "",

    image: imagePath("07.jpg"),

    link: "",
  },

  {
    id: "g-8",

    title:
      "GP Accelerator Bootcamp — Rooftop Solar Prototype Pitch",

    description:
      "Presented a rooftop solar-energy prototype designed for efficient power generation, intelligent energy monitoring, and coordinated load management to support sustainable electricity use.",

    category: "Project",

    date: "",

    image: imagePath("08.jpg"),

    link: "",
  },

  {
    id: "g-9",

    title:
      "Digital Innovation Challenge 2024 — SolPe Final Pitch",

    description:
      "Delivered the final-stage presentation of SolPe, outlining the concept, its intended users, and the practical value of the proposed innovation to the judging panel.",

    category: "Presentation",

    date: "2024",

    image: imagePath("09.jpg"),

    link: "",
  },

  {
    id: "g-9a",

    title:
      "Digital Innovation Challenge 2024 — Champion Award",

    description:
      "Received the championship recognition for SolPe at the Digital Innovation Challenge 2024, celebrating the strength of the idea and the team's overall performance.",

    category: "Award",

    date: "2024",

    image: imagePath("9a.jpg"),

    link: "",
  },

  {
    id: "g-9b",

    title:
      "Digital Innovation Challenge 2024 — Award Ceremony",

    description:
      "Joined the formal award ceremony with fellow innovators and recognized teams following the conclusion of the Digital Innovation Challenge 2024.",

    category: "Award",

    date: "2024",

    image: imagePath("9 b.jpg"),

    link: "",
  },

  {
    id: "g-10",

    title:
      "Digital Innovation Challenge 2024 — Team Ideation Session",

    description:
      "Contributed to a collaborative discussion to evaluate alternative solutions, refine the team's concept, assign responsibilities, and prepare the final pitch.",

    category: "Workshop",

    date: "2024",

    image: imagePath("10.jpg"),

    link: "",
  },

  {
    id: "g-11",

    title:
      "Energy Innovation Challenge 2024 — Participant Gathering",

    description:
      "Joined the participant photo session at the Energy Innovation Challenge organized by PRAAN, bringing together young innovators working on energy-transition solutions.",

    category: "Event",

    date: "2024",

    image: imagePath("11.jpg"),

    link: "",
  },

  {
    id: "g-12",

    title:
      "Energy Innovation Challenge 2024 — Innovation Campaign",

    description:
      "A campaign moment from the Energy Innovation Challenge 2024, a platform created to encourage young innovators to develop practical and sustainable solutions for the energy transition.",

    category: "Event",

    date: "2024",

    image: imagePath("12.jpg"),

    link: "",
  },

  {
    id: "g-13",

    title:
      "Green Innovation Fest 2025 — National Finalist",

    description:
      "For The Light was selected among the top 20 youth-led SMEs at the Green Innovation Fest 2025, providing an opportunity to present sustainable energy solutions to investors, policymakers, and industry leaders.",

    category: "Award",

    date: "2025",

    image: imagePath("13.jpg"),

    link: "",
  },

  {
    id: "g-14",

    title:
      "Invited Youth Training — Program Completion and Group Recognition",

    description:
      "Concluded the youth training on Climate Action, Sustainability, and Green Entrepreneurship with a group recognition session at the Civil Surgeon's Office, Patuakhali.",

    category: "Training",

    date: "May 2025",

    image: imagePath("14.jpg"),

    link: "",
  },

  {
    id: "g-15",

    title:
      "Invited Youth Training — Participatory Group Exercise",

    description:
      "Facilitated a collaborative activity that encouraged participants to identify local climate challenges, exchange perspectives, and develop practical sustainability-oriented responses.",

    category: "Training",

    date: "May 2025",

    image: imagePath("15.jpg"),

    link: "",
  },

  {
    id: "g-16",

    title:
      "Invited Youth Training — Interactive Demonstration",

    description:
      "Engaged participants through an interactive demonstration and discussion designed to connect climate awareness with practical green-entrepreneurship ideas.",

    category: "Training",

    date: "May 2025",

    image: imagePath("16.jpg"),

    link: "",
  },

  {
    id: "g-17",

    title:
      "Invited Youth Training — Certificate Presentation",

    description:
      "The certificate presentation marked the formal completion of the invited training program and recognized the collaborative contribution of the organizers and participants.",

    category: "Training",

    date: "May 2025",

    image: imagePath("17.jpg"),

    link: "",
  },

  {
    id: "g-18",

    title:
      "Invited Talk — Climate Action and Green Entrepreneurship",

    description:
      "Conducted a youth-focused session on Climate Action, Sustainability, and Green Entrepreneurship at the Civil Surgeon's Office in Patuakhali.",

    category: "Presentation",

    date: "May 2025",

    image: imagePath("18.jpg"),

    link: "",
  },

  {
    id: "g-19a",

    title:
      "TICI Industrial Training — Field Visit and Safety Exposure",

    description:
      "Participated in a supervised field visit to Ghorasal Polash Urea Fertilizer Public Limited Company, gaining direct exposure to industrial safety practices and large-scale plant environments.",

    category: "Industrial Visit",

    date: "",

    image: imagePath("19 a.jpg"),

    link: "",
  },

  {
    id: "g-19b",

    title:
      "TICI Industrial Training — Process Unit Observation",

    description:
      "Observed major process units across the fertilizer facility, including ammonia and urea sections, to understand process integration, equipment scale, and real-world industrial operations.",

    category: "Industrial Visit",

    date: "",

    image: imagePath("19 b.jpg"),

    link: "",
  },

  {
    id: "g-20",

    title:
      "The Restoration Factory Bangladesh 2025 — Grand Closing Ceremony",

    description:
      "Participated in the Grand Closing Ceremony implemented by iDE Bangladesh in partnership with UNEP and Bridge for Billions, alongside innovators advancing Bangladesh's green entrepreneurship ecosystem.",

    category: "Event",

    date: "9 December 2025",

    image: imagePath("20.jpg"),

    link: "",
  },

  {
    id: "g-21",

    title:
      "The Restoration Factory Bangladesh 2025 — For The Light Pitch",

    description:
      "Presented For The Light, a solar-powered initiative designed to improve energy access and safety in climate-vulnerable communities, before an expert jury and ecosystem stakeholders.",

    category: "Presentation",

    date: "9 December 2025",

    image: imagePath("21.jpg"),

    link: "",
  },

  {
    id: "g-22",

    title:
      "The Restoration Factory Bangladesh 2025 — Market Opportunity",

    description:
      "Explained the target market, potential demand, and scalability pathway for For The Light, connecting the proposed solution with a measurable social and commercial opportunity.",

    category: "Presentation",

    date: "9 December 2025",

    image: imagePath("22.jpg"),

    link: "",
  },

  {
    id: "g-23",

    title:
      "The Restoration Factory Bangladesh 2025 — Climate Impact Case",

    description:
      "Presented the climate and safety challenges affecting vulnerable communities and demonstrated how the project could deliver practical, inclusive, and resilient energy solutions.",

    category: "Presentation",

    date: "9 December 2025",

    image: imagePath("23.jpg"),

    link: "",
  },

  {
    id: "g-24",

    title:
      "The Restoration Factory Bangladesh 2025 — Jury Evaluation",

    description:
      "Engaged with the expert jury during the evaluation session, receiving constructive feedback on technical feasibility, impact potential, business development, and future scalability.",

    category: "Event",

    date: "9 December 2025",

    image: imagePath("24.jpg"),

    link: "",
  },

  {
    id: "g-25",

    title:
      "Global SDG Youth Summit 2025 — Innovation Booth Engagement",

    description:
      "Presented the sustainable technology concept to visitors, professionals, and potential collaborators, while gathering valuable feedback on its usability, relevance, and potential for scalable impact.",

    category: "Event",

    date: "24–25 September 2025",

    image: imagePath("25.jpg"),

    link: "",
  },

  {
    id: "g-26",

    title:
      "Global SDG Youth Summit 2025 — Technology Prototype Showcase",

    description:
      "As Chief Technology Officer of the project, showcased the developed prototype and discussed how youth-led clean-energy innovation can support communities and contribute to the UN Sustainable Development Goals.",

    category: "Project",

    date: "24–25 September 2025",

    image: imagePath("26.jpg"),

    link: "",
  },

  {
    id: "g-27",

    title:
      "KolpoKoushol 2023 — Arduino Prototyping at IUB FabLab",

    description:
      "Worked with an interdisciplinary team to develop an experimental Arduino-based musical instrument, combining embedded C programming, electronics, and creative sound design.",

    category: "Workshop",

    date: "2023",

    image: imagePath("27.jpg"),

    link: "",
  },

  {
    id: "g-28",

    title:
      "KolpoKoushol 2023 — AI Music Concert Showcase",

    description:
      "Contributed to the program's AI music initiative through model development and backend integration, supporting creative work later featured in Bangladesh's first AI Music Concert.",

    category: "Event",

    date: "2023",

    image: imagePath("28.jpg"),

    link: "",
  },

  {
    id: "g-29",

    title:
      "KolpoKoushol 2023 — Interdisciplinary Collaboration",

    description:
      "Collaborated with participants from diverse academic and professional backgrounds during the four-day Imagination Engineering program, exchanging ideas across technology, design, and community innovation.",

    category: "Workshop",

    date: "2023",

    image: imagePath("29.jpg"),

    link: "",
  },

  {
    id: "g-30",

    title:
      "KolpoKoushol 2023 — Mentor-Led Technical Discussion",

    description:
      "Engaged in mentor-guided technical discussion to refine interdisciplinary concepts involving AI, blockchain-based crowdfunding, embedded systems, and community-centered problem-solving.",

    category: "Workshop",

    date: "2023",

    image: imagePath("30.jpg"),

    link: "",
  },

  {
    id: "g-31",

    title:
      "KolpoKoushol 2023 — Participant Team",

    description:
      "Completed the selective Imagination Engineering workshop with the participant team, concluding an intensive experience in creative collaboration, rapid learning, and applied technology development.",

    category: "Event",

    date: "2023",

    image: imagePath("31.jpg"),

    link: "",
  },
];
/* ------------------------------------------------------------------ */
/*  5. HONOURS / AWARDS / CERTIFICATES                                */
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
    link:
      "https://www.facebook.com/ieee.iu.student.branch/",
  },

  {
    id: "aw-2",
    title: "Digital Innovation Challenge 2024",
    organization: "ActionAid Bangladesh",
    date: "2024",
    category: "Competition",
    description:
      "Participated in the Digital Innovation Challenge 2024, showcasing creative and technology-driven problem-solving ideas.",
    image: imagePath(
      "digital-innovation-challenge-2024.webp"
    ),
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
    image: imagePath(
      "certified-volunteerism.webp"
    ),
    link: "https://www.lead.academy/",
  },

  {
    id: "aw-4",
    title: "Virtual Internship",
    organization:
      "YSSE \n Communication Department",
    date: "May 2024 - October 2024",
    category: "Internship",
    description:
      "Completed the Virtual Internship Program in the YSSE Communication Department and received a Bronze Certificate for performance and contribution.",
    image: imagePath(
      "virtual-internship.webp"
    ),
    link: "https://ysseacademy.com/",
  },

  {
    id: "aw-5",
    title:
      "IUSC National Science Festival 2024",
    organization:
      "Islamic University Science Club",
    date: "March 2024",
    category: "Award",
    description:
      "Achieved Runner-Up position in the Poster Presentation category at the 1st IUSC National Science Festival 2024.",
    image: imagePath(
      "iusc-national-science-festival-2024.jpeg"
    ),
    link:
      "https://www.facebook.com/groups/1117675018875480/user/100086142219558",
  },

  {
    id: "aw-6",
    title: "Energy Innovation Challenge 2024",
    organization: "PRAAN",
    date: "2024",
    category: "Competition",
    description:
      "Showcased an innovative solution in renewable energy, energy storage, and efficiency at the Energy Innovation Challenge 2024.",
    image: imagePath(
      "energy-innovation-challenge-2024.jpeg"
    ),
    link: "https://praan.org.bd/",
  },

  {
    id: "aw-7",
    title:
      "Spoken English and IELTS Workshop 2025",
    organization:
      "Islamic University Career Club",
    date: "19 January 2025",
    category: "Workshop",
    description:
      "Received a certificate for active participation in the Workshop on Basics of Spoken English and IELTS Program.",
    image: imagePath(
      "spoken-english-ielts-workshop-2025.webp"
    ),
    link:
      "https://www.facebook.com/IUCareerClub",
  },

  {
    id: "aw-8",
    title: "EcoPreneurs Bootcamp 2025",
    organization: "LSS",
    date: "2025",
    category: "Bootcamp",
    description:
      "Participated in the EcoPreneurs Bootcamp 2025, focusing on green entrepreneurship and climate-resilient innovation.",
    image: imagePath(
      "ecopreneurs-bootcamp-2025.webp"
    ),
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
    image: imagePath(
      "green-energy-olympiad-2025.webp"
    ),
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
    image: imagePath(
      "global-sdg-youth-summit-2025.webp"
    ),
    link:
      "https://www.facebook.com/GlobalSDGYouthSummit/",
  },

  {
    id: "aw-11",
    title: "Workshop on VLSI",
    organization:
      "ChipXpert Technologies Pvt. Ltd.",
    date: "September 2025",
    category: "Workshop",
    description:
      "Participated in a Two-Day Workshop on VLSI Design Flow, from RTL to GDS, using industry tools by ChipXpert Technologies Pvt. Ltd., Hyderabad.",
    image: imagePath(
      "ChipXpert Technologies Pvt. Ltd..webp"
    ),
    link: "https://chipxpert.in/",
  },

  {
    id: "aw-12",
    title: "PCB Designing Workshop",
    organization:
      "IEEE RAS IUT Student Branch & Cybernetics.",
    date: "October 2025",
    category: "Workshop",
    description:
      "Successfully completed the Cybernetics PCB Designing Workshop organized by IEEE Robotics and Automation Society IUT Student Branch, including three online sessions on PCB design fundamentals and practical electronics design workflow.",
    image: imagePath(
      "pcb-designing-workshop.jpg"
    ),
    link: "",
  },

  {
    id: "aw-13",
    title:
      "Industrial Technology on Electrical Engineering & Instrumentation",
    organization:
      "Training Institute for Chemical Industries",
    date: "February 2026",
    category: "Training",
    description:
      "Completed a three-week industrial training course on Electrical Engineering and Instrumentation at the Training Institute for Chemical Industries, Polash, Narsingdi, Bangladesh, obtaining an A+ grade in the final evaluation.",
    image: imagePath(
      "industrial-technology-electrical-instrumentation.jpg"
    ),
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
    image: imagePath(
      "soc-estimation-kalman-filters.jpg"
    ),
    link: "https://lms.decibelslab.com/",
  },

  {
    id: "aw-15",
    title:
      "Restoration Factory Bangladesh Incubation Program",
    organization:
      "UN Environment Programme, Bridge for Billions & iDE",
    date: "December 2025",
    category: "Incubation",
    description:
      "Awarded for successfully completing participation in The Restoration Factory Bangladesh incubation program, receiving innovation-focused entrepreneurship training, business mentorship, and support to develop the project 'For The Light', focused on restoration and conservation of the forest ecosystem.",
    image: imagePath(
      "restoration-factory-bangladesh.jpeg"
    ),
    link:
      "https://www.bridgeforbillions.org/",
  },

  {
    id: "aw-16",
    title: "Precise Energy 2025",
    organization:
      "Energy of the Future / ASE Rosatom",
    date: "October 2025",
    category: "Olympiad",
    description:
      "Participated in the final stage of the Precise Energy 2025 Olympiad in Mathematics, Chemistry, and Physics for students of the Rooppur NPP region.",
    image: imagePath("precise Energy.jpeg"),
    link: "",
  },
];

/* ------------------------------------------------------------------ */
/*  6. TECHNICAL SKILLS                                               */
/* ------------------------------------------------------------------ */
export const skills = [
  {
    id: "hard-skills",

  category: "Core Skills",

  eyebrow: "Battery & Modeling",


    summary:
      "Core engineering capabilities used across battery research, testing, simulation, and pack development.",

    type: "skills",

    items: [
      {
        name:
          "Li-ion & LFP Cell Testing",
      },
      {
        name:
          "CC-CV, HPPC, DCIR & OCV Analysis",
      },
      {
        name:
          "BMS Configuration (4S / 16S / 32S)",
      },
      {
        name:
          "Battery Pack Assembly & Validation",
      },
      {
        name:
          "Electrochemical-Thermal Modeling",
      },
      {
        name:
          "PCM-Based Battery Thermal Management",
      },
      {
        name:
          "Thermal Runaway & Safety Analysis",
      },
      {
        name:
          "PCB Prototyping & Circuit Debugging",
      },
    ],
  },

  {
    id: "software-skills",

    category: "Software Skills",

    eyebrow: "Engineering Toolchain",

    summary:
      "Primary software used for multiphysics modeling, data analysis, circuit simulation, PCB design, and CAD.",

    type: "software",

    items: [
      {
        name: "COMSOL Multiphysics",
        icon: "CM",
        note: "Multiphysics",
      },
      {
        name: "MATLAB",
        icon: "M",
        note: "Modeling",
      },
      {
        name: "ANSYS",
        icon: "A",
        note: "CAE",
      },
      {
        name: "Python",
        icon: "Py",
        note: "Data",
      },
      {
        name: "Proteus",
        icon: "Pr",
        note: "Circuit",
      },
      {
        name: "Multisim",
        icon: "Mu",
        note: "Circuit",
      },
      {
        name: "EasyEDA",
        icon: "EE",
        note: "PCB",
      },
      {
        name: "Altium Designer",
        icon: "Al",
        note: "PCB",
      },
      {
        name: "SolidWorks",
        icon: "SW",
        note: "CAD",
      },
      {
        name: "AutoCAD",
        icon: "AC",
        note: "CAD",
      },
    ],
  },

  {
    id: "programming-skills",

    category: "Programming",

    eyebrow: "Code & Automation",

    summary:
      "Languages used for data processing, numerical work, automation, and embedded-system development.",

    type: "skills",

    items: [
      {
        name: "Python",
      },
      {
        name: "MATLAB Scripting",
      },
      {
        name: "C",
      },
      {
        name: "C++ / Arduino",
      },
      {
        name: "Embedded C",
      },
    ],
  },

  {
    id: "hardware-skills",

    category: "Hardware Skills",

    eyebrow:
      "Electronics & Measurement",

    summary:
      "Hands-on capabilities for embedded electronics, PCB work, battery systems, and laboratory measurements.",

    type: "skills",

    items: [
      {
        name: "PIC, ESP32 & STM32",
      },
      {
        name: "Sensor Interfacing",
      },
      {
        name:
          "Oscilloscope & Multimeter",
      },
      {
        name:
          "Schematic & PCB Layout",
      },
      {
        name:
          "BMS Wiring & Pack Monitoring",
      },
      {
        name:
          "Hardware Troubleshooting",
      },
    ],
  },

  {
    id: "soft-skills",

    category: "Soft Skills",

    eyebrow:
      "Research & Collaboration",

    summary:
      "Professional strengths supporting technical communication, teamwork, and project delivery.",

    type: "skills",

    items: [
      {
        name: "Technical Writing",
      },
      {
        name:
          "Scientific Communication",
      },
      {
        name:
          "Research Documentation",
      },
      {
        name:
          "Technical Presentation",
      },
      {
        name: "Leadership",
      },
      {
        name: "Idea Pitching",
      },
      {
        name:
          "Team Collaboration",
      },
      {
        name:
          "Analytical Problem Solving",
      },
    ],
  },
];


      /* ------------------------------------------------------------------ */
/*  7. EDUCATION                                                      */
/* ------------------------------------------------------------------ */

export const education = [
  {
  id: "edu-1",

  degree:
    "B.Sc. in Electrical & Electronic Engineering",

  institution:
    "Islamic University, Bangladesh",

  location:
    "Kushtia, Bangladesh",

  period:
    "Ongoing",

  logo:
    imagePath(
      "logos/islamic-university.jpg"
    ),

  logoAlt:
    "Islamic University logo",

  website:
    "https://www.iu.ac.bd/",

  websiteLabel:
    "Visit University",

  curriculumUrl:
    `${import.meta.env.BASE_URL}assets/Important%20File/EEE-Curriculum.pdf`,

  curriculumLabel:
    "View Curriculum PDF",

  description:
    "Undergraduate study in Electrical and Electronic Engineering with a concentration in Power Electronics. My selected career-relevant curriculum includes VLSI design, power electronics, microprocessors and microcontrollers, control systems, measurements and instrumentation, electrical materials, renewable energy, power systems, protection, laboratory work, thesis research, and industrial training. These areas support my work in Li-ion battery systems, BMS, EV energy storage, embedded electronics, power conversion, and simulation-based engineering.",

  programStats: [
    {
      value: "4 Years",
      label: "Program Duration",
    },
    {
      value: "8",
      label: "Semesters",
    },
    {
      value: "160",
      label: "Total Credits",
    },
  ],

  /*
   * Array order controls the display order.
   * VLSI Design is intentionally placed first.
   */
  courses: [
    {
      code: "EEE-4215",

      title:
        "VLSI Design",

      group:
        "VLSI",
    },

    {
      code: "EEE-4111",

      title:
        "Power Electronics",

      group:
        "Power Electronics",
    },

    {
      code: "EEE-4112",

      title:
        "Power Electronics Sessional",

      group:
        "Laboratory",
    },

    {
      code: "EEE-3107",

      title:
        "Microprocessor, Microcontrollers and Peripherals",

      group:
        "Embedded Systems",
    },

    {
      code: "EEE-3203",

      title:
        "Control System Engineering",

      group:
        "Control",
    },

    {
      code: "EEE-3103",

      title:
        "Measurements and Instrumentation",

      group:
        "Instrumentation",
    },

    {
      code: "EEE-3207",

      title:
        "Electrical Properties of Materials",

      group:
        "Materials",
    },

    {
      code: "EEE-3108",

      title:
        "Microprocessor, Microcontrollers and Peripherals Sessional",

      group:
        "Laboratory",
    },

    {
      code: "EEE-3204",

      title:
        "Control System Engineering Sessional",

      group:
        "Laboratory",
    },

    {
      code: "EEE-3104",

      title:
        "Measurements and Instrumentation Sessional",

      group:
        "Laboratory",
    },

    {
      code: "EEE-4223",

      title:
        "Renewable Energy for Sustainable Development",

      group:
        "Energy",
    },

    {
      code: "EEE-2205",

      title:
        "Digital Electronics",

      group:
        "Digital Systems",
    },

    {
      code: "EEE-3101",

      title:
        "Electronics III",

      group:
        "Electronics",
    },

    {
      code: "EEE-3201",

      title:
        "Power System Analysis I",

      group:
        "Power Systems",
    },

    {
      code: "EEE-4101",

      title:
        "Power System Analysis II",

      group:
        "Power Systems",
    },

    {
      code: "EEE-4229",

      title:
        "Power System Operation and Control",

      group:
        "Power and Control",
    },

    {
      code: "EEE-4201",

      title:
        "Switchgear and Protection",

      group:
        "Protection",
    },

    {
      code: "EEE-4000",

      title:
        "Thesis / Project",

      group:
        "Research",
    },

    {
      code: "EEE-4100",

      title:
        "Industrial Attachment Training / Internship",

      group:
        "Professional",
    },
  ],

  tags: [
    "VLSI Design",
    "Power Electronics",
    "Battery Systems",
    "Embedded Systems",
    "Control Systems",
    "Energy Systems",
  ],
},

  {
    id: "edu-2",

    degree:
      "Higher Secondary Certificate — Science",

    institution:
      "Government Brojomohun College, Barishal",

    location:
      "Barishal, Bangladesh",

    period:
      "Completed",

    logo:
      imagePath(
        "logos/college.jpg"
      ),

    logoAlt:
      "Government Brojomohun College logo",

    website:
      "https://bmcollege.gov.bd/",

    websiteLabel:
      "Visit College",

    curriculumUrl: "",

    curriculumLabel: "",

    description:
      "Completed Higher Secondary education in the Science group, developing a strong foundation in physics, chemistry, mathematics, analytical reasoning, and scientific problem-solving. This preparation supported my transition into Electrical and Electronic Engineering.",

    programStats: [],

    courses: [],

    tags: [
      "Science",
      "Physics",
      "Chemistry",
      "Mathematics",
      "Scientific Foundation",
    ],
  },
];
/* ------------------------------------------------------------------ */
/*8.  EXPERIENCE                                                        */
/* ------------------------------------------------------------------ */

export const experience = [
  {
    id: "exp-1",

    role:
      "Intern",

    organization:
      "OMI Battery Innovation Center",

    location:
      "Bangladesh",

    period:
      "Apr 2026 — Present",

    logo:
      imagePath(
        "logos/omi-battery.jpg"
      ),

    logoAlt:
      "OMI Battery Innovation Center logo",

    website:
      "https://www.linkedin.com/company/omielectricpowertrain/",

    websiteLabel:
      "Visit OMI Battery",

    description:
      "Part-time internship focused on LFP battery-pack applications. Configured and analyzed 4S, 16S, and 32S Battery Management System architectures, supported PCB schematic and layout design, including component placement and pack-monitoring connections, and assisted with battery-pack simulation, BMS performance analysis, system-behavior interpretation, and pack-level safety evaluation.",

    tags: [
      "BMS",
      "LFP Battery Pack",
      "PCB Design",
      "Pack Safety",
    ],
  },

  {
    id: "exp-2",

    role:
      "Research Assistant",

    organization:
      "Materials Science Laboratory, Department of Electrical & Electronic Engineering, Islamic University",

    location:
      "Kushtia, Bangladesh",

    period:
      "Jan 2023 — Present",

    /*
     * Use the university logo because
     * a separate laboratory logo was
     * not provided.
     */
    logo:
      imagePath(
        "logos/islamic-university.jpg"
      ),

    logoAlt:
      "Islamic University logo",

    website:
      "https://www.iu.ac.bd/",

    websiteLabel:
      "Visit University",

    description:
      "Supported Li-ion battery and materials research related to electrochemical behavior, thermal behavior, and energy-storage performance. Assisted with literature review, data interpretation, and technical documentation for battery and materials studies under the supervision of Dr. Momtazul Islam.",

    tags: [
      "Li-ion Battery",
      "Materials Research",
      "Energy Storage",
      "Technical Documentation",
    ],
  },

  {
    id: "exp-3",

    role:
      "Intern",

    organization:
      "Simulation Support BD — SSBD",

    location:
      "Bangladesh",

    period:
      "Feb 2026 — Present",

    logo:
      imagePath(
        "logos/ssbd.jpg"
      ),

    logoAlt:
      "Simulation Support BD logo",

    website:
      "https://www.linkedin.com/company/simulation-support-bd-ssbd/posts/?feedView=all",

    websiteLabel:
      "Visit SSBD",

    description:
      "Part-time internship supporting physics-based modeling and analysis using COMSOL Multiphysics, MATLAB, and ANSYS. Worked on thermal and electrochemical simulation, parameter optimization, result visualization, and interpretation of simulation outputs while collaborating with senior engineers to validate models, improve simulation accuracy, and communicate technical findings.",

    tags: [
      "COMSOL",
      "MATLAB",
      "ANSYS",
      "Simulation",
      "Model Validation",
    ],
  },

  {
    id: "exp-4",

    role:
      "Embedded Systems Developer",

    organization:
      "Solar Lighting & Security System — For The Light",

    location:
      "Bangladesh",

    period:
      "Feb 2024 — Jan 2026",

    logo:
      imagePath(
        "logos/for-the-light.jpg"
      ),

    logoAlt:
      "For The Light project logo",

    /*
     * This opens the project inside
     * your own portfolio.
     */
    website:
      "https://www.linkedin.com/company/106695284/admin/dashboard/",

    websiteLabel:
      "View Project",

    description:
      "Developed solar-powered embedded hardware using microcontrollers, sensors, power-management circuits, and field-oriented renewable-energy design. Performed PCB prototyping, circuit testing, embedded programming, diagnostics, and hardware troubleshooting for a solar lighting and security system.",

    tags: [
      "Embedded Systems",
      "Solar Energy",
      "PCB Prototyping",
      "Microcontrollers",
    ],
  },

  {
    id: "exp-5",

    role:
      "Intern",

    organization:
      "Mage Squad, YSSE",

    location:
      "Bangladesh",

    period:
      "May 2024 — Aug 2024",

    logo:
      imagePath(
        "logos/ysse.jpg"
      ),

    logoAlt:
      "YSSE logo",

    website:
      "https://ysseglobal.org/",

    websiteLabel:
      "Visit YSSE",

    description:
      "Part-time internship involving technical writing and communication. Authored technical articles on AI, innovation, sustainability, and development while strengthening scientific communication, technical writing, and documentation skills for engineering reporting.",

    tags: [
      "Technical Writing",
      "AI",
      "Sustainability",
      "Documentation",
    ],
  },
];
/* ------------------------------------------------------------------ */
/*  9. PUBLICATIONS                                                   */
/* ------------------------------------------------------------------ */

export const publications = [
  {
    id: "pub-1",

    title:
      "A Comprehensive Review of Past and Present Developments of Li-ion Batteries",

    authors:
      "O. Faruque, Md Johurul Isalm, O. Faruq, and M. M. Alam",

    venue:
      "Discover Sustainability, Volume 7, Article 881",

    paperType: "Review Article",

    status: "Published",

    publishedDate: "13 April 2026",

    year: "2026",

    citation:
      "Faruque, O., Isalm, M. J., Faruq, O., and Alam, M. M. A comprehensive review of past and present developments of Li-ion batteries. Discover Sustainability 7, 881 (2026).",

    abstract:
      "This review examines the development of lithium-ion batteries, including electrode and electrolyte materials, electrochemical behavior, battery management systems, degradation, thermal management, mechanical abuse, thermal runaway, insulation-resistance testing, and battery safety.",

    keywords: [
      "Lithium-ion Batteries",
      "Battery Management System",
      "Electrolytes",
      "Anodes",
      "Cathodes",
      "Cycle Life",
      "Battery Safety",
    ],

    link:
      "https://doi.org/10.1007/s43621-026-02920-8",

    downloadUrl:
      "https://link.springer.com/content/pdf/10.1007/s43621-026-02920-8.pdf",
  },

  {
    id: "pub-2",

    title:
      "Optimal Approaches for Total Harmonic Distortion Reduction in Multilevel Inverter Output Currents",

    authors: "",

    venue: "Manuscript Under Review",

    paperType: "Research Article",

    status: "Under Review",

    publishedDate: "Under Review",

    year: "",

    citation: "",

    abstract:
      "This paper investigates methods for reducing Total Harmonic Distortion in a seven-level Cascaded H-Bridge inverter. It combines Artificial Neural Network modeling with the Whale Optimization Algorithm to improve switching angles. It also studies interference elimination, phase matching, high-pass filtering, and low-pass filtering. The simulated low-pass-filter case reports THD of approximately 2.06%.",

    keywords: [
      "Multilevel Inverter",
      "Total Harmonic Distortion",
      "Cascaded H-Bridge",
      "Artificial Neural Network",
      "Whale Optimization Algorithm",
      "Interference Elimination",
      "MATLAB",
      "Simulink",
    ],

    link: "",

    downloadUrl:
      `${import.meta.env.BASE_URL}assets/papers/optimal-approaches-thd-reduction.pdf`,
  },
];
/* ------------------------------------------------------------------ */
/*  10. CONTACT                                                       */
/* ------------------------------------------------------------------ */

export const contactInfo = {
  heading: "Let's Connect",

  intro:
    "I welcome research collaborations, graduate study opportunities, academic partnerships, and professional discussions related to advanced battery technologies, energy storage, and sustainable engineering.",

  location: "Bangladesh",

  phone: "+880 1719-194874",

  whatsapp: "+880 1719-194874",

  email: "faruque.eee@std.iu.ac.bd",

  formRecipient: "faruque.eee@std.iu.ac.bd",
};

/* ------------------------------------------------------------------ */
/*  11. SOCIAL LINKS                                                  */
/* ------------------------------------------------------------------ */

export const socialLinks = [
  {
    platform: "Facebook",
    icon: "facebook",
    url: "https://www.facebook.com/omar.faruque.454061/photos_by",
  },

  {
    platform: "LinkedIn",
    icon: "linkedin",
    url: "https://www.linkedin.com/in/omar-faruque-b29719293/",
  },

  {
    platform: "Email",
    icon: "email",
    url: "mailto:faruque.eee@std.iu.ac.bd",
  },

  {
    platform: "GitHub",
    icon: "github",
    url: "",
  },

  {
    platform: "Instagram",
    icon: "instagram",
    url: "",
  },

  {
    platform: "Google Scholar",
    icon: "scholar",
    url: "",
  },

  {
    platform: "ResearchGate",
    icon: "researchgate",
    url: "",
  },
];
/* ------------------------------------------------------------------ */
/*  NAVIGATION                                                        */
/* ------------------------------------------------------------------ */

export const navLinks = [
  {
    label: "Home",
    to: "home",
  },

  {
    label: "About",
    to: "about",
  },

  {
    label: "Research",
    to: "research",
  },

  {
    label: "Publications",
    to: "publications",
  },

  {
    label: "Awards",
    to: "awards",
  },

  {
    label: "Skills",
    to: "skills",
  },

  {
    label: "Journey",
    to: "journey",
  },

  {
    label: "Gallery",
    to: "gallery",
  },

  {
    label: "Contact",
    to: "contact",
  },
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
