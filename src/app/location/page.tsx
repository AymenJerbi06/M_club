import type { CSSProperties } from "react";
import SiteFrame from "@/components/SiteFrame";
import { contact } from "@/components/mclubData";
import ClubSymbol from "@/components/ClubSymbol";

export default function LocationPage() {
  const mapSrc = `https://www.google.com/maps?q=${encodeURIComponent(contact.mapQuery)}&output=embed`;

  return (
    <SiteFrame innerPage pageStyle="location">
      <section className="page-hero" style={{ "--page-image": "url(/mclub/facility-map.jpg)" } as CSSProperties}>
        <div className="section-shell page-hero-content">
          <p className="section-kicker">Location</p>
          <h1 className="page-title">
            <span>Find</span>
            <span>M Club</span>
          </h1>
          <p className="body-copy">
            {contact.address}. Reception, spa reservations, and membership questions are all one call away.
          </p>
        </div>
      </section>

      <section className="workflow-section story-section location-arrival page-closing">
        <div className="workflow-container workflow-contact-grid">
          <div className="workflow-contact-card">
            <span className="club-symbol"><ClubSymbol name="location" /></span>
            <p className="hp-eyebrow">Directions</p>
            <h2 className="hp-section-title">Route Lafrane, Sfax.</h2>
            <ul className="workflow-check-list">
              <li><ClubSymbol name="location" />{contact.address}</li>
              <li><ClubSymbol name="phone" /><a href={contact.phoneHref}>Reception: {contact.phone}</a></li>
              <li><ClubSymbol name="recovery" /><a href={contact.spaPhoneHref}>Spa booking: {contact.spaPhone}</a></li>
              <li><ClubSymbol name="clock" />Open from 06:30 daily. Morning fitness runs 06:30-14:00.</li>
            </ul>
            <a className="hp-dark-button" href="/contact">
              Contact the club
            </a>
          </div>

          <iframe className="workflow-inline-map" title="MClub location map" src={mapSrc} loading="lazy" />
        </div>
      </section>
    </SiteFrame>
  );
}
