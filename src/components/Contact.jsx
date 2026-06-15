import { useState } from "react";
import { motion } from "framer-motion";
import { MapPin, Phone, Mail, Send } from "lucide-react";
import { useData } from "../context/DataContext";
import SectionHeading from "./SectionHeading";
import SocialIcons from "./SocialIcons";

export default function Contact() {
  const { data } = useData();
  const { contactInfo, socialLinks } = data;

  const [form, setForm] = useState({ name: "", email: "", message: "" });

  const handleSubmit = (e) => {
    e.preventDefault();
    // Default: opens the visitor's email client (no backend needed).
    // To use EmailJS instead, replace this block with an emailjs.send(...) call.
    const subject = encodeURIComponent(`Portfolio message from ${form.name}`);
    const body = encodeURIComponent(
      `Name: ${form.name}\nEmail: ${form.email}\n\n${form.message}`
    );
    window.location.href = `mailto:${contactInfo.formRecipient}?subject=${subject}&body=${body}`;
  };

  const details = [
    { icon: MapPin, label: "Location", value: contactInfo.location, href: null },
    {
      icon: Phone,
      label: "Phone",
      value: contactInfo.phone,
      href: contactInfo.phone ? `tel:${contactInfo.phone.replace(/\s/g, "")}` : null,
    },
    {
      icon: Mail,
      label: "Email",
      value: contactInfo.email,
      href: contactInfo.email ? `mailto:${contactInfo.email}` : null,
    },
  ].filter((d) => d.value);

  return (
    <section id="contact" className="relative bg-charcoal py-24 sm:py-28 overflow-hidden">
      <div className="absolute inset-0 bg-mesh opacity-50" />
      <motion.div
        className="absolute top-0 right-0 h-80 w-80 rounded-full bg-gold/8 blur-3xl"
        animate={{ opacity: [0.3, 0.6, 0.3] }}
        transition={{ duration: 6, repeat: Infinity }}
      />

      <div className="relative mx-auto max-w-7xl px-5 sm:px-8">
        <SectionHeading
          eyebrow="Get In Touch"
          title={contactInfo.heading}
          subtitle={contactInfo.intro}
        />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-14">
          {/* Left: details + socials */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.6 }}
            className="space-y-4"
          >
            {details.map((d) => {
              const Inner = (
                <div className="group flex items-center gap-4 rounded-2xl border border-white/10 bg-white/[0.03] p-5 backdrop-blur-sm transition-all hover:border-gold/30 hover:bg-white/[0.05]">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-gold/10 border border-gold/20 text-gold transition-colors group-hover:bg-gold group-hover:text-navy-900">
                    <d.icon className="h-5 w-5" />
                  </div>
                  <div>
                    <div className="text-xs font-semibold uppercase tracking-wider text-white/45">
                      {d.label}
                    </div>
                    <div className="text-white font-medium mt-0.5 break-all">
                      {d.value}
                    </div>
                  </div>
                </div>
              );
              return d.href ? (
                <a key={d.label} href={d.href} className="block">
                  {Inner}
                </a>
              ) : (
                <div key={d.label}>{Inner}</div>
              );
            })}

            <div className="pt-4">
              <div className="text-sm font-semibold text-white/60 mb-4">
                Find me online
              </div>
              <SocialIcons links={socialLinks} variant="dark" />
            </div>
          </motion.div>

          {/* Right: form */}
          <motion.form
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.6 }}
            onSubmit={handleSubmit}
            className="rounded-3xl border border-white/10 bg-white/[0.04] p-7 sm:p-8 backdrop-blur-md shadow-glass"
          >
            <div className="space-y-5">
              <Field
                label="Your Name"
                value={form.name}
                onChange={(v) => setForm({ ...form, name: v })}
                placeholder="Jane Doe"
                required
              />
              <Field
                label="Your Email"
                type="email"
                value={form.email}
                onChange={(v) => setForm({ ...form, email: v })}
                placeholder="jane@example.com"
                required
              />
              <div>
                <label className="block text-sm font-medium text-white/70 mb-2">
                  Message
                </label>
                <textarea
                  required
                  rows={5}
                  value={form.message}
                  onChange={(e) => setForm({ ...form, message: e.target.value })}
                  placeholder="Tell me about your idea, project, or question…"
                  className="w-full rounded-xl border border-white/10 bg-navy-950/40 px-4 py-3 text-white placeholder-white/30 outline-none transition-colors focus:border-gold/50 resize-none"
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
                Opens in your email app — no data stored.
              </p>
            </div>
          </motion.form>
        </div>
      </div>
    </section>
  );
}

function Field({ label, value, onChange, type = "text", placeholder, required }) {
  return (
    <div>
      <label className="block text-sm font-medium text-white/70 mb-2">
        {label}
      </label>
      <input
        type={type}
        required={required}
        value={value}
        placeholder={placeholder}
        onChange={(e) => onChange(e.target.value)}
        className="w-full rounded-xl border border-white/10 bg-navy-950/40 px-4 py-3 text-white placeholder-white/30 outline-none transition-colors focus:border-gold/50"
      />
    </div>
  );
}
