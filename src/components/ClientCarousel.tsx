// // src/components/ClientCarousel.tsx
// import React, { useEffect, useState } from "react";

// const clientLogos = [
//   { 
//     name: "Blinkit", 
//     src: "https://vaptlabs.com/src/images/blinkit1.svg" 
//   },
//   { 
//     name: "OYO", 
//     src: "https://vaptlabs.com/src/images/oyo1.png" 
//   },
//   { 
//     name: "BigBasket", 
//     src: "https://vaptlabs.com/src/images/bb1.png" 
//   },
//   { 
//     name: "MyGate", 
//     src: "https://vaptlabs.com/src/images/MyGate1.png" 
//   },
//   { 
//     name: "PaySquare", 
//     src: "https://vaptlabs.com/src/images/paysquare.png" 
//   }
// ];

// const ClientCarousel: React.FC = () => {
//   const [currentClientSlide, setCurrentClientSlide] = useState(0);

//   useEffect(() => {
//     const interval = setInterval(() => {
//       setCurrentClientSlide((prev) => (prev + 1) % clientLogos.length);
//     }, 2500); // Slide every 2.5s
//     return () => clearInterval(interval);
//   }, []);

//   return (
//     <section className="py-16 bg-white">
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//         <p className="text-center text-gray-500 mb-12 text-lg">
//  Securing leaders and startups alike
//         </p>
//         <div className="relative overflow-hidden">
//           <div
//             className="flex transition-transform duration-1000 ease-in-out"
//             style={{ transform: `translateX(-${currentClientSlide * 20}%)` }}
//           >
//             {[...clientLogos, ...clientLogos].map((logo, index) => (
//               <div
//                 key={index}
//                 className="flex-shrink-0 w-1/5 flex items-center justify-center px-8"
//               >
//                 <img
//                   src={logo.src}
//                   alt={logo.name}
//                   className="h-16 w-auto object-contain opacity-60 hover:opacity-100 transition-opacity duration-300"
//                 />
//               </div>
//             ))}
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default ClientCarousel;



// // src/components/ClientCarousel.tsx
// import React from "react";

// const clientLogos = [
//   { name: "Blinkit", src: "https://vaptlabs.com/src/images/blinkit1.svg" },
//   { name: "OYO", src: "https://vaptlabs.com/src/images/oyo1.png" },
//   { name: "BigBasket", src: "https://vaptlabs.com/src/images/bb1.png" },
//   { name: "MyGate", src: "https://vaptlabs.com/src/images/MyGate1.png" },
//   { name: "PaySquare", src: "https://vaptlabs.com/src/images/paysquare.png" }
// ];

// const ClientCarousel: React.FC = () => {
//   // Duplicate the logos to create a seamless loop
//   const logos = [...clientLogos, ...clientLogos];

//   return (
//     <section className="py-12 bg-white">
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//         <p className="text-center text-gray-500 mb-8 text-lg">Securing leaders and startups alike</p>

//         <div className="relative overflow-hidden">
//           {/* style block for marquee animation */}
//           <style>{`
//             .marquee-track {
//               display: flex;
//               align-items: center;
//               gap: 1.25rem; /* consistent small gap between logos */
//               will-change: transform;
//               /* animation is applied below */
//             }
//             @keyframes marquee {
//               from { transform: translateX(0); }
//               to { transform: translateX(-50%); } /* shift by half because we duplicated the list */
//             }
//             /* Desktop speed */
//             .marquee-track.animate {
//               animation: marquee 20s linear infinite;
//             }
//             /* Slightly faster on tablet */
//             @media (max-width: 1024px) {
//               .marquee-track.animate { animation-duration: 16s; }
//             }
//             /* Faster on mobile */
//             @media (max-width: 640px) {
//               .marquee-track.animate { animation-duration: 12s; }
//             }
//             /* Pause on hover/touch */
//             .marquee-wrap:hover .marquee-track.animate,
//             .marquee-wrap:active .marquee-track.animate {
//               animation-play-state: paused;
//             }
//           `}</style>

