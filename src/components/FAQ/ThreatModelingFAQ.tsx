import React, { useState } from "react";
import { ChevronDown } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const threatModelingFaqs = [
  {
    q: "What is the threat modeling process?",
    a: "The threat modeling process is the structured process of pinpointing and transmitting information about the risks that may compromise any device, application, network, or other IT infrastructure."
  },
  {
    q: "What are the 4 stages of threat modeling?",
    a: "Threat modeling helps organizations protect their IT infrastructure against threat agents' con intentions. Threat modeling often comprises four stages, such as:<br><br>• Identify Assets<br>• Pinpoint Security Risks<br>• Threat Analysis<br>• Create Remediation Policies and Implementation of safeguards"
  },
  {
    q: "What is threat modeling in SDLC?",
    a: "Threat modeling within SDLC develops cyber attack resilience. Threat modeling during SDLC helps identify the attack vectors that can be utilized against the implemented safeguards, which enables proactively developing countermeasures to secure them."
  },
  {
    q: "What are the benefits of threat modeling?",
    a: "Threat modeling provides several key benefits:<br><br>• Early identification of security risks in the design phase<br>• Cost-effective security by addressing issues before implementation<br>• Improved security architecture and design decisions<br>• Better understanding of attack surfaces and potential threats<br>• Enhanced communication between security and development teams<br>• Compliance with security frameworks and regulations"
  },
  {
    q: "What methodologies are used in threat modeling?",
    a: "Common threat modeling methodologies include:<br><br>• <strong>STRIDE:</strong> Spoofing, Tampering, Repudiation, Information Disclosure, Denial of Service, Elevation of Privilege<br>• <strong>PASTA:</strong> Process for Attack Simulation and Threat Analysis<br>• <strong>OCTAVE:</strong> Operationally Critical Threat, Asset, and Vulnerability Evaluation<br>• <strong>TRIKE:</strong> Risk-based approach focusing on satisfying security auditing requirements<br>• <strong>VAST:</strong> Visual, Agile, and Simple Threat modeling"
  },
  {
    q: "When should threat modeling be performed?",
    a: "Threat modeling should be performed at multiple stages:<br><br>• During the design phase of new applications or systems<br>• When making significant architectural changes<br>• Before deploying applications to production<br>• During security reviews and assessments<br>• When integrating with third-party systems<br>• As part of regular security maintenance cycles"
  },
  {
    q: "What tools are used for threat modeling?",
    a: "Various tools support threat modeling activities:<br><br>• <strong>Microsoft Threat Modeling Tool:</strong> Free tool for creating threat models<br>• <strong>OWASP Threat Dragon:</strong> Open-source threat modeling tool<br>• <strong>IriusRisk:</strong> Automated threat modeling platform<br>• <strong>ThreatModeler:</strong> Collaborative threat modeling solution<br>• <strong>SecuriCAD:</strong> Automated threat modeling and attack simulations<br>• Manual approaches using diagrams and documentation"
  },
  {
    q: "How long does a threat modeling exercise take?",
    a: "The duration of threat modeling depends on system complexity:<br><br>• Simple applications: 1-2 days<br>• Medium complexity systems: 3-5 days<br>• Large enterprise applications: 1-2 weeks<br>• Complex distributed systems: 2-4 weeks<br><br>Factors affecting timeline include system architecture complexity, number of components, integration points, and stakeholder availability."
  }
];

const ThreatModelingFAQ: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFaq = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-20 bg-[#f3fcf7]">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl lg:text-4xl font-bold text-center text-gray-900 mb-12">
          Threat Modeling FAQ
        </h2>

        <div className="space-y-4">
          {threatModelingFaqs.map((faq, index) => (
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

export default ThreatModelingFAQ;