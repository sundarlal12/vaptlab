import React, { useState } from "react";
import { ChevronDown } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const fda510kFaqs = [
  {
    q: "What is FDA 510(K) cybersecurity compliance?",
    a: "FDA 510(K) cybersecurity compliance involves meeting FDA requirements for medical device cybersecurity in premarket submissions. It includes documenting cybersecurity risks, security controls, and plans for managing vulnerabilities throughout the device lifecycle."
  },
  {
    q: "Which medical devices need FDA 510(K) cybersecurity documentation?",
    a: "Medical devices that connect to networks, contain software, or have cybersecurity risks must include cybersecurity information in their 510(K) submissions. This includes connected medical devices, software as medical devices (SaMD), and devices with wireless capabilities."
  },
  {
    q: "What cybersecurity documentation is required for FDA 510(K)?",
    a: "Required documentation includes cybersecurity risk assessment, security controls implementation, software bill of materials (SBOM), vulnerability management plan, and incident response procedures. The documentation must demonstrate cybersecurity considerations throughout device development."
  },
  {
    q: "How does penetration testing support FDA 510(K) submissions?",
    a: "Penetration testing validates the effectiveness of cybersecurity controls implemented in medical devices. It provides evidence that security measures are working properly and helps identify vulnerabilities that need to be addressed before FDA submission."
  }
];

const FDA510KFAQ: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFaq = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-20 bg-[#f3fcf7]">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl lg:text-4xl font-bold text-center text-gray-900 mb-12">
          FDA 510(K) Compliance FAQ
        </h2>

        <div className="space-y-4">
          {fda510kFaqs.map((faq, index) => (
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

export default FDA510KFAQ;