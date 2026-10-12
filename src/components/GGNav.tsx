"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useLayoutEffect, useRef, useState } from "react";
import { classCards, contact } from "./mclubData";
import { Phone } from "lucide-react";

const navItems = [
  { label: "Home", href: "/" },
  { label: "Gym", href: "/training" },
  { label: "Spa et Hammem", href: "/spa" },
  { label: "Piscine", href: "/piscine" },
  { label: "Classes", href: "/classes" },
  { label: "Personal Training", href: "/coaches" },
  { label: "Events", href: "/events" },
  { label: "Cantine", href: "/cantine" },
  { label: "Kids", href: "/kids" },
  { label: "Other Sports", href: "/sports" },
];

function Icon({ type }: { type: "search" | "pin" | "close" | "menu" }) {
  const paths = {
    search:
      "M10.7 3a7.7 7.7 0 1 1 0 15.4 7.7 7.7 0 0 1 0-15.4Zm0 2a5.7 5.7 0 1 0 0 11.4 5.7 5.7 0 0 0 0-11.4Zm5.2 11.3 4.1 4.1-1.4 1.4-4.1-4.1 1.4-1.4Z",
    pin: "M12 2a7 7 0 0 0-7 7c0 5.25 7 13 7 13s7-7.75 7-13a7 7 0 0 0-7-7Zm0 9.5A2.5 2.5 0 1 1 12 6a2.5 2.5 0 0 1 0 5.5Z",
    close:
      "m13.41 12 5.3-5.29-1.42-1.42-5.29 5.3-5.29-5.3-1.42 1.42 5.3 5.29-5.3 5.29 1.42 1.42 5.29-5.3 5.29 5.3 1.42-1.42-5.3-5.29Z",
    menu: "M4 7h16v2H4V7Zm0 4h16v2H4v-2Zm0 4h16v2H4v-2Z",
  };

  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path fill="currentColor" d={paths[type]} />
    </svg>
  );
}

