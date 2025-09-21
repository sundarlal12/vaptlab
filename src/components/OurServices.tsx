// // src/components/OurServices.tsx
// import React, { useEffect, useRef, useState } from "react";
// import { ChevronLeft, ChevronRight, ArrowUpRight } from "lucide-react";
// import { useNavigate } from "react-router-dom";

// type Service = {
//   id: string;
//   title: string;
//   subtitle: string;
//   paragraph: string;
//   image: string;
// };

// const SERVICES: Service[] = [
//   {
//     id: "web-application-security-testing",
//     title: "Web Application Security Testing",
//     subtitle: "Comprehensive Web Application Security Testing to Safeguard Your Business",
//     paragraph:
//       "Protect your business from web-based attacks (SQLi, XSS, auth bypass) with targeted testing and remediation guidance. We validate impact and provide prioritized fixes to secure your app.",
//     image: "/images/services-web.jpg",
//   },
//   {
//     id: "mobile-application-security-testing",
//     title: "Mobile Application Security Testing",
//     subtitle: "Static & dynamic checks for Android & iOS",
//     paragraph:
//       "We analyze mobile apps for insecure storage, weak crypto, runtime tampering and insecure communication to harden mobile apps across platforms.",
//     image: "/images/services-mobile.jpg",
//   },
//   {
//     id: "network-penetration-testing",
//     title: "Network Penetration Testing",
//     subtitle: "External perimeter and internal network validation",
//     paragraph:
//       "We scan and validate network services and exposures to find attack paths, misconfigurations and service vulnerabilities that could let attackers in.",
//     image: "/images/services-network.jpg",
//   },
//   {
//     id: "api-penetration-testing",
//     title: "API Penetration Testing",
//     subtitle: "API discovery, auth & business logic checks",
//     paragraph:
//       "Our API tests expose hidden endpoints, authorization weaknesses and business logic flaws to ensure your APIs only return expected results to authorized users.",
//     image: "/images/services-api.jpg",
//   },
//   {
//     id: "cloud-penetration-testing",
//     title: "Cloud Penetration Testing",
//     subtitle: "IAM, storage and configuration checks",
//     paragraph:
//       "We review cloud accounts (AWS/Azure/GCP), IAM policies and storage configurations to find misconfigs and exposures that lead to data loss or privilege escalation.",
//     image: "/images/services-cloud.jpg",
//   },
//   {
//     id: "iot-security-testing",
//     title: "IoT Security Testing",
//     subtitle: "Firmware, device and network protocol testing",
//     paragraph:
//       "Firmware analysis, protocol fuzzing and device interface tests reveal weaknesses in embedded systems and connected devices so you can secure your product lifecycle.",
//     image: "/images/services-iot.jpg",
//   },
//   {
//     id: "secure-code-review",
//     title: "Secure Code Review",
//     subtitle: "SAST-style manual and automated review",
//     paragraph:
//       "We review source and binary artifacts to find insecure coding patterns, injection vectors and logic errors and provide code-safe remediation recommendations.",
//     image: "/images/services-code-review.jpg",
//   },
//   {
//     id: "medical-device-security-testing",
//     title: "Medical Device Security Testing",
//     subtitle: "Safety-first testing for regulated devices",
//     paragraph:
//       "Specialized testing for medical devices — firmware, radio, cloud integrations and clinical workflows — with careful handling and reporting for compliance.",
//     image: "/images/services-medical.jpg",
//   },
//   {
//     id: "threat-modeling",
//     title: "Threat Modeling",
//     subtitle: "Architectural risk analysis and prioritization",
//     paragraph:
//       "We map assets, trust boundaries and attacker goals to produce prioritized mitigation plans that reduce design-time security risk.",
//     image: "/images/services-threat-modeling.jpg",
//   },
//   {
//     id: "root-cause-analysis",
//     title: "Root Cause Analysis",
//     subtitle: "Understand why a defect happened, and prevent it",
//     paragraph:
//       "When incidents occur we dig into how and why, provide reproducible evidence and recommended systemic fixes that prevent recurrence.",
//     image: "/images/services-root-cause.jpg",
//   },
//   {
//     id: "red-teaming",
//     title: "Red Teaming",
//     subtitle: "Full-scope simulation of targeted attacks",
//     paragraph:
//       "Realistic, goal-driven adversary simulations that test people, process and technology to validate detection and response capabilities.",
//     image: "/images/services-red-team.jpg",
//   },
//   {
//     id: "software-composition-analysis",
//     title: "Software Composition Analysis",
//     subtitle: "Open-source dependency & license scanning",
//     paragraph:
//       "We scan your dependencies for known vulnerabilities, licensing risks and provide prioritized remediation for supply-chain exposures.",
//     image: "/images/services-sca.jpg",
//   },
// ];

