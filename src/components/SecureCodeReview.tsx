import React, { useState } from 'react';
import { Shield, FileText, Lock, Star, Code, Search } from 'lucide-react';
import Header from "./Header";
import ContactPopup from './ContactPopup';
import ProcessCarousel from './ProcessCarousel';
import Footer from './Footer';
import SecureCodeReviewFAQ from './FAQ/SecureCodeReviewFAQ';
import ClientCarousel from "./ClientCarousel";
import ServiceSection from "./ServiceSection";
import BenefitsSection from './BenefitsSection';

const SecureCodeReview = () => {
  const [isContactOpen, setIsContactOpen] = useState(false);
  const [activeTab, setActiveTab] = useState<'black' | 'gray' | 'white'>('black');

  // Benefits data for secure code review
  const codeReviewBenefits = [
    {
      icon: <Shield className="w-12 h-12 text-gray-800" />,
      title: "Code Security Assessment",
      description: "Comprehensive analysis of source code to identify security vulnerabilities and coding flaws."
    },
    {
      icon: <FileText className="w-12 h-12 text-gray-800" />,
      title: "Compliance Validation",
      description: "Ensure code meets security standards and regulatory compliance requirements."
    },
    {
      icon: <Lock className="w-12 h-12 text-gray-800" />,
      title: "Vulnerability Detection",
      description: "Identify security weaknesses in code before they reach production environments."
    },
    {
      icon: <Star className="w-12 h-12 text-gray-800" />,
      title: "Best Practices Implementation",
      description: "Guidance on implementing secure coding practices and industry standards."
    },
    {
      icon: <Code className="w-12 h-12 text-gray-800" />,
      title: "Code Quality Improvement",
      description: "Enhance overall code quality through security-focused review processes."
    },
    {
      icon: <Search className="w-12 h-12 text-gray-800" />,
      title: "Static Analysis",
      description: "Advanced static code analysis to detect security issues and potential exploits."
    }
  ];

  // Content for each tab
  const tabContent = {
    black: `The initial step in the secure code review process is to outline the review's objectives. Identifying key areas of concern and the types of vulnerabilities to detect will set the direction for a focused and effective review. Understanding the application's architecture and functionality is essential, as it will guide the review process. Defining the review's scope is also crucial, as it helps prioritize which parts of the code need attention.`,
    gray: `The execution stage of a code review involves manually examining source code or using automated tools to identify security vulnerabilities, such as injection attacks and cross-site scripting. The security team focuses on detecting these flaws and understanding their root causes to develop effective mitigation strategies and prevent future issues.`,
    white: `Testing and validation are essential to ensuring code security after remediation. Conduct targeted security tests, including unit tests to verify individual components and integration tests to ensure the system functions securely as a whole. Leveraging digital process automation can streamline testing and validation. Additionally, validate that all applied fixes effectively mitigate identified vulnerabilities.`
  };

  return (
    <div className="min-h-screen bg-white">
      <Header />

      {/* Hero Section */}
      <ServiceSection
        title="Secure Code Review"
        subtitle="Comprehensive security analysis of source code to identify vulnerabilities and improve code quality."
        image="https://images.unsplash.com/photo-1555066931-4365d14bab8c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80"
        onContactClick={() => setIsContactOpen(true)}
      />

      {/* Overview Section */}
      <div className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              <span className="border-b-4 border-emerald-500 pb-2">Overview : Secure Code Review</span>
            </h2>
          </div>
          <div className="max-w-4xl mx-auto text-center">
            <p className="text-lg text-gray-700 leading-relaxed">
              Secure code review involves comprehensive analysis of source code to identify security vulnerabilities, coding flaws, and potential exploits that could be leveraged by malicious actors. This process evaluates code structure, logic implementation, input validation, authentication mechanisms, and data handling practices. Our systematic approach helps organizations build secure applications from the ground up and maintain security throughout the development lifecycle.
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
                Secure Code Review Methodology
              </h2>
              <p className="text-gray-700 mb-8 leading-relaxed">
                VAPTlabs employs a comprehensive methodology for secure code review that identifies vulnerabilities in source code, architecture, and implementation patterns. Our approach includes thorough analysis based on industry frameworks like OWASP Code Review Guide, SANS secure coding practices, and CWE/SANS Top 25.
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
                  Defining the Objectives
                </button>
                <button
                  className={`px-6 py-2 rounded-t-lg font-semibold ${
                    activeTab === 'gray'
                      ? 'bg-gray-400 text-white'
                      : 'bg-gray-200 text-gray-600 hover:bg-gray-300'
                  }`}
                  onClick={() => setActiveTab('gray')}
                >
                  Review Execution
                </button>
                <button
                  className={`px-6 py-2 rounded-t-lg font-semibold ${
                    activeTab === 'white'
                      ? 'bg-emerald-500 text-white'
                      : 'bg-gray-200 text-gray-600 hover:bg-gray-300'
                  }`}
                  onClick={() => setActiveTab('white')}
                >
                  Testing and Validation
                </button>
              </div>

              {/* Tab Content */}
              <div className="bg-gray-50 p-6 rounded-lg shadow-md text-gray-700 leading-relaxed" style={{ marginTop:"-24px"}}>
                {tabContent[activeTab]}
                
                {activeTab === 'white' && (
                  <div className="mt-6 p-4 bg-blue-50 rounded-lg border-l-4 border-blue-500">
                    <h4 className="font-semibold text-blue-800 mb-2">Remediation:</h4>
                    <p className="text-blue-700">
                      The last stage of the secure code review process is remediation and follow-up. After identifying and reporting vulnerabilities, the development team must implement the recommended fixes and ensure they are effectively addressed.
                    </p>
                  </div>
                )}
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
                  src="https://images.unsplash.com/photo-1516321318423-f06f85e504b3?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80" 
                  alt="Secure Code Review" 
                  className="rounded-lg shadow-lg"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Benefits Section */}
      <BenefitsSection 
        benefits={codeReviewBenefits}
        title="Benefits"
      />

      <ProcessCarousel title="Secure Code Review Penetration Testing Process"/>
      <ClientCarousel />
      <SecureCodeReviewFAQ />
      <Footer />

      {/* Contact Popup */}
      <ContactPopup
        isOpen={isContactOpen}
        onClose={() => setIsContactOpen(false)}
      />
    </div>
  );
};

export default SecureCodeReview;