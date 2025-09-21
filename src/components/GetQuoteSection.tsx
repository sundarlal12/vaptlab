// import { Shield, Settings, Monitor, Cloud, Cpu } from "lucide-react";

// const GetQuoteSection = () => {
//   return (
//     <section className="py-20 bg-gray-50">
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//         <div className="grid lg:grid-cols-2 gap-16 items-start">
//           {/* Left Side - Content and Stats */}
//           <div>
//             <p className="text-emerald-500 font-semibold mb-4 tracking-wider uppercase text-sm">
//               GET A QUOTE
//             </p>
//             <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
//               Want To Protect Your Organization from Emerging Cyber Threats?
//             </h2>
//             <p className="text-lg text-gray-600 mb-12 leading-relaxed">
//               Now is the perfect time to stay one step ahead of evolving cyber
//               threats by taking proactive security measures. Fill out the form,
//               and our expert pentesters will help you identify and address
//               vulnerabilities before they escalate.
//             </p>

//             {/* Stats Grid */}
//             <div className="grid grid-cols-2 gap-8">
//               <div className="flex items-start space-x-4">
//                 <div className="w-12 h-12 bg-emerald-100 rounded-xl flex items-center justify-center flex-shrink-0">
//                   <Shield className="w-6 h-6 text-emerald-600" />
//                 </div>
//                 <div>
//                   <div className="text-3xl font-bold text-emerald-600 mb-1">
//                     1000+
//                   </div>
//                   <div className="text-gray-500 text-sm">
//                     Total No. Vulnerabilities
//                   </div>
//                 </div>
//               </div>

//               <div className="flex items-start space-x-4">
//                 <div className="w-12 h-12 bg-emerald-100 rounded-xl flex items-center justify-center flex-shrink-0">
//                   <Settings className="w-6 h-6 text-emerald-600" />
//                 </div>
//                 <div>
//                   <div className="text-3xl font-bold text-emerald-600 mb-1">
//                     60+
//                   </div>
//                   <div className="text-gray-500 text-sm">
//                     Assessment Completed
//                   </div>
//                 </div>
//               </div>

//               <div className="flex items-start space-x-4">
//                 <div className="w-12 h-12 bg-emerald-100 rounded-xl flex items-center justify-center flex-shrink-0">
//                   <Monitor className="w-6 h-6 text-emerald-600" />
//                 </div>
//                 <div>
//                   <div className="text-3xl font-bold text-emerald-600 mb-1">
//                     4+
//                   </div>
//                   <div className="text-gray-500 text-sm">Years in Business</div>
//                 </div>
//               </div>

//               <div className="flex items-start space-x-4">
//                 <div className="w-12 h-12 bg-emerald-100 rounded-xl flex items-center justify-center flex-shrink-0">
//                   <Cloud className="w-6 h-6 text-emerald-600" />
//                 </div>
//                 <div>
//                   <div className="text-3xl font-bold text-emerald-600 mb-1">
//                     5+
//                   </div>
//                   <div className="text-gray-500 text-sm">
//                     Countries Served
//                   </div>
//                 </div>
//               </div>

//               <div className="flex items-start space-x-4 col-span-2">
//                 <div className="w-12 h-12 bg-emerald-100 rounded-xl flex items-center justify-center flex-shrink-0">
//                   <Cpu className="w-6 h-6 text-emerald-600" />
//                 </div>
//                 <div>
//                   <div className="text-3xl font-bold text-emerald-600 mb-1">
//                     10+
//                   </div>
//                   <div className="text-gray-500 text-sm">Trusted Clients</div>
//                 </div>
//               </div>
//             </div>
//           </div>

//           {/* Right Side - Contact Form */}
//           <div className="bg-white rounded-3xl p-8 shadow-xl">
//             <form className="space-y-6">
//               {/* Name and Email Row */}
//               <div className="grid md:grid-cols-2 gap-6">
//                 <div>
//                   <label className="block text-sm font-semibold text-gray-700 mb-2">
//                     Full Name*
//                   </label>
//                   <input
//                     type="text"
//                     placeholder="Enter your full name"
//                     className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 transition-colors"
//                   />
//                 </div>
//                 <div>
//                   <label className="block text-sm font-semibold text-gray-700 mb-2">
//                     Work Email*
//                   </label>
//                   <input
//                     type="email"
//                     placeholder="Enter your work email"
//                     className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 transition-colors"
//                   />
//                 </div>
//               </div>

