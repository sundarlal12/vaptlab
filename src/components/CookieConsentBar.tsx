// // src/components/CookieConsent.tsx
// import React, { useEffect, useState } from "react";

// const RED_GRAD =
//   "linear-gradient(90deg, rgba(217,47,97,1), rgba(143,15,56,1))";
// const RED_GRAD_LIGHT =
//   "linear-gradient(90deg, rgba(217,47,97,0.12), rgba(143,15,56,0.08))";

// const CookieConsent: React.FC = () => {
//   const [showModal, setShowModal] = useState(false);
//   const [showConsent, setShowConsent] = useState(true);

//   useEffect(() => {
//     try {
//       const consent = localStorage.getItem("cookieConsent");
//       if (consent) {
//         setShowConsent(false);
//       }
//     } catch (e) {
//       // ignore localStorage errors in privacy modes
//     }
//   }, []);

//   const persist = (value: any) => {
//     try {
//       localStorage.setItem("cookieConsent", JSON.stringify(value));
//     } catch (e) {
//       console.warn("Failed to save cookie consent:", e);
//     }
//   };

//   const handleAcceptAll = () => {
//     persist({
//       necessary: true,
//       functional: true,
//       analytics: true,
//       performance: true,
//       advertisement: true,
//       acceptedAt: Date.now(),
//     });
//     setShowConsent(false);
//   };

//   const handleRejectAll = () => {
//     persist({
//       necessary: true,
//       functional: false,
//       analytics: false,
//       performance: false,
//       advertisement: false,
//       acceptedAt: Date.now(),
//     });
//     setShowConsent(false);
//   };

//   const handleSavePreferences = () => {
//     // For demo: treat Save same as Accept here (adjust to your form values)
//     handleAcceptAll();
//   };

//   if (!showConsent) return null;

//   return (
//     <>
//       {/* cookie bar (responsive) */}
//       <div
//         className="fixed z-50 left-4 right-4 sm:left-4 sm:right-auto bottom-4 sm:bottom-6"
//         style={{ maxWidth: "calc(100% - 2rem)" }}
//         aria-live="polite"
//       >
//         <div
//           className="bg-white shadow-lg rounded-lg border p-4 flex flex-col sm:flex-row sm:items-center gap-3"
//           style={{ borderColor: "rgba(0,0,0,0.06)" }}
//         >
//           <div className="flex-1 min-w-0">
//             <p className="text-gray-800 font-semibold">We value your privacy</p>
//             <p className="text-gray-600 text-sm mt-1 truncate">
//               We use cookies to enhance your browsing experience, serve personalised
//               content, and analyse traffic. By clicking "Accept All", you agree to
//               our use of cookies.
//             </p>
//           </div>

//           <div className="flex flex-wrap items-center gap-2 justify-end">
//             <button
//               type="button"
//               onClick={() => setShowModal(true)}
//               className="px-3 py-2 rounded-md border text-gray-700 text-sm"
//               style={{
//                 borderColor: "rgba(217,47,97,0.12)",
//                 background: "transparent",
//               }}
//               onMouseEnter={(e) =>
//                 ((e.currentTarget as HTMLButtonElement).style.background =
//                   RED_GRAD_LIGHT)
//               }
//               onMouseLeave={(e) =>
//                 ((e.currentTarget as HTMLButtonElement).style.background =
//                   "transparent")
//               }
//             >
//               Customise
//             </button>

//             <button
//               type="button"
//               onClick={handleRejectAll}
//               className="px-3 py-2 rounded-md border text-gray-700 text-sm"
//               style={{
//                 borderColor: "rgba(217,47,97,0.12)",
//                 background: "transparent",
//               }}
//               onMouseEnter={(e) =>
//                 ((e.currentTarget as HTMLButtonElement).style.background =
//                   RED_GRAD_LIGHT)
//               }
//               onMouseLeave={(e) =>
//                 ((e.currentTarget as HTMLButtonElement).style.background =
//                   "transparent")
//               }
//             >
//               Reject All
//             </button>

