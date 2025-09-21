// import React, { useState } from 'react';
// import { Shield, FileText, Lock, Star, Code, Search } from 'lucide-react';
// import Header from "./Header";
// import ContactPopup from './ContactPopup';
// import ProcessCarousel from './ProcessCarousel';
// import Footer from './Footer';
// import CloudPenetrationFAQ from './FAQ/CloudPenetrationFAQ';
// import ClientCarousel from "./ClientCarousel";
// import ServiceSection from "./ServiceSection";
// import BenefitsSection from './BenefitsSection';

// const RED_GRAD = "linear-gradient(to right, rgb(217, 47, 97), rgb(143, 15, 56))";
// const DarkWebMonitor = () => {
//   const [isContactOpen, setIsContactOpen] = useState(false);
//   const [activeTab, setActiveTab] = useState<'black' | 'gray' | 'white'>('black');

//   // Benefits data for Dark web testing
//   const cloudBenefits = [
//     {
//       icon: <Shield className="w-12 h-12 text-gray-800" />,
//       title: "Cloud Security Assessment",
//       description: "Comprehensive evaluation of cloud infrastructure to identify misconfigurations and security gaps."
//     },
//     {
//       icon: <FileText className="w-12 h-12 text-gray-800" />,
//       title: "Compliance Assurance",
//       description: "Ensure cloud deployments meet industry standards and regulatory compliance requirements."
//     },
//     {
//       icon: <Lock className="w-12 h-12 text-gray-800" />,
//       title: "Data Protection",
//       description: "Safeguard sensitive data stored in cloud environments from unauthorized access and breaches."
//     },
//     {
//       icon: <Star className="w-12 h-12 text-gray-800" />,
//       title: "Multi-Cloud Security",
//       description: "Security assessment across AWS, Azure, GCP, and hybrid cloud environments."
//     },
//     {
//       icon: <Code className="w-12 h-12 text-gray-800" />,
//       title: "Infrastructure as Code",
//       description: "Review and secure cloud infrastructure configurations and deployment scripts."
//     },
//     {
//       icon: <Search className="w-12 h-12 text-gray-800" />,
//       title: "Container Security",
//       description: "Comprehensive security testing of containerized applications and orchestration platforms."
//     }
//   ];

  
//    const tabContent = {
//     black: `A simulated attack where cloud penetration testers have no prior knowledge of your cloud environment and no access credentials. They attempt to break in from the outside, just like an unknown hacker targeting your cloud systems.`,
//     white: `In this approach, testers are given full administrative or root-level access to the cloud infrastructure. With complete visibility, they can deeply analyze configurations, permissions, and security controls within the cloud.`,
//     gray: `Testers are provided with limited access, such as restricted admin rights or partial user permissions, along with some knowledge of the cloud environment. This mimics a scenario where an attacker already has partial access, for example through stolen or misused cloud credentials.`
//   };

//   return (
//     <div className="min-h-screen bg-white">
//       <Header />

//       {/* Hero Section */}
//       <ServiceSection
//         title="Cloud Penetration Testing"
//         subtitle="Secure your cloud infrastructure with comprehensive security assessment and vulnerability testing."
//         image="https://images.unsplash.com/photo-1451187580459-43490279c0fa?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80"
//         onContactClick={() => setIsContactOpen(true)}
//       />

//       {/* Overview Section */}
//       <div className="py-16 bg-gray-50">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//           <div className="text-center mb-12">
//             <h2 className="text-3xl font-bold text-gray-900 mb-4">
//               <span   className="pb-2"
//                 style={{
//                   borderBottom: '4px solid',
//                   borderImage: `${RED_GRAD} 1`, // CHANGED: gradient underline
//                 }}>
                
//                 Overview : Cloud Penetration Testing
              
//               </span>

              
//             </h2>
//           </div>
//           <div className="max-w-4xl mx-auto text-center">
//             <p className="text-lg text-gray-700 leading-relaxed">
//               Cloud penetration testing involves comprehensive security assessment of cloud infrastructure, services, and configurations to identify vulnerabilities that could be exploited by malicious actors. This testing evaluates cloud security controls, IAM policies, data storage security, and network configurations across AWS, Azure, GCP, and hybrid cloud environments. Our systematic approach helps organizations secure their cloud deployments and maintain compliance with industry standards.
//             </p>
//           </div>
//         </div>
//       </div>

