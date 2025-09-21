import React, { useState } from 'react';
import { Shield, FileText, Lock, Star, Code, Search } from 'lucide-react';
import Header from "./Header";
import ContactPopup from './ContactPopup';
import ProcessCarousel from './ProcessCarousel';
import Footer from './Footer';
import MedicalDeviceFAQ from './FAQ/MedicalDeviceFAQ';
import ClientCarousel from "./ClientCarousel";
import ServiceSection from "./ServiceSection";
import BenefitsSection from './BenefitsSection';
const RED_GRAD = "linear-gradient(to right, rgb(217, 47, 97), rgb(143, 15, 56))";
const MedicalDeviceSecurityTesting = () => {
  const [isContactOpen, setIsContactOpen] = useState(false);
  const [activeTab, setActiveTab] = useState<'black' | 'gray' | 'white'>('black');

  // Benefits data for medical device security testing
  const medicalDeviceBenefits = [
    {
      icon: <Shield className="w-12 h-12 text-gray-800" />,
      title: "FDA Compliance",
      description: "Ensure medical devices meet FDA cybersecurity requirements and regulatory standards."
    },
    {
      icon: <FileText className="w-12 h-12 text-gray-800" />,
      title: "Patient Safety",
      description: "Protect patient data and ensure device functionality cannot be compromised by cyber attacks."
    },
    {
      icon: <Lock className="w-12 h-12 text-gray-800" />,
      title: "HIPAA Compliance",
      description: "Maintain HIPAA compliance through comprehensive security testing of medical devices."
    },
    {
      icon: <Star className="w-12 h-12 text-gray-800" />,
      title: "Risk Assessment",
      description: "Comprehensive risk analysis of medical device vulnerabilities and potential impacts."
    },
    {
      icon: <Code className="w-12 h-12 text-gray-800" />,
      title: "Firmware Security",
      description: "Deep analysis of medical device firmware and embedded system security."
    },
    {
      icon: <Search className="w-12 h-12 text-gray-800" />,
      title: "Network Security",
      description: "Assessment of medical device network communications and hospital infrastructure integration."
    }
  ];

  // Content for each tab
  const tabContent = {
    black: `Black Box Medical Device Testing simulates external attacks on medical devices with no prior knowledge of device architecture. This approach helps identify security vulnerabilities from an attacker's perspective, focusing on exposed interfaces, communication protocols, and device behavior in clinical environments.`,
    gray: `Gray Box Medical Device Testing combines limited device knowledge with external testing approaches. This hybrid method allows evaluation of both external interfaces and internal device components while maintaining an external perspective, ensuring comprehensive coverage of medical device-specific vulnerabilities.`,
    white: `White Box Medical Device Testing provides full access to device firmware, source code, and technical documentation. This comprehensive approach ensures deep inspection of device security mechanisms, cryptographic implementations, and safety-critical functions that may not be detected through external testing alone.`
  };

  return (
    <div className="min-h-screen bg-white">
      <Header />

      {/* Hero Section */}
      <ServiceSection
        title="Medical Device Security Testing"
        subtitle="Comprehensive security assessment of medical devices to ensure patient safety and regulatory compliance."
        image="https://ik.imagekit.io/5biqvaptlabsnfbqw/medical-device-cybersecurity-statistics.jpg?updatedAt=1757622659023"
        onContactClick={() => setIsContactOpen(true)}
      />

      {/* Overview Section */}
      <div className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              <span  className="pb-2"
                style={{
                  borderBottom: '4px solid',
                  borderImage: `${RED_GRAD} 1`, // CHANGED: gradient underline
                }}>Overview : Medical Device Security Testing</span>
            </h2>
          </div>
          <div className="max-w-4xl mx-auto text-center">
            <p className="text-lg text-gray-700 leading-relaxed">
              Medical device security testing involves comprehensive assessment of healthcare devices to identify vulnerabilities that could compromise patient safety or data privacy. This testing evaluates device firmware, communication protocols, network interfaces, and integration with hospital systems. Our systematic approach helps medical device manufacturers and healthcare organizations ensure compliance with FDA cybersecurity requirements and maintain the highest standards of patient care.
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
                Medical Device Security Testing Methodology
              </h2>
              <p className="text-gray-700 mb-8 leading-relaxed">
                VAPTlabs employs a comprehensive methodology for medical device security assessment that identifies vulnerabilities in healthcare devices, communication protocols, and clinical workflows. Our approach includes thorough testing based on FDA cybersecurity guidelines, IEC 62304, and NIST Cybersecurity Framework.
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
                      style={{
                    background: RED_GRAD, // CHANGED: button background gradient
                    color: '#fff',
                  }}
                  onClick={() => setIsContactOpen(true)}
                >
                  Get Free Consultation
                </button>
              </div>
            </div>

            {/* Right Image */}
            <div className="relative">
              <div className="bg-gradient-to-br from-emerald-100 to-emerald-200 rounded-lg p-8" style={{ background: 'linear-gradient(180deg, rgba(217,47,97,0.06), rgba(143,15,56,0.04))' }}>
                <img 
                  src="https://images.unsplash.com/photo-1559757148-5c350d0d3c56?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80" 
                  alt="Medical Device Security" 
                  className="rounded-lg shadow-lg"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Benefits Section */}
      <BenefitsSection 
        benefits={medicalDeviceBenefits}
        title="Benefits"
      />

      <ProcessCarousel title="Medical Device Penetration Testing Process" />
      <ClientCarousel />
      <MedicalDeviceFAQ />
      <Footer />

      {/* Contact Popup */}
      <ContactPopup
        isOpen={isContactOpen}
        onClose={() => setIsContactOpen(false)}
      />
    </div>
  );
};

export default MedicalDeviceSecurityTesting;