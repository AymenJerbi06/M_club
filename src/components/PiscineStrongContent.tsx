"use client";

import { FormEvent, useEffect, useState } from "react";
import ResponsiveVideo from "./ResponsiveVideo";

type MediaItem = {
  src: string;
  poster?: string;
  alt: string;
};

type IconName = "wave" | "coach" | "shield" | "heart" | "timer" | "group" | "drop" | "spark";

const carouselSlides: MediaItem[] = [
  {
    src: "/mclub/media/page-aqua-gym-session.mp4",
    poster: "/mclub/hero-pool.jpg",
    alt: "Aquagym session in the MClub pool",
  },
  {
    src: "/mclub/hero-pool.jpg",
    alt: "Semi-Olympic pool at MClub",
  },
  {
    src: "/mclub/media/page-watfit-class.mp4",
    poster: "/mclub/media/page-aquagym.jpg",
    alt: "WatFit class in the MClub pool",
  },
  {
    src: "/mclub/media/page-swimming-lessons-adults.mp4",
    poster: "/mclub/media/page-pool-academy.jpg",
    alt: "Adult swimming lessons at MClub",
  },
  {
    src: "/mclub/media/page-kids-pool-activity.mp4",
    poster: "/mclub/media/page-kids-swimming.jpg",
    alt: "Kids pool activity at MClub",
  },
];

const serviceCards = [
  {
    icon: "wave" as const,
    text: "A semi-Olympic aquatic space for lap swimming, low-impact cardio and confident technique work.",
  },
  {
    icon: "coach" as const,
    text: "Coached Aquagym, WatFit and swimming lessons help every member train with structure in the water.",
  },
  {
    icon: "shield" as const,
    text: "Kids academy sessions build water comfort, safety and progression with a calm, family-first rhythm.",
  },
];

const classCards = [
  {
    title: "Aquagym",
    image: "/mclub/media/page-aqua-gym-class.mp4",
    poster: "/mclub/media/class-aquagym.jpg",
    copy: "A motivating low-impact class for cardio, core strength and mobility. Ideal for members who want sweat without harsh joint pressure.",
  },
  {
    title: "WatFit",
    image: "/mclub/media/page-watfit-class.mp4",
    poster: "/mclub/media/page-aquagym.jpg",
    copy: "A more athletic water workout built around balance, resistance and functional movement in the pool.",
  },
  {
    title: "Kids Swimming Academy",
    image: "/mclub/media/page-kids-swimming-lessons.mp4",
    poster: "/mclub/media/page-kids-swimming.jpg",
    copy: "Progressive lessons for children from water familiarisation to better technique, confidence and independence.",
  },
  {
    title: "Adult Swimming Lessons",
    image: "/mclub/media/page-swimming-lessons-adults.mp4",
    poster: "/mclub/media/page-pool-academy.jpg",
    copy: "Private or guided sessions for adults who want to learn, refine strokes or finally feel relaxed in the water.",
  },
];

const benefitCards = [
  {
    icon: "heart" as const,
    text: "Improve endurance, circulation and recovery with training that is demanding but gentle on the joints.",
  },
  {
    icon: "timer" as const,
    text: "Use pool classes as a weekly rhythm alongside fitness, spa recovery and nutrition support.",
  },
  {
    icon: "group" as const,
    text: "Train with coaches and members in a social atmosphere that feels active, safe and welcoming.",
  },
];

const amenityCards = [
  {
    title: "Semi-Olympic Pool",
    image: "/mclub/hero-pool.jpg",
    copy: "A bright aquatic zone for laps, coaching, classes and calm recovery swims.",
  },
  {
    title: "Water Classes",
    image: "/mclub/media/page-aquagym.jpg",
    copy: "Aquagym and WatFit formats for endurance, strength and movement variety.",
  },
  {
    title: "Kids Academy",
    image: "/mclub/media/page-kids-swimming.jpg",
    copy: "Structured kids lessons with clear progression and family-friendly scheduling.",
  },
  {
    title: "Spa Connection",
    image: "/mclub/spa-hammam.jpg",
    copy: "Move from swimming to hammam and relaxation for a complete recovery day.",
  },
];

