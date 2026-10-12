"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import type { CSSProperties } from "react";

const pillars = [
  {
    label: "Gym",
    href: "/training",
    icon: (
      <svg viewBox="0 0 64 64" aria-hidden="true">
        <path d="M9 32h46M14 24v16M20 20v24M44 20v24M50 24v16M28 28h8M28 36h8" />
      </svg>
    ),
  },
  {
    label: "Spa et Hammem",
    href: "/spa",
    icon: (
      <svg viewBox="0 0 64 64" aria-hidden="true">
        <path d="M32 49c-9-7-15-14-15-23 8 0 13 5 15 12 2-7 7-12 15-12 0 9-6 16-15 23Z" />
        <path d="M22 17c-3-4-3-8 0-12M32 17c-3-4-3-8 0-12M42 17c-3-4-3-8 0-12" />
        <path d="M17 53h30" />
      </svg>
    ),
  },
  {
    label: "Piscine",
    href: "/spa",
    icon: (
      <svg viewBox="0 0 64 64" aria-hidden="true">
        <path d="M12 26c4 0 4-4 8-4s4 4 8 4 4-4 8-4 4 4 8 4 4-4 8-4" />
        <path d="M12 38c4 0 4-4 8-4s4 4 8 4 4-4 8-4 4 4 8 4 4-4 8-4" />
        <path d="M12 50c4 0 4-4 8-4s4 4 8 4 4-4 8-4 4 4 8 4 4-4 8-4" />
      </svg>
    ),
  },
  {
    label: "Classes",
    href: "/classes",
    icon: (
      <svg viewBox="0 0 64 64" aria-hidden="true">
        <rect x="10" y="13" width="44" height="36" rx="2" />
        <path d="M22 25v14M32 20v19M42 28v11M17 44h30" />
        <circle cx="22" cy="20" r="3" />
        <circle cx="32" cy="15" r="3" />
        <circle cx="42" cy="23" r="3" />
      </svg>
    ),
  },
  {
    label: "Personal Training",
    href: "/coaches",
    icon: (
      <svg viewBox="0 0 64 64" aria-hidden="true">
        <circle cx="23" cy="15" r="5" />
        <circle cx="43" cy="15" r="5" />
        <path d="M18 27v20M28 27v20M38 27v20M48 27v20M18 31h10M38 31h10M28 34c4 4 6 4 10 0" />
      </svg>
    ),
  },
  {
    label: "Events",
    href: "/events",
    icon: (
      <svg viewBox="0 0 64 64" aria-hidden="true">
        <rect x="13" y="16" width="38" height="34" rx="3" />
        <path d="M22 10v12M42 10v12M14 26h36" />
        <path d="M32 33l2.3 4.7 5.2.8-3.8 3.7.9 5.1-4.6-2.4-4.6 2.4.9-5.1-3.8-3.7 5.2-.8L32 33Z" />
      </svg>
    ),
  },
  {
    label: "Cantine",
    href: "/facilities#cantine",
    icon: (
      <svg viewBox="0 0 64 64" aria-hidden="true">
        <path d="M18 24h26v13c0 8-6 14-13 14s-13-6-13-14V24Z" />
        <path d="M44 28h5c4 0 7 3 7 7s-3 7-7 7h-5" />
        <path d="M20 54h24" />
        <path d="M24 16c-3-4-3-8 0-12M34 16c-3-4-3-8 0-12M44 16c-3-4-3-8 0-12" />
      </svg>
    ),
  },
  {
    label: "Kids",
    href: "/kids",
    icon: (
      <svg viewBox="0 0 64 64" aria-hidden="true">
        <circle cx="22" cy="18" r="5" />
        <circle cx="42" cy="18" r="5" />
        <path d="M16 34c3-7 9-10 16-10s13 3 16 10" />
        <path d="M22 29v18M42 29v18M22 36h20" />
        <path d="M14 50h36" />
      </svg>
    ),
  },
  {
    label: "Other Sports",
    href: "/facilities",
    icon: (
      <svg viewBox="0 0 64 64" aria-hidden="true">
        <circle cx="20" cy="22" r="8" />
        <path d="M14.5 16.5c5 2 8 5 11 11M12 23c6-1 11-3 15-7" />
        <path d="M38 16h14v14H38z" />
        <path d="M41 44c0-6 5-11 11-11M52 44c0-6-5-11-11-11M38 44h17" />
      </svg>
    ),
  },
];

function Arrow() {
  return (
    <svg viewBox="0 0 44 20" aria-hidden="true">
      <path d="M1 10h39M31 2l9 8-9 8" />
    </svg>
  );
}

export default function HomeExplorer() {
  const gridRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);
  const [activatedIndex, setActivatedIndex] = useState<number | null>(null);

  useEffect(() => {
    const grid = gridRef.current;
    if (!grid) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.22, rootMargin: "0px 0px -70px 0px" }
    );

    observer.observe(grid);
    return () => observer.disconnect();
  }, []);

  const replayAnimation = (index: number) => {
    setActivatedIndex(null);
    window.setTimeout(() => setActivatedIndex(index), 0);
    window.setTimeout(() => {
      setActivatedIndex((current) => (current === index ? null : current));
    }, 900);
  };

  return (
    <section className="hp-welcome-section" id="welcome">
      <div className="hp-container">
        <p className="hp-eyebrow">Welcome to MClub</p>
        <h1 className="hp-section-title">Fitness, Health and Wellbeing all under one roof</h1>

        <div
          className="hp-pillar-grid"
          aria-label="MClub wellness pillars"
          ref={gridRef}
        >
          {pillars.map((pillar, index) => (
            <article
              className={`hp-pillar ${isVisible ? "is-visible" : ""} ${activatedIndex === index ? "is-activated" : ""}`}
              key={pillar.label}
              onPointerDown={() => replayAnimation(index)}
              style={{ "--pillar-order": index } as CSSProperties}
            >
              <span className="hp-pillar-icon">{pillar.icon}</span>
              <Link href={pillar.href} className="hp-pill-button">
                <span>{pillar.label}</span>
                <Arrow />
              </Link>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
