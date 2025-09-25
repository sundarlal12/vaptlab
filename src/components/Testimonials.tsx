

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
  // {
  //   quote:
  //     "Working with VAPTlabs was an excellent experience. Their expertise helped us identify hidden vulnerabilities and strengthen our application’s security posture. The team’s professionalism, clarity in reporting, and practical recommendations truly stood out.",
  //   name: "Siddarth Jain",
  //   position: "CTO",
  //   company: "DrDroid",
  //   image:
  //     "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT2G5mGdUNRm_khMITWkhsJqv4qKygkFi8XUQ&s",
  // },
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
