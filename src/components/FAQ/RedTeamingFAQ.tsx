import React, { useState } from "react";
import { ChevronDown } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const redTeamingFaqs = [
  {
    q: "What is red teaming?",
    a: "Red teaming is an advanced security assessment methodology that simulates real-world adversarial attacks to test organizational defenses comprehensively. It goes beyond traditional penetration testing by employing sophisticated attack techniques, social engineering, and multi-vector approaches to evaluate the effectiveness of security controls, incident response procedures, and overall security posture."
  },
  {
    q: "How is red teaming different from penetration testing?",
    a: "Red teaming and penetration testing differ in several key aspects:<br><br><strong>Red Teaming:</strong><br>• Simulates advanced persistent threats (APTs)<br>• Uses multiple attack vectors simultaneously<br>• Includes social engineering and physical security<br>• Tests incident response and detection capabilities<br>• Longer engagement duration (weeks to months)<br>• Goal-oriented approach (e.g., access specific data)<br><br><strong>Penetration Testing:</strong><br>• Focuses on specific systems or applications<br>• Technical vulnerability assessment<br>• Shorter engagement duration (days to weeks)<br>• Comprehensive vulnerability identification"
  },
  {
    q: "What attack techniques are used in red team exercises?",
    a: "Red team exercises employ various sophisticated attack techniques:<br><br>• <strong>Initial Access:</strong> Spear phishing, watering hole attacks, supply chain compromises<br>• <strong>Persistence:</strong> Backdoors, scheduled tasks, registry modifications<br>• <strong>Privilege Escalation:</strong> Exploiting misconfigurations and vulnerabilities<br>• <strong>Lateral Movement:</strong> Network traversal and system compromise<br>• <strong>Data Exfiltration:</strong> Covert channels and encrypted communications<br>• <strong>Social Engineering:</strong> Pretexting, baiting, tailgating<br>• <strong>Physical Security:</strong> Lock picking, badge cloning, facility infiltration"
  },
  {
    q: "How long does a red team engagement take?",
    a: "Red team engagement duration varies based on scope and objectives:<br><br>• Limited scope exercises: 2-4 weeks<br>• Standard red team assessments: 4-8 weeks<br>• Comprehensive enterprise assessments: 8-16 weeks<br>• Continuous red team programs: Ongoing (quarterly/annual cycles)<br><br>Factors affecting duration include organization size, attack surface complexity, objectives scope, and detection/response capabilities testing requirements."
  },
  {
    q: "What is the MITRE ATT&CK framework and how is it used?",
    a: "The MITRE ATT&CK framework is a knowledge base of adversary tactics, techniques, and procedures (TTPs) based on real-world observations. In red teaming, it's used to:<br><br>• Structure attack scenarios based on known threat actor behaviors<br>• Ensure comprehensive coverage of attack techniques<br>• Map defensive capabilities against specific TTPs<br>• Provide standardized reporting and communication<br>• Benchmark security controls effectiveness<br>• Guide threat hunting and detection rule development"
  },
  {
    q: "How do you ensure red team exercises don't disrupt business operations?",
    a: "We implement strict controls to minimize business disruption:<br><br>• Detailed rules of engagement (ROE) with clear boundaries<br>• Coordination with IT and security teams<br>• Exclusion lists for critical systems and processes<br>• Time-based restrictions for testing activities<br>• Emergency contact procedures and escalation paths<br>• Real-time monitoring and communication channels<br>• Immediate rollback procedures if issues arise<br>• Post-exercise system verification and cleanup"
  },
  {
    q: "What deliverables do you provide for red team exercises?",
    a: "Our red team exercise deliverables include:<br><br>• Executive summary with business risk assessment<br>• Detailed attack narrative and timeline<br>• MITRE ATT&CK framework mapping of techniques used<br>• Security control effectiveness evaluation<br>• Incident response capability assessment<br>• Detection and monitoring gap analysis<br>• Remediation recommendations with priorities<br>• Purple team collaboration opportunities<br>• Threat hunting recommendations<br>• Security awareness training insights"
  },
  {
    q: "Can red teaming help with compliance requirements?",
    a: "Yes, red teaming supports various compliance and regulatory requirements:<br><br>• <strong>PCI DSS:</strong> Requirement 11.3 for penetration testing<br>• <strong>NIST Cybersecurity Framework:</strong> Detection and response testing<br>• <strong>ISO 27001:</strong> Security testing and incident response validation<br>• <strong>FFIEC:</strong> Financial institution cybersecurity assessments<br>• <strong>NERC CIP:</strong> Critical infrastructure protection testing<br>• <strong>HIPAA:</strong> Healthcare security control validation<br><br>Our reports provide evidence of security testing for compliance audits and certifications."
  }
];

const RedTeamingFAQ: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFaq = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-20 bg-[#f3fcf7]">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl lg:text-4xl font-bold text-center text-gray-900 mb-12">
          Red Teaming FAQ
        </h2>

        <div className="space-y-4">
          {redTeamingFaqs.map((faq, index) => (
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

export default RedTeamingFAQ;