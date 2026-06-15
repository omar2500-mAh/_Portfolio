import { useMemo, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ExternalLink, Calendar } from "lucide-react";
import { useData } from "../context/DataContext";
import SmartImage from "./SmartImage";
import SectionHeading from "./SectionHeading";
import Modal from "./Modal";

export default function Gallery() {
  const { data } = useData();
  const items = data.galleryItems;
  const categories = data.galleryCategories || [];

  const [filter, setFilter] = useState("All");
  const [active, setActive] = useState(null);

  const filters = useMemo(() => ["All", ...categories], [categories]);

  const visible = useMemo(
    () =>
      filter === "All"
        ? items
        : items.filter((i) => i.category === filter),
    [items, filter]
  );

  if (!items?.length) return null;

  return (
    <section id="gallery" className="relative bg-cream py-24 sm:py-28">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <SectionHeading
          eyebrow="Gallery"
          title="Moments & Milestones"
          subtitle="A visual record of research, projects, events, and recognition."
          light
        />

        {/* Filters */}
        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {filters.map((f) => (
            <button
              key={f}
              onClick={() => setFilter(f)}
              className={`rounded-full px-4 py-2 text-sm font-medium transition-all ${
                filter === f
                  ? "bg-navy-900 text-gold shadow-soft-light"
                  : "bg-white text-navy-900/60 border border-navy-900/10 hover:border-gold/40 hover:text-navy-900"
              }`}
            >
              {f}
            </button>
          ))}
        </div>

        {/* Masonry grid */}
        <motion.div
          layout
          className="columns-1 sm:columns-2 lg:columns-3 gap-5 [column-fill:_balance]"
        >
          <AnimatePresence mode="popLayout">
            {visible.map((item, i) => (
              <motion.button
                key={item.id}
                layout
                initial={{ opacity: 0, scale: 0.92 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.92 }}
                transition={{ duration: 0.4, delay: (i % 6) * 0.05 }}
                onClick={() => setActive(item)}
                className="group mb-5 block w-full break-inside-avoid overflow-hidden rounded-2xl border border-navy-900/8 bg-white text-left shadow-soft-light transition-all hover:-translate-y-1 hover:shadow-soft"
              >
                <div className="relative overflow-hidden">
                  <SmartImage
                    src={item.image}
                    alt={item.title}
                    className={`w-full ${galleryRatio(i)}`}
                    imgClassName="transition-transform duration-700 group-hover:scale-110"
                    placeholderLabel="Add image"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-navy-950/70 via-navy-950/10 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                  <span className="absolute top-3 left-3 rounded-full bg-navy-900/80 px-3 py-1 text-[11px] font-semibold text-gold backdrop-blur">
                    {item.category}
                  </span>
                </div>
                <div className="p-4">
                  <h3 className="font-display font-semibold text-navy-900 text-[15px] leading-snug">
                    {item.title}
                  </h3>
                  {item.description && (
                    <p className="mt-1 text-sm text-navy-900/55 line-clamp-2">
                      {item.description}
                    </p>
                  )}
                  {item.date && (
                    <div className="mt-2.5 inline-flex items-center gap-1.5 text-xs text-navy-900/45">
                      <Calendar className="h-3.5 w-3.5" />
                      {item.date}
                    </div>
                  )}
                </div>
              </motion.button>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>

      {/* Lightbox */}
      <Modal open={!!active} onClose={() => setActive(null)} maxWidth="max-w-3xl">
        {active && (
          <div>
            <SmartImage
              src={active.image}
              alt={active.title}
              className="w-full aspect-video rounded-t-3xl"
              placeholderLabel="Image"
            />
            <div className="p-6 sm:p-8">
              <div className="flex items-center gap-3 mb-3">
                <span className="rounded-full bg-gold/15 px-3 py-1 text-xs font-semibold text-gold">
                  {active.category}
                </span>
                {active.date && (
                  <span className="text-sm text-white/50">{active.date}</span>
                )}
              </div>
              <h3 className="font-display text-2xl font-bold text-white mb-2">
                {active.title}
              </h3>
              {active.description && (
                <p className="text-white/65 leading-relaxed">
                  {active.description}
                </p>
              )}
              {active.link && (
                <a
                  href={active.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-5 inline-flex items-center gap-2 rounded-full bg-gold-gradient px-5 py-2.5 text-sm font-semibold text-navy-900 transition-transform hover:scale-[1.03]"
                >
                  View More <ExternalLink className="h-4 w-4" />
                </a>
              )}
            </div>
          </div>
        )}
      </Modal>
    </section>
  );
}

// Vary heights for a natural masonry rhythm
function galleryRatio(i) {
  const ratios = ["aspect-[4/3]", "aspect-[3/4]", "aspect-square", "aspect-[4/5]"];
  return ratios[i % ratios.length];
}