//       {/* Methodology Section */}
//       <div className="py-16 bg-white">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//           <div className="grid lg:grid-cols-2 gap-12 items-center">
//             <div>
//               <h2 className="text-3xl font-bold text-gray-900 mb-8">
//                 Cloud Penetration Testing Methodology
//               </h2>
//               <p className="text-gray-700 mb-8 leading-relaxed">
//                 VAPTlabs employs a comprehensive methodology for cloud security assessment that identifies vulnerabilities in cloud infrastructure, configurations, and services. Our approach includes thorough testing based on industry frameworks like NIST Cloud Security, CSA CCM, and OWASP Cloud Security.
//               </p>
              
//               {/* Tabs */}
//               <div className="mb-8 flex gap-4 justify-center md:justify-start">
//                 <button
//                   className={`px-6 py-2 rounded-t-lg font-semibold ${
//                     activeTab === 'black'
//                       ? 'bg-gray-800 text-white'
//                       : 'bg-gray-200 text-gray-600 hover:bg-gray-300'
//                   }`}
//                   onClick={() => setActiveTab('black')}
//                 >
//                   Black Box
//                 </button>
//                 <button
//                   className={`px-6 py-2 rounded-t-lg font-semibold ${
//                     activeTab === 'gray'
//                       ? 'bg-gray-400 text-white'
//                       : 'bg-gray-200 text-gray-600 hover:bg-gray-300'
//                   }`}
//                   onClick={() => setActiveTab('gray')}
//                 >
//                   Gray Box
//                 </button>
             
//                  <button
//                   className={`px-6 py-2 rounded-t-lg font-semibold ${activeTab === 'white' ? '' : 'bg-gray-200 text-gray-600 hover:bg-gray-300'}`}
//                   onClick={() => setActiveTab('white')}
//                   style={
//                     activeTab === 'white'
//                       ? { background: RED_GRAD, color: 'white' } // CHANGED: active white tab uses red gradient
//                       : undefined
//                   }
//                 >
//                   White Box
//                 </button>
//               </div>

//               {/* Tab Content */}
//               <div className="bg-gray-50 p-6 rounded-lg shadow-md text-gray-700 leading-relaxed" style={{ marginTop:"-24px"}}>
//                 {tabContent[activeTab]}
//               </div>

//               <div className="text-center mt-8">
//                 <button
//                   className="bg-emerald-500 hover:bg-emerald-600 text-white px-8 py-3 rounded-lg font-semibold transition-colors"
//                      style={{
//                     background: RED_GRAD, // CHANGED: button background gradient
//                     color: '#fff',
//                   }}
//                   onClick={() => setIsContactOpen(true)}
//                 >
//                   Get Free Consultation
//                 </button>
//               </div>
//             </div>

//             {/* Right Image */}
//             <div className="relative">
//               <div className="bg-gradient-to-br from-emerald-100 to-emerald-200 rounded-lg p-8"  style={{ background: 'linear-gradient(180deg, rgba(217,47,97,0.06), rgba(143,15,56,0.04))' }}>
//                 <img 
//                   src="https://images.unsplash.com/photo-1544197150-b99a580bb7a8?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80" 
//                   alt="Cloud Security" 
//                   className="rounded-lg shadow-lg"
//                 />
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>

//       {/* Benefits Section */}
//       <BenefitsSection 
//         benefits={cloudBenefits}
//         title="Benefits"
//       />

//       <ProcessCarousel title="Cloud Penetration Testing Process"/>
//       <ClientCarousel />
//       <CloudPenetrationFAQ />
//       <Footer />

//       {/* Contact Popup */}
//       <ContactPopup
//         isOpen={isContactOpen}
//         onClose={() => setIsContactOpen(false)}
//       />
//     </div>
//   );
// };

// export default DarkWebMonitor;


// // src/pages/DarkWebMonitor.tsx
// import React, { useState } from 'react';
// import { Shield, FileText, Lock, Star, Code, Search } from 'lucide-react';
// import Header from "./Header";
// import ContactPopup from './ContactPopup';
// import ProcessCarousel from './ProcessCarousel';
// import Footer from './Footer';
// import DarkWebFAQ from './FAQ/DarkWebFAQ'; // create/update FAQ file as appropriate
// import ClientCarousel from "./ClientCarousel";
// import ServiceSection from "./ServiceSection";
// import BenefitsSection from './BenefitsSection';

// const RED_GRAD = "linear-gradient(to right, rgb(217, 47, 97), rgb(143, 15, 56))";

// const DarkWebMonitor: React.FC = () => {
//   const [isContactOpen, setIsContactOpen] = useState(false);
//   const [activeTab, setActiveTab] = useState<'black' | 'gray' | 'white'>('black');

