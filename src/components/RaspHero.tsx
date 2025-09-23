

import React, { useState, useEffect } from "react";
import { Shield } from "lucide-react";
import { useNavigate } from "react-router-dom";

interface RaspHeroProps {
  raspLink?: string;
  ctaText?: string;
  badgeText?: string;
  heroLetter?: string;
}

const RaspHero: React.FC<RaspHeroProps> = ({
  raspLink = "https://vaptlab.com",
  ctaText = "Get Protected Now",
  badgeText = "24X7 Cyber Security Solutions",
  heroLetter = "VAPT",
}) => {
  const navigate = useNavigate();
  const texts = [
    "Gen-AI VAPT Services",
    "24X7 Security Solutions",
    "Mobile RASP Security",
    "App Shielding",
    "Runtime Protection",
  ];
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const id = setInterval(() => {
      setIndex((prev) => (prev + 1) % texts.length);
    }, 3000);
    return () => clearInterval(id);
  }, [texts.length]);

  const handleGetProtected = () => {
    navigate("/contact");
  };

  const logoUrl = "https://vaptlabs.com/vapt-labs-logo.png";

  return (
    <section className="pt-20 pb-12 sm:pt-24 sm:pb-16 bg-gradient-to-br from-slate-50 via-blue-50 to-purple-50 min-h-screen flex items-center">
      <style>{`
        .gradient-text {
          background: linear-gradient(to right, rgb(217, 47, 97), rgb(143, 15, 56));
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
        }
        .gradient-btn {
          background: linear-gradient(to right, rgb(217, 47, 97), rgb(143, 15, 56));
        }
        .gradient-border {
          border-image: linear-gradient(to right, rgb(217, 47, 97), rgb(143, 15, 56)) 1;
        }

        @keyframes ripple {
          0% { transform: scale(0.6); opacity: 0.6; }
          70% { transform: scale(1.8); opacity: 0.08; }
          100% { transform: scale(2.2); opacity: 0; }
        }
        @keyframes glow {
          0% { box-shadow: 0 0 0 0 rgba(16, 185, 129, 0.25); transform: scale(1); }
          50% { box-shadow: 0 0 18px 6px rgba(16, 185, 129, 0.16); transform: scale(1.03); }
          100% { box-shadow: 0 0 0 0 rgba(16, 185, 129, 0.0); transform: scale(1); }
        }
        .ripple-ring { position: absolute; border-radius: 9999px; border: 2px solid rgba(16,185,129,0.28); pointer-events: none; left: 50%; top: 50%; transform: translate(-50%,-50%) scale(0.6); opacity: 0.6; }
        .r1 { width: 24rem; height: 24rem; animation: ripple 2.6s cubic-bezier(.22,.9,.31,.98) infinite; }
        .r2 { width: 18rem; height: 18rem; animation: ripple 2.6s 0.6s cubic-bezier(.22,.9,.31,.98) infinite; }
        .r3 { width: 12rem; height: 12rem; animation: ripple 2.6s 1.2s cubic-bezier(.22,.9,.31,.98) infinite; }
        .logo-center { width: 6.5rem; height: 6.5rem; border-radius: 9999px; display:flex; align-items:center; justify-content:center; background: radial-gradient(ellipse at center, rgba(255,255,255,0.08), rgba(255,255,255,0)); animation: glow 3s ease-in-out infinite; }
        .logo-center img { width: 60%; height: 60%; object-fit: contain; }
        @media (max-width: 1024px) {
          .r1 { width: 20rem; height: 20rem; }
          .r2 { width: 14rem; height: 14rem; }
          .r3 { width: 10rem; height: 10rem; }
          .logo-center { width: 5.5rem; height: 5.5rem; }
        }
        @media (max-width: 640px) {
          .r1 { width: 14rem; height: 14rem; }
          .r2 { width: 10rem; height: 10rem; }
          .r3 { width: 8rem; height: 8rem; }
          .logo-center { width: 4.5rem; height: 4.5rem; }
        }
        
      `}</style>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
          {/* Left Text */}
          <div className="w-full lg:w-1/2 space-y-6 text-center lg:text-left">
            <div className="inline-flex items-center space-x-2 bg-red-100/20 text-red-600 px-4 py-2 rounded-full mx-auto lg:mx-0">
              <Shield className="w-4 h-4" />
              <span className="text-sm font-medium">{badgeText}</span>
            </div>

            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 leading-tight">
              Fortify Your Apps with{" "}
              <span
                className="relative inline-block align-middle overflow-hidden"
                aria-live="polite"
                style={{ verticalAlign: "middle", display: "inline-block", width: "18ch" }}
              >
                <span
                  className="flex transition-transform duration-700 ease-in-out"
                  style={{ transform: `translateX(-${index * 100}%)`, width: `${texts.length * 100}%` }}
                >
                  {texts.map((t, i) => (
                    <span key={i} className="min-w-full flex items-center gradient-text whitespace-nowrap">
                      {t}
                    </span>
                  ))}
                </span>
              </span>
            </h1>

            <p className="text-sm sm:text-base lg:text-lg text-slate-600 leading-relaxed">
              Our security tools and human cyber security experts work tirelessly to identify risks.
              We believe in fast detection and collaborative response to threats, delivering advanced
              Runtime Application Self-Protection (RASP) and App Shielding solutions.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <button
                onClick={handleGetProtected}
                className="w-full sm:w-auto rounded-lg font-medium transition-all gradient-btn text-white px-8 py-3 text-lg hover:opacity-90"
              >
                {ctaText}
              </button>
              <a
                href="https://vaptlab.com"
                className="w-full sm:w-auto rounded-lg font-medium transition-all border-2 gradient-border text-black hover:bg-red-50 px-8 py-3 text-lg text-center"
                target="_blank"
                rel="noopener noreferrer"
              >
                RASP Solutions
              </a>
            </div>
          </div>

          {/* Hero Graphic (logo kept same size as your original code) */}
          <div className="w-full lg:w-1/2 flex justify-center">
            <div className="relative w-64 h-64 sm:w-72 sm:h-72 lg:w-96 lg:h-96">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-100 via-purple-100 to-pink-100 rounded-full flex items-center justify-center">
                <div className="w-52 h-52 sm:w-64 sm:h-64 lg:w-80 lg:h-80 bg-gradient-to-br from-blue-200 via-purple-200 to-pink-200 rounded-full flex items-center justify-center relative">
                  <div className="w-40 h-40 sm:w-52 sm:h-52 lg:w-64 lg:h-64 bg-gradient-to-br from-blue-300 via-purple-300 to-pink-300 rounded-full flex items-center justify-center relative">
                    {/* Ripple rings */}
                    <div className="ripple-ring r1" aria-hidden="true" />
                    <div className="ripple-ring r2" aria-hidden="true" />
                    <div className="ripple-ring r3" aria-hidden="true" />
                    {/* Logo (same size as original) */}
                    <div className="logo-center z-10">
                      <img src={logoUrl} alt="VAPTlabs logo" className="w-24 h-24 object-contain" />
                    </div>
                    {/* Floating labels */}
                    <div className="absolute -top-4 -right-4 bg-white px-2 py-1 sm:px-3 sm:py-2 rounded-lg shadow-lg text-xs sm:text-sm font-medium">
                      Admin Takeover
                    </div>
                    <div className="absolute top-1/2 -right-6 sm:-right-8 bg-white px-2 py-1 sm:px-3 sm:py-2 rounded-lg shadow-lg text-xs sm:text-sm font-medium">
                      Login Bypass
                    </div>
                    <div className="absolute -bottom-4 right-4 sm:right-8 bg-white px-2 py-1 sm:px-3 sm:py-2 rounded-lg shadow-lg text-xs sm:text-sm font-medium">
                      Server Access
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* End Hero Graphic */}
        </div>
      </div>
    </section>
  );
};

export default RaspHero;
