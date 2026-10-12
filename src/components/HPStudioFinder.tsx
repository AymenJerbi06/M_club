import { contact } from "./mclubData";

const links = [
  { label: "About MClub", href: "/about" },
  { label: "Fitness floor", href: "/training" },
  { label: "Semi-Olympic pool", href: "/spa" },
  { label: "Kids academy", href: "/kids" },
  { label: "Events calendar", href: "/events" },
  { label: "Spa booking", href: contact.spaPhoneHref },
];

function Arrow() {
  return (
    <svg viewBox="0 0 44 20" aria-hidden="true">
      <path d="M1 10h39M31 2l9 8-9 8" />
    </svg>
  );
}

export default function HPStudioFinder() {
  return (
    <section className="hp-locator-section">
      <div className="hp-locator-grid">
        <div className="hp-locator-copy">
          <p className="hp-eyebrow">Gym in your city</p>
          <h2 className="hp-section-title">Find your Club</h2>
          <p>
            Discover MClub Fitness & Spa in Sfax: strength training, coached classes, spa recovery,
            semi-Olympic swimming, kids activities and personal coaching in one premium destination.
          </p>
          <div className="hp-city-pills">
            {links.map((link) => (
              <a href={link.href} className="hp-city-pill" key={link.label}>
                <span>{link.label}</span>
                <Arrow />
              </a>
            ))}
          </div>
        </div>
        <div className="hp-locator-image" aria-label="MClub facility image" />
      </div>
    </section>
  );
}
