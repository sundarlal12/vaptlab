import React, { useState } from 'react';
import { Shield, FileText, Lock, Star, Code, Search } from 'lucide-react';
import Header from "./Header";
import ContactPopup from './ContactPopup';
import ProcessCarousel from './ProcessCarousel';
import Footer from './Footer';
import SoftwareCompositionAnalysisFAQ from './FAQ/SoftwareCompositionAnalysisFAQ';
import ClientCarousel from "./ClientCarousel";
import ServiceSection from "./ServiceSection";
import BenefitsSection from './BenefitsSection';

const RED_GRAD = "linear-gradient(to right, rgb(217, 47, 97), rgb(143, 15, 56))";
const SoftwareCompositionAnalysis = () => {
  const [isContactOpen, setIsContactOpen] = useState(false);
  const [activeTab, setActiveTab] = useState<'scanning' | 'documentation' | 'accuracy' | 'vulnerability' | 'alerts' | 'policy' | 'integration'>('scanning');

  // Benefits data for software composition analysis
  const scaBenefits = [
    {
      icon: <Shield className="w-12 h-12 text-gray-800" />,
      title: "Vulnerability Detection",
      description: "Identify known vulnerabilities in third-party components and open source libraries."
    },
    {
      icon: <FileText className="w-12 h-12 text-gray-800" />,
      title: "License Compliance",
      description: "Ensure compliance with open source licenses and avoid legal risks."
    },
    {
      icon: <Lock className="w-12 h-12 text-gray-800" />,
      title: "Supply Chain Security",
      description: "Secure software supply chain by analyzing all components and dependencies."
    },
    {
      icon: <Star className="w-12 h-12 text-gray-800" />,
      title: "Risk Assessment",
      description: "Comprehensive risk analysis of third-party components and their security implications."
    },
    {
      icon: <Code className="w-12 h-12 text-gray-800" />,
      title: "Dependency Mapping",
      description: "Complete visibility into software dependencies and component relationships."
    },
    {
      icon: <Search className="w-12 h-12 text-gray-800" />,
      title: "Continuous Monitoring",
      description: "Ongoing monitoring of components for newly discovered vulnerabilities and updates."
    }
  ];

  // Content for each tab
  const tabContent = {
    scanning: `Our security analysis tool carefully examines your entire codebase to create a complete inventory of all external components. This process finds all third-party libraries, open-source packages, and dependencies used in your application, including those added during the build process.`,
    documentation: `We record important details about every external component found in your software. This includes license information, version numbers, where they're used, and how they connect to each other. This detailed documentation helps you understand exactly what external code is in your application.`,
    accuracy: `The accuracy of our component detection depends on our extensive security database. We use multiple scanning methods and keep our databases current to ensure we find components correctly and provide reliable information about your software dependencies.`,
    vulnerability: `Our analysis tool identifies known security weaknesses in your external components, including publicly reported vulnerabilities (CVEs). We provide clear information about each security issue, its severity level, and how it might affect your application.`,
    alerts: `We send immediate alerts and notifications to your administrators and security teams about discovered vulnerabilities or license compliance issues. These alerts help you respond quickly to security problems and maintain compliance with your organization's requirements.`,
    policy: `Our advanced tools compare found components against your defined security and compliance rules. We can automatically prevent deployments to production or notify team members to speed up fixes when policy violations are detected.`,
    integration: `Our analysis tools work smoothly with your development pipelines to automatically scan projects with each code change. This continuous monitoring ensures that new security issues are found early in the development process, reducing overall security risks.`
  };

  return (
    <div className="min-h-screen bg-white overflow-x-hidden" >
      <Header />

      {/* Hero Section */}
      <ServiceSection
        title="Software Composition Analysis (SCA)"
        subtitle="Complete security review of external libraries and dependencies in your software applications."
        image="https://images.unsplash.com/photo-1516321318423-f06f85e504b3?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80"
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
                }}>Overview : Software Composition Analysis</span>
            </h2>
          </div>
          <div className="max-w-4xl mx-auto text-center">
            <p className="text-lg text-gray-700 leading-relaxed">
              <strong>Software Composition Analysis (SCA)    </strong> is a process that automatically checks the open-source software used in your applications. The goal is to manage risks, find security issues, and make sure licensing rules are followed.
