
import React, { useState } from "react";
import { ChevronDown } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const faqs = [
    {
      q: "What is proactive cybersecurity testing?",
      a: "Proactive cybersecurity testing is a forward-thinking approach to digital security that involves actively identifying and addressing vulnerabilities before malicious actors can exploit them. This methodology includes comprehensive penetration testing, security assessments, vulnerability analysis, and simulated attack scenarios. The primary objective is to enhance an organization's security framework by anticipating and mitigating potential threats through systematic evaluation."
    },
    {
      q: "How does proactive security differ from reactive security measures?",
      a: "Proactive security and reactive security differ in several key aspects:<br><br><strong>Methodology:</strong> Proactive is anticipatory and investigative, while reactive is responsive and corrective.<br><br><strong>Goals:</strong> Proactive seeks to discover and address vulnerabilities, while reactive focuses on incident response and damage control.<br><br><strong>Timeline:</strong> Proactive is scheduled and continuous, while reactive is triggered by security incidents.<br><br><strong>Services:</strong> Proactive includes vulnerability assessments and ethical hacking, while reactive involves incident response and forensic analysis.<br><br><strong>Personnel:</strong> Proactive teams include security researchers and penetration testers, while reactive teams consist of incident responders and forensic specialists."
    },
    {
      q: "How can I assess my current security infrastructure?",
      a: "To comprehensively evaluate your current security infrastructure, you can utilize advanced security assessment services that cover multiple attack vectors and digital assets:<br><br><strong>Intelligence Gathering:</strong> Comprehensive analysis of your digital presence and publicly available information.<br><br><strong>Threat Analysis:</strong> Identification of potential risks across all systems including web applications, mobile platforms, APIs, cloud services, and network infrastructure.<br><br><strong>Multi-Vector Testing:</strong> Simulation of real-world attack scenarios targeting:<br>• Web and mobile applications<br>• API endpoints and cloud infrastructure<br>• Network and wireless systems<br>• Email security and social engineering<br>• Physical security assessments<br><br><strong>Detailed Analysis:</strong> Comprehensive reporting of verified threats with actionable insights.<br><br><strong>Remediation Support:</strong> Guidance for addressing identified vulnerabilities and implementation assistance for security improvements."
    },
    {
      q: "Can VAPTlabs reports be used for compliance requirements like SOC 2, ISO 27001, GDPR, HIPAA, and FedRAMP?",
      a: "Yes, VAPTlabs security assessment reports provide valuable documentation for various compliance frameworks:<br><br><strong>SOC 2:</strong> Demonstrates security testing and vulnerability management practices.<br><br><strong>ISO 27001:</strong> Supports compliance with security control requirements for vulnerability assessment and penetration testing.<br><br><strong>GDPR:</strong> Helps identify potential security gaps that could lead to data breaches.<br><br><strong>HIPAA:</strong> Addresses Security Rule requirements by identifying risks to protected health information.<br><br><strong>FedRAMP:</strong> Supports security control requirements for vulnerability scanning and penetration testing.<br><br>Our reports provide substantial evidence by identifying security vulnerabilities, demonstrating proactive security measures, and offering actionable remediation guidance. However, these reports should complement your overall compliance strategy alongside formal audits by authorized assessors."
    },
    {
      q: "What distinguishes penetration testing from comprehensive security assessment?",
      a: "While both methodologies aim to identify security vulnerabilities, they differ in scope and execution:<br><br><strong>Penetration Testing:</strong> Focuses on identifying and exploiting specific vulnerabilities within defined systems or applications using targeted timeframes and scope.<br><br><strong>Comprehensive Security Assessment:</strong> Employs a holistic, objective-driven approach that simulates complete attack scenarios across an organization's entire digital infrastructure, often conducted without internal team awareness to test real-world response capabilities."
    },
    {
      q: "What deliverables are included with your security services?",
      a: "Our comprehensive security services include:<br><br><strong>Detailed Vulnerability Reports:</strong> Complete documentation of identified security gaps and their potential business impact<br><br><strong>Remediation Roadmap:</strong> Step-by-step guidance for addressing identified vulnerabilities<br><br><strong>Executive Briefings:</strong> High-level summaries tailored for leadership and stakeholders<br><br><strong>Technical Documentation:</strong> Detailed technical findings for IT and security teams<br><br><strong>Post-Assessment Support:</strong> Follow-up consultations and remediation verification"
    },
    {
      q: "How do you protect our sensitive data during security assessments?",
      a: "We maintain the highest standards of data protection through:<br><br><strong>Secure Communication:</strong> Encrypted data transmission and secure handling protocols<br><br><strong>Data Minimization:</strong> Limited data collection and retention policies<br><br><strong>Legal Protection:</strong> Comprehensive non-disclosure agreements to safeguard your information<br><br><strong>Professional Insurance:</strong> Comprehensive liability coverage for additional protection<br><br><strong>Compliance Standards:</strong> Adherence to industry security standards and best practices"
    },
    {
      q: "How can we begin working with VAPTlabs?",
      a: "Getting started is straightforward:<br><br><strong>Initial Consultation:</strong> Contact our security experts for a comprehensive needs assessment<br><br><strong>Scope Definition:</strong> We'll work with you to define the assessment scope and objectives<br><br><strong>Custom Proposal:</strong> Receive a tailored proposal for our security testing services<br><br><strong>Engagement Planning:</strong> Schedule and plan the security assessment timeline<br><br><strong>Assessment Execution:</strong> Our experts conduct the comprehensive security evaluation"
    }
  ];


const MainFAQ: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFaq = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-20 bg-[#f3fcf7]">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl lg:text-4xl font-bold text-center text-gray-900 mb-12">
          Frequently Asked Questions
        </h2>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
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

export default MainFAQ;
