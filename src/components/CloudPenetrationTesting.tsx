import React, { useState } from 'react';
import { Shield, FileText, Lock, Star, Code, Search } from 'lucide-react';
import Header from "./Header";
import ContactPopup from './ContactPopup';
import ProcessCarousel from './ProcessCarousel';
import Footer from './Footer';
import CloudPenetrationFAQ from './FAQ/CloudPenetrationFAQ';
import ClientCarousel from "./ClientCarousel";
import ServiceSection from "./ServiceSection";
import BenefitsSection from './BenefitsSection';

const CloudPenetrationTesting = () => {
  const [isContactOpen, setIsContactOpen] = useState(false);
  const [activeTab, setActiveTab] = useState<'black' | 'gray' | 'white'>('black');

  // Benefits data for cloud penetration testing
  const cloudBenefits = [
    {
      icon: <Shield className="w-12 h-12 text-gray-800" />,
      title: "Cloud Security Assessment",
      description: "Comprehensive evaluation of cloud infrastructure to identify misconfigurations and security gaps."
    },
    {
      icon: <FileText className="w-12 h-12 text-gray-800" />,
      title: "Compliance Assurance",
      description: "Ensure cloud deployments meet industry standards and regulatory compliance requirements."
    },
    {
      icon: <Lock className="w-12 h-12 text-gray-800" />,
      title: "Data Protection",
      description: "Safeguard sensitive data stored in cloud environments from unauthorized access and breaches."
    },
    {
      icon: <Star className="w-12 h-12 text-gray-800" />,
      title: "Multi-Cloud Security",
      description: "Security assessment across AWS, Azure, GCP, and hybrid cloud environments."
    },
    {
      icon: <Code className="w-12 h-12 text-gray-800" />,
      title: "Infrastructure as Code",
      description: "Review and secure cloud infrastructure configurations and deployment scripts."
    },
    {
      icon: <Search className="w-12 h-12 text-gray-800" />,
      title: "Container Security",
      description: "Comprehensive security testing of containerized applications and orchestration platforms."
    }
  ];

  // Content for each tab
  // const tabContent = {
  //   black: `Black Box Cloud Testing simulates an external attack on your cloud infrastructure with no prior knowledge of the cloud architecture. This approach helps identify security vulnerabilities from an attacker's perspective, focusing on exposed cloud services, misconfigurations, and public-facing resources.`,
  //   gray: `Gray Box Cloud Testing combines external testing with limited knowledge of the cloud infrastructure. This hybrid approach allows evaluation of both public and internal cloud components while maintaining an external perspective, ensuring comprehensive coverage of cloud-specific vulnerabilities.`,
  //   white: `White Box Cloud Testing provides full access to cloud configurations, IAM policies, and infrastructure documentation. This comprehensive approach ensures deep inspection of cloud security policies, resource configurations, and access controls that may not be detected through external testing alone.`
  // };
   const tabContent = {
    black: `A simulated attack where cloud penetration testers have no prior knowledge of your cloud environment and no access credentials. They attempt to break in from the outside, just like an unknown hacker targeting your cloud systems.`,
    white: `In this approach, testers are given full administrative or root-level access to the cloud infrastructure. With complete visibility, they can deeply analyze configurations, permissions, and security controls within the cloud.`,
    gray: `Testers are provided with limited access, such as restricted admin rights or partial user permissions, along with some knowledge of the cloud environment. This mimics a scenario where an attacker already has partial access, for example through stolen or misused cloud credentials.`
  };

  return (
    <div className="min-h-screen bg-white">
      <Header />

      {/* Hero Section */}
      <ServiceSection
        title="Cloud Penetration Testing"
        subtitle="Secure your cloud infrastructure with comprehensive security assessment and vulnerability testing."
        image="https://images.unsplash.com/photo-1451187580459-43490279c0fa?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80"
        onContactClick={() => setIsContactOpen(true)}
      />

      {/* Overview Section */}
      <div className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              <span className="border-b-4 border-emerald-500 pb-2">Overview : Cloud Penetration Testing</span>
            </h2>
          </div>
          <div className="max-w-4xl mx-auto text-center">
            <p className="text-lg text-gray-700 leading-relaxed">
              Cloud penetration testing involves comprehensive security assessment of cloud infrastructure, services, and configurations to identify vulnerabilities that could be exploited by malicious actors. This testing evaluates cloud security controls, IAM policies, data storage security, and network configurations across AWS, Azure, GCP, and hybrid cloud environments. Our systematic approach helps organizations secure their cloud deployments and maintain compliance with industry standards.
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
                Cloud Penetration Testing Methodology
              </h2>
              <p className="text-gray-700 mb-8 leading-relaxed">
                VAPTlabs employs a comprehensive methodology for cloud security assessment that identifies vulnerabilities in cloud infrastructure, configurations, and services. Our approach includes thorough testing based on industry frameworks like NIST Cloud Security, CSA CCM, and OWASP Cloud Security.
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
                  alt="Cloud Security" 
                  className="rounded-lg shadow-lg"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Benefits Section */}
      <BenefitsSection 
        benefits={cloudBenefits}
        title="Benefits"
      />

      <ProcessCarousel title="Cloud Penetration Testing Process"/>
      <ClientCarousel />
      <CloudPenetrationFAQ />
      <Footer />

      {/* Contact Popup */}
      <ContactPopup
        isOpen={isContactOpen}
        onClose={() => setIsContactOpen(false)}
      />
    </div>
  );
};

export default CloudPenetrationTesting;