import Marquee from "../components/Marquee/Marquee";
import { listCertifications } from "../data";

const acquired = listCertifications.filter((c) => c.certImage).length;
const inProgress = listCertifications.length - acquired;

const Certifications = ({ onSelect }) => (
  <section id="certifications" className="section bg-paper-2">
    <div className="wrap">
      <header data-reveal className="mb-10 flex flex-col gap-5 md:mb-14 md:flex-row md:items-end md:justify-between">
        <div>
          <p className="eyebrow">04 — Certifications</p>
          <h2 className="h-section mt-4">Certifications</h2>
        </div>
        <div className="md:text-right">
          <p className="font-mono text-[12.5px] uppercase tracking-wide text-muted">
            {acquired} acquired · {inProgress} in progress
          </p>
          <p className="mt-1 text-sm text-muted">Tap a card for details</p>
        </div>
      </header>
    </div>
    <div data-reveal style={{ "--reveal-delay": "100ms" }} className="wrap">
      <Marquee
        items={listCertifications}
        rows={4}
        secondsPerItem={10}
        itemWidth="19rem"
        renderItem={(cert, { isClone }) => (
          <button
            type="button"
            tabIndex={isClone ? -1 : 0}
            onClick={() => onSelect(cert)}
            className="card card-hover flex h-[96px] w-full cursor-pointer items-center gap-3.5 px-3.5 text-left"
          >
            <span className="logo-tile">
              <img src={cert.gambar} alt={cert.nama} loading="lazy" />
            </span>
            <span className="min-w-0 flex-1">
              <span className="block text-[15px] font-semibold leading-snug text-ink line-clamp-2">{cert.nama}</span>
              <span className="block truncate text-[13px] text-muted">{cert.ket}</span>
              <span className={`tag mt-1.5 ${cert.date ? "" : "tag-soon"}`}>{cert.date ? cert.anno : "Soon..."}</span>
            </span>
          </button>
        )}
      />
    </div>
  </section>
);

export default Certifications;
