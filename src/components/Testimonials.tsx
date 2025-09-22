// // src/components/Testimonials.tsx
// import React, { useState } from "react";
// import { ChevronLeft, ChevronRight } from "lucide-react";



//   const testimonials = [
//     {
//       quote: "The team was highly professional and consistently met all deadlines. They went above and beyond by expanding the project scope to address unexpected issues—despite having no obligation to do so. A truly dependable and great team to work with.",
//       name: "Chad Galgay",
//       position: "Chief Information Security Officer",
//       company: "OneShield",
//       image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=300&h=300&q=80"
//     },
//     {
//       quote: "VAPTlabs has efficiently and affordably helped us meet our cybersecurity goals. Their tailored solutions and proactive approach have fortified our defenses, providing peace of mind.",
//       name: "Sarah Johnson",
//       position: "Security Director",
//       company: "SecureFlow",
//       image: "https://images.unsplash.com/photo-1494790108755-2616b612b786?auto=format&fit=crop&w=300&h=300&q=80"
//     },
//     {
//       quote: "The comprehensive penetration testing provided by VAPTlabs uncovered critical vulnerabilities we never knew existed. Their detailed reports and remediation guidance were invaluable.",
//       name: "Michael Chen",
//       position: "Lead Developer",
//       company: "InnovateTech",
//       image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=300&h=300&q=80"
//     }
//   ];
// export default function Testimonials() {
//   const [currentTestimonial, setCurrentTestimonial] = useState(0);

//   const prevTestimonial = () => {
//     setCurrentTestimonial((prev) =>
//       prev === 0 ? testimonials.length - 1 : prev - 1
//     );
//   };

//   const nextTestimonial = () => {
//     setCurrentTestimonial((prev) =>
//       prev === testimonials.length - 1 ? 0 : prev + 1
//     );
//   };

//   return (
//     <section className="py-20 bg-white">
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//         {/* Header */}
//         <div className="flex justify-between items-start mb-16">
//           <div>
//             <p className="text-blue-600 font-semibold mb-4 tracking-wider uppercase">
//               TESTIMONIALS
//             </p>
//             <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
//               What Our Clients Say About Us
//             </h2>
//             <p className="text-lg text-gray-600 max-w-3xl">
//               Read what our clients say about our services. See how VAPTlabs has
//               helped several businesses to keep their digital assets safe!
//             </p>
//           </div>
//           <button className="border-2 border-purple-500 text-purple-600 px-6 py-2 rounded-full hover:bg-purple-500 hover:text-white transition-all duration-300">
//             Read All Reviews
//           </button>
//         </div>

//         {/* Testimonial Slider */}
//         <div className="max-w-7xl mx-auto overflow-hidden">
//           <div className="bg-gradient-to-r from-emerald-500 via-green-600 to-emerald-500 rounded-3xl p-8 text-white relative overflow-hidden">
//             <div
//               className="flex transition-transform duration-500 ease-in-out w-full"
//               style={{ transform: `translateX(-${currentTestimonial * 100}%)` }}
//             >
//               {testimonials.map((testimonial, index) => (
//                 <div
//                   key={index}
//                   className="w-full flex-shrink-0 flex items-center gap-12 min-w-full"
//                 >
//                   {/* Image */}
//                   <div className="flex-shrink-0">
//                     <img
//                       src={testimonial.image}
//                       alt={testimonial.name}
//                       className="w-80 h-80 rounded-2xl object-cover"
//                     />
//                   </div>

//                   {/* Content */}
//                   <div className="flex-1">
//                     <div className="text-6xl mb-6 opacity-50 leading-none">"</div>
//                     <p className="text-xl mb-8 leading-relaxed">
//                       {testimonial.quote}
//                     </p>
//                     <div>
//                       <h4 className="text-2xl font-bold mb-1">
//                         {testimonial.name}
//                       </h4>
//                       <p className="text-lg opacity-90 mb-1">
//                         {testimonial.position}
//                       </p>
//                       <p className="text-base opacity-75">
//                         {testimonial.company}
//                       </p>
//                     </div>
//                   </div>
//                 </div>
//               ))}
//             </div>

//             {/* Navigation */}
//             <div className="absolute bottom-6 right-6 flex space-x-3">
//               <button
//                 onClick={prevTestimonial}
//                 className="w-12 h-12 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-white/30 transition-colors"
//               >
//                 <ChevronLeft className="w-6 h-6" />
//               </button>
//               <button
//                 onClick={nextTestimonial}
//                 className="w-12 h-12 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-white/30 transition-colors"
//               >
//                 <ChevronRight className="w-6 h-6" />
//               </button>
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }



// import React, { useState, useRef } from "react";
// import { ChevronLeft, ChevronRight } from "lucide-react";

// const testimonials = [
//   {
//     quote:
//       "The team was highly professional and consistently met all deadlines. They went above and beyond by expanding the project scope to address unexpected issues—despite having no obligation to do so. A truly dependable and great team to work with.",
//     name: "Chad Galgay",
//     position: "Chief Information Security Officer",
//     company: "OneShield",
//     image:
//       "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=300&h=300&q=80",
//   },
//   {
//     quote:
//       "VAPTlabs has efficiently and affordably helped us meet our cybersecurity goals. Their tailored solutions and proactive approach have fortified our defenses, providing peace of mind.",
//     name: "Sarah Johnson",
//     position: "Security Director",
//     company: "SecureFlow",
//     image:
//       "https://images.unsplash.com/photo-1494790108755-2616b612b786?auto=format&fit=crop&w=300&h=300&q=80",
//   },
//   {
//     quote:
//       "The comprehensive penetration testing provided by VAPTlabs uncovered critical vulnerabilities we never knew existed. Their detailed reports and remediation guidance were invaluable.",
//     name: "Michael Chen",
//     position: "Lead Developer",
//     company: "InnovateTech",
//     image:
//       "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=300&h=300&q=80",
//   },
// ];

// export default function Testimonials() {
//   const [currentTestimonial, setCurrentTestimonial] = useState(0);
//   // touch handlers for swipe on mobile
//   const touchStartX = useRef<number | null>(null);
//   const touchEndX = useRef<number | null>(null);

//   const prevTestimonial = () => {
//     setCurrentTestimonial((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));
//   };

//   const nextTestimonial = () => {
//     setCurrentTestimonial((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1));
//   };

//   const onTouchStart = (e: React.TouchEvent) => {
//     touchStartX.current = e.changedTouches[0].clientX;
//   };

//   const onTouchMove = (e: React.TouchEvent) => {
//     touchEndX.current = e.changedTouches[0].clientX;
//   };

//   const onTouchEnd = () => {
//     if (touchStartX.current == null || touchEndX.current == null) return;
//     const diff = touchStartX.current - touchEndX.current;
//     const threshold = 50; // px
//     if (diff > threshold) {
//       // swiped left
//       nextTestimonial();
//     } else if (diff < -threshold) {
//       // swiped right
//       prevTestimonial();
//     }
//     touchStartX.current = null;
//     touchEndX.current = null;
//   };

//   return (
//     <section className="py-12 md:py-20 bg-white">
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//         {/* Header */}
//         <div className="flex flex-col md:flex-row justify-between items-start mb-10 md:mb-16 gap-6">
//           <div>
//             <p className="text-blue-600 font-semibold mb-3 tracking-wider uppercase">
//               TESTIMONIALS
//             </p>
//             <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900 mb-3">
//               What Our Clients Say About Us
//             </h2>
//             <p className="text-base md:text-lg text-gray-600 max-w-3xl">
//               Read what our clients say about our services. See how VAPTlabs has
//               helped several businesses to keep their digital assets safe!
//             </p>
//           </div>

//         </div>

//         {/* Testimonial Slider */}
//         <div className="overflow-hidden">
//           <div
//             className="bg-gradient-to-r from-emerald-500 via-green-600 to-emerald-500 rounded-3xl p-6 md:p-8 text-white relative overflow-hidden"
//             onTouchStart={onTouchStart}
//             onTouchMove={onTouchMove}
//             onTouchEnd={onTouchEnd}
//           >
//             <div
//               className="flex transition-transform duration-500 ease-in-out w-full"
//               style={{ transform: `translateX(-${currentTestimonial * 100}%)` }}
//             >
//               {testimonials.map((testimonial, index) => (
//                 <div
//                   key={index}
//                   className="w-full flex-shrink-0 flex flex-col md:flex-row items-center gap-6 md:gap-12 min-w-full p-4 md:p-0"
//                 >
//                   {/* Image */}
//                   <div className="flex-shrink-0">
//                     <img
//                       src={testimonial.image}
//                       alt={testimonial.name}
//                       className="w-28 h-28 md:w-64 md:h-64 lg:w-80 lg:h-80 rounded-2xl object-cover mx-auto md:mx-0"
//                     />
//                   </div>

