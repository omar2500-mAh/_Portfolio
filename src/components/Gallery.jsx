import { useEffect, useMemo, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import {
  Calendar,
  ExternalLink,
  Image as ImageIcon,
} from "lucide-react";

import { useData } from "../context/DataContext";
import SectionHeading from "./SectionHeading";
import Modal from "./Modal";

/**
 * Displays a gallery image without cropping or stretching it.
 *
 * Landscape, portrait, and square photographs retain their original
 * aspect ratios. The surrounding card automatically follows the image height.
 */
function GalleryImage({ src, alt, modal = false }) {
  const [failed, setFailed] = useState(false);

  useEffect(() => {
    setFailed(false);
  }, [src]);

  if (!src || failed) {
    return (
      <div
        className={`flex w-full items-center justify-center bg-navy-800 ${
          modal ? "min-h-[320px]" : "min-h-[240px]"
        }`}
      >
        <div className="flex flex-col items-center gap-3 px-5 text-center text-white/40">
          <ImageIcon
            className="h-10 w-10"
            strokeWidth={1.4}
          />

          <span className="text-xs font-medium tracking-wide">
            Image unavailable
          </span>
        </div>
      </div>
    );
  }

  return (
    <div
      className={`flex w-full items-center justify-center bg-navy-900 ${
        modal ? "max-h-[72vh]" : ""
      }`}
    >
      <img
        src={src}
        alt={alt}
        loading={modal ? "eager" : "lazy"}
        decoding="async"
        onError={() => setFailed(true)}
        className={
          modal
            ? "block h-auto max-h-[72vh] w-auto max-w-full object-contain"
            : "block h-auto w-full object-contain"
        }
      />
    </div>
  );
}

export default function Gallery() {
  const { data } = useData();

  const items = data.galleryItems || [];
  const categories = data.galleryCategories || [];

  const [filter, setFilter] = useState("All");
  const [active, setActive] = useState(null);

  /**
   * Only show filters that currently contain at least one gallery item.
   */
  const filters = useMemo(() => {
    const availableCategories = categories.filter((category) =>
      items.some((item) => item.category === category)
    );

    return ["All", ...availableCategories];
  }, [categories, items]);

  /**
   * Return to the complete gallery if a selected category is removed.
   */
  useEffect(() => {
    if (!filters.includes(filter)) {
      setFilter("All");
    }
  }, [filter, filters]);

  /**
   * Filter cards using the selected category.
   */
  const visibleItems = useMemo(() => {
    if (filter === "All") {
      return items;
    }

    return items.filter(
      (item) => item.category === filter
    );
  }, [filter, items]);

  if (!items.length) {
    return null;
  }

  return (
    <section
      id="gallery"
      className="relative bg-cream py-24 sm:py-28"
    >
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <SectionHeading
          eyebrow="Gallery"
          title="Moments & Milestones"
          subtitle="A curated visual record of competitions, innovation programs, invited training, industrial exposure, technical presentations, and project achievements."
          light
        />

        {/* Gallery category filters */}
        <div className="mb-12 flex flex-wrap justify-center gap-2">
          {filters.map((category) => {
            const isActive = filter === category;

            return (
              <button
                key={category}
                type="button"
                onClick={() => setFilter(category)}
                aria-pressed={isActive}
                className={`rounded-full border px-4 py-2 text-sm font-medium transition-all focus:outline-none focus-visible:ring-2 focus-visible:ring-navy-900 focus-visible:ring-offset-2 ${
                  isActive
                    ? "border-navy-900 bg-navy-900 text-white shadow-soft-light"
                    : "border-navy-900/10 bg-white text-navy-900/60 hover:border-navy-900/30 hover:text-navy-900"
                }`}
              >
                {category}
              </button>
            );
          })}
        </div>

        {/*
          Normal responsive grid keeps the visual order identical
          to the galleryItems array:

          01, 02, 03 ... 09, 9a, 9b, 10 ... 31.

          Images keep their natural aspect ratios and are not cropped.
        */}
        <motion.div
          layout
          className="grid grid-cols-1 items-start gap-5 sm:grid-cols-2 lg:grid-cols-3"
        >
          <AnimatePresence mode="popLayout">
            {visibleItems.map((item, index) => (
              <motion.button
                key={item.id}
                type="button"
                layout
                initial={{
                  opacity: 0,
                  scale: 0.96,
                  y: 12,
                }}
                animate={{
                  opacity: 1,
                  scale: 1,
                  y: 0,
                }}
                exit={{
                  opacity: 0,
                  scale: 0.96,
                  y: 12,
                }}
                transition={{
                  duration: 0.35,
                  delay: (index % 6) * 0.04,
                }}
                onClick={() => setActive(item)}
                aria-label={`Open gallery item: ${item.title}`}
                className="group block w-full overflow-hidden rounded-2xl border border-navy-900/10 bg-white text-left shadow-soft-light transition-all duration-300 hover:-translate-y-1 hover:shadow-soft focus:outline-none focus-visible:ring-2 focus-visible:ring-navy-900 focus-visible:ring-offset-2"
              >
                {/* Gallery image */}
                <div className="relative overflow-hidden bg-navy-900">
                  <GalleryImage
                    src={item.image}
                    alt={item.title}
                  />

                  <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

                  <span className="absolute left-3 top-3 rounded-full bg-black/75 px-3 py-1 text-[11px] font-semibold text-white backdrop-blur-sm">
                    {item.category}
                  </span>
                </div>

                {/* Gallery information */}
                <div className="p-4">
                  <h3 className="font-display text-[15px] font-semibold leading-snug text-navy-900">
                    {item.title}
                  </h3>

                  {item.description && (
                    <p className="mt-1.5 text-sm leading-relaxed text-navy-900/60">
                      {item.description}
                    </p>
                  )}

                  {item.date && (
                    <div className="mt-3 inline-flex items-center gap-1.5 text-xs text-navy-900/50">
                      <Calendar className="h-3.5 w-3.5" />

                      <span>{item.date}</span>
                    </div>
                  )}
                </div>
              </motion.button>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>

      {/* Full-image modal */}
      <Modal
        open={Boolean(active)}
        onClose={() => setActive(null)}
        maxWidth="max-w-4xl"
      >
        {active && (
          <div>
            <GalleryImage
              src={active.image}
              alt={active.title}
              modal
            />

            <div className="p-6 sm:p-8">
              <div className="mb-3 flex flex-wrap items-center gap-3">
                <span className="rounded-full bg-white/10 px-3 py-1 text-xs font-semibold text-white">
                  {active.category}
                </span>

                {active.date && (
                  <span className="inline-flex items-center gap-1.5 text-sm text-white/50">
                    <Calendar className="h-4 w-4" />

                    {active.date}
                  </span>
                )}
              </div>

              <h3 className="mb-3 font-display text-2xl font-bold text-white sm:text-3xl">
                {active.title}
              </h3>

              {active.description && (
                <p className="leading-relaxed text-white/70">
                  {active.description}
                </p>
              )}

              {active.link && (
                <a
                  href={active.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-6 inline-flex items-center gap-2 rounded-full bg-white px-5 py-2.5 text-sm font-semibold text-navy-900 transition-transform hover:scale-[1.03]"
                >
                  View More

                  <ExternalLink className="h-4 w-4" />
                </a>
              )}
            </div>
          </div>
        )}
      </Modal>
    </section>
  );
}
