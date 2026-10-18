import { useState } from "react";
import { IconDownload, IconArrowRight } from "../components/ui/icons";
import "./hero.css";

const facts = [
  "M.Sc. Machine Learning — SUPSI",
  "B.Sc. Computer Science — Insubria",
  "Co-Founder — SolarDino",
];

const Hero = ({ onDownloadCV }) => {
  const [busy, setBusy] = useState(false);

  const download = async () => {
    if (busy) return;
    setBusy(true);
    try {
      await onDownloadCV();
    } finally {
      setBusy(false);
    }
  };

  const goContact = () => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });

  return (
    <section id="top" className="bg-paper pt-28 md:pt-36 pb-16 md:pb-24">
      <div className="wrap">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-10 items-center">
          <div className="lg:col-span-7">
            <p className="eyebrow hero-in">Machine Learning · SUPSI</p>
            <h1
              className="hero-in font-display text-ink mt-6 font-[360] tracking-[-0.03em] leading-[0.98] text-[clamp(2.9rem,1.5rem+6vw,5.6rem)]"
              style={{ "--d": "80ms" }}
            >
              Hi, I&rsquo;m Alessio
              <br />
              <em className="text-accent">Gervasini</em>
            </h1>
            <p className="lead hero-in mt-7 max-w-[36rem]" style={{ "--d": "160ms" }}>
              Master&rsquo;s student at SUPSI in Zurich and Lugano, passionate about Artificial Intelligence, with a strong interest in image recognition and object detection.
            </p>

            <figure className="hero-in mt-8 max-w-[36rem] flex items-start gap-4 border-l border-accent pl-5" style={{ "--d": "240ms" }}>
              <img src="./assets/alessio1.png" alt="AG logo" width="40" height="40" className="w-10 h-10 rounded-md flex-none" />
              <blockquote className="font-display italic text-[1.1rem] leading-snug text-ink-2">
                <q>The difference between a junior and a senior is 10,000 failed experiments.</q>
              </blockquote>
            </figure>

            <div className="hero-in mt-9 flex flex-col sm:flex-row gap-3" style={{ "--d": "320ms" }}>
              <button type="button" className="btn btn-primary" onClick={download} disabled={busy} aria-busy={busy}>
                <IconDownload aria-hidden="true" />
                {busy ? "Preparing…" : "Download CV"}
              </button>
              <a href="#project" className="btn btn-ghost">
                Explore My Projects
                <IconArrowRight aria-hidden="true" />
              </a>
            </div>
          </div>

          <div className="lg:col-span-5 hero-in w-full max-w-[26rem] mx-auto lg:max-w-none" style={{ "--d": "200ms" }}>
            <div className="relative aspect-[4/5] overflow-hidden rounded-[20px] border border-line bg-paper-2">
              <div className="absolute inset-3 rounded-[12px] border border-line pointer-events-none" aria-hidden="true" />
              <span className="absolute top-5 left-5 font-mono text-[11px] uppercase tracking-[0.08em] text-muted">Lugano / Zurich</span>
              <span className="absolute top-5 right-5 font-mono text-[11px] uppercase tracking-[0.08em] text-muted">ML · 2026</span>
              <img
                src="./assets/alessio.png"
                alt="Portrait of Alessio Gervasini"
                className="absolute inset-0 w-full h-full object-cover object-[50%_8%] scale-[1.12] origin-bottom mix-blend-multiply"
              />
            </div>
            <div className="card mt-3 p-4 flex items-center justify-between gap-3">
              <div className="min-w-0">
                <p className="font-display text-ink text-xl leading-tight">Alessio Gervasini</p>
                <p className="text-sm text-ink-2">Master in Machine Learning</p>
                <p className="font-mono text-xs text-muted mt-1 flex items-center gap-2 flex-wrap">
                  @alessiogervasini
                  <span className="tag"><span className="hero-dot w-2 h-2 rounded-full" style={{ background: "#2F9E6B" }} aria-hidden="true" />Online</span>
                </p>
              </div>
              <button type="button" className="btn btn-accent !min-h-11 !px-4 !text-sm" onClick={goContact}>
                Contact
              </button>
            </div>
          </div>
        </div>

        <ul className="hero-in mt-16 md:mt-20 pt-5 border-t border-line grid gap-2 md:grid-cols-3 font-mono text-xs uppercase tracking-[0.06em] text-muted" style={{ "--d": "420ms" }}>
          {facts.map((f) => (
            <li key={f}>{f}</li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default Hero;
