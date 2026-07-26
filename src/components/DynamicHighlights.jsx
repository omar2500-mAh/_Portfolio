import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  ArrowUpRight,
  Target,
  FlaskConical,
  Wrench,
  TrendingUp,
  AlertCircle,
  ChevronDown,
} from "lucide-react";
import { useData } from "../context/DataContext";
import SmartImage from "./SmartImage";
import SectionHeading from "./SectionHeading";
import Modal from "./Modal";

const STATUS_STYLES = {
  Ongoing:
    "bg-blue-400/15 text-blue-300 border-blue-400/30",

  Completed:
    "bg-emerald-400/15 text-emerald-300 border-emerald-400/30",

  Published:
    "bg-gold/15 text-gold border-gold/30",

  Prototype:
    "bg-purple-400/15 text-purple-300 border-purple-400/30",
};

/* ================================================================ */
/* IMAGE SLIDER                                                     */
/* ================================================================ */

function HighlightSlider({
  item,
  onOpenDetails,
}) {
  const imageList =
    item.images?.length > 0
      ? item.images
      : item.image
        ? [item.image]
        : [];

  const [activeIndex, setActiveIndex] =
    useState(0);

  /*
   * When a different project is shown,
   * start again from its first image.
   */
  useEffect(() => {
    setActiveIndex(0);
  }, [item.id]);

  /*
   * Automatically change image every two seconds.
   */
  useEffect(() => {
    if (imageList.length <= 1) {
      return undefined;
    }

    const timer = window.setInterval(() => {
      setActiveIndex(
        (previousIndex) =>
          (previousIndex + 1) %
          imageList.length
      );
    }, 2000);

    return () => {
      window.clearInterval(timer);
    };
  }, [imageList.length]);

  return (
    <div className="group relative overflow-hidden rounded-3xl border border-white/10 shadow-elevate">
      <button
        type="button"
        onClick={onOpenDetails}
        className="relative block aspect-[4/3] w-full overflow-hidden text-left lg:min-h-[440px]"
        aria-label={`Open full details for ${item.title}`}
      >
        <AnimatePresence mode="wait">
          <motion.div
            key={
              imageList[activeIndex] ||
              item.id
            }
            initial={{
              opacity: 0,
              scale: 1.03,
            }}
            animate={{
              opacity: 1,
              scale: 1,
            }}
            exit={{
              opacity: 0,
              scale: 0.98,
            }}
            transition={{
              duration: 0.55,
              ease: "easeInOut",
            }}
            className="absolute inset-0"
          >
            <SmartImage
              src={
                imageList[activeIndex]
              }
              alt={item.title}
              className="h-full w-full"
              imgClassName="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
              placeholderLabel="Add highlight image"
            />
          </motion.div>
        </AnimatePresence>

        <div className="absolute inset-0 bg-gradient-to-t from-navy-950/60 to-transparent" />
      </button>

      {/* Clickable slider dots */}
      {imageList.length > 1 && (
        <div className="absolute bottom-4 left-1/2 z-10 flex -translate-x-1/2 gap-1.5 rounded-full bg-black/35 px-3 py-1.5 backdrop-blur">
          {imageList.map(
            (image, index) => (
              <button
                key={`${image}-${index}`}
                type="button"
                aria-label={`Show image ${
                  index + 1
                }`}
                onClick={() =>
                  setActiveIndex(index)
                }
                className={`h-1.5 rounded-full transition-all ${
                  index === activeIndex
                    ? "w-6 bg-gold"
                    : "w-1.5 bg-white/45"
                }`}
              />
            )
          )}
        </div>
      )}
    </div>
  );
}

/* ================================================================ */
/* MAIN RESEARCH / FOCUS SECTION                                    */
/* ================================================================ */