// export default function OurServices(): JSX.Element {
//   const [activeIndex, setActiveIndex] = useState<number>(0);
//   const tabsRef = useRef<HTMLDivElement | null>(null);
//   const navigate = useNavigate();

//   // center active tab on change (scroll if needed)
//   useEffect(() => {
//     const container = tabsRef.current;
//     if (!container) return;
//     const el = container.querySelector(`[data-index="${activeIndex}"]`) as HTMLElement | null;
//     if (!el) return;
//     const cRect = container.getBoundingClientRect();
//     const eRect = el.getBoundingClientRect();
//     if (eRect.left < cRect.left || eRect.right > cRect.right) {
//       const offset = eRect.left - cRect.left - (cRect.width / 2 - eRect.width / 2);
//       container.scrollBy({ left: offset, behavior: "smooth" });
//     }
//   }, [activeIndex]);

//   const prev = () => setActiveIndex((i) => Math.max(0, i - 1));
//   const next = () => setActiveIndex((i) => Math.min(SERVICES.length - 1, i + 1));

//   const active = SERVICES[activeIndex];

//   // zigzag mask (SVG path data URL) — used as CSS maskImage via inline style
//   const svgMask = encodeURIComponent(`
//     <svg xmlns="http://www.w3.org/2000/svg" width="400" height="400" viewBox="0 0 400 400">
//       <rect width="100%" height="100%" fill="white" rx="40" />
//       <path d="M0 60 q40 -40 80 0 t80 0 t80 0 t80 0 v280 h-320 z" fill="black"/>
//     </svg>
//   `);

//   const maskStyle: React.CSSProperties = {
//     WebkitMaskImage: `url("data:image/svg+xml;utf8,${svgMask}")`,
//     maskImage: `url("data:image/svg+xml;utf8,${svgMask}")`,
//     WebkitMaskSize: "cover",
//     maskSize: "cover",
//     WebkitMaskRepeat: "no-repeat",
//     maskRepeat: "no-repeat",
//   };

//   const goToService = (svcId: string) => {
//     navigate(`/services/${svcId}`);
//   };

//   return (
//     <section className="py-20 bg-white">
//       <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
//         {/* Heading */}
//         <div className="text-center mb-8">
//           <h2 className="text-3xl font-bold text-gray-900">Our Services and Product</h2>
//           <div className="text-emerald-600 font-semibold mt-2">VAPT SERVICES</div>
//         </div>

//         {/* Tabs with chevrons */}
//         <div className="flex items-center justify-center gap-4 mb-12">
//           <button onClick={prev} aria-label="previous" disabled={activeIndex === 0} className="p-2 disabled:opacity-40">
//             <ChevronLeft className="w-6 h-6 text-gray-400" />
//           </button>

//           <div
//             ref={tabsRef}
//             className="flex gap-8 overflow-x-auto no-scrollbar px-2"
//             style={{ WebkitOverflowScrolling: "touch" }}
//             role="tablist"
//           >
//             {SERVICES.map((s, idx) => {
//               const isActive = idx === activeIndex;
//               return (
//                 <div
//                   key={s.id}
//                   data-index={idx}
//                   role="tab"
//                   aria-selected={isActive}
//                   tabIndex={0}
//                   onClick={() => setActiveIndex(idx)}
//                   onKeyDown={(e) => {
//                     if (e.key === "Enter" || e.key === " ") setActiveIndex(idx);
//                   }}
//                   className="cursor-pointer select-none text-center"
//                   style={{ minWidth: 220 }}
//                 >
//                   {/* FORCE single-line title, no wrap */}
//                   <div
//                     className={`text-base lg:text-lg font-semibold ${isActive ? "text-emerald-600" : "text-black"} whitespace-nowrap overflow-hidden`}
//                     title={s.title}
//                   >
//                     {s.title}
//                   </div>

//                   {/* thin gray underline + green active underline using fixed width */}
//                   <div className="mt-2 h-0.5 bg-gray-300 mx-auto" style={{ width: "14rem" }} />
//                   {isActive && <div className="mt-[-6px] h-1.5 bg-emerald-600 mx-auto rounded-sm" style={{ width: "14rem" }} />}
//                 </div>
//               );
//             })}
//           </div>

//           <button onClick={next} aria-label="next" disabled={activeIndex === SERVICES.length - 1} className="p-2 disabled:opacity-40">
//             <ChevronRight className="w-6 h-6 text-gray-400" />
//           </button>
//         </div>

//         {/* Active content WITHOUT card wrapper — simple layout (image left, content right) */}
//         <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
//           {/* Left: plain image with zigzag mask */}
//           <div className="flex items-center justify-center p-4">
//             <div
//               className="w-72 h-72 bg-cover bg-center"
//               style={{
//                 backgroundImage: `url('${active.image}')`,
//                 ...maskStyle,
//               }}
//               role="img"
//               aria-label={active.title}
//             />
//           </div>

