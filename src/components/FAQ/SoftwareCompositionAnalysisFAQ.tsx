import React, { useState } from "react";
import { ChevronDown } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const softwareCompositionAnalysisFaqs = [
  {
    q: "What is Software Composition Analysis (SCA)?",
    a: "Software Composition Analysis (SCA) is a comprehensive security practice that identifies and analyzes third-party components, open source libraries, and dependencies within software applications. It helps organizations understand their software supply chain, identify known vulnerabilities, ensure license compliance, and maintain security throughout the software development lifecycle."
  },
  {
    q: "Why is SCA important for modern applications?",
    a: "SCA is crucial for modern applications because:<br><br>• Modern applications contain 60-90% third-party code<br>• Open source vulnerabilities can introduce significant security risks<br>• License compliance violations can result in legal issues<br>• Supply chain attacks are increasingly common<br>• Regulatory requirements mandate software transparency<br>• DevSecOps practices require continuous security monitoring<br>• Software Bill of Materials (SBOM) requirements are expanding"
  },
  {
    q: "What types of components does SCA analyze?",
    a: "SCA analyzes various types of software components:<br><br>• <strong>Open Source Libraries:</strong> NPM, Maven, PyPI, NuGet packages<br>• <strong>Commercial Components:</strong> Third-party proprietary libraries<br>• <strong>Container Images:</strong> Docker images and base layers<br>• <strong>Firmware Components:</strong> Embedded system libraries<br>• <strong>Transitive Dependencies:</strong> Indirect dependencies of direct dependencies<br>• <strong>Development Tools:</strong> Build tools and development frameworks<br>• <strong>Runtime Dependencies:</strong> Components loaded at application runtime"
  },
  {
    q: "What vulnerabilities can SCA identify?",
    a: "SCA can identify various types of vulnerabilities and risks:<br><br>• Known CVEs in third-party components<br>• Outdated libraries with security patches available<br>• Components with known malware or backdoors<br>• License compliance violations and conflicts<br>• End-of-life components without security support<br>• Components with weak cryptographic implementations<br>• Supply chain compromise indicators<br>• Policy violations for prohibited components<br>• Configuration vulnerabilities in dependencies"
  },
  {
    q: "How does SCA integrate with development workflows?",
    a: "SCA integrates seamlessly with modern development workflows:<br><br>• <strong>IDE Integration:</strong> Real-time vulnerability alerts during development<br>• <strong>CI/CD Pipeline:</strong> Automated scanning in build processes<br>• <strong>Repository Scanning:</strong> Continuous monitoring of code repositories<br>• <strong>Container Scanning:</strong> Analysis of container images and registries<br>• <strong>Policy Enforcement:</strong> Automated blocking of vulnerable components<br>• <strong>Dependency Management:</strong> Integration with package managers<br>• <strong>Reporting Dashboards:</strong> Centralized visibility and metrics"
  },
  {
    q: "What is a Software Bill of Materials (SBOM)?",
    a: "A Software Bill of Materials (SBOM) is a comprehensive inventory of all software components, libraries, and dependencies used in an application. It includes:<br><br>• Component names, versions, and suppliers<br>• Dependency relationships and hierarchies<br>• License information and compliance status<br>• Vulnerability status and risk assessments<br>• Component provenance and integrity verification<br>• Update and patch status information<br><br>SBOMs are increasingly required for regulatory compliance and supply chain transparency."
  },
  {
    q: "How do you handle false positives in SCA results?",
    a: "We employ several strategies to minimize and manage false positives:<br><br>• Advanced vulnerability correlation and verification<br>• Contextual analysis of component usage patterns<br>• Reachability analysis to determine exploitability<br>• Custom rules and policies for organization-specific contexts<br>• Manual verification of critical findings<br>• Continuous tuning of detection algorithms<br>• Integration with threat intelligence feeds<br>• Prioritization based on actual risk and exploitability"
  },
  {
    q: "What deliverables do you provide for SCA?",
    a: "Our SCA deliverables include:<br><br>• Comprehensive software inventory (SBOM)<br>• Vulnerability assessment report with risk ratings<br>• License compliance analysis and recommendations<br>• Supply chain risk assessment<br>• Remediation roadmap with upgrade recommendations<br>• Policy recommendations for component governance<br>• Integration guidance for development workflows<br>• Continuous monitoring setup and configuration<br>• Training materials for development teams<br>• Compliance documentation for regulatory requirements"
  }
];

const SoftwareCompositionAnalysisFAQ: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFaq = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-20 bg-[#f3fcf7]">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl lg:text-4xl font-bold text-center text-gray-900 mb-12">
          Software Composition Analysis FAQ
        </h2>

        <div className="space-y-4">
          {softwareCompositionAnalysisFaqs.map((faq, index) => (
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

export default SoftwareCompositionAnalysisFAQ;