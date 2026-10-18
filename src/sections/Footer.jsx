import { contacts } from "../contacts";
import { IconArrowDown, IconDownload } from "../components/ui/icons";

const navigate = [
  { href: "#top", label: "Home" },
  { href: "#about", label: "About Me" },
  { href: "#project", label: "Projects" },
  { href: "#contact", label: "Contact" },
];
const elsewhere = [
  { label: "GitHub", c: contacts.github },
  { label: "LinkedIn", c: contacts.linkedin },
  { label: "Email", c: contacts.email },
];

const linkCls = "inline-flex min-h-11 items-center text-on-night-muted transition-colors hover:text-on-night";

const Footer = ({ onDownloadCV }) => (
  <footer className="on-night bg-night text-on-night pb-28 pt-20 md:pb-10 md:pt-24">
    <div className="wrap">
      <div className="grid grid-cols-2 gap-x-6 gap-y-14 md:grid-cols-[1.6fr_1fr_1fr]">
        <div className="col-span-2 md:col-span-1">
          <p className="font-display text-[clamp(2.4rem,1.6rem+3vw,4rem)] font-light leading-none tracking-tight text-on-night">
            Alessio Gervasini
          </p>
          <p className="mt-5 max-w-sm text-on-night-muted">
            Master&apos;s student in Machine Learning · SUPSI, Lugano &amp; Zurich
          </p>
          <button type="button" onClick={onDownloadCV} className="btn btn-ghost mt-8">
            <IconDownload /> Download CV
          </button>
        </div>

        <nav aria-label="Footer">
          <h2 className="eyebrow !text-[12px]">Navigate</h2>
          <ul className="mt-4">
            {navigate.map((l) => (
              <li key={l.href}>
                <a href={l.href} className={linkCls}>{l.label}</a>
              </li>
            ))}
          </ul>
        </nav>

        <div>
          <h2 className="eyebrow !text-[12px]">Elsewhere</h2>
          <ul className="mt-4">
            {elsewhere.map(({ label, c }) => (
              <li key={label}>
                <a
                  href={c.href}
                  target={c.target}
                  rel={c.target === "_blank" ? "noopener noreferrer" : undefined}
                  className={linkCls}
                >
                  {label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="mt-16 flex flex-col gap-4 border-t border-white/10 pt-6 md:flex-row md:items-center md:justify-between">
        <p className="text-sm text-on-night-muted">© {new Date().getFullYear()} Alessio Gervasini</p>
        <p className="font-mono text-xs text-on-night-muted">From data noise to intelligent choices.</p>
        <a href="#top" className={`${linkCls} gap-2 text-sm`}>
          Back to top <IconArrowDown className="size-4 rotate-180" />
        </a>
      </div>
    </div>
  </footer>
);

export default Footer;
