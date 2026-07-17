"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { ArrowUpRight, Close, Menu } from "@/components/icons";

const links = [
  { href: "#services", label: "Services" },
  { href: "#work", label: "What we make" },
  { href: "#process", label: "Process" },
  { href: "#faq", label: "FAQ" },
];

export function Logo() {
  return (
    <Link className="logo" href="/" aria-label="Forge3D home">
      <span className="logo-mark" aria-hidden="true">
        <span>F</span>
      </span>
      <span>
        Forge<span>3D</span>
      </span>
    </Link>
  );
}

export function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header className={`site-header ${scrolled ? "is-scrolled" : ""}`}>
      <div className="header-inner shell">
        <Logo />

        <nav className="desktop-nav" aria-label="Primary navigation">
          {links.map((link) => (
            <a href={link.href} key={link.href}>
              {link.label}
            </a>
          ))}
        </nav>

        <a className="button button-small desktop-cta" href="#quote">
          Start a project
          <ArrowUpRight width={17} height={17} />
        </a>

        <button
          className="menu-button"
          type="button"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          onClick={() => setOpen((current) => !current)}
        >
          {open ? <Close /> : <Menu />}
        </button>
      </div>

      <div className={`mobile-menu ${open ? "is-open" : ""}`}>
        <nav aria-label="Mobile navigation">
          {links.map((link, index) => (
            <a
              href={link.href}
              key={link.href}
              onClick={() => setOpen(false)}
            >
              <span>0{index + 1}</span>
              {link.label}
            </a>
          ))}
        </nav>
        <a
          className="button button-primary"
          href="#quote"
          onClick={() => setOpen(false)}
        >
          Request a quote
          <ArrowUpRight />
        </a>
        <p>Custom 3D printing across the GTA.</p>
      </div>
    </header>
  );
}
