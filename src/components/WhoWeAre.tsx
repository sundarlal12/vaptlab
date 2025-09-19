// // src/components/WhoWeAre.tsx
// import React from "react";
// import Lottie from "lottie-react";

// const WhoWeAre: React.FC = () => {
//   return (
//     <section className="mb-16">
//       <div className="grid lg:grid-cols-2 gap-12 items-center">
//         {/* Left: Text */}
//         <div>
//           <h2 className="text-3xl font-bold text-gray-900 mb-6">Who We Are</h2>
//           <p className="text-lg text-gray-700 leading-relaxed mb-6">
//             VAPTlabs is a premier cybersecurity company specializing in comprehensive security
//             testing services. We help businesses of all sizes protect their digital assets
//             through expert penetration testing, vulnerability assessments, and compliance
//             auditing.
//           </p>
//           <p className="text-lg text-gray-700 leading-relaxed mb-6">
//             Our team of certified security professionals provides thorough testing for web
//             applications, mobile apps, networks, and cloud infrastructure. We also help
//             organizations achieve compliance with industry standards like SOC2, ISO 27001,
//             and regulatory requirements.
//           </p>
//           <p className="text-lg text-gray-700 leading-relaxed">
//             With our headquarters in Bengaluru and operations across multiple locations globally,
//             we serve as a trusted security partner for enterprises and organizations seeking to
//             protect their business from cyber threats.
//           </p>
//         </div>

//         {/* Right: Lottie Animation */}
//         <div className="relative flex justify-center">
//           <Lottie
//             animationData={require("../../public/animations/cyber-soc.json")}
//             loop
//             autoplay
//             className="w-[500px] h-[500px] max-w-full"
//           />
//         </div>
//       </div>
//     </section>
//   );
// };

// export default WhoWeAre;


// // src/components/WhoWeAre.tsx
// import React, { useEffect, useState } from "react";
// import Lottie from "lottie-react";

// const WhoWeAre: React.FC = () => {
//   const [animationData, setAnimationData] = useState<any>(null);
//   const [isLoading, setIsLoading] = useState(true);

//   useEffect(() => {
//     let canceled = false;
//     fetch("/animations/cyber-soc.json")
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

//   return (
//     <section className="mb-16">
//       <div className="grid lg:grid-cols-2 gap-12 items-center">
//         {/* Left: Text */}
//         <div>
//           <h2 className="text-3xl font-bold text-gray-900 mb-6">Who We Are</h2>
//           <p className="text-lg text-gray-700 leading-relaxed mb-6">
//             VAPTlabs is a premier cybersecurity company specializing in comprehensive security
//             testing services. We help businesses of all sizes protect their digital assets through
//             expert penetration testing, vulnerability assessments, and compliance auditing.
//           </p>
//           <p className="text-lg text-gray-700 leading-relaxed mb-6">
//             Our team of certified security professionals provides thorough testing for web
//             applications, mobile apps, networks, and cloud infrastructure. We also help
//             organizations achieve compliance with industry standards like HIPAA, ISO 27001,
//             and regulatory requirements.
//           </p>
//           <p className="text-lg text-gray-700 leading-relaxed">
//             With our headquarters in Bengaluru and operations across multiple locations globally,
//             we serve as a trusted security partner for enterprises and organizations seeking to
//             protect their business from cyber threats.
//           </p>
//         </div>

//         {/* Right: Lottie Animation */}
//         <div className="relative flex justify-center">
//           {isLoading ? (
//             <div className="w-[400px] h-[400px] flex items-center justify-center bg-white-100 rounded-lg shadow-md">
//               <span className="text-gray-500">Loading...</span>
//             </div>
//           ) : (
//             <Lottie
//               animationData={animationData}
//               loop
//               autoplay
//               className="w-[500px] h-[500px] max-w-full"
//             />
//           )}
//         </div>
//       </div>
//     </section>
//   );
// };

