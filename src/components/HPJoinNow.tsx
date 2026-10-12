import Link from "next/link";
import { contact } from "./mclubData";
import ResponsiveVideo from "./ResponsiveVideo";

const routineFacts = [
  "Fitness, Piscine, Spa et Hammem, classes, kids activities and cantine in one club.",
  "Reception guides memberships, trial days and the access path that fits your routine.",
  `Spa booking is available at ${contact.spaPhone}; reception is available at ${contact.phone}.`,
];

function Arrow() {
  return (
    <svg viewBox="0 0 44 20" aria-hidden="true">
      <path d="M1 10h39M31 2l9 8-9 8" />
    </svg>
  );
}

export default function HPJoinNow() {
  return (
    <section className="hp-routine-section" id="join-mclub">
      <div className="hp-info-shell">
        <div className="hp-info-media">
          <ResponsiveVideo src="/mclub/media/join-club-preview.mp4" poster="/mclub/media/class-community.jpg" />
        </div>

        <div className="hp-info-copy">
          <p className="hp-eyebrow">Your club, your routine</p>
          <h2>Join a place that keeps you coming back.</h2>
          <p>
            MClub is built for the full week: train hard, swim, recover, eat something fresh, bring the kids,
            and follow a plan that actually evolves with your body.
          </p>

          <ul className="hp-info-list">
            {routineFacts.map((fact) => (
              <li key={fact}>{fact}</li>
            ))}
          </ul>

          <Link className="hp-dark-button hp-info-button" href="/membership">
            Join now
            <Arrow />
          </Link>
        </div>
      </div>
    </section>
  );
}
