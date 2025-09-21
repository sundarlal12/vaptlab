// src/components/ContactPopup.tsx
// src/components/ContactPopup.tsx
// src/components/ContactPopup.tsx
/*
import React, { useEffect, useRef, useState } from "react";

interface ContactPopupProps {
  isOpen: boolean;
  onClose: () => void;
}

const ContactPopup: React.FC<ContactPopupProps> = ({ isOpen, onClose }) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [company, setCompany] = useState("");
  const [subscribe, setSubscribe] = useState(true);
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const dialogRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    if (isOpen) window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [isOpen, onClose]);

  useEffect(() => {
    if (isOpen) {
      // focus panel for accessibility
      setTimeout(() => dialogRef.current?.focus(), 50);
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  if (!isOpen) return null;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);

    if (!name.trim() || !email.trim() || !phone.trim()) {
      setError("Please fill name, email and phone.");
      return;
    }

    setSubmitting(true);

    try {
      // Simulate API call / replace with actual call implementation if needed
      await new Promise((r) => setTimeout(r, 900));

      // reset & close
      setSubmitting(false);
      setName("");
      setEmail("");
      setPhone("");
      setCompany("");
      setSubscribe(true);
      onClose();
    } catch (err: any) {
      console.error(err);
      setError("Failed to submit. Please try again later.");
      setSubmitting(false);
    }
  };

  const heroImage =
    "https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&w=1200&q=80";

  return (
    <div
      aria-modal="true"
      role="dialog"
      aria-label="Book a free cybersecurity consultation"
      className="fixed inset-0 z-50 flex items-center justify-center px-4"
    >
    
      <div
        className="fixed inset-0 bg-black/50 backdrop-blur-sm"
        onClick={onClose}
        aria-hidden
      />


      <div
        ref={dialogRef}
        tabIndex={-1}
        className="relative w-full max-w-4xl bg-white rounded-lg shadow-2xl overflow-hidden z-50
                   grid grid-cols-1 md:grid-cols-2 gap-0"
      >
     
        <button
          onClick={onClose}
          aria-label="Close dialog"
          className="absolute top-3 right-3 z-50 rounded-md p-2 text-gray-600 hover:text-gray-900 hover:bg-gray-100 transition"
        >
       
          <span className="text-lg font-medium">✕</span>
        </button>

     
        <div className="p-6 md:p-8">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900">
            Book a Free Consultation
          </h2>
          <p className="text-sm text-gray-500 mt-1">
            Speak with a cybersecurity specialist to assess your risk and next steps.
          </p>

          <form onSubmit={handleSubmit} className="mt-6 space-y-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <label className="block">
                <span className="text-sm font-medium text-gray-700">Full name *</span>
                <input
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="mt-1 block w-full rounded-lg border border-gray-200 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500"
                  placeholder="Sundar"
                  required
                />
              </label>

              <label className="block">
                <span className="text-sm font-medium text-gray-700">Work email *</span>
                <input
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  type="email"
                  className="mt-1 block w-full rounded-lg border border-gray-200 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500"
                  placeholder="you@company.com"
                  required
                />
              </label>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <label className="block">
                <span className="text-sm font-medium text-gray-700">Phone *</span>
                <input
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  type="tel"
                  className="mt-1 block w-full rounded-lg border border-gray-200 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500"
                  placeholder="+91 98xxxxxx"
                  required
                />
              </label>

              <label className="block">
                <span className="text-sm font-medium text-gray-700">Company</span>
                <input
                  value={company}
                  onChange={(e) => setCompany(e.target.value)}
                  className="mt-1 block w-full rounded-lg border border-gray-200 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500"
                  placeholder="Your company"
                />
              </label>
            </div>

            <div className="flex items-start space-x-3">
              <input
                id="subscribe"
                type="checkbox"
                checked={subscribe}
                onChange={() => setSubscribe((s) => !s)}
                className="mt-1 h-4 w-4 rounded border-gray-300 text-emerald-600 focus:ring-emerald-500"
              />
              <label htmlFor="subscribe" className="text-sm text-gray-600">
                Subscribe to our weekly newsletter
              </label>
            </div>

            {error && <div className="text-sm text-red-600">{error}</div>}

            <div className="pt-2">
              <button
                type="submit"
                disabled={submitting}
                className={`w-full inline-flex items-center justify-center gap-2 rounded-lg px-4 py-3 text-sm font-semibold text-white transition
                   ${submitting ? "bg-emerald-400 cursor-wait" : "bg-emerald-600 hover:bg-emerald-700"}`}
              >
                {submitting ? "Sending..." : "Book Consultation"}
              </button>
            </div>

            <p className="text-xs text-gray-400 mt-2">
              By submitting you agree to our{" "}
              <a href="/privacy-policy" className="underline text-emerald-600">
                privacy policy
              </a>
              .
            </p>

   
            <div className="mt-4 md:hidden text-sm text-gray-600">
              <div>
                Need immediate help? Email:{" "}
                <a className="text-emerald-600" href="mailto:contact@vaptlabs.com">
                  contact@vaptlabs.com
                </a>
              </div>
             
            </div>
          </form>
        </div>

      
        <div className="hidden md:block relative min-h-[320px]">
          <img
            src={heroImage}
            alt="Cybersecurity consultation"
            className="w-full h-full object-cover"
          />
          <div className="absolute bottom-6 left-6 bg-black/50 text-white rounded-lg px-4 py-3 backdrop-blur-sm max-w-[85%]">
            <div className="font-semibold">Contact Us</div>
            <div className="text-sm">
              📧{" "}
              <a className="underline" href="mailto:contact@vaptlabs.com">
                contact@vaptlabs.com
              </a>
            </div>
           
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactPopup;

*/