//               {/* Phone Number */}
//               <div>
//                 <label className="block text-sm font-semibold text-gray-700 mb-2">
//                   Phone Number*
//                 </label>
//                 <div className="flex">
//                   <select className="px-3 py-3 border border-gray-300 rounded-l-xl bg-gray-50 text-gray-700 focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500">
//                  <option value="+1">+1</option><option value="+44">+44</option><option value="+61">+61</option><option value="+91">+91</option><option value="+92">+92</option><option value="+93">+93</option><option value="+94">+94</option><option value="+95">+95</option><option value="+20">+20</option><option value="+33">+33</option><option value="+49">+49</option><option value="+81">+81</option><option value="+86">+86</option><option value="+7">+7</option><option value="+32">+32</option><option value="+34">+34</option><option value="+39">+39</option><option value="+55">+55</option><option value="+213">+213</option><option value="+351">+351</option><option value="+27">+27</option><option value="+64">+64</option><option value="+82">+82</option><option value="+46">+46</option><option value="+358">+358</option><option value="+31">+31</option><option value="+972">+972</option><option value="+62">+62</option><option value="+63">+63</option><option value="+65">+65</option><option value="+66">+66</option><option value="+234">+234</option><option value="+255">+255</option><option value="+212">+212</option><option value="+961">+961</option><option value="+977">+977</option><option value="+880">+880</option>
//                   </select>
//                   <input
//                     type="tel"
//                     placeholder="Enter your phone number"
//                     className="flex-1 px-4 py-3 border border-l-0 border-gray-300 rounded-r-xl focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 transition-colors"
//                   />
//                 </div>
//               </div>

//               {/* Services Checkboxes */}
//               <div>
//                 <label className="block text-sm font-semibold text-gray-700 mb-4">
//                   Types of services you need*
//                 </label>
//                 <div className="grid grid-cols-2 gap-4">
//                   {[
//                     "Web app pentesting",
//                     "API pentesting",
//                     "External Network Pentesting",
//                     "Cloud security assessment",
//                     "Mobile app pentesting",
//                     "I want to partner with VAPTlabs",
//                     "IoT Pentesting",
//                     "Others",
//                   ].map((service, i) => (
//                     <label
//                       key={i}
//                       className="flex items-center space-x-3 cursor-pointer"
//                     >
//                       <input
//                         type="checkbox"
//                         className="w-4 h-4 text-emerald-600 border-gray-300 rounded focus:ring-emerald-500"
//                       />
//                       <span className="text-sm text-gray-700">{service}</span>
//                     </label>
//                   ))}
//                 </div>
//               </div>

//               {/* Message */}
//               <div>
//                 <label className="block text-sm font-semibold text-gray-700 mb-2">
//                   Message
//                 </label>
//                 <textarea
//                   rows={4}
//                   placeholder="Enter your message here"
//                   className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 transition-colors resize-none"
//                 ></textarea>
//               </div>

//               {/* Submit Button */}
//               <button
//                 type="submit"
//                 className="w-full bg-gradient-to-r from-emerald-500 to-green-600 text-white py-4 px-8 rounded-xl font-semibold text-lg hover:from-emerald-600 hover:to-green-700 transition-all duration-300 shadow-lg hover:shadow-xl"
//               >
//                 Please Send Message
//               </button>
//             </form>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default GetQuoteSection;

