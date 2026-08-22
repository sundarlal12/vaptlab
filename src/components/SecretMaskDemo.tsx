import React, { useEffect, useState } from 'react';
import { ShieldCheck } from 'lucide-react';

const RAW_KEY = 'sk_demo_EXAMPLE_NOT_A_REAL_KEY_1234';
const VISIBLE_PREFIX = 8;

// Small illustrative demo of SecureLint's core feature: it types out a fake
// API key as if a developer were pasting it, then masks everything past the
// prefix in place - matching the product's real "context-aware masking"
// behavior described on securelint.in, not a literal capture of their UI.
const SecretMaskDemo: React.FC = () => {
  const [text, setText] = useState('');
  const [masked, setMasked] = useState(false);
  const [showBadge, setShowBadge] = useState(false);

  useEffect(() => {
    let cancelled = false;
    let timers: ReturnType<typeof setTimeout>[] = [];
    const T = (fn: () => void, ms: number) => {
      timers.push(setTimeout(fn, ms));
    };

    const cycle = () => {
      if (cancelled) return;
      setMasked(false);
      setShowBadge(false);
      setText('');
      let i = 0;
      const typeStep = () => {
        if (cancelled) return;
        i += 1;
        setText(RAW_KEY.slice(0, i));
        if (i < RAW_KEY.length) {
          T(typeStep, 45);
        } else {
          T(() => setMasked(true), 500);
          T(() => setShowBadge(true), 650);
          T(cycle, 3400);
        }
      };
      T(typeStep, 400);
    };

    cycle();
    return () => {
      cancelled = true;
      timers.forEach(clearTimeout);
      timers = [];
    };
  }, []);

  const displayed = masked ? RAW_KEY.slice(0, VISIBLE_PREFIX) + '•'.repeat(Math.max(0, text.length - VISIBLE_PREFIX)) : text;

  return (
    <div className="w-full max-w-md rounded-2xl p-6 shadow-xl" style={{ background: '#0f1420' }}>
      <div className="flex items-center gap-2 mb-5">
        <span className="w-3 h-3 rounded-full" style={{ background: '#ef4444' }} />
        <span className="w-3 h-3 rounded-full" style={{ background: '#eab308' }} />
        <span className="w-3 h-3 rounded-full" style={{ background: '#22c55e' }} />
        <span className="ml-3 text-xs" style={{ color: '#8a95ad' }}>config.js</span>
      </div>
      <div className="font-mono text-sm" style={{ color: '#e2e8f0', minHeight: '1.5rem' }}>
        <span style={{ color: '#c084fc' }}>const</span> <span style={{ color: '#93c5fd' }}>stripeKey</span> ={' '}
        <span style={{ color: '#34d399' }}>
          &quot;{displayed}
          <span
            className="inline-block align-middle ml-0.5"
            style={{ width: 2, height: 14, background: '#34d399', opacity: text.length < RAW_KEY.length ? 1 : 0 }}
          />
          &quot;
        </span>
      </div>
      <div
        className="mt-5 inline-flex items-center gap-2 rounded-full px-3 py-1.5 text-xs font-medium transition-opacity duration-300"
        style={{
          background: 'rgba(52,211,153,0.1)',
          border: '1px solid rgba(52,211,153,0.3)',
          color: '#34d399',
          opacity: showBadge ? 1 : 0,
        }}
      >
        <ShieldCheck className="w-3.5 h-3.5" />
        SecureLint masked this secret automatically
      </div>
    </div>
  );
};

export default SecretMaskDemo;
