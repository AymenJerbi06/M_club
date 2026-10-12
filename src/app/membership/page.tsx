import {
  ButtonLink,
  DetailCard,
  MediaAsset,
  OfferHero,
  SectionIntro,
} from "@/components/HPInnerPages";
import SiteFrame from "@/components/SiteFrame";
import { contact, membershipOptions, pricingTiers, spaPackages } from "@/components/mclubData";
import ClubSymbol from "@/components/ClubSymbol";

const addOns = [
  {
    title: "EMS iMotion",
    copy: "20-25 minute guided sessions with suit setup, coach supervision and body composition follow-up.",
  },
  {
    title: "Personal Coaching",
    copy: "16-session packs with selected MClub coaches for strength, weight loss, mobility or performance goals.",
  },
  {
    title: "Spa Recovery",
    copy: spaPackages[0],
  },
];

export default function MembershipPage() {
  return (
    <SiteFrame innerPage pageStyle="membership">
      <OfferHero
        eyebrow="M Club Membership"
        title="Choose your access"
        copy="Start with Fitness, Piscine or Global access, then add coaching, EMS or spa recovery when your routine needs it."
        media="/mclub/media/join-club-preview.mp4"
        poster="/mclub/adult-community.jpg"
        cta="Secure offer"
        href="#pricing"
      />

      <section className="hp-section story-section membership-access" id="access">
        <div className="hp-shell">
          <SectionIntro
            symbol="medal"
            eyebrow="Access families"
            title="First choose the world you want to enter."
            copy="Choose Fitness, Piscine or Global access, then find the duration and extras that fit your routine."
          />

          <div className="hp-tabs" aria-label="Membership categories">
            <a className="hp-tab active" href="#fitness">
              Fitness
            </a>
            <a className="hp-tab" href="#piscine">
              Piscine
            </a>
            <a className="hp-tab" href="#global">
              Global
            </a>
            <a className="hp-tab" href="#addons">
              Add-ons
            </a>
          </div>

          <div className="hp-offer-grid">
            {membershipOptions.map((option) => (
              <DetailCard key={option.title} symbol={option.title.includes("Piscine") ? "pool" : option.title.includes("Global") ? "medal" : "strength"} eyebrow="Membership" title={option.title} copy={option.copy}>
                <ul>
                  {option.perks.map((perk) => (
                    <li key={perk}>{perk}</li>
                  ))}
                </ul>
                <ButtonLink href="#pricing" dark>
                  Learn more
                </ButtonLink>
              </DetailCard>
            ))}
          </div>
        </div>
      </section>

      <section className="hp-section story-section membership-pricing" id="pricing">
        <div className="hp-shell">
          <SectionIntro
            symbol="calendar"
            eyebrow="Fitness tariffs"
            title="The 12, 6 and Flex options are Fitness access examples."
            copy="Reception confirms the current campaign, access category and exact conditions before registration. These cards clarify the known Fitness tariff structure."
          />

          <div className="hp-pricing-grid">
            {pricingTiers.map((tier) => (
              <article className="hp-price-card" key={tier.name} id={tier.name === "12 Months" ? "fitness" : undefined}>
                <span className="club-symbol"><ClubSymbol name="calendar" /></span>
                <small>{tier.featured ? "Best value" : tier.note}</small>
                <h3>{tier.name}</h3>
                <div className="hp-price">
                  {tier.price}
                  <span>/month</span>
                </div>
                <ul>
                  <li>Fitness access foundation.</li>
                  <li>Gym floor, cardio and strength equipment.</li>
                  <li>Patio and basketball/volleyball court access.</li>
                  <li>Group fitness classes included.</li>
                </ul>
                <ButtonLink href={contact.phoneHref} dark>
                  Choose club
                </ButtonLink>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="hp-section story-section membership-extras page-closing" id="addons">
        <div className="hp-shell hp-split-feature">
          <div className="hp-split-media">
            <MediaAsset
              src="/mclub/media/page-ems-imotion.mp4"
              poster="/mclub/media/page-ems-strength.jpg"
              alt="EMS iMotion training at MClub"
            />
          </div>
          <div className="hp-split-copy">
            <span className="club-symbol"><ClubSymbol name="activity" /></span>
            <p className="hp-utility-label">Promotions and add-ons</p>
            <h2>Make the membership fit your real week.</h2>
            <p>
              Bring coaching, EMS, pool time and spa recovery into the same weekly routine. Choose the extras
              that support your goals and the way you actually use the club.
            </p>
            <ul>
              {addOns.map((item) => (
                <li key={item.title}>
                  <strong>{item.title}:</strong> {item.copy}
                </li>
              ))}
            </ul>
            <ButtonLink href={contact.phoneHref} dark>
              Talk to reception
            </ButtonLink>
          </div>
        </div>
      </section>
    </SiteFrame>
  );
}
