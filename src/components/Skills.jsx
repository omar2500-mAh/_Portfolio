import { useMemo, useState } from "react";
import {
  AnimatePresence,
  motion,
} from "framer-motion";
import { useData } from "../context/DataContext";
import SectionHeading from "./SectionHeading";

function normalizeItem(item) {
  if (typeof item === "string") {
    return {
      name: item,
    };
  }

  return item || {
    name: "",
  };
}

function getMark(item) {
  if (item.icon) {
    return item.icon;
  }

  return item.name
    .split(/\s+/)
    .filter(Boolean)
    .slice(0, 2)
    .map((word) => word[0])
    .join("")
    .toUpperCase();
}

export default function Skills() {
  const { data } = useData();

  const groups = Array.isArray(data.skills)
    ? data.skills
    : [];

  const [activeId, setActiveId] = useState(
    groups[0]?.id ||
      groups[0]?.category ||
      ""
  );

  const activeGroup = useMemo(() => {
    return (
      groups.find(
        (group) =>
          (group.id || group.category) ===
          activeId
      ) || groups[0]
    );
  }, [activeId, groups]);

  if (!groups.length || !activeGroup) {
    return null;
  }

  const items = (
    activeGroup.items || []
  ).map(normalizeItem);

  const isSoftware =
    activeGroup.type === "software";

  return (
    <section
      id="skills"
      className="relative overflow-hidden border-y border-white/5 bg-navy-gradient py-24 sm:py-28"
    >
      <div className="absolute inset-0 bg-mesh opacity-50" />

      <div className="absolute -right-32 top-20 h-80 w-80 rounded-full border border-white/[0.04]" />

      <div className="absolute -left-24 bottom-10 h-64 w-64 rounded-full bg-gold/[0.03] blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-5 sm:px-8">
        <SectionHeading
          eyebrow="Capability Stack"
          title="Technical Skills"
          subtitle="A concise view of my engineering, software, programming, hardware, and professional capabilities."
        />

        <div className="grid gap-6 lg:grid-cols-[300px_1fr]">
          {/* Category navigation */}
          <div className="rounded-3xl border border-white/10 bg-white/[0.03] p-3 backdrop-blur-sm">
            {groups.map(
              (group, index) => {
                const groupId =
                  group.id ||
                  group.category;

                const currentId =
                  activeGroup.id ||
                  activeGroup.category;

                const active =
                  groupId === currentId;

                return (
                  <button
                    key={groupId}
                    type="button"
                    onClick={() =>
                      setActiveId(groupId)
                    }
                    className={`group flex w-full items-center gap-3 rounded-2xl px-4 py-3.5 text-left transition-all ${
                      active
                        ? "border border-gold/25 bg-gold/10 text-white"
                        : "border border-transparent text-white/55 hover:bg-white/[0.04] hover:text-white"
                    }`}
                  >
                    <span
                      className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-xl text-xs font-bold ${
                        active
                          ? "bg-gold text-navy-950"
                          : "border border-white/10 bg-white/[0.03] text-white/45 group-hover:text-gold"
                      }`}
                    >
                      {String(
                        index + 1
                      ).padStart(2, "0")}
                    </span>

                    <span className="min-w-0">
                      <span className="block truncate text-sm font-semibold">
                        {group.category}
                      </span>

                      {group.eyebrow && (
                        <span className="mt-0.5 block truncate text-[11px] uppercase tracking-[0.14em] text-white/30">
                          {group.eyebrow}
                        </span>
                      )}
                    </span>
                  </button>
                );
              }
            )}
          </div>

          {/* Dynamic content panel */}
          <div className="relative min-h-[390px] overflow-hidden rounded-3xl border border-white/10 bg-white/[0.03] p-6 shadow-elevate backdrop-blur-sm sm:p-8">
            <div className="absolute right-0 top-0 h-40 w-40 rounded-full bg-gold/[0.04] blur-3xl" />

            <AnimatePresence mode="wait">
              <motion.div
                key={
                  activeGroup.id ||
                  activeGroup.category
                }
                initial={{
                  opacity: 0,
                  y: 14,
                }}
                animate={{
                  opacity: 1,
                  y: 0,
                }}
                exit={{
                  opacity: 0,
                  y: -10,
                }}
                transition={{
                  duration: 0.28,
                }}
                className="relative"
              >
                <div className="mb-7 flex flex-wrap items-end justify-between gap-4 border-b border-white/10 pb-5">
                  <div>
                    <div className="mb-2 text-[11px] font-semibold uppercase tracking-[0.2em] text-gold">
                      {activeGroup.eyebrow ||
                        "Capabilities"}
                    </div>

                    <h3 className="font-display text-2xl font-bold text-white sm:text-3xl">
                      {
                        activeGroup.category
                      }
                    </h3>

                    {activeGroup.summary && (
                      <p className="mt-2 max-w-2xl text-sm leading-relaxed text-white/50">
                        {
                          activeGroup.summary
                        }
                      </p>
                    )}
                  </div>

                  <div className="rounded-full border border-white/10 bg-black/20 px-3 py-1.5 text-xs font-medium text-white/45">
                    {items.length} skills
                  </div>
                </div>

                <div
                  className={`grid gap-3 ${
                    isSoftware
                      ? "grid-cols-2 sm:grid-cols-3 xl:grid-cols-4"
                      : "grid-cols-1 sm:grid-cols-2"
                  }`}
                >
                  {items.map(
                    (item, index) => (
                      <motion.div
                        key={`${item.name}-${index}`}
                        initial={{
                          opacity: 0,
                          scale: 0.97,
                        }}
                        animate={{
                          opacity: 1,
                          scale: 1,
                        }}
                        transition={{
                          duration: 0.25,
                          delay:
                            index *
                            0.035,
                        }}
                        className={`group rounded-2xl border border-white/[0.08] bg-black/[0.16] transition-all hover:-translate-y-0.5 hover:border-gold/25 hover:bg-white/[0.045] ${
                          isSoftware
                            ? "p-4"
                            : "px-4 py-3.5"
                        }`}
                      >
                        {isSoftware ? (
                          <div className="flex items-center gap-3">
                            <SoftwareMark
                              item={item}
                            />

                            <div className="min-w-0">
                              <div className="truncate text-sm font-semibold text-white/80 group-hover:text-white">
                                {
                                  item.name
                                }
                              </div>

                              {item.note && (
                                <div className="mt-0.5 truncate text-[11px] uppercase tracking-[0.12em] text-white/30">
                                  {
                                    item.note
                                  }
                                </div>
                              )}
                            </div>
                          </div>
                        ) : (
                          <div className="flex items-center gap-3">
                            <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full border border-gold/25 bg-gold/10 text-[10px] font-bold text-gold-soft">
                              {String(
                                index + 1
                              ).padStart(
                                2,
                                "0"
                              )}
                            </span>

                            <span className="text-sm font-medium text-white/70 group-hover:text-white">
                              {item.name}
                            </span>
                          </div>
                        )}
                      </motion.div>
                    )
                  )}
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
}

function SoftwareMark({ item }) {
  /*
   * In the future, a real logo can be used:
   *
   * {
   *   name: "Python",
   *   logo: imagePath("python-logo.svg")
   * }
   */

  if (item.logo) {
    return (
      <span className="flex h-11 w-11 shrink-0 items-center justify-center overflow-hidden rounded-xl border border-white/10 bg-white p-1.5">
        <img
          src={item.logo}
          alt=""
          className="h-full w-full object-contain"
        />
      </span>
    );
  }

  return (
    <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-gold/20 bg-gold/10 text-xs font-extrabold tracking-tight text-gold-soft shadow-gold-glow">
      {getMark(item)}
    </span>
  );
}
