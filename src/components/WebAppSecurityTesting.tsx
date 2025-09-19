

import React, { useState } from 'react';
import { Monitor, Shield, FileText, Award, DollarSign, CheckCircle, AlertTriangle, Settings, ChevronLeft, ChevronRight } from 'lucide-react';
import Header from "./Header";
import ContactPopup from './ContactPopup'; // import the popup
import ProcessCarousel from './ProcessCarousel';
import Footer from './Footer';
import WebAppSecurityFAQ from './FAQ/WebAppSecurityFAQ';
import ClientCarousel from "./ClientCarousel";
import ServiceSection from "./ServiceSection";
const WebAppSecurityTesting = () => {
  const [isContactOpen, setIsContactOpen] = useState(false);
  const [activeTab, setActiveTab] = useState<'black' | 'gray' | 'white'>('black');

  // Content for each tab
  const tabContent = {
    black: `Black Box Testing is a method where testers simulate an external attack with no prior knowledge of the application. This helps identify security vulnerabilities from an attacker's perspective, focusing on input validation, authentication, and exposed endpoints.`,
    gray: `Gray Box Testing is a hybrid approach where testers have limited knowledge of the application. This allows evaluation of internal processes and system behavior while maintaining an external perspective, ensuring both technical and business logic vulnerabilities are identified.`,
    white: `White Box Testing provides full access to the application's source code, architecture, and internal documentation. This comprehensive approach ensures deep inspection of logic flaws, code security, and system configuration vulnerabilities that may not be detected through external testing alone.`
  };

  return (
    <div className="min-h-screen bg-white">
      <Header />

      {/* Hero Section */}
      {/* <div className="relative bg-gradient-to-br from-emerald-600 via-teal-600 to-cyan-600 text-white py-20">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl lg:text-5xl font-bold mb-6 text-emerald-400">
                Web Application Security Testing
              </h1>
              <p className="text-xl mb-8 text-gray-100">
                Discovering Security Flaws in Your Digital Applications
              </p>
              <div className="flex flex-wrap gap-4">
                <button
                  className="bg-emerald-500 hover:bg-emerald-600 text-white px-6 py-3 rounded-lg font-semibold flex items-center gap-2 transition-colors"
                  onClick={() => setIsContactOpen(true)} // open popup
                >
                  <FileText className="w-5 h-5" />
                  Sample VAPT Report
                </button>
              </div>
            </div>
            <div className="relative">
              <img 
                src="https://images.unsplash.com/photo-1555949963-aa79dcee981c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80" 
                alt="Web Application Security Testing" 
                className="rounded-lg shadow-2xl"
              />
            </div>
          </div>
        </div>
      </div> */}
 <ServiceSection
        title="Web Application Security Testing"
        subtitle="Discovering Security Flaws in Your Digital Applications"
        image="https://images.unsplash.com/photo-1555949963-aa79dcee981c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80"
        onContactClick={() => setIsContactOpen(true)}
      />
      {/* Overview Section  text-emerald-400 */}
      <div className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              <span className="border-b-4 border-emerald-500 pb-2">Overview : Web Application Security Testing</span>
            </h2>
          </div>
          <div className="max-w-4xl mx-auto text-center">
            <p className="text-lg text-gray-700 leading-relaxed">
              Web application security assessment involves simulating real-world cyber attacks on your digital platforms to uncover potential security weaknesses that malicious actors might exploit. These applications serve as critical business assets and attractive targets for cybercriminals. Our comprehensive security evaluation focuses on proactive vulnerability discovery, helping prevent potential breaches that could compromise sensitive customer data and financial assets.
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
                Web Application Security Testing Methodology
              </h2>
              <p className="text-gray-700 mb-8 leading-relaxed">
                VAPTlabs employs a thorough methodology for conducting security assessments that identifies both technical vulnerabilities and business logic flaws. Our approach includes comprehensive security checklists based on industry frameworks like OWASP Top 10, SANS25, OSSTMM, and others.
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
                {/* <button className="bg-emerald-500 hover:bg-emerald-600 text-white px-8 py-3 rounded-lg font-semibold transition-colors">
                  Get Free Consultation
                </button> */}

                <button
               className="bg-emerald-500 hover:bg-emerald-600 text-white px-8 py-3 rounded-lg font-semibold transition-colors"
                  onClick={() => setIsContactOpen(true)} // open popup
                >
               
                  Get Free Consultation
                </button>

              </div>
            </div>

            {/* Right Image */}
            <div className="relative">
              <div className="bg-gradient-to-br from-emerald-100 to-emerald-200 rounded-lg p-8">
                <img 
                  src="https://images.unsplash.com/photo-1551434678-e076c223a692?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80" 
                  alt="Security Testing Process" 
                  className="rounded-lg shadow-lg"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Benefits Section */}
      <div className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              <span className="border-b-4 border-emerald-500 pb-2">Benefits</span>
            </h2>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Cost Saving */}
            <div className="text-center">
              <div className="relative w-32 h-32 mx-auto mb-6">
                <div className="absolute inset-0 border-4 border-dashed border-emerald-400 rounded-full"></div>
                <div className="absolute inset-2 bg-white rounded-full flex items-center justify-center">
                  <DollarSign className="w-12 h-12 text-gray-800" />
                </div>
                <div className="absolute -top-2 -right-2">
                  <div className="w-8 h-8 bg-emerald-500 rounded-full flex items-center justify-center">
                    <ChevronRight className="w-4 h-4 text-white" />
                  </div>
                </div>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Cost Saving</h3>
            </div>

            {/* Compliance */}
            <div className="text-center">
              <div className="relative w-32 h-32 mx-auto mb-6">
                <div className="absolute inset-0 border-4 border-dashed border-emerald-400 rounded-full"></div>
                <div className="absolute inset-2 bg-white rounded-full flex items-center justify-center">
                  <CheckCircle className="w-12 h-12 text-gray-800" />
                </div>
                <div className="absolute -top-2 -right-2">
                  <div className="w-8 h-8 bg-emerald-500 rounded-full flex items-center justify-center">
                    <ChevronRight className="w-4 h-4 text-white" />
                  </div>
                </div>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Adherence to</h3>
              <h3 className="text-xl font-semibold text-gray-900">Compliance</h3>
            </div>

            {/* Reduced Outage */}
            <div className="text-center">
              <div className="relative w-32 h-32 mx-auto mb-6">
                <div className="absolute inset-0 border-4 border-dashed border-emerald-400 rounded-full"></div>
                <div className="absolute inset-2 bg-white rounded-full flex items-center justify-center">
                  <AlertTriangle className="w-12 h-12 text-gray-800" />
                </div>
                <div className="absolute -top-2 -right-2">
                  <div className="w-8 h-8 bg-emerald-500 rounded-full flex items-center justify-center">
                    <ChevronRight className="w-4 h-4 text-white" />
                  </div>
                </div>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Reduced Outage</h3>
            </div>

            {/* Risk Management */}
            <div className="text-center">
              <div className="relative w-32 h-32 mx-auto mb-6">
                <div className="absolute inset-0 border-4 border-dashed border-emerald-400 rounded-full"></div>
                <div className="absolute inset-2 bg-white rounded-full flex items-center justify-center">
                  <Settings className="w-12 h-12 text-gray-800" />
                </div>
                <div className="absolute -top-2 -right-2">
                  <div className="w-8 h-8 bg-emerald-500 rounded-full flex items-center justify-center">
                    <ChevronRight className="w-4 h-4 text-white" />
                  </div>
                </div>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Risk Management</h3>
            </div>
          </div>
        </div>
      </div>


