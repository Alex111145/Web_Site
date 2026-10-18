import { solarDinoData } from "../data";
import { IconArrowUpRight } from "../components/ui/icons";

const facts = [
  { label: "Technology", text: "Thermal AI — faulty & dirty modules" },
  { label: "Model", text: "B2B SaaS + on-demand B2C" },
  { label: "Network", text: "100+ collaborators" },
];

const SolarDino = () => {
  const [role, name] = solarDinoData.title.split(": ");
  const paragraphs = solarDinoData.fullDescription.split("\n");

  return (
    <section id="SolarDino" className="section border-y border-line bg-card">
      <div className="wrap">
        <div data-reveal className="max-w-3xl">
          <p className="eyebrow">02 — Venture</p>
          <p className="mt-6 font-mono text-[13px] uppercase tracking-[0.08em] text-muted">
            {role.replace(" - ", " · ")}
          </p>
          <h2 className="h-section mt-2">{name}</h2>
          <p className="mt-4 text-lg text-accent">AI for Drone Inspection, Mapping and 3D Modeling</p>
        </div>

        <div className="mt-12 grid gap-10 lg:mt-16 lg:grid-cols-12 lg:gap-16">
          <div data-reveal className="lg:col-span-5">
            <div className="relative grid aspect-square place-items-center rounded-[20px] border border-line bg-paper">
              <span className="absolute left-4 top-4 font-mono text-[11px] uppercase tracking-[0.08em] text-muted">
                solardino.it
              </span>
              <span className="absolute bottom-4 right-4 font-mono text-[11px] uppercase tracking-[0.08em] text-muted">
                Co-founded
              </span>
              <img
                src={solarDinoData.image}
                alt="SolarDino logo"
                className="h-auto w-[70%] max-w-[360px] object-contain"
              />
            </div>
          </div>

          <div className="lg:col-span-7">
            <div className="space-y-5">
              {paragraphs.map((p, i) => (
                <p
                  key={i}
                  data-reveal
                  style={{ "--reveal-delay": `${i * 100}ms` }}
                  className={i === 0 ? "text-lg leading-relaxed text-ink" : "leading-relaxed text-ink-2"}
                >
                  {p}
                </p>
              ))}
            </div>

            <dl data-reveal className="mt-10 grid border-y border-line sm:grid-cols-3 sm:divide-x sm:divide-line">
              {facts.map((f) => (
                <div
                  key={f.label}
                  className="border-b border-line py-5 last:border-b-0 sm:border-b-0 sm:px-5 sm:first:pl-0 sm:last:pr-0"
                >
                  <dt className="font-mono text-[11px] uppercase tracking-[0.08em] text-accent">{f.label}</dt>
                  <dd className="mt-2 text-[15px] font-semibold leading-snug text-ink">{f.text}</dd>
                </div>
              ))}
            </dl>

            <div data-reveal className="mt-10">
              <a href={solarDinoData.url} target="_blank" rel="noopener noreferrer" className="btn btn-accent">
                Visit the website
                <IconArrowUpRight aria-hidden="true" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SolarDino;
