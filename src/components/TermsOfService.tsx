import React from 'react';
import { Shield } from 'lucide-react';
import Header from './Header';
import Footer from './Footer';

const TermsOfService: React.FC = () => {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      {/* Hero Section */}
      {/* <div className="bg-black text-white py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="flex justify-center mb-6">
              <div className="w-20 h-20 bg-white/20 rounded-full flex items-center justify-center">
                <Shield className="w-10 h-10 text-white" />
              </div>
            </div>
            <h1 className="text-4xl lg:text-5xl font-bold mb-6">Terms of Service</h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              VAPTlabs values your privacy and is committed to safeguarding your personal information.
            </p>
          </div>
        </div>
      </div>
 */}

      <div
        className="text-white py-20"
        style={{
          background: "linear-gradient(to right, rgb(217, 47, 97), rgb(143, 15, 56))",
        }}
      >
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="flex justify-center mb-6">
              <div className="w-20 h-20 bg-white/20 rounded-full flex items-center justify-center">
                <Shield className="w-10 h-10 text-white" />
              </div>
            </div>
            <h1 className="text-4xl lg:text-5xl font-bold mb-6">
            Terms of Service
            </h1>
            <p className="text-xl text-white/90 max-w-3xl mx-auto">
             VAPTlabs values your privacy and is committed to safeguarding your personal information.
            </p>
          </div>
        </div>
      </div>
      

      {/* Main Content */}
      <div className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Introduction */}
          <section className="mb-12">
            <p className="text-lg text-gray-700 leading-relaxed">
              VAPTlabs values your privacy and is committed to safeguarding your personal information. This Privacy Policy explains how we collect, use, disclose, and protect your information when you use our penetration testing services.
            </p>
          </section>

          {/* 1. Information We Collect */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-black mb-6">1. Information We Collect</h2>
            
            <div className="mb-8">
              <h3 className="text-xl font-semibold text-black mb-4">1.1 Personal Information</h3>
              <p className="text-gray-700 leading-relaxed mb-4">
                When you engage with us, we may collect the following personal information:
              </p>
              <ul className="text-gray-700 space-y-2 ml-6">
                <li>• Name</li>
                <li>• Email address</li>
                <li>• Phone number</li>
                <li>• Company name and details</li>
                <li>• Billing information</li>
              </ul>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-black mb-4">1.2 Technical Data</h3>
              <p className="text-gray-700 leading-relaxed mb-4">
                We automatically collect certain technical information about your device and usage, including:
              </p>
              <ul className="text-gray-700 space-y-2 ml-6">
                <li>• IP address</li>
                <li>• Browser type and version</li>
                <li>• Operating system</li>
                <li>• Pages you visit on our site</li>
                <li>• Time and date of your visit</li>
              </ul>
            </div>
          </section>

          {/* 2. How We Use Your Information */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-black mb-6">2. How We Use Your Information</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              We may use your information for the following purposes:
            </p>
            <ul className="text-gray-700 space-y-3 ml-6">
              <li><strong>Service Delivery:</strong> To provide, maintain, and improve our services.</li>
              <li><strong>Communication:</strong> To communicate with you about your inquiries, updates, and service-related notifications.</li>
              <li><strong>Marketing:</strong> To send you promotional materials, newsletters, and other information that may be of interest to you, with your consent.</li>
              <li><strong>Compliance:</strong> To comply with legal obligations, resolve disputes, and enforce our agreements.</li>
            </ul>
          </section>

          {/* 3. Sharing Your Information */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-black mb-6">3. Sharing Your Information</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              We do not sell your personal information. However, we may share your information in the following circumstances:
            </p>
            <ul className="text-gray-700 space-y-3 ml-6">
              <li><strong>Service Providers:</strong> With third-party vendors who assist us in delivering our services (e.g., cloud storage, analytics).</li>
              <li><strong>Legal Requirements:</strong> When required by law or to protect our rights, privacy, safety, or property, or that of others.</li>
            </ul>
          </section>

          {/* 4. Data Security */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-black mb-6">4. Data Security</h2>
            <p className="text-gray-700 leading-relaxed">
              We take the security of your information seriously. We implement various security measures, including encryption and access controls, to protect against unauthorized access, alteration, disclosure, or destruction of your personal information. However, no method of transmission over the Internet is completely secure.
            </p>
          </section>

          {/* 5. Your Rights */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-black mb-6">5. Your Rights</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              You have the right to:
            </p>
            <ul className="text-gray-700 space-y-3 ml-6">
              <li><strong>Access:</strong> Request access to the personal information we hold about you.</li>
              <li><strong>Correction:</strong> Request correction of any inaccurate or incomplete information.</li>
              <li><strong>Deletion:</strong> Request deletion of your personal information under certain conditions.</li>
              <li><strong>Objection:</strong> Object to the processing of your personal data in specific circumstances.</li>
            </ul>
          </section>

          {/* 6. Cookies and Tracking Technologies */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-black mb-6">6. Cookies and Tracking Technologies</h2>
            <p className="text-gray-700 leading-relaxed">
              We may use cookies and similar tracking technologies to enhance your experience on our website. You can control cookie preferences through your browser settings.
            </p>
          </section>

          {/* 7. Changes to This Privacy Policy */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-black mb-6">7. Changes to This Privacy Policy</h2>
            <p className="text-gray-700 leading-relaxed">
              We may update this Privacy Policy from time to time. Any changes will be posted on this page, and we encourage you to review it periodically.
            </p>
          </section>

          {/* Contact us */}
          <section className="mb-12">
            <div className="bg-black text-white rounded-lg p-8"  style={{
          background: "linear-gradient(to right, rgb(217, 47, 97), rgb(143, 15, 56))",
        }}>
              <h2 className="text-3xl font-bold mb-6">Contact Us</h2>
              <p className="text-gray-300 leading-relaxed mb-6">
                If you have any questions or concerns about this Privacy Policy, please contact us at <a href="mailto:contact@vaptlabs.com" className="text-white underline">contact@vaptlabs.com</a>
              </p>
              <p className="text-gray-300 leading-relaxed">
                We value your trust and will take the appropriate measures to ensure that we fulfill your request.
              </p>
            </div>
          </section>

        </div>
      </div>

      <Footer />
    </div>
  );
};

export default TermsOfService;