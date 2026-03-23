"use client";

import { useState } from "react";

const SWIFTLY_INVESTMENT = 14900;

function formatCompact(n: number): string {
  if (n >= 1_000_000) return (n / 1_000_000).toFixed(1) + "M";
  if (n >= 1_000) return Math.round(n / 1_000) + "k";
  return n.toLocaleString();
}

export default function ROICalculator({
  onOpenModal,
}: {
  onOpenModal: () => void;
}) {
  const [users, setUsers] = useState(500);
  const [arpu, setArpu] = useState(120);
  const [retention, setRetention] = useState(25);

  const monthly = users * arpu;
  const annual = monthly * 12;
  const retLift = Math.round((annual * retention) / 100);
  const total = annual + retLift;
  const daysToBreak = Math.ceil((SWIFTLY_INVESTMENT / monthly) * 30);
  const breakevenLabel =
    daysToBreak < 30
      ? `Breaks even in ${daysToBreak} days`
      : `Breaks even in ${Math.ceil(daysToBreak / 30)} months`;

  return (
    <div className="roi-layout">
      {/* Sliders */}
      <div className="reveal">
        <div className="roi-slider-wrap">
          <div className="roi-slider-top">
            <div>
              <div className="roi-label">
                Monthly Active Users (after launch)
              </div>
              <div className="roi-val">{users.toLocaleString()}</div>
            </div>
          </div>
          <input
            type="range"
            className="slider"
            min={100}
            max={5000}
            step={50}
            value={users}
            onChange={(e) => setUsers(Number(e.target.value))}
          />
          <div className="slider-labels">
            <span>100</span>
            <span>5,000</span>
          </div>
        </div>

        <div className="roi-slider-wrap">
          <div className="roi-slider-top">
            <div>
              <div className="roi-label">Avg. Revenue Per User / Month</div>
              <div className="roi-val">${arpu.toLocaleString()}</div>
            </div>
          </div>
          <input
            type="range"
            className="slider"
            min={10}
            max={1000}
            step={10}
            value={arpu}
            onChange={(e) => setArpu(Number(e.target.value))}
          />
          <div className="slider-labels">
            <span>$10</span>
            <span>$1,000</span>
          </div>
        </div>

        <div className="roi-slider-wrap">
          <div className="roi-slider-top">
            <div>
              <div className="roi-label">Retention Lift from App (%)</div>
              <div className="roi-val">{retention}%</div>
            </div>
          </div>
          <input
            type="range"
            className="slider"
            min={5}
            max={60}
            step={1}
            value={retention}
            onChange={(e) => setRetention(Number(e.target.value))}
          />
          <div className="slider-labels">
            <span>5%</span>
            <span>60%</span>
          </div>
        </div>

        <p
          style={{
            fontSize: "13px",
            color: "var(--muted)",
            marginTop: ".75rem",
            fontStyle: "italic",
          }}
        >
          Based on average SMB data across 200+ app launches.
        </p>
      </div>

      {/* Results card */}
      <div className="roi-card reveal">
        <h3>Your Revenue Impact</h3>
        <div className="roi-row">
          <span className="roi-row-label">Monthly App Revenue</span>
          <span className="roi-row-val">${formatCompact(monthly)}</span>
        </div>
        <div className="roi-row">
          <span className="roi-row-label">Annual Retention Uplift</span>
          <span className="roi-row-val">${formatCompact(retLift)}</span>
        </div>
        <div className="roi-row">
          <span className="roi-row-label">Annual Revenue Impact</span>
          <span className="roi-row-val">${formatCompact(total)}</span>
        </div>
        <div className="roi-breakeven">
          <span>Swiftly Growth Plan investment</span>
          <strong>{breakevenLabel}</strong>
        </div>
        <button
          className="btn-primary"
          style={{
            width: "100%",
            justifyContent: "center",
            marginTop: "1.5rem",
            padding: "16px",
            fontSize: "16px",
          }}
          onClick={onOpenModal}
        >
          Get My Custom Implementation Plan &rarr;
        </button>
        <p
          style={{
            textAlign: "center",
            fontSize: "12px",
            color: "var(--muted)",
            marginTop: ".75rem",
          }}
        >
          Free discovery call &middot; No commitment
        </p>
      </div>
    </div>
  );
}
