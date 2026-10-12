import type { Metadata } from "next";
import { Breadcrumbs, ButtonLink, SectionIntro } from "@/components/HPInnerPages";
import SiteFrame from "@/components/SiteFrame";
import { contact } from "@/components/mclubData";

export const metadata: Metadata = {
  title: "Cantine Menu",
  description: "The MClub cantine menu — coffee, snacks and everyday food.",
};

export default function CantineMenuPage() {
  return (
    <SiteFrame innerPage pageStyle="cantine">
      <Breadcrumbs items={["M Club", "Cantine", "Menu"]} />

      <section className="hp-section story-section cantine-menu page-closing">
        <div className="hp-shell">
          <SectionIntro
            symbol="food"
            eyebrow="On the menu"
            title="The full menu is coming soon."
            copy="We're putting together the printed cantine menu. In the meantime, ask reception for today's coffee, snacks and food options."
          />
          <div className="hp-photo-grid">
            <p className="hp-photo-grid-empty">Menu coming soon. Ask reception for today's options.</p>
          </div>
          <div className="hp-dual-cta">
            <ButtonLink href={contact.phoneHref} dark>Ask reception</ButtonLink>
            <ButtonLink href="/cantine">Back to Cantine</ButtonLink>
          </div>
        </div>
      </section>
    </SiteFrame>
  );
}
