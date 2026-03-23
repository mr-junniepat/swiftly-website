"use client";

import { useState } from "react";

const faqs = [
  {
    q: "How do you actually deliver in 6 weeks?",
    a: "Short version: we only take on one project at a time, we use a lot of reusable components, and we've done this enough times to know exactly where time gets wasted. We also won't take your project if we can't hit the deadline.",
  },
  {
    q: "What if I need changes after launch?",
    a: "Every plan comes with post-launch support (30 to 90 days depending on what you pick). After that, we can do a maintenance deal, or you just take the code and hand it to whoever you want. No lock-in.",
  },
  {
    q: "I'm not technical. Is that a problem?",
    a: "Nope. Most of our clients aren't developers. We show you a working demo every week and explain everything in plain English. You don't need to read code to give feedback.",
  },
  {
    q: "What happens on the discovery call?",
    a: "We spend 30 minutes looking at what you've got (or what you want to build), figure out the scope, and tell you what it'll cost. That's it. No pitch deck, no follow-up sales emails.",
  },
  {
    q: "What's the launch guarantee exactly?",
    a: "It's in the contract: if we don't ship within 6 weeks of kickoff (for reasons that are on us), we keep working for free until it's done. Not a marketing line — it's a legal commitment.",
  },
  {
    q: "What counts as 'vibe-coded' software?",
    a: "Anything built quickly with AI tools like Cursor, Bolt, v0, Lovable, Replit, or ChatGPT. It usually works as a demo but breaks with real users because there's no proper auth, no tests, and the code is a mess. That's exactly what we fix.",
  },
  {
    q: "Does it matter which AI tool I used?",
    a: "Doesn't matter. We've worked with code from Cursor, Bolt, v0, Replit, Copilot, Claude — all of them. We've also fixed plenty of hand-written prototypes that have the same problems.",
  },
  {
    q: "Do you only do mobile apps?",
    a: "No, we do everything. Mobile (iOS, Android, React Native, Flutter), web (Next.js, React, SaaS dashboards), and desktop (Electron, Tauri). New builds and vibe-code fixes on any platform.",
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
