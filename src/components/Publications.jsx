import { motion } from "framer-motion";
import {
  BookOpen,
  CalendarDays,
  CheckCircle2,
  Clock3,
  Download,
  ExternalLink,
  FileText,
  Users,
} from "lucide-react";
import { useData } from "../context/DataContext";
import SectionHeading from "./SectionHeading";

const STATUS_META = {
  Published: {
    Icon: CheckCircle2,

    badge:
      "border-emerald-400/30 bg-emerald-400/10 text-emerald-300",

    iconBox:
      "border-emerald-400/25 bg-emerald-400/10 text-emerald-300",

    accent:
      "from-emerald-400 via-emerald-400/30 to-transparent",

    glow:
      "bg-emerald-400/[0.06]",
  },

  "Under Review": {
    Icon: Clock3,

    badge:
      "border-amber-400/30 bg-amber-400/10 text-amber-300",

    iconBox:
      "border-amber-400/25 bg-amber-400/10 text-amber-300",

    accent:
      "from-amber-400 via-amber-400/30 to-transparent",

    glow:
      "bg-amber-400/[0.06]",
  },
};

export default function Publications() {
  const { data } = useData();

  const items = Array.isArray(data?.publications)
    ? data.publications
    : [];

  if (!items.length) {
    return null;
  }

  return (
    <section
      id="publications"
      className="relative overflow-hidden bg-navy-gradient py-20 sm:py-24"
    >
      {/* Background */}
      <div className="absolute inset-0 bg-mesh opacity-45" />

      <div className="absolute -right-28 top-16 h-72 w-72 rounded-full border border-white/[0.035]" />

      <div className="absolute -left-24 bottom-0 h-72 w-72 rounded-full bg-gold/[0.025] blur-3xl" />

      <div className="relative mx-auto max-w-5xl px-5 sm:px-8">
        <SectionHeading
          eyebrow="Research Output"
          title="Publications & Papers"
          subtitle="Published research and manuscripts currently under review."
        />

        {/* Papers display one by one */}
        <div className="space-y-5">
          {items.map((publication, index) => (
            <PublicationCard
              key={publication.id}
              publication={publication}
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

function PublicationCard({
  publication,
  index,
}) {
  const status =
    STATUS_META[publication.status] ||
    STATUS_META["Under Review"];

  const StatusIcon = status.Icon;

  const isPublished =
    publication.status === "Published";

  const displayDate = isPublished
    ? publication.publishedDate
    : "Under Review";

  const externalDownload =
    publication.downloadUrl?.startsWith("http");

  const visibleKeywords =
    publication.keywords?.slice(0, 4) || [];

  const remainingKeywords = Math.max(
    (publication.keywords?.length || 0) -
      visibleKeywords.length,
    0
  );

  return (
    <motion.article
      initial={{
        opacity: 0,
        y: 24,
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
        delay: index * 0.08,
      }}
      whileHover={{
        y: -3,
      }}
      className="group relative overflow-hidden rounded-[1.6rem] border border-white/10 bg-white/[0.035] shadow-elevate backdrop-blur-sm transition-all duration-300 hover:border-gold/25 hover:bg-white/[0.048]"
    >
      {/* Status accent */}
      <div
        className={`absolute left-0 top-0 h-px w-full bg-gradient-to-r ${status.accent}`}
      />

      {/* Soft glow */}
      <div
        className={`pointer-events-none absolute -right-20 -top-24 h-56 w-56 rounded-full blur-3xl ${status.glow}`}
      />

      <div className="relative p-5 sm:p-6">
        {/* Top information */}
        <div className="flex items-start gap-4">
          <div
            className={`flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl border ${status.iconBox}`}
          >
            <FileText className="h-5 w-5" />
          </div>

          <div className="min-w-0 flex-1">
            {/* Status, date and type */}
            <div className="mb-2.5 flex flex-wrap items-center gap-2">
              <span
                className={`inline-flex items-center gap-1.5 rounded-full border px-2.5 py-1 text-[11px] font-semibold ${status.badge}`}
              >
                <StatusIcon className="h-3 w-3" />

                {publication.status}
              </span>

              <span className="inline-flex items-center gap-1.5 rounded-full border border-white/10 bg-white/[0.035] px-2.5 py-1 text-[11px] text-white/45">
                <CalendarDays className="h-3 w-3 text-gold" />

                {displayDate}
              </span>

              {publication.paperType && (
                <span className="rounded-full border border-white/[0.08] bg-white/[0.025] px-2.5 py-1 text-[10px] font-semibold uppercase tracking-[0.12em] text-white/35">
                  {publication.paperType}
                </span>
              )}
            </div>

            {/* Paper title */}
            <h3 className="font-display text-lg font-bold leading-snug text-white transition-colors group-hover:text-gold-soft sm:text-xl">
              {publication.title}
            </h3>
          </div>

          {/* Paper number */}
          <span className="hidden shrink-0 font-display text-xs font-bold tracking-[0.2em] text-white/20 sm:block">
            {String(index + 1).padStart(2, "0")}
          </span>
        </div>

        {/* Metadata */}
        <div className="mt-4 grid gap-2 border-l border-white/[0.08] pl-4 sm:grid-cols-2">
          {publication.authors && (
            <div className="flex items-start gap-2 text-xs leading-relaxed text-white/50">
              <Users className="mt-0.5 h-3.5 w-3.5 shrink-0 text-gold" />

              <p>
                <span className="font-semibold text-white/70">
                  Authors:
                </span>{" "}
                {publication.authors}
              </p>
            </div>
          )}

          {publication.venue && (
            <div className="flex items-start gap-2 text-xs leading-relaxed text-white/50">
              <BookOpen className="mt-0.5 h-3.5 w-3.5 shrink-0 text-gold" />

              <p>
                <span className="font-semibold text-white/70">
                  {isPublished
                    ? "Publication:"
                    : "Submitted to:"}
                </span>{" "}
                {publication.venue}
              </p>
            </div>
          )}
        </div>

        {/* Compact abstract */}
        {publication.abstract && (
          <p
            className="mt-4 overflow-hidden text-sm leading-relaxed text-white/55"
            style={{
              display: "-webkit-box",
              WebkitLineClamp: 2,
              WebkitBoxOrient: "vertical",
            }}
          >
            {publication.abstract}
          </p>
        )}

        {/* Bottom */}
        <div className="mt-4 flex flex-col gap-4 border-t border-white/[0.07] pt-4 md:flex-row md:items-center md:justify-between">
          {/* Keywords */}
          {visibleKeywords.length > 0 && (
            <div className="flex flex-wrap gap-1.5">
              {visibleKeywords.map((keyword) => (
                <span
                  key={keyword}
                  className="rounded-md border border-white/[0.08] bg-white/[0.035] px-2 py-1 text-[10px] text-white/45"
                >
                  {keyword}
                </span>
              ))}

              {remainingKeywords > 0 && (
                <span className="rounded-md border border-gold/15 bg-gold/[0.05] px-2 py-1 text-[10px] text-gold-soft/70">
                  +{remainingKeywords}
                </span>
              )}
            </div>
          )}

          {/* Buttons */}
          <div className="flex shrink-0 flex-wrap gap-2">
            {publication.downloadUrl && (
              <a
                href={publication.downloadUrl}
                target={
                  externalDownload
                    ? "_blank"
                    : undefined
                }
                rel={
                  externalDownload
                    ? "noopener noreferrer"
                    : undefined
                }
                download={
                  externalDownload
                    ? undefined
                    : true
                }
                className="inline-flex items-center gap-1.5 rounded-full bg-gold-gradient px-4 py-2 text-xs font-semibold text-navy-950 transition-transform hover:-translate-y-0.5"
              >
                <Download className="h-3.5 w-3.5" />

                {isPublished
                  ? "Download PDF"
                  : "Download Manuscript"}
              </a>
            )}

            {publication.link && (
              <a
                href={publication.link}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 rounded-full border border-white/15 bg-white/[0.035] px-4 py-2 text-xs font-semibold text-white/65 transition-all hover:border-gold/30 hover:bg-gold/10 hover:text-gold-soft"
              >
                {publication.linkLabel ||
                  (isPublished
                    ? "View Article"
                    : "Conference Website")}

                <ExternalLink className="h-3.5 w-3.5" />
              </a>
            )}
          </div>
        </div>
      </div>
    </motion.article>
  );
}
