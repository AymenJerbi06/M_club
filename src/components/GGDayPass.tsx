export default function GGDayPass() {
  return (
    <section className="split-section white">
      <div className="split-media" style={{ "--split-image": "url(/mclub/facility-map.jpg)" } as React.CSSProperties} aria-label="M Club facilities collage" />

      <div className="split-content">
        <p className="section-kicker reveal">Fitness, pool, spa, kids academy</p>
        <h2 className="section-title reveal reveal-delay-1">
          <span>Visit</span>
          <span>The Club</span>
        </h2>
        <p className="body-copy reveal reveal-delay-2">
          Come see the training floor, semi-Olympic pool, hammam and spa, class studios, sports court, and dedicated
          kids activity spaces before choosing your membership.
        </p>
        <p className="body-copy reveal reveal-delay-3">
          Ask the team about Fitness, Pool, or Global access, class schedules, personal coaching, swimming academy,
          and current promotions.
        </p>
        <div className="split-actions reveal reveal-delay-4">
          <a className="btn btn-primary" href="tel:+21674217600">
            Call Reception
          </a>
          <a className="btn btn-outline" href="tel:+21620195296">
            Call Spa
          </a>
        </div>
      </div>
    </section>
  );
}
