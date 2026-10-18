import { useEffect, useId, useRef, useState } from "react";
import { createPortal } from "react-dom";
import { IconClose } from "./icons";

const SIZES = {
  sm: "max-w-md",
  md: "max-w-xl",
  lg: "max-w-3xl",
  xl: "max-w-5xl",
};

/**
 * Accessible dialog shared by every modal of the site.
 * Esc / backdrop click / close button close it, focus goes into the dialog
 * on open and back to the opener on close, page scroll is locked meanwhile.
 */
const Modal = ({ isOpen, onClose, title, kicker, size = "md", children }) => {
  const [closing, setClosing] = useState(false);
  const panelRef = useRef(null);
  const openerRef = useRef(null);
  const titleId = useId();

  const requestClose = () => {
    if (closing) return;
    setClosing(true);
    setTimeout(() => {
      setClosing(false);
      onClose();
    }, 180);
  };

  useEffect(() => {
    if (!isOpen) return;
    openerRef.current = document.activeElement;
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    panelRef.current?.focus();

    const onKey = (e) => {
      if (e.key === "Escape") {
        e.stopPropagation();
        requestClose();
      }
      if (e.key === "Tab" && panelRef.current) {
        const nodes = panelRef.current.querySelectorAll(
          'a[href], button:not([disabled]), [tabindex]:not([tabindex="-1"])'
        );
        if (!nodes.length) return;
        const first = nodes[0];
        const last = nodes[nodes.length - 1];
        if (e.shiftKey && document.activeElement === first) {
          e.preventDefault();
          last.focus();
        } else if (!e.shiftKey && document.activeElement === last) {
          e.preventDefault();
          first.focus();
        }
      }
    };
    document.addEventListener("keydown", onKey);
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = prevOverflow;
      openerRef.current?.focus?.();
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isOpen]);

  if (!isOpen) return null;

  return createPortal(
    <div
      className={`modal-root fixed inset-0 z-[100] flex items-end sm:items-center justify-center p-0 sm:p-6 ${closing ? "is-closing" : ""}`}
      onMouseDown={(e) => {
        // solo click sullo sfondo (i portal annidati, es. lightbox, fanno bubbling React fin qui)
        if (e.currentTarget.contains(e.target) && !panelRef.current?.contains(e.target)) requestClose();
      }}
    >
      <div className="modal-backdrop absolute inset-0 bg-ink/55 backdrop-blur-[2px]" aria-hidden="true" />
      <div
        ref={panelRef}
        role="dialog"
        aria-modal="true"
        aria-labelledby={title ? titleId : undefined}
        tabIndex={-1}
        className={`modal-panel relative w-full ${SIZES[size] || SIZES.md} max-h-[92vh] overflow-y-auto bg-card text-ink-2 rounded-t-3xl sm:rounded-3xl shadow-[0_30px_80px_-30px_rgba(0,0,0,0.5)] outline-none`}
      >
        <div className="sticky top-0 z-10 flex items-start justify-between gap-4 px-6 pt-5 pb-4 sm:px-8 sm:pt-7 bg-card/95 backdrop-blur border-b border-line">
          <div className="min-w-0">
            {kicker && <p className="font-mono text-[12px] uppercase tracking-[0.08em] text-muted mb-1">{kicker}</p>}
            {title && (
              <h2 id={titleId} className="font-display text-[1.65rem] leading-tight tracking-[-0.01em] text-ink">
                {title}
              </h2>
            )}
          </div>
          <button
            type="button"
            onClick={requestClose}
            className="shrink-0 grid place-items-center w-10 h-10 rounded-full border border-line text-ink hover:bg-paper transition-colors cursor-pointer"
            aria-label="Close"
          >
            <IconClose className="w-[18px] h-[18px]" />
          </button>
        </div>
        <div className="px-6 py-6 sm:px-8 sm:py-7">{children}</div>
      </div>
      <style>{`
        .modal-root .modal-backdrop { animation: modalFade .22s ease-out both; }
        .modal-root .modal-panel { animation: modalIn .32s cubic-bezier(.22,1,.36,1) both; }
        .modal-root.is-closing .modal-backdrop { animation: modalFadeOut .18s ease-in both; }
        .modal-root.is-closing .modal-panel { animation: modalOut .18s ease-in both; }
        @keyframes modalFade { from { opacity: 0 } to { opacity: 1 } }
        @keyframes modalFadeOut { from { opacity: 1 } to { opacity: 0 } }
        @keyframes modalIn { from { opacity: 0; transform: translateY(16px) scale(.985) } to { opacity: 1; transform: none } }
        @keyframes modalOut { from { opacity: 1; transform: none } to { opacity: 0; transform: translateY(10px) scale(.99) } }
      `}</style>
    </div>,
    document.body
  );
};

export default Modal;