//           {/* Right: content plain (no card) */}
//           <div className="p-4">
//             <h3 className="text-2xl lg:text-3xl font-bold text-gray-900">{active.title}</h3>
//             <div className="text-sm italic text-gray-600 mt-2 mb-6">{active.subtitle}</div>
//             <p className="text-gray-700 leading-relaxed mb-6">{active.paragraph}</p>

//             <div>
//               <button
//                 onClick={() => goToService(active.id)}
//                 className="bg-emerald-600 hover:bg-emerald-700 text-white px-5 py-2 rounded-full inline-flex items-center gap-2 font-semibold"
//               >
//                 Read More
//                 <ArrowUpRight className="w-4 h-4" />
//               </button>
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }



// // src/components/OurServices.tsx
// import React, { useEffect, useRef, useState } from "react";
// import { ChevronLeft, ChevronRight, ArrowUpRight } from "lucide-react";
// import { useNavigate } from "react-router-dom";

// type Service = {
//   id: string;
//   title: string;
//   subtitle: string;
//   paragraph: string;
//   image: string;
// };


// const SERVICES: Service[] = [
//   {
//     id: "web-application-security-testing",
//     title: "Web Application Security Testing",
//     subtitle: "Comprehensive Web Application Security Testing to Safeguard Your Business",
//     paragraph:
//       "We secure web applications by detecting vulnerabilities such as SQL injection, XSS, and authentication bypass. Our testing combines automated tools with expert manual analysis to validate risks and provide actionable remediation. By addressing critical flaws early, we strengthen application defenses, protect sensitive data, and ensure compliance with industry standards.",
//     image: "https://plus.unsplash.com/premium_vector-1733932442559-1e9f83edb452?w=900&auto=format&fit=crop&q=60",
//   },
//   {
//     id: "mobile-application-security-testing",
//     title: "Mobile Application Security Testing",
//     subtitle: "Static & dynamic checks for Android & iOS",
//     paragraph:
//       "Our testing protects mobile apps by uncovering insecure storage, weak cryptography, tampering risks, and unsafe communications. Covering both Android and iOS, we apply static and dynamic testing to detect flaws and provide remediation. This strengthens app resilience, safeguards user trust, and ensures compliance with evolving mobile security standards.",
//     image: "https://plus.unsplash.com/premium_vector-1736928493761-7341b9a0c228?w=900&auto=format&fit=crop&q=60",
//   },
//   {
//     id: "network-penetration-testing",
//     title: "Network Penetration Testing",
//     subtitle: "External perimeter and internal network validation",
//     paragraph:
//       "We simulate real-world cyberattacks on your internal and external networks to expose vulnerabilities, misconfigurations, and insecure services. Our assessments identify exploitable attack paths, validate risks, and provide detailed remediation steps. By securing network defenses, we help organizations reduce risks of breaches, ransomware, and privilege escalation attacks.",
//     image: "https://plus.unsplash.com/premium_vector-1744322762476-2a3a5a3de76c?w=900&auto=format&fit=crop&q=60",
//   },
//   {
//     id: "api-penetration-testing",
//     title: "API Penetration Testing",
//     subtitle: "API discovery, auth & business logic checks",
//     paragraph:
//       "We test APIs for hidden endpoints, weak authorization, poor authentication, and flawed business logic. Our approach validates input handling, data exposure, and access control weaknesses. By securing APIs, organizations reduce risks of data leaks, unauthorized access, and business logic abuse while ensuring stable and secure integrations.",
//     image: "https://media.istockphoto.com/id/1442100383/vector/application-programming-interface.webp?a=1&b=1&s=612x612&w=0&k=20&c=KU4O1rkbNbX9xyjZX6AZ0hjHZP67U2l1M1tuuj7z4HI=",
//   },
//   {
//     id: "cloud-penetration-testing",
//     title: "Cloud Penetration Testing",
//     subtitle: "IAM, storage and configuration checks",
//     paragraph:
//       "Our experts assess cloud infrastructure across AWS, Azure, and GCP to uncover misconfigurations, overly permissive IAM roles, and exposed assets. We simulate real-world attacks to validate risks, strengthen cloud security, and ensure compliance. By hardening environments, we help prevent breaches and privilege escalations in cloud-native applications.",
//     image: "https://plus.unsplash.com/premium_vector-1727150270336-ee85dfac0d98?w=900&auto=format&fit=crop&q=60",
//   },
//   {
//     id: "iot-security-testing",
//     title: "IoT Security Testing",
//     subtitle: "Firmware, device and network protocol testing",
//     paragraph:
//       "We evaluate IoT devices through firmware analysis, interface testing, and protocol fuzzing. Our testing identifies issues like hardcoded credentials, insecure updates, and weak communications. With actionable remediation, organizations strengthen device security across the lifecycle, preventing exploitation, data theft, and botnet attacks targeting connected IoT ecosystems.",
//     image: "https://plus.unsplash.com/premium_vector-1737043250629-b206cc4e6a03?w=900&auto=format&fit=crop&q=60",
//   },
//   {
//     id: "secure-code-review",
//     title: "Secure Code Review",
//     subtitle: "SAST-style manual and automated review",
//     paragraph:
//       "Our code review combines automated tools and expert analysis to identify insecure coding practices, injection risks, and logic flaws. We provide actionable recommendations to developers, improving both code quality and security. This proactive approach reduces long-term risks, strengthens applications, and ensures vulnerabilities are fixed before deployment.",
//     image: "https://plus.unsplash.com/premium_vector-1734283687328-294f686c78ce?w=900&auto=format&fit=crop&q=60",
//   },
//   {
//     id: "medical-device-security-testing",
//     title: "Medical Device Security Testing",
//     subtitle: "Safety-first testing for regulated devices",
//     paragraph:
//       "We test medical devices for firmware flaws, insecure communications, and system integration risks. Our approach ensures compliance with regulatory standards like HIPAA and FDA guidance while protecting patient safety. By addressing vulnerabilities early, manufacturers secure devices, protect sensitive health data, and maintain reliable clinical operations.",
//     image: "https://plus.unsplash.com/premium_vector-1726347020613-950b894b5902?w=900&auto=format&fit=crop&q=60",
//   },
//   {
//     id: "threat-modeling",
//     title: "Threat Modeling",
//     subtitle: "Architectural risk analysis and prioritization",
//     paragraph:
//       "Our threat modeling process maps assets, trust boundaries, and attacker objectives to identify design-level risks. We prioritize vulnerabilities and provide mitigation strategies that strengthen architecture before deployment. This proactive approach helps organizations reduce costly fixes, improve resilience, and build secure-by-design applications aligned with business goals.",
//     image: "https://plus.unsplash.com/premium_vector-1727483581269-b1ffd3667e51?w=900&auto=format&fit=crop&q=60",
//   },
//   {
//     id: "root-cause-analysis",
//     title: "Root Cause Analysis",
//     subtitle: "Understand why a defect happened, and prevent it",
//     paragraph:
//       "We investigate security incidents and vulnerabilities to determine how and why they occurred. Our Root Cause Analysis identifies technical flaws, process gaps, and systemic issues. By addressing the underlying causes, we help organizations prevent repeat incidents, improve processes, and strengthen their overall cybersecurity posture for long-term resilience.",
//     image: "https://plus.unsplash.com/premium_vector-1739472664463-aca27589ddfb?w=900&auto=format&fit=crop&q=60",
//   },
//   {
//     id: "red-teaming",
//     title: "Red Teaming",
//     subtitle: "Full-scope simulation of targeted attacks",
//     paragraph:
//       "Red Teaming simulates advanced adversary tactics to test detection and response. We use stealth, social engineering, and technical exploits to achieve business-critical goals. Findings reveal gaps in people, processes, and technologies. Our recommendations strengthen defenses, improve response capabilities, and prepare organizations for real-world cyber threats.",
//     image: "https://plus.unsplash.com/premium_vector-1739267788954-962bc1cd5031?w=900&auto=format&fit=crop&q=60",
//   },
//   {
//     id: "software-composition-analysis",
//     title: "Software Composition Analysis",
//     subtitle: "Open-source dependency & license scanning",
//     paragraph:
//       "We analyze open-source components to identify known vulnerabilities, outdated libraries, and licensing risks. Our SCA ensures secure and compliant dependency management, reducing exposure to supply-chain attacks. By providing prioritized remediation guidance, we help organizations maintain secure applications while accelerating development with reliable open-source components.",
//     image: "https://plus.unsplash.com/premium_vector-1734058389446-75256dc6c942?w=900&auto=format&fit=crop&q=60",
//   },
// ];

