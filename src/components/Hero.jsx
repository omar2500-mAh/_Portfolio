import { motion } from "framer-motion";
import { useData } from "../context/DataContext";

/* ------------------------------------------------------------------ */
/*  SOFTWARE ACCENT COLORS                                            */
/* ------------------------------------------------------------------ */
const ACCENT_STYLES = {
  blue: {
    border: "border-cyan-400/40",
    hoverBorder: "group-hover:border-cyan-300/80",
    glow:
      "shadow-[0_0_28px_rgba(34,211,238,0.32)] group-hover:shadow-[0_0_42px_rgba(34,211,238,0.65)]",
    dot: "bg-cyan-300",
  },

  orange: {
    border: "border-orange-400/40",
    hoverBorder: "group-hover:border-orange-300/80",
    glow:
      "shadow-[0_0_28px_rgba(251,146,60,0.32)] group-hover:shadow-[0_0_42px_rgba(251,146,60,0.65)]",
    dot: "bg-orange-300",
  },

  yellow: {
    border: "border-yellow-400/40",
    hoverBorder: "group-hover:border-yellow-300/80",
    glow:
      "shadow-[0_0_28px_rgba(250,204,21,0.32)] group-hover:shadow-[0_0_42px_rgba(250,204,21,0.65)]",
    dot: "bg-yellow-300",
  },

  red: {
    border: "border-rose-400/40",
    hoverBorder: "group-hover:border-rose-300/80",
    glow:
      "shadow-[0_0_28px_rgba(251,113,133,0.32)] group-hover:shadow-[0_0_42px_rgba(251,113,133,0.65)]",
    dot: "bg-rose-300",
  },

  green: {
    border: "border-emerald-400/40",
    hoverBorder: "group-hover:border-emerald-300/80",
    glow:
      "shadow-[0_0_28px_rgba(52,211,153,0.32)] group-hover:shadow-[0_0_42px_rgba(52,211,153,0.65)]",
    dot: "bg-emerald-300",
  },

  purple: {
    border: "border-violet-400/40",
    hoverBorder: "group-hover:border-violet-300/80",
    glow:
      "shadow-[0_0_28px_rgba(167,139,250,0.32)] group-hover:shadow-[0_0_42px_rgba(167,139,250,0.65)]",
    dot: "bg-violet-300",
  },

  gold: {
    border: "border-gold/40",
    hoverBorder: "group-hover:border-gold/80",
    glow:
      "shadow-[0_0_28px_rgba(212,175,55,0.30)] group-hover:shadow-[0_0_42px_rgba(212,175,55,0.60)]",
    dot: "bg-gold",
  },
};

/* ------------------------------------------------------------------ */
/*  ELLIPTICAL ORBIT CALCULATION                                      */
/* ------------------------------------------------------------------ */
const ORBIT_STEPS = 80;

function buildEllipseOrbit(
  index,
  total,
  radiusX = 220,
  radiusY = 155
) {
  const safeTotal = Math.max(total, 1);

  const startingAngle =
    (index / safeTotal) * Math.PI * 2;

  const x = [];
  const y = [];

  for (
    let step = 0;
    step <= ORBIT_STEPS;
    step += 1
  ) {
    const angle =
      startingAngle +
      (step / ORBIT_STEPS) *
        Math.PI *
        2;

    x.push(
      Math.cos(angle) * radiusX
    );

    y.push(
      Math.sin(angle) * radiusY
    );
  }

  return {
    x,
    y,
  };
}

