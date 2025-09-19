import React, { useState } from "react";
import { ChevronDown } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const medicalDeviceFaqs = [
  {
    q: "What is medical device security testing?",
    a: "Medical device security testing is a comprehensive assessment of healthcare devices to identify vulnerabilities that could compromise patient safety or data privacy. This testing evaluates device firmware, communication protocols, network interfaces, and integration with hospital systems to ensure compliance with FDA cybersecurity requirements."
  },
  {
    q: "What types of medical devices can be tested?",
    a: "We test a wide range of medical devices including:<br><br>• <strong>Patient Monitoring:</strong> Vital signs monitors, ECG machines, pulse oximeters<br>• <strong>Imaging Systems:</strong> MRI, CT scanners, X-ray machines, ultrasound devices<br>• <strong>Therapeutic Devices:</strong> Infusion pumps, ventilators, dialysis machines<br>• <strong>Implantable Devices:</strong> Pacemakers, insulin pumps, neurostimulators<br>• <strong>Laboratory Equipment:</strong> Analyzers, diagnostic instruments<br>• <strong>Connected Health:</strong> Wearables, remote monitoring devices, telemedicine platforms"
  },
  {
    q: "What are the FDA cybersecurity requirements for medical devices?",
    a: "FDA cybersecurity requirements for medical devices include:<br><br>• <strong>Premarket Submissions:</strong> Cybersecurity documentation for 510(k) and PMA submissions<br>• <strong>Risk Assessment:</strong> Identification and analysis of cybersecurity risks<br>• <strong>Security Controls:</strong> Implementation of appropriate security measures<br>• <strong>Software Bill of Materials (SBOM):</strong> Documentation of software components<br>• <strong>Vulnerability Management:</strong> Processes for identifying and addressing vulnerabilities<br>• <strong>Incident Response:</strong> Plans for responding to cybersecurity incidents"
  },
  {
    q: "How do you ensure patient safety during security testing?",
    a: "Patient safety is our top priority during medical device security testing:<br><br>• Testing performed in controlled laboratory environments<br>• Use of isolated test networks separate from clinical systems<br>• Non-invasive testing methodologies that don't affect device functionality<br>• Coordination with clinical engineering teams<br>• Emergency stop procedures and rollback plans<br>• Testing during maintenance windows when devices are offline<br>• Comprehensive risk assessment before any testing activities"
  },
  {
    q: "What vulnerabilities are commonly found in medical devices?",
    a: "Common medical device vulnerabilities include:<br><br>• Weak or default authentication credentials<br>• Unencrypted data transmission and storage<br>• Insecure firmware update mechanisms<br>• Network protocol vulnerabilities<br>• Insufficient access controls<br>• Lack of audit logging and monitoring<br>• Insecure web interfaces and APIs<br>• Buffer overflow and memory corruption issues<br>• Inadequate input validation<br>• Missing security patches and updates"
  },
  {
    q: "Do you test medical device compliance with HIPAA?",
    a: "Yes, our medical device security testing addresses HIPAA compliance requirements:<br><br>• <strong>Administrative Safeguards:</strong> Security policies and procedures<br>• <strong>Physical Safeguards:</strong> Device access controls and facility security<br>• <strong>Technical Safeguards:</strong> Encryption, authentication, audit controls<br>• <strong>Risk Assessment:</strong> Identification of threats to ePHI<br>• <strong>Data Protection:</strong> Ensuring confidentiality, integrity, and availability<br>• <strong>Breach Notification:</strong> Procedures for reporting security incidents"
  },
  {
    q: "How long does medical device security testing take?",
    a: "Testing duration varies based on device complexity and scope:<br><br>• Simple connected devices: 1-2 weeks<br>• Complex medical systems: 3-4 weeks<br>• Multi-device healthcare networks: 4-8 weeks<br>• Enterprise hospital systems: 8-12 weeks<br><br>Timeline factors include device types, network complexity, regulatory requirements, and integration with hospital infrastructure."
  },
  {
    q: "What deliverables do you provide for medical device security testing?",
    a: "Our medical device security testing deliverables include:<br><br>• Executive summary with patient safety risk assessment<br>• Detailed technical vulnerability findings<br>• FDA cybersecurity compliance analysis<br>• HIPAA security rule compliance evaluation<br>• Risk-based remediation recommendations<br>• Security architecture review and improvements<br>• Incident response plan recommendations<br>• Regulatory submission support documentation<br>• Follow-up validation testing after remediation"
  }
];

const MedicalDeviceFAQ: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFaq = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-20 bg-[#f3fcf7]">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl lg:text-4xl font-bold text-center text-gray-900 mb-12">
          Medical Device Security Testing FAQ
        </h2>

        <div className="space-y-4">
          {medicalDeviceFaqs.map((faq, index) => (
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

export default MedicalDeviceFAQ;