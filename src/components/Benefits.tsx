// import React from "react";
// import { Shield } from "lucide-react";

// const Benefits: React.FC = () => {
//   return (
//     <section className="py-20 bg-gradient-to-br from-emerald-50 via-green-50 to-lime-50">
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//         {/* Header */}
//         <div className="text-center mb-16">
//           <div className="inline-flex items-center bg-emerald-100 text-emerald-600 px-4 py-2 rounded-full mb-6">
//             <span className="text-sm font-medium">Benefits</span>
//           </div>
//           <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
//             Simplifying <span className="text-emerald-600">Security</span>
//           </h2>
//         </div>

//         {/* Grid */}
//         <div className="grid lg:grid-cols-3 gap-8">
//           {/* Card 1 */}
//           <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition">
//             <div className="mb-6 rounded-xl overflow-hidden">
//               <video
//                 autoPlay
//                 loop
//                 muted
//                 playsInline
//                 className="w-full h-48 object-cover"
//               >
//                 <source
//                   src="https://cdn.midjourney.com/video/25864736-b147-4332-a932-f9b6223bb78c/0.mp4"
//                   type="video/mp4"
//                 />
//               </video>
//             </div>
//             <h3 className="text-xl font-bold text-gray-900 mb-4">
//               Critical Vulnerability Detection
//             </h3>
//             <p className="text-gray-600">
//               Our approach identifies real, exploitable vulnerabilities,
//               empowering your team to mitigate impactful threats effectively.
//             </p>
//           </div>

//           {/* Card 2 */}
//           <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition">
//             <div className="mb-6 rounded-xl overflow-hidden">
//               <video
//                 autoPlay
//                 loop
//                 muted
//                 playsInline
//                 className="w-full h-48 object-cover"
//               >
//                 <source
//                   src="https://cdn.midjourney.com/video/b0995615-34df-47ae-b095-8585dedf3979/1.mp4"
//                   type="video/mp4"
//                 />
//               </video>
//             </div>
//             <h3 className="text-xl font-bold text-gray-900 mb-4">
//               Specialized Industry Knowledge
//             </h3>
//             <p className="text-gray-600 mb-4">
//               Our security expertise spans Fintech, AI, SaaS, Automotive,
//               eComm, Banking, and Healthtech, delivering tailored solutions.
//             </p>
//             <div className="flex flex-wrap gap-2">
//               {[
//                 "Automotive",
//                 "Ecommerce",
//                 "SaaS",
//                 "Banking",
//                 "AI",
//                 "Fintech",
//                 "Healthcare",
//               ].map((industry) => (
//                 <span
//                   key={industry}
//                   className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-xs"
//                 >
//                   {industry}
//                 </span>
//               ))}
//             </div>
//           </div>

//           {/* Card 3 */}
//           <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition">
//             <div className="mb-6 rounded-xl overflow-hidden">
//               <video
//                 autoPlay
//                 loop
//                 muted
//                 playsInline
//                 className="w-full h-48 object-cover"
//               >
//                 <source
//                   src="https://cdn.midjourney.com/video/c5e39852-c594-4c1c-826f-3e5008258b33/1.mp4"
//                   type="video/mp4"
//                 />
//               </video>
//             </div>
//             <h3 className="text-xl font-bold text-gray-900 mb-4">
//               Regulatory Compliance Assurance
//             </h3>
//             <p className="text-gray-600 mb-4">
//               VAPTlabs ensures compliance with ISO 27001, HIPAA, SOC2, and GDPR
//               through tailored VAPT assessments.
//             </p>
//             <div className="flex flex-wrap gap-3">
//               <div className="flex items-center bg-blue-50 text-blue-700 px-3 py-1 rounded-full text-xs">
//                 <Shield className="w-3 h-3 mr-1" /> HIPAA
//               </div>
//               <div className="flex items-center bg-green-50 text-green-700 px-3 py-1 rounded-full text-xs">
//                 <Shield className="w-3 h-3 mr-1" /> SOC2
//               </div>
//               <div className="flex items-center bg-purple-50 text-purple-700 px-3 py-1 rounded-full text-xs">
//                 <Shield className="w-3 h-3 mr-1" /> ISO 27001
//               </div>
//               <div className="flex items-center bg-yellow-50 text-yellow-700 px-3 py-1 rounded-full text-xs">
//                 <Shield className="w-3 h-3 mr-1" /> GDPR
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Benefits;


import React from "react";
import { Shield } from "lucide-react";

