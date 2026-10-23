import React, { useState } from 'react';
import { CheckCircle2, ChevronRight, Clock, FileText, Wrench } from 'lucide-react';
import { FRAMEWORK_STEPS } from '../data/mockData';

interface FrameworkSectionProps {
  onStartStepAssessment: (stepTitle: string) => void;
}

export const FrameworkSection: React.FC<FrameworkSectionProps> = ({
  onStartStepAssessment,
}) => {
  const [activeStepIndex, setActiveStepIndex] = useState(0);
  const activeStep = FRAMEWORK_STEPS[activeStepIndex];

  return (
    <section id="framework" className="py-20 bg-slate-50 border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto">
          <div className="text-xs font-bold uppercase tracking-wider text-amber-700 mb-2">
            Systematic Methodology
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-950 tracking-tight">
            Our Business Growth Framework
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-600 leading-relaxed">
            From fragmented operations to predictable ₹1 Crore annual scale. Six structured phases executed with rigorous mentorship and accountability.
          </p>
        </div>

        {/* Desktop Horizontal Timeline Stepper (Hidden on mobile) */}
        <div className="hidden lg:block mt-14">
          <div className="relative">
            {/* Timeline Connecting Line */}
            <div className="absolute top-1/2 left-0 right-0 h-0.5 bg-slate-200 -translate-y-1/2 z-0" />

            <div className="relative z-10 grid grid-cols-6 gap-2">
              {FRAMEWORK_STEPS.map((step, idx) => {
                const isActive = idx === activeStepIndex;
                const isPassed = idx < activeStepIndex;

                return (
                  <button
                    key={step.number}
                    type="button"
                    onClick={() => setActiveStepIndex(idx)}
                    className={`flex flex-col items-center p-3 rounded-lg text-center transition-all cursor-pointer group focus:outline-none focus-visible:ring-2 focus-visible:ring-amber-500 ${
                      isActive
                        ? 'bg-white shadow-md border border-slate-300'
                        : 'bg-transparent hover:bg-white/60'
                    }`}
                  >
                    <div
                      className={`w-10 h-10 rounded-full flex items-center justify-center font-bold text-sm transition-all ${
                        isActive
                          ? 'bg-slate-950 text-amber-400 ring-4 ring-amber-400/30'
                          : isPassed
                          ? 'bg-amber-600 text-white'
                          : 'bg-white border-2 border-slate-300 text-slate-600 group-hover:border-slate-400'
                      }`}
                    >
                      {step.number}
                    </div>

                    <span
                      className={`mt-2.5 text-xs font-bold uppercase tracking-wider transition-colors ${
                        isActive
                          ? 'text-slate-950'
                          : 'text-slate-600 group-hover:text-slate-900'
                      }`}
                    >
                      {step.title}
                    </span>

                    <span className="text-[11px] text-slate-600 mt-0.5 truncate max-w-full">
                      {step.timeframe}
                    </span>
                  </button>
                );
              })}
            </div>
          </div>
        </div>

        {/* Mobile Stepper / Vertical Selector */}
        <div className="lg:hidden mt-8 flex overflow-x-auto gap-2 pb-2 scrollbar-none">
          {FRAMEWORK_STEPS.map((step, idx) => (
            <button
              key={step.number}
              type="button"
              onClick={() => setActiveStepIndex(idx)}
              className={`shrink-0 flex items-center gap-2 px-3 py-2 rounded-lg text-xs font-bold transition-all ${
                activeStepIndex === idx
                  ? 'bg-slate-950 text-white border border-slate-800'
                  : 'bg-white text-slate-700 border border-slate-200'
              }`}
            >
              <span className="w-5 h-5 rounded-full bg-amber-500/20 text-amber-500 flex items-center justify-center text-[10px]">
                {step.number}
              </span>
              <span>{step.title}</span>
            </button>
          ))}
        </div>

        {/* Active Step Deep-Dive Card */}
        <div className="mt-8 rounded-xl bg-white border border-slate-200 shadow-sm p-6 sm:p-10">
          <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4 pb-6 border-b border-slate-200">
            <div>
              <div className="flex items-center gap-2 text-xs font-bold text-amber-800 uppercase tracking-wider">
                <span>Phase {activeStep.number} of 6</span>
                <span aria-hidden="true" className="text-slate-300">·</span>
                <span className="flex items-center gap-1 text-slate-600">
                  <Clock className="w-3.5 h-3.5" />
                  {activeStep.timeframe}
                </span>
              </div>
              <h3 className="text-2xl sm:text-3xl font-bold text-slate-950 mt-1">
                STEP {activeStep.number} — {activeStep.title}
              </h3>
              <p className="text-sm sm:text-base font-medium text-amber-900/90 mt-1">
                {activeStep.tagline}
              </p>
            </div>

            {/* Quick action for current step */}
            <button
              type="button"
              onClick={() => onStartStepAssessment(activeStep.title)}
              className="inline-flex items-center justify-center gap-2 px-4 py-2.5 text-xs font-bold text-slate-900 bg-amber-100 hover:bg-amber-200 border border-amber-300 rounded-md transition-colors cursor-pointer self-start lg:self-center"
            >
              <span>Audit Step {activeStep.number} for Your Business</span>
              <ChevronRight className="w-3.5 h-3.5 text-amber-800" />
            </button>
          </div>

          <p className="mt-6 text-sm sm:text-base text-slate-700 leading-relaxed max-w-4xl">
            {activeStep.summary}
          </p>

          <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Key Deliverables Column */}
            <div className="p-5 rounded-lg bg-slate-50 border border-slate-200">
              <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-slate-700 mb-3">
                <FileText className="w-4 h-4 text-amber-700" />
                <span>Primary Strategic Deliverables</span>
              </div>
              <ul className="space-y-2.5">
                {activeStep.keyDeliverables.map((deliv, i) => (
                  <li key={i} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-800">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                    <span>{deliv}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Execution Tools & Frameworks Column */}
            <div className="p-5 rounded-lg bg-slate-50 border border-slate-200">
              <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-slate-700 mb-3">
                <Wrench className="w-4 h-4 text-amber-700" />
                <span>Proprietary CCB Toolkits Used</span>
              </div>
              <ul className="space-y-2.5">
                {activeStep.executionTools.map((tool, i) => (
                  <li key={i} className="flex items-center gap-2.5 text-xs sm:text-sm font-medium text-slate-800 bg-white p-2.5 rounded border border-slate-200">
                    <span className="w-2 h-2 rounded-full bg-amber-500 shrink-0" />
                    <span>{tool}</span>
                  </li>
                ))}
              </ul>

              <div className="mt-5 p-3 rounded bg-amber-50/70 border border-amber-200/60 text-xs text-amber-900">
                <span className="font-bold">CCB Guarantee:</span> All toolkits are handed over to your internal team with full usage rights and SOP walk-throughs.
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};