// // src/components/ContactPopup.tsx
// import React, { useEffect, useRef, useState } from "react";
// import Loader from "./Loader"; // assumes your Loader supports size & fullscreen props

// interface ContactPopupProps {
//   isOpen: boolean;
//   onClose: () => void;
// }

// const ContactPopup: React.FC<ContactPopupProps> = ({ isOpen, onClose }) => {
//   const [name, setName] = useState("");
//   const [email, setEmail] = useState("");
//   const [phone, setPhone] = useState("");
//   const [company, setCompany] = useState("");
//   const [message, setMessage] = useState(""); // added message field
//   const [subscribe, setSubscribe] = useState(true);

//   const [submitting, setSubmitting] = useState(false);
//   const [error, setError] = useState<string | null>(null);
//   const [successMsg, setSuccessMsg] = useState<string | null>(null);

//   const dialogRef = useRef<HTMLDivElement | null>(null);
//   const mountedRef = useRef(true);

//   useEffect(() => {
//     mountedRef.current = true;
//     return () => {
//       mountedRef.current = false;
//     };
//   }, []);

//   useEffect(() => {
//     const onKey = (e: KeyboardEvent) => {
//       if (e.key === "Escape") onClose();
//     };
//     if (isOpen) window.addEventListener("keydown", onKey);
//     return () => window.removeEventListener("keydown", onKey);
//   }, [isOpen, onClose]);

//   useEffect(() => {
//     if (isOpen) {
//       // focus panel for accessibility
//       setTimeout(() => dialogRef.current?.focus(), 50);
//       document.body.style.overflow = "hidden";
//     } else {
//       document.body.style.overflow = "";
//     }
//     return () => {
//       document.body.style.overflow = "";
//     };
//   }, [isOpen]);

//   if (!isOpen) return null;

//   const heroImage =
//     "https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&w=1200&q=80";

//   const resetForm = () => {
//     setName("");
//     setEmail("");
//     setPhone("");
//     setCompany("");
//     setMessage("");
//     setSubscribe(true);
//   };

//   const handleSubmit = async (e: React.FormEvent) => {
//     e.preventDefault();
//     setError(null);
//     setSuccessMsg(null);

//     if (!name.trim() || !email.trim() || !phone.trim()) {
//       setError("Please fill name, email and phone.");
//       return;
//     }

//     setSubmitting(true);

//     try {
//       const payload = {
//         name: name.trim(),
//         emailId: email.trim(),
//         company: company.trim() || "business",
//         message: message.trim() || "Book consultation request",
//         reason: "Book Free consultation",
//       };

//       const res = await fetch("https://vaptlabreport.com/shieldapi/mail.php", {
//         method: "POST",
//         headers: {
//           "Content-Type": "application/json",
//         },
//         body: JSON.stringify(payload),
//       });

//       // read response text (API might return JSON or plain text)
//       const text = await res.text();

//       if (!mountedRef.current) return;

//       if (res.ok) {
//         setSuccessMsg("Request sent — we will contact you shortly.");
//         // keep loader briefly to show success then close
//         setSubmitting(false);
//         resetForm();
//         // auto-close after 1.2s
//         setTimeout(() => {
//           setSuccessMsg(null);
//           onClose();
//         }, 1200);
//       } else {
//         // non-2xx
//         setError(
//           `Failed to send (status ${res.status}). ${
//             text ? `Server: ${text}` : ""
//           }`
//         );
//         setSubmitting(false);
//       }
//     } catch (err: any) {
//       console.error("ContactPopup submit error:", err);
//       if (!mountedRef.current) return;
//       setError("Network error — please try again later.");
//       setSubmitting(false);
//     }
//   };

