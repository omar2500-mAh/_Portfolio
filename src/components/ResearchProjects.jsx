import { useState } from "react";
import { motion } from "framer-motion";
import {
  ArrowUpRight,
  Target,
  Lightbulb,
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
  Ongoing: "bg-blue-400/15 text-blue-300 border-blue-400/30",
  Completed: "bg-emerald-400/15 text-emerald-300 border-emerald-400/30",
  Published: "bg-gold/15 text-gold border-gold/30",
  Prototype: "bg-purple-400/15 text-purple-300 border-purple-400/30",
};

export default function ResearchProjects() {
  const { data } = useData();
  const items = data.researchProjects;
  const [detail, setDetail] = useState(null);
  const [expanded, setExpanded] = useState(null);

  if (!items?.length) return null;

  return (
    <section id="research" className="relative bg-navy-gradient py-24 sm:py-28 overflow-hidden">
      <div className="absolute inset-0 bg-mesh opacity-50" />
      <div className="relative mx-auto max-w-7xl px-5 sm:px-8">
        <SectionHeading
          eyebrow="Research & Projects"
          title="Where Ideas Become Engineering"
          subtitle="Selected research, theses, and prototypes across energy storage, renewables, and embedded systems."
        />

        <div className="space-y-10 lg:space-y-16">
          {items.map((p, i) => {
            const reverse = i % 2 === 1;
            const isOpen = expanded === p.id;

            return (
              <motion.article
                key={p.id}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.6 }}
                className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-12 items-center rounded-3xl border border-white/10 bg-white/[0.03] p-5 sm:p-8 backdrop-blur-sm hover:border-gold/20 transition-colors"
              >
                {/* Image */}
                <div className={reverse ? "lg:order-2" : ""}>
                  <button
                    onClick={() => setDetail(p)}
                    className="group relative block w-full overflow-hidden rounded-2xl border border-white/10 shadow-elevate"
                  >
                    <SmartImage
                      src={p.image}
                      alt={p.title}
                      className="aspect-[16/10] w-full"
                      imgClassName="group-hover:scale-105 transition-transform duration-700"
                      placeholderLabel="Add project image"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-navy-950/50 to-transparent" />
                  </button>
                </div>

                {/* Content */}
                <div className={reverse ? "lg:order-1" : ""}>
                  <div className="flex flex-wrap items-center gap-2.5 mb-4">
                    <span className="rounded-full bg-gold/10 px-3 py-1 text-xs font-semibold text-gold border border-gold/25">
                      {p.category}
                    </span>
                    {p.status && (
                      <span
                        className={`rounded-full px-3 py-1 text-xs font-semibold border ${
                          STATUS_STYLES[p.status] || STATUS_STYLES.Ongoing
                        }`}
                      >
                        {p.status}
                      </span>
                    )}
                  </div>

                  <h3 className="font-display text-2xl sm:text-3xl font-bold text-white mb-3 leading-tight">
                    {p.title}
                  </h3>
                  <p className="text-white/65 leading-relaxed mb-4">
                    {p.summary}
                  </p>

                  {/* Expand / collapse */}
                  <AnimatedDetails open={isOpen} project={p} />

                  <div className="flex flex-wrap items-center gap-4 mt-5">
                    <button
                      onClick={() => setExpanded(isOpen ? null : p.id)}
                      className="inline-flex items-center gap-1.5 text-sm font-semibold text-gold hover:text-gold-light"
                    >
                      {isOpen ? "Show Less" : "Read More"}
                      <ChevronDown
                        className={`h-4 w-4 transition-transform ${isOpen ? "rotate-180" : ""}`}
                      />
                    </button>
                    <button
                      onClick={() => setDetail(p)}
                      className="inline-flex items-center gap-1.5 text-sm font-semibold text-white/70 hover:text-white"
                    >
                      Full Details
                      <ArrowUpRight className="h-4 w-4" />
                    </button>
                  </div>

                  {/* Tags */}
                  {p.tags?.length > 0 && (
                    <div className="flex flex-wrap gap-2 mt-5">
                      {p.tags.map((t) => (
                        <span
                          key={t}
                          className="rounded-md bg-white/5 px-2.5 py-1 text-xs text-white/55 border border-white/5"
                        >
                          #{t}
                        </span>
                      ))}
                    </div>
                  )}
                </div>
              </motion.article>
            );
          })}
        </div>
      </div>

      {/* Full detail modal */}
      <Modal open={!!detail} onClose={() => setDetail(null)} maxWidth="max-w-3xl">
        {detail && <ProjectDetail project={detail} />}
      </Modal>
    </section>
  );
}

