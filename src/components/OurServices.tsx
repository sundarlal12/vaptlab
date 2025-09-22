

// import React, { useEffect, useRef, useState } from "react";
// import { ChevronLeft, ChevronRight, ArrowUpRight } from "lucide-react";
// import { useNavigate } from "react-router-dom";
// import { motion, AnimatePresence } from "framer-motion";

// type Service = {
//   id: string;
//   title: string;
//   subtitle: string;
//   paragraph: string;
//   image: string;
// };


// const SERVICES: Service[] = [
//   {
//     id: "web-app-security",
//     title: "Web Application Security Testing",
//     subtitle: "Comprehensive Web Application Security Testing to Safeguard Your Business",
//     paragraph:
//       "We secure web applications by detecting vulnerabilities such as SQL injection, XSS, and authentication bypass. Our testing combines automated tools with expert manual analysis to validate risks and provide actionable remediation. By addressing critical flaws early, we strengthen application defenses, protect sensitive data, and ensure compliance with industry standards.",
//     image: "https://plus.unsplash.com/premium_vector-1733932442559-1e9f83edb452?w=900&auto=format&fit=crop&q=60",
//   },
//   {
//     id: "mobile-app-security",
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
//   id: "dark-web-monitoring",
//   title: "Dark Web Monitoring",
//   subtitle: "Continuous surveillance of the underground to protect your business",
//   paragraph:
//     "Our Dark Web Monitoring service provides continuous monitoring of hidden forums, marketplaces, and leak sources to detect breaches early. Key features include Continuous Monitoring, Breach Detection, Intelligence Gathering, and Incident Response. By enabling early detection, proactive response, risk mitigation, and brand protection, we help safeguard your organization against underground threats before they escalate.",
//   image: "https://plus.unsplash.com/premium_vector-1726673425962-4003a4bb4cbc?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTN8fGRhcmt3ZWIlMjBtb25pdG9yaW5nfGVufDB8fDB8fHww",
// },

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
//   const [imageLoaded, setImageLoaded] = useState(false);

//   const active = SERVICES[activeIndex];

//   // scroll to keep tab in view
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
//   const goToService = (svcId: string) => navigate(`/services/${svcId}`);

//   return (
//     <section className="py-20 bg-white">
//       <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
//         {/* Heading */}
//         <div className="text-center mb-8">
//           <h2 className="text-3xl font-bold text-gray-900">Our Services and Products</h2>
//        <div
//   className="font-semibold mt-2 text-transparent bg-clip-text"
//   style={{
//     background: "linear-gradient(to right, rgb(217, 47, 97), rgb(143, 15, 56))",
//     WebkitBackgroundClip: "text", // for Safari/Chrome
//     WebkitTextFillColor: "transparent", // ensure text itself is transparent
//   }}
// >
//   VAPT SERVICES
// </div>
//         </div>

    
//         <div ref={tabsRef} className="flex gap-12 overflow-x-auto no-scrollbar px-2" role="tablist">
//   {SERVICES.map((s, idx) => (
//     <div
//       key={s.id}
//       data-index={idx}
//       role="tab"
//       aria-selected={idx === activeIndex}
//       tabIndex={0}
//       onClick={() => {
//         setActiveIndex(idx);
//         setImageLoaded(false);
//       }}
//       className="cursor-pointer select-none text-center whitespace-nowrap"
//       style={{ minWidth: 295 }}
//     >
//       <div
//         className={`text-base lg:text-lg font-semibold ${
//           idx === activeIndex ? "text-transparent bg-clip-text" : "text-black"
//         }`}
//         style={
//           idx === activeIndex
//             ? {
//                 background: "linear-gradient(to right, rgb(217, 47, 97), rgb(143, 15, 56))",
//                 WebkitBackgroundClip: "text",
//                 WebkitTextFillColor: "transparent",
//               }
//             : {}
//         }
//       >
//         {s.title}
//       </div>

//       <div className="mt-2 h-0.5 bg-gray-300 mx-auto w-72" />
//       {idx === activeIndex && (
//         <div className="mt-[-6px] h-1.5 bg-gradient-to-r from-pink-600 to-red-700 mx-auto rounded-sm w-72" />
//       )}
//     </div>
//   ))}
// </div>

        
//         {/* Active service */}
//         <div className="flex justify-center">
//           <div className="w-full lg:w-4/5 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
//             {/* Image with loader & animation */}
//             <div className="flex items-center justify-center p-8">
//               <AnimatePresence mode="wait">
//                 <motion.div
//                   key={active.id}
//                   initial={{ opacity: 0, scale: 0.9 }}
//                   animate={{ opacity: 1, scale: 1 }}
//                   exit={{ opacity: 0, scale: 0.9 }}
//                   transition={{ duration: 0.5 }}
//                   className="relative"
//                 >
//                   {!imageLoaded && (
//                     <div className="absolute inset-0 flex items-center justify-center bg-gray-100 animate-pulse rounded-3xl w-[400px] h-[400px]">
//                       <span className="text-gray-400 text-sm" style={{
//     background: "linear-gradient(to right, rgb(217, 47, 97), rgb(143, 15, 56))",
//     WebkitBackgroundClip: "text", // for Safari/Chrome
//     WebkitTextFillColor: "transparent", // ensure text itself is transparent
//   }}>Loading...</span>
//                     </div>
//                   )}
//                   <img
//                     src={active.image}
//                     alt={active.title}
//                     onLoad={() => setImageLoaded(true)}
//                     className="rounded-3xl object-cover w-[400px] h-[400px] shadow-lg"
//                   />
//                 </motion.div>
//               </AnimatePresence>
//             </div>

