import {
  ButtonLink,
  DetailCard,
  MediaAsset,
  PageVideoHero,
  SectionIntro,
} from "@/components/HPInnerPages";
import SiteFrame from "@/components/SiteFrame";
import { contact } from "@/components/mclubData";
import type { ClubSymbolName } from "@/components/ClubSymbol";

const moments = [
  ["Before training", "Coffee and a calm arrival before class, gym or pool.", "coffee"],
  ["After class", "A sandwich, cake, snack or drink without rushing home.", "food"],
  ["For parents", "A social waiting point while kids swim, dance or train.", "heart"],
  ["For community", "The table after the workout is where a club becomes familiar.", "people"],
];

export default function CantinePage() {
  return (
    <SiteFrame innerPage pageStyle="cantine">
      <PageVideoHero title="Cantine" media="/mclub/media/page-cantine-coffee-making.mp4" poster="/mclub/media/cantine-coffee.jpg" scrollTarget="#cantine-moments" />

      <section className="hp-section story-section cantine-welcome" id="cantine-moments">
        <div className="hp-shell">
          <SectionIntro
            symbol="coffee"
            eyebrow="At a glance"
            title="Why the cantine matters to the MClub experience."
            copy="A coffee before class, a bite after training, a table to wait at — small comforts that make a long visit easy."
          />
          <div className="hp-goal-grid">
            {moments.map(([title, copy, symbol]) => (
              <DetailCard key={title} symbol={symbol as ClubSymbolName} eyebrow="Club life" title={title} copy={copy} />
            ))}
          </div>
        </div>
      </section>

      <section className="hp-section story-section cantine-impressions">
        <div className="hp-shell">
          <SectionIntro symbol="food" eyebrow="Impressions" title="Small comfort moments." />
          <div className="hp-gallery-row cantine-mosaic">
            {[
              ["/mclub/media/cantine-food.jpg", "/mclub/media/cantine-food.jpg", "Fresh bites"],
              ["/mclub/media/page-cantine-friends.jpg", "/mclub/media/page-cantine-friends.jpg", "Friends"],
              ["/mclub/media/page-cantine-food.jpg", "/mclub/media/page-cantine-food.jpg", "Food"],
              ["/mclub/media/page-cantine-cake.jpg", "/mclub/media/page-cantine-cake.jpg", "Cake"],
              ["/mclub/media/cantine-coffee-making.mp4", "/mclub/media/cantine-coffee.jpg", "Coffee"],
            ].map(([src, poster, label]) => (
              <article className="hp-gallery-card" key={label}>
                <MediaAsset src={src} poster={poster} alt={label} />
                <span>{label}</span>
              </article>
            ))}
          </div>
        </div>
      </section>
      <section className="hp-section story-section cantine-table page-closing">
        <div className="hp-shell hp-two-column">
          <DetailCard
            symbol="people"
            eyebrow="Cantine"
            title="Train, eat, wait, meet."
            copy="Coffee before class, a bite after training, a table for parents and a comfortable reason to stay in the club."
          >
            <ButtonLink href={contact.phoneHref}>Ask reception</ButtonLink>
          </DetailCard>
          <DetailCard
            symbol="food"
            eyebrow="On the menu"
            title="Coffee, snacks and everyday food."
            copy="Casual drinks, fresh sandwiches, cakes and a social table for parents, friends and members after class."
          >
            <div className="hp-dual-cta">
              <ButtonLink href="/cantine/menu">View menu</ButtonLink>
              <ButtonLink href="/membership">Join now</ButtonLink>
            </div>
          </DetailCard>
        </div>
      </section>
    </SiteFrame>
  );
}
