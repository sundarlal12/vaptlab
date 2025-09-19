import React from 'react';
import { Building, Award, Globe, TrendingUp, Users, Star } from 'lucide-react';
import Header from './Header';
import Footer from './Footer';
import ClientCarousel from './ClientCarousel';
import Testimonials from "./Testimonials";

const OurClients: React.FC = () => {
  const clientTestimonials = [
    {
      quote: "VAPTlabs provided exceptional security testing that helped us identify critical vulnerabilities before they could be exploited. Their professional approach and detailed reporting exceeded our expectations.",
      name: "Sarah Johnson",
      position: "CISO",
      company: "TechCorp Solutions",
      image: "https://images.unsplash.com/photo-1494790108755-2616b612b786?auto=format&fit=crop&w=300&h=300&q=80"
    },
    {
      quote: "The team's expertise in mobile application security testing was invaluable. They found issues we never knew existed and provided clear guidance on how to fix them.",
      name: "Michael Chen",
      position: "Security Director",
      company: "InnovateTech",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=300&h=300&q=80"
    },
    {
      quote: "VAPTlabs helped us achieve SOC2 compliance with their thorough security assessment. Their team was professional, knowledgeable, and delivered results on time.",
      name: "Emily Rodriguez",
      position: "Compliance Manager",
      company: "SecureFlow Systems",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&w=300&h=300&q=80"
    }
  ];

  
  const handleNavigation = (path: string) => {
 
    
    // Navigate immediately, PageWrapper will handle loading state
    window.location.href = path.startsWith('/') ? path : `/${path}`;
  };
  
  const industries = [
    {
      name: "Financial Technology",
      icon: <TrendingUp className="w-8 h-8" />,
      description: "Banks, fintech startups, and payment processors trust us to secure their financial applications and infrastructure."
    },
    {
      name: "Healthcare",
      icon: <Award className="w-8 h-8" />,
      description: "Healthcare organizations rely on our expertise to protect patient data and ensure HIPAA compliance."
    },
    {
      name: "E-commerce",
      icon: <Building className="w-8 h-8" />,
      description: "Online retailers and marketplaces depend on our security testing to protect customer information and transactions."
    },
    {
      name: "Technology",
      icon: <Globe className="w-8 h-8" />,
      description: "Software companies and tech startups partner with us to secure their applications and platforms."
    },
    {
      name: "Government",
      icon: <Users className="w-8 h-8" />,
      description: "Government agencies trust our security expertise to protect critical infrastructure and sensitive data."
    },
    {
      name: "Education",
      icon: <Star className="w-8 h-8" />,
      description: "Educational institutions rely on our services to secure student data and academic systems."
    }
  ];

  const stats = [
    { number: "10+", label: "Clients Served" },
    { number: "10+", label: "Security Assessments" },
    { number: "5+", label: "Countries" },
    { number: "99.9%", label: "Client Satisfaction" }
  ];

  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      {/* Hero Section */}
      <div className="bg-gradient-to-br from-emerald-600 via-teal-600 to-cyan-600 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="flex justify-center mb-6">
              <div className="w-20 h-20 bg-white/20 rounded-full flex items-center justify-center">
                <Building className="w-10 h-10 text-white" />
              </div>
            </div>
            <h1 className="text-4xl lg:text-5xl font-bold mb-6">Our Clients</h1>
            <p className="text-xl text-gray-100 max-w-3xl mx-auto">
              Trusted by organizations worldwide to protect their digital assets and maintain the highest security standards.
            </p>
          </div>
        </div>
      </div>

      {/* Client Carousel */}
      <ClientCarousel />

      {/* Stats Section */}
      {/* <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Impact</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Numbers that reflect our commitment to delivering exceptional cybersecurity services worldwide.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="bg-white rounded-lg p-8 shadow-lg">
                  <div className="text-4xl font-bold text-emerald-600 mb-2">{stat.number}</div>
                  <div className="text-gray-600 font-medium">{stat.label}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section> */}

      {/* Industries Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <Globe className="w-16 h-16 text-blue-600 mx-auto mb-4" />
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Industries We Serve</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Our cybersecurity expertise spans across multiple industries, helping organizations of all sizes protect their digital assets.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {industries.map((industry, index) => (
              <div key={index} className="bg-white rounded-lg p-6 shadow-lg hover:shadow-xl transition-shadow">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-emerald-100 rounded-lg flex items-center justify-center mr-4">
                    <div className="text-emerald-600">{industry.icon}</div>
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900">{industry.name}</h3>
                </div>
                <p className="text-gray-600 leading-relaxed">{industry.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <Testimonials />
      {/* <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <Star className="w-16 h-16 text-yellow-500 mx-auto mb-4" />
            <h2 className="text-3xl font-bold text-gray-900 mb-4">What Our Clients Say</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Hear from organizations that have trusted VAPTlabs to secure their digital infrastructure.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {clientTestimonials.map((testimonial, index) => (
              <div key={index} className="bg-white rounded-lg p-6 shadow-lg">
                <div className="flex items-center mb-4">
                  <img 
                    src={testimonial.image} 
                    alt={testimonial.name}
                    className="w-12 h-12 rounded-full object-cover mr-4"
                  />
                  <div>
                    <h4 className="font-semibold text-gray-900">{testimonial.name}</h4>
                    <p className="text-sm text-gray-600">{testimonial.position}</p>
                    <p className="text-sm text-emerald-600">{testimonial.company}</p>
                  </div>
                </div>
                <p className="text-gray-700 leading-relaxed italic">"{testimonial.quote}"</p>
              </div>
            ))}
          </div>
        </div>
      </section> */}

      {/* CTA Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-r from-emerald-500 to-teal-600 rounded-2xl p-8 text-center text-white">
            <h2 className="text-3xl font-bold mb-4">Join Our Growing Client Family</h2>
            <p className="text-xl text-emerald-100 mb-8 max-w-3xl mx-auto">
              Ready to secure your digital assets with industry-leading cybersecurity services? 
              Let's discuss how we can help protect your organization.
            </p>
            <button    onClick={() => handleNavigation("/contact")} className="bg-white text-emerald-600 px-8 py-3 rounded-full font-semibold hover:bg-gray-100 transition-colors">
              Get Started Today
            </button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default OurClients;