//           <div className="marquee-wrap">
//             <div
//               className="marquee-track animate"
//               style={{
//                 // Ensure the track uses transform-based animation and repeats (duplicate list handles seamlessness)
//                 // Note: we don't set width here; flex + duplication keeps content flowing correctly.
//               }}
//             >
//               {logos.map((logo, idx) => (
//                 <div
//                   key={`${logo.name}-${idx}`}
//                   className="flex-shrink-0 flex items-center justify-center px-2"
//                   aria-hidden={idx >= clientLogos.length ? "true" : "false"}
//                 >
//                   <img
//                     src={logo.src}
//                     alt={logo.name}
//                     className={`
//                       object-contain
//                       block
//                       /* responsive height: mobile -> tablet -> desktop */
//                       h-12 sm:h-16 md:h-20
//                       /* slightly increased size on very large screens */
//                       lg:h-24
//                       /* subtle opacity & transition on hover */
//                       opacity-80 hover:opacity-100 transition-opacity duration-300
//                       /* add small shadow for better visibility on pale backgrounds */
//                       drop-shadow-sm
//                     `}
//                     style={{
//                       /* increase logo width slightly by scaling image */
//                       maxWidth: 160,
//                     }}
//                   />
//                 </div>
//               ))}
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default ClientCarousel;

/*
// src/components/ClientCarousel.tsx
import React from "react";

const clientLogos = [
    { name: "PaySquare", src: "https://vaptlabs.com/src/images/paysquare.png" },
   { name: "MyGate", src: "https://vaptlabs.com/src/images/MyGate1.png" },
  { name: "Aurm", src: "https://aurm.in/static/media/Aurm_Logo.83cb04327421fb628f30593393d1102c.svg" },

  { name: "Blinkit", src: "https://vaptlabs.com/src/images/blinkit1.svg" },
  { name: "OYO", src: "https://vaptlabs.com/src/images/oyo1.png" },
  { name: "BigBasket", src: "https://vaptlabs.com/src/images/bb1.png" },

  
];

const ClientCarousel: React.FC = () => {
  const logos = [...clientLogos, ...clientLogos]; // duplicated for infinite scroll

  return (
    <section className="py-12 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <p className="text-center text-gray-500 mb-8 text-lg">
          Securing leaders and startups alike
        </p>

        <div className="relative overflow-hidden">
          <style>{`
            .marquee-track {
              display: flex;
              align-items: center;
              gap: 1.5rem;
              will-change: transform;
            }
            @keyframes marquee {
              from { transform: translateX(0); }
              to { transform: translateX(-50%); }
            }
      
            .marquee-track.animate {
              animation: marquee 8s linear infinite;
            }
            @media (max-width: 1024px) {
              .marquee-track.animate { animation-duration: 6s; }
            }
            @media (max-width: 640px) {
              .marquee-track.animate { animation-duration: 5s; }
            }
           
          `}</style>

          <div className="marquee-wrap">
            <div className="marquee-track animate">
              {logos.map((logo, idx) => (
                <div
                  key={`${logo.name}-${idx}`}
                  className="flex-shrink-0 flex items-center justify-center px-2"
                >
                  <img
                    src={logo.src}
                    alt={logo.name}
                    className="object-contain block
                      h-14 sm:h-10 md:h-10 lg:h-14
                      opacity-80 hover:opacity-100 transition-opacity duration-300"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ClientCarousel;
*/

/*
// src/components/ClientCarousel.tsx
import React from "react";

const clientLogos = [
  { name: "PaySquare", src: "https://vaptlabs.com/src/images/paysquare.png" },
  { name: "MyGate", src: "https://vaptlabs.com/src/images/MyGate1.png" },
  { name: "Aurm", src: "https://aurm.in/static/media/Aurm_Logo.83cb04327421fb628f30593393d1102c.svg" },
  { name: "Blinkit", src: "https://vaptlabs.com/src/images/blinkit1.svg" },
  { name: "OYO", src: "https://vaptlabs.com/src/images/oyo1.png" },
  { name: "BigBasket", src: "https://vaptlabs.com/src/images/bb1.png" },
];

const duplicated = [...clientLogos, ...clientLogos];

const ClientCarousel: React.FC = () => {
  return (
    <section className="py-12 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <p className="text-center text-gray-500 mb-8 text-lg">
          Securing leaders and startups alike
        </p>

        <div className="space-y-10 relative">
       
          <div className="pointer-events-none absolute top-0 left-0 h-full w-24 bg-gradient-to-r from-white to-transparent z-20"></div>
          <div className="pointer-events-none absolute top-0 right-0 h-full w-24 bg-gradient-to-l from-white to-transparent z-20"></div>

          <style>{`
            .marquee-row {
              display: flex;
              gap: 3rem; 
              align-items: center;
              will-change: transform;
            }

            @keyframes marquee-left {
              from { transform: translateX(0); }
              to { transform: translateX(-50%); }
            }
            @keyframes marquee-right {
              from { transform: translateX(-50%); }
              to { transform: translateX(0); }
            }

            .marquee-left {
              animation: marquee-left 12s linear infinite;
            }
            .marquee-right {
              animation: marquee-right 14s linear infinite;
            }

            @media (max-width: 1024px) {
              .marquee-left { animation-duration: 10s; }
              .marquee-right { animation-duration: 12s; }
            }
            @media (max-width: 640px) {
              .marquee-left { animation-duration: 8s; }
              .marquee-right { animation-duration: 10s; }
            }
          `}</style>

     
          <div className="overflow-hidden">
            <div
              className="marquee-row marquee-left"
              style={{ width: "max-content" }}
            >
              {duplicated.map((logo, idx) => (
                <div
                  key={`r1-${logo.name}-${idx}`}
                  className="flex items-center justify-center flex-shrink-0"
                  style={{ minWidth: 160 }}
                >
                  <img
                    src={logo.src}
                    alt={logo.name}
                    className="object-contain block
                      h-20 sm:h-14 md:h-18 lg:h-22
                      opacity-85 hover:opacity-100 transition-opacity duration-300"
                  />
                </div>
              ))}
            </div>
          </div>


          <div className="overflow-hidden">
            <div
              className="marquee-row marquee-right"
              style={{ width: "max-content" }}
            >
              {duplicated.map((logo, idx) => (
                <div
                  key={`r2-${logo.name}-${idx}`}
                  className="flex items-center justify-center flex-shrink-0"
                  style={{ minWidth: 160 }}
                >
                  <img
                    src={logo.src}
                    alt={logo.name}
                    className="object-contain block
                     h-20 sm:h-14 md:h-18 lg:h-22
                      opacity-80 hover:opacity-100 transition-opacity duration-300"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ClientCarousel;


*/