/*
import { Shield, Settings, Monitor, Cloud, Cpu } from "lucide-react";

const GetQuoteSection = () => {
  return (
    <section className="py-16 md:py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start">
      
          <div>
            <p className="text-emerald-500 font-semibold mb-3 md:mb-4 tracking-wider uppercase text-sm">
              GET A QUOTE
            </p>
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900 mb-4 md:mb-6">
              Want To Protect Your Organization from Emerging Cyber Threats?
            </h2>
            <p className="text-base md:text-lg text-gray-600 mb-8 md:mb-12 leading-relaxed">
              Now is the perfect time to stay one step ahead of evolving cyber
              threats by taking proactive security measures. Fill out the form,
              and our expert pentesters will help you identify and address
              vulnerabilities before they escalate.
            </p>

         
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 md:gap-8">
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-emerald-100 rounded-xl flex items-center justify-center flex-shrink-0">
                  <Shield className="w-6 h-6 text-emerald-600" />
                </div>
                <div>
                  <div className="text-2xl md:text-3xl font-bold text-emerald-600 mb-1">
                    1000+
                  </div>
                  <div className="text-gray-500 text-sm md:text-base">
                    Total No. Vulnerabilities
                  </div>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-emerald-100 rounded-xl flex items-center justify-center flex-shrink-0">
                  <Settings className="w-6 h-6 text-emerald-600" />
                </div>
                <div>
                  <div className="text-2xl md:text-3xl font-bold text-emerald-600 mb-1">
                    60+
                  </div>
                  <div className="text-gray-500 text-sm md:text-base">
                    Assessment Completed
                  </div>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-emerald-100 rounded-xl flex items-center justify-center flex-shrink-0">
                  <Monitor className="w-6 h-6 text-emerald-600" />
                </div>
                <div>
                  <div className="text-2xl md:text-3xl font-bold text-emerald-600 mb-1">
                    4+
                  </div>
                  <div className="text-gray-500 text-sm md:text-base">
                    Years in Business
                  </div>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-emerald-100 rounded-xl flex items-center justify-center flex-shrink-0">
                  <Cloud className="w-6 h-6 text-emerald-600" />
                </div>
                <div>
                  <div className="text-2xl md:text-3xl font-bold text-emerald-600 mb-1">
                    5+
                  </div>
                  <div className="text-gray-500 text-sm md:text-base">
                    Countries Served
                  </div>
                </div>
              </div>

              <div className="flex items-start space-x-4 sm:col-span-2">
                <div className="w-12 h-12 bg-emerald-100 rounded-xl flex items-center justify-center flex-shrink-0">
                  <Cpu className="w-6 h-6 text-emerald-600" />
                </div>
                <div>
                  <div className="text-2xl md:text-3xl font-bold text-emerald-600 mb-1">
                    10+
                  </div>
                  <div className="text-gray-500 text-sm md:text-base">
                    Trusted Clients
                  </div>
                </div>
              </div>
            </div>
          </div>


          <div className="bg-white rounded-2xl md:rounded-3xl p-6 md:p-8 shadow-xl">
            <form className="space-y-6">
           
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Full Name*
                  </label>
                  <input
                    type="text"
                    placeholder="Enter your full name"
                    className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 transition-colors text-sm md:text-base"
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Work Email*
                  </label>
                  <input
                    type="email"
                    placeholder="Enter your work email"
                    className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 transition-colors text-sm md:text-base"
                  />
                </div>
              </div>

           
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Phone Number*
                </label>
                <div className="flex">
                  <select className="px-3 py-3 border border-gray-300 rounded-l-xl bg-gray-50 text-gray-700 focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 text-sm md:text-base">
                   <option value="+1">+1</option><option value="+44">+44</option><option value="+61">+61</option><option value="+91">+91</option><option value="+92">+92</option><option value="+93">+93</option><option value="+94">+94</option><option value="+95">+95</option><option value="+20">+20</option><option value="+33">+33</option><option value="+49">+49</option><option value="+81">+81</option><option value="+86">+86</option><option value="+7">+7</option><option value="+32">+32</option><option value="+34">+34</option><option value="+39">+39</option><option value="+55">+55</option><option value="+213">+213</option><option value="+351">+351</option><option value="+27">+27</option><option value="+64">+64</option><option value="+82">+82</option><option value="+46">+46</option><option value="+358">+358</option><option value="+31">+31</option><option value="+972">+972</option><option value="+62">+62</option><option value="+63">+63</option><option value="+65">+65</option><option value="+66">+66</option><option value="+234">+234</option><option value="+255">+255</option><option value="+212">+212</option><option value="+961">+961</option><option value="+977">+977</option><option value="+880">+880</option>
                  </select>
                  <input
                    type="tel"
                    placeholder="Enter your phone number"
                    className="flex-1 px-4 py-3 border border-l-0 border-gray-300 rounded-r-xl focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 transition-colors text-sm md:text-base"
                  />
                </div>
              </div>

            
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-4">
                  Types of services you need*
                </label>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {[
                    "Web app pentesting",
                    "API pentesting",
                    "External Network Pentesting",
                    "Cloud security assessment",
                    "Mobile app pentesting",
                    "I want to partner with VAPTlabs",
                    "IoT Pentesting",
                    "Others",
                  ].map((service, i) => (
                    <label
                      key={i}
                      className="flex items-center space-x-3 cursor-pointer"
                    >
                      <input
                        type="checkbox"
                        className="w-4 h-4 text-emerald-600 border-gray-300 rounded focus:ring-emerald-500"
                      />
                      <span className="text-sm md:text-base text-gray-700">
                        {service}
                      </span>
                    </label>
                  ))}
                </div>
              </div>

            
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Message
                </label>
                <textarea
                  rows={4}
                  placeholder="Enter your message here"
                  className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 transition-colors resize-none text-sm md:text-base"
                ></textarea>
              </div>

              
              <button
                type="submit"
                className="w-full bg-gradient-to-r from-emerald-500 to-green-600 text-white py-3 md:py-4 px-6 md:px-8 rounded-xl font-semibold text-base md:text-lg hover:from-emerald-600 hover:to-green-700 transition-all duration-300 shadow-lg hover:shadow-xl"
              >
                Please Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GetQuoteSection;


*/



