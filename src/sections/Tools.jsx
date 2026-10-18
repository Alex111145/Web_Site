import Marquee from "../components/Marquee/Marquee";
import { listTools } from "../data";

const inUse = listTools.filter((t) => t.done).length;

const Tools = ({ onSelect }) => (
  <section id="tools" className="section">
    <div className="wrap">
      <header data-reveal className="mb-10 flex flex-col gap-5 md:mb-14 md:flex-row md:items-end md:justify-between">
        <div>
          <p className="eyebrow">03 — Toolbox</p>
          <h2 className="h-section mt-4">Tools &amp; <em>technologies</em></h2>
        </div>
        <div className="md:text-right">
          <p className="font-mono text-[12.5px] uppercase tracking-wide text-muted">
            {listTools.length} tools · {inUse} in use
          </p>
          <p className="mt-1 text-sm text-muted">Tap a card for details</p>
        </div>
      </header>
    </div>
    <div data-reveal style={{ "--reveal-delay": "100ms" }} className="wrap">
      <Marquee
        items={listTools}
        rows={6}
        itemWidth="18.5rem"
        secondsPerItem={4}
        renderItem={(tool, { isClone }) => (
          <button
            type="button"
            tabIndex={isClone ? -1 : 0}
            onClick={() => onSelect(tool)}
            className="card card-hover flex h-[84px] w-full cursor-pointer items-center gap-3.5 px-3.5 text-left"
          >
            <span className="logo-tile">
              <img src={tool.gambar} alt={tool.nama} loading="lazy" />
            </span>
            <span className="min-w-0 flex-1">
              <span className="block text-[15px] font-semibold leading-snug text-ink line-clamp-2 [overflow-wrap:anywhere]">{tool.nama}</span>
              <span className="mt-0.5 flex items-center gap-2 text-[13px] text-muted">
                <span className="truncate">{tool.ket}</span>
                {!tool.done && <span className="tag tag-soon !h-5 !px-2 !text-[10.5px] shrink-0">Soon...</span>}
              </span>
            </span>
          </button>
        )}
      />
    </div>
  </section>
);

export default Tools;
