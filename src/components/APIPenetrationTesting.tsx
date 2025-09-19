import React, { useState } from 'react';
import { Shield, FileText, Lock, Star, Code, Search } from 'lucide-react';
import Header from "./Header";
import ContactPopup from './ContactPopup';
import ProcessCarousel from './ProcessCarousel';
import Footer from './Footer';
import APISecurityFAQ from './FAQ/APISecurityFAQ';
import ClientCarousel from "./ClientCarousel";
import ServiceSection from "./ServiceSection";
import BenefitsSection from './BenefitsSection';

const APIPenetrationTesting = () => {
  const [isContactOpen, setIsContactOpen] = useState(false);
  const [activeTab, setActiveTab] = useState<'black' | 'gray' | 'white'>('black');

  // Benefits data for API penetration testing
  const apiBenefits = [
    {
      icon: <Shield className="w-12 h-12 text-gray-800" />,
      title: "API Security Assessment",
      description: "Comprehensive evaluation of REST, GraphQL, and SOAP APIs to identify security vulnerabilities."
    },
    {
      icon: <FileText className="w-12 h-12 text-gray-800" />,
      title: "Authentication Testing",
      description: "Thorough testing of API authentication mechanisms including OAuth, JWT, and API keys."
    },
    {
      icon: <Lock className="w-12 h-12 text-gray-800" />,
      title: "Data Protection",
      description: "Ensure APIs properly protect sensitive data and maintain proper access controls."
    },
    {
      icon: <Star className="w-12 h-12 text-gray-800" />,
      title: "Business Logic Testing",
      description: "Identify flaws in API business logic that could lead to unauthorized access or data manipulation."
    },
    {
      icon: <Code className="w-12 h-12 text-gray-800" />,
      title: "Input Validation",
      description: "Comprehensive testing of API input validation and sanitization mechanisms."
    },
    {
      icon: <Search className="w-12 h-12 text-gray-800" />,
      title: "Rate Limiting & DoS",
      description: "Assessment of API rate limiting, throttling, and denial of service protection mechanisms."
    }
  ];

  // Content for each tab
  const tabContent = {
    black: `Black Box API Testing simulates an external attack on your APIs with no prior knowledge of the API architecture or implementation. This approach helps identify security vulnerabilities from an attacker's perspective, focusing on exposed endpoints, authentication mechanisms, and data validation.`,
    gray: `Gray Box API Testing combines external testing with limited knowledge of the API architecture. This hybrid approach allows evaluation of both external interfaces and internal API logic while maintaining an external perspective, ensuring comprehensive coverage of API-specific vulnerabilities.`,
    white: `White Box API Testing provides full access to API source code, documentation, and internal architecture. This comprehensive approach ensures deep inspection of API security mechanisms, business logic, and data handling processes that may not be detected through external testing alone.`
  };

  return (
    <div className="min-h-screen bg-white">
      <Header />

      {/* Hero Section */}
      <ServiceSection
        title="API Penetration Testing"
        subtitle="Comprehensive security assessment of REST, GraphQL, and SOAP APIs to identify vulnerabilities."
        image="https://images.unsplash.com/photo-1516321318423-f06f85e504b3?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80"
        onContactClick={() => setIsContactOpen(true)}
      />

      {/* Overview Section */}
      <div className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              <span className="border-b-4 border-emerald-500 pb-2">Overview : API Penetration Testing</span>
            </h2>
          </div>
          <div className="max-w-4xl mx-auto text-center">
            <p className="text-lg text-gray-700 leading-relaxed">
              API penetration testing involves comprehensive security assessment of Application Programming Interfaces to identify vulnerabilities that could be exploited by malicious actors. This testing evaluates API authentication, authorization, input validation, business logic, and data handling mechanisms. Our systematic approach helps organizations secure their API endpoints and protect against emerging threats in the API-driven digital landscape.
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
                API Penetration Testing Methodology
              </h2>
              <p className="text-gray-700 mb-8 leading-relaxed">
                VAPTlabs employs a comprehensive methodology for API security assessment that identifies vulnerabilities in REST, GraphQL, SOAP, and other API implementations. Our approach includes thorough testing based on industry frameworks like OWASP API Security Top 10, NIST guidelines, and API security best practices.
              </p>
              
              {/* Tabs */}
              <div className="mb-8 flex gap-4 justify-center md:justify-start">
                <button
                  className={`px-6 py-2 rounded-t-lg font-semibold ${
                    activeTab === 'black'
                      ? 'bg-gray-800 text-white'
                      : 'bg-gray-200 text-gray-600 hover:bg-gray-300'
                  }`}
                  onClick={() => setActiveTab('black')}
                >
                  Black Box
                </button>
                <button
                  className={`px-6 py-2 rounded-t-lg font-semibold ${
                    activeTab === 'gray'
                      ? 'bg-gray-400 text-white'
                      : 'bg-gray-200 text-gray-600 hover:bg-gray-300'
                  }`}
                  onClick={() => setActiveTab('gray')}
                >
                  Gray Box
                </button>
                <button
                  className={`px-6 py-2 rounded-t-lg font-semibold ${
                    activeTab === 'white'
                      ? 'bg-emerald-500 text-white'
                      : 'bg-gray-200 text-gray-600 hover:bg-gray-300'
                  }`}
                  onClick={() => setActiveTab('white')}
                >
                  White Box
                </button>
              </div>

              {/* Tab Content */}
              <div className="bg-gray-50 p-6 rounded-lg shadow-md text-gray-700 leading-relaxed" style={{ marginTop:"-24px"}}>
                {tabContent[activeTab]}
              </div>

              <div className="text-center mt-8">
                <button
                  className="bg-emerald-500 hover:bg-emerald-600 text-white px-8 py-3 rounded-lg font-semibold transition-colors"
                  onClick={() => setIsContactOpen(true)}
                >
                  Get Free Consultation
                </button>
              </div>
            </div>

            {/* Right Image */}
            <div className="relative">
              <div className="bg-gradient-to-br from-emerald-100 to-emerald-200 rounded-lg p-8">
                <img 
                  src="https://images.unsplash.com/photo-1555949963-aa79dcee981c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80" 
                  alt="API Security" 
                  className="rounded-lg shadow-lg"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Benefits Section */}
      <BenefitsSection 
        benefits={apiBenefits}
        title="Benefits"
      />

      <ProcessCarousel title="API Penetration Testing Process" />
      <ClientCarousel />
      <APISecurityFAQ />
      <Footer />

      {/* Contact Popup */}
      <ContactPopup
        isOpen={isContactOpen}
        onClose={() => setIsContactOpen(false)}
      />
    </div>
  );
};

export default APIPenetrationTesting;