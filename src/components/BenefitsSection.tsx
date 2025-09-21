// import React from 'react';
// import { Shield, FileText, Lock, Star, Code, Search, ChevronRight } from 'lucide-react';

// interface Benefit {
//   icon: React.ReactNode;
//   title: string;
//   description: string;
// }

// interface BenefitsSectionProps {
//   benefits: Benefit[];
//   title?: string;
// }

// const BenefitsSection: React.FC<BenefitsSectionProps> = ({ 
//   benefits, 
//   title = "Benefits" 
// }) => {
//   return (
//     <div className="py-16 bg-gray-50">
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//         <div className="text-center mb-12">
//           <h2 className="text-3xl font-bold text-gray-900 mb-4">
//             <span className="border-b-4 border-emerald-500 pb-2">{title}</span>
//           </h2>
//         </div>
        
//         <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
//           {benefits.map((benefit, index) => (
//             <div key={index} className="text-center">
//               <div className="relative w-32 h-32 mx-auto mb-6">
//                 <div className="absolute inset-0 border-4 border-dashed border-emerald-400 rounded-full"></div>
//                 <div className="absolute inset-2 bg-white rounded-full flex items-center justify-center">
//                   {benefit.icon}
//                 </div>
//                 <div className="absolute -top-2 -right-2">
//                   <div className="w-8 h-8 bg-emerald-500 rounded-full flex items-center justify-center">
//                     <ChevronRight className="w-4 h-4 text-white" />
//                   </div>
//                 </div>
//               </div>
//               <h3 className="text-xl font-semibold text-gray-900 mb-2">{benefit.title}</h3>
//               <p className="text-gray-600 text-sm">{benefit.description}</p>
//             </div>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default BenefitsSection;


import React from "react";
import { ChevronRight } from "lucide-react";

interface Benefit {
  icon: React.ReactNode;
  title: string;
  description: string;
}

interface BenefitsSectionProps {
  benefits: Benefit[];
  title?: string;
}

const BenefitsSection: React.FC<BenefitsSectionProps> = ({
  benefits,
  title = "Benefits",
}) => {
  return (
    <div className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            {/* underline stays subtle white/transparent but the title text remains dark */}
            {/* <span
              className="pb-2 inline-block"
              style={{
                boxShadow:
                  "inset 0 -6px 0 0 rgba(217,47,97,0.12), inset 0 -10px 0 0 rgba(143,15,56,0.06)",
              }}
            >
              {title}
            </span> */}
            <span
    className="pb-2 inline-block"
    style={{
      backgroundImage: "linear-gradient(90deg, rgb(217,47,97), rgb(143,15,56))",
      backgroundRepeat: "no-repeat",
      backgroundSize: "100% 4px", // underline thickness
      backgroundPosition: "0 100%", // positions underline at the bottom
    }}
  >
    {title}
  </span>
          </h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => (
            <div
              key={index}
              // keep card background white — user requested no gradient fill on card
              className="text-center bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition"
            >
              <div className="relative w-32 h-32 mx-auto mb-6">
                {/* SVG dashed gradient ring (absolute, sits under the inner white circle) */}
                <svg
                  viewBox="0 0 120 120"
                  className="absolute inset-0 w-32 h-32"
                  aria-hidden
                >
                  <defs>
                    <linearGradient id={`rg-${index}`} x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="0%" stopColor="rgb(217,47,97)" />
                      <stop offset="100%" stopColor="rgb(143,15,56)" />
                    </linearGradient>
                  </defs>

                  {/* dashed circle */}
                  <circle
                    cx="60"
                    cy="60"
                    r="50"
                    fill="none"
                    stroke={`url(#rg-${index})`}
                    strokeWidth="6"
                    strokeDasharray="6 6"
                    strokeLinecap="round"
                    opacity="0.9"
                  />
                </svg>

                {/* Inner white circle (keeps icon on white) */}
                <div className="absolute inset-6 bg-white rounded-full flex items-center justify-center z-10">
                  <div className="text-4xl text-gray-800">{benefit.icon}</div>
                </div>

                {/* Top-right gradient badge (arrow) */}
                <div className="absolute -top-2 -right-2 z-20">
                  <div
                    className="w-8 h-8 rounded-full flex items-center justify-center shadow-md"
                    style={{
                      background: "linear-gradient(90deg, rgb(217,47,97), rgb(143,15,56))",
                    }}
                  >
                    <ChevronRight className="w-4 h-4 text-white" />
                  </div>
                </div>
              </div>

              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                {benefit.title}
              </h3>
              <p className="text-gray-600 text-sm">{benefit.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default BenefitsSection;
