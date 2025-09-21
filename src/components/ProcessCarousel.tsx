
// /*
// ProcessCarousel.tsx
// React + Tailwind + Framer Motion component
// - GUI recreation of the screenshot (responsive)
// - Tab navigation with right-to-left swipe animation
// - Tabs are single-line with green gradient active state
// - Each tab has unique full-width animated SVG related to cybersecurity VAPT phases
// */

// // src/components/ProcessCarousel.tsx
// import React, { useState } from 'react';
// import { motion, AnimatePresence } from 'framer-motion';
// import { ChevronRightIcon, ChevronLeftIcon } from '@heroicons/react/24/outline';

// type Step = {
//   id: string;
//   title: string;
//   titleShort: string;
//   svg: React.ReactNode;
//   text: string;
// };

// type ProcessCarouselProps = {
//   /** Optional custom title string */
//   title?: string;
//    subtitle?: string;
// };

// const steps: Step[] = [
//   {
//     id: 'define',
//     title: 'Define Scope',
//     titleShort: 'Define Scope',
//     svg: (
//       <svg viewBox="0 0 600 360" className="w-full h-full" preserveAspectRatio="none" role="img" aria-label="Define Scope terminal">
//         {/* terminal frame */}
//         <rect width="600" height="360" rx="10" ry="10" fill="#0b0b0b" stroke="#2f2f2f" strokeWidth="2" />
//         {/* header bar */}
//         <rect x="0" y="0" width="600" height="32" fill="#1f1f1f" rx="10" />
//         <circle cx="18" cy="16" r="6" fill="#f25f58" />
//         <circle cx="40" cy="16" r="6" fill="#f2c94c" />
//         <circle cx="62" cy="16" r="6" fill="#4cd964" />

//         {/* terminal prompt & blinking cursor */}
//         <text x="18" y="64" fill="#0fffa5" fontSize="16" fontFamily="monospace">
//           root@kali:~# echo "Defining scope for target.com"
//         </text>
//         <rect x="540" y="50" width="10" height="18" fill="#0fffa5">
//           <animate attributeName="opacity" values="1;0;1" dur="1s" repeatCount="indefinite" />
//         </rect>

//         {/* body text lines */}
//         <text x="18" y="96" fill="#aaf3d8" fontSize="13" fontFamily="monospace">
//           [+] target: target.com
//         </text>
//         <text x="18" y="116" fill="#aaf3d8" fontSize="13" fontFamily="monospace">
//           [+] scope: web, api, auth
//         </text>
//         <text x="18" y="136" fill="#aaf3d8" fontSize="13" fontFamily="monospace">
//           [+] exclusions: /static, /assets
//         </text>

//         {/* progress bar */}
//         <rect x="18" y="160" width="420" height="8" rx="4" fill="#073" />
//         <rect x="18" y="160" width="0" height="8" rx="4" fill="#0fffa5">
//           <animate attributeName="width" values="0;420" dur="3.2s" repeatCount="1" fill="freeze" />
//         </rect>

//         <text x="18" y="200" fill="#7fe9c9" fontSize="12" fontFamily="monospace">
//           &gt; scope defined and saved to scope.json
//         </text>
//       </svg>
//     ),
//     text: 'We collaborate to define exact testing boundaries, identify critical systems and exclusions so testing is focused and compliant.',
//   },

//   {
//     id: 'info',
//     title: 'Information Gathering',
//     titleShort: 'Recon & Discovery',
//     svg: (
//       <svg viewBox="0 0 600 360" className="w-full h-full" preserveAspectRatio="none" role="img" aria-label="Recon terminal">
//         <rect width="600" height="360" rx="10" fill="#0b0b0b" stroke="#2f2f2f" strokeWidth="2" />
//         <rect x="0" y="0" width="600" height="32" fill="#1f1f1f" rx="10" />
//         <circle cx="18" cy="16" r="6" fill="#f25f58" />
//         <circle cx="40" cy="16" r="6" fill="#f2c94c" />
//         <circle cx="62" cy="16" r="6" fill="#4cd964" />

//         <text x="18" y="64" fill="#0fffa5" fontSize="16" fontFamily="monospace">
//           root@kali:~# nmap -sC -sV target.com
//         </text>
//         <rect x="420" y="52" width="10" height="18" fill="#0fffa5">
//           <animate attributeName="opacity" values="1;0;1" dur="0.9s" repeatCount="indefinite" />
//         </rect>

//         {/* Simulated scan output */}
//         <text x="18" y="96" fill="#aaf3d8" fontSize="12" fontFamily="monospace">
//           Starting Nmap 7.91 ( https://nmap.org ) at 2025-09-07 05:00
//         </text>
//         <text x="18" y="116" fill="#aaf3d8" fontSize="12" fontFamily="monospace">
//           Nmap scan report for target.com (198.51.100.10)
//         </text>
//         <text x="18" y="136" fill="#aaf3d8" fontSize="12" fontFamily="monospace">
//           PORT     STATE SERVICE     VERSION
//         </text>
//         <text x="18" y="156" fill="#aaf3d8" fontSize="12" fontFamily="monospace">
//           80/tcp   open  http        Apache httpd 2.4.6
//         </text>
//         <text x="18" y="176" fill="#aaf3d8" fontSize="12" fontFamily="monospace">
//           443/tcp  open  https       nginx 1.18
//         </text>

//         {/* scanning sweep line */}
//         <rect x="18" y="200" width="560" height="2" fill="#0fffa5">
//           <animate attributeName="x" values="18;18;18" dur="4s" repeatCount="indefinite" />
//         </rect>
//       </svg>
//     ),
//     text: 'We run reconnaissance (nmap, banner grabs, OSINT) to discover live hosts, services and versions to prioritize testing.',
//   },

//   {
//     id: 'enum',
//     title: 'Enumeration',
//     titleShort: 'Asset Enumeration',
//     svg: (
//       <svg viewBox="0 0 600 360" className="w-full h-full" preserveAspectRatio="none" role="img" aria-label="Enumeration terminal">
//         <rect width="600" height="360" rx="10" fill="#0b0b0b" stroke="#2f2f2f" strokeWidth="2" />
//         <rect x="0" y="0" width="600" height="32" fill="#1f1f1f" rx="10" />
//         <circle cx="18" cy="16" r="6" fill="#f25f58" />
//         <circle cx="40" cy="16" r="6" fill="#f2c94c" />
//         <circle cx="62" cy="16" r="6" fill="#4cd964" />

//         <text x="18" y="64" fill="#0fffa5" fontSize="16" fontFamily="monospace">
//           root@kali:~# gobuster dir -u https://target.com -w /usr/share/wordlists/common.txt
//         </text>
//         <rect x="540" y="52" width="10" height="18" fill="#0fffa5">
//           <animate attributeName="opacity" values="1;0;1" dur="1s" repeatCount="indefinite" />
//         </rect>

//         {/* Enumerator output lines */}
//         <text x="18" y="96" fill="#aaf3d8" fontSize="12" fontFamily="monospace">
//           /admin (Status: 301)
//         </text>
//         <text x="18" y="116" fill="#aaf3d8" fontSize="12" fontFamily="monospace">
//           /uploads (Status: 200)
//         </text>
//         <text x="18" y="136" fill="#aaf3d8" fontSize="12" fontFamily="monospace">
//           /api/v1 (Status: 200)
//         </text>
//         <text x="18" y="156" fill="#aaf3d8" fontSize="12" fontFamily="monospace">
//           [+] Discovered 3 directories
//         </text>
//       </svg>
//     ),
//     text: 'We enumerate directories, endpoints and resources to build a full asset map and locate sensitive paths for testing.',
//   },

