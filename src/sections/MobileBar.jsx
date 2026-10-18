import { useEffect, useState } from "react";
import { IconDownload, IconMail } from "../components/ui/icons";

// Phone-only action bar: shown after the hero, hidden over Contact and Footer
const MobileBar = ({ onDownloadCV }) => {
  const [scrolled, setScrolled] = useState(false);
  const [covered, setCovered] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 480);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (!("IntersectionObserver" in window)) return;
    const seen = new Set();
    const io = new IntersectionObserver((entries) => {
      entries.forEach((e) => {
        if (e.isIntersecting) seen.add(e.target);
        else seen.delete(e.target);
      });
      setCovered(seen.size > 0);
    });
    const els = [document.getElementById("contact"), document.querySelector("footer")];
    els.forEach((el) => el && io.observe(el));
    return () => io.disconnect();
  }, []);

  const visible = scrolled && !covered;

  return (
    <div
      inert={!visible}
      aria-hidden={!visible}
      className={`fixed inset-x-0 bottom-0 z-40 border-t border-line bg-card/95 backdrop-blur transition-transform duration-300 ease-[var(--ease-out-soft)] md:hidden ${
        visible ? "translate-y-0" : "translate-y-full"
      }`}
      style={{ paddingBottom: "calc(12px + env(safe-area-inset-bottom))" }}
    >
      <div className="wrap grid grid-cols-2 gap-3 pt-3">
        <button type="button" onClick={onDownloadCV} className="btn btn-primary px-3">
          <IconDownload /> Download CV
        </button>
        <a href="#contact" className="btn btn-ghost px-3">
          <IconMail /> Contact
        </a>
      </div>
    </div>
  );
};

export default MobileBar;
