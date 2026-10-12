import { accessLevels, pricingTiers as tiers } from "./mclubData";

export default function GGPricing() {
  return (
    <section className="pricing-section" id="pricing">
      <div className="section-shell">
        <p className="section-kicker">Membership</p>
        <h2 className="section-title">
          <span>Fitness</span>
          <span>Pool</span>
          <span>Global</span>
        </h2>

        <div className="pricing-grid">
          {tiers.map((tier) => (
            <article className={`tier-card ${tier.featured ? "featured" : ""}`} key={tier.name}>
              <div>
                {tier.featured ? <span className="tier-badge">Most Popular</span> : null}
                <h3>{tier.name}</h3>
                <p className="tier-price">
                  From <span>{tier.price}</span> per month
                </p>
                <p className="tier-note">{tier.note}</p>
              </div>
              <a className={`btn ${tier.featured ? "btn-primary" : "btn-outline"}`} href="/location">
                Ask Reception
              </a>
            </article>
          ))}
        </div>

        <div className="pricing-accordion" aria-label="Membership access levels">
          {accessLevels.map((item) => (
            <details key={item.title}>
              <summary>{item.title}</summary>
              <p>{item.copy}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