//   {
//     id: 'attack',
//     title: 'Attack and Penetration',
//     titleShort: 'Exploitation & Validation',
//     svg: (
//       <svg viewBox="0 0 600 360" className="w-full h-full" preserveAspectRatio="none" role="img" aria-label="Exploitation terminal">
//         <rect width="600" height="360" rx="10" fill="#0b0b0b" stroke="#2f2f2f" strokeWidth="2" />
//         <rect x="0" y="0" width="600" height="32" fill="#1f1f1f" rx="10" />
//         <circle cx="18" cy="16" r="6" fill="#f25f58" />
//         <circle cx="40" cy="16" r="6" fill="#f2c94c" />
//         <circle cx="62" cy="16" r="6" fill="#4cd964" />

//         <text x="18" y="64" fill="#0fffa5" fontSize="16" fontFamily="monospace">
//           root@kali:~# python3 exploit.py --target target.com --cmd 'id'
//         </text>
//         <rect x="520" y="52" width="10" height="18" fill="#0fffa5">
//           <animate attributeName="opacity" values="1;0;1" dur="0.9s" repeatCount="indefinite" />
//         </rect>

//         {/* exploitation output */}
//         <text x="18" y="96" fill="#aaf3d8" fontSize="12" fontFamily="monospace">
//           [*] Sending payload...
//         </text>
//         <text x="18" y="116" fill="#aaf3d8" fontSize="12" fontFamily="monospace">
//           [*] Payload executed: uid=0(root) gid=0(root)
//         </text>
//         <text x="18" y="136" fill="#ff9b9b" fontSize="12" fontFamily="monospace">
//           [+] Exploit successful (controlled test)
//         </text>
//         {/* pulse on compromised node (visual) */}
//         <circle cx="520" cy="120" r="10" fill="#ff6b6b">
//           <animate attributeName="r" values="8;14;8" dur="1.2s" repeatCount="indefinite" />
//           <animate attributeName="opacity" values="1;0.4;1" dur="1.2s" repeatCount="indefinite" />
//         </circle>
//       </svg>
//     ),
//     text: 'We perform controlled exploitation to validate vulnerabilities and measure potential impact while preserving system stability.',
//   },

//   {
//     id: 'report',
//     title: 'Reporting',
//     titleShort: 'Findings & Guidance',
//     svg: (
//       <svg viewBox="0 0 600 360" className="w-full h-full" preserveAspectRatio="none" role="img" aria-label="Reporting terminal">
//         <rect width="600" height="360" rx="10" fill="#0b0b0b" stroke="#2f2f2f" strokeWidth="2" />
//         <rect x="0" y="0" width="600" height="32" fill="#1f1f1f" rx="10" />
//         <circle cx="18" cy="16" r="6" fill="#f25f58" />
//         <circle cx="40" cy="16" r="6" fill="#f2c94c" />
//         <circle cx="62" cy="16" r="6" fill="#4cd964" />

//         <text x="18" y="64" fill="#0fffa5" fontSize="16" fontFamily="monospace">
//           root@kali:~# cat findings/report.txt
//         </text>
//         <rect x="380" y="50" width="10" height="18" fill="#0fffa5">
//           <animate attributeName="opacity" values="1;0;1" dur="1s" repeatCount="indefinite" />
//         </rect>

//         <text x="18" y="96" fill="#aaf3d8" fontSize="12" fontFamily="monospace">
//           [HIGH] SQL Injection in /search — CVSS: 9.0
//         </text>
//         <text x="18" y="116" fill="#aaf3d8" fontSize="12" fontFamily="monospace">
//           [MED] Reflected XSS in /profile
//         </text>
//         <text x="18" y="136" fill="#aaf3d8" fontSize="12" fontFamily="monospace">
//           [LOW] Information disclosure in headers
//         </text>

//         <rect x="18" y="160" width="260" height="8" rx="4" fill="#0fffa5">
//           <animate attributeName="width" values="0;260;0" dur="4s" repeatCount="indefinite" />
//         </rect>

//         <text x="18" y="200" fill="#7fe9c9" fontSize="12" fontFamily="monospace">
//           &gt; report exported to findings/report.pdf
//         </text>
//       </svg>
//     ),
//     text: 'We compile prioritized findings with reproduction steps and remediation guidance so your team can triage and fix issues effectively.',
//   },

//   {
//     id: 'remed',
//     title: 'Remediation Testing',
//     titleShort: 'Re-test & Verify',
//     svg: (
//       <svg viewBox="0 0 600 360" className="w-full h-full" preserveAspectRatio="none" role="img" aria-label="Re-test terminal">
//         <rect width="600" height="360" rx="10" fill="#0b0b0b" stroke="#2f2f2f" strokeWidth="2" />
//         <rect x="0" y="0" width="600" height="32" fill="#1f1f1f" rx="10" />
//         <circle cx="18" cy="16" r="6" fill="#f25f58" />
//         <circle cx="40" cy="16" r="6" fill="#f2c94c" />
//         <circle cx="62" cy="16" r="6" fill="#4cd964" />

//         <text x="18" y="64" fill="#0fffa5" fontSize="16" fontFamily="monospace">
//           root@kali:~# ./retest.sh --target target.com
//         </text>
//         <rect x="470" y="52" width="10" height="18" fill="#0fffa5">
//           <animate attributeName="opacity" values="1;0;1" dur="1s" repeatCount="indefinite" />
//         </rect>

//         <text x="18" y="96" fill="#aaf3d8" fontSize="12" fontFamily="monospace">
//           [*] Re-testing /search (SQLi) ...
//         </text>
//         <text x="18" y="116" fill="#7fe9c9" fontSize="12" fontFamily="monospace">
//           [OK] SQL injection fixed
//         </text>
//         <text x="18" y="136" fill="#7fe9c9" fontSize="12" fontFamily="monospace">
//           [OK] XSS fixed
//         </text>

//         {/* check animation */}
//         <g transform="translate(420,180)">
//           <circle cx="40" cy="40" r="30" stroke="#0fffa5" strokeWidth="3" fill="none" />
//           <path d="M30 45 L38 53 L54 35" stroke="#0fffa5" strokeWidth="4" fill="none" strokeLinecap="round" strokeLinejoin="round">
//             <animate attributeName="stroke-dasharray" values="0 80;50 80;0 80" dur="2s" repeatCount="indefinite" />
//           </path>
//         </g>

//         <text x="18" y="220" fill="#7fe9c9" fontSize="12" fontFamily="monospace">
//           &gt; re-test complete — all verified
//         </text>
//       </svg>
//     ),
//     text: 'After fixes are applied, we re-test affected areas and confirm remediation, ensuring no regressions were introduced.',
//   },
// ];

// // export default function ProcessCarousel(): JSX.Element {
// //   const [index, setIndex] = useState<number>(0);

// //   const goTo = (i: number) => {
// //     if (i < 0) i = 0;
// //     if (i > steps.length - 1) i = steps.length - 1;
// //     setIndex(i);
// //   };

// //   const next = () => setIndex((s) => Math.min(s + 1, steps.length - 1));
// //   const prev = () => setIndex((s) => Math.max(s - 1, 0));

