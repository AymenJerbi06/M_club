import { ButtonLink, Monogram } from "@/components/HPInnerPages";

export default function NotFound() {
  return (
    <main className="hp-404">
      <section className="hp-404-card">
        <div>
          <Monogram />
          <p className="hp-utility-label">M Club Fitness & Spa</p>
          <h1>Page not found.</h1>
          <p>The page you are looking for does not exist, or it may have moved while the club experience is being refined.</p>
          <ButtonLink href="/">Return to home page</ButtonLink>
        </div>
      </section>
    </main>
  );
}
