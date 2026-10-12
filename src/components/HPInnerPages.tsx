import type { ReactNode } from "react";
import ClubSymbol, { type ClubSymbolName } from "@/components/ClubSymbol";
import ResponsiveVideo from "./ResponsiveVideo";

type MediaAssetProps = {
  src: string;
  poster?: string;
  alt?: string;
  className?: string;
  priority?: boolean;
};

export function MediaAsset({ src, poster, alt = "", className, priority = false }: MediaAssetProps) {
  if (src.endsWith(".mp4")) {
    return (
      <ResponsiveVideo src={src} poster={poster} className={className} label={alt} priority={priority} />
    );
  }

  return <img className={className} src={src} alt={alt} loading={priority ? "eager" : "lazy"} decoding="async" fetchPriority={priority ? "high" : "auto"} />;
}

export function Breadcrumbs({ items }: { items: string[] }) {
  return (
    <nav className="hp-breadcrumbs" aria-label="Breadcrumb">
      <div className="hp-shell">
        {items.map((item, index) => (
          <span key={`${item}-${index}`}>
            {item}
            {index < items.length - 1 ? <b aria-hidden="true">›</b> : null}
          </span>
        ))}
      </div>
    </nav>
  );
}

type PageIntroProps = {
  eyebrow: string;
  title: string;
  copy: string;
  cta: string;
  href: string;
  bullets?: string[];
};

export function PageVideoHero({ title, media, poster, scrollTarget, intro, titleTone = "light" }: {
  title: string;
  media: string;
  poster: string;
  scrollTarget: string;
  intro?: PageIntroProps;
  titleTone?: "light" | "dark";
}) {
  return (
    <section className={`hp-club-photo-hero hp-spa-hero page-video-hero${intro ? " has-intro" : ""}`} aria-label={title}>
      <MediaAsset src={media} poster={poster} alt={`${title} at MClub`} priority />
      <Breadcrumbs items={["M Club", title]} />
      <div className={intro ? "page-hero-message" : "page-hero-title-wrap"}>
        <h1 className={`hp-spa-hero-title${titleTone === "dark" ? " hp-spa-hero-title--dark" : ""}`} aria-label={title}>
          {title.split(" ").map((word, wordIndex) => (
            <span className="hp-spa-hero-word" aria-hidden="true" key={`${word}-${wordIndex}`}>
              {Array.from(word).map((letter, letterIndex) => (
                <span className="hp-spa-hero-letter" key={`${letter}-${letterIndex}`} style={{ animationDelay: `${(wordIndex * 4 + letterIndex) * 65}ms` }}>
                  {letter}
                </span>
              ))}
            </span>
          ))}
        </h1>
        {intro ? (
          <div className="page-hero-intro">
            <h2>{intro.title}</h2>
            <p>{intro.copy}</p>
            <ButtonLink href={intro.href}>{intro.cta}</ButtonLink>
          </div>
        ) : null}
      </div>
      <a className="hp-spa-scroll-cue" href={scrollTarget} aria-label={`Explore ${title.toLowerCase()}`}>
        <span aria-hidden="true">&#8595;</span>
      </a>
    </section>
  );
}

export function PageHeroIntro({ eyebrow, title, copy, cta, href, bullets }: PageIntroProps) {
  return (
    <section className="hp-club-intro hp-page-intro" id="page-intro">
      <div className="hp-shell">
        <p>{eyebrow}</p>
        <h2>{title}</h2>
        <span>{copy}</span>
        {bullets ? <ul className="hp-hero-facts">{bullets.map((bullet) => <li key={bullet}>{bullet}</li>)}</ul> : null}
        <div className="hp-dual-cta"><ButtonLink href={href}>{cta}</ButtonLink></div>
      </div>
    </section>
  );
}

export function Monogram() {
  return <img className="hp-monogram" src="/Logo.jpg" alt="" />;
}

export function ButtonLink({
  href,
  children,
  dark = false,
}: {
  href: string;
  children: ReactNode;
  dark?: boolean;
}) {
  return (
    <a className={`hp-button ${dark ? "dark" : ""}`} href={href}>
      <span>{children}</span>
      <i aria-hidden="true">→</i>
    </a>
  );
}

