"use client";

import { useEffect, useRef, useState } from "react";
import type { CSSProperties, FormEvent, ReactNode } from "react";
import Link from "next/link";
import {
  ButtonLink,
  DetailCard,
  MediaAsset,
  SectionIntro,
} from "@/components/HPInnerPages";
import { contact, emsBenefits } from "@/components/mclubData";

type FloorCard = {
  title: string;
  specs: { duration: string; intensity: string; focus: string };
  copy: string;
  media: string;
  poster?: string;
  href?: string;
};

const floorCards: FloorCard[] = [
  {
    title: "Strength Training",
    specs: { duration: "Open floor", intensity: "All levels", focus: "Full-body strength" },
    copy: "Weights and functional exercises for full-body strength, with reception on hand for equipment orientation.",
    media: "/mclub/media/gym-gallery-strength.jpg",
  },
  {
    title: "Free Weights",
    specs: { duration: "Open floor", intensity: "All levels", focus: "Dumbbells, benches" },
    copy: "Dumbbells and benches give members space to build their own training flow, from first session to personal best.",
    media: "/mclub/media/gym-gallery-weights.jpg",
  },
  {
    title: "Cardio Conditioning",
    specs: { duration: "Open floor", intensity: "Medium / high", focus: "Stamina, fitness" },
    copy: "Movement-led cardio sessions on the patio and floor to build stamina and everyday energy.",
    media: "/mclub/media/gym-gallery-conditioning.jpg",
  },
  {
    title: "EMS iMotion Coaching",
    specs: { duration: "20-25 min", intensity: "Coach-guided", focus: "Deep muscle activation" },
    copy: "Coach-guided muscle activation with EMS iMotion, including consultation and body composition follow-up.",
    media: "/mclub/media/gym-gallery-ems.jpg",
    href: "/coaches",
  },
];

const amenities: { label: string; slug: string; href?: string; icon: ReactNode }[] = [
  {
    label: "Free Weights",
    slug: "free-weights",
    icon: (
      <svg viewBox="0 0 24 24"><path d="M4 12h16M4 9v6M7 7v10M17 7v10M20 9v6" strokeLinecap="round" strokeLinejoin="round" /></svg>
    ),
  },
  {
    label: "Weight Lifting Machines",
    slug: "weight-lifting-machines",
    icon: (
      <svg viewBox="0 0 24 24"><rect x="7" y="3" width="10" height="4" /><rect x="7" y="8" width="10" height="4" /><rect x="7" y="13" width="10" height="4" /><path d="M12 17v4" strokeLinecap="round" /></svg>
    ),
  },
  {
    label: "Cardio Machines",
    slug: "cardio-machines",
    icon: (
      <svg viewBox="0 0 24 24"><path d="M3 12h3l2 7 4-14 2 7h7" strokeLinecap="round" strokeLinejoin="round" /></svg>
    ),
  },
  {
    label: "Locker Rooms",
    slug: "locker-rooms",
    icon: (
      <svg viewBox="0 0 24 24"><rect x="4" y="3" width="16" height="18" rx="1" /><path d="M12 3v18" /><circle cx="9" cy="12" r="0.8" fill="currentColor" stroke="none" /><circle cx="15" cy="12" r="0.8" fill="currentColor" stroke="none" /></svg>
    ),
  },
  {
    label: "Showers",
    slug: "showers",
    icon: (
      <svg viewBox="0 0 24 24"><path d="M7 5a5 5 0 0 1 10 0M4 8h16M8 12l-1 2M12 12l-1 3M16 12l-1 2" strokeLinecap="round" strokeLinejoin="round" /></svg>
    ),
  },
  {
    label: "Strength Training Patio",
    slug: "strength-training-patio",
    icon: (
      <svg viewBox="0 0 24 24"><circle cx="12" cy="12" r="4" /><path d="M12 2v3M12 19v3M4.2 4.2l2.1 2.1M17.7 17.7l2.1 2.1M2 12h3M19 12h3M4.2 19.8l2.1-2.1M17.7 6.3l2.1-2.1" strokeLinecap="round" /></svg>
    ),
  },
  {
    label: "Access to Classes",
    slug: "access-to-classes",
    href: "/classes",
    icon: (
      <svg viewBox="0 0 24 24"><rect x="3" y="5" width="18" height="14" rx="1" /><path d="M3 10h18M8 3v4M16 3v4" strokeLinecap="round" /></svg>
    ),
  },
];

