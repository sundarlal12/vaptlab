import React from "react";
import { Brain, Target, Monitor, ShieldCheck } from "lucide-react";

export default function ApproachSection() {
  const cards = [
    {
      icon: <Brain className="w-6 h-6 text-white" />,
      title: "Proactive Offensive Mindset",
      body:
        "We emulate real attacker techniques to discover hidden weaknesses early — giving teams the time and evidence needed to remediate before breaches occur.",
    },
    {
      icon: <Target className="w-6 h-6 text-white" />,
      title: "Outcome-Focused Engagements",
      body:
        "We align every assessment with your business objectives and deliver concise, prioritized remediation guidance that reduces exposure quickly.",
    },
    {
      icon: <Monitor className="w-6 h-6 text-white" />,
      title: "Premium Technical Delivery",
      body:
        "Experienced security engineers perform thorough testing and present clear, actionable reports so your teams can fix issues confidently and efficiently.",
    },
    {
      icon: <ShieldCheck className="w-6 h-6 text-white" />,
      title: "Technology-Agnostic Expertise",
      body:
        "We select tools and methods that best suit your architecture — cloud, web, mobile or on-prem — to produce the most effective security outcomes.",
    },
  ];

  return (
    <section id="approach" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-block px-3 py-1 rounded-full bg-emerald-50 text-emerald-600 font-medium tracking-widest text-sm mb-4">
            KEY BENEFITS
          </div>

          <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 leading-tight mb-3">
            Our Approach
          </h2>

          <p className="text-slate-500 text-lg">
            Tailored, business-driven security assessments — practical testing and clear remediation that strengthen your posture and reduce operational risk.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {cards.map((c, idx) => (
            <article
              key={idx}
              className="relative rounded-xl bg-emerald-50/60 overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-200"
            >
              {/* accent bottom bar */}
              <div className="absolute bottom-0 left-0 right-0 h-2 bg-gradient-to-r from-emerald-400 via-teal-300 to-emerald-300" />

              <div className="p-8">
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 rounded-lg flex items-center justify-center bg-gradient-to-br from-emerald-500 to-teal-400 shadow-md">
                      {c.icon}
                    </div>
                  </div>

                  <div>
                    <h3 className="text-xl font-semibold text-slate-900">{c.title}</h3>
                    <p className="mt-3 text-slate-600">{c.body}</p>
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
