export default function GGMakeHistory() {
  return (
    <section className="split-section accent" id="training">
      <div className="split-content">
        <p className="section-kicker">One-stop wellness destination</p>
        <h2 className="mega-title">
          <span>Train</span>
          <span>Hard,</span>
          <span>Recover</span>
          <span>Right</span>
        </h2>
        <p className="body-copy">
          M Club brings the full training day under one roof: strength work, CrossFit and Hybrid sessions, cardio,
          group classes, swimming, spa recovery, and coaching support.
        </p>
        <p className="body-copy">
          <strong>Toujours la famille.</strong> Members are treated like part of the club family, from first tour to
          competition day.
        </p>
        <div className="split-actions">
          <a className="btn btn-primary" href="/training">
            Explore the Club
          </a>
        </div>
      </div>

      <div className="split-media" style={{ "--split-image": "url(/mclub/group-energy.jpg)" } as React.CSSProperties} aria-label="M Club group training community" />
    </section>
  );
}
