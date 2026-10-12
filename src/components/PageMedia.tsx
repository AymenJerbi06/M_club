import type { CSSProperties } from "react";
import ResponsiveVideo from "./ResponsiveVideo";

export type PageMediaItem = {
  title: string;
  eyebrow?: string;
  copy: string;
  image: string;
  video?: string;
  href?: string;
};

function Arrow() {
  return (
    <svg viewBox="0 0 44 20" aria-hidden="true">
      <path d="M1 10h39M31 2l9 8-9 8" />
    </svg>
  );
}

export function PageMediaCard({ item }: { item: PageMediaItem }) {
  const media = (
    <>
      <span className={item.video ? "workflow-feature-media workflow-video-media" : "workflow-feature-media"} style={{ "--workflow-image": `url(${item.image})` } as CSSProperties}>
        {item.video ? (
          <ResponsiveVideo src={item.video} poster={item.image} label={item.title} />
        ) : null}
      </span>
      <span className="workflow-feature-copy">
        <small>{item.eyebrow ?? "MClub"}</small>
        <strong>{item.title}</strong>
        <span>{item.copy}</span>
        {item.href ? (
          <em>
            View details
            <Arrow />
          </em>
        ) : null}
      </span>
    </>
  );

  if (item.href) {
    return (
      <a className="workflow-feature-card" href={item.href}>
        {media}
      </a>
    );
  }

  return <article className="workflow-feature-card">{media}</article>;
}

export function PageMediaGrid({ items, columns = "three" }: { items: PageMediaItem[]; columns?: "two" | "three" | "four" }) {
  return (
    <div className={`workflow-card-grid ${columns}`}>
      {items.map((item) => (
        <PageMediaCard item={item} key={item.title} />
      ))}
    </div>
  );
}
