import React from 'react';
import { Check, Shield, AlertCircle, ArrowRight, Star } from 'lucide-react';
import { CONSULTING_PROGRAMS } from '../data/mockData';
import { ConsultingProgram } from '../types';

interface ProgramsSectionProps {
  onSelectProgram: (programName: string) => void;
}

export const ProgramsSection: React.FC<ProgramsSectionProps> = ({
  onSelectProgram,
}) => {
  return (
    <section id="programs" className="py-20 bg-slate-50 border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto">
          <div className="text-xs font-bold uppercase tracking-wider text-amber-700 mb-2">
            Structured Engagement Tiers
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-950 tracking-tight">
            Consulting Programs & Transparent Pricing
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-600 leading-relaxed">
            Straightforward consulting fees for structured strategic sprints and guided implementation. No hidden costs, revenue cuts, or lock-in contracts.
          </p>
        </div>

        {/* 3 Pricing Cards */}
        <div className="mt-14 grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch">
          {CONSULTING_PROGRAMS.map((program) => {
            return (
              <div
                key={program.id}
                className={`relative flex flex-col justify-between rounded-2xl transition-all duration-200 p-7 sm:p-8 ${
                  program.featured
                    ? 'bg-white border-2 border-amber-500 shadow-xl lg:-translate-y-2'
                    : 'bg-white border border-slate-200 shadow-sm hover:border-slate-300 hover:shadow-md'
                }`}
              >
                {/* Featured Badge */}
                {program.featured && (
                  <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 bg-amber-600 text-white px-3.5 py-1 rounded-full text-[11px] font-extrabold tracking-wider uppercase shadow-sm flex items-center gap-1">
                    <Star className="w-3 h-3 fill-current" />
                    <span>Most Popular Implementation</span>
                  </div>
                )}

                <div>
                  {/* Program Header */}
                  <div className="border-b border-slate-100 pb-5">
                    <div className="text-xs font-bold uppercase tracking-wider text-slate-600 mb-1">
                      {program.tagline}
                    </div>
                    <h3 className="text-2xl font-extrabold text-slate-950 tracking-tight">
                      {program.name}
                    </h3>

                    {/* Price in INR */}
                    <div className="mt-4 flex items-baseline gap-2">
                      <span className="text-3xl sm:text-4xl font-extrabold text-slate-950">
                        {program.priceFormatted}
                      </span>
                      <span className="text-xs text-slate-600 font-medium">
                        (Consulting advisory fee)
                      </span>
                    </div>

                    <p className="mt-3 text-xs text-slate-600 font-medium leading-relaxed">
                      <span className="font-bold text-slate-800">Ideal for: </span>
                      {program.idealFor}
                    </p>
                  </div>

                  {/* Program Specifications: Duration & Cadence */}
                  <div className="py-4 border-b border-slate-100 space-y-2 text-xs text-slate-700 bg-slate-50/70 p-3 rounded-lg my-4">
                    <div>
                      <span className="font-bold text-slate-900">Duration: </span>
                      {program.duration}
                    </div>
                    <div>
                      <span className="font-bold text-slate-900">Cadence: </span>
                      {program.cadence}
                    </div>
                  </div>

                  {/* Deliverables List */}
                  <div>
                    <span className="text-[11px] font-bold uppercase tracking-wider text-slate-600 block mb-3">
                      Included Deliverables & Sessions:
                    </span>
                    <ul className="space-y-2.5">
                      {program.deliverables.map((item, idx) => (
                        <li key={idx} className="flex items-start gap-2.5 text-xs text-slate-700">
                          <Check className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Footer with Limits & CTA */}
                <div className="mt-8 pt-5 border-t border-slate-100">
                  <div className="text-[11px] text-slate-600 mb-4 bg-slate-50 p-2.5 rounded border border-slate-200">
                    <span className="font-semibold text-slate-700">Scope Notice: </span>
                    {program.supportLimits}
                  </div>

                  <button
                    type="button"
                    onClick={() => onSelectProgram(program.name)}
                    className={`w-full inline-flex items-center justify-center gap-2 px-5 py-3.5 text-xs font-bold rounded-md transition-all cursor-pointer shadow-sm ${
                      program.featured
                        ? 'bg-slate-950 hover:bg-slate-900 text-white border border-slate-900 hover:border-amber-400'
                        : 'bg-slate-900 hover:bg-slate-950 text-white'
                    }`}
                  >
                    <span>{program.ctaText}</span>
                    <ArrowRight className="w-4 h-4 text-amber-400" />
                  </button>
                </div>
              </div>
            );
          })}
        </div>

        {/* Consulting Ethics & Non-Guarantee Statement */}
        <div className="mt-12 p-4 sm:p-5 rounded-lg bg-amber-50/80 border border-amber-200/90 flex items-start gap-3 text-xs text-amber-950">
          <AlertCircle className="w-4 h-4 text-amber-700 shrink-0 mt-0.5" />
          <div className="leading-relaxed">
            <span className="font-bold">Transparent Consulting Ethics Notice: </span>
            The fees above cover dedicated business growth strategy, diagnostic assessments, architecture of sales pipelines, SOP formulation, and 1-on-1 mentor guidance. They are professional consulting fees, not speculative investment products, and do not constitute guaranteed financial returns. Growth requires consistent implementation and operational execution by your company.
          </div>
        </div>

      </div>
    </section>
  );
};