//             <button
//               type="button"
//               onClick={handleAcceptAll}
//               className="px-4 py-2 rounded-md text-white text-sm font-semibold"
//               style={{
//                 background: RED_GRAD,
//                 boxShadow: "0 8px 22px rgba(217,47,97,0.12)",
//               }}
//             >
//               Accept All
//             </button>
//           </div>
//         </div>
//       </div>

//       {/* modal */}
//       {showModal && (
//         <div
//           className="fixed inset-0 z-50 flex items-center justify-center p-4"
//           role="dialog"
//           aria-modal="true"
//         >
//           <div
//             className="absolute inset-0 bg-black/50"
//             onClick={() => setShowModal(false)}
//             aria-hidden
//           />

//           <div className="relative w-full max-w-3xl max-h-[90vh] overflow-y-auto bg-white rounded-lg shadow-2xl p-6 z-50">
//             <div className="flex items-center justify-between mb-4">
//               <h2 className="text-lg font-semibold">Customise Consent Preferences</h2>
//               <button
//                 aria-label="Close preferences"
//                 onClick={() => setShowModal(false)}
//                 className="text-gray-600"
//               >
//                 ✖
//               </button>
//             </div>

//             <p className="text-gray-600 mb-4">
//               Choose which cookie categories you allow. Necessary cookies are always active.
//             </p>

//             <div className="space-y-4">
//               {[
//                 {
//                   key: "necessary",
//                   title: "Necessary",
//                   desc:
//                     "Required for core site functionality (login, consent settings). Always active.",
//                   alwaysOn: true,
//                 },
//                 {
//                   key: "functional",
//                   title: "Functional",
//                   desc:
//                     "Improves site features (language, preferences). These cookies improve your experience.",
//                 },
//                 {
//                   key: "analytics",
//                   title: "Analytics",
//                   desc:
//                     "Used to measure site usage, visitor counts, bounce rate and traffic sources.",
//                 },
//                 {
//                   key: "performance",
//                   title: "Performance",
//                   desc:
//                     "Used to monitor performance indicators to improve site speed and reliability.",
//                 },
//                 {
//                   key: "advertisement",
//                   title: "Advertisement",
//                   desc:
//                     "Used to deliver relevant ads. These may be provided by third parties.",
//                 },
//               ].map((cat) => (
//                 <div key={cat.key} className="flex items-start gap-4 pb-3 border-b">
//                   <div className="flex-1">
//                     <div className="flex items-center justify-between">
//                       <h3 className="font-semibold text-gray-800">{cat.title}</h3>
//                       {cat.alwaysOn && (
//                         <span className="text-sm font-medium" style={{ color: "rgb(34,197,94)" }}>
//                           Always Active
//                         </span>
//                       )}
//                     </div>
//                     <p className="text-sm text-gray-600 mt-1">{cat.desc}</p>
//                   </div>

//                   {/* Toggle placeholder (you can replace with actual toggle control) */}
//                   <div className="flex-shrink-0">
//                     <label className="inline-flex items-center">
//                       <input
//                         type="checkbox"
//                         defaultChecked={cat.alwaysOn ? true : false}
//                         disabled={cat.alwaysOn}
//                         className="form-checkbox h-5 w-5 text-red-600"
//                         aria-label={`${cat.title} consent`}
//                       />
//                     </label>
//                   </div>
//                 </div>
//               ))}
//             </div>

//             <div className="flex flex-col sm:flex-row gap-3 justify-end mt-6">
//               <button
//                 onClick={handleRejectAll}
//                 className="px-4 py-2 rounded-md border text-gray-700"
//                 style={{ borderColor: "rgba(217,47,97,0.12)" }}
//               >
//                 Reject All
//               </button>

//               <button
//                 onClick={() => {
//                   handleSavePreferences();
//                   setShowModal(false);
//                 }}
//                 className="px-4 py-2 rounded-md border text-gray-700"
//                 style={{ borderColor: "rgba(217,47,97,0.12)" }}
//                 onMouseEnter={(e) =>
//                   ((e.currentTarget as HTMLButtonElement).style.background =
//                     RED_GRAD_LIGHT)
//                 }
//                 onMouseLeave={(e) =>
//                   ((e.currentTarget as HTMLButtonElement).style.background =
//                     "transparent")
//                 }
//               >
//                 Save My Preferences
//               </button>

