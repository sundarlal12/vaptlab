// src/VaptAbout.tsx
/*
import React, { useEffect, useState } from "react";
import { Shield } from "lucide-react";
import { useNavigate } from "react-router-dom";
import Lottie from "lottie-react";
import Loader from "./Loader";

interface VaptAboutProps {
  raspLink?: string;
  ctaText?: string;
  badgeText?: string;
  heroLetter?: string;
}

const VaptAbout: React.FC<VaptAboutProps> = ({
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
  const [animationData, setAnimationData] = useState<any | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  // load Lottie JSON from public folder at runtime
  useEffect(() => {
    let canceled = false;
    fetch("/animations/vapt-radar.json")
      .then((res) => {
        if (!res.ok) throw new Error("Failed to load animation JSON");
        return res.json();
      })
      .then((data) => {
        if (!canceled) {
          setAnimationData(data);
          setIsLoading(false);
        }
      })
      .catch((err) => {
        console.error("Lottie load error:", err);
        setIsLoading(false);
      });
    return () => {
      canceled = true;
    };
  }, []);

  useEffect(() => {
    const id = window.setInterval(() => {
      setIndex((prev) => (prev + 1) % texts.length);
    }, 3000);
    return () => clearInterval(id);
  }, [texts.length]);

  const handleGetProtected = () => {
    navigate("/contact");
  };

  const logoUrl = "https://vaptlabs.com/vapt-labs-logo.png";

  return (
    <section className="pt-24 pb-16 bg-gradient-to-br from-slate-50 via-blue-50 to-purple-50 min-h-screen flex items-center">
      <style>{`
      
        @keyframes microVibe {
          0% { transform: translate(-50%,-50%) scale(1); filter: none; }
          30% { transform: translate(-50%,-50%) scale(1.03); filter: drop-shadow(0 10px 28px rgba(16,185,129,0.06)); }
          60% { transform: translate(-50%,-50%) scale(0.995); filter: drop-shadow(0 6px 12px rgba(219,39,119,0.04)); }
          100% { transform: translate(-50%,-50%) scale(1); filter: none; }
        }
        .center-logo {
          position: absolute;
          left: 50%;
          top: 50%;
          transform: translate(-50%,-50%);
          width: 6.5rem;
          height: 6.5rem;
          border-radius: 12px;
          display:flex;
          align-items:center;
          justify-content:center;
          background: linear-gradient(180deg, rgba(255,255,255,0.04), rgba(255,255,255,0));
          z-index: 40;
          animation: microVibe 3.4s ease-in-out infinite;
        }
        .center-logo img {
          width: 66%;
          height: 66%;
          object-fit: contain;
          display:block;
          border-radius: 8px;
        }
        .lottie-wrap { position: relative; width: 384px; height: 384px; }
        @media (max-width: 1024px) { .lottie-wrap { width: 320px; height: 320px; } .center-logo { width: 5.25rem; height: 5.25rem; } }
        @media (max-width: 640px) { .lottie-wrap { width: 240px; height: 240px; } .center-logo { width: 4rem; height: 4rem; } }
      `}</style>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center justify-between">
       
          <div className="w-full lg:w-1/2 space-y-6">
            <div className="inline-flex items-center space-x-2 bg-emerald-500/10 text-emerald-400 px-4 py-2 rounded-full">
              <Shield className="w-4 h-4" />
              <span className="text-sm font-medium">{badgeText}</span>
            </div>

            <h1 className="text-4xl lg:text-5xl font-bold text-gray-900">
              Fortify your apps with{" "}
              <span
                className="relative inline-block align-middle overflow-hidden"
                aria-live="polite"
                style={{
                  verticalAlign: "middle",
                  display: "inline-block",
                  width: "18ch",
                }}
              >
                <span
                  className="flex transition-transform duration-700 ease-in-out will-change-transform"
                  style={{
                    transform: `translateX(-${index * 100}%)`,
                    width: `${texts.length * 100}%`,
                  }}
                >
                  {texts.map((t, i) => (
                    <span
                      key={i}
                      className="min-w-full flex items-center text-emerald-400"
                      style={{ whiteSpace: "nowrap" }}
                    >
                      {t}
                    </span>
                  ))}
                </span>
              </span>
            </h1>

            <p className="text-base lg:text-lg text-slate-600 leading-relaxed max-w-xl">
     
              At VAPTlabs, we combine advanced automation with expert human insight to quickly uncover, validate, and fix risks — turning vulnerabilities into strengths and ensuring your applications and users remain secure.
            </p>

            <div className="flex flex-wrap gap-4">
              <button
                onClick={handleGetProtected}
                className="rounded-lg font-medium transition-all bg-emerald-500 text-white hover:bg-emerald-600 px-8 py-3 text-lg"
              >
                {ctaText}
              </button>

              <a
                href={raspLink}
                className="rounded-lg font-medium transition-all border-2 border-emerald-400/50 text-emerald-500 hover:bg-emerald-400/10 px-8 py-3 text-lg"
                target="_blank"
                rel="noopener noreferrer"
              >
                RASP Solutions
              </a>
            </div>
          </div>

       
          <div className="lg:w-1/2 flex justify-center mt-12 lg:mt-0">
            <div className="lottie-wrap relative">
              {isLoading && (
                <div className="absolute inset-0 flex items-center justify-center z-10">
                      <Loader size="large" fullscreen={false} text="Loading..." />
                </div>
              )}


              {animationData && (
                <Lottie
                  animationData={animationData}
                  loop={true}
                  autoplay={true}
                  style={{ width: "100%", height: "100%", pointerEvents: "none" }}
                />
              )}

      
              <div className="center-logo" aria-hidden>
                <img src={logoUrl} alt="VAPTlabs logo" />
              </div>

  
              <div className="absolute -top-4 -right-6 bg-white px-3 py-2 rounded-lg shadow-lg text-sm font-medium z-50">
                Subdomain Takeover
              </div>
              <div className="absolute top-1/2 -right-10 bg-white px-3 py-2 rounded-lg shadow-lg text-sm font-medium z-50">
                Payment Bypass
              </div>
              <div className="absolute -bottom-4 right-8 bg-white px-3 py-2 rounded-lg shadow-lg text-sm font-medium z-50">
                Remote Code Execution
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default VaptAbout;

*/


