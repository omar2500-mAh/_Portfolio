import { motion } from "framer-motion";

/**
 * SectionHeading
 * Consistent premium section title with an eyebrow label and gold accent.
 */
export default function SectionHeading({
  eyebrow,
  title,
  subtitle,
  light = false,
  center = true,
}) {
  return (
    <div className={`${center ? "text-center mx-auto" : "text-left"} max-w-2xl mb-14`}>
      {eyebrow && (
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.5 }}
          className={`inline-flex items-center gap-2 mb-4 ${center ? "justify-center" : ""}`}
        >
          <span className="h-px w-8 bg-gold/60" />
          <span className="text-xs font-semibold uppercase tracking-[0.25em] text-gold">
            {eyebrow}
          </span>
          <span className="h-px w-8 bg-gold/60" />
        </motion.div>
      )}

      <motion.h2
        initial={{ opacity: 0, y: 18 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-60px" }}
        transition={{ duration: 0.6, delay: 0.05 }}
        className={`font-display text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight ${
          light ? "text-navy-900" : "text-white"
        }`}
      >
        {title}
      </motion.h2>

      {subtitle && (
        <motion.p
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.6, delay: 0.12 }}
          className={`mt-5 text-base sm:text-lg leading-relaxed ${
            light ? "text-navy-900/65" : "text-white/60"
          }`}
        >
          {subtitle}
        </motion.p>
      )}
    </div>
  );
}