//   return (
//     <div
//       aria-modal="true"
//       role="dialog"
//       aria-label="Book a free cybersecurity consultation"
//       className="fixed inset-0 z-50 flex items-center justify-center px-4"
//     >
//       {/* backdrop */}
//       <div
//         className="fixed inset-0 bg-black/50 backdrop-blur-sm"
//         onClick={onClose}
//         aria-hidden
//       />

//       {/* panel */}
//       <div
//         ref={dialogRef}
//         tabIndex={-1}
//         className="relative w-full max-w-4xl bg-white rounded-lg shadow-2xl overflow-hidden z-50
//                    grid grid-cols-1 md:grid-cols-2 gap-0"
//       >
//         {/* Inline loader overlay inside panel (shows only while submitting) */}
//         {submitting && (
//           <div
//             className="absolute inset-0 z-50 flex items-center justify-center bg-white/75 backdrop-blur-sm"
//             aria-hidden
//           >
//             {/* Loader shown inside popup — not fullscreen */}
//             <Loader size="large" fullscreen={false} text="Sending..." />
//           </div>
//         )}

//         {/* Close Button (top-right) */}
//         <button
//           onClick={onClose}
//           aria-label="Close dialog"
//           className="absolute top-3 right-3 z-50 rounded-md p-2 text-gray-600 hover:text-gray-900 hover:bg-gray-100 transition"
//         >
//           <span className="text-lg font-medium">✕</span>
//         </button>

//         {/* Left: Form */}
//         <div className="p-6 md:p-8">
//           <h2 className="text-2xl md:text-3xl font-bold text-gray-900">
//             Book a Free Consultation
//           </h2>
//           <p className="text-sm text-gray-500 mt-1">
//             Speak with a cybersecurity specialist to assess your risk and next steps.
//           </p>

//           <form onSubmit={handleSubmit} className="mt-6 space-y-4">
//             <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
//               <label className="block">
//                 <span className="text-sm font-medium text-gray-700">Full name *</span>
//                 <input
//                   value={name}
//                   onChange={(e) => setName(e.target.value)}
//                   className="mt-1 block w-full rounded-lg border border-gray-200 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500"
//                   placeholder="Johan"
//                   required
//                 />
//               </label>

//               <label className="block">
//                 <span className="text-sm font-medium text-gray-700">Work email *</span>
//                 <input
//                   value={email}
//                   onChange={(e) => setEmail(e.target.value)}
//                   type="email"
//                   className="mt-1 block w-full rounded-lg border border-gray-200 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500"
//                   placeholder="you@company.com"
//                   required
//                 />
//               </label>
//             </div>

//             <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
//               <label className="block">
//                 <span className="text-sm font-medium text-gray-700">Phone *</span>
//                 <input
//                   value={phone}
//                   onChange={(e) => setPhone(e.target.value)}
//                   type="tel"
//                   className="mt-1 block w-full rounded-lg border border-gray-200 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500"
//                   placeholder="+91 98xxxxxx"
//                   required
//                 />
//               </label>

//               <label className="block">
//                 <span className="text-sm font-medium text-gray-700">Company</span>
//                 <input
//                   value={company}
//                   onChange={(e) => setCompany(e.target.value)}
//                   className="mt-1 block w-full rounded-lg border border-gray-200 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500"
//                   placeholder="Your company"
//                 />
//               </label>
//             </div>

//             {/*    <label className="block">
//               <span className="text-sm font-medium text-gray-700">Message</span>
//               <textarea
//                 value={message}
//                 onChange={(e) => setMessage(e.target.value)}
//                 rows={3}
//                 className="mt-1 block w-full rounded-lg border border-gray-200 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500"
//                 placeholder="Tell us about your needs (optional)"
//               />
//             </label>
// */}
//             <div className="flex items-start space-x-3">
//               <input
//                 id="subscribe"
//                 type="checkbox"
//                 checked={subscribe}
//                 onChange={() => setSubscribe((s) => !s)}
//                 className="mt-1 h-4 w-4 rounded border-gray-300 text-emerald-600 focus:ring-emerald-500"
//               />
//               <label htmlFor="subscribe" className="text-sm text-gray-600">
//                 Subscribe to our weekly newsletter
//               </label>
//             </div>

//             {error && <div className="text-sm text-red-600">{error}</div>}
//             {successMsg && <div className="text-sm text-emerald-600">{successMsg}</div>}