export default function DynamicHighlights() {
  const { data } = useData();

  const items =
    data.highlightSections;

  const [detail, setDetail] =
    useState(null);

  const [expanded, setExpanded] =
    useState(null);

  if (!items?.length) {
    return null;
  }

  return (
    <section
      id="research"
      className="relative overflow-hidden bg-navy-gradient py-24 sm:py-28"
    >
      <div className="absolute inset-0 bg-mesh opacity-60" />

      <div className="relative mx-auto max-w-[88rem] px-5 sm:px-8">
        <SectionHeading
          eyebrow="What I Work On"
          title="Focus Areas"
          subtitle="The themes driving my research and engineering — energy, sustainability, and connected systems."
        />

        <div className="space-y-16 sm:space-y-24">
          {items.map(
            (item, index) => {
              const reverse =
                index % 2 === 1;

              const isOpen =
                expanded === item.id;

              return (
                <article
                  key={item.id}
                  className="grid grid-cols-1 items-center gap-8 lg:grid-cols-[1.08fr_0.92fr] lg:gap-14"
                >
                  {/* IMAGE SIDE */}
                  <motion.div
                    initial={{
                      opacity: 0,
                      x: reverse
                        ? 40
                        : -40,
                    }}
                    whileInView={{
                      opacity: 1,
                      x: 0,
                    }}
                    viewport={{
                      once: true,
                      margin: "-80px",
                    }}
                    transition={{
                      duration: 0.7,
                    }}
                    className={
                      reverse
                        ? "lg:order-2"
                        : ""
                    }
                  >
                    <HighlightSlider
                      item={item}
                      onOpenDetails={() =>
                        setDetail(item)
                      }
                    />
                  </motion.div>

                  {/* CONTENT SIDE */}
                  <motion.div
                    initial={{
                      opacity: 0,
                      x: reverse
                        ? -40
                        : 40,
                    }}
                    whileInView={{
                      opacity: 1,
                      x: 0,
                    }}
                    viewport={{
                      once: true,
                      margin: "-80px",
                    }}
                    transition={{
                      duration: 0.7,
                      delay: 0.1,
                    }}
                    className={
                      reverse
                        ? "lg:order-1"
                        : ""
                    }
                  >
                    {/* Category and status */}
                    <div className="mb-4 flex flex-wrap items-center gap-2.5">
                      <span className="rounded-full border border-gold/25 bg-gold/10 px-3 py-1 text-xs font-semibold text-gold">
                        {item.category ||
                          "Project"}
                      </span>

                      <span
                        className={`rounded-full border px-3 py-1 text-xs font-semibold ${
                          STATUS_STYLES[
                            item.status
                          ] ||
                          STATUS_STYLES.Ongoing
                        }`}
                      >
                        {item.status ||
                          "Ongoing"}
                      </span>
                    </div>

                    {/* Existing subtitle remains */}
                    {item.subtitle && (
                      <div className="mb-3 text-xs font-semibold uppercase tracking-[0.2em] text-gold">
                        {item.subtitle}
                      </div>
                    )}

                    {/* Existing title remains */}
                    <h3 className="mb-4 font-display text-2xl font-bold text-white sm:text-3xl">
                      {item.title}
                    </h3>

                    {/* Research summary */}
                    <p className="mb-4 text-base leading-relaxed text-white/65 sm:text-lg">
                      {item.summary ||
                        item.description}
                    </p>

                    {/* Expandable complete information */}
                    <AnimatedDetails
                      open={isOpen}
                      project={item}
                    />

                    {/* Buttons */}
                    <div className="mt-5 flex flex-wrap items-center gap-4">
                      <button
                        type="button"
                        onClick={() =>
                          setExpanded(
                            isOpen
                              ? null
                              : item.id
                          )
                        }
                        className="inline-flex items-center gap-1.5 text-sm font-semibold text-gold hover:text-gold-light"
                      >
                        {isOpen
                          ? "Show Less"
                          : "Read More"}

                        <ChevronDown
                          className={`h-4 w-4 transition-transform ${
                            isOpen
                              ? "rotate-180"
                              : ""
                          }`}
                        />
                      </button>

                      <button
                        type="button"
                        onClick={() =>
                          setDetail(item)
                        }
                        className="inline-flex items-center gap-1.5 text-sm font-semibold text-white/70 hover:text-white"
                      >
                        Full Details

                        <ArrowUpRight className="h-4 w-4" />
                      </button>
                    </div>

                    {/* Existing tags remain */}
                    {item.tags?.length >
                      0 && (
                      <div className="mt-5 flex flex-wrap gap-2">
                        {item.tags.map(
                          (tag) => (
                            <span
                              key={tag}
                              className="rounded-md border border-white/5 bg-white/5 px-2.5 py-1 text-xs text-white/55"
                            >
                              #{tag}
                            </span>
                          )
                        )}
                      </div>
                    )}
                  </motion.div>
                </article>
              );
            }
          )}
        </div>
      </div>

      {/* Full Details popup */}
      <Modal
        open={Boolean(detail)}
        onClose={() =>
          setDetail(null)
        }
        maxWidth="max-w-3xl"
      >
        {detail && (
          <ProjectDetail
            project={detail}
          />
        )}
      </Modal>
    </section>
  );
}

