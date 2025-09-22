// src/components/Footer.tsx
/*
import React, { useState } from "react";
import { Shield, FileText, MapPin, ArrowUpRight } from "lucide-react";
import { FaFacebookF, FaLinkedinIn, FaInstagram } from "react-icons/fa";
import Loader from "./Loader";

const Footer = () => {
  const [isLoading, setIsLoading] = useState(false);
  const currentYear = new Date().getFullYear();

  const handleNavigation = (path: string) => {
    setIsLoading(true);
    window.location.href = path.startsWith("/") ? path : `/${path}`;
  };

  return (
    <>
      {isLoading && <Loader text="Loading page..." />}
      <footer className="bg-[#0A0F1F] text-white pt-16 pb-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          
            <div>
              <div className="flex items-center mb-6">
                <img
                  src="https://vaptlabs.com/src/images/logo-light.png"
                  alt="VAPTlabs"
                  className="h-10 w-auto mr-3"
                />
              </div>
    
              <p className="text-emerald-400 font-semibold mb-6 text-base md:text-lg">
                We do not insure! We assure!
              </p>
              <p className="text-gray-300 mb-8 leading-relaxed text-base md:text-lg font-light">
                Enterprise-grade cybersecurity solutions with a hacker&apos;s
                perspective. Protecting digital assets for startups to Fortune
                500 companies.
              </p>

            
              <div className="mb-8 p-6 bg-white/5 rounded-xl border border-white/10">
                <h3 className="text-lg md:text-xl font-semibold mb-4 text-white">
                  Get Started
                </h3>
                <a
                  href="mailto:contact@vaptlabs.com"
                  className="text-emerald-400 hover:text-red-500 transition-colors text-base md:text-lg font-medium inline-flex items-center group"
                >
                  contact@vaptlabs.com
                  <ArrowUpRight
                    size={20}
                    className="ml-2 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform"
                  />
                </a>
              </div>
            </div>

         
            <div>
              <h3 className="text-lg md:text-xl font-semibold mb-6 pb-3 border-b border-emerald-500/40 flex items-center">
                <Shield className="w-5 h-5 mr-2 text-emerald-400" />
                Services
              </h3>
              <ul className="space-y-4">
                {[
                  { name: "Web Application Pentesting", path: "/services/web-app-security" },
                  { name: "Mobile App Pentesting", path: "/services/mobile-app-security" },
                  { name: "Network Pentesting", path: "/services/network-penetration-testing" },
                  { name: "API Security Testing", path: "/services/api-penetration-testing" },
                  { name: "Cloud Pentesting", path: "/services/cloud-penetration-testing" },
                  { name: "IoT Device Pentesting", path: "/services/iot-security-testing" },
                  { name: "Secure Code Review", path: "/services/secure-code-review" },
                 
                ].map((service) => (
                  <li key={service.name}>
                    <button
                      onClick={() => handleNavigation(service.path)}
                      className="text-gray-300 hover:text-emerald-400 transition-colors font-medium flex items-center group"
                    >
                      <div className="w-2 h-2 bg-emerald-400 rounded-full mr-3 group-hover:bg-red-500 transition-colors"></div>
                      {service.name}
                    </button>
                  </li>
                ))}
              </ul>
            </div>

          
            <div>
              <h3 className="text-lg md:text-xl font-semibold mb-6 pb-3 border-b border-emerald-500/40 flex items-center">
                <FileText className="w-5 h-5 mr-2 text-emerald-400" />
                Company
              </h3>
              <ul className="space-y-4 mb-10">
                {[
                  { name: "About Us", path: "/about/vaptlabs" },
                  { name: "Our Clients", path: "/about/clients" },
                
                ].map((item) => (
                  <li key={item.name}>
                    <button
                      onClick={() => handleNavigation(item.path)}
                      className="text-gray-300 hover:text-emerald-400 transition-colors font-medium flex items-center group"
                    >
                      <div className="w-2 h-2 bg-emerald-400 rounded-full mr-3 group-hover:bg-red-500 transition-colors"></div>
                      {item.name}
                    </button>
                  </li>
                ))}
              </ul>

           
              <h3 className="text-lg md:text-xl font-semibold mb-4">Follow Us</h3>
              <div className="flex space-x-4">
                <a
                  href="https://www.facebook.com/vaptlabs"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-emerald-500/10 rounded-full flex items-center justify-center hover:bg-red-500/20 transition-colors"
                >
                  <FaFacebookF />
                </a>
                <a
                  href="https://www.linkedin.com/company/vaptlabs/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-emerald-500/10 rounded-full flex items-center justify-center hover:bg-red-500/20 transition-colors"
                >
                  <FaLinkedinIn />
                </a>
                <a
                  href="https://www.instagram.com/vaptlabs"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-emerald-500/10 rounded-full flex items-center justify-center hover:bg-red-500/20 transition-colors"
                >
                  <FaInstagram />
                </a>
              </div>
            </div>

          
            <div>
              <h3 className="text-lg md:text-xl font-semibold mb-6 pb-3 border-b border-emerald-500/40 flex items-center">
                <MapPin className="w-5 h-5 mr-2 text-emerald-400" />
                Global Presence
              </h3>
              <div className="bg-white/5 p-4 rounded-lg">
                <p className="font-semibold mb-2 text-emerald-400">BENGALURU</p>
                <p className="text-gray-300 text-sm">
                  18th Cross Rd, Sector 3, HSR Layout, Bengaluru, Karnataka
                  560102
                </p>
              </div>
            </div>
          </div>

        
          <div className="mt-16 pt-10 border-t border-gray-700">
            <div className="flex flex-col md:flex-row justify-between items-center">
              <div className="mb-4 md:mb-0 text-gray-400 text-sm">
                © {currentYear} VAPTlabs Pentesting Solution. All rights reserved.
              </div>
              <div className="flex gap-6 text-gray-400 text-sm">
                <button
                  onClick={() => handleNavigation("/privacy-policy")}
                  className="hover:text-emerald-400"
                >
                  Privacy Policy
                </button>
                <button
                  onClick={() => handleNavigation("/terms-of-service")}
                  className="hover:text-emerald-400"
                >
                  Terms of Service
                </button>
                <button
                  onClick={() => handleNavigation("/compliance/iso-27001")}
                  className="hover:text-emerald-400"
                >
                  Compliance
                </button>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;

*/

