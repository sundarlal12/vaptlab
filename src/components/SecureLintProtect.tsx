import React from 'react';
import { Shield, Eye, Lock, Fingerprint, AlertTriangle, Activity, ArrowUpRight } from 'lucide-react';
import Header from './Header';
import Footer from './Footer';
import SEO from './SEO';
import BenefitsSection from './BenefitsSection';
import RaspDemoAnimation from './RaspDemoAnimation';

const RED_GRAD = "linear-gradient(to right, rgb(217, 47, 97), rgb(143, 15, 56))";
const VAPTLAB_URL = "https://vaptlab.com";
const VAPTLAB_CONTACT_URL = "https://vaptlab.com/contact/";

const features = [
  {
    icon: <Shield className="w-12 h-12 text-gray-800" />,
    title: "Root / Jailbreak & Emulator Detection",
    description: "Detects rooted, jailbroken and emulated environments before they become an attack surface.",
  },
  {
    icon: <Eye className="w-12 h-12 text-gray-800" />,
    title: "Anti-Hooking Protection",
    description: "Blocks runtime instrumentation frameworks like Frida and Xposed from tampering with your app.",
  },
  {
    icon: <AlertTriangle className="w-12 h-12 text-gray-800" />,
    title: "Anti-Debugging",
    description: "Detects and responds to attached debuggers attempting to inspect or manipulate app behavior.",
  },
  {
    icon: <Lock className="w-12 h-12 text-gray-800" />,
    title: "SSL Certificate Pinning",
    description: "Prevents man-in-the-middle attacks by enforcing trusted certificate pinning on network calls.",
  },
  {
    icon: <Fingerprint className="w-12 h-12 text-gray-800" />,
    title: "Device Fingerprinting",
    description: "Identifies and scores devices to flag suspicious or previously-blocked hardware.",
  },
  {
    icon: <Activity className="w-12 h-12 text-gray-800" />,
    title: "Real-Time Session Monitoring & Risk Scoring",
    description: "Continuously monitors live sessions and assigns risk scores so threats are caught as they happen.",
  },
];

const SecureLintProtect: React.FC = () => {
  return (
    <div className="min-h-screen bg-white overflow-x-hidden">
      <SEO
        title="SecureLint Protect — AI-Powered RASP for Android Apps"
        description="SecureLint Protect is VAPTlabs' AI-powered, no-code runtime application self-protection (RASP) platform for Android. Shield existing signed APKs with root/jailbreak detection, anti-hooking, anti-debugging, SSL pinning and real-time risk scoring — no SDK integration required."
        path="/product/securelint-protect"
        keywords="securelint, securelint protect, rasp mobile security, runtime application self protection, android rasp sdk, mobile app shielding, anti-tampering sdk, root detection sdk, anti-hooking protection, ssl pinning sdk, no-code app shielding"
        extraJsonLd={{
          '@context': 'https://schema.org',
          '@type': 'SoftwareApplication',
          name: 'SecureLint Protect',
          applicationCategory: 'SecurityApplication',
          operatingSystem: 'Android',
          description: 'AI-powered, no-code runtime application self-protection (RASP) for Android apps: root/jailbreak detection, anti-hooking, anti-debugging, SSL pinning, device fingerprinting and real-time risk scoring.',
          url: 'https://vaptlabs.com/product/securelint-protect',
          sameAs: [VAPTLAB_URL],
          publisher: { '@type': 'Organization', name: 'VAPTlabs', url: 'https://vaptlabs.com' },
        }}
      />
      <Header />

      {/* Hero Section */}
      <div className="relative text-white py-20" style={{ background: 'linear-gradient(135deg, #0A0F1F 0%, rgb(143,15,56) 100%)' }}>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="uppercase tracking-wide text-sm font-semibold mb-4 text-white/70">
            A VAPTlabs Product
          </p>
          <h1 className="text-4xl lg:text-5xl font-bold mb-6">
            SecureLint Protect
          </h1>
          <p className="text-xl mb-4 text-gray-100 max-w-3xl">
            AI-powered, no-code runtime security (RASP) for mobile apps — shield a build in minutes, not a sprint.
          </p>
          <p className="text-gray-300 max-w-3xl mb-8">
            SecureLint Protect shields existing signed Android APKs with native C++ RASP policies that detect and
            respond to attacks in milliseconds, with zero-latency response and no performance tax — no code changes
            and no SDK integration required.
          </p>
          <div className="flex flex-wrap gap-4">
            <a
              href={VAPTLAB_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="text-white px-6 py-3 rounded-lg font-semibold flex items-center gap-2 transition-transform hover:scale-105"
              style={{ background: RED_GRAD }}
            >
              Explore SecureLint Protect
              <ArrowUpRight className="w-5 h-5" />
            </a>
            <a
              href={VAPTLAB_CONTACT_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="border-2 border-white/40 text-white px-6 py-3 rounded-lg font-semibold hover:bg-white/10 transition-colors"
            >
              Book a Demo
            </a>
          </div>
        </div>
      </div>

      {/* Overview Section */}
      <div className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              <span
                className="pb-2 inline-block"
                style={{ borderBottom: '4px solid', borderImage: `${RED_GRAD} 1` }}
              >
                Overview : SecureLint Protect
              </span>
            </h2>
          </div>
          <div className="max-w-4xl mx-auto text-center">
            <p className="text-lg text-gray-700 leading-relaxed">
              A VAPT report tells you what's vulnerable at a point in time. SecureLint Protect is the sister product
              that keeps defending your app after you ship — an on-device, multi-layered RASP platform for Android
              built for teams who need to shield an existing signed APK through a no-code portal, without a lengthy
              SDK integration sprint.
            </p>
          </div>
        </div>
      </div>

      <BenefitsSection benefits={features} title="Key Features" />

      {/* How it fits with VAPTlabs */}
      <div className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                VAPT finds the gaps. SecureLint Protect closes them at runtime.
              </h2>
              <p className="text-gray-700 mb-4 leading-relaxed">
                VAPTlabs' AI-powered and human-led VAPT identifies vulnerabilities before launch and for compliance
                audits like SOC 2, ISO 27001 and HIPAA. SecureLint Protect complements that work with continuous,
                on-device runtime protection — so your mobile app stays defended against tampering, hooking and
                reverse-engineering attempts long after the audit report is delivered.
              </p>
              <a
                href={VAPTLAB_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 font-semibold mt-4"
                style={{ color: 'rgb(217,47,97)' }}
              >
                Visit vaptlab.com
                <ArrowUpRight className="w-4 h-4" />
              </a>
            </div>
            <div className="flex items-center justify-center min-w-0">
              <RaspDemoAnimation />
            </div>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="py-16 text-white text-center" style={{ background: RED_GRAD }}>
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold mb-4">Ready to shield your app?</h2>
          <p className="text-lg text-white/90 mb-8">
            Talk to sales or book a demo of SecureLint Protect on vaptlab.com.
          </p>
          <a
            href={VAPTLAB_CONTACT_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-white px-8 py-3 rounded-lg font-semibold transition-transform hover:scale-105"
            style={{ color: 'rgb(143,15,56)' }}
          >
            Talk to Sales
            <ArrowUpRight className="w-5 h-5" />
          </a>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default SecureLintProtect;