// export default WhoWeAre;
/*
// src/components/WhoWeAre.tsx
import React, { useEffect, useState } from "react";
import Lottie from "lottie-react";
import Loader from "./Loader";
import { useNavigate } from "react-router-dom";

const WhoWeAre: React.FC = () => {
  const [animationData, setAnimationData] = useState<any>(null);
  const [isLoading, setIsLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    let canceled = false;
    fetch("/animations/cyber-soc.json")
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

  return (
    <section className="mb-16">
      <div className="grid lg:grid-cols-2 gap-12 items-center">
      
        <div className="space-y-6">
          <div className="text-sm tracking-widest text-emerald-500 font-semibold">
            THE VAPTlabs PROMISE IN CYBERSECURITY
          </div>

          <h2 className="text-4xl lg:text-5xl font-extrabold leading-tight text-gray-900">
            Who We Are?
          </h2>

          <p className="text-xl text-gray-600 leading-relaxed">
           We are dedicated to providing proactive solutions that safeguard your digital assets with the highest standards of security.
          </p>

         

          <div className="pt-6">
            <p className="text-lg text-gray-700 leading-relaxed mb-6">
            VAPTlabs is a trusted leader in digital security. We specialize in penetration testing for Web and Mobile applications, Cloud and External networks, APIs, and IoT devices — ensuring your systems remain secure against evolving threats.
            </p>

            <p className="text-lg text-gray-700 leading-relaxed">
            Our team of skilled problem solvers works relentlessly to identify gaps in your security. From startups to global enterprises, we’ve helped organizations worldwide strengthen their defenses against cyber threats.
            </p>
          </div>
        </div>

     
        <div className="relative flex justify-center">
          <div className="w-[420px] h-[420px] flex items-center justify-center bg-transparent">
            {isLoading ? (
              <Loader size="large" fullscreen={false} text="Loading..." />
    
            ) : animationData ? (
              <Lottie
                animationData={animationData}
                loop
                autoplay
                className="w-[420px] h-[420px] max-w-full"
                style={{ pointerEvents: "none" }}
              />
            ) : (
              <p className="text-gray-500">Animation unavailable</p>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhoWeAre;

*/


// src/components/WhoWeAre.tsx
import React, { useEffect, useState } from "react";
import Lottie from "lottie-react";
import { useNavigate } from "react-router-dom";

const WhoWeAre: React.FC = () => {
  const [animationData, setAnimationData] = useState<any>(null);
  const [isLoading, setIsLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    let canceled = false;
    fetch("/animations/cyber-soc.json")
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

  return (
    <section className="mb-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          {/* Left: Text */}
          <div className="space-y-6">
            <div className="text-sm tracking-widest text-emerald-500 font-semibold">
              THE VAPTlabs PROMISE IN CYBERSECURITY
            </div>

            {/* Heading + Button row */}
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold leading-tight text-gray-900">
                Who We Are?
              </h2>
              <button
                onClick={() => navigate("/contact")}
                className="inline-block bg-emerald-500 hover:bg-emerald-600 text-white font-semibold px-5 py-2 sm:px-6 sm:py-3 rounded-full shadow-md transition self-start sm:self-auto"
              >
                Get a Quote
              </button>
            </div>

            <p className="text-lg sm:text-xl text-gray-600 leading-relaxed max-w-2xl">
              We are dedicated to providing proactive solutions that safeguard
              your digital assets with the highest standards of security.
            </p>

            <div className="pt-4 space-y-4">
              <p className="text-base sm:text-lg text-gray-700 leading-relaxed">
                VAPTlabs is a trusted leader in digital security. We specialize
                in penetration testing for web and mobile applications, cloud
                and external networks, APIs, and IoT devices — ensuring your
                systems remain secure against evolving threats.
              </p>

              <p className="text-base sm:text-lg text-gray-700 leading-relaxed">
                Our team of skilled problem solvers works relentlessly to
                identify gaps in your security. From startups to global
                enterprises, we’ve helped organizations worldwide strengthen
                defenses and respond faster to incidents.
              </p>
            </div>
          </div>

          {/* Right: Lottie Animation */}
          <div className="flex justify-center">
            <div
              className="relative flex items-center justify-center rounded-lg"
              style={{ width: "min(520px, 100%)", maxWidth: 520 }}
            >
              <div
                className="w-full"
                style={{
                  paddingTop: "100%",
                  position: "relative",
                }}
              >
                {isLoading && (
                  <div className="absolute inset-0 flex items-center justify-center z-10">
                    <svg
                      className="animate-spin"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      width="44"
                      height="44"
                    >
                      <circle
                        cx="12"
                        cy="12"
                        r="10"
                        stroke="rgba(16,185,129,0.18)"
                        strokeWidth="4"
                        fill="none"
                      />
                      <path
                        d="M22 12a10 10 0 00-10-10"
                        stroke="#10b981"
                        strokeWidth="4"
                        strokeLinecap="round"
                        fill="none"
                      />
                    </svg>
                  </div>
                )}

                <div
                  style={{
                    position: "absolute",
                    inset: 0,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    padding: "12px",
                  }}
                >
                  {animationData ? (
                    <Lottie
                      animationData={animationData}
                      loop
                      autoplay
                      style={{
                        width: "100%",
                        height: "100%",
                        maxHeight: "520px",
                        pointerEvents: "none",
                        borderRadius: 12,
                      }}
                    />
                  ) : !isLoading ? (
                    <div className="flex items-center justify-center w-full h-full bg-gray-50 rounded-lg">
                      <p className="text-gray-500">Animation unavailable</p>
                    </div>
                  ) : null}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhoWeAre;