// //   return (
// //     <div className="py-16 bg-white">
// //       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
// //         <div className="text-center mb-12">
// //           <p className="text-green-600 font-semibold mb-2 tracking-wider uppercase">PROCESS</p>
// //           <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Web App Penetration Testing Process</h2>
// //           <p className="text-lg text-gray-600 max-w-3xl mx-auto">
// //             At VAPTlabs, we protect your web application using a focused, industry-standard penetration test lifecycle that discovers, validates, and helps remediate risks.
// //           </p>
// //         </div>

// //         {/* Steps pills (single-line, tight) */}
// //         <div className="mb-12">
// //           <div className="flex-nowrap flex items-center justify-center gap-2 mb-8 overflow-x-auto whitespace-nowrap">
// //             {steps.map((s, i) => (
// //               <React.Fragment key={s.id}>
// //                 <button
// //                   onClick={() => goTo(i)}
// //                   aria-current={index === i}
// //                   className={`px-3 py-2 font-semibold text-sm rounded-full transition-all whitespace-nowrap ${
// //                     index === i
// //                       ? 'text-white bg-gradient-to-r from-green-400 to-green-700 shadow-lg'
// //                       : 'text-gray-600 border-2 border-gray-300 bg-white'
// //                   }`}
// //                 >
// //                   {s.titleShort}
// //                 </button>
// //                 {i !== steps.length - 1 && <ChevronRightIcon className="w-5 h-5 text-gray-300 inline-block mx-1" />}
// //               </React.Fragment>
// //             ))}
// //           </div>
// //         </div>

// //         {/* Content */}
// //         <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
// //           <div className="grid lg:grid-cols-2 gap-12 items-center">
// //             <div className="rounded-lg p-2 bg-gradient-to-br from-green-400 to-green-700">
// //               <div className="h-64 rounded-lg overflow-hidden flex items-center justify-center">
// //                 <AnimatePresence mode="wait">
// //                   <motion.div
// //                     key={steps[index].id + '-svg'}
// //                     initial={{ x: 300, opacity: 0 }}
// //                     animate={{ x: 0, opacity: 1 }}
// //                     exit={{ x: -300, opacity: 0 }}
// //                     transition={{ type: 'spring', stiffness: 120, damping: 20 }}
// //                     className="w-full h-full"
// //                   >
// //                     {steps[index].svg}
// //                   </motion.div>
// //                 </AnimatePresence>
// //               </div>
// //             </div>

// //             <div>
// //               <AnimatePresence mode="wait" initial={false}>
// //                 <motion.div
// //                   key={steps[index].id + '-text'}
// //                   initial={{ x: 300, opacity: 0 }}
// //                   animate={{ x: 0, opacity: 1 }}
// //                   exit={{ x: -300, opacity: 0 }}
// //                   transition={{ type: 'spring', stiffness: 120, damping: 20 }}
// //                 >
// //                   <h3 className="text-2xl font-bold text-green-600 mb-6">{steps[index].title}</h3>
// //                   <p className="text-lg text-gray-700 leading-relaxed whitespace-pre-line">{steps[index].text}</p>

// //                   <div className="flex items-center justify-between mt-8">
// //                     <button onClick={prev} disabled={index === 0} className="p-3 border-2 border-gray-300 rounded-full hover:bg-gray-50 disabled:opacity-40">
// //                       <ChevronLeftIcon className="w-6 h-6 text-gray-600" />
// //                     </button>

// //                     <div className="text-sm text-gray-500">{index + 1} / {steps.length}</div>

// //                     <button onClick={next} disabled={index === steps.length - 1} className="p-3 border-2 border-gray-300 rounded-full hover:bg-gray-50 disabled:opacity-40">
// //                       <ChevronRightIcon className="w-6 h-6 text-gray-600" />
// //                     </button>
// //                   </div>
// //                 </motion.div>
// //               </AnimatePresence>
// //             </div>
// //           </div>
// //         </div>
// //       </div>
// //     </div>
// //   );
// // }

// export default function ProcessCarousel({
//   title,
//   subtitle,
// }: ProcessCarouselProps): JSX.Element {
//   const [index, setIndex] = useState<number>(0);

//   const goTo = (i: number) => {
//     if (i < 0) i = 0;
//     if (i > steps.length - 1) i = steps.length - 1;
//     setIndex(i);
//   };

//   const next = () => setIndex((s) => Math.min(s + 1, steps.length - 1));
//   const prev = () => setIndex((s) => Math.max(s - 1, 0));

//   return (
//     <div className="py-16 bg-white">
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//         {/* Header */}
//         <div className="text-center mb-12">
//           <p className="text-green-600 font-semibold mb-2 tracking-wider uppercase">
//             PROCESS
//           </p>
//           <h2 className="text-3xl font-bold text-gray-900 mb-6">
//             {title || "Our Web App Penetration Testing Process"}
//           </h2>
//           <p className="text-lg text-gray-600 max-w-3xl mx-auto">
//             {subtitle ||
//               "At VAPTlabs, we protect your web application using a focused, industry-standard penetration test lifecycle that discovers, validates, and helps remediate risks."}
//           </p>
//         </div>

//         {/* Steps pills */}
//         <div className="mb-12">
//           <div className="flex-nowrap flex items-center justify-center gap-2 mb-8 overflow-x-auto whitespace-nowrap">
//             {steps.map((s, i) => (
//               <React.Fragment key={s.id}>
//                 <button
//                   onClick={() => goTo(i)}
//                   aria-current={index === i}
//                   className={`px-3 py-2 font-semibold text-sm rounded-full transition-all whitespace-nowrap ${
//                     index === i
//                       ? "text-white bg-gradient-to-r from-green-400 to-green-700 shadow-lg"
//                       : "text-gray-600 border-2 border-gray-300 bg-white"
//                   }`}
//                 >
//                   {s.titleShort}
//                 </button>
//                 {i !== steps.length - 1 && (
//                   <ChevronRightIcon className="w-5 h-5 text-gray-300 inline-block mx-1" />
//                 )}
//               </React.Fragment>
//             ))}
//           </div>
//         </div>

//         {/* Content */}
//         <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
//           <div className="grid lg:grid-cols-2 gap-12 items-center">
//             {/* Left SVG */}
//             <div className="rounded-lg p-2 bg-gradient-to-br from-green-400 to-green-700">
//               <div className="h-64 rounded-lg overflow-hidden flex items-center justify-center">
//                 <AnimatePresence mode="wait">
//                   <motion.div
//                     key={steps[index].id + "-svg"}
//                     initial={{ x: 300, opacity: 0 }}
//                     animate={{ x: 0, opacity: 1 }}
//                     exit={{ x: -300, opacity: 0 }}
//                     transition={{ type: "spring", stiffness: 120, damping: 20 }}
//                     className="w-full h-full"
//                   >
//                     {steps[index].svg}
//                   </motion.div>
//                 </AnimatePresence>
//               </div>
//             </div>

//             {/* Right Text */}
//             <div>
//               <AnimatePresence mode="wait" initial={false}>
//                 <motion.div
//                   key={steps[index].id + "-text"}
//                   initial={{ x: 300, opacity: 0 }}
//                   animate={{ x: 0, opacity: 1 }}
//                   exit={{ x: -300, opacity: 0 }}
//                   transition={{ type: "spring", stiffness: 120, damping: 20 }}
//                 >
//                   <h3 className="text-2xl font-bold text-green-600 mb-6">
//                     {steps[index].title}
//                   </h3>
//                   <p className="text-lg text-gray-700 leading-relaxed whitespace-pre-line">
//                     {steps[index].text}
//                   </p>