//                   {/* Content */}
//                   <div className="flex-1 text-center md:text-left mt-3 md:mt-0">
//                     <div className="text-5xl md:text-6xl mb-4 opacity-50 leading-none">"</div>
//                     <p className="text-base md:text-xl mb-6 leading-relaxed max-w-3xl mx-auto md:mx-0">
//                       {testimonial.quote}
//                     </p>
//                     <div>
//                       <h4 className="text-lg md:text-2xl font-bold mb-1">
//                         {testimonial.name}
//                       </h4>
//                       <p className="text-sm md:text-lg opacity-90 mb-1">
//                         {testimonial.position}
//                       </p>
//                       <p className="text-sm md:text-base opacity-75">{testimonial.company}</p>
//                     </div>
//                   </div>
//                 </div>
//               ))}
//             </div>

//             {/* Navigation - on mobile show centered controls, on md+ align bottom-right */}
//             <div className="absolute bottom-4 left-0 right-0 flex justify-center md:justify-end md:bottom-6 md:right-6 px-4">
//               <div className="flex space-x-3">
//                 <button
//                   onClick={prevTestimonial}
//                   aria-label="Previous testimonial"
//                   className="w-10 h-10 md:w-12 md:h-12 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-white/30 transition-colors"
//                 >
//                   <ChevronLeft className="w-4 h-4 md:w-6 md:h-6" />
//                 </button>
//                 <button
//                   onClick={nextTestimonial}
//                   aria-label="Next testimonial"
//                   className="w-10 h-10 md:w-12 md:h-12 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-white/30 transition-colors"
//                 >
//                   <ChevronRight className="w-4 h-4 md:w-6 md:h-6" />
//                 </button>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }



// // src/components/Testimonials.tsx
// import React, { useState, useRef, useEffect } from "react";
// import { ChevronLeft, ChevronRight } from "lucide-react";

// const testimonials = [
//   {
//     quote:
//       "The team was highly professional and consistently met all deadlines. They went above and beyond by expanding the project scope to address unexpected issues—despite having no obligation to do so. A truly dependable and great team to work with.",
//     name: "Chad Galgay",
//     position: "Chief Information Security Officer",
//     company: "OneShield",
//     image:
//       "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=600&h=600&q=80",
//   },
//   {
//     quote:
//       "VAPTlabs has efficiently and affordably helped us meet our cybersecurity goals. Their tailored solutions and proactive approach have fortified our defenses, providing peace of mind.",
//     name: "Sarah Johnson",
//     position: "Security Director",
//     company: "SecureFlow",
//     image:
//       "https://images.unsplash.com/photo-1494790108755-2616b612b786?auto=format&fit=crop&w=600&h=600&q=80",
//   },
//   {
//     quote:
//       "The comprehensive penetration testing provided by VAPTlabs uncovered critical vulnerabilities we never knew existed. Their detailed reports and remediation guidance were invaluable.",
//     name: "Michael Chen",
//     position: "Lead Developer",
//     company: "InnovateTech",
//     image:
//       "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=600&h=600&q=80",
//   },
// ];

// export default function Testimonials() {
//   const [currentTestimonial, setCurrentTestimonial] = useState(0);
//   const touchStartX = useRef<number | null>(null);
//   const touchEndX = useRef<number | null>(null);

//   // Optional: keyboard left/right to navigate
//   useEffect(() => {
//     const handler = (e: KeyboardEvent) => {
//       if (e.key === "ArrowLeft") prevTestimonial();
//       if (e.key === "ArrowRight") nextTestimonial();
//     };
//     window.addEventListener("keydown", handler);
//     return () => window.removeEventListener("keydown", handler);
//     // eslint-disable-next-line react-hooks/exhaustive-deps
//   }, []);

//   const prevTestimonial = () => {
//     setCurrentTestimonial((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));
//   };

//   const nextTestimonial = () => {
//     setCurrentTestimonial((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1));
//   };

//   const onTouchStart = (e: React.TouchEvent) => {
//     touchStartX.current = e.changedTouches[0].clientX;
//   };

//   const onTouchMove = (e: React.TouchEvent) => {
//     touchEndX.current = e.changedTouches[0].clientX;
//   };

//   const onTouchEnd = () => {
//     if (touchStartX.current == null || touchEndX.current == null) return;
//     const diff = touchStartX.current - touchEndX.current;
//     const threshold = 50;
//     if (diff > threshold) nextTestimonial();
//     else if (diff < -threshold) prevTestimonial();
//     touchStartX.current = null;
//     touchEndX.current = null;
//   };

//   return (
//     <section className="py-12 md:py-20 bg-white">
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//         {/* Header */}
//         <div className="flex flex-col md:flex-row justify-between items-start mb-10 md:mb-16 gap-6 text-center md:text-left">
//           <div className="w-full md:w-2/3 mx-auto md:mx-0">
//             <p className="text-green-600 font-semibold mb-3 tracking-wider uppercase">
//               TESTIMONIALS
//             </p>
//             <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900 mb-3">
//               What Our Clients Say About Us
//             </h2>
//             <p className="text-base md:text-lg text-gray-600 max-w-3xl">
//               Read what our clients say about our services. See how VAPTlabs has
//               helped several businesses to keep their digital assets safe!
//             </p>
//           </div>
//           <div className="flex-shrink-0 mt-4 md:mt-0">
//             <button className="hidden md:inline-block border-2 border-green-500 text-green-600 px-5 py-2 rounded-full hover:bg-green-500 hover:text-white transition-all duration-300">
//               Read All Reviews
//             </button>
//           </div>
//         </div>

//         {/* Slider container */}
//         <div className="overflow-hidden">
//           {/* Card */}
//           <div
//             onTouchStart={onTouchStart}
//             onTouchMove={onTouchMove}
//             onTouchEnd={onTouchEnd}
//             className="relative"
//           >
//             {/* Sliding track */}
//             <div
//               className="flex transition-transform duration-500 ease-in-out w-full"
//               style={{ transform: `translateX(-${currentTestimonial * 100}%)` }}
//             >
//               {testimonials.map((t, i) => (
//                 <article
//                   key={i}
//                   className="min-w-full px-4 md:px-0 flex justify-center"
//                   aria-hidden={i !== currentTestimonial}
//                 >
//                   {/* Desktop / large screens: horizontal layout */}
//                   <div className="hidden md:flex w-full bg-gradient-to-r from-emerald-500 via-green-600 to-emerald-500 rounded-3xl p-8 gap-10 items-center text-white">
//                     {/* image */}
//                     <div className="flex-shrink-0">
//                       <img
//                         src={t.image}
//                         alt={t.name}
//                         className="w-64 h-64 rounded-2xl object-cover shadow-lg"
//                       />
//                     </div>

//                     {/* content */}
//                     <div className="flex-1">
//                       <div className="text-6xl mb-6 opacity-50 leading-none">"</div>
//                       <p className="text-xl mb-8 leading-relaxed">{t.quote}</p>
//                       <div>
//                         <h4 className="text-2xl font-bold mb-1">{t.name}</h4>
//                         <p className="text-lg opacity-90 mb-1">{t.position}</p>
//                         <p className="text-base opacity-75">{t.company}</p>
//                       </div>
//                     </div>
//                   </div>

//                   {/* Mobile / tablet: centered card with green gradient similar to screenshot */}
//                   <div className="md:hidden w-full bg-gradient-to-r from-green-400 via-green-500 to-green-600 rounded-3xl p-6 text-white flex flex-col items-center text-center">
//                     <div className="self-start ml-3 text-5xl opacity-70">“</div>
//                     <p className="text-base md:text-lg mb-6 leading-relaxed max-w-md">{t.quote}</p>
//                     <div className="mt-2">
//                       <h4 className="text-lg font-bold mb-1">{t.name}</h4>
//                       <p className="text-sm opacity-90 mb-1">{t.position}</p>
//                       <p className="text-sm opacity-75">{t.company}</p>
//                     </div>

//                     {/* arrows over mobile card (bottom-left & bottom-right) */}
//                     <div className="w-full mt-6 relative">
//                       <div className="absolute left-4 bottom-3">
//                         <button
//                           onClick={prevTestimonial}
//                           aria-label="Previous testimonial"
//                           className="w-12 h-12 border-2 border-white rounded-full flex items-center justify-center hover:bg-white hover:text-green-600 transition"
//                         >
//                           <ChevronLeft className="w-6 h-6" />
//                         </button>
//                       </div>
//                       <div className="absolute right-4 bottom-3">
//                         <button
//                           onClick={nextTestimonial}
//                           aria-label="Next testimonial"
//                           className="w-12 h-12 border-2 border-white rounded-full flex items-center justify-center hover:bg-white hover:text-green-600 transition"
//                         >
//                           <ChevronRight className="w-6 h-6" />
//                         </button>
//                       </div>
//                     </div>
//                   </div>
//                 </article>
//               ))}
//             </div>

