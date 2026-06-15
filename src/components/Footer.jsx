import { motion } from "framer-motion";
import { ArrowUp } from "lucide-react";
import { useData } from "../context/DataContext";
import SocialIcons from "./SocialIcons";

export default function Footer() {
  const { data } = useData();
  const { siteMeta, socialLinks } = data;

  const toTop = () =>
    window.scrollTo({ top: 0, behavior: "smooth" });

  return (
    <footer className="relative bg-navy-950 border-t border-white/5 overflow-hidden">
      <div className="absolute inset-0 bg-mesh opacity-30" />
      <div className="relative mx-auto max-w-7xl px-5 sm:px-8 py-14">
        <div className="flex flex-col items-center text-center gap-6">
          {/* Brand */}
          <div className="flex items-center gap-3">
            <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-gold-gradient font-serif text-navy-900 font-bold shadow-gold-glow">
              {siteMeta.brandInitials}
            </span>
            <span className="font-display text-xl font-bold text-white">
              {siteMeta.brandShort}
            </span>
          </div>

          <p className="max-w-md text-sm text-white/50 leading-relaxed">
            {siteMeta.footerTagline}
          </p>

          <SocialIcons links={socialLinks} variant="dark" className="justify-center" />

          <div className="mt-2 h-px w-full max-w-xs bg-white/10" />

          <p className="text-xs text-white/40">
            © {new Date().getFullYear()} {siteMeta.copyrightName}. All rights reserved.
          </p>
        </div>
      </div>

      {/* Back to top */}
      <motion.button
        onClick={toTop}
        initial={{ opacity: 0, scale: 0 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        whileHover={{ y: -3 }}
        aria-label="Back to top"
        className="fixed bottom-6 right-6 z-40 flex h-12 w-12 items-center justify-center rounded-full bg-gold-gradient text-navy-900 shadow-gold-glow transition-transform"
      >
        <ArrowUp className="h-5 w-5" />
      </motion.button>
    </footer>
  );
}