<br></br>
Since open-source components are now widely used in almost every industry, keeping track of them is very important to protect companies from vulnerabilities and other problems. Because modern software development relies so heavily on open source, doing this manually is not practical. That’s why automated tools are used to scan source code, libraries, and dependencies to detect risks quickly and accurately.
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
                Our Component Security Analysis Process
              </h2>
              <p className="text-gray-700 mb-8 leading-relaxed">
                Our component security analysis follows a clear step-by-step approach to find, document, and secure all external libraries in your software. We use powerful tools and proven methods to give you complete visibility into your software dependencies and help you manage security risks effectively.
              </p>
              
             
        

              {/* Vertical Tabs Layout */}
<div className="flex gap-8 mb-8">
  {/* Vertical Tab Navigation */}
  <div className="flex flex-col space-y-2 min-w-[200px]">
    {[
      { id: "scanning", label: "Code Scanning" },
      { id: "documentation", label: "Library Documentation" },
      { id: "accuracy", label: "Detection Accuracy" },
      { id: "vulnerability", label: "Security Risk Detection" },
      { id: "alerts", label: "Security Alerts" },
      { id: "policy", label: "Compliance Management" },
      { id: "integration", label: "CI/CD Integration" },
    ].map((tab) => (
      <button
        key={tab.id}
        className={`text-left px-4 py-3 rounded-lg font-semibold transition-all ${
          activeTab === tab.id ? "text-white" : "text-gray-700"
        }`}
        style={{
          background:
            activeTab === tab.id
              ? "linear-gradient(90deg, rgb(217,47,97), rgb(143,15,56))" // 🔹 active = red gradient
              : "transparent",
        }}
        onMouseEnter={(e) => {
          if (activeTab !== tab.id) {
            (e.currentTarget as HTMLButtonElement).style.background =
              "linear-gradient(90deg, rgba(217,47,97,0.2), rgba(143,15,56,0.2))"; // 🔹 hover = light gradient
          }
        }}
        onMouseLeave={(e) => {
          if (activeTab !== tab.id) {
            (e.currentTarget as HTMLButtonElement).style.background = "transparent"; // back to normal
          }
        }}
        onClick={() => setActiveTab(tab.id)}
      >
        {tab.label}
      </button>
    ))}
  </div>

  {/* Tab Content */}
  <div className="flex-1 bg-gray-50 p-6 rounded-lg shadow-md">
    <h3 className="text-xl font-bold text-gray-900 mb-4 capitalize">
      {activeTab === "scanning"
        ? "Codebase Scanning & SBOM Generation"
        : activeTab === "documentation"
        ? "Library Documentation & Details"
        : activeTab === "accuracy"
        ? "Detection Accuracy & Reliability"
        : activeTab === "vulnerability"
        ? "Security Risk Detection"
        : activeTab === "alerts"
        ? "Security Alerts & Notifications"
        : activeTab === "policy"
        ? "Compliance Management & Remediation"
        : "CI/CD Integration"}
    </h3>
    <p className="text-gray-700 leading-relaxed">
      {tabContent[activeTab]}
    </p>
  </div>
</div>

              <div className="text-center mt-8">
                <button
                  className="bg-emerald-500 hover:bg-emerald-600 text-white px-8 py-3 rounded-lg font-semibold transition-colors"    style={{
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
                  src="https://images.unsplash.com/photo-1555066931-4365d14bab8c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80" 
                  alt="Software Composition Analysis" 
                  className="rounded-lg shadow-lg"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Benefits Section */}
      <BenefitsSection 
        benefits={scaBenefits}
        title="Benefits"
      />

      <ProcessCarousel title="SCA Penetration Testing Process" />
      <ClientCarousel className="overflow-x-hidden" />
      <SoftwareCompositionAnalysisFAQ />
      <Footer />

      {/* Contact Popup */}
      <ContactPopup
        isOpen={isContactOpen}
        onClose={() => setIsContactOpen(false)}
      />
    </div>
  );
};

export default SoftwareCompositionAnalysis;