export default function GGNav() {
  const pathname = usePathname();
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [bannerVisible, setBannerVisible] = useState(true);
  const [compact, setCompact] = useState(false);
  const compactRef = useRef(false);
  const drawerRef = useRef<HTMLElement>(null);
  const searchRef = useRef<HTMLDivElement>(null);
  const returnFocus = useRef<HTMLElement | null>(null);

  const openOverlay = (overlay: "menu" | "search", trigger: HTMLElement) => {
    returnFocus.current = trigger;
    if (overlay === "menu") setDrawerOpen(true);
    else setSearchOpen(true);
  };

  useEffect(() => {
    document.body.classList.toggle("nav-locked", drawerOpen || searchOpen);
    return () => document.body.classList.remove("nav-locked");
  }, [drawerOpen, searchOpen]);

  useEffect(() => {
    if (!drawerOpen && !searchOpen) return;
    const dialog = searchOpen ? searchRef.current : drawerRef.current;
    if (!dialog) return;
    const focusable = () => Array.from(dialog.querySelectorAll<HTMLElement>(
      'a[href], button:not([disabled]), input, select, textarea, [tabindex="0"]'
    )).filter(element => element.getClientRects().length > 0);
    const frame = requestAnimationFrame(() => {
      (dialog.querySelector<HTMLElement>("input") ?? focusable()[0])?.focus({ preventScroll: true });
    });
    const handleKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setDrawerOpen(false);
        setSearchOpen(false);
      }
      if (event.key !== "Tab") return;
      const elements = focusable();
      if (!elements.length) return;
      const index = elements.indexOf(document.activeElement as HTMLElement);
      const next = index < 0 ? (event.shiftKey ? elements.length - 1 : 0)
        : (index + (event.shiftKey ? -1 : 1) + elements.length) % elements.length;
      event.preventDefault();
      elements[next]?.focus();
    };
    document.addEventListener("keydown", handleKey);
    return () => {
      cancelAnimationFrame(frame);
      document.removeEventListener("keydown", handleKey);
      returnFocus.current?.focus({ preventScroll: true });
    };
  }, [drawerOpen, searchOpen]);

  useEffect(() => {
    let frame = 0;
    const updateCompactState = () => {
      if (frame) return;
      frame = window.requestAnimationFrame(() => {
        const scrollTop = window.scrollY || document.documentElement.scrollTop || document.body.scrollTop || 0;
        const nextCompact = scrollTop > 72;
        if (compactRef.current !== nextCompact) {
          compactRef.current = nextCompact;
          setCompact(nextCompact);
        }
        frame = 0;
      });
    };
    updateCompactState();
    window.addEventListener("scroll", updateCompactState, { passive: true });
    document.addEventListener("scroll", updateCompactState, { capture: true, passive: true });
    return () => {
      if (frame) window.cancelAnimationFrame(frame);
      window.removeEventListener("scroll", updateCompactState);
      document.removeEventListener("scroll", updateCompactState, { capture: true });
    };
  }, []);

  useLayoutEffect(() => {
    const header = document.querySelector<HTMLElement>(".site-header");
    const banner = document.querySelector<HTMLElement>(".offer-banner");
    const updateChromeOffset = () => {
      const headerBottom = header?.getBoundingClientRect().bottom ?? 0;
      document.documentElement.style.setProperty("--mclub-header-height", `${headerBottom}px`);
      const bannerBottom = banner?.getBoundingClientRect().bottom ?? 0;
      const offset = Math.max(0, headerBottom, bannerBottom);
      document.documentElement.style.setProperty("--mclub-live-chrome-offset", `${offset}px`);
      const scrollTop = window.scrollY || document.documentElement.scrollTop || document.body.scrollTop || 0;
      if (scrollTop > 72) return;
      // Keep the page's top spacer stable while the navigation contracts on scroll.
      document.documentElement.style.setProperty("--mclub-chrome-offset", `${Math.ceil(offset)}px`);
    };

    updateChromeOffset();
    const frame = window.requestAnimationFrame(updateChromeOffset);
    const observer = new ResizeObserver(updateChromeOffset);
    if (header) observer.observe(header);
    if (banner) observer.observe(banner);
    header?.addEventListener("transitionend", updateChromeOffset);
    banner?.addEventListener("transitionend", updateChromeOffset);
    window.addEventListener("resize", updateChromeOffset);

    return () => {
      window.cancelAnimationFrame(frame);
      observer.disconnect();
      header?.removeEventListener("transitionend", updateChromeOffset);
      banner?.removeEventListener("transitionend", updateChromeOffset);
      window.removeEventListener("resize", updateChromeOffset);
    };
  }, [bannerVisible, compact, pathname]);

  const isActive = (href: string) => {
    const path = href.split("#")[0];
    if (path === "/") return pathname === "/";
    return pathname === path || pathname.startsWith(`${path}/`);
  };

  return (
    <>
      <header className={`site-header ${compact ? "is-compact" : ""}`}>
        <div className="secondary-navigation">
          <a href={contact.instagram} target="_blank" rel="noreferrer">
            Instagram
          </a>
          <a href={contact.phoneHref}>Reception</a>
          <a href={contact.spaPhoneHref}>Spa booking</a>
          <span>English</span>
        </div>

        <div className="nav-main-row">
          <Link className="button-nav" href="/membership">
            Trial day
          </Link>

          <Link href="/" className="brand-mark" aria-label="M Club home">
            <Image src="/Logo.jpg" alt="" width={72} height={72} priority />
            <span>
              <strong>M Club</strong>
              <small>Fitness & Spa</small>
            </span>
          </Link>

          <div className="nav-actions">
            <a className="nav-reception" href={contact.phoneHref} aria-label="Call reception" title="Call reception">
              <Phone aria-hidden="true" />
            </a>
            <button className="nav-icon" type="button" aria-label="Open search" aria-expanded={searchOpen} aria-controls="site-search-dialog" onClick={(event) => openOverlay("search", event.currentTarget)}>
              <Icon type="search" />
              <span>Search</span>
            </button>
            <Link className="button secondary" href="/membership">
              Join now
            </Link>
            <button className="hamburger" type="button" aria-label="Open menu" aria-expanded={drawerOpen} aria-controls="site-menu-dialog" onClick={(event) => openOverlay("menu", event.currentTarget)}>
              <Icon type="menu" />
            </button>
          </div>
        </div>

        <nav className="primary-menu" aria-label="Primary navigation">
          {navItems.map((item) => (
            <Link className={isActive(item.href) ? "active" : undefined} href={item.href} key={item.label} aria-current={isActive(item.href) ? "page" : undefined}>
              {item.label}
            </Link>
          ))}
        </nav>
      </header>

      {bannerVisible ? (
        <div className={`offer-banner ${compact ? "is-compact" : ""}`}>
          <strong><span className="offer-full">Start your MClub journey with Fitness, Piscine or Global access.</span><span className="offer-short">Fitness, Piscine & Global access.</span></strong>
          <Link href="/membership">View membership</Link>
          <button type="button" aria-label="Close offer banner" onClick={() => setBannerVisible(false)}>
            X
          </button>
        </div>
      ) : null}

      <button
        className={`nav-scrim ${drawerOpen ? "open" : ""}`}
        type="button"
        aria-label="Close menu overlay"
        tabIndex={-1}
        aria-hidden={!drawerOpen}
        onClick={() => setDrawerOpen(false)}
      />

      <aside ref={drawerRef} id="site-menu-dialog" className={`nav-drawer ${drawerOpen ? "open" : ""}`} role="dialog" aria-label="Menu" aria-modal={drawerOpen ? true : undefined} aria-hidden={!drawerOpen} inert={!drawerOpen}>
        <div className="drawer-top">
          <span className="drawer-brand">
            <Image src="/Logo.jpg" alt="" width={64} height={64} />
            <span>M Club Fitness & Spa</span>
          </span>
          <button className="drawer-close" type="button" aria-label="Close menu" onClick={() => setDrawerOpen(false)}>
            <Icon type="close" />
          </button>
        </div>

        <nav className="drawer-nav" aria-label="Mobile navigation">
          {navItems.map((item) => (
            <Link className={isActive(item.href) ? "active" : undefined} href={item.href} key={item.href} onClick={() => setDrawerOpen(false)} aria-current={isActive(item.href) ? "page" : undefined}>
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="drawer-feature">
          {classCards.slice(0, 2).map((item) => (
            <Link
              href="/classes"
              key={item.title}
              style={{ "--drawer-image": `url(${item.image})` } as React.CSSProperties}
              onClick={() => setDrawerOpen(false)}
            >
              <small>{item.kicker}</small>
              <span>{item.title}</span>
            </Link>
          ))}
        </div>

        <a className="button primary" href={contact.phoneHref}>
          Book by phone
        </a>
      </aside>

      {searchOpen ? (
        <div ref={searchRef} id="site-search-dialog" className="search-panel" role="dialog" aria-modal="true" aria-label="Search">
          <button className="drawer-close" type="button" aria-label="Close search" onClick={() => setSearchOpen(false)}>
            <Icon type="close" />
          </button>
          <form className="search-form">
            <label htmlFor="site-search">What are you looking for?</label>
            <input id="site-search" autoFocus type="search" placeholder="Classes, pool, spa, personal training..." />
            <button className="button secondary" type="submit">
              Search
            </button>
          </form>
        </div>
      ) : null}
    </>
  );
}