//             {/* Desktop arrows (bottom-right) */}
//             <div className="hidden md:flex absolute bottom-6 right-6 space-x-3">
//               <button
//                 onClick={prevTestimonial}
//                 aria-label="Previous testimonial"
//                 className="w-12 h-12 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-white/30 transition-colors"
//               >
//                 <ChevronLeft className="w-6 h-6" />
//               </button>
//               <button
//                 onClick={nextTestimonial}
//                 aria-label="Next testimonial"
//                 className="w-12 h-12 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-white/30 transition-colors"
//               >
//                 <ChevronRight className="w-6 h-6" />
//               </button>
//             </div>
//           </div>
//         </div>

//         {/* read reviews button for mobile (desktop already shows hidden button in header) */}
//         <div className="mt-6 md:hidden text-center">
//           <button className="border-2 border-green-500 text-green-600 px-6 py-3 rounded-full font-semibold hover:bg-green-500 hover:text-white transition-all duration-300">
//             Read All Reviews
//           </button>
//         </div>
//       </div>
//     </section>
//   );
// }



// // src/components/Testimonials.tsx
// import React, { useState, useRef, useEffect } from "react";
// import { ChevronLeft, ChevronRight } from "lucide-react";

// const testimonials = [
//   {
//     quote:
//       "The team was highly professional and consistently met all deadlines. They went above and beyond by expanding the project scope to address unexpected issues—despite having no obligation to do so. A truly dependable and great team to work with.",
//     name: "Chad Galgay",
//     position: "Chief Information Security Officer",
//     company: "OneShield",
//     image:
//       "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=600&h=600&q=80",
//   },
//   {
//     quote:
//       "VAPTlabs has efficiently and affordably helped us meet our cybersecurity goals. Their tailored solutions and proactive approach have fortified our defenses, providing peace of mind.",
//     name: "Sarah Johnson",
//     position: "Security Director",
//     company: "SecureFlow",
//     image:
//       "https://images.unsplash.com/photo-1494790108755-2616b612b786?auto=format&fit=crop&w=600&h=600&q=80",
//   },
//   {
//     quote:
//       "The comprehensive penetration testing provided by VAPTlabs uncovered critical vulnerabilities we never knew existed. Their detailed reports and remediation guidance were invaluable.",
//     name: "Michael Chen",
//     position: "Lead Developer",
//     company: "InnovateTech",
//     image:
//       "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=600&h=600&q=80",
//   },
// ];

// export default function Testimonials() {
//   const [currentTestimonial, setCurrentTestimonial] = useState(0);
//   const touchStartX = useRef<number | null>(null);
//   const touchEndX = useRef<number | null>(null);

//   // Keyboard navigation (left/right arrows)
//   useEffect(() => {
//     const handler = (e: KeyboardEvent) => {
//       if (e.key === "ArrowLeft") prevTestimonial();
//       if (e.key === "ArrowRight") nextTestimonial();
//     };
//     window.addEventListener("keydown", handler);
//     return () => window.removeEventListener("keydown", handler);
//   }, []);

//   const prevTestimonial = () => {
//     setCurrentTestimonial((prev) =>
//       prev === 0 ? testimonials.length - 1 : prev - 1
//     );
//   };

//   const nextTestimonial = () => {
//     setCurrentTestimonial((prev) =>
//       prev === testimonials.length - 1 ? 0 : prev + 1
//     );
//   };

//   // Touch swipe (mobile)
//   const onTouchStart = (e: React.TouchEvent) => {
//     touchStartX.current = e.changedTouches[0].clientX;
//   };
//   const onTouchMove = (e: React.TouchEvent) => {
//     touchEndX.current = e.changedTouches[0].clientX;
//   };
//   const onTouchEnd = () => {
//     if (touchStartX.current == null || touchEndX.current == null) return;
//     const diff = touchStartX.current - touchEndX.current;
//     const threshold = 50;
//     if (diff > threshold) nextTestimonial();
//     else if (diff < -threshold) prevTestimonial();
//     touchStartX.current = null;
//     touchEndX.current = null;
//   };

//   return (
//     <section className="py-12 md:py-20 bg-white">
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//         {/* Header */}
//         <div className="flex flex-col md:flex-row justify-between items-start mb-10 md:mb-16 gap-6 text-center md:text-left">
//           <div className="w-full md:w-2/3 mx-auto md:mx-0">
//             <p className="text-green-600 font-semibold mb-3 tracking-wider uppercase">
//               TESTIMONIALS
//             </p>
//             <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900 mb-3">
//               What Our Clients Say About Us
//             </h2>
//             <p className="text-base md:text-lg text-gray-600 max-w-3xl">
//               Read what our clients say about our services. See how VAPTlabs has
//               helped several businesses to keep their digital assets safe!
//             </p>
//           </div>
//           {/* <div className="flex-shrink-0 mt-4 md:mt-0">
//             <button className="hidden md:inline-block border-2 border-green-500 text-green-600 px-5 py-2 rounded-full hover:bg-green-500 hover:text-white transition-all duration-300">
//               Read All Reviews
//             </button>
//           </div> */}
//         </div>

//         {/* Slider */}
//         <div className="overflow-hidden relative">
//           <div
//             className="flex transition-transform duration-500 ease-in-out w-full"
//             style={{ transform: `translateX(-${currentTestimonial * 100}%)` }}
//             onTouchStart={onTouchStart}
//             onTouchMove={onTouchMove}
//             onTouchEnd={onTouchEnd}
//           >
//             {testimonials.map((t, i) => (
//               <article
//                 key={i}
//                 className="min-w-full px-4 md:px-0 flex justify-center"
//                 aria-hidden={i !== currentTestimonial}
//               >
//                 {/* Desktop / Web view */}
//                 <div className="hidden md:flex w-full bg-gradient-to-r from-emerald-500 via-green-600 to-emerald-500 rounded-3xl p-8 gap-10 items-center text-white">
//                   {/* Image */}
//                   <div className="flex-shrink-0">
//                     <img
//                       src={t.image}
//                       alt={t.name}
//                       className="w-64 h-64 rounded-2xl object-cover shadow-lg"
//                     />
//                   </div>
//                   {/* Content */}
//                   <div className="flex-1">
//                     <div className="text-6xl mb-6 opacity-50 leading-none">"</div>
//                     <p className="text-xl mb-8 leading-relaxed">{t.quote}</p>
//                     <div>
//                       <h4 className="text-2xl font-bold mb-1">{t.name}</h4>
//                       <p className="text-lg opacity-90 mb-1">{t.position}</p>
//                       <p className="text-base opacity-75">{t.company}</p>
//                     </div>
//                   </div>
//                 </div>

//                 {/* Mobile / Tablet view */}
//                 <div className="md:hidden w-full bg-gradient-to-r from-green-400 via-green-500 to-green-600 rounded-3xl p-6 text-white flex flex-col items-center text-center relative">
//                   <div className="text-5xl opacity-70 mb-3">“</div>
//                   <p className="text-base md:text-lg mb-6 leading-relaxed max-w-md">
//                     {t.quote}
//                   </p>
//                   {/* Person image */}
//                   <img
//                     src={t.image}
//                     alt={t.name}
//                     className="w-20 h-20 rounded-full object-cover mb-4 border-2 border-white shadow-md"
//                   />
//                   {/* Person info */}
//                   <div className="mt-1">
//                     <h4 className="text-lg font-bold mb-1">{t.name}</h4>
//                     <p className="text-sm opacity-90 mb-1">{t.position}</p>
//                     <p className="text-sm opacity-75">{t.company}</p>
//                   </div>

//                   {/* Mobile arrows */}
//                   <div className="w-full mt-6 relative">
//                     <div className="absolute left-4 bottom-3">
//                       <button
//                         onClick={prevTestimonial}
//                         aria-label="Previous testimonial"
//                         className="w-12 h-12 border-2 border-white rounded-full flex items-center justify-center hover:bg-white hover:text-green-600 transition"
//                       >
//                         <ChevronLeft className="w-6 h-6" />
//                       </button>
//                     </div>
//                     <div className="absolute right-4 bottom-3">
//                       <button
//                         onClick={nextTestimonial}
//                         aria-label="Next testimonial"
//                         className="w-12 h-12 border-2 border-white rounded-full flex items-center justify-center hover:bg-white hover:text-green-600 transition"
//                       >
//                         <ChevronRight className="w-6 h-6" />
//                       </button>
//                     </div>
//                   </div>
//                 </div>
//               </article>
//             ))}
//           </div>