//               <button
//                 onClick={() => {
//                   handleAcceptAll();
//                   setShowModal(false);
//                 }}
//                 className="px-4 py-2 rounded-md text-white"
//                 style={{ background: RED_GRAD }}
//               >
//                 Accept All
//               </button>
//             </div>
//           </div>
//         </div>
//       )}
//     </>
//   );
// };

// export default CookieConsent;

// CookieConsent.tsx


// import { useState, useEffect } from "react";

// const RED_GRAD = "linear-gradient(90deg, rgb(217,47,97), rgb(143,15,56))";
// const RED_GRAD_LIGHT = "linear-gradient(90deg, rgba(217,47,97,0.15), rgba(143,15,56,0.15))";

// const CookieConsent = () => {
//   const [showModal, setShowModal] = useState(false);
//   const [showConsent, setShowConsent] = useState(true);

//   useEffect(() => {
//     const consent = localStorage.getItem("cookieConsent");
//     if (consent) setShowConsent(false);
//   }, []);

//   const handleAcceptAll = () => {
//     localStorage.setItem("cookieConsent", JSON.stringify({ all: true }));
//     setShowConsent(false);
//   };

//   const handleRejectAll = () => {
//     localStorage.setItem("cookieConsent", JSON.stringify({ all: false }));
//     setShowConsent(false);
//   };

//   if (!showConsent) return null;

//   return (
//     <div className="fixed bottom-4 left-4 bg-white shadow-lg rounded-lg p-4 w-96 border border-gray-200 z-50">
//       <p className="text-gray-800 font-semibold">We value your privacy</p>
//       <p className="text-gray-600 text-sm mt-1">
//         We use cookies to enhance your browsing experience, serve personalised ads or content,
//         and analyse our traffic. By clicking "Accept All", you consent to our use of cookies.
//       </p>

//       {/* Buttons */}
//       <div className="flex flex-wrap justify-between mt-4 gap-2">
//         <button
//           className="px-4 py-2 rounded-md border text-sm font-medium"
//           style={{ borderImage: `${RED_GRAD} 1`, color: "rgb(217,47,97)" }}
//           onMouseEnter={(e) => ((e.currentTarget as HTMLButtonElement).style.background = RED_GRAD_LIGHT)}
//           onMouseLeave={(e) => ((e.currentTarget as HTMLButtonElement).style.background = "transparent")}
//           onClick={() => setShowModal(true)}
//         >
//           Customise
//         </button>
//         <button
//           className="px-4 py-2 rounded-md text-white text-sm font-medium"
//           style={{ background: RED_GRAD }}
//           onClick={handleRejectAll}
//         >
//           Reject All
//         </button>
//         <button
//           className="px-4 py-2 rounded-md text-white text-sm font-medium"
//           style={{ background: RED_GRAD }}
//           onClick={handleAcceptAll}
//         >
//           Accept All
//         </button>
//       </div>

//       {/* Customise Modal */}
//       {showModal && (
//         <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
//           <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-2xl max-h-[90vh] overflow-y-auto">
//             <div className="flex justify-between items-center border-b pb-2">
//               <h2 className="text-lg font-semibold">Customise Consent Preferences</h2>
//               <button onClick={() => setShowModal(false)}>✖</button>
//             </div>

//             {/* Example categories */}
//             {["Necessary", "Functional", "Analytics"].map((cat) => (
//               <div key={cat} className="flex justify-between items-center border-b py-2">
//                 <div>
//                   <h3 className="font-semibold">{cat}</h3>
//                   <p className="text-sm text-gray-600">Description about {cat} cookies...</p>
//                 </div>
//                 <input
//                   type="checkbox"
//                   className="form-checkbox h-5 w-5"
//                   style={{
//                     accentColor: "rgb(217,47,97)", // checkbox tick color
//                   }}
//                   defaultChecked={cat === "Necessary"}
//                   disabled={cat === "Necessary"}
//                 />
//               </div>
//             ))}