function GymAmenities() {
  const rowRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);
  const [activatedIndex, setActivatedIndex] = useState<number | null>(null);

  useEffect(() => {
    const row = rowRef.current;
    if (!row) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.3, rootMargin: "0px 0px -60px 0px" },
    );
    observer.observe(row);
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
    <div className="hp-amenity-panel">
      <div className="hp-amenity-row" ref={rowRef}>
        {amenities.map((item, index) => (
          <Link
            href={item.href ?? `/training/gallery?section=${item.slug}`}
            className={`hp-amenity ${isVisible ? "is-visible" : ""} ${activatedIndex === index ? "is-activated" : ""}`}
            key={item.slug}
            onPointerDown={() => replayAnimation(index)}
            style={{ "--amenity-order": index } as CSSProperties}
          >
            <span className="hp-amenity-badge">{item.icon}</span>
            <span>{item.label}</span>
          </Link>
        ))}
      </div>
    </div>
  );
}

function FloorCardArticle({ item, index }: { item: FloorCard; index: number }) {
  return (
    <article
      className="reshape-class-card reveal"
      style={{ transitionDelay: `${(index % 4) * 120}ms` }}
    >
      <MediaAsset src={item.media} poster={item.poster} alt="" />
      <div className="reshape-class-gradient" />
      <div className="reshape-card-title">
        <h3>{item.title}</h3>
        <p>{item.specs.focus}</p>
      </div>
      <div className="reshape-hover-panel">
        <h3>{item.title}</h3>
        <p>{item.copy}</p>
        <ul className="reshape-class-specs">
          <li>
            <b>Format</b>
            <span>{item.specs.duration}</span>
          </li>
          <li>
            <b>Level</b>
            <span>{item.specs.intensity}</span>
          </li>
          <li>
            <b>Focus</b>
            <span>{item.specs.focus}</span>
          </li>
        </ul>
        <a className="reshape-class-button" href={item.href ?? "#gym-trial"}>
          {item.href ? "Meet your coaches" : "Plan your first session"} <span aria-hidden="true">{">"}</span>
        </a>
      </div>
    </article>
  );
}

const faqs = [
  {
    question: "Can beginners use the gym floor?",
    answer: "Yes. Reception and coaches can help new members find a comfortable starting route and get oriented with the equipment.",
  },
  {
    question: "What equipment is available?",
    answer: "The floor includes strength machines, free weights, treadmills, cardio equipment, patio access and body tracking support.",
  },
  {
    question: "Can I get help with a training routine?",
    answer: "Ask reception about equipment orientation, personal coaching, body composition follow-up and nutrition assistance.",
  },
  {
    question: "Is EMS iMotion part of the gym offer?",
    answer: "EMS iMotion is available as a guided add-on with coach supervision and dedicated sessions.",
  },
  {
    question: "Can I combine gym access with group classes?",
    answer: "Fitness membership options include gym access and group fitness classes. Reception can confirm current access details.",
  },
];

function GymFAQ() {
  return (
    <div className="hp-faq-list">
      {faqs.map((faq) => (
        <details className="hp-faq-item" key={faq.question}>
          <summary>
            <span>{faq.question}</span>
            <b aria-hidden="true">+</b>
          </summary>
          <p>{faq.answer}</p>
        </details>
      ))}
    </div>
  );
}

