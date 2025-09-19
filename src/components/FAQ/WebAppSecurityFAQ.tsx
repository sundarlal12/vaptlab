import React, { useState } from "react";
import { ChevronDown } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const webAppFaqs = [
  {
    q: "What is web application penetration testing?",
    a: "Web application penetration testing is a comprehensive security assessment that simulates real-world attacks on web applications to identify vulnerabilities. It involves testing authentication mechanisms, input validation, session management, and business logic flaws that could be exploited by malicious actors."
  },
  {
    q: "How often should we perform web application security testing?",
    a: "We recommend performing web application security testing at least quarterly for internet-facing applications, after major releases or updates, and whenever significant changes are made to the application architecture. Critical applications may require more frequent testing."
  },
  {
    q: "What types of vulnerabilities can web app penetration testing identify?",
    a: "Web app penetration testing can identify various vulnerabilities including:<br><br>• SQL injection and NoSQL injection<br>• Cross-site scripting (XSS)<br>• Cross-site request forgery (CSRF)<br>• Authentication and authorization flaws<br>• Session management issues<br>• Input validation vulnerabilities<br>• Business logic flaws<br>• Security misconfigurations"
  },
  {
    q: "What is the difference between automated scanning and manual penetration testing?",
    a: "Automated scanning uses tools to quickly identify known vulnerabilities and common security issues, while manual penetration testing involves human expertise to discover complex business logic flaws, chained vulnerabilities, and sophisticated attack scenarios that automated tools might miss. We combine both approaches for comprehensive coverage."
  },
  {
    q: "How long does a web application penetration test take?",
    a: "The duration depends on the application's complexity and scope. Simple applications may take 3-5 days, while complex enterprise applications can require 2-4 weeks. We provide detailed timelines during the scoping phase based on your specific requirements."
  },
  {
    q: "Will penetration testing affect our application's performance?",
    a: "Our testing is designed to minimize impact on application performance. We conduct tests during agreed-upon timeframes and use controlled techniques to avoid disrupting normal operations. However, we recommend testing during maintenance windows for critical production systems."
  },
  {
    q: "What deliverables do we receive after web app penetration testing?",
    a: "You'll receive:<br><br>• Executive summary for leadership<br>• Detailed technical report with findings<br>• Risk ratings and impact assessments<br>• Step-by-step remediation guidance<br>• Proof-of-concept demonstrations<br>• Retest validation after fixes<br>• Compliance mapping (if applicable)"
  },
  {
    q: "Can web app penetration testing help with compliance requirements?",
    a: "Yes, our web application penetration testing helps meet various compliance requirements including PCI DSS, HIPAA, SOX, GDPR, and ISO 27001. Our reports provide the necessary documentation and evidence required for compliance audits and certifications."
  }
];

const WebAppSecurityFAQ: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFaq = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-20 bg-[#f3fcf7]">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl lg:text-4xl font-bold text-center text-gray-900 mb-12">
          Web Application Security Testing FAQ
        </h2>

        <div className="space-y-4">
          {webAppFaqs.map((faq, index) => (
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

export default WebAppSecurityFAQ;