//             {/* Modal Buttons */}
//             <div className="flex flex-wrap justify-end mt-4 gap-2">
//               <button
//                 className="px-4 py-2 rounded-md border text-sm font-medium"
//                 style={{ borderImage: `${RED_GRAD} 1`, color: "rgb(217,47,97)" }}
//                 onClick={handleRejectAll}
//               >
//                 Reject All
//               </button>
//               <button
//                 className="px-4 py-2 rounded-md text-white text-sm font-medium"
//                 style={{ background: RED_GRAD }}
//                 onClick={handleAcceptAll}
//               >
//                 Save My Preferences
//               </button>
//               <button
//                 className="px-4 py-2 rounded-md text-white text-sm font-medium"
//                 style={{ background: RED_GRAD }}
//                 onClick={handleAcceptAll}
//               >
//                 Accept All
//               </button>
//             </div>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// };

// export default CookieConsent;

// //k

// import { useState, useEffect } from "react";

// const RED_GRAD = "linear-gradient(90deg, rgb(217,47,97), rgb(143,15,56))";
// const RED_GRAD_LIGHT = "linear-gradient(90deg, rgba(217,47,97,0.15), rgba(143,15,56,0.15))";

// const CookieConsent = () => {
//   const [showModal, setShowModal] = useState(false);
//   const [showConsent, setShowConsent] = useState(true);

//   useEffect(() => {
//     const consent = localStorage.getItem("cookieConsent");
//     if (consent) setShowConsent(false);
//   }, []);

//   const handleAcceptAll = () => {
//     localStorage.setItem("cookieConsent", JSON.stringify({ all: true }));
//     setShowConsent(false);
//   };

//   const handleRejectAll = () => {
//     localStorage.setItem("cookieConsent", JSON.stringify({ all: false }));
//     setShowConsent(false);
//   };

//   if (!showConsent) return null;

//   return (
//     <div className="fixed bottom-4 left-4 bg-white shadow-lg rounded-lg p-4 w-96 border border-gray-200 z-50">
//       <p className="text-gray-800 font-semibold">We value your privacy</p>
//       <p className="text-gray-600 text-sm mt-1">
//         We use cookies to enhance your browsing experience, serve personalised ads or content,
//         and analyse our traffic. By clicking "Accept All", you consent to our use of cookies.
//       </p>

//       {/* Buttons */}
//       <div className="flex flex-wrap justify-between mt-4 gap-2">
//         <button
//           className="px-4 py-2 rounded-md border text-sm font-medium"
//           style={{ borderImage: `${RED_GRAD} 1`, color: "rgb(217,47,97)" }}
//           onMouseEnter={(e) => ((e.currentTarget as HTMLButtonElement).style.background = RED_GRAD_LIGHT)}
//           onMouseLeave={(e) => ((e.currentTarget as HTMLButtonElement).style.background = "transparent")}
//           onClick={() => setShowModal(true)}
//         >
//           Customise
//         </button>
//         <button
//           className="px-4 py-2 rounded-md text-white text-sm font-medium"
//           style={{ background: RED_GRAD }}
//           onClick={handleRejectAll}
//         >
//           Reject All
//         </button>
//         <button
//           className="px-4 py-2 rounded-md text-white text-sm font-medium"
//           style={{ background: RED_GRAD }}
//           onClick={handleAcceptAll}
//         >
//           Accept All
//         </button>
//       </div>

//       {/* Customise Modal */}
//       {showModal && (
//         <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
//           <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-2xl max-h-[90vh] overflow-y-auto">
//             <div className="flex justify-between items-center border-b pb-2">
//               <h2 className="text-lg font-semibold">Customise Consent Preferences</h2>
//               <button onClick={() => setShowModal(false)}>✖</button>
//             </div>

//             {/* Real preference categories + descriptions (replaced placeholder) */}
//             <div className="mt-4 space-y-3">
//               {/* Necessary */}
//               <div className="flex justify-between items-start border-b py-3">
//                 <div className="pr-4">
//                   <h3 className="font-semibold">Necessary</h3>
//                   <p className="text-sm text-gray-600 mt-1">
//                     Necessary cookies are required to enable the basic features of this site,
//                     such as providing secure log-in or adjusting your consent preferences. These
//                     cookies do not store any personally identifiable data.
//                   </p>
//                 </div>
//                 <input
//                   type="checkbox"
//                   className="form-checkbox h-5 w-5 mt-1"
//                   style={{ accentColor: "rgb(217,47,97)" }}
//                   defaultChecked
//                   disabled
//                 />
//               </div>

