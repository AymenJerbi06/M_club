import {
  MediaAsset,
  PageVideoHero,
  SectionIntro,
} from "@/components/HPInnerPages";
import MClubSchedule from "@/components/MClubSchedule";
import ScrollReveal from "@/components/ScrollReveal";
import SiteFrame from "@/components/SiteFrame";
import ClubSymbol from "@/components/ClubSymbol";

type ClassFamily = "strength" | "rhythm" | "wellbeing";

type ClassCategory = {
  title: string;
  subtitle: string;
  copy: string;
  duration: string;
  intensity: string;
  focus: string;
  family: ClassFamily;
  media?: string;
  poster?: string;
  variant: "compact" | "wide";
  tone?: "warm";
};

const classCategories: ClassCategory[] = [
  {
    title: "Total Body Sculpt",
    family: "strength",
    subtitle: "Full-body strength and tone",
    copy: "A coached studio format that uses controlled repetitions, bodyweight work and resistance sequences to build tone from head to toe.",
    duration: "45-55 min",
    intensity: "Medium / high",
    focus: "Strength, posture, core",
    media: "/mclub/media/page-strength-class.mp4",
    poster: "/mclub/media/class-strength.jpg",
    variant: "compact",
  },
  {
    title: "Cardio Training",
    family: "strength",
    subtitle: "Sweat, stamina and energy",
    copy: "A high-energy class for members who want endurance, rhythm and a clear reason to keep moving after a long day.",
    duration: "45 min",
    intensity: "High",
    focus: "Endurance, rhythm, fat burn",
    media: "/mclub/media/page-military-cardio.mp4",
    poster: "/mclub/cardio-training.jpg",
    variant: "compact",
  },
  {
    title: "Step Freestyle",
    family: "rhythm",
    subtitle: "Music-led conditioning",
    copy: "A rhythmic step class built around coordination, cardio intensity and the group energy that keeps the room alive.",
    duration: "45 min",
    intensity: "Medium / high",
    focus: "Legs, coordination, cardio",
    media: "/mclub/media/class-community.jpg",
    poster: "/mclub/media/class-community.jpg",
    variant: "compact",
    tone: "warm",
  },
  {
    title: "Dynamic Workout",
    family: "strength",
    subtitle: "Pick the mood before you book",
    copy: "Some days are for sculpting, some are for sweating, and some are for moving with music. MClub classes help members choose a format that fits their mood without guessing.",
    duration: "30-55 min",
    intensity: "All levels",
    focus: "Strength, cardio, movement",
    media: "/mclub/media/page-circuit-training.mp4",
    poster: "/mclub/media/class-community.jpg",
    variant: "compact",
  },
  {
    title: "Zumba and Dance",
    family: "rhythm",
    subtitle: "Women-only and mixed rhythm sessions",
    copy: "Zumba, Oriental dance and rhythm-led formats bring energy, confidence and community into the studio.",
    duration: "45-55 min",
    intensity: "Medium",
    focus: "Dance, cardio, confidence",
    media: "/mclub/media/page-women-dance.mp4",
    poster: "/mclub/media/class-women-only.jpg",
    variant: "compact",
    tone: "warm",
  },
  {
    title: "Aquagym Movement",
    family: "wellbeing",
    subtitle: "Low-impact conditioning in the pool",
    copy: "Aquagym sessions use the pool for cardio, resistance and joint-friendly movement, including morning and evening slots during the week.",
    duration: "45 min",
    intensity: "Low / medium",
    focus: "Aquatics, mobility, endurance",
    media: "/mclub/media/page-aqua-gym-class.mp4",
    poster: "/mclub/media/class-aquagym.jpg",
    variant: "compact",
  },
  {
    title: "Pool Movement Class",
    family: "wellbeing",
    subtitle: "Aqua sessions across the week",
    copy: "Examples include Tuesday 07:00 Aquagym, Friday 19:15 Aquagym and Sunday 08:30 Aquagym. The schedule stays easy to scan below.",
    duration: "45 min",
    intensity: "Low impact",
    focus: "Pool, joints, recovery",
    media: "/mclub/media/pool-movement-media.mp4",
    poster: "/mclub/media/class-aquagym.jpg",
    variant: "compact",
  },
  {
    title: "Yoga and Mobility",
    family: "wellbeing",
    subtitle: "Calmer movement and breath",
    copy: "Yoga and mobility sessions support balance, breathing, flexibility and a softer reset between harder training days.",
    duration: "45-60 min",
    intensity: "Low / medium",
    focus: "Mobility, breath, balance",
    media: "/mclub/media/page-yoga-session.mp4",
    poster: "/mclub/media/class-prenatal.jpg",
    variant: "compact",
  },
  {
    title: "Women-only Classes",
    family: "rhythm",
    subtitle: "Comfort, confidence and community",
    copy: "Dedicated women-only formats offer privacy, rhythm and a welcoming entry point for members who prefer a more comfortable room.",
    duration: "45-55 min",
    intensity: "All levels",
    focus: "Dance, cardio, confidence",
    media: "/mclub/media/page-women-dance.mp4",
    poster: "/mclub/media/page-women-only.jpg",
    variant: "compact",
    tone: "warm",
  },
  {
    title: "Elderly Programs",
    family: "wellbeing",
    subtitle: "Healthy movement at a safer pace",
    copy: "Lower-impact movement options help with balance, mobility, confidence and consistency for members who want a sustainable rhythm.",
    duration: "30-45 min",
    intensity: "Low",
    focus: "Mobility, balance, health",
    media: "/mclub/media/page-aqua-class.mp4",
    poster: "/mclub/media/class-aquagym.jpg",
    variant: "compact",
  },
];

