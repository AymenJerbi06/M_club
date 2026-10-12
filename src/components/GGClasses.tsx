"use client";

import { useState } from "react";
import { classCards } from "./mclubData";

export default function GGClasses() {
  const [paused, setPaused] = useState(false);
  const loop = [...classCards, ...classCards];

  return (
    <section className="classes-section" id="classes">
      <div className="section-shell">
        <div className="section-heading-row">
          <div>
            <p className="section-kicker">Better Together</p>
            <h2 className="section-title">
              <span>20+</span>
              <span>Weekly Classes</span>
            </h2>
          </div>
          <button className="motion-toggle" type="button" onClick={() => setPaused((value) => !value)}>
            {paused ? "Play" : "Pause"}
          </button>
        </div>

        <div className="class-intro-grid">
          <article className="class-intro">
            <h3>Every Level</h3>
            <p>Beginner-friendly progressions and harder challenges in the same class flow.</p>
          </article>
          <article className="class-intro">
            <h3>Named Coaches</h3>
            <p>Ahmed, Sirine, Wael, Madiha, Mariem, Omar, Eya, Salma, Wissem, Amin, and more.</p>
          </article>
          <article className="class-intro">
            <h3>Real Schedule</h3>
            <p>Morning fitness starts at 6:30 AM. Evening classes begin from 18:30.</p>
          </article>
        </div>
      </div>

      <div className={`marquee ${paused ? "paused" : ""}`} aria-label="Class format carousel">
        <div className="marquee-track">
          {loop.map((item, index) => (
            <article className="class-card" key={`${item.title}-${index}`} style={{ "--card-image": `url(${item.image})` } as React.CSSProperties}>
              <div className="class-card-content">
                <p className="section-kicker">{item.kicker}</p>
                <h3>{item.title}</h3>
                <p>{item.desc}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