const faqs = [
  {
    question: "When can I use the pool?",
    answer: "Reception can confirm the daily access window, class times and any temporary lane reservations before you arrive.",
  },
  {
    question: "Do I need to know how to swim before joining Aquagym?",
    answer: "No. Aquagym is coached in a controlled pool environment and is designed for different levels of confidence.",
  },
  {
    question: "Are kids swimming lessons available?",
    answer: "Yes. The academy supports children through progressive levels, from familiarisation to technique improvement.",
  },
  {
    question: "Can adults book swimming lessons?",
    answer: "Yes. Adults can ask reception about private coaching, technique work and confidence-building sessions.",
  },
  {
    question: "What should I bring?",
    answer: "Bring swimwear, towel, pool slippers and any personal swimming equipment recommended by your coach.",
  },
];

function Icon({ name }: { name: IconName }) {
  const paths: Record<IconName, string> = {
    wave: "M3 14c2.4 0 2.4-2 4.8-2s2.4 2 4.8 2 2.4-2 4.8-2 2.4 2 4.8 2M3 19c2.4 0 2.4-2 4.8-2s2.4 2 4.8 2 2.4-2 4.8-2 2.4 2 4.8 2M4 8c2 0 2-2 4-2s2 2 4 2 2-2 4-2 2 2 4 2",
    coach: "M12 13a4 4 0 1 0 0-8 4 4 0 0 0 0 8Zm-7 8a7 7 0 0 1 14 0M19 6h3v8h-3M2 6h3v8H2",
    shield: "M12 3 5 6v5c0 5 3.2 8.4 7 10 3.8-1.6 7-5 7-10V6l-7-3Zm-3 9 2 2 4-5",
    heart: "M20.8 7.8c0 5.3-8.8 10.4-8.8 10.4S3.2 13.1 3.2 7.8A4.5 4.5 0 0 1 12 6.4a4.5 4.5 0 0 1 8.8 1.4Z",
    timer: "M9 2h6M12 8v5l3 2M12 22a8 8 0 1 0 0-16 8 8 0 0 0 0 16Z",
    group: "M9 11a3 3 0 1 0 0-6 3 3 0 0 0 0 6Zm6 0a3 3 0 1 0 0-6 3 3 0 0 0 0 6ZM3 20a6 6 0 0 1 12 0M9 20a6 6 0 0 1 12 0",
    drop: "M12 3s6 6.2 6 11a6 6 0 0 1-12 0c0-4.8 6-11 6-11Z",
    spark: "M12 2l2.2 6.8H21l-5.5 4 2.1 6.8L12 15.5 6.4 19.6l2.1-6.8-5.5-4h6.8L12 2Z",
  };

  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d={paths[name]} />
    </svg>
  );
}

function SwimMedia({ item, className }: { item: MediaItem; className?: string }) {
  if (item.src.endsWith(".mp4")) {
    return (
      <ResponsiveVideo className={className} src={item.src} poster={item.poster} label={item.alt} />
    );
  }

  return <img className={className} src={item.src} alt={item.alt} loading="lazy" />;
}

function MediaAsset({ src, poster, alt, className }: MediaItem & { className?: string }) {
  return <SwimMedia item={{ src, poster, alt }} className={className} />;
}

