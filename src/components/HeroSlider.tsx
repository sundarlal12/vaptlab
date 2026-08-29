import React, { useEffect, useState } from "react";
import RaspHero from "./RaspHero";
import StartupHeroSlide from "./StartupHeroSlide";

const SLIDE_DURATION_MS = 3000;

const slides = [
  <RaspHero
    key="rasp"
    raspLink="https://vaptlabs.com"
    ctaText="Get Protected Now"
    badgeText="Best VAPT Testing Service Provider in India"
    heroLetter="VAPT"
  />,
  <StartupHeroSlide key="startup" />,
];

const HeroSlider: React.FC = () => {
  const [active, setActive] = useState(0);
  const [paused, setPaused] = useState(false);

  useEffect(() => {
    if (paused) return;
    const id = setInterval(() => {
      setActive((prev) => (prev + 1) % slides.length);
    }, SLIDE_DURATION_MS);
    return () => clearInterval(id);
  }, [paused]);

  return (
    <div
      className="relative"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      {slides.map((slide, i) => {
        const isActive = active === i;
        return (
          <div
            key={i}
            // The active slide stays in normal document flow (position:
            // relative) so the wrapper's height - and therefore where the
            // next section on the page starts - always matches whichever
            // slide is actually showing. Inactive slides are absolutely
            // overlaid on top purely for the cross-fade and don't affect
            // layout height; without this, a slide taller than one
            // viewport (easily happens on mobile with this much stacked
            // content) would spill its overflow into the section below
            // instead of pushing it down.
            className={`w-full transition-opacity duration-700 ease-in-out ${isActive ? "relative" : "absolute inset-0"}`}
            style={{
              opacity: isActive ? 1 : 0,
              pointerEvents: isActive ? "auto" : "none",
            }}
            aria-hidden={!isActive}
          >
            {slide}
          </div>
        );
      })}
    </div>
  );
};

export default HeroSlider;