// // src/components/VaptAbout.tsx
// import React, { useEffect, useState } from "react";
// import { Shield } from "lucide-react";
// import { useNavigate } from "react-router-dom";
// import Lottie from "lottie-react";

// interface VaptAboutProps {
//   raspLink?: string;
//   ctaText?: string;
//   badgeText?: string;
//   heroLetter?: string;
// }

// const VaptAbout: React.FC<VaptAboutProps> = ({
//   raspLink = "https://vaptlab.com",
//   ctaText = "Get Protected Now",
//   badgeText = "24X7 Cyber Security Solutions",
//   heroLetter = "VAPT",
// }) => {
//   const navigate = useNavigate();

//   const texts = [
//     "Gen-AI VAPT Services",
//     "24X7 Security Solutions",
//     "Mobile RASP Security",
//     "App Shielding",
//     "Runtime Protection",
//   ];

//   const [index, setIndex] = useState(0);
//   const [animationData, setAnimationData] = useState<any | null>(null);
//   const [isLoading, setIsLoading] = useState(true);

//   // load Lottie JSON from public folder at runtime
//   useEffect(() => {
//     let canceled = false;
//     fetch("/animations/vapt-radar.json")
//       .then((res) => {
//         if (!res.ok) throw new Error("Failed to load animation JSON");
//         return res.json();
//       })
//       .then((data) => {
//         if (!canceled) {
//           setAnimationData(data);
//           setIsLoading(false);
//         }
//       })
//       .catch((err) => {
//         console.error("Lottie load error:", err);
//         setIsLoading(false);
//       });
//     return () => {
//       canceled = true;
//     };
//   }, []);

//   useEffect(() => {
//     const id = window.setInterval(() => {
//       setIndex((prev) => (prev + 1) % texts.length);
//     }, 3000);
//     return () => clearInterval(id);
//   }, [texts.length]);

//   const handleGetProtected = () => {
//     navigate("/contact");
//   };

//   const logoUrl = "https://vaptlabs.com/vapt-labs-logo.png";

//   return (
//     <section className="pt-24 pb-16 bg-gradient-to-br from-slate-50 via-blue-50 to-purple-50 min-h-screen flex items-center">
//       <style>{`
//         /* center logo micro-vibe */
//         @keyframes microVibe {
//           0% { transform: translate(-50%,-50%) scale(1); filter: none; }
//           30% { transform: translate(-50%,-50%) scale(1.03); filter: drop-shadow(0 10px 28px rgba(16,185,129,0.06)); }
//           60% { transform: translate(-50%,-50%) scale(0.995); filter: drop-shadow(0 6px 12px rgba(219,39,119,0.04)); }
//           100% { transform: translate(-50%,-50%) scale(1); filter: none; }
//         }

//         .center-logo {
//           position: absolute;
//           left: 50%;
//           top: 50%;
//           transform: translate(-50%,-50%);
//           width: 6.5rem;
//           height: 6.5rem;
//           border-radius: 12px;
//           display:flex;
//           align-items:center;
//           justify-content:center;
//           background: linear-gradient(180deg, rgba(255,255,255,0.04), rgba(255,255,255,0));
//           z-index: 40;
//           animation: microVibe 3.4s ease-in-out infinite;
//         }
//         .center-logo img {
//           width: 66%;
//           height: 66%;
//           object-fit: contain;
//           display:block;
//           border-radius: 8px;
//         }

//         /* Lottie sizing wrappers for exact aspect */
//         .lottie-wrap { position: relative; width: 384px; height: 384px; }
//         @media (max-width: 1024px) { .lottie-wrap { width: 320px; height: 320px; } .center-logo { width: 5.25rem; height: 5.25rem; } }
//         @media (max-width: 640px) { .lottie-wrap { width: 240px; height: 240px; } .center-logo { width: 4rem; height: 4rem; } }

//         /* Small inline loader centered inside the lottie box */
//         .inline-loader {
//           width: 84px;
//           height: 84px;
//           border-radius: 9999px;
//           display:flex;
//           align-items:center;
//           justify-content:center;
//           background: rgba(255,255,255,0.9);
//           box-shadow: 0 8px 20px rgba(2,6,23,0.08);
//         }
//         .spinner {
//           width: 40px;
//           height: 40px;
//           border: 4px solid rgba(16,185,129,0.15);
//           border-top-color: rgba(16,185,129,0.95);
//           border-radius: 9999px;
//           animation: spin 0.9s linear infinite;
//         }
//         @keyframes spin { to { transform: rotate(360deg); } }
//       `}</style>

