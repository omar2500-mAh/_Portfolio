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
];

export default function Awards() {
  const { data } = useData();
  const items = data.awardsCertificates;
  const [filter, setFilter] = useState("All");

  // Only show filters that exist in the data
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
    <section id="awards" className="relative bg-cream py-24 sm:py-28">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <SectionHeading
          eyebrow="Honours & Recognition"
          title="Awards & Certificates"
          subtitle="Recognition, training, and competitions that mark the journey."
          light
        />

        {available.length > 2 && (
          <div className="flex flex-wrap justify-center gap-2 mb-12">
            {available.map((c) => (
              <button
                key={c}
                onClick={() => setFilter(c)}
                className={`rounded-full px-4 py-2 text-sm font-medium transition-all ${
                  filter === c
                    ? "bg-navy-900 text-gold shadow-soft-light"
                    : "bg-white text-navy-900/60 border border-navy-900/10 hover:border-gold/40 hover:text-navy-900"
                }`}
              >
                {c}
              </button>
            ))}
          </div>
        )}

        <motion.div layout className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          <AnimatePresence mode="popLayout">
            {visible.map((item, i) => (
              <motion.div
                key={item.id}
                layout
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.5, delay: (i % 3) * 0.08 }}
                className="group flex flex-col overflow-hidden rounded-3xl border border-navy-900/8 bg-white shadow-soft-light transition-all hover:-translate-y-2 hover:shadow-soft hover:border-gold/30"
              >
                <div className="relative overflow-hidden">
                  <SmartImage
                    src={item.image}
                    alt={item.title}
                    className="aspect-[4/3] w-full"
                    imgClassName="transition-transform duration-700 group-hover:scale-110"
                    placeholderLabel="Add certificate image"
                  />
                  <span className="absolute top-3 left-3 inline-flex items-center gap-1.5 rounded-full bg-navy-900/85 px-3 py-1 text-[11px] font-semibold text-gold backdrop-blur">
                    <AwardIcon className="h-3 w-3" />
                    {item.category}
                  </span>
                </div>

                <div className="flex flex-1 flex-col p-5">
                  <h3 className="font-display font-bold text-navy-900 text-lg leading-snug">
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
                    <p className="mt-3 text-sm text-navy-900/60 leading-relaxed line-clamp-3 flex-1">
                      {item.description}
                    </p>
                  )}

                  {/* Button only if a link exists */}
                  {item.link && (
                    <a
                      href={item.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mt-4 inline-flex items-center justify-center gap-2 rounded-full border border-navy-900/15 px-4 py-2.5 text-sm font-semibold text-navy-900 transition-all hover:bg-navy-900 hover:text-gold hover:border-navy-900"
                    >
                      View Certificate
                      <ExternalLink className="h-3.5 w-3.5" />
                    </a>
                  )}
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
}
