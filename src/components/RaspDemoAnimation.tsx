import React, { useEffect, useLayoutEffect, useRef, useState } from 'react';

// Self-contained RASP demo animation (signup form + live device-threat feed).
// Markup/CSS/behavior is embedded as-is via dangerouslySetInnerHTML + a scoped
// useEffect rather than hand-translated to JSX: it's fully static, trusted,
// author-provided content (not user input), and converting every kebab-case
// SVG attribute to JSX by hand across this much markup is needless risk for a
// decorative widget with no dynamic data binding.

const CSS_CONTENT = `
.rgH{position:relative;overflow:hidden;border-radius:20px;padding:22px;background:linear-gradient(160deg,#f6faff 0%,#e9f2fd 55%,#dfeafb 100%)}
.rgGrid{position:absolute;inset:0;background-image:linear-gradient(rgba(120,165,225,.15) 1px,transparent 1px),linear-gradient(90deg,rgba(120,165,225,.15) 1px,transparent 1px);background-size:78px 78px}
.rgBody{position:relative;z-index:2;display:flex;gap:14px;align-items:flex-end}
.rgLeft{width:284px;position:relative;padding-left:30px;flex:none}
.rgRail{position:absolute;left:10px;top:18px;bottom:6px;width:20px;border-left:1.5px solid #b9d4ee;border-top:1.5px solid #b9d4ee;border-top-left-radius:16px}
.rgX{position:absolute;left:-4px;top:-16px;width:30px;height:30px;border-radius:50%;background:#fff;border:1px solid #e6edf6;display:flex;align-items:center;justify-content:center;color:#e05252;font-size:17px;box-shadow:0 3px 10px rgba(22,55,110,.08)}
.rgDia{position:absolute;left:-5.5px;top:62%;width:9px;height:9px;background:#2f6df6;transform:rotate(45deg);border-radius:1px}
.rgList{position:relative;height:340px;overflow:hidden;-webkit-mask-image:linear-gradient(to bottom,transparent 0,#000 11%,#000 89%,transparent 100%);mask-image:linear-gradient(to bottom,transparent 0,#000 11%,#000 89%,transparent 100%)}
.rgTrack.go{animation:rgScroll 17s linear infinite}
@keyframes rgScroll{from{transform:translateY(0)}to{transform:translateY(-50%)}}
.rgRow{display:flex;align-items:center;justify-content:space-between;gap:8px;background:#fff;border-radius:10px;padding:10px 12px;margin-bottom:8px;box-shadow:0 4px 14px rgba(22,55,110,.07)}
.rgN{margin:0;font-size:12px;font-weight:500;color:#16213d}
.rgSub{margin:2px 0 0;font-size:10px;color:#7b88a3}
.rgSc{margin:0;font-size:12.5px;font-weight:500}
.rgPill{padding:3px 8px;border-radius:6px;font-size:10px;font-weight:500;white-space:nowrap;flex:none}
.ok{background:#e7f6ec;color:#17794a}
.bad{background:#fdeaea;color:#c0392b}
.rgRight{width:330px;flex:none}
.rgTopWrap{display:grid;margin:0 0 14px 26px}
.rgTop{grid-area:1/1;background:#fff;border-radius:12px;padding:12px 14px;box-shadow:0 6px 22px rgba(22,55,110,.09);opacity:0;transform:translateY(8px);transition:opacity .5s ease,transform .5s ease}
.rgTop.on{opacity:1;transform:none}
.rgAv{width:40px;height:40px;border-radius:8px;background:#dbe7fa;color:#16213d;display:flex;align-items:center;justify-content:center;font-size:22px;flex:none;overflow:hidden}
.rgTag{display:inline-block;background:#eff5ff;color:#2f6df6;font-size:9px;font-weight:500;padding:3px 7px;border-radius:5px;margin:0 4px 0 0}
.rgDiv{height:1px;background:#eef2f8;margin:9px 0 8px}
.rgRowc{display:flex;align-items:center;gap:7px;font-size:10.5px;color:#16213d}
.rgAct{display:flex;align-items:center;gap:5px;font-size:11px;font-weight:500;color:#16213d}
.rgPhone{width:244px;margin-left:60px;background:#fff;border:1.5px solid #cbe4f7;border-radius:26px 26px 20px 20px;border-bottom:none;padding:10px 0 0;position:relative;overflow:hidden}
.rgNotch{width:76px;height:14px;border-radius:0 0 9px 9px;background:#e3e7ee;margin:-10px auto 0}
.rgSb{display:flex;align-items:center;justify-content:space-between;padding:4px 15px 0;font-size:11px;font-weight:500;color:#16213d}
.rgHd{display:flex;align-items:center;padding:12px 15px 10px}
.rgHt{flex:1;text-align:center;font-size:13px;font-weight:500;color:#16213d;margin:0 0 0 -17px}
.rgF{padding:0 15px 8px}
.rgFl{font-size:10px;color:#6b7894;margin:0 0 4px}
.rgFi{border:1px solid #e2e8f1;border-radius:8px;padding:8px 10px;font-size:11px;color:#16213d;display:flex;align-items:center;gap:1px;min-height:16px;transition:border-color .25s ease,box-shadow .25s ease}
.rgFi.typing{border-color:#9dc2f7;box-shadow:0 0 0 3px rgba(47,109,246,.10)}
.rgCar{display:inline-block;width:1.5px;height:12px;background:#2f6df6;opacity:0;flex:none}
.rgFi.typing .rgCar{opacity:1;animation:rgBlink 1s step-end infinite}
@keyframes rgBlink{50%{opacity:0}}
.rgTerms{font-size:9.5px;color:#8a95ad;line-height:1.5;padding:2px 15px 8px;margin:0}
.rgBtn{margin:0 15px 16px;background:#111a2e;color:#fff;text-align:center;font-size:12px;font-weight:500;padding:11px;border-radius:9px;transition:transform .16s ease,opacity .16s ease}
.rgBtn.press{transform:scale(.96);opacity:.82}
.rgVerdict{position:absolute;left:0;right:0;bottom:0;background:#fff;border-top:1px solid #f2dede;padding:12px 15px 16px;opacity:0;transform:translateY(100%);transition:opacity .4s ease,transform .45s cubic-bezier(.2,.85,.3,1)}
.rgVerdict.on{opacity:1;transform:none}
.rgVr{display:flex;align-items:center;gap:9px;margin-bottom:9px}
.rgVi{width:26px;height:26px;border-radius:50%;background:#fdeaea;color:#c0392b;display:flex;align-items:center;justify-content:center;font-size:15px;flex:none}
.rgBtnB{background:#fdeaea;color:#c0392b;text-align:center;font-size:12px;font-weight:500;padding:11px;border-radius:9px}
`;