//             <div className="pt-2">
//               <button
//                 type="submit"
//                 disabled={submitting}
//                 className={`w-full inline-flex items-center justify-center gap-2 rounded-lg px-4 py-3 text-sm font-semibold text-white transition
//                    ${submitting ? "bg-emerald-400 cursor-wait" : "bg-emerald-600 hover:bg-emerald-700"}`}
//               >
//                 {submitting ? "Sending..." : "Book Consultation"}
//               </button>
//             </div>

//             <p className="text-xs text-gray-400 mt-2">
//               By submitting you agree to our{" "}
//               <a href="/privacy-policy" className="underline text-emerald-600">
//                 privacy policy
//               </a>
//               .
//             </p>

//             {/* condensed contact for mobile view */}
//             <div className="mt-4 md:hidden text-sm text-gray-600">
//               <div>
//                 Need immediate help? Email:{" "}
//                 <a className="text-emerald-600" href="mailto:contact@vaptlabs.com">
//                   contact@vaptlabs.com
//                 </a>
//               </div>
//             </div>
//           </form>
//         </div>

//         {/* Right: Image (hidden on small screens) */}
//         <div className="hidden md:block relative min-h-[320px]">
//           <img
//             src={heroImage}
//             alt="Cybersecurity consultation"
//             className="w-full h-full object-cover"
//           />
//           <div className="absolute bottom-6 left-6 bg-black/50 text-white rounded-lg px-4 py-3 backdrop-blur-sm max-w-[85%]">
//             <div className="font-semibold">Contact Us</div>
//             <div className="text-sm">
//               📧{" "}
//               <a className="underline" href="mailto:contact@vaptlabs.com">
//                 contact@vaptlabs.com
//               </a>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default ContactPopup;


// src/components/ContactPopup.tsx
import React, { useEffect, useRef, useState } from "react";
import Loader from "./Loader";

interface ContactPopupProps {
  isOpen: boolean;
  onClose: () => void;
}

