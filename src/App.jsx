import { Routes, Route } from "react-router-dom";
import { useData } from "./context/DataContext";

import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import DynamicHighlights from "./components/DynamicHighlights";
import Gallery from "./components/Gallery";
import Awards from "./components/Awards";
import Skills from "./components/Skills";
import Timeline from "./components/Timeline";
import Publications from "./components/Publications";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Admin from "./components/Admin";

function Portfolio() {
  const { data } = useData();

  const visible = {
    home: true,
    about: true,
    research: data.highlightSections?.length > 0,
    gallery: data.galleryItems?.length > 0,
    awards: data.awardsCertificates?.length > 0,
    skills: data.skills?.length > 0,
    journey: data.education?.length > 0 || data.experience?.length > 0,
    publications: data.publications?.length > 0,
    contact: true,
  };

  const visibleSections = Object.keys(visible).filter((key) => visible[key]);

  return (
    <div className="relative">
      <Navbar visibleSections={visibleSections} />

      <main>
        <Hero />
        <About />

        {visible.research && <DynamicHighlights />}
        {visible.gallery && <Gallery />}
        {visible.awards && <Awards />}
        {visible.skills && <Skills />}
        {visible.journey && <Timeline />}
        {visible.publications && <Publications />}

        <Contact />
      </main>

      <Footer />
    </div>
  );
}

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Portfolio />} />
      <Route path="/admin" element={<Admin />} />
    </Routes>
  );
}
