import { useState } from "react";
import { motion } from "framer-motion";
import {
  BookOpenCheck,
  BriefcaseBusiness,
  CalendarDays,
  ChevronDown,
  ExternalLink,
  FileText,
  GraduationCap,
  MapPin,
} from "lucide-react";
import { useData } from "../context/DataContext";
import SectionHeading from "./SectionHeading";
import SmartImage from "./SmartImage";

const COLUMN_META = {
  education: {
    Icon: GraduationCap,

    eyebrow: "Academic Background",

    title: "Education",

    description:
      "Academic foundations in electrical engineering, power electronics, energy systems, and applied technology.",

    iconStyle:
      "border-blue-400/25 bg-blue-400/10 text-blue-300",

    dateStyle:
      "border-blue-400/25 bg-blue-400/10 text-blue-300",

    accent:
      "from-blue-400 via-blue-400/30 to-transparent",
  },

  experience: {
    Icon: BriefcaseBusiness,

    eyebrow: "Professional Practice",

    title: "Experience",

    description:
      "Research, internships, simulation, battery engineering, embedded systems, and technical communication.",

    iconStyle:
      "border-amber-400/25 bg-amber-400/10 text-amber-300",

    dateStyle:
      "border-amber-400/25 bg-amber-400/10 text-amber-300",

    accent:
      "from-amber-400 via-amber-400/30 to-transparent",
  },
};

export default function Timeline() {
  const { data } = useData();

  const education = Array.isArray(
    data?.education
  )
    ? data.education
    : [];

  const experience = Array.isArray(
    data?.experience
  )
    ? data.experience
    : [];

  if (
    !education.length &&
    !experience.length
  ) {
    return null;
  }

  return (
    <section
      id="journey"
      className="relative overflow-hidden bg-navy-gradient py-24 sm:py-28"
    >
      {/* Background */}
      <div className="absolute inset-0 bg-mesh opacity-45" />

      <div className="absolute -right-32 top-20 h-80 w-80 rounded-full border border-white/[0.035]" />

      <div className="absolute -left-24 bottom-10 h-72 w-72 rounded-full bg-gold/[0.025] blur-3xl" />

      <div className="relative mx-auto max-w-[88rem] px-5 sm:px-8">
        <SectionHeading
          eyebrow="My Journey"
          title="Education & Experience"
          subtitle="Academic foundations and hands-on engineering, side by side."
        />

        <div className="grid items-start gap-8 lg:grid-cols-2">
          {education.length > 0 && (
            <JourneyColumn
              type="education"
              items={education}
            />
          )}

          {experience.length > 0 && (
            <JourneyColumn
              type="experience"
              items={experience}
            />
          )}
        </div>
      </div>
    </section>
  );
}

/* ================================================================ */
/* JOURNEY COLUMN                                                    */
/* ================================================================ */

function JourneyColumn({
  type,
  items,
}) {
  const meta = COLUMN_META[type];
  const ColumnIcon = meta.Icon;

  return (
    <div>
      <div className="mb-6 flex items-start gap-4">
        <div
          className={`flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl border ${meta.iconStyle}`}
        >
          <ColumnIcon className="h-5 w-5" />
        </div>

        <div>
          <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-gold">
            {meta.eyebrow}
          </p>

          <h3 className="mt-1 font-display text-2xl font-bold text-white">
            {meta.title}
          </h3>

          <p className="mt-1 max-w-xl text-sm leading-relaxed text-white/45">
            {meta.description}
          </p>
        </div>
      </div>

      <div className="space-y-5">
        {items.map(
          (item, index) => (
            <JourneyCard
              key={
                item.id ||
                `${type}-${index}`
              }
              item={item}
              type={type}
              index={index}
            />
          )
        )}
      </div>
    </div>
  );
}

/* ================================================================ */
/* JOURNEY CARD                                                      */
/* ================================================================ */

