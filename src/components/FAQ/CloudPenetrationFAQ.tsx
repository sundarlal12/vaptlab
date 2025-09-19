import React, { useState } from "react";
import { ChevronDown } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const cloudPenetrationFaqs = [
  {
    q: "What is cloud penetration testing?",
    a: "Cloud penetration testing is a comprehensive security assessment of cloud infrastructure, services, and configurations. It evaluates cloud security controls, IAM policies, data storage security, network configurations, and compliance across AWS, Azure, GCP, and hybrid cloud environments."
  },
  {
    q: "Which cloud platforms do you test?",
    a: "We provide comprehensive cloud penetration testing for:<br><br>• <strong>Amazon Web Services (AWS)</strong><br>• <strong>Microsoft Azure</strong><br>• <strong>Google Cloud Platform (GCP)</strong><br>• <strong>Hybrid cloud environments</strong><br>• <strong>Multi-cloud deployments</strong><br>• <strong>Private cloud infrastructure</strong><br>• <strong>Container platforms (Docker, Kubernetes)</strong>"
  },
  {
    q: "What cloud security vulnerabilities can be identified?",
    a: "Cloud penetration testing can identify:<br><br>• IAM misconfigurations and privilege escalation<br>• Insecure cloud storage (S3, Blob, etc.)<br>• Network security group misconfigurations<br>• Exposed cloud services and APIs<br>• Container and serverless vulnerabilities<br>• Cloud-specific authentication flaws<br>• Data encryption and key management issues<br>• Compliance violations<br>• Resource access control weaknesses"
  },
  {
    q: "Do you need access to our cloud environment for testing?",
    a: "We offer flexible testing approaches:<br><br>• <strong>Credentialed Testing:</strong> With provided access for comprehensive internal assessment<br>• <strong>External Testing:</strong> Testing publicly accessible cloud resources<br>• <strong>Hybrid Approach:</strong> Combination of both methods<br><br>We work with your team to determine the most appropriate access level based on your security requirements and testing objectives."
  },
  {
    q: "How do you ensure cloud testing doesn't affect production systems?",
    a: "Our cloud testing methodology includes:<br><br>• Careful scoping and environment identification<br>• Testing in development/staging environments when possible<br>• Non-disruptive assessment techniques<br>• Real-time monitoring during tests<br>• Coordination with your cloud operations team<br>• Immediate rollback procedures if needed<br>• Clear testing boundaries and exclusions"
  },
  {
    q: "Can cloud penetration testing help with compliance requirements?",
    a: "Yes, our cloud penetration testing supports various compliance frameworks:<br><br>• <strong>SOC 2:</strong> Security and availability controls<br>• <strong>ISO 27001:</strong> Information security management<br>• <strong>PCI DSS:</strong> Payment card industry standards<br>• <strong>HIPAA:</strong> Healthcare data protection<br>• <strong>GDPR:</strong> Data privacy regulations<br>• <strong>FedRAMP:</strong> Federal cloud security requirements<br><br>Our reports provide compliance mapping and evidence for audits."
  },
  {
    q: "What's included in cloud penetration testing deliverables?",
    a: "Our cloud penetration testing deliverables include:<br><br>• Executive summary with business risk assessment<br>• Detailed technical findings and evidence<br>• Cloud security configuration review<br>• IAM policy analysis and recommendations<br>• Network architecture security assessment<br>• Data protection and encryption review<br>• Compliance gap analysis<br>• Remediation roadmap with priorities<br>• Retest validation after fixes"
  },
  {
    q: "How long does cloud penetration testing take?",
    a: "Testing duration varies based on cloud environment complexity:<br><br>• Simple cloud deployments: 1-2 weeks<br>• Medium complexity environments: 2-3 weeks<br>• Large enterprise cloud infrastructure: 3-6 weeks<br>• Multi-cloud environments: 4-8 weeks<br><br>Timeline depends on scope, number of services, compliance requirements, and testing depth needed."
  }
];

const CloudPenetrationFAQ: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFaq = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-20 bg-[#f3fcf7]">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl lg:text-4xl font-bold text-center text-gray-900 mb-12">
          Cloud Penetration Testing FAQ
        </h2>

        <div className="space-y-4">
          {cloudPenetrationFaqs.map((faq, index) => (
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

export default CloudPenetrationFAQ;