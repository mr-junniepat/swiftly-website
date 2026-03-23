"use client";

import { useEffect, useRef } from "react";

export default function ContactModal({
  isOpen,
  onClose,
}: {
  isOpen: boolean;
  onClose: () => void;
}) {
  const overlayRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  function handleBackdropClick(e: React.MouseEvent) {
    if (e.target === overlayRef.current) onClose();
  }

  function handleSubmit() {
    onClose();
    alert("Thanks! We'll be in touch within 24 hours to confirm your call.");
  }

  return (
    <div
      className={`modal-overlay${isOpen ? " open" : ""}`}
      ref={overlayRef}
      onClick={handleBackdropClick}
    >
      <div className="modal" role="dialog" aria-modal="true" aria-label="Book a strategy call">
        <button className="modal-close" onClick={onClose} aria-label="Close modal">
          &times;
        </button>
        <h3>Book Your Strategy Call</h3>
        <p>
          30 minutes. We&apos;ll map your app idea and show you the exact
          revenue impact. Zero pressure.
        </p>

        <div className="form-row">
          <div className="form-group">
            <label>First Name</label>
            <input type="text" placeholder="Jay" />
          </div>
          <div className="form-group">
            <label>Last Name</label>
            <input type="text" placeholder="Smith" />
          </div>
        </div>
        <div className="form-group">
          <label>Business Name</label>
          <input type="text" placeholder="Acme Co." />
        </div>
        <div className="form-row">
          <div className="form-group">
            <label>Industry</label>
            <select defaultValue="Retail">
              <option>Retail</option>
              <option>Food &amp; Beverage</option>
              <option>Health &amp; Wellness</option>
              <option>Field Services</option>
              <option>Professional Services</option>
              <option>Other</option>
            </select>
          </div>
          <div className="form-group">
            <label>Team Size</label>
            <select defaultValue="1–5">
              <option>1–5</option>
              <option>6–20</option>
              <option>21–50</option>
              <option>50+</option>
            </select>
          </div>
        </div>
        <div className="form-group">
          <label>Email</label>
          <input type="email" placeholder="you@yourbusiness.com" />
        </div>
        <div className="form-group">
          <label>Phone</label>
          <input type="tel" placeholder="+1 (555) 000-0000" />
        </div>

        <button
          className="btn-primary"
          style={{
            width: "100%",
            justifyContent: "center",
            marginTop: "1.5rem",
            padding: "16px",
          }}
          onClick={handleSubmit}
        >
          Schedule My Call &rarr;
        </button>
        <p
          style={{
            textAlign: "center",
            fontSize: "12px",
            color: "var(--muted)",
            marginTop: ".75rem",
          }}
        >
          No credit card &middot; Setup in 48 hours &middot; Cancel anytime
        </p>
      </div>
    </div>
  );
}