//   // Benefits adjusted to Dark Web Monitoring context
//   const monitoringBenefits = [
//     {
//       icon: <Shield className="w-12 h-12 text-gray-800" />,
//       title: "Credential Leak Detection",
//       description: "Continuous scans of paste sites, forums and leak repositories to detect exposed credentials tied to your domains or users."
//     },
//     {
//       icon: <FileText className="w-12 h-12 text-gray-800" />,
//       title: "Brand & Asset Monitoring",
//       description: "Find mentions of company domains, employee emails, product names and API keys across underground sources."
//     },
//     {
//       icon: <Lock className="w-12 h-12 text-gray-800" />,
//       title: "Data Exposure Alerts",
//       description: "Rapid alerts when sensitive data (PII, secrets, intellectual property) appears for sale or discussion."
//     },
//     {
//       icon: <Star className="w-12 h-12 text-gray-800" />,
//       title: "Threat Actor Intelligence",
//       description: "Contextual intelligence connecting exposed artifacts to likely threat actors and their tactics."
//     },
//     {
//       icon: <Code className="w-12 h-12 text-gray-800" />,
//       title: "Automated & Manual Triage",
//       description: "Automated detection with analyst validation to reduce false positives and produce actionable findings."
//     },
//     {
//       icon: <Search className="w-12 h-12 text-gray-800" />,
//       title: "Remediation Guidance",
//       description: "Prioritized recommendations (password reset, credential revocation, risk scoring) and incident playbooks."
//     }
//   ];

//   // Tabs content changed to Dark Web Monitoring descriptions
//   const tabContent = {
//     black: `External monitoring: We continuously scan public and semi-private underground sources (paste sites, dark web forums, marketplaces) to find exposed assets — such as leaked credentials, API keys, or mentions of your company — with no credentials or insider access.`,
//     gray: `Credential-focused monitoring: With limited credential knowledge we validate and prioritize findings tied to known compromised accounts, service accounts, or vendor credentials to assess real exposure and impact.`,
//     white: `Investigative & remediation support: When confirmed exposures are discovered we provide analyst-validated intelligence, impact assessment, and step-by-step remediation recommendations (reset, revoke, rotate, and containment playbooks).`
//   };

//   // Hero image(s) focused on dark web / threat intelligence visuals
//   const heroImage = "https://plus.unsplash.com/premium_vector-1734626390785-e4e46e676d03?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDJ8fGRhcmt3ZWIlMjBtb25pdG9yaW5nfGVufDB8fDB8fHww"; // dark-theme hacker / monitoring shot
//   const rightImage = "https://plus.unsplash.com/premium_vector-1727483581269-b1ffd3667e51?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8ZGFya3dlYiUyMG1vbml0b3JpbmclMjBjeWJzZXJzZWN1aXJ0eXxlbnwwfHwwfHx8MA%3D%3D"; // analyst / screen image

//   return (
//     <div className="min-h-screen bg-white">
//       <Header />

//       {/* Hero Section */}
//       <ServiceSection
//         title="Dark Web Monitoring"
//         subtitle="Continuous detection and analyst-validated intelligence for leaked credentials, data exposure, and underground threats."
//         image={heroImage}
//         onContactClick={() => setIsContactOpen(true)}
//       />

//       {/* Overview Section */}
//       <div className="py-16 bg-gray-50">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//           <div className="text-center mb-12">
//             <h2 className="text-3xl font-bold text-gray-900 mb-4">
//               <span className="pb-2"
//                 style={{
//                   borderBottom: '4px solid',
//                   borderImage: `${RED_GRAD} 1`,
//                 }}>
//                 Overview : Dark Web Monitoring
//               </span>
//             </h2>
//           </div>
//           <div className="max-w-4xl mx-auto text-center">
//             <p className="text-lg text-gray-700 leading-relaxed">
//               Dark web monitoring discovers leaked credentials, exposed data and vendor/brand mentions across underground forums, marketplaces and paste sites. We combine automated collection with human analysis to reduce noise and provide prioritized, actionable alerts so you can contain and remediate exposure quickly.
//             </p>
//           </div>
//         </div>
//       </div>

//       {/* Methodology Section */}
//       <div className="py-16 bg-white">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//           <div className="grid lg:grid-cols-2 gap-12 items-center">
//             <div>
//               <h2 className="text-3xl font-bold text-gray-900 mb-8">
//                 Dark Web Monitoring Methodology
//               </h2>
//               <p className="text-gray-700 mb-8 leading-relaxed">
//                 We apply continuous data collection, correlation, and expert triage across underground sources. Findings are enriched with context, risk scoring and remediation playbooks to help teams act fast and reduce organizational exposure.
//               </p>

//               {/* Tabs */}
//               <div className="mb-8 flex gap-4 justify-center md:justify-start">
//                 <button
//                   className={`px-6 py-2 rounded-t-lg font-semibold ${
//                     activeTab === 'black'
//                       ? 'bg-gray-800 text-white'
//                       : 'bg-gray-200 text-gray-600 hover:bg-gray-300'
//                   }`}
//                   onClick={() => setActiveTab('black')}
//                 >
//                   External Monitoring
//                 </button>