// // src/components/Footer.tsx
// import React, { useState } from "react";
// import { Shield, FileText, MapPin, ArrowUpRight } from "lucide-react";
// import { FaFacebookF, FaLinkedinIn, FaInstagram } from "react-icons/fa";
// import Loader from "./Loader";

// const Footer = () => {
//   const [isLoading, setIsLoading] = useState(false);
//   const currentYear = new Date().getFullYear();

//   const handleNavigation = (path: string) => {
//     setIsLoading(true);
//     window.location.href = path.startsWith("/") ? path : `/${path}`;
//   };

//   return (
//     <>
//       {isLoading && <Loader text="Loading page..." />}
//       <footer className="bg-[#0A0F1F] text-white pt-16 pb-10 relative">
       
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
        
//             <div>
             
//               {/*     
//               <div className="flex items-center mb-6">
//                 <div className="relative flex items-center justify-center w-20 h-20 rounded-xl bg-white shadow-lg">
                
//                   <div className="absolute inset-0 rounded-xl bg-white blur-2xl opacity-30"></div>
//                   <img
//                     src="https://vaptlabs.com/src/images/logo-light.png"
//                     alt="VAPTlabs"
//                     className="relative z-10 h-10 w-auto"
//                   />
//                 </div>
//               </div>
             
//         */}
//                <div className="flex items-center mb-6">
//     <div className="relative inline-flex items-center justify-center rounded-lg bg-white p-2">
//       {/* glowing light effect */}
//       <div className="absolute inset-0 rounded-lg bg-white blur-lg opacity-1"></div>
//       <img
//         src="https://vaptlabs.com/src/images/logo-light.png"
//         alt="VAPTlabs"
//         className="relative z-10 h-10 w-auto"
//       />
//     </div>
//   </div>

       
//               <p className="text-emerald-400 font-semibold mb-6 text-base md:text-lg">
//                 We do not insure! We assure!
//               </p>
//               <p className="text-gray-300 mb-8 leading-relaxed text-base md:text-lg font-light">
//                 Enterprise-grade cybersecurity solutions with a hacker&apos;s
//                 perspective. Protecting digital assets for startups to Fortune
//                 500 companies.
//               </p>



       


  
              

