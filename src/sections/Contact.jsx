import { contacts, contactOrder } from "../contacts";
import { IconMail, IconPhone, IconLinkedin, IconGithub, IconArrowRight } from "../components/ui/icons";

const icons = { email: IconMail, phone: IconPhone, linkedin: IconLinkedin, github: IconGithub };

const Contact = ({ onSelect }) => (
  <section id="contact" className="section border-t border-line">
    <div className="wrap grid gap-10 lg:grid-cols-12 lg:gap-16">
      <div data-reveal className="lg:col-span-5">
        <p className="eyebrow">06 — Contact</p>
        <h2 className="h-section mt-6">
          Contact <em>me</em>
        </h2>
        <p className="mt-5 max-w-sm text-muted">Feel free to reach out through any of these platforms</p>
      </div>

      <ul className="border-t border-line lg:col-span-7">
        {contactOrder.map((type, i) => {
          const c = contacts[type];
          const Icon = icons[type];
          return (
            <li
              key={type}
              data-reveal
              style={{ "--reveal-delay": `${i * 70}ms` }}
              className="border-b border-line"
            >
              <button
                type="button"
                onClick={() => onSelect(type)}
                aria-label={`${c.title}: ${c.value} — open details`}
                className="group flex min-h-[72px] w-full cursor-pointer items-center gap-4 px-2 py-4 text-left transition-colors hover:bg-card sm:px-4"
              >
                <span className="grid size-11 flex-none place-items-center rounded-full border border-line bg-paper text-ink">
                  <Icon className="size-5" aria-hidden="true" />
                </span>
                <span className="min-w-0 flex-1">
                  <span className="block font-semibold text-ink">{c.title}</span>
                  <span className="block break-all font-mono text-[13px] text-muted [overflow-wrap:anywhere]">
                    {c.value}
                  </span>
                </span>
                <IconArrowRight
                  className="size-5 flex-none text-muted transition-transform duration-300 group-hover:translate-x-1 group-hover:text-accent"
                  aria-hidden="true"
                />
              </button>
            </li>
          );
        })}
      </ul>
    </div>
  </section>
);

export default Contact;
