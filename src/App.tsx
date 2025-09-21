import React, { useState, useEffect } from 'react';
import { useNavigate } from "react-router-dom";
import { Users,CheckCircle,Globe,FileSearch,MapPin,FileText,ChevronDown, Menu, X, Monitor, Smartphone, Settings, Cloud, Shield, Cpu, ChevronLeft, ChevronRight, MessageCircle, ArrowUpRight, Network, Lock, Code, Heart, AlertTriangle, Search, UserCheck, Package, ArrowRight } from 'lucide-react';
import WebAppSecurityTesting from './components/WebAppSecurityTesting';
import MobileAppSecurityTesting from './components/MobileAppSecurityTesting';
import NetworkPenetrationTesting from './components/NetworkPenetrationTesting';
import CloudPenetrationTesting from './components/CloudPenetrationTesting';
import IoTSecurityTesting from './components/IoTSecurityTesting';
import APIPenetrationTesting from './components/APIPenetrationTesting';
import SecureCodeReview from './components/SecureCodeReview';
import MedicalDeviceSecurityTesting from './components/MedicalDeviceSecurityTesting';
import ThreatModeling from './components/ThreatModeling';
import RootCauseAnalysis from './components/RootCauseAnalysis';
import RedTeaming from './components/RedTeaming';
import SoftwareCompositionAnalysis from './components/SoftwareCompositionAnalysis';
import OTSecurity from './components/OTSecurity';
import Header from './components/Header';
import GetQuoteSection from "./components/GetQuoteSection";
import Footer from "./components/Footer";
import Testimonials from "./components/Testimonials";
import ClientCarousel from "./components/ClientCarousel";
import OurServices from "./components/OurServices";
import RaspHero from "./components/RaspHero";
import RadarHero from "./components/RadarHero";

import WhyChooseUs from "./components/WhyChooseUs";
import MainFAQ from "./components/MainFAQ";
import Benefits from "./components/Benefits";

import VaptRadar from "./components/VaptRadar";

import CookieConsent from "./components/CookieConsentBar";

