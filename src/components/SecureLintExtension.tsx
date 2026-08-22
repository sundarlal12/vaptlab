import React from 'react';
import { KeyRound, ShieldAlert, Video, Lock, Link2, Wallet, EyeOff, Globe2, ArrowUpRight } from 'lucide-react';
import Header from './Header';
import Footer from './Footer';
import SEO from './SEO';
import BenefitsSection from './BenefitsSection';
import SecretMaskDemo from './SecretMaskDemo';

const RED_GRAD = "linear-gradient(to right, rgb(217, 47, 97), rgb(143, 15, 56))";
const SECURELINT_SITE_URL = "https://securelint.in";
const CHROME_STORE_URL = "https://chromewebstore.google.com/detail/securelint-%E2%80%93-sensitive-da/nfakpphnajjbmejbmpnlnamncdplkbna";

const features = [
  {
    icon: <KeyRound className="w-12 h-12 text-gray-800" />,
    title: "API Key & Secret Detection",
    description: "Identifies 100+ types of secrets — AWS credentials, Stripe keys, JWT tokens, database passwords and private keys.",
  },
  {
    icon: <EyeOff className="w-12 h-12 text-gray-800" />,
    title: "Real-Time Masking",
    description: "Replaces detected sensitive data with asterisks instantly, with context-aware masking for dev vs. writing modes.",
  },
  {
    icon: <ShieldAlert className="w-12 h-12 text-gray-800" />,
    title: "Phishing Detection",
    description: "Scans Gmail, Outlook and Yahoo, tracking 500+ brands for impersonation attempts before you click.",
  },
  {
    icon: <Video className="w-12 h-12 text-gray-800" />,
    title: "Meeting Mode",
    description: "Auto-detects video calls on Zoom, Meet and Teams, and masks secrets on screen during active sessions.",
  },
  {
    icon: <Lock className="w-12 h-12 text-gray-800" />,
    title: "SSL & Domain Verification",
    description: "Validates certificates and checks domain legitimacy before you enter sensitive information.",
  },
  {
    icon: <Link2 className="w-12 h-12 text-gray-800" />,
    title: "Link Scanner",
    description: "Gives every link a trust score before you click, across 100+ languages of scam detection.",
  },
  {
    icon: <Wallet className="w-12 h-12 text-gray-800" />,
    title: "Wallet Drainer Detection",
    description: "Identifies crypto wallet-draining malware and malicious approval requests before they cost you.",
  },
  {
    icon: <Globe2 className="w-12 h-12 text-gray-800" />,
    title: "Zero Data Transmission",
    description: "All scanning and masking happens locally in your browser — nothing is sent to a server.",
  },
];

