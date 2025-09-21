// // src/components/ServiceSection.tsx
// import React from "react";
// import { FileText } from "lucide-react"; // icon

// interface ServiceSectionProps {
//   title: string;
//   subtitle: string;
//   image: string;
//   onContactClick?: () => void;
// }

// const ServiceSection: React.FC<ServiceSectionProps> = ({
//   title,
//   subtitle,
//   image,
//   onContactClick,
// }) => {
//   return (
//     <div className="relative bg-gradient-to-br from-emerald-600 via-teal-600 to-cyan-600 text-white py-20">
//       {/* overlay */}
//       <div className="absolute inset-0 bg-black/20"></div>

//       <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//         <div className="grid lg:grid-cols-2 gap-12 items-center">
//           {/* text */}
//           <div>
//             <h1 className="text-4xl lg:text-5xl font-bold mb-6 text-emerald-400">
//               {title}
//             </h1>
//             <p className="text-xl mb-8 text-gray-100">{subtitle}</p>
//             <div className="flex flex-wrap gap-4">
//               <button
//                 className="bg-emerald-500 hover:bg-emerald-600 text-white px-6 py-3 rounded-lg font-semibold flex items-center gap-2 transition-colors"
//                 onClick={onContactClick}
//               >
//                 <FileText className="w-5 h-5" />
//                 Sample VAPT Report
//               </button>
//             </div>
//           </div>

//           {/* image */}
//           <div className="relative">
//             <img
//               src={image}
//               alt={title}
//               className="rounded-lg shadow-2xl"
//             />
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default ServiceSection;


// // src/components/ServiceSection.tsx
// import React from "react";
// import { FileText } from "lucide-react"; // icon

// interface ServiceSectionProps {
//   title: string;
//   subtitle: string;
//   image: string;
//   onContactClick?: () => void;
// }

// const ServiceSection: React.FC<ServiceSectionProps> = ({
//   title,
//   subtitle,
//   image,
//   onContactClick,
// }) => {
//   return (
//     <div className="relative text-white py-20">
//       {/* Inline styles for split gradient + subtle pattern overlay */}
//       <style>{`
//         /* red brand gradient */
//         .brand-red-left {
//           background: linear-gradient(135deg,
//             rgba(217,47,97,0.98) 0%,
//             rgba(143,15,56,0.98) 55%,
//             rgba(15,23,42,0.98) 100%
//           );
//         }

//         /* faint diagonal pattern (very subtle) */
//         .pattern-overlay::before {
//           content: '';
//           position: absolute;
//           inset: 0;
//           background-image: radial-gradient(rgba(255,255,255,0.02) 1px, transparent 1px);
//           background-size: 18px 18px;
//           opacity: 0.12;
//           pointer-events: none;
//         }

//         /* small glass overlay on right image so image doesn't clash with red */
//         .image-side-overlay::after {
//           content: '';
//           position: absolute;
//           inset: 0;
//           background: linear-gradient(90deg, rgba(0,0,0,0.00) 0%, rgba(0,0,0,0.36) 100%);
//           border-radius: 12px;
//           pointer-events: none;
//         }

//         /* gradient for buttons and small text gradient class */
//         .red-gradient {
//           background: linear-gradient(90deg, rgb(217,47,97), rgb(143,15,56));
//         }
//         .red-text-gradient {
//           background: linear-gradient(90deg, rgb(217,47,97), rgb(143,15,56));
//           -webkit-background-clip: text;
//           -webkit-text-fill-color: transparent;
//         }

//         /* subtle left large watermark text (optional; uncomment in markup to use) */
//       `}</style>

//       <div className="brand-red-left pattern-overlay absolute inset-0" />

//       <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//         <div className="grid lg:grid-cols-2 gap-12 items-center">
//           {/* Text side */}
//           <div>
//             {/* small badge using gradient outline */}
//             <div className="inline-flex items-center space-x-2 px-4 py-2 rounded-full bg-white/6 backdrop-blur-sm mb-6">
//               {/* <FileText className="w-4 h-4 text-white" />
//               <span className="text-sm font-medium text-white/90">RASP Solutions</span> */}
//             </div>

//             <h1 className="text-4xl lg:text-5xl font-extrabold leading-tight mb-6">
//               {/* Keep the big heading white but make a part red-gradient if needed */}
//               <span className="block">{title}</span>
//             </h1>

//             <p className="text-lg mb-8 text-gray-100 max-w-3xl">
//               {subtitle}
//             </p>