//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
//         <div className="flex flex-col lg:flex-row items-center justify-between gap-8">
//           {/* Left column */}
//           <div className="w-full lg:w-1/2 space-y-6">
//             <div className="inline-flex items-center space-x-2 bg-emerald-500/10 text-emerald-400 px-4 py-2 rounded-full">
//               <Shield className="w-4 h-4" />
//               <span className="text-sm font-medium">{badgeText}</span>
//             </div>

//             <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 leading-tight">
//               Fortify your apps with{" "}
//               <span
//                 className="relative inline-block align-middle overflow-hidden"
//                 aria-live="polite"
//                 style={{
//                   verticalAlign: "middle",
//                   display: "inline-block",
//                   width: "18ch",
//                 }}
//               >
//                 <span
//                   className="flex transition-transform duration-700 ease-in-out will-change-transform"
//                   style={{
//                     transform: `translateX(-${index * 100}%)`,
//                     width: `${texts.length * 100}%`,
//                   }}
//                 >
//                   {texts.map((t, i) => (
//                     <span
//                       key={i}
//                       className="min-w-full flex items-center text-emerald-400"
//                       style={{ whiteSpace: "nowrap" }}
//                     >
//                       {t}
//                     </span>
//                   ))}
//                 </span>
//               </span>
//             </h1>

//             <p className="text-base lg:text-lg text-slate-600 leading-relaxed max-w-xl">
//               At VAPTlabs, we combine advanced automation with expert human insight to quickly uncover,
//               validate, and fix risks — turning vulnerabilities into strengths and ensuring your
//               applications and users remain secure.
//             </p>

//             <div className="flex flex-wrap gap-4">
//               <button
//                 onClick={handleGetProtected}
//                 className="rounded-lg font-medium transition-all bg-emerald-500 text-white hover:bg-emerald-600 px-6 py-2 sm:px-8 sm:py-3 text-base sm:text-lg"
//               >
//                 {ctaText}
//               </button>

//               <a
//                 href={raspLink}
//                 className="rounded-lg font-medium transition-all border-2 border-emerald-400/50 text-emerald-500 hover:bg-emerald-400/10 px-6 py-2 sm:px-8 sm:py-3 text-base sm:text-lg"
//                 target="_blank"
//                 rel="noopener noreferrer"
//               >
//                 RASP Solutions
//               </a>
//             </div>
//           </div>

//           {/* Right column: Lottie */}
//           <div className="w-full lg:w-1/2 flex justify-center mt-4 lg:mt-0">
//             <div className="lottie-wrap relative flex items-center justify-center">
//               {/* loader displayed only over lottie area (not full page) */}
//               {isLoading && (
//                 <div className="absolute z-20 flex items-center justify-center inset-0">
//                   <div className="inline-loader">
//                     <div className="spinner" aria-hidden />
//                   </div>
//                 </div>
//               )}

//               {/* render Lottie only once JSON is fetched */}
//               {animationData && (
//                 <div style={{ width: "100%", height: "100%" }} aria-hidden>
//                   <Lottie
//                     animationData={animationData}
//                     loop={true}
//                     autoplay={true}
//                     style={{
//                       width: "100%",
//                       height: "100%",
//                       pointerEvents: "none",
//                     }}
//                   />
//                 </div>
//               )}

//               {/* center logo overlay */}
//               <div className="center-logo" aria-hidden>
//                 <img src={logoUrl} alt="VAPTlabs logo" />
//               </div>

//               {/* floating labels */}
//               <div className="absolute -top-3 -right-6 bg-white px-3 py-1.5 rounded-lg shadow-md text-xs sm:text-sm font-medium z-50">
//                 Subdomain Takeover
//               </div>
//               <div className="absolute top-1/2 -right-8 bg-white px-3 py-1.5 rounded-lg shadow-md text-xs sm:text-sm font-medium z-50">
//                 Payment Bypass
//               </div>
//               <div className="absolute -bottom-3 right-6 bg-white px-3 py-1.5 rounded-lg shadow-md text-xs sm:text-sm font-medium z-50">
//                 Remote Code Execution
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default VaptAbout;




// // src/components/VaptAbout.tsx
// import React, { useEffect, useState } from "react";
// import { Shield } from "lucide-react";
// import { useNavigate } from "react-router-dom";
// import Lottie from "lottie-react";

// interface VaptAboutProps {
//   raspLink?: string;
//   ctaText?: string;
//   badgeText?: string;
//   heroLetter?: string;
// }

// const VaptAbout: React.FC<VaptAboutProps> = ({
//   raspLink = "https://vaptlab.com",
//   ctaText = "Get Protected Now",
//   badgeText = "24X7 Cyber Security Solutions",
//   heroLetter = "VAPT",
// }) => {
//   const navigate = useNavigate();

//   const texts = [
//     "Gen-AI VAPT Services",
//     "24X7 Security Solutions",
//     "Mobile RASP Security",
//     "App Shielding",
//     "Runtime Protection",
//   ];

