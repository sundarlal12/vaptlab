import React from "react";
import GetQuoteSection from "./GetQuoteSection";
import ClientCarousel from "./ClientCarousel";
import Testimonials from "./Testimonials";
import Header from "./Header";
import Footer from "./Footer";

const ContactUs: React.FC = () => {
  return (
    <div className="bg-gradient-to-br from-emerald-50 via-green-50 to-lime-50 min-h-screen flex flex-col">
      {/* Site Header */}
      <Header />

      {/* Hero Section */}
      <div
        className="relative w-full h-64 bg-cover bg-center flex items-center justify-center mt-16" 
        // 🔹 mt-16 ensures hero starts below header
        style={{
          backgroundImage:
            "url('https://t3.ftcdn.net/jpg/05/89/92/50/360_F_589925063_ecQvtkwNAEnB7Nd9ad3hM7GOP0lae694.jpg')",
        }}
      >
        <div className="absolute inset-0 bg-black/40"></div>
        <h1 className="relative text-4xl md:text-5xl font-bold text-white text-center">
          Contact Us
        </h1>
      </div>

      {/* Content Section */}
      <section className="flex-1 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-20">
          {/* Contact Form */}
          <div>
            <h2 className="text-2xl font-bold text-gray-900 mb-8 text-center">
              Get in Touch
            </h2>
            <GetQuoteSection />
          </div>

          {/* Clients Carousel */}
          <div className="bg-white rounded-2xl p-8 shadow-lg">
           
            <ClientCarousel />
          </div>

          {/* Testimonials Carousel */}
          <div className="bg-white rounded-2xl p-8 shadow-lg">
            
            <Testimonials />
          </div>
        </div>
      </section>

      {/* Site Footer */}
      <Footer />
    </div>
  );
};

export default ContactUs;
