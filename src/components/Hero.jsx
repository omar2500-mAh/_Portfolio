import { motion } from "framer-motion";
import { useData } from "../context/DataContext";

const ACCENT_STYLES = {
  blue: {
    ring: "border-cyan-400/30",
    glow: "shadow-[0_0_28px_rgba(34,211,238,0.28)]",
    hover: "group-hover:border-cyan-300/60",
    dot: "bg-cyan-300",
  },
  orange: {
    ring: "border-orange-400/30",
    glow: "shadow-[0_0_28px_rgba(251,146,60,0.28)]",
    hover: "group-hover:border-orange-300/60",
    dot: "bg-orange-300",
  },
  yellow: {
    ring: "border-yellow-400/30",
    glow: "shadow-[0_0_28px_rgba(250,204,21,0.28)]",
    hover: "group-hover:border-yellow-300/60",
    dot: "bg-yellow-300",
  },
  red: {
    ring: "border-rose-400/30",
    glow: "shadow-[0_0_28px_rgba(251,113,133,0.28)]",
    hover: "group-hover:border-rose-300/60",
    dot: "bg-rose-300",
  },
  green: {
    ring: "border-emerald-400/30",
    glow: "shadow-[0_0_28px_rgba(52,211,153,0.28)]",
    hover: "group-hover:border-emerald-300/60",
    dot: "bg-emerald-300",
  },
  purple: {
    ring: "border-violet-400/30",
    glow: "shadow-[0_0_28px_rgba(167,139,250,0.28)]",
    hover: "group-hover:border-violet-300/60",
    dot: "bg-violet-300",
  },
  gold: {
    ring: "border-gold/30",
    glow: "shadow-gold-glow",
    hover: "group-hover:border-gold/60",
    dot: "bg-gold",
  },
};