//   const [index, setIndex] = useState(0);
//   const [animationData, setAnimationData] = useState<any | null>(null);
//   const [isLoading, setIsLoading] = useState(true);

//   // load Lottie JSON from public folder at runtime
//   useEffect(() => {
//     let canceled = false;
//     fetch("/animations/vapt-radar.json")
//       .then((res) => {
//         if (!res.ok) throw new Error("Failed to load animation JSON");
//         return res.json();
//       })
//       .then((data) => {
//         if (!canceled) {
//           setAnimationData(data);
//           setIsLoading(false);
//         }
//       })
//       .catch((err) => {
//         console.error("Lottie load error:", err);
//         setIsLoading(false);
//       });
//     return () => {
//       canceled = true;
//     };
//   }, []);

//   useEffect(() => {
//     const id = window.setInterval(() => {
//       setIndex((prev) => (prev + 1) % texts.length);
//     }, 3000);
//     return () => clearInterval(id);
//   }, [texts.length]);

//   const handleGetProtected = () => {
//     navigate("/contact");
//   };

//   const logoUrl = "https://vaptlabs.com/vapt-labs-logo.png";

//   const redGradient = "linear-gradient(to right, rgb(217, 47, 97), rgb(143, 15, 56))";
//   const redTint = "linear-gradient(to right, rgba(217,47,97,0.08), rgba(143,15,56,0.08))";

//   return (
//     <section className="pt-24 pb-16 bg-gradient-to-br from-slate-50 via-blue-50 to-purple-50 min-h-screen flex items-center">
//       <style>{`
//         /* center logo micro-vibe */
//         @keyframes microVibe {
//           0% { transform: translate(-50%,-50%) scale(1); filter: none; }
//           30% { transform: translate(-50%,-50%) scale(1.03); filter: drop-shadow(0 10px 28px rgba(16,185,129,0.06)); }
//           60% { transform: translate(-50%,-50%) scale(0.995); filter: drop-shadow(0 6px 12px rgba(219,39,119,0.04)); }
//           100% { transform: translate(-50%,-50%) scale(1); filter: none; }
//         }

//         .center-logo {
//           position: absolute;
//           left: 50%;
//           top: 50%;
//           transform: translate(-50%,-50%);
//           width: 6.5rem;
//           height: 6.5rem;
//           border-radius: 12px;
//           display:flex;
//           align-items:center;
//           justify-content:center;
//           background: linear-gradient(180deg, rgba(255,255,255,0.04), rgba(255,255,255,0));
//           z-index: 40;
//           animation: microVibe 3.4s ease-in-out infinite;
//         }
//         .center-logo img {
//           width: 66%;
//           height: 66%;
//           object-fit: contain;
//           display:block;
//           border-radius: 8px;
//         }

//         /* Lottie sizing wrappers for exact aspect */
//         .lottie-wrap { position: relative; width: 384px; height: 384px; }
//         @media (max-width: 1024px) { .lottie-wrap { width: 320px; height: 320px; } .center-logo { width: 5.25rem; height: 5.25rem; } }
//         @media (max-width: 640px) { .lottie-wrap { width: 240px; height: 240px; } .center-logo { width: 4rem; height: 4rem; } }

//         /* Small inline loader centered inside the lottie box */
//         .inline-loader {
//           width: 84px;
//           height: 84px;
//           border-radius: 9999px;
//           display:flex;
//           align-items:center;
//           justify-content:center;
//           background: rgba(255,255,255,0.9);
//           box-shadow: 0 8px 20px rgba(2,6,23,0.08);
//         }
//         .spinner {
//           width: 40px;
//           height: 40px;
//           border: 4px solid rgba(16,185,129,0.15);
//           border-top-color: rgba(16,185,129,0.95);
//           border-radius: 9999px;
//           animation: spin 0.9s linear infinite;
//         }
//         @keyframes spin { to { transform: rotate(360deg); } }
//       `}</style>

//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
//         <div className="flex flex-col lg:flex-row items-center justify-between gap-8">
//           {/* Left column */}
//           <div className="w-full lg:w-1/2 space-y-6">
//             {/* Badge: red gradient text + subtle tint background */}
//             <div
//               className="inline-flex items-center space-x-2 px-4 py-2 rounded-full mx-0"
//               style={{
//                 background: redTint,
//               }}
//             >
//               <Shield className="w-4 h-4" style={{ color: "rgb(217,47,97)" }} />
//               <span
//                 className="text-sm font-medium"
//                 style={{
//                   background: redGradient,
//                   WebkitBackgroundClip: "text",
//                   WebkitTextFillColor: "transparent",
//                 }}
//               >
//                 {badgeText}
//               </span>
//             </div>

//             <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 leading-tight">
//               Fortify your apps with{" "}
//               <span
//                 className="relative inline-block align-middle overflow-hidden"
//                 aria-live="polite"
//                 style={{
//                   verticalAlign: "middle",
//                   display: "inline-block",
//                   width: "18ch",
//                 }}
//               >
//                 <span
//                   className="flex transition-transform duration-700 ease-in-out will-change-transform"
//                   style={{
//                     transform: `translateX(-${index * 100}%)`,
//                     width: `${texts.length * 100}%`,
//                   }}
//                 >
//                   {texts.map((t, i) => (
//                     <span
//                       key={i}
//                       className="min-w-full flex items-center"
//                       style={{
//                         whiteSpace: "nowrap",
//                         background: redGradient,
//                         WebkitBackgroundClip: "text",
//                         WebkitTextFillColor: "transparent",
//                       }}
//                     >
//                       {t}
//                     </span>
//                   ))}
//                 </span>
//               </span>
//             </h1>

