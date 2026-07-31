import { useState } from "react";
import { motion } from "framer-motion";
import {
  Mail,
  MapPin,
  MessageCircle,
  Phone,
  Send,
} from "lucide-react";

import { useData } from "../context/DataContext";
import SectionHeading from "./SectionHeading";
import SocialIcons from "./SocialIcons";

/**
 * Removes spaces, hyphens, brackets, and the plus sign from a phone number.
 *
 * Example:
 * +880 1719-194874
 * becomes:
 * 8801719194874
 */
function normalizePhoneNumber(phoneNumber = "") {
  return phoneNumber.replace(/\D/g, "");
}

export default function Contact() {
  const { data } = useData();

  const contactInfo = data.contactInfo || {};
  const socialLinks = data.socialLinks || [];

  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  /**
   * Opens the visitor's default email application.
   * No backend or database is required.
   */
  const handleSubmit = (event) => {
    event.preventDefault();

    const recipient =
      contactInfo.formRecipient || contactInfo.email;

    if (!recipient) {
      return;
    }

    const subject = encodeURIComponent(
      `Portfolio message from ${form.name}`
    );

    const body = encodeURIComponent(
      [
        `Name: ${form.name}`,
        `Email: ${form.email}`,
        "",
        form.message,
      ].join("\n")
    );

    window.location.href =
      `mailto:${recipient}?subject=${subject}&body=${body}`;
  };

  const phoneNumber = normalizePhoneNumber(
    contactInfo.phone
  );

  const whatsappNumber = normalizePhoneNumber(
    contactInfo.whatsapp || contactInfo.phone
  );

  const details = [
    {
      icon: MapPin,
      label: "Location",
      value: contactInfo.location,
      href: "",
      external: false,
    },

    {
      icon: Phone,
      label: "Phone",
      value: contactInfo.phone,
      href: phoneNumber
        ? `tel:+${phoneNumber}`
        : "",
      external: false,
    },

    {
      icon: MessageCircle,
      label: "WhatsApp",
      value:
        contactInfo.whatsapp ||
        contactInfo.phone,
      href: whatsappNumber
        ? `https://wa.me/${whatsappNumber}`
        : "",
      external: true,
    },

    {
      icon: Mail,
      label: "Email",
      value: contactInfo.email,
      href: contactInfo.email
        ? `mailto:${contactInfo.email}`
        : "",
      external: false,
    },
  ].filter((detail) => detail.value);

  return (
    <section
      id="contact"
      className="relative overflow-hidden bg-charcoal py-24 sm:py-28"
    >
      {/* Background decoration */}
      <div className="absolute inset-0 bg-mesh opacity-50" />

      <motion.div
        className="absolute right-0 top-0 h-80 w-80 rounded-full bg-gold/[0.08] blur-3xl"
        animate={{
          opacity: [0.3, 0.6, 0.3],
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
        }}
      />

      <div className="relative mx-auto max-w-7xl px-5 sm:px-8">
        <SectionHeading
          eyebrow="Get In Touch"
          title={contactInfo.heading || "Let's Connect"}
          subtitle={contactInfo.intro}
        />

        <div className="grid grid-cols-1 gap-10 lg:grid-cols-2 lg:gap-14">
          {/* Contact details */}
          <motion.div
            initial={{
              opacity: 0,
              x: -30,
            }}
            whileInView={{
              opacity: 1,
              x: 0,
            }}
            viewport={{
              once: true,
              margin: "-60px",
            }}
            transition={{
              duration: 0.6,
            }}
            className="space-y-4"
          >
            {details.map((detail) => {
              const Icon = detail.icon;

              const content = (
                <div className="group flex items-center gap-4 rounded-2xl border border-white/10 bg-white/[0.03] p-5 backdrop-blur-sm transition-all duration-300 hover:border-gold/30 hover:bg-white/[0.05]">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl border border-gold/20 bg-gold/10 text-gold transition-colors duration-300 group-hover:bg-gold group-hover:text-navy-900">
                    <Icon className="h-5 w-5" />
                  </div>

                  <div className="min-w-0">
                    <div className="text-xs font-semibold uppercase tracking-wider text-white/45">
                      {detail.label}
                    </div>

                    <div className="mt-0.5 break-all font-medium text-white">
                      {detail.value}
                    </div>
                  </div>
                </div>
              );

              if (!detail.href) {
                return (
                  <div key={detail.label}>
                    {content}
                  </div>
                );
              }

              return (
                <a
                  key={detail.label}
                  href={detail.href}
                  target={
                    detail.external
                      ? "_blank"
                      : undefined
                  }
                  rel={
                    detail.external
                      ? "noopener noreferrer"
                      : undefined
                  }
                  aria-label={`${detail.label}: ${detail.value}`}
                  className="block"
                >
                  {content}
                </a>
              );
            })}

            {/* Social profiles */}
            <div className="pt-4">
              <div className="mb-4 text-sm font-semibold text-white/60">
                Find me online
              </div>

              <SocialIcons
                links={socialLinks}
                variant="dark"
              />
            </div>
          </motion.div>

          {/* Contact form */}
          <motion.form
            initial={{
              opacity: 0,
              x: 30,
            }}
            whileInView={{
              opacity: 1,
              x: 0,
            }}
            viewport={{
              once: true,
              margin: "-60px",
            }}
            transition={{
              duration: 0.6,
            }}
            onSubmit={handleSubmit}
            className="rounded-3xl border border-white/10 bg-white/[0.04] p-7 shadow-glass backdrop-blur-md sm:p-8"
          >
            <div className="space-y-5">
              <Field
                label="Your Name"
                value={form.name}
                onChange={(value) =>
                  setForm((previous) => ({
                    ...previous,
                    name: value,
                  }))
                }
                placeholder="Your full name"
                required
              />

              <Field
                label="Your Email"
                type="email"
                value={form.email}
                onChange={(value) =>
                  setForm((previous) => ({
                    ...previous,
                    email: value,
                  }))
                }
                placeholder="your.email@example.com"
                required
              />

              <div>
                <label
                  htmlFor="contact-message"
                  className="mb-2 block text-sm font-medium text-white/70"
                >
                  Message
                </label>

                <textarea
                  id="contact-message"
                  required
                  rows={5}
                  value={form.message}
                  onChange={(event) =>
                    setForm((previous) => ({
                      ...previous,
                      message: event.target.value,
                    }))
                  }
                  placeholder="Tell me about your research idea, project, opportunity, or question."
                  className="w-full resize-none rounded-xl border border-white/10 bg-navy-950/40 px-4 py-3 text-white outline-none transition-colors placeholder:text-white/30 focus:border-gold/50"
                />
              </div>

              <button
                type="submit"
                className="group flex w-full items-center justify-center gap-2 rounded-xl bg-gold-gradient px-6 py-3.5 font-semibold text-navy-900 shadow-gold-glow transition-transform hover:scale-[1.02] active:scale-95"
              >
                Send Message

                <Send className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </button>

              <p className="text-center text-xs text-white/40">
                Your default email application will open.
                No information is stored on this website.
              </p>
            </div>
          </motion.form>
        </div>
      </div>
    </section>
  );
}

function Field({
  label,
  value,
  onChange,
  type = "text",
  placeholder,
  required = false,
}) {
  const inputId = `contact-${label
    .toLowerCase()
    .replace(/\s+/g, "-")}`;

  return (
    <div>
      <label
        htmlFor={inputId}
        className="mb-2 block text-sm font-medium text-white/70"
      >
        {label}
      </label>

      <input
        id={inputId}
        type={type}
        required={required}
        value={value}
        placeholder={placeholder}
        onChange={(event) =>
          onChange(event.target.value)
        }
        className="w-full rounded-xl border border-white/10 bg-navy-950/40 px-4 py-3 text-white outline-none transition-colors placeholder:text-white/30 focus:border-gold/50"
      />
    </div>
  );
}