//                   <div className="flex items-center justify-between mt-8">
//                     <button
//                       onClick={prev}
//                       disabled={index === 0}
//                       className="p-3 border-2 border-gray-300 rounded-full hover:bg-gray-50 disabled:opacity-40"
//                     >
//                       <ChevronLeftIcon className="w-6 h-6 text-gray-600" />
//                     </button>

//                     <div className="text-sm text-gray-500">
//                       {index + 1} / {steps.length}
//                     </div>

//                     <button
//                       onClick={next}
//                       disabled={index === steps.length - 1}
//                       className="p-3 border-2 border-gray-300 rounded-full hover:bg-gray-50 disabled:opacity-40"
//                     >
//                       <ChevronRightIcon className="w-6 h-6 text-gray-600" />
//                     </button>
//                   </div>
//                 </motion.div>
//               </AnimatePresence>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }


// // src/components/ProcessCarousel.tsx
// import React, { useState } from "react";
// import { motion, AnimatePresence } from "framer-motion";
// import { ChevronRightIcon, ChevronLeftIcon } from "@heroicons/react/24/outline";

// type Step = {
//   id: string;
//   title: string;
//   titleShort: string;
//   svg: React.ReactNode;
//   text: string;
// };

// type ProcessCarouselProps = {
//   title?: string;
//   subtitle?: string;
// };

// const steps: Step[] = [
//   {
//     id: "define",
//     title: "Define Scope",
//     titleShort: "Define Scope",
//     svg: (
//       <svg viewBox="0 0 600 360" className="w-full h-full" preserveAspectRatio="none" role="img" aria-label="Define Scope terminal">
//         <rect width="600" height="360" rx="10" ry="10" fill="#0b0b0b" stroke="#2f2f2f" strokeWidth="2" />
//         <rect x="0" y="0" width="600" height="32" fill="#1f1f1f" rx="10" />
//         <circle cx="18" cy="16" r="6" fill="#f25f58" />
//         <circle cx="40" cy="16" r="6" fill="#f2c94c" />
//         <circle cx="62" cy="16" r="6" fill="#4cd964" />

//         <text x="18" y="64" fill="#0fffa5" fontSize="16" fontFamily="monospace">
//           root@kali:~# echo "Defining scope for target.com"
//         </text>
//         <rect x="540" y="50" width="10" height="18" fill="#0fffa5">
//           <animate attributeName="opacity" values="1;0;1" dur="1s" repeatCount="indefinite" />
//         </rect>

//         <text x="18" y="96" fill="#aaf3d8" fontSize="13" fontFamily="monospace">
//           [+] target: target.com
//         </text>
//         <text x="18" y="116" fill="#aaf3d8" fontSize="13" fontFamily="monospace">
//           [+] scope: web, api, auth
//         </text>
//         <text x="18" y="136" fill="#aaf3d8" fontSize="13" fontFamily="monospace">
//           [+] exclusions: /static, /assets
//         </text>

//         <rect x="18" y="160" width="420" height="8" rx="4" fill="#073" />
//         <rect x="18" y="160" width="0" height="8" rx="4" fill="#0fffa5">
//           <animate attributeName="width" values="0;420" dur="3.2s" repeatCount="1" fill="freeze" />
//         </rect>

//         <text x="18" y="200" fill="#7fe9c9" fontSize="12" fontFamily="monospace">
//           &gt; scope defined and saved to scope.json
//         </text>
//       </svg>
//     ),
//     text: "We collaborate to define exact testing boundaries, identify critical systems and exclusions so testing is focused and compliant.",
//   },

//   {
//     id: "info",
//     title: "Information Gathering",
//     titleShort: "Recon & Discovery",
//     svg: (
//       <svg viewBox="0 0 600 360" className="w-full h-full" preserveAspectRatio="none" role="img" aria-label="Recon terminal">
//         <rect width="600" height="360" rx="10" fill="#0b0b0b" stroke="#2f2f2f" strokeWidth="2" />
//         <rect x="0" y="0" width="600" height="32" fill="#1f1f1f" rx="10" />
//         <circle cx="18" cy="16" r="6" fill="#f25f58" />
//         <circle cx="40" cy="16" r="6" fill="#f2c94c" />
//         <circle cx="62" cy="16" r="6" fill="#4cd964" />

//         <text x="18" y="64" fill="#0fffa5" fontSize="16" fontFamily="monospace">
//           root@kali:~# nmap -sC -sV target.com
//         </text>
//         <rect x="420" y="52" width="10" height="18" fill="#0fffa5">
//           <animate attributeName="opacity" values="1;0;1" dur="0.9s" repeatCount="indefinite" />
//         </rect>

//         <text x="18" y="96" fill="#aaf3d8" fontSize="12" fontFamily="monospace">
//           Starting Nmap 7.91 ( https://nmap.org ) at 2025-09-07 05:00
//         </text>
//         <text x="18" y="116" fill="#aaf3d8" fontSize="12" fontFamily="monospace">
//           Nmap scan report for target.com (198.51.100.10)
//         </text>
//         <text x="18" y="136" fill="#aaf3d8" fontSize="12" fontFamily="monospace">
//           PORT     STATE SERVICE     VERSION
//         </text>
//         <text x="18" y="156" fill="#aaf3d8" fontSize="12" fontFamily="monospace">
//           80/tcp   open  http        Apache httpd 2.4.6
//         </text>
//         <text x="18" y="176" fill="#aaf3d8" fontSize="12" fontFamily="monospace">
//           443/tcp  open  https       nginx 1.18
//         </text>

//         <rect x="18" y="200" width="560" height="2" fill="#0fffa5">
//           <animate attributeName="x" values="18;18;18" dur="4s" repeatCount="indefinite" />
//         </rect>
//       </svg>
//     ),
//     text: "We run reconnaissance (nmap, banner grabs, OSINT) to discover live hosts, services and versions to prioritize testing.",
//   },

//   {
//     id: "enum",
//     title: "Enumeration",
//     titleShort: "Asset Enumeration",
//     svg: (
//       <svg viewBox="0 0 600 360" className="w-full h-full" preserveAspectRatio="none" role="img" aria-label="Enumeration terminal">
//         <rect width="600" height="360" rx="10" fill="#0b0b0b" stroke="#2f2f2f" strokeWidth="2" />
//         <rect x="0" y="0" width="600" height="32" fill="#1f1f1f" rx="10" />
//         <circle cx="18" cy="16" r="6" fill="#f25f58" />
//         <circle cx="40" cy="16" r="6" fill="#f2c94c" />
//         <circle cx="62" cy="16" r="6" fill="#4cd964" />

//         <text x="18" y="64" fill="#0fffa5" fontSize="16" fontFamily="monospace">
//           root@kali:~# gobuster dir -u https://target.com -w /usr/share/wordlists/common.txt
//         </text>
//         <rect x="540" y="52" width="10" height="18" fill="#0fffa5">
//           <animate attributeName="opacity" values="1;0;1" dur="1s" repeatCount="indefinite" />
//         </rect>

