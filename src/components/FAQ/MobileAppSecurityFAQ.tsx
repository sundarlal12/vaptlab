import React, { useState } from "react";
import { ChevronDown } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const mobileAppFaqs = [
  {
    q: "What is mobile application security testing?",
    a: "Mobile application security testing is a comprehensive assessment of mobile apps (iOS and Android) to identify security vulnerabilities, data leakage risks, and potential attack vectors. It includes testing app binaries, runtime behavior, data storage, network communications, and platform-specific security mechanisms."
  },
  {
    q: "What platforms do you test for mobile app security?",
    a: "We provide comprehensive security testing for:<br><br>• iOS applications (iPhone/iPad)<br>• Android applications<br>• Hybrid applications (React Native, Flutter, Xamarin)<br>• Progressive Web Apps (PWAs)<br>• Cross-platform mobile solutions<br><br>Our testing covers both native and hybrid app architectures."
  },
  {
    q: "What types of mobile app vulnerabilities can be identified?",
    a: "Mobile app security testing can identify:<br><br>• Insecure data storage<br>• Weak cryptography implementation<br>• Insecure communication protocols<br>• Authentication and session management flaws<br>• Code tampering and reverse engineering risks<br>• Platform-specific vulnerabilities<br>• Business logic flaws<br>• Third-party library vulnerabilities"
  },
  {
    q: "Do you test both the mobile app and backend APIs?",
    a: "Yes, our mobile app security testing includes comprehensive testing of both the mobile application and its backend APIs. We analyze client-server communications, API security, authentication mechanisms, and data flow between the mobile app and server infrastructure."
  },
  {
    q: "How do you test mobile apps without affecting app store ratings?",
    a: "We use dedicated testing environments and development/staging versions of your mobile applications. Our testing doesn't involve public app stores or affect user ratings. We can test pre-release versions, enterprise distributions, or dedicated testing builds."
  },
  {
    q: "What is the OWASP Mobile Top 10 and how does it relate to your testing?",
    a: "The OWASP Mobile Top 10 is a list of the most critical mobile application security risks. Our testing methodology is based on this framework and covers:<br><br>• M1: Improper Platform Usage<br>• M2: Insecure Data Storage<br>• M3: Insecure Communication<br>• M4: Insecure Authentication<br>• M5: Insufficient Cryptography<br>• M6: Insecure Authorization<br>• M7: Client Code Quality<br>• M8: Code Tampering<br>• M9: Reverse Engineering<br>• M10: Extraneous Functionality"
  },
  {
    q: "How long does mobile app security testing take?",
    a: "Testing duration varies based on app complexity:<br><br>• Simple apps: 5-7 days<br>• Medium complexity: 1-2 weeks<br>• Complex enterprise apps: 2-4 weeks<br><br>Factors affecting timeline include number of features, integration complexity, platform coverage, and testing depth required."
  },
  {
    q: "Can mobile app security testing help with app store approval?",
    a: "Yes, our security testing helps ensure your mobile app meets security requirements for app store approval. We identify potential security issues that could cause app rejection and provide guidance on implementing security best practices required by Apple App Store and Google Play Store."
  }
];

const MobileAppSecurityFAQ: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFaq = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-20 bg-[#f3fcf7]">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl lg:text-4xl font-bold text-center text-gray-900 mb-12">
          Mobile Application Security Testing FAQ
        </h2>

        <div className="space-y-4">
          {mobileAppFaqs.map((faq, index) => (
            <div
              key={index}
              className="border border-gray-200 rounded-lg bg-white"
            >
              <button
                className="w-full flex justify-between items-center text-left px-6 py-4 text-gray-900 font-medium"
                onClick={() => toggleFaq(index)}
              >
                <span>{faq.q}</span>
                <ChevronDown
                  className={`w-5 h-5 text-gray-500 transform transition-transform duration-300 ${
                    openIndex === index ? "rotate-180" : ""
                  }`}
                />
              </button>

              <AnimatePresence initial={false}>
                {openIndex === index && (
                  <motion.div
                    key="content"
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3, ease: "easeInOut" }}
                    className="overflow-hidden"
                  >
                    <div
                      className="px-6 pb-4 text-gray-600 prose prose-sm"
                      dangerouslySetInnerHTML={{ __html: faq.a }}
                    />
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MobileAppSecurityFAQ;