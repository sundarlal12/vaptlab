import React from 'react';
import { Users, Award, Target, Mail, Linkedin, Twitter } from 'lucide-react';
import Header from './Header';
import Footer from './Footer';

const OurTeam: React.FC = () => {
  const founders = [
    {
      name: "Rajesh Kumar",
      position: "Chief Executive Officer & Founder",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&h=300&q=80",
      bio: "Cybersecurity expert with 15+ years of experience in enterprise security and risk management."
    },
    {
      name: "Priya Sharma",
      position: "Chief Technology Officer & Co-Founder",
      image: "https://images.unsplash.com/photo-1494790108755-2616b612b786?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&h=300&q=80",
      bio: "Technology leader specializing in security architecture and penetration testing methodologies."
    }
  ];

  const teamMembers = [
    {
      name: "Arjun Patel",
      position: "Product Manager",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&h=300&q=80"
    },
    {
      name: "Sneha Gupta",
      position: "HR Manager",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&h=300&q=80"
    },
    {
      name: "Vikram Singh",
      position: "Business Strategy Lead",
      image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&h=300&q=80"
    },
    {
      name: "Rohit Mehta",
      position: "Risk & Compliance Team Lead",
      image: "https://images.unsplash.com/photo-1507591064344-4c6ce005b128?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&h=300&q=80"
    },
    {
      name: "Kavya Reddy",
      position: "Associate Manager - Security Testing",
      image: "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&h=300&q=80"
    },
    {
      name: "Amit Joshi",
      position: "AVP - Sales",
      image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&h=300&q=80"
    },
    {
      name: "Ravi Kumar",
      position: "Senior Graphic Designer",
      image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&h=300&q=80"
    },
    {
      name: "Pooja Agarwal",
      position: "Sales Operations Manager",
      image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&h=300&q=80"
    },
    {
      name: "Suresh Nair",
      position: "Accounts Manager",
      image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&h=300&q=80"
    },
    {
      name: "Deepak Verma",
      position: "General Manager",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&h=300&q=80"
    },
    {
      name: "Neha Kapoor",
      position: "Lead - Inside Sales",
      image: "https://images.unsplash.com/photo-1494790108755-2616b612b786?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&h=300&q=80"
    },
    {
      name: "Rahul Sharma",
      position: "Associate Manager - Marketing",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&h=300&q=80"
    },
    {
      name: "Ankit Gupta",
      position: "Growth Manager",
      image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&h=300&q=80"
    },
    {
      name: "Kiran Patel",
      position: "Technical Lead",
      image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&h=300&q=80"
    },
    {
      name: "Manish Singh",
      position: "QA Lead",
      image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&h=300&q=80"
    },
    {
      name: "Priyanka Jain",
      position: "Senior Customer Success Manager",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&h=300&q=80"
    },
    {
      name: "Rajesh Pal",
      position: "Business Development Manager",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&h=300&q=80"
    },
    {
      name: "Naman Srivastav",
      position: "Growth Director",
      image: "https://images.unsplash.com/photo-1507591064344-4c6ce005b128?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&h=300&q=80"
    },
    {
      name: "Muqtada Hasan",
      position: "Security Consultant",
      image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&h=300&q=80"
    }
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
                <Users className="w-10 h-10 text-white" />
              </div>
            </div>
            <h1 className="text-4xl lg:text-5xl font-bold mb-6">Our Team</h1>
            <p className="text-xl text-gray-100 max-w-3xl mx-auto">
              Meet the cybersecurity experts who make VAPTlabs a trusted partner for organizations worldwide.
            </p>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Founders Section */}
          <section className="mb-20">
            <div className="text-center mb-12">
              <Award className="w-16 h-16 text-emerald-600 mx-auto mb-4" />
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Meet Our Founders</h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Our founders bring decades of cybersecurity expertise and leadership to guide VAPTlabs' mission of protecting digital infrastructure worldwide.
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              {founders.map((founder, index) => (
                <div key={index} className="bg-white rounded-2xl shadow-xl overflow-hidden">
                  <div className="p-8 text-center">
                    <img 
                      src={founder.image} 
                      alt={founder.name}
                      className="w-32 h-32 rounded-full mx-auto mb-6 object-cover"
                    />
                    <h3 className="text-2xl font-bold text-gray-900 mb-2">{founder.name}</h3>
                    <p className="text-emerald-600 font-semibold mb-4">{founder.position}</p>
                    <p className="text-gray-600 leading-relaxed mb-6">{founder.bio}</p>
                    
                    <div className="flex justify-center space-x-4">
                      <button className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center hover:bg-blue-200 transition-colors">
                        <Linkedin className="w-5 h-5 text-blue-600" />
                      </button>
                      <button className="w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center hover:bg-gray-200 transition-colors">
                        <Mail className="w-5 h-5 text-gray-600" />
                      </button>
                      <button className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center hover:bg-blue-200 transition-colors">
                        <Twitter className="w-5 h-5 text-blue-500" />
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Team Leaders Section */}
          <section>
            <div className="text-center mb-12">
              <Target className="w-16 h-16 text-blue-600 mx-auto mb-4" />
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Team Leaders</h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Our experienced team of cybersecurity professionals, managers, and specialists work together to deliver exceptional security services to our clients.
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {teamMembers.map((member, index) => (
                <div key={index} className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
                  <div className="p-6 text-center">
                    <img 
                      src={member.image} 
                      alt={member.name}
                      className="w-20 h-20 rounded-full mx-auto mb-4 object-cover"
                    />
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">{member.name}</h3>
                    <p className="text-emerald-600 text-sm font-medium">{member.position}</p>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Join Our Team CTA */}
          <section className="mt-20">
            <div className="bg-gradient-to-r from-emerald-500 to-teal-600 rounded-2xl p-8 text-center text-white">
              <h2 className="text-3xl font-bold mb-4">Join Our Team</h2>
              <p className="text-xl text-emerald-100 mb-8 max-w-3xl mx-auto">
                We're always looking for talented cybersecurity professionals to join our growing team. 
                Be part of our mission to secure digital infrastructure worldwide.
              </p>
              <button className="bg-white text-emerald-600 px-8 py-3 rounded-full font-semibold hover:bg-gray-100 transition-colors">
                View Open Positions
              </button>
            </div>
          </section>

        </div>
      </div>

      <Footer />
    </div>
  );
};

export default OurTeam;