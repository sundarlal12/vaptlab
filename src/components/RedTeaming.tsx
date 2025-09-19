import React, { useState } from 'react';
import { Shield, FileText, Lock, Star, Code, Search } from 'lucide-react';
import Header from "./Header";
import ContactPopup from './ContactPopup';
import ProcessCarousel from './ProcessCarousel';
import Footer from './Footer';
import RedTeamingFAQ from './FAQ/RedTeamingFAQ';
import ClientCarousel from "./ClientCarousel";
import ServiceSection from "./ServiceSection";
import BenefitsSection from './BenefitsSection';

const RedTeaming = () => {
  const [isContactOpen, setIsContactOpen] = useState(false);
  const [activeTab, setActiveTab] = useState<'reconnaissance' | 'weaponization' | 'Transmission' | 'exploitation' | 'Deployment' | 'c2'>('c2');

  // Benefits data for red teaming
  const redTeamBenefits = [
    {
      icon: <Shield className="w-12 h-12 text-gray-800" />,
      title: "Realistic Attack Simulation",
      description: "Comprehensive simulation of real-world attack scenarios to test organizational defenses."
    },
    {
      icon: <FileText className="w-12 h-12 text-gray-800" />,
      title: "Security Posture Assessment",
      description: "Holistic evaluation of security controls, processes, and incident response capabilities."
    },
    {
      icon: <Lock className="w-12 h-12 text-gray-800" />,
      title: "Defense Validation",
      description: "Validate effectiveness of security tools, monitoring systems, and response procedures."
    },
    {
      icon: <Star className="w-12 h-12 text-gray-800" />,
      title: "Team Training",
      description: "Enhance security team skills through realistic adversarial exercises and scenarios."
    },
    {
      icon: <Code className="w-12 h-12 text-gray-800" />,
      title: "Advanced Techniques",
      description: "Employ sophisticated attack techniques including social engineering and physical security."
    },
    {
      icon: <Search className="w-12 h-12 text-gray-800" />,
      title: "Continuous Assessment",
      description: "Ongoing evaluation of security improvements and defensive capabilities over time."
    }
  ];

  // Content for each tab
  const tabContent = {
    reconnaissance: `Our security experts collect detailed information about your organization's digital footprint. This includes gathering email addresses, domain information, employee details, and publicly available data. The comprehensive intelligence gathering phase helps create a realistic attack strategy that mirrors how real attackers would approach your systems.`,
    weaponization: `Our team develops custom attack tools and payloads specifically designed for your environment. We create sophisticated attack weapons that can exploit identified vulnerabilities in your systems. This phase helps reveal potential security gaps and weak points in your organization's defense mechanisms.`,
    Transmission: `We strategically deliver the attack payloads to designated targets within your organization. Our goal is to test how well your security controls can detect and prevent malicious content from reaching critical systems. This phase evaluates your email security, web filtering, and user awareness training effectiveness.`,
    exploitation: `Our experts attempt to exploit discovered vulnerabilities to gain unauthorized access to your systems. We simulate real-world attack techniques to find security weaknesses that could be used by malicious actors. This phase reveals how attackers might penetrate your defenses and gain initial system access.`,
    Deployment: `After successful exploitation, we install persistent access mechanisms to maintain system control. This phase tests your organization's ability to detect unauthorized software installations and persistent threats. We evaluate how long malicious activities can remain undetected in your environment.`,
    c2: `Our experts establish command and control channels to remotely manage compromised systems. This helps understand the extent to which an organization's data and systems can be compromised. We test your network monitoring capabilities and incident response procedures during this critical phase.`
  };

  return (
    <div className="min-h-screen bg-white">
      <Header />

      {/* Hero Section */}
      <ServiceSection
        title="Red Teaming"
        subtitle="Advanced adversarial simulation to test and improve organizational security defenses."
        image="https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80"
        onContactClick={() => setIsContactOpen(true)}
      />

      {/* Overview Section */}
      <div className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              <span className="border-b-4 border-emerald-500 pb-2">Overview : Red Teaming</span>
            </h2>
          </div>
          <div className="max-w-4xl mx-auto text-center">
            <p className="text-lg text-gray-700 leading-relaxed">
              Red teaming is an advanced security assessment methodology that simulates real-world adversarial attacks to test organizational defenses comprehensively. This approach goes beyond traditional penetration testing by employing sophisticated attack techniques, social engineering, and multi-vector approaches to evaluate the effectiveness of security controls, incident response procedures, and overall security posture. Our red team exercises help organizations understand their true security resilience against determined adversaries.
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
                Red Teaming Methodology
              </h2>
              <p className="text-gray-700 mb-8 leading-relaxed">
                VAPTlabs employs a comprehensive methodology for red team exercises that simulates advanced persistent threats and sophisticated attack campaigns. Our approach includes thorough testing based on industry frameworks like MITRE ATT&CK, NIST Cybersecurity Framework, and advanced threat intelligence.
              </p>
              
              {/* Vertical Tabs Layout */}
              <div className="flex gap-8 mb-8">
                {/* Vertical Tab Navigation */}
                <div className="flex flex-col space-y-2 min-w-[200px]">
                  <button
                    className={`text-left px-4 py-3 rounded-lg font-semibold transition-all ${
                      activeTab === 'reconnaissance'
                        ? 'bg-gray-900 text-white'
                        : 'text-gray-700 hover:bg-gray-100'
                    }`}
                    onClick={() => setActiveTab('reconnaissance')}
                  >
                    Reconnaissance
                  </button>
                  <button
                    className={`text-left px-4 py-3 rounded-lg font-semibold transition-all ${
                      activeTab === 'weaponization'
                        ? 'bg-gray-900 text-white'
                        : 'text-gray-700 hover:bg-gray-100'
                    }`}
                    onClick={() => setActiveTab('weaponization')}
                  >
                    Weaponization
                  </button>
                  <button
                    className={`text-left px-4 py-3 rounded-lg font-semibold transition-all ${
                      activeTab === 'Transmission'
                        ? 'bg-gray-900 text-white'
                        : 'text-gray-700 hover:bg-gray-100'
                    }`}
                    onClick={() => setActiveTab('Transmission')}
                  >
                    Transmission
                  </button>
                  <button
                    className={`text-left px-4 py-3 rounded-lg font-semibold transition-all ${
                      activeTab === 'exploitation'
                        ? 'bg-gray-900 text-white'
                        : 'text-gray-700 hover:bg-gray-100'
                    }`}
                    onClick={() => setActiveTab('exploitation')}
                  >
                    Exploitation
                  </button>
                  <button
                    className={`text-left px-4 py-3 rounded-lg font-semibold transition-all ${
                      activeTab === 'Deployment'
                        ? 'bg-gray-900 text-white'
                        : 'text-gray-700 hover:bg-gray-100'
                    }`}
                    onClick={() => setActiveTab('Deployment')}
                  >
                    Deployment
                  </button>
                  <button
                    className={`text-left px-4 py-3 rounded-lg font-semibold transition-all ${
                      activeTab === 'Control'
                        ? 'bg-emerald-500 text-white border-l-4 border-orange-500'
                        : 'text-gray-700 hover:bg-gray-100'
                    }`}
                    onClick={() => setActiveTab('c2')}
                  >
                    Control
                  </button>
                </div>

                {/* Tab Content */}
                <div className="flex-1 bg-gray-50 p-6 rounded-lg shadow-md">
                  <h3 className="text-xl font-bold text-gray-900 mb-4 capitalize">
                    {activeTab === 'c2' ? 'Control' : activeTab}
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
                  src="https://images.unsplash.com/photo-1550751827-4bd374c3f58b?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80" 
                  alt="Red Teaming" 
                  className="rounded-lg shadow-lg"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Benefits Section */}
      <BenefitsSection 
        benefits={redTeamBenefits}
        title="Benefits"
      />

      <ProcessCarousel title="Red Teaming Process"/>
      <ClientCarousel />
      <RedTeamingFAQ />
      <Footer />

      {/* Contact Popup */}
      <ContactPopup
        isOpen={isContactOpen}
        onClose={() => setIsContactOpen(false)}
      />
    </div>
  );
};

export default RedTeaming;