//             <p className="text-base lg:text-lg text-slate-600 leading-relaxed max-w-xl">
//               At VAPTlabs, we combine advanced automation with expert human insight to quickly uncover,
//               validate, and fix risks — turning vulnerabilities into strengths and ensuring your
//               applications and users remain secure.
//             </p>

//             <div className="flex flex-wrap gap-4">
//               <button
//                 onClick={handleGetProtected}
//                 className="rounded-lg font-medium transition-all text-white px-6 py-2 sm:px-8 sm:py-3 text-base sm:text-lg"
//                 style={{
//                   background: redGradient,
//                   boxShadow: "0 8px 24px rgba(217,47,97,0.12)",
//                 }}
//               >
//                 {ctaText}
//               </button>

//               {/* <a
//                 href={raspLink}
//                 className="rounded-lg font-medium transition-all border-2 px-6 py-2 sm:px-8 sm:py-3 text-base sm:text-lg"
//                 target="_blank"
//                 rel="noopener noreferrer"
//                 style={{
//                   borderImage: `${redGradient} 1`,
//                   color: "rgb(217,47,97)",
//                 }}
//               >
//                 RASP Solutions
//               </a> */}
//               <a
//                 href={raspLink}
//                 className="w-full sm:w-auto rounded-lg font-medium transition-all border-2 gradient-border text-black hover:bg-red-50 px-8 py-3 text-lg text-center"
//                 target="_blank"
//                 rel="noopener noreferrer"
//               >
//                 RASP Solutions
//               </a>
//             </div>
//           </div>

//           {/* Right column: Lottie (unchanged) */}
//           <div className="w-full lg:w-1/2 flex justify-center mt-4 lg:mt-0">
//             <div className="lottie-wrap relative flex items-center justify-center">
//               {/* loader displayed only over lottie area (not full page) */}
//               {isLoading && (
//                 <div className="absolute z-20 flex items-center justify-center inset-0">
//                   <div className="inline-loader">
//                     <div className="spinner" aria-hidden />
//                   </div>
//                 </div>
//               )}

//               {/* render Lottie only once JSON is fetched */}
//               {animationData && (
//                 <div style={{ width: "100%", height: "100%" }} aria-hidden>
//                   <Lottie
//                     animationData={animationData}
//                     loop={true}
//                     autoplay={true}
//                     style={{
//                       width: "100%",
//                       height: "100%",
//                       pointerEvents: "none",
//                     }}
//                   />
//                 </div>
//               )}

//               {/* center logo overlay */}
//               <div className="center-logo" aria-hidden>
//                 <img src={logoUrl} alt="VAPTlabs logo" />
//               </div>

//               {/* floating labels */}
//               <div className="absolute -top-3 -right-6 bg-white px-3 py-1.5 rounded-lg shadow-md text-xs sm:text-sm font-medium z-50">
//                 Subdomain Takeover
//               </div>
//               <div className="absolute top-1/2 -right-8 bg-white px-3 py-1.5 rounded-lg shadow-md text-xs sm:text-sm font-medium z-50">
//                 Payment Bypass
//               </div>
//               <div className="absolute -bottom-3 right-6 bg-white px-3 py-1.5 rounded-lg shadow-md text-xs sm:text-sm font-medium z-50">
//                 Remote Code Execution
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default VaptAbout;


// // src/components/VaptAbout.tsx
// import React, { useEffect, useState } from "react";
// import { Shield } from "lucide-react";
// import { useNavigate } from "react-router-dom";
// import Lottie from "lottie-react";

// interface VaptAboutProps {
//   raspLink?: string;
//   ctaText?: string;
//   badgeText?: string;
//   heroLetter?: string;
// }

// const VaptAbout: React.FC<VaptAboutProps> = ({
//   raspLink = "https://vaptlab.com",
//   ctaText = "Get Protected Now",
//   badgeText = "24X7 Cyber Security Solutions",
//   heroLetter = "VAPT",
// }) => {
//   const navigate = useNavigate();

//   const texts = [
//     "Gen-AI VAPT Services",
//     "24X7 Security Solutions",
//     "Mobile RASP Security",
//     "App Shielding",
//     "Runtime Protection",
//   ];

//   const [index, setIndex] = useState(0);
//   const [animationData, setAnimationData] = useState<any | null>(null);
//   const [isLoading, setIsLoading] = useState(true);

//   // load Lottie JSON from public folder at runtime
//   useEffect(() => {
//     let canceled = false;
//     fetch("/animations/vapt-radar.json")
//       .then((res) => {
//         if (!res.ok) throw new Error("Failed to load animation JSON");
//         return res.json();
//       })
//       .then((data) => {
//         if (!canceled) {
//           setAnimationData(data);
//           setIsLoading(false);
//         }
//       })
//       .catch((err) => {
//         console.error("Lottie load error:", err);
//         setIsLoading(false);
//       });
//     return () => {
//       canceled = true;
//     };
//   }, []);