export default function PiscineStrongContent() {
  const [activeSlide, setActiveSlide] = useState(0);
  const [openFaq, setOpenFaq] = useState(0);

  useEffect(() => {
    const timer = window.setInterval(() => {
      setActiveSlide((current) => (current + 1) % carouselSlides.length);
    }, 5600);

    return () => window.clearInterval(timer);
  }, []);

  useEffect(() => {
    const elements = Array.from(document.querySelectorAll<HTMLElement>("[data-swim-reveal]"));

    if (!("IntersectionObserver" in window)) {
      elements.forEach((element) => element.classList.add("is-visible"));
      return;
    }

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

  const moveSlide = (direction: number) => {
    setActiveSlide((current) => (current + direction + carouselSlides.length) % carouselSlides.length);
  };

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
  };

  return (
    <div className="swim-page">
      <section className="swim-hero" aria-labelledby="swim-hero-title">
        <MediaAsset
          src="/mclub/media/page-aqua-gym-session.mp4"
          poster="/mclub/hero-pool.jpg"
          alt="MClub pool session"
          className="swim-hero-media"
        />
        <div className="swim-hero-overlay" />
        <h1 id="swim-hero-title">Piscine</h1>
      </section>

      <section className="swim-intro swim-section">
        <div className="swim-container swim-centered" data-swim-reveal>
          <h2>
            Beat the Weather, Love
            <br />
            Swimming All Year
          </h2>
          <p>
            MClub brings together a semi-Olympic pool, guided water classes, adult lessons and a kids swimming academy
            so every member can train, recover and gain confidence in the water.
          </p>
        </div>
      </section>

      <section className="swim-carousel-section" aria-label="Piscine media carousel">
        <div className="swim-carousel">
          <div className="swim-carousel-track" style={{ transform: `translateX(-${activeSlide * 100}%)` }}>
            {carouselSlides.map((slide) => (
              <div className="swim-carousel-slide" key={slide.src}>
                <SwimMedia item={slide} />
              </div>
            ))}
          </div>

          <button className="swim-carousel-arrow prev" type="button" aria-label="Previous pool image" onClick={() => moveSlide(-1)}>
            <span aria-hidden="true">&lt;</span>
          </button>
          <button className="swim-carousel-arrow next" type="button" aria-label="Next pool image" onClick={() => moveSlide(1)}>
            <span aria-hidden="true">&gt;</span>
          </button>

          <div className="swim-carousel-dots" aria-label="Pool slide selector">
            {carouselSlides.map((slide, index) => (
              <button
                type="button"
                aria-label={`Show slide ${index + 1}`}
                className={activeSlide === index ? "active" : undefined}
                key={`${slide.src}-dot`}
                onClick={() => setActiveSlide(index)}
              />
            ))}
          </div>
        </div>
      </section>

      <section className="swim-section swim-services">
        <div className="swim-container">
          <h2 data-swim-reveal>We Provide the Best Swimming Service</h2>
          <div className="swim-service-grid">
            {serviceCards.map((card, index) => (
              <article className="swim-icon-card" data-swim-reveal style={{ transitionDelay: `${index * 120}ms` }} key={card.text}>
                <span>
                  <Icon name={card.icon} />
                </span>
                <p>{card.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="swim-marquee-wrap" aria-label="MClub services">
        <div className="swim-ticker yellow">
          <div className="swim-ticker-track">
            {Array.from({ length: 12 }).map((_, index) => (
              <span key={`yellow-${index}`}>Gym <b /> Yoga <b /> Kickfit <b /> Group-X <b /> Swimming <b /></span>
            ))}
          </div>
        </div>
        <div className="swim-ticker white">
          <div className="swim-ticker-track reverse">
            {Array.from({ length: 12 }).map((_, index) => (
              <span key={`white-${index}`}>Piscine <b /> Aquagym <b /> WatFit <b /> Kids Academy <b /> Spa <b /></span>
            ))}
          </div>
        </div>
      </section>

      <section className="swim-section swim-classes">
        <div className="swim-container">
          <div className="swim-centered swim-section-head" data-swim-reveal>
            <h2>Swimming Classes</h2>
            <p>
              From Aquagym and WatFit to kids academy and adult lessons, the pool is built for members who want a
              practical, coached and enjoyable way to move.
            </p>
          </div>

          <div className="swim-class-grid">
            {classCards.map((card, index) => (
              <article className="swim-class-card" data-swim-reveal style={{ transitionDelay: `${index * 100}ms` }} key={card.title}>
                <div className="swim-class-media">
                  <MediaAsset src={card.image} poster={card.poster} alt={card.title} />
                </div>
                <h3>{card.title}</h3>
                <p>{card.copy}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="swim-section swim-benefits">
        <MediaAsset src="/mclub/media/page-aqua-class.mp4" poster="/mclub/media/page-aqua-gym.jpg" alt="Pool movement background" className="swim-benefit-bg" />
        <div className="swim-container">
          <div className="swim-centered" data-swim-reveal>
            <h2>
              Get in Shape,
              <br />
              Have a Blast
            </h2>
          </div>
          <div className="swim-benefit-grid">
            {benefitCards.map((card, index) => (
              <article className="swim-benefit-card" data-swim-reveal style={{ transitionDelay: `${index * 120}ms` }} key={card.text}>
                <span>
                  <Icon name={card.icon} />
                </span>
                <p>{card.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="swim-section swim-amenities">
        <div className="swim-container">
          <div className="swim-centered swim-section-head" data-swim-reveal>
            <h2>
              Enjoy the Best
              <br />
              Amenities
            </h2>
            <p>
              The pool is part of the full MClub experience: train in water, recover in the spa, bring the kids and
              build a healthier weekly routine.
            </p>
          </div>

          <div className="swim-amenity-grid">
            {amenityCards.map((card, index) => (
              <article className="swim-amenity-card" data-swim-reveal style={{ transitionDelay: `${index * 90}ms` }} key={card.title}>
                <img src={card.image} alt={card.title} loading="lazy" />
                <h3>{card.title}</h3>
                <p>{card.copy}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="swim-faq-section">
        <div className="swim-container swim-faq-layout">
          <h2 data-swim-reveal>
            Frequently
            <br />
            Asked Questions
          </h2>
          <div className="swim-faq-list" data-swim-reveal>
            {faqs.map((faq, index) => (
              <article className={`swim-faq-item ${openFaq === index ? "open" : ""}`} key={faq.question}>
                <button type="button" onClick={() => setOpenFaq(openFaq === index ? -1 : index)} aria-expanded={openFaq === index}>
                  <span aria-hidden="true">{openFaq === index ? "*" : "+"}</span>
                  {faq.question}
                </button>
                <p>{faq.answer}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="swim-signup-section">
        <MediaAsset src="/mclub/media/page-watfit-class.mp4" poster="/mclub/media/page-aquagym.jpg" alt="Water fitness signup background" className="swim-signup-bg" />
        <div className="swim-container">
          <div className="swim-signup-card" data-swim-reveal>
            <div className="swim-signup-copy">
              <h2>
                Book a Piscine
                <br />
                Trial Session
              </h2>
              <p>Tell reception what you want to try and we will guide you toward pool access, Aquagym, WatFit or lessons.</p>
            </div>

            <form className="swim-signup-form" onSubmit={handleSubmit}>
              <label>
                Name
                <input type="text" name="name" placeholder="Your name" />
              </label>
              <label>
                Phone number
                <input type="tel" name="phone" placeholder="+216 ..." />
              </label>
              <label className="wide">
                Email
                <input type="email" name="email" placeholder="you@example.com" />
              </label>
              <label className="wide">
                Service
                <select name="service" defaultValue="Piscine">
                  <option>Piscine</option>
                  <option>Aquagym</option>
                  <option>WatFit</option>
                  <option>Kids Swimming Academy</option>
                  <option>Adult Swimming Lessons</option>
                </select>
              </label>
              <label className="wide">
                Preferred contact
                <select name="branch" defaultValue="Reception">
                  <option>Reception</option>
                  <option>Phone call</option>
                  <option>WhatsApp</option>
                  <option>On-site visit</option>
                </select>
              </label>
              <button className="swim-submit" type="submit">
                Submit Request
              </button>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
}
