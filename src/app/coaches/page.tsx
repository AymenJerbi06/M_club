import {
  ButtonLink,
  DetailCard,
  MediaAsset,
  PageVideoHero,
  SectionIntro,
} from "@/components/HPInnerPages";
import SiteFrame from "@/components/SiteFrame";
import { coaches, contact, emsBenefits } from "@/components/mclubData";
import ClubSymbol, { type ClubSymbolName } from "@/components/ClubSymbol";

const goals = [
  {
    title: "Lose weight",
    symbol: "activity" as ClubSymbolName,
    items: ["Cardio and strength split", "Nutrition assistance", "Body composition check-ins"],
  },
  {
    title: "Gain muscle",
    symbol: "strength" as ClubSymbolName,
    items: ["Progressive strength plan", "Bodybuilding technique", "Recovery and food guidance"],
  },
  {
    title: "Improve mobility",
    symbol: "recovery" as ClubSymbolName,
    items: ["Mobility assessment", "Pain-aware movement", "Pool and recovery options"],
  },
  {
    title: "Build health",
    symbol: "heart" as ClubSymbolName,
    items: ["Realistic weekly rhythm", "Continuous evaluation", "Beginner-friendly coaching"],
  },
];

const tiers = [
  ["VIP 4", "Four guided sessions per month for a steady start."],
  ["VIP 8", "Two coached sessions each week for stronger accountability."],
  ["VIP 12", "A high-touch plan for transformation, performance or comeback goals."],
];

export default function CoachesPage() {
  return (
    <SiteFrame innerPage pageStyle="coaches">
      <PageVideoHero title="Personal Training" media="/mclub/media/page-boxing-personal-training.mp4" poster="/mclub/coach-team.jpg" scrollTarget="#training-goals" />

      <section className="hp-section story-section coaching-goals" id="training-goals">
        <div className="hp-shell">
          <SectionIntro
            symbol="target"
            eyebrow="Member goals"
            title="Start with the problem you want solved."
            copy="Tell us what you're chasing, and we'll build the plan around it — strength, mobility, weight loss or long-term health."
          />

          <div className="hp-goal-grid">
            {goals.map((goal) => (
              <DetailCard key={goal.title} symbol={goal.symbol} eyebrow="Goal" title={goal.title}>
                <ul>
                  {goal.items.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </DetailCard>
            ))}
          </div>
        </div>
      </section>

      <section className="hp-section story-section coaching-method" id="ems">
        <div className="hp-shell hp-split-feature reverse">
          <div className="hp-split-copy">
            <span className="club-symbol"><ClubSymbol name="activity" /></span>
            <p className="hp-utility-label">Coaching method</p>
            <h2>Assess, train, measure, adjust.</h2>
            <p>
              The coaching offer is built around follow-up, not random sessions. Members can combine strength work,
              boxing, swimming technique, EMS iMotion, mobility and nutrition guidance depending on the goal.
            </p>
            <ul>
              {emsBenefits.slice(0, 3).map((benefit) => (
                <li key={benefit}>{benefit}</li>
              ))}
            </ul>
            <ButtonLink href={contact.phoneHref} dark>
              Arrange a meeting
            </ButtonLink>
          </div>
          <div className="hp-split-media">
            <MediaAsset
              src="/mclub/media/page-ems-demo.mp4"
              poster="/mclub/media/page-ems-strength.jpg"
              alt="EMS iMotion coaching"
            />
          </div>
        </div>
      </section>

      <section className="hp-section story-section coaching-packages" id="packages">
        <div className="hp-shell">
          <SectionIntro
            symbol="calendar"
            eyebrow="Personal training memberships"
            title="Pick the support level that matches your rhythm."
            copy="Three levels of support, from a steady monthly rhythm to high-touch weekly coaching. Reception can confirm pricing and coach availability for your goal."
          />
          <div className="hp-pricing-grid">
            {tiers.map(([title, copy]) => (
              <article className="hp-price-card" key={title}>
                <span className="club-symbol"><ClubSymbol name="target" /></span>
                <small>Coaching tier</small>
                <h3>{title}</h3>
                <p>{copy}</p>
                <ul>
                  <li>Goal review and session planning.</li>
                  <li>Exercise technique and progression.</li>
                  <li>Optional nutrition and body composition follow-up.</li>
                </ul>
                <ButtonLink href={contact.phoneHref} dark>
                  Ask reception
                </ButtonLink>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="hp-section story-section coaching-team">
        <div className="hp-shell">
          <SectionIntro
            symbol="people"
            eyebrow="Coaching team"
            title="Real names, real specialties."
            copy="Nineteen coaches across strength, aquatics, dance, martial arts and recovery — real specialists, not a generic training menu."
          />
          <div className="hp-highlight-grid">
            {coaches.slice(0, 8).map((coach) => (
              <DetailCard key={coach.name} eyebrow={coach.role} title={coach.name} copy={coach.copy} />
            ))}
          </div>
        </div>
      </section>
      <section className="hp-section story-section coaching-next page-closing">
        <div className="hp-shell hp-two-column">
          <DetailCard
            symbol="target"
            eyebrow="Every goal needs a plan"
            title="Coaching that changes when your body changes."
            copy="Personal training, EMS iMotion, nutrition assistance and continuous evaluation, combined around one goal at a time."
          >
            <ButtonLink href={contact.phoneHref} dark>Arrange a coaching meeting</ButtonLink>
          </DetailCard>
          <DetailCard
            symbol="phone"
            eyebrow="Getting started"
            title="Not sure which tier fits?"
            copy="Reception can match you with a coach and a tier based on your goal, schedule and experience level."
          >
            <ButtonLink href="/membership" dark>View membership options</ButtonLink>
          </DetailCard>
        </div>
      </section>
    </SiteFrame>
  );
}
