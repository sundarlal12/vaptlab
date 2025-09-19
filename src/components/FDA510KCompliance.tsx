import React, { useState } from 'react';
import { Shield, FileText, Lock, Star, Code, Search } from 'lucide-react';
import Header from "./Header";
import Footer from './Footer';
import ContactPopup from './ContactPopup';
import FDA510KFAQ from './FAQ/FDA510KFAQ';
import ClientCarousel from "./ClientCarousel";
import ServiceSection from "./ServiceSection";
import BenefitsSection from './BenefitsSection';

const FDA510KCompliance = () => {
  const [isContactOpen, setIsContactOpen] = useState(false);
  const [activeTab, setActiveTab] = useState<'overview' | 'requirements' | 'testing' | 'compliance' | 'benefits' | 'implementation'>('overview');

  // Benefits data for FDA 510(K) compliance
  const fda510kBenefits = [
    {
      icon: <Shield className="w-12 h-12 text-gray-800" />,
      title: "Medical Device Security",
      description: "Ensure comprehensive security of medical devices and healthcare technology systems."
    },
    {
      icon: <FileText className="w-12 h-12 text-gray-800" />,
      title: "FDA 510(K) Compliance",
      description: "Meet FDA cybersecurity requirements for medical device premarket submissions."
    },
    {
      icon: <Lock className="w-12 h-12 text-gray-800" />,
      title: "Patient Safety",
      description: "Protect patient safety by securing medical devices from cybersecurity threats."
    },
    {
      icon: <Star className="w-12 h-12 text-gray-800" />,
      title: "Market Access",
      description: "Achieve FDA clearance and market access for medical devices with proper cybersecurity documentation."
    },
    {
      icon: <Code className="w-12 h-12 text-gray-800" />,
      title: "Device Validation",
      description: "Validate medical device security controls and cybersecurity measures."
    },
    {
      icon: <Search className="w-12 h-12 text-gray-800" />,
      title: "Risk Assessment",
      description: "Comprehensive cybersecurity risk assessment for medical device submissions."
    }
  ];

  // Content for each tab
  const tabContent = {
    overview: `FDA 510(K) is a premarket submission process for medical devices that demonstrates a device is substantially equivalent to a legally marketed device. Recent FDA guidance requires medical device manufacturers to include cybersecurity information in their 510(K) submissions. This includes documentation of cybersecurity risks, security controls, and plans for addressing vulnerabilities throughout the device lifecycle.`,
    requirements: `FDA cybersecurity requirements for 510(K) submissions include cybersecurity risk assessment, security controls documentation, software bill of materials (SBOM), vulnerability management plans, and incident response procedures. Manufacturers must demonstrate they have considered cybersecurity throughout the device design and development process and have plans for post-market cybersecurity management.`,
    testing: `Our FDA 510(K) cybersecurity testing evaluates medical devices against FDA cybersecurity requirements and industry standards. We assess device security controls, network communications, data protection measures, and vulnerability management processes. Our testing helps ensure your medical device meets FDA cybersecurity expectations for premarket submissions.`,
    compliance: `VAPTlabs helps medical device manufacturers achieve FDA 510(K) cybersecurity compliance through comprehensive security assessments and documentation support. We work with your team to identify cybersecurity risks, implement appropriate security controls, and prepare the necessary cybersecurity documentation for FDA submissions.`,
    benefits: `FDA 510(K) cybersecurity compliance provides significant benefits including faster FDA clearance, reduced regulatory risk, improved patient safety, competitive advantage, and market access. Medical devices with strong cybersecurity documentation often experience smoother FDA review processes and greater market acceptance from healthcare providers.`,
    implementation: `Our FDA 510(K) implementation process includes cybersecurity risk assessment, security control design and testing, SBOM generation, vulnerability management planning, documentation preparation, and submission support. We guide you through the entire process from initial cybersecurity assessment to successful FDA clearance.`
  };

  return (
    <div className="min-h-screen bg-white">
      <Header />

      {/* Hero Section */}
      <ServiceSection
        title="FDA 510(K) Compliance"
        subtitle="Achieve FDA cybersecurity compliance for medical device premarket submissions and regulatory clearance."
        image="https://images.unsplash.com/photo-1559757148-5c350d0d3c56?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80"
        onContactClick={() => setIsContactOpen(true)}
      />

      {/* Overview Section */}
      <div className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              <span className="border-b-4 border-emerald-500 pb-2">Overview : FDA 510(K) Cybersecurity</span>
            </h2>
          </div>
          <div className="max-w-4xl mx-auto text-center">
            <p className="text-lg text-gray-700 leading-relaxed">
              FDA 510(K) cybersecurity requirements ensure that medical devices are designed and manufactured with appropriate cybersecurity controls to protect patient safety and device functionality. The FDA now requires medical device manufacturers to include comprehensive cybersecurity information in their premarket submissions, demonstrating that cybersecurity has been considered throughout the device development lifecycle.
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
                How VAPTlabs Helps Achieve FDA 510(K) Compliance
              </h2>
              <p className="text-gray-700 mb-8 leading-relaxed">
                VAPTlabs provides comprehensive FDA 510(K) cybersecurity compliance services to help medical device manufacturers meet regulatory requirements and achieve FDA clearance. Our medical device security experts guide you through the complex regulatory landscape with proven methodologies and industry best practices.
              </p>
              
              {/* Vertical Tabs Layout */}
              <div className="flex gap-8 mb-8">
                {/* Vertical Tab Navigation */}
                <div className="flex flex-col space-y-2 min-w-[200px]">
                  <button
                    className={`text-left px-4 py-3 rounded-lg font-semibold transition-all ${
                      activeTab === 'overview'
                        ? 'bg-gray-900 text-white'
                        : 'text-gray-700 hover:bg-gray-100'
                    }`}
                    onClick={() => setActiveTab('overview')}
                  >
                    FDA 510(K) Overview
                  </button>
                  <button
                    className={`text-left px-4 py-3 rounded-lg font-semibold transition-all ${
                      activeTab === 'requirements'
                        ? 'bg-gray-900 text-white'
                        : 'text-gray-700 hover:bg-gray-100'
                    }`}
                    onClick={() => setActiveTab('requirements')}
                  >
                    Cybersecurity Requirements
                  </button>
                  <button
                    className={`text-left px-4 py-3 rounded-lg font-semibold transition-all ${
                      activeTab === 'testing'
                        ? 'bg-gray-900 text-white'
                        : 'text-gray-700 hover:bg-gray-100'
                    }`}
                    onClick={() => setActiveTab('testing')}
                  >
                    Device Testing
                  </button>
                  <button
                    className={`text-left px-4 py-3 rounded-lg font-semibold transition-all ${
                      activeTab === 'compliance'
                        ? 'bg-gray-900 text-white'
                        : 'text-gray-700 hover:bg-gray-100'
                    }`}
                    onClick={() => setActiveTab('compliance')}
                  >
                    Compliance Support
                  </button>
                  <button
                    className={`text-left px-4 py-3 rounded-lg font-semibold transition-all ${
                      activeTab === 'benefits'
                        ? 'bg-gray-900 text-white'
                        : 'text-gray-700 hover:bg-gray-100'
                    }`}
                    onClick={() => setActiveTab('benefits')}
                  >
                    Regulatory Benefits
                  </button>
                  <button
                    className={`text-left px-4 py-3 rounded-lg font-semibold transition-all ${
                      activeTab === 'implementation'
                        ? 'bg-emerald-500 text-white border-l-4 border-orange-500'
                        : 'text-gray-700 hover:bg-gray-100'
                    }`}
                    onClick={() => setActiveTab('implementation')}
                  >
                    Implementation Process
                  </button>
                </div>

                {/* Tab Content */}
                <div className="flex-1 bg-gray-50 p-6 rounded-lg shadow-md">
                  <h3 className="text-xl font-bold text-gray-900 mb-4 capitalize">
                    {activeTab === 'overview' ? 'Understanding FDA 510(K) Process' :
                     activeTab === 'requirements' ? 'FDA Cybersecurity Requirements' :
                     activeTab === 'testing' ? 'Comprehensive Device Testing' :
                     activeTab === 'compliance' ? 'Expert Regulatory Guidance' :
                     activeTab === 'benefits' ? 'Why Medical Devices Need FDA Compliance' :
                     'Complete Implementation Support'}
                  </h3>
                  <p className="text-gray-700 leading-relaxed">
                    {tabContent[activeTab]}
                  </p>
                </div>
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
                  src="https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80" 
                  alt="FDA Medical Device Security" 
                  className="rounded-lg shadow-lg"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Benefits Section */}
      <BenefitsSection 
        benefits={fda510kBenefits}
        title="Benefits"
      />
      <ClientCarousel />
      <FDA510KFAQ />
      <Footer />

      {/* Contact Popup */}
      <ContactPopup
        isOpen={isContactOpen}
        onClose={() => setIsContactOpen(false)}
      />
    </div>
  );
};

export default FDA510KCompliance;