import React, { useState } from "react";
import { ChevronDown } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const otSecurityFaqs = [
  {
    q: "What is OT (Operational Technology) security?",
    a: "OT security involves comprehensive assessment of operational technology and industrial control systems to identify vulnerabilities that could impact operational safety and business continuity. This includes testing of SCADA systems, PLCs, HMIs, and other industrial control systems that manage physical processes in manufacturing, energy, water treatment, and other critical infrastructure sectors."
  },
  {
    q: "What types of OT systems do you test?",
    a: "We test a wide range of operational technology systems:<br><br>• <strong>SCADA Systems:</strong> Supervisory Control and Data Acquisition systems<br>• <strong>PLCs:</strong> Programmable Logic Controllers<br>• <strong>HMIs:</strong> Human Machine Interfaces<br>• <strong>DCS:</strong> Distributed Control Systems<br>• <strong>Safety Systems:</strong> Emergency shutdown and safety instrumented systems<br>• <strong>Industrial Networks:</strong> Fieldbus, Ethernet/IP, Modbus networks<br>• <strong>Historian Systems:</strong> Data collection and archival systems<br>• <strong>Engineering Workstations:</strong> Configuration and maintenance systems"
  },
  {
    q: "What industrial protocols do you assess?",
    a: "We assess security of various industrial communication protocols:<br><br>• <strong>Modbus:</strong> TCP and RTU variants<br>• <strong>DNP3:</strong> Distributed Network Protocol<br>• <strong>EtherNet/IP:</strong> Industrial Ethernet protocol<br>• <strong>Profinet:</strong> Process Field Network<br>• <strong>OPC UA:</strong> Open Platform Communications Unified Architecture<br>• <strong>BACnet:</strong> Building Automation and Control Networks<br>• <strong>IEC 61850:</strong> Power utility automation<br>• <strong>Proprietary Protocols:</strong> Vendor-specific communications"
  },
  {
    q: "How do you ensure OT testing doesn't disrupt operations?",
    a: "Operational continuity is our top priority during OT security testing:<br><br>• Testing performed during planned maintenance windows<br>• Use of network taps and passive monitoring techniques<br>• Isolated test environments when possible<br>• Coordination with operations and maintenance teams<br>• Non-intrusive assessment methodologies<br>• Emergency stop procedures and rollback plans<br>• Real-time monitoring of system performance<br>• Comprehensive pre-testing risk assessments"
  },
  {
    q: "What OT security vulnerabilities are commonly found?",
    a: "Common OT security vulnerabilities include:<br><br>• Unencrypted industrial protocol communications<br>• Default or weak authentication credentials<br>• Unpatched operating systems and applications<br>• Insecure remote access mechanisms<br>• Lack of network segmentation between IT and OT<br>• Insufficient access controls and privilege management<br>• Missing security monitoring and logging<br>• Vulnerable wireless communications<br>• Insecure engineering workstation configurations<br>• Legacy systems without security updates"
  },
  {
    q: "What compliance standards do you address for OT security?",
    a: "We address various OT security compliance standards:<br><br>• <strong>IEC 62443:</strong> Industrial communication networks cybersecurity<br>• <strong>NIST Cybersecurity Framework:</strong> Critical infrastructure protection<br>• <strong>NERC CIP:</strong> North American Electric Reliability Corporation standards<br>• <strong>ISA/IEC 62443:</strong> Security for industrial automation and control systems<br>• <strong>ISO 27001:</strong> Information security management systems<br>• <strong>NIST SP 800-82:</strong> Guide to industrial control systems security<br>• <strong>API 1164:</strong> Pipeline SCADA security standards"
  },
  {
    q: "How long does OT security testing take?",
    a: "OT security testing duration varies based on system complexity:<br><br>• Single facility assessments: 2-4 weeks<br>• Multi-site industrial operations: 4-8 weeks<br>• Large utility or manufacturing networks: 8-16 weeks<br>• Critical infrastructure assessments: 12-24 weeks<br><br>Timeline factors include number of systems, network complexity, operational constraints, compliance requirements, and coordination with operational teams."
  },
  {
    q: "What deliverables do you provide for OT security testing?",
    a: "Our OT security testing deliverables include:<br><br>• Executive summary with operational risk assessment<br>• Detailed technical vulnerability findings<br>• Industrial protocol security analysis<br>• Network architecture security review<br>• Compliance gap analysis (IEC 62443, NERC CIP, etc.)<br>• Risk-based remediation roadmap<br>• Network segmentation recommendations<br>• Security monitoring and detection guidance<br>• Incident response plan recommendations<br>• Security awareness training for OT personnel<br>• Long-term security program recommendations"
  }
];

const OTSecurityFAQ: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFaq = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-20 bg-[#f3fcf7]">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl lg:text-4xl font-bold text-center text-gray-900 mb-12">
          OT Security Testing FAQ
        </h2>

        <div className="space-y-4">
          {otSecurityFaqs.map((faq, index) => (
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

export default OTSecurityFAQ;