//         <text x="18" y="96" fill="#aaf3d8" fontSize="12" fontFamily="monospace">
//           /admin (Status: 301)
//         </text>
//         <text x="18" y="116" fill="#aaf3d8" fontSize="12" fontFamily="monospace">
//           /uploads (Status: 200)
//         </text>
//         <text x="18" y="136" fill="#aaf3d8" fontSize="12" fontFamily="monospace">
//           /api/v1 (Status: 200)
//         </text>
//         <text x="18" y="156" fill="#aaf3d8" fontSize="12" fontFamily="monospace">
//           [+] Discovered 3 directories
//         </text>
//       </svg>
//     ),
//     text: "We enumerate directories, endpoints and resources to build a full asset map and locate sensitive paths for testing.",
//   },

//   {
//     id: "attack",
//     title: "Attack and Penetration",
//     titleShort: "Exploitation & Validation",
//     svg: (
//       <svg viewBox="0 0 600 360" className="w-full h-full" preserveAspectRatio="none" role="img" aria-label="Exploitation terminal">
//         <rect width="600" height="360" rx="10" fill="#0b0b0b" stroke="#2f2f2f" strokeWidth="2" />
//         <rect x="0" y="0" width="600" height="32" fill="#1f1f1f" rx="10" />
//         <circle cx="18" cy="16" r="6" fill="#f25f58" />
//         <circle cx="40" cy="16" r="6" fill="#f2c94c" />
//         <circle cx="62" cy="16" r="6" fill="#4cd964" />

//         <text x="18" y="64" fill="#0fffa5" fontSize="16" fontFamily="monospace">
//           root@kali:~# python3 exploit.py --target target.com --cmd 'id'
//         </text>
//         <rect x="520" y="52" width="10" height="18" fill="#0fffa5">
//           <animate attributeName="opacity" values="1;0;1" dur="0.9s" repeatCount="indefinite" />
//         </rect>

//         <text x="18" y="96" fill="#aaf3d8" fontSize="12" fontFamily="monospace">
//           [*] Sending payload...
//         </text>
//         <text x="18" y="116" fill="#aaf3d8" fontSize="12" fontFamily="monospace">
//           [*] Payload executed: uid=0(root) gid=0(root)
//         </text>
//         <text x="18" y="136" fill="#ff9b9b" fontSize="12" fontFamily="monospace">
//           [+] Exploit successful (controlled test)
//         </text>
//         <circle cx="520" cy="120" r="10" fill="#ff6b6b">
//           <animate attributeName="r" values="8;14;8" dur="1.2s" repeatCount="indefinite" />
//           <animate attributeName="opacity" values="1;0.4;1" dur="1.2s" repeatCount="indefinite" />
//         </circle>
//       </svg>
//     ),
//     text: "We perform controlled exploitation to validate vulnerabilities and measure potential impact while preserving system stability.",
//   },

//   {
//     id: "report",
//     title: "Reporting",
//     titleShort: "Findings & Guidance",
//     svg: (
//       <svg viewBox="0 0 600 360" className="w-full h-full" preserveAspectRatio="none" role="img" aria-label="Reporting terminal">
//         <rect width="600" height="360" rx="10" fill="#0b0b0b" stroke="#2f2f2f" strokeWidth="2" />
//         <rect x="0" y="0" width="600" height="32" fill="#1f1f1f" rx="10" />
//         <circle cx="18" cy="16" r="6" fill="#f25f58" />
//         <circle cx="40" cy="16" r="6" fill="#f2c94c" />
//         <circle cx="62" cy="16" r="6" fill="#4cd964" />

//         <text x="18" y="64" fill="#0fffa5" fontSize="16" fontFamily="monospace">
//           root@kali:~# cat findings/report.txt
//         </text>
//         <rect x="380" y="50" width="10" height="18" fill="#0fffa5">
//           <animate attributeName="opacity" values="1;0;1" dur="1s" repeatCount="indefinite" />
//         </rect>

//         <text x="18" y="96" fill="#aaf3d8" fontSize="12" fontFamily="monospace">
//           [HIGH] SQL Injection in /search — CVSS: 9.0
//         </text>
//         <text x="18" y="116" fill="#aaf3d8" fontSize="12" fontFamily="monospace">
//           [MED] Reflected XSS in /profile
//         </text>
//         <text x="18" y="136" fill="#aaf3d8" fontSize="12" fontFamily="monospace">
//           [LOW] Information disclosure in headers
//         </text>

//         <rect x="18" y="160" width="260" height="8" rx="4" fill="#0fffa5">
//           <animate attributeName="width" values="0;260;0" dur="4s" repeatCount="indefinite" />
//         </rect>

//         <text x="18" y="200" fill="#7fe9c9" fontSize="12" fontFamily="monospace">
//           &gt; report exported to findings/report.pdf
//         </text>
//       </svg>
//     ),
//     text: "We compile prioritized findings with reproduction steps and remediation guidance so your team can triage and fix issues effectively.",
//   },

//   {
//     id: "remed",
//     title: "Remediation Testing",
//     titleShort: "Re-test & Verify",
//     svg: (
//       <svg viewBox="0 0 600 360" className="w-full h-full" preserveAspectRatio="none" role="img" aria-label="Re-test terminal">
//         <rect width="600" height="360" rx="10" fill="#0b0b0b" stroke="#2f2f2f" strokeWidth="2" />
//         <rect x="0" y="0" width="600" height="32" fill="#1f1f1f" rx="10" />
//         <circle cx="18" cy="16" r="6" fill="#f25f58" />
//         <circle cx="40" cy="16" r="6" fill="#f2c94c" />
//         <circle cx="62" cy="16" r="6" fill="#4cd964" />

//         <text x="18" y="64" fill="#0fffa5" fontSize="16" fontFamily="monospace">
//           root@kali:~# ./retest.sh --target target.com
//         </text>
//         <rect x="470" y="52" width="10" height="18" fill="#0fffa5">
//           <animate attributeName="opacity" values="1;0;1" dur="1s" repeatCount="indefinite" />
//         </rect>

//         <text x="18" y="96" fill="#aaf3d8" fontSize="12" fontFamily="monospace">
//           [*] Re-testing /search (SQLi) ...
//         </text>
//         <text x="18" y="116" fill="#7fe9c9" fontSize="12" fontFamily="monospace">
//           [OK] SQL injection fixed
//         </text>
//         <text x="18" y="136" fill="#7fe9c9" fontSize="12" fontFamily="monospace">
//           [OK] XSS fixed
//         </text>

//         <g transform="translate(420,180)">
//           <circle cx="40" cy="40" r="30" stroke="#0fffa5" strokeWidth="3" fill="none" />
//           <path d="M30 45 L38 53 L54 35" stroke="#0fffa5" strokeWidth="4" fill="none" strokeLinecap="round" strokeLinejoin="round">
//             <animate attributeName="stroke-dasharray" values="0 80;50 80;0 80" dur="2s" repeatCount="indefinite" />
//           </path>
//         </g>

//         <text x="18" y="220" fill="#7fe9c9" fontSize="12" fontFamily="monospace">
//           &gt; re-test complete — all verified
//         </text>
//       </svg>
//     ),
//     text: "After fixes are applied, we re-test affected areas and confirm remediation, ensuring no regressions were introduced.",
//   },
// ];

// export default function ProcessCarousel({ title, subtitle }: ProcessCarouselProps): JSX.Element {
//   const [index, setIndex] = useState<number>(0);

