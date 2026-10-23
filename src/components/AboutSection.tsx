import React from 'react';
import { Target, Eye, CheckCircle2, ArrowRight, ShieldCheck, Award } from 'lucide-react';
import { BRAND_INFO } from '../data/mockData';

interface AboutSectionProps {
  onBookConsultation: () => void;
}

export const AboutSection: React.FC<AboutSectionProps> = ({
  onBookConsultation,
}) => {
  const practicalApproach = [
    {
      step: '01',
      title: 'Understand the Business',
      desc: 'Conduct deep-dive unit economics audits and understand real founder bottlenecks before proposing remedies.',
    },
    {
      step: '02',
      title: 'Identify Highest-Impact Opportunities',
      desc: 'Filter the 20% of strategic levers that yield 80% of revenue stability and margin expansion.',
    },
    {
      step: '03',
      title: 'Build a Clear Action Plan',
      desc: 'Formulate an uncompromised 90-day roadmap with weekly milestones and assigned accountability.',
    },
    {
      step: '04',
      title: 'Implement Measurable Systems',
      desc: 'Install sales closing scripts, CRM pipeline hygiene, team SOPs, and pragmatic AI automation.',
    },
    {
      step: '05',
      title: 'Review Results & Continuously Improve',
      desc: 'Weekly and monthly leadership check-ins to monitor KPI adherence and adjust strategies dynamically.',
    },
  ];

  return (
    <section id="about" className="py-20 bg-slate-50 border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Top Split: Narrative & Mission/Vision */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          <div className="lg:col-span-7">
            <div className="text-xs font-bold uppercase tracking-wider text-amber-700 mb-2">
              Institution & Philosophy
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-950 tracking-tight leading-tight">
              Business Growth Through Strategy, Systems and Execution.
            </h2>

            <p className="mt-5 text-base sm:text-lg text-slate-700 leading-relaxed">
              <strong>Coaching Community of Bharat (CCB)</strong> exists to help entrepreneurs turn their expertise and business ambitions into structured, scalable businesses.
            </p>

            <p className="mt-3 text-sm sm:text-base text-slate-600 leading-relaxed">
              We combine business strategy, mentorship, marketing, sales systems, technology and implementation support to help business owners make informed decisions and execute with clarity.
            </p>

            {/* Mission & Vision Cards */}
            <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="p-5 rounded-xl bg-white border border-slate-200 shadow-xs">
                <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-amber-800 mb-2">
                  <Target className="w-4 h-4 text-amber-700" />
                  <span>Our Mission</span>
                </div>
                <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
                  Help entrepreneurs across Bharat build stronger, more profitable and scalable businesses.
                </p>
              </div>

              <div className="p-5 rounded-xl bg-white border border-slate-200 shadow-xs">
                <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-amber-800 mb-2">
                  <Eye className="w-4 h-4 text-amber-700" />
                  <span>Our Vision</span>
                </div>
                <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
                  Create an ecosystem where entrepreneurs can access practical business knowledge, mentorship, technology and implementation support.
                </p>
              </div>
            </div>
          </div>

          {/* Visual Badge Card */}
          <div className="lg:col-span-5">
            <div className="rounded-2xl bg-white border border-slate-200 shadow-lg p-6 sm:p-8 relative overflow-hidden">
              <div className="w-12 h-12 rounded-xl bg-slate-950 text-amber-400 flex items-center justify-center font-serif text-2xl font-bold mb-4">
                CCB
              </div>
              <h3 className="text-xl font-bold text-slate-950">
                {BRAND_INFO.positioning}
              </h3>
              <p className="mt-2 text-xs sm:text-sm text-slate-600 leading-relaxed">
                {BRAND_INFO.promise}
              </p>

              <div className="mt-6 pt-5 border-t border-slate-100 space-y-3">
                <div className="flex items-start gap-2.5 text-xs text-slate-700">
                  <ShieldCheck className="w-4 h-4 text-amber-700 shrink-0 mt-0.5" />
                  <span>Professional consulting fee model — no equity expropriation.</span>
                </div>
                <div className="flex items-start gap-2.5 text-xs text-slate-700">
                  <ShieldCheck className="w-4 h-4 text-amber-700 shrink-0 mt-0.5" />
                  <span>Tailored for Indian MSMEs, digital educators, and consultants.</span>
                </div>
                <div className="flex items-start gap-2.5 text-xs text-slate-700">
                  <ShieldCheck className="w-4 h-4 text-amber-700 shrink-0 mt-0.5" />
                  <span>Strict focus on unit economics and cash flow preservation.</span>
                </div>
              </div>

              <div className="mt-8">
                <button
                  type="button"
                  onClick={onBookConsultation}
                  className="w-full inline-flex items-center justify-center gap-2 px-5 py-3 text-xs font-bold text-white bg-slate-950 hover:bg-slate-900 rounded-md transition-colors cursor-pointer"
                >
                  <span>Talk to a Business Mentor</span>
                  <ArrowRight className="w-3.5 h-3.5 text-amber-400" />
                </button>
              </div>
            </div>
          </div>

        </div>

        {/* The 5-Point Practical Approach */}
        <div className="mt-16 pt-12 border-t border-slate-200">
          <div className="text-center max-w-2xl mx-auto mb-10">
            <span className="text-xs font-bold uppercase tracking-wider text-amber-700 block mb-1">
              Operational Tenet
            </span>
            <h3 className="text-2xl font-bold text-slate-950">
              Our Practical 5-Point Execution Approach
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
            {practicalApproach.map((item) => (
              <div
                key={item.step}
                className="p-5 rounded-xl bg-white border border-slate-200 hover:border-slate-300 transition-all"
              >
                <span className="text-xs font-mono font-bold text-amber-700 block mb-2">
                  {item.step}
                </span>
                <h4 className="text-sm font-bold text-slate-950 mb-1.5">
                  {item.title}
                </h4>
                <p className="text-xs text-slate-600 leading-relaxed">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};
