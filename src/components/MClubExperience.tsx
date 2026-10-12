"use client";

import type { CSSProperties } from "react";
import { useMemo, useRef, useState } from "react";
import { contact, scheduleItems, spaPackages, upcomingEvents } from "./mclubData";

const paths = [
  {
    id: "gym",
    label: "Gym Floor",
    title: "Train from 06:30 with strength, cardio and body tracking.",
    image: "/mclub/hero-strength.jpg",
    href: "/training",
    facts: ["Cardio machines, free weights, barbells, benches and kettlebells.", "Morning fitness runs from 06:30 to 14:00.", "Body composition analysis and nutrition guidance available."],
  },
  {
    id: "pool",
    label: "Pool",
    title: "Use the semi-Olympic pool for skill, fitness and recovery.",
    image: "/mclub/hero-pool.jpg",
    href: "/spa",
    facts: ["Aquagym on Tuesday 07:00, Friday 19:15 and Sunday 08:30.", "Swimming academy from age 3 with four progression levels.", "Private swimming coaching available with Coach Yassine."],
  },
  {
    id: "spa",
    label: "Spa",
    title: "Book hammam, vaporium, gommage, masks and massage.",
    image: "/mclub/spa-hammam.jpg",
    href: "/spa",
    facts: ["Women's Complete Pack from 65 DT.", "Men's Pack from 45 DT.", "Hammam and Gommage pack: 5 sessions for 100 DT."],
  },
  {
    id: "classes",
    label: "Classes",
    title: "Build your week with named classes and named coaches.",
    image: "/mclub/media/class-community.jpg",
    href: "/classes",
    facts: ["Step Freestyle on Wednesday 18:30.", "Full Body Sculpt on Monday 19:30.", "Iron Core on Wednesday 19:30."],
  },
  {
    id: "cantine",
    label: "Cantine",
    title: "Recover socially with coffee, snacks and healthy plates.",
    image: "/mclub/media/cantine-coffee.jpg",
    href: "/facilities#cantine",
    facts: ["Coffee and relaxed post-training moments.", "Healthy food and snacks inside the club ecosystem.", "A useful pause point for members, parents and visitors."],
  },
  {
    id: "kids",
    label: "Kids",
    title: "Keep children moving with swimming, gymnastics and camp.",
    image: "/mclub/kids-gymnastics.jpg",
    href: "/kids",
    facts: ["Swimming academy runs Monday, Wednesday and Friday at 17:30.", "Baby Gym and psychomotor activities for early movement.", "Summer Camp for ages 4-14, Monday to Friday, 08:00-14:00."],
  },
];

const media = [
  { label: "Group classes", image: "/mclub/media/class-community.jpg", size: "large" },
  { label: "Semi-Olympic pool", image: "/mclub/hero-pool.jpg", size: "wide" },
  { label: "Spa hammam", image: "/mclub/spa-hammam.jpg", size: "" },
  { label: "Personal coaching", image: "/mclub/personal-coaching.jpg", size: "" },
  { label: "Aqua Dynamique", image: "/mclub/media/class-aquagym.jpg", size: "" },
  { label: "Kids gymnastics", image: "/mclub/kids-gymnastics.jpg", size: "wide" },
  { label: "Spinning", image: "/mclub/media/class-cycling.jpg", size: "" },
  { label: "Cantine", image: "/mclub/media/cantine-food.jpg", size: "" },
  { label: "Sports court", image: "/mclub/sports-court.jpg", size: "" },
];

const scheduleFilters = ["All", "Fitness", "Strength", "Aquatics", "Dance", "Mind Body"];

function Arrow() {
  return (
    <svg viewBox="0 0 44 20" aria-hidden="true">
      <path d="M1 10h39M31 2l9 8-9 8" />
    </svg>
  );
}

