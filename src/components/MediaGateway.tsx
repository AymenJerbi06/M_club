import Image from "next/image";
import Link from "next/link";
import { highlightCards } from "./mclubData";

export default function MediaGateway() {
  return (
    <section className="teaser-section">
      <div className="container-wide">
        <div className="div-block-290-v6 transparent">
          <h3 className="heading-large text-center">What you can expect at MClub</h3>
          <h4 className="caps-small">Everything at a glance</h4>
        </div>

        <div className="collection-card-list-wrapper-copy-copy scroll-copy-copy" aria-label="MClub services">
          {highlightCards.slice(0, 8).map((card) => (
            <div className="card-wrapper-teaser-home ohne-caption" key={card.title}>
              <Link
                className="brand-teaser-card"
                href="/training"
                style={{ "--card-image": `url(${card.image})` } as React.CSSProperties}
              >
                <span className="brand-teaser-card-top">
                  <span className="card-image" />
                  <span className="teaser-card-logo-wrap">
                    <Image src="/Logo.jpg" alt="" width={74} height={74} />
                  </span>
                </span>
                <span className="brand-teaser-card-btm">
                  <span className="brand-teaser-card-link-wrap">
                    <span className="card-label">{card.title}</span>
                    <span className="icon-button-wrap" aria-hidden="true">{"->"}</span>
                  </span>
                </span>
                <span className="outline-frame" />
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
