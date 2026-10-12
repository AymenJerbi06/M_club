import {
  ButtonLink,
  DetailCard,
  MediaAsset,
  PageVideoHero,
  SectionIntro,
} from "@/components/HPInnerPages";
import SiteFrame from "@/components/SiteFrame";
import { contact, spaPackages } from "@/components/mclubData";

export default function SpaPage() {
  return (
    <SiteFrame innerPage pageStyle="spa">
      <PageVideoHero title="Spa and Hammam" media="/mclub/media/page-spa-hammem.mp4" poster="/mclub/spa-hammam.jpg" scrollTarget="#ritual" />

      <section className="hp-club-intro story-section spa-opening">
        <div className="hp-shell">
          <p>Recovery and wellness</p>
          <h2>A little time for yourself.</h2>
          <span>
            Hammam, steam, skin care, massage and a quiet tisane break. Make room for recovery after training,
            a long workday or simply whenever you need to slow down.
          </span>
          <div className="hp-dual-cta">
            <ButtonLink href={contact.spaPhoneHref}>Book spa</ButtonLink>
            <ButtonLink href="#packages" dark>
              View packages
            </ButtonLink>
          </div>
        </div>
      </section>

      <nav className="hp-anchor-tabs" aria-label="Spa page sections">
        <a href="#ritual">Ritual</a>
        <a href="#packages">Packages</a>
        <a href="#booking">Booking</a>
      </nav>

      <section className="hp-section story-section spa-ritual" id="ritual">
        <div className="hp-shell hp-split-feature reverse">
          <div className="hp-split-copy">
            <p className="hp-utility-label">Spa ritual</p>
            <h2>Steam, scrub, rest and leave lighter.</h2>
            <p>
              MClub's spa offer gives members a clear path from heat to skin care to calm recovery. It works after
              strength training, Aquagym, a long workday or a weekend reset.
            </p>
            <ul>
              <li>Hammem and vaporium for deep heat and decompression.</li>
              <li>Black-soap gommage, face and body masks, massage or brushing depending on the pack.</li>
              <li>Tisane and rest time so the spa feels like a real pause, not a quick add-on.</li>
            </ul>
            <ButtonLink href={contact.spaPhoneHref} dark>
              Discover spa
            </ButtonLink>
          </div>
          <div className="hp-split-media">
            <MediaAsset src="/mclub/media/page-spa-hammem-2.mp4" poster="/mclub/spa-hammam.jpg" alt="Hammem ritual" />
          </div>
        </div>
      </section>

      <section className="hp-section story-section spa-packages" id="packages">
        <div className="hp-shell">
          <SectionIntro
            symbol="recovery"
            eyebrow="Spa packages"
            title="Choose the recovery level you need."
            copy="From a simple hammam visit to a complete recovery ritual, find the right way to unwind."
          />
          <div className="spa-package-list">
            {spaPackages.map((pack, index) => {
              const [title, copy] = pack.split(":");
              return (
                <article className="spa-package" key={pack}>
                  <span className="spa-package-number" aria-hidden="true">{String(index + 1).padStart(2, "0")}</span>
                  <div>
                    <h3>{title}</h3>
                    <p>{copy ? copy.trim() : pack}</p>
                  </div>
                  <ButtonLink href={contact.spaPhoneHref} dark>
                    Book this pack
                  </ButtonLink>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      <section className="hp-section story-section spa-booking page-closing" id="booking">
        <div className="hp-shell hp-two-column">
          <DetailCard
            symbol="calendar"
            eyebrow="Booking"
            title="Reserve before you come."
            copy={`Spa booking line: ${contact.spaPhone}. Reception can confirm pack availability and timing.`}
          >
            <ButtonLink href={contact.spaPhoneHref}>Book by phone</ButtonLink>
          </DetailCard>
          <DetailCard
            symbol="heart"
            eyebrow="Routine"
            title="Best after training or pool."
            copy="Use the spa as the final step of the MClub routine: train, swim or take a class, then recover without leaving the building."
          >
            <ButtonLink href="/membership">Join now</ButtonLink>
          </DetailCard>
        </div>
      </section>
    </SiteFrame>
  );
}