/* ================================================================ */
/* READ MORE / SHOW LESS CONTENT                                    */
/* ================================================================ */

function AnimatedDetails({
  open,
  project,
}) {
  return (
    <motion.div
      initial={false}
      animate={{
        height: open
          ? "auto"
          : 0,

        opacity: open
          ? 1
          : 0,
      }}
      transition={{
        duration: 0.4,
      }}
      className="overflow-hidden"
    >
      <div className="space-y-4 pb-1 pt-2">
        {/* Complete description */}
        {(project.fullDescription ||
          project.description) && (
          <p className="text-sm leading-relaxed text-white/60">
            {project.fullDescription ||
              project.description}
          </p>
        )}

        {/* Problem */}
        <DetailRow
          icon={AlertCircle}
          label="Problem"
          text={project.problem}
        />

        {/* Objective */}
        <DetailRow
          icon={Target}
          label="Objective"
          text={project.objective}
        />

        {/* Methodology */}
        <DetailRow
          icon={FlaskConical}
          label="Methodology"
          text={project.methodology}
        />

        {/* Results */}
        <DetailRow
          icon={TrendingUp}
          label="Results"
          text={project.results}
        />

        {/* Tools */}
        {project.tools?.length >
          0 && (
          <div className="flex gap-3">
            <Wrench className="mt-0.5 h-4 w-4 shrink-0 text-gold" />

            <div>
              <p className="mb-2 text-sm font-semibold text-white/80">
                Tools & Software:
              </p>

              <div className="flex flex-wrap gap-2">
                {project.tools.map(
                  (tool) => (
                    <span
                      key={tool}
                      className="rounded-lg border border-gold/20 bg-gold/10 px-3 py-1.5 text-xs font-medium text-gold-soft"
                    >
                      {tool}
                    </span>
                  )
                )}
              </div>
            </div>
          </div>
        )}
      </div>
    </motion.div>
  );
}

/* ================================================================ */
/* SMALL DETAIL ROW                                                  */
/* ================================================================ */

function DetailRow({
  icon: Icon,
  label,
  text,
}) {
  if (!text) {
    return null;
  }

  return (
    <div className="flex gap-3">
      <Icon className="mt-0.5 h-4 w-4 shrink-0 text-gold" />

      <p className="text-sm leading-relaxed text-white/60">
        <span className="font-semibold text-white/80">
          {label}:{" "}
        </span>

        {text}
      </p>
    </div>
  );
}

/* ================================================================ */
/* FULL DETAILS MODAL                                                */
/* ================================================================ */