//           {/* Desktop arrows */}
//           <div className="hidden md:flex absolute bottom-6 right-6 space-x-3">
//             <button
//               onClick={prevTestimonial}
//               aria-label="Previous testimonial"
//               className="w-12 h-12 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-white/30 transition-colors"
//             >
//               <ChevronLeft className="w-6 h-6" />
//             </button>
//             <button
//               onClick={nextTestimonial}
//               aria-label="Next testimonial"
//               className="w-12 h-12 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-white/30 transition-colors"
//             >
//               <ChevronRight className="w-6 h-6" />
//             </button>
//           </div>
//         </div>

//         {/* Mobile button */}
//         {/* <div className="mt-6 md:hidden text-center">
//           <button className="border-2 border-green-500 text-green-600 px-6 py-3 rounded-full font-semibold hover:bg-green-500 hover:text-white transition-all duration-300">
//             Read All Reviews
//           </button>
//         </div> */}
//       </div>
//     </section>
//   );
// }


// // src/components/Testimonials.tsx
// import React, { useState, useRef, useEffect } from "react";
// import { ChevronLeft, ChevronRight } from "lucide-react";

// const testimonials = [
//   {
//     quote:
//       "The team was highly professional and consistently met all deadlines. They went above and beyond by expanding the project scope to address unexpected issues—despite having no obligation to do so. A truly dependable and great team to work with.",
//     name: "Chad Galgay",
//     position: "Chief Information Security Officer",
//     company: "OneShield",
//     image:
//       "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=600&h=600&q=80",
//   },
//   {
//     quote:
//       "VAPTlabs has efficiently and affordably helped us meet our cybersecurity goals. Their tailored solutions and proactive approach have fortified our defenses, providing peace of mind.",
//     name: "Sarah Johnson",
//     position: "Security Director",
//     company: "SecureFlow",
//     image:
//       "https://images.unsplash.com/photo-1494790108755-2616b612b786?auto=format&fit=crop&w=600&h=600&q=80",
//   },
//   {
//     quote:
//       "The comprehensive penetration testing provided by VAPTlabs uncovered critical vulnerabilities we never knew existed. Their detailed reports and remediation guidance were invaluable.",
//     name: "Michael Chen",
//     position: "Lead Developer",
//     company: "InnovateTech",
//     image:
//       "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=600&h=600&q=80",
//   },
// ];

// export default function Testimonials() {
//   const [currentTestimonial, setCurrentTestimonial] = useState(0);
//   const touchStartX = useRef<number | null>(null);
//   const touchEndX = useRef<number | null>(null);

//   // Keyboard navigation
//   useEffect(() => {
//     const handler = (e: KeyboardEvent) => {
//       if (e.key === "ArrowLeft") prevTestimonial();
//       if (e.key === "ArrowRight") nextTestimonial();
//     };
//     window.addEventListener("keydown", handler);
//     return () => window.removeEventListener("keydown", handler);
//   }, []);

//   const prevTestimonial = () => {
//     setCurrentTestimonial((prev) =>
//       prev === 0 ? testimonials.length - 1 : prev - 1
//     );
//   };

//   const nextTestimonial = () => {
//     setCurrentTestimonial((prev) =>
//       prev === testimonials.length - 1 ? 0 : prev + 1
//     );
//   };

//   // Swipe for mobile
//   const onTouchStart = (e: React.TouchEvent) => {
//     touchStartX.current = e.changedTouches[0].clientX;
//   };
//   const onTouchMove = (e: React.TouchEvent) => {
//     touchEndX.current = e.changedTouches[0].clientX;
//   };
//   const onTouchEnd = () => {
//     if (touchStartX.current == null || touchEndX.current == null) return;
//     const diff = touchStartX.current - touchEndX.current;
//     const threshold = 50;
//     if (diff > threshold) nextTestimonial();
//     else if (diff < -threshold) prevTestimonial();
//     touchStartX.current = null;
//     touchEndX.current = null;
//   };

//   return (
//     <section className="py-12 md:py-20 bg-white">
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//         {/* Header */}
//         <div className="flex flex-col md:flex-row justify-between items-start mb-10 md:mb-16 gap-6 text-center md:text-left">
//           <div className="w-full md:w-2/3 mx-auto md:mx-0">
//             <p className="text-green-600 font-semibold mb-3 tracking-wider uppercase">
//               TESTIMONIALS
//             </p>
//             <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900 mb-3">
//               What Our Clients Say About Us
//             </h2>
//             <p className="text-base md:text-lg text-gray-600 max-w-3xl">
//               Read what our clients say about our services. See how VAPTlabs has
//               helped several businesses to keep their digital assets safe!
//             </p>
//           </div>
//           {/* <div className="flex-shrink-0 mt-4 md:mt-0">
//             <button className="hidden md:inline-block border-2 border-green-500 text-green-600 px-5 py-2 rounded-full hover:bg-green-500 hover:text-white transition-all duration-300">
//               Read All Reviews
//             </button>
//           </div> */}
//         </div>

//         {/* Slider */}
//         <div className="overflow-hidden relative">
//           <div
//             className="flex transition-transform duration-500 ease-in-out w-full"
//             style={{ transform: `translateX(-${currentTestimonial * 100}%)` }}
//             onTouchStart={onTouchStart}
//             onTouchMove={onTouchMove}
//             onTouchEnd={onTouchEnd}
//           >
//             {testimonials.map((t, i) => (
//               <article
//                 key={i}
//                 className="min-w-full px-4 md:px-0 flex justify-center"
//                 aria-hidden={i !== currentTestimonial}
//               >
//                 {/* Desktop / Web view */}
//                 <div className="hidden md:flex w-full bg-gradient-to-r from-emerald-500 via-green-600 to-emerald-500 rounded-3xl p-8 gap-10 items-center text-white relative">
//                   <div className="flex-shrink-0">
//                     <img
//                       src={t.image}
//                       alt={t.name}
//                       className="w-64 h-64 rounded-2xl object-cover shadow-lg"
//                     />
//                   </div>
//                   <div className="flex-1">
//                     <div className="text-6xl mb-6 opacity-50 leading-none">"</div>
//                     <p className="text-xl mb-8 leading-relaxed">{t.quote}</p>
//                     <div>
//                       <h4 className="text-2xl font-bold mb-1">{t.name}</h4>
//                       <p className="text-lg opacity-90 mb-1">{t.position}</p>
//                       <p className="text-base opacity-75">{t.company}</p>
//                     </div>
//                   </div>
//                 </div>

//                 {/* Mobile / Tablet view */}
//                 <div className="md:hidden w-full bg-gradient-to-r from-green-400 via-green-500 to-green-600 rounded-3xl p-6 text-white flex flex-col items-center text-center relative">
//                   {/* Arrows pinned top-left and bottom-right */}
//                   <button
//                     onClick={prevTestimonial}
//                     aria-label="Previous testimonial"
//                     className="absolute bottom-3 left-3 w-10 h-10 border-2 border-white rounded-full flex items-center justify-center hover:bg-white hover:text-green-600 transition"
//                   >
//                     <ChevronLeft className="w-5 h-5" />
//                   </button>
//                   <button
//                     onClick={nextTestimonial}
//                     aria-label="Next testimonial"
//                     className="absolute bottom-3 right-3 w-10 h-10 border-2 border-white rounded-full flex items-center justify-center hover:bg-white hover:text-green-600 transition"
//                   >
//                     <ChevronRight className="w-5 h-5" />
//                   </button>

//                   <div className="text-5xl opacity-70 mb-3 mt-8">“</div>
//                   <p className="text-base md:text-lg mb-6 leading-relaxed max-w-md">
//                     {t.quote}
//                   </p>
//                   <img
//                     src={t.image}
//                     alt={t.name}
//                     className="w-20 h-20 rounded-full object-cover mb-4 border-2 border-white shadow-md"
//                   />
//                   <div className="mt-1">
//                     <h4 className="text-lg font-bold mb-1">{t.name}</h4>
//                     <p className="text-sm opacity-90 mb-1">{t.position}</p>
//                     <p className="text-sm opacity-75">{t.company}</p>
//                   </div>
//                 </div>
//               </article>
//             ))}
//           </div>

//           {/* Desktop arrows */}
//           <div className="hidden md:flex absolute bottom-6 right-6 space-x-3">
//             <button
//               onClick={prevTestimonial}
//               aria-label="Previous testimonial"
//               className="w-12 h-12 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-white/30 transition-colors"
//             >
//               <ChevronLeft className="w-6 h-6" />
//             </button>
//             <button
//               onClick={nextTestimonial}
//               aria-label="Next testimonial"
//               className="w-12 h-12 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-white/30 transition-colors"
//             >
//               <ChevronRight className="w-6 h-6" />
//             </button>
//           </div>
//         </div>

