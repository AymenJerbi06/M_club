import Image from "next/image";
import { MapPin, Phone } from "lucide-react";
import { contact } from "./mclubData";

const exploreLinks = [
  { label: "Gym", href: "/training" },
  { label: "Piscine", href: "/piscine" },
  { label: "Spa & Hammam", href: "/spa" },
  { label: "Classes", href: "/classes" },
  { label: "Personal Training", href: "/coaches" },
  { label: "Other Sports", href: "/sports" },
];

const clubLinks = [
  { label: "About MClub", href: "/about" },
  { label: "Membership", href: "/membership" },
  { label: "Kids", href: "/kids" },
  { label: "Cantine", href: "/cantine" },
  { label: "Events", href: "/events" },
  { label: "Contact", href: "/contact" },
];

function InstagramIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" aria-hidden="true">
      <rect x="3" y="3" width="18" height="18" rx="5" />
      <circle cx="12" cy="12" r="4" />
      <path d="M17.5 6.5h.01" strokeLinecap="round" />
    </svg>
  );
}

export default function GGFooter() {
  return (
    <footer className="hp-footer">
      <div className="hp-footer-grid">
        <div className="hp-footer-brand">
          <a href="/" className="hp-footer-logo" aria-label="MClub home">
            <Image src="/Logo.jpg" alt="" width={52} height={52} />
            <span>
              M CLUB
              <small>Fitness & Spa</small>
            </span>
          </a>

          <p>Training, swimming, recovery and family life. One club in Sfax.</p>
          <div className="hp-footer-social">
            <a href={contact.instagram} target="_blank" rel="noreferrer"><InstagramIcon /> Instagram</a>
            <span>English</span>
          </div>
        </div>

        <nav className="hp-footer-col" aria-label="Explore">
          <h3>Explore</h3>
          {exploreLinks.map((link) => (
            <a href={link.href} key={link.label}>
              {link.label}
            </a>
          ))}
        </nav>

        <nav className="hp-footer-col" aria-label="Your club">
          <h3>Your Club</h3>
          {clubLinks.map((link) => (
            <a href={link.href} key={link.label}>
              {link.label}
            </a>
          ))}
        </nav>
        <div className="hp-footer-col hp-footer-contact">
          <h3>Visit & Contact</h3>
          <a href="/location"><MapPin aria-hidden="true" /><span>{contact.address}</span></a>
          <a href={contact.phoneHref}><Phone aria-hidden="true" /><span><small>Reception</small>{contact.phone}</span></a>
          <a href={contact.spaPhoneHref}><Phone aria-hidden="true" /><span><small>Spa booking</small>{contact.spaPhone}</span></a>
        </div>
      </div>

      <div className="hp-footer-bottom">
        <span>Copyright &copy; MClub 2026</span>
        <nav aria-label="Footer links"><a href="/location">Find us</a><a href="/contact">Get in touch</a><a href="/membership">Membership</a></nav>
      </div>
    </footer>
  );
}
