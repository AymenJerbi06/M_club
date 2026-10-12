"use client";

import { useState } from "react";

type OfferCard = {
  title: string;
  price: string;
  note: string;
  bullets: string[];
  href: string;
  action?: string;
};

type OfferTab = {
  label: string;
  cards: OfferCard[];
};

const membershipGroups: OfferCard[] = [
  {
    title: "Piscine",
    price: "Piscine access",
    note: "pool access only",
    bullets: [
      "Pool access only.",
    ],
    href: "/membership",
    action: "Learn more about membership",
  },
  {
    title: "Fitness",
    price: "99 / 125 / 160 DT",
    note: "12 months / 6 months / flex monthly",
    bullets: [
      "Access to the gym and training floor.",
      "Patio access.",
      "Access to the basketball and volleyball courts.",
      "Group fitness classes included.",
    ],
    href: "/membership",
    action: "Learn more about membership",
  },
  {
    title: "Global",
    price: "Complete access",
    note: "Fitness + pool access",
    bullets: [
      "Everything included with Fitness: gym, patio, basketball and volleyball courts, and group fitness classes.",
      "Pool access included.",
    ],
    href: "/membership",
    action: "Learn more about membership",
  },
];

const tabs: OfferTab[] = [
  {
    label: "Memberships",
    cards: [],
  },
  {
    label: "Promotions",
    cards: [
      {
        title: "Student & Pupil Promo",
        price: "Up to -25%",
        note: "on memberships",
        bullets: ["Applies to students and pupils based on current club conditions.", "Ask reception which Fitness, Piscine or Global option is eligible."],
        href: "/membership",
      },
      {
        title: "Flash Sale",
        price: "-10% / -15% / -20%",
        note: "3, 6 or annual plans",
        bullets: ["-10% on 3 months, -15% on 6 months, -20% on annual membership.", "Annual promo may include a towel or backpack gift when active."],
        href: "/membership",
      },
      {
        title: "Morning Fitness",
        price: "Reduced rate",
        note: "06:30-14:00",
        bullets: ["For members training during the morning fitness window.", "A practical option for early routines and daytime schedules."],
        href: "/membership",
      },
    ],
  },
  {
    label: "Add-ons",
    cards: [
      {
        title: "Summer Body Pack",
        price: "-25%",
        note: "3 months Fitness + 12 EMS",
        bullets: ["Combines three months of Fitness access with 12 iMotion EMS sessions.", "Built for body transformation with coach follow-up."],
        href: "/training",
      },
      {
        title: "EMS iMotion Packs",
        price: "4 to 36 sessions",
        note: "20-25 min sessions",
        bullets: ["Available in 4, 8, 12, 24 or 36-session packs.", "Includes consultation, body composition test, nutrition orientation and EMS suit."],
        href: "/training",
      },
      {
        title: "Coaching Packs",
        price: "16 sessions",
        note: "up to -25% promo",
        bullets: ["Personal fitness coaching with selected MClub coaches.", "Can include programming, nutrition follow-up, progress tracking or sport-specific work."],
        href: "/coaches",
      },
    ],
  },
];

export default function GGFlexDeal() {
  const [active, setActive] = useState(0);
  const [activeMembership, setActiveMembership] = useState(1);
  const current = tabs[active];
  const selectedMembership = membershipGroups[activeMembership];

  return (
    <section className="hp-offers-section" id="offers">
      <div className="hp-container">
        <div className="hp-section-heading">
          <p className="hp-eyebrow">Exclusively for you</p>
          <h2 className="hp-section-title">Membership offers</h2>
        </div>

        <div className="hp-offer-tabs" role="tablist" aria-label="Membership offers">
          {tabs.map((tab, index) => (
            <button
              aria-selected={active === index}
              className="hp-tab-pill"
              key={tab.label}
              onClick={() => setActive(index)}
              role="tab"
              type="button"
            >
              {tab.label}
            </button>
          ))}
        </div>

        {active === 0 ? (
          <div className="hp-membership-panel" role="tabpanel">
            <div className="hp-membership-subtabs" role="tablist" aria-label="Membership categories">
              {membershipGroups.map((membership, index) => (
                <button
                  aria-selected={activeMembership === index}
                  className="hp-membership-subtab"
                  key={membership.title}
                  onClick={() => setActiveMembership(index)}
                  role="tab"
                  type="button"
                >
                  {membership.title}
                </button>
              ))}
            </div>

            <article className="hp-membership-detail" role="tabpanel">
              <div className="hp-membership-detail-copy">
                <p className="hp-subsection-label">Membership type</p>
                <h3>{selectedMembership.title}</h3>
                <div className="hp-offer-price">
                  <strong>{selectedMembership.price}</strong>
                  <span>{selectedMembership.note}</span>
                </div>
              </div>

              <ul className="hp-check-list">
                {selectedMembership.bullets.map((bullet) => (
                  <li key={bullet}>{bullet}</li>
                ))}
              </ul>

              <a className="hp-dark-button hp-membership-learn" href={selectedMembership.href}>
                {selectedMembership.action ?? "Learn more about membership"}
              </a>
            </article>
          </div>
        ) : (
          <div className="hp-offer-grid" role="tabpanel">
            {current.cards.map((card) => (
              <article className="hp-offer-card" key={card.title}>
                <h3>{card.title}</h3>
                <div className="hp-offer-price">
                  <strong>{card.price}</strong>
                  <span>{card.note}</span>
                </div>
                <ul className="hp-check-list">
                  {card.bullets.map((bullet) => (
                    <li key={bullet}>{bullet}</li>
                  ))}
                </ul>
                <a className="hp-dark-button" href={card.href}>
                  {card.action ?? "Ask reception"}
                </a>
              </article>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
