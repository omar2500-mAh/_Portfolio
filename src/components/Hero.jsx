import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { useData } from "../context/DataContext";
import SmartImage from "./SmartImage";
import SocialIcons from "./SocialIcons";

const softwareIcons = [
  {
    name: "COMSOL",
    image: "software/comsol.png",
    glow: "rgba(34, 211, 238, 0.35)",
  },
  {
    name: "MATLAB",
    image: "software/matlab.png",
    glow: "rgba(249, 115, 22, 0.35)",
  },
  {
    name: "Python",
    image: "software/Python.webp",
    glow: "rgba(250, 204, 21, 0.32)",
  },
  {
    name: "ANSYS",
    image: "software/ansys.jpg",
    glow: "rgba(244, 63, 94, 0.32)",
  },
  {
    name: "Proteus",
    image: "software/proteus.png",
    glow: "rgba(16, 185, 129, 0.32)",
  },
  {
    name: "EasyEDA",
    image: "software/images.png",
    glow: "rgba(139, 92, 246, 0.35)",
  },
];

function imagePath(fileName) {
  return `${import.meta.env.BASE_URL}assets/images/${fileName}`;
}

export default function Hero() {
  const { data } = useData();

  const heroData = data?.heroData || {};
  const socialLinks = data?.socialLinks || [];

  /*
   * Previous hero background image.
   *
   * Required GitHub location:
   * public/assets/images/ph-img-21.webp
   */
  const backgroundImage = imagePath("ph-img-21.webp");

  const scrollTo = (id) => {
    if (!id) return;

    const element = document.getElementById(id);

    if (element) {
      const top =
        element.getBoundingClientRect().top +
        window.scrollY -
        76;

      window.scrollTo({
        top,
        behavior: "smooth",
      });
    }
  };

  const name =
    heroData.name || "Omar Faruque";

  const stats = Array.isArray(heroData.stats)
    ? heroData.stats.slice(0, 3)
    : [];

  const buttons = Array.isArray(
    heroData.ctaButtons
  )
    ? heroData.ctaButtons
    : [];

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

        {/* Left side remains dark for readable text */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/85 via-black/70 to-black/45" />

        {/* Dark top and bottom fade */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-transparent to-black/75" />

        {/* Existing mesh effect */}
        <div className="absolute inset-0 bg-mesh opacity-25" />
      </div>

      {/* ======================================================== */}
      {/* BACKGROUND GLOW EFFECTS                                  */}
      {/* ======================================================== */}

      <motion.div
        className="pointer-events-none absolute -right-32 -top-32 h-96 w-96 rounded-full bg-gold/10 blur-3xl"
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.35, 0.65, 0.35],
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
          opacity: [0.4, 0.65, 0.4],
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

          {/* Department and university */}

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
              className="mx-auto mt-6 max-w-3xl text-base leading-relaxed text-white/65 sm:text-lg lg:mx-0"
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

          {/* ==================================================== */}
          {/* STATS                                                */}
          {/* ==================================================== */}

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

          {/* Social icons */}

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

            {/* Upper orbit layer: appears behind portrait */}

            <OrbitLayer
              icons={softwareIcons}
              layer="back"
            />

            {/* Profile photograph */}

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
                  src={heroData.profileImage}
                  alt={name}
                  className="h-full w-full rounded-[1.6rem]"
                  imgClassName="h-full w-full object-cover object-top"
                  placeholderLabel="Add profile image"
                />

                <div className="pointer-events-none absolute inset-2 rounded-[1.6rem] bg-gradient-to-t from-black/20 via-transparent to-white/[0.04]" />
              </motion.div>
            </div>

            {/* Lower orbit layer: appears in front of portrait */}

            <OrbitLayer
              icons={softwareIcons}
              layer="front"
            />
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
/* ORBITING SOFTWARE ICONS                                          */
/* ================================================================ */

function OrbitLayer({
  icons,
  layer,
}) {
  const isBack = layer === "back";

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

            return (
              <div
                key={software.name}
                className="absolute left-1/2 top-1/2"
                style={{
                  transform: `translate(-50%, -50%) rotate(${angle}deg) translateY(calc(-1 * clamp(158px, 18vw, 230px)))`,
                }}
              >
                <motion.div
                  initial={{
                    rotate: -12 - angle,
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
                  className="flex h-14 w-14 items-center justify-center rounded-2xl border border-white/15 bg-black/80 p-2.5 backdrop-blur-md sm:h-16 sm:w-16"
                  style={{
                    boxShadow: `0 0 26px ${software.glow}`,
                  }}
                >
                  <img
                    src={imagePath(
                      software.image
                    )}
                    alt={software.name}
                    title={software.name}
                    className="h-full w-full rounded-lg object-contain"
                  />

                  <span
                    className="absolute -bottom-1 h-2 w-2 rounded-full border border-black"
                    style={{
                      backgroundColor:
                        software.glow.replace(
                          "0.35",
                          "1"
                        ),
                    }}
                  />
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
/* CTA BUTTON STYLE                                                  */
/* ================================================================ */

function ctaClass(primary) {
  return primary
    ? "inline-flex items-center gap-2 rounded-full bg-white px-6 py-3 text-sm font-semibold text-navy-900 shadow-gold-glow transition-all duration-300 hover:-translate-y-0.5 hover:scale-[1.03] active:scale-95"
    : "inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/[0.05] px-6 py-3 text-sm font-semibold text-white/85 backdrop-blur-md transition-all duration-300 hover:-translate-y-0.5 hover:border-white/35 hover:bg-white/10";
}