//             {/* Content */}
//             <div className="p-6">
//               <h3 className="text-2xl lg:text-3xl font-bold text-gray-900">{active.title}</h3>
//               <p className="text-sm italic text-gray-600 mt-1">{active.subtitle}</p>
//               <p className="text-gray-700 leading-relaxed mt-4">{active.paragraph}</p>
//               <div className="mt-6">
//                 <button style={{ background: "linear-gradient(to right, rgb(217, 47, 97), rgb(143, 15, 56))" }}
//                   onClick={() => goToService(active.id)}
//                   className="bg-emerald-600 hover:bg-emerald-700 text-white px-5 py-2 rounded-full inline-flex items-center gap-2 font-semibold"
//                 >
//                   Read More
//                   <ArrowUpRight className="w-4 h-4" />
//                 </button>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }

// working above


// import React, { useEffect, useRef, useState } from "react";
// import { ChevronLeft, ChevronRight, ArrowUpRight } from "lucide-react";
// import { useNavigate } from "react-router-dom";
// import { motion, AnimatePresence } from "framer-motion";

// type Service = {
//   id: string;
//   title: string;
//   subtitle: string;
//   paragraph: string;
//   image: string;
// };


// const SERVICES: Service[] = [
//   {
//     id: "web-app-security",
//     title: "Web Application Security Testing",
//     subtitle: "Comprehensive Web Application Security Testing to Safeguard Your Business",
//     paragraph:
//       "We secure web applications by detecting vulnerabilities such as SQL injection, XSS, and authentication bypass. Our testing combines automated tools with expert manual analysis to validate risks and provide actionable remediation. By addressing critical flaws early, we strengthen application defenses, protect sensitive data, and ensure compliance with industry standards.",
//     image: "https://plus.unsplash.com/premium_vector-1733932442559-1e9f83edb452?w=900&auto=format&fit=crop&q=60",
//   },
//   {
//     id: "mobile-app-security",
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
//   id: "dark-web-monitoring",
//   title: "Dark Web Monitoring",
//   subtitle: "Continuous surveillance of the underground to protect your business",
//   paragraph:
//     "Our Dark Web Monitoring service provides continuous monitoring of hidden forums, marketplaces, and leak sources to detect breaches early. Key features include Continuous Monitoring, Breach Detection, Intelligence Gathering, and Incident Response. By enabling early detection, proactive response, risk mitigation, and brand protection, we help safeguard your organization against underground threats before they escalate.",
//   image: "https://plus.unsplash.com/premium_vector-1726673425962-4003a4bb4cbc?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTN8fGRhcmt3ZWIlMjBtb25pdG9yaW5nfGVufDB8fDB8fHww",
// },

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
//   const [imageLoaded, setImageLoaded] = useState(false);

//   const active = SERVICES[activeIndex];

//   // scroll to keep tab in view
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
//   const goToService = (svcId: string) => navigate(`/services/${svcId}`);

//   return (
//     <section className="py-20 bg-white">
//       <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
//         {/* Heading */}
//         <div className="text-center mb-8">
//           <h2 className="text-3xl font-bold text-gray-900">Our Services and Products</h2>
//        <div
//   className="font-semibold mt-2 text-transparent bg-clip-text"
//   style={{
//     background: "linear-gradient(to right, rgb(217, 47, 97), rgb(143, 15, 56))",
//     WebkitBackgroundClip: "text", // for Safari/Chrome
//     WebkitTextFillColor: "transparent", // ensure text itself is transparent
//   }}
// >
//   VAPT SERVICES
// </div>
//         </div>

//     {/* Tabs with left/right simple arrows */}
//     <div className="flex items-center justify-center gap-4 mb-6">
//       <button
//         onClick={prev}
//         aria-label="Previous service"
//         disabled={activeIndex === 0}
//         className="p-2 text-gray-600 disabled:opacity-40 focus:outline-none"
//         style={{ background: "transparent" }}
//       >
//         &lt;
//       </button>

