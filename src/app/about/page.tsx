import type { CSSProperties } from "react";
import SiteFrame from "@/components/SiteFrame";
import { aboutValues, achievements, contact, quickStats } from "@/components/mclubData";
import ClubSymbol, { type ClubSymbolName } from "@/components/ClubSymbol";

const valueSymbols: ClubSymbolName[] = ["people", "heart", "target", "shield"];

export default function AboutPage() {
  return (
    <SiteFrame innerPage pageStyle="about">
      <section className="page-hero" style={{ "--page-image": "url(/mclub/coach-team.jpg)" } as CSSProperties}>
        <div className="section-shell page-hero-content">
          <p className="section-kicker">About MClub</p>
          <h1 className="page-title">
            <span>Toujours</span>
            <span>La Famille</span>
          </h1>
          <p className="body-copy">
            A full-service fitness, wellness and family club in Sfax, built around training, recovery, coaching,
            aquatics, kids programs and community events.
          </p>
        </div>
      </section>

      <section className="workflow-section story-section about-story">
        <div className="workflow-container">
          <div className="workflow-split-heading">
            <div>
              <span className="club-symbol"><ClubSymbol name="people" /></span>
              <p className="hp-eyebrow">The club idea</p>
              <h2 className="hp-section-title">Fitness, spa, pool and family life in one place.</h2>
            </div>
            <p>
              MClub is located at {contact.address}. The club opens from 06:30 and is designed for members who want a
              complete weekly routine rather than a single service.
            </p>
          </div>

          <div className="workflow-stats-grid compact">
            {quickStats.map((item) => (
              <article className="workflow-stat" key={item.label}>
                <strong>{item.value}</strong>
                <span>{item.label}</span>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="workflow-section story-section about-values">
        <div className="workflow-container">
          <div className="workflow-card-grid four">
            {aboutValues.map((value, index) => (
              <article className="workflow-text-card" key={value.title}>
                <span className="club-symbol"><ClubSymbol name={valueSymbols[index % valueSymbols.length]} /></span>
                <p className="hp-eyebrow">{value.title}</p>
                <p>{value.copy}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="workflow-section story-section about-milestones page-closing">
        <div className="workflow-container workflow-two-column">
          <div>
            <span className="club-symbol"><ClubSymbol name="medal" /></span>
            <p className="hp-eyebrow light">Achievements</p>
            <h2 className="hp-section-title">A club with real milestones.</h2>
          </div>
          <ul className="workflow-check-list light">
            {achievements.map((achievement) => (
              <li key={achievement}>{achievement}</li>
            ))}
          </ul>
        </div>
      </section>
    </SiteFrame>
  );
}