//               {/* Functional */}
//               <div className="flex justify-between items-start border-b py-3">
//                 <div className="pr-4">
//                   <h3 className="font-semibold">Functional</h3>
//                   <p className="text-sm text-gray-600 mt-1">
//                     Functional cookies help perform certain functionalities like sharing the content
//                     of the website on social media platforms, collecting feedback, and other
//                     third-party features.
//                   </p>
//                 </div>
//                 <input
//                   type="checkbox"
//                   className="form-checkbox h-5 w-5 mt-1"
//                   style={{ accentColor: "rgb(217,47,97)" }}
//                 />
//               </div>

//               {/* Analytics */}
//               <div className="flex justify-between items-start border-b py-3">
//                 <div className="pr-4">
//                   <h3 className="font-semibold">Analytics</h3>
//                   <p className="text-sm text-gray-600 mt-1">
//                     Analytical cookies are used to understand how visitors interact with the website.
//                     These cookies help provide information on metrics such as the number of visitors,
//                     bounce rate, traffic source, etc.
//                   </p>
//                 </div>
//                 <input
//                   type="checkbox"
//                   className="form-checkbox h-5 w-5 mt-1"
//                   style={{ accentColor: "rgb(217,47,97)" }}
//                 />
//               </div>

//               {/* Performance */}
//               <div className="flex justify-between items-start border-b py-3">
//                 <div className="pr-4">
//                   <h3 className="font-semibold">Performance</h3>
//                   <p className="text-sm text-gray-600 mt-1">
//                     Performance cookies are used to understand and analyse the key performance
//                     indexes of the website which helps in delivering a better user experience for
//                     the visitors.
//                   </p>
//                 </div>
//                 <input
//                   type="checkbox"
//                   className="form-checkbox h-5 w-5 mt-1"
//                   style={{ accentColor: "rgb(217,47,97)" }}
//                 />
//               </div>

//               {/* Advertisement */}
//               <div className="flex justify-between items-start border-b py-3">
//                 <div className="pr-4">
//                   <h3 className="font-semibold">Advertisement</h3>
//                   <p className="text-sm text-gray-600 mt-1">
//                     Advertisement cookies are used to provide visitors with customised advertisements
//                     based on the pages you visited previously and to analyse the effectiveness of
//                     the ad campaigns.
//                   </p>
//                 </div>
//                 <input
//                   type="checkbox"
//                   className="form-checkbox h-5 w-5 mt-1"
//                   style={{ accentColor: "rgb(217,47,97)" }}
//                 />
//               </div>
//             </div>

//             {/* Modal Buttons */}
//             <div className="flex flex-wrap justify-end mt-4 gap-2">
//               <button
//                 className="px-4 py-2 rounded-md border text-sm font-medium"
//                 style={{ borderImage: `${RED_GRAD} 1`, color: "rgb(217,47,97)" }}
//                 onClick={handleRejectAll}
//               >
//                 Reject All
//               </button>
//               <button
//                 className="px-4 py-2 rounded-md text-white text-sm font-medium"
//                 style={{ background: RED_GRAD }}
//                 onClick={handleAcceptAll}
//               >
//                 Save My Preferences
//               </button>
//               <button
//                 className="px-4 py-2 rounded-md text-white text-sm font-medium"
//                 style={{ background: RED_GRAD }}
//                 onClick={handleAcceptAll}
//               >
//                 Accept All
//               </button>
//             </div>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// };

// export default CookieConsent;
// //d


import { useState, useEffect } from "react";

const RED_GRAD = "linear-gradient(90deg, rgb(217,47,97), rgb(143,15,56))";
const RED_GRAD_LIGHT = "linear-gradient(90deg, rgba(217,47,97,0.15), rgba(143,15,56,0.15))";

type ConsentShape = {
  necessary: boolean;
  functional: boolean;
  analytics: boolean;
  performance: boolean;
  advertisement: boolean;
  acceptedAt?: number | null;
};