//               {/* Contact Email */}
//               <div className="mb-8 p-6 bg-white/5 rounded-xl border border-white/10">
//                 <h3 className="text-lg md:text-xl font-semibold mb-4 text-white">
//                   Get Started
//                 </h3>
//                 <a
//                   href="mailto:contact@vaptlabs.com"
//                   className="text-emerald-400 hover:text-red-500 transition-colors text-base md:text-lg font-medium inline-flex items-center group"
//                 >
//                   contact@vaptlabs.com
//                   <ArrowUpRight
//                     size={20}
//                     className="ml-2 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform"
//                   />
//                 </a>
//               </div>
//             </div>

//             {/* Services */}
//             {/* ... keep the rest of your code as is ... */}
//              <div>
//               <h3 className="text-lg md:text-xl font-semibold mb-6 pb-3 border-b border-emerald-500/40 flex items-center">
//                 <Shield className="w-5 h-5 mr-2 text-emerald-400" />
//                 Services
//               </h3>
//               <ul className="space-y-4">
//                 {[
//                   { name: "Web Application Pentesting", path: "/services/web-app-security" },
//                   { name: "Mobile App Pentesting", path: "/services/mobile-app-security" },
//                   { name: "Network Pentesting", path: "/services/network-penetration-testing" },
//                   { name: "API Security Testing", path: "/services/api-penetration-testing" },
//                   { name: "Cloud Pentesting", path: "/services/cloud-penetration-testing" },
//                   { name: "IoT Device Pentesting", path: "/services/iot-security-testing" },
//                   { name: "Secure Code Review", path: "/services/secure-code-review" },
                 
//                 ].map((service) => (
//                   <li key={service.name}>
//                     <button
//                       onClick={() => handleNavigation(service.path)}
//                       className="text-gray-300 hover:text-emerald-400 transition-colors font-medium flex items-center group"
//                     >
//                       <div className="w-2 h-2 bg-emerald-400 rounded-full mr-3 group-hover:bg-red-500 transition-colors"></div>
//                       {service.name}
//                     </button>
//                   </li>
//                 ))}
//               </ul>
//             </div>

//             {/* Company Info */}
//             <div>
//               <h3 className="text-lg md:text-xl font-semibold mb-6 pb-3 border-b border-emerald-500/40 flex items-center">
//                 <FileText className="w-5 h-5 mr-2 text-emerald-400" />
//                 Company
//               </h3>
//               <ul className="space-y-4 mb-10">
//                 {[
//                   { name: "About Us", path: "/about/vaptlabs" },
//                   { name: "Our Clients", path: "/about/clients" },
                
//                 ].map((item) => (
//                   <li key={item.name}>
//                     <button
//                       onClick={() => handleNavigation(item.path)}
//                       className="text-gray-300 hover:text-emerald-400 transition-colors font-medium flex items-center group"
//                     >
//                       <div className="w-2 h-2 bg-emerald-400 rounded-full mr-3 group-hover:bg-red-500 transition-colors"></div>
//                       {item.name}
//                     </button>
//                   </li>
//                 ))}
//               </ul>

//               {/* Social Links */}
//               <h3 className="text-lg md:text-xl font-semibold mb-4">Follow Us</h3>
//               <div className="flex space-x-4">
//                 <a
//                   href="https://www.facebook.com/people/VAPTlabs-Cyber-Defense-RASP-solutions/61571086805016/"
//                   target="_blank"
//                   rel="noopener noreferrer"
//                   className="w-10 h-10 bg-emerald-500/10 rounded-full flex items-center justify-center hover:bg-red-500/20 transition-colors"
//                 >
//                   <FaFacebookF />
//                 </a>
//                 <a
//                   href="https://www.linkedin.com/company/vaptlabs/"
//                   target="_blank"
//                   rel="noopener noreferrer"
//                   className="w-10 h-10 bg-emerald-500/10 rounded-full flex items-center justify-center hover:bg-red-500/20 transition-colors"
//                 >
//                   <FaLinkedinIn />
//                 </a>
//                 <a
//                   href="https://www.instagram.com/vaptlabs"
//                   target="_blank"
//                   rel="noopener noreferrer"
//                   className="w-10 h-10 bg-emerald-500/10 rounded-full flex items-center justify-center hover:bg-red-500/20 transition-colors"
//                 >
//                   <FaInstagram />
//                 </a>
//               </div>
//             </div>