const ContactPopup: React.FC<ContactPopupProps> = ({ isOpen, onClose }) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [company, setCompany] = useState("");
  const [message, setMessage] = useState("");
  const [subscribe, setSubscribe] = useState(true);

  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [successMsg, setSuccessMsg] = useState<string | null>(null);

  const dialogRef = useRef<HTMLDivElement | null>(null);
  const mountedRef = useRef(true);

  useEffect(() => {
    mountedRef.current = true;
    return () => {
      mountedRef.current = false;
    };
  }, []);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    if (isOpen) window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [isOpen, onClose]);

  useEffect(() => {
    if (isOpen) {
      setTimeout(() => dialogRef.current?.focus(), 50);
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  if (!isOpen) return null;

  const heroImage =
    "https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&w=1200&q=80";

  const resetForm = () => {
    setName("");
    setEmail("");
    setPhone("");
    setCompany("");
    setMessage("");
    setSubscribe(true);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);
    setSuccessMsg(null);

    if (!name.trim() || !email.trim() || !phone.trim()) {
      setError("Please fill name, email and phone.");
      return;
    }

    setSubmitting(true);

    try {
      const payload = {
        name: name.trim(),
        emailId: email.trim(),
        company: company.trim() || "business",
        message: message.trim() || "Book consultation request",
        reason: "Book Free consultation",
      };

      const res = await fetch("https://vaptlabreport.com/shieldapi/mail.php", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      });

      const text = await res.text();

      if (!mountedRef.current) return;

      if (res.ok) {
        setSuccessMsg("Request sent — we will contact you shortly.");
        setSubmitting(false);
        resetForm();
        setTimeout(() => {
          setSuccessMsg(null);
          onClose();
        }, 1200);
      } else {
        setError(
          `Failed to send (status ${res.status}). ${
            text ? `Server: ${text}` : ""
          }`
        );
        setSubmitting(false);
      }
    } catch (err: any) {
      console.error("ContactPopup submit error:", err);
      if (!mountedRef.current) return;
      setError("Network error — please try again later.");
      setSubmitting(false);
    }
  };

  return (
    <div
      aria-modal="true"
      role="dialog"
      aria-label="Book a free cybersecurity consultation"
      className="fixed inset-0 z-50 flex items-center justify-center px-4"
    >
      {/* backdrop */}
      <div
        className="fixed inset-0 bg-black/50 backdrop-blur-sm"
        onClick={onClose}
        aria-hidden
      />

      {/* panel */}
      <div
        ref={dialogRef}
        tabIndex={-1}
        className="relative w-full max-w-4xl bg-white rounded-lg shadow-2xl overflow-hidden z-50
                   grid grid-cols-1 md:grid-cols-2 gap-0"
      >
        {submitting && (
          <div className="absolute inset-0 z-50 flex items-center justify-center bg-white/75 backdrop-blur-sm">
            <Loader size="large" fullscreen={false} text="Sending..." />
          </div>
        )}

        {/* Close Button */}
        <button
          onClick={onClose}
          aria-label="Close dialog"
          className="absolute top-3 right-3 z-50 rounded-md p-2 text-gray-600 hover:text-gray-900 hover:bg-gray-100 transition"
        >
          <span className="text-lg font-medium">✕</span>
        </button>

        {/* Left: Form */}
        <div className="p-6 md:p-8">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900">
            Book a Free Consultation
          </h2>
          <p className="text-sm text-gray-500 mt-1">
            Speak with a cybersecurity specialist to assess your risk and next steps.
          </p>

          <form onSubmit={handleSubmit} className="mt-6 space-y-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <label className="block">
                <span className="text-sm font-medium text-gray-700">Full name *</span>
                <input
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="mt-1 block w-full rounded-lg border border-gray-200 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-pink-600"
                  placeholder="Johan"
                  required
                />
              </label>

              <label className="block">
                <span className="text-sm font-medium text-gray-700">Work email *</span>
                <input
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  type="email"
                  className="mt-1 block w-full rounded-lg border border-gray-200 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-pink-600"
                  placeholder="you@company.com"
                  required
                />
              </label>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <label className="block">
                <span className="text-sm font-medium text-gray-700">Phone *</span>
                <input
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  type="tel"
                  className="mt-1 block w-full rounded-lg border border-gray-200 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-pink-600"
                  placeholder="+91 98xxxxxx"
                  required
                />
              </label>

              <label className="block">
                <span className="text-sm font-medium text-gray-700">Company</span>
                <input
                  value={company}
                  onChange={(e) => setCompany(e.target.value)}
                  className="mt-1 block w-full rounded-lg border border-gray-200 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-pink-600"
                  placeholder="Your company"
                />
              </label>
            </div>

            <div className="flex items-start space-x-3">
              <input
                id="subscribe"
                type="checkbox"
                checked={subscribe}
                onChange={() => setSubscribe((s) => !s)}
                className="mt-1 h-4 w-4 rounded border-gray-300 text-pink-600 focus:ring-pink-600"
              />
              <label htmlFor="subscribe" className="text-sm text-gray-600">
                Subscribe to our weekly newsletter
              </label>
            </div>

            {error && <div className="text-sm text-red-600">{error}</div>}
            {successMsg && (
              <div className="text-sm bg-clip-text text-transparent bg-gradient-to-r from-pink-600 to-red-700 font-semibold">
                {successMsg}
              </div>
            )}

            <div className="pt-2">
              <button
                type="submit"
                disabled={submitting}
                className={`w-full inline-flex items-center justify-center gap-2 rounded-lg px-4 py-3 text-sm font-semibold text-white transition
                  ${
                    submitting
                      ? "bg-gradient-to-r from-pink-400 to-red-400 cursor-wait"
                      : "bg-gradient-to-r from-pink-600 to-red-700 hover:opacity-90"
                  }`}
              >
                {submitting ? "Sending..." : "Book Consultation"}
              </button>
            </div>

            <p className="text-xs text-gray-400 mt-2">
              By submitting you agree to our{" "}
              <a
                href="/privacy-policy"
                className="underline bg-clip-text text-transparent bg-gradient-to-r from-pink-600 to-red-700"
              >
                privacy policy
              </a>
              .
            </p>

            {/* condensed contact for mobile view */}
            <div className="mt-4 md:hidden text-sm text-gray-600">
              <div>
                Need immediate help? Email:{" "}
                <a
                  className="bg-clip-text text-transparent bg-gradient-to-r from-pink-600 to-red-700 underline"
                  href="mailto:contact@vaptlabs.com"
                >
                  contact@vaptlabs.com
                </a>
              </div>
            </div>
          </form>
        </div>

        {/* Right: Image */}
        <div className="hidden md:block relative min-h-[320px]">
          <img
            src={heroImage}
            alt="Cybersecurity consultation"
            className="w-full h-full object-cover"
          />
          <div className="absolute bottom-6 left-6 bg-black/50 text-white rounded-lg px-4 py-3 backdrop-blur-sm max-w-[85%]">
            <div className="font-semibold">Contact Us</div>
            <div className="text-sm">
              📧{" "}
              <a className="underline" href="mailto:contact@vaptlabs.com">
                contact@vaptlabs.com
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactPopup;