{/* 
      <div className="py-16 bg-white">
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
   

    <div className="text-center mb-12">
      <p className="text-purple-500 font-semibold mb-2 tracking-wider uppercase">
        Process
      </p>
      <h2 className="text-3xl font-bold text-gray-900 mb-6">
        Our Web App Penetration Testing Process
      </h2>
      <p className="text-lg text-gray-600 max-w-3xl mx-auto">
        At QuaLSec, we safeguard your web applications with a meticulous penetration testing process. 
        Our structured methodology ensures that every potential vulnerability is identified, analyzed, 
        and effectively addressed.
      </p>
    </div>


    <div className="mb-12">
      <div className="flex flex-wrap justify-center items-center gap-4 mb-8">
        <div className="bg-gradient-to-r from-blue-500 to-purple-600 text-white px-6 py-3 rounded-full font-semibold">
          Define Scope
        </div>
        <ChevronRight className="w-6 h-6 text-gray-400" />

        <div className="border-2 border-gray-300 text-gray-600 px-6 py-3 rounded-full font-semibold">
          Information Gathering
        </div>
        <ChevronRight className="w-6 h-6 text-gray-400" />

        <div className="border-2 border-gray-300 text-gray-600 px-6 py-3 rounded-full font-semibold">
          Enumeration
        </div>
        <ChevronRight className="w-6 h-6 text-gray-400" />

        <div className="border-2 border-gray-300 text-gray-600 px-6 py-3 rounded-full font-semibold">
          Attack and Penetration
        </div>
        <ChevronRight className="w-6 h-6 text-gray-400" />

        <div className="border-2 border-gray-300 text-gray-600 px-6 py-3 rounded-full font-semibold">
          Reporting
        </div>
        <ChevronRight className="w-6 h-6 text-gray-400" />

        <div className="border-2 border-gray-300 text-gray-600 px-6 py-3 rounded-full font-semibold">
          Remediation Testing
        </div>
      </div>
    </div>


    <div className="grid lg:grid-cols-2 gap-12 items-center">

      <div className="bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg p-8">
        <div className="flex items-center justify-center h-64">
          <img
            src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80"
            alt="Define Scope Process"
            className="rounded-lg opacity-90"
          />
        </div>
      </div>


      <div>
        <h3 className="text-2xl font-bold text-blue-500 mb-6">Define Scope</h3>
        <p className="text-lg text-gray-700 leading-relaxed">
          We collaborate closely with your team to define the testing boundaries, 
          pinpoint critical assets, and highlight potential risk areas. 
          This tailored strategy guarantees a focused, accurate, and effective security assessment.
        </p>


        <div className="flex items-center justify-between mt-8">
          <button className="p-3 border-2 border-gray-300 rounded-full hover:bg-gray-50 transition-colors">
            <ChevronLeft className="w-6 h-6 text-gray-600" />
          </button>
          <button className="p-3 border-2 border-gray-300 rounded-full hover:bg-gray-50 transition-colors">
            <ChevronRight className="w-6 h-6 text-gray-600" />
          </button>
        </div>
      </div>
    </div>
  </div>
</div>
 */}


<ProcessCarousel title="Web Application Penetration Testing Process"/>
      <ClientCarousel />
      <WebAppSecurityFAQ />
<Footer />

      {/* Contact Popup */}
      <ContactPopup
        isOpen={isContactOpen}
        onClose={() => setIsContactOpen(false)}
      />
    </div>
  );
};

export default WebAppSecurityTesting;
