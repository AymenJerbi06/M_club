import { contact } from "./mclubData";

export default function GGFollowLegend() {
  return (
    <section className="follow-section" id="follow">
      <div className="section-shell follow-grid">
        <div>
          <p className="section-kicker reveal">Follow the family</p>
          <h2 className="mega-title reveal reveal-delay-1">
            <span>Train</span>
            <span>With</span>
            <span>Us</span>
          </h2>
          <p className="body-copy reveal reveal-delay-2">
            Watch class drops, coach highlights, spa offers, swimming academy news, and community events on the
            official M Club Instagram.
          </p>
        </div>

        <div className="social-links reveal reveal-delay-3" aria-label="Social links">
          <a className="social-link" href={contact.phoneHref}>
            Call Reception
            <svg viewBox="0 0 24 24" aria-hidden="true">
              <path fill="currentColor" d="M6.62 10.79a15.05 15.05 0 0 0 6.59 6.59l2.2-2.2a1 1 0 0 1 1.02-.24 11.36 11.36 0 0 0 3.57.57 1 1 0 0 1 1 1V20a1 1 0 0 1-1 1A17 17 0 0 1 3 4a1 1 0 0 1 1-1h3.5a1 1 0 0 1 1 1 11.36 11.36 0 0 0 .57 3.57 1 1 0 0 1-.24 1.02l-2.2 2.2Z" />
            </svg>
          </a>
          <a className="social-link" href={contact.instagram} target="_blank" rel="noreferrer">
            Instagram
            <svg viewBox="0 0 24 24" aria-hidden="true">
              <path fill="currentColor" d="M7 2h10a5 5 0 0 1 5 5v10a5 5 0 0 1-5 5H7a5 5 0 0 1-5-5V7a5 5 0 0 1 5-5Zm0 2a3 3 0 0 0-3 3v10a3 3 0 0 0 3 3h10a3 3 0 0 0 3-3V7a3 3 0 0 0-3-3H7Zm5 4.2A3.8 3.8 0 1 1 8.2 12 3.8 3.8 0 0 1 12 8.2Zm0 2A1.8 1.8 0 1 0 13.8 12 1.8 1.8 0 0 0 12 10.2ZM17.7 6a1.1 1.1 0 1 1-1.1 1.1A1.1 1.1 0 0 1 17.7 6Z" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
}
