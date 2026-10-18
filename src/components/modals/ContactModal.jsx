import { useEffect, useRef, useState } from "react";
import Modal from "../ui/Modal";
import { contacts } from "../../contacts";
import { IconMail, IconPhone, IconGithub, IconLinkedin, IconExternal, IconCopy, IconCheck } from "../ui/icons";

const ICONS = { email: IconMail, phone: IconPhone, github: IconGithub, linkedin: IconLinkedin };

const ContactModal = ({ isOpen, onClose, type }) => {
  const [copied, setCopied] = useState(false);
  const timer = useRef(null);
  useEffect(() => () => clearTimeout(timer.current), []);

  const config = type ? contacts[type] : null;
  if (!config) return null;
  const Icon = ICONS[type] || IconMail;

  const copy = async () => {
    try {
      await navigator.clipboard.writeText(config.value);
      setCopied(true);
      clearTimeout(timer.current);
      timer.current = setTimeout(() => setCopied(false), 1500);
    } catch {
      /* clipboard unavailable: ignore */
    }
  };

  return (
    <Modal isOpen={isOpen} onClose={onClose} size="sm" kicker="Contact" title={config.title}>
      <div className="flex flex-col items-center text-center gap-4">
        <div className="grid place-items-center w-14 h-14 rounded-full bg-accent-soft text-accent-ink">
          <Icon className="w-6 h-6" />
        </div>
        <p className="text-[15px] text-muted leading-relaxed">{config.description}</p>
        <div className="w-full flex items-center gap-2 bg-paper border border-line rounded-xl pl-4 pr-1.5 py-1.5">
          <code className="flex-1 min-w-0 text-left font-mono text-[13.5px] text-ink break-all">{config.value}</code>
          <button
            type="button"
            onClick={copy}
            aria-label={copied ? "Copied" : `Copy ${config.title}`}
            className="shrink-0 inline-flex items-center gap-1.5 h-10 min-w-10 px-2.5 justify-center rounded-lg text-ink hover:bg-card transition-colors cursor-pointer"
          >
            {copied ? <IconCheck className="w-[18px] h-[18px] text-accent" /> : <IconCopy className="w-[18px] h-[18px]" />}
            {copied && <span className="text-[12px] font-semibold text-accent-ink">Copied</span>}
          </button>
        </div>
        <span className="sr-only" aria-live="polite">{copied ? "Copied to clipboard" : ""}</span>
        <a
          href={config.href}
          target={config.target}
          rel={config.target === "_blank" ? "noopener noreferrer" : undefined}
          onClick={onClose}
          className="btn btn-accent w-full"
        >
          <IconExternal /> {config.actionLabel}
        </a>
      </div>
    </Modal>
  );
};

export default ContactModal;