const FAQItem = ({ question, answer, isOpen, onToggle }: { 
  question: string; 
  answer: string; 
  isOpen: boolean; 
  onToggle: () => void; 
}) => {
  return (
    <div className="border border-gray-200 rounded-lg mb-4 overflow-hidden shadow-sm">
      <button
        onClick={onToggle}
        className="w-full px-6 py-4 text-left bg-gradient-to-r from-green-50 to-emerald-50 hover:from-green-100 hover:to-emerald-100 transition-all duration-300 flex justify-between items-center"
      >
        <h3 className="text-lg font-semibold text-gray-800">{question}</h3>
        <ChevronDown 
          className={`w-5 h-5 text-green-600 transition-transform duration-300 ${
            isOpen ? 'rotate-180' : ''
          }`}
        />
      </button>
      <div 
        className={`overflow-hidden transition-all duration-300 ${
          isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <div className="px-6 py-4 bg-white border-t border-gray-100">
          <div className="text-gray-600 leading-relaxed" dangerouslySetInnerHTML={{ __html: answer }} />
        </div>
      </div>
    </div>
  );
};

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [openMenu, setOpenMenu] = useState<string | null>(null);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isMobileServicesOpen, setIsMobileServicesOpen] = useState(false);
  const [isMobileSolutionsOpen, setIsMobileSolutionsOpen] = useState(false);
  const [currentTestimonial, setCurrentTestimonial] = useState(0);
  const [currentClientSlide, setCurrentClientSlide] = useState(0);
  const [activeIndustry, setActiveIndustry] = useState('fintech');
    const [currentPage, setCurrentPage] = useState('home');
  const [openFAQ, setOpenFAQ] = React.useState<number | null>(null);
  const navigate = useNavigate();
  const toggleFAQ = (index: number) => {
    setOpenFAQ(openFAQ === index ? null : index);
  };

 
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const target = event.target as HTMLElement;
      if (!target.closest('.dropdown-container')) {
        setOpenMenu(null);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  
  const handleMenuClick = (menuName: string) => {
    setOpenMenu(openMenu === menuName ? null : menuName);
  };

   const handleAllServices = () => {
    // e.g. navigate to /services or open modal
    console.log("All Services clicked");
  };

  const handleNavigation = (page: string) => {
    setCurrentPage(page);
    setOpenMenu(null);
    setIsMobileMenuOpen(false);
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMenus = () => {
    setOpenMenu(null);
    setIsMobileMenuOpen(false);
  };

  


  const industries = ['fintech', 'ecommerce', 'saas', 'ai', 'healthcare'];
  
  const getIndustryIndex = () => {
    return industries.indexOf(activeIndustry);
  };

  const nextIndustry = () => {
    const currentIndex = getIndustryIndex();
    const nextIndex = (currentIndex + 1) % industries.length;
    setActiveIndustry(industries[nextIndex]);
  };

  const prevIndustry = () => {
    const currentIndex = getIndustryIndex();
    const prevIndex = (currentIndex - 1 + industries.length) % industries.length;
    setActiveIndustry(industries[prevIndex]);
  };

  if (currentPage === 'web-app-security') {
    return <WebAppSecurityTesting />;
  }

   if (currentPage === 'mobile-app-security') {
    return <MobileAppSecurityTesting />;
  }

  if (currentPage === 'network-penetration-testing') {
    return <NetworkPenetrationTesting />;
  }

  if (currentPage === 'cloud-penetration-testing') {
    return <CloudPenetrationTesting />;
  }

  if (currentPage === 'iot-security-testing') {
    return <IoTSecurityTesting />;
  }

  if (currentPage === 'api-penetration-testing') {
    return <APIPenetrationTesting />;
  }

  if (currentPage === 'secure-code-review') {
    return <SecureCodeReview />;
  }

  if (currentPage === 'medical-device-security-testing') {
    return <MedicalDeviceSecurityTesting />;
  }

  if (currentPage === 'threat-modeling') {
    return <ThreatModeling />;
  }

  if (currentPage === 'root-cause-analysis') {
    return <RootCauseAnalysis />;
  }

  if (currentPage === 'red-teaming') {
    return <RedTeaming />;
  }

  if (currentPage === 'software-composition-analysis') {
    return <SoftwareCompositionAnalysis />;
  }

  if (currentPage === 'ot-security') {
    return <OTSecurity />;
  }

  return (
    <div className="min-h-screen bg-white overflow-x-hidden">
      <Header />




 <RaspHero
        raspLink="https://vaptlabs.com"
        ctaText="Get Protected Now"
        badgeText="Best VAPT Testing Service Provider in India"
        heroLetter="VAPT"
      />


        {/* <VaptRadar /> */}
      
      
     {/* <RadarHero
       
      />  
 */}
   


      <ClientCarousel className="overflow-x-hidden" />
  <OurServices onAllServices={handleAllServices} />


      {/* CTA Section - Green Gradient Background */}
      {/*
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-r from-emerald-500 via-green-600 to-emerald-500 rounded-3xl p-12 text-center text-white">
            <p className="text-sm font-semibold mb-4 tracking-wider uppercase opacity-90">
              STAY ONE STEP AHEAD
            </p>
            <h2 className="text-3xl lg:text-4xl font-bold mb-8 max-w-4xl mx-auto">
              Let VAPTlabs help you find gaps in your security and suggest fixes to protect your digital assets.
            </h2>
            <button   onClick={() => navigate("/contact")} className="bg-white text-emerald-600 px-8 py-3 rounded-full font-semibold hover:bg-gray-100 transition-colors duration-300">
              Get A Quote
            </button>
          </div>
        </div>
      </section>
*/}

      <section className="py-20">
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <div
      className="rounded-3xl p-12 text-center text-white"
      style={{
        background: "linear-gradient(to right, rgb(217, 47, 97), rgb(143, 15, 56))",
      }}
    >
      <p className="text-sm font-semibold mb-4 tracking-wider uppercase opacity-90">
        STAY ONE STEP AHEAD
      </p>
      <h2 className="text-3xl lg:text-4xl font-bold mb-8 max-w-4xl mx-auto">
        Let VAPTlabs help you find gaps in your security and suggest fixes to protect your digital assets.
      </h2>
      <button
        onClick={() => navigate("/contact")}
        className="bg-white text-pink-700 px-8 py-3 rounded-full font-semibold hover:bg-gray-100 transition-colors duration-300"
      >
        Get A Quote
      </button>
    </div>
  </div>
</section>


 <Testimonials className="overflow-x-hidden" />
    

      {/* Why Choose Us Section */}
           <WhyChooseUs />

      {/* Simplifying Security Section */}
      {/* Simplifying Security Section */}
<Benefits />

      {/* FAQ Section */}

   

<MainFAQ />
      {/* Get a Quote Section */}
  


      {/* Chat Widget */}
  
      {/* Footer */}
      
<div>
      {/* Other sections */}
      <GetQuoteSection />
    </div>
 <CookieConsent />
<Footer />

      
    </div>
    
  );
}

export default App;