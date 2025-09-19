import React, { useState } from "react";
import { ChevronDown } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const apiSecurityFaqs = [
  {
    q: "What is API penetration testing?",
    a: "API penetration testing is a comprehensive security assessment of Application Programming Interfaces (APIs) to identify vulnerabilities in REST, GraphQL, SOAP, and other API implementations. It evaluates authentication, authorization, input validation, business logic, and data handling mechanisms to ensure API security."
  },
  {
    q: "What types of APIs can you test?",
    a: "We test various API types and architectures:<br><br>• <strong>REST APIs:</strong> JSON and XML-based services<br>• <strong>GraphQL APIs:</strong> Query language interfaces<br>• <strong>SOAP APIs:</strong> XML-based web services<br>• <strong>gRPC APIs:</strong> High-performance RPC framework<br>• <strong>WebSocket APIs:</strong> Real-time communication<br>• <strong>Microservices APIs:</strong> Distributed service architectures<br>• <strong>Third-party APIs:</strong> External service integrations"
  },
  {
    q: "What API security vulnerabilities can be identified?",
    a: "API penetration testing can identify vulnerabilities from the OWASP API Security Top 10:<br><br>• Broken Object Level Authorization<br>• Broken User Authentication<br>• Excessive Data Exposure<br>• Lack of Resources & Rate Limiting<br>• Broken Function Level Authorization<br>• Mass Assignment<br>• Security Misconfiguration<br>• Injection vulnerabilities<br>• Improper Assets Management<br>• Insufficient Logging & Monitoring"
  },
  {
    q: "How do you test APIs without documentation?",
    a: "We use various techniques to test undocumented APIs:<br><br>• API discovery through traffic analysis<br>• Endpoint enumeration and fuzzing<br>• Parameter discovery and testing<br>• Response analysis and pattern recognition<br>• Reverse engineering of API behavior<br>• Schema inference from responses<br>• Dynamic API mapping and documentation<br><br>However, having API documentation significantly improves testing coverage and efficiency."
  },
  {
    q: "Do you test API authentication and authorization mechanisms?",
    a: "Yes, we comprehensively test API authentication and authorization:<br><br>• <strong>Authentication Testing:</strong> OAuth 2.0, JWT, API keys, Basic Auth<br>• <strong>Authorization Testing:</strong> Role-based access control (RBAC)<br>• <strong>Session Management:</strong> Token validation and lifecycle<br>• <strong>Privilege Escalation:</strong> Horizontal and vertical access testing<br>• <strong>Multi-factor Authentication:</strong> MFA implementation testing<br>• <strong>SSO Integration:</strong> Single sign-on security assessment"
  },
  {
    q: "How do you handle rate limiting and API quotas during testing?",
    a: "We carefully manage testing to respect API limits while ensuring comprehensive coverage:<br><br>• Coordination with your team on testing windows<br>• Use of multiple test accounts and API keys<br>• Distributed testing to avoid rate limits<br>• Testing of rate limiting effectiveness<br>• Validation of quota enforcement mechanisms<br>• Assessment of rate limiting bypass techniques<br>• Documentation of API usage patterns"
  },
  {
    q: "Can API testing be performed in production environments?",
    a: "We recommend testing in non-production environments when possible, but can safely test production APIs:<br><br>• <strong>Preferred:</strong> Development, staging, or testing environments<br>• <strong>Production Testing:</strong> With careful coordination and controls<br>• <strong>Read-only Testing:</strong> Avoiding data modification operations<br>• <strong>Controlled Payloads:</strong> Using safe test data<br>• <strong>Monitoring:</strong> Real-time monitoring during tests<br>• <strong>Rollback Plans:</strong> Immediate remediation if issues occur"
  },
  {
    q: "What deliverables do you provide for API security testing?",
    a: "Our API security testing deliverables include:<br><br>• Executive summary with business risk assessment<br>• Detailed vulnerability findings with evidence<br>• API security architecture review<br>• Authentication and authorization analysis<br>• Business logic flaw documentation<br>• Input validation and injection testing results<br>• Rate limiting and DoS protection assessment<br>• Remediation guidance with code examples<br>• API security best practices recommendations<br>• Retest validation after fixes"
  }
];

const APISecurityFAQ: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFaq = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-20 bg-[#f3fcf7]">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl lg:text-4xl font-bold text-center text-gray-900 mb-12">
          API Penetration Testing FAQ
        </h2>

        <div className="space-y-4">
          {apiSecurityFaqs.map((faq, index) => (
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

export default APISecurityFAQ;