//                 <button
//                   className={`px-6 py-2 rounded-t-lg font-semibold ${
//                     activeTab === 'gray'
//                       ? 'bg-gray-400 text-white'
//                       : 'bg-gray-200 text-gray-600 hover:bg-gray-300'
//                   }`}
//                   onClick={() => setActiveTab('gray')}
//                 >
//                   Credential Focus
//                 </button>

//                 <button
//                   className={`px-6 py-2 rounded-t-lg font-semibold ${activeTab === 'white' ? '' : 'bg-gray-200 text-gray-600 hover:bg-gray-300'}`}
//                   onClick={() => setActiveTab('white')}
//                   style={
//                     activeTab === 'white'
//                       ? { background: RED_GRAD, color: 'white' }
//                       : undefined
//                   }
//                 >
//                   Analyst Remediation
//                 </button>
//               </div>

//               {/* Tab Content */}
//               <div className="bg-gray-50 p-6 rounded-lg shadow-md text-gray-700 leading-relaxed" style={{ marginTop: "-24px" }}>
//                 {tabContent[activeTab]}
//               </div>

//               <div className="text-center mt-8">
//                 <button
//                   className="bg-emerald-500 hover:bg-emerald-600 text-white px-8 py-3 rounded-lg font-semibold transition-colors"
//                   style={{
//                     background: RED_GRAD,
//                     color: '#fff',
//                   }}
//                   onClick={() => setIsContactOpen(true)}
//                 >
//                   Get Free Consultation
//                 </button>
//               </div>
//             </div>

//             {/* Right Image */}
//             <div className="relative">
//               <div className="bg-gradient-to-br from-emerald-100 to-emerald-200 rounded-lg p-8" style={{ background: 'linear-gradient(180deg, rgba(217,47,97,0.06), rgba(143,15,56,0.04))' }}>
//                 <img
//                   src={rightImage}
//                   alt="Dark Web Analyst"
//                   className="rounded-lg shadow-lg"
//                 />
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>

//       {/* Benefits Section */}
//       <BenefitsSection
//         benefits={monitoringBenefits}
//         title="Benefits"
//       />

//       <ProcessCarousel title="Dark Web Monitoring Process" />
//       <ClientCarousel />
//       <DarkWebFAQ />
//       <Footer />

//       {/* Contact Popup */}
//       <ContactPopup
//         isOpen={isContactOpen}
//         onClose={() => setIsContactOpen(false)}
//       />
//     </div>
//   );
// };

// export default DarkWebMonitor;



// // src/pages/DarkWebMonitor.tsx
// import React, { useState } from 'react';
// import { Shield, FileText, Lock, Star, Code, Search } from 'lucide-react';
// import Header from "./Header";
// import ContactPopup from './ContactPopup';
// import ProcessCarousel from './ProcessCarousel';
// import Footer from './Footer';
// import DarkWebFAQ from './FAQ/DarkWebFAQ'; // create/update FAQ file as appropriate
// import ClientCarousel from "./ClientCarousel";
// import ServiceSection from "./ServiceSection";
// import BenefitsSection from './BenefitsSection';

// const RED_GRAD = "linear-gradient(to right, rgb(217, 47, 97), rgb(143, 15, 56))";

// const DarkWebMonitor: React.FC = () => {
//   const [isContactOpen, setIsContactOpen] = useState(false);
//   const [activeTab, setActiveTab] = useState<'black' | 'gray' | 'white'>('black');

//   // Benefits adjusted to Dark Web Monitoring context
//   const monitoringBenefits = [
//     {
//       icon: <Shield className="w-12 h-12 text-gray-800" />,
//       title: "Credential Leak Detection",
//       description: "Continuous scans of paste sites, forums and leak repositories to detect exposed credentials tied to your domains or users."
//     },
//     {
//       icon: <FileText className="w-12 h-12 text-gray-800" />,
//       title: "Brand & Asset Monitoring",
//       description: "Find mentions of company domains, employee emails, product names and API keys across underground sources."
//     },
//     {
//       icon: <Lock className="w-12 h-12 text-gray-800" />,
//       title: "Data Exposure Alerts",
//       description: "Rapid alerts when sensitive data (PII, secrets, intellectual property) appears for sale or discussion."
//     },
//     {
//       icon: <Star className="w-12 h-12 text-gray-800" />,
//       title: "Threat Actor Intelligence",
//       description: "Contextual intelligence connecting exposed artifacts to likely threat actors and their tactics."
//     },
//     {
//       icon: <Code className="w-12 h-12 text-gray-800" />,
//       title: "Automated & Manual Triage",
//       description: "Automated detection with analyst validation to reduce false positives and produce actionable findings."
//     },
//     {
//       icon: <Search className="w-12 h-12 text-gray-800" />,
//       title: "Remediation Guidance",
//       description: "Prioritized recommendations (password reset, credential revocation, risk scoring) and incident playbooks."
//     }
//   ];