export default function MClubExperience() {
  const [activePathId, setActivePathId] = useState(paths[0].id);
  const [scheduleFilter, setScheduleFilter] = useState("All");
  const [videoPaused, setVideoPaused] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  const activePath = paths.find((path) => path.id === activePathId) ?? paths[0];
  const visibleSchedule = useMemo(() => {
    if (scheduleFilter === "All") return scheduleItems;
    return scheduleItems.filter((item) => item.type === scheduleFilter);
  }, [scheduleFilter]);

  function toggleVideo() {
    const video = videoRef.current;
    if (!video) return;

    if (video.paused) {
      void video.play();
      setVideoPaused(false);
    } else {
      video.pause();
      setVideoPaused(true);
    }
  }

  return (
    <>
      <section className="mclub-proof-section">
        <div className="mclub-proof-grid">
          <div className="mclub-video-panel">
            <video ref={videoRef} autoPlay muted loop playsInline poster="/mclub/group-energy.jpg">
              <source src="/mclub/classes-motion.mp4" type="video/mp4" />
            </video>
            <button type="button" onClick={toggleVideo}>
              {videoPaused ? "Play video" : "Pause video"}
            </button>
          </div>
          <div className="mclub-proof-copy">
            <p className="hp-eyebrow">Real club information</p>
            <h2>What you can actually do at MClub.</h2>
            <div className="mclub-fact-board">
              <article>
                <strong>Opening</strong>
                <span>From 06:30 daily. Morning fitness runs 06:30-14:00.</span>
              </article>
              <article>
                <strong>Classes</strong>
                <span>Evening classes begin from 18:30 with coach-led formats.</span>
              </article>
              <article>
                <strong>Pool</strong>
                <span>Semi-Olympic swimming, Aquagym, academy and private coaching.</span>
              </article>
              <article>
                <strong>Booking</strong>
                <span>Reception {contact.phone}. Spa booking {contact.spaPhone}.</span>
              </article>
            </div>
          </div>
        </div>
      </section>

      <section className="mclub-path-section">
        <div className="mclub-wide-container">
          <div className="mclub-section-head">
            <p className="hp-eyebrow">Choose by purpose</p>
            <h2>No filler. Pick the reason you are coming.</h2>
          </div>

          <div className="mclub-path-tabs" role="tablist" aria-label="MClub service paths">
            {paths.map((path) => (
              <button
                className={path.id === activePath.id ? "active" : ""}
                type="button"
                role="tab"
                aria-selected={path.id === activePath.id}
                key={path.id}
                onClick={() => setActivePathId(path.id)}
              >
                {path.label}
              </button>
            ))}
          </div>

          <div className="mclub-path-panel">
            <div className="mclub-path-image" style={{ "--mclub-image": `url(${activePath.image})` } as CSSProperties} />
            <div className="mclub-path-copy">
              <p className="hp-eyebrow">{activePath.label}</p>
              <h3>{activePath.title}</h3>
              <ul>
                {activePath.facts.map((fact) => (
                  <li key={fact}>{fact}</li>
                ))}
              </ul>
              <a className="mclub-arrow-link" href={activePath.href}>
                View details
                <Arrow />
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="mclub-schedule-section">
        <div className="mclub-wide-container">
          <div className="mclub-section-head split">
            <div>
              <p className="hp-eyebrow">Weekly board</p>
              <h2>Actual sessions, times and coaches.</h2>
            </div>
            <p>Use the filters to scan the week quickly. This is the kind of information visitors need before they decide to call or book.</p>
          </div>

          <div className="mclub-filter-row" role="tablist" aria-label="Schedule filters">
            {scheduleFilters.map((filter) => (
              <button
                className={filter === scheduleFilter ? "active" : ""}
                type="button"
                role="tab"
                aria-selected={filter === scheduleFilter}
                key={filter}
                onClick={() => setScheduleFilter(filter)}
              >
                {filter}
              </button>
            ))}
          </div>

          <div className="mclub-schedule-board">
            {visibleSchedule.map((item) => (
              <article key={`${item.day}-${item.time}-${item.title}`}>
                <time>{item.day}</time>
                <strong>{item.time}</strong>
                <span>{item.title}</span>
                <small>{item.coach} / {item.location}</small>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="mclub-media-section">
        <div className="mclub-wide-container">
          <div className="mclub-section-head">
            <p className="hp-eyebrow">Media proof</p>
            <h2>Show the club, not paragraphs about the club.</h2>
          </div>
          <div className="mclub-media-wall">
            {media.map((item) => (
              <figure className={item.size ? `mclub-media-card ${item.size}` : "mclub-media-card"} key={item.label}>
                <span style={{ "--mclub-image": `url(${item.image})` } as CSSProperties} />
                <figcaption>{item.label}</figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>

      <section className="mclub-booking-section">
        <div className="mclub-wide-container mclub-booking-grid">
          <div>
            <p className="hp-eyebrow">Offers and bookings</p>
            <h2>Only show offers that help someone act.</h2>
            <ul className="mclub-package-list">
              {spaPackages.map((pack) => (
                <li key={pack}>{pack}</li>
              ))}
            </ul>
          </div>
          <div className="mclub-event-stack">
            {upcomingEvents.map((event) => (
              <a href="/events" key={event.title}>
                <span>{event.date}</span>
                <strong>{event.title}</strong>
                <small>{event.category}</small>
              </a>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
