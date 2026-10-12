import type { Metadata } from "next";
import Link from "next/link";
import { Breadcrumbs, ButtonLink, SectionIntro } from "@/components/HPInnerPages";
import SiteFrame from "@/components/SiteFrame";

export const metadata: Metadata = {
  title: "Gym Floor Gallery",
  description: "Photos of the MClub gym floor: free weights, machines, cardio and more.",
};

type GalleryPhoto = { src: string; alt: string };
type GallerySection = { slug: string; label: string; copy: string; photos: GalleryPhoto[] };

const gallerySections: GallerySection[] = [
  {
    slug: "free-weights",
    label: "Free Weights",
    copy: "Dumbbells, benches and plate-loaded stations on the open gym floor.",
    photos: [
      { src: "/mclub/media/gym-gallery-weights.jpg", alt: "Free weights area at MClub" },
      { src: "/mclub/media/muscular-coach-at-mclub.jpg", alt: "Member training with free weights at MClub" },
    ],
  },
  {
    slug: "weight-lifting-machines",
    label: "Weight Lifting Machines",
    copy: "Plate-loaded and pin-loaded machines for guided, controlled strength work.",
    photos: [
      { src: "/mclub/media/gym-gallery-strength.jpg", alt: "Weight lifting machines on the MClub strength floor" },
    ],
  },
  {
    slug: "cardio-machines",
    label: "Cardio Machines",
    copy: "Treadmills, bikes and cardio equipment for stamina and everyday energy.",
    photos: [
      { src: "/mclub/media/gym-gallery-cardio.jpg", alt: "Cardio machines at MClub" },
      { src: "/mclub/cardio-training.jpg", alt: "Cardio training session at MClub" },
      { src: "/mclub/media/gym-gallery-conditioning.jpg", alt: "Cardio conditioning on the MClub gym floor" },
    ],
  },
  {
    slug: "locker-rooms",
    label: "Locker Rooms",
    copy: "Changing rooms and personal storage for members.",
    photos: [],
  },
  {
    slug: "showers",
    label: "Showers",
    copy: "On-site showers to clean up after your session.",
    photos: [],
  },
  {
    slug: "strength-training-patio",
    label: "Strength Training Patio",
    copy: "An open-air patio for cardio conditioning and strength work in the fresh air.",
    photos: [],
  },
];

export default async function GymGalleryPage({
  searchParams,
}: {
  searchParams: Promise<{ section?: string }>;
}) {
  const { section: requested } = await searchParams;
  const activeSection =
    gallerySections.find((item) => item.slug === requested) ?? gallerySections[0];

  return (
    <SiteFrame>
      <Breadcrumbs items={["M Club", "Gym", activeSection.label]} />

      <nav className="hp-anchor-tabs" aria-label="Gym gallery sections">
        {gallerySections.map((item) => (
          <Link
            key={item.slug}
            href={`/training/gallery?section=${item.slug}`}
            aria-current={item.slug === activeSection.slug ? "page" : undefined}
          >
            {item.label}
          </Link>
        ))}
      </nav>

      <section className="hp-section">
        <div className="hp-shell">
          <SectionIntro eyebrow="Gym floor" title={activeSection.label} copy={activeSection.copy} />

          {activeSection.photos.length > 0 ? (
            <div className="hp-photo-grid">
              {activeSection.photos.map((photo) => (
                <figure key={photo.src}>
                  <img src={photo.src} alt={photo.alt} loading="lazy" decoding="async" />
                </figure>
              ))}
            </div>
          ) : (
            <div className="hp-photo-grid">
              <p className="hp-photo-grid-empty">
                Photos for {activeSection.label.toLowerCase()} are coming soon. Ask reception for a tour in the meantime.
              </p>
            </div>
          )}

          <div className="hp-dual-cta">
            <ButtonLink href="/training">Back to the gym</ButtonLink>
          </div>
        </div>
      </section>
    </SiteFrame>
  );
}