// import { Shield, Settings, Monitor, Cloud, Cpu } from "lucide-react";
// import React, { useState } from "react";
// import Loader from "./Loader";

// const GetQuoteSection = () => {
//   const [form, setForm] = useState({
//     name: "",
//     emailId: "",
//     phone: "",
//     company: "",
//     message: "",
//   });

//   const [services, setServices] = useState<string[]>([]);
//   const [loading, setLoading] = useState(false);
//   const [status, setStatus] = useState<{ type: "success" | "error"; text: string } | null>(null);

//   const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
//     const { name, value } = e.target;
//     setForm((prev) => ({ ...prev, [name]: value }));
//   };

//   const handleServiceToggle = (service: string) => {
//     setServices((prev) =>
//       prev.includes(service) ? prev.filter((s) => s !== service) : [...prev, service]
//     );
//   };

//   const handleSubmit = async (e: React.FormEvent) => {
//     e.preventDefault();

//     if (!form.name || !form.emailId || !form.phone) {
//       setStatus({ type: "error", text: "Please fill all required fields." });
//       return;
//     }

//     setLoading(true);
//     setStatus(null);

//     try {
//       const response = await fetch("https://vaptlabreport.com/shieldapi/mail.php", {
//         method: "POST",
//         headers: { "Content-Type": "application/json" },
//         body: JSON.stringify({
//           ...form,
//           services: services.join(", "),
//         }),
//       });

//       if (response.ok) {
//         setStatus({ type: "success", text: "Message sent successfully!" });
//         setForm({ name: "", emailId: "", phone: "", company: "", message: "" });
//         setServices([]);
//       } else {
//         setStatus({ type: "error", text: "Failed to send message. Try again later." });
//       }
//     } catch (err) {
//       console.error("Error:", err);
//       setStatus({ type: "error", text: "Network error. Please try again." });
//     } finally {
//       setLoading(false);
//     }
//   };

//   return (
//     <section className="py-16 md:py-20 bg-gray-50 relative">
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//         <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start">
//           {/* Left side (unchanged) */}
//           <div>
//             <p className="text-emerald-500 font-semibold mb-3 tracking-wider uppercase text-sm">
//               GET A QUOTE
//             </p>
//             <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
//               Want To Protect Your Organization from Emerging Cyber Threats?
//             </h2>
//             <p className="text-base md:text-lg text-gray-600 mb-8 leading-relaxed">
//               Stay one step ahead of evolving cyber threats. Fill out the form,
//               and our expert pentesters will help you identify and address
//               vulnerabilities before they escalate.
//             </p>