const HTML_CONTENT = `
<h2 style="position:absolute;width:1px;height:1px;overflow:hidden;clip:rect(0 0 0 0)">A signup form being typed on a phone beside a continuously scrolling feed of device threat detections</h2>
<div class="rgH" id="rgHero">
<div class="rgGrid"></div>
<div class="rgBody">

<div class="rgLeft">
<div class="rgRail"><div class="rgX"><i class="ti ti-x" aria-hidden="true"></i></div><div class="rgDia"></div></div>
<div class="rgList"><div class="rgTrack go" id="rgTrack">
<div class="rgRow"><p class="rgN">GPS spoofing detected</p><span class="rgPill ok">Not detected</span></div>
<div class="rgRow"><p class="rgN">App cloning</p><span class="rgPill ok">Not detected</span></div>
<div class="rgRow"><p class="rgN">Proxy</p><span class="rgPill ok">Not detected</span></div>
<div class="rgRow"><p class="rgN">Suspicious factory reset</p><span class="rgPill bad">Detected</span></div>
<div class="rgRow"><p class="rgN">Virtual OS</p><span class="rgPill ok">Not detected</span></div>
<div class="rgRow"><p class="rgN">Hooking</p><span class="rgPill bad">Detected</span></div>
<div class="rgRow"><div><p class="rgSc" style="color:#c0392b">68/100</p><p class="rgSub">Risk identity score</p></div><span class="rgPill bad">High risk</span></div>
<div class="rgRow"><div><p class="rgSc" style="color:#c0392b">75/100</p><p class="rgSub">Affluency score</p></div><span class="rgPill bad">High risk</span></div>
<div class="rgRow"><div><p class="rgSc" style="color:#17794a">12/100</p><p class="rgSub">Name consistency score</p></div><span class="rgPill ok">Safe</span></div>
<div class="rgRow"><div><p class="rgSc" style="color:#17794a">32/100</p><p class="rgSub">Phone disposability score</p></div><span class="rgPill ok">Safe</span></div>
<div class="rgRow"><p class="rgN">Emulator</p><span class="rgPill ok">Not detected</span></div>
<div class="rgRow"><p class="rgN">Virtual private network</p><span class="rgPill bad">Detected</span></div>

<div class="rgRow"><p class="rgN">GPS spoofing detected</p><span class="rgPill ok">Not detected</span></div>
<div class="rgRow"><p class="rgN">App cloning</p><span class="rgPill ok">Not detected</span></div>
<div class="rgRow"><p class="rgN">Proxy</p><span class="rgPill ok">Not detected</span></div>
<div class="rgRow"><p class="rgN">Suspicious factory reset</p><span class="rgPill bad">Detected</span></div>
<div class="rgRow"><p class="rgN">Virtual OS</p><span class="rgPill ok">Not detected</span></div>
<div class="rgRow"><p class="rgN">Hooking</p><span class="rgPill bad">Detected</span></div>
<div class="rgRow"><div><p class="rgSc" style="color:#c0392b">68/100</p><p class="rgSub">Risk identity score</p></div><span class="rgPill bad">High risk</span></div>
<div class="rgRow"><div><p class="rgSc" style="color:#c0392b">75/100</p><p class="rgSub">Affluency score</p></div><span class="rgPill bad">High risk</span></div>
<div class="rgRow"><div><p class="rgSc" style="color:#17794a">12/100</p><p class="rgSub">Name consistency score</p></div><span class="rgPill ok">Safe</span></div>
<div class="rgRow"><div><p class="rgSc" style="color:#17794a">32/100</p><p class="rgSub">Phone disposability score</p></div><span class="rgPill ok">Safe</span></div>
<div class="rgRow"><p class="rgN">Emulator</p><span class="rgPill ok">Not detected</span></div>
<div class="rgRow"><p class="rgN">Virtual private network</p><span class="rgPill bad">Detected</span></div>
</div></div>
</div>

<div class="rgRight">
<div class="rgTopWrap">

<div class="rgTop" id="rgCardA">
<div style="display:flex;align-items:center;gap:11px"><div class="rgAv">
<svg viewBox="0 0 40 40" width="40" height="40" role="img"><title>Illustrated portrait</title><desc>A flat illustrated avatar of a woman.</desc><defs><clipPath id="rgAvc"><rect width="40" height="40" rx="8"></rect></clipPath></defs><g clip-path="url(#rgAvc)"><rect width="40" height="40" fill="#dbe7fa"></rect><path d="M10 17c0-6.5 4.3-11 10-11s10 4.5 10 11v3c0 5.5-4.5 9.5-10 9.5S10 25.5 10 20z" fill="#2b1d16"></path><ellipse cx="20" cy="18" rx="7.2" ry="8.6" fill="#f2c6a5"></ellipse><path d="M12.6 15.5c1-5.2 3.9-8.2 7.4-8.2s6.4 3 7.4 8.2c-2-2.2-4.3-3.2-7.4-3.2s-5.4 1-7.4 3.2z" fill="#2b1d16"></path><path d="M12.4 14.2c.4 0 .7 6.4-.6 11.4-1.6-3.9-1.6-9.9.6-11.4z" fill="#2b1d16"></path><path d="M27.6 14.2c-.4 0 -.7 6.4.6 11.4 1.6-3.9 1.6-9.9-.6-11.4z" fill="#2b1d16"></path><circle cx="17.2" cy="18" r="1" fill="#3a2a20"></circle><circle cx="22.8" cy="18" r="1" fill="#3a2a20"></circle><path d="M20 25.5c7 0 12.5 5 12.5 11.5v3H7.5v-3c0-6.5 5.5-11.5 12.5-11.5z" fill="#2f6df6"></path><path d="M16.4 25.8c1 2.2 6.2 2.2 7.2 0v3.4c-1.4 1.6-5.8 1.6-7.2 0z" fill="#e6f0ff"></path></g></svg>
</div><div><p style="margin:0;font-size:13px;font-weight:500;color:#16213d">Minakshi Boyal</p><p style="margin:2px 0 0;font-size:10.5px;color:#7b88a3">Female, 32 · Karnataka, India</p></div></div>
<div class="rgDiv"></div>
<div><span class="rgTag">White collar</span><span class="rgTag">Employed</span><span class="rgTag">Migrant</span><span class="rgTag">Married</span></div>
</div>

<div class="rgTop" id="rgCardB">
<div style="display:flex;align-items:center;gap:11px"><div class="rgAv" style="background:#f1f3f7"><i class="ti ti-brand-apple" aria-hidden="true"></i></div><div><p style="margin:0;font-size:13px;font-weight:500;color:#16213d">iOS</p><p style="margin:2px 0 0;font-size:10.5px;color:#7b88a3">iPhone 14 Plus</p></div></div>
<div class="rgDiv"></div>
<div class="rgRowc" style="margin-bottom:6px"><i class="ti ti-fingerprint" style="font-size:15px;color:#6b7894" aria-hidden="true"></i>92kjhs4kjj*******67sd658d7s</div>
<div class="rgRowc"><i class="ti ti-world" style="font-size:15px;color:#6b7894" aria-hidden="true"></i>18.169.145.64<span class="rgPill bad" style="margin-left:auto">VPN detected</span></div>
</div>

<div class="rgTop on" id="rgCardC">
<div style="display:flex;align-items:center;gap:11px"><div class="rgAv" style="background:#e6f6ec;color:#17794a"><i class="ti ti-brand-android" aria-hidden="true"></i></div><div><p style="margin:0;font-size:13px;font-weight:500;color:#16213d">Android 14</p><p style="margin:2px 0 0;font-size:10.5px;color:#7b88a3">Pixel 8 · build user-debug</p></div></div>
<div class="rgDiv"></div>
<div class="rgRowc" style="margin-bottom:6px"><i class="ti ti-fingerprint" style="font-size:15px;color:#6b7894" aria-hidden="true"></i>4af71bc2kk*******9de104b2c</div>
<div class="rgRowc"><i class="ti ti-world" style="font-size:15px;color:#6b7894" aria-hidden="true"></i>103.21.244.19<span class="rgPill bad" style="margin-left:auto">Root detected</span></div>
</div>

<div class="rgTop" id="rgCardD">
<svg viewBox="0 0 274 76" width="100%" height="76" style="border-radius:8px;display:block" role="img"><title>Location map</title><desc>A simplified street map with a dropped location pin.</desc><defs><clipPath id="rgMap"><rect width="274" height="76" rx="8"></rect></clipPath></defs><g clip-path="url(#rgMap)"><rect width="274" height="76" fill="#eef0ea"></rect><path d="M0 0h34l10 76H0z" fill="#bcd9ee"></path><path d="M238 0h36v76h-30z" fill="#bcd9ee"></path><rect x="62" y="14" width="96" height="44" rx="4" fill="#d3e6c4"></rect><path d="M44 0l6 76M96 0l4 76M170 0l6 76M214 0l4 76" stroke="#fff" stroke-width="3" fill="none"></path><path d="M34 22h206M34 52h206" stroke="#fff" stroke-width="3" fill="none"></path><path d="M200 0c8 26 26 44 34 76" stroke="#f0c187" stroke-width="4" fill="none"></path><path d="M140 26c6.6 0 12 5.4 12 12 0 8.6-12 20-12 20s-12-11.4-12-20c0-6.6 5.4-12 12-12z" fill="#e0334b"></path><circle cx="140" cy="38" r="4.4" fill="#fff"></circle></g></svg>
<div style="display:flex;align-items:baseline;gap:8px;margin:10px 0 9px"><span style="font-size:12.5px;font-weight:500;color:#16213d">True IP</span><span style="font-size:12.5px;color:#16213d;border-bottom:1px solid #c3cede">240.145.64.38</span></div>
<div style="display:flex;align-items:center;gap:18px"><span class="rgAct"><i class="ti ti-x" style="font-size:15px;color:#e05252" aria-hidden="true"></i>Block</span><span class="rgAct"><i class="ti ti-check" style="font-size:15px;color:#17794a" aria-hidden="true"></i>Allow</span><span class="rgAct"><i class="ti ti-zoom-in" style="font-size:15px;color:#2f6df6" aria-hidden="true"></i>Inspect</span></div>
</div>

</div>

<div class="rgPhone">
<div class="rgNotch"></div>
<div class="rgSb"><span>9:41</span><span style="display:flex;gap:4px;color:#16213d"><i class="ti ti-antenna-bars-5" style="font-size:14px" aria-hidden="true"></i><i class="ti ti-wifi" style="font-size:14px" aria-hidden="true"></i><i class="ti ti-battery-4" style="font-size:14px" aria-hidden="true"></i></span></div>
<div class="rgHd"><i class="ti ti-arrow-left" style="font-size:17px;color:#16213d" aria-hidden="true"></i><p class="rgHt">Sign up</p></div>
<div class="rgF"><p class="rgFl">Full name</p><div class="rgFi" id="fldName"><span id="txName">Minakshi Boyal</span><span class="rgCar"></span></div></div>
<div class="rgF"><p class="rgFl">Email</p><div class="rgFi" id="fldMail"><span id="txMail">mikiboyal@gmail.com</span><span class="rgCar"></span></div></div>
<div class="rgF"><p class="rgFl">Password</p><div class="rgFi" id="fldPass"><span id="txPass" style="letter-spacing:1px">············</span><span class="rgCar"></span><i class="ti ti-eye-off" style="font-size:15px;color:#8a95ad;margin-left:auto" aria-hidden="true"></i></div></div>
<p class="rgTerms">By signing up, you agree to our terms of use as well as privacy and cookie policy</p>
<div class="rgBtn" id="rgBtn">Confirm</div>
<div class="rgVerdict on" id="rgVerdict">
<div class="rgVr"><div class="rgVi"><i class="ti ti-alert-triangle" aria-hidden="true"></i></div><div><p style="margin:0;font-size:11.5px;font-weight:500;color:#16213d">Signup held for review</p><p style="margin:2px 0 0;font-size:10px;color:#7b88a3">VPN and rooted device detected</p></div></div>
<div class="rgBtnB">Step-up verification required</div>
</div>
</div>
</div>

</div>
</div>
`;

