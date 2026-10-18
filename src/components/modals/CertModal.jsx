import { useState } from "react";
import Modal from "../ui/Modal";
import Lightbox from "./Lightbox";
import { IconExpand } from "../ui/icons";

const CertModal = ({ isOpen, onClose, cert }) => {
  const [zoom, setZoom] = useState(false);
  if (!cert) return null;
  const alt = `${cert.nama} certificate`;

  return (
    <>
      <Modal
        isOpen={isOpen}
        onClose={onClose}
        size="xl"
        kicker={`${cert.ket} · ${cert.certImage ? cert.anno : "Soon..."}`}
        title={cert.nama}
      >
        {cert.desc && <p className="lead max-w-3xl">{cert.desc}</p>}
        <div className="mt-6 bg-paper border border-line rounded-[14px] p-3 sm:p-5">
          {cert.certImage ? (
            <button
              type="button"
              onClick={() => setZoom(true)}
              className="group relative block w-full cursor-zoom-in"
            >
              <img
                src={cert.certImage}
                alt={alt}
                className="mx-auto w-auto max-w-full max-h-[62vh] object-contain rounded-md shadow-[0_8px_24px_-14px_rgba(20,23,26,0.4)]"
              />
              <span className="absolute right-2 bottom-2 inline-flex items-center gap-1.5 h-8 px-3 rounded-full bg-ink/85 text-paper text-[12px] font-semibold group-hover:bg-ink transition-colors">
                <IconExpand className="w-4 h-4" /> View full size
              </span>
            </button>
          ) : (
            <div className="min-h-[260px] grid place-content-center gap-1 text-center rounded-lg border border-dashed border-line">
              <p className="font-mono text-2xl text-ink">Soon...</p>
              <p className="text-sm text-muted">Certificate not yet uploaded</p>
            </div>
          )}
        </div>
      </Modal>
      {zoom && cert.certImage && <Lightbox src={cert.certImage} alt={alt} onClose={() => setZoom(false)} />}
    </>
  );
};

export default CertModal;
