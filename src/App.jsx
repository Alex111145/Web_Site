import { useRef, useState } from "react";
import ProfileCard from "./components/ProfileCard/ProfileCard";
import ShinyText from "./components/ShinyText/ShinyText";
import BlurText from "./components/BlurText/BlurText";
import ScrambledText from "./components/ScrambledText/ScrambledText";
import SplitText from "./components/SplitText/SplitText";
import GlassIcons from "./components/GlassIcons/GlassIcons";
import { listTools, listProyek, listCertifications } from "./data";
import ChromaGrid from "./components/ChromaGrid/ChromaGrid";
import ProjectModal from "./components/ProjectModal/ProjectModal"; 
import CertModal from "./components/CertModal/CertModal";
import ToolModal from "./components/ToolModal/ToolModal";
import ContactModal from "./components/ContactModal/ContactModal";
import Aurora from "./components/Aurora/Aurora";
import AOS from 'aos';
import 'aos/dist/aos.css'; 

AOS.init();

function App() {
  const aboutRef = useRef(null);
  
  // State per i Progetti
  const [selectedProject, setSelectedProject] = useState(null); 
  const handleProjectClick = (project) => { setSelectedProject(project); };
  const handleCloseModal = () => { setSelectedProject(null); };

  // State per i Certificati
  const [selectedCert, setSelectedCert] = useState(null);
  const handleCertClick = (cert) => { setSelectedCert(cert); };
  const handleCloseCertModal = () => { setSelectedCert(null); };

  // State per i Tools
  const [selectedTool, setSelectedTool] = useState(null);
  const handleToolClick = (tool) => { setSelectedTool(tool); };
  const handleCloseToolModal = () => { setSelectedTool(null); };

  // State per i Contatti
  const [contactType, setContactType] = useState(null);
  const handleContactClick = (type) => { setContactType(type); };
  const handleCloseContactModal = () => { setContactType(null); };

  return (
    <>
      <div className="absolute top-0 left-0 w-full h-full -z-10 ">
        <Aurora colorStops={["#577870", "#1F97A6", "#127B99"]} blend={0.5} amplitude={1.0} speed={0.5} />
      </div>
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* HERO SECTION */}
        <div className="hero grid md:grid-cols-2 items-center pt-10 xl:gap-0 gap-6 grid-cols-1">
          <div className="animate__animated animate__fadeInUp animate__delay-3s text-white">
            
            <h1 className="text-5xl font-bold mb-6">
              <ShinyText text="Hi I'm Alessio Gervasini" speed={3} />
            </h1>
            
            <BlurText 
              text="Passionate about Artificial Intelligence and Cybersecurity. Deeply committed to protecting digital assets and exploring network security." 
              delay={150} 
              animateBy="words" 
              className="mb-6" 
            />

            {/* CITAZIONE SOTTO LA PRESENTAZIONE */}
            <div className="flex items-center gap-3 mb-8 bg bg-zinc-800 w-fit p-4 rounded-2xl border border-zinc-700 shadow-lg">
              <img src="./assets/alessio1.png" className="w-10 rounded-md" alt="Alessio" />
              <q className="italic text-gray-300">The difference between a junior and a senior is 10,000 failed experiments.</q>
            </div>

            <div className="flex items-center sm:gap-4 gap-2">
              <a href="./assets/CV.pdf" download className="font-semibold bg-[#1a1a1a] p-4 px-6 rounded-full border border-gray-700 hover:bg-[#222] transition-colors">
                <ShinyText text="Download CV" speed={3} />
              </a>
              <a href="#project" className="font-semibold bg-[#1a1a1a] p-4 px-6 rounded-full border border-gray-700 hover:bg-[#222] transition-colors">
                <ShinyText text="Explore My Projects" speed={3} />
              </a>
            </div>
          </div>

          <div className="md:ml-auto animate__animated animate__fadeInUp animate__delay-4s">
            {/* MODIFICATA LA PROP NAME PER ANDARE SU DUE RIGHE */}
            <ProfileCard 
             name={
    <span className="font-serif font-bold tracking-tight leading-none text-black">
      Alessio<br />Gervasini
    </span>
  } 
  title="Machine Learning Specialist"
              handle="alessiogervasini" 
              status="Online" 
              avatarUrl="./assets/alessio.png" 
              onContactClick={() => document.getElementById('contact').scrollIntoView({ behavior: 'smooth' })} 
            />
          </div>
        </div>

        {/* ABOUT ME */}
        <div className="mt-15 mx-auto w-full max-w-[1600px] rounded-3xl border-[5px] border-violet-500/40 shadow-[0_0_30px_rgba(168,85,247,0.4)] bg-gradient-to-br from-[#0a0a0a] via-[#111111] to-[#1a1a1a] p-8 md:p-12" id="about">
          <div className="flex flex-col items-center justify-center text-center text-white" data-aos="fade-up">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">About Me</h2>
            <BlurText text="Bachelor's degree in Computer Science from the University of Insubria, with a focus on AI, Machine Learning and Cybersecurity." delay={150} className="text-lg leading-relaxed mb-12 text-gray-300 max-w-4xl mx-auto" />
            <div className="flex flex-col sm:flex-row items-center justify-center gap-10 sm:gap-20 mb-8 w-full">
              <div><h1 className="text-4xl md:text-5xl mb-2 font-bold">{listTools.length}<span className="text-violet-500">+</span></h1><p className="text-gray-400">Tools & Technologies</p></div>
              <div><h1 className="text-4xl md:text-5xl mb-2 font-bold">{listProyek.length}<span className="text-violet-500">+</span></h1><p className="text-gray-400">Project Finished</p></div>
              <div><h1 className="text-4xl md:text-5xl mb-2 font-bold">{listCertifications.filter(c => c.certImage).length}<span className="text-violet-500">+</span></h1><p className="text-gray-400">Certifications Acquired</p></div>
              <div><h1 className="text-4xl md:text-5xl mb-2 font-bold">{new Date().getFullYear() - 2023}<span className="text-violet-500">+</span></h1><p className="text-gray-400">Years of Experience</p></div>
            </div>
            <ShinyText text="From data noise to intelligent choices." speed={3} className="text-lg font-medium text-violet-400 mt-4" />
          </div>
        </div>

        {/* TOOLS */}
        <div className="tools mt-32 text-white">
          <h1 className="text-4xl font-bold mb-4" data-aos="fade-up">Tools & Technologies</h1>
          <div className="grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-4 mt-14">
            {listTools.map((tool) => (
              <div key={tool.id} onClick={() => handleToolClick(tool)} className="cursor-pointer flex items-center gap-4 p-4 border border-zinc-700 rounded-xl bg-zinc-900/60 backdrop-blur-md hover:bg-zinc-800 hover:scale-[1.02] transition-all shadow-lg" data-aos="fade-up" data-aos-delay={tool.dad}>
                <img src={tool.gambar} alt={tool.nama} className="w-16 h-16 object-contain bg-zinc-800 p-2 rounded-lg" />
                <div className="flex flex-col min-w-0">
                  <ShinyText text={tool.nama} speed={3} className="text-lg font-semibold leading-tight" />
                  <p className="text-sm text-zinc-400 leading-snug break-words">{tool.ket}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* CERTIFICATIONS */}
        <div className="certifications mt-24 text-white">
          <h1 className="text-4xl font-bold mb-4" data-aos="fade-up">Certifications</h1>
          <div className="grid lg:grid-cols-3 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-4 mt-14">
            {[...listCertifications]
              .sort((a, b) => {
                if (!!a.certImage === !!b.certImage) return Number(b.anno) - Number(a.anno);
                return a.certImage ? -1 : 1;
              })
              .map((cert) => (
              <div 
                key={cert.id} 
                onClick={() => handleCertClick(cert)} 
                className="cursor-pointer flex items-center gap-4 p-4 border border-zinc-700 rounded-xl bg-zinc-900/60 backdrop-blur-md hover:bg-zinc-800 hover:scale-[1.02] transition-all shadow-lg" 
                data-aos="fade-up" 
                data-aos-delay={cert.dad}
              >
                <img src={cert.gambar} alt={cert.nama} className="w-16 h-16 object-contain bg-zinc-800 p-2 rounded-lg" />
                <div className="flex flex-col min-w-0">
                  <ShinyText text={cert.nama} speed={3} className="text-lg font-semibold leading-tight" />
                  <p className="text-sm text-zinc-400 leading-snug break-words">
                    {cert.ket} • <span className="text-violet-400">{cert.certImage ? cert.anno : "Soon..."}</span>
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* PROJECTS */}
        <div className="mt-32 py-10" id="project">
          <h1 className="text-center text-4xl font-bold mb-2 text-white" data-aos="fade-up">Projects</h1>
          <div className="mt-14" data-aos="fade-up">
            <ChromaGrid items={listProyek} onItemClick={handleProjectClick} radius={500} damping={0.45} fadeOut={0.6} />
          </div>
        </div>

        {/* SOCIAL & CONTACT SECTION */}
        <div className="mt-32 pb-20 flex flex-col items-center gap-10" id="contact">
          <h1 className="text-4xl font-bold text-center text-white mb-2" data-aos="fade-up">Contact Me</h1>
          <p className="text-base/loose text-center opacity-50 text-white mb-4" data-aos="fade-up">Feel free to reach out through any of these platforms</p>
          
          <div className="flex flex-wrap justify-center gap-8" data-aos="fade-up">
            <button onClick={() => handleContactClick('github')} className="p-4 bg-zinc-800/60 rounded-xl border border-zinc-700 hover:border-violet-500 transition-all hover:scale-110 group shadow-lg">
              <img src="./assets/tools/github.png" alt="GitHub" className="w-10 h-10 object-contain group-hover:brightness-125" />
            </button>

            <button onClick={() => handleContactClick('linkedin')} className="p-4 bg-zinc-800/60 rounded-xl border border-zinc-700 hover:border-violet-500 transition-all hover:scale-110 group shadow-lg">
              <div className="bg-[#0077b5]/20 p-1 rounded-md">
                <svg xmlns="http://www.w3.org/2000/svg" className="w-10 h-10 fill-[#0077b5]" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/></svg>
              </div>
            </button>
            
            <button onClick={() => handleContactClick('email')} className="p-4 bg-zinc-800/60 rounded-xl border border-zinc-700 hover:border-violet-500 transition-all hover:scale-110 group shadow-lg">
              <svg xmlns="http://www.w3.org/2000/svg" className="w-10 h-10 fill-violet-400 group-hover:brightness-125" viewBox="0 0 24 24"><path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/></svg>
            </button>

            <button onClick={() => handleContactClick('phone')} className="p-4 bg-zinc-800/60 rounded-xl border border-zinc-700 hover:border-violet-500 transition-all hover:scale-110 group shadow-lg">
              <svg xmlns="http://www.w3.org/2000/svg" className="w-10 h-10 fill-violet-400 group-hover:brightness-125" viewBox="0 0 24 24"><path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z"/></svg>
            </button>
          </div>
        </div>
      </main>
      <ToolModal isOpen={!!selectedTool} onClose={handleCloseToolModal} tool={selectedTool} />
      <ProjectModal isOpen={!!selectedProject} onClose={handleCloseModal} project={selectedProject} />
      <CertModal isOpen={!!selectedCert} onClose={handleCloseCertModal} cert={selectedCert} />
      <ContactModal isOpen={!!contactType} onClose={handleCloseContactModal} type={contactType} />
    </>
  );
}
export default App;