//         {/* Mobile button */}
//         {/* <div className="mt-6 md:hidden text-center">
//           <button className="border-2 border-green-500 text-green-600 px-6 py-3 rounded-full font-semibold hover:bg-green-500 hover:text-white transition-all duration-300">
//             Read All Reviews
//           </button>
//         </div> */}
//       </div>
//     </section>
//   );
// }



// // src/components/Testimonials.tsx
// import React, { useState, useRef, useEffect } from "react";
// import { ChevronLeft, ChevronRight } from "lucide-react";

// const testimonials = [
//   {
//     quote:
//       "The team was highly professional and consistently met all deadlines. They went above and beyond by expanding the project scope to address unexpected issues—despite having no obligation to do so. A truly dependable and great team to work with.",
//     name: "Pratap Chandana",
//     position: "Co-Founder & Head of Tech",
//     company: "Aurm",
//     image:
//       "https://pub-assets.aurm.in/teamimages%2Fteamimages_People_Card_v2_Pratap.webp",
//   },
//   {
//     quote:
//       "VAPTlabs has efficiently and affordably helped us meet our cybersecurity goals. Their tailored solutions and proactive approach have fortified our defenses, providing peace of mind.",
//     name: "Shreyans Daga",
//     position: "Co-Founde",
//     company: "MyGate",
//     image:
//       "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQhgJGWlfqlr_-jBOUOCqGpGd635fYxnav_KkWmMKMYYa4qHa6_gDPlZ4mrBORbNi8n_ndPBWP1jAs316q5gnJELHr6exm2pdAo8tQ1aRrO4A",
//   },
//   {
//     quote:
//       "The comprehensive penetration testing provided by VAPTlabs uncovered critical vulnerabilities we never knew existed. Their detailed reports and remediation guidance were invaluable.",
//     name: "Rakesh Jain",
//     position: "CTO",
//     company: "PaySquare",
//     image:
//       "https://www.financialexpress.com/wp-content/uploads/2019/09/1-843.jpg?w=310&h=174&crop=1",
//   },
// ];

// export default function Testimonials() {
//   const [currentTestimonial, setCurrentTestimonial] = useState(0);
//   const touchStartX = useRef<number | null>(null);
//   const touchEndX = useRef<number | null>(null);

//   // Keyboard navigation
//   useEffect(() => {

    
//     const handler = (e: KeyboardEvent) => {
//       if (e.key === "ArrowLeft") prevTestimonial();
//       if (e.key === "ArrowRight") nextTestimonial();
//     };
//     window.addEventListener("keydown", handler);
//     return () => window.removeEventListener("keydown", handler);
//   }, []);

//   const prevTestimonial = () => {
//     setCurrentTestimonial((prev) =>
//       prev === 0 ? testimonials.length - 1 : prev - 1
//     );
//   };

//   const nextTestimonial = () => {
//     setCurrentTestimonial((prev) =>
//       prev === testimonials.length - 1 ? 0 : prev + 1
//     );
//   };

//   // Swipe for mobile
//   const onTouchStart = (e: React.TouchEvent) => {
//     touchStartX.current = e.changedTouches[0].clientX;
//   };
//   const onTouchMove = (e: React.TouchEvent) => {
//     touchEndX.current = e.changedTouches[0].clientX;
//   };
//   const onTouchEnd = () => {
//     if (touchStartX.current == null || touchEndX.current == null) return;
//     const diff = touchStartX.current - touchEndX.current;
//     const threshold = 50;
//     if (diff > threshold) nextTestimonial();
//     else if (diff < -threshold) prevTestimonial();
//     touchStartX.current = null;
//     touchEndX.current = null;
//   };

//   return (
//     <section className="py-12 md:py-20 bg-white">
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//         {/* Header */}
//         <div className="flex flex-col md:flex-row justify-between items-start mb-10 md:mb-16 gap-6 text-center md:text-left">
//           <div className="w-full md:w-2/3 mx-auto md:mx-0">
//             <p className="text-green-600 font-semibold mb-3 tracking-wider uppercase">
//               TESTIMONIALS
//             </p>
//             <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900 mb-3">
//               What Our Clients Say About Us
//             </h2>
//             <p className="text-base md:text-lg text-gray-600 max-w-3xl">
//               Read what our clients say about our services. See how VAPTlabs has
//               helped several businesses to keep their digital assets safe!
//             </p>
//           </div>
//         </div>

//         {/* Slider */}
//         <div className="overflow-hidden relative">
//           <div
//             className="flex transition-transform duration-500 ease-in-out w-full"
//             style={{ transform: `translateX(-${currentTestimonial * 100}%)` }}
//             onTouchStart={onTouchStart}
//             onTouchMove={onTouchMove}
//             onTouchEnd={onTouchEnd}
//           >
//             {testimonials.map((t, i) => (
//               <article
//                 key={i}
//                 className="min-w-full px-4 md:px-0 flex justify-center"
//               >
//                 {/* Desktop / Web view */}
//                 <div className="hidden md:flex w-full bg-gradient-to-r from-emerald-500 via-green-600 to-emerald-500 rounded-3xl p-8 gap-10 items-center text-white">
//                   <div className="flex-shrink-0">
//                     <img
//                       src={t.image}
//                       alt={t.name}
//                       className="w-64 h-64 rounded-2xl object-cover shadow-lg"
//                     />
//                   </div>
//                   <div className="flex-1">
//                     <div className="text-6xl mb-6 opacity-50 leading-none">"</div>
//                     <p className="text-xl mb-8 leading-relaxed">{t.quote}</p>
//                     <div>
//                       <h4 className="text-2xl font-bold mb-1">{t.name}</h4>
//                       <p className="text-lg opacity-90 mb-1">{t.position}</p>
//                       <p className="text-base opacity-75">{t.company}</p>
//                     </div>
//                   </div>
//                 </div>

//                 {/* Mobile / Tablet view */}
//                 <div className="md:hidden w-full bg-gradient-to-r from-green-400 via-green-500 to-green-600 rounded-3xl p-6 text-white flex flex-col items-center text-center relative">
//                   <div className="text-5xl opacity-70 mb-3 mt-8">“</div>
//                   <p className="text-base md:text-lg mb-6 leading-relaxed max-w-md">
//                     {t.quote}
//                   </p>
//                   <img
//                     src={t.image}
//                     alt={t.name}
//                     className="w-20 h-20 rounded-full object-cover mb-4 border-2 border-white shadow-md"
//                   />
//                   <div className="mt-1">
//                     <h4 className="text-lg font-bold mb-1">{t.name}</h4>
//                     <p className="text-sm opacity-90 mb-1">{t.position}</p>
//                     <p className="text-sm opacity-75">{t.company}</p>
//                   </div>
//                 </div>
//               </article>
//             ))}
//           </div>

//           {/* Arrows for desktop + mobile (outside track, fixed) */}
//           <div>
//             {/* Desktop arrows (bottom-right) */}
//             <div className="hidden md:flex absolute bottom-6 right-6 space-x-3">
//               <button
//                 onClick={prevTestimonial}
//                 aria-label="Previous testimonial"
//                 className="w-12 h-12 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-white/30 transition-colors"
//               >
//                 <ChevronLeft className="w-6 h-6" />
//               </button>
//               <button
//                 onClick={nextTestimonial}
//                 aria-label="Next testimonial"
//                 className="w-12 h-12 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-white/30 transition-colors"
//               >
//                 <ChevronRight className="w-6 h-6" />
//               </button>
//             </div>

//             {/* Mobile arrows (pinned top-left & bottom-right) */}
//             <button
//               onClick={prevTestimonial}
//               aria-label="Previous testimonial"
//               className="md:hidden absolute bottom-3 left-3 w-10 h-10 border-2 border-white rounded-full flex items-center justify-center hover:bg-white hover:text-green-600 transition"
//             >
//               <ChevronLeft className="w-5 h-5" />
//             </button>
//             <button
//               onClick={nextTestimonial}
//               aria-label="Next testimonial"
//               className="md:hidden absolute bottom-3 right-3 w-10 h-10 border-2 border-white rounded-full flex items-center justify-center hover:bg-white hover:text-green-600 transition"
//             >
//               <ChevronRight className="w-5 h-5" />
//             </button>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }



