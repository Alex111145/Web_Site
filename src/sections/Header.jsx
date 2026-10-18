import { useEffect, useState } from "react";
import { IconClose, IconDownload, IconMenu, IconMoon, IconSun } from "../components/ui/icons";

const links = [
  { id: "about", label: "About" },
  { id: "SolarDino", label: "SolarDino" },
  { id: "tools", label: "Tools" },
  { id: "certifications", label: "Certifications" },
  { id: "project", label: "Projects" },
  { id: "contact", label: "Contact" },
];

const Header = ({ onDownloadCV }) => {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("");
  const [dark, setDark] = useState(() => document.documentElement.dataset.theme === "dark");

  // Light/dark theme: data-theme on <html> (tokens in index.css), remembered across visits
  useEffect(() => {
    const root = document.documentElement;
    if (dark) root.dataset.theme = "dark";
    else delete root.dataset.theme;
    document.querySelector('meta[name="theme-color"]')?.setAttribute("content", dark ? "#101517" : "#F5F4EF");
    try {
      localStorage.setItem("theme", dark ? "dark" : "light");
    } catch {
      // storage blocked: the choice lasts until reload
    }
  }, [dark]);

  // Header background after a little scroll
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Active section: the one crossing the middle band of the viewport
  useEffect(() => {
    if (!("IntersectionObserver" in window)) return;
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) setActive(e.target.id);
        });
      },
      { rootMargin: "-45% 0px -50% 0px" }
    );
    links.forEach(({ id }) => {
      const el = document.getElementById(id);
      if (el) io.observe(el);
    });
    const top = document.getElementById("top");
    if (top) io.observe(top);
    return () => io.disconnect();
  }, []);

  // Esc closes, desktop resize closes, body scroll locked while open
  useEffect(() => {
    if (!open) return;
    const onKey = (e) => e.key === "Escape" && setOpen(false);
    const mq = window.matchMedia("(min-width: 1024px)");
    const onMq = () => mq.matches && setOpen(false);
    window.addEventListener("keydown", onKey);
    mq.addEventListener("change", onMq);
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", onKey);
      mq.removeEventListener("change", onMq);
      document.body.style.overflow = prev;
    };
  }, [open]);

  const solid = scrolled || open;

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 h-[68px] border-b transition-[background-color,border-color,backdrop-filter] duration-300 ${
        solid ? "bg-paper/85 backdrop-blur border-line" : "bg-transparent border-transparent"
      }`}
    >
      <div className="wrap flex h-full items-center justify-between gap-6">
        <a href="#top" className="flex items-baseline gap-3" onClick={() => setOpen(false)}>
          <span className="font-display text-[20px] leading-none text-ink tracking-tight">
            Alessio Gervasini
          </span>
          <span className="hidden font-mono text-[11px] uppercase tracking-[0.08em] text-muted sm:inline">
            ML · SUPSI
          </span>
        </a>

        <nav aria-label="Main" className="hidden lg:block">
          <ul className="flex items-center gap-8">
            {links.map(({ id, label }) => (
              <li key={id}>
                <a
                  href={`#${id}`}
                  aria-current={active === id ? "true" : undefined}
                  className={`relative inline-block py-2 text-[14.5px] transition-colors hover:text-ink after:absolute after:inset-x-0 after:bottom-0 after:h-px after:bg-accent after:origin-left after:transition-transform after:duration-300 ${
                    active === id ? "text-ink after:scale-x-100" : "text-ink-2 after:scale-x-0"
                  }`}
                >
                  {label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <div className="flex items-center gap-2">
          <button
            type="button"
            className="grid size-11 place-items-center rounded-full text-ink hover:bg-paper-2"
            aria-label={dark ? "Switch to light mode" : "Switch to dark mode"}
            title={dark ? "Light mode" : "Dark mode"}
            onClick={() => setDark((d) => !d)}
          >
            {dark ? <IconSun className="size-5" /> : <IconMoon className="size-5" />}
          </button>
          <button
            type="button"
            onClick={onDownloadCV}
            className="btn btn-primary hidden !min-h-10 !px-4 !text-[14px] md:inline-flex"
          >
            <IconDownload /> Download CV
          </button>
          <button
            type="button"
            className="grid size-11 place-items-center rounded-full text-ink hover:bg-paper-2 lg:hidden"
            aria-expanded={open}
            aria-controls="mobile-menu"
            aria-label={open ? "Close menu" : "Open menu"}
            onClick={() => setOpen((o) => !o)}
          >
            {open ? <IconClose className="size-6" /> : <IconMenu className="size-6" />}
          </button>
        </div>
      </div>

      {/* Mobile / tablet sheet */}
      <div
        id="mobile-menu"
        hidden={!open}
        className="absolute inset-x-0 top-full max-h-[calc(100dvh-68px)] overflow-y-auto border-b border-line bg-paper lg:hidden"
      >
        <nav aria-label="Mobile" className="wrap pb-8 pt-2">
          <ul>
            {links.map(({ id, label }) => (
              <li key={id} className="border-b border-line">
                <a
                  href={`#${id}`}
                  onClick={() => setOpen(false)}
                  aria-current={active === id ? "true" : undefined}
                  className={`flex min-h-14 items-center font-display text-[28px] font-light tracking-tight ${
                    active === id ? "text-accent" : "text-ink"
                  }`}
                >
                  {label}
                </a>
              </li>
            ))}
          </ul>
          <button
            type="button"
            className="btn btn-primary mt-6 w-full"
            onClick={() => {
              setOpen(false);
              onDownloadCV?.();
            }}
          >
            <IconDownload /> Download CV
          </button>
        </nav>
      </div>
    </header>
  );
};

export default Header;
