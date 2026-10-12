import Image from "next/image";
import Link from "next/link";
import ResponsiveVideo from "./ResponsiveVideo";

export default function GGHero() {
  return (
    <section className="section-hero-home">
      <div className="hero-header-home">
        <ResponsiveVideo className="home-hero-video" src="/mclub/classes-motion.mp4" poster="/mclub/hero-strength.jpg" priority />
        <div className="home-hero-img" aria-hidden="true" />
        <div className="gradient-overlay home" />

        <div className="hero-content-home">
          <div className="hero-content-top">
            <Image className="hero-content-logo" src="/Logo.jpg" alt="M Club Fitness & Spa" width={260} height={260} priority />
          </div>

          <div className="hero-content-btm">
            <div className="btn-wrapperv1">
              <Link href="/membership" className="button secondary">
                Discover offers
              </Link>
              <Link href="/location" className="button primary">
                Book a trial day
              </Link>
            </div>
            <p className="heading-small text-white">Discover the world of MClub.</p>
          </div>

          <a className="arrow-down" href="#welcome" aria-label="Scroll to welcome section">
            <svg viewBox="0 0 35 57" aria-hidden="true">
              <path
                d="M31.1074 41.8953C31.5345 41.4496 31.5345 40.7269 31.1074 40.2812C30.6802 39.8355 29.9877 39.8355 29.5606 40.2812L18.5933 51.7254L18.5933 2.28242C18.5933 1.65209 18.1036 1.14111 17.4995 1.14111C16.8954 1.14111 16.4058 1.65209 16.4058 2.28242L16.4058 51.723L5.44071 40.2812C5.01358 39.8355 4.32105 39.8355 3.89392 40.2812C3.46678 40.7269 3.46678 41.4496 3.89392 41.8953L16.7272 55.2866C17.1544 55.7323 17.8469 55.7323 18.274 55.2866L31.1074 41.8953Z"
                fill="currentColor"
              />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
}
