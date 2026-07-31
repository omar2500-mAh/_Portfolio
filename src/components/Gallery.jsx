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
 * Returns the number of gallery columns according to screen width.
 *
 * Mobile: 1 column
 * Tablet: 2 columns
 * Desktop: 3 columns
 */
function useGalleryColumnCount() {
  const [columnCount, setColumnCount] = useState(1);

  useEffect(() => {
    const updateColumnCount = () => {
      if (window.innerWidth >= 1024) {
        setColumnCount(3);
        return;
      }

      if (window.innerWidth >= 640) {
        setColumnCount(2);
        return;
      }

      setColumnCount(1);
    };

    updateColumnCount();

    window.addEventListener("resize", updateColumnCount);

    return () => {
      window.removeEventListener("resize", updateColumnCount);
    };
  }, []);

  return columnCount;
}

/**
 * Extracts the common event name from a gallery title.
 *
 * Example:
 *
 * "KolpoKoushol 2023 — Arduino Prototyping"
 * becomes:
 * "kolpokoushol 2023"
 *
 * Therefore, cards belonging to the same event can be separated.
 */
function getGalleryGroupKey(item) {
  if (item.group) {
    return item.group.trim().toLowerCase();
  }

  const title = item.title || "";

  const separators = ["—", "–", " - "];

  for (const separator of separators) {
    if (title.includes(separator)) {
      return title
        .split(separator)[0]
        .trim()
        .toLowerCase();
    }
  }

  return title.trim().toLowerCase();
}

/**
 * Rearranges cards so that items from the same event do not appear
 * next to one another within the same row.
 *
 * The original order is preserved as much as possible.
 */
function spreadSimilarGalleryItems(items, columnCount) {
  if (columnCount <= 1 || items.length <= 1) {
    return items;
  }

  const remainingItems = items.map((item, originalIndex) => ({
    item,
    originalIndex,
    groupKey: getGalleryGroupKey(item),
  }));

  const arrangedItems = [];
  const recentGroups = [];

  while (remainingItems.length > 0) {
    const blockedGroups = new Set(
      recentGroups.slice(-(columnCount - 1))
    );

    /**
     * Select the earliest item whose event group is not already
     * present in the current visual row.
     */
    let selectedIndex = remainingItems.findIndex(
      (entry) => !blockedGroups.has(entry.groupKey)
    );

    /**
     * When every remaining item belongs to a recently used group,
     * avoid placing the exact same group immediately after itself.
     */
    if (selectedIndex === -1) {
      const lastGroup =
        recentGroups.length > 0
          ? recentGroups[recentGroups.length - 1]
          : "";

      selectedIndex = remainingItems.findIndex(
        (entry) => entry.groupKey !== lastGroup
      );
    }

    /**
     * Final fallback when only one event group remains.
     */
    if (selectedIndex === -1) {
      selectedIndex = 0;
    }

    const [selectedEntry] = remainingItems.splice(
      selectedIndex,
      1
    );

    arrangedItems.push(selectedEntry.item);
    recentGroups.push(selectedEntry.groupKey);
  }

  return arrangedItems;
}

/**
 * Displays an image inside a consistent gallery frame.
 *
 * The blurred image fills the background, while the main image uses
 * object-contain. Therefore, the main photograph is never cropped.
 */