const Benefits: React.FC = () => {
  return (
    <section
      className="py-20"
      style={{
        background: "linear-gradient(to right, rgb(217, 47, 97, 0.05), rgb(143, 15, 56, 0.05))",
      }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <div
            className="inline-flex items-center px-4 py-2 rounded-full mb-6"
            style={{
              background: "linear-gradient(to right, rgb(217, 47, 97, 0.1), rgb(143, 15, 56, 0.1))",
              color: "rgb(217, 47, 97)",
              fontWeight: 600,
            }}
          >
            <span className="text-sm font-medium">Benefits</span>
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Simplifying{" "}
            <span
              style={{
                background: "linear-gradient(to right, rgb(217, 47, 97), rgb(143, 15, 56))",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            >
              Security
            </span>
          </h2>
        </div>

        {/* Grid */}
        <div className="grid lg:grid-cols-3 gap-8">
          {/* Card 1 */}
          <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition">
            <div className="mb-6 rounded-xl overflow-hidden">
              <video
                autoPlay
                loop
                muted
                playsInline
                className="w-full h-48 object-cover"
              >
                <source
                  src="https://cdn.midjourney.com/video/25864736-b147-4332-a932-f9b6223bb78c/0.mp4"
                  type="video/mp4"
                />
              </video>
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-4">
              Critical Vulnerability Detection
            </h3>
            <p className="text-gray-600">
              Our approach identifies real, exploitable vulnerabilities,
              empowering your team to mitigate impactful threats effectively.
            </p>
          </div>

          {/* Card 2 */}
          <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition">
            <div className="mb-6 rounded-xl overflow-hidden">
              <video
                autoPlay
                loop
                muted
                playsInline
                className="w-full h-48 object-cover"
              >
                <source
                  src="https://cdn.midjourney.com/video/b0995615-34df-47ae-b095-8585dedf3979/1.mp4"
                  type="video/mp4"
                />
              </video>
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-4">
              Specialized Industry Knowledge
            </h3>
            <p className="text-gray-600 mb-4">
              Our security expertise spans Fintech, AI, SaaS, Automotive,
              eComm, Banking, and Healthtech, delivering tailored solutions.
            </p>
            <div className="flex flex-wrap gap-2">
              {[
                "Automotive",
                "Ecommerce",
                "SaaS",
                "Banking",
                "AI",
                "Fintech",
                "Healthcare",
              ].map((industry) => (
                <span
                  key={industry}
                  className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-xs"
                >
                  {industry}
                </span>
              ))}
            </div>
          </div>

          {/* Card 3 */}
          <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition">
            <div className="mb-6 rounded-xl overflow-hidden">
              <video
                autoPlay
                loop
                muted
                playsInline
                className="w-full h-48 object-cover"
              >
                <source
                  src="https://cdn.midjourney.com/video/c5e39852-c594-4c1c-826f-3e5008258b33/1.mp4"
                  type="video/mp4"
                />
              </video>
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-4">
              Regulatory Compliance Assurance
            </h3>
            <p className="text-gray-600 mb-4">
              VAPTlabs ensures compliance with ISO 27001, HIPAA, SOC2, and GDPR
              through tailored VAPT assessments.
            </p>
            <div className="flex flex-wrap gap-3">
              <div
                className="flex items-center px-3 py-1 rounded-full text-xs"
                style={{
                  background:
                    "linear-gradient(to right, rgb(217, 47, 97, 0.1), rgb(143, 15, 56, 0.1))",
                  color: "rgb(217, 47, 97)",
                }}
              >
                <Shield className="w-3 h-3 mr-1" /> HIPAA
              </div>
              <div
                className="flex items-center px-3 py-1 rounded-full text-xs"
                style={{
                  background:
                    "linear-gradient(to right, rgb(217, 47, 97, 0.1), rgb(143, 15, 56, 0.1))",
                  color: "rgb(217, 47, 97)",
                }}
              >
                <Shield className="w-3 h-3 mr-1" /> SOC2
              </div>
              <div
                className="flex items-center px-3 py-1 rounded-full text-xs"
                style={{
                  background:
                    "linear-gradient(to right, rgb(217, 47, 97, 0.1), rgb(143, 15, 56, 0.1))",
                  color: "rgb(217, 47, 97)",
                }}
              >
                <Shield className="w-3 h-3 mr-1" /> ISO 27001
              </div>
              <div
                className="flex items-center px-3 py-1 rounded-full text-xs"
                style={{
                  background:
                    "linear-gradient(to right, rgb(217, 47, 97, 0.1), rgb(143, 15, 56, 0.1))",
                  color: "rgb(217, 47, 97)",
                }}
              >
                <Shield className="w-3 h-3 mr-1" /> GDPR
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Benefits;
