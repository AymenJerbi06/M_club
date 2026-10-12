import {
  ButtonLink,
  CategoryCard,
  MediaAsset,
  PageVideoHero,
  SectionIntro,
} from "@/components/HPInnerPages";
import SiteFrame from "@/components/SiteFrame";
import { contact } from "@/components/mclubData";
import ClubSymbol from "@/components/ClubSymbol";

const kidsPrograms = [
  {
    title: "Swimming Academy",
    label: "Kids swimming",
    copy: "From age 3 with familiarisation, initiation, learning and perfection levels.",
    media: "/mclub/media/page-kids-swimming-lessons.mp4",
    poster: "/mclub/media/page-kids-swimming.jpg",
    icon: <ClubSymbol name="pool" />,
  },
  {
    title: "Gymnastics",
    label: "Gymnastics",
    copy: "Coordination, balance, confidence and gala moments for kids and families.",
    media: "/mclub/media/page-kids-gymnastics-class.mp4",
    poster: "/mclub/kids-gymnastics.jpg",
    icon: <ClubSymbol name="activity" />,
  },
  {
    title: "Karate and self-defense",
    label: "Karate",
    copy: "Discipline, confidence and body control with youth-friendly coaching.",
    media: "/mclub/media/page-kids-karate.mp4",
    poster: "/mclub/media/page-karate-kids.jpg",
    icon: <ClubSymbol name="shield" />,
  },
  {
    title: "Dance",
    label: "Dance",
    copy: "Rhythm, confidence and social movement for kids who prefer music-led activity.",
    media: "/mclub/media/page-kids-dance.mp4",
    poster: "/mclub/media/page-kids-medals.jpg",
    icon: <ClubSymbol name="music" />,
  },
  {
    title: "Summer Camp",
    label: "Camp",
    copy: "Monday to Friday, 08:00 to 14:00, with multiple activities and a healthy snack.",
    media: "/mclub/media/page-kids-summer-camp.mp4",
    poster: "/mclub/media/page-kids-medals.jpg",
    icon: <ClubSymbol name="people" />,
  },
  {
    title: "Kids personal training",
    label: "Kids coaching",
    copy: "Focused sessions for confidence, posture, athletic habits and safer progression.",
    media: "/mclub/media/page-kids-personal-training.mp4",
    poster: "/mclub/kids-gymnastics.jpg",
    icon: <ClubSymbol name="target" />,
  },
];

export default function KidsPage() {
  return (
    <SiteFrame innerPage pageStyle="kids">
      <PageVideoHero
        title="Kids Academy"
        media="/mclub/media/page-kids-gymnastics.mp4"
        poster="/mclub/kids-gymnastics.jpg"
        scrollTarget="#kids-programs"
        intro={{
          eyebrow: "Kids Academy",
          title: "A club for the whole family.",
          copy: "Swimming, gymnastics, karate, dance and camp help children build confidence through supervised activities while parents enjoy the club.",
          cta: "Ask about kids programs",
          href: contact.phoneHref,
        }}
      />

      <section className="hp-section story-section kids-programs" id="kids-programs">
        <div className="hp-shell">
          <SectionIntro
            symbol="people"
            eyebrow="Program overview"
            title="Different children need different ways into movement."
            copy="Swimming, gymnastics, karate, dance and camp, each with its own coach, its own pace and its own way of building confidence."
          />
          <div className="hp-category-grid">
            {kidsPrograms.map((program) => (
              <CategoryCard key={program.title} {...program} href={contact.phoneHref} />
            ))}
          </div>
        </div>
      </section>

      <section className="hp-section story-section kids-family">
        <div className="hp-shell hp-split-feature">
          <div className="hp-split-media">
            <MediaAsset src="/mclub/media/impression-kids-summer-camp.mp4" poster="/mclub/media/page-kids-medals.jpg" alt="Kids camp" />
          </div>
          <div className="hp-split-copy">
            <span className="club-symbol"><ClubSymbol name="heart" /></span>
            <p className="hp-utility-label">Parent-first details</p>
            <h2>Train while your child also grows.</h2>
            <p>
              MClub becomes easier for families because adults can train, swim or recover while kids have structured
              activities in the same club ecosystem.
            </p>
            <ul>
              <li>Swimming academy starts from age 3 with progression levels.</li>
              <li>Gymnastics, karate, dance and camp build confidence and coordination.</li>
              <li>Reception can confirm schedules, age groups and current registration options.</li>
            </ul>
            <ButtonLink href={contact.phoneHref} dark>
              Ask about kids
            </ButtonLink>
          </div>
        </div>
      </section>

      <section className="hp-section story-section kids-questions page-closing">
        <div className="hp-shell">
          <SectionIntro symbol="shield" eyebrow="Parent questions" title="What families usually need to know." />
          <div className="kids-question-list hp-faq-list">
            {[
              ["How old does my child need to be?", "Swimming starts from age 3. Other programs depend on the coach, level and activity format."],
              ["What is the summer camp schedule?", "08:00 to 14:00. Summer Camp is structured as a weekday routine with activity blocks and a snack."],
              ["How do children progress?", "Children move from confidence and basics toward technique, discipline and performance through progressive levels."],
              ["Can I use the club while my child is active?", "Parents can train, use the pool, eat at the cantine or recover while children are active."],
            ].map(([question, answer]) => (
              <details className="hp-faq-item" key={question}>
                <summary>{question}<b aria-hidden="true">+</b></summary>
                <p>{answer}</p>
              </details>
            ))}
          </div>
        </div>
      </section>
    </SiteFrame>
  );
}