function ProjectDetail({
  project,
}) {
  const blocks = [
    {
      icon: AlertCircle,
      label:
        "Problem Statement",
      text: project.problem,
    },

    {
      icon: Target,
      label: "Objective",
      text: project.objective,
    },

    {
      icon: FlaskConical,
      label: "Methodology",
      text:
        project.methodology,
    },

    {
      icon: TrendingUp,
      label:
        "Results & Impact",
      text: project.results,
    },
  ].filter(
    (block) => block.text
  );

  const combinedTags = [
    ...(project.tags || []),
    ...(project.detailTags ||
      []),
  ];

  const uniqueTags = [
    ...new Set(combinedTags),
  ];

  return (
    <div>
      {/* Detailed project image */}
      <SmartImage
        src={
          project.detailImage ||
          project.image
        }
        alt={
          project.detailTitle ||
          project.title
        }
        className="aspect-[16/9] w-full rounded-t-3xl"
        placeholderLabel="Project image"
      />

      <div className="p-6 sm:p-9">
        {/* Category and status */}
        <div className="mb-4 flex flex-wrap items-center gap-2.5">
          <span className="rounded-full bg-gold/15 px-3 py-1 text-xs font-semibold text-gold">
            {project.category ||
              "Project"}
          </span>

          <span
            className={`rounded-full border px-3 py-1 text-xs font-semibold ${
              STATUS_STYLES[
                project.status
              ] ||
              STATUS_STYLES.Ongoing
            }`}
          >
            {project.status ||
              "Ongoing"}
          </span>
        </div>

        {/* Subtitle */}
        {project.subtitle && (
          <p className="mb-2 text-xs font-semibold uppercase tracking-[0.18em] text-gold">
            {project.subtitle}
          </p>
        )}

        {/* Title */}
        <h3 className="mb-4 font-display text-2xl font-bold text-white sm:text-3xl">
          {project.detailTitle ||
            project.title}
        </h3>

        {/* Summary */}
        {project.summary && (
          <p className="mb-4 text-base font-medium leading-relaxed text-gold-soft">
            {project.summary}
          </p>
        )}

        {/* Full description */}
        <p className="mb-7 leading-relaxed text-white/70">
          {project.fullDescription ||
            project.description}
        </p>

        {/* Problem, objective, methodology and results */}
        {blocks.length > 0 && (
          <div className="space-y-5">
            {blocks.map(
              (block) => {
                const Icon =
                  block.icon;

                return (
                  <div
                    key={
                      block.label
                    }
                    className="rounded-2xl border border-white/10 bg-white/[0.03] p-5"
                  >
                    <div className="mb-2 flex items-center gap-2">
                      <Icon className="h-4 w-4 text-gold" />

                      <h4 className="font-display text-sm font-semibold uppercase tracking-wide text-white">
                        {
                          block.label
                        }
                      </h4>
                    </div>

                    <p className="text-sm leading-relaxed text-white/65">
                      {
                        block.text
                      }
                    </p>
                  </div>
                );
              }
            )}
          </div>
        )}

        {/* Tools and software */}
        {project.tools?.length >
          0 && (
          <div className="mt-7">
            <div className="mb-3 flex items-center gap-2">
              <Wrench className="h-4 w-4 text-gold" />

              <h4 className="font-display text-sm font-semibold uppercase tracking-wide text-white">
                Tools & Software
              </h4>
            </div>

            <div className="flex flex-wrap gap-2">
              {project.tools.map(
                (tool) => (
                  <span
                    key={tool}
                    className="rounded-lg border border-gold/20 bg-gold/10 px-3 py-1.5 text-xs font-medium text-gold-soft"
                  >
                    {tool}
                  </span>
                )
              )}
            </div>
          </div>
        )}

        {/* Tags */}
        {uniqueTags.length > 0 && (
          <div className="mt-7 flex flex-wrap gap-2">
            {uniqueTags.map(
              (tag) => (
                <span
                  key={tag}
                  className="rounded-md border border-white/10 bg-white/5 px-2.5 py-1 text-xs text-white/55"
                >
                  #{tag}
                </span>
              )
            )}
          </div>
        )}

        {/* External links */}
        {project.links?.length >
          0 && (
          <div className="mt-8 flex flex-wrap gap-3">
            {project.links.map(
              (link) => (
                <a
                  key={`${link.label}-${link.url}`}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-full bg-gold-gradient px-5 py-2.5 text-sm font-semibold text-navy-900 transition-transform hover:scale-[1.03]"
                >
                  {link.label}

                  <ArrowUpRight className="h-4 w-4" />
                </a>
              )
            )}
          </div>
        )}
      </div>
    </div>
  );
}
