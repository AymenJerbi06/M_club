import Link from "next/link";
import type { CSSProperties } from "react";
import { homeWorkflowCards, quickStats, testimonials, upcomingEvents } from "./mclubData";

function Arrow() {
  return (
    <svg viewBox="0 0 44 20" aria-hidden="true">
      <path d="M1 10h39M31 2l9 8-9 8" />
    </svg>
  );
}

export default function MClubHomeFlow() {
  return (
    <>
      <section className="workflow-stats-section">
        <div className="workflow-stats-grid">
          {quickStats.map((item) => (
            <article className="workflow-stat" key={item.label}>
              <strong>{item.value}</strong>
              <span>{item.label}</span>
            </article>
          ))}
        </div>
      </section>

      <section className="workflow-section workflow-section-light">
        <div className="workflow-container">
          <div className="hp-section-heading">
            <p className="hp-eyebrow">Start with what matters</p>
            <h2 className="hp-section-title">A club flow built around your week.</h2>
            <p className="hp-centered-copy">
              MClub is not only a training floor. It is a complete route from access choice to weekly classes,
              recovery, family programs and community events.
            </p>
          </div>

          <div className="workflow-card-grid">
            {homeWorkflowCards.map((card) => (
              <Link className="workflow-feature-card" href={card.href} key={card.title}>
                <span className="workflow-feature-media" style={{ "--workflow-image": `url(${card.image})` } as CSSProperties} />
                <span className="workflow-feature-copy">
                  <small>{card.label}</small>
                  <strong>{card.title}</strong>
                  <span>{card.copy}</span>
                  <em>
                    Explore
                    <Arrow />
                  </em>
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="workflow-section workflow-testimonial-section">
        <div className="workflow-container workflow-split-heading">
          <div>
            <p className="hp-eyebrow">Member rhythm</p>
            <h2 className="hp-section-title">Why people stay consistent.</h2>
          </div>
          <p>
            The workflow document calls for testimonials and trust markers on the homepage. These cards keep that
            layer light while the site gathers real member quotes.
          </p>
        </div>

        <div className="workflow-testimonial-rail" aria-label="MClub testimonials">
          {[...testimonials, ...testimonials].map((item, index) => (
            <article className="workflow-testimonial" key={`${item.name}-${index}`}>
              <p>{item.quote}</p>
              <strong>{item.name}</strong>
              <span>{item.role}</span>
            </article>
          ))}
        </div>
      </section>

      <section className="workflow-section workflow-events-preview">
        <div className="workflow-container">
          <div className="workflow-split-heading">
            <div>
              <p className="hp-eyebrow">Upcoming energy</p>
              <h2 className="hp-section-title">Events, galas and club moments.</h2>
            </div>
            <Link className="hp-city-pill workflow-heading-link" href="/events">
              <span>View events</span>
              <Arrow />
            </Link>
          </div>

          <div className="workflow-event-grid">
            {upcomingEvents.map((event) => (
              <Link className="workflow-event-card" href="/events" key={event.title}>
                <span className="workflow-event-image" style={{ "--workflow-image": `url(${event.image})` } as CSSProperties} />
                <span className="workflow-event-body">
                  <small>{event.category}</small>
                  <strong>
                    <b>{event.date}</b>
                    {event.title}
                  </strong>
                  <span>{event.copy}</span>
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
