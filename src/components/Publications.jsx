import { motion } from "framer-motion";
import { FileText, ExternalLink, Users } from "lucide-react";
import { useData } from "../context/DataContext";
import SectionHeading from "./SectionHeading";

const STATUS_STYLES = {
  "In Preparation": "bg-blue-400/15 text-blue-300",
  "Under Review": "bg-amber-400/15 text-amber-300",
  Published: "bg-emerald-400/15 text-emerald-300",
};

export default function Publications() {
  const { data } = useData();
  const items = data.publications;

  // Auto-hide if no publications
  if (!items?.length) return null;

  return (
    <section id="publications" className="relative bg-navy-gradient py-24 sm:py-28 overflow-hidden">
      <div className="absolute inset-0 bg-mesh opacity-50" />
      <div className="relative mx-auto max-w-5xl px-5 sm:px-8">
        <SectionHeading
          eyebrow="Scholarship"
          title="Publications & Papers"
          subtitle="Peer-reviewed and in-progress contributions to the field."
        />

        <div className="space-y-5">
          {items.map((pub, i) => (
            <motion.div
              key={pub.id}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="group flex flex-col sm:flex-row gap-5 rounded-3xl border border-white/10 bg-white/[0.03] p-6 backdrop-blur-sm hover:border-gold/25 transition-colors"
            >
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-gold/10 border border-gold/20">
                <FileText className="h-5 w-5 text-gold" />
              </div>

              <div className="flex-1">
                <div className="flex flex-wrap items-center gap-3 mb-2">
                  {pub.status && (
                    <span className={`rounded-full px-3 py-1 text-xs font-semibold ${STATUS_STYLES[pub.status] || ""}`}>
                      {pub.status}
                    </span>
                  )}
                  {pub.year && (
                    <span className="text-sm text-white/45">{pub.year}</span>
                  )}
                </div>

                <h3 className="font-display font-bold text-white text-lg leading-snug">
                  {pub.title}
                </h3>

                {pub.authors && (
                  <div className="mt-2 flex items-center gap-1.5 text-sm text-white/55">
                    <Users className="h-3.5 w-3.5" />
                    {pub.authors}
                  </div>
                )}

                {pub.venue && (
                  <p className="mt-1 text-sm italic text-gold-soft/80">
                    {pub.venue}
                  </p>
                )}

                {pub.abstract && (
                  <p className="mt-3 text-sm text-white/60 leading-relaxed">
                    {pub.abstract}
                  </p>
                )}

                {pub.link && (
                  <a
                    href={pub.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-4 inline-flex items-center gap-2 rounded-full border border-gold/30 px-4 py-2 text-sm font-semibold text-gold transition-all hover:bg-gold hover:text-navy-900"
                  >
                    View Paper
                    <ExternalLink className="h-3.5 w-3.5" />
                  </a>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
