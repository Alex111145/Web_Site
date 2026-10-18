import { useEffect, useRef } from "react";
import { createPortal } from "react-dom";
import { IconClose } from "../ui/icons";

// Fullscreen image viewer. Esc closes only this layer (capture phase, before Modal's listener).
const Lightbox = ({ src, alt, onClose }) => {
  const closeRef = useRef(null);

  useEffect(() => {
    const opener = document.activeElement;
    closeRef.current?.focus();
    const onKey = (e) => {
      if (e.key === "Escape") {
        e.stopPropagation();
        onClose();
      } else if (e.key === "Tab") {
        e.preventDefault();
        e.stopPropagation();
        closeRef.current?.focus();
      }
    };
    window.addEventListener("keydown", onKey, true);
    return () => {
      window.removeEventListener("keydown", onKey, true);
      opener?.focus?.();
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return createPortal(
    <div
      role="dialog"
      aria-modal="true"
      aria-label={alt}
      className="fixed inset-0 z-[150] grid place-items-center bg-night/95 p-4 sm:p-8"
      onMouseDown={(e) => {
        if (e.target === e.currentTarget) onClose();
      }}
    >
      <button
        ref={closeRef}
        type="button"
        onClick={onClose}
        aria-label="Close full size view"
        className="absolute top-4 right-4 grid place-items-center w-11 h-11 rounded-full border border-white/25 text-on-night hover:bg-white/10 transition-colors cursor-pointer"
      >
        <IconClose className="w-5 h-5" />
      </button>
      <img
        src={src}
        alt={alt}
        className="max-w-full max-h-full object-contain rounded-lg"
        onMouseDown={(e) => e.stopPropagation()}
      />
    </div>,
    document.body
  );
};

export default Lightbox;
