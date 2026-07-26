// src/App.jsx
import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  heroData,
  aboutData,
  highlightSections,
  galleryItems,
  awardsCertificates,
  skills,
  education,
  experience,
  contactInfo,
  socialLinks,
} from "./data/portfolioData";

/* ------------------- HERO ------------------- */
const Hero = () => (
  <section className="bg-gray-100 py-24 text-center">
    <img
      src={heroData.profileImage}
      alt={heroData.name}
      className="w-36 h-36 rounded-full mx-auto mb-6"
    />
    <h1 className="text-4xl font-bold mb-4 whitespace-pre-line">
      {heroData.title}
    </h1>
    <p className="text-lg text-gray-700 mb-6">{heroData.tagline}</p>
    <div className="flex justify-center gap-4 mb-6">
      {heroData.ctaButtons.map((btn, i) => (
        <a
          key={i}
          href={`#${btn.scrollTo}`}
          className={`px-6 py-2 rounded-md font-medium ${
            btn.primary
              ? "bg-green-600 text-white hover:bg-green-700"
              : "bg-gray-200 text-gray-900 hover:bg-gray-300"
          }`}
        >
          {btn.label}
        </a>
      ))}
    </div>
    <div className="flex justify-center gap-8">
      {heroData.stats.map((stat, i) => (
        <div key={i} className="text-center">
          <h3 className="text-2xl font-bold">{stat.value}</h3>
          <p className="text-gray-600">{stat.label}</p>
        </div>
      ))}
    </div>
  </section>
);

/* ------------------- ABOUT ------------------- */
const About = () => (
  <section className="py-16 bg-white" id="about">
    <div className="max-w-5xl mx-auto px-4 grid md:grid-cols-2 gap-12 items-center">
      <div>
        <h2 className="text-3xl font-bold mb-6">{aboutData.heading}</h2>
        {aboutData.paragraphs.map((p, i) => (
          <p key={i} className="text-gray-700 mb-4">{p}</p>
        ))}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-6">
          {aboutData.infoCards.map((card, i) => (
            <div key={i} className="bg-gray-100 p-4 rounded-md shadow-sm">
              <h4 className="text-gray-900 font-semibold">{card.label}</h4>
              <p className="text-gray-600">{card.value}</p>
            </div>
          ))}
        </div>
      </div>
      <img
        src={aboutData.image}
        alt="About"
        className="rounded-xl shadow-lg w-full h-auto object-cover"
      />
    </div>
  </section>
);

