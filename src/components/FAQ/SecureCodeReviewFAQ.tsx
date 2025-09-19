import React, { useState } from "react";
import { ChevronDown } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const secureCodeReviewFaqs = [
  {
    q: "What is secure code review?",
    a: "Secure code review is a systematic examination of source code to identify security vulnerabilities, coding flaws, and potential exploits that could be leveraged by malicious actors. It involves analyzing code structure, logic implementation, input validation, authentication mechanisms, and data handling practices."
  },
  {
    q: "What types of vulnerabilities can secure code review identify?",
    a: "Secure code review can identify various security vulnerabilities including:<br><br>• SQL injection and NoSQL injection flaws<br>• Cross-site scripting (XSS) vulnerabilities<br>• Authentication and authorization weaknesses<br>• Input validation and sanitization issues<br>• Cryptographic implementation flaws<br>• Buffer overflow and memory corruption issues<br>• Business logic vulnerabilities<br>• Insecure data storage and transmission<br>• Race conditions and concurrency issues"
  },
  {
    q: "What's the difference between static and dynamic code analysis?",
    a: "Static and dynamic code analysis serve different purposes:<br><br><strong>Static Analysis:</strong><br>• Examines source code without executing it<br>• Identifies potential vulnerabilities in code structure<br>• Can analyze entire codebase quickly<br>• May produce false positives<br><br><strong>Dynamic Analysis:</strong><br>• Tests running applications<br>• Identifies runtime vulnerabilities<br>• Provides real-world attack scenarios<br>• May miss code paths not executed during testing<br><br>We combine both approaches for comprehensive coverage."
  },
  {
    q: "Which programming languages do you review?",
    a: "We provide secure code review for a wide range of programming languages:<br><br>• <strong>Web Technologies:</strong> JavaScript, TypeScript, PHP, Python, Ruby<br>• <strong>Enterprise Languages:</strong> Java, C#, .NET, Scala, Kotlin<br>• <strong>Systems Languages:</strong> C, C++, Rust, Go<br>• <strong>Mobile Development:</strong> Swift, Objective-C, Java (Android), Kotlin<br>• <strong>Scripting Languages:</strong> Python, PowerShell, Bash<br>• <strong>Database Languages:</strong> SQL, PL/SQL, T-SQL"
  },
  {
    q: "How long does a secure code review take?",
    a: "The duration depends on codebase size and complexity:<br><br>• Small applications (< 10K lines): 3-5 days<br>• Medium applications (10K-50K lines): 1-2 weeks<br>• Large applications (50K-200K lines): 2-4 weeks<br>• Enterprise applications (200K+ lines): 4-8 weeks<br><br>Factors affecting timeline include code complexity, number of components, framework usage, and review depth required."
  },
  {
    q: "Do you provide remediation guidance for identified vulnerabilities?",
    a: "Yes, our secure code review includes comprehensive remediation guidance:<br><br>• Detailed vulnerability descriptions with code examples<br>• Step-by-step fix instructions<br>• Secure coding best practices<br>• Code snippets showing proper implementation<br>• Priority rankings based on risk assessment<br>• Developer training recommendations<br>• Follow-up consultations to verify fixes<br>• Integration with development workflows"
  },
  {
    q: "Can secure code review be integrated into CI/CD pipelines?",
    a: "Yes, we can integrate secure code review into your development workflow:<br><br>• Automated static analysis tools integration<br>• Pre-commit and pre-merge security checks<br>• Continuous security monitoring<br>• Integration with popular CI/CD platforms (Jenkins, GitLab, GitHub Actions)<br>• Custom security gates and quality metrics<br>• Developer IDE plugins for real-time feedback<br>• Security dashboard and reporting integration"
  },
  {
    q: "What deliverables do you provide for secure code review?",
    a: "Our secure code review deliverables include:<br><br>• Executive summary with risk assessment<br>• Detailed technical findings report<br>• Vulnerability classification and severity ratings<br>• Source code annotations and comments<br>• Remediation roadmap with priorities<br>• Secure coding guidelines and best practices<br>• Developer training materials<br>• Re-review validation after fixes<br>• Compliance mapping for relevant standards"
  }
];

const SecureCodeReviewFAQ: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFaq = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-20 bg-[#f3fcf7]">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl lg:text-4xl font-bold text-center text-gray-900 mb-12">
          Secure Code Review FAQ
        </h2>

        <div className="space-y-4">
          {secureCodeReviewFaqs.map((faq, index) => (
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

export default SecureCodeReviewFAQ;