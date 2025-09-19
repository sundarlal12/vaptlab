import React, { useState } from "react";
import { ChevronDown } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const networkPenetrationFaqs = [
  {
    q: "What is network penetration testing?",
    a: "Network penetration testing is a comprehensive security assessment that evaluates the security of network infrastructure, including firewalls, routers, switches, and network services. It simulates real-world attacks to identify vulnerabilities that could allow unauthorized access to network resources."
  },
  {
    q: "What types of network penetration testing do you offer?",
    a: "We offer several types of network penetration testing:<br><br>• <strong>External Network Testing:</strong> Testing from outside your network perimeter<br>• <strong>Internal Network Testing:</strong> Testing from within your network<br>• <strong>Wireless Network Testing:</strong> WiFi and wireless infrastructure assessment<br>• <strong>Segmentation Testing:</strong> Network isolation and VLAN security<br>• <strong>Firewall Testing:</strong> Firewall rule and configuration assessment"
  },
  {
    q: "What network vulnerabilities can penetration testing identify?",
    a: "Network penetration testing can identify:<br><br>• Open ports and unnecessary services<br>• Weak or default credentials<br>• Firewall misconfigurations<br>• Network protocol vulnerabilities<br>• Unpatched network devices<br>• Insecure network protocols<br>• Network segmentation issues<br>• Wireless security weaknesses<br>• Man-in-the-middle attack vectors"
  },
  {
    q: "Will network penetration testing disrupt our business operations?",
    a: "We design our network testing to minimize business disruption. We coordinate testing schedules with your team, avoid high-traffic periods, and use controlled testing techniques. However, we recommend scheduling tests during maintenance windows for critical network infrastructure."
  },
  {
    q: "How do you test network security without causing outages?",
    a: "Our methodology includes:<br><br>• Careful reconnaissance and planning<br>• Non-disruptive scanning techniques<br>• Coordinated testing schedules<br>• Real-time monitoring during tests<br>• Immediate rollback procedures if needed<br>• Testing in isolated network segments when possible<br>• Clear communication with your IT team throughout"
  },
  {
    q: "What's the difference between vulnerability scanning and network penetration testing?",
    a: "Vulnerability scanning is automated identification of known vulnerabilities, while network penetration testing involves manual exploitation and validation of vulnerabilities. Penetration testing goes deeper by:<br><br>• Attempting to exploit identified vulnerabilities<br>• Chaining multiple vulnerabilities together<br>• Testing business impact of security flaws<br>• Validating false positives from scans<br>• Providing proof-of-concept demonstrations"
  },
  {
    q: "How long does network penetration testing take?",
    a: "Testing duration depends on network size and complexity:<br><br>• Small networks (< 50 hosts): 3-5 days<br>• Medium networks (50-200 hosts): 1-2 weeks<br>• Large enterprise networks (200+ hosts): 2-4 weeks<br>• Complex multi-site networks: 4-8 weeks<br><br>We provide detailed timelines during the scoping phase."
  },
  {
    q: "Do you provide remediation guidance for network vulnerabilities?",
    a: "Yes, our network penetration testing reports include:<br><br>• Detailed vulnerability descriptions<br>• Risk ratings and business impact<br>• Step-by-step remediation instructions<br>• Network hardening recommendations<br>• Security architecture improvements<br>• Patch management priorities<br>• Follow-up retesting to validate fixes"
  }
];

const NetworkPenetrationFAQ: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFaq = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-20 bg-[#f3fcf7]">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl lg:text-4xl font-bold text-center text-gray-900 mb-12">
          Network Penetration Testing FAQ
        </h2>

        <div className="space-y-4">
          {networkPenetrationFaqs.map((faq, index) => (
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

export default NetworkPenetrationFAQ;