import type { CSSProperties } from "react";
import Link from "next/link";
import SiteFrame from "@/components/SiteFrame";
import { facilities } from "@/components/mclubData";
import ClubSymbol from "@/components/ClubSymbol";

export default function FacilitiesPage() {
  return (
    <SiteFrame innerPage pageStyle="facilities">
      <section className="page-hero" style={{ "--page-image": "url(/mclub/facility-map.jpg)" } as CSSProperties}>
        <div className="section-shell page-hero-content">
          <p className="section-kicker">Facilities</p>
          <h1 className="page-title">
            <span>One</span>
            <span>Complete</span>
            <span>Club</span>
          </h1>
          <p className="body-copy">
            Gym floor, CrossFit and Hybrid training, semi-Olympic pool, spa, sports halls and kids spaces, all
            connected by the same MClub membership journey.
          </p>
        </div>
      </section>

      <section className="workflow-section story-section facilities-directory">
        <div className="workflow-container">
          <div className="hp-section-heading">
            <span className="club-symbol"><ClubSymbol name="location" /></span>
            <p className="hp-eyebrow">Explore the club</p>
            <h2 className="hp-section-title">Facilities made for training, recovery and family routines.</h2>
          </div>

          <div className="workflow-card-grid three">
            {facilities.map((facility) => (
              <Link
                className="workflow-feature-card"
                href={facility.href}
                id={facility.title === "Cantine" ? "cantine" : undefined}
                key={facility.title}
              >
                <span className="workflow-feature-media" style={{ "--workflow-image": `url(${facility.image})` } as CSSProperties} />
                <span className="workflow-feature-copy">
                  <small>Facility</small>
                  <strong>{facility.title}</strong>
                  <span>{facility.copy}</span>
                  <em>
                    View area
                    <ClubSymbol name="arrow" />
                  </em>
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="workflow-section story-section facilities-routes page-closing">
        <div className="workflow-container workflow-two-column">
          <div>
            <span className="club-symbol"><ClubSymbol name="target" /></span>
            <p className="hp-eyebrow light">How it works</p>
            <h2 className="hp-section-title">Use the club by objective, not by room.</h2>
          </div>
          <div className="workflow-stack">
            <article>
              <strong>Performance</strong>
              <p>Strength floor, CrossFit, Hybrid training, sport coaching and body composition tracking.</p>
            </article>
            <article>
              <strong>Recovery</strong>
              <p>Pool movement, hammam, vaporium, gommage, massage, spa packs and wellness lounge routines.</p>
            </article>
            <article>
              <strong>Family</strong>
              <p>Kids swimming, Baby Gym, gymnastics, summer camp, martial arts, dance and community galas.</p>
            </article>
            <article>
              <strong>Club life</strong>
              <p>Cantine coffee, healthy plates, member celebrations, brand collaborations and awareness events.</p>
            </article>
          </div>
        </div>
      </section>
    </SiteFrame>
  );
}
