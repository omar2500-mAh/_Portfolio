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
      "border-emerald-400/30 bg-emerald-400/15 text-emerald-300",

    iconBox:
      "border-emerald-400/25 bg-emerald-400/10 text-emerald-300",

    accent:
      "from-emerald-400/80 via-emerald-400/30 to-transparent",

    glow:
      "bg-emerald-400/[0.06]",
  },

  "Under Review": {
    Icon: Clock3,

    badge:
      "border-amber-400/30 bg-amber-400/15 text-amber-300",

    iconBox:
      "border-amber-400/25 bg-amber-400/10 text-amber-300",

    accent:
      "from-amber-400/80 via-amber-400/30 to-transparent",

    glow:
      "bg-amber-400/[0.06]",
  },
};

export default function Publications() {
  const { data } = useData();

  const items = Array.isArray(
    data?.publications
  )
    ? data.publications
    : [];

  if (!items.length) {
    return null;
  }

  const publishedCount =
    items.filter(
      (item) =>
        item.status === "Published"
    ).length;

  const underReviewCount =
    items.filter(
      (item) =>
        item.status ===
        "Under Review"
    ).length;

  return (
    <section
      id="publications"
      className="relative overflow-hidden bg-navy-gradient py-24 sm:py-28"
    >
      {/* Background */}
      <div className="absolute inset-0 bg-mesh opacity-50" />

      <div className="absolute -right-40 top-8 h-96 w-96 rounded-full border border-white/[0.035]" />

      <div className="absolute -right-20 top-28 h-64 w-64 rounded-full border border-white/[0.035]" />

      <div className="absolute -left-32 bottom-0 h-80 w-80 rounded-full bg-gold/[0.025] blur-3xl" />

      <div className="relative mx-auto max-w-[88rem] px-5 sm:px-8">
        <SectionHeading
          eyebrow="Research Output"
          title="Publications & Papers"
          subtitle="Published research and manuscripts currently under review, presented with direct access to the available documents."
        />

        {/* Publication summary */}
        <motion.div
          initial={{
            opacity: 0,
            y: 20,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{
            once: true,
          }}
          transition={{
            duration: 0.5,
          }}
          className="mb-8 grid gap-3 sm:grid-cols-2"
        >
          <SummaryCard
            icon={CheckCircle2}
            value={publishedCount}
            label={
              publishedCount === 1
                ? "Published Paper"
                : "Published Papers"
            }
            className="border-emerald-400/20 bg-emerald-400/[0.05] text-emerald-300"
          />

          <SummaryCard
            icon={Clock3}
            value={underReviewCount}
            label={
              underReviewCount === 1
                ? "Paper Under Review"
                : "Papers Under Review"
            }
            className="border-amber-400/20 bg-amber-400/[0.05] text-amber-300"
          />
        </motion.div>

        {/* Publication cards */}
        <div className="grid gap-6 lg:grid-cols-2">
          {items.map(
            (publication, index) => (
              <PublicationCard
                key={publication.id}
                publication={
                  publication
                }
                index={index}
              />
            )
          )}
        </div>
      </div>
    </section>
  );
}

/* ================================================================ */
/* SUMMARY CARD                                                     */
/* ================================================================ */

function SummaryCard({
  icon: Icon,
  value,
  label,
  className,
}) {
  return (
    <div
      className={`flex items-center gap-4 rounded-2xl border px-5 py-4 ${className}`}
    >
      <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-current/20 bg-black/10">
        <Icon className="h-5 w-5" />
      </div>

      <div>
        <div className="font-display text-2xl font-bold text-white">
          {value}
        </div>

        <div className="text-xs font-semibold uppercase tracking-[0.15em] text-white/40">
          {label}
        </div>
      </div>
    </div>
  );
}

/* ================================================================ */
/* PUBLICATION CARD                                                 */
/* ================================================================ */

function PublicationCard({
  publication,
  index,
}) {
  const status =
    STATUS_META[
      publication.status
    ] ||
    STATUS_META["Under Review"];

  const StatusIcon =
    status.Icon;

  const isPublished =
    publication.status ===
    "Published";

  const displayDate =
    isPublished
      ? publication.publishedDate
      : "Under Review";

  const externalDownload =
    publication.downloadUrl?.startsWith(
      "http"
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
        margin: "-70px",
      }}
      transition={{
        duration: 0.55,
        delay:
          (index % 2) * 0.08,
      }}
      whileHover={{
        y: -5,
      }}
      className="group relative flex h-full flex-col overflow-hidden rounded-[2rem] border border-white/10 bg-white/[0.035] p-6 shadow-elevate backdrop-blur-sm transition-colors duration-300 hover:border-gold/25 sm:p-7"
    >
      {/* Decorative glow */}
      <div
        className={`pointer-events-none absolute -right-20 -top-20 h-56 w-56 rounded-full blur-3xl ${status.glow}`}
      />

      {/* Top accent */}
      <div
        className={`absolute left-0 top-0 h-px w-full bg-gradient-to-r ${status.accent}`}
      />

      <div className="relative flex h-full flex-col">
        {/* Top row */}
        <div className="mb-5 flex items-start justify-between gap-4">
          <div
            className={`flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl border ${status.iconBox}`}
          >
            <FileText className="h-5 w-5" />
          </div>

          <div className="text-right">
            <div className="font-display text-xs font-bold tracking-[0.2em] text-white/20">
              {String(
                index + 1
              ).padStart(2, "0")}
            </div>

            {publication.paperType && (
              <div className="mt-1 text-[10px] font-semibold uppercase tracking-[0.14em] text-white/30">
                {
                  publication.paperType
                }
              </div>
            )}
          </div>
        </div>

        {/* Status and date */}
        <div className="mb-4 flex flex-wrap items-center gap-2">
          <span
            className={`inline-flex items-center gap-1.5 rounded-full border px-3 py-1 text-xs font-semibold ${status.badge}`}
          >
            <StatusIcon className="h-3.5 w-3.5" />

            {publication.status}
          </span>

          <span className="inline-flex items-center gap-1.5 rounded-full border border-white/10 bg-white/[0.04] px-3 py-1 text-xs font-medium text-white/50">
            <CalendarDays className="h-3.5 w-3.5 text-gold" />

            {displayDate}
          </span>
        </div>

        {/* Title */}
        <h3 className="font-display text-xl font-bold leading-snug text-white transition-colors group-hover:text-gold-soft sm:text-2xl">
          {publication.title}
        </h3>

        {/* Authors */}
        {publication.authors && (
          <div className="mt-4 flex items-start gap-2 text-sm leading-relaxed text-white/55">
            <Users className="mt-0.5 h-4 w-4 shrink-0 text-gold" />

            <p>
              <span className="font-semibold text-white/75">
                Authors:
              </span>{" "}

              {
                publication.authors
              }
            </p>
          </div>
        )}

        {/* Journal / venue */}
        {publication.venue && (
          <div className="mt-3 flex items-start gap-2 text-sm leading-relaxed text-white/55">
            <BookOpen className="mt-0.5 h-4 w-4 shrink-0 text-gold" />

            <p>
              <span className="font-semibold text-white/75">
                Publication:
              </span>{" "}

              {
                publication.venue
              }
            </p>
          </div>
        )}

        {/* Citation */}
        {publication.citation && (
          <div className="mt-4 rounded-2xl border border-white/[0.07] bg-black/[0.14] p-4">
            <p className="text-xs font-semibold uppercase tracking-[0.15em] text-gold/75">
              Citation
            </p>

            <p className="mt-2 text-sm leading-relaxed text-white/50">
              {
                publication.citation
              }
            </p>
          </div>
        )}

        {/* Abstract */}
        {publication.abstract && (
          <p className="mt-4 text-sm leading-relaxed text-white/60">
            {
              publication.abstract
            }
          </p>
        )}

        {/* Keywords — no # symbol */}
        {publication.keywords?.length >
          0 && (
          <div className="mt-5 flex flex-wrap gap-2">
            {publication.keywords.map(
              (keyword) => (
                <span
                  key={keyword}
                  className="rounded-md border border-white/[0.08] bg-white/[0.04] px-2.5 py-1 text-xs text-white/50 transition-colors hover:border-gold/20 hover:text-white/75"
                >
                  {keyword}
                </span>
              )
            )}
          </div>
        )}

        {/* Buttons */}
        <div className="mt-auto flex flex-wrap gap-3 pt-7">
          {publication.downloadUrl && (
            <a
              href={
                publication.downloadUrl
              }
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
              className="inline-flex items-center gap-2 rounded-full bg-gold-gradient px-5 py-2.5 text-sm font-semibold text-navy-950 shadow-gold-glow transition-transform duration-300 hover:-translate-y-0.5 hover:scale-[1.02]"
            >
              <Download className="h-4 w-4" />

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
              className="inline-flex items-center gap-2 rounded-full border border-white/12 bg-white/[0.04] px-5 py-2.5 text-sm font-semibold text-white/70 transition-all duration-300 hover:-translate-y-0.5 hover:border-gold/30 hover:bg-gold/10 hover:text-gold-soft"
            >
              {isPublished
                ? "View Published Article"
                : "View Paper"}

              <ExternalLink className="h-4 w-4" />
            </a>
          )}
        </div>
      </div>
    </motion.article>
  );
}
