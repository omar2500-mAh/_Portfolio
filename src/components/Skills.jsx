import { motion } from "framer-motion";
import {
  Activity,
  ArrowUpRight,
  BatteryCharging,
  Braces,
  Check,
  CircuitBoard,
  FileText,
  Flame,
  Layers3,
  Radar,
  Sparkles,
  Wrench,
} from "lucide-react";
import { useData } from "../context/DataContext";
import SectionHeading from "./SectionHeading";

const ICONS = {
  activity: Activity,
  battery: BatteryCharging,
  braces: Braces,
  circuit: CircuitBoard,
  document: FileText,
  flame: Flame,
  layers: Layers3,
  radar: Radar,
  wrench: Wrench,
};

const LAYOUT_CLASSES = {
  wide: "lg:col-span-6",
  standard: "lg:col-span-4",
  half: "lg:col-span-6",
  full: "lg:col-span-12",
};

function getIcon(name) {
  return ICONS[name] || Wrench;
}

export default function Skills() {
  const { data } = useData();
  const groups = data.skills;

  if (!groups?.length) return null;

  const metrics = groups
    .filter((group) => group.metric)
    .slice(0, 4);

  const coreStack = [
    ...new Set(
      groups.flatMap((group) => group.tools || [])
    ),
  ].slice(0, 12);

  return (
    <section
      id="skills"
      className="relative overflow-hidden border-y border-white/5 bg-navy-gradient py-24 sm:py-28"
    >
      <div className="absolute inset-0 bg-mesh opacity-60" />

      <div className="absolute -right-40 top-20 h-[34rem] w-[34rem] rounded-full border border-white/[0.04]" />

      <div className="absolute -right-20 top-40 h-[22rem] w-[22rem] rounded-full border border-white/[0.05]" />

      <div className="absolute right-24 top-72 h-3 w-3 rounded-full bg-gold/60 shadow-gold-glow" />

      <div className="relative mx-auto max-w-7xl px-5 sm:px-8">
        <SectionHeading
          eyebrow="Engineering Capability Stack"
          title="Technical Skills, Proven by Practice"
          subtitle="A focused combination of battery testing, physics-based simulation, BMS engineering, embedded hardware, and research communication."
        />

        <CapabilityPanel
          metrics={metrics}
          coreStack={coreStack}
        />

        <div className="mt-8 grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-12">
          {groups.map((group, index) => (
            <SkillDomain
              key={group.id || group.category}
              group={group}
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

function CapabilityPanel({
  metrics,
  coreStack,
}) {
  return (
    <motion.div
      initial={{
        opacity: 0,
        y: 28,
      }}
      whileInView={{
        opacity: 1,
        y: 0,
      }}
      viewport={{
        once: true,
        margin: "-80px",
      }}
      transition={{
        duration: 0.65,
      }}
      className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-white/[0.035] p-5 shadow-elevate backdrop-blur-sm sm:p-7 lg:p-8"
    >
      <div className="pointer-events-none absolute -right-24 -top-24 h-72 w-72 rounded-full bg-white/[0.035] blur-3xl" />

      <div className="grid gap-8 lg:grid-cols-[0.8fr_1.2fr] lg:items-center">
        <div>
          <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-gold/20 bg-gold/10 px-3 py-1.5 text-xs font-semibold uppercase tracking-[0.18em] text-gold-soft">
            <Sparkles className="h-3.5 w-3.5" />

            Capability Map
          </div>

          <h3 className="max-w-xl font-display text-2xl font-bold leading-tight text-white sm:text-3xl">
            From cell data to pack-level
            engineering decisions.
          </h3>

          <p className="mt-4 max-w-xl text-sm leading-relaxed text-white/[0.55] sm:text-base">
            My workflow connects electrochemical
            testing, model calibration,
            thermal-safety simulation, BMS
            validation, and hardware
            troubleshooting rather than treating
            them as isolated skills.
          </p>
        </div>

        <div className="grid grid-cols-2 gap-3 sm:gap-4">
          {metrics.map((metric, index) => (
            <motion.div
              key={
                metric.id ||
                metric.category
              }
              initial={{
                opacity: 0,
                scale: 0.96,
              }}
              whileInView={{
                opacity: 1,
                scale: 1,
              }}
              viewport={{
                once: true,
              }}
              transition={{
                duration: 0.4,
                delay:
                  0.12 + index * 0.07,
              }}
              className="relative min-h-28 overflow-hidden rounded-2xl border border-white/10 bg-black/20 p-4 sm:p-5"
            >
              <div className="absolute right-3 top-3 text-[10px] font-semibold tracking-[0.2em] text-white/20">
                0{index + 1}
              </div>

              <div className="pr-5 font-display text-base font-bold text-white sm:text-lg">
                {metric.metric}
              </div>

              <div className="mt-2 text-xs leading-relaxed text-white/[0.45]">
                {metric.metricLabel}
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {coreStack.length > 0 && (
        <div className="mt-7 border-t border-white/10 pt-5">
          <div className="mb-3 flex items-center gap-2 text-[11px] font-semibold uppercase tracking-[0.2em] text-white/[0.35]">
            <Radar className="h-3.5 w-3.5 text-gold" />

            Core engineering stack
          </div>

          <div className="flex flex-wrap gap-2">
            {coreStack.map((tool) => (
              <span
                key={tool}
                className="rounded-full border border-white/10 bg-white/[0.035] px-3 py-1.5 text-xs font-medium text-white/60 transition-colors hover:border-gold/25 hover:text-white"
              >
                {tool}
              </span>
            ))}
          </div>
        </div>
      )}
    </motion.div>
  );
}

function SkillDomain({
  group,
  index,
}) {
  const Icon = getIcon(group.icon);

  const layoutClass =
    LAYOUT_CLASSES[group.layout] ||
    LAYOUT_CLASSES.standard;

  const featured =
    group.layout === "wide" ||
    group.layout === "full";

  return (
    <motion.article
      initial={{
        opacity: 0,
        y: 30,
      }}
      whileInView={{
        opacity: 1,
        y: 0,
      }}
      viewport={{
        once: true,
        margin: "-60px",
      }}
      transition={{
        duration: 0.5,
        delay:
          (index % 3) * 0.08,
      }}
      whileHover={{
        y: -5,
      }}
      className={`${layoutClass} group relative overflow-hidden rounded-3xl border border-white/10 bg-white/[0.03] p-5 shadow-soft backdrop-blur-sm transition-colors hover:border-gold/25 sm:p-6`}
    >
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent opacity-0 transition-opacity group-hover:opacity-100" />

      <div className="absolute -right-10 -top-10 h-32 w-32 rounded-full bg-white/[0.025] blur-2xl transition-transform duration-500 group-hover:scale-150" />

      <div className="relative flex h-full flex-col">
        <div className="mb-5 flex items-start justify-between gap-4">
          <div className="flex items-start gap-3.5">
            <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl border border-gold/20 bg-gold/10 text-gold-soft shadow-gold-glow">
              <Icon className="h-5 w-5" />
            </div>

            <div>
              <p className="mb-1 text-[10px] font-semibold uppercase tracking-[0.2em] text-gold/70">
                {group.badge ||
                  "Applied"}
              </p>

              <h3 className="font-display text-lg font-bold leading-snug text-white sm:text-xl">
                {group.category}
              </h3>
            </div>
          </div>

          <span className="font-display text-xs font-bold text-white/[0.15]">
            {String(index + 1).padStart(
              2,
              "0"
            )}
          </span>
        </div>

        <p className="mb-5 text-sm leading-relaxed text-white/[0.55]">
          {group.description}
        </p>

        <div
          className={`grid gap-3 ${
            featured
              ? "sm:grid-cols-2"
              : "grid-cols-1"
          }`}
        >
          {group.items?.map((skill) => (
            <div
              key={skill.name}
              className="rounded-2xl border border-white/[0.07] bg-black/[0.15] p-3.5 transition-colors group-hover:border-white/10"
            >
              <div className="flex gap-2.5">
                <div className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full border border-gold/25 bg-gold/10">
                  <Check className="h-3 w-3 text-gold-soft" />
                </div>

                <div>
                  <h4 className="text-sm font-semibold text-white/[0.85]">
                    {skill.name}
                  </h4>

                  {skill.detail && (
                    <p className="mt-1 text-xs leading-relaxed text-white/[0.42]">
                      {skill.detail}
                    </p>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-auto pt-5">
          {group.tools?.length > 0 && (
            <div className="flex flex-wrap gap-1.5">
              {group.tools.map(
                (tool) => (
                  <span
                    key={tool}
                    className="rounded-md border border-white/[0.07] bg-white/[0.035] px-2.5 py-1 text-[11px] font-medium text-white/50"
                  >
                    {tool}
                  </span>
                )
              )}
            </div>
          )}

          {group.evidence && (
            <div className="mt-4 flex items-start gap-2 border-t border-white/[0.07] pt-4 text-xs leading-relaxed text-white/[0.38]">
              <ArrowUpRight className="mt-0.5 h-3.5 w-3.5 shrink-0 text-gold/70" />

              <span>
                {group.evidence}
              </span>
            </div>
          )}
        </div>
      </div>
    </motion.article>
  );
}