function GymTrialForm() {
  const [request, setRequest] = useState<[string, string][] | null>(null);
  const [minDate, setMinDate] = useState<string>();

  useEffect(() => {
    const today = new Date();
    setMinDate(`${today.getFullYear()}-${String(today.getMonth() + 1).padStart(2, "0")}-${String(today.getDate()).padStart(2, "0")}`);
  }, []);

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const fields = [
      ["First name", "firstName"],
      ["Last name", "lastName"],
      ["Phone number", "phone"],
      ["Email", "email"],
      ["Location", "location"],
      ["Service", "service"],
      ["Preferred contact", "contactPreference"],
      ["Preferred trial date", "preferredDate"],
      ["Training goals", "goals"],
    ];
    setRequest(fields.map(([label, name]): [string, string] => [label, String(data.get(name) ?? "").trim()]).filter(([, value]) => value));
  };

  return (
    <form className="hp-form hp-trial-form" onSubmit={handleSubmit} onChange={() => setRequest(null)}>
      <label className="half">
        <span className="sr-only">First name</span>
        <input type="text" name="firstName" placeholder="First Name" autoComplete="given-name" maxLength={60} required />
      </label>
      <label className="half">
        <span className="sr-only">Last name</span>
        <input type="text" name="lastName" placeholder="Last Name" autoComplete="family-name" maxLength={60} required />
      </label>
      <label className="third">
        <span className="sr-only">Email (optional)</span>
        <input type="email" name="email" placeholder="Email" autoComplete="email" maxLength={254} />
      </label>
      <label className="third">
        <span className="sr-only">Phone number</span>
        <input type="tel" name="phone" placeholder="Phone" autoComplete="tel" maxLength={40} required />
      </label>
      <label className="third">
        <span className="sr-only" id="gym-trial-location-label">Location</span>
        <select name="location" aria-labelledby="gym-trial-location-label" defaultValue="" required>
          <option value="" disabled>Select Location</option>
          <option>MClub, Sfax</option>
        </select>
      </label>
      <label className="wide">
        <span className="sr-only" id="gym-trial-service-label">I&apos;m interested in</span>
        <select name="service" aria-labelledby="gym-trial-service-label" defaultValue="" required>
          <option value="" disabled>I&apos;m Interested In</option>
          <option>Fitness access</option>
          <option>Strength training</option>
          <option>Free weights</option>
          <option>Cardio patio</option>
          <option>EMS iMotion</option>
        </select>
      </label>
      <details className="hp-trial-preferences">
        <summary>Trial preferences (optional)<span aria-hidden="true">+</span></summary>
        <div>
          <label>
            <span id="gym-trial-contact-label">Preferred contact</span>
            <select name="contactPreference" aria-labelledby="gym-trial-contact-label" defaultValue="Reception">
              <option>Reception</option>
              <option>Phone call</option>
              <option>WhatsApp</option>
              <option>On-site visit</option>
            </select>
          </label>
          <label>
            Preferred trial date (optional)
            <input type="date" name="preferredDate" min={minDate} />
          </label>
          <label className="wide">
            Training goals (optional)
            <textarea name="goals" placeholder="What would you like to work on?" rows={3} maxLength={600} />
          </label>
        </div>
      </details>
      <button className="hp-button dark hp-trial-submit" type="submit"><span>Try the Gym</span><i aria-hidden="true">→</i></button>
      {request ? (
        <div className="hp-trial-review" role="status">
          <h3>Your Trial Request</h3>
          <dl>
            {request.map(([label, value]) => (
              <div key={label}><dt>{label}</dt><dd>{value}</dd></div>
            ))}
          </dl>
          <p>Your details have not been sent and no session is booked yet. Call reception to confirm your trial.</p>
          <ButtonLink href={contact.phoneHref}>Call reception</ButtonLink>
        </div>
      ) : null}
    </form>
  );
}

