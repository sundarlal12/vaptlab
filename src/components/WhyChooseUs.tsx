import React from "react";

const WhyChooseUs: React.FC = () => {
  return (
    <section className="py-20 bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <p className="text-emerald-400 font-semibold mb-4 tracking-wider uppercase">
            CHOOSE WISELY
          </p>
          <h2 className="text-3xl lg:text-4xl font-bold mb-6">
            Choose VAPTlabs as Your Trusted Penetration Testing Service Provider
          </h2>
          <p className="text-lg text-gray-300 max-w-4xl mx-auto">
            VAPTlabs is known for its unmatched expertise and reliability in
            penetration testing. Here are more reasons to choose us for
            uncovering gaps in your business security.
          </p>
        </div>

        {/* Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Deep Penetration Testing */}
          <div className="bg-gradient-to-br from-emerald-600 to-emerald-700 p-8 rounded-2xl">
            <h3 className="text-xl font-bold mb-4">Deep Penetration Testing</h3>
            <p className="text-emerald-100">
              We go beyond tool scans, thoroughly examining your functionalities
              and technologies to uncover vulnerabilities that scanners and
              traditional methods often miss. Our deep penetration testing
              ensures comprehensive security insights and complete protection.
            </p>
          </div>

          {/* Hacker-Style Approach */}
          <div className="bg-gradient-to-br from-green-600 to-green-700 p-8 rounded-2xl">
            <h3 className="text-xl font-bold mb-4">Hacker-Style Approach</h3>
            <p className="text-green-100">
              We simulate a hacker-style approach to identify vulnerabilities to
              give you a clear picture of your defenses against real-world
              threats. We think like hackers by employing the latest techniques
              and tools to ensure a comprehensive and authentic assessment of
              your security posture.
            </p>
          </div>

          {/* Good Track Record */}
          <div className="bg-gradient-to-br from-emerald-600 to-emerald-700 p-8 rounded-2xl">
            <h3 className="text-xl font-bold mb-4">Good Track Record</h3>
            <p className="text-emerald-100">
              Our top-notch pentesting speaks for itself. We've secured over 450
              assets in 18+ countries with zero data breaches. Our team's diverse
              expertise keeps us one step ahead of emerging threats and allows us
              to provide our clients with front-line protection.
            </p>
          </div>

          {/* Comprehensive Report */}
          <div className="bg-gradient-to-br from-green-600 to-green-700 p-8 rounded-2xl">
            <h3 className="text-xl font-bold mb-4">Comprehensive Report</h3>
            <p className="text-green-100">
              Our detailed yet easy-to-understand reports give your developers
              detailed insights to understand and fix vulnerabilities
              effectively. Our reports also facilitate you to achieve important
              security compliances and standards in your industry.
            </p>
          </div>

          {/* Process-Based Testing */}
          <div className="bg-gradient-to-br from-emerald-600 to-emerald-700 p-8 rounded-2xl">
            <h3 className="text-xl font-bold mb-4">Process-Based Testing</h3>
            <p className="text-emerald-100">
              We don't just rely on manual or automated pentesting techniques.
              Instead, we've created our unique process that combines both
              methods, and we evaluate your application thoroughly and repeatedly
              to deliver the most efficient and effective results.
            </p>
          </div>

          {/* Help in Fixing Vulnerabilities */}
          <div className="bg-gradient-to-br from-green-600 to-green-700 p-8 rounded-2xl">
            <h3 className="text-xl font-bold mb-4">
              Help in Fixing Vulnerabilities
            </h3>
            <p className="text-green-100">
              We assist your development and network teams in fixing identified
              vulnerabilities through expert guidance and consultation calls. Our
              ongoing online support ensures effective remediation and improved
              security posture.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