//   // Tabs content changed to Dark Web Monitoring descriptions
//   const tabContent = {
//     black: `External monitoring: We continuously scan public and semi-private underground sources (paste sites, dark web forums, marketplaces) to find exposed assets — such as leaked credentials, API keys, or mentions of your company — with no credentials or insider access.`,
//     gray: `Credential-focused monitoring: With limited credential knowledge we validate and prioritize findings tied to known compromised accounts, service accounts, or vendor credentials to assess real exposure and impact.`,
//     white: `Investigative & remediation support: When confirmed exposures are discovered we provide analyst-validated intelligence, impact assessment, and step-by-step remediation recommendations (reset, revoke, rotate, and containment playbooks).`
//   };

//   // Hero image(s) focused on dark web / threat intelligence visuals
  // const heroImage = "https://plus.unsplash.com/premium_vector-1734626390785-e4e46e676d03?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDJ8fGRhcmt3ZWIlMjBtb25pdG9yaW5nfGVufDB8fDB8fHww"; // dark-theme hacker / monitoring shot
  // const rightImage = "https://plus.unsplash.com/premium_vector-1727483581269-b1ffd3667e51?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8ZGFya3dlYiUyMG1vbml0b3JpbmclMjBjeWJzZXJzZWN1aXJ0eXxlbnwwfHwwfHx8MA%3D%3D"; // analyst / screen image

//   return (
//     // Prevent horizontal overflow on small screens
//     <div className="min-h-screen bg-white overflow-x-hidden">
//       <Header />

//       {/* Hero Section */}
//       <ServiceSection
//         title="Dark Web Monitoring"
//         subtitle="Continuous detection and analyst-validated intelligence for leaked credentials, data exposure, and underground threats."
//         image={heroImage}
//         onContactClick={() => setIsContactOpen(true)}
//       />

//       {/* Overview Section */}
//       <div className="py-16 bg-gray-50">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//           <div className="text-center mb-12">
//             <h2 className="text-3xl font-bold text-gray-900 mb-4">
//               <span className="pb-2"
//                 style={{
//                   borderBottom: '4px solid',
//                   borderImage: `${RED_GRAD} 1`,
//                 }}>
//                 Overview : Dark Web Monitoring
//               </span>
//             </h2>
//           </div>
//           <div className="max-w-4xl mx-auto text-center">
//             <p className="text-lg text-gray-700 leading-relaxed">
//               Dark web monitoring discovers leaked credentials, exposed data and vendor/brand mentions across underground forums, marketplaces and paste sites. We combine automated collection with human analysis to reduce noise and provide prioritized, actionable alerts so you can contain and remediate exposure quickly.
//             </p>
//           </div>
//         </div>
//       </div>

//       {/* Methodology Section */}
//       <div className="py-16 bg-white">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//           <div className="grid lg:grid-cols-2 gap-12 items-center">
//             <div>
//               <h2 className="text-3xl font-bold text-gray-900 mb-8">
//                 Dark Web Monitoring Methodology
//               </h2>
//               <p className="text-gray-700 mb-8 leading-relaxed">
//                 We apply continuous data collection, correlation, and expert triage across underground sources. Findings are enriched with context, risk scoring and remediation playbooks to help teams act fast and reduce organizational exposure.
//               </p>

//               {/* Tabs */}
//               {/* CHANGES: added flex-wrap + small-button responsive widths so tabs won't force horizontal scroll on mobile */}
//               <div className="mb-8 flex flex-wrap gap-4 justify-center md:justify-start">
//                 <button
//                   className={`px-6 py-2 rounded-t-lg font-semibold w-full sm:w-auto ${
//                     activeTab === 'black'
//                       ? 'bg-gray-800 text-white'
//                       : 'bg-gray-200 text-gray-600 hover:bg-gray-300'
//                   }`}
//                   onClick={() => setActiveTab('black')}
//                 >
//                   External Monitoring
//                 </button>

//                 <button
//                   className={`px-6 py-2 rounded-t-lg font-semibold w-full sm:w-auto ${
//                     activeTab === 'gray'
//                       ? 'bg-gray-400 text-white'
//                       : 'bg-gray-200 text-gray-600 hover:bg-gray-300'
//                   }`}
//                   onClick={() => setActiveTab('gray')}
//                 >
//                   Credential Focus
//                 </button>