//             {/* Location */}
//             <div>
//               <h3 className="text-lg md:text-xl font-semibold mb-6 pb-3 border-b border-emerald-500/40 flex items-center">
//                 <MapPin className="w-5 h-5 mr-2 text-emerald-400" />
//                 Global Presence
//               </h3>
//               <div className="bg-white/5 p-4 rounded-lg">
//                 <p className="font-semibold mb-2 text-emerald-400">BENGALURU</p>
//                 <p className="text-gray-300 text-sm">
//                   18th Cross Rd, Sector 3, HSR Layout, Bengaluru, Karnataka
//                   560102
//                 </p>
//               </div>
//             </div>
//           </div>
       

//           {/* Bottom Section */}
//           <div className="mt-16 pt-10 border-t border-gray-700">
//             <div className="flex flex-col md:flex-row justify-between items-center">
//               <div className="mb-4 md:mb-0 text-gray-400 text-sm">
//                 © {currentYear} VAPTlabs Pentesting Solution. All rights reserved.
//               </div>
//               <div className="flex gap-6 text-gray-400 text-sm">
//                 <button
//                   onClick={() => handleNavigation("/privacy-policy")}
//                   className="hover:text-emerald-400"
//                 >
//                   Privacy Policy
//                 </button>
//                 <button
//                   onClick={() => handleNavigation("/terms-of-service")}
//                   className="hover:text-emerald-400"
//                 >
//                   Terms of Service
//                 </button>
//                 <button
//                   onClick={() => handleNavigation("/compliance/iso-27001")}
//                   className="hover:text-emerald-400"
//                 >
//                   Compliance
//                 </button>
//               </div>
//             </div>
//           </div>
//         </div>
//       </footer>
//     </>
//   );
// };

// export default Footer;



// src/components/Footer.tsx
import React, { useState } from "react";
import { Shield, FileText, MapPin, ArrowUpRight } from "lucide-react";
import { FaFacebookF, FaLinkedinIn, FaInstagram } from "react-icons/fa";
import Loader from "./Loader";