//   useEffect(() => {
//     const id = window.setInterval(() => {
//       setIndex((prev) => (prev + 1) % texts.length);
//     }, 3000);
//     return () => clearInterval(id);
//   }, [texts.length]);

//   const handleGetProtected = () => {
//     navigate("/contact");
//   };

//   const logoUrl = "https://vaptlabs.com/vapt-labs-logo.png";

//   return (
//     <section className="pt-24 pb-16 bg-gradient-to-br from-slate-50 via-blue-50 to-purple-50 min-h-screen flex items-center">
//       <style>{`
//         /* exact red gradient used in RaspHero */
//         .gradient-text {
//           background: linear-gradient(to right, rgb(217, 47, 97), rgb(143, 15, 56));
//           -webkit-background-clip: text;
//           -webkit-text-fill-color: transparent;
//         }
//         .gradient-btn {
//           background: linear-gradient(to right, rgb(217, 47, 97), rgb(143, 15, 56));
//         }
//         .gradient-border {
//           border-image: linear-gradient(to right, rgb(217, 47, 97), rgb(143, 15, 56)) 1;
//         }

//         /* Micro vibe (unchanged) */
//         @keyframes microVibe {
//           0% { transform: translate(-50%,-50%) scale(1); filter: none; }
//           30% { transform: translate(-50%,-50%) scale(1.03); filter: drop-shadow(0 10px 28px rgba(16,185,129,0.06)); }
//           60% { transform: translate(-50%,-50%) scale(0.995); filter: drop-shadow(0 6px 12px rgba(219,39,119,0.04)); }
//           100% { transform: translate(-50%,-50%) scale(1); filter: none; }
//         }
//         .center-logo {
//           position: absolute;
//           left: 50%;
//           top: 50%;
//           transform: translate(-50%,-50%);
//           width: 6.5rem;
//           height: 6.5rem;
//           border-radius: 12px;
//           display:flex;
//           align-items:center;
//           justify-content:center;
//           background: linear-gradient(180deg, rgba(255,255,255,0.04), rgba(255,255,255,0));
//           z-index: 40;
//           animation: microVibe 3.4s ease-in-out infinite;
//         }
//         .center-logo img {
//           width: 66%;
//           height: 66%;
//           object-fit: contain;
//           display:block;
//           border-radius: 8px;
//         }

//         /* Lottie sizing wrappers for exact aspect */
//         .lottie-wrap { position: relative; width: 384px; height: 384px; }
//         @media (max-width: 1024px) { .lottie-wrap { width: 320px; height: 320px; } .center-logo { width: 5.25rem; height: 5.25rem; } }
//         @media (max-width: 640px) { .lottie-wrap { width: 240px; height: 240px; } .center-logo { width: 4rem; height: 4rem; } }

//         /* Small inline loader centered inside the lottie box */
//         .inline-loader {
//           width: 84px;
//           height: 84px;
//           border-radius: 9999px;
//           display:flex;
//           align-items:center;
//           justify-content:center;
//           background: rgba(255,255,255,0.9);
//           box-shadow: 0 8px 20px rgba(217,47,97,0.08);
//         }
//         .spinner {
//           width: 40px;
//           height: 40px;
//           border: 4px solid rgba(217,47,97,0.15);
//           border-top-color: rgba(143, 15, 56,0.95);
//           border-radius: 9999px;
//           animation: spin 0.9s linear infinite;
//         }
//         @keyframes spin { to { transform: rotate(360deg); } }
//       `}</style>

//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
//         <div className="flex flex-col lg:flex-row items-center justify-between gap-8">
//           {/* Left column */}
//           <div className="w-full lg:w-1/2 space-y-6">
//             {/* Badge: exact left-column styling from RaspHero */}
//             <div className="inline-flex items-center space-x-2 bg-red-100/20 text-red-600 px-4 py-2 rounded-full mx-0">
//               <Shield className="w-4 h-4" style={{ color: "rgb(217,47,97)" }} />
//               <span className="text-sm font-medium gradient-text">{badgeText}</span>
//             </div>

//             <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 leading-tight">
//               Fortify your apps with{" "}
//               <span
//                 className="relative inline-block align-middle overflow-hidden"
//                 aria-live="polite"
//                 style={{ verticalAlign: "middle", display: "inline-block", width: "18ch" }}
//               >
//                 <span
//                   className="flex transition-transform duration-700 ease-in-out will-change-transform"
//                   style={{ transform: `translateX(-${index * 100}%)`, width: `${texts.length * 100}%` }}
//                 >
//                   {texts.map((t, i) => (
//                     <span
//                       key={i}
//                       className="min-w-full flex items-center gradient-text"
//                       style={{ whiteSpace: "nowrap" }}
//                     >
//                       {t}
//                     </span>
//                   ))}
//                 </span>
//               </span>
//             </h1>

//             <p className="text-base lg:text-lg text-slate-600 leading-relaxed max-w-xl">
//               At VAPTlabs, we combine advanced automation with expert human insight to quickly uncover,
//               validate, and fix risks — turning vulnerabilities into strengths and ensuring your
//               applications and users remain secure.
//             </p>