// export default function OurServices(): JSX.Element {
//   const [activeIndex, setActiveIndex] = useState<number>(0);
//   const tabsRef = useRef<HTMLDivElement | null>(null);
//   const navigate = useNavigate();

//   // center active tab on change (scroll if needed)
//   useEffect(() => {
//     const container = tabsRef.current;
//     if (!container) return;
//     const el = container.querySelector(`[data-index="${activeIndex}"]`) as HTMLElement | null;
//     if (!el) return;
//     const cRect = container.getBoundingClientRect();
//     const eRect = el.getBoundingClientRect();
//     if (eRect.left < cRect.left || eRect.right > cRect.right) {
//       const offset = eRect.left - cRect.left - (cRect.width / 2 - eRect.width / 2);
//       container.scrollBy({ left: offset, behavior: "smooth" });
//     }
//   }, [activeIndex]);

//   const prev = () => setActiveIndex((i) => Math.max(0, i - 1));
//   const next = () => setActiveIndex((i) => Math.min(SERVICES.length - 1, i + 1));

//   const active = SERVICES[activeIndex];

//   // zigzag mask (SVG path data URL) — used as CSS maskImage via inline style
//   const svgMask = encodeURIComponent(`
//     <svg xmlns="http://www.w3.org/2000/svg" width="400" height="400" viewBox="0 0 400 400">
//       <rect width="100%" height="100%" fill="white" rx="40" />
//       <path d="M0 60 q40 -40 80 0 t80 0 t80 0 t80 0 v280 h-320 z" fill="black"/>
//     </svg>
//   `);