//             <div className="flex flex-wrap gap-4">
//               <button
//                 onClick={onContactClick}
//                 className="rounded-lg font-semibold transition-all red-gradient text-white px-6 py-3 flex items-center gap-3 shadow-lg hover:opacity-95"
//               >
//                 <FileText className="w-5 h-5" />
//                 Sample VAPT Report
//               </button>

              
//             </div>
//           </div>

//           {/* Image side */}
//           {/* <div className="relative image-side-overlay flex justify-center">
//             <div className="w-full max-w-md lg:max-w-xl rounded-xl overflow-hidden shadow-2xl transform translate-y-0">
//               <img
//                 src={image}
//                 alt={title}
//                 className="w-full h-auto object-cover block rounded-xl"
//               />
//             </div>
//           </div> */}

//           {/* Image side */}
// <div className="relative flex justify-center">
//   <div className="w-full max-w-md lg:max-w-xl rounded-xl overflow-hidden shadow-2xl relative">
//     {/* image */}
//     <img
//       src={image}
//       alt={title}
//       className="w-full h-auto object-cover block rounded-xl"
//     />

//     {/* 🔹 red gradient overlay */}
//     <div
//       className="absolute inset-0 rounded-xl"
//       style={{
//         background:
//           "linear-gradient(to bottom right, rgba(217,47,97,0.55), rgba(143,15,56,0.55))",
//       }}
//     ></div>
//   </div>
// </div>

          
//         </div>
//       </div>
//     </div>
//   );
// };

// export default ServiceSection;

// src/components/ServiceSection.tsx
import React, { useState } from "react";
import { FileText } from "lucide-react"; // icon

interface ServiceSectionProps {
  title: string;
  subtitle: string;
  image: string;
  onContactClick?: () => void;
}

const ServiceSection: React.FC<ServiceSectionProps> = ({
  title,
  subtitle,
  image,
  onContactClick,
}) => {
  const [loading, setLoading] = useState(true);

  return (
    <div className="relative text-white py-20">
      {/* Inline styles for gradient + shimmer */}
      <style>{`
        .brand-red-left {
          background: linear-gradient(135deg,
            rgba(217,47,97,0.98) 0%,
            rgba(143,15,56,0.98) 55%,
            rgba(15,23,42,0.98) 100%
          );
        }

        .pattern-overlay::before {
          content: '';
          position: absolute;
          inset: 0;
          background-image: radial-gradient(rgba(255,255,255,0.02) 1px, transparent 1px);
          background-size: 18px 18px;
          opacity: 0.12;
          pointer-events: none;
        }

        /* red gradient for buttons */
        .red-gradient {
          background: linear-gradient(90deg, rgb(217,47,97), rgb(143,15,56));
        }

        /* lighter red gradient on hover */
        .red-gradient-hover:hover {
          background: linear-gradient(90deg, rgb(229,72,112), rgb(168,25,66));
        }

        /* shimmer effect */
        .shimmer {
          background: linear-gradient(
            90deg,
            rgba(255,255,255,0.05) 25%,
            rgba(255,255,255,0.15) 50%,
            rgba(255,255,255,0.05) 75%
          );
          background-size: 200% 100%;
          animation: shimmer 1.6s infinite;
        }

        @keyframes shimmer {
          0% { background-position: -200% 0; }
          100% { background-position: 200% 0; }
        }
      `}</style>

      <div className="brand-red-left pattern-overlay absolute inset-0" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Text side */}
          <div>
            <h1 className="text-4xl lg:text-5xl font-extrabold leading-tight mb-6">
              {title}
            </h1>

            <p className="text-lg mb-8 text-gray-100 max-w-3xl">{subtitle}</p>

            <div className="flex flex-wrap gap-4">
              <button
                onClick={onContactClick}
                className="rounded-lg font-semibold transition-all red-gradient red-gradient-hover text-white px-6 py-3 flex items-center gap-3 shadow-lg"
              >
                <FileText className="w-5 h-5" />
                Sample VAPT Report
              </button>
            </div>
          </div>

          {/* Image side with shimmer + overlay */}
          <div className="relative flex justify-center">
            <div className="w-full max-w-md lg:max-w-xl rounded-xl overflow-hidden shadow-2xl relative">
              {loading && (
                <div className="absolute inset-0 shimmer rounded-xl" />
              )}
              <img
                src={image}
                alt={title}
                className={`w-full h-auto object-cover block rounded-xl transition-opacity duration-700 ${
                  loading ? "opacity-0" : "opacity-100"
                }`}
                onLoad={() => setLoading(false)}
              />
              {/* gradient overlay */}
              <div
                className="absolute inset-0 rounded-xl"
                style={{
                  background:
                    "linear-gradient(to bottom right, rgba(217,47,97,0.55), rgba(143,15,56,0.55))",
                }}
              ></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServiceSection;