/*
// src/components/ClientCarousel.tsx
import React from "react";

const clientLogos = [
  { name: "PaySquare", src: "https://vaptlabs.com/src/images/paysquare.png" },
  { name: "MyGate", src: "https://vaptlabs.com/src/images/MyGate1.png" },
  { name: "Aurm", src: "https://aurm.in/static/media/Aurm_Logo.83cb04327421fb628f30593393d1102c.svg" },
  { name: "Blinkit", src: "https://vaptlabs.com/src/images/blinkit1.svg" },
  { name: "OYO", src: "https://vaptlabs.com/src/images/oyo1.png" },
  
  { name: "BigBasket", src: "https://vaptlabs.com/src/images/bb1.png" },
];

const duplicated = [...clientLogos, ...clientLogos];

const ClientCarousel: React.FC = () => {
  return (
    <section className="py-12 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <p className="text-center text-gray-500 mb-8 text-lg">
         <strong> Securing leaders and startups alike</strong>
        </p>

        <div className="space-y-8 relative">
   
          <div className="pointer-events-none absolute top-0 left-0 h-full w-12 sm:w-16 md:w-20 bg-gradient-to-r from-white to-transparent z-20" />
          <div className="pointer-events-none absolute top-0 right-0 h-full w-12 sm:w-16 md:w-20 bg-gradient-to-l from-white to-transparent z-20" />

          <style>{`
            .marquee-row {
              display: flex;
              align-items: center;
              will-change: transform;
              gap: 1rem; 
            }

            .logo-item { 
              min-width: 100px; 
              display:flex; 
              align-items:center; 
              justify-content:center; 
              padding: 0 0.25rem; 
            }
            @media (min-width: 640px) { .logo-item { min-width: 110px; } }
            @media (min-width: 1024px) { .logo-item { min-width: 120px; } }

            @keyframes marquee-left {
              from { transform: translateX(0%); }
              to { transform: translateX(-50%); }
            }
            @keyframes marquee-right {
              from { transform: translateX(-50%); }
              to { transform: translateX(0%); }
            }

            .marquee-left { animation: marquee-left 10s linear infinite; }
            .marquee-right { animation: marquee-right 12s linear infinite; }

            @media (max-width: 640px) {
              .marquee-row { gap: 0.5rem; }
              .marquee-left { animation-duration: 7s; }
              .marquee-right { animation-duration: 8.5s; }
            }
            @media (min-width: 641px) and (max-width: 1023px) {
              .marquee-row { gap: 0.75rem; }
              .marquee-left { animation-duration: 9s; }
              .marquee-right { animation-duration: 10.5s; }
            }
          `}</style>

       
          <div className="overflow-hidden">
            <div className="marquee-row marquee-left" style={{ width: "max-content" }}>
              {duplicated.map((logo, idx) => (
                <div key={`r1-${logo.name}-${idx}`} className="logo-item flex-shrink-0">
                  <img
                    src={logo.src}
                    alt={logo.name}
                    className="object-contain block
                      h-8 sm:h-10 md:h-12 lg:h-14
                      opacity-90 hover:opacity-100 transition-opacity duration-300"
                  />
                </div>
              ))}
            </div>
          </div>

      
          
          <div className="overflow-hidden">
            <div className="marquee-row marquee-right" style={{ width: "max-content" }}>
              {duplicated.map((logo, idx) => (
                <div key={`r2-${logo.name}-${idx}`} className="logo-item flex-shrink-0">
                  <img
                    src={logo.src}
                    alt={logo.name}
                    className="object-contain block
                      h-8 sm:h-10 md:h-12 lg:h-14
                      opacity-85 hover:opacity-100 transition-opacity duration-300"
                  />
                </div>
              ))}
            </div>
          </div>
    
        </div>
      </div>
    </section>
  );
};

export default ClientCarousel;


*/