/*
// src/components/Testimonials.tsx
import React, { useState, useRef, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

const testimonials = [
  {
    quote:
      "The team was highly professional and consistently met all deadlines. They went above and beyond by expanding the project scope to address unexpected issues—despite having no obligation to do so. A truly dependable and great team to work with.",
    name: "Pratap Chandana",
    position: "Co-Founder & Head of Tech",
    company: "Aurm",
    image:
      "https://pub-assets.aurm.in/teamimages%2Fteamimages_People_Card_v2_Pratap.webp",
  },
  {
    quote:
      "VAPTlabs has efficiently and affordably helped us meet our cybersecurity goals. Their tailored solutions and proactive approach have fortified our defenses, providing peace of mind.",
    name: "Shreyans Daga",
    position: "Co-Founde",
    company: "MyGate",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQhgJGWlfqlr_-jBOUOCqGpGd635fYxnav_KkWmMKMYYa4qHa6_gDPlZ4mrBORbNi8n_ndPBWP1jAs316q5gnJELHr6exm2pdAo8tQ1aRrO4A",
  },
  {
    quote:
      "The comprehensive penetration testing provided by VAPTlabs uncovered critical vulnerabilities we never knew existed. Their detailed reports and remediation guidance were invaluable.",
    name: "Rakesh Jain",
    position: "CTO",
    company: "PaySquare",
    image:
      "https://www.financialexpress.com/wp-content/uploads/2019/09/1-843.jpg?w=310&h=174&crop=1",
  },
];

export default function Testimonials() {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);
  const touchStartX = useRef<number | null>(null);
  const touchEndX = useRef<number | null>(null);

  // Auto-slide every 3 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTestimonial((prev) =>
        prev === testimonials.length - 1 ? 0 : prev + 1
      );
    }, 3000);

    return () => clearInterval(interval); // cleanup on unmount
  }, []);

  // Keyboard navigation
  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if (e.key === "ArrowLeft") prevTestimonial();
      if (e.key === "ArrowRight") nextTestimonial();
    };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, []);

  const prevTestimonial = () => {
    setCurrentTestimonial((prev) =>
      prev === 0 ? testimonials.length - 1 : prev - 1
    );
  };

  const nextTestimonial = () => {
    setCurrentTestimonial((prev) =>
      prev === testimonials.length - 1 ? 0 : prev + 1
    );
  };

  // Swipe for mobile
  const onTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.changedTouches[0].clientX;
  };
  const onTouchMove = (e: React.TouchEvent) => {
    touchEndX.current = e.changedTouches[0].clientX;
  };
  const onTouchEnd = () => {
    if (touchStartX.current == null || touchEndX.current == null) return;
    const diff = touchStartX.current - touchEndX.current;
    const threshold = 50;
    if (diff > threshold) nextTestimonial();
    else if (diff < -threshold) prevTestimonial();
    touchStartX.current = null;
    touchEndX.current = null;
  };

  return (
    <section className="py-12 md:py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
       
        <div className="flex flex-col md:flex-row justify-between items-start mb-10 md:mb-16 gap-6 text-center md:text-left">
          <div className="w-full md:w-2/3 mx-auto md:mx-0">
            <p className="text-green-600 font-semibold mb-3 tracking-wider uppercase">
              TESTIMONIALS
            </p>
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900 mb-3">
              What Our Clients Say About Us
            </h2>
            <p className="text-base md:text-lg text-gray-600 max-w-3xl">
              Read what our clients say about our services. See how VAPTlabs has
              helped several businesses to keep their digital assets safe!
            </p>
          </div>
        </div>

       
        <div className="overflow-hidden relative">
          <div
            className="flex transition-transform duration-500 ease-in-out w-full"
            style={{ transform: `translateX(-${currentTestimonial * 100}%)` }}
            onTouchStart={onTouchStart}
            onTouchMove={onTouchMove}
            onTouchEnd={onTouchEnd}
          >
            {testimonials.map((t, i) => (
              <article
                key={i}
                className="min-w-full px-4 md:px-0 flex justify-center"
              >
               
                <div className="hidden md:flex w-full bg-gradient-to-r from-emerald-500 via-green-600 to-emerald-500 rounded-3xl p-8 gap-10 items-center text-white">
                  <div className="flex-shrink-0">
                    <img
                      src={t.image}
                      alt={t.name}
                      className="w-64 h-64 rounded-2xl object-cover shadow-lg"
                    />
                  </div>
                  <div className="flex-1">
                    <div className="text-6xl mb-6 opacity-50 leading-none">"</div>
                    <p className="text-xl mb-8 leading-relaxed">{t.quote}</p>
                    <div>
                      <h4 className="text-2xl font-bold mb-1">{t.name}</h4>
                      <p className="text-lg opacity-90 mb-1">{t.position}</p>
                      <p className="text-base opacity-75">{t.company}</p>
                    </div>
                  </div>
                </div>

              
                <div className="md:hidden w-full bg-gradient-to-r from-green-400 via-green-500 to-green-600 rounded-3xl p-6 text-white flex flex-col items-center text-center relative">
                  <div className="text-5xl opacity-70 mb-3 mt-8">“</div>
                  <p className="text-base md:text-lg mb-6 leading-relaxed max-w-md">
                    {t.quote}
                  </p>
                  <img
                    src={t.image}
                    alt={t.name}
                    className="w-20 h-20 rounded-full object-cover mb-4 border-2 border-white shadow-md"
                  />
                  <div className="mt-1">
                    <h4 className="text-lg font-bold mb-1">{t.name}</h4>
                    <p className="text-sm opacity-90 mb-1">{t.position}</p>
                    <p className="text-sm opacity-75">{t.company}</p>
                  </div>
                </div>
              </article>
            ))}
          </div>

         
          <div>
          
            <div className="hidden md:flex absolute bottom-6 right-6 space-x-3">
              <button
                onClick={prevTestimonial}
                aria-label="Previous testimonial"
                className="w-12 h-12 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-white/30 transition-colors"
              >
                <ChevronLeft className="w-6 h-6" />
              </button>
              <button
                onClick={nextTestimonial}
                aria-label="Next testimonial"
                className="w-12 h-12 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-white/30 transition-colors"
              >
                <ChevronRight className="w-6 h-6" />
              </button>
            </div>

           
            <button
              onClick={prevTestimonial}
              aria-label="Previous testimonial"
              className="md:hidden absolute bottom-3 left-3 w-10 h-10 border-2 border-white rounded-full flex items-center justify-center hover:bg-white hover:text-green-600 transition"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button
              onClick={nextTestimonial}
              aria-label="Next testimonial"
              className="md:hidden absolute bottom-3 right-3 w-10 h-10 border-2 border-white rounded-full flex items-center justify-center hover:bg-white hover:text-green-600 transition"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}


*/
// src/components/Testimonials.tsx

