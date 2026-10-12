import type { CSSProperties } from "react";
import SiteFrame from "@/components/SiteFrame";
import { contact } from "@/components/mclubData";
import ClubSymbol from "@/components/ClubSymbol";

export default function ContactPage() {
  const mapSrc = `https://www.google.com/maps?q=${encodeURIComponent(contact.mapQuery)}&output=embed`;

  return (
    <SiteFrame innerPage pageStyle="contact">
      <section className="page-hero" style={{ "--page-image": "url(/mclub/facility-map.jpg)" } as CSSProperties}>
        <div className="section-shell page-hero-content">
          <p className="section-kicker">Contact</p>
          <h1 className="page-title">
            <span>Visit</span>
            <span>MClub</span>
          </h1>
          <p className="body-copy">
            Reception, spa reservations, membership guidance and trial-day questions are all available from the same
            club contact path.
          </p>
        </div>
      </section>

      <section className="workflow-section story-section contact-reception">
        <div className="workflow-container workflow-contact-grid">
          <div className="workflow-contact-card">
            <span className="club-symbol"><ClubSymbol name="phone" /></span>
            <p className="hp-eyebrow">Reception</p>
            <h2 className="hp-section-title">Talk to the club.</h2>
            <ul className="workflow-check-list">
              <li>
                <ClubSymbol name="phone" />
                <strong>Reception:</strong> <a href={contact.phoneHref}>{contact.phone}</a>
              </li>
              <li>
                <ClubSymbol name="recovery" />
                <strong>Spa booking:</strong> <a href={contact.spaPhoneHref}>{contact.spaPhone}</a>
              </li>
              <li>
                <ClubSymbol name="location" />
                <strong>Address:</strong> {contact.address}
              </li>
              <li>
                <ClubSymbol name="clock" />
                <strong>Opening rhythm:</strong> From 06:30 daily, with evening classes from 18:30.
              </li>
            </ul>
            <a className="hp-dark-button" href={contact.instagram} target="_blank" rel="noreferrer">
              Instagram
            </a>
          </div>

          <form className="workflow-form">
            <label>
              Name
              <input type="text" name="name" placeholder="Your name" />
            </label>
            <label>
              Phone
              <input type="tel" name="phone" placeholder="Your phone number" />
            </label>
            <label>
              Interest
              <select name="interest" defaultValue="Membership">
                <option>Membership</option>
                <option>Trial day</option>
                <option>Spa booking</option>
                <option>Kids academy</option>
                <option>Personal coaching</option>
              </select>
            </label>
            <label>
              Message
              <textarea name="message" placeholder="Tell us what you need" rows={4} />
            </label>
            <button className="hp-dark-button" type="submit">
              Send request
            </button>
          </form>
        </div>
      </section>

      <section className="workflow-map-section story-section contact-map page-closing">
        <iframe title="MClub map" src={mapSrc} loading="lazy" referrerPolicy="no-referrer-when-downgrade" />
      </section>
    </SiteFrame>
  );
}