/* ------------------------------------------------------------------ */
/*  HERO COMPONENT                                                    */
/* ------------------------------------------------------------------ */
export default function Hero() {
  const { data } = useData();

  const hero = data?.heroData;

  if (!hero) {
    return null;
  }

  const floatingSkills =
    Array.isArray(hero.floatingSkills)
      ? hero.floatingSkills.slice(0, 6)
      : [];

  const stats =
    Array.isArray(hero.stats)
      ? hero.stats
      : [];

  const buttons =
    Array.isArray(hero.ctaButtons)
      ? hero.ctaButtons
      : [];

  return (
    <section
      id="home"
      className="relative min-h-screen overflow-hidden bg-navy-gradient pb-20 pt-28 sm:pt-32 lg:flex lg:items-center lg:py-28"
    >
      {/* Background layers */}
      <div className="absolute inset-0 bg-mesh opacity-50" />

      <div className="absolute -left-32 top-28 h-80 w-80 rounded-full bg-gold/[0.05] blur-3xl" />

      <div className="absolute -right-32 top-12 h-96 w-96 rounded-full bg-white/[0.025] blur-3xl" />

      <div className="absolute bottom-0 left-0 h-px w-full bg-gradient-to-r from-transparent via-white/10 to-transparent" />

      <div className="relative mx-auto grid w-full max-w-7xl items-center gap-14 px-5 sm:px-8 lg:grid-cols-[0.92fr_1.08fr] lg:gap-8">
        {/* ========================================================== */}
        {/* LEFT CONTENT                                               */}
        {/* ========================================================== */}
        <motion.div
          initial={{
            opacity: 0,
            y: 28,
          }}
          animate={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            duration: 0.7,
          }}
          className="relative z-10"
        >
          {hero.status && (
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-gold/25 bg-gold/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.16em] text-gold-soft">
              <span className="h-2 w-2 animate-pulse rounded-full bg-gold" />

              {hero.status}
            </div>
          )}

          <h1 className="font-display text-4xl font-bold leading-[1.05] text-white sm:text-5xl lg:text-6xl xl:text-7xl">
            {hero.name}
          </h1>

          {hero.title && (
            <p className="mt-5 whitespace-pre-line text-lg font-semibold leading-relaxed text-gold-soft sm:text-xl">
              {hero.title}
            </p>
          )}

          {hero.tagline && (
            <p className="mt-6 max-w-2xl text-base leading-relaxed text-white/60 sm:text-lg">
              {hero.tagline}
            </p>
          )}

          {buttons.length > 0 && (
            <div className="mt-8 flex flex-wrap gap-3">
              {buttons.map(
                (button, index) => (
                  <a
                    key={`${button.label}-${index}`}
                    href={`#${button.scrollTo}`}
                    className={
                      button.primary
                        ? "inline-flex items-center justify-center rounded-full bg-gold-gradient px-6 py-3 text-sm font-semibold text-navy-950 shadow-gold-glow transition-transform duration-300 hover:-translate-y-0.5 hover:scale-[1.02]"
                        : "inline-flex items-center justify-center rounded-full border border-white/15 bg-white/[0.04] px-6 py-3 text-sm font-semibold text-white/80 transition-all duration-300 hover:-translate-y-0.5 hover:border-white/25 hover:bg-white/[0.08] hover:text-white"
                    }
                  >
                    {button.label}
                  </a>
                )
              )}
            </div>
          )}

          {stats.length > 0 && (
            <div className="mt-10 grid max-w-2xl grid-cols-1 gap-3 sm:grid-cols-3">
              {stats.map(
                (stat, index) => (
                  <motion.div
                    key={`${stat.label}-${index}`}
                    initial={{
                      opacity: 0,
                      y: 16,
                    }}
                    animate={{
                      opacity: 1,
                      y: 0,
                    }}
                    transition={{
                      duration: 0.45,
                      delay:
                        0.35 +
                        index * 0.08,
                    }}
                    className="rounded-2xl border border-white/10 bg-white/[0.035] px-4 py-4 backdrop-blur-sm"
                  >
                    <div className="font-display text-lg font-bold text-white">
                      {stat.value}
                    </div>

                    <div className="mt-1 text-[10px] font-semibold uppercase tracking-[0.15em] text-white/35">
                      {stat.label}
                    </div>
                  </motion.div>
                )
              )}
            </div>
          )}
        </motion.div>

        {/* ========================================================== */}
        {/* RIGHT PORTRAIT + SOFTWARE ORBIT                            */}
        {/* ========================================================== */}
        <motion.div
          initial={{
            opacity: 0,
            scale: 0.96,
          }}
          animate={{
            opacity: 1,
            scale: 1,
          }}
          transition={{
            duration: 0.75,
            delay: 0.1,
          }}
          className="relative mx-auto w-full max-w-[650px]"
        >
          {/* Desktop elliptical orbit */}
          <div className="relative hidden h-[590px] w-[630px] lg:block">
            {/* Orbit lines */}
            <div className="pointer-events-none absolute left-1/2 top-1/2 h-[310px] w-[440px] -translate-x-1/2 -translate-y-1/2 rounded-[50%] border border-white/[0.08]" />

            <div className="pointer-events-none absolute left-1/2 top-1/2 h-[260px] w-[390px] -translate-x-1/2 -translate-y-1/2 rounded-[50%] border border-white/[0.04]" />

            <div className="pointer-events-none absolute left-1/2 top-1/2 h-[365px] w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-[50%] border border-white/[0.025]" />

            {/* Portrait */}
            <div className="absolute left-1/2 top-1/2 z-20 w-[350px] -translate-x-1/2 -translate-y-1/2">
              <PortraitCard
                profileImage={
                  hero.profileImage
                }
                name={hero.name}
              />
            </div>

            {/* Orbiting software icons */}
            {floatingSkills.map(
              (skill, index) => (
                <EllipseOrbitBadge
                  key={`${skill.name}-${index}`}
                  skill={skill}
                  index={index}
                  total={
                    floatingSkills.length
                  }
                />
              )
            )}
          </div>

          {/* Mobile and tablet layout */}
          <div className="mx-auto w-full max-w-[400px] lg:hidden">
            <PortraitCard
              profileImage={
                hero.profileImage
              }
              name={hero.name}
            />

            {floatingSkills.length >
              0 && (
              <div className="mt-5 grid grid-cols-3 gap-3">
                {floatingSkills.map(
                  (skill, index) => (
                    <CompactSoftwareBadge
                      key={`${skill.name}-${index}`}
                      skill={skill}
                    />
                  )
                )}
              </div>
            )}
          </div>
        </motion.div>
      </div>
    </section>
  );
}

