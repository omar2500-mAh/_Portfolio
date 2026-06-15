import {
  Facebook,
  Linkedin,
  Github,
  Instagram,
  GraduationCap,
  BookOpen,
  Mail,
  Phone,
  Globe,
} from "lucide-react";

/**
 * Maps the "icon" strings in portfolioData.socialLinks to real icons.
 * Add a new platform by adding a key here.
 */
const ICONS = {
  facebook: Facebook,
  linkedin: Linkedin,
  github: Github,
  instagram: Instagram,
  scholar: GraduationCap,
  researchgate: BookOpen,
  email: Mail,
  phone: Phone,
  website: Globe,
};

export function SocialIcon({ name, className = "h-5 w-5" }) {
  const Icon = ICONS[name] || Globe;
  return <Icon className={className} />;
}

/**
 * Renders a row of social icon buttons from a socialLinks array,
 * automatically skipping any with an empty url.
 */
export default function SocialIcons({
  links = [],
  className = "",
  iconClass = "h-5 w-5",
  variant = "dark",
}) {
  const active = links.filter((l) => l.url && l.url.trim() !== "");
  if (!active.length) return null;

  const base =
    "group inline-flex items-center justify-center rounded-full transition-all duration-300";
  const styles =
    variant === "dark"
      ? "h-11 w-11 bg-white/5 border border-white/10 text-white/70 hover:text-navy-900 hover:bg-gold hover:border-gold hover:-translate-y-1 hover:shadow-gold-glow"
      : "h-11 w-11 bg-navy-900/5 border border-navy-900/10 text-navy-900/70 hover:text-navy-900 hover:bg-gold hover:border-gold hover:-translate-y-1";

  return (
    <div className={`flex flex-wrap gap-3 ${className}`}>
      {active.map((l) => (
        <a
          key={l.platform}
          href={l.url}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={l.platform}
          title={l.platform}
          className={`${base} ${styles}`}
        >
          <SocialIcon name={l.icon} className={iconClass} />
        </a>
      ))}
    </div>
  );
}