const TABLER_ICONS_CSS_HREF = 'https://cdn.jsdelivr.net/npm/@tabler/icons-webfont@latest/dist/tabler-icons.min.css';

function ensureTablerIconsLoaded() {
  if (document.querySelector(`link[href="${TABLER_ICONS_CSS_HREF}"]`)) return;
  const link = document.createElement('link');
  link.rel = 'stylesheet';
  link.href = TABLER_ICONS_CSS_HREF;
  document.head.appendChild(link);
}

const NATURAL_HEIGHT = 602;

const RaspDemoAnimation: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const outerRef = useRef<HTMLDivElement>(null);
  const scaleTargetRef = useRef<HTMLDivElement>(null);
  const [scale, setScale] = useState(1);

  // The widget's internal layout is fixed-pixel-width (~650px) and not
  // fluid, so instead of letting it get clipped/scrolled inside a narrower
  // grid column, scale the whole thing down to fit - mirrors what the
  // `transform: scale(1)` in the original markup was clearly meant for.
  useLayoutEffect(() => {
    const outer = outerRef.current;
    const target = scaleTargetRef.current;
    if (!outer || !target) return;

    const recompute = () => {
      const available = outer.clientWidth;
      const natural = target.scrollWidth;
      if (available > 0 && natural > 0) {
        setScale(Math.min(1, available / natural));
      }
    };

    recompute();
    const ro = new ResizeObserver(recompute);
    ro.observe(outer);
    return () => ro.disconnect();
  }, []);

  useEffect(() => {
    ensureTablerIconsLoaded();

    const root = containerRef.current;
    if (!root) return;
    const $ = <T extends Element = Element>(sel: string) => root.querySelector(sel) as T | null;

    const vd = $('#rgVerdict');
    const btn = $('#rgBtn');
    const cards = [$('#rgCardA'), $('#rgCardB'), $('#rgCardC'), $('#rgCardD')];
    const fields: [Element | null, Element | null, string, number][] = [
      [$('#fldName'), $('#txName'), 'Minakshi Boyal', 52],
      [$('#fldMail'), $('#txMail'), 'mikiboyal@gmail.com', 42],
      [$('#fldPass'), $('#txPass'), '············', 55],
    ];

    let timers: ReturnType<typeof setTimeout>[] = [];
    let cycle = 0;
    let gen = 0;

    const T = (f: () => void, ms: number) => {
      timers.push(setTimeout(f, ms));
    };

    const type = (idx: number, g: number, done: () => void) => {
      if (g !== gen) return;
      if (idx >= fields.length) {
        done();
        return;
      }
      const [box, el, txt, sp] = fields[idx];
      let i = 0;
      box?.classList.add('typing');
      const step = () => {
        if (g !== gen) return;
        if (i >= txt.length) {
          box?.classList.remove('typing');
          T(() => type(idx + 1, g, done), 260);
          return;
        }
        i += 1;
        if (el) el.textContent = txt.slice(0, i);
        T(step, sp);
      };
      step();
    };

    const run = () => {
      timers.forEach(clearTimeout);
      timers = [];
      gen += 1;
      const g = gen;
      vd?.classList.remove('on');
      btn?.classList.remove('press');
      fields.forEach(([box, el]) => {
        if (el) el.textContent = '';
        box?.classList.remove('typing');
      });
      cards.forEach((c, i) => {
        c?.classList.toggle('on', i === cycle % 4);
      });
      cycle += 1;
      T(() => {
        type(0, g, () => {
          T(() => btn?.classList.add('press'), 240);
          T(() => btn?.classList.remove('press'), 440);
          T(() => vd?.classList.add('on'), 1100);
          T(run, 4600);
        });
      }, 420);
    };

    run();

    return () => {
      timers.forEach(clearTimeout);
    };
  }, []);

  return (
    <div ref={outerRef} className="mx-auto w-full max-w-[672px] overflow-hidden" style={{ height: NATURAL_HEIGHT * scale }}>
      <style dangerouslySetInnerHTML={{ __html: CSS_CONTENT }} />
      <div ref={scaleTargetRef} style={{ width: 'max-content', transform: `scale(${scale})`, transformOrigin: 'left top' }}>
        <div style={{ padding: '1rem 0' }}>
          <div ref={containerRef} dangerouslySetInnerHTML={{ __html: HTML_CONTENT }} />
        </div>
      </div>
    </div>
  );
};

export default RaspDemoAnimation;
