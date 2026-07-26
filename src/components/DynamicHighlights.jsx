import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import {
  AlertCircle,
  ArrowUpRight,
  ChevronDown,
  FlaskConical,
  Target,
  TrendingUp,
  Wrench,
} from "lucide-react";
import { useData } from "../context/DataContext";
import Modal from "./Modal";
import SectionHeading from "./SectionHeading";
import SmartImage from "./SmartImage";

const STATUS_STYLES = {
  Ongoing:
    "border-blue-400/30 bg-blue-400/15 text-blue-300",

  Completed:
    "border-emerald-400/30 bg-emerald-400/15 text-emerald-300",

  Published:
    "border-gold/30 bg-gold/15 text-gold",

  Prototype:
    "border-purple-400/30 bg-purple-400/15 text-purple-300",
};

/* ================================================================ */
/* IMAGE SLIDER                                                     */
/* ================================================================ */

function HighlightSlider({
  item,
  onOpenDetails,
}) {
  const images = item.images?.length
    ? item.images
    : item.image
      ? [item.image]
      : [];

  const [activeIndex, setActiveIndex] =
    useState(0);

  useEffect(() => {
    setActiveIndex(0);
  }, [item.id]);

  useEffect(() => {
    if (images.length <= 1) {
      return undefined;
    }

    const timer =
      window.setInterval(() => {
        setActiveIndex(
          (current) =>
            (current + 1) %
            images.length
        );
      }, 2500);

    return () =>
      window.clearInterval(timer);
  }, [images.length]);

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
              images[activeIndex] ||
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
              duration: 0.5,
              ease: "easeInOut",
            }}
            className="absolute inset-0"
          >
            <SmartImage
              src={
                images[activeIndex]
              }
              alt={item.title}
              className="h-full w-full"
              imgClassName="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
              placeholderLabel="Add focus-area image"
            />
          </motion.div>
        </AnimatePresence>

        <div className="absolute inset-0 bg-gradient-to-t from-navy-950/60 to-transparent" />
      </button>

      {images.length > 1 && (
        <div className="absolute bottom-4 left-1/2 z-10 flex -translate-x-1/2 gap-1.5 rounded-full bg-black/35 px-3 py-1.5 backdrop-blur">
          {images.map(
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
                  index ===
                  activeIndex
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
/* MAIN FOCUS AREAS SECTION                                         */
/* ================================================================ */

export default function DynamicHighlights() {
  const { data } = useData();

  const items = Array.isArray(
    data?.highlightSections
  )
    ? data.highlightSections
    : [];

  const [
    expandedId,
    setExpandedId,
  ] = useState(null);

  const [
    selectedProject,
    setSelectedProject,
  ] = useState(null);

  if (!items.length) {
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
          subtitle="Battery modeling, thermal management, safety analysis, and hands-on battery-pack engineering explained in clear terms."
        />

        <div className="space-y-16 sm:space-y-24">
          {items.map(
            (item, index) => {
              const reverse =
                index % 2 === 1;

              const isExpanded =
                expandedId ===
                item.id;

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
                        setSelectedProject(
                          item
                        )
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
                    {/* CATEGORY AND STATUS */}
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

                    {/* SUBTITLE */}
                    {item.subtitle && (
                      <div className="mb-3 text-xs font-semibold uppercase tracking-[0.2em] text-gold">
                        {item.subtitle}
                      </div>
                    )}

                    {/* TITLE */}
                    <h3 className="mb-4 font-display text-2xl font-bold text-white sm:text-3xl">
                      {item.title}
                    </h3>

                    {/* SHORT SUMMARY */}
                    <p className="mb-4 text-base leading-relaxed text-white/65 sm:text-lg">
                      {item.summary ||
                        item.description}
                    </p>

                    {/* READ MORE CONTENT */}
                    <ExpandableDetails
                      open={isExpanded}
                      project={item}
                    />

                    {/* BUTTONS */}
                    <div className="mt-5 flex flex-wrap items-center gap-4">
                      <button
                        type="button"
                        onClick={() =>
                          setExpandedId(
                            isExpanded
                              ? null
                              : item.id
                          )
                        }
                        className="inline-flex items-center gap-1.5 text-sm font-semibold text-gold hover:text-gold-light"
                      >
                        {isExpanded
                          ? "Show Less"
                          : "Read More"}

                        <ChevronDown
                          className={`h-4 w-4 transition-transform ${
                            isExpanded
                              ? "rotate-180"
                              : ""
                          }`}
                        />
                      </button>

                      <button
                        type="button"
                        onClick={() =>
                          setSelectedProject(
                            item
                          )
                        }
                        className="inline-flex items-center gap-1.5 text-sm font-semibold text-white/70 hover:text-white"
                      >
                        Full Details

                        <ArrowUpRight className="h-4 w-4" />
                      </button>
                    </div>

                    {/* TAGS WITHOUT # SYMBOL */}
                    {item.tags?.length >
                      0 && (
                      <div className="mt-5 flex flex-wrap gap-2">
                        {item.tags.map(
                          (tag) => (
                            <span
                              key={tag}
                              className="rounded-md border border-white/5 bg-white/5 px-2.5 py-1 text-xs text-white/55"
                            >
                              {tag}
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

      {/* FULL DETAILS MODAL */}
      <Modal
        open={Boolean(
          selectedProject
        )}
        onClose={() =>
          setSelectedProject(null)
        }
        maxWidth="max-w-3xl"
      >
        {selectedProject && (
          <ProjectDetail
            project={
              selectedProject
            }
          />
        )}
      </Modal>
    </section>
  );
}

/* ================================================================ */
/* READ MORE / SHOW LESS                                             */
/* ================================================================ */

function ExpandableDetails({
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
        {(project.fullDescription ||
          project.description) && (
          <p className="text-sm leading-relaxed text-white/60">
            {project.fullDescription ||
              project.description}
          </p>
        )}

        <DetailRow
          icon={AlertCircle}
          label="Problem"
          text={project.problem}
        />

        <DetailRow
          icon={Target}
          label="Objective"
          text={project.objective}
        />

        <DetailRow
          icon={FlaskConical}
          label="How It Was Done"
          text={
            project.methodology
          }
        />

        <DetailRow
          icon={TrendingUp}
          label="Main Findings"
          text={project.results}
        />

        <DetailRow
          icon={ArrowUpRight}
          label="Next Step"
          text={project.nextStep}
        />

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
/* DETAIL ROW                                                       */
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
/* FULL DETAILS MODAL                                               */
/* ================================================================ */

function ProjectDetail({
  project,
}) {
  const blocks = [
    {
      icon: AlertCircle,
      label: "Problem",
      text: project.problem,
    },

    {
      icon: Target,
      label: "Objective",
      text: project.objective,
    },

    {
      icon: FlaskConical,
      label:
        "How It Was Done",
      text:
        project.methodology,
    },

    {
      icon: TrendingUp,
      label:
        "Main Findings",
      text: project.results,
    },

    {
      icon: ArrowUpRight,
      label: "Next Step",
      text: project.nextStep,
    },
  ].filter(
    (block) => block.text
  );

  const tags = [
    ...new Set([
      ...(project.tags || []),
      ...(project.detailTags ||
        []),
    ]),
  ];

  return (
    <div>
      {/* MAIN IMAGE */}
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
        {/* CATEGORY AND STATUS */}
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

        {/* SUBTITLE */}
        {project.subtitle && (
          <p className="mb-2 text-xs font-semibold uppercase tracking-[0.18em] text-gold">
            {project.subtitle}
          </p>
        )}

        {/* TITLE */}
        <h3 className="mb-4 font-display text-2xl font-bold text-white sm:text-3xl">
          {project.detailTitle ||
            project.title}
        </h3>

        {/* SUMMARY */}
        {project.summary && (
          <p className="mb-4 text-base font-medium leading-relaxed text-gold-soft">
            {project.summary}
          </p>
        )}

        {/* FULL DESCRIPTION */}
        <p className="mb-7 leading-relaxed text-white/70">
          {project.fullDescription ||
            project.description}
        </p>

        {/* DETAILS BLOCKS */}
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

        {/* TOOLS */}
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

        {/* TAGS WITHOUT # SYMBOL */}
        {tags.length > 0 && (
          <div className="mt-7 flex flex-wrap gap-2">
            {tags.map((tag) => (
              <span
                key={tag}
                className="rounded-md border border-white/10 bg-white/5 px-2.5 py-1 text-xs text-white/55"
              >
                {tag}
              </span>
            ))}
          </div>
        )}

        {/* EXTERNAL LINKS */}
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
