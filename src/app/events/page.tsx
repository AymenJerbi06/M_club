import {
  ButtonLink,
  DetailCard,
  MediaAsset,
  PageVideoHero,
  SectionIntro,
} from "@/components/HPInnerPages";
import SiteFrame from "@/components/SiteFrame";
import { contact, upcomingEvents } from "@/components/mclubData";
import ClubSymbol from "@/components/ClubSymbol";

const eventMedia = [
  ["/mclub/media/impression-family.mp4", "/mclub/media/class-community.jpg", "Family club"],
  ["/mclub/media/impression-kids-summer-camp.mp4", "/mclub/media/page-kids-medals.jpg", "Kids summer camp"],
  ["/mclub/media/impression-kids-swimming-lessons.mp4", "/mclub/media/page-kids-swimming.jpg", "Kids swimming"],
  ["/mclub/media/impression-cantine-food.jpg", "/mclub/media/impression-cantine-food.jpg", "Cantine moments"],
  ["/mclub/media/impression-together-after-class.jpg", "/mclub/media/impression-together-after-class.jpg", "After class"],
];

export default function EventsPage() {
  return (
    <SiteFrame innerPage pageStyle="events">
      <PageVideoHero title="Events" media="/mclub/media/page-event-decathlon.mp4" poster="/mclub/media/class-community.jpg" scrollTarget="#club-events" />

      <section className="hp-section story-section events-journal" id="club-events">
        <div className="hp-shell">
          <SectionIntro
            symbol="calendar"
            eyebrow="News and updates"
            title="Moments that show the life of the club."
            copy="Real sessions, real members, real milestones — a running feed of what's actually happening at MClub."
          />
          <div className="hp-news-list">
            {upcomingEvents.slice(0, 3).map((event) => (
              <article className="hp-news-item" key={event.title}>
                <MediaAsset
                  className="hp-news-thumb"
                  src={event.video ?? event.image}
                  poster={event.image}
                  alt={event.title}
                />
                <div className="hp-news-body">
                  <small>{event.category}</small>
                  <h3>{event.title}</h3>
                  <p>{event.copy}</p>
                </div>
                <span className="club-event-mark"><ClubSymbol name="calendar" /></span>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="hp-section story-section events-community">
        <div className="hp-shell hp-split-feature reverse">
          <div className="hp-split-copy">
            <span className="club-symbol"><ClubSymbol name="people" /></span>
            <p className="hp-utility-label">Second home feeling</p>
            <h2>Not just workouts. A place people return to.</h2>
            <p>
              Kids playing, friends sharing a meal, athletes training and families celebrating. There is always
              another reason to come back, long after the workout is over.
            </p>
            <ul>
              <li>Family-friendly programming makes the club easier to use every week.</li>
              <li>Sport collaborations give MClub credibility beyond its walls.</li>
              <li>Awareness events connect fitness to health, care and community.</li>
            </ul>
            <ButtonLink href="/membership" dark>
              Join the club
            </ButtonLink>
          </div>
          <div className="hp-split-media">
            <MediaAsset src="/mclub/media/impression-family.mp4" poster="/mclub/media/class-community.jpg" alt="MClub family moment" />
          </div>
        </div>
      </section>

      <section className="hp-section story-section events-impressions">
        <div className="hp-shell">
          <SectionIntro symbol="people" eyebrow="Impressions" title="Community scenes from MClub." />
          <div className="hp-gallery-row">
            {eventMedia.map(([src, poster, label]) => (
              <article className="hp-gallery-card" key={label}>
                <MediaAsset src={src} poster={poster} alt={label} />
                <span>{label}</span>
              </article>
            ))}
          </div>
        </div>
      </section>
      <section className="hp-section story-section events-next page-closing">
        <div className="hp-shell hp-two-column">
          <DetailCard
            symbol="calendar"
            eyebrow="Club calendar"
            title="The club feels alive."
            copy="Sport collaborations, athlete moments, health awareness, kids programs and family celebrations bring the MClub community together."
          >
            <ButtonLink href={contact.phoneHref}>Ask about events</ButtonLink>
          </DetailCard>
          <DetailCard
            symbol="medal"
            eyebrow="On the calendar"
            title="MClub x Decathlon, athlete visits and more."
            copy="Ali Maaloul training and celebration, breast cancer awareness and family events keep the calendar full."
          >
            <ButtonLink href="/membership">Join now</ButtonLink>
          </DetailCard>
        </div>
      </section>
    </SiteFrame>
  );
}
