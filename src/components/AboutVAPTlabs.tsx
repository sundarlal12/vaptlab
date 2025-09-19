import React from 'react';
import { Shield, Target, Heart, Users, Globe, Award, CheckCircle, ArrowRight } from 'lucide-react';
import Header from './Header';
import Footer from './Footer';
import ApproachSection from "./ApproachSection";
import GetQuoteSection from "./GetQuoteSection";
import VaptAbout from "./VaptAbout";
import ClientCarousel from "./ClientCarousel";
import Testimonials from "./Testimonials";
import WhoWeAre from "./WhoWeAre";

// import RaspHero from "./components/RaspHero";

const AboutVAPTlabs: React.FC = () => {
  return (
    <div className="min-h-screen bg-white overflow-x-hidden">
      <Header />
      
      {/* Hero Section */}
      {/* <div className="bg-gradient-to-br from-emerald-600 via-teal-600 to-cyan-600 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="flex justify-center mb-6">
              <div className="w-20 h-20 bg-white/20 rounded-full flex items-center justify-center">
                <Shield className="w-10 h-10 text-white" />
              </div>
            </div>
            <h1 className="text-4xl lg:text-5xl font-bold mb-6">About VAPTlabs</h1>
            <p className="text-xl text-gray-100 max-w-3xl mx-auto">
              Leading cybersecurity experts protecting businesses worldwide with comprehensive security testing and compliance solutions.
            </p>
          </div>
        </div>
      </div> */}




 <VaptAbout
        raspLink="https://vaptlabs.com"
        ctaText="Get Protected Now"
        badgeText="24X7 Cyber Security Solutions"
        heroLetter="VAPT"
      />

      {/* Main Content */}
      <div className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Company Overview */}
        

<WhoWeAre />

         <ApproachSection />
          <ClientCarousel />

          <Testimonials />

          <GetQuoteSection />
          
        

        </div>
      </div>

      <Footer />
    </div>
  );
};

export default AboutVAPTlabs;