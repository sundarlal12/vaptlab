import React from 'react';
import { Suspense, useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Loader from './Loader';
import NotFound from './NotFound';

// Lazy load all route components
const App = React.lazy(() => import('../App'));
const WebAppSecurityTesting = React.lazy(() => import('./WebAppSecurityTesting'));
const MobileAppSecurityTesting = React.lazy(() => import('./MobileAppSecurityTesting'));
const NetworkPenetrationTesting = React.lazy(() => import('./NetworkPenetrationTesting'));
const CloudPenetrationTesting = React.lazy(() => import('./CloudPenetrationTesting'));
const IoTSecurityTesting = React.lazy(() => import('./IoTSecurityTesting'));
const APIPenetrationTesting = React.lazy(() => import('./APIPenetrationTesting'));
const SecureCodeReview = React.lazy(() => import('./SecureCodeReview'));
const MedicalDeviceSecurityTesting = React.lazy(() => import('./MedicalDeviceSecurityTesting'));
const ThreatModeling = React.lazy(() => import('./ThreatModeling'));
const RootCauseAnalysis = React.lazy(() => import('./RootCauseAnalysis'));
const AboutVAPTlabs = React.lazy(() => import('./AboutVAPTlabs'));
const OurTeam = React.lazy(() => import('./OurTeam'));
const OurClients = React.lazy(() => import('./OurClients'));
const RedTeaming = React.lazy(() => import('./RedTeaming'));
const SoftwareCompositionAnalysis = React.lazy(() => import('./SoftwareCompositionAnalysis'));
const OTSecurity = React.lazy(() => import('./OTSecurity'));
const PrivacyPolicy = React.lazy(() => import('./PrivacyPolicy'));
const PCIDSSPentesting = React.lazy(() => import('./PCIDSSPentesting'));
const ISO27001Pentesting = React.lazy(() => import('./ISO27001Pentesting'));
const SOC2Pentesting = React.lazy(() => import('./SOC2Pentesting'));
const GDPRPentesting = React.lazy(() => import('./GDPRPentesting'));
const HIPAAPentesting = React.lazy(() => import('./HIPAAPentesting'));
const FDA510KCompliance = React.lazy(() => import('./FDA510KCompliance'));
const TermsOfService = React.lazy(() => import('./TermsOfService'));
const ContactUs = React.lazy(() => import('./ContactUs'));
// Placeholder components for routes that don't exist yet
const ComingSoon: React.FC<{ title: string }> = ({ title }) => (
  <div className="min-h-screen bg-gradient-to-br from-gray-50 via-blue-50 to-purple-50 flex items-center justify-center px-4">
    <div className="max-w-2xl mx-auto text-center">
      <div className="w-32 h-32 bg-gradient-to-br from-emerald-400 to-emerald-600 rounded-full flex items-center justify-center mx-auto mb-8">
        <span className="text-4xl font-bold text-white">🚀</span>
      </div>
      <h1 className="text-4xl font-bold text-gray-900 mb-6">{title}</h1>
      <p className="text-xl text-gray-600 mb-8">This page is coming soon. We're working hard to bring you the best cybersecurity solutions.</p>
      <a href="/" className="bg-emerald-500 hover:bg-emerald-600 text-white px-8 py-3 rounded-lg font-semibold transition-colors">
        Back to Home
      </a>
    </div>
  </div>
);

// Wrapper component to handle loading states
const PageWrapper: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Set loading to false after component mounts and renders
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 100);

    return () => clearTimeout(timer);
  }, []);

  if (isLoading) {
    return <Loader text="Loading page..." />;
  }

  return <>{children}</>;
};

