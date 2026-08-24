import React, { useEffect, useState, useRef } from 'react';
import { Link } from 'react-router-dom';
import { X, Shield, ArrowRight } from 'lucide-react';

const RED_GRAD = "linear-gradient(135deg, rgb(217, 47, 97), rgb(143, 15, 56))";
const SESSION_KEY = 'vaptlabs_exit_popup_shown';

// Exit-intent lead capture for blog readers: fires once per session, either
// when the cursor leaves toward the browser chrome (desktop) or past a
// scroll-depth threshold (mobile/touch, where mouseleave never fires) - and
// never before a minimum dwell time, so it doesn't fire on someone who just
// glances at the page and immediately moves their mouse.
const ExitIntentPopup: React.FC = () => {
  const [visible, setVisible] = useState(false);
  const shownRef = useRef(false);
  const readyRef = useRef(false);

  useEffect(() => {
    if (sessionStorage.getItem(SESSION_KEY)) return;

    const readyTimer = setTimeout(() => {
      readyRef.current = true;
    }, 8000);

    const trigger = () => {
      if (shownRef.current || !readyRef.current) return;
      shownRef.current = true;
      setVisible(true);
      sessionStorage.setItem(SESSION_KEY, '1');
    };

    const handleMouseLeave = (e: MouseEvent) => {
      if (e.clientY <= 0) trigger();
    };

    const handleScroll = () => {
      const scrolled = window.scrollY;
      const max = document.documentElement.scrollHeight - window.innerHeight;
      if (max > 0 && scrolled / max > 0.6) trigger();
    };

    document.addEventListener('mouseleave', handleMouseLeave);
    window.addEventListener('scroll', handleScroll, { passive: true });

    return () => {
      clearTimeout(readyTimer);
      document.removeEventListener('mouseleave', handleMouseLeave);
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  if (!visible) return null;

  const close = () => setVisible(false);

  return (
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center p-4"
      style={{ background: 'rgba(10,15,31,0.7)' }}
      onClick={close}
      role="dialog"
      aria-modal="true"
      aria-label="Book a VAPT consultation"
    >
      <div
        className="relative bg-white rounded-3xl shadow-2xl max-w-md w-full p-8 sm:p-10 text-center"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={close}
          aria-label="Close"
          className="absolute top-4 right-4 text-gray-400 hover:text-gray-700 transition-colors"
        >
          <X className="w-6 h-6" />
        </button>

        <div className="flex justify-center mb-6">
          <div
            className="w-20 h-20 rounded-2xl flex items-center justify-center shadow-lg"
            style={{ background: RED_GRAD }}
          >
            <Shield className="w-10 h-10 text-white" />
          </div>
        </div>

        <h2 className="text-2xl font-bold text-gray-900 mb-3">Before You Go — Want a Free VAPT Consultation?</h2>
        <p className="text-gray-600 mb-8">
          Talk to VAPTlabs about AI-powered penetration testing for your app, API or infrastructure — get a scoped quote and timeline in hours.
        </p>

        <Link
          to="/contact"
          onClick={close}
          className="w-full inline-flex items-center justify-center gap-2 text-white px-6 py-3.5 rounded-xl font-semibold transition-transform hover:scale-105 mb-3"
          style={{ background: RED_GRAD }}
        >
          Schedule a Call Now
          <ArrowRight className="w-4 h-4" />
        </Link>
        <button
          onClick={close}
          className="w-full text-gray-500 hover:text-gray-700 font-medium py-2 transition-colors"
        >
          I'll Still Look Around
        </button>
      </div>
    </div>
  );
};

export default ExitIntentPopup;