//             <div className="flex flex-wrap gap-4">
//               <button
//                 onClick={handleGetProtected}
//                 className="rounded-lg font-medium transition-all text-white px-6 py-2 sm:px-8 sm:py-3 text-base sm:text-lg gradient-btn"
//                 style={{
//                   boxShadow: "0 8px 24px rgba(217,47,97,0.12)",
//                 }}
//               >
//                 {ctaText}
//               </button>

//               {/* <a
//                 href={raspLink}
//                 className="rounded-lg font-medium transition-all border-2 px-6 py-2 sm:px-8 sm:py-3 text-base sm:text-lg"
//                 target="_blank"
//                 rel="noopener noreferrer"
//                 style={{
//                   borderImage: "linear-gradient(to right, rgb(217, 47, 97), rgb(143, 15, 56)) 1",
//                   color: "rgb(217,47,97)",
//                 }}
//               >
//                 RASP Solutions
//               </a> */}
//               <a
//                 href={raspLink}
//                 className="w-full sm:w-auto rounded-lg font-medium transition-all border-2 gradient-border text-black hover:bg-red-50 px-8 py-3 text-lg text-center"
//                 target="_blank"
//                 rel="noopener noreferrer"
//               >
//                 RASP Solutions
//               </a>
//             </div>
//           </div>

//           {/* Right column: Lottie (unchanged, logo size preserved) */}
//           <div className="w-full lg:w-1/2 flex justify-center mt-4 lg:mt-0">
//             <div className="lottie-wrap relative flex items-center justify-center">
//               {/* loader displayed only over lottie area */}
//               {isLoading && (
//                 <div className="absolute z-20 flex items-center justify-center inset-0">
//                   <div className="inline-loader">
//                     <div className="spinner" aria-hidden />
//                   </div>
//                 </div>
//               )}

//               {/* render Lottie only once JSON is fetched */}
//               {animationData && (
//                 <div style={{ width: "100%", height: "100%" }} aria-hidden>
//                   <Lottie
//                     animationData={animationData}
//                     loop={true}
//                     autoplay={true}
//                     style={{
//                       width: "100%",
//                       height: "100%",
//                       pointerEvents: "none",
//                     }}
//                   />
//                 </div>
//               )}

//               {/* center logo overlay (kept same size as in RaspHero) */}
//               <div className="center-logo" aria-hidden>
//                 <img src={logoUrl} alt="VAPTlabs logo" />
//               </div>

//               {/* floating labels (left as white labels) */}
//               <div className="absolute -top-3 -right-6 bg-white px-3 py-1.5 rounded-lg shadow-md text-xs sm:text-sm font-medium z-50">
//                 Subdomain Takeover
//               </div>
//               <div className="absolute top-1/2 -right-8 bg-white px-3 py-1.5 rounded-lg shadow-md text-xs sm:text-sm font-medium z-50">
//                 Payment Bypass
//               </div>
//               <div className="absolute -bottom-3 right-6 bg-white px-3 py-1.5 rounded-lg shadow-md text-xs sm:text-sm font-medium z-50">
//                 Remote Code Execution
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default VaptAbout;


// src/components/VaptAbout.tsx
import React, { useEffect, useState } from "react";
import { Shield } from "lucide-react";
import { useNavigate } from "react-router-dom";
import Lottie from "lottie-react";

interface VaptAboutProps {
  raspLink?: string;
  ctaText?: string;
  badgeText?: string;
  heroLetter?: string;
}

