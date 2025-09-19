import React, { useState } from "react";
import { ChevronDown } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const rootCauseAnalysisFaqs = [
  {
    q: "What is root cause analysis in cybersecurity?",
    a: "Root cause analysis in cybersecurity is a systematic investigation methodology used to identify the fundamental causes of security incidents, breaches, and system failures. It involves comprehensive examination of technical systems, processes, and human factors that contributed to security events to prevent similar incidents in the future."
  },
  {
    q: "When should root cause analysis be performed?",
    a: "Root cause analysis should be performed in various scenarios:<br><br>• After security incidents or data breaches<br>• Following system outages or service disruptions<br>• When recurring security issues are identified<br>• After failed security controls or policy violations<br>• During post-incident reviews and lessons learned sessions<br>• When investigating compliance violations<br>• After discovering unauthorized access or suspicious activities"
  },
  {
    q: "What methodologies do you use for root cause analysis?",
    a: "We employ several proven methodologies for root cause analysis:<br><br>• <strong>5 Whys Technique:</strong> Iterative questioning to drill down to root causes<br>• <strong>Fishbone Diagram:</strong> Visual representation of potential causes<br>• <strong>Fault Tree Analysis:</strong> Top-down approach to identify failure modes<br>• <strong>Timeline Analysis:</strong> Chronological reconstruction of events<br>• <strong>NIST Incident Response Framework:</strong> Structured incident investigation<br>• <strong>Digital Forensics:</strong> Technical evidence collection and analysis"
  },
  {
    q: "What types of evidence do you collect during analysis?",
    a: "We collect various types of evidence during root cause analysis:<br><br>• <strong>System Logs:</strong> Application, system, and security event logs<br>• <strong>Network Traffic:</strong> Packet captures and flow analysis<br>• <strong>Digital Artifacts:</strong> Files, registry entries, memory dumps<br>• <strong>Configuration Data:</strong> System and security configurations<br>• <strong>User Activity:</strong> Authentication logs and user behavior<br>• <strong>Process Documentation:</strong> Policies, procedures, and workflows<br>• <strong>Interview Records:</strong> Stakeholder and witness statements"
  },
  {
    q: "How do you ensure evidence integrity during investigation?",
    a: "Evidence integrity is maintained through rigorous forensic procedures:<br><br>• Chain of custody documentation for all evidence<br>• Cryptographic hashing to verify data integrity<br>• Write-blocking tools to prevent evidence contamination<br>• Secure evidence storage and handling procedures<br>• Detailed documentation of all investigative steps<br>• Use of forensically sound tools and techniques<br>• Independent verification of critical findings<br>• Compliance with legal and regulatory requirements"
  },
  {
    q: "What deliverables do you provide for root cause analysis?",
    a: "Our root cause analysis deliverables include:<br><br>• Executive summary with key findings and business impact<br>• Detailed incident timeline and sequence of events<br>• Technical analysis of system failures and vulnerabilities<br>• Root cause identification with supporting evidence<br>• Contributing factors and systemic issues analysis<br>• Remediation recommendations with implementation priorities<br>• Process improvement suggestions<br>• Lessons learned and prevention strategies<br>• Compliance and regulatory reporting support"
  },
  {
    q: "How long does a root cause analysis take?",
    a: "The duration of root cause analysis depends on incident complexity:<br><br>• Simple incidents: 1-2 weeks<br>• Medium complexity incidents: 2-4 weeks<br>• Complex multi-system incidents: 4-8 weeks<br>• Large-scale breaches: 8-16 weeks<br><br>Factors affecting timeline include scope of impact, amount of evidence, system complexity, stakeholder availability, and regulatory requirements."
  },
  {
    q: "Do you provide ongoing support after the analysis?",
    a: "Yes, we provide comprehensive post-analysis support:<br><br>• Implementation guidance for recommended fixes<br>• Validation testing of remediation measures<br>• Process improvement consulting<br>• Staff training on lessons learned<br>• Follow-up assessments to verify effectiveness<br>• Incident response plan updates<br>• Regulatory compliance support<br>• Long-term monitoring recommendations"
  }
];

const RootCauseAnalysisFAQ: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFaq = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-20 bg-[#f3fcf7]">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl lg:text-4xl font-bold text-center text-gray-900 mb-12">
          Root Cause Analysis FAQ
        </h2>

        <div className="space-y-4">
          {rootCauseAnalysisFaqs.map((faq, index) => (
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

export default RootCauseAnalysisFAQ;