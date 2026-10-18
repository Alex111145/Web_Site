import Marquee from "../components/Marquee/Marquee";
import { listProyek } from "../data";

const Projects = ({ onSelect }) => (
  <section id="project" className="section">
    <div className="wrap">
      <header data-reveal className="mb-10 flex flex-col gap-5 md:mb-14 md:flex-row md:items-end md:justify-between">
        <div>
          <p className="eyebrow">05 — Projects</p>
          <h2 className="h-section mt-4">Selected <em>projects</em></h2>
        </div>
        <div className="md:text-right">
          <p className="font-mono text-[12.5px] uppercase tracking-wide text-muted">{listProyek.length} projects</p>
          <p className="mt-1 text-sm text-muted">Tap a card for details</p>
        </div>
      </header>
    </div>
    <div data-reveal style={{ "--reveal-delay": "100ms" }} className="wrap">
      <Marquee
        items={listProyek}
        rows={2}
        fullRows
        secondsPerItem={5}
        itemWidth="21rem"
        renderItem={(project, { isClone }) => (
          <button
            type="button"
            tabIndex={isClone ? -1 : 0}
            onClick={() => onSelect(project)}
            className="card card-hover group flex w-full cursor-pointer flex-col overflow-hidden text-left"
          >
            <span className="block aspect-[16/10] w-full overflow-hidden bg-paper-2">
              <img
                src={project.image}
                alt={project.title}
                loading="lazy"
                className="h-full w-full object-cover transition-transform duration-500 ease-out group-hover:scale-[1.04]"
              />
            </span>
            <span className="flex flex-1 flex-col gap-2 p-4">
              <span className="flex items-center justify-between gap-3">
                <span className="h-2.5 w-2.5 rounded-full" style={{ background: project.borderColor }} aria-hidden="true" />
                <span className={`tag ${project.soon ? "tag-soon" : ""}`}>{project.soon ? "Soon..." : project.anno}</span>
              </span>
              <h3 className="font-display text-[1.3rem] font-normal leading-tight text-ink">{project.title}</h3>
              <span className="line-clamp-2 text-sm leading-relaxed text-muted">{project.subtitle}</span>
            </span>
          </button>
        )}
      />
    </div>
  </section>
);

export default Projects;
