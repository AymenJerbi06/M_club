export default function HPJourney() {
  return (
    <section className="hp-journey-section" id="health-journey" data-locked-section="health-journey">
      <div className="hp-journey-hero">
        <video className="hp-journey-video" autoPlay muted loop playsInline preload="metadata" poster="/mclub/coach-team.jpg">
          <source src="/mclub/media/health-journey-video.mp4" type="video/mp4" />
        </video>

        <div className="hp-journey-heading">
          <p className="hp-eyebrow light">Health Journey</p>
          <h2>Start your Health Journey with MClub</h2>
          <p>Personal coaching, nutrition assistance and continuous evaluation.</p>
        </div>

        <svg className="hp-heartline" viewBox="0 0 1440 220" aria-hidden="true" preserveAspectRatio="none">
          <path d="M0 116H96L150 46L206 116H334L376 76L420 116H520L548 154L590 12L632 198L672 116H820L875 62L930 116H1018L1064 152L1112 18L1160 200L1212 116H1320L1362 76L1404 116H1440" />
        </svg>

        <div className="hp-journey-cards">
          <article className="hp-glass-card">
            <h3>Health Journey</h3>
            <p>
              Whether your goal is to feel healthier, drop weight, gain muscle, improve mobility or protect
              your overall wellbeing, MClub pairs personal coaching with nutrition guidance and regular
              evaluations so your plan keeps adapting with you.
            </p>
            <a className="hp-dark-button" href="/coaches">
              Start now
            </a>
          </article>
        </div>
      </div>
    </section>
  );
}
