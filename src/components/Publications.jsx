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

    icon:
      "border-emerald-400/25 bg-emerald-400/10 text-emerald-300",

    line:
      "from-emerald-400/80 via-emerald-400/25 to-transparent",
  },

  "Under Review": {
    Icon: Clock3,

    badge:
      "border-amber-400/30 bg-amber-400/10 text-amber-300",

    icon:
      "border-amber-400/25 bg-amber-400/10 text-amber-300",

    line:
      "from-amber-400/80 via-amber-400/25 to-transparent",
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
      <div className="absolute inset-0 bg-mesh opacity-45" />

      <div className="absolute -right-32 top-10 h-72 w-72 rounded-full border border-white/[0.035]" />

      <div className="absolute -left-24 bottom-0 h-64 w-64 rounded-full bg-gold/[0.025] blur-3xl" />

      <div className="relative mx-auto max-w-6xl px-5 sm:px-8">
        <SectionHeading
          eyebrow="Research Output"
          title="Publications & Papers"
          subtitle="Published research and manuscripts currently under review."
        />

        <div className="grid gap-5 lg:grid-cols-2">
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

  const remainingKeywords =
    Math.max(
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
        delay: index * 0.07,
      }}
      whileHover={{
        y: -4,
      }}
      className="group relative overflow-hidden rounded-3xl border border-white/10 bg-white/[0.035] p-5 backdrop-blur-sm transition-all duration-300 hover:border-gold/25 hover:bg-white/[0.05] sm:p-6"
    >
      {/* Top colored line */}
      <div
        className={`absolute left-0 top-0 h-px w-full bg-gradient-to-r ${status.line}`}
      />

      {/* Top row */}
      <div className="mb-4 flex items-start justify-between gap-4">
        <div
          className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border ${status.icon}`}
        >
          <FileText className="h-4 w-4" />
        </div>

        <div className="text-right">
          <span className="font-display text-xs font-bold tracking-[0.18em] text-white/20">
            {String(index + 1).padStart(
              2,
              "0"
            )}
          </span>

          {publication.paperType && (
            <p className="mt-1 text-[9px] font-semibold uppercase tracking-[0.16em] text-white/30">
              {publication.paperType}
            </p>
          )}
        </div>
      </div>

      {/* Status and date */}
      <div className="mb-3 flex flex-wrap items-center gap-2">
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

      {/* Title */}
      <h3 className="font-display text-lg font-bold leading-snug text-white transition-colors group-hover:text-gold-soft sm:text-xl">
        {publication.title}
      </h3>

      {/* Authors */}
      {publication.authors && (
        <div className="mt-3 flex items-start gap-2 text-xs leading-relaxed text-white/50">
          <Users className="mt-0.5 h-3.5 w-3.5 shrink-0 text-gold" />

          <p>
            <span className="font-semibold text-white/70">
              Authors:
            </span>{" "}

            {publication.authors}
          </p>
        </div>
      )}

      {/* Publication venue */}
      {publication.venue && (
        <div className="mt-2 flex items-start gap-2 text-xs leading-relaxed text-white/50">
          <BookOpen className="mt-0.5 h-3.5 w-3.5 shrink-0 text-gold" />

          <p>
            <span className="font-semibold text-white/70">
              Publication:
            </span>{" "}

            {publication.venue}
          </p>
        </div>
      )}

      {/* Short abstract */}
      {publication.abstract && (
        <p
          className="mt-3 overflow-hidden text-sm leading-relaxed text-white/55"
          style={{
            display: "-webkit-box",
            WebkitLineClamp: 3,
            WebkitBoxOrient: "vertical",
          }}
        >
          {publication.abstract}
        </p>
      )}

      {/* Limited keywords */}
      {visibleKeywords.length > 0 && (
        <div className="mt-4 flex flex-wrap gap-1.5">
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
      <div className="mt-5 flex flex-wrap gap-2.5">
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
    </motion.article>
  );
}