const classCollections: { family: ClassFamily; title: string; copy: string }[] = [
  { family: "strength", title: "Strength & cardio", copy: "Build strength, raise your heart rate and find your next challenge." },
  { family: "rhythm", title: "Dance & rhythm", copy: "Music, movement and the energy of a room moving together." },
  { family: "wellbeing", title: "Pool & wellbeing", copy: "Low-impact movement, mobility and a pace that works for you." },
];

function ClassButton() {
  return (
    <a className="reshape-class-button" href="#schedule">
      Book a class <ClubSymbol name="arrow" />
    </a>
  );
}

function ClassSpecs({ item }: { item: ClassCategory }) {
  return (
    <ul className="reshape-class-specs">
      <li>
        <b>Duration</b>
        <span>{item.duration}</span>
      </li>
      <li>
        <b>Intensity</b>
        <span>{item.intensity}</span>
      </li>
      <li>
        <b>Focus</b>
        <span>{item.focus}</span>
      </li>
    </ul>
  );
}

function ImageClassCard({ item, index }: { item: ClassCategory; index: number }) {
  const isWide = item.variant === "wide";
  return (
    <article
      className={`reshape-class-card reveal ${isWide ? "is-wide" : ""} ${item.tone === "warm" ? "is-warm" : ""}`}
      style={{ transitionDelay: `${(index % 3) * 120}ms` }}
    >
      {"media" in item && item.media ? <MediaAsset src={item.media} poster={item.poster} alt="" /> : null}
      <div className="reshape-class-gradient" />
      <div className="reshape-card-title">
        <span className="club-symbol"><ClubSymbol name={item.focus.startsWith("Dance") ? "music" : item.focus.startsWith("Pool") || item.focus.startsWith("Aquatics") ? "pool" : item.focus.startsWith("Mobility") ? "heart" : "activity"} /></span>
        <h3>{item.title}</h3>
        <p>{item.subtitle}</p>
      </div>
      <div className="reshape-hover-panel">
        <h3>{item.title}</h3>
        <p>{item.copy}</p>
        <ClassSpecs item={item} />
        <ClassButton />
      </div>
    </article>
  );
}

export default function ClassesPage() {
  return (
    <SiteFrame innerPage pageStyle="classes">
      <ScrollReveal />
      <PageVideoHero
        title="Classes"
        media="/mclub/media/page-cardio-mixte.mp4"
        poster="/mclub/hero-class.jpg"
        scrollTarget="#class-formats"
        intro={{
          eyebrow: "Fitness classes",
          title: "Find your rhythm.",
          copy: "Strength, cardio, dance, pool movement and calmer mobility sessions, led by the MClub coaching team.",
          cta: "Book a trial day",
          href: "/membership",
        }}
      />

      <section className="reshape-classes-body story-section classes-library" id="class-formats">
        <div className="reshape-class-shell">
          <SectionIntro
            symbol="activity"
            eyebrow="Class variety"
            title="Choose the room that matches your energy."
            copy="From Zumba and dance to Aquagym, Yoga, Full Body Sculpt, Cardio Training and healthy movement programs, each class has a clear rhythm before you book."
          />

          <div className="class-collections">
            {classCollections.map((collection) => (
              <div className={`class-collection class-collection--${collection.family}`} key={collection.family}>
                <header className="class-collection-heading">
                  <h3>{collection.title}</h3>
                  <p>{collection.copy}</p>
                </header>
                <div className="reshape-class-grid">
                  {classCategories.filter((category) => category.family === collection.family).map((category, index) => (
                    <ImageClassCard item={category} index={index} key={category.title} />
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <div className="reshape-schedule-wrap classes-planning page-closing">
        <MClubSchedule />
      </div>
    </SiteFrame>
  );
}
