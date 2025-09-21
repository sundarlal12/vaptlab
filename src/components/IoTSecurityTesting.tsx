import React, { useState } from 'react';
import { Shield, FileText, Lock, Star, Code, Search } from 'lucide-react';
import Header from "./Header";
import ContactPopup from './ContactPopup';
import ProcessCarousel from './ProcessCarousel';
import Footer from './Footer';
import IoTSecurityFAQ from './FAQ/IoTSecurityFAQ';
import ClientCarousel from "./ClientCarousel";
import ServiceSection from "./ServiceSection";
import BenefitsSection from './BenefitsSection';

const RED_GRAD = "linear-gradient(to right, rgb(217, 47, 97), rgb(143, 15, 56))";

const IoTSecurityTesting = () => {
  const [isContactOpen, setIsContactOpen] = useState(false);
  const [activeTab, setActiveTab] = useState<'black' | 'gray' | 'white'>('black');

  // Benefits data for IoT security testing
  const iotBenefits = [
    {
      icon: <Shield className="w-12 h-12 text-gray-800" />,
      title: "Device Security Assessment",
      description: "Comprehensive evaluation of IoT devices to identify firmware vulnerabilities and security gaps."
    },
    {
      icon: <FileText className="w-12 h-12 text-gray-800" />,
      title: "Protocol Security Testing",
      description: "Assessment of IoT communication protocols including MQTT, CoAP, and proprietary protocols."
    },
    {
      icon: <Lock className="w-12 h-12 text-gray-800" />,
      title: "Data Privacy Protection",
      description: "Ensure IoT devices properly protect sensitive data and maintain user privacy."
    },
    {
      icon: <Star className="w-12 h-12 text-gray-800" />,
      title: "Network Segmentation",
      description: "Validate proper network isolation and segmentation of IoT devices from critical systems."
    },
    {
      icon: <Code className="w-12 h-12 text-gray-800" />,
      title: "Firmware Analysis",
      description: "Deep analysis of IoT device firmware to identify vulnerabilities and backdoors."
    },
    {
      icon: <Search className="w-12 h-12 text-gray-800" />,
      title: "Hardware Security",
      description: "Physical security assessment of IoT devices including debug interfaces and tamper resistance."
    }
  ];

  // Content for each tab
  const tabContent = {
    black: `Black Box IoT Testing simulates an external attack on your IoT devices with no prior knowledge of the device architecture or firmware. This approach helps identify security vulnerabilities from an attacker's perspective, focusing on exposed interfaces, communication protocols, and device behavior.`,
    gray: `Gray Box IoT Testing combines external testing with limited knowledge of the IoT device architecture. This hybrid approach allows evaluation of both external interfaces and internal device components while maintaining an external perspective, ensuring comprehensive coverage of IoT-specific vulnerabilities.`,
    white: `White Box IoT Testing provides full access to device firmware, source code, and internal documentation. This comprehensive approach ensures deep inspection of device security mechanisms, cryptographic implementations, and hardware security features that may not be detected through external testing alone.`
  };

  return (
    <div className="min-h-screen bg-white">
      <Header />

      {/* Hero Section */}
      <ServiceSection
        title="IoT Security Testing"
        subtitle="Comprehensive security assessment of Internet of Things devices and ecosystems."
        image="https://ik.imagekit.io/5biqvaptlabsnfbqw/0*PPtMqNyVCxDiof5F.webp?updatedAt=1757593172494"
        onContactClick={() => setIsContactOpen(true)}
      />

      {/* Overview Section */}
      <div className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              <span   className="pb-2"
                style={{
                  borderBottom: '4px solid',
                  borderImage: `${RED_GRAD} 1`, // CHANGED: gradient underline
                }}>Overview : IoT Security Testing</span>
            </h2>
          </div>
          <div className="max-w-4xl mx-auto text-center">
            <p className="text-lg text-gray-700 leading-relaxed">
              IoT security testing involves comprehensive assessment of Internet of Things devices, communication protocols, and ecosystems to identify vulnerabilities that could be exploited by malicious actors. This testing evaluates device firmware, hardware security, communication protocols, and backend infrastructure. Our systematic approach helps organizations secure their IoT deployments and protect against emerging threats in the connected device landscape.
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
                IoT Security Testing Methodology
              </h2>
              <p className="text-gray-700 mb-8 leading-relaxed">
                VAPTlabs employs a comprehensive methodology for IoT security assessment that identifies vulnerabilities in connected devices, communication protocols, and supporting infrastructure. Our approach includes thorough testing based on industry frameworks like OWASP IoT Top 10, NIST IoT Security, and IEC 62443.
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
                  className={`px-6 py-2 rounded-t-lg font-semibold ${activeTab === 'white' ? '' : 'bg-gray-200 text-gray-600 hover:bg-gray-300'}`}
                  onClick={() => setActiveTab('white')}
                  style={
                    activeTab === 'white'
                      ? { background: RED_GRAD, color: 'white' } // CHANGED: active white tab uses red gradient
                      : undefined
                  }
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
                    style={{
                    background: RED_GRAD, // CHANGED: button background gradient
                    color: '#fff',
                  }}
                >
                  Get Free Consultation
                </button>
              </div>
            </div>

            {/* Right Image */}
            <div className="relative">
              <div className="bg-gradient-to-br from-emerald-100 to-emerald-200 rounded-lg p-8" style={{ background: 'linear-gradient(180deg, rgba(217,47,97,0.06), rgba(143,15,56,0.04))' }}>
                <img 
                  src="https://images.unsplash.com/photo-1558618666-fcd25c85cd64?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80" 
                  alt="IoT Security" 
                  className="rounded-lg shadow-lg"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Benefits Section */}
      <BenefitsSection 
        benefits={iotBenefits}
        title="Benefits"
      />

      <ProcessCarousel title="IoT Penetration Testing Process" />
      <ClientCarousel />
      <IoTSecurityFAQ />
      <Footer />

      {/* Contact Popup */}
      <ContactPopup
        isOpen={isContactOpen}
        onClose={() => setIsContactOpen(false)}
      />
    </div>
  );
};

export default IoTSecurityTesting;