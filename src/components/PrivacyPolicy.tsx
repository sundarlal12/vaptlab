import React from 'react';
import { Shield } from 'lucide-react';
import Header from './Header';
import Footer from './Footer';

const PrivacyPolicy: React.FC = () => {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      {/* Hero Section */}
      {/* <div className="bg-black text-white py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="flex justify-center mb-6">
              <div className="w-20 h-20 bg-white/20 rounded-full flex items-center justify-center">
                <Shield className="w-10 h-10 text-white" />
              </div>
            </div>
            <h1 className="text-4xl lg:text-5xl font-bold mb-6">Privacy Policy</h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Your privacy is important to us, and we are committed to protecting your privacy.
            </p>
          </div>
        </div>
      </div>
 */}
      <div
        className="text-white py-20"
        style={{
          background: "linear-gradient(to right, rgb(217, 47, 97), rgb(143, 15, 56))",
        }}
      >
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="flex justify-center mb-6">
              <div className="w-20 h-20 bg-white/20 rounded-full flex items-center justify-center">
                <Shield className="w-10 h-10 text-white" />
              </div>
            </div>
            <h1 className="text-4xl lg:text-5xl font-bold mb-6">
              Privacy Policy
            </h1>
            <p className="text-xl text-white/90 max-w-3xl mx-auto">
              Your privacy is important to us, and we are committed to protecting
              your privacy.
            </p>
          </div>
        </div>
      </div>
      {/* Main Content */}
      <div className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* About this policy */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-black mb-6">About this policy</h2>
            <div className="prose prose-lg max-w-none">
              <p className="text-gray-700 leading-relaxed mb-6">
                Your privacy is important to us, and we are committed to protecting your privacy. We believe it is important for you to know what personal data we at VAPTlabs collect from you, why we collect it, how we use it, and what rights you might be entitled to as a data subject or consumer.
              </p>
              <p className="text-gray-700 leading-relaxed">
                It is important that you read this policy, together with any additional and more specific information we may provide to you on various occasions when we are collecting or processing personal data. Your use of our sites, products, or services indicates you agree to our collection, usage, and disclosure of your information as described in this Privacy Policy.
              </p>
            </div>
          </section>

          {/* What is personal data */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-black mb-6">What is personal data?</h2>
            <div className="prose prose-lg max-w-none">
              <p className="text-gray-700 leading-relaxed">
                Personal data refers to any piece of information that relates to an identifiable individual. This may include but is not limited to name, email ID, IP address, etc.
              </p>
            </div>
          </section>

          {/* What information do we collect */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-black mb-6">What information do we collect?</h2>
            <div className="prose prose-lg max-w-none">
              <p className="text-gray-700 leading-relaxed mb-6">
                We collect the information only needed for legitimate business purposes.
              </p>
              <p className="text-gray-700 leading-relaxed mb-6">
                You may need to provide some personal information such as your full name, email ID, contact details, designation, etc. when you sign up for an account, register for an event, ask for customer support, or wish to buy our product or services.
              </p>
              <p className="text-gray-700 leading-relaxed mb-6">
                If you are availing our products or services; we may collect the following personal information from you or through your employer - full name, email ID, contact details, address, designation, fax, etc.
              </p>
              <p className="text-gray-700 leading-relaxed">
                We may collect personal information directly from publicly available databases, social media sites, or in collaboration with our partners from time to time. You may also need to provide some personal information if you wish to explore employment opportunities with us.
              </p>
            </div>
          </section>

          {/* Why do we collect this information */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-black mb-6">Why do we collect this information?</h2>
            <div className="prose prose-lg max-w-none">
              <p className="text-gray-700 leading-relaxed">
                We use personal information solely for the purpose of interacting with you and to enable you to avail of our products or services. We use personal information only for the specific reason for which it is provided. We do not sell your personal information to anyone.
              </p>
            </div>
          </section>

          {/* How do we collect this information */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-black mb-6">How do we collect this information?</h2>
            <div className="prose prose-lg max-w-none">
              <p className="text-gray-700 leading-relaxed">
                We gather your Personal Data when you access our website, submit information via our submission forms, get in touch with us, provide information directly to us, or upload data to our technology platforms. Additionally, we may receive Personal Data that has been collected by our affiliates, channel partners, service providers, and other third-party providers.
              </p>
            </div>
          </section>

          {/* What the data will be used for */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-black mb-6">What the data will be used for?</h2>
            <div className="prose prose-lg max-w-none">
              <p className="text-gray-700 leading-relaxed">
                We gather and handle personal information with specific objectives in mind. Firstly, we use it to deliver the services or products you've requested, ensuring your needs are met. Secondly, we employ your data to engage in communication, promptly addressing your inquiries and requests. Furthermore, we leverage this information to customize and elevate your experience on our platform or website, tailoring it to your preferences. We also utilize the data to enhance and refine our services and offerings, ensuring we consistently meet your expectations. Finally, it's essential for us to adhere to legal and regulatory obligations, which is another crucial purpose for collecting and processing personal data.
              </p>
            </div>
          </section>

          {/* Legal Basis for Data Processing */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-black mb-6">Legal Basis for Data Processing</h2>
            <div className="prose prose-lg max-w-none">
              <p className="text-gray-700 leading-relaxed mb-4">
                The processing of your personal data is carried out on one or more of the following legal bases:
              </p>
              <ul className="text-gray-700 space-y-2">
                <li><strong>Your consent:</strong> When you have given us explicit permission to process your data.</li>
                <li><strong>Contractual necessity:</strong> When processing is necessary to fulfil a contract or take pre-contractual steps at your request.</li>
                <li><strong>Legal obligation:</strong> When processing is required to comply with legal obligations.</li>
                <li><strong>Legitimate interests:</strong> When processing is based on our legitimate interests or those of a third party, provided that such interests are not overridden by your interests or fundamental rights.</li>
              </ul>
            </div>
          </section>

          {/* Data Sharing */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-black mb-6">Data Sharing</h2>
            <div className="prose prose-lg max-w-none">
              <p className="text-gray-700 leading-relaxed mb-4">
                We may share your personal data with the following categories of recipients:
              </p>
              <ul className="text-gray-700 space-y-2">
                <li><strong>Service providers:</strong> Third-party entities that assist us in delivering our services.</li>
                <li><strong>Affiliates and subsidiaries:</strong> Companies within our corporate group.</li>
                <li><strong>Legal and regulatory authorities:</strong> When required by law or to protect our rights and interests.</li>
              </ul>
            </div>
          </section>

          {/* Your Rights */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-black mb-6">Your Rights</h2>
            <div className="prose prose-lg max-w-none">
              <p className="text-gray-700 leading-relaxed mb-4">
                You have certain rights regarding your personal data:
              </p>
              <ul className="text-gray-700 space-y-2">
                <li><strong>Access:</strong> You may request access to the personal data we hold about you.</li>
                <li><strong>Correction:</strong> You have the right to correct any inaccurate or incomplete personal data.</li>
                <li><strong>Deletion:</strong> You may request the deletion of your personal data under certain circumstances.</li>
                <li><strong>Objection:</strong> You can object to the processing of your data for direct marketing or legitimate interests.</li>
                <li><strong>Portability:</strong> You can request the transfer of your data to another data controller.</li>
              </ul>
            </div>
          </section>

          {/* How to exercise your rights */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-black mb-6">How to exercise your rights?</h2>
            <div className="prose prose-lg max-w-none">
              <p className="text-gray-700 leading-relaxed">
                To exercise your rights, please contact us at <a href="mailto:contact@vaptlabs.com" className="text-black underline">contact@vaptlabs.com</a>
              </p>
            </div>
          </section>

          {/* How will we inform users of our privacy policy changes */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-black mb-6">How will we inform users of our privacy policy changes?</h2>
            <div className="prose prose-lg max-w-none">
              <p className="text-gray-700 leading-relaxed">
                We reserve the right to update this privacy notice at any time, and we will provide you with a new privacy notice when we make any substantial updates. We may also notify you in other ways from time to time about the processing of your personal data.
              </p>
            </div>
          </section>

          {/* Statement on protecting personal data */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-black mb-6">Statement on protecting personal data</h2>
            <div className="prose prose-lg max-w-none">
              <p className="text-gray-700 leading-relaxed mb-6">
                We are fully committed to information security and compliance with applicable regulations. We have implemented strong security controls for the protection of data. We have designed and implemented an information security program in line with the International Organization for Standardization (ISO) 27001:2013 standard and Service Organization Controls 2 (SOC 2). We have put in place appropriate measures to comply with the European Union (EU) General Data Protection Regulation (GDPR).
              </p>
              <p className="text-gray-700 leading-relaxed mb-6">
                Though we take reasonable measures to protect our assets against unauthorized access or attack; the internet inherently is not fully secure. While we work towards and strive to protect your personal information/privacy, we would like you to take note of inherent Internet risks associated with data transfer and processing. You also need to ensure that your User ID, Password, etc. are not disclosed to anyone and that your systems are safe for usage.
              </p>
              <p className="text-gray-700 leading-relaxed">
                At any point, if you suspect any security issues or incidents, or you receive any suspicious mail from someone holding themselves out to be a VAPTlabs employee or from a fake website claiming to be affiliated with VAPTlabs, you may reach out to us at <a href="mailto:contact@vaptlabs.com" className="text-black underline">contact@vaptlabs.com</a>
              </p>
            </div>
          </section>

          {/* Additional information */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-black mb-6">Additional information</h2>
            
            <div className="space-y-8">
              {/* CCPA */}
              <div>
                <h3 className="text-xl font-semibold text-black mb-4">California Consumer Privacy Act (CCPA):</h3>
                <p className="text-gray-700 leading-relaxed">
                  The California Consumer Privacy Act (CCPA) is a significant piece of privacy legislation that came into effect on January 1, 2020, in the state of California, USA. The CCPA grants California residents greater control over their personal data by providing them with the right to know what information businesses collect about them, the right to request the deletion of their data, and the right to opt out of the sale of their data to third parties. It also imposes various obligations on businesses, requiring them to be transparent about their data practices, implement data protection measures, and respect consumers' privacy preferences. The CCPA has had a substantial impact on how businesses handle personal data and has set a precedent for data privacy regulations in the United States.
                </p>
              </div>

              {/* VCDPA */}
              <div>
                <h3 className="text-xl font-semibold text-black mb-4">Virginia Consumer Data Protection Act (VCDPA)</h3>
                <p className="text-gray-700 leading-relaxed">
                  The Virginia Consumer Data Protection Act (VCDPA) is a comprehensive data privacy law that was signed into law on March 2, 2021, and became effective on January 1, 2023. This legislation is designed to protect the personal information of Virginia residents by giving them certain rights and imposing obligations on businesses that collect and process their data. The VCDPA provides consumers with the right to access their personal data, request its deletion, and opt out of data processing for certain purposes. It also places responsibilities on businesses to be transparent about their data practices, implement security measures to safeguard data and conduct data protection assessments. The VCDPA signifies Virginia's commitment to data privacy and follows a growing trend of state-level data protection laws in the United States, like the California Consumer Privacy Act (CCPA) and the European Union's General Data Protection Regulation (GDPR).
                </p>
              </div>

              {/* UAE */}
              <div>
                <h3 className="text-xl font-semibold text-black mb-4">United Arab Emirates (UAE) - UAE Data Protection Law</h3>
                <p className="text-gray-700 leading-relaxed">
                  The UAE has established a framework to safeguard the personal data of its residents through Federal Law No. 2 of 2019, known as the Data Protection Law. According to Article 2 of this law, personal data encompasses information that can identify an individual directly or indirectly, aligning with the principles of the EU GDPR. The law is applicable to all entities, including government bodies, businesses, and individuals, and it governs the entire data lifecycle, from collection and usage to storage and transfer. A key objective of the UAE Data Protection Law is to ensure the lawful and equitable handling of personal data and to uphold individuals' rights, including their right to access, correct, and delete their data, thereby enhancing data privacy and transparency in the UAE.
                </p>
              </div>

              {/* Saudi Arabia */}
              <div>
                <h3 className="text-xl font-semibold text-black mb-4">Saudi Arabia - Personal Data Protection Law (PDPL)</h3>
                <p className="text-gray-700 leading-relaxed">
                  Saudi Arabia's Personal Data Protection Law (PDPL) represents a significant development in data privacy regulations within the Kingdom. Enacted to safeguard personal data, the PDPL likely includes key provisions such as consent requirements for data processing, data subject rights, the appointment of Data Protection Officers (DPOs), rules for international data transfers, and mandates for reporting data breaches. The PDPL is aimed at ensuring that personal information is handled with care and in accordance with established data protection principles. As with any legal framework, it's crucial to stay updated on the most recent developments and consult official sources or legal experts for the latest information on personal data protection in Saudi Arabia.
                </p>
              </div>

              {/* India */}
              <div>
                <h3 className="text-xl font-semibold text-black mb-4">India's Digital Personal Data Protection Act, 2023</h3>
                <p className="text-gray-700 leading-relaxed">
                  India has achieved a major milestone with the swift passage of the Digital Personal Data Protection (DPDP) Bill, 2022. This legislation, approved by the Union Cabinet on July 5 and subsequently passed in both houses of Parliament in August 2023, has now become the Digital Personal Data Protection Act. Alongside other related bills, including the Digital India Bill and the draft Indian Telecommunication Bill, 2022, this act forms a significant part of India's efforts to enhance data protection in its rapidly evolving digital environment.
                </p>
                <p className="text-gray-700 leading-relaxed mt-4">
                  Fundamentally, the DPDP Act aims to enhance accountability and responsibility for entities operating in India, including internet companies, mobile apps, and data-processing businesses. Emphasizing the "Right to Privacy," the law demands transparent and responsible handling of personal data, safeguarding the privacy and data protection rights of Indian citizens. Notably, the Act's jurisdiction extends beyond India's borders, covering data processing activities abroad, especially concerning organizations serving Indian individuals or profiling Indian citizens. This extension bolsters data protection, ensuring that Indian citizens' data enjoys strong safeguards even when handled outside the country.
                </p>
              </div>
            </div>
          </section>

          {/* Contact us about the privacy policy */}
          <section className="mb-12">
            <div className="bg-black text-white rounded-lg p-8" style={{
          background: "linear-gradient(to right, rgb(217, 47, 97), rgb(143, 15, 56))",
        }}>
              <h2 className="text-3xl font-bold mb-6">Contact us about the privacy policy</h2>
              <p className="text-gray-300 leading-relaxed mb-6">
                If you have a privacy concern, complaint, or question regarding this privacy statement, please let us know by sending an email to <a href="mailto:contact@vaptlabs.com" className="text-white underline">contact@vaptlabs.com</a>
              </p>
              <p className="text-gray-300 leading-relaxed">
                We value your trust and will take the appropriate measures to ensure that we fulfil your request.
              </p>
            </div>
          </section>

        </div>
      </div>

      <Footer />
    </div>
  );
};

export default PrivacyPolicy;