export function SectionIntro({
  eyebrow,
  title,
  copy,
  symbol,
}: {
  eyebrow: string;
  title: string;
  copy?: string;
  symbol?: ClubSymbolName;
}) {
  return (
    <div className="hp-section-intro">
      {symbol ? <span className="club-symbol"><ClubSymbol name={symbol} /></span> : null}
      <p>{eyebrow}</p>
      <h2>{title}</h2>
      {copy ? <span>{copy}</span> : null}
    </div>
  );
}

export function OfferHero({
  eyebrow,
  title,
  copy,
  media,
  poster,
  cta,
  href,
}: {
  eyebrow: string;
  title: string;
  copy: string;
  media: string;
  poster?: string;
  cta: string;
  href: string;
}) {
  return (
    <section className="hp-offer-hero">
      <MediaAsset src={media} poster={poster} alt="" className="hp-offer-media" />
      <div className="hp-offer-shade" />
      <div className="hp-offer-card">
        <div className="hp-frame">
          <Monogram />
          <p>{eyebrow}</p>
          <h1>{title}</h1>
          <span>{copy}</span>
          <ButtonLink href={href}>{cta}</ButtonLink>
        </div>
      </div>
    </section>
  );
}

export function SoftHero({
  eyebrow,
  title,
  copy,
  cta,
  href,
}: {
  eyebrow: string;
  title: string;
  copy: string;
  cta: string;
  href: string;
}) {
  return (
    <section className="hp-soft-hero">
      <div className="hp-shell">
        <Monogram />
        <p>{eyebrow}</p>
        <h1>{title}</h1>
        <span>{copy}</span>
        <ButtonLink href={href}>{cta}</ButtonLink>
      </div>
    </section>
  );
}

export function PhotoHero({
  title,
  eyebrow,
  copy,
  media,
  poster,
  bullets,
  cta,
  href,
}: {
  title: string;
  eyebrow: string;
  copy: string;
  media: string;
  poster?: string;
  bullets?: string[];
  cta: string;
  href: string;
}) {
  return (
    <section className="hp-photo-hero">
      <MediaAsset src={media} poster={poster} alt="" className="hp-photo-media" />
      <div className="hp-photo-panel">
        <p>{eyebrow}</p>
        <h1>{title}</h1>
        <span>{copy}</span>
        {bullets ? (
          <ul>
            {bullets.map((bullet) => (
              <li key={bullet}>{bullet}</li>
            ))}
          </ul>
        ) : null}
        <ButtonLink href={href}>{cta}</ButtonLink>
      </div>
    </section>
  );
}

export function CategoryCard({
  title,
  label,
  copy,
  media,
  poster,
  href = "#",
  icon,
}: {
  title: string;
  label: string;
  copy: string;
  media: string;
  poster?: string;
  href?: string;
  icon?: ReactNode;
}) {
  return (
    <article className="hp-category-card">
      <a className="hp-category-media" href={href}>
        <MediaAsset src={media} poster={poster} alt="" />
        <span>
          {label}
          <i aria-hidden="true">→</i>
        </span>
      </a>
      <div>
        {icon ? <span className="hp-category-icon">{icon}</span> : null}
        <h3>{title}</h3>
        <p>{copy}</p>
        <a href={href}>Learn more</a>
      </div>
    </article>
  );
}

export function DetailCard({
  eyebrow,
  title,
  copy,
  children,
  symbol,
}: {
  eyebrow?: string;
  title: string;
  copy?: string;
  children?: ReactNode;
  symbol?: ClubSymbolName;
}) {
  return (
    <article className="hp-detail-card">
      {symbol ? <span className="club-symbol"><ClubSymbol name={symbol} /></span> : null}
      {eyebrow ? <small>{eyebrow}</small> : null}
      <h3>{title}</h3>
      {copy ? <p>{copy}</p> : null}
      {children}
    </article>
  );
}
