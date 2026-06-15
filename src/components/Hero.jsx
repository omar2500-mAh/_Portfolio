import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { useData } from "../context/DataContext";
import SmartImage from "./SmartImage";
import SocialIcons from "./SocialIcons";

/** Subtle animated engineering / circuit SVG backdrop */
function CircuitBackdrop() {
  return (
    <svg
      className="absolute inset-0 h-full w-full opacity-[0.25]"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <defs>
        <pattern
          id="circuit"
          x="0"
          y="0"
          width="120"
          height="120"
          patternUnits="userSpaceOnUse"
        >
          <path
            d="M10 10h40v40M60 10v30h50M10 70h30v40M70 60h40v50M70 60v-20"
            fill="none"
            stroke="rgba(212,175,55,0.35)"
            strokeWidth="1"
          />
          <circle cx="10" cy="10" r="2.5" fill="rgba(212,175,55,0.5)" />
          <circle cx="60" cy="40" r="2.5" fill="rgba(212,175,55,0.5)" />
          <circle cx="110" cy="40" r="2.5" fill="rgba(212,175,55,0.5)" />
          <circle cx="40" cy="110" r="2.5" fill="rgba(212,175,55,0.5)" />
          <circle cx="70" cy="60" r="2.5" fill="rgba(212,175,55,0.5)" />
        </pattern>
      </defs>
      <rect width="100%" height="100%" fill="url(#circuit)" />
    </svg>
  );
}

export default function Hero() {
  const { data } = useData();
  const { heroData, socialLinks } = data;

  const scrollTo = (id) => {
    const el = document.getElementById(id);
    if (el) {
      const top = el.getBoundingClientRect().top + window.scrollY - 76;
      window.scrollTo({ top, behavior: "smooth" });
    }
  };

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center overflow-hidden bg-navy-gradient pt-24 pb-16"
    >
      {/* Backdrops */}
      <CircuitBackdrop />
      <div className="absolute inset-0 bg-mesh" />
      <motion.div
        className="absolute -top-32 -right-32 h-96 w-96 rounded-full bg-gold/10 blur-3xl"
        animate={{ scale: [1, 1.2, 1], opacity: [0.4, 0.7, 0.4] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute bottom-0 -left-32 h-96 w-96 rounded-full bg-navy-800/60 blur-3xl"
        animate={{ scale: [1, 1.15, 1] }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
      />

      <div className="relative z-10 mx-auto grid max-w-7xl grid-cols-1 items-center gap-12 px-5 sm:px-8 lg:grid-cols-12 lg:gap-8">
        {/* Text column */}
        <div className="lg:col-span-7 text-center lg:text-left">
          {heroData.status && (
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 rounded-full border border-gold/30 bg-gold/5 px-4 py-1.5 mb-6"
            >
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-gold opacity-60" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-gold" />
              </span>
              <span className="text-xs font-medium text-gold-soft tracking-wide">
                {heroData.status}
              </span>
            </motion.div>
          )}

          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="font-display text-4xl sm:text-6xl lg:text-7xl font-extrabold leading-[1.05] tracking-tight text-white"
          >
            {heroData.name.split(" ").map((word, i) => (
              <span key={i} className={i === 1 ? "block text-transparent bg-clip-text bg-gold-gradient" : "block"}>
                {word}
              </span>
            ))}
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.25 }}
            className="mt-5 text-lg sm:text-xl font-medium text-gold-soft/90"
          >
            {heroData.title}
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.35 }}
            className="mt-4 max-w-xl text-base sm:text-lg leading-relaxed text-white/60 mx-auto lg:mx-0"
          >
            {heroData.tagline}
          </motion.p>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.45 }}
            className="mt-8 flex flex-wrap items-center justify-center lg:justify-start gap-3"
          >
            {heroData.ctaButtons.map((btn) =>
              btn.href ? (
                <a
                  key={btn.label}
                  href={btn.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={ctaClass(btn.primary)}
                >
                  {btn.label}
                  {btn.primary && <ArrowRight className="h-4 w-4" />}
                </a>
              ) : (
                <button
                  key={btn.label}
                  onClick={() => scrollTo(btn.scrollTo)}
                  className={ctaClass(btn.primary)}
                >
                  {btn.label}
                  {btn.primary && <ArrowRight className="h-4 w-4" />}
                </button>
              )
            )}
          </motion.div>

          {/* Socials */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.55 }}
            className="mt-8 flex justify-center lg:justify-start"
          >
            <SocialIcons links={socialLinks} variant="dark" />
          </motion.div>
        </div>

        {/* Image column */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="lg:col-span-5 flex justify-center"
        >
          <div className="relative">
            <motion.div
              className="absolute -inset-4 rounded-[2rem] bg-gold-gradient opacity-20 blur-2xl"
              animate={{ opacity: [0.15, 0.3, 0.15] }}
              transition={{ duration: 5, repeat: Infinity }}
            />
            <div className="relative h-72 w-72 sm:h-80 sm:w-80 lg:h-96 lg:w-96 rounded-[2rem] border border-white/10 bg-white/5 p-2 backdrop-blur-sm shadow-elevate animate-float-slow">
              <SmartImage
                src={heroData.profileImage}
                alt={heroData.name}
                className="h-full w-full rounded-[1.6rem]"
                placeholderLabel="Add profile.jpg"
              />
            </div>

            {/* Floating stat badges */}
            {heroData.stats?.slice(0, 3).map((s, i) => (
              <motion.div
                key={s.label}
                initial={{ opacity: 0, scale: 0.5 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.7 + i * 0.15, type: "spring" }}
                className={`absolute rounded-2xl border border-white/10 bg-charcoal-light/90 backdrop-blur-md px-4 py-2.5 shadow-glass ${
                  ["−top-4 -left-6", "top-1/2 -right-8", "-bottom-4 left-4"][i]
                }`}
                style={badgePos(i)}
              >
                <div className="text-gold font-display font-bold text-lg leading-none">
                  {s.value}
                </div>
                <div className="text-[10px] uppercase tracking-wider text-white/50 mt-1">
                  {s.label}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>

      {/* Scroll cue */}
      <motion.div
        className="absolute bottom-6 left-1/2 -translate-x-1/2 hidden sm:flex flex-col items-center gap-2"
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <span className="text-[10px] uppercase tracking-[0.2em] text-white/40">
          Scroll
        </span>
        <div className="h-9 w-5 rounded-full border border-white/20 flex justify-center pt-1.5">
          <span className="h-1.5 w-1 rounded-full bg-gold" />
        </div>
      </motion.div>
    </section>
  );
}

function ctaClass(primary) {
  return primary
    ? "inline-flex items-center gap-2 rounded-full bg-gold-gradient px-6 py-3 text-sm font-semibold text-navy-900 shadow-gold-glow transition-transform hover:scale-[1.03] active:scale-95"
    : "inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-6 py-3 text-sm font-semibold text-white/85 backdrop-blur transition-colors hover:bg-white/10 hover:border-gold/40";
}

function badgePos(i) {
  const map = [
    { top: "-1rem", left: "-1.5rem" },
    { top: "45%", right: "-2rem" },
    { bottom: "-1rem", left: "1rem" },
  ];
  return map[i];
}
