"use client";

import { useEffect, useState } from "react";
import Image from "next/image";

export default function Navbar({ bookingUrl }: { bookingUrl: string }) {
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
          <Image src="/switfly-hor.png" alt="Swiftly logo" width={150} height={30} />
        </a>

        <div className="nav-links">
          <a href="#vibe-fix">Services</a>
          <a href="#how-it-works">Process</a>
          <a href="#pricing">Pricing</a>
          <a href="#roi">ROI</a>
          <a href="#faq">FAQ</a>
        </div>

        <div className="nav-cta">
          <a href={bookingUrl} target="_blank" rel="noopener noreferrer" className="btn-primary">
            Book Free Call &rarr;
          </a>
        </div>
      </nav>
    </header>
  );
}
