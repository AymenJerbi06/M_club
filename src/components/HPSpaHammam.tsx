"use client";

import { useState } from "react";
import Link from "next/link";
import ResponsiveVideo from "./ResponsiveVideo";

const services = [
  {
    label: "Hammem",
    title: "Steam, rest and recover.",
    copy: "Traditional hammem rituals, vaporium, gommage and calming recovery time after training or swimming.",
  },
  {
    label: "Massage",
    title: "Release the work your body carries.",
    copy: "Massage, masks, brushing and spa packs help members turn recovery into a real weekly habit.",
  },
  {
    label: "Pool recovery",
    title: "Move gently before you rest.",
    copy: "Aquagym, pool movement and water-based recovery give a lighter path for mobility, health and comfort.",
  },
];

function Arrow() {
  return (
    <svg viewBox="0 0 44 20" aria-hidden="true">
      <path d="M1 10h39M31 2l9 8-9 8" />
    </svg>
  );
}

export default function HPSpaHammam() {
  const [activeIndex, setActiveIndex] = useState(0);
  const active = services[activeIndex];

  return (
    <section className="hp-spa-section" id="spa-hammam-home">
      <div className="hp-spa-shell">
        <div className="hp-spa-copy">
          <p className="hp-eyebrow">Spa et Hammem</p>
          <h2>Recover like the work matters.</h2>
          <p>
            The club is not only a place to train. It is where you slow down, breathe, restore your body and
            leave feeling lighter than when you arrived.
          </p>

          <div className="hp-spa-tabs" role="tablist" aria-label="Spa et Hammem services">
            {services.map((service, index) => (
              <button
                aria-selected={activeIndex === index}
                className="hp-spa-tab"
                key={service.label}
                onClick={() => setActiveIndex(index)}
                role="tab"
                type="button"
              >
                {service.label}
              </button>
            ))}
          </div>

          <article className="hp-spa-active-card" role="tabpanel">
            <h3>{active.title}</h3>
            <p>{active.copy}</p>
            <Link className="hp-dark-button hp-spa-button" href="/spa">
              Discover spa
              <Arrow />
            </Link>
          </article>
        </div>

        <div className="hp-spa-media">
          <ResponsiveVideo src="/mclub/media/spa-hammam-preview.mp4" poster="/mclub/spa-hammam.jpg" />
          <span className="hp-spa-frame" />
          <span className="hp-spa-caption">Hammem, spa recovery and calm rituals</span>
        </div>
      </div>
    </section>
  );
}