const DEFAULT_CONSENT: ConsentShape = {
  necessary: true,
  functional: false,
  analytics: false,
  performance: false,
  advertisement: false,
  acceptedAt: null,
};

const CookieConsent = () => {
  const [showModal, setShowModal] = useState(false);
  const [showConsent, setShowConsent] = useState(true);

  // controlled preferences used in the modal
  const [prefs, setPrefs] = useState<ConsentShape>(DEFAULT_CONSENT);

  // load stored preferences (if any)
  useEffect(() => {
    try {
      const raw = localStorage.getItem("cookieConsent");
      if (raw) {
        const parsed = JSON.parse(raw) as ConsentShape;
        // merge with defaults to be safe
        setPrefs({
          necessary: parsed.necessary ?? true,
          functional: parsed.functional ?? false,
          analytics: parsed.analytics ?? false,
          performance: parsed.performance ?? false,
          advertisement: parsed.advertisement ?? false,
          acceptedAt: parsed.acceptedAt ?? null,
        });
        setShowConsent(false); // hide bar if already chosen
      }
    } catch (e) {
      // ignore parse errors (privacy modes)
      console.warn("Failed to read cookieConsent from localStorage", e);
    }
  }, []);

  const persist = (value: ConsentShape) => {
    try {
      const toSave: ConsentShape = { ...value, acceptedAt: Date.now() };
      localStorage.setItem("cookieConsent", JSON.stringify(toSave));
      setPrefs(toSave);
      setShowConsent(false);
    } catch (e) {
      console.warn("Failed to save cookie consent:", e);
    }
  };

  const handleAcceptAll = () => {
    persist({
      necessary: true,
      functional: true,
      analytics: true,
      performance: true,
      advertisement: true,
    });
  };

  const handleRejectAll = () => {
    persist({
      necessary: true,
      functional: false,
      analytics: false,
      performance: false,
      advertisement: false,
    });
  };

  const handleSavePreferences = () => {
    // ensure necessary always true
    persist({ ...prefs, necessary: true });
    setShowModal(false);
  };

  if (!showConsent) return null;

  return (
    <div className="fixed bottom-4 left-4 bg-white shadow-lg rounded-lg p-4 w-96 border border-gray-200 z-50">
      <p className="text-gray-800 font-semibold">We value your privacy</p>
      <p className="text-gray-600 text-sm mt-1">
        We use cookies to enhance your browsing experience, serve personalised ads or content,
        and analyse our traffic. By clicking "Accept All", you consent to our use of cookies.
      </p>

      {/* Buttons */}
      <div className="flex flex-wrap justify-between mt-4 gap-2">
        <button
          className="px-4 py-2 rounded-md border text-sm font-medium"
          style={{ borderImage: `${RED_GRAD} 1`, color: "rgb(217,47,97)" }}
          onMouseEnter={(e) => ((e.currentTarget as HTMLButtonElement).style.background = RED_GRAD_LIGHT)}
          onMouseLeave={(e) => ((e.currentTarget as HTMLButtonElement).style.background = "transparent")}
          onClick={() => {
            // open modal with current prefs (no GUI change)
            setShowModal(true);
          }}
        >
          Customise
        </button>
        <button
          className="px-4 py-2 rounded-md text-white text-sm font-medium"
          style={{ background: RED_GRAD }}
          onClick={handleRejectAll}
        >
          Reject All
        </button>
        <button
          className="px-4 py-2 rounded-md text-white text-sm font-medium"
          style={{ background: RED_GRAD }}
          onClick={handleAcceptAll}
        >
          Accept All
        </button>
      </div>

      {/* Customise Modal */}
      {showModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
          <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-2xl max-h-[90vh] overflow-y-auto">
            <div className="flex justify-between items-center border-b pb-2">
              <h2 className="text-lg font-semibold">Customise Consent Preferences</h2>
              <button onClick={() => setShowModal(false)}>✖</button>
            </div>

            {/* Real preference categories + descriptions */}
            <div className="mt-4 space-y-3">
              {/* Necessary */}
              <div className="flex justify-between items-start border-b py-3">
                <div className="pr-4">
                  <h3 className="font-semibold">Necessary</h3>
                  <p className="text-sm text-gray-600 mt-1">
                    Necessary cookies are required to enable the basic features of this site,
                    such as providing secure log-in or adjusting your consent preferences. These
                    cookies do not store any personally identifiable data.
                  </p>
                </div>
                <input
                  type="checkbox"
                  className="form-checkbox h-5 w-5 mt-1"
                  style={{ accentColor: "rgb(217,47,97)" }}
                  checked
                  disabled
                  readOnly
                />
              </div>

              {/* Functional */}
              <div className="flex justify-between items-start border-b py-3">
                <div className="pr-4">
                  <h3 className="font-semibold">Functional</h3>
                  <p className="text-sm text-gray-600 mt-1">
                    Functional cookies help perform certain functionalities like sharing the content
                    of the website on social media platforms, collecting feedback, and other
                    third-party features.
                  </p>
                </div>
                <input
                  type="checkbox"
                  className="form-checkbox h-5 w-5 mt-1"
                  style={{ accentColor: "rgb(217,47,97)" }}
                  checked={prefs.functional}
                  onChange={(e) => setPrefs((p) => ({ ...p, functional: e.target.checked }))}
                />
              </div>

              {/* Analytics */}
              <div className="flex justify-between items-start border-b py-3">
                <div className="pr-4">
                  <h3 className="font-semibold">Analytics</h3>
                  <p className="text-sm text-gray-600 mt-1">
                    Analytical cookies are used to understand how visitors interact with the website.
                    These cookies help provide information on metrics such as the number of visitors,
                    bounce rate, traffic source, etc.
                  </p>
                </div>
                <input
                  type="checkbox"
                  className="form-checkbox h-5 w-5 mt-1"
                  style={{ accentColor: "rgb(217,47,97)" }}
                  checked={prefs.analytics}
                  onChange={(e) => setPrefs((p) => ({ ...p, analytics: e.target.checked }))}
                />
              </div>

              {/* Performance */}
              <div className="flex justify-between items-start border-b py-3">
                <div className="pr-4">
                  <h3 className="font-semibold">Performance</h3>
                  <p className="text-sm text-gray-600 mt-1">
                    Performance cookies are used to understand and analyse the key performance
                    indexes of the website which helps in delivering a better user experience for
                    the visitors.
                  </p>
                </div>
                <input
                  type="checkbox"
                  className="form-checkbox h-5 w-5 mt-1"
                  style={{ accentColor: "rgb(217,47,97)" }}
                  checked={prefs.performance}
                  onChange={(e) => setPrefs((p) => ({ ...p, performance: e.target.checked }))}
                />
              </div>

              {/* Advertisement */}
              <div className="flex justify-between items-start border-b py-3">
                <div className="pr-4">
                  <h3 className="font-semibold">Advertisement</h3>
                  <p className="text-sm text-gray-600 mt-1">
                    Advertisement cookies are used to provide visitors with customised advertisements
                    based on the pages you visited previously and to analyse the effectiveness of
                    the ad campaigns.
                  </p>
                </div>
                <input
                  type="checkbox"
                  className="form-checkbox h-5 w-5 mt-1"
                  style={{ accentColor: "rgb(217,47,97)" }}
                  checked={prefs.advertisement}
                  onChange={(e) => setPrefs((p) => ({ ...p, advertisement: e.target.checked }))}
                />
              </div>
            </div>

            {/* Modal Buttons */}
            <div className="flex flex-wrap justify-end mt-4 gap-2">
              <button
                className="px-4 py-2 rounded-md border text-sm font-medium"
                style={{ borderImage: `${RED_GRAD} 1`, color: "rgb(217,47,97)" }}
                onClick={handleRejectAll}
              >
                Reject All
              </button>
              <button
                className="px-4 py-2 rounded-md text-white text-sm font-medium"
                style={{ background: RED_GRAD }}
                onClick={() => {
                  // Save controlled preferences exactly as selected
                  handleSavePreferences();
                }}
              >
                Save My Preferences
              </button>
              <button
                className="px-4 py-2 rounded-md text-white text-sm font-medium"
                style={{ background: RED_GRAD }}
                onClick={handleAcceptAll}
              >
                Accept All
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default CookieConsent;