export default function GymStrongPage() {
  useEffect(() => {
    const elements = Array.from(document.querySelectorAll<HTMLElement>("[data-gymx-reveal], .reveal"));
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.16, rootMargin: "0px 0px -8% 0px" },
    );
    elements.forEach((element) => observer.observe(element));
    return () => observer.disconnect();
  }, []);

  return (
    <div className="gymx-page gymx-restored gymx-editorial">
      <section className="gymx-hero" aria-labelledby="gym-hero-title">
        <MediaAsset src="/mclub/media/page-strength-training.mp4" poster="/mclub/hero-strength.jpg" alt="MClub strength training" priority />
        <div className="gymx-hero-shade" />
        <h1 id="gym-hero-title" aria-label="Gym">
          {Array.from("GYM").map((letter, index) => (
            <span key={letter} aria-hidden="true" style={{ animationDelay: `${index * 90}ms` }}>{letter}</span>
          ))}
        </h1>
        <a className="gymx-scroll-cue" href="#gym-overview" aria-label="Explore the gym"><span aria-hidden="true">&#8595;</span></a>
      </section>

      <section className="hp-section dark" id="gym-overview">
        <div className="hp-shell">
          <SectionIntro
            eyebrow="What's included"
            title="Everything on the Gym Floor"
            copy="Free weights, machines, cardio, locker rooms and more, all included with your MClub access."
          />
          <GymAmenities />
        </div>
      </section>

      <section className="hp-section" id="gym-training-floor">
        <div className="hp-shell">
          <SectionIntro
            eyebrow="Your training starts here"
            title="Strength for Every Goal, Every Day"
            copy="From your first session to your next personal best. Find your rhythm with strength work, free weights, cardio and focused coaching at MClub."
          />
          <div className="reshape-class-grid" data-gymx-reveal>
            {floorCards.map((item, index) => (
              <FloorCardArticle item={item} index={index} key={item.title} />
            ))}
          </div>
        </div>
      </section>

      <section className="hp-section dark">
        <div className="hp-shell hp-split-feature">
          <div className="hp-split-copy compact" data-gymx-reveal>
            <p className="hp-utility-label">Energy and health</p>
            <h2>Build strength, improve cardio, track progress.</h2>
            <ul>
              <li>Treadmills and cardio equipment support endurance, heart health and daily energy.</li>
              <li>Free weights and bodybuilding machines help strength, muscle tone and confidence.</li>
              <li>EMS iMotion and body composition tracking help you train with structure.</li>
            </ul>
            <ButtonLink href="/membership" dark>Ask about Fitness access</ButtonLink>
          </div>
          <div className="hp-split-media" data-gymx-reveal>
            <MediaAsset src="/mclub/coach-team.jpg" alt="MClub coaching team on the training floor" />
          </div>
        </div>
      </section>

      <section className="hp-section dark dusk" id="gym-ems">
        <div className="hp-shell hp-split-feature reverse">
          <div className="hp-split-copy compact" data-gymx-reveal>
            <p className="hp-utility-label">Focused coaching</p>
            <h2>EMS iMotion</h2>
            <ul>{emsBenefits.map((benefit) => <li key={benefit}>{benefit}</li>)}</ul>
            <ButtonLink href="/coaches#ems" dark>Meet your coaches</ButtonLink>
          </div>
          <div className="hp-split-media" data-gymx-reveal>
            <MediaAsset src="/mclub/media/page-ems-demo.mp4" poster="/mclub/media/gym-gallery-ems.jpg" alt="A coach-guided EMS iMotion session" />
          </div>
        </div>
      </section>

      <section className="hp-section alt">
        <div className="hp-shell">
          <SectionIntro eyebrow="Good to know" title="Frequently Asked Questions" />
          <GymFAQ />
        </div>
      </section>

      <section className="hp-section dark" id="gym-trial" aria-labelledby="gym-trial-title">
        <div className="hp-shell">
          <SectionIntro
            eyebrow="There's nothing to lose"
            title="Try the Gym"
            copy="Sign up today and we'll confirm your trial session at reception."
          />
          <GymTrialForm />
        </div>
      </section>
    </div>
  );
}