//             <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 md:gap-8">
//               <div className="flex items-start space-x-4">
//                 <div className="w-12 h-12 bg-emerald-100 rounded-xl flex items-center justify-center flex-shrink-0">
//                   <Shield className="w-6 h-6 text-emerald-600" />
//                 </div>
//                 <div>
//                   <div className="text-2xl md:text-3xl font-bold text-emerald-600 mb-1">
//                     1000+
//                   </div>
//                   <div className="text-gray-500 text-sm md:text-base">
//                     Total No. Vulnerabilities
//                   </div>
//                 </div>
//               </div>

//               <div className="flex items-start space-x-4">
//                 <div className="w-12 h-12 bg-emerald-100 rounded-xl flex items-center justify-center flex-shrink-0">
//                   <Settings className="w-6 h-6 text-emerald-600" />
//                 </div>
//                 <div>
//                   <div className="text-2xl md:text-3xl font-bold text-emerald-600 mb-1">
//                     60+
//                   </div>
//                   <div className="text-gray-500 text-sm md:text-base">
//                     Assessment Completed
//                   </div>
//                 </div>
//               </div>

//               <div className="flex items-start space-x-4">
//                 <div className="w-12 h-12 bg-emerald-100 rounded-xl flex items-center justify-center flex-shrink-0">
//                   <Monitor className="w-6 h-6 text-emerald-600" />
//                 </div>
//                 <div>
//                   <div className="text-2xl md:text-3xl font-bold text-emerald-600 mb-1">
//                     4+
//                   </div>
//                   <div className="text-gray-500 text-sm md:text-base">
//                     Years in Business
//                   </div>
//                 </div>
//               </div>

//               <div className="flex items-start space-x-4">
//                 <div className="w-12 h-12 bg-emerald-100 rounded-xl flex items-center justify-center flex-shrink-0">
//                   <Cloud className="w-6 h-6 text-emerald-600" />
//                 </div>
//                 <div>
//                   <div className="text-2xl md:text-3xl font-bold text-emerald-600 mb-1">
//                     5+
//                   </div>
//                   <div className="text-gray-500 text-sm md:text-base">
//                     Countries Served
//                   </div>
//                 </div>
//               </div>

//               <div className="flex items-start space-x-4 sm:col-span-2">
//                 <div className="w-12 h-12 bg-emerald-100 rounded-xl flex items-center justify-center flex-shrink-0">
//                   <Cpu className="w-6 h-6 text-emerald-600" />
//                 </div>
//                 <div>
//                   <div className="text-2xl md:text-3xl font-bold text-emerald-600 mb-1">
//                     10+
//                   </div>
//                   <div className="text-gray-500 text-sm md:text-base">
//                     Trusted Clients
//                   </div>
//                 </div>
//               </div>
//             </div>
       

            
//           </div>

//           {/* Right side - Contact Form */}
//           <div className="bg-white rounded-2xl md:rounded-3xl p-6 md:p-8 shadow-xl relative">
//             {/* Loader only inside the form box */}
//             {loading && (
//               <div className="absolute inset-0 bg-white/70 backdrop-blur-sm flex items-center justify-center rounded-2xl z-10">
//                 <Loader size="medium" text="Sending..." />
//               </div>
//             )}

//             <form className="space-y-6" onSubmit={handleSubmit}>
//               {/* Name & Email */}
//               <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
//                 <div>
//                   <label className="block text-sm font-semibold text-gray-700 mb-2">
//                     Full Name*
//                   </label>
//                   <input
//                     type="text"
//                     name="name"
//                     value={form.name}
//                     onChange={handleChange}
//                     className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-emerald-500"
//                   />
//                 </div>
//                 <div>
//                   <label className="block text-sm font-semibold text-gray-700 mb-2">
//                     Work Email*
//                   </label>
//                   <input
//                     type="email"
//                     name="emailId"
//                     value={form.emailId}
//                     onChange={handleChange}
//                     className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-emerald-500"
//                   />
//                 </div>
//               </div>

//               {/* Phone */}
//               <div>
//                 <label className="block text-sm font-semibold text-gray-700 mb-2">
//                   Phone Number*
//                 </label>
//                 <input
//                   type="tel"
//                   name="phone"
//                   value={form.phone}
//                   onChange={handleChange}
//                   className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-emerald-500"
//                 />
//               </div>

