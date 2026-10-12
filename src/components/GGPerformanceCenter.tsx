export default function GGPerformanceCenter() {
  return (
    <section className="split-section dark" id="spa">
      <div className="split-media" style={{ "--split-image": "url(/mclub/aqua-dynamique.jpg)" } as React.CSSProperties} aria-label="Aquatic training at M Club" />
      <div className="split-content">
        <p className="section-kicker reveal">Aquatic centre and recovery</p>
        <h2 className="section-title reveal reveal-delay-1">
          <span>Pool</span>
          <span>Spa</span>
          <span>Wellness</span>
        </h2>
        <p className="body-copy reveal reveal-delay-2">
          The semi-Olympic pool hosts Aquagym, Aquabike, WatFit, Aqua Dynamique, free swim, and swimming academy.
          After training, the spa offers hammam, vaporium, gommage, masks, massage, brushing, and a calm tisane break.
        </p>
        <div className="split-actions reveal reveal-delay-3">
          <a className="btn btn-primary" href="tel:+21620195296">
            Reserve Spa
          </a>
        </div>
      </div>
    </section>
  );
}
