import React from 'react';
import {
  Compass,
  TrendingUp,
  Cpu,
  ShieldCheck,
  ArrowRight,
  CheckCircle2,
  CalendarCheck,
} from 'lucide-react';
import { VALUE_PROPOSITIONS } from '../data/mockData';

interface HeroSectionProps {
  onBookAssessment: () => void;
  onExplorePrograms: () => void;
  onOpenPlanner: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({
  onBookAssessment,
  onExplorePrograms,
  onOpenPlanner,
}) => {
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'Compass':
        return <Compass className="w-5 h-5 text-amber-600" />;
      case 'TrendingUp':
        return <TrendingUp className="w-5 h-5 text-amber-600" />;
      case 'Cpu':
        return <Cpu className="w-5 h-5 text-amber-600" />;
      case 'ShieldCheck':
        return <ShieldCheck className="w-5 h-5 text-amber-600" />;
      default:
        return <CheckCircle2 className="w-5 h-5 text-amber-600" />;
    }
  };

  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-white via-slate-50/50 to-slate-100/60 pt-8 sm:pt-14 pb-16 lg:pb-24 border-b border-slate-200/80">
      {/* Subtle structural grid background for professional consulting aesthetic */}
      <div 
        className="absolute inset-0 opacity-[0.03] pointer-events-none"
        style={{
          backgroundImage: `radial-gradient(#0f172a 1px, transparent 1px)`,
          backgroundSize: '24px 24px'
        }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Core Positioning & CTAs */}
          <div className="lg:col-span-7 flex flex-col justify-center">
            {/* Professional Kicker with typographic separator */}
            <div className="flex items-center gap-2 text-xs font-semibold tracking-wider uppercase text-slate-600 mb-4">
              <span className="text-amber-700 font-bold">CCB Advisory</span>
              <span aria-hidden="true" className="text-slate-300">·</span>
              <span>Business Growth & Implementation Partner</span>
            </div>

            {/* Main Headline */}
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-[2.85rem] xl:text-[3.25rem] font-extrabold text-slate-950 tracking-tight leading-[1.15]">
              Build a Business That Can Scale to <span className="underline decoration-amber-500/80 decoration-4 underline-offset-4">₹1 Crore and Beyond.</span>
            </h1>

            {/* Subheadline */}
            <p className="mt-5 text-lg sm:text-xl text-slate-800 font-medium leading-relaxed">
              You have the vision. We help you build the strategy, customer acquisition systems, sales processes and execution roadmap to turn your business goals into measurable progress.
            </p>

            {/* Supporting Text */}
            <p className="mt-3 text-sm sm:text-base text-slate-600 leading-normal">
              For entrepreneurs, business owners, coaches, consultants, trainers and startups ready to grow with the right systems and mentorship.
            </p>

            {/* Action Buttons */}
            <div className="mt-8 flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5">
              <button
                onClick={onBookAssessment}
                className="inline-flex items-center justify-center gap-2.5 px-6 py-3.5 text-sm font-bold text-white bg-slate-950 hover:bg-slate-900 border border-slate-900 hover:border-amber-500 rounded-md shadow-md hover:shadow-lg transition-all cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-amber-500"
              >
                <span>BOOK YOUR BUSINESS GROWTH ASSESSMENT</span>
                <ArrowRight className="w-4 h-4 text-amber-400" />
              </button>

              <button
                onClick={onExplorePrograms}
                className="inline-flex items-center justify-center gap-2 px-5 py-3.5 text-sm font-semibold text-slate-800 hover:text-slate-950 bg-white hover:bg-slate-50 border border-slate-300 hover:border-slate-400 rounded-md shadow-sm transition-all cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-slate-400"
              >
                <span>EXPLORE OUR PROGRAMS</span>
              </button>
            </div>

            {/* Direct Tool shortcut link */}
            <div className="mt-4 flex items-center gap-2 text-xs text-slate-600">
              <span className="font-medium">Need immediate clarity on numbers?</span>
              <button
                onClick={onOpenPlanner}
                className="text-amber-800 hover:text-amber-900 font-semibold underline underline-offset-2 hover:decoration-amber-700 cursor-pointer"
              >
                Try the free ₹1 Crore Revenue Planner →
              </button>
            </div>

            {/* Verification & Ethics Statement (Anti-slop note) */}
            <div className="mt-6 pt-5 border-t border-slate-200/80 flex flex-wrap items-center gap-y-2 gap-x-5 text-xs text-slate-600 font-medium">
              <span className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                Tailored for Indian unit economics
              </span>
              <span className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                Strategic consulting fee model
              </span>
              <span className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                1-on-1 mentor guidance
              </span>
            </div>
          </div>

          {/* Right Column: Premium Visual of Indian Entrepreneur with Mentor */}
          <div className="lg:col-span-5">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              
              {/* Premium image container with clean architectural borders */}
              <div className="relative rounded-xl overflow-hidden border border-slate-300 bg-white shadow-xl">
                <img
                  src="https://images.unsplash.com/photo-1556761175-5973dc0f32e7?auto=format&fit=crop&w=1000&q=80"
                  alt="Indian business entrepreneur discussing growth strategy roadmap with mentor"
                  className="w-full h-[380px] sm:h-[420px] object-cover object-center"
                  loading="eager"
                />

                {/* Subtle dark gradient overlay at bottom for card readability */}
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent pointer-events-none" />

                {/* Bottom Overlay Card: Strategic Consulting Roadmap */}
                <div className="absolute bottom-4 left-4 right-4 p-4 rounded-lg bg-white/95 backdrop-blur-md border border-slate-200 shadow-md">
                  <div className="flex items-start justify-between gap-3">
                    <div>
                      <div className="flex items-center gap-1.5 text-[11px] font-bold text-amber-800 uppercase tracking-wider">
                        <CalendarCheck className="w-3.5 h-3.5 text-amber-700" />
                        <span>Executive Strategy Session</span>
                      </div>
                      <p className="text-xs font-semibold text-slate-900 mt-1">
                        90-Day ₹1 Crore Milestones & Unit Margin Plan
                      </p>
                      <p className="text-[11px] text-slate-600 mt-0.5">
                        Focused on cash-flow hygiene, sales scripts & team delegation
                      </p>
                    </div>
                    <div className="text-right shrink-0">
                      <span className="text-[10px] uppercase font-bold text-slate-600 tracking-wider block">
                        Focus
                      </span>
                      <span className="text-xs font-bold text-slate-900">
                        100% Execution
                      </span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Decorative accent element */}
              <div className="absolute -top-3 -right-3 w-20 h-20 bg-amber-400/10 rounded-full blur-2xl -z-10" />
              <div className="absolute -bottom-4 -left-4 w-28 h-28 bg-slate-900/10 rounded-full blur-2xl -z-10" />
            </div>
          </div>
        </div>

        {/* 4 Value Propositions Below CTAs */}
        <div className="mt-16 pt-12 border-t border-slate-200">
          <div className="text-xs font-semibold uppercase tracking-wider text-slate-600 mb-6 text-center lg:text-left">
            Core Pillars of the CCB Implementation Engine
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {VALUE_PROPOSITIONS.map((prop, idx) => (
              <div
                key={prop.id}
                className="p-5 rounded-lg bg-white border border-slate-200 hover:border-slate-300 hover:shadow-sm transition-all"
              >
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-9 h-9 rounded-md bg-amber-50 border border-amber-200/80 flex items-center justify-center shrink-0">
                    {getIcon(prop.icon)}
                  </div>
                  <span className="text-xs font-bold text-slate-600">0{idx + 1}</span>
                </div>
                <h2 className="text-base font-bold text-slate-900 tracking-tight">
                  {prop.title}
                </h2>
                <p className="mt-1.5 text-xs text-slate-600 leading-relaxed">
                  {prop.description}
                </p>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};
