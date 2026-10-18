import { useEffect, useState } from "react";
import Header from "./sections/Header";
import Hero from "./sections/Hero";
import About from "./sections/About";
import SolarDino from "./sections/SolarDino";
import Tools from "./sections/Tools";
import Certifications from "./sections/Certifications";
import Projects from "./sections/Projects";
import Contact from "./sections/Contact";
import Footer from "./sections/Footer";
import MobileBar from "./sections/MobileBar";
import ProjectModal from "./components/modals/ProjectModal";
import CertModal from "./components/modals/CertModal";
import ToolModal from "./components/modals/ToolModal";
import ContactModal from "./components/modals/ContactModal";

function App() {
  const [selectedProject, setSelectedProject] = useState(null);
  const [selectedCert, setSelectedCert] = useState(null);
  const [selectedTool, setSelectedTool] = useState(null);
  const [contactType, setContactType] = useState(null);

  // Download CV dinamico (PDF compilato con tools, certificazioni e progetti)
  const handleDownloadCV = async () => {
    const { generateFilledCV } = await import("./components/CVDocument/CVFiller");
    const blob = await generateFilledCV();
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = "Alessio_Gervasini_CV.pdf";
    a.click();
    URL.revokeObjectURL(url);
  };

  // Comparsa allo scroll per gli elementi con data-reveal
  useEffect(() => {
    const els = document.querySelectorAll("[data-reveal]");
    // ?reveal=off mostra tutto subito (utile per screenshot)
    if (!("IntersectionObserver" in window) || window.location.search.includes("reveal=off")) {
      els.forEach((el) => el.classList.add("is-visible"));
      return;
    }
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            io.unobserve(entry.target);
          }
        });
      },
      { rootMargin: "0px 0px -8% 0px", threshold: 0.08 }
    );
    els.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, []);

  return (
    <>
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:fixed focus:top-3 focus:left-3 focus:z-[200] focus:bg-ink focus:text-paper focus:px-4 focus:py-2 focus:rounded-full"
      >
        Skip to content
      </a>
      <Header onDownloadCV={handleDownloadCV} />
      <main id="main">
        <Hero onDownloadCV={handleDownloadCV} />
        <About />
        <SolarDino />
        <Tools onSelect={setSelectedTool} />
        <Certifications onSelect={setSelectedCert} />
        <Projects onSelect={setSelectedProject} />
        <Contact onSelect={setContactType} />
      </main>
      <Footer onDownloadCV={handleDownloadCV} />
      <MobileBar onDownloadCV={handleDownloadCV} />

      <ToolModal isOpen={!!selectedTool} onClose={() => setSelectedTool(null)} tool={selectedTool} />
      <ProjectModal isOpen={!!selectedProject} onClose={() => setSelectedProject(null)} project={selectedProject} />
      <CertModal isOpen={!!selectedCert} onClose={() => setSelectedCert(null)} cert={selectedCert} />
      <ContactModal isOpen={!!contactType} onClose={() => setContactType(null)} type={contactType} />
    </>
  );
}

export default App;