function JourneyCard({
  item,
  type,
  index,
}) {
  const meta = COLUMN_META[type];

  const isEducation =
    type === "education";

  const title =
    item.degree ||
    item.role ||
    item.title ||
    "Position";

  const organization =
    item.institution ||
    item.organization ||
    item.company ||
    "";

  const period =
    item.period ||
    item.date ||
    item.status ||
    "";

  const tags = Array.isArray(
    item.tags
  )
    ? item.tags
    : [];

  const programStats = Array.isArray(
    item.programStats
  )
    ? item.programStats
    : [];

  const courses = Array.isArray(
    item.courses
  )
    ? item.courses
    : [];

  const hasActions =
    Boolean(item.website) ||
    Boolean(item.curriculumUrl);

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
        delay: index * 0.06,
      }}
      whileHover={{
        y: -3,
      }}
      className="group relative overflow-hidden rounded-[1.6rem] border border-white/10 bg-white/[0.035] shadow-elevate backdrop-blur-sm transition-all duration-300 hover:border-gold/25 hover:bg-white/[0.05]"
    >
      {/* Accent line */}
      <div
        className={`absolute left-0 top-0 h-px w-full bg-gradient-to-r ${meta.accent}`}
      />

      <div className="p-5 sm:p-6">
        {/* Header */}
        <div className="flex items-start justify-between gap-4">
          <div className="flex min-w-0 items-start gap-4">
            <OrganizationLogo
              logo={item.logo}
              logoAlt={
                item.logoAlt ||
                organization ||
                title
              }
              fallbackType={type}
            />

            <div className="min-w-0">
              <h4 className="font-display text-lg font-bold leading-snug text-white transition-colors group-hover:text-gold-soft sm:text-xl">
                {title}
              </h4>

              {organization && (
                <p className="mt-1.5 text-sm font-semibold leading-relaxed text-gold-soft/85">
                  {organization}
                </p>
              )}

              {item.location && (
                <div className="mt-1.5 flex items-center gap-1.5 text-xs text-white/40">
                  <MapPin className="h-3.5 w-3.5 shrink-0 text-gold/75" />

                  <span>
                    {item.location}
                  </span>
                </div>
              )}
            </div>
          </div>

          {/* Desktop date */}
          {period && (
            <div className="hidden shrink-0 sm:block">
              <span
                className={`inline-flex items-center gap-1.5 rounded-full border px-3 py-1.5 text-[11px] font-semibold ${meta.dateStyle}`}
              >
                <CalendarDays className="h-3.5 w-3.5" />

                {period}
              </span>
            </div>
          )}
        </div>

        {/* Mobile date */}
        {period && (
          <div className="mt-3 sm:hidden">
            <span
              className={`inline-flex items-center gap-1.5 rounded-full border px-3 py-1.5 text-[11px] font-semibold ${meta.dateStyle}`}
            >
              <CalendarDays className="h-3.5 w-3.5" />

              {period}
            </span>
          </div>
        )}

        {/* Description */}
        {item.description && (
          <p className="mt-4 text-sm leading-relaxed text-white/58">
            {item.description}
          </p>
        )}

        {/* Program information */}
        {programStats.length > 0 && (
          <div className="mt-4 grid grid-cols-3 gap-2">
            {programStats.map(
              (stat) => (
                <div
                  key={`${stat.value}-${stat.label}`}
                  className="rounded-xl border border-white/[0.08] bg-black/15 px-3 py-3 text-center"
                >
                  <div className="font-display text-base font-bold text-white">
                    {stat.value}
                  </div>

                  <div className="mt-1 text-[9px] font-semibold uppercase tracking-[0.12em] text-white/35">
                    {stat.label}
                  </div>
                </div>
              )
            )}
          </div>
        )}

        {/* Relevant curriculum courses */}
        {courses.length > 0 && (
          <RelevantCoursework
            courses={courses}
          />
        )}

        {/* Tags */}
        {tags.length > 0 && (
          <div className="mt-5 flex flex-wrap gap-1.5 border-t border-white/[0.07] pt-4">
            {tags.map((tag) => (
              <span
                key={tag}
                className="rounded-md border border-white/[0.08] bg-white/[0.035] px-2.5 py-1 text-[10px] font-medium text-white/45 transition-colors hover:border-gold/20 hover:text-white/70"
              >
                {tag}
              </span>
            ))}
          </div>
        )}

        {/* Buttons */}
        {hasActions && (
          <div
            className={`flex flex-wrap items-center gap-2.5 ${
              tags.length > 0
                ? "mt-4"
                : "mt-5 border-t border-white/[0.07] pt-4"
            }`}
          >
            {item.website && (
              <ActionLink
                href={item.website}
                label={
                  item.websiteLabel ||
                  (isEducation
                    ? "Visit Institution"
                    : "Visit Website")
                }
                type="website"
              />
            )}

            {item.curriculumUrl && (
              <ActionLink
                href={
                  item.curriculumUrl
                }
                label={
                  item.curriculumLabel ||
                  "View Curriculum PDF"
                }
                type="document"
              />
            )}
          </div>
        )}
      </div>
    </motion.article>
  );
}

/* ================================================================ */
/* RELEVANT COURSEWORK                                               */
/* ================================================================ */