/*

// src/components/Testimonials.tsx
import React, { useEffect, useRef, useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

const testimonials = [
  {
    quote:
      "The team was highly professional and consistently met all deadlines. They went above and beyond by expanding the project scope to address unexpected issues—despite having no obligation to do so. A truly dependable and great team to work with.",
    name: "Pratap Chandana",
    position: "Co-Founder & Head of Tech",
    company: "Aurm",
    image:
      "https://pub-assets.aurm.in/teamimages%2Fteamimages_People_Card_v2_Pratap.webp",
  },
  {
    quote:
      "VAPTlabs has efficiently and affordably helped us meet our cybersecurity goals. Their tailored solutions and proactive approach have fortified our defenses, providing peace of mind.",
    name: "Shreyans Daga",
    position: "Co-Founder",
    company: "MyGate",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQhgJGWlfqlr_-jBOUOCqGpGd635fYxnav_KkWmMKMYYa4qHa6_gDPlZ4mrBORbNi8n_ndPBWP1jAs316q5gnJELHr6exm2pdAo8tQ1aRrO4A",
  },
  {
    quote:
      "The comprehensive penetration testing provided by VAPTlabs uncovered critical vulnerabilities we never knew existed. Their detailed reports and remediation guidance were invaluable.",
    name: "Rakesh Jain",
    position: "CTO",
    company: "PaySquare",
    image:
      "https://www.financialexpress.com/wp-content/uploads/2019/09/1-843.jpg?w=310&h=174&crop=1",
  },
];

export default function Testimonials(): JSX.Element {
  const [current, setCurrent] = useState(0);
  const touchStartX = useRef<number | null>(null);
  const touchEndX = useRef<number | null>(null);
  const autoRef = useRef<number | null>(null);
  const isPaused = useRef(false);
  const total = testimonials.length;

  const next = () => setCurrent((c) => (c === total - 1 ? 0 : c + 1));
  const prev = () => setCurrent((c) => (c === 0 ? total - 1 : c - 1));

  // Auto-slide every 3s; pauses on isPaused flag
  useEffect(() => {
    if (autoRef.current) window.clearInterval(autoRef.current);
    autoRef.current = window.setInterval(() => {
      if (!isPaused.current) next();
    }, 3000);
    return () => {
      if (autoRef.current) window.clearInterval(autoRef.current);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // Pause on hover/touch
  const handleMouseEnter = () => (isPaused.current = true);
  const handleMouseLeave = () => (isPaused.current = false);

  // keyboard nav
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "ArrowLeft") prev();
      if (e.key === "ArrowRight") next();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  // touch handlers
  const onTouchStart = (e: React.TouchEvent) => {
    isPaused.current = true;
    touchStartX.current = e.changedTouches[0].clientX;
  };
  const onTouchMove = (e: React.TouchEvent) => {
    touchEndX.current = e.changedTouches[0].clientX;
  };
  const onTouchEnd = () => {
    isPaused.current = false;
    if (touchStartX.current == null || touchEndX.current == null) return;
    const diff = touchStartX.current - touchEndX.current;
    const threshold = 50;
    if (diff > threshold) next();
    else if (diff < -threshold) prev();
    touchStartX.current = null;
    touchEndX.current = null;
  };

  // red gradient style for name/designation text
  const redTextGradient = {
    background: "linear-gradient(90deg, rgb(217,47,97), rgb(143,15,56))",
    WebkitBackgroundClip: "text" as const,
    backgroundClip: "text" as const,
    color: "transparent",
  };

  return (
    <section className="py-12 md:py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 overflow-hidden">
      
        <div className="flex flex-col md:flex-row justify-between items-start mb-8 md:mb-12 gap-6 text-center md:text-left">
          <div className="w-full md:w-2/3 mx-auto md:mx-0">
            <p className="text-gray-600 font-semibold mb-2 tracking-wider uppercase text-sm">
              TESTIMONIALS
            </p>
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-slate-900 mb-2">
              What Our Clients Say About Us
            </h2>
            <p className="text-sm md:text-base text-slate-600 max-w-3xl">
              Read what our clients say about our services. See how VAPTlabs has
              helped several businesses to keep their digital assets safe!
            </p>
          </div>
        </div>

  
        <div
          className="relative"
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
       
          <div
            className="flex transition-transform duration-700 ease-in-out"
            style={{ transform: `translateX(-${current * 100}%)` }}
            onTouchStart={onTouchStart}
            onTouchMove={onTouchMove}
            onTouchEnd={onTouchEnd}
          >
            {testimonials.map((t, idx) => (
              <article
                key={idx}
                className="min-w-full flex-shrink-0 px-4 md:px-6 lg:px-8 flex justify-center"
                aria-hidden={idx !== current}
              >
              
                <div className="hidden md:flex w-full bg-white border border-gray-100 rounded-2xl shadow-sm overflow-hidden">
                  <div className="w-1/3 p-6 flex items-center justify-center bg-gray-50">
                    <img
                      src={t.image}
                      alt={t.name}
                      className="w-full max-w-xs h-auto rounded-2xl object-cover"
                    />
                  </div>

                  <div className="w-2/3 p-8 flex flex-col justify-between">
                    <div>
                    
                     

                      <blockquote className="text-slate-900 text-lg lg:text-xl leading-snug mb-6">
                        “{t.quote}”
                      </blockquote>
                    </div>

                    <div>
                      <div style={redTextGradient} className="font-bold text-lg md:text-xl">
                        {t.name}
                      </div>
                      <div style={redTextGradient} className="text-sm md:text-base mt-1">
                        {t.position}
                      </div>
                      <div className="text-sm text-slate-500 mt-2">{t.company}</div>
                    </div>
                  </div>
                </div>

             
                <div className="md:hidden w-full bg-white border border-gray-100 rounded-2xl p-6 shadow-sm flex flex-col items-center text-center relative">
                  <img
                    src={t.image}
                    alt={t.name}
                    className="w-24 h-24 rounded-lg object-cover mb-4"
                  />

                  <blockquote className="text-slate-900 text-base leading-relaxed mb-4">
                    “{t.quote}”
                  </blockquote>

                  <div style={redTextGradient} className="font-bold text-base">
                    {t.name}
                  </div>
                  <div style={redTextGradient} className="text-sm mt-1">
                    {t.position}
                  </div>
                  <div className="text-sm text-slate-500 mt-2">{t.company}</div>
                </div>
              </article>
            ))}
          </div>

       
          <div className="hidden md:flex absolute right-6 bottom-6 space-x-3">
            <button
              onClick={() => {
                prev();
                isPaused.current = true;
                setTimeout(() => (isPaused.current = false), 800);
              }}
              aria-label="Previous testimonial"
              className="w-12 h-12 bg-white rounded-full shadow flex items-center justify-center hover:scale-105 transition-transform"
            >
              <ChevronLeft className="w-6 h-6 text-slate-700" />
            </button>
            <button
              onClick={() => {
                next();
                isPaused.current = true;
                setTimeout(() => (isPaused.current = false), 800);
              }}
              aria-label="Next testimonial"
              className="w-12 h-12 bg-white rounded-full shadow flex items-center justify-center hover:scale-105 transition-transform"
            >
              <ChevronRight className="w-6 h-6 text-slate-700" />
            </button>
          </div>

        
          <button
            onClick={() => {
              prev();
              isPaused.current = true;
              setTimeout(() => (isPaused.current = false), 800);
            }}
            className="md:hidden absolute left-3 top-3 z-20 w-10 h-10 bg-white border border-gray-100 rounded-full flex items-center justify-center shadow-sm"
            aria-label="Previous testimonial"
          >
            <ChevronLeft className="w-5 h-5 text-slate-700" />
          </button>

          <button
            onClick={() => {
              next();
              isPaused.current = true;
              setTimeout(() => (isPaused.current = false), 800);
            }}
            className="md:hidden absolute right-3 bottom-3 z-20 w-10 h-10 bg-white border border-gray-100 rounded-full flex items-center justify-center shadow-sm"
            aria-label="Next testimonial"
          >
            <ChevronRight className="w-5 h-5 text-slate-700" />
          </button>
        </div>
      </div>
    </section>
  );
}


*/