/* ------------------------------------------------------------------ */
/*  PORTRAIT CARD                                                     */
/* ------------------------------------------------------------------ */
function PortraitCard({
  profileImage,
  name,
}) {
  return (
    <div className="relative rounded-[2.1rem] border border-white/10 bg-white/[0.04] p-3 shadow-elevate backdrop-blur-sm">
      <div className="absolute inset-4 rounded-[1.7rem] bg-gold/[0.08] blur-3xl" />

      <div className="relative overflow-hidden rounded-[1.75rem] border border-white/10 bg-navy-950">
        <img
          src={profileImage}
          alt={name}
          className="aspect-[4/5] w-full object-cover object-top"
        />

        <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-navy-950/25 via-transparent to-transparent" />
      </div>
    </div>
  );
}

/* ------------------------------------------------------------------ */
/*  DESKTOP ELLIPTICAL SOFTWARE BADGE                                 */
/* ------------------------------------------------------------------ */
function EllipseOrbitBadge({
  skill,
  index,
  total,
}) {
  const accent =
    ACCENT_STYLES[
      skill.accent
    ] || ACCENT_STYLES.gold;

  const orbit =
    buildEllipseOrbit(
      index,
      total,
      220,
      155
    );

  return (
    <motion.div
      className="absolute left-1/2 top-1/2 z-40"
      style={{
        marginLeft: -32,
        marginTop: -32,
        willChange: "transform",
      }}
      animate={{
        x: orbit.x,
        y: orbit.y,
      }}
      transition={{
        duration: 22,
        repeat: Infinity,
        ease: "linear",
      }}
    >
      <motion.div
        whileHover={{
          scale: 1.18,
        }}
        transition={{
          duration: 0.2,
        }}
        className="group relative"
      >
        {/* Software-colored glow */}
        <span
          className={`pointer-events-none absolute inset-1 rounded-2xl opacity-30 blur-xl transition-opacity duration-300 group-hover:opacity-90 ${accent.dot}`}
        />

        {/* Icon container */}
        <div
          className={`relative z-10 flex h-16 w-16 items-center justify-center overflow-visible rounded-2xl border bg-navy-950/90 backdrop-blur-md transition-all duration-300 ${accent.border} ${accent.hoverBorder} ${accent.glow}`}
        >
          <img
            src={skill.icon}
            alt={`${skill.name} icon`}
            className="h-10 w-10 object-contain"
          />

          <span
            className={`absolute -bottom-1 h-2.5 w-2.5 rounded-full border-2 border-navy-950 ${accent.dot}`}
          />
        </div>

        {/* Software name on hover */}
        <div className="pointer-events-none absolute left-1/2 top-[74px] z-20 -translate-x-1/2 whitespace-nowrap rounded-lg border border-white/10 bg-navy-950/95 px-2.5 py-1.5 text-[10px] font-semibold uppercase tracking-[0.12em] text-white/80 opacity-0 shadow-soft backdrop-blur-md transition-all duration-200 group-hover:translate-y-1 group-hover:opacity-100">
          {skill.name}
        </div>
      </motion.div>
    </motion.div>
  );
}

/* ------------------------------------------------------------------ */
/*  MOBILE SOFTWARE BADGE                                             */
/* ------------------------------------------------------------------ */
function CompactSoftwareBadge({
  skill,
}) {
  const accent =
    ACCENT_STYLES[
      skill.accent
    ] || ACCENT_STYLES.gold;

  return (
    <motion.div
      whileHover={{
        y: -3,
        scale: 1.03,
      }}
      className={`group flex min-w-0 flex-col items-center justify-center gap-2 rounded-2xl border bg-navy-950/75 px-2 py-3 backdrop-blur-md transition-all duration-300 ${accent.border} ${accent.hoverBorder} ${accent.glow}`}
    >
      <img
        src={skill.icon}
        alt={`${skill.name} icon`}
        className="h-8 w-8 object-contain"
      />

      <span className="w-full truncate text-center text-[10px] font-semibold uppercase tracking-[0.08em] text-white/60 group-hover:text-white">
        {skill.name}
      </span>
    </motion.div>
  );
}