//       <div ref={tabsRef} className="flex gap-12 overflow-x-auto no-scrollbar px-2" role="tablist">
//         {SERVICES.map((s, idx) => (
//           <div
//             key={s.id}
//             data-index={idx}
//             role="tab"
//             aria-selected={idx === activeIndex}
//             tabIndex={0}
//             onClick={() => {
//               setActiveIndex(idx);
//               setImageLoaded(false);
//             }}
//             className="cursor-pointer select-none text-center whitespace-nowrap"
//             style={{ minWidth: 295 }}
//           >
//             <div
//               className={`text-base lg:text-lg font-semibold ${
//                 idx === activeIndex ? "text-transparent bg-clip-text" : "text-black"
//               }`}
//               style={
//                 idx === activeIndex
//                   ? {
//                       background: "linear-gradient(to right, rgb(217, 47, 97), rgb(143, 15, 56))",
//                       WebkitBackgroundClip: "text",
//                       WebkitTextFillColor: "transparent",
//                     }
//                   : {}
//               }
//             >
//               {s.title}
//             </div>

//             <div className="mt-2 h-0.5 bg-gray-300 mx-auto w-72" />
//             {idx === activeIndex && (
//               <div className="mt-[-6px] h-1.5 bg-gradient-to-r from-pink-600 to-red-700 mx-auto rounded-sm w-72" />
//             )}
//           </div>
//         ))}
//       </div>

//       <button
//         onClick={next}
//         aria-label="Next service"
//         disabled={activeIndex === SERVICES.length - 1}
//         className="p-2 text-gray-600 disabled:opacity-40 focus:outline-none"
//         style={{ background: "transparent" }}
//       >
//         &gt;
//       </button>
//     </div>

        
//         {/* Active service */}
//         <div className="flex justify-center">
//           <div className="w-full lg:w-4/5 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
//             {/* Image with loader & animation */}
//             <div className="flex items-center justify-center p-8">
//               <AnimatePresence mode="wait">
//                 <motion.div
//                   key={active.id}
//                   initial={{ opacity: 0, scale: 0.9 }}
//                   animate={{ opacity: 1, scale: 1 }}
//                   exit={{ opacity: 0, scale: 0.9 }}
//                   transition={{ duration: 0.5 }}
//                   className="relative"
//                 >
//                   {!imageLoaded && (
//                     <div className="absolute inset-0 flex items-center justify-center bg-gray-100 animate-pulse rounded-3xl w-[400px] h-[400px]">
//                       <span className="text-gray-400 text-sm" style={{
//     background: "linear-gradient(to right, rgb(217, 47, 97), rgb(143, 15, 56))",
//     WebkitBackgroundClip: "text", // for Safari/Chrome
//     WebkitTextFillColor: "transparent", // ensure text itself is transparent
//   }}>Loading...</span>
//                     </div>
//                   )}
//                   <img
//                     src={active.image}
//                     alt={active.title}
//                     onLoad={() => setImageLoaded(true)}
//                     className="rounded-3xl object-cover w-[400px] h-[400px] shadow-lg"
//                   />
//                 </motion.div>
//               </AnimatePresence>
//             </div>

//             {/* Content */}
//             <div className="p-6">
//               <h3 className="text-2xl lg:text-3xl font-bold text-gray-900">{active.title}</h3>
//               <p className="text-sm italic text-gray-600 mt-1">{active.subtitle}</p>
//               <p className="text-gray-700 leading-relaxed mt-4">{active.paragraph}</p>
//               <div className="mt-6">
//                 <button style={{ background: "linear-gradient(to right, rgb(217, 47, 97), rgb(143, 15, 56))" }}
//                   onClick={() => goToService(active.id)}
//                   className="bg-emerald-600 hover:bg-emerald-700 text-white px-5 py-2 rounded-full inline-flex items-center gap-2 font-semibold"
//                 >
//                   Read More
//                   <ArrowUpRight className="w-4 h-4" />
//                 </button>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }



// src/components/OurServices.tsx
import React, { useEffect, useRef, useState } from "react";
import { ArrowUpRight } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";

type Service = {
  id: string;
  title: string;
  subtitle: string;
  paragraph: string;
  image: string;
};

