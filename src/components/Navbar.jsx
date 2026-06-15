import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import { useData } from "../context/DataContext";
import { useScrollSpy } from "../hooks/useScrollSpy";

/**
 * Navbar
 * - Sticky, turns solid on scroll
 * - Active-section highlight (scroll spy)
 * - Smooth-scroll on click
 * - Animated mobile drawer that closes on navigation
 */
export default function Navbar({ visibleSections }) {
  const { data } = useData();
  const { navLinks, siteMeta } = data;

  // Only show nav links whose sections actually render
  const links = navLinks.filter((l) => visibleSections.includes(l.to));
  const ids = links.map((l) => l.to);

  const activeId = useScrollSpy(ids);
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const go = (id) => {
    setOpen(false);
    const el = document.getElementById(id);
    if (el) {
      const top = el.getBoundingClientRect().top + window.scrollY - 76;
      window.scrollTo({ top, behavior: "smooth" });
    }
  };

  return (
    <>
      <motion.header
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled
            ? "bg-navy-950/85 backdrop-blur-xl border-b border-white/5 shadow-lg"
            : "bg-transparent"
        }`}
      >
        <nav className="mx-auto flex max-w-7xl items-center justify-between px-5 sm:px-8 h-16 sm:h-[72px]">
          {/* Brand */}
          <button
            onClick={() => go(ids[0])}
            className="flex items-center gap-3 group"
          >
            <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-gold-gradient font-serif text-navy-900 font-bold text-sm shadow-gold-glow">
              {siteMeta.brandInitials}
            </span>
            <span className="font-display font-semibold text-white tracking-tight text-[15px] hidden sm:block">
              {siteMeta.brandShort}
            </span>
          </button>

          {/* Desktop links */}
          <div className="hidden lg:flex items-center gap-1">
            {links.map((l) => (
              <button
                key={l.to}
                onClick={() => go(l.to)}
                className={`relative px-3.5 py-2 text-sm font-medium rounded-lg transition-colors ${
                  activeId === l.to
                    ? "text-gold"
                    : "text-white/65 hover:text-white"
                }`}
              >
                {l.label}
                {activeId === l.to && (
                  <motion.span
                    layoutId="nav-active"
                    className="absolute inset-x-2 -bottom-0.5 h-0.5 rounded-full bg-gold"
                    transition={{ type: "spring", stiffness: 380, damping: 30 }}
                  />
                )}
              </button>
            ))}
          </div>

          {/* Mobile toggle */}
          <button
            onClick={() => setOpen((v) => !v)}
            aria-label="Toggle menu"
            className="lg:hidden flex h-10 w-10 items-center justify-center rounded-lg text-white/80 hover:bg-white/5"
          >
            <AnimatePresence mode="wait" initial={false}>
              {open ? (
                <motion.span
                  key="x"
                  initial={{ rotate: -90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: 90, opacity: 0 }}
                  transition={{ duration: 0.2 }}
                >
                  <X className="h-6 w-6" />
                </motion.span>
              ) : (
                <motion.span
                  key="menu"
                  initial={{ rotate: 90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: -90, opacity: 0 }}
                  transition={{ duration: 0.2 }}
                >
                  <Menu className="h-6 w-6" />
                </motion.span>
              )}
            </AnimatePresence>
          </button>
        </nav>
      </motion.header>

      {/* Mobile drawer */}
      <AnimatePresence>
        {open && (
          <>
            <motion.div
              className="fixed inset-0 z-40 bg-navy-950/70 backdrop-blur-sm lg:hidden"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setOpen(false)}
            />
            <motion.div
              className="fixed top-16 right-0 left-0 z-40 lg:hidden mx-3 rounded-2xl bg-charcoal-light/95 backdrop-blur-xl border border-white/10 shadow-elevate overflow-hidden"
              initial={{ opacity: 0, y: -16 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -16 }}
              transition={{ duration: 0.25 }}
            >
              <div className="flex flex-col p-2">
                {links.map((l, i) => (
                  <motion.button
                    key={l.to}
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.04 }}
                    onClick={() => go(l.to)}
                    className={`text-left px-4 py-3 rounded-xl text-[15px] font-medium transition-colors ${
                      activeId === l.to
                        ? "text-gold bg-gold/10"
                        : "text-white/75 hover:bg-white/5"
                    }`}
                  >
                    {l.label}
                  </motion.button>
                ))}
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