const SecureLintExtension: React.FC = () => {
  return (
    <div className="min-h-screen bg-white overflow-x-hidden">
      <SEO
        title="SecureLint — Chrome Extension for API Key Masking & Phishing Detection"
        description="SecureLint is VAPTlabs' Chrome extension that masks API keys and secrets in real time, detects phishing across Gmail/Outlook/Yahoo, verifies SSL and domains, and scans links — all processed locally in your browser."
        path="/product/securelint-extension"
        keywords="securelint, securelint extension, secret sniffer, api key masking, secret scanner extension, phishing detection extension, chrome security extension, ssl checker extension, credential leak prevention, wallet drainer detection"
        extraJsonLd={{
          '@context': 'https://schema.org',
          '@type': 'SoftwareApplication',
          name: 'SecureLint',
          applicationCategory: 'BrowserApplication',
          operatingSystem: 'Chrome',
          description: 'Chrome extension that masks API keys and secrets in real time, detects phishing, verifies SSL/domain legitimacy, and scans links for trust score — all processed locally.',
          url: 'https://vaptlabs.com/product/securelint-extension',
          sameAs: [SECURELINT_SITE_URL, CHROME_STORE_URL],
          offers: [
            { '@type': 'Offer', name: 'Pro', price: '2999', priceCurrency: 'INR' },
          ],
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
            SecureLint
          </h1>
          <p className="text-xl mb-4 text-gray-100 max-w-3xl">
            The #1 Chrome extension for API key masking, phishing detection, SSL checks and VAPT.
          </p>
          <p className="text-gray-300 max-w-3xl mb-8">
            SecureLint stops accidental exposure of API keys, passwords and credentials across web editors, email
            and communication tools, while protecting you from phishing, malicious links and wallet-draining malware
            — with zero data ever leaving your browser.
          </p>
          <div className="flex flex-wrap gap-4">
            <a
              href={CHROME_STORE_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="text-white px-6 py-3 rounded-lg font-semibold flex items-center gap-2 transition-transform hover:scale-105"
              style={{ background: RED_GRAD }}
            >
              Install Extension
              <ArrowUpRight className="w-5 h-5" />
            </a>
            <a
              href={SECURELINT_SITE_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="border-2 border-white/40 text-white px-6 py-3 rounded-lg font-semibold hover:bg-white/10 transition-colors"
            >
              Visit securelint.in
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
                Overview : SecureLint
              </span>
            </h2>
          </div>
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <p className="text-lg text-gray-700 leading-relaxed">
              Every day, developers paste API keys into chat, screen-share dashboards full of live credentials, and
              reply to emails that look real but aren't. SecureLint runs quietly in the background, masking secrets
              the moment they appear on screen and flagging phishing attempts before you click — entirely on-device,
              with nothing sent to a server.
            </p>
            <div className="flex justify-center min-w-0">
              <SecretMaskDemo />
            </div>
          </div>
        </div>
      </div>

      <BenefitsSection benefits={features} title="Key Features" />

      {/* Pricing */}
      <div className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              <span
                className="pb-2 inline-block"
                style={{ borderBottom: '4px solid', borderImage: `${RED_GRAD} 1` }}
              >
                Pricing
              </span>
            </h2>
          </div>
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100">
              <h3 className="text-xl font-bold text-gray-900 mb-2">Pro</h3>
              <p className="text-3xl font-bold mb-4" style={{ color: 'rgb(217,47,97)' }}>
                ₹2,999<span className="text-base font-normal text-gray-500">/year</span>
              </p>
              <p className="text-gray-600 mb-4">
                Phishing detection, SSL checks, domain age alerts, secret masking and AI brand detection.
              </p>
              <a
                href={SECURELINT_SITE_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 font-semibold"
                style={{ color: 'rgb(217,47,97)' }}
              >
                Get Pro <ArrowUpRight className="w-4 h-4" />
              </a>
            </div>
            <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100">
              <h3 className="text-xl font-bold text-gray-900 mb-2">Enterprise</h3>
              <p className="text-3xl font-bold mb-4 text-gray-900">Contact Sales</p>
              <p className="text-gray-600 mb-4">
                Team-wide DLP, email send blocking, admin dashboards, custom policies, audit logs and dedicated support.
              </p>
              <a
                href={SECURELINT_SITE_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 font-semibold"
                style={{ color: 'rgb(217,47,97)' }}
              >
                Talk to Sales <ArrowUpRight className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* How it fits with VAPTlabs */}
      <div className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              VAPT secures your systems. SecureLint secures the people using them.
            </h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              VAPTlabs' AI-powered and human-led VAPT tests your applications and infrastructure. SecureLint Protect
              defends your mobile app at runtime. SecureLint closes the last gap — the everyday browser tab where
              developers and employees can leak a credential or fall for a phishing link — with zero-server, on-device
              protection.
            </p>
            <a
              href={SECURELINT_SITE_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 font-semibold mt-4"
              style={{ color: 'rgb(217,47,97)' }}
            >
              Visit securelint.in
              <ArrowUpRight className="w-4 h-4" />
            </a>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="py-16 text-white text-center" style={{ background: RED_GRAD }}>
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold mb-4">Stop leaking secrets by accident.</h2>
          <p className="text-lg text-white/90 mb-8">
            Install SecureLint free from the Chrome Web Store in under a minute.
          </p>
          <a
            href={CHROME_STORE_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-white px-8 py-3 rounded-lg font-semibold transition-transform hover:scale-105"
            style={{ color: 'rgb(143,15,56)' }}
          >
            Install Extension
            <ArrowUpRight className="w-5 h-5" />
          </a>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default SecureLintExtension;