//               {/* Company */}
//               <div>
//                 <label className="block text-sm font-semibold text-gray-700 mb-2">
//                   Company
//                 </label>
//                 <input
//                   type="text"
//                   name="company"
//                   value={form.company}
//                   onChange={handleChange}
//                   className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-emerald-500"
//                 />
//               </div>

//               {/* Services */}
//               <div>
//                 <label className="block text-sm font-semibold text-gray-700 mb-4">
//                   Services you need*
//                 </label>
//                 <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
//                   {[
//                     "Web app pentesting",
//                     "API pentesting",
//                     "External Network Pentesting",
//                     "Cloud security assessment",
//                     "Mobile app pentesting",
//                     "IoT Pentesting",
//                     "Partner with VAPTlabs",
//                     "Others",
//                   ].map((service) => (
//                     <label key={service} className="flex items-center space-x-3 cursor-pointer">
//                       <input
//                         type="checkbox"
//                         checked={services.includes(service)}
//                         onChange={() => handleServiceToggle(service)}
//                         className="w-4 h-4 text-emerald-600 border-gray-300 rounded focus:ring-emerald-500"
//                       />
//                       <span className="text-sm text-gray-700">{service}</span>
//                     </label>
//                   ))}
//                 </div>
//               </div>

//               {/* Message */}
//               <div>
//                 <label className="block text-sm font-semibold text-gray-700 mb-2">
//                   Message
//                 </label>
//                 <textarea
//                   name="message"
//                   value={form.message}
//                   onChange={handleChange}
//                   rows={4}
//                   className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-emerald-500 resize-none"
//                 />
//               </div>

//               {/* Submit */}
//               <button
//                 type="submit"
//                 disabled={loading}
//                 className="w-full bg-gradient-to-r from-emerald-500 to-green-600 text-white py-3 px-6 rounded-xl font-semibold text-lg hover:from-emerald-600 hover:to-green-700 shadow-lg"
//               >
//                 Send Message
//               </button>

//               {/* Status */}
//               {status && (
//                 <p
//                   className={`mt-4 text-center font-medium ${
//                     status.type === "success" ? "text-emerald-600" : "text-red-500"
//                   }`}
//                 >
//                   {status.text}
//                 </p>
//               )}
//             </form>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default GetQuoteSection;



import { Shield, Settings, Monitor, Cloud, Cpu } from "lucide-react";
import React, { useState } from "react";
import Loader from "./Loader";

