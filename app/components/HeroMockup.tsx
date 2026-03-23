"use client";

import { useState, useEffect, useRef } from "react";

const auditLines = [
  { text: "$ npx swiftly audit ./my-app", type: "command" },
  { text: "Scanning codebase...", type: "muted" },
  { text: "", type: "spacer" },
  { text: "BEFORE", type: "label-bad" },
  { text: "✗ No authentication", type: "red" },
  { text: "✗ 0 tests", type: "red" },
  { text: "✗ No error handling", type: "red" },
  { text: "✗ Hardcoded secrets", type: "red" },
  { text: "! No CI/CD pipeline", type: "yellow" },
  { text: "", type: "spacer" },
  { text: "AFTER SWIFTLY", type: "label-good" },
  { text: "✓ Auth + RBAC configured", type: "green" },
  { text: "✓ 94% test coverage", type: "green" },
  { text: "✓ Error boundaries + logging", type: "green" },
  { text: "✓ Secrets in env vault", type: "green" },
  { text: "✓ CI/CD + auto-deploy", type: "green" },
  { text: "", type: "spacer" },
  { text: "Ready to ship.", type: "result" },
];

function TerminalLine({ line }: { line: (typeof auditLines)[number] }) {
  if (line.type === "spacer") return <div className="terminal-spacer" />;
  if (line.type === "command")
    return (
      <div className="terminal-line dim">
        <span className="terminal-prompt">$</span> {line.text.slice(2)}
      </div>
    );
  if (line.type === "muted")
    return (
      <div className="terminal-line">
        <span className="terminal-muted">{line.text}</span>
      </div>
    );
  if (line.type === "label-bad")
    return (
      <div className="terminal-line">
        <span className="terminal-label-bad">{line.text}</span>
      </div>
    );
  if (line.type === "label-good")
    return (
      <div className="terminal-line">
        <span className="terminal-label-good">{line.text}</span>
      </div>
    );
  if (line.type === "red")
    return (
      <div className="terminal-line dim">
        <span className="terminal-red">{line.text[0]}</span>
        {line.text.slice(1)}
      </div>
    );
  if (line.type === "yellow")
    return (
      <div className="terminal-line dim">
        <span className="terminal-yellow">{line.text[0]}</span>
        {line.text.slice(1)}
      </div>
    );
  if (line.type === "green")
    return (
      <div className="terminal-line">
        <span className="terminal-green">{line.text[0]}</span>
        {line.text.slice(1)}
      </div>
    );
  if (line.type === "result")
    return (
      <div className="terminal-line">
        <span className="terminal-green-bold">{line.text}</span>{" "}
        <span className="terminal-muted">6 weeks, $14,900</span>
      </div>
    );
  return null;
}

// phase: "terminal" → "editor" → "dashboard" (cycles editor ↔ dashboard)
type Phase = "terminal" | "editor" | "dashboard";

export default function HeroMockup() {
  const [visibleLines, setVisibleLines] = useState(0);
  const [phase, setPhase] = useState<Phase>("terminal");
  const [transitioning, setTransitioning] = useState(false);
  const hasStarted = useRef(false);

  useEffect(() => {
    if (hasStarted.current) return;
    hasStarted.current = true;

    let i = 0;
    const interval = setInterval(() => {
      i++;
      setVisibleLines(i);
      if (i >= auditLines.length) {
        clearInterval(interval);
        // After terminal finishes, transition to editor
        setTimeout(() => {
          setTransitioning(true);
          setTimeout(() => {
            setPhase("editor");
            setTransitioning(false);
          }, 400);
        }, 1200);
      }
    }, 120);

    return () => clearInterval(interval);
  }, []);

  // Cycle between editor and dashboard every 5 seconds
  useEffect(() => {
    if (phase === "terminal") return;

    const timer = setInterval(() => {
      setTransitioning(true);
      setTimeout(() => {
        setPhase((p) => (p === "editor" ? "dashboard" : "editor"));
        setTransitioning(false);
      }, 400);
    }, 5000);

    return () => clearInterval(timer);
  }, [phase === "terminal"]);

  return (
    <div className="hero-mockup-container">
      {/* Phase indicator dots */}
      {phase !== "terminal" && (
        <div className="phase-dots">
          <span className={`phase-dot ${phase === "editor" ? "active" : ""}`} />
          <span className={`phase-dot ${phase === "dashboard" ? "active" : ""}`} />
        </div>
      )}

      <div className={`mockup-phase ${transitioning ? "fade-out" : "fade-in"}`}>
        {/* TERMINAL */}
        {phase === "terminal" && (
          <div className="terminal">
            <div className="terminal-bar">
              <div className="terminal-dots">
                <span className="dot dot-red"></span>
                <span className="dot dot-yellow"></span>
                <span className="dot dot-green"></span>
              </div>
              <span className="terminal-title">swiftly audit</span>
            </div>
            <div className="terminal-body">
              {auditLines.slice(0, visibleLines).map((line, i) => (
                <TerminalLine key={i} line={line} />
              ))}
              <div className="terminal-cursor">
                <span className="cursor-blink">_</span>
              </div>
            </div>
          </div>
        )}

        {/* CODE EDITOR */}
        {phase === "editor" && (
          <div className="terminal">
            <div className="terminal-bar">
              <div className="terminal-dots">
                <span className="dot dot-red"></span>
                <span className="dot dot-yellow"></span>
                <span className="dot dot-green"></span>
              </div>
              <span className="terminal-title">app/api/auth.ts</span>
              <div className="editor-tabs">
                <span className="editor-tab active">auth.ts</span>
                <span className="editor-tab">db.ts</span>
                <span className="editor-tab">tests/</span>
              </div>
            </div>
            <div className="terminal-body editor-body">
              <div className="code-line"><span className="line-num">1</span><span className="code-keyword">import</span>{" { "}<span className="code-var">NextAuth</span>{" } "}<span className="code-keyword">from</span> <span className="code-string">&quot;next-auth&quot;</span></div>
              <div className="code-line"><span className="line-num">2</span><span className="code-keyword">import</span>{" { "}<span className="code-var">PrismaAdapter</span>{" } "}<span className="code-keyword">from</span> <span className="code-string">&quot;@auth/prisma&quot;</span></div>
              <div className="code-line"><span className="line-num">3</span></div>
              <div className="code-line"><span className="line-num">4</span><span className="code-keyword">export const</span> <span className="code-fn">auth</span>{" = "}<span className="code-fn">NextAuth</span>{"({"}</div>
              <div className="code-line"><span className="line-num">5</span>{"  "}<span className="code-prop">adapter</span>{": "}<span className="code-fn">PrismaAdapter</span>{"("}<span className="code-var">prisma</span>{"),"}</div>
              <div className="code-line"><span className="line-num">6</span>{"  "}<span className="code-prop">providers</span>{": ["}</div>
              <div className="code-line"><span className="line-num">7</span>{"    "}<span className="code-fn">Google</span>{"({ "}<span className="code-prop">clientId</span>{": "}<span className="code-var">env</span>{"."}<span className="code-prop">GOOGLE_ID</span>{" }),"}</div>
              <div className="code-line"><span className="line-num">8</span>{"    "}<span className="code-fn">Credentials</span>{"({ ... }),"}</div>
              <div className="code-line"><span className="line-num">9</span>{"  ],"}</div>
              <div className="code-line"><span className="line-num">10</span>{"  "}<span className="code-prop">session</span>{": { "}<span className="code-prop">strategy</span>{": "}<span className="code-string">&quot;jwt&quot;</span>{" },"}</div>
              <div className="code-line"><span className="line-num">11</span>{"})"}</div>
              <div className="code-line"><span className="line-num">12</span></div>
              <div className="editor-status">
                <div className="status-left">
                  <span className="status-badge good">✓ All checks passed</span>
                  <span className="status-item">TypeScript</span>
                  <span className="status-item">94% coverage</span>
                </div>
                <span className="status-item">UTF-8</span>
              </div>
            </div>
          </div>
        )}

        {/* AUDIT DASHBOARD */}
        {phase === "dashboard" && (
          <div className="terminal">
            <div className="terminal-bar">
              <div className="terminal-dots">
                <span className="dot dot-red"></span>
                <span className="dot dot-yellow"></span>
                <span className="dot dot-green"></span>
              </div>
              <span className="terminal-title">Audit Report</span>
            </div>
            <div className="dashboard-body">
              <div className="dash-scores">
                {[
                  { label: "Security", score: 96 },
                  { label: "Tests", score: 94 },
                  { label: "Performance", score: 91 },
                  { label: "Code Quality", score: 88 },
                ].map((s) => (
                  <div className="score-circle-wrap" key={s.label}>
                    <svg className="score-ring" viewBox="0 0 80 80">
                      <circle cx="40" cy="40" r="34" fill="none" stroke="rgba(255,255,255,0.06)" strokeWidth="5" />
                      <circle cx="40" cy="40" r="34" fill="none" stroke="#28c840" strokeWidth="5" strokeDasharray={`${(s.score / 100) * 213.6} 213.6`} strokeLinecap="round" transform="rotate(-90 40 40)" />
                    </svg>
                    <span className="score-num">{s.score}</span>
                    <span className="score-label">{s.label}</span>
                  </div>
                ))}
              </div>

              <div className="dash-stats">
                <div className="dash-stat"><span className="dash-stat-val">247</span><span className="dash-stat-label">Files audited</span></div>
                <div className="dash-stat"><span className="dash-stat-val">18</span><span className="dash-stat-label">Issues fixed</span></div>
                <div className="dash-stat"><span className="dash-stat-val">0</span><span className="dash-stat-label">Critical bugs</span></div>
                <div className="dash-stat"><span className="dash-stat-val">6 wks</span><span className="dash-stat-label">Time to ship</span></div>
              </div>

              <div className="dash-checks">
                <div className="dash-check pass"><span className="dc-icon">✓</span> Authentication &amp; RBAC</div>
                <div className="dash-check pass"><span className="dc-icon">✓</span> 94% test coverage</div>
                <div className="dash-check pass"><span className="dc-icon">✓</span> Error handling &amp; logging</div>
                <div className="dash-check pass"><span className="dc-icon">✓</span> Secrets in env vault</div>
                <div className="dash-check pass"><span className="dc-icon">✓</span> CI/CD with auto-deploy</div>
                <div className="dash-check pass"><span className="dc-icon">✓</span> Rate limiting &amp; validation</div>
              </div>

              <div className="dash-footer">
                <span className="dash-badge">✓ Production-ready</span>
                <span className="dash-footer-text">Last audit: just now</span>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
