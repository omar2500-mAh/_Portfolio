import { useMemo, useState } from "react";
import {
  AnimatePresence,
  motion,
} from "framer-motion";
import {
  ArrowRight,
  MousePointerClick,
  X,
} from "lucide-react";
import { useData } from "../context/DataContext";
import SmartImage from "./SmartImage";
import SocialIcons from "./SocialIcons";

/* ================================================================ */
/* IMAGE PATH                                                        */
/* ================================================================ */

function imagePath(fileName) {
  return `${import.meta.env.BASE_URL}assets/images/${fileName}`;
}

/* ================================================================ */
/* FALLBACK SOFTWARE DATA                                            */
/* ================================================================ */

const FALLBACK_SOFTWARE = [
  {
    name: "COMSOL",
    icon: imagePath(
      "software/comsol.png"
    ),
    accent: "blue",
  },

  {
    name: "MATLAB",
    icon: imagePath(
      "software/matlab.png"
    ),
    accent: "orange",
  },

  {
    name: "Python",
    icon: imagePath(
      "software/Python.webp"
    ),
    accent: "yellow",
  },

  {
    name: "ANSYS",
    icon: imagePath(
      "software/ansys.jpg"
    ),
    accent: "red",
  },

  {
    name: "Proteus",
    icon: imagePath(
      "software/proteus.png"
    ),
    accent: "green",
  },

  {
    name: "EasyEDA",
    icon: imagePath(
      "software/images.png"
    ),
    accent: "purple",
  },
];

/* ================================================================ */
/* SOFTWARE DETAILS                                                  */
/* ================================================================ */

const SOFTWARE_DETAILS = {
  COMSOL: {
    title: "COMSOL Multiphysics",

    note:
      "Battery & Multiphysics Simulation",

    description:
      "Used for electrochemical battery modeling, PCM thermal management, heat-transfer analysis, and thermal-runaway simulation.",
  },

  MATLAB: {
    title: "MATLAB",

    note:
      "Modeling & Data Analysis",

    description:
      "Used for numerical analysis, result processing, optimization, visualization, and engineering calculations.",
  },

  Python: {
    title: "Python",

    note:
      "Automation & Data Processing",

    description:
      "Used for scientific computing, battery-data processing, automation, plotting, and model-development workflows.",
  },

  ANSYS: {
    title: "ANSYS",

    note:
      "Engineering Simulation",

    description:
      "Used for computer-aided engineering, thermal analysis, and simulation-based evaluation of engineering systems.",
  },

  Proteus: {
    title: "Proteus",

    note:
      "Circuit & Embedded Simulation",

    description:
      "Used for electronic-circuit simulation, microcontroller projects, embedded-system testing, and circuit debugging.",
  },

  EasyEDA: {
    title: "EasyEDA",

    note:
      "Schematic & PCB Design",

    description:
      "Used for schematic development, PCB layout, component placement, and electronics prototyping.",
  },
};

/* ================================================================ */
/* ACCENT COLORS                                                     */
/* ================================================================ */

const ACCENT_META = {
  blue: {
    color: "#22d3ee",
    glow:
      "rgba(34, 211, 238, 0.38)",
  },

  orange: {
    color: "#fb923c",
    glow:
      "rgba(251, 146, 60, 0.38)",
  },

  yellow: {
    color: "#facc15",
    glow:
      "rgba(250, 204, 21, 0.36)",
  },

  red: {
    color: "#fb7185",
    glow:
      "rgba(251, 113, 133, 0.38)",
  },

  green: {
    color: "#34d399",
    glow:
      "rgba(52, 211, 153, 0.38)",
  },

  purple: {
    color: "#a78bfa",
    glow:
      "rgba(167, 139, 250, 0.4)",
  },
};

/* ================================================================ */
/* HERO COMPONENT                                                    */
/* ================================================================ */

