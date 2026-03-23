"use client";

import { useState } from "react";
import Image from "next/image";
import Navbar from "./components/Navbar";
import ContactModal from "./components/ContactModal";
import FAQ from "./components/FAQ";
import ROICalculator from "./components/ROICalculator";
import ScrollReveal from "./components/ScrollReveal";

function StarSVG() {
  return (
    <svg className="star" viewBox="0 0 24 24">
      <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
    </svg>
  );
}

function Stars() {
  return (
    <div className="stars">
      <StarSVG />
      <StarSVG />
      <StarSVG />
      <StarSVG />
      <StarSVG />
    </div>
  );
}

export default function Home() {
  const [modalOpen, setModalOpen] = useState(false);
  const openModal = () => setModalOpen(true);
  const closeModal = () => setModalOpen(false);

  return (
    <>
      <ScrollReveal />
      <Navbar onOpenModal={openModal} />

      {/* HERO */}
      <section className="hero">
        <div className="hero-grid"></div>
        <div className="hero-glow"></div>

        <div className="container hero-content">
          <div className="hero-layout">
            <div>
              <div className="hero-eyebrow">
                <div className="hero-eyebrow-line"></div>
                <span>Mobile App Development for SMBs</span>
              </div>

              <h1>
                Your app.
                <br />
                Live in
                <br />
                <em>6 weeks.</em>
                <br />
                Guaranteed.
              </h1>

              <p className="hero-sub">
                We build iOS and Android apps for growing businesses — faster
                than any agency, without the enterprise price tag or 6-month
                wait.
              </p>

              <div className="hero-actions">
                <a href="#roi" className="btn-primary">
                  Calculate Your ROI &rarr;
                </a>
                <a href="#process" className="btn-ghost">
                  See How It Works
                </a>
              </div>

              <div className="hero-stats reveal">
                <div className="hero-stat">
                  <strong>6 Wks</strong>
                  <span>Average delivery</span>
                </div>
                <div className="h-divider"></div>
                <div className="hero-stat">
                  <strong>iOS + Android</strong>
                  <span>Both platforms</span>
                </div>
                <div className="h-divider"></div>
                <div className="hero-stat">
                  <strong>Free</strong>
                  <span>Discovery call</span>
                </div>
              </div>
            </div>

            {/* App Mockup */}
            <div className="app-mockup-wrap reveal">
              <div className="app-mockup">
                <div className="app-mockup-inner">
                  <div className="app-header">
                    <div>
                      <h3>Today&apos;s Dashboard</h3>
                      <p>8 jobs completed</p>
                    </div>
                    <span className="badge-green">+23% this week</span>
                  </div>

                  <div className="job-row done">
                    <div>
                      <h4>HVAC Repair — Johnson St</h4>
                      <p>2:00 PM – 3:30 PM</p>
                    </div>
                    <span className="job-status done">Done</span>
                  </div>
                  <div className="job-row active">
                    <div>
                      <h4>App Build — Retail Client</h4>
                      <p>4:00 PM – 6:00 PM</p>
                    </div>
                    <span className="job-status active">In Progress</span>
                  </div>
                  <div className="job-row enroute">
                    <div>
                      <h4>Go-Live — Downtown Caf&eacute;</h4>
                      <p>6:30 PM – 7:30 PM</p>
                    </div>
                    <span className="job-status enroute">En Route</span>
                  </div>

                  <div className="app-footer">
                    <span>Revenue Today</span>
                    <strong>$4,250</strong>
                  </div>
                </div>
              </div>

              {/* Floating stat cards */}
              <div className="float-card fc-left">
                <div className="float-card-icon">
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <polyline points="23 6 13.5 15.5 8.5 10.5 1 18" />
                    <polyline points="17 6 23 6 23 12" />
                  </svg>
                </div>
                <div>
                  <p>Efficiency Gain</p>
                  <strong>+40%</strong>
                </div>
              </div>
              <div className="float-card fc-right">
                <div className="float-card-icon">
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <circle cx="12" cy="12" r="10" />
                    <polyline points="12 6 12 12 16 14" />
                  </svg>
                </div>
                <div>
                  <p>Time Saved / Day</p>
                  <strong>5.2 hrs</strong>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="scroll-indicator">
          <span>Scroll</span>
          <div className="scroll-arrow"></div>
        </div>
      </section>

      {/* PAIN POINTS */}
      <section className="pain" id="pain">
        <div className="container">
          <div className="section-header reveal">
            <div className="tag">The Problem</div>
            <h2>
              Your competitors
              <br />
              already have an app.
            </h2>
            <p>
              Every day without a mobile presence is customers going to someone
              else. Here&apos;s what it&apos;s costing you.
            </p>
          </div>

          <div className="pain-grid reveal">
            <div className="pain-card">
              <div className="pain-icon">📱</div>
              <h3>Invisible to Mobile Users</h3>
              <p>
                Over 70% of web traffic is mobile. No app means you&apos;re
                missing the majority of your market every single day.
              </p>
              <span className="pain-stat">Affects 7 in 10 visitors</span>
            </div>
            <div className="pain-card">
              <div className="pain-icon">⏳</div>
              <h3>Agencies Take Forever</h3>
              <p>
                Traditional agencies quote 6–12 months. By the time you launch,
                the window of opportunity has closed.
              </p>
              <span className="pain-stat">Avg. 8 months wasted</span>
            </div>
            <div className="pain-card">
              <div className="pain-icon">💸</div>
              <h3>Enterprise Pricing for SMBs</h3>
              <p>
                Most agencies were built for big budgets. You end up paying for
                overhead and layers you never needed.
              </p>
              <span className="pain-stat">3× overpayment on average</span>
            </div>
          </div>
        </div>
      </section>

      {/* ROI CALCULATOR */}
      <section id="roi" style={{ padding: "7rem 0" }}>
        <div className="container">
          <div className="section-header reveal">
            <div className="tag">ROI Calculator</div>
            <h2>
              See what your app
              <br />
              is worth to your business.
            </h2>
            <p>
              Most SMBs see payback within the first month. Slide to your
              numbers and see the impact.
            </p>
          </div>

          <ROICalculator onOpenModal={openModal} />
        </div>
      </section>

      {/* PROCESS */}
      <section
        id="process"
        style={{ padding: "7rem 0", background: "var(--bg2)" }}
      >
        <div className="container">
          <div className="section-header reveal">
            <div className="tag">Our Process</div>
            <h2>
              From idea to live app
              <br />
              in four fast steps.
            </h2>
            <p>
              We&apos;ve eliminated every bottleneck in the traditional agency
              model.
            </p>
          </div>

          <div className="process-steps">
            {[
              {
                num: "01",
                title: "Discovery Call",
                desc: "We map your business goals, users, and must-have features. No jargon, just clarity.",
                week: "Day 1",
              },
              {
                num: "02",
                title: "Design Sprint",
                desc: "Full wireframes and a clickable prototype you can test with real customers before a single line of code.",
                week: "Week 1–2",
              },
              {
                num: "03",
                title: "Build & Review",
                desc: "Weekly demos so you see progress, give feedback, and stay in control. No surprises.",
                week: "Week 2–5",
              },
              {
                num: "04",
                title: "Launch & Handover",
                desc: "App Store and Google Play approved, source code delivered, team trained. You own everything.",
                week: "Week 6",
              },
            ].map((step) => (
              <div className="step reveal" key={step.num}>
                <div className="step-num">{step.num}</div>
                <h3>{step.title}</h3>
                <p>{step.desc}</p>
                <span className="step-week">{step.week}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SPEED COMPARISON */}
      <section style={{ padding: "7rem 0" }}>
        <div className="container">
          <div className="section-header reveal">
            <div className="tag">Speed Is Our Product</div>
            <h2>
              We ship in weeks.
              <br />
              Not months.
            </h2>
            <p>Speed is built into our process, not bolted on.</p>
          </div>

          <div className="speed-wrap">
            <div className="speed-card them reveal">
              <div className="speed-lbl">Typical Agency</div>
              <div className="speed-time">
                6–12
                <br />
                <span style={{ fontSize: "22px" }}>months</span>
              </div>
              <div className="speed-items">
                <div className="speed-item">
                  <div className="sdot"></div>3–4 weeks just for a proposal
                </div>
                <div className="speed-item">
                  <div className="sdot"></div>Redesigns that restart the clock
                </div>
                <div className="speed-item">
                  <div className="sdot"></div>Scope creep and delayed launches
                </div>
                <div className="speed-item">
                  <div className="sdot"></div>Monthly retainers with unclear
                  output
                </div>
                <div className="speed-item">
                  <div className="sdot"></div>Developers juggling 10+ projects
                </div>
              </div>
            </div>

            <div className="speed-card us reveal">
              <div className="speed-lbl">Swiftly</div>
              <div className="speed-time">
                6<br />
                <span style={{ fontSize: "22px" }}>weeks</span>
              </div>
              <div className="speed-items">
                <div className="speed-item good">
                  <div className="sdot"></div>Discovery call to prototype in 2
                  weeks
                </div>
                <div className="speed-item good">
                  <div className="sdot"></div>Weekly milestones you can see and
                  test
                </div>
                <div className="speed-item good">
                  <div className="sdot"></div>Fixed scope, fixed timeline, fixed
                  price
                </div>
                <div className="speed-item good">
                  <div className="sdot"></div>Dedicated team on your project only
                </div>
                <div className="speed-item good">
                  <div className="sdot"></div>Launch guarantee or you don&apos;t
                  pay
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section
        id="services"
        style={{ padding: "7rem 0", background: "var(--bg2)" }}
      >
        <div className="container">
          <div className="section-header reveal">
            <div className="tag">What We Build</div>
            <h2>
              Every app your
              <br />
              business might need.
            </h2>
            <p>Practical, revenue-generating apps — not flashy tech demos.</p>
          </div>

          <div className="services-grid">
            {[
              {
                icon: "🍎",
                title: "iOS App Development",
                desc: "Native iPhone and iPad apps built for performance, App Store approval, and real customer engagement.",
                items: [
                  "Swift / SwiftUI",
                  "App Store submission included",
                  "Push notifications & analytics",
                  "Stripe & Apple Pay integration",
                ],
              },
              {
                icon: "🤖",
                title: "Android App Development",
                desc: "Polished Android apps that work across all major devices and pass Google Play review first time.",
                items: [
                  "Kotlin / Jetpack Compose",
                  "Google Play submission included",
                  "Maps & location services",
                  "Firebase backend integration",
                ],
              },
              {
                icon: "🚀",
                title: "Cross-Platform (Both)",
                desc: "One codebase, two platforms. Launch on iOS and Android simultaneously at a fraction of the usual cost.",
                items: [
                  "React Native / Flutter",
                  "Both stores, one build cycle",
                  "Shared design system",
                  "Best value for SMB budgets",
                ],
              },
            ].map((service) => (
              <div className="service-card reveal" key={service.title}>
                <span className="service-icon">{service.icon}</span>
                <h3>{service.title}</h3>
                <p>{service.desc}</p>
                <ul className="service-list">
                  {service.items.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section style={{ padding: "7rem 0" }} id="testimonials">
        <div className="container">
          <div className="section-header reveal">
            <div className="tag">What Clients Say</div>
            <h2>Results, not promises.</h2>
            <p>The standard we hold ourselves to on every project.</p>
          </div>

          <div className="testi-grid">
            {[
              {
                quote:
                  "\u201CWe went from zero mobile presence to a fully live app in 5 weeks. The process was airtight — weekly demos kept us confident the whole way through.\u201D",
                initials: "SC",
                name: "Sarah Chen",
                role: "Owner, Chen HVAC Services",
                result: "+62% mobile revenue in 60 days",
              },
              {
                quote:
                  "\u201CEvery agency quoted 6 months and enterprise prices. Swiftly delivered in 6 weeks at a third of the cost. The app paid for itself in the first month through reduced churn alone.\u201D",
                initials: "MJ",
                name: "Marcus Johnson",
                role: "Operations Manager, Rapid Retail",
                result: "ROI achieved in 11 days",
              },
              {
                quote:
                  "\u201CI was skeptical about the 6-week claim. They delivered in 5 weeks 3 days. The source code handover was clean, documented, and our in-house dev picked it up immediately.\u201D",
                initials: "ER",
                name: "Elena Rodriguez",
                role: "CEO, Bright Electric Co.",
                result: "29% customer retention boost",
              },
            ].map((t) => (
              <div className="testi-card reveal" key={t.initials}>
                <Stars />
                <p className="testi-quote">{t.quote}</p>
                <div className="testi-author">
                  <div className="testi-avatar">{t.initials}</div>
                  <div>
                    <h4>{t.name}</h4>
                    <p>{t.role}</p>
                  </div>
                </div>
                <span className="testi-result">{t.result}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* TRUST / WHY US */}
      <section style={{ padding: "7rem 0", background: "var(--bg2)" }}>
        <div className="container">
          <div className="section-header reveal">
            <div className="tag">Why Trust Us</div>
            <h2>
              We&apos;re new. Here&apos;s
              <br />
              the honest case.
            </h2>
            <p>
              We don&apos;t have 100 clients. We have full attention for yours.
            </p>
          </div>

          <div className="trust-grid">
            {[
              {
                num: "01",
                title: "We have skin in the game",
                desc: "Being new means your project is our reputation. We can't afford mediocre — every app we ship is our entire portfolio.",
              },
              {
                num: "02",
                title: "Launch guarantee, in writing",
                desc: "Your app will be live on both stores within 6 weeks of kickoff — or we work for free until it is. Written into every contract.",
              },
              {
                num: "03",
                title: "Full transparency, always",
                desc: "Weekly video demos, a live project dashboard, and direct access to your developer. No account managers filtering answers.",
              },
              {
                num: "04",
                title: "You own 100% of everything",
                desc: "Source code, design files, store accounts — all yours from day one. No lock-in, no recurring fees unless you want ongoing support.",
              },
            ].map((card) => (
              <div className="trust-card reveal" key={card.num}>
                <div className="trust-num">{card.num}</div>
                <div>
                  <h4>{card.title}</h4>
                  <p>{card.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PRICING */}
      <section id="pricing" style={{ padding: "7rem 0" }}>
        <div className="container">
          <div className="section-header reveal">
            <div className="tag">Transparent Pricing</div>
            <h2>
              Fixed prices.
              <br />
              No surprises.
            </h2>
            <p>All plans include the 6-week launch guarantee.</p>
          </div>

          <div className="pricing-cards">
            {/* Starter */}
            <div className="pricing-card reveal">
              <div className="pricing-tier">Starter</div>
              <div className="pricing-price">
                <sup>$</sup>8,500
              </div>
              <div className="pricing-note">
                One platform &middot; up to 8 screens
              </div>
              <div className="pricing-divider"></div>
              <ul className="pricing-features">
                <li className="yes">
                  <span className="chk">✓</span> iOS or Android
                </li>
                <li className="yes">
                  <span className="chk">✓</span> UI/UX design included
                </li>
                <li className="yes">
                  <span className="chk">✓</span> Store submission
                </li>
                <li className="yes">
                  <span className="chk">✓</span> 6-week delivery guarantee
                </li>
                <li className="yes">
                  <span className="chk">✓</span> 30-day post-launch support
                </li>
                <li>
                  <span style={{ color: "var(--muted)" }}>–</span> Backend /
                  admin panel
                </li>
              </ul>
              <button className="pricing-btn outline" onClick={openModal}>
                Get Started
              </button>
            </div>

            {/* Growth */}
            <div className="pricing-card featured reveal">
              <div className="featured-badge">Most Popular</div>
              <div className="pricing-tier">Growth</div>
              <div className="pricing-price">
                <sup>$</sup>14,900
              </div>
              <div className="pricing-note">
                Both platforms &middot; up to 15 screens
              </div>
              <div className="pricing-divider"></div>
              <ul className="pricing-features">
                <li className="yes">
                  <span className="chk">✓</span> iOS + Android (both)
                </li>
                <li className="yes">
                  <span className="chk">✓</span> UI/UX design included
                </li>
                <li className="yes">
                  <span className="chk">✓</span> Both store submissions
                </li>
                <li className="yes">
                  <span className="chk">✓</span> 6-week delivery guarantee
                </li>
                <li className="yes">
                  <span className="chk">✓</span> 60-day post-launch support
                </li>
                <li className="yes">
                  <span className="chk">✓</span> Basic backend + admin panel
                </li>
              </ul>
              <button className="pricing-btn primary" onClick={openModal}>
                Book Discovery Call
              </button>
            </div>

            {/* Scale */}
            <div className="pricing-card reveal">
              <div className="pricing-tier">Scale</div>
              <div className="pricing-price">Custom</div>
              <div className="pricing-note">
                Complex builds &middot; integrations
              </div>
              <div className="pricing-divider"></div>
              <ul className="pricing-features">
                <li className="yes">
                  <span className="chk">✓</span> iOS + Android (both)
                </li>
                <li className="yes">
                  <span className="chk">✓</span> Full custom UI/UX
                </li>
                <li className="yes">
                  <span className="chk">✓</span> Complex backend / API
                </li>
                <li className="yes">
                  <span className="chk">✓</span> Third-party integrations
                </li>
                <li className="yes">
                  <span className="chk">✓</span> 90-day post-launch support
                </li>
                <li className="yes">
                  <span className="chk">✓</span> Ongoing maintenance plan
                </li>
              </ul>
              <button className="pricing-btn outline" onClick={openModal}>
                Contact Sales
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section
        id="faq"
        style={{ padding: "7rem 0", background: "var(--bg2)" }}
      >
        <div className="container">
          <div className="section-header reveal">
            <div className="tag">FAQ</div>
            <h2>
              Questions we
              <br />
              always get asked.
            </h2>
          </div>

          <FAQ />
        </div>
      </section>

      {/* CTA BANNER */}
      <section id="book" className="cta-banner">
        <div className="container">
          <div className="cta-inner">
            <h2>
              Ready to see your app
              <br />
              <em>live in 6 weeks?</em>
            </h2>
            <div className="cta-right">
              <button className="btn-primary" onClick={openModal}>
                Book Your Free 30-Min Call &rarr;
              </button>
              <span className="cta-note">
                No commitment. No sales pitch. Just a conversation.
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer>
        <div className="container">
          <div className="footer-inner">
            <a href="#" className="footer-logo">
              <Image src="/logo.png" alt="Swiftly" width={30} height={30} />
              Swift<span>ly</span>
            </a>
            <div className="footer-links">
              <a href="#process">Process</a>
              <a href="#services">Services</a>
              <a href="#pricing">Pricing</a>
              <a href="#faq">FAQ</a>
              <a href="#book">Contact</a>
            </div>
            <span className="footer-copy">
              &copy; 2025 Swiftly. All rights reserved.
            </span>
          </div>
        </div>
      </footer>

      {/* CONTACT MODAL */}
      <ContactModal isOpen={modalOpen} onClose={closeModal} />
    </>
  );
}
