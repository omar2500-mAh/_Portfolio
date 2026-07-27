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
      "from-emerald-400 via-emerald-400/35 to-transparent",

    glow:
      "bg-emerald-400/[0.07]",
  },

  "Under Review": {
    Icon: Clock3,

    badge:
      "border-amber-400/30 bg-amber-400/10 text-amber-300",

    iconBox:
      "border-amber-400/25 bg-amber-400/10 text-amber-300",

    accent:
      "from-amber-400 via-amber-400/35 to-transparent",

    glow:
      "bg-amber-400/[0.07]",
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

      <div className="absolute -right-28 top-20 h-72 w-72 rounded-full border border-white/[0.035]" />

      <div className="absolute -left-24 bottom-0 h-72 w-72 rounded-full bg-gold/[0.025] blur-3xl" />

      <div className="relative mx-auto max-w-5xl px-5 sm:px-8">
        <SectionHeading
          eyebrow="Research Output"
          title="Publications & Papers"
          subtitle="Published research and manuscripts currently under review."
        />

        {/* One paper per row */}
        <div className="space-y-6">
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
    publication.keywords?.slice(0, 5) || [];

  const remainingKeywords = Math.max(
    (publication.keywords?.length || 0) -
      visibleKeywords.length,
    0
  );

  return (
    <motion.article
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
        margin: "-60px",
      }}
      transition={{
        duration: 0.55,
        delay: index * 0.08,
      }}
      whileHover={{
        y: -4,
      }}
      className="group relative overflow-hidden rounded-[1.75rem] border border-white/10 bg-white/[0.035] shadow-elevate backdrop-blur-sm transition-all duration-300 hover:border-gold/25 hover:bg-white/[0.05]"
    >
      {/* Top accent line */}
      <div
        className={`absolute left-0 top-0 h-px w-full bg-gradient-to-r ${status.accent}`}
      />

      {/* Decorative glow */}
      <div
        className={`pointer-events-none absolute -right-20 -top-24 h-60 w-60 rounded-full blur-3xl ${status.glow}`}
      />

      <div className="relative p-5 sm:p-7">
        {/* Header */}
        <div className="flex items-start justify-between gap-4">
          <div className="flex min-w-0 items-start gap-4">
            <div
              className={`flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl border ${status.iconBox}`}
            >
              <FileText className="h-5 w-5" />
            </div>

            <div className="min-w-0">
              <div className="mb-2 flex flex-wrap items-center gap-2">
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
              </div>

              <h3 className="font-display text-xl font-bold leading-snug text-white transition-colors group-hover:text-gold-soft sm:text-2xl">
                {publication.title}
              </h3>
            </div>
          </div>

          <div className="hidden shrink-0 text-right sm:block">
            <p className="font-display text-sm font-bold tracking-[0.2em] text-white/20">
              {String(index + 1).padStart(2, "0")}
            </p>

            {publication.paperType && (
              <p className="mt-1 text-[9px] font-semibold uppercase tracking-[0.16em] text-white/30">
                {publication.paperType}
              </p>
            )}
          </div>
        </div>

        {/* Metadata */}
        <div className="mt-4 grid gap-2 sm:grid-cols-2">
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
                  Publication:
                </span>{" "}
                {publication.venue}
              </p>
            </div>
          )}
        </div>

        {/* Short abstract */}
        {publication.abstract && (
          <p
            className="mt-4 overflow-hidden text-sm leading-relaxed text-white/56"
            style={{
              display: "-webkit-box",
              WebkitLineClamp: 2,
              WebkitBoxOrient: "vertical",
            }}
          >
            {publication.abstract}
          </p>
        )}

        {/* Bottom section */}
        <div className="mt-5 flex flex-col gap-4 border-t border-white/[0.07] pt-5 lg:flex-row lg:items-center lg:justify-between">
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
                  +{remainingKeywords} more
                </span>
              )}
            </div>
          )}

          {/* Buttons */}
          <div className="flex shrink-0 flex-wrap gap-2.5">
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
                className="inline-flex items-center gap-1.5 rounded-full border border-white/15 bg-white/[0.035] px-4 py-2 text-xs font-semibold text-white/65 transition-all hover:border-gold/30 hover:text-gold-soft"
              >
                {isPublished
                  ? "View Article"
                  : "View Paper"}

                <ExternalLink className="h-3.5 w-3.5" />
              </a>
            )}
          </div>
        </div>
      </div>
    </motion.article>
  );
}