function GalleryImage({
  src,
  alt,
  modal = false,
}) {
  const [failed, setFailed] = useState(false);

  useEffect(() => {
    setFailed(false);
  }, [src]);

  if (!src || failed) {
    return (
      <div
        className={`flex w-full items-center justify-center bg-navy-800 ${
          modal
            ? "min-h-[320px]"
            : "aspect-[4/3]"
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

  /**
   * Modal version:
   * shows the complete image using its original aspect ratio.
   */
  if (modal) {
    return (
      <div className="flex min-h-[260px] max-h-[72vh] w-full items-center justify-center overflow-hidden bg-black">
        <img
          src={src}
          alt={alt}
          loading="eager"
          decoding="async"
          onError={() => setFailed(true)}
          className="block h-auto max-h-[72vh] w-auto max-w-full object-contain"
        />
      </div>
    );
  }

  /**
   * Card version:
   * fixed 4:3 frame removes uneven card sizes.
   *
   * The background image may be visually cropped and blurred,
   * but the foreground/main image is always fully visible.
   */
  return (
    <div className="relative aspect-[4/3] w-full overflow-hidden bg-navy-900">
      {/* Blurred background layer */}
      <img
        src={src}
        alt=""
        aria-hidden="true"
        loading="lazy"
        decoding="async"
        className="absolute inset-0 h-full w-full scale-110 object-cover opacity-40 blur-2xl"
      />

      {/* Dark overlay for visual consistency */}
      <div className="absolute inset-0 bg-black/25" />

      {/* Complete uncropped foreground image */}
      <img
        src={src}
        alt={alt}
        loading="lazy"
        decoding="async"
        onError={() => setFailed(true)}
        className="relative z-10 h-full w-full object-contain"
      />
    </div>
  );
}

export default function Gallery() {
  const { data } = useData();

  const items = data.galleryItems || [];
  const categories = data.galleryCategories || [];

  const columnCount = useGalleryColumnCount();

  const [filter, setFilter] = useState("All");
  const [active, setActive] = useState(null);

  /**
   * Only display filters containing at least one gallery item.
   */
  const filters = useMemo(() => {
    const availableCategories = categories.filter(
      (category) =>
        items.some(
          (item) => item.category === category
        )
    );

    return ["All", ...availableCategories];
  }, [categories, items]);

  /**
   * Reset the selected filter if that category is removed.
   */
  useEffect(() => {
    if (!filters.includes(filter)) {
      setFilter("All");
    }
  }, [filter, filters]);

  /**
   * Apply the selected category filter.
   */
  const filteredItems = useMemo(() => {
    if (filter === "All") {
      return items;
    }

    return items.filter(
      (item) => item.category === filter
    );
  }, [filter, items]);

  /**
   * Spread cards belonging to the same event across different rows.
   */
  const visibleItems = useMemo(
    () =>
      spreadSimilarGalleryItems(
        filteredItems,
        columnCount
      ),
    [filteredItems, columnCount]
  );

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

        {/* Category filters */}
        <div className="mb-12 flex flex-wrap justify-center gap-2">
          {filters.map((category) => {
            const isActive =
              filter === category;

            return (
              <button
                key={category}
                type="button"
                onClick={() =>
                  setFilter(category)
                }
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
          Equal-height responsive grid.

          Fixed image ratio and limited visible text prevent the large
          empty spaces previously created by unequal card heights.
        */}
        <motion.div
          layout
          className="grid grid-cols-1 items-stretch gap-6 sm:grid-cols-2 lg:grid-cols-3"
        >
          <AnimatePresence mode="popLayout">
            {visibleItems.map(
              (item, index) => (
                <motion.button
                  key={item.id}
                  type="button"
                  layout
                  initial={{
                    opacity: 0,
                    scale: 0.96,
                    y: 14,
                  }}
                  animate={{
                    opacity: 1,
                    scale: 1,
                    y: 0,
                  }}
                  exit={{
                    opacity: 0,
                    scale: 0.96,
                    y: 14,
                  }}
                  transition={{
                    duration: 0.35,
                    delay:
                      (index % 6) * 0.04,
                  }}
                  onClick={() =>
                    setActive(item)
                  }
                  aria-label={`Open gallery item: ${item.title}`}
                  className="group flex h-full w-full flex-col overflow-hidden rounded-2xl border border-navy-900/10 bg-white text-left shadow-soft-light transition-all duration-300 hover:-translate-y-1 hover:shadow-soft focus:outline-none focus-visible:ring-2 focus-visible:ring-navy-900 focus-visible:ring-offset-2"
                >
                  {/* Image section */}
                  <div className="relative overflow-hidden">
                    <GalleryImage
                      src={item.image}
                      alt={item.title}
                    />

                    <div className="pointer-events-none absolute inset-0 z-20 bg-gradient-to-t from-black/35 via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

                    <span className="absolute left-3 top-3 z-30 rounded-full bg-black/75 px-3 py-1 text-[11px] font-semibold text-white shadow-sm backdrop-blur-sm">
                      {item.category}
                    </span>
                  </div>

                  {/* Text section */}
                  <div className="flex flex-1 flex-col p-5">
                    <h3 className="line-clamp-2 min-h-[2.75rem] font-display text-[15px] font-semibold leading-[1.4] text-navy-900">
                      {item.title}
                    </h3>

                    <p className="mt-2 line-clamp-3 min-h-[4.5rem] text-sm leading-6 text-navy-900/60">
                      {item.description ||
                        "Explore this portfolio milestone and its contribution to my professional development."}
                    </p>

                    {/* Footer stays aligned on every card */}
                    <div className="mt-auto min-h-[2rem] pt-3">
                      {item.date ? (
                        <div className="inline-flex items-center gap-1.5 text-xs text-navy-900/50">
                          <Calendar className="h-3.5 w-3.5" />

                          <span>
                            {item.date}
                          </span>
                        </div>
                      ) : (
                        <span
                          aria-hidden="true"
                          className="block h-4"
                        />
                      )}
                    </div>

                    <div className="mt-1 text-xs font-semibold text-navy-900/45 transition-colors group-hover:text-navy-900/70">
                      View full details
                    </div>
                  </div>
                </motion.button>
              )
            )}
          </AnimatePresence>
        </motion.div>
      </div>

      {/* Full-detail modal */}
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
                <p className="leading-7 text-white/70">
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
