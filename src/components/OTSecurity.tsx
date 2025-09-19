import React, { useState } from 'react';
import { Shield, FileText, Lock, Star, Code, Search } from 'lucide-react';
import Header from "./Header";
import ContactPopup from './ContactPopup';
import ProcessCarousel from './ProcessCarousel';
import Footer from './Footer';
import OTSecurityFAQ from './FAQ/OTSecurityFAQ';
import ClientCarousel from "./ClientCarousel";
import ServiceSection from "./ServiceSection";
import BenefitsSection from './BenefitsSection';

const OTSecurity = () => {
  const [isContactOpen, setIsContactOpen] = useState(false);
  const [activeTab, setActiveTab] = useState<'black' | 'gray' | 'white'>('black');

  // Benefits data for OT security
  const otSecurityBenefits = [
    {
      icon: <Shield className="w-12 h-12 text-gray-800" />,
      title: "Industrial System Protection",
      description: "Comprehensive security assessment of operational technology and industrial control systems."
    },
    {
      icon: <FileText className="w-12 h-12 text-gray-800" />,
      title: "Compliance Assurance",
      description: "Ensure compliance with industrial security standards like IEC 62443 and NIST guidelines."
    },
    {
      icon: <Lock className="w-12 h-12 text-gray-800" />,
      title: "Critical Infrastructure Security",
      description: "Protect critical infrastructure from cyber threats that could impact operations."
    },
    {
      icon: <Star className="w-12 h-12 text-gray-800" />,
      title: "SCADA/HMI Security",
      description: "Specialized security testing for SCADA systems and human-machine interfaces."
    },
    {
      icon: <Code className="w-12 h-12 text-gray-800" />,
      title: "Protocol Security",
      description: "Assessment of industrial protocols like Modbus, DNP3, and proprietary communications."
    },
    {
      icon: <Search className="w-12 h-12 text-gray-800" />,
      title: "Network Segmentation",
      description: "Evaluate network segmentation between IT and OT environments for security isolation."
    }
  ];

  // Content for each tab
  const tabContent = {
    black: `Black Box OT Security Testing simulates external attacks on operational technology systems with no prior knowledge of industrial infrastructure. This approach helps identify security vulnerabilities from an attacker's perspective, focusing on exposed industrial protocols, HMI interfaces, and network-accessible control systems.`,
    gray: `Gray Box OT Security Testing combines limited knowledge of industrial systems with external testing approaches. This hybrid method allows evaluation of both external attack vectors and internal OT network components while maintaining realistic attack scenarios for industrial environments.`,
    white: `White Box OT Security Testing provides complete access to industrial system documentation, network architecture, and control system configurations. This comprehensive approach ensures thorough analysis of all OT security controls, industrial protocols, and safety-critical systems.`
  };

  return (
    <div className="min-h-screen bg-white">
      <Header />

      {/* Hero Section */}
      <ServiceSection
        title="OT Security"
        subtitle="Comprehensive security assessment of operational technology and industrial control systems."
        image="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80"
        onContactClick={() => setIsContactOpen(true)}
      />

      {/* Overview Section */}
      <div className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              <span className="border-b-4 border-emerald-500 pb-2">Overview : OT Security</span>
            </h2>
          </div>
          <div className="max-w-4xl mx-auto text-center">
            <p className="text-lg text-gray-700 leading-relaxed">
              Operational Technology (OT) security involves comprehensive assessment of industrial control systems, SCADA networks, and critical infrastructure to identify vulnerabilities that could impact operational safety and business continuity. This specialized testing evaluates industrial protocols, control system interfaces, and network segmentation between IT and OT environments. Our systematic approach helps organizations secure their industrial operations against evolving cyber threats while maintaining operational efficiency.
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
                OT Security Methodology
              </h2>
              <p className="text-gray-700 mb-8 leading-relaxed">
                VAPTlabs employs a comprehensive methodology for OT security assessment that identifies vulnerabilities in industrial control systems, operational networks, and critical infrastructure. Our approach includes thorough testing based on industry frameworks like IEC 62443, NIST Cybersecurity Framework, and industrial security best practices.
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
                  src="https://images.unsplash.com/photo-1518709268805-4e9042af2616?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80" 
                  alt="OT Security" 
                  className="rounded-lg shadow-lg"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Benefits Section */}
      <BenefitsSection 
        benefits={otSecurityBenefits}
        title="Benefits"
      />

      <ProcessCarousel />
      <ClientCarousel />
      <OTSecurityFAQ />
      <Footer />

      {/* Contact Popup */}
      <ContactPopup
        isOpen={isContactOpen}
        onClose={() => setIsContactOpen(false)}
      />
    </div>
  );
};

export default OTSecurity;