function RelevantCoursework({
  courses,
}) {
  const [showAll, setShowAll] =
    useState(false);

  const initialCount = 6;

  const displayedCourses =
    showAll
      ? courses
      : courses.slice(
          0,
          initialCount
        );

  const hiddenCount = Math.max(
    courses.length -
      initialCount,
    0
  );

  return (
    <div className="mt-5 rounded-2xl border border-white/[0.08] bg-black/15 p-4">
      <div className="flex items-center justify-between gap-4">
        <div className="flex items-center gap-2">
          <BookOpenCheck className="h-4 w-4 text-gold" />

          <div>
            <h5 className="text-xs font-semibold text-white/80">
              Selected Curriculum
              Courses
            </h5>

            <p className="mt-0.5 text-[10px] text-white/35">
              Relevant to power,
              electronics, control,
              energy, and embedded
              systems
            </p>
          </div>
        </div>

        <span className="rounded-full border border-white/[0.08] bg-white/[0.035] px-2.5 py-1 text-[10px] font-semibold text-white/40">
          {courses.length} courses
        </span>
      </div>

      <motion.div
        layout
        className="mt-4 grid gap-2 sm:grid-cols-2"
      >
        {displayedCourses.map(
          (course) => (
            <motion.div
              layout
              key={`${course.code}-${course.title}`}
              initial={{
                opacity: 0,
                y: 8,
              }}
              animate={{
                opacity: 1,
                y: 0,
              }}
              className="rounded-xl border border-white/[0.07] bg-white/[0.025] p-3 transition-colors hover:border-gold/20 hover:bg-white/[0.045]"
            >
              <div className="flex items-start justify-between gap-2">
                <span className="text-[10px] font-bold uppercase tracking-[0.1em] text-gold">
                  {course.code}
                </span>

                {course.group && (
                  <span className="rounded-full bg-white/[0.04] px-2 py-0.5 text-[8px] font-semibold uppercase tracking-[0.08em] text-white/30">
                    {course.group}
                  </span>
                )}
              </div>

              <p className="mt-1.5 text-xs font-medium leading-relaxed text-white/60">
                {course.title}
              </p>
            </motion.div>
          )
        )}
      </motion.div>

      {hiddenCount > 0 && (
        <button
          type="button"
          onClick={() =>
            setShowAll(
              (current) =>
                !current
            )
          }
          className="mt-3 inline-flex items-center gap-1.5 text-[11px] font-semibold text-gold transition-colors hover:text-gold-light"
        >
          {showAll
            ? "Show Fewer Courses"
            : `Show All Courses (+${hiddenCount})`}

          <ChevronDown
            className={`h-3.5 w-3.5 transition-transform ${
              showAll
                ? "rotate-180"
                : ""
            }`}
          />
        </button>
      )}
    </div>
  );
}

/* ================================================================ */
/* ACTION BUTTON                                                     */
/* ================================================================ */

function ActionLink({
  href,
  label,
  type,
}) {
  const isHashLink =
    href.startsWith("#");

  const isDocument =
    type === "document";

  const Icon = isDocument
    ? FileText
    : ExternalLink;

  return (
    <a
      href={href}
      target={
        isHashLink
          ? undefined
          : "_blank"
      }
      rel={
        isHashLink
          ? undefined
          : "noopener noreferrer"
      }
      className={
        isDocument
          ? "inline-flex items-center justify-center gap-2 rounded-full bg-gold-gradient px-4 py-2 text-xs font-semibold text-navy-950 shadow-gold-glow transition-all duration-300 hover:-translate-y-0.5 hover:scale-[1.02]"
          : "inline-flex items-center justify-center gap-2 rounded-full border border-gold/25 bg-gold/[0.07] px-4 py-2 text-xs font-semibold text-gold-soft transition-all duration-300 hover:-translate-y-0.5 hover:border-gold/45 hover:bg-gold hover:text-navy-950"
      }
    >
      <Icon className="h-3.5 w-3.5" />

      {label}
    </a>
  );
}

/* ================================================================ */
/* ORGANIZATION LOGO                                                 */
/* ================================================================ */

function OrganizationLogo({
  logo,
  logoAlt,
  fallbackType,
}) {
  const FallbackIcon =
    fallbackType ===
    "education"
      ? GraduationCap
      : BriefcaseBusiness;

  return (
    <div className="flex h-14 w-14 shrink-0 items-center justify-center overflow-hidden rounded-2xl border border-white/12 bg-white/[0.06] p-2 shadow-lg backdrop-blur-md transition-all duration-300 group-hover:border-gold/30 group-hover:bg-white/[0.08]">
      {logo ? (
        <SmartImage
          src={logo}
          alt={logoAlt}
          className="h-full w-full"
          imgClassName="h-full w-full object-contain"
          placeholderLabel={
            logoAlt
          }
        />
      ) : (
        <FallbackIcon className="h-6 w-6 text-gold" />
      )}
    </div>
  );
}
