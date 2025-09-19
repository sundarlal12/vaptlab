import React, { useState } from "react";
import { ChevronDown } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const iotSecurityFaqs = [
  {
    q: "What is IoT security testing?",
    a: "IoT security testing is a comprehensive assessment of Internet of Things devices, communication protocols, and ecosystems. It evaluates device firmware, hardware security, communication protocols, backend infrastructure, and the overall IoT ecosystem to identify vulnerabilities that could be exploited by attackers."
  },
  {
    q: "What types of IoT devices can you test?",
    a: "We test a wide range of IoT devices including:<br><br>• Smart home devices (cameras, thermostats, locks)<br>• Industrial IoT (IIoT) sensors and controllers<br>• Medical IoT devices and wearables<br>• Automotive connected systems<br>• Smart city infrastructure<br>• Consumer electronics and appliances<br>• Edge computing devices<br>• IoT gateways and hubs"
  },
  {
    q: "What IoT security vulnerabilities can be identified?",
    a: "IoT security testing can identify:<br><br>• Firmware vulnerabilities and backdoors<br>• Weak or default authentication credentials<br>• Insecure communication protocols<br>• Unencrypted data transmission<br>• Hardware security weaknesses<br>• Insecure firmware update mechanisms<br>• Privacy and data leakage issues<br>• Network protocol vulnerabilities<br>• Physical security weaknesses<br>• Cloud backend security flaws"
  },
  {
    q: "Do you perform physical hardware testing of IoT devices?",
    a: "Yes, our IoT security testing includes physical hardware analysis:<br><br>• Hardware teardown and component analysis<br>• Debug interface identification (UART, JTAG)<br>• Firmware extraction and analysis<br>• Side-channel attack testing<br>• Tamper resistance evaluation<br>• Physical security assessment<br>• Hardware root of trust validation<br><br>We use specialized equipment and techniques for comprehensive hardware security testing."
  },
  {
    q: "How do you test IoT communication protocols?",
    a: "We test various IoT communication protocols including:<br><br>• <strong>Wireless:</strong> WiFi, Bluetooth, Zigbee, Z-Wave<br>• <strong>Cellular:</strong> 4G/5G, NB-IoT, LTE-M<br>• <strong>Application Layer:</strong> MQTT, CoAP, HTTP/HTTPS<br>• <strong>Industrial:</strong> Modbus, DNP3, OPC-UA<br>• <strong>Proprietary protocols</strong> specific to devices<br><br>We analyze protocol security, encryption implementation, and authentication mechanisms."
  },
  {
    q: "Can IoT security testing be performed remotely?",
    a: "IoT security testing typically requires a hybrid approach:<br><br>• <strong>Remote Testing:</strong> Cloud services, APIs, and network communications<br>• <strong>On-site Testing:</strong> Physical device analysis and hardware testing<br>• <strong>Lab Testing:</strong> Devices can be shipped to our secure testing facility<br><br>We work with you to determine the most appropriate testing approach based on device types and security requirements."
  },
  {
    q: "How long does IoT security testing take?",
    a: "Testing duration varies based on device complexity and scope:<br><br>• Single IoT device: 1-2 weeks<br>• IoT ecosystem (multiple devices): 2-4 weeks<br>• Complex industrial IoT systems: 4-8 weeks<br>• Large-scale IoT deployments: 6-12 weeks<br><br>Timeline depends on device types, protocol complexity, hardware analysis requirements, and ecosystem scope."
  },
  {
    q: "Do you provide IoT security compliance guidance?",
    a: "Yes, we provide guidance for various IoT security standards and regulations:<br><br>• <strong>NIST IoT Security Framework</strong><br>• <strong>IEC 62443</strong> (Industrial IoT)<br>• <strong>ETSI EN 303 645</strong> (Consumer IoT)<br>• <strong>FDA Cybersecurity</strong> (Medical devices)<br>• <strong>ISO/IEC 27001</strong><br>• <strong>GDPR</strong> (Data privacy)<br><br>Our reports include compliance mapping and recommendations for meeting regulatory requirements."
  }
];

const IoTSecurityFAQ: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFaq = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-20 bg-[#f3fcf7]">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl lg:text-4xl font-bold text-center text-gray-900 mb-12">
          IoT Security Testing FAQ
        </h2>

        <div className="space-y-4">
          {iotSecurityFaqs.map((faq, index) => (
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

export default IoTSecurityFAQ;