// src/components/Testimonials.tsx
import React, { useState, useRef, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

// const testimonials = [
//   {
//     quote:
//       "The team was highly professional and consistently met all deadlines. They went above and beyond by expanding the project scope to address unexpected issues—despite having no obligation to do so. A truly dependable and great team to work with.",
//     name: "Pratap Chandana",
//     position: "Co-Founder & Head of Tech",
//     company: "Aurm",
//     image:
//       "https://pub-assets.aurm.in/teamimages%2Fteamimages_People_Card_v2_Pratap.webp",
//   },
//   {
//     quote:
//       "VAPTlabs has efficiently and affordably helped us meet our cybersecurity goals. Their tailored solutions and proactive approach have fortified our defenses, providing peace of mind.",
//     name: "Shreyans Daga",
//     position: "Co-Founder",
//     company: "MyGate",
//     image:
//       "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQhgJGWlfqlr_-jBOUOCqGpGd635fYxnav_KkWmMKMYYa4qHa6_gDPlZ4mrBORbNi8n_ndPBWP1jAs316q5gnJELHr6exm2pdAo8tQ1aRrO4A",
//   },
//   {
//     quote:
//       "The comprehensive penetration testing provided by VAPTlabs uncovered critical vulnerabilities we never knew existed. Their detailed reports and remediation guidance were invaluable.",
//     name: "Rakesh Jain",
//     position: "CTO",
//     company: "PaySquare",
//     image:
//       "https://www.financialexpress.com/wp-content/uploads/2019/09/1-843.jpg?w=310&h=174&crop=1",
//   },
//   {
//     quote:
//       "The comprehensive penetration testing provided by VAPTlabs uncovered critical vulnerabilities we never knew existed. Their detailed reports and remediation guidance were invaluable.",
//     name: "Siddarth Jain",
//     position: "CTO",
//     company: "DrDroid",
//     image:
//       "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT2G5mGdUNRm_khMITWkhsJqv4qKygkFi8XUQ&s",
//   },
// ];

const testimonials = [
  {
    quote:
      "The team demonstrated exceptional professionalism and reliability, consistently meeting deadlines while exceeding expectations. They even expanded the project scope to tackle unforeseen challenges—without any obligation—showcasing their commitment and integrity. A dependable partner we truly value.",
    name: "Pratap Chandana",
    position: "Co-Founder & Head of Tech",
    company: "Aurm",
    image:
      "https://pub-assets.aurm.in/teamimages%2Fteamimages_People_Card_v2_Pratap.webp",
  },
  {
    quote:
      "VAPTlabs has been instrumental in helping us achieve our cybersecurity objectives with efficiency and cost-effectiveness. Their customized solutions, proactive monitoring, and hands-on support have strengthened our defenses and given us complete peace of mind.",
    name: "Shreyans Daga",
    position: "Co-Founder",
    company: "MyGate",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQhgJGWlfqlr_-jBOUOCqGpGd635fYxnav_KkWmMKMYYa4qHa6_gDPlZ4mrBORbNi8n_ndPBWP1jAs316q5gnJELHr6exm2pdAo8tQ1aRrO4A",
  },
  {
    quote:
      "The penetration testing by VAPTlabs revealed crucial security gaps that had gone unnoticed. Their thorough assessments, clear documentation, and actionable remediation guidance enabled us to fortify our systems effectively and with confidence.",
    name: "Rakesh Jain",
    position: "CTO",
    company: "PaySquare",
    image:
      "https://www.financialexpress.com/wp-content/uploads/2019/09/1-843.jpg?w=310&h=174&crop=1",
  },
  {
    quote:
      "Working with VAPTlabs was an excellent experience. Their expertise helped us identify hidden vulnerabilities and strengthen our application’s security posture. The team’s professionalism, clarity in reporting, and practical recommendations truly stood out.",
    name: "Siddarth Jain",
    position: "CTO",
    company: "DrDroid",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT2G5mGdUNRm_khMITWkhsJqv4qKygkFi8XUQ&s",
  },
];


export default function Testimonials() {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);
  const touchStartX = useRef<number | null>(null);
  const touchEndX = useRef<number | null>(null);

  // Auto-slide every 3 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTestimonial((prev) =>
        prev === testimonials.length - 1 ? 0 : prev + 1
      );
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  // Keyboard navigation
  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if (e.key === "ArrowLeft") prevTestimonial();
      if (e.key === "ArrowRight") nextTestimonial();
    };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, []);

  const prevTestimonial = () => {
    setCurrentTestimonial((prev) =>
      prev === 0 ? testimonials.length - 1 : prev - 1
    );
  };

  const nextTestimonial = () => {
    setCurrentTestimonial((prev) =>
      prev === testimonials.length - 1 ? 0 : prev + 1
    );
  };

  // Swipe for mobile
  const onTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.changedTouches[0].clientX;
  };
  const onTouchMove = (e: React.TouchEvent) => {
    touchEndX.current = e.changedTouches[0].clientX;
  };
  const onTouchEnd = () => {
    if (touchStartX.current == null || touchEndX.current == null) return;
    const diff = touchStartX.current - touchEndX.current;
    const threshold = 50;
    if (diff > threshold) nextTestimonial();
    else if (diff < -threshold) prevTestimonial();
    touchStartX.current = null;
    touchEndX.current = null;
  };

  return (
    <section className="py-12 md:py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="flex flex-col md:flex-row justify-between items-start mb-10 md:mb-16 gap-6 text-center md:text-left">
          <div className="w-full md:w-2/3 mx-auto md:mx-0">
            <p className=" font-semibold mb-3 tracking-wider uppercase" style={{ background: "linear-gradient(to right, rgb(217, 47, 97), rgb(143, 15, 56))",WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", }}>
              TESTIMONIALS
            </p>
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900 mb-3">
              What Our Clients Say About Us
            </h2>
            <p className="text-base md:text-lg text-gray-600 max-w-3xl">
              Read what our clients say about our services. See how VAPTlabs has
              helped several businesses to keep their digital assets safe!
            </p>
          </div>
        </div>

        {/* Slider */}
        <div className="overflow-hidden relative">
          <div
            className="flex transition-transform duration-500 ease-in-out w-full"
            style={{ transform: `translateX(-${currentTestimonial * 100}%)` }}
            onTouchStart={onTouchStart}
            onTouchMove={onTouchMove}
            onTouchEnd={onTouchEnd}
          >
            {testimonials.map((t, i) => (
              <article
                key={i}
                className="min-w-full px-4 md:px-0 flex justify-center"
              >
                {/* Desktop / Web view */}
                <div className="hidden md:flex w-full bg-white rounded-3xl p-8 gap-10 items-center text-black shadow-md">
                  <div className="flex-shrink-0">
                    <img
                      src={t.image}
                      alt={t.name}
                      className="w-64 h-64 rounded-2xl object-cover shadow-lg"
                    />
                  </div>
                  <div className="flex-1">
                    <div className="text-6xl mb-6 opacity-30 leading-none" style={{ background: "linear-gradient(to right, rgb(217, 47, 97), rgb(143, 15, 56))",WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", }}>"</div>
                    <p className="text-xl mb-8 leading-relaxed" >{t.quote}</p>
                    <div>
                      <h4 className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-pink-600 to-red-700 mb-1">
                        {t.name}
                      </h4>
                      <p className="text-lg bg-clip-text text-transparent bg-gradient-to-r from-pink-600 to-red-700 mb-1">
                        {t.position}
                      </p>
                      <p className="text-base opacity-75">{t.company}</p>
                    </div>
                  </div>
                </div>

                {/* Mobile / Tablet view */}
                <div className="md:hidden w-full bg-white rounded-3xl p-6 text-black flex flex-col items-center text-center relative shadow-md">
                  <div className="text-5xl opacity-30 mb-3 mt-8">“</div>
                  <p className="text-base md:text-lg mb-6 leading-relaxed max-w-md">
                    {t.quote}
                  </p>
                  <img
                    src={t.image}
                    alt={t.name}
                    className="w-20 h-20 rounded-full object-cover mb-4 border-2 border-gray-200 shadow-md"
                  />
                  <div className="mt-1">
                    <h4 className="text-lg font-bold bg-clip-text text-transparent bg-gradient-to-r from-pink-600 to-red-700 mb-1">
                      {t.name}
                    </h4>
                    <p className="text-sm bg-clip-text text-transparent bg-gradient-to-r from-pink-600 to-red-700 mb-1">
                      {t.position}
                    </p>
                    <p className="text-sm opacity-75">{t.company}</p>
                  </div>
                </div>
              </article>
            ))}
          </div>

          {/* Arrows */}
          <div>
            {/* Desktop arrows (left & right middle corners) */}
            {/* <button
              onClick={prevTestimonial}
              aria-label="Previous testimonial"
              className="hidden md:flex absolute top-1/2 left-3 -translate-y-1/2 w-12 h-12 bg-gradient-to-r from-pink-600 to-red-700 text-white rounded-full items-center justify-center hover:opacity-90 transition"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>
            <button
              onClick={nextTestimonial}
              aria-label="Next testimonial"
              className="hidden md:flex absolute top-1/2 right-3 -translate-y-1/2 w-12 h-12 bg-gradient-to-r from-pink-600 to-red-700 text-white rounded-full items-center justify-center hover:opacity-90 transition"
            >
              <ChevronRight className="w-6 h-6" />
            </button> */}
{/* <div className="hidden md:flex absolute bottom-6 right-6 space-x-3">
  <button
    onClick={prevTestimonial}
    aria-label="Previous testimonial"
    className="w-12 h-12 bg-gradient-to-r from-pink-600 to-red-700 text-white 
               rounded-full flex items-center justify-center hover:opacity-90 
               transition shadow-lg"
  >
    <ChevronLeft className="w-6 h-6" />
  </button>
  <button
    onClick={nextTestimonial}
    aria-label="Next testimonial"
    className="w-12 h-12 bg-gradient-to-r from-pink-600 to-red-700 text-white 
               rounded-full flex items-center justify-center hover:opacity-90 
               transition shadow-lg"
  >
    <ChevronRight className="w-6 h-6" />
  </button>
</div> */}
              <div className="hidden md:flex absolute bottom-6 right-6 space-x-3">
  <button
    onClick={prevTestimonial}
    aria-label="Previous testimonial"
    className="w-12 h-12 border-2 border-gray-400 bg-white text-black 
               rounded-full flex items-center justify-center 
               hover:bg-gradient-to-r hover:from-pink-600 hover:to-red-700 
               hover:text-white transition"
  >
    <ChevronLeft className="w-6 h-6" />
  </button>
  <button
    onClick={nextTestimonial}
    aria-label="Next testimonial"
    className="w-12 h-12 border-2 border-gray-400 bg-white text-black 
               rounded-full flex items-center justify-center 
               hover:bg-gradient-to-r hover:from-pink-600 hover:to-red-700 
               hover:text-white transition"
  >
    <ChevronRight className="w-6 h-6" />
  </button>
</div>

            
            {/* Mobile arrows (unchanged: bottom corners) */}
            <button
              onClick={prevTestimonial}
              aria-label="Previous testimonial"
              className="md:hidden absolute bottom-3 left-3 w-10 h-10 border-2 border-gray-400 rounded-full flex items-center justify-center hover:bg-gradient-to-r hover:from-pink-600 hover:to-red-700 hover:text-white transition"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button
              onClick={nextTestimonial}
              aria-label="Next testimonial"
              className="md:hidden absolute bottom-3 right-3 w-10 h-10 border-2 border-gray-400 rounded-full flex items-center justify-center hover:bg-gradient-to-r hover:from-pink-600 hover:to-red-700 hover:text-white transition"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
