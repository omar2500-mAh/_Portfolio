import { motion } from "framer-motion";
import { useData } from "../context/DataContext";
import SmartImage from "./SmartImage";
import SectionHeading from "./SectionHeading";

export default function About() {
  const { data } = useData();
  const { aboutData } = data;

  return (
    <section id="about" className="relative bg-cream py-24 sm:py-28">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <SectionHeading eyebrow="Introduction" title={aboutData.heading} light />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start">
          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.7 }}
            className="lg:col-span-5"
          >
            <div className="relative">
              <div className="absolute -bottom-4 -right-4 h-full w-full rounded-3xl border-2 border-gold/40" />
              <SmartImage
                src={aboutData.image}
                alt="Omar Faruque"
                className="relative h-[620px] sm:h-[650px] w-full rounded-3xl shadow-soft-light"
                imgClassName="h-full w-full object-cover object-center rounded-3xl"
                placeholderLabel="Add about.jpg"
              />
            </div>
          </motion.div>

          {/* Text + cards */}
          <div className="lg:col-span-7">
            {aboutData.paragraphs.map((p, i) => (
              <motion.p
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                className="text-navy-900/75 text-base sm:text-lg leading-relaxed mb-5"
                style={{
                  textAlign: "justify",
                  textJustify: "inter-word",
                }}
              >
                {p}
              </motion.p>
            ))}

            <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-4">
              {aboutData.infoCards.map((card, i) => (
                <motion.div
                  key={card.label}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-40px" }}
                  transition={{ duration: 0.5, delay: i * 0.07 }}
                  className="group rounded-2xl border border-navy-900/8 bg-white p-5 shadow-soft-light transition-all hover:-translate-y-1 hover:shadow-soft hover:border-gold/30"
                >
                  <div className="text-[11px] font-semibold uppercase tracking-[0.15em] text-gold-dark mb-1.5">
                    {card.label}
                  </div>
                  <div className="text-navy-900 font-display font-semibold text-[15px] leading-snug">
                    {card.value}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
