import type { CSSProperties } from "react";
import ResponsiveVideo from "./ResponsiveVideo";

type Impression = {
  title: string;
  label: string;
  image: string;
  video?: string;
  copy?: string;
};

const featuredStories: Impression[] = [
  {
    title: "Ali Maaloul trains at MClub",
    label: "Famous guests",
    image: "/mclub/media/impression-coaches.jpg",
    video: "/mclub/media/impression-ali-maaloul-training.mp4",
    copy: "A club trusted by athletes, coaches and members who want the energy of real sport around them.",
  },
  {
    title: "Breast cancer awareness",
    label: "Community event",
    image: "/mclub/media/impression-class-team.jpg",
    video: "/mclub/media/impression-breast-cancer-event.mp4",
    copy: "Health, awareness and women-centered events make MClub more than a place to train.",
  },
  {
    title: "Family rhythm",
    label: "Second home",
    image: "/mclub/media/impression-cantine-friends.jpg",
    video: "/mclub/media/impression-family.mp4",
    copy: "Parents, kids, friends and coaches share one place for movement, food, rest and everyday life.",
  },
  {
    title: "MClub x Decathlon",
    label: "Collaboration",
    image: "/mclub/media/impression-after-class-3.jpg",
    video: "/mclub/media/impression-decathlon-collaboration.mp4",
    copy: "Partnerships and sports events keep the club alive beyond normal training hours.",
  },
];

const impressions: Impression[] = [
  {
    title: "Cantine with friends",
    label: "Eat and relax",
    image: "/mclub/media/impression-cantine-friends.jpg",
  },
  {
    title: "Healthy food choices",
    label: "Cantine",
    image: "/mclub/media/impression-cantine-food.jpg",
  },
  {
    title: "Kids summer camp",
    label: "Kids",
    image: "/mclub/kids-gymnastics.jpg",
    video: "/mclub/media/impression-kids-summer-camp.mp4",
  },
  {
    title: "Kids swimming lessons",
    label: "Pool academy",
    image: "/mclub/media/impression-pool-academy.jpg",
    video: "/mclub/media/impression-kids-swimming-lessons.mp4",
  },
  {
    title: "After class smiles",
    label: "Friends",
    image: "/mclub/media/impression-together-after-class.jpg",
  },
  {
    title: "Coach guidance",
    label: "Coaches",
    image: "/mclub/media/impression-coaches-amira-wissem.jpg",
  },
  {
    title: "Aquagym energy",
    label: "Pool movement",
    image: "/mclub/media/impression-aquagym.jpg",
  },
  {
    title: "Ali Maaloul celebration",
    label: "Club moment",
    image: "/mclub/media/impression-coaches.jpg",
    video: "/mclub/media/impression-ali-maaloul-celebration.mp4",
  },
];

function ImpressionMedia({ item, className = "" }: { item: Impression; className?: string }) {
  const style = { "--impression-image": `url(${item.image})` } as CSSProperties;

  if (item.video) {
    return (
      <span className={`hp-impression-media ${className}`} style={style}>
        <ResponsiveVideo src={item.video} poster={item.image} label={item.title} />
      </span>
    );
  }

  return <span className={`hp-impression-media ${className}`} style={style} />;
}

export default function HPImpressions() {
  const loop = [...impressions, ...impressions];

  return (
    <section className="hp-impressions-section" id="impressions">
      <div className="hp-impressions-container">
        <div className="hp-impressions-head">
          <p className="hp-eyebrow">Life at MClub</p>
          <h2>Impressions from MClub</h2>
          <p>
            This is the club as a second home: sport, recovery, family time, cantine breaks, awareness events,
            famous guests, coaches and everyday moments with friends.
          </p>
        </div>

        <div className="hp-impression-feature-grid" aria-label="Featured MClub stories">
          {featuredStories.map((item) => (
            <article className="hp-impression-feature-card" key={item.title}>
              <ImpressionMedia item={item} className="featured" />
              <div>
                <p>{item.label}</p>
                <h3>{item.title}</h3>
                <span>{item.copy}</span>
              </div>
            </article>
          ))}
        </div>

        <div className="hp-impression-viewport" aria-label="MClub impressions">
          <div className="hp-impression-track">
            {loop.map((item, index) => (
              <figure className="hp-impression-card" key={`${item.title}-${index}`}>
                <ImpressionMedia item={item} />
                <figcaption>
                  <span>{item.label}</span>
                  {item.title}
                </figcaption>
              </figure>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