//   const maskStyle: React.CSSProperties = {
//     WebkitMaskImage: `url("data:image/svg+xml;utf8,${svgMask}")`,
//     maskImage: `url("data:image/svg+xml;utf8,${svgMask}")`,
//     WebkitMaskSize: "cover",
//     maskSize: "cover",
//     WebkitMaskRepeat: "no-repeat",
//     maskRepeat: "no-repeat",
//   };

//   const goToService = (svcId: string) => {
//     navigate(`/services/${svcId}`);
//   };

//   return (
//     <section className="py-20 bg-white">
//       <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
//         {/* Heading */}
//         <div className="text-center mb-8">
//           <h2 className="text-3xl font-bold text-gray-900">Our Services and Product</h2>
//           <div className="text-emerald-600 font-semibold mt-2">VAPT SERVICES</div>
//         </div>

//         {/* Tabs with chevrons */}
//         <div className="flex items-center justify-center gap-4 mb-12">
//           <button onClick={prev} aria-label="previous" disabled={activeIndex === 0} className="p-2 disabled:opacity-40">
//             <ChevronLeft className="w-6 h-6 text-gray-400" />
//           </button>

//           <div
//             ref={tabsRef}
//             className="flex gap-8 overflow-x-auto no-scrollbar px-2"
//             style={{ WebkitOverflowScrolling: "touch" }}
//             role="tablist"
//           >
//             {SERVICES.map((s, idx) => {
//               const isActive = idx === activeIndex;
//               return (
//                 <div
//                   key={s.id}
//                   data-index={idx}
//                   role="tab"
//                   aria-selected={isActive}
//                   tabIndex={0}
//                   onClick={() => setActiveIndex(idx)}
//                   onKeyDown={(e) => {
//                     if (e.key === "Enter" || e.key === " ") setActiveIndex(idx);
//                   }}
//                   className="cursor-pointer select-none text-center"
//                   style={{ minWidth: 300 }}
//                 >
//                   {/* FORCE single-line title, no wrap */}
//                   <div
//                     className={`text-base lg:text-lg font-semibold ${isActive ? "text-emerald-600" : "text-black"} whitespace-nowrap overflow-hidden`}
//                     title={s.title}
//                   >
//                     {s.title}
//                   </div>

//                   {/* thin gray underline + green active underline using fixed width */}
//                   <div className="mt-2 h-0.5 bg-gray-300 mx-auto" style={{ width: "18rem" }} />
//                   {isActive && <div className="mt-[-6px] h-1.5 bg-emerald-600 mx-auto rounded-sm" style={{ width: "18rem" }} />}
//                 </div>
//               );
//             })}
//           </div>

//           <button onClick={next} aria-label="next" disabled={activeIndex === SERVICES.length - 1} className="p-2 disabled:opacity-40">
//             <ChevronRight className="w-6 h-6 text-gray-400" />
//           </button>
//         </div>

//         {/* Active content WITHOUT card wrapper — simple layout (image left, content right) */}
//         <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
//           {/* Left: plain image with zigzag mask */}
//           <div className="flex items-center justify-center p-4">
//             <div
//               className="w-72 h-72 bg-cover bg-center"
//               style={{
//                 backgroundImage: `url('${active.image}')`,
//                 ...maskStyle,
//               }}
//               role="img"
//               aria-label={active.title}
//             />
//           </div>

//           {/* Right: content plain (no card) */}
//           <div className="p-4">
//             <h3 className="text-2xl lg:text-3xl font-bold text-gray-900">{active.title}</h3>
//             <div className="text-sm italic text-gray-600 mt-2 mb-6">{active.subtitle}</div>
//             <p className="text-gray-700 leading-relaxed mb-6">{active.paragraph}</p>

