import { motion } from "framer-motion";

import { ArrowUpRight } from "lucide-react";

import { useData } from "../context/DataContext";

import SmartImage from "./SmartImage";

import SectionHeading from "./SectionHeading";



/** Resolve an internal (#research) or external link into props */

function linkProps(href) {

  if (!href) return null;

  if (href.startsWith("#")) {

    return { onClick: () => scrollToId(href.slice(1)), as: "button" };

  }

  return { href, target: "_blank", rel: "noopener noreferrer", as: "a" };

}

function scrollToId(id) {

  const el = document.getElementById(id);

  if (el) {

    const top = el.getBoundingClientRect().top + window.scrollY - 76;

    window.scrollTo({ top, behavior: "smooth" });

  }

}



export default function DynamicHighlights() {

  const { data } = useData();

  const items = data.highlightSections;

  if (!items?.length) return null;



  return (

    <section id="highlights" className="relative bg-navy-gradient py-24 sm:py-28 overflow-hidden">

      <div className="absolute inset-0 bg-mesh opacity-60" />

      <div className="relative mx-auto max-w-7xl px-5 sm:px-8">

        <SectionHeading

          eyebrow="What I Work On"

          title="Focus Areas"

          subtitle="The themes driving my research and engineering — energy, sustainability, and connected systems."

        />



        <div className="space-y-16 sm:space-y-24">

          {items.map((item, i) => {

            const reverse = i % 2 === 1;

            const lp = linkProps(item.buttonLink);



            return (

              <div

                key={item.id}

                className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-14 items-center"

              >

                {/* Image */}

                <motion.div

                  initial={{ opacity: 0, x: reverse ? 40 : -40 }}

                  whileInView={{ opacity: 1, x: 0 }}

                  viewport={{ once: true, margin: "-80px" }}

                  transition={{ duration: 0.7 }}

                  className={reverse ? "lg:order-2" : ""}

                >

                  <div className="group relative overflow-hidden rounded-3xl border border-white/10 shadow-elevate">

                    <SmartImage

                      src={item.image}

                      alt={item.title}

                      className="aspect-[4/3] w-full"

                      imgClassName="group-hover:scale-105 transition-transform duration-700"

                      placeholderLabel="Add highlight image"

                    />

                    <div className="absolute inset-0 bg-gradient-to-t from-navy-950/60 to-transparent" />

                  </div>

                </motion.div>



                {/* Text */}

                <motion.div

                  initial={{ opacity: 0, x: reverse ? -40 : 40 }}

                  whileInView={{ opacity: 1, x: 0 }}

                  viewport={{ once: true, margin: "-80px" }}

                  transition={{ duration: 0.7, delay: 0.1 }}

                  className={reverse ? "lg:order-1" : ""}

                >

                  {item.subtitle && (

                    <div className="text-xs font-semibold uppercase tracking-[0.2em] text-gold mb-3">

                      {item.subtitle}

                    </div>

                  )}

                  <h3 className="font-display text-2xl sm:text-3xl font-bold text-white mb-4">

                    {item.title}

                  </h3>

                  <p className="text-white/65 text-base sm:text-lg leading-relaxed mb-6">

                    {item.description}

                  </p>



                  {item.tags?.length > 0 && (

                    <div className="flex flex-wrap gap-2 mb-7">

                      {item.tags.map((t) => (

                        <span

                          key={t}

                          className="rounded-full border border-gold/25 bg-gold/5 px-3 py-1 text-xs font-medium text-gold-soft"

                        >

                          {t}

                        </span>

                      ))}

                    </div>

                  )}



                  {item.buttonText && lp &&

                    (lp.as === "a" ? (

                      <a

                        href={lp.href}

                        target={lp.target}

                        rel={lp.rel}

                        className="group inline-flex items-center gap-2 text-sm font-semibold text-gold hover:text-gold-light"

                      >

                        {item.buttonText}

                        <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />

                      </a>

                    ) : (

                      <button

                        onClick={lp.onClick}

                        className="group inline-flex items-center gap-2 text-sm font-semibold text-gold hover:text-gold-light"

                      >

                        {item.buttonText}

                        <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />

                      </button>

                    ))}

                </motion.div>

              </div>

            );

          })}

        </div>

      </div>

    </section>

  );

}



