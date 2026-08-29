import React from "react";
import { Link } from "react-router-dom";
import { ShieldCheck, Building2, Clock, CheckCircle2, Tag } from "lucide-react";
import NetworkSphereVisual from "./NetworkSphereVisual";

const RED_GRAD = "linear-gradient(to right, rgb(217, 47, 97), rgb(143, 15, 56))";
const BRAND_RED = "rgb(217,47,97)";

const StartupHeroSlide: React.FC = () => {
  return (
    <section className="pt-20 pb-12 sm:pt-24 sm:pb-16 min-h-screen flex items-center bg-gradient-to-br from-slate-50 via-blue-50 to-purple-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
          {/* Left Text */}
          <div className="w-full lg:w-1/2 space-y-6 text-center lg:text-left">
            <p className="text-sm font-semibold uppercase tracking-widest text-slate-500">
              AI-Powered VAPT, Built for Startups
            </p>

            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-3">
              <span className="inline-flex items-center gap-2 bg-red-100/20 text-red-600 border border-red-100 rounded-full px-3 py-1.5 text-xs sm:text-sm">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full opacity-75" style={{ background: BRAND_RED }} />
                  <span className="relative inline-flex rounded-full h-2 w-2" style={{ background: BRAND_RED }} />
                </span>
                Live AI Scanning
              </span>
              <span className="inline-flex items-center gap-2 bg-red-100/20 text-red-600 border border-red-100 rounded-full px-3 py-1.5 text-xs sm:text-sm">
                <ShieldCheck className="w-3.5 h-3.5" /> Startup Trusted
              </span>
              <span className="inline-flex items-center gap-2 bg-red-100/20 text-red-600 border border-red-100 rounded-full px-3 py-1.5 text-xs sm:text-sm">
                <Building2 className="w-3.5 h-3.5" /> SME Ready
              </span>
            </div>

            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight text-gray-900">
              Your Startup's <br className="hidden lg:block" />
              <span
                style={{
                  background: RED_GRAD,
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                }}
              >
                AI-Powered VAPT Partner
              </span>
            </h1>

            <p className="text-sm sm:text-base lg:text-lg text-slate-600 leading-relaxed max-w-xl mx-auto lg:mx-0">
              AI-powered penetration testing and VAPT, built for startups and SMEs that need real,
              audit-ready security without enterprise timelines or budgets. Get vulnerabilities found
              and reported in hours, not weeks.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Link
                to="/contact"
                className="w-full sm:w-auto rounded-lg font-medium transition-all text-white px-8 py-3 text-lg hover:opacity-90 text-center"
                style={{ background: RED_GRAD }}
              >
                Get a Free Consultation
              </Link>
              <Link
                to="/contact"
                className="w-full sm:w-auto rounded-lg font-medium transition-all border-2 text-gray-900 hover:bg-red-50 px-8 py-3 text-lg text-center"
                style={{ borderImage: `${RED_GRAD} 1` }}
              >
                Request a Quote
              </Link>
            </div>

            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-x-6 gap-y-2 text-sm text-slate-500 pt-2">
              <span className="flex items-center gap-2"><Clock className="w-4 h-4" /> 30-Min Strategy Call</span>
              <span className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4" /> No Obligation</span>
              <span className="flex items-center gap-2"><Tag className="w-4 h-4" /> Startup-Friendly Pricing</span>
            </div>
          </div>

          {/* Right Graphic */}
          <div className="w-full lg:w-1/2 flex justify-center">
            <NetworkSphereVisual />
          </div>
        </div>
      </div>
    </section>
  );
};

export default StartupHeroSlide;