export default function Hero() {
  const { data } = useData();

  const heroData =
    data?.heroData || {};

  const socialLinks =
    data?.socialLinks || [];

  const [
    activeSoftware,
    setActiveSoftware,
  ] = useState(null);

  const softwareIcons = useMemo(() => {
    const source =
      Array.isArray(
        heroData.floatingSkills
      ) &&
      heroData.floatingSkills.length > 0
        ? heroData.floatingSkills
        : FALLBACK_SOFTWARE;

    return source.map((software) => {
      const details =
        SOFTWARE_DETAILS[
          software.name
        ] || {
          title: software.name,
          note:
            "Engineering Software",
          description:
            "Used as part of engineering analysis, simulation, design, and technical project development.",
        };

      const accent =
        ACCENT_META[
          software.accent
        ] || ACCENT_META.blue;

      return {
        ...software,
        ...details,
        color: accent.color,
        glow: accent.glow,
      };
    });
  }, [heroData.floatingSkills]);

  const backgroundImage =
    heroData.backgroundImage ||
    imagePath("ph-img-21.webp");

  const name =
    heroData.name ||
    "Omar Faruque";

  const stats = Array.isArray(
    heroData.stats
  )
    ? heroData.stats.slice(0, 3)
    : [];

  const buttons = Array.isArray(
    heroData.ctaButtons
  )
    ? heroData.ctaButtons
    : [];

  const scrollTo = (id) => {
    if (!id) return;

    const element =
      document.getElementById(id);

    if (!element) return;

    const top =
      element.getBoundingClientRect()
        .top +
      window.scrollY -
      76;

    window.scrollTo({
      top,
      behavior: "smooth",
    });
  };

  const handleSoftwareClick = (
    software
  ) => {
    setActiveSoftware((current) =>
      current?.name === software.name
        ? null
        : software
    );
  };

  return (
    <section
      id="home"
      className="relative flex min-h-screen items-center overflow-hidden bg-navy-gradient pb-16 pt-24"
    >
      {/* ======================================================== */}
      {/* BACKGROUND IMAGE                                         */}
      {/* ======================================================== */}

      <div className="pointer-events-none absolute inset-0">
        <img
          src={backgroundImage}
          alt=""
          aria-hidden="true"
          className="h-full w-full object-cover object-center opacity-45"
        />

        <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/72 to-black/45" />

        <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-transparent to-black/80" />

        <div className="absolute inset-0 bg-mesh opacity-25" />
      </div>

      {/* ======================================================== */}
      {/* GLOW EFFECTS                                             */}
      {/* ======================================================== */}

      <motion.div
        className="pointer-events-none absolute -right-32 -top-32 h-96 w-96 rounded-full bg-gold/10 blur-3xl"
        animate={{
          scale: [1, 1.2, 1],
          opacity: [
            0.35,
            0.65,
            0.35,
          ],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      <motion.div
        className="pointer-events-none absolute -bottom-20 -left-32 h-96 w-96 rounded-full bg-navy-800/60 blur-3xl"
        animate={{
          scale: [1, 1.15, 1],
          opacity: [
            0.4,
            0.65,
            0.4,
          ],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      {/* ======================================================== */}
      {/* MAIN CONTENT                                             */}
      {/* ======================================================== */}

      <div className="relative z-10 mx-auto grid w-full max-w-[88rem] grid-cols-1 items-center gap-12 px-5 sm:px-8 lg:grid-cols-12 lg:gap-8">
        {/* ====================================================== */}
        {/* LEFT CONTENT                                           */}
        {/* ====================================================== */}

        <div className="text-center lg:col-span-7 lg:text-left">
          {/* Status */}

          {heroData.status && (
            <motion.div
              initial={{
                opacity: 0,
                y: 16,
              }}
              animate={{
                opacity: 1,
                y: 0,
              }}
              transition={{
                duration: 0.5,
              }}
              className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/[0.08] px-4 py-2 backdrop-blur-md"
            >
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-white opacity-60" />

                <span className="relative inline-flex h-2 w-2 rounded-full bg-white" />
              </span>

              <span className="text-xs font-semibold uppercase tracking-[0.16em] text-white/90">
                {heroData.status}
              </span>
            </motion.div>
          )}

          {/* Name */}

          <motion.h1
            initial={{
              opacity: 0,
              y: 24,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              duration: 0.7,
              delay: 0.1,
            }}
            className="font-display text-5xl font-extrabold leading-[1.04] tracking-tight text-white sm:text-6xl lg:text-7xl"
          >
            {name}
          </motion.h1>

          {/* Title */}

          {heroData.title && (
            <motion.p
              initial={{
                opacity: 0,
                y: 20,
              }}
              animate={{
                opacity: 1,
                y: 0,
              }}
              transition={{
                duration: 0.6,
                delay: 0.25,
              }}
              className="mt-5 whitespace-pre-line text-lg font-semibold leading-relaxed text-white/90 sm:text-xl"
            >
              {heroData.title}
            </motion.p>
          )}

          {/* Tagline */}

          {heroData.tagline && (
            <motion.p
              initial={{
                opacity: 0,
                y: 20,
              }}
              animate={{
                opacity: 1,
                y: 0,
              }}
              transition={{
                duration: 0.6,
                delay: 0.35,
              }}
              className="mx-auto mt-6 max-w-3xl whitespace-pre-line text-base leading-relaxed text-white/65 sm:text-lg lg:mx-0"
            >
              {heroData.tagline}
            </motion.p>
          )}

          {/* CTA buttons */}

          {buttons.length > 0 && (
            <motion.div
              initial={{
                opacity: 0,
                y: 20,
              }}
              animate={{
                opacity: 1,
                y: 0,
              }}
              transition={{
                duration: 0.6,
                delay: 0.45,
              }}
              className="mt-8 flex flex-wrap items-center justify-center gap-3 lg:justify-start"
            >
              {buttons.map((button) =>
                button.href ? (
                  <a
                    key={button.label}
                    href={button.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={ctaClass(
                      button.primary
                    )}
                  >
                    {button.label}

                    {button.primary && (
                      <ArrowRight className="h-4 w-4" />
                    )}
                  </a>
                ) : (
                  <button
                    key={button.label}
                    type="button"
                    onClick={() =>
                      scrollTo(
                        button.scrollTo
                      )
                    }
                    className={ctaClass(
                      button.primary
                    )}
                  >
                    {button.label}

                    {button.primary && (
                      <ArrowRight className="h-4 w-4" />
                    )}
                  </button>
                )
              )}
            </motion.div>
          )}

          {/* Stats */}

          {stats.length > 0 && (
            <motion.div
              initial={{
                opacity: 0,
                y: 20,
              }}
              animate={{
                opacity: 1,
                y: 0,
              }}
              transition={{
                duration: 0.6,
                delay: 0.55,
              }}
              className="mt-8 grid max-w-3xl grid-cols-1 gap-3 sm:grid-cols-3"
            >
              {stats.map((stat) => (
                <div
                  key={`${stat.value}-${stat.label}`}
                  className="rounded-2xl border border-white/10 bg-black/25 px-5 py-4 text-left backdrop-blur-md transition-all duration-300 hover:border-white/20 hover:bg-white/[0.07]"
                >
                  <div className="font-display text-xl font-bold text-white sm:text-2xl">
                    {stat.value}
                  </div>

                  <div className="mt-1 text-[10px] font-semibold uppercase tracking-[0.16em] text-white/40">
                    {stat.label}
                  </div>
                </div>
              ))}
            </motion.div>
          )}

          {/* Social links */}

          {socialLinks.length > 0 && (
            <motion.div
              initial={{
                opacity: 0,
                y: 20,
              }}
              animate={{
                opacity: 1,
                y: 0,
              }}
              transition={{
                duration: 0.6,
                delay: 0.65,
              }}
              className="mt-6 flex justify-center lg:justify-start"
            >
              <SocialIcons
                links={socialLinks}
                variant="dark"
              />
            </motion.div>
          )}
        </div>

        {/* ====================================================== */}
        {/* RIGHT PROFILE AND SOFTWARE ORBIT                        */}
        {/* ====================================================== */}

        <motion.div
          initial={{
            opacity: 0,
            scale: 0.92,
          }}
          animate={{
            opacity: 1,
            scale: 1,
          }}
          transition={{
            duration: 0.8,
            delay: 0.3,
          }}
          className="flex justify-center lg:col-span-5"
        >
          <div className="relative h-[400px] w-[400px] sm:h-[480px] sm:w-[480px] lg:h-[520px] lg:w-[520px]">
            {/* Orbit circles */}

            <div className="pointer-events-none absolute left-1/2 top-1/2 h-[72%] w-[72%] -translate-x-1/2 -translate-y-1/2 rounded-full border border-white/[0.06]" />

            <div className="pointer-events-none absolute left-1/2 top-1/2 h-[86%] w-[86%] -translate-x-1/2 -translate-y-1/2 rounded-full border border-white/[0.05]" />

            <div className="pointer-events-none absolute left-1/2 top-1/2 h-full w-full -translate-x-1/2 -translate-y-1/2 rounded-full border border-white/[0.035]" />

            {/* Back half of orbit */}

            <OrbitVisualLayer
              icons={softwareIcons}
              layer="back"
              activeName={
                activeSoftware?.name
              }
            />

            {/* Profile image */}

            <div className="absolute left-1/2 top-1/2 z-10 -translate-x-1/2 -translate-y-1/2">
              <motion.div
                className="absolute -inset-6 rounded-[2.5rem] bg-white/10 blur-2xl"
                animate={{
                  opacity: [
                    0.15,
                    0.32,
                    0.15,
                  ],
                  scale: [
                    0.98,
                    1.03,
                    0.98,
                  ],
                }}
                transition={{
                  duration: 5,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              />

              <motion.div
                animate={{
                  y: [0, -7, 0],
                }}
                transition={{
                  duration: 5,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="relative h-[340px] w-[275px] overflow-hidden rounded-[2rem] border border-white/15 bg-white/[0.06] p-2 shadow-elevate backdrop-blur-md sm:h-[410px] sm:w-[330px] lg:h-[445px] lg:w-[355px]"
              >
                <SmartImage
                  src={
                    heroData.profileImage
                  }
                  alt={name}
                  className="h-full w-full rounded-[1.6rem]"
                  imgClassName="h-full w-full object-cover object-top"
                  placeholderLabel="Add profile image"
                />

                <div className="pointer-events-none absolute inset-2 rounded-[1.6rem] bg-gradient-to-t from-black/20 via-transparent to-white/[0.04]" />
              </motion.div>
            </div>

            {/* Front half of orbit */}

            <OrbitVisualLayer
              icons={softwareIcons}
              layer="front"
              activeName={
                activeSoftware?.name
              }
            />

            {/* Clickable invisible hotspots */}

            <OrbitClickLayer
              icons={softwareIcons}
              onSelect={
                handleSoftwareClick
              }
            />

            {/* Software detail popup */}

            <AnimatePresence mode="wait">
              {activeSoftware ? (
                <SoftwarePopup
                  key={
                    activeSoftware.name
                  }
                  software={
                    activeSoftware
                  }
                  onClose={() =>
                    setActiveSoftware(
                      null
                    )
                  }
                />
              ) : (
                <motion.div
                  key="click-hint"
                  initial={{
                    opacity: 0,
                    y: 8,
                  }}
                  animate={{
                    opacity: 1,
                    y: 0,
                  }}
                  exit={{
                    opacity: 0,
                    y: 8,
                  }}
                  className="pointer-events-none absolute bottom-1 left-1/2 z-40 inline-flex -translate-x-1/2 items-center gap-2 whitespace-nowrap rounded-full border border-white/10 bg-black/65 px-3 py-2 text-[10px] font-semibold uppercase tracking-[0.13em] text-white/45 backdrop-blur-md"
                >
                  <MousePointerClick className="h-3.5 w-3.5 text-gold" />

                  Click a software icon
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </motion.div>
      </div>

      {/* ======================================================== */}
      {/* SCROLL INDICATOR                                         */}
      {/* ======================================================== */}

      <motion.div
        className="absolute bottom-6 left-1/2 hidden -translate-x-1/2 flex-col items-center gap-2 sm:flex"
        animate={{
          y: [0, 8, 0],
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      >
        <span className="text-[10px] uppercase tracking-[0.2em] text-white/35">
          Scroll
        </span>

        <div className="flex h-9 w-5 justify-center rounded-full border border-white/20 pt-1.5">
          <motion.span
            className="h-1.5 w-1 rounded-full bg-white/80"
            animate={{
              y: [0, 12, 0],
              opacity: [1, 0.3, 1],
            }}
            transition={{
              duration: 1.8,
              repeat: Infinity,
            }}
          />
        </div>
      </motion.div>
    </section>
  );
}

/* ================================================================ */
/* VISUAL ORBIT LAYER                                                */
/* ================================================================ */

function OrbitVisualLayer({
  icons,
  layer,
  activeName,
}) {
  const isBack =
    layer === "back";

  return (
    <div
      className={`pointer-events-none absolute inset-0 ${
        isBack ? "z-0" : "z-20"
      }`}
      style={{
        clipPath: isBack
          ? "inset(0 0 50% 0)"
          : "inset(50% 0 0 0)",
      }}
    >
      <motion.div
        className="absolute inset-0"
        initial={{
          rotate: 12,
        }}
        animate={{
          rotate: 372,
        }}
        transition={{
          duration: 30,
          repeat: Infinity,
          ease: "linear",
        }}
      >
        {icons.map(
          (software, index) => {
            const angle =
              (360 / icons.length) *
              index;

            const isActive =
              activeName ===
              software.name;

            return (
              <div
                key={`${layer}-${software.name}`}
                className="absolute left-1/2 top-1/2"
                style={{
                  transform: `translate(-50%, -50%) rotate(${angle}deg) translateY(calc(-1 * clamp(158px, 18vw, 230px)))`,
                }}
              >
                <motion.div
                  initial={{
                    rotate:
                      -12 - angle,
                  }}
                  animate={{
                    rotate:
                      -372 - angle,
                    scale: isActive
                      ? 1.15
                      : 1,
                  }}
                  transition={{
                    rotate: {
                      duration: 30,
                      repeat: Infinity,
                      ease: "linear",
                    },

                    scale: {
                      duration: 0.25,
                    },
                  }}
                  className="relative flex h-14 w-14 items-center justify-center rounded-2xl border border-white/15 bg-black/80 p-2.5 backdrop-blur-md sm:h-16 sm:w-16"
                  style={{
                    borderColor:
                      isActive
                        ? software.color
                        : undefined,

                    boxShadow:
                      isActive
                        ? `0 0 38px ${software.glow}`
                        : `0 0 25px ${software.glow}`,
                  }}
                >
                  <img
                    src={software.icon}
                    alt={software.name}
                    className="h-full w-full rounded-lg object-contain"
                  />

                  <span
                    className="absolute -bottom-1 h-2 w-2 rounded-full border border-black"
                    style={{
                      backgroundColor:
                        software.color,
                    }}
                  />

                  {isActive && (
                    <motion.span
                      initial={{
                        opacity: 0,
                        scale: 0.7,
                      }}
                      animate={{
                        opacity: 1,
                        scale: 1,
                      }}
                      className="absolute -inset-1 rounded-[1.15rem] border"
                      style={{
                        borderColor:
                          software.color,
                      }}
                    />
                  )}
                </motion.div>
              </div>
            );
          }
        )}
      </motion.div>
    </div>
  );
}

/* ================================================================ */
/* CLICKABLE ORBIT HOTSPOTS                                          */
/* ================================================================ */

function OrbitClickLayer({
  icons,
  onSelect,
}) {
  return (
    <div className="pointer-events-none absolute inset-0 z-30">
      <motion.div
        className="absolute inset-0"
        initial={{
          rotate: 12,
        }}
        animate={{
          rotate: 372,
        }}
        transition={{
          duration: 30,
          repeat: Infinity,
          ease: "linear",
        }}
      >
        {icons.map(
          (software, index) => {
            const angle =
              (360 / icons.length) *
              index;

            return (
              <div
                key={`click-${software.name}`}
                className="absolute left-1/2 top-1/2"
                style={{
                  transform: `translate(-50%, -50%) rotate(${angle}deg) translateY(calc(-1 * clamp(158px, 18vw, 230px)))`,
                }}
              >
                <motion.button
                  type="button"
                  aria-label={`View ${software.title} details`}
                  title={`Click to view ${software.title}`}
                  onClick={() =>
                    onSelect(software)
                  }
                  initial={{
                    rotate:
                      -12 - angle,
                  }}
                  animate={{
                    rotate:
                      -372 - angle,
                  }}
                  transition={{
                    duration: 30,
                    repeat: Infinity,
                    ease: "linear",
                  }}
                  whileHover={{
                    scale: 1.12,
                  }}
                  whileTap={{
                    scale: 0.92,
                  }}
                  className="pointer-events-auto h-14 w-14 cursor-pointer rounded-2xl outline-none focus-visible:ring-2 focus-visible:ring-gold sm:h-16 sm:w-16"
                >
                  <span className="sr-only">
                    {software.title}
                  </span>
                </motion.button>
              </div>
            );
          }
        )}
      </motion.div>
    </div>
  );
}

/* ================================================================ */
/* SOFTWARE POPUP                                                    */
/* ================================================================ */

function SoftwarePopup({
  software,
  onClose,
}) {
  return (
    <motion.div
      initial={{
        opacity: 0,
        y: 18,
        scale: 0.94,
      }}
      animate={{
        opacity: 1,
        y: 0,
        scale: 1,
      }}
      exit={{
        opacity: 0,
        y: 14,
        scale: 0.95,
      }}
      transition={{
        duration: 0.25,
      }}
      className="absolute bottom-0 left-1/2 z-40 w-[min(92%,360px)] -translate-x-1/2 rounded-2xl border border-white/15 bg-black/85 p-4 shadow-2xl backdrop-blur-xl"
      style={{
        boxShadow: `0 18px 70px ${software.glow}`,
      }}
    >
      <button
        type="button"
        onClick={onClose}
        aria-label="Close software information"
        className="absolute right-3 top-3 flex h-7 w-7 items-center justify-center rounded-full border border-white/10 bg-white/[0.05] text-white/45 transition-colors hover:bg-white/10 hover:text-white"
      >
        <X className="h-3.5 w-3.5" />
      </button>

      <div className="flex items-start gap-3 pr-8">
        <div
          className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border bg-black/70 p-2"
          style={{
            borderColor:
              software.color,
          }}
        >
          <img
            src={software.icon}
            alt={software.title}
            className="h-full w-full object-contain"
          />
        </div>

        <div className="min-w-0">
          <h3 className="font-display text-base font-bold text-white">
            {software.title}
          </h3>

          <p
            className="mt-0.5 text-[10px] font-semibold uppercase tracking-[0.14em]"
            style={{
              color: software.color,
            }}
          >
            {software.note}
          </p>
        </div>
      </div>

      <p className="mt-3 text-xs leading-relaxed text-white/60">
        {software.description}
      </p>
    </motion.div>
  );
}

/* ================================================================ */
/* CTA STYLE                                                         */
/* ================================================================ */

function ctaClass(primary) {
  return primary
    ? "inline-flex items-center gap-2 rounded-full bg-white px-6 py-3 text-sm font-semibold text-navy-900 shadow-gold-glow transition-all duration-300 hover:-translate-y-0.5 hover:scale-[1.03] active:scale-95"
    : "inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/[0.05] px-6 py-3 text-sm font-semibold text-white/85 backdrop-blur-md transition-all duration-300 hover:-translate-y-0.5 hover:border-white/35 hover:bg-white/10";
}
