import React, { useState } from 'react';
import { Shield, FileText, Lock, Star, Code, Search } from 'lucide-react';
import Header from "./Header";
import ContactPopup from './ContactPopup';
import ProcessCarousel from './ProcessCarousel';
import Footer from './Footer';
import ThreatModelingFAQ from './FAQ/ThreatModelingFAQ';
import ClientCarousel from "./ClientCarousel";
import ServiceSection from "./ServiceSection";
import BenefitsSection from './BenefitsSection';

const ThreatModeling = () => {
  const [isContactOpen, setIsContactOpen] = useState(false);
  const [activeTab, setActiveTab] = useState<'black' | 'gray' | 'white'>('black');

  // Benefits data for threat modeling
  const threatModelingBenefits = [
    {
      icon: <Shield className="w-12 h-12 text-gray-800" />,
      title: "Proactive Security",
      description: "Identify potential threats and vulnerabilities before they can be exploited by attackers."
    },
    {
      icon: <FileText className="w-12 h-12 text-gray-800" />,
      title: "Risk Assessment",
      description: "Comprehensive analysis of security risks and their potential impact on business operations."
    },
    {
      icon: <Lock className="w-12 h-12 text-gray-800" />,
      title: "Security Architecture",
      description: "Design secure system architectures based on identified threats and attack vectors."
    },
    {
      icon: <Star className="w-12 h-12 text-gray-800" />,
      title: "Compliance Support",
      description: "Support regulatory compliance through systematic threat identification and mitigation."
    },
    {
      icon: <Code className="w-12 h-12 text-gray-800" />,
      title: "Secure Development",
      description: "Integrate security considerations into the software development lifecycle from the start."
    },
    {
      icon: <Search className="w-12 h-12 text-gray-800" />,
      title: "Attack Surface Analysis",
      description: "Comprehensive mapping of potential attack surfaces and entry points."
    }
  ];

  // Content for each tab
  const tabContent = {
    black: `Black Box Threat Modeling analyzes systems from an external attacker's perspective without internal knowledge. This approach helps identify threats that external actors might exploit, focusing on publicly accessible interfaces, exposed services, and potential attack vectors visible from outside the organization.`,
    gray: `Gray Box Threat Modeling combines limited internal knowledge with external threat analysis. This hybrid approach allows evaluation of both external and internal threat vectors while maintaining realistic attack scenarios, ensuring comprehensive coverage of potential security risks.`,
    white: `White Box Threat Modeling provides complete access to system architecture, source code, and internal documentation. This comprehensive approach ensures thorough analysis of all potential threats, including internal vulnerabilities, architectural weaknesses, and implementation flaws that may not be visible externally.`
  };

  return (
    <div className="min-h-screen bg-white">
      <Header />

      {/* Hero Section */}
      <ServiceSection
        title="Threat Modeling"
        subtitle="Systematic identification and analysis of potential security threats to build more secure systems."
        image="https://images.unsplash.com/photo-1550751827-4bd374c3f58b?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80"
        onContactClick={() => setIsContactOpen(true)}
      />

      {/* Overview Section */}
      <div className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              <span className="border-b-4 border-emerald-500 pb-2">Overview : Threat Modeling</span>
            </h2>
          </div>
          <div className="max-w-4xl mx-auto text-center">
            <p className="text-lg text-gray-700 leading-relaxed">
              Threat modeling is a systematic approach to identifying, analyzing, and mitigating potential security threats in systems, applications, and infrastructure. This process involves understanding system architecture, identifying assets, analyzing potential attack vectors, and developing appropriate security controls. Our comprehensive threat modeling methodology helps organizations build security into their systems from the design phase and maintain robust defenses against evolving cyber threats.
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
                Threat Modeling Methodology
              </h2>
              <p className="text-gray-700 mb-8 leading-relaxed">
                VAPTlabs employs a comprehensive methodology for threat modeling that systematically identifies and analyzes potential security threats. Our approach includes thorough analysis based on industry frameworks like STRIDE, PASTA, OCTAVE, and NIST Risk Management Framework.
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
                  src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80" 
                  alt="Threat Modeling" 
                  className="rounded-lg shadow-lg"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Benefits Section */}
      <BenefitsSection 
        benefits={threatModelingBenefits}
        title="Benefits"
      />

      <ProcessCarousel title="Threat Modeling Process" />
      <ClientCarousel />
      <ThreatModelingFAQ />
      <Footer />

      {/* Contact Popup */}
      <ContactPopup
        isOpen={isContactOpen}
        onClose={() => setIsContactOpen(false)}
      />
    </div>
  );
};

export default ThreatModeling;