//                 <button
//                   className={`px-6 py-2 rounded-t-lg font-semibold w-full sm:w-auto ${activeTab === 'white' ? '' : 'bg-gray-200 text-gray-600 hover:bg-gray-300'}`}
//                   onClick={() => setActiveTab('white')}
//                   style={
//                     activeTab === 'white'
//                       ? { background: RED_GRAD, color: 'white' }
//                       : undefined
//                   }
//                 >
//                   Analyst Remediation
//                 </button>
//               </div>

//               {/* Tab Content */}
//               <div className="bg-gray-50 p-6 rounded-lg shadow-md text-gray-700 leading-relaxed" style={{ marginTop: "-24px" }}>
//                 {tabContent[activeTab]}
//               </div>

//               <div className="text-center mt-8">
//                 <button
//                   className="bg-emerald-500 hover:bg-emerald-600 text-white px-8 py-3 rounded-lg font-semibold transition-colors"
//                   style={{
//                     background: RED_GRAD,
//                     color: '#fff',
//                   }}
//                   onClick={() => setIsContactOpen(true)}
//                 >
//                   Get Free Consultation
//                 </button>
//               </div>
//             </div>

//             {/* Right Image */}
//             <div className="relative">
//               <div className="bg-gradient-to-br from-emerald-100 to-emerald-200 rounded-lg p-8" style={{ background: 'linear-gradient(180deg, rgba(217,47,97,0.06), rgba(143,15,56,0.04))' }}>
//                 {/* CHANGES: make image responsive so it doesn't cause horizontal overflow */}
//                 <img
//                   src={rightImage}
//                   alt="Dark Web Analyst"
//                   className="rounded-lg shadow-lg w-full h-auto object-cover"
//                 />
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>

//       {/* Benefits Section */}
//       <BenefitsSection
//         benefits={monitoringBenefits}
//         title="Benefits"
//       />

//       <ProcessCarousel title="Dark Web Monitoring Process" />
//       <ClientCarousel />
//       <DarkWebFAQ />
//       <Footer />

//       {/* Contact Popup */}
//       <ContactPopup
//         isOpen={isContactOpen}
//         onClose={() => setIsContactOpen(false)}
//       />
//     </div>
//   );
// };

// export default DarkWebMonitor;


// src/pages/DarkWebMonitor.tsx
import React, { useState } from 'react';
import { Shield, FileText, Lock, Star, Code, Search } from 'lucide-react';
import Header from "./Header";
import ContactPopup from './ContactPopup';
import ProcessCarousel from './ProcessCarousel';
import Footer from './Footer';
import DarkWebFAQ from './FAQ/DarkWebFAQ'; // make sure this file exists (you asked to create it)
import ClientCarousel from "./ClientCarousel";
import ServiceSection from "./ServiceSection";
import BenefitsSection from './BenefitsSection';
//const RED_GRAD = "linear-gradient(90deg, rgb(217,47,97), rgb(143,15,56))";
const RED_GRAD_LIGHT = "linear-gradient(90deg, rgba(217,47,97,0.14), rgba(143,15,56,0.10))";

const RED_GRAD = "linear-gradient(to right, rgb(217, 47, 97), rgb(143, 15, 56))";