//   const goTo = (i: number) => {
//     if (i < 0) i = 0;
//     if (i > steps.length - 1) i = steps.length - 1;
//     setIndex(i);
//   };

//   const next = () => setIndex((s) => Math.min(s + 1, steps.length - 1));
//   const prev = () => setIndex((s) => Math.max(s - 1, 0));

//   return (
//     <div className="py-16 bg-white">
//       <style>{`
//         .pill-active-red {
//           background: linear-gradient(90deg, rgb(217,47,97), rgb(143,15,56));
//           box-shadow: 0 8px 22px rgba(217,47,97,0.14), 0 2px 6px rgba(0,0,0,0.06);
//         }
//         .left-card-red {
//           background: linear-gradient(180deg, rgb(217,47,97) 0%, rgb(143,15,56) 100%);
//         }
//         .text-brand-red {
//           color: rgb(217,47,97);
//         }
//       `}</style>

//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//         {/* Header */}
//         <div className="text-center mb-12">
//           <p className="text-brand-red font-semibold mb-2 tracking-wider uppercase">PROCESS</p>
//           <h2 className="text-3xl font-bold text-gray-900 mb-6">{title || "Our Web App Penetration Testing Process"}</h2>
//           <p className="text-lg text-gray-600 max-w-3xl mx-auto">
//             {subtitle || "At VAPTlabs, we protect your web application using a focused, industry-standard penetration test lifecycle that discovers, validates, and helps remediate risks."}
//           </p>
//         </div>

//         {/* Steps pills */}
//         <div className="mb-12">
//           <div className="flex-nowrap flex items-center justify-center gap-2 mb-8 overflow-x-auto whitespace-nowrap">
//             {steps.map((s, i) => (
//               <React.Fragment key={s.id}>
//                 <button
//                   onClick={() => goTo(i)}
//                   aria-current={index === i}
//                   className={`px-3 py-2 font-semibold text-sm rounded-full transition-all whitespace-nowrap ${
//                     index === i ? "pill-active-red text-white" : "text-gray-600 border-2 border-gray-300 bg-white"
//                   }`}
//                 >
//                   {s.titleShort}
//                 </button>
//                 {i !== steps.length - 1 && <ChevronRightIcon className="w-5 h-5 text-gray-300 inline-block mx-1" />}
//               </React.Fragment>
//             ))}
//           </div>
//         </div>

//         {/* Content */}
//         <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
//           <div className="grid lg:grid-cols-2 gap-12 items-center">
//             {/* Left SVG with red background */}
//             <div className="rounded-lg p-2 left-card-red">
//               <div className="h-64 rounded-lg overflow-hidden flex items-center justify-center">
//                 <AnimatePresence mode="wait">
//                   <motion.div
//                     key={steps[index].id + "-svg"}
//                     initial={{ x: 300, opacity: 0 }}
//                     animate={{ x: 0, opacity: 1 }}
//                     exit={{ x: -300, opacity: 0 }}
//                     transition={{ type: "spring", stiffness: 120, damping: 20 }}
//                     className="w-full h-full"
//                   >
//                     {steps[index].svg}
//                   </motion.div>
//                 </AnimatePresence>
//               </div>
//             </div>

//             {/* Right Text */}
//             <div>
//               <AnimatePresence mode="wait" initial={false}>
//                 <motion.div
//                   key={steps[index].id + "-text"}
//                   initial={{ x: 300, opacity: 0 }}
//                   animate={{ x: 0, opacity: 1 }}
//                   exit={{ x: -300, opacity: 0 }}
//                   transition={{ type: "spring", stiffness: 120, damping: 20 }}
//                 >
//                   <h3 className="text-2xl font-bold text-brand-red mb-6">{steps[index].title}</h3>
//                   <p className="text-lg text-gray-700 leading-relaxed whitespace-pre-line">{steps[index].text}</p>

//                   <div className="flex items-center justify-between mt-8">
//                     <button onClick={prev} disabled={index === 0} className="p-3 border-2 border-gray-300 rounded-full hover:bg-gray-50 disabled:opacity-40">
//                       <ChevronLeftIcon className="w-6 h-6 text-gray-600" />
//                     </button>

//                     <div className="text-sm text-gray-500">{index + 1} / {steps.length}</div>

//                     <button onClick={next} disabled={index === steps.length - 1} className="p-3 border-2 border-gray-300 rounded-full hover:bg-gray-50 disabled:opacity-40">
//                       <ChevronRightIcon className="w-6 h-6 text-gray-600" />
//                     </button>
//                   </div>
//                 </motion.div>
//               </AnimatePresence>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }


// src/components/ProcessCarousel.tsx
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronRightIcon, ChevronLeftIcon } from "@heroicons/react/24/outline";

type Step = {
  id: string;
  title: string;
  titleShort: string;
  svg: React.ReactNode;
  text: string;
};

type ProcessCarouselProps = {
  title?: string;
  subtitle?: string;
};

