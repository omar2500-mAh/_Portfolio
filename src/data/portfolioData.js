/* ------------------------------------------------------------------ */
/*  6. TECHNICAL SKILLS                                               */
/* ------------------------------------------------------------------ */
export const skills = [
  {
    id: "skill-battery-testing",

    category: "Battery Testing & Characterization",

    icon: "activity",

    badge: "Experimental",

    layout: "wide",

    metric: "CC–CV · HPPC · DCIR",

    metricLabel:
      "Cell and pack-level electrochemical test protocols",

    description:
      "Hands-on electrochemical characterization of lithium-ion and LFP cells using controlled test procedures, cycler data, and performance diagnostics.",

    items: [
      {
        name: "Charge–Discharge Testing",

        detail:
          "CC–CV charging, constant-current discharging, capacity validation, energy-efficiency evaluation, and cycle-life testing.",
      },

      {
        name: "Performance Characterization",

        detail:
          "Rate-capability, coulombic-efficiency, OCV/rest response, voltage-profile, and capacity-retention analysis.",
      },

      {
        name: "Resistance & Pulse Testing",

        detail:
          "HPPC testing, DC internal-resistance measurement, pulse-response interpretation, and resistance-trend evaluation.",
      },

      {
        name: "Cycler Data Interpretation",

        detail:
          "Extraction and interpretation of voltage, current, capacity, energy, efficiency, resistance, and degradation trends.",
      },
    ],

    tools: [
      "Neware BTS",
      "CC–CV Cycling",
      "HPPC",
      "DCIR",
      "OCV Characterization",
      "Cycle-Life Testing",
    ],

    evidence:
      "Applied during cell- and pack-level testing at OMI Battery Innovation Center for LFP energy-storage applications.",
  },

  {
    id: "skill-bms-pack",

    category: "Battery Pack & BMS Engineering",

    icon: "battery",

    badge: "Pack Level",

    layout: "wide",

    metric: "4S · 16S · 32S",

    metricLabel:
      "Practical BMS configurations for lithium-ion and LFP packs",

    description:
      "Pack-level engineering experience covering BMS configuration, monitoring, protection review, balancing considerations, wiring verification, and hardware troubleshooting.",

    items: [
      {
        name: "BMS Configuration",

        detail:
          "Practical work with 4S, 16S, and 32S BMS architectures for lithium-ion and LFP battery packs.",
      },

      {
        name: "Protection Verification",

        detail:
          "Review of overvoltage, undervoltage, overcurrent, short-circuit, and temperature-protection behavior.",
      },

      {
        name: "Pack Monitoring & Balancing",

        detail:
          "Cell-voltage monitoring, balance-lead verification, pack-status observation, and cell-balancing considerations.",
      },

      {
        name: "Pack Integration",

        detail:
          "Support for sensing connections, BMS wiring, component placement, pack assembly, validation, and system-level troubleshooting.",
      },
    ],

    tools: [
      "4S BMS",
      "16S BMS",
      "32S BMS",
      "Daly BMS",
      "LFP Packs",
      "Pack Monitoring",
    ],

    evidence:
      "Developed through BMS configuration, 15S/16S pack work, high-capacity battery testing, and practical pack-level validation.",
  },

  {
    id: "skill-electrochemical-modeling",

    category: "Electrochemical Battery Modeling",

    icon: "layers",

    badge: "Physics Based",

    layout: "standard",

    metric: "P2D / DFN",

    metricLabel:
      "Porous-electrode lithium-ion cell modeling framework",

    description:
      "Physics-based lithium-ion cell modeling from electrode-scale transport and interfacial kinetics to complete voltage and state-variable prediction.",

    items: [
      {
        name: "P2D / Newman Formulation",

        detail:
          "Porous-electrode modeling across negative electrode, separator, and positive electrode domains.",
      },

      {
        name: "Interfacial Kinetics",

        detail:
          "Butler–Volmer reaction kinetics, exchange-current behavior, overpotential, and reaction-current distribution.",
      },

      {
        name: "Mass & Charge Transport",

        detail:
          "Solid-particle diffusion, electrolyte concentration transport, and solid/electrolyte potential distributions.",
      },

      {
        name: "Cell-Level Analysis",

        detail:
          "Voltage-response, SOC, current, concentration, heat-generation, and C-rate behavior interpretation.",
      },
    ],

    tools: [
      "COMSOL Battery Design",
      "MATLAB",
      "LFP/Graphite",
      "P2D",
      "Butler–Volmer",
      "Equivalent-Circuit Models",
    ],

    evidence:
      "Implemented and studied electrochemical lithium-ion models through COMSOL-based academic and client-driven simulation work.",
  },

  {
    id: "skill-thermal-modeling",

    category: "Thermal & Multiphysics Simulation",

    icon: "flame",

    badge: "CAE",

    layout: "standard",

    metric: "≈33 °C",

    metricLabel:
      "Simulated pack temperature achieved using PCM cooling",

    description:
      "Coupled thermal analysis of cells and packs, including internal heat generation, transient heat transfer, phase change, and thermal-uniformity evaluation.",

    items: [
      {
        name: "Electrochemical–Thermal Coupling",

        detail:
          "Coupling of cell electrochemistry with temperature-dependent heat generation and thermal response.",
      },

      {
        name: "Battery Heat Generation",

        detail:
          "Analysis of reversible entropic heat, irreversible polarization heat, ohmic heating, and total thermal loss.",
      },

      {
        name: "Transient Heat Transfer",

        detail:
          "Conduction, natural convection, temperature-gradient, cell-to-pack, and time-dependent thermal analysis.",
      },

      {
        name: "PCM Thermal Management",

        detail:
          "Paraffin/OM32 PCM and composite PCM enhanced using SiO₂ and expanded graphite for pack cooling.",
      },
    ],

    tools: [
      "COMSOL Multiphysics",
      "Heat Transfer",
      "CFD",
      "MATLAB",
      "ANSYS",
      "Phase Change Materials",
    ],

    evidence:
      "Undergraduate thesis models PCM-cooled cylindrical-cell packs and evaluates peak temperature, thermal uniformity, and material trade-offs.",
  },

  {
    id: "skill-safety-degradation",

    category: "Battery Safety & Degradation Modeling",

    icon: "radar",

    badge: "Safety",

    layout: "standard",

    description:
      "Modeling and interpretation of abuse-triggered battery failure, exothermic reactions, propagation risk, and performance degradation.",

    items: [
      {
        name: "Thermal Runaway",

        detail:
          "ARC Heat–Wait–Seek simulation of self-heating onset, temperature acceleration, and runaway progression.",
      },

      {
        name: "Reaction Kinetics",

        detail:
          "Arrhenius-based SEI, anode–electrolyte, cathode–solvent, and electrolyte decomposition reactions.",
      },

      {
        name: "Failure Propagation",

        detail:
          "Cell-to-cell heat-transfer and propagation-risk analysis under different thermal boundary conditions.",
      },

      {
        name: "Capacity-Fade Analysis",

        detail:
          "Interpretation of cycle-life degradation, efficiency drift, resistance increase, SEI growth, and thermal-aging pathways.",
      },
    ],

    tools: [
      "ARC HWS",
      "Arrhenius Kinetics",
      "Thermal Runaway",
      "Failure Propagation",
      "SEI Growth",
      "Cycle Aging",
    ],

    evidence:
      "Supported by COMSOL thermal-runaway models and first-author literature research on lithium-ion degradation and safety.",
  },

  {
    id: "skill-model-validation",

    category: "Model Calibration & Engineering Data",

    icon: "braces",

    badge: "Test to Model",

    layout: "standard",

    description:
      "Connecting experimental battery-test data with simulation through parameter identification, post-processing, comparison, and model-quality assessment.",

    items: [
      {
        name: "Parameter Estimation",

        detail:
          "Identification and adjustment of electrochemical, thermal, kinetic, and operating parameters.",
      },

      {
        name: "Model Validation",

        detail:
          "Comparison of simulated voltage, capacity, temperature, and resistance behavior against cycler data and expected physical trends.",
      },

      {
        name: "Sensitivity & Convergence",

        detail:
          "Parameter-sensitivity studies, mesh checks, time-step assessment, and interpretation of numerical stability.",
      },

      {
        name: "Automated Post-Processing",

        detail:
          "Processing, visualization, correlation, and comparison of experimental and simulation results using scripts.",
      },
    ],

    tools: [
      "Python",
      "NumPy",
      "pandas",
      "SciPy",
      "Matplotlib",
      "MATLAB Scripting",
    ],

    evidence:
      "Used to extract cycler trends, evaluate degradation, automate plots, and close the experimental test-to-model workflow.",
  },

  {
    id: "skill-electronics",

    category: "Electronics, PCB & Embedded Systems",

    icon: "circuit",

    badge: "Hardware",

    layout: "half",

    description:
      "Practical electronics development combining circuit simulation, embedded control, PCB workflows, sensors, measurement, and troubleshooting.",

    items: [
      {
        name: "PCB & Circuit Development",

        detail:
          "Schematic development, component placement, PCB prototyping, sensing connections, layout review, and circuit debugging.",
      },

      {
        name: "Embedded Programming",

        detail:
          "Microcontroller programming and control logic using C/C++, Arduino, PIC, ESP32, and STM32-oriented platforms.",
      },

      {
        name: "Measurement & Diagnostics",

        detail:
          "Multimeter and oscilloscope operation, signal checking, sensor interfacing, calibration, and hardware fault diagnosis.",
      },

      {
        name: "Power-Electronics Systems",

        detail:
          "Solar IPS/inverter control, PWM/SPWM concepts, protection logic, voltage/current monitoring, and power-management circuits.",
      },
    ],

    tools: [
      "C/C++",
      "PIC",
      "ESP32",
      "STM32",
      "Proteus",
      "Multisim",
      "EasyEDA",
      "Altium",
    ],

    evidence:
      "Demonstrated through BMS hardware support, PCB workshops, solar emergency systems, and PIC-based inverter-control development.",
  },

  {
    id: "skill-engineering-tools",

    category: "Engineering Software & Development Tools",

    icon: "wrench",

    badge: "Toolchain",

    layout: "half",

    description:
      "A multidisciplinary engineering toolchain supporting simulation, data processing, electronics development, mechanical drafting, and technical delivery.",

    items: [
      {
        name: "Simulation Environment",

        detail:
          "COMSOL Multiphysics, MATLAB, ANSYS, Proteus, and Multisim for physics, control, circuit, and system analysis.",
      },

      {
        name: "Programming Environment",

        detail:
          "Python, MATLAB scripting, C, C++, and Arduino-based development for analysis and embedded applications.",
      },

      {
        name: "Design Environment",

        detail:
          "EasyEDA and Altium for PCB work; SolidWorks and AutoCAD for engineering drawing and design support.",
      },

      {
        name: "Developing Capabilities",

        detail:
          "Currently expanding practical knowledge of PyBaMM, Simulink, machine learning, and battery state-estimation workflows.",
      },
    ],

    tools: [
      "COMSOL",
      "MATLAB",
      "ANSYS",
      "Python",
      "SolidWorks",
      "AutoCAD",
      "PyBaMM (Learning)",
      "Simulink (Learning)",
    ],

    evidence:
      "Selected tools reflect those repeatedly used across battery research, internships, simulation projects, and embedded-system work.",
  },

  {
    id: "skill-research-communication",

    category: "Research Engineering & Technical Communication",

    icon: "document",

    badge: "Research",

    layout: "full",

    description:
      "Transforming technical work into reproducible models, defensible engineering reports, peer-reviewed research, and clear presentations.",

    items: [
      {
        name: "Scientific Literature Analysis",

        detail:
          "Systematic interpretation of battery materials, degradation, performance, thermal behavior, and safety literature.",
      },

      {
        name: "Model Documentation",

        detail:
          "Documentation of governing equations, assumptions, material parameters, boundary conditions, limitations, and validity ranges.",
      },

      {
        name: "Engineering Reporting",

        detail:
          "Preparation of test records, result tables, simulation reports, technical documentation, and engineering presentations.",
      },

      {
        name: "Research Publication",

        detail:
          "First-author peer-reviewed publication experience in lithium-ion battery development, degradation, performance, and safety.",
      },
    ],

    tools: [
      "Technical Writing",
      "Literature Review",
      "Data Visualization",
      "LaTeX",
      "Research Reporting",
      "Technical Presentation",
    ],

    evidence:
      "Includes a first-author Springer Nature review article and technical reporting across research, testing, and simulation roles.",
  },
];
