import React, { useState } from 'react';
import { Shield, FileText, Lock, Star, Code, Search } from 'lucide-react';
import Header from "./Header";
import ContactPopup from './ContactPopup';
import ProcessCarousel from './ProcessCarousel';
import Footer from './Footer';
import NetworkPenetrationFAQ from './FAQ/NetworkPenetrationFAQ';
import ClientCarousel from "./ClientCarousel";
import ServiceSection from "./ServiceSection";
import BenefitsSection from './BenefitsSection';

const NetworkPenetrationTesting = () => {
  const [isContactOpen, setIsContactOpen] = useState(false);
  const [activeTab, setActiveTab] = useState<'black' | 'gray' | 'white'>('black');

  // Benefits data for network penetration testing
  const networkBenefits = [
    {
      icon: <Shield className="w-12 h-12 text-gray-800" />,
      title: "Network Security Assessment",
      description: "Comprehensive evaluation of network infrastructure to identify vulnerabilities and security gaps."
    },
    {
      icon: <FileText className="w-12 h-12 text-gray-800" />,
      title: "Compliance Validation",
      description: "Ensure network security meets industry standards and regulatory compliance requirements."
    },
    {
      icon: <Lock className="w-12 h-12 text-gray-800" />,
      title: "Perimeter Defense Testing",
      description: "Test firewall configurations, intrusion detection systems, and network access controls."
    },
    {
      icon: <Star className="w-12 h-12 text-gray-800" />,
      title: "Risk Mitigation",
      description: "Identify and prioritize network vulnerabilities to reduce overall security risk exposure."
    },
    {
      icon: <Code className="w-12 h-12 text-gray-800" />,
      title: "Infrastructure Hardening",
      description: "Recommendations for strengthening network infrastructure and security configurations."
    },
    {
      icon: <Search className="w-12 h-12 text-gray-800" />,
      title: "Threat Detection",
      description: "Advanced techniques to discover hidden threats and potential attack vectors in your network."
    }
  ];

  // Content for each tab
  const tabContent = {
    black: `Black Box Network Testing simulates an external attack on your network infrastructure with no prior knowledge of the internal network architecture. This approach helps identify security vulnerabilities from an attacker's perspective, focusing on exposed services, open ports, and network perimeter defenses.`,
    gray: `Gray Box Network Testing combines external testing with limited knowledge of the network infrastructure. This hybrid approach allows evaluation of both external and internal network components while maintaining an external perspective, ensuring comprehensive coverage of network-specific vulnerabilities.`,
    white: `White Box Network Testing provides full access to network documentation, configurations, and internal architecture. This comprehensive approach ensures deep inspection of network security policies, routing configurations, and infrastructure components that may not be detected through external testing alone.`
  };

  return (
    <div className="min-h-screen bg-white">
      <Header />

      {/* Hero Section */}
      <ServiceSection
        title="Network Penetration Testing"
        subtitle="Comprehensive security assessment of your network infrastructure and perimeter defenses."
        image="https://images.unsplash.com/photo-1558494949-ef010cbdcc31?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80"
        onContactClick={() => setIsContactOpen(true)}
      />

      {/* Overview Section */}
      <div className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              <span className="border-b-4 border-emerald-500 pb-2">Overview : Network Penetration Testing</span>
            </h2>
          </div>
          <div className="max-w-4xl mx-auto text-center">
            <p className="text-lg text-gray-700 leading-relaxed">
              Network penetration testing involves comprehensive security assessment of your network infrastructure to identify vulnerabilities that could be exploited by malicious actors. This testing evaluates network perimeter defenses, internal network segmentation, firewall configurations, and access controls. Our systematic approach helps organizations understand their network security posture and implement effective security measures to protect against cyber threats.
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
                Network Penetration Testing Methodology
              </h2>
              <p className="text-gray-700 mb-8 leading-relaxed">
                VAPTlabs employs a comprehensive methodology for network security assessment that identifies vulnerabilities in network infrastructure, perimeter defenses, and internal network segmentation. Our approach includes thorough testing based on industry frameworks like NIST, OWASP, and PTES.
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
                  src="https://images.unsplash.com/photo-1544197150-b99a580bb7a8?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80" 
                  alt="Network Security" 
                  className="rounded-lg shadow-lg"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Benefits Section */}
      <BenefitsSection 
        benefits={networkBenefits}
        title="Benefits"
      />

      <ProcessCarousel title="Network Penetration Testing Process"/>
      <ClientCarousel />
      <NetworkPenetrationFAQ />
      <Footer />

      {/* Contact Popup */}
      <ContactPopup
        isOpen={isContactOpen}
        onClose={() => setIsContactOpen(false)}
      />
    </div>
  );
};

export default NetworkPenetrationTesting;