const steps: Step[] = [
  {
    id: "define",
    title: "Define Scope",
    titleShort: "Define Scope",
    svg: (
      <svg
        viewBox="0 0 600 360"
        className="w-full h-full"
        preserveAspectRatio="none"
        role="img"
        aria-label="Define Scope terminal"
      >
        <rect
          width="600"
          height="360"
          rx="10"
          ry="10"
          fill="#0b0b0b"
          stroke="#2f2f2f"
          strokeWidth="2"
        />
        <rect x="0" y="0" width="600" height="32" fill="#1f1f1f" rx="10" />
        <circle cx="18" cy="16" r="6" fill="#f25f58" />
        <circle cx="40" cy="16" r="6" fill="#f2c94c" />
        <circle cx="62" cy="16" r="6" fill="#4cd964" />

        {/* red-gradient typing */}
        <text
          x="18"
          y="64"
          className="terminal-gradient"
          fontSize="16"
          fontFamily="monospace"
        >
          root@kali:~# echo "Defining scope for target.com"
        </text>
        <rect x="540" y="50" width="10" height="18" fill="url(#redGradient)">
          <animate
            attributeName="opacity"
            values="1;0;1"
            dur="1s"
            repeatCount="indefinite"
          />
        </rect>

        {/* Define gradient for SVG text */}
        <defs>
          <linearGradient id="redGradient" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="rgb(217,47,97)" />
            <stop offset="100%" stopColor="rgb(143,15,56)" />
          </linearGradient>
        </defs>
      </svg>
    ),
    text: "We collaborate to define exact testing boundaries, identify critical systems and exclusions so testing is focused and compliant.",
  },
  {
    id: "info",
    title: "Information Gathering",
    titleShort: "Recon & Discovery",
    svg: (
      <svg viewBox="0 0 600 360" className="w-full h-full" preserveAspectRatio="none" role="img" aria-label="Recon terminal">
        <defs>
          <linearGradient id="redGradient" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="rgb(217,47,97)" />
            <stop offset="100%" stopColor="rgb(143,15,56)" />
          </linearGradient>
        </defs>

        <rect width="600" height="360" rx="10" fill="#0b0b0b" stroke="#2f2f2f" strokeWidth="2" />
        <rect x="0" y="0" width="600" height="32" fill="#1f1f1f" rx="10" />
        <circle cx="18" cy="16" r="6" fill="#f25f58" />
        <circle cx="40" cy="16" r="6" fill="#f2c94c" />
        <circle cx="62" cy="16" r="6" fill="#4cd964" />

        <text x="18" y="64" fill="url(#redGradient)" fontSize="16" fontFamily="monospace">
          root@kali:~# nmap -sC -sV target.com
        </text>

        <rect x="420" y="52" width="10" height="18" fill="url(#redGradient)">
          <animate attributeName="opacity" values="1;0;1" dur="0.9s" repeatCount="indefinite" />
        </rect>

        <text x="18" y="96" fill="url(#redGradient)" fontSize="12" fontFamily="monospace">
          Starting Nmap 7.91 ( https://nmap.org ) at 2025-09-07 05:00
        </text>
        <text x="18" y="116" fill="url(#redGradient)" fontSize="12" fontFamily="monospace">
          Nmap scan report for target.com (198.51.100.10)
        </text>
        <text x="18" y="136" fill="url(#redGradient)" fontSize="12" fontFamily="monospace">
          PORT     STATE SERVICE     VERSION
        </text>
        <text x="18" y="156" fill="url(#redGradient)" fontSize="12" fontFamily="monospace">
          80/tcp   open  http        Apache httpd 2.4.6
        </text>
        <text x="18" y="176" fill="url(#redGradient)" fontSize="12" fontFamily="monospace">
          443/tcp  open  https       nginx 1.18
        </text>

        <rect x="18" y="200" width="560" height="2" fill="url(#redGradient)">
          <animate attributeName="x" values="18;18;18" dur="4s" repeatCount="indefinite" />
        </rect>
      </svg>
    ),
    text: "We run reconnaissance (nmap, banner grabs, OSINT) to discover live hosts, services and versions to prioritize testing.",
  },

  {
    id: "enum",
    title: "Enumeration",
    titleShort: "Asset Enumeration",
    svg: (
      <svg viewBox="0 0 600 360" className="w-full h-full" preserveAspectRatio="none" role="img" aria-label="Enumeration terminal">
        <defs>
          <linearGradient id="redGradient" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="rgb(217,47,97)" />
            <stop offset="100%" stopColor="rgb(143,15,56)" />
          </linearGradient>
        </defs>

        <rect width="600" height="360" rx="10" fill="#0b0b0b" stroke="#2f2f2f" strokeWidth="2" />
        <rect x="0" y="0" width="600" height="32" fill="#1f1f1f" rx="10" />
        <circle cx="18" cy="16" r="6" fill="#f25f58" />
        <circle cx="40" cy="16" r="6" fill="#f2c94c" />
        <circle cx="62" cy="16" r="6" fill="#4cd964" />

        <text x="18" y="64" fill="url(#redGradient)" fontSize="16" fontFamily="monospace">
          root@kali:~# gobuster dir -u https://target.com -w /usr/share/wordlists/common.txt
        </text>
        <rect x="540" y="52" width="10" height="18" fill="url(#redGradient)">
          <animate attributeName="opacity" values="1;0;1" dur="1s" repeatCount="indefinite" />
        </rect>

        <text x="18" y="96" fill="url(#redGradient)" fontSize="12" fontFamily="monospace">
          /admin (Status: 301)
        </text>
        <text x="18" y="116" fill="url(#redGradient)" fontSize="12" fontFamily="monospace">
          /uploads (Status: 200)
        </text>
        <text x="18" y="136" fill="url(#redGradient)" fontSize="12" fontFamily="monospace">
          /api/v1 (Status: 200)
        </text>
        <text x="18" y="156" fill="url(#redGradient)" fontSize="12" fontFamily="monospace">
          [+] Discovered 3 directories
        </text>
      </svg>
    ),
    text: "We enumerate directories, endpoints and resources to build a full asset map and locate sensitive paths for testing.",
  },

  {
    id: "attack",
    title: "Attack and Penetration",
    titleShort: "Exploitation & Validation",
    svg: (
      <svg viewBox="0 0 600 360" className="w-full h-full" preserveAspectRatio="none" role="img" aria-label="Exploitation terminal">
        <defs>
          <linearGradient id="redGradient" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="rgb(217,47,97)" />
            <stop offset="100%" stopColor="rgb(143,15,56)" />
          </linearGradient>
        </defs>

        <rect width="600" height="360" rx="10" fill="#0b0b0b" stroke="#2f2f2f" strokeWidth="2" />
        <rect x="0" y="0" width="600" height="32" fill="#1f1f1f" rx="10" />
        <circle cx="18" cy="16" r="6" fill="#f25f58" />
        <circle cx="40" cy="16" r="6" fill="#f2c94c" />
        <circle cx="62" cy="16" r="6" fill="#4cd964" />

        <text x="18" y="64" fill="url(#redGradient)" fontSize="16" fontFamily="monospace">
          root@kali:~# python3 exploit.py --target target.com --cmd 'id'
        </text>
        <rect x="520" y="52" width="10" height="18" fill="url(#redGradient)">
          <animate attributeName="opacity" values="1;0;1" dur="0.9s" repeatCount="indefinite" />
        </rect>

        <text x="18" y="96" fill="url(#redGradient)" fontSize="12" fontFamily="monospace">
          [*] Sending payload...
        </text>
        <text x="18" y="116" fill="url(#redGradient)" fontSize="12" fontFamily="monospace">
          [*] Payload executed: uid=0(root) gid=0(root)
        </text>
        <text x="18" y="136" fill="#ff9b9b" fontSize="12" fontFamily="monospace">
          [+] Exploit successful (controlled test)
        </text>

        <circle cx="520" cy="120" r="10" fill="#ff6b6b">
          <animate attributeName="r" values="8;14;8" dur="1.2s" repeatCount="indefinite" />
          <animate attributeName="opacity" values="1;0.4;1" dur="1.2s" repeatCount="indefinite" />
        </circle>
      </svg>
    ),
    text: "We perform controlled exploitation to validate vulnerabilities and measure potential impact while preserving system stability.",
  },

  {
    id: "report",
    title: "Reporting",
    titleShort: "Findings & Guidance",
    svg: (
      <svg viewBox="0 0 600 360" className="w-full h-full" preserveAspectRatio="none" role="img" aria-label="Reporting terminal">
        <defs>
          <linearGradient id="redGradient" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="rgb(217,47,97)" />
            <stop offset="100%" stopColor="rgb(143,15,56)" />
          </linearGradient>
        </defs>

        <rect width="600" height="360" rx="10" fill="#0b0b0b" stroke="#2f2f2f" strokeWidth="2" />
        <rect x="0" y="0" width="600" height="32" fill="#1f1f1f" rx="10" />
        <circle cx="18" cy="16" r="6" fill="#f25f58" />
        <circle cx="40" cy="16" r="6" fill="#f2c94c" />
        <circle cx="62" cy="16" r="6" fill="#4cd964" />

        <text x="18" y="64" fill="url(#redGradient)" fontSize="16" fontFamily="monospace">
          root@kali:~# cat findings/report.txt
        </text>
        <rect x="380" y="50" width="10" height="18" fill="url(#redGradient)">
          <animate attributeName="opacity" values="1;0;1" dur="1s" repeatCount="indefinite" />
        </rect>

        <text x="18" y="96" fill="url(#redGradient)" fontSize="12" fontFamily="monospace">
          [HIGH] SQL Injection in /search — CVSS: 9.0
        </text>
        <text x="18" y="116" fill="url(#redGradient)" fontSize="12" fontFamily="monospace">
          [MED] Reflected XSS in /profile
        </text>
        <text x="18" y="136" fill="url(#redGradient)" fontSize="12" fontFamily="monospace">
          [LOW] Information disclosure in headers
        </text>

        <rect x="18" y="160" width="260" height="8" rx="4" fill="url(#redGradient)">
          <animate attributeName="width" values="0;260;0" dur="4s" repeatCount="indefinite" />
        </rect>

        <text x="18" y="200" fill="url(#redGradient)" fontSize="12" fontFamily="monospace">
          &gt; report exported to findings/report.pdf
        </text>
      </svg>
    ),
    text: "We compile prioritized findings with reproduction steps and remediation guidance so your team can triage and fix issues effectively.",
  },

  {
    id: "remed",
    title: "Remediation Testing",
    titleShort: "Re-test & Verify",
    svg: (
      <svg viewBox="0 0 600 360" className="w-full h-full" preserveAspectRatio="none" role="img" aria-label="Re-test terminal">
        <defs>
          <linearGradient id="redGradient" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="rgb(217,47,97)" />
            <stop offset="100%" stopColor="rgb(143,15,56)" />
          </linearGradient>
        </defs>

        <rect width="600" height="360" rx="10" fill="#0b0b0b" stroke="#2f2f2f" strokeWidth="2" />
        <rect x="0" y="0" width="600" height="32" fill="#1f1f1f" rx="10" />
        <circle cx="18" cy="16" r="6" fill="#f25f58" />
        <circle cx="40" cy="16" r="6" fill="#f2c94c" />
        <circle cx="62" cy="16" r="6" fill="#4cd964" />

        <text x="18" y="64" fill="url(#redGradient)" fontSize="16" fontFamily="monospace">
          root@kali:~# ./retest.sh --target target.com
        </text>
        <rect x="470" y="52" width="10" height="18" fill="url(#redGradient)">
          <animate attributeName="opacity" values="1;0;1" dur="1s" repeatCount="indefinite" />
        </rect>

        <text x="18" y="96" fill="url(#redGradient)" fontSize="12" fontFamily="monospace">
          [*] Re-testing /search (SQLi) ...
        </text>
        <text x="18" y="116" fill="url(#redGradient)" fontSize="12" fontFamily="monospace">
          [OK] SQL injection fixed
        </text>
        <text x="18" y="136" fill="url(#redGradient)" fontSize="12" fontFamily="monospace">
          [OK] XSS fixed
        </text>

        <g transform="translate(420,180)">
          <circle cx="40" cy="40" r="30" stroke="url(#redGradient)" strokeWidth="3" fill="none" />
          <path d="M30 45 L38 53 L54 35" stroke="url(#redGradient)" strokeWidth="4" fill="none" strokeLinecap="round" strokeLinejoin="round">
            <animate attributeName="stroke-dasharray" values="0 80;50 80;0 80" dur="2s" repeatCount="indefinite" />
          </path>
        </g>

        <text x="18" y="220" fill="url(#redGradient)" fontSize="12" fontFamily="monospace">
          &gt; re-test complete — all verified
        </text>
      </svg>
    ),
    text: "After fixes are applied, we re-test affected areas and confirm remediation, ensuring no regressions were introduced.",
  },
  // ⬅️ keep rest of your steps unchanged (info, enum, attack, report, remed)
];

export default function ProcessCarousel({
  title,
  subtitle,
}: ProcessCarouselProps): JSX.Element {
  const [index, setIndex] = useState<number>(0);

  const goTo = (i: number) => {
    if (i < 0) i = 0;
    if (i > steps.length - 1) i = steps.length - 1;
    setIndex(i);
  };

  const next = () => setIndex((s) => Math.min(s + 1, steps.length - 1));
  const prev = () => setIndex((s) => Math.max(s - 1, 0));

  return (
    <div className="py-16 bg-white">
      <style>{`
        .pill-active-red {
          background: linear-gradient(90deg, rgb(217,47,97), rgb(143,15,56));
          box-shadow: 0 8px 22px rgba(217,47,97,0.14), 0 2px 6px rgba(0,0,0,0.06);
        }
        .left-card-red {
          background: linear-gradient(180deg, rgb(217,47,97) 0%, rgb(143,15,56) 100%);
        }
        .text-brand-red {
          color: rgb(217,47,97);
        }
        .terminal-gradient {
          fill: url(#redGradient);
        }
        .arrow-red {
          background: linear-gradient(90deg, rgb(217,47,97), rgb(143,15,56));
          color: white;
        }
      `}</style>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <p className="text-brand-red font-semibold mb-2 tracking-wider uppercase">
            PROCESS
          </p>
          <h2 className="text-3xl font-bold text-gray-900 mb-6">
            {title || "Our Web App Penetration Testing Process"}
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            {subtitle ||
              "At VAPTlabs, we protect your web application using a focused, industry-standard penetration test lifecycle that discovers, validates, and helps remediate risks."}
          </p>
        </div>

        {/* Steps pills */}
        <div className="mb-12">
          <div className="flex-nowrap flex items-center justify-center gap-2 mb-8 overflow-x-auto whitespace-nowrap">
            {steps.map((s, i) => (
              <React.Fragment key={s.id}>
                <button
                  onClick={() => goTo(i)}
                  aria-current={index === i}
                  className={`px-3 py-2 font-semibold text-sm rounded-full transition-all whitespace-nowrap ${
                    index === i
                      ? "pill-active-red text-white"
                      : "text-gray-600 border-2 border-gray-300 bg-white"
                  }`}
                >
                  {s.titleShort}
                </button>
                {i !== steps.length - 1 && (
                  <ChevronRightIcon className="w-5 h-5 text-gray-300 inline-block mx-1" />
                )}
              </React.Fragment>
            ))}
          </div>
        </div>

        {/* Content */}
        <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left SVG */}
            <div className="rounded-lg p-2 left-card-red">
              <div className="h-64 rounded-lg overflow-hidden flex items-center justify-center">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={steps[index].id + "-svg"}
                    initial={{ x: 300, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    exit={{ x: -300, opacity: 0 }}
                    transition={{ type: "spring", stiffness: 120, damping: 20 }}
                    className="w-full h-full"
                  >
                    {steps[index].svg}
                  </motion.div>
                </AnimatePresence>
              </div>
            </div>

            {/* Right Text */}
            <div>
              <AnimatePresence mode="wait" initial={false}>
                <motion.div
                  key={steps[index].id + "-text"}
                  initial={{ x: 300, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  exit={{ x: -300, opacity: 0 }}
                  transition={{ type: "spring", stiffness: 120, damping: 20 }}
                >
                  <h3 className="text-2xl font-bold text-brand-red mb-6">
                    {steps[index].title}
                  </h3>
                  <p className="text-lg text-gray-700 leading-relaxed whitespace-pre-line">
                    {steps[index].text}
                  </p>

                  <div className="flex items-center justify-between mt-8">
                    <button
                      onClick={prev}
                      disabled={index === 0}
                      className="p-3 rounded-full arrow-red disabled:opacity-40"
                    >
                      <ChevronLeftIcon className="w-6 h-6" />
                    </button>

                    <div className="text-sm text-gray-500">
                      {index + 1} / {steps.length}
                    </div>

                    <button
                      onClick={next}
                      disabled={index === steps.length - 1}
                      className="p-3 rounded-full arrow-red disabled:opacity-40"
                    >
                      <ChevronRightIcon className="w-6 h-6" />
                    </button>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