const Router: React.FC = () => {
  return (
    <BrowserRouter>
      <Suspense fallback={<Loader text="Loading page..." />}>
        <Routes>
          {/* Main Routes */}
          <Route path="/" element={<PageWrapper><App /></PageWrapper>} />
          
          {/* Service Routes */}
          <Route path="/services/web-app-security" element={<PageWrapper><WebAppSecurityTesting /></PageWrapper>} />
          <Route path="/services/mobile-app-security" element={<PageWrapper><MobileAppSecurityTesting /></PageWrapper>} />
          <Route path="/services/network-penetration-testing" element={<PageWrapper><NetworkPenetrationTesting /></PageWrapper>} />
          <Route path="/services/cloud-penetration-testing" element={<PageWrapper><CloudPenetrationTesting /></PageWrapper>} />
          <Route path="/services/iot-security-testing" element={<PageWrapper><IoTSecurityTesting /></PageWrapper>} />
          <Route path="/services/api-penetration-testing" element={<PageWrapper><APIPenetrationTesting /></PageWrapper>} />
          <Route path="/services/ot-security" element={<PageWrapper><OTSecurity /></PageWrapper>} />
          <Route path="/services/secure-code-review" element={<PageWrapper><SecureCodeReview /></PageWrapper>} />
          <Route path="/services/medical-device-security-testing" element={<PageWrapper><MedicalDeviceSecurityTesting /></PageWrapper>} />
          <Route path="/services/threat-modeling" element={<PageWrapper><ThreatModeling /></PageWrapper>} />
          <Route path="/services/root-cause-analysis" element={<PageWrapper><RootCauseAnalysis /></PageWrapper>} />
          <Route path="/services/red-teaming" element={<PageWrapper><RedTeaming /></PageWrapper>} />
          <Route path="/services/software-composition-analysis" element={<PageWrapper><SoftwareCompositionAnalysis /></PageWrapper>} />
          <Route path="/services/external-network-pentesting" element={<PageWrapper><ComingSoon title="External Network Penetration Testing" /></PageWrapper>} />
          <Route path="/services/iot-pentesting" element={<PageWrapper><ComingSoon title="IoT Penetration Testing" /></PageWrapper>} />


       <Route path="/contact" element={<ContactUs />} />
          
          {/* About Us Routes */}
          <Route path="/about/vaptlabs" element={<PageWrapper><AboutVAPTlabs /></PageWrapper>} />
          <Route path="/about/team" element={<PageWrapper><OurTeam /></PageWrapper>} />
          <Route path="/about/clients" element={<PageWrapper><OurClients /></PageWrapper>} />

          {/* Compliance Routes */}
          <Route path="/compliance/pci-dss" element={<PageWrapper><PCIDSSPentesting /></PageWrapper>} />
          <Route path="/compliance/iso-27001" element={<PageWrapper><ISO27001Pentesting /></PageWrapper>} />
          <Route path="/compliance/soc2" element={<PageWrapper><SOC2Pentesting /></PageWrapper>} />
          <Route path="/compliance/gdpr" element={<PageWrapper><GDPRPentesting /></PageWrapper>} />
          <Route path="/compliance/hipaa" element={<PageWrapper><HIPAAPentesting /></PageWrapper>} />
          {/*  <Route path="/compliance/fda-510k" element={<PageWrapper><FDA510KCompliance /></PageWrapper>} />
          */}

          {/* Challenge Routes */}
          <Route path="/challenges/vapt-report" element={<PageWrapper><ComingSoon title="Professional VAPT Report" /></PageWrapper>} />
          <Route path="/challenges/app-security" element={<PageWrapper><ComingSoon title="Application Security Solutions" /></PageWrapper>} />
          <Route path="/challenges/compliance" element={<PageWrapper><ComingSoon title="Security Compliance" /></PageWrapper>} />
          <Route path="/challenges/vulnerability-check" element={<PageWrapper><ComingSoon title="Vulnerability Assessment" /></PageWrapper>} />
          <Route path="/challenges/third-party-pentest" element={<PageWrapper><ComingSoon title="Third-Party Penetration Testing" /></PageWrapper>} />

          {/* Company Routes */}
          <Route path="/about" element={<PageWrapper><ComingSoon title="About Us" /></PageWrapper>} />
          <Route path="/team" element={<PageWrapper><ComingSoon title="Our Team" /></PageWrapper>} />
          <Route path="/careers" element={<PageWrapper><ComingSoon title="Careers" /></PageWrapper>} />
          <Route path="/case-studies" element={<PageWrapper><ComingSoon title="Case Studies" /></PageWrapper>} />
          <Route path="/blog" element={<PageWrapper><ComingSoon title="Blog" /></PageWrapper>} />
          <Route path="/press-kit" element={<PageWrapper><ComingSoon title="Press Kit" /></PageWrapper>} />
          <Route path="/partnerships" element={<PageWrapper><ComingSoon title="Partnerships" /></PageWrapper>} />

          {/* Other Routes */}
          <Route path="/pricing" element={<PageWrapper><ComingSoon title="Pricing" /></PageWrapper>} />
          <Route path="/resources" element={<PageWrapper><ComingSoon title="Resources" /></PageWrapper>} />
          <Route path="/contact" element={<PageWrapper><ComingSoon title="Contact Us" /></PageWrapper>} />
          <Route path="/get-quote" element={<PageWrapper><ComingSoon title="Get a Quote" /></PageWrapper>} />

          {/* Legal Routes */}
          <Route path="/privacy-policy" element={<PageWrapper><PrivacyPolicy /></PageWrapper>} />
          <Route path="/terms-of-service" element={<PageWrapper><TermsOfService /></PageWrapper>} />
          <Route path="/security" element={<PageWrapper><ComingSoon title="Security" /></PageWrapper>} />

          {/* 404 Route */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Suspense>
    </BrowserRouter>
  );
};

export default Router;