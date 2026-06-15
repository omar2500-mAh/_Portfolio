import { motion } from "framer-motion";
import { GraduationCap, Briefcase, ExternalLink } from "lucide-react";
import { useData } from "../context/DataContext";
import SectionHeading from "./SectionHeading";

/** A single vertical timeline list */
function TimelineList({ items, icon: Icon }) {
  return (
    <div className="relative">
      {/* vertical line */}
      <div className="absolute left-4 top-2 bottom-2 w-px bg-gradient-to-b from-gold/40 via-white/15 to-transparent" />

      <div className="space-y-8">
        {items.map((item, i) => (
          <motion.div
            key={item.id}
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.5, delay: i * 0.08 }}
            className="relative pl-12"
          >
            {/* node */}
            <span className="absolute left-0 top-1 flex h-8 w-8 items-center justify-center rounded-full bg-charcoal-light border border-gold/30 shadow-gold-glow">
              <Icon className="h-3.5 w-3.5 text-gold" />
            </span>

            <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-5 backdrop-blur-sm hover:border-gold/20 transition-colors">
              <div className="flex flex-wrap items-center justify-between gap-2 mb-1">
                <span className="text-xs font-semibold text-gold tracking-wide">
                  {item.date}
                </span>
              </div>
              <h4 className="font-display font-bold text-white text-lg leading-snug">
                {item.title}
              </h4>
              <p className="text-sm font-medium text-white/55 mt-0.5">
                {item.institution}
              </p>
              {item.description && (
                <p className="mt-2.5 text-sm text-white/60 leading-relaxed">
                  {item.description}
                </p>
              )}

              {item.tags?.length > 0 && (
                <div className="mt-3 flex flex-wrap gap-2">
                  {item.tags.map((t) => (
                    <span
                      key={t}
                      className="rounded-md bg-white/5 px-2 py-0.5 text-xs text-white/50 border border-white/5"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              )}

              {item.link && (
                <a
                  href={item.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-3 inline-flex items-center gap-1.5 text-xs font-semibold text-gold hover:text-gold-light"
                >
                  Learn more <ExternalLink className="h-3 w-3" />
                </a>
              )}
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}

export default function Timeline() {
  const { data } = useData();
  const { education, experience } = data;

  const hasEdu = education?.length > 0;
  const hasExp = experience?.length > 0;
  if (!hasEdu && !hasExp) return null;

  return (
    <section id="journey" className="relative bg-charcoal py-24 sm:py-28 overflow-hidden">
      <div className="absolute inset-0 bg-mesh opacity-40" />
      <div className="relative mx-auto max-w-7xl px-5 sm:px-8">
        <SectionHeading
          eyebrow="The Path So Far"
          title="Education & Experience"
          subtitle="Academic foundations and hands-on engineering, side by side."
        />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
          {hasEdu && (
            <div>
              <h3 className="font-display font-bold text-white text-xl mb-7 flex items-center gap-2.5">
                <GraduationCap className="h-5 w-5 text-gold" />
                Education
              </h3>
              <TimelineList items={education} icon={GraduationCap} />
            </div>
          )}
          {hasExp && (
            <div>
              <h3 className="font-display font-bold text-white text-xl mb-7 flex items-center gap-2.5">
                <Briefcase className="h-5 w-5 text-gold" />
                Experience
              </h3>
              <TimelineList items={experience} icon={Briefcase} />
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