const VaptAbout: React.FC<VaptAboutProps> = ({
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
  const [animationData, setAnimationData] = useState<any | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  // load Lottie JSON from public folder at runtime
  useEffect(() => {
    let canceled = false;
    fetch("/animations/vapt-radar.json")
      .then((res) => {
        if (!res.ok) throw new Error("Failed to load animation JSON");
        return res.json();
      })
      .then((data) => {
        if (!canceled) {
          setAnimationData(data);
          setIsLoading(false);
        }
      })
      .catch((err) => {
        console.error("Lottie load error:", err);
        setIsLoading(false);
      });
    return () => {
      canceled = true;
    };
  }, []);

  useEffect(() => {
    const id = window.setInterval(() => {
      setIndex((prev) => (prev + 1) % texts.length);
    }, 3000);
    return () => clearInterval(id);
  }, [texts.length]);

  const handleGetProtected = () => {
    navigate("/contact");
  };

  const logoUrl = "https://vaptlabs.com/vapt-labs-logo.png";

  return (
    <section className="pt-24 pb-16 bg-gradient-to-br from-slate-50 via-blue-50 to-purple-50 min-h-screen flex items-center">
      <style>{`
        /* exact red gradient used in RaspHero */
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

        /* Micro vibe (unchanged) */
        @keyframes microVibe {
          0% { transform: translate(-50%,-50%) scale(1); filter: none; }
          30% { transform: translate(-50%,-50%) scale(1.03); filter: drop-shadow(0 10px 28px rgba(16,185,129,0.06)); }
          60% { transform: translate(-50%,-50%) scale(0.995); filter: drop-shadow(0 6px 12px rgba(219,39,119,0.04)); }
          100% { transform: translate(-50%,-50%) scale(1); filter: none; }
        }
        .center-logo {
          position: absolute;
          left: 50%;
          top: 50%;
          transform: translate(-50%,-50%);
          width: 6.5rem;
          height: 6.5rem;
          border-radius: 12px;
          display:flex;
          align-items:center;
          justify-content:center;
          background: linear-gradient(180deg, rgba(255,255,255,0.04), rgba(255,255,255,0));
          z-index: 40;
          animation: microVibe 3.4s ease-in-out infinite;
        }
        .center-logo img {
          width: 66%;
          height: 66%;
          object-fit: contain;
          display:block;
          border-radius: 8px;
        }

        /* Lottie sizing wrappers for exact aspect */
        .lottie-wrap { position: relative; width: 384px; height: 384px; }
        @media (max-width: 1024px) { .lottie-wrap { width: 320px; height: 320px; } .center-logo { width: 5.25rem; height: 5.25rem; } }
        @media (max-width: 640px) { .lottie-wrap { width: 240px; height: 240px; } .center-logo { width: 4rem; height: 4rem; } }

        /* Small inline loader centered inside the lottie box */
        .inline-loader {
          width: 84px;
          height: 84px;
          border-radius: 9999px;
          display:flex;
          align-items:center;
          justify-content:center;
          background: rgba(255,255,255,0.9);
          box-shadow: 0 8px 20px rgba(217,47,97,0.08);
        }
        .spinner {
          width: 40px;
          height: 40px;
          border: 4px solid rgba(217,47,97,0.15);
          border-top-color: rgba(143, 15, 56,0.95);
          border-radius: 9999px;
          animation: spin 0.9s linear infinite;
        }
        @keyframes spin { to { transform: rotate(360deg); } }
      `}</style>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-8">
          {/* Left column */}
          <div className="w-full lg:w-1/2 space-y-6">
            {/* Badge: exact left-column styling from RaspHero */}
            <div className="inline-flex items-center space-x-2 bg-red-100/20 text-red-600 px-4 py-2 rounded-full mx-0">
              <Shield className="w-4 h-4" style={{ color: "rgb(217,47,97)" }} />
              <span className="text-sm font-medium gradient-text">{badgeText}</span>
            </div>

            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 leading-tight">
              Fortify your apps with{" "}
              <span
                className="relative inline-block align-middle overflow-hidden"
                aria-live="polite"
                style={{ verticalAlign: "middle", display: "inline-block", width: "18ch" }}
              >
                <span
                  className="flex transition-transform duration-700 ease-in-out will-change-transform"
                  style={{ transform: `translateX(-${index * 100}%)`, width: `${texts.length * 100}%` }}
                >
                  {texts.map((t, i) => (
                    <span
                      key={i}
                      className="min-w-full flex items-center gradient-text"
                      style={{ whiteSpace: "nowrap" }}
                    >
                      {t}
                    </span>
                  ))}
                </span>
              </span>
            </h1>

            <p className="text-base lg:text-lg text-slate-600 leading-relaxed max-w-xl">
              At VAPTlabs, we combine advanced automation with expert human insight to quickly uncover,
              validate, and fix risks — turning vulnerabilities into strengths and ensuring your
              applications and users remain secure.
            </p>

            <div className="flex flex-wrap gap-4">
              <button
                onClick={handleGetProtected}
                className="w-full sm:w-auto rounded-lg font-medium transition-all text-white px-8 py-3 sm:px-8 sm:py-3 text-base sm:text-lg gradient-btn"
                style={{
                  boxShadow: "0 8px 24px rgba(217,47,97,0.12)",
                }}
              >
                {ctaText}
              </button>

              <a
                href={raspLink}
                className="w-full sm:w-auto rounded-lg font-medium transition-all border-2 gradient-border text-black hover:bg-red-50 px-8 py-3 text-lg text-center"
                target="_blank"
                rel="noopener noreferrer"
              >
                RASP Solutions
              </a>
            </div>
          </div>

          {/* Right column: Lottie (unchanged, logo size preserved) */}
          <div className="w-full lg:w-1/2 flex justify-center mt-4 lg:mt-0">
            <div className="lottie-wrap relative flex items-center justify-center">
              {/* loader displayed only over lottie area */}
              {isLoading && (
                <div className="absolute z-20 flex items-center justify-center inset-0">
                  <div className="inline-loader">
                    <div className="spinner" aria-hidden />
                  </div>
                </div>
              )}

              {/* render Lottie only once JSON is fetched */}
              {animationData && (
                <div style={{ width: "100%", height: "100%" }} aria-hidden>
                  <Lottie
                    animationData={animationData}
                    loop={true}
                    autoplay={true}
                    style={{
                      width: "100%",
                      height: "100%",
                      pointerEvents: "none",
                    }}
                  />
                </div>
              )}

              {/* center logo overlay (kept same size as in RaspHero) */}
              <div className="center-logo" aria-hidden>
                <img src={logoUrl} alt="VAPTlabs logo" />
              </div>

              {/* floating labels (left as white labels) */}
              <div className="absolute -top-3 -right-6 bg-white px-3 py-1.5 rounded-lg shadow-md text-xs sm:text-sm font-medium z-50">
                Subdomain Takeover
              </div>
              <div className="absolute top-1/2 -right-8 bg-white px-3 py-1.5 rounded-lg shadow-md text-xs sm:text-sm font-medium z-50">
                Payment Bypass
              </div>
              <div className="absolute -bottom-3 right-6 bg-white px-3 py-1.5 rounded-lg shadow-md text-xs sm:text-sm font-medium z-50">
                Remote Code Execution
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default VaptAbout;
