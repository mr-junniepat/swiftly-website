"use client";

import { useState } from "react";

const faqs = [
  {
    q: "How can you really deliver in 6 weeks?",
    a: "We achieve this through a fixed process, pre-built component libraries, and a dedicated team on your project only. We don't start a project unless we have the bandwidth to complete it on schedule.",
  },
  {
    q: "What if I need changes after launch?",
    a: "Every plan includes post-launch support (30–90 days depending on tier). After that, we offer flexible maintenance plans — or you take the source code to any developer. You're never locked in.",
  },
  {
    q: "Do I need a technical background to work with you?",
    a: "Not at all. Most clients are business owners, not developers. Our weekly demos are designed to be reviewed by non-technical stakeholders.",
  },
  {
    q: "What happens on the free discovery call?",
    a: "A 30-minute conversation where we learn about your business and what you want the app to accomplish. By the end you'll have a clear scope, timeline, and whether we're the right fit — no pitch, no pressure.",
  },
  {
    q: "How does the launch guarantee work?",
    a: "If your app isn't live within 6 weeks of the agreed kickoff — for reasons within our control — we continue working at no additional charge. Written into every contract, not just a verbal promise.",
  },
  {
    q: "Can you integrate with my existing tools?",
    a: "Yes — we integrate with Salesforce, HubSpot, Stripe, QuickBooks, Xero, and custom APIs. Mention your tools in the discovery call and we'll scope it in.",
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  function toggle(i: number) {
    setOpenIndex(openIndex === i ? null : i);
  }

  return (
    <div className="faq-list reveal">
      {faqs.map((faq, i) => (
        <div key={i} className={`faq-item${openIndex === i ? " open" : ""}`}>
          <button className="faq-q" onClick={() => toggle(i)}>
            {faq.q}
            <span className="faq-arrow">+</span>
          </button>
          <div className="faq-a">
            <div className="faq-a-inner">{faq.a}</div>
          </div>
        </div>
      ))}
    </div>
  );
}