// src/components/ClientCarousel.tsx
import React from "react";

const clientLogos = [
  { name: "PaySquare", src: "https://vaptlabs.com/src/images/paysquare.png" },
  { name: "MyGate", src: "https://vaptlabs.com/src/images/MyGate1.png" },
  { name: "Aurm", src: "https://aurm.in/static/media/Aurm_Logo.83cb04327421fb628f30593393d1102c.svg" },
  { name: "Blinkit", src: "https://vaptlabs.com/src/images/blinkit1.svg" },
  { name: "OYO", src: "https://vaptlabs.com/src/images/oyo1.png" },
  { name: "BigBasket", src: "https://vaptlabs.com/src/images/bb1.png" },
];

// triple duplication
const duplicated = [...clientLogos, ...clientLogos, ...clientLogos];

const ClientCarousel: React.FC = () => {
  return (
    <section className="py-10 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <p className="text-center text-gray-500 mb-8 text-lg">
          Securing leaders and startups alike
        </p>

        <div className="relative overflow-hidden">
          {/* gradient fade edges */}
          <div
            className="pointer-events-none absolute inset-y-0 left-0 w-16 md:w-24 z-30"
            style={{ background: "linear-gradient(90deg, #ffffff 0%, rgba(255,255,255,0) 100%)" }}
          />
          <div
            className="pointer-events-none absolute inset-y-0 right-0 w-16 md:w-24 z-30"
            style={{ background: "linear-gradient(270deg, #ffffff 0%, rgba(255,255,255,0) 100%)" }}
          />

          <style>{`
            .marquee-row {
              display:flex;
              align-items:center;
              gap: 0.6rem;
              will-change: transform;
              flex-wrap: nowrap;
            }

            .logo-item {
              display:flex;
              align-items:center;
              justify-content:center;
              padding: 0 6px;
              flex: 0 0 auto;
            }

            .logo-img {
              height: 36px;
              width: auto;
              display:block;
              filter: grayscale(100%) brightness(0.9);
              opacity: 0.8;
              transition: all 0.3s ease;
            }
            .logo-img:hover {
              filter: none;
              opacity: 1;
              transform: scale(1.05);
            }

            @media (min-width: 640px) { .logo-img { height: 44px; } }
            @media (min-width: 1024px) { .logo-img { height: 52px; } }

            /* animations */
            @keyframes marquee-left {
              0% { transform: translateX(0); }
              100% { transform: translateX(-33.333333%); }
            }
            @keyframes marquee-right {
              0% { transform: translateX(-33.333333%); }
              100% { transform: translateX(0); }
            }

            .marquee-left { animation: marquee-left 12s linear infinite; }
            .marquee-right { animation: marquee-right 14s linear infinite; }

            @media (max-width: 1024px) {
              .marquee-left { animation-duration: 10s; }
              .marquee-right { animation-duration: 12s; }
            }
            @media (max-width: 640px) {
              .marquee-left { animation-duration: 8s; }
              .marquee-right { animation-duration: 10s; }
            }
          `}</style>

          {/* Row 1 */}
          <div className="overflow-hidden mb-6">
            <div className="marquee-row marquee-left" style={{ width: "max-content" }}>
              {duplicated.map((logo, idx) => (
                <div key={`r1-${logo.name}-${idx}`} className="logo-item">
                  <img src={logo.src} alt={logo.name} className="logo-img" />
                </div>
              ))}
            </div>
          </div>

          {/* 
          <div className="overflow-hidden">
            <div className="marquee-row marquee-right" style={{ width: "max-content" }}>
              {duplicated.map((logo, idx) => (
                <div key={`r2-${logo.name}-${idx}`} className="logo-item">
                  <img src={logo.src} alt={logo.name} className="logo-img" />
                </div>
              ))}
            </div>
          </div>
       */}
        </div>
      </div>
    </section>
  );
};

export default ClientCarousel;