export default function Hero() {
  const { data } = useData();
  const hero = data.heroData;

  if (!hero) return null;

  const floatingSkills = hero.floatingSkills || [];
  const stats = hero.stats || [];

  return (
    <section
      id="home"
      className="relative overflow-hidden bg-navy-gradient py-20 sm:py-24 lg:py-28"
    >
      <div className="absolute inset-0 bg-mesh opacity-50" />
      <div className="absolute -left-24 top-20 h-72 w-72 rounded-full bg-gold/[0.04] blur-3xl" />
      <div className="absolute right-0 top-0 h-80 w-80 rounded-full bg-white/[0.02] blur-3xl" />

      <div className="relative mx-auto grid max-w-7xl items-center gap-14 px-5 sm:px-8 lg:grid-cols-2">
        {/* Left content */}
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >
          {hero.status && (
            <div className="mb-5 inline-flex rounded-full border border-gold/25 bg-gold/10 px-4 py-2 text-sm font-medium text-gold-soft">
              {hero.status}
            </div>
          )}

          <h1 className="font-display text-4xl font-bold leading-tight text-white sm:text-5xl lg:text-6xl">
            {hero.name}
          </h1>

          <p className="mt-4 whitespace-pre-line text-lg font-medium text-gold-soft sm:text-xl">
            {hero.title}
          </p>

          <p className="mt-5 max-w-2xl text-base leading-relaxed text-white/65 sm:text-lg">
            {hero.tagline}
          </p>

          {hero.ctaButtons?.length > 0 && (
            <div className="mt-8 flex flex-wrap gap-3">
              {hero.ctaButtons.map((button) => (
                <a
                  key={button.label}
                  href={`#${button.scrollTo}`}
                  className={
                    button.primary
                      ? "rounded-full bg-gold-gradient px-6 py-3 text-sm font-semibold text-navy-950 shadow-gold-glow transition hover:scale-[1.02]"
                      : "rounded-full border border-white/12 bg-white/[0.04] px-6 py-3 text-sm font-semibold text-white/80 transition hover:bg-white/[0.08]"
                  }
                >
                  {button.label}
                </a>
              ))}
            </div>
          )}

          {stats.length > 0 && (
            <div className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-3">
              {stats.map((stat, index) => (
                <div
                  key={`${stat.label}-${index}`}
                  className="rounded-2xl border border-white/10 bg-white/[0.03] px-5 py-4"
                >
                  <div className="text-xl font-bold text-white">
                    {stat.value}
                  </div>

                  <div className="mt-1 text-xs uppercase tracking-[0.14em] text-white/45">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          )}
        </motion.div>

        {/* Right portrait + orbit */}
        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="relative mx-auto w-full max-w-[560px]"
        >
          <div className="relative mx-auto flex w-full max-w-[460px] items-center justify-center">
            {/* Desktop orbit system */}
            <div className="relative hidden h-[540px] w-[540px] lg:block">
              <div className="absolute inset-0 rounded-full border border-white/[0.05]" />
              <div className="absolute inset-[48px] rounded-full border border-white/[0.05]" />
              <div className="absolute inset-[96px] rounded-full border border-white/[0.04]" />

              <div className="absolute left-1/2 top-1/2 z-20 w-[340px] -translate-x-1/2 -translate-y-1/2">
                <PortraitCard profileImage={hero.profileImage} name={hero.name} />
              </div>

              <motion.div
                className="absolute inset-0"
                animate={{ rotate: 360 }}
                transition={{
                  duration: 30,
                  ease: "linear",
                  repeat: Infinity,
                }}
              >
                {floatingSkills.slice(0, 6).map((skill, index) => {
                  const angle = index * 60;
                  return (
                    <OrbitBadge
                      key={`${skill.name}-${index}`}
                      skill={skill}
                      angle={angle}
                      radius={238}
                    />
                  );
                })}
              </motion.div>
            </div>

            {/* Mobile compact layout */}
            <div className="w-full lg:hidden">
              <div className="mx-auto max-w-[330px]">
                <PortraitCard profileImage={hero.profileImage} name={hero.name} />

                {floatingSkills.length > 0 && (
                  <div className="mt-5 grid grid-cols-3 gap-3">
                    {floatingSkills.slice(0, 6).map((skill, index) => (
                      <CompactBadge
                        key={`${skill.name}-${index}`}
                        skill={skill}
                      />
                    ))}
                  </div>
                )}
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

function PortraitCard({ profileImage, name }) {
  return (
    <div className="relative rounded-[2rem] border border-white/10 bg-white/[0.04] p-3 shadow-elevate">
      <div className="overflow-hidden rounded-[1.7rem] border border-white/10">
        <img
          src={profileImage}
          alt={name}
          className="aspect-[4/5] w-full object-cover"
        />
      </div>
    </div>
  );
}

function OrbitBadge({
  skill,
  angle,
  radius,
}) {
  const accent =
    ACCENT_STYLES[skill.accent] ||
    ACCENT_STYLES.gold;

  return (
    <div
      className="absolute left-1/2 top-1/2"
      style={{
        transform: `translate(-50%, -50%) rotate(${angle}deg) translateY(-${radius}px)`,
      }}
    >
      <motion.div
        whileHover={{
          scale: 1.1,
        }}
        className="group"
        style={{
          transform: `rotate(-${angle}deg)`,
        }}
      >
        <div
          className={`relative flex h-16 w-16 items-center justify-center rounded-2xl border bg-navy-950/90 backdrop-blur-md transition-all duration-300 ${accent.ring} ${accent.glow} ${accent.hover}`}
          title={skill.name}
        >
          <span
            className={`absolute -bottom-1.5 h-2 w-2 rounded-full ${accent.dot}`}
          />

          <img
            src={skill.icon}
            alt={skill.name}
            className="h-9 w-9 object-contain"
          />
        </div>
      </motion.div>
    </div>
  );
}

function CompactBadge({ skill }) {
  const accent =
    ACCENT_STYLES[skill.accent] ||
    ACCENT_STYLES.gold;

  return (
    <motion.div
      whileHover={{ y: -3, scale: 1.03 }}
      className={`group flex items-center gap-2 rounded-2xl border bg-navy-950/80 px-3 py-2.5 backdrop-blur-sm transition-all duration-300 ${accent.ring} ${accent.glow} ${accent.hover}`}
      title={skill.name}
    >
      <img
        src={skill.icon}
        alt={skill.name}
        className="h-7 w-7 object-contain"
      />

      <span className="truncate text-xs font-medium text-white/75 group-hover:text-white">
        {skill.name}
      </span>
    </motion.div>
  );
}
