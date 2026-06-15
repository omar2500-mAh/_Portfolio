import { motion } from "framer-motion";
import { useData } from "../context/DataContext";
import SectionHeading from "./SectionHeading";

export default function Skills() {
  const { data } = useData();
  const groups = data.skills;
  if (!groups?.length) return null;

  return (
    <section id="skills" className="relative bg-navy-gradient py-24 sm:py-28 overflow-hidden">
      <div className="absolute inset-0 bg-mesh opacity-50" />
      <div className="relative mx-auto max-w-7xl px-5 sm:px-8">
        <SectionHeading
          eyebrow="Capabilities"
          title="Technical Skills"
          subtitle="A toolkit spanning hardware, energy systems, software, and research practice."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {groups.map((group, gi) => (
            <motion.div
              key={group.category}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: (gi % 2) * 0.1 }}
              className="rounded-3xl border border-white/10 bg-white/[0.03] p-6 sm:p-7 backdrop-blur-sm hover:border-gold/20 transition-colors"
            >
              <h3 className="font-display font-bold text-white text-lg mb-5 flex items-center gap-2.5">
                <span className="h-1.5 w-1.5 rounded-full bg-gold" />
                {group.category}
              </h3>

              <div className="space-y-4">
                {group.items.map((skill, si) => (
                  <div key={skill.name}>
                    <div className="flex justify-between items-center mb-1.5">
                      <span className="text-sm text-white/75 font-medium">
                        {skill.name}
                      </span>
                      <span className="text-xs text-gold font-semibold">
                        {skill.level}%
                      </span>
                    </div>
                    <div className="h-1.5 w-full overflow-hidden rounded-full bg-white/8">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level}%` }}
                        viewport={{ once: true }}
                        transition={{
                          duration: 1,
                          delay: 0.2 + si * 0.08,
                          ease: "easeOut",
                        }}
                        className="h-full rounded-full bg-gold-gradient"
                      />
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