const GetQuoteSection = () => {
  const [form, setForm] = useState({
    name: "",
    emailId: "",
    phone: "",
    company: "",
    message: "",
  });

  const [services, setServices] = useState<string[]>([]);
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState<{ type: "success" | "error"; text: string } | null>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleServiceToggle = (service: string) => {
    setServices((prev) =>
      prev.includes(service) ? prev.filter((s) => s !== service) : [...prev, service]
    );
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!form.name || !form.emailId || !form.phone) {
      setStatus({ type: "error", text: "Please fill all required fields." });
      return;
    }

    setLoading(true);
    setStatus(null);

    try {
      const response = await fetch("https://vaptlabreport.com/shieldapi/mail.php", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          ...form,
          services: services.join(", "),
        }),
      });

      if (response.ok) {
        setStatus({ type: "success", text: "Message sent successfully!" });
        setForm({ name: "", emailId: "", phone: "", company: "", message: "" });
        setServices([]);
      } else {
        setStatus({ type: "error", text: "Failed to send message. Try again later." });
      }
    } catch (err) {
      console.error("Error:", err);
      setStatus({ type: "error", text: "Network error. Please try again." });
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="py-16 md:py-20 bg-gray-50 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start">
          {/* Left side */}
          <div>
            <p
              className="font-semibold mb-3 tracking-wider uppercase text-sm"
              style={{
                background: "linear-gradient(to right, rgb(217, 47, 97), rgb(143, 15, 56))",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            >
              GET A QUOTE
            </p>
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
              Want To Protect Your Organization from Emerging Cyber Threats?
            </h2>
            <p className="text-base md:text-lg text-gray-600 mb-8 leading-relaxed">
              Stay one step ahead of evolving cyber threats. Fill out the form,
              and our expert pentesters will help you identify and address
              vulnerabilities before they escalate.
            </p>

            {/* Stats */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 md:gap-8">
              {[
                { icon: Shield, value: "1000+", label: "Total No. Vulnerabilities" },
                { icon: Settings, value: "60+", label: "Assessment Completed" },
                { icon: Monitor, value: "4+", label: "Years in Business" },
                { icon: Cloud, value: "5+", label: "Countries Served" },
                { icon: Cpu, value: "10+", label: "Trusted Clients", span: true },
              ].map(({ icon: Icon, value, label, span }, idx) => (
                <div
                  key={idx}
                  className={`flex items-start space-x-4 ${span ? "sm:col-span-2" : ""}`}
                >
                  <div
                    className="w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0"
                    style={{
                      background: "linear-gradient(to right, rgba(217,47,97,0.1), rgba(143,15,56,0.1))",
                    }}
                  >
                    <Icon
                      className="w-6 h-6"
                      style={{
                        color: "rgb(217, 47, 97)",
                      }}
                    />
                  </div>
                  <div>
                    <div
                      className="text-2xl md:text-3xl font-bold mb-1"
                      style={{
                        background: "linear-gradient(to right, rgb(217, 47, 97), rgb(143, 15, 56))",
                        WebkitBackgroundClip: "text",
                        WebkitTextFillColor: "transparent",
                      }}
                    >
                      {value}
                    </div>
                    <div className="text-gray-500 text-sm md:text-base">{label}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right side - Contact Form */}
          <div className="bg-white rounded-2xl md:rounded-3xl p-6 md:p-8 shadow-xl relative">
            {loading && (
              <div className="absolute inset-0 bg-white/70 backdrop-blur-sm flex items-center justify-center rounded-2xl z-10">
                <Loader size="medium" text="Sending..." />
              </div>
            )}

            <form className="space-y-6" onSubmit={handleSubmit}>
              {/* Name & Email */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Full Name*
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={form.name}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-pink-600"
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Work Email*
                  </label>
                  <input
                    type="email"
                    name="emailId"
                    value={form.emailId}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-pink-600"
                  />
                </div>
              </div>

              {/* Phone */}
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Phone Number*
                </label>
                <input
                  type="tel"
                  name="phone"
                  value={form.phone}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-pink-600"
                />
              </div>

              {/* Company */}
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Company
                </label>
                <input
                  type="text"
                  name="company"
                  value={form.company}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-pink-600"
                />
              </div>

              {/* Services */}
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-4">
                  Services you need*
                </label>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {[
                    "Web app pentesting",
                    "API pentesting",
                    "External Network Pentesting",
                    "Cloud security assessment",
                    "Mobile app pentesting",
                    "IoT Pentesting",
                    "Partner with VAPTlabs",
                    "Others",
                  ].map((service) => (
                    <label key={service} className="flex items-center space-x-3 cursor-pointer">
                      <input
                        type="checkbox"
                        checked={services.includes(service)}
                        onChange={() => handleServiceToggle(service)}
                        className="w-4 h-4 border-gray-300 rounded focus:ring-pink-600 text-pink-600"
                      />
                      <span className="text-sm text-gray-700">{service}</span>
                    </label>
                  ))}
                </div>
              </div>

              {/* Message */}
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Message
                </label>
                <textarea
                  name="message"
                  value={form.message}
                  onChange={handleChange}
                  rows={4}
                  className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-pink-600 resize-none"
                />
              </div>

              {/* Submit */}
              <button
                type="submit"
                disabled={loading}
                className="w-full py-3 px-6 rounded-xl font-semibold text-lg shadow-lg text-white bg-gradient-to-r from-pink-600 to-red-700 hover:from-pink-700 hover:to-red-800"
              >
                Send Message
              </button>

              {/* Status */}
              {status && (
                <p
                  className={`mt-4 text-center font-medium ${
                    status.type === "success"
                      ? "text-pink-600"
                      : "text-red-600"
                  }`}
                >
                  {status.text}
                </p>
              )}
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GetQuoteSection;
