import React, { useState } from 'react';
import { Shield, FileText, Lock, Star, Code, Search } from 'lucide-react';
import Header from "./Header";
import ContactPopup from './ContactPopup';
import ProcessCarousel from './ProcessCarousel';
import Footer from './Footer';
import RootCauseAnalysisFAQ from './FAQ/RootCauseAnalysisFAQ';
import ClientCarousel from "./ClientCarousel";
import ServiceSection from "./ServiceSection";
import BenefitsSection from './BenefitsSection';
const RED_GRAD = "linear-gradient(to right, rgb(217, 47, 97), rgb(143, 15, 56))";
const RootCauseAnalysis = () => {
  const [isContactOpen, setIsContactOpen] = useState(false);
  const [activeTab, setActiveTab] = useState<'investigation' | 'analysis' | 'timeline' | 'causes' | 'remediation'>('investigation');

  // Benefits data for root cause analysis
  const rootCauseBenefits = [
    {
      icon: <Shield className="w-12 h-12 text-gray-800" />,
      title: "Incident Investigation",
      description: "Thorough investigation of security incidents to identify underlying causes and prevent recurrence."
    },
    {
      icon: <FileText className="w-12 h-12 text-gray-800" />,
      title: "Forensic Analysis",
      description: "Digital forensics and evidence collection to understand attack vectors and impact."
    },
    {
      icon: <Lock className="w-12 h-12 text-gray-800" />,
      title: "Vulnerability Assessment",
      description: "Identify systemic vulnerabilities that enabled security incidents to occur."
    },
    {
      icon: <Star className="w-12 h-12 text-gray-800" />,
      title: "Process Improvement",
      description: "Recommendations for improving security processes and incident response procedures."
    },
    {
      icon: <Code className="w-12 h-12 text-gray-800" />,
      title: "Technical Analysis",
      description: "Deep technical analysis of systems, logs, and artifacts to understand attack methods."
    },
    {
      icon: <Search className="w-12 h-12 text-gray-800" />,
      title: "Timeline Reconstruction",
      description: "Detailed reconstruction of incident timelines and attack progression."
    }
  ];

  // Content for each tab
  const tabContent = {
    investigation: `We start by gathering all available evidence from the security incident. This includes collecting system logs, network traffic data, user activity records, and any other digital evidence. Our team carefully preserves the integrity of all evidence to ensure accurate analysis and maintain a proper chain of custody throughout the investigation process.`,
    analysis: `Our experts analyze the collected evidence to understand what happened during the incident. We examine system behaviors, identify unusual activities, and look for patterns that indicate how the security breach occurred. This detailed analysis helps us understand the scope and impact of the incident.`,
    timeline: `We create a detailed timeline of events leading up to, during, and after the security incident. This chronological reconstruction helps us understand the sequence of actions taken by attackers and identify the exact moment when the breach occurred. The timeline is crucial for understanding the full story of the incident.`,
    causes: `After analyzing all evidence and creating the timeline, we identify the root causes that allowed the incident to happen. This includes technical vulnerabilities, process failures, human errors, or policy gaps. We focus on finding the fundamental issues rather than just the symptoms of the problem.`,
    remediation: `Based on our findings, we provide clear recommendations to fix the identified root causes and prevent similar incidents in the future. Our remediation plan includes immediate actions to address urgent issues and long-term strategies to strengthen your overall security posture.`
  };

  return (
    <div className="min-h-screen bg-white overflow-x-hidden">
      <Header />

      {/* Hero Section */}
      <ServiceSection
        title="Root Cause Analysis"
        subtitle="Comprehensive investigation of security incidents to identify underlying causes and prevent future occurrences."
        image="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80"
        onContactClick={() => setIsContactOpen(true)}
      />

      {/* Overview Section */}
      <div className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              <span  style={{
                  borderBottom: '4px solid',
                  borderImage: `${RED_GRAD} 1`, // CHANGED: gradient underline
                }}>Overview : Root Cause Analysis</span>
            </h2>
          </div>
          <div className="max-w-4xl mx-auto text-center">
            <p className="text-lg text-gray-700 leading-relaxed">
              Root cause analysis is a systematic investigation methodology used to identify the fundamental causes of security incidents, breaches, and system failures. This process involves comprehensive examination of technical systems, processes, and human factors that contributed to security events. Our thorough analysis helps organizations understand how incidents occurred, what vulnerabilities were exploited, and how to prevent similar incidents in the future.
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
                How We Conduct Root Cause Analysis
              </h2>
              <p className="text-gray-700 mb-8 leading-relaxed">
                Our root cause analysis follows a systematic approach to investigate security incidents and identify why they happened. We use proven methodologies and industry best practices to ensure thorough investigation and accurate findings that help prevent future incidents.
              </p>
              
           

              <div className="flex gap-8 mb-8">
  <div className="flex flex-col space-y-2 min-w-[200px]">
    {[
      { id: "investigation", label: "Evidence Collection" },
      { id: "analysis", label: "Incident Analysis" },
      { id: "timeline", label: "Timeline Reconstruction" },
      { id: "causes", label: "Root Cause Identification" },
      { id: "remediation", label: "Remediation Planning" },
    ].map((tab) => (
      <button
        key={tab.id}
        className={`text-left px-4 py-3 rounded-lg font-semibold transition-all ${
          activeTab === tab.id ? "text-white" : "text-gray-700"
        }`}
        style={{
          background:
            activeTab === tab.id
              ? "linear-gradient(90deg, rgb(217,47,97), rgb(143,15,56))" // active: full gradient
              : "transparent",
        }}
        onMouseEnter={(e) => {
          if (activeTab !== tab.id) {
            (e.currentTarget as HTMLButtonElement).style.background =
              "linear-gradient(90deg, rgba(217,47,97,0.2), rgba(143,15,56,0.2))"; // hover: light gradient
          }
        }}
        onMouseLeave={(e) => {
          if (activeTab !== tab.id) {
            (e.currentTarget as HTMLButtonElement).style.background = "transparent"; // back to transparent
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
      {activeTab === "investigation"
        ? "Evidence Collection"
        : activeTab === "analysis"
        ? "Incident Analysis"
        : activeTab === "timeline"
        ? "Timeline Reconstruction"
        : activeTab === "causes"
        ? "Root Cause Identification"
        : "Remediation Planning"}
    </h3>
    <p className="text-gray-700 leading-relaxed">
      {tabContent[activeTab]}
    </p>
  </div>
</div>

              
              <div className="text-center mt-8">
                <button
                  className="bg-emerald-500 hover:bg-emerald-600 text-white px-8 py-3 rounded-lg font-semibold transition-colors"  style={{
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
              <div className="bg-gradient-to-br from-emerald-100 to-emerald-200 rounded-lg p-8"  style={{ background: 'linear-gradient(180deg, rgba(217,47,97,0.06), rgba(143,15,56,0.04))' }}>
                <img 
                  src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80" 
                  alt="Root Cause Analysis" 
                  className="rounded-lg shadow-lg"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Benefits Section */}
      <BenefitsSection 
        benefits={rootCauseBenefits}
        title="Benefits"
      />

      <ProcessCarousel title="Root Cause Analysis Process" />
      <ClientCarousel />
      <RootCauseAnalysisFAQ />
      <Footer />

      {/* Contact Popup */}
      <ContactPopup
        isOpen={isContactOpen}
        onClose={() => setIsContactOpen(false)}
      />
    </div>
  );
};

export default RootCauseAnalysis;