import { motion } from "framer-motion";
import {
  BookOpen,
  CalendarDays,
  Download,
  ExternalLink,
  FileText,
  CheckCircle2,
  Clock3,
} from "lucide-react";
import { useData } from "../context/DataContext";
import SectionHeading from "./SectionHeading";

const STATUS_STYLES = {
  Published:
    "border-emerald-400/30 bg-emerald-400/15 text-emerald-300",
  "Under Review":
    "border-amber-400/30 bg-amber-400/15 text-amber-300",
};

export default function ResearchPapers() {
  const { data } = useData();

  const papers = Array.isArray(data?.researchPapers)
    ? data.researchPapers
    : [];

  if (!papers.length) {
    return null;
  }

  const publishedPapers = papers.filter(
    (paper) => paper.status === "Published"
  );

  const underReviewPapers = papers.filter(
    (paper) => paper.status === "Under Review"
  );

  return (
    <section
      id="papers"
      className="relative overflow-hidden bg-navy-gradient py-24 sm:py-28"
    >
      <div className="absolute inset-0 bg-mesh opacity-55" />

      <div className="relative mx-auto max-w-[88rem] px-5 sm:px-8">
        <SectionHeading
          eyebrow="Research Output"
          title="Research Papers"
          subtitle="A clean overview of my published and under-review research work, with simple access to download each paper."
        />

        <div className="grid gap-12">
          {/* Published Papers */}
          <div>
            <div className="mb-6 flex items-center gap-3">
              <div className="flex h-11 w-11 items-center justify-center rounded-2xl border border-emerald-400/20 bg-emerald-400/10 text-emerald-300">
                <CheckCircle2 className="h-5 w-5" />
              </div>

              <div>
                <h3 className="font-display text-2xl font-bold text-white">
                  Published Papers
                </h3>
                <p className="text-sm text-white/55">
                  Papers that have already been published
                </p>
              </div>
            </div>

            {publishedPapers.length > 0 ? (
              <div className="grid gap-6 lg:grid-cols-2">
                {publishedPapers.map((paper, index) => (
                  <PaperCard
                    key={paper.id}
                    paper={paper}
                    index={index}
                  />
                ))}
              </div>
            ) : (
              <EmptyState text="No published papers added yet." />
            )}
          </div>

          {/* Under Review Papers */}
          <div>
            <div className="mb-6 flex items-center gap-3">
              <div className="flex h-11 w-11 items-center justify-center rounded-2xl border border-amber-400/20 bg-amber-400/10 text-amber-300">
                <Clock3 className="h-5 w-5" />
              </div>

              <div>
                <h3 className="font-display text-2xl font-bold text-white">
                  Under Review
                </h3>
                <p className="text-sm text-white/55">
                  Manuscripts currently under review
                </p>
              </div>
            </div>

            {underReviewPapers.length > 0 ? (
              <div className="grid gap-6 lg:grid-cols-2">
                {underReviewPapers.map((paper, index) => (
                  <PaperCard
                    key={paper.id}
                    paper={paper}
                    index={index}
                  />
                ))}
              </div>
            ) : (
              <EmptyState text="No under-review papers added yet." />
            )}
          </div>
        </div>
      </div>
    </section>
  );
}

function PaperCard({ paper, index }) {
  const statusClass =
    STATUS_STYLES[paper.status] ||
    STATUS_STYLES["Under Review"];

  const isPublished = paper.status === "Published";

  return (
    <motion.article
      initial={{ opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.6, delay: index * 0.08 }}
      className="group overflow-hidden rounded-3xl border border-white/10 bg-white/[0.035] shadow-elevate backdrop-blur-sm transition-all duration-300 hover:border-gold/20 hover:bg-white/[0.045]"
    >
      <div className="grid grid-cols-1 lg:grid-cols-[190px_1fr]">
        {/* Left image area */}
        <div className="relative h-full min-h-[220px] overflow-hidden border-b border-white/10 lg:border-b-0 lg:border-r">
          {paper.coverImage ? (
            <img
              src={paper.coverImage}
              alt={paper.title}
              className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
            />
          ) : (
            <div className="flex h-full min-h-[220px] w-full items-center justify-center bg-white/[0.03]">
              <FileText className="h-10 w-10 text-white/25" />
            </div>
          )}

          <div className="absolute inset-0 bg-gradient-to-t from-navy-950/45 to-transparent" />
        </div>

        {/* Right content */}
        <div className="p-6 sm:p-7">
          {/* Top row */}
          <div className="mb-4 flex flex-wrap items-center gap-2.5">
            <span
              className={`rounded-full border px-3 py-1 text-xs font-semibold ${statusClass}`}
            >
              {paper.status}
            </span>

            <span className="rounded-full border border-gold/20 bg-gold/10 px-3 py-1 text-xs font-semibold text-gold-soft">
              {paper.year}
            </span>
          </div>

          {/* Title */}
          <h4 className="font-display text-xl font-bold leading-snug text-white sm:text-2xl">
            {paper.title}
          </h4>

          {/* Authors */}
          {paper.authors && (
            <p className="mt-3 text-sm leading-relaxed text-white/60">
              <span className="font-semibold text-white/75">
                Authors:
              </span>{" "}
              {paper.authors}
            </p>
          )}

          {/* Journal */}
          {paper.journal && (
            <div className="mt-3 flex items-start gap-2 text-sm text-white/60">
              <BookOpen className="mt-0.5 h-4 w-4 shrink-0 text-gold" />
              <p>
                <span className="font-semibold text-white/75">
                  Journal:
                </span>{" "}
                {paper.journal}
              </p>
            </div>
          )}

          {/* Date / Under review */}
          <div className="mt-3 flex items-start gap-2 text-sm text-white/60">
            <CalendarDays className="mt-0.5 h-4 w-4 shrink-0 text-gold" />
            <p>
              <span className="font-semibold text-white/75">
                {isPublished ? "Published:" : "Status:"}
              </span>{" "}
              {paper.publishedDate}
            </p>
          </div>

          {/* Abstract */}
          {paper.abstract && (
            <p className="mt-4 text-sm leading-relaxed text-white/62">
              {paper.abstract}
            </p>
          )}

          {/* Keywords */}
          {paper.keywords?.length > 0 && (
            <div className="mt-5 flex flex-wrap gap-2">
              {paper.keywords.map((keyword) => (
                <span
                  key={keyword}
                  className="rounded-md border border-white/10 bg-white/[0.04] px-2.5 py-1 text-xs text-white/55"
                >
                  {keyword}
                </span>
              ))}
            </div>
          )}

          {/* Action buttons */}
          <div className="mt-6 flex flex-wrap gap-3">
            {paper.downloadUrl && (
              <a
                href={paper.downloadUrl}
                download
                className="inline-flex items-center gap-2 rounded-full bg-gold-gradient px-5 py-2.5 text-sm font-semibold text-navy-950 transition-transform hover:scale-[1.02]"
              >
                <Download className="h-4 w-4" />
                Download Paper
              </a>
            )}

            {paper.doi && (
              <a
                href={paper.doi}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full border border-white/12 bg-white/[0.04] px-5 py-2.5 text-sm font-semibold text-white/75 transition-all hover:border-white/20 hover:bg-white/[0.07] hover:text-white"
              >
                <ExternalLink className="h-4 w-4" />
                View DOI
              </a>
            )}
          </div>
        </div>
      </div>
    </motion.article>
  );
}

function EmptyState({ text }) {
  return (
    <div className="rounded-3xl border border-dashed border-white/10 bg-white/[0.02] p-8 text-center text-white/45">
      {text}
    </div>
  );
}