const Footer = () => {
  const [isLoading, setIsLoading] = useState(false);
  const currentYear = new Date().getFullYear();

  const handleNavigation = (path: string) => {
    setIsLoading(true);
    window.location.href = path.startsWith("/") ? path : `/${path}`;
  };

  const redGradient = "linear-gradient(to right, rgb(217, 47, 97), rgb(143, 15, 56))";
  const redGradientTint = "linear-gradient(to right, rgba(217,47,97,0.08), rgba(143,15,56,0.08))";

  return (
    <>
      {isLoading && <Loader text="Loading page..." />}
      <footer className="bg-[#0A0F1F] text-white pt-16 pb-10 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
            <div>
              <div className="flex items-center mb-6">
                <div className="relative inline-flex items-center justify-center rounded-lg bg-white p-2">
                  {/* subtle glow */}
                  <div className="absolute inset-0 rounded-lg bg-white blur-lg opacity-10"></div>
                  <img
                    src="https://vaptlabs.com/src/images/logo-light.png"
                    alt="VAPTlabs"
                    className="relative z-10 h-10 w-auto"
                  />
                </div>
              </div>

              <p
                className="font-semibold mb-6 text-base md:text-lg"
                style={{
                  background: redGradient,
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                }}
              >
                We do not insure! We assure!
              </p>

              <p className="text-gray-300 mb-8 leading-relaxed text-base md:text-lg font-light">
                Enterprise-grade cybersecurity solutions with a hacker&apos;s
                perspective. Protecting digital assets for startups to Fortune
                500 companies.
              </p>

              {/* Contact Email */}
              <div className="mb-8 p-6 rounded-xl" style={{ background: "rgba(255,255,255,0.02)", border: "1px solid rgba(255,255,255,0.06)" }}>
                <h3 className="text-lg md:text-xl font-semibold mb-4 text-white">Get Started</h3>
                <a
                  href="mailto:contact@vaptlabs.com"
                  className="text-white transition-colors text-base md:text-lg font-medium inline-flex items-center group"
                  style={{ background: "transparent" }}
                >
                  <span
                    style={{
                      background: redGradient,
                      WebkitBackgroundClip: "text",
                      WebkitTextFillColor: "transparent",
                    }}
                  >
                    contact@vaptlabs.com
                  </span>
                  <ArrowUpRight
                    size={20}
                    className="ml-2 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform"
                    style={{ color: "white" }}
                  />
                </a>
              </div>
            </div>

            {/* Services */}
            <div>
              <h3 className="text-lg md:text-xl font-semibold mb-6 pb-3 border-b" style={{ borderColor: "rgba(255,255,255,0.08)" }}>
                <span className="flex items-center">
                  <Shield className="w-5 h-5 mr-2" style={{ color: "rgb(217,47,97)" }} />
                  Services
                </span>
              </h3>
              <ul className="space-y-4">
                {[
                  { name: "Web Application Pentesting", path: "/services/web-app-security" },
                  { name: "Mobile App Pentesting", path: "/services/mobile-app-security" },
                  { name: "Network Pentesting", path: "/services/network-penetration-testing" },
                  { name: "API Security Testing", path: "/services/api-penetration-testing" },
                  { name: "Cloud Pentesting", path: "/services/cloud-penetration-testing" },
                  { name: "IoT Device Pentesting", path: "/services/iot-security-testing" },
                  { name: "Secure Code Review", path: "/services/secure-code-review" },
                ].map((service) => (
                  <li key={service.name}>
                    <button
                      onClick={() => handleNavigation(service.path)}
                      className="text-gray-300 hover:text-white transition-colors font-medium flex items-center group"
                    >
                      {/* <div
                        className="w-2 h-2 rounded-full mr-3 transition-colors"
                        style={{
                          background: "rgba(255,255,255,0.06)",
                        }}
                      /> */}
                      <div
          className="w-2 h-2 rounded-full mr-3 transition-all"
          style={{
            background: "linear-gradient(to right, rgb(217, 47, 97), rgb(143, 15, 56))", // default white
          }}
        />
                      <span className="group-hover:text-white" style={{ color: "rgba(255,255,255,0.85)" }}>
                        {service.name}
                      </span>
                    </button>
                  </li>
                ))}
              </ul>
            </div>

            {/* Company Info */}
            <div>
              <h3 className="text-lg md:text-xl font-semibold mb-6 pb-3 border-b" style={{ borderColor: "rgba(255,255,255,0.08)" }}>
                <span className="flex items-center">
                  <FileText className="w-5 h-5 mr-2" style={{ color: "rgb(217,47,97)" }} />
                  Company
                </span>
              </h3>
              {/* <ul className="space-y-4 mb-10">
                {[
                  { name: "About Us", path: "/about/vaptlabs" },
                  { name: "Our Clients", path: "/about/clients" },
                ].map((item) => (
                  <li key={item.name}>
                    <button
                      onClick={() => handleNavigation(item.path)}
                      className="text-gray-300 hover:text-white transition-colors font-medium flex items-center group"
                    >
                     <div
          className="w-2 h-2 rounded-full mr-3 transition-all"
          style={{
            background: "linear-gradient(to right, rgb(217, 47, 97), rgb(143, 15, 56))", // default white
          }}
        />
                      <span className="group-hover:text-white" style={{ color: "rgba(255,255,255,0.85)" }}>
                        {item.name}
                      </span>
                    </button>
                  </li>
                ))}
              </ul> */}



              <ul className="space-y-4 mb-10">
  {[
    { name: "About Us", path: "/about/vaptlabs" },
    { name: "Our Clients", path: "/about/clients" },
    { name: "VAPT Services Brochure", url: "https://ik.imagekit.io/5biqvaptlabsnfbqw/Design%201.pdf?updatedAt=1758474539462", external: true }, // new browser link
  ].map((item) => (
    <li key={item.name}>
      {item.external ? (
        <a
          href={item.url}
          target="_blank"
          rel="noopener noreferrer"
          className="text-gray-300 hover:text-white transition-colors font-medium flex items-center group"
        >
          <div
            className="w-2 h-2 rounded-full mr-3 transition-all"
            style={{
              background:
                "linear-gradient(to right, rgb(217, 47, 97), rgb(143, 15, 56))",
            }}
          />
          <span
            className="group-hover:text-white"
            style={{ color: "rgba(255,255,255,0.85)" }}
          >
            {item.name}
          </span>
        </a>
      ) : (
        <button
          onClick={() => handleNavigation(item.path)}
          className="text-gray-300 hover:text-white transition-colors font-medium flex items-center group"
        >
          <div
            className="w-2 h-2 rounded-full mr-3 transition-all"
            style={{
              background:
                "linear-gradient(to right, rgb(217, 47, 97), rgb(143, 15, 56))",
            }}
          />
          <span
            className="group-hover:text-white"
            style={{ color: "rgba(255,255,255,0.85)" }}
          >
            {item.name}
          </span>
        </button>
      )}
    </li>
  ))}
</ul>

              
              {/* Social Links */}
              <h3 className="text-lg md:text-xl font-semibold mb-4">Follow Us</h3>
              <div className="flex space-x-4">
                <a
                  href="https://www.facebook.com/people/VAPTlabs-Cyber-Defense-RASP-solutions/61571086805016/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full flex items-center justify-center transition-colors"
                  style={{ background: "rgba(217,47,97,0.08)" }}
                >
                  <FaFacebookF style={{ color: "white" }} />
                </a>
                <a
                  href="https://www.linkedin.com/company/vaptlabs/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full flex items-center justify-center transition-colors"
                  style={{ background: "rgba(217,47,97,0.08)" }}
                >
                  <FaLinkedinIn style={{ color: "white" }} />
                </a>
                <a
                  href="https://www.instagram.com/vaptlabs"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full flex items-center justify-center transition-colors"
                  style={{ background: "rgba(217,47,97,0.08)" }}
                >
                  <FaInstagram style={{ color: "white" }} />
                </a>
              </div>
            </div>

            {/* Location */}
            <div>
              <h3 className="text-lg md:text-xl font-semibold mb-6 pb-3 border-b" style={{ borderColor: "rgba(255,255,255,0.08)" }}>
                <span className="flex items-center">
                  <MapPin className="w-5 h-5 mr-2" style={{ color: "rgb(217,47,97)" }} />
                  Global Presence
                </span>
              </h3>
              <div className="bg-white/5 p-4 rounded-lg" style={{ border: "1px solid rgba(217,47,97,0.08)" }}>
                <p
                  className="font-semibold mb-2"
                  style={{
                    background: redGradient,
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                  }}
                >
                  BENGALURU
                </p>
                <p className="text-gray-300 text-sm">
                  18th Cross Rd, Sector 3, HSR Layout, Bengaluru, Karnataka
                  560102
                </p>
              </div>
            </div>
          </div>

          {/* Bottom Section */}
          <div className="mt-16 pt-10 border-t border-gray-700">
            <div className="flex flex-col md:flex-row justify-between items-center">
              <div className="mb-4 md:mb-0 text-gray-400 text-sm">
                © {currentYear} VAPTlabs Pentesting Solution. All rights reserved.
              </div>
              <div className="flex gap-6 text-gray-400 text-sm">
                <button
                  onClick={() => handleNavigation("/privacy-policy")}
                  className="hover:text-white transition-colors"
                >
                  <span style={{ background: redGradient, WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>
                    Privacy Policy
                  </span>
                </button>
                <button
                  onClick={() => handleNavigation("/terms-of-service")}
                  className="hover:text-white transition-colors"
                >
                  <span style={{ background: redGradient, WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>
                    Terms of Service
                  </span>
                </button>
                <button
                  onClick={() => handleNavigation("/compliance/iso-27001")}
                  className="hover:text-white transition-colors"
                >
                  <span style={{ background: redGradient, WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>
                    Compliance
                  </span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