const DarkWebMonitor: React.FC = () => {
  const [isContactOpen, setIsContactOpen] = useState(false);
  const [activeTab, setActiveTab] = useState<'black' | 'gray' | 'white'>('black');

  // Benefits adjusted to Dark Web Monitoring context
  const monitoringBenefits = [
    {
      icon: <Shield className="w-12 h-12 text-gray-800" />,
      title: "Credential Leak Detection",
      description: "Continuous scans of paste sites, forums and leak repositories to detect exposed credentials tied to your domains or users."
    },
    {
      icon: <FileText className="w-12 h-12 text-gray-800" />,
      title: "Brand & Asset Monitoring",
      description: "Find mentions of company domains, employee emails, product names and API keys across underground sources."
    },
    {
      icon: <Lock className="w-12 h-12 text-gray-800" />,
      title: "Data Exposure Alerts",
      description: "Rapid alerts when sensitive data (PII, secrets, intellectual property) appears for sale or discussion."
    },
    {
      icon: <Star className="w-12 h-12 text-gray-800" />,
      title: "Threat Actor Intelligence",
      description: "Contextual intelligence connecting exposed artifacts to likely threat actors and their tactics."
    },
    {
      icon: <Code className="w-12 h-12 text-gray-800" />,
      title: "Automated & Manual Triage",
      description: "Automated detection with analyst validation to reduce false positives and produce actionable findings."
    },
    {
      icon: <Search className="w-12 h-12 text-gray-800" />,
      title: "Remediation Guidance",
      description: "Prioritized recommendations (password reset, credential revocation, risk scoring) and incident playbooks."
    }
  ];

  // Tabs content changed to Dark Web Monitoring descriptions
  const tabContent = {
    black: `External monitoring — continuous collection from public, semi-private and underground sources (paste sites, forums, marketplaces). We surface mentions of your brand, leaked credentials, exposed secrets and other artifacts without any credentials or insider access.`,
    gray: `Credential-centric monitoring — we prioritize and validate artifacts tied to known accounts, service identities, or vendor credentials. This helps determine real impact and which exposures require immediate mitigation.`,
    white: `Analyst-validated remediation — when confirmed exposures are found we provide context-rich intelligence, impact assessment and step-by-step remediation playbooks (reset, revoke, rotate, containment) plus recommended next steps to reduce risk and repeat exposure.`
  };

  // Hero image(s) focused on dark web / threat intelligence visuals
  const heroImage = "https://plus.unsplash.com/premium_vector-1734626390785-e4e46e676d03?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDJ8fGRhcmt3ZWIlMjBtb25pdG9yaW5nfGVufDB8fDB8fHww"; // dark-theme hacker / monitoring shot
  const rightImage = "https://plus.unsplash.com/premium_vector-1727483581269-b1ffd3667e51?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8ZGFya3dlYiUyMG1vbml0b3JpbmclMjBjeWJzZXJzZWN1aXJ0eXxlbnwwfHwwfHx8MA%3D%3D"; // analyst / screen image


  return (
    <div className="min-h-screen bg-white">
      <Header />

      {/* Hero Section */}
      <ServiceSection
        title="Dark Web Monitoring"
        subtitle="Continuous detection and analyst-validated intelligence for leaked credentials, data exposure, and underground threats."
        image={heroImage}
        onContactClick={() => setIsContactOpen(true)}
      />

      {/* Overview ssSejction */}
      <div className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              <span
                className="pb-2 inline-block w-fit"
                style={{
                  borderBottom: '4px solid',
                  borderImage: `${RED_GRAD} 1`,
                }}
              >
                Overview : Dark Web Monitoring
              </span>
            </h2>
          </div>
          <div className="max-w-4xl mx-auto text-center">
            <p className="text-lg text-gray-700 leading-relaxed">
              Dark web monitoring discovers leaked credentials, exposed data and vendor/brand mentions across underground forums, marketplaces and paste sites. We combine automated collection with human analysis to reduce noise and provide prioritized, actionable alerts so you can contain and remediate exposure quickly.
            </p>
          </div>
        </div>
      </div>


      
      {/* Methodology Section */}
      <div className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-8">
                Dark Web Monitoring Methodology
              </h2>
              <p className="text-gray-700 mb-8 leading-relaxed">
                We apply continuous data collection, correlation, and expert triage across underground sources. Findings are enriched with context, risk scoring and remediation playbooks to help teams act fast and reduce organizational exposure.
              </p>

              {/* Tabs (kept as horizontal compact tabs so minimal structural changes) */}
              {/* <div className="mb-8 flex gap-4 justify-center md:justify-start">
                <button
                  className={`px-6 py-2 rounded-t-lg font-semibold ${
                    activeTab === 'black'
                      ? 'bg-gray-900 text-white'
                      : 'bg-gray-200 text-gray-600 hover:bg-gray-300'
                  }`}
                  onClick={() => setActiveTab('black')}
                >
                  External Monitoring
                </button>

                <button
                  className={`px-6 py-2 rounded-t-lg font-semibold ${
                    activeTab === 'gray'
                      ? 'bg-gray-400 text-white'
                      : 'bg-gray-200 text-gray-600 hover:bg-gray-300'
                  }`}
                  onClick={() => setActiveTab('gray')}
                >
                  Credential Focus
                </button>

                <button
                  className={`px-6 py-2 rounded-t-lg font-semibold ${activeTab === 'white' ? '' : 'bg-gray-200 text-gray-600 hover:bg-gray-300'}`}
                  onClick={() => setActiveTab('white')}
                  style={
                    activeTab === 'white'
                      ? { background: RED_GRAD, color: 'white' }
                      : undefined
                  }
                >
                  Analyst Remediation
                </button>
              </div>

            
              <div className="bg-gray-50 p-6 rounded-lg shadow-md text-gray-700 leading-relaxed" style={{ marginTop: "-24px" }}>
                {tabContent[activeTab]}
              </div> */}


 {/* <div className="flex gap-8 mb-8">
 
  <div className="flex flex-col space-y-2 min-w-[200px]">
    {[
      { id: "black", label: "External Monitoring" },
      { id: "gray", label: "Credential Focus" },
      { id: "white", label: "Analyst Remediation" },
    ].map((tab) => (
      <button
        key={tab.id}
        className={`text-left px-4 py-3 rounded-lg font-semibold transition-all ${
          activeTab === tab.id ? "text-white" : "text-gray-700"
        }`}
        style={{
          background:
            activeTab === tab.id
              ? "linear-gradient(90deg, rgb(217,47,97), rgb(143,15,56))"
              : "transparent",
        }}
        onMouseEnter={(e) => {
          if (activeTab !== tab.id) {
            (e.currentTarget as HTMLButtonElement).style.background =
              "linear-gradient(90deg, rgba(217,47,97,0.2), rgba(143,15,56,0.2))";
          }
        }}
        onMouseLeave={(e) => {
          if (activeTab !== tab.id) {
            (e.currentTarget as HTMLButtonElement).style.background = "transparent";
          }
        }}
        onClick={() => setActiveTab(tab.id as typeof activeTab)}
      >
        {tab.label}
      </button>
    ))}
  </div>


  <div className="flex-1 bg-gray-50 p-6 rounded-lg shadow-md">
    <h3 className="text-xl font-bold text-gray-900 mb-4 capitalize">
      {activeTab === "black"
        ? "External Monitoring"
        : activeTab === "gray"
        ? "Credential Focus"
        : "Analyst Remediation"}
    </h3>
    <p className="text-gray-700 leading-relaxed">
      {tabContent[activeTab]}
    </p>
  </div>
</div>
 */}

              {/* Vertical Tabs - always vertical for all devices */}

<div className="mb-8">
  <div className="flex flex-col md:flex-row gap-6">
    {/* Vertical Nav (always vertical) */}
    <div
      role="tablist"
      aria-orientation="vertical"
      className="flex flex-col space-y-2 min-w-[200px]"
    >
      {[
        { id: "black", label: "External Monitoring" },
        { id: "gray", label: "Credential Focus" },
        { id: "white", label: "Analyst Remediation" },
      ].map((tab) => {
        const isActive = activeTab === tab.id;
        return (
          <button
            key={tab.id}
            role="tab"
            aria-selected={isActive}
            tabIndex={isActive ? 0 : -1}
            onClick={() => setActiveTab(tab.id as typeof activeTab)}
            onMouseEnter={(e) => {
              if (!isActive) {
                (e.currentTarget as HTMLButtonElement).style.background = RED_GRAD_LIGHT;
              }
            }}
            onMouseLeave={(e) => {
              if (!isActive) {
                (e.currentTarget as HTMLButtonElement).style.background = "transparent";
              }
            }}
            className={`text-left px-4 py-3 rounded-lg font-semibold transition-all ${
              isActive ? "text-white" : "text-gray-700"
            }`}
            style={{
              background: isActive ? RED_GRAD : "transparent",
            }}
          >
            {tab.label}
          </button>
        );
      })}
    </div>

    {/* Tab Content */}
    <div className="flex-1 bg-gray-50 p-6 rounded-lg shadow-md">
      <h3 className="text-xl font-bold text-gray-900 mb-4 capitalize">
        {activeTab === "black"
          ? "External Monitoring"
          : activeTab === "gray"
          ? "Credential Focus"
          : "Analyst Remediation"}
      </h3>
      <p className="text-gray-700 leading-relaxed">{tabContent[activeTab]}</p>
    </div>
  </div>
</div>


              <div className="text-center mt-8">
                <button
                  className="px-8 py-3 rounded-lg font-semibold text-white transition-colors"
                  style={{
                    background: RED_GRAD,
                    color: '#fff',
                  }}
                  onClick={() => setIsContactOpen(true)}
                >
                  Get Free Consultation
                </button>
              </div>
            </div>

            {/* Right Image */}
            <div className="relative">
              <div className="rounded-lg p-8" style={{ background: 'linear-gradient(180deg, rgba(217,47,97,0.06), rgba(143,15,56,0.04))' }}>
                <img
                  src={rightImage}
                  alt="Dark Web Analyst"
                  className="rounded-lg shadow-lg w-full h-auto object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Benefits Section */}
      <BenefitsSection
        benefits={monitoringBenefits}
        title="Benefits"
      />

      <ProcessCarousel title="Dark Web Monitoring Process" />
      <ClientCarousel />
      <DarkWebFAQ />
      <Footer />

      {/* Contact Popup */}
      <ContactPopup
        isOpen={isContactOpen}
        onClose={() => setIsContactOpen(false)}
      />
    </div>
  );
};

export default DarkWebMonitor;