//             <div>
//               <button
//                 onClick={() => goToService(active.id)}
//                 className="bg-emerald-600 hover:bg-emerald-700 text-white px-5 py-2 rounded-full inline-flex items-center gap-2 font-semibold"
//               >
//                 Read More
//                 <ArrowUpRight className="w-4 h-4" />
//               </button>
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }



// src/components/OurServices.tsx
import React, { useEffect, useRef, useState } from "react";
import { ChevronLeft, ChevronRight, ArrowUpRight } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";

type Service = {
  id: string;
  title: string;
  subtitle: string;
  paragraph: string;
  image: string;
};


const SERVICES: Service[] = [
  {
    id: "web-app-security",
    title: "Web Application Security Testing",
    subtitle: "Comprehensive Web Application Security Testing to Safeguard Your Business",
    paragraph:
      "We secure web applications by detecting vulnerabilities such as SQL injection, XSS, and authentication bypass. Our testing combines automated tools with expert manual analysis to validate risks and provide actionable remediation. By addressing critical flaws early, we strengthen application defenses, protect sensitive data, and ensure compliance with industry standards.",
    image: "https://plus.unsplash.com/premium_vector-1733932442559-1e9f83edb452?w=900&auto=format&fit=crop&q=60",
  },
  {
    id: "mobile-app-security",
    title: "Mobile Application Security Testing",
    subtitle: "Static & dynamic checks for Android & iOS",
    paragraph:
      "Our testing protects mobile apps by uncovering insecure storage, weak cryptography, tampering risks, and unsafe communications. Covering both Android and iOS, we apply static and dynamic testing to detect flaws and provide remediation. This strengthens app resilience, safeguards user trust, and ensures compliance with evolving mobile security standards.",
    image: "https://plus.unsplash.com/premium_vector-1736928493761-7341b9a0c228?w=900&auto=format&fit=crop&q=60",
  },
  {
    id: "network-penetration-testing",
    title: "Network Penetration Testing",
    subtitle: "External perimeter and internal network validation",
    paragraph:
      "We simulate real-world cyberattacks on your internal and external networks to expose vulnerabilities, misconfigurations, and insecure services. Our assessments identify exploitable attack paths, validate risks, and provide detailed remediation steps. By securing network defenses, we help organizations reduce risks of breaches, ransomware, and privilege escalation attacks.",
    image: "https://plus.unsplash.com/premium_vector-1744322762476-2a3a5a3de76c?w=900&auto=format&fit=crop&q=60",
  },
  {
    id: "api-penetration-testing",
    title: "API Penetration Testing",
    subtitle: "API discovery, auth & business logic checks",
    paragraph:
      "We test APIs for hidden endpoints, weak authorization, poor authentication, and flawed business logic. Our approach validates input handling, data exposure, and access control weaknesses. By securing APIs, organizations reduce risks of data leaks, unauthorized access, and business logic abuse while ensuring stable and secure integrations.",
    image: "https://media.istockphoto.com/id/1442100383/vector/application-programming-interface.webp?a=1&b=1&s=612x612&w=0&k=20&c=KU4O1rkbNbX9xyjZX6AZ0hjHZP67U2l1M1tuuj7z4HI=",
  },
  {
    id: "cloud-penetration-testing",
    title: "Cloud Penetration Testing",
    subtitle: "IAM, storage and configuration checks",
    paragraph:
      "Our experts assess cloud infrastructure across AWS, Azure, and GCP to uncover misconfigurations, overly permissive IAM roles, and exposed assets. We simulate real-world attacks to validate risks, strengthen cloud security, and ensure compliance. By hardening environments, we help prevent breaches and privilege escalations in cloud-native applications.",
    image: "https://plus.unsplash.com/premium_vector-1727150270336-ee85dfac0d98?w=900&auto=format&fit=crop&q=60",
  },
  {
    id: "iot-security-testing",
    title: "IoT Security Testing",
    subtitle: "Firmware, device and network protocol testing",
    paragraph:
      "We evaluate IoT devices through firmware analysis, interface testing, and protocol fuzzing. Our testing identifies issues like hardcoded credentials, insecure updates, and weak communications. With actionable remediation, organizations strengthen device security across the lifecycle, preventing exploitation, data theft, and botnet attacks targeting connected IoT ecosystems.",
    image: "https://plus.unsplash.com/premium_vector-1737043250629-b206cc4e6a03?w=900&auto=format&fit=crop&q=60",
  },
  {
    id: "secure-code-review",
    title: "Secure Code Review",
    subtitle: "SAST-style manual and automated review",
    paragraph:
      "Our code review combines automated tools and expert analysis to identify insecure coding practices, injection risks, and logic flaws. We provide actionable recommendations to developers, improving both code quality and security. This proactive approach reduces long-term risks, strengthens applications, and ensures vulnerabilities are fixed before deployment.",
    image: "https://plus.unsplash.com/premium_vector-1734283687328-294f686c78ce?w=900&auto=format&fit=crop&q=60",
  },
  {
    id: "medical-device-security-testing",
    title: "Medical Device Security Testing",
    subtitle: "Safety-first testing for regulated devices",
    paragraph:
      "We test medical devices for firmware flaws, insecure communications, and system integration risks. Our approach ensures compliance with regulatory standards like HIPAA and FDA guidance while protecting patient safety. By addressing vulnerabilities early, manufacturers secure devices, protect sensitive health data, and maintain reliable clinical operations.",
    image: "https://plus.unsplash.com/premium_vector-1726347020613-950b894b5902?w=900&auto=format&fit=crop&q=60",
  },
  {
    id: "threat-modeling",
    title: "Threat Modeling",
    subtitle: "Architectural risk analysis and prioritization",
    paragraph:
      "Our threat modeling process maps assets, trust boundaries, and attacker objectives to identify design-level risks. We prioritize vulnerabilities and provide mitigation strategies that strengthen architecture before deployment. This proactive approach helps organizations reduce costly fixes, improve resilience, and build secure-by-design applications aligned with business goals.",
    image: "https://plus.unsplash.com/premium_vector-1727483581269-b1ffd3667e51?w=900&auto=format&fit=crop&q=60",
  },
  {
    id: "root-cause-analysis",
    title: "Root Cause Analysis",
    subtitle: "Understand why a defect happened, and prevent it",
    paragraph:
      "We investigate security incidents and vulnerabilities to determine how and why they occurred. Our Root Cause Analysis identifies technical flaws, process gaps, and systemic issues. By addressing the underlying causes, we help organizations prevent repeat incidents, improve processes, and strengthen their overall cybersecurity posture for long-term resilience.",
    image: "https://plus.unsplash.com/premium_vector-1739472664463-aca27589ddfb?w=900&auto=format&fit=crop&q=60",
  },
  {
    id: "red-teaming",
    title: "Red Teaming",
    subtitle: "Full-scope simulation of targeted attacks",
    paragraph:
      "Red Teaming simulates advanced adversary tactics to test detection and response. We use stealth, social engineering, and technical exploits to achieve business-critical goals. Findings reveal gaps in people, processes, and technologies. Our recommendations strengthen defenses, improve response capabilities, and prepare organizations for real-world cyber threats.",
    image: "https://plus.unsplash.com/premium_vector-1739267788954-962bc1cd5031?w=900&auto=format&fit=crop&q=60",
  },
  {
    id: "software-composition-analysis",
    title: "Software Composition Analysis",
    subtitle: "Open-source dependency & license scanning",
    paragraph:
      "We analyze open-source components to identify known vulnerabilities, outdated libraries, and licensing risks. Our SCA ensures secure and compliant dependency management, reducing exposure to supply-chain attacks. By providing prioritized remediation guidance, we help organizations maintain secure applications while accelerating development with reliable open-source components.",
    image: "https://plus.unsplash.com/premium_vector-1734058389446-75256dc6c942?w=900&auto=format&fit=crop&q=60",
  },
];

