// src/components/RadarHero.tsx
import React, { useEffect, useRef, useState } from "react";
import { Bug } from "lucide-react";

type Marker = {
  id: string;
  label: string;
  description?: string;
  angleDeg: number; // 0..359
  radiusPct: number; // 0..100
};

const MARKERS: Marker[] = [
  { id: "m-xss", label: "XSS", angleDeg: 24, radiusPct: 62 },
  { id: "m-csrf", label: "CSRF", angleDeg: 110, radiusPct: 50 },
  { id: "m-rce", label: "RCE", angleDeg: 200, radiusPct: 70 },
  { id: "m-idor", label: "IDOR", angleDeg: 285, radiusPct: 55 },
];

export default function RadarHero(): JSX.Element {
  const BEAM_WIDTH_DEG = 8; // slightly wider
  const ROTATION_SPEED_DEG_PER_SEC = 35; // 🚀 faster sweep
  const DETECT_LABEL_MS = 1200;
  const RESET_DELAY_MS = 1400;

  const rafRef = useRef<number | null>(null);
  const lastRef = useRef<number | null>(null);

  const [angle, setAngle] = useState<number>(0);
  const [markerState, setMarkerState] = useState<Record<string, "idle" | "detected">>(() => {
    const init: Record<string, "idle" | "detected"> = {};
    MARKERS.forEach((m) => (init[m.id] = "idle"));
    return init;
  });

  const [activeLabel, setActiveLabel] = useState<{ id: string; text: string } | null>(null);
  const [paused, setPaused] = useState(false);

  useEffect(() => {
    function tick(now: number) {
      if (!lastRef.current) lastRef.current = now;
      const dt = (now - lastRef.current) / 1000;
      lastRef.current = now;

      if (!paused) {
        setAngle((a) => (a + ROTATION_SPEED_DEG_PER_SEC * dt) % 360);
      }
      rafRef.current = requestAnimationFrame(tick);
    }

    rafRef.current = requestAnimationFrame(tick);
    return () => {
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
    };
  }, [paused]);

  const circularDelta = (a: number, b: number) => {
    const d = Math.abs(((a - b + 540) % 360) - 180);
    return d;
  };

  useEffect(() => {
    if (activeLabel) return;

    for (const m of MARKERS) {
      if (markerState[m.id] !== "idle") continue;
      const delta = circularDelta(angle, m.angleDeg);
      if (delta <= BEAM_WIDTH_DEG / 2) {
        setMarkerState((prev) => ({ ...prev, [m.id]: "detected" }));
        setActiveLabel({ id: m.id, text: `${m.label} detected` });

        setTimeout(() => setActiveLabel(null), DETECT_LABEL_MS);
        break;
      }
    }

    const allDetected = MARKERS.every((mm) => markerState[mm.id] === "detected");
    if (allDetected) {
      setPaused(true);
      const t = setTimeout(() => {
        const reset: Record<string, "idle" | "detected"> = {};
        MARKERS.forEach((mm) => (reset[mm.id] = "idle"));
        setMarkerState(reset);
        setAngle(0);
        setPaused(false);
      }, RESET_DELAY_MS);
      return () => clearTimeout(t);
    }
  }, [angle, markerState, activeLabel]);

  const toPos = (angleDeg: number, radiusPct: number) => {
    const r = (radiusPct / 100) * 0.45;
    const rad = (angleDeg * Math.PI) / 180;
    const x = 0.5 + r * Math.cos(rad);
    const y = 0.5 + r * Math.sin(rad);
    return { left: `${x * 100}%`, top: `${y * 100}%` };
  };

  return (
    <section className="py-16 bg-gradient-to-br from-[#040618] via-[#07102a] to-[#061428] text-white flex justify-center">
      <div className="relative w-[820px] max-w-full aspect-square">
        {/* Radar Circles */}
        <svg className="absolute inset-0 w-full h-full" viewBox="0 0 100 100">
          <circle cx="50" cy="50" r="48" stroke="rgba(255,255,255,0.06)" strokeWidth="0.5" fill="none" />
          <circle cx="50" cy="50" r="36" stroke="rgba(255,255,255,0.04)" strokeWidth="0.4" fill="none" />
          <circle cx="50" cy="50" r="24" stroke="rgba(255,255,255,0.03)" strokeWidth="0.3" fill="none" />
          <circle cx="50" cy="50" r="12" stroke="rgba(255,255,255,0.02)" strokeWidth="0.3" fill="none" />
        </svg>

        {/* Radar Beam (length matches circle radius) */}
        <div
          className="absolute left-1/2 top-1/2 origin-center"
          style={{ transform: `rotate(${angle}deg)` }}
        >
          <div
            className="bg-gradient-to-r from-pink-400/30 via-pink-500/20 to-transparent"
            style={{
              width: "410px", // radius length (half container ~820px)
              height: "8px",
              borderRadius: "9999px",
              transformOrigin: "left center",
              transform: "translateX(0)",
            }}
          />
        </div>

        {/* Center Logo */}
        <div className="absolute z-30 left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
          <div className="w-20 h-20 rounded-full bg-gradient-to-br from-[#0ea5a1] to-[#10b981] p-1 shadow-xl flex items-center justify-center">
            <img
              src="https://vaptlabs.com/vapt-labs-logo.png"
              alt="VAPTlabs"
              className="w-14 h-14 rounded-full object-contain bg-white/90 p-1"
            />
          </div>
        </div>

        {/* Markers */}
        {MARKERS.map((m) => {
          const st = markerState[m.id];
          const pos = toPos(m.angleDeg, m.radiusPct);
          return (
            <div
              key={m.id}
              style={{ left: pos.left, top: pos.top }}
              className="absolute z-40 -translate-x-1/2 -translate-y-1/2 flex flex-col items-center"
            >
              <div
                className={`w-10 h-10 rounded-full flex items-center justify-center ${
                  st === "detected"
                    ? "bg-red-500 ring-2 ring-red-400 animate-pulse"
                    : "bg-pink-400 ring-2 ring-pink-300"
                }`}
              >
                <Bug className="w-5 h-5 text-white" />
              </div>
              <div className="mt-2 text-xs text-center">
                {st === "detected" ? (
                  <span className="text-red-300 font-semibold">{m.label} detected</span>
                ) : (
                  <span className="text-pink-200">{m.label}</span>
                )}
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
