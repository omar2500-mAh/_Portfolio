import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { useData } from "../context/DataContext";
import SmartImage from "./SmartImage";
import SectionHeading from "./SectionHeading";

/** Resolve an internal (#research) or external link into props */
function linkProps(href) {
  if (!href) return null;

  if (href.startsWith("#")) {
    return { onClick: () => scrollToId(href.slice(1)), as: "button" };
  }

  return { href, target: "_blank", rel: "noopener noreferrer", as: "a" };
}

function scrollToId(id) {
  const el = document.getElementById(id);

  if (el) {
    const top = el.getBoundingClientRect().top + window.scrollY - 76;
    window.scrollTo({ top, behavior: "smooth" });
  }
}

function HighlightSlider({ item }) {
  const imageList =
    item.images && item.images.length > 0
      ? item.images
      : item.image
      ? [item.image]
      : [];

  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    if (imageList.length <= 1) return;

    const timer = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % imageList.length);
    }, 2000);

    return () => clearInterval(timer);
  }, [imageList.length]);

  return (
    <div className="group relative overflow-hidden rounded-3xl border border-white/10 shadow-elevate">
      <div className="relative aspect-[4/3] w-full overflow-hidden lg:min-h-[440px]">
        <AnimatePresence mode="wait">
          <motion.div
            key={imageList[activeIndex] || item.id}
            initial={{ opacity: 0, scale: 1.03 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.98 }}
            transition={{ duration: 0.55, ease: "easeInOut" }}
            className="absolute inset-0"
          >
            <SmartImage
              src={imageList[activeIndex]}
              alt={item.title}
              className="h-full w-full"
              imgClassName="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
              placeholderLabel="Add highlight image"
            />
          </motion.div>
        </AnimatePresence>

        <div className="absolute inset-0 bg-gradient-to-t from-navy-950/60 to-transparent" />

        {imageList.length > 1 && (
          <div className="absolute bottom-4 left-1/2 z-10 flex -translate-x-1/2 gap-1.5 rounded-full bg-black/35 px-3 py-1.5 backdrop-blur">
            {imageList.map((_, index) => (
              <span
                key={index}
                className={`h-1.5 rounded-full transition-all ${
                  index === activeIndex ? "w-6 bg-gold" : "w-1.5 bg-white/45"
                }`}
              />
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

export default function DynamicHighlights() {
  const { data } = useData();
  const items = data.highlightSections;

  if (!items?.length) return null;

  return (
    <section
      id="highlights"
      className="relative bg-navy-gradient py-24 sm:py-28 overflow-hidden"
    >
      <div className="absolute inset-0 bg-mesh opacity-60" />

      <div className="relative mx-auto max-w-[88rem] px-5 sm:px-8">
        <SectionHeading
          eyebrow="What I Work On"
          title="Focus Areas"
          subtitle="The themes driving my research and engineering — energy, sustainability, and connected systems."
        />

        <div className="space-y-16 sm:space-y-24">
          {items.map((item, i) => {
            const reverse = i % 2 === 1;
            const lp = linkProps(item.buttonLink);

            return (
              <div
                key={item.id}
                className="grid grid-cols-1 lg:grid-cols-[1.08fr_0.92fr] gap-8 lg:gap-14 items-center"
              >
                {/* Image Slider */}
                <motion.div
                  initial={{ opacity: 0, x: reverse ? 40 : -40 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-80px" }}
                  transition={{ duration: 0.7 }}
                  className={reverse ? "lg:order-2" : ""}
                >
                  <HighlightSlider item={item} />
                </motion.div>

                {/* Text */}
                <motion.div
                  initial={{ opacity: 0, x: reverse ? -40 : 40 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-80px" }}
                  transition={{ duration: 0.7, delay: 0.1 }}
                  className={reverse ? "lg:order-1" : ""}
                >
                  {item.subtitle && (
                    <div className="text-xs font-semibold uppercase tracking-[0.2em] text-gold mb-3">
                      {item.subtitle}
                    </div>
                  )}

                  <h3 className="font-display text-2xl sm:text-3xl font-bold text-white mb-4">
                    {item.title}
                  </h3>

                  <p className="text-white/65 text-base sm:text-lg leading-relaxed mb-6">
                    {item.description}
                  </p>

                  {item.tags?.length > 0 && (
                    <div className="flex flex-wrap gap-2 mb-7">
                      {item.tags.map((t) => (
                        <span
                          key={t}
                          className="rounded-full border border-gold/25 bg-gold/5 px-3 py-1 text-xs font-medium text-gold-soft"
                        >
                          {t}
                        </span>
                      ))}
                    </div>
                  )}

                  {item.buttonText &&
                    lp &&
                    (lp.as === "a" ? (
                      <a
                        href={lp.href}
                        target={lp.target}
                        rel={lp.rel}
                        className="group inline-flex items-center gap-2 text-sm font-semibold text-gold hover:text-gold-light"
                      >
                        {item.buttonText}
                        <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                      </a>
                    ) : (
                      <button
                        type="button"
                        onClick={lp.onClick}
                        className="group inline-flex items-center gap-2 text-sm font-semibold text-gold hover:text-gold-light"
                      >
                        {item.buttonText}
                        <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                      </button>
                    ))}
                </motion.div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