export default function OurServices(): JSX.Element {
  const [activeIndex, setActiveIndex] = useState<number>(0);
  const tabsRef = useRef<HTMLDivElement | null>(null);
  const navigate = useNavigate();
  const [imageLoaded, setImageLoaded] = useState(false);

  const active = SERVICES[activeIndex];

  // scroll to keep tab in view
  useEffect(() => {
    const container = tabsRef.current;
    if (!container) return;
    const el = container.querySelector(`[data-index="${activeIndex}"]`) as HTMLElement | null;
    if (!el) return;
    const cRect = container.getBoundingClientRect();
    const eRect = el.getBoundingClientRect();
    if (eRect.left < cRect.left || eRect.right > cRect.right) {
      const offset = eRect.left - cRect.left - (cRect.width / 2 - eRect.width / 2);
      container.scrollBy({ left: offset, behavior: "smooth" });
    }
  }, [activeIndex]);

  const prev = () => setActiveIndex((i) => Math.max(0, i - 1));
  const next = () => setActiveIndex((i) => Math.min(SERVICES.length - 1, i + 1));
  const goToService = (svcId: string) => navigate(`/services/${svcId}`);

  return (
    <section className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold text-gray-900">Our Services and Products</h2>
       <div
  className="font-semibold mt-2 text-transparent bg-clip-text"
  style={{
    background: "linear-gradient(to right, rgb(217, 47, 97), rgb(143, 15, 56))",
    WebkitBackgroundClip: "text", // for Safari/Chrome
    WebkitTextFillColor: "transparent", // ensure text itself is transparent
  }}
>
  VAPT SERVICES
</div>
        </div>

        {/* Tabs */}
        {/* <div className="flex items-center justify-center gap-15 mb-12">
          <button onClick={prev} disabled={activeIndex === 0} className="p-2 disabled:opacity-40">
            <ChevronLeft className="w-6 h-6 text-gray-400" />
          </button>
          
          <div ref={tabsRef} className="flex gap-12 overflow-x-auto no-scrollbar px-2" role="tablist">
            {SERVICES.map((s, idx) => (
              <div
                key={s.id}
                data-index={idx}
                role="tab"
                aria-selected={idx === activeIndex}
                tabIndex={0}
                onClick={() => {
                  setActiveIndex(idx);
                  setImageLoaded(false);
                }}
                className="cursor-pointer select-none text-center whitespace-nowrap"
                style={{ minWidth: 295 }}
              >
                
                <div
        className={`text-base lg:text-lg font-semibold ${
          idx === activeIndex ? "text-transparent bg-clip-text" : "text-black"
        }`}
        style={
          idx === activeIndex
            ? {
                background: "linear-gradient(to right, rgb(217, 47, 97), rgb(143, 15, 56))",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }
            : {}
        }
      >
        {s.title}
      </div>
                <div className="mt-2 h-0.5 bg-gray-300 mx-auto w-72" />
                {idx === activeIndex && <div  className="mt-[-6px] h-1.5 bg-emerald-600 mx-auto rounded-sm w-72" />}
              </div>
            ))}
          </div>
          <button onClick={next} disabled={activeIndex === SERVICES.length - 1} className="p-2 disabled:opacity-40">
            <ChevronRight className="w-6 h-6 text-gray-400" />
          </button>
        </div> */}


        <div ref={tabsRef} className="flex gap-12 overflow-x-auto no-scrollbar px-2" role="tablist">
  {SERVICES.map((s, idx) => (
    <div
      key={s.id}
      data-index={idx}
      role="tab"
      aria-selected={idx === activeIndex}
      tabIndex={0}
      onClick={() => {
        setActiveIndex(idx);
        setImageLoaded(false);
      }}
      className="cursor-pointer select-none text-center whitespace-nowrap"
      style={{ minWidth: 295 }}
    >
      <div
        className={`text-base lg:text-lg font-semibold ${
          idx === activeIndex ? "text-transparent bg-clip-text" : "text-black"
        }`}
        style={
          idx === activeIndex
            ? {
                background: "linear-gradient(to right, rgb(217, 47, 97), rgb(143, 15, 56))",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }
            : {}
        }
      >
        {s.title}
      </div>

      <div className="mt-2 h-0.5 bg-gray-300 mx-auto w-72" />
      {idx === activeIndex && (
        <div className="mt-[-6px] h-1.5 bg-gradient-to-r from-pink-600 to-red-700 mx-auto rounded-sm w-72" />
      )}
    </div>
  ))}
</div>

        
        {/* Active service */}
        <div className="flex justify-center">
          <div className="w-full lg:w-4/5 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Image with loader & animation */}
            <div className="flex items-center justify-center p-8">
              <AnimatePresence mode="wait">
                <motion.div
                  key={active.id}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.5 }}
                  className="relative"
                >
                  {!imageLoaded && (
                    <div className="absolute inset-0 flex items-center justify-center bg-gray-100 animate-pulse rounded-3xl w-[400px] h-[400px]">
                      <span className="text-gray-400 text-sm" style={{
    background: "linear-gradient(to right, rgb(217, 47, 97), rgb(143, 15, 56))",
    WebkitBackgroundClip: "text", // for Safari/Chrome
    WebkitTextFillColor: "transparent", // ensure text itself is transparent
  }}>Loading...</span>
                    </div>
                  )}
                  <img
                    src={active.image}
                    alt={active.title}
                    onLoad={() => setImageLoaded(true)}
                    className="rounded-3xl object-cover w-[400px] h-[400px] shadow-lg"
                  />
                </motion.div>
              </AnimatePresence>
            </div>

            {/* Content */}
            <div className="p-6">
              <h3 className="text-2xl lg:text-3xl font-bold text-gray-900">{active.title}</h3>
              <p className="text-sm italic text-gray-600 mt-1">{active.subtitle}</p>
              <p className="text-gray-700 leading-relaxed mt-4">{active.paragraph}</p>
              <div className="mt-6">
                <button style={{ background: "linear-gradient(to right, rgb(217, 47, 97), rgb(143, 15, 56))" }}
                  onClick={() => goToService(active.id)}
                  className="bg-emerald-600 hover:bg-emerald-700 text-white px-5 py-2 rounded-full inline-flex items-center gap-2 font-semibold"
                >
                  Read More
                  <ArrowUpRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
