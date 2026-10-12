"use client";

import Link from "next/link";
import type { CSSProperties } from "react";
import { useEffect, useState } from "react";

type ClassCard = {
  cta: string;
  title: string;
  image: string;
  video?: string;
  href: string;
};

const classes: ClassCard[] = [
  {
    cta: "Strength",
    title: "Strength Training",
    image: "/mclub/media/class-strength.jpg",
    video: "/mclub/media/strength-training-media.mp4",
    href: "/classes",
  },
  {
    cta: "Cardio",
    title: "Cardio Training",
    image: "/mclub/media/class-cycling.jpg",
    video: "/mclub/media/cardio-media.mp4",
    href: "/classes",
  },
  {
    cta: "EMS",
    title: "EMS iMotion Training",
    image: "/mclub/media/ems-strength.jpg",
    video: "/mclub/media/ems-imotion-training.mp4",
    href: "/training",
  },
  {
    cta: "Bodybuilding",
    title: "Bodybuilding Training",
    image: "/mclub/media/class-strength.jpg",
    video: "/mclub/media/bodybuilding-training.mp4",
    href: "/training",
  },
  {
    cta: "Women",
    title: "Women-Only Sessions",
    image: "/mclub/media/class-women-only.jpg",
    href: "/classes",
  },
  {
    cta: "Aquagym",
    title: "Aquagym & Pool Classes",
    image: "/mclub/media/class-aquagym.jpg",
    video: "/mclub/media/pool-movement-media.mp4",
    href: "/spa",
  },
  {
    cta: "Volleyball",
    title: "Volleyball Sessions",
    video: "/mclub/media/sport-volleyball.mp4",
    image: "/mclub/sports-court.jpg",
    href: "/facilities",
  },
  {
    cta: "Basketball",
    title: "Basketball Sessions",
    video: "/mclub/media/sport-basketball.mp4",
    image: "/mclub/sports-court.jpg",
    href: "/facilities",
  },
];

function ClassMedia({ item }: { item: ClassCard }) {
  if (item.video) {
    return (
      <video autoPlay muted loop playsInline preload="metadata" poster={item.image}>
        <source src={item.video} type="video/mp4" />
      </video>
    );
  }

  return <img src={item.image} alt="" loading="lazy" />;
}

function ClassIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d="M4 10v4M7 8v8M10 11h4M17 8v8M20 10v4" />
    </svg>
  );
}

export default function HPClassVariety() {
  const [activeIndex, setActiveIndex] = useState(0);
  const activeOffset = activeIndex * -810;

  useEffect(() => {
    const targets = document.querySelectorAll(".hp-programs-carousel .hp-program-reveal");
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.15, rootMargin: "0px 0px -10% 0px" }
    );

    targets.forEach((target) => observer.observe(target));
    return () => observer.disconnect();
  }, []);

  return (
    <section className="hp-class-section hp-programs-carousel" id="fitness" data-locked-section="class-variety">
      <div className="hp-programs-inner">
        <header className="hp-programs-header hp-program-reveal">
          <p className="hp-programs-eyebrow">
            <span aria-hidden="true">
              <ClassIcon />
            </span>
            Our classes
          </p>
          <h2>
            <span>Where members</span>
            <br />
            find the right class and train with purpose.
          </h2>
        </header>

        <div className="hp-program-tabs hp-program-reveal" role="tablist" aria-label="MClub class categories">
          {classes.map((item, index) => (
            <button
              aria-controls={`program-card-${index}`}
              aria-selected={activeIndex === index}
              className={activeIndex === index ? "active" : ""}
              key={item.title}
              onClick={() => setActiveIndex(index)}
              role="tab"
              type="button"
            >
              {item.cta}
            </button>
          ))}
        </div>

        <div className="hp-program-carousel-mask hp-program-reveal">
          <div
            className="hp-program-track"
            style={{ left: `${activeOffset}px` } as CSSProperties}
          >
            {classes.map((item, index) => (
              <Link
                aria-label={`Open ${item.title}`}
                className={activeIndex === index ? "hp-program-card is-active" : "hp-program-card"}
                href={item.href}
                id={`program-card-${index}`}
                key={item.title}
                role="tabpanel"
              >
                <div className="hp-program-card-copy">
                  <div className="hp-program-icon" aria-hidden="true">
                    <ClassIcon />
                  </div>
                  <div>
                    <p>{item.cta}</p>
                    <h3>{item.title}</h3>
                  </div>
                </div>
                <figure className="hp-program-media">
                  <ClassMedia item={item} />
                </figure>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
