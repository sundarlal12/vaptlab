import React, { useState } from 'react';
import { Shield, FileText, Lock, Star, Code, Search } from 'lucide-react';
import Header from "./Header";
import ContactPopup from './ContactPopup';
import ProcessCarousel from './ProcessCarousel';
import Footer from './Footer';
import MobileAppSecurityFAQ from './FAQ/MobileAppSecurityFAQ';
import ClientCarousel from "./ClientCarousel";
import ServiceSection from "./ServiceSection";
import BenefitsSection from './BenefitsSection';

const MobileAppSecurityTesting = () => {
  const [isContactOpen, setIsContactOpen] = useState(false);
  const [activeTab, setActiveTab] = useState<'black' | 'gray' | 'white'>('black');

  // Benefits data for mobile app security testing
  const mobileBenefits = [
    {
      icon: <Shield className="w-12 h-12 text-gray-800" />,
      title: "Enhanced App Security",
      description: "Strengthen your mobile app against cyber threats by identifying and addressing vulnerabilities before release."
    },
    {
      icon: <FileText className="w-12 h-12 text-gray-800" />,
      title: "Regulatory Compliance",
      description: "Meet industry standards and regulatory requirements for mobile application security and data protection."
    },
    {
      icon: <Lock className="w-12 h-12 text-gray-800" />,
      title: "Protect User Privacy",
      description: "Safeguard sensitive user data and personal information from unauthorized access and data breaches."
    },
    {
      icon: <Star className="w-12 h-12 text-gray-800" />,
      title: "Maintain Brand Reputation",
      description: "Protect your brand image by preventing security incidents that could damage customer trust and loyalty."
    },
    {
      icon: <Code className="w-12 h-12 text-gray-800" />,
      title: "Optimize Development Practices",
      description: "Improve development workflows by integrating security best practices throughout the mobile app lifecycle."
    },
    {
      icon: <Search className="w-12 h-12 text-gray-800" />,
      title: "Comprehensive Risk Assessment",
      description: "Conduct thorough evaluation of potential security risks and vulnerabilities across all mobile platforms."
    }
  ];
  // Content for each tab
  const tabContent = {
    black: `Black Box Testing simulates an external attack on your mobile application with no prior knowledge of the app's internal structure. This approach helps identify security vulnerabilities from an attacker's perspective, focusing on runtime behavior, data storage, network communication, and exposed interfaces.`,
    gray: `Gray Box Testing combines external testing with limited knowledge of the mobile application's architecture. This hybrid approach allows evaluation of both client-side and server-side components while maintaining an external perspective, ensuring comprehensive coverage of mobile-specific vulnerabilities.`,
    white: `White Box Testing provides full access to the mobile application's source code, binary files, and internal documentation. This comprehensive approach ensures deep inspection of code-level vulnerabilities, cryptographic implementations, and platform-specific security mechanisms that may not be detected through external testing alone.`
  };

  return (
    <div className="min-h-screen bg-white">
      <Header />

      {/* Hero Section */}
      <ServiceSection
        title="Mobile Application Security Testing"
        subtitle="Your mobile device is the easiest portal to your security threats."
        image="https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80"
        onContactClick={() => setIsContactOpen(true)}
      />

      {/* Overview Section */}
      <div className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              <span className="border-b-4 border-emerald-500 pb-2">Overview : Mobile Application Security Testing</span>
            </h2>
          </div>
          <div className="max-w-4xl mx-auto text-center">
            <p className="text-lg text-gray-700 leading-relaxed">
              The process of mobile application security testing involves analysing them for the necessary levels of quality, functionality, compatibility, usability, and performance. It is a Linux based operating system which was primarily designed for touchscreen mobile devices like tablets, smartphones. Mobile devices are no longer just a means of wireless telephonic communication, rather mobile apps are a component of the wider mobile ecosystem, which includes servers, data centers, network infrastructure, and mobile devices. VAPT for mobile applications security testing is a crucial step in the overall evaluation process as it aids in app security and reduces risks from fraud, malware infection, data leakage, and other security vulnerabilities.
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
                Methodology
              </h2>
              <p className="text-gray-700 mb-8 leading-relaxed">
                The technique of checking the code and application characteristics for flaws is known as mobile application security testing. Static analysis, code review, and penetration testing are all combined in this process. Numerous programmes are available for mobile devices to simplify user life. Due to the increasing sophistication of cyberattacks, organizations are engaged to do mobile application security testing.
              </p>
              <p className="text-gray-700 mb-8 leading-relaxed">
                The approaches are -
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
                Black Box, often referred to as behavioral testing or external testing, is a form of software testing technique wherein no prior knowledge of the internal code structure, implementation specifics, or internal routes of an application is necessary. It focuses on the application's input and output and is entirely dependent on the specifications and requirements for the software.
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
                  src="https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80" 
                  alt="Mobile Security" 
                  className="rounded-lg shadow-lg"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Benefits Section */}
      <BenefitsSection 
        benefits={mobileBenefits}
        title="Benefits"
      />

      <ProcessCarousel title="Mobile Application Penetration Testing Process"/>
      <ClientCarousel />
      <MobileAppSecurityFAQ />
      <Footer />

      {/* Contact Popup */}
      <ContactPopup
        isOpen={isContactOpen}
        onClose={() => setIsContactOpen(false)}
      />
    </div>
  );
};

export default MobileAppSecurityTesting;