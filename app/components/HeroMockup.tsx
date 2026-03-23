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
    return (<div className="terminal-line dim"><span className="terminal-prompt">$</span> {line.text.slice(2)}</div>);
  if (line.type === "muted")
    return (<div className="terminal-line"><span className="terminal-muted">{line.text}</span></div>);
  if (line.type === "label-bad")
    return (<div className="terminal-line"><span className="terminal-label-bad">{line.text}</span></div>);
  if (line.type === "label-good")
    return (<div className="terminal-line"><span className="terminal-label-good">{line.text}</span></div>);
  if (line.type === "red")
    return (<div className="terminal-line dim"><span className="terminal-red">{line.text[0]}</span>{line.text.slice(1)}</div>);
  if (line.type === "yellow")
    return (<div className="terminal-line dim"><span className="terminal-yellow">{line.text[0]}</span>{line.text.slice(1)}</div>);
  if (line.type === "green")
    return (<div className="terminal-line"><span className="terminal-green">{line.text[0]}</span>{line.text.slice(1)}</div>);
  if (line.type === "result")
    return (<div className="terminal-line"><span className="terminal-green-bold">{line.text}</span> <span className="terminal-muted">6 weeks, $14,900</span></div>);
  return null;
}

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
                <span className="dot dot-red" /><span className="dot dot-yellow" /><span className="dot dot-green" />
              </div>
              <span className="terminal-title">swiftly audit</span>
            </div>
            <div className="terminal-body">
              {auditLines.slice(0, visibleLines).map((line, i) => (
                <TerminalLine key={i} line={line} />
              ))}
              <div className="terminal-cursor"><span className="cursor-blink">_</span></div>
            </div>
          </div>
        )}

        {/* CODE EDITOR */}
        {phase === "editor" && (
          <div className="terminal">
            <div className="terminal-bar">
              <div className="terminal-dots">
                <span className="dot dot-red" /><span className="dot dot-yellow" /><span className="dot dot-green" />
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

        {/* APP DASHBOARD */}
        {phase === "dashboard" && (
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
                  <h4>Auth &amp; RBAC Setup</h4>
                  <p>User roles, JWT sessions, OAuth</p>
                </div>
                <span className="job-status done">Done</span>
              </div>
              <div className="job-row active">
                <div>
                  <h4>API Integration</h4>
                  <p>Stripe, webhooks, error handling</p>
                </div>
                <span className="job-status active">In Progress</span>
              </div>
              <div className="job-row enroute">
                <div>
                  <h4>CI/CD &amp; Deploy</h4>
                  <p>GitHub Actions, Vercel, monitoring</p>
                </div>
                <span className="job-status enroute">Queued</span>
              </div>

              <div className="app-footer">
                <span>Sprint Progress</span>
                <strong style={{ color: "var(--green)" }}>86%</strong>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
