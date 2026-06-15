import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { useData } from "../context/DataContext";
import SmartImage from "./SmartImage";
import SectionHeading from "./SectionHeading";

function scrollToId(id) {
  const el = document.getElementById(id);

  if (el) {
    const top = el.getBoundingClientRect().top + window.scrollY - 76;
    window.scrollTo({ top, behavior: "smooth" });
  }
}

function linkProps(href) {
  if (!href) return null;

  if (href.startsWith("#")) {
    return {
      onClick: () => scrollToId(href.slice(1)),
      as: "button",
    };
  }

  return {
    href,
    target: "_blank",
    rel: "noopener noreferrer",
    as: "a",
  };
}

export default function DynamicHighlights() {
  const { data } = useData();
  const items = data.highlightSections;

  if (!items || items.length === 0) return null;

  return (
    <section
      id="highlights"
      className="relative overflow-hidden bg-navy-gradient py-24 sm:py-28"
    >
      <div className="absolute inset-0 bg-mesh opacity-60" />

      <div className="relative mx-auto max-w-7xl px-5 sm:px-8">
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
                className="grid grid-cols-1 items-center gap-8 lg:grid-cols-2 lg:gap-14"
              >
                {/* Image */}
                <motion.div
                  initial={{ opacity: 0, x: reverse ? 40 : -40 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-80px" }}
                  transition={{ duration: 0.7 }}
                  className={reverse ? "lg:order-2" : ""}
                >
                  <div className="relative flex h-[320px] w-full items-center justify-center overflow-hidden rounded-3xl border border-white/10 bg-black/40 p-4 shadow-elevate">
                    <SmartImage
                      src={item.image}
                      alt={item.title}
                      className="h-full w-full object-contain"
                      imgClassName="h-full w-full object-contain"
                      placeholderLabel="Add highlight image"
                    />
                  </div>
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
                    <div className="mb-3 text-xs font-semibold uppercase tracking-[0.2em] text-gold">
                      {item.subtitle}
                    </div>
                  )}

                  <h3 className="mb-4 font-display text-2xl font-bold text-white sm:text-3xl">
                    {item.title}
                  </h3>

                  <p className="mb-6 text-base leading-relaxed text-white/65 sm:text-lg">
                    {item.description}
                  </p>

                  {item.tags && item.tags.length > 0 && (
                    <div className="mb-7 flex flex-wrap gap-2">
                      {item.tags.map((tag) => (
                        <span
                          key={tag}
                          className="rounded-full border border-gold/25 bg-gold/5 px-3 py-1 text-xs font-medium text-gold-soft"
                        >
                          {tag}
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