// --- YOU REQUESTED: skip the SERVICES data body here ---
// Paste your SERVICES array here (same shape as `Service[]`)
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
  id: "dark-web-monitoring",
  title: "Dark Web Monitoring",
  subtitle: "Continuous surveillance of the underground to protect your business",
  paragraph:
    "Our Dark Web Monitoring service provides continuous monitoring of hidden forums, marketplaces, and leak sources to detect breaches early. Key features include Continuous Monitoring, Breach Detection, Intelligence Gathering, and Incident Response. By enabling early detection, proactive response, risk mitigation, and brand protection, we help safeguard your organization against underground threats before they escalate.",
  image: "https://plus.unsplash.com/premium_vector-1726673425962-4003a4bb4cbc?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTN8fGRhcmt3ZWIlMjBtb25pdG9yaW5nfGVufDB8fDB8fHww",
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

  // keep selected tab visible in horizontal scroll
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

  const prev = () => {
    setActiveIndex((i) => Math.max(0, i - 1));
    setImageLoaded(false);
  };

  const next = () => {
    setActiveIndex((i) => Math.min(SERVICES.length - 1, i + 1));
    setImageLoaded(false);
  };

  const goToService = (svcId: string) => navigate(`/services/${svcId}`);

  if (!SERVICES || SERVICES.length === 0) {
    return (
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-bold text-gray-900">Our Services and Products</h2>
            <p className="mt-4 text-gray-600">No services available (SERVICES array is empty).</p>
          </div>
        </div>
      </section>
    );
  }

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
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}
          >
            VAPT SERVICES
          </div>
        </div>

        {/* Tabs with left/right simple arrows */}
        <div className="flex items-center justify-center gap-6 mb-6">
          {/* Prev arrow */}
          <button
            onClick={prev}
            aria-label="Previous service"
            disabled={activeIndex === 0}
            className="px-3 py-2 text-3xl font-bold text-gray-700 disabled:opacity-30 disabled:cursor-not-allowed focus:outline-none transition-colors"
            style={{ background: "transparent" }}
          >
            &lt;
          </button>

          {/* Tabs container */}
          <div
            ref={tabsRef}
            className="flex gap-12 overflow-x-auto no-scrollbar px-2 py-1"
            role="tablist"
            aria-label="Services"
            style={{ WebkitOverflowScrolling: "touch" }}
          >
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
                onKeyDown={(e) => {
                  if (e.key === "Enter" || e.key === " ") {
                    setActiveIndex(idx);
                    setImageLoaded(false);
                  }
                }}
                className="cursor-pointer select-none text-center whitespace-nowrap px-1"
                style={{ minWidth: 260 }}
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

                <div className="mt-2 h-0.5 bg-gray-300 mx-auto w-64" />
                {idx === activeIndex && (
                  <div className="mt-[-6px] h-1.5 bg-gradient-to-r from-pink-600 to-red-700 mx-auto rounded-sm w-64" />
                )}
              </div>
            ))}
          </div>

          {/* Next arrow */}
          <button
            onClick={next}
            aria-label="Next service"
            disabled={activeIndex === SERVICES.length - 1}
            className="px-3 py-2 text-3xl font-bold text-gray-700 disabled:opacity-30 disabled:cursor-not-allowed focus:outline-none transition-colors"
            style={{ background: "transparent" }}
          >
            &gt;
          </button>
        </div>

        {/* Active service */}
        <div className="flex justify-center">
          <div className="w-full lg:w-4/5 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Image with loader & animation */}
            <div className="flex items-center justify-center p-8">
              <AnimatePresence mode="wait">
                <motion.div
                  key={active.id}
                  initial={{ opacity: 0, scale: 0.96 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.96 }}
                  transition={{ duration: 0.45 }}
                  className="relative"
                >
                  {/* overlay loader while image loads */}
                  {!imageLoaded && (
                    <div className="absolute inset-0 flex items-center justify-center bg-gray-100 rounded-3xl w-[400px] h-[400px]">
                      <div className="flex flex-col items-center gap-3">
                        <div
                          className="rounded-full p-4 inline-flex items-center justify-center"
                          style={{
                            background: "rgba(255,255,255,0.9)",
                            boxShadow: "0 10px 28px rgba(217,47,97,0.06)",
                          }}
                        >
                          <div
                            style={{
                              width: 38,
                              height: 38,
                              borderRadius: 9999,
                              border: "4px solid rgba(217,47,97,0.15)",
                              borderTopColor: "rgba(143,15,56,0.95)",
                              animation: "spin 0.9s linear infinite",
                            }}
                            aria-hidden
                          />
                        </div>
                        <span
                          className="text-sm"
                          style={{
                            background: "linear-gradient(to right, rgb(217, 47, 97), rgb(143, 15, 56))",
                            WebkitBackgroundClip: "text",
                            WebkitTextFillColor: "transparent",
                          }}
                        >
                          Loading...
                        </span>
                      </div>
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
                <button
                  onClick={() => goToService(active.id)}
                  className="inline-flex items-center gap-2 font-semibold px-5 py-2 rounded-full text-white"
                  style={{
                    background: "linear-gradient(to right, rgb(217, 47, 97), rgb(143, 15, 56))",
                  }}
                >
                  Read More
                  <ArrowUpRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* spinner keyframes */}
      <style>{`
        @keyframes spin { to { transform: rotate(360deg); } }
      `}</style>
    </section>
  );
}
