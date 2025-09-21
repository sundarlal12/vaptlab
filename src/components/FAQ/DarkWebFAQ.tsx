// src/components/FAQ/DarkWebFAQ.tsx
import React, { useState } from "react";
import { ChevronDown } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const darkWebFaqs = [
  {
    q: "What is dark web monitoring?",
    a: "Dark web monitoring is the continuous scanning of underground sources — paste sites, forums, marketplaces, chat channels and other semi-private venues — to detect leaked credentials, exposed personal data, intellectual property, or mentions of your brand and assets."
  },
  {
    q: "What types of data do you look for?",
    a: "We search for credentials and email lists, API keys, leaked databases (PII), source code, internal documents, leaked tokens/secrets, product or brand mentions tied to company domains, and marketplaces selling company data."
  },
  {
    q: "How do you reduce false positives?",
    a: "Detected items are triaged by automated filters then validated by human analysts who enrich results with context (timestamps, sample evidence, threat actor notes). We prioritize high-impact findings and attach recommended remediation steps to reduce noise."
  },
  {
    q: "Can you tie leaks to specific threat actors or campaigns?",
    a: "Where possible we correlate artifacts to actor handles, known campaigns, or marketplace listings. Correlation increases confidence and helps prioritize incidents for investigation and containment."
  },
  {
    q: "How quickly will we be notified of critical exposures?",
    a: "Critical exposures (active sale of credentials, sensitive PII, keys/tokens) generate immediate alerts. Non-critical mentions are batched and delivered with analyst context through your configured alert channels (email, ticketing, webhook, or SIEM)."
  },
  {
    q: "Do you need access to our systems to monitor?",
    a: "No — dark web monitoring can operate without access to internal systems. Providing lists of high-value domains, employee emails, or service accounts helps us reduce false positives and focus detection on assets you care about."
  },
  {
    q: "What actions do you recommend when a leak is confirmed?",
    a: "Typical remediation steps include: immediate credential resets and forced re-authentication, revoking/replacing API keys or tokens, rotating secrets, blocking or monitoring implicated accounts, and initiating incident response playbooks if exposure is material."
  },
  {
    q: "How is intelligence delivered and integrated?",
    a: "We deliver analyst-validated alerts via email and optional webhook/SIEM integrations. Reports include evidence, risk score, recommended actions, and IOC exports (hashes, leaked filenames, URLs) for ingestion into your tooling."
  }
];

const DarkWebFAQ: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFaq = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-20 bg-[#fff5f7]">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl lg:text-4xl font-bold text-center text-gray-900 mb-12">
          {/* red-gradient title */}
          <span
            className="pb-2 inline-block"
            style={{
              background: "linear-gradient(90deg, rgb(217,47,97), rgb(143,15,56))",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}
          >
            Dark Web Monitoring FAQ
          </span>
        </h2>

        <div className="space-y-4">
          {darkWebFaqs.map((faq, index) => (
            <div key={index} className="border border-gray-200 rounded-lg bg-white">
              <button
                className="w-full flex justify-between items-center text-left px-6 py-4 text-gray-900 font-medium"
                onClick={() => toggleFaq(index)}
              >
                <span>{faq.q}</span>

                <ChevronDown
                  className={`w-5 h-5 transform transition-transform duration-300 ${
                    openIndex === index ? "rotate-180" : ""
                  }`}
                  // color chevron red when open (subtle), grey otherwise
                  style={{ color: openIndex === index ? "rgb(217,47,97)" : undefined }}
                />
              </button>

              <AnimatePresence initial={false}>
                {openIndex === index && (
                  <motion.div
                    key="content"
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.28, ease: "easeInOut" }}
                    className="overflow-hidden"
                  >
                    <div className="px-6 pb-6 text-gray-600 prose prose-sm">
                      {/* plain text -> safe HTML; keep as text unless you intentionally include markup */}
                      <p dangerouslySetInnerHTML={{ __html: faq.a }} />
                    </div>
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

export default DarkWebFAQ;
