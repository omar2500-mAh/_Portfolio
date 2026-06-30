import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { useData } from "../context/DataContext";
import SmartImage from "./SmartImage";
import SocialIcons from "./SocialIcons";

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
      {/* Background image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url(${import.meta.env.BASE_URL}assets/images/ph-img-21.webp)`,
        }}
      />

      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black/70" />
      <div className="absolute inset-0 bg-mesh opacity-35" />

      {/* Glow effects */}
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
              className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-1.5 mb-6 backdrop-blur"
            >
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-white opacity-60" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-white" />
              </span>
              <span className="text-xs font-medium text-white/90 tracking-wide">
                {heroData.status}
              </span>
            </motion.div>
          )}

          {/* Name */}
          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="font-display text-5xl sm:text-6xl lg:text-7xl font-extrabold leading-[1.05] tracking-tight text-white"
          >
            <span className="inline-flex flex-nowrap items-baseline gap-4 sm:gap-5 lg:gap-7 whitespace-nowrap">
              {heroData.name.split(" ").map((word) => (
                <span key={word}>{word}</span>
              ))}
            </span>
          </motion.h1>

          {/* Department */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.25 }}
            className="mt-5 text-lg sm:text-xl font-semibold leading-relaxed text-white/85 whitespace-pre-line"
          >
            {heroData.title}
          </motion.p>

          {/* Tagline */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.35 }}
            className="mt-5 max-w-2xl text-base sm:text-lg leading-relaxed text-white/65 mx-auto lg:mx-0"
          >
            {heroData.tagline}
          </motion.p>

          {/* Buttons */}
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

          {/* Social Icons */}
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
              className="absolute -inset-4 rounded-[2rem] bg-white/15 opacity-20 blur-2xl"
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
                className="absolute rounded-2xl border border-white/10 bg-charcoal-light/90 backdrop-blur-md px-4 py-2.5 shadow-glass"
                style={badgePos(i)}
              >
                <div className="text-white font-display font-bold text-lg leading-none">
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
          <span className="h-1.5 w-1 rounded-full bg-white" />
        </div>
      </motion.div>
    </section>
  );
}

function ctaClass(primary) {
  return primary
    ? "inline-flex items-center gap-2 rounded-full bg-white px-6 py-3 text-sm font-semibold text-navy-900 shadow-gold-glow transition-transform hover:scale-[1.03] active:scale-95"
    : "inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-6 py-3 text-sm font-semibold text-white/85 backdrop-blur transition-colors hover:bg-white/10 hover:border-white/40";
}

function badgePos(i) {
  const map = [
    { top: "-1rem", left: "-1.5rem" },
    { top: "45%", right: "-2rem" },
    { bottom: "-1rem", left: "1rem" },
  ];

  return map[i];
}
