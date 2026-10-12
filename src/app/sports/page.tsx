import {
  CategoryCard,
  DetailCard,
  PageVideoHero,
  SectionIntro,
} from "@/components/HPInnerPages";
import SiteFrame from "@/components/SiteFrame";
import { contact } from "@/components/mclubData";
import ClubSymbol from "@/components/ClubSymbol";

const sports = [
  {
    title: "Volleyball",
    label: "Volleyball",
    copy: "Team play, coordination and social competition for members who want sport beyond solo workouts.",
    media: "/mclub/media/page-volleyball.mp4",
    poster: "/mclub/sports-court.jpg",
    icon: <ClubSymbol name="people" />,
  },
  {
    title: "Basketball",
    label: "Basketball",
    copy: "Conditioning, teamwork and court movement for youth, members and athletes.",
    media: "/mclub/media/page-basketball.mp4",
    poster: "/mclub/sports-court.jpg",
    icon: <ClubSymbol name="activity" />,
  },
  {
    title: "Boxing",
    label: "Boxing",
    copy: "Technique, confidence, conditioning and combat discipline with coach-led support.",
    media: "/mclub/media/page-boxing-class.mp4",
    poster: "/mclub/media/page-muscular-coach.jpg",
    icon: <ClubSymbol name="target" />,
  },
  {
    title: "CrossFit",
    label: "CrossFit",
    copy: "Functional strength, conditioning, intensity and variety for members who like athletic training.",
    media: "/mclub/media/page-crossfit-workout.mp4",
    poster: "/mclub/hero-class.jpg",
    icon: <ClubSymbol name="strength" />,
  },
  {
    title: "Karate and self-defense",
    label: "Self-defense",
    copy: "Confidence, discipline and body control for youth and adults.",
    media: "/mclub/media/page-kids-karate.mp4",
    poster: "/mclub/media/page-self-defense-celebration.jpg",
    icon: <ClubSymbol name="shield" />,
  },
  {
    title: "Sport conditioning",
    label: "Conditioning",
    copy: "Military cardio and hybrid formats for members who want a different kind of intensity.",
    media: "/mclub/media/page-military-cardio.mp4",
    poster: "/mclub/cardio-training.jpg",
    icon: <ClubSymbol name="heart" />,
  },
];

export default function SportsPage() {
  return (
    <SiteFrame innerPage pageStyle="sports">
      <PageVideoHero
        title="Other Sports"
        media="/mclub/media/page-basketball.mp4"
        poster="/mclub/sports-court.jpg"
        scrollTarget="#sports-programs"
        intro={{
          eyebrow: "Other sports",
          title: "Not only machines.",
          copy: "Make room for team play, combat skills and athletic conditioning with basketball, volleyball, boxing, CrossFit and coach-led sport sessions.",
          cta: "Ask reception",
          href: contact.phoneHref,
        }}
      />

      <section className="hp-section story-section sports-roster" id="sports-programs">
        <div className="hp-shell">
          <SectionIntro
            symbol="activity"
            eyebrow="Sport overview"
            title="Team play, combat and conditioning."
            copy="Find your team, sharpen your technique or try a new challenge with coach-led sessions across the club."
          />
          <div className="hp-category-grid">
            {sports.map((sport) => (
              <CategoryCard key={sport.title} {...sport} href={contact.phoneHref} />
            ))}
          </div>
        </div>
      </section>

      <section className="hp-section story-section sports-pathways page-closing">
        <div className="hp-shell">
          <SectionIntro symbol="people" eyebrow="Who it serves" title="A wider sport identity for MClub." />
          <div className="hp-goal-grid">
            <DetailCard symbol="people" eyebrow="Team" title="Volleyball and basketball" copy="Social sport, court conditioning and group energy." />
            <DetailCard symbol="shield" eyebrow="Combat" title="Boxing and self-defense" copy="Confidence, discipline and high-focus conditioning." />
            <DetailCard symbol="strength" eyebrow="Performance" title="CrossFit and hybrid training" copy="Functional strength and intensity for athletic members." />
            <DetailCard symbol="medal" eyebrow="Youth" title="Sport pathways" copy="A way for younger members to build movement habits beyond the gym floor." />
          </div>
        </div>
      </section>
    </SiteFrame>
  );
}
