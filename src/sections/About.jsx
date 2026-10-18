import { useEffect, useRef, useState } from "react";
import { listTools, listCertifications } from "../data";

const stats = [
  { value: listTools.length, label: "Tools & Technologies" },
  { value: 6, label: "Projects Finished" },
  { value: listCertifications.filter((c) => c.certImage).length, label: "Certifications Acquired" },
  { value: new Date().getFullYear() - 2021, label: "Years of Experience in Computer Science" },
];

// Count-up from 0 when the row enters the viewport
const useCountUp = (ref) => {
  const [p, setP] = useState(0);
  useEffect(() => {
    const el = ref.current;
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduce || !("IntersectionObserver" in window) || window.location.search.includes("reveal=off")) {
      setP(1);
      return;
    }
    let raf;
    const io = new IntersectionObserver(([e]) => {
      if (!e.isIntersecting) return;
      io.disconnect();
      const t0 = performance.now();
      const tick = (t) => {
        const k = Math.min((t - t0) / 1200, 1);
        setP(1 - Math.pow(1 - k, 3));
        if (k < 1) raf = requestAnimationFrame(tick);
      };
      raf = requestAnimationFrame(tick);
    }, { threshold: 0.4 });
    io.observe(el);
    return () => { io.disconnect(); cancelAnimationFrame(raf); };
  }, [ref]);
  return p;
};

const About = () => {
  const rowRef = useRef(null);
  const p = useCountUp(rowRef);

  return (
    <section id="about" className="section border-t border-line">
      <div className="wrap">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10">
          <div className="lg:col-span-5" data-reveal>
            <p className="eyebrow">01 — About</p>
            <h2 className="h-section mt-5">About <em>me</em></h2>
          </div>
          <div className="lg:col-span-7 lg:pt-9" data-reveal style={{ "--reveal-delay": "100ms" }}>
            <p className="lead max-w-[38rem]">
              Bachelor&rsquo;s degree in Computer Science from the University of Insubria, with a focus on AI, Machine Learning and Cybersecurity. Currently pursuing a Master&rsquo;s degree in Machine Learning at SUPSI, in Zurich and Lugano.
            </p>
          </div>
        </div>

        <dl ref={rowRef} className="mt-16 md:mt-20 grid grid-cols-2 lg:grid-cols-4 border-t border-line" data-reveal>
          {stats.map((s, i) => (
            <div
              key={s.label}
              className={`flex flex-col-reverse justify-end items-start py-8 pr-4 ${i % 2 === 1 ? "pl-5 border-l border-line" : ""} ${i > 0 ? "lg:pl-6 lg:border-l lg:border-line" : ""} ${i > 1 ? "border-t border-line lg:border-t-0" : ""}`}
            >
              <dt className="mt-3 text-sm text-ink-2 max-w-[14rem]">{s.label}</dt>
              <dd className="font-display text-ink font-[360] leading-none tracking-[-0.02em] text-[clamp(2.8rem,2rem+3vw,4.5rem)] tabular-nums">
                <span className="sr-only">{s.value}+</span>
                <span aria-hidden="true">{Math.round(s.value * p)}<span className="text-accent">+</span></span>
              </dd>
            </div>
          ))}
        </dl>

        <div className="mt-14 md:mt-16" data-reveal>
          <span className="block w-12 h-px bg-accent mb-5" aria-hidden="true" />
          <p className="font-display italic text-accent text-[clamp(1.6rem,1.1rem+1.8vw,2.6rem)] leading-tight tracking-[-0.01em]">
            From data noise to intelligent choices.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