/* ------------------- MERGED FOCUS AREAS ------------------- */
const MergedFocus = () => {
  const [expandedId, setExpandedId] = useState(null);

  const toggleExpand = (id) => {
    setExpandedId(expandedId === id ? null : id);
  };

  return (
    <section className="py-16 bg-gray-50" id="highlights">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900">
            Focus Areas: Where Ideas Become Engineering
          </h2>
          <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
            Selected research, theses, and prototypes across energy storage, renewables, and embedded systems.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {highlightSections.map((item) => {
            const isExpanded = expandedId === item.id;
            return (
              <motion.div
                key={item.id}
                className="bg-gray-900 text-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transition duration-300"
                whileHover={{ scale: 1.02 }}
              >
                {item.image && (
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-48 object-cover"
                  />
                )}
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                  <p className="text-gray-300 mb-2">
                    {isExpanded ? item.description : `${item.description.slice(0, 120)}...`}
                  </p>
                  {item.tags && (
                    <div className="flex flex-wrap gap-2 mb-2">
                      {item.tags.map((tag, i) => (
                        <span
                          key={i}
                          className="px-3 py-1 bg-green-600 text-white text-xs rounded-full"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  )}
                  <button
                    onClick={() => toggleExpand(item.id)}
                    className="mt-2 text-sm text-green-400 hover:text-green-200 font-medium"
                  >
                    {isExpanded ? "Show Less" : "Full Details"}
                  </button>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

/* ------------------- GALLERY ------------------- */
const Gallery = () => (
  <section className="py-16 bg-white" id="gallery">
    <div className="max-w-7xl mx-auto px-4 text-center">
      <h2 className="text-3xl font-bold mb-8">Gallery</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {galleryItems.map((item) => (
          <div key={item.id} className="rounded-lg overflow-hidden shadow hover:shadow-lg transition">
            <img src={item.image} alt={item.title} className="w-full h-48 object-cover" />
            <div className="p-4">
              <h3 className="font-semibold text-gray-900">{item.title}</h3>
              <p className="text-gray-600 text-sm">{item.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

/* ------------------- RESEARCH / PROJECTS ------------------- */
const ResearchProjects = () => (
  <section className="py-16 bg-gray-50" id="research">
    <div className="max-w-7xl mx-auto px-4 text-center">
      <h2 className="text-3xl font-bold mb-8">Research & Projects</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
        {highlightSections.map((item) => (
          <div key={item.id} className="bg-white rounded-xl shadow-md p-6 hover:shadow-xl transition">
            <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
            <p className="text-gray-600 mb-2">{item.description}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

/* ------------------- AWARDS ------------------- */
const Awards = () => (
  <section className="py-16 bg-white" id="awards">
    <div className="max-w-7xl mx-auto px-4 text-center">
      <h2 className="text-3xl font-bold mb-8">Awards & Certificates</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
        {awardsCertificates.map((item) => (
          <div key={item.id} className="bg-gray-50 rounded-xl shadow-md p-6 hover:shadow-xl transition">
            <img src={item.image} alt={item.title} className="w-full h-48 object-cover mb-4 rounded-lg" />
            <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
            <p className="text-gray-600 mb-1">{item.organization}</p>
            <p className="text-gray-500 text-sm">{item.date}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

/* ------------------- SKILLS ------------------- */
const Skills = () => (
  <section className="py-16 bg-gray-50" id="skills">
    <div className="max-w-5xl mx-auto px-4 text-center">
      <h2 className="text-3xl font-bold mb-8">Skills</h2>
      {skills.map((group, i) => (
        <div key={i} className="mb-6">
          <h3 className="text-xl font-semibold mb-2">{group.category}</h3>
          <div className="flex flex-wrap gap-4 justify-center">
            {group.items.map((skill, j) => (
              <div key={j} className="bg-white rounded-md px-3 py-1 shadow-sm text-gray-700">{skill.name}</div>
            ))}
          </div>
        </div>
      ))}
    </div>
  </section>
);

/* ------------------- EDUCATION ------------------- */
const Education = () => (
  <section className="py-16 bg-white" id="education">
    <div className="max-w-5xl mx-auto px-4 text-center">
      <h2 className="text-3xl font-bold mb-8">Education</h2>
      {education.map((edu) => (
        <div key={edu.id} className="mb-6">
          <h3 className="text-xl font-semibold">{edu.title}</h3>
          <p className="text-gray-600">{edu.institution} — {edu.date}</p>
          <p className="text-gray-500">{edu.description}</p>
        </div>
      ))}
    </div>
  </section>
);

/* ------------------- EXPERIENCE ------------------- */
const Experience = () => (
  <section className="py-16 bg-gray-50" id="experience">
    <div className="max-w-5xl mx-auto px-4 text-center">
      <h2 className="text-3xl font-bold mb-8">Experience</h2>
      {experience.map((exp) => (
        <div key={exp.id} className="mb-6 bg-white rounded-xl shadow-md p-6 hover:shadow-xl transition">
          <h3 className="text-xl font-semibold">{exp.title}</h3>
          <p className="text-gray-600">{exp.institution} — {exp.date}</p>
          <p className="text-gray-500">{exp.description}</p>
        </div>
      ))}
    </div>
  </section>
);

/* ------------------- CONTACT ------------------- */
const Contact = () => (
  <section className="py-16 bg-white" id="contact">
    <div className="max-w-5xl mx-auto px-4 text-center">
      <h2 className="text-3xl font-bold mb-4">{contactInfo.heading}</h2>
      <p className="text-gray-600 mb-4">{contactInfo.intro}</p>
      <p className="text-gray-600 mb-1">Email: {contactInfo.email}</p>
      <p className="text-gray-600 mb-1">Phone: {contactInfo.phone}</p>
      <div className="flex justify-center gap-4 mt-4">
        {socialLinks.map((link) => (
          <a key={link.platform} href={link.url} className="text-gray-600 hover:text-gray-900">{link.platform}</a>
        ))}
      </div>
    </div>
  </section>
);

/* ------------------- FOOTER ------------------- */
const Footer = () => (
  <footer className="bg-gray-100 py-6 text-center">
    <p className="text-gray-600">{`© ${new Date().getFullYear()} Omar Faruque. All Rights Reserved.`}</p>
  </footer>
);

/* ------------------- APP ------------------- */
const App = () => {
  return (
    <div className="font-sans text-gray-900">
      <Hero />
      <About />
      <MergedFocus />
      <Gallery />
      <ResearchProjects />
      <Awards />
      <Skills />
      <Education />
      <Experience />
      <Contact />
      <Footer />
    </div>
  );
};

export default App;
