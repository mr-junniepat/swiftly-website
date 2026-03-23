"use client";

import { useEffect, useState } from "react";
import Image from "next/image";

export default function Navbar({ onOpenModal }: { onOpenModal: () => void }) {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header>
      <nav id="nav" className={scrolled ? "scrolled" : ""} aria-label="Main navigation">
        <a href="#" className="nav-logo" aria-label="Swiftly — Home">
          <Image src="/logo.png" alt="Swiftly logo" width={38} height={38} />
          Swift<span>ly</span>
        </a>

        <div className="nav-links">
          <a href="#pain">Why Swiftly</a>
          <a href="#vibe-fix">Fix Vibe Code</a>
          <a href="#roi">ROI Calculator</a>
          <a href="#process">Process</a>
          <a href="#pricing">Pricing</a>
          <a href="#faq">FAQ</a>
        </div>

        <div className="nav-cta">
          <button className="btn-primary" onClick={onOpenModal}>
            Book Free Call &rarr;
          </button>
        </div>
      </nav>
    </header>
  );
}
