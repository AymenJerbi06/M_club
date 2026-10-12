import { highlightCards } from "./mclubData";

export default function GGHighlights() {
  return (
    <section className="hp-impressions-section">
      <div className="hp-impressions-wrap">
        <h2 className="hp-section-title">Impressions from our club</h2>

        <div className="hp-impressions-rail" aria-label="MClub impressions">
          {highlightCards.map((item) => (
            <a className="hp-impression-card" href="/training" key={item.title}>
              <span className="hp-impression-image" style={{ "--hp-impression-image": `url(${item.image})` } as React.CSSProperties} />
              <span>{item.title}</span>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
