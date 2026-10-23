import React, { useState } from 'react';
import {
  ShieldCheck,
  CheckCircle2,
  FileText,
  Clock,
  Building,
  Quote,
  Lock,
} from 'lucide-react';
import { CASE_STUDIES } from '../data/mockData';
import { CaseStudy } from '../types';

export const CaseStudiesSection: React.FC = () => {
  const [selectedCase, setSelectedCase] = useState<CaseStudy>(CASE_STUDIES[0]);

  return (
    <section id="case-studies" className="py-20 bg-white border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto">
          <div className="text-xs font-bold uppercase tracking-wider text-amber-700 mb-2">
            Verified Engagement Documentation
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-950 tracking-tight">
            Case Studies & Impact Frameworks
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-600 leading-relaxed">
            Real enterprise transformations documented under strict commercial privacy protocols. Structured execution with measurable business outcomes.
          </p>
        </div>

        {/* Verification Ethics Notice */}
        <div className="mt-8 max-w-2xl mx-auto p-3.5 rounded-lg bg-slate-50 border border-slate-200 text-xs text-slate-600 flex items-center justify-center gap-2 text-center">
          <ShieldCheck className="w-4 h-4 text-emerald-600 shrink-0" />
          <span>
            <strong>Authenticity Commitment:</strong> In compliance with client non-disclosure agreements (NDAs), sensitive financial figures are masked and client identities are redacted.
          </span>
        </div>

        {/* Selector Tabs for 4 Archetypes */}
        <div className="mt-10 flex overflow-x-auto gap-2 pb-2 justify-start sm:justify-center scrollbar-none">
          {CASE_STUDIES.map((item, idx) => (
            <button
              key={item.id}
              type="button"
              onClick={() => setSelectedCase(item)}
              className={`shrink-0 px-4 py-2.5 rounded-lg text-xs font-semibold transition-all cursor-pointer ${
                selectedCase.id === item.id
                  ? 'bg-slate-950 text-white shadow-sm'
                  : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
              }`}
            >
              <span>Case 0{idx + 1}: {item.industryTag}</span>
            </button>
          ))}
        </div>

        {/* Featured Case Study Detail Box */}
        <div className="mt-8 rounded-2xl border border-slate-200 bg-white shadow-sm p-6 sm:p-10">
          
          {/* Header */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-slate-200">
            <div>
              <div className="flex items-center gap-2 text-xs font-bold text-amber-800 uppercase tracking-wider">
                <span>{selectedCase.industryTag}</span>
                <span aria-hidden="true" className="text-slate-300">·</span>
                <span className="flex items-center gap-1 text-slate-500 font-medium">
                  <Clock className="w-3.5 h-3.5" />
                  {selectedCase.executionPeriod}
                </span>
              </div>
              <h3 className="text-2xl font-bold text-slate-950 mt-1">
                {selectedCase.clientCategory}
              </h3>
            </div>

            <div className="shrink-0 flex items-center gap-1.5 px-3 py-1.5 rounded bg-emerald-50 border border-emerald-200 text-xs font-semibold text-emerald-800">
              <CheckCircle2 className="w-4 h-4 text-emerald-600" />
              <span>Verified Case File</span>
            </div>
          </div>

          {/* Grid: Starting Challenge vs Strategy Implemented */}
          <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="p-5 rounded-xl bg-slate-50 border border-slate-200">
              <span className="text-xs font-bold uppercase tracking-wider text-red-700 block mb-2">
                Starting Challenge & Operational Bottleneck
              </span>
              <p className="text-sm text-slate-700 leading-relaxed">
                {selectedCase.startingChallenge}
              </p>
            </div>

            <div className="p-5 rounded-xl bg-slate-50 border border-slate-200">
              <span className="text-xs font-bold uppercase tracking-wider text-amber-700 block mb-2">
                CCB Strategy & Systems Implemented
              </span>
              <p className="text-sm text-slate-700 leading-relaxed">
                {selectedCase.strategyImplemented}
              </p>
            </div>
          </div>

          {/* Verified Outcomes */}
          <div className="mt-8">
            <span className="text-xs font-bold uppercase tracking-wider text-slate-600 block mb-3">
              Verified Operational & Commercial Outcomes:
            </span>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {selectedCase.verifiedOutcomes.map((outcome, idx) => (
                <div
                  key={idx}
                  className="flex items-start gap-2.5 p-3.5 rounded-lg border border-slate-200 bg-white shadow-xs"
                >
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                  <span className="text-xs font-medium text-slate-800 leading-relaxed">
                    {outcome}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Testimonial Placeholder Box */}
          <div className="mt-8 pt-6 border-t border-slate-200">
            <div className="p-4 rounded-lg bg-amber-50/50 border border-amber-200/70 flex items-start gap-3">
              <Quote className="w-5 h-5 text-amber-700 shrink-0 mt-0.5" />
              <div>
                <span className="text-xs font-bold text-slate-900 block mb-1">
                  Client Testimonial & Attribution Protocol
                </span>
                <p className="text-xs text-slate-600 italic">
                  {selectedCase.testimonialPlaceholder}
                </p>
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
