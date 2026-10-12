export default function GGHouseOfLegends() {
  const benefits = [
    "Professional gym, pool, spa, kids academy, EMS, basketball, and martial arts in one location.",
    "More than 20 coaches across fitness, aquatics, wellness, gymnastics, dance, and nutrition.",
    "Classes for all levels, from complete beginners to competitive athletes.",
    "Body composition testing, nutrition guidance, and personal coaching available.",
    "Community events, competitions, camps, and special training nights throughout the year.",
  ];

  return (
    <section className="house-section" style={{ "--house-image": "url(/mclub/adult-community.jpg)" } as React.CSSProperties}>
      <div className="section-shell house-layout">
        <div>
          <p className="section-kicker">What makes M Club special</p>
          <h2 className="mega-title">
            <span>Always</span>
            <span>The</span>
            <span>Family</span>
          </h2>
        </div>

        <article className="light-price-card">
          <h3>Toujours la famille</h3>
          <div className="promo-price">
            <span className="price-lead">One club</span>
            <span className="price-amount">All ages</span>
            <span className="price-period">all levels</span>
          </div>
          <ul className="feature-list">
            {benefits.map((benefit) => (
              <li key={benefit}>{benefit}</li>
            ))}
          </ul>
          <a className="btn btn-primary" href="/membership">
            Sign Up Now
          </a>
        </article>
      </div>
    </section>
  );
}
