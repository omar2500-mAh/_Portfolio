import { useMemo, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ExternalLink, Award as AwardIcon } from "lucide-react";
import { useData } from "../context/DataContext";
import SmartImage from "./SmartImage";
import SectionHeading from "./SectionHeading";

const CATS = [
  "Award",
  "Certificate",
  "Workshop",
  "Internship",
  "Competition",
  "Volunteerism",
  "Bootcamp",
  "Olympiad",
  "Summit",
  "Training",
  "Incubation",
];

export default function Awards() {
  const { data } = useData();
  const items = data.awardsCertificates;
  const [filter, setFilter] = useState("All");

  const available = useMemo(() => {
    const present = new Set(items.map((i) => i.category));
    return ["All", ...CATS.filter((c) => present.has(c))];
  }, [items]);

  const visible = useMemo(
    () => (filter === "All" ? items : items.filter((i) => i.category === filter)),
    [items, filter]
  );

  if (!items?.length) return null;

  return (
    <section id="awards" className="relative overflow-hidden bg-cream py-24 sm:py-28">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(212,175,55,0.12),transparent_30%),radial-gradient(circle_at_80%_70%,rgba(15,23,42,0.08),transparent_35%)]" />

      <div className="relative mx-auto max-w-7xl px-5 sm:px-8">
        <SectionHeading
          eyebrow="Honours & Recognition"
          title="Awards & Certificates"
          subtitle="Recognition, training, and competitions that mark the journey."
          light
        />

        {available.length > 2 && (
          <div className="mb-12 flex flex-wrap justify-center gap-2">
            {available.map((c) => (
              <button
                key={c}
                onClick={() => setFilter(c)}
                className={`rounded-full px-4 py-2 text-sm font-medium transition-all ${
                  filter === c
                    ? "bg-navy-900 text-gold shadow-soft-light"
                    : "border border-navy-900/10 bg-white text-navy-900/60 hover:border-gold/40 hover:text-navy-900"
                }`}
              >
                {c}
              </button>
            ))}
          </div>
        )}

        <motion.div layout className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          <AnimatePresence mode="popLayout">
            {visible.map((item, i) => (
              <motion.div
                key={item.id}
                layout
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.5, delay: (i % 3) * 0.08 }}
                className="group relative rounded-3xl p-[1.5px] transition-all hover:-translate-y-2"
              >
                {/* Live animated border */}
                <div className="absolute inset-0 rounded-3xl bg-[linear-gradient(120deg,#d4af37,#0f172a,#facc15,#1e3a8a,#d4af37)] bg-[length:300%_300%] opacity-60 blur-[1px] animate-[gradientMove_6s_ease_infinite] group-hover:opacity-100" />

                <div className="relative flex h-full flex-col overflow-hidden rounded-3xl border border-white/60 bg-white shadow-soft-light transition-all group-hover:shadow-soft">
                  <div className="relative overflow-hidden">
                    <SmartImage
                      src={item.image}
                      alt={item.title}
                      className="aspect-[4/3] w-full"
                      imgClassName="transition-transform duration-700 group-hover:scale-110"
                      placeholderLabel="Add certificate image"
                    />

                    {/* Moving color shine over image */}
                    <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(120deg,transparent,rgba(255,255,255,0.35),transparent)] opacity-0 transition-opacity duration-500 group-hover:opacity-100 group-hover:animate-[shine_1.4s_ease]" />

                    <span className="absolute left-3 top-3 inline-flex items-center gap-1.5 rounded-full bg-[linear-gradient(120deg,#0f172a,#1e293b,#d4af37,#0f172a)] bg-[length:250%_250%] px-3 py-1 text-[11px] font-semibold text-white backdrop-blur animate-[gradientMove_5s_ease_infinite]">
                      <AwardIcon className="h-3 w-3 text-gold" />
                      {item.category}
                    </span>
                  </div>

                  <div className="flex flex-1 flex-col p-5">
                    <h3 className="font-display text-lg font-bold leading-snug text-navy-900 transition-colors group-hover:text-gold-dark">
                      {item.title}
                    </h3>

                    <div className="mt-1.5 flex items-center gap-2 text-sm">
                      <span className="font-medium text-gold-dark">
                        {item.organization}
                      </span>
                      {item.date && (
                        <>
                          <span className="text-navy-900/30">•</span>
                          <span className="text-navy-900/50">{item.date}</span>
                        </>
                      )}
                    </div>

                    {item.description && (
                      <p className="mt-3 line-clamp-3 flex-1 text-sm leading-relaxed text-navy-900/60">
                        {item.description}
                      </p>
                    )}

                    {item.link && (
                      <a
                        href={item.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="mt-4 inline-flex items-center justify-center gap-2 rounded-full border border-navy-900/15 bg-[linear-gradient(120deg,#ffffff,#f8f1d5,#ffffff)] bg-[length:250%_250%] px-4 py-2.5 text-sm font-semibold text-navy-900 transition-all hover:border-navy-900 hover:bg-navy-900 hover:text-gold animate-[gradientMove_7s_ease_infinite]"
                      >
                        Visit Site
                        <ExternalLink className="h-3.5 w-3.5" />
                      </a>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>

      <style>{`
        @keyframes gradientMove {
          0% {
            background-position: 0% 50%;
          }
          50% {
            background-position: 100% 50%;
          }
          100% {
            background-position: 0% 50%;
          }
        }

        @keyframes shine {
          0% {
            transform: translateX(-100%);
          }
          100% {
            transform: translateX(100%);
          }
        }
      `}</style>
    </section>
  );
}
