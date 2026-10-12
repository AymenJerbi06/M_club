const articles = [
  {
    date: "16.05.2026",
    title: "Swimming Gala at MClub",
    copy: "Academy swimmers celebrate familiarisation, initiation, learning and perfection levels with their families.",
    image: "/mclub/group-energy.jpg",
    href: "/events",
  },
  {
    date: "29.04.2026",
    title: "Aqua Dynamique in the semi-Olympic pool",
    copy: "Aquagym, Aquabike, WatFit and Aqua Dynamique sessions bring music, coaching and low-impact conditioning into the water.",
    image: "/mclub/aqua-dynamique.jpg",
    href: "/spa",
  },
  {
    date: "19.02.2026",
    title: "Personal training, EMS and nutrition",
    copy: "Our coaches support strength, EMS, nutrition follow-up, body composition analysis, swimming, boxing, yoga and family programs.",
    image: "/mclub/personal-coaching.jpg",
    href: "/coaches",
  },
  {
    date: "17.05.2026",
    title: "Gymnastics Gala and kids academy",
    copy: "Baby Gym, gymnastics, swimming and camp programs give families a complete youth development path.",
    image: "/mclub/kids-gymnastics.jpg",
    href: "/kids",
  },
];

function Arrow() {
  return (
    <svg viewBox="0 0 44 20" aria-hidden="true">
      <path d="M1 10h39M31 2l9 8-9 8" />
    </svg>
  );
}

export default function HPJournal() {
  return (
    <section className="hp-news-section">
      <div className="hp-news-container">
        <h2 className="hp-section-title">MClub News</h2>

        <div className="hp-news-list">
          {articles.map((article) => (
            <a className="hp-news-row" href={article.href} key={article.title}>
              <span className="hp-news-image" style={{ "--hp-news-image": `url(${article.image})` } as React.CSSProperties} />
              <span className="hp-news-copy">
                <time>{article.date}</time>
                <strong>{article.title}</strong>
                <span>{article.copy}</span>
              </span>
              <span className="hp-news-arrow">
                <Arrow />
              </span>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