/** Inline expandable preview (problem / objective / etc.) */
function AnimatedDetails({ open, project }) {
  return (
    <motion.div
      initial={false}
      animate={{ height: open ? "auto" : 0, opacity: open ? 1 : 0 }}
      transition={{ duration: 0.4 }}
      className="overflow-hidden"
    >
      <div className="space-y-4 pt-2 pb-1">
        {project.description && (
          <p className="text-white/60 leading-relaxed text-sm">
            {project.description}
          </p>
        )}
        <DetailRow icon={AlertCircle} label="Problem" text={project.problem} />
        <DetailRow icon={Target} label="Objective" text={project.objective} />
        <DetailRow icon={TrendingUp} label="Results" text={project.results} />
      </div>
    </motion.div>
  );
}

function DetailRow({ icon: Icon, label, text }) {
  if (!text) return null;
  return (
    <div className="flex gap-3">
      <Icon className="h-4 w-4 text-gold mt-0.5 shrink-0" />
      <p className="text-sm text-white/60 leading-relaxed">
        <span className="font-semibold text-white/80">{label}: </span>
        {text}
      </p>
    </div>
  );
}

/** Rich modal content for a project */
function ProjectDetail({ project }) {
  const blocks = [
    { icon: AlertCircle, label: "Problem Statement", text: project.problem },
    { icon: Target, label: "Objective", text: project.objective },
    { icon: FlaskConical, label: "Methodology", text: project.methodology },
    { icon: TrendingUp, label: "Results & Impact", text: project.results },
  ].filter((b) => b.text);

  return (
    <div>
      <SmartImage
        src={project.image}
        alt={project.title}
        className="w-full aspect-[16/9] rounded-t-3xl"
        placeholderLabel="Project image"
      />
      <div className="p-6 sm:p-9">
        <div className="flex flex-wrap items-center gap-2.5 mb-4">
          <span className="rounded-full bg-gold/15 px-3 py-1 text-xs font-semibold text-gold">
            {project.category}
          </span>
          {project.status && (
            <span className={`rounded-full px-3 py-1 text-xs font-semibold border ${STATUS_STYLES[project.status] || STATUS_STYLES.Ongoing}`}>
              {project.status}
            </span>
          )}
        </div>

        <h3 className="font-display text-2xl sm:text-3xl font-bold text-white mb-4">
          {project.title}
        </h3>
        {project.description && (
          <p className="text-white/70 leading-relaxed mb-7">
            {project.description}
          </p>
        )}

        <div className="space-y-5">
          {blocks.map((b) => (
            <div key={b.label} className="rounded-2xl bg-white/[0.03] border border-white/8 p-5">
              <div className="flex items-center gap-2 mb-2">
                <b.icon className="h-4 w-4 text-gold" />
                <h4 className="font-display font-semibold text-white text-sm uppercase tracking-wide">
                  {b.label}
                </h4>
              </div>
              <p className="text-white/65 text-sm leading-relaxed">{b.text}</p>
            </div>
          ))}
        </div>

        {/* Tools */}
        {project.tools?.length > 0 && (
          <div className="mt-7">
            <div className="flex items-center gap-2 mb-3">
              <Wrench className="h-4 w-4 text-gold" />
              <h4 className="font-display font-semibold text-white text-sm uppercase tracking-wide">
                Tools & Software
              </h4>
            </div>
            <div className="flex flex-wrap gap-2">
              {project.tools.map((t) => (
                <span
                  key={t}
                  className="rounded-lg bg-gold/10 border border-gold/20 px-3 py-1.5 text-xs font-medium text-gold-soft"
                >
                  {t}
                </span>
              ))}
            </div>
          </div>
        )}

        {/* Links */}
        {project.links?.length > 0 && (
          <div className="mt-8 flex flex-wrap gap-3">
            {project.links.map((l) => (
              <a
                key={l.url}
                href={l.url}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full bg-gold-gradient px-5 py-2.5 text-sm font-semibold text-navy-900 transition-transform hover:scale-[1.03]"
              >
                {l.label}
                <ArrowUpRight className="h-4 w-4" />
              </a>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
