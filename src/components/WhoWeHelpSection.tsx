import React, { useState } from 'react';
import { ArrowRight, Check, X, Sparkles, Building2 } from 'lucide-react';
import { WHO_WE_HELP } from '../data/mockData';
import { WhoWeHelpItem } from '../types';

interface WhoWeHelpSectionProps {
  onSelectCategoryForConsultation: (categoryTitle: string) => void;
}

export const WhoWeHelpSection: React.FC<WhoWeHelpSectionProps> = ({
  onSelectCategoryForConsultation,
}) => {
  const [selectedItem, setSelectedItem] = useState<WhoWeHelpItem | null>(null);

  return (
    <section id="who-we-help" className="py-20 bg-white border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto">
          <div className="text-xs font-bold uppercase tracking-wider text-amber-700 mb-2">
            Target Ecosystem & Stakeholders
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-950 tracking-tight">
            Who We Help
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-600 leading-relaxed">
            Tailored growth frameworks designed specifically for your stage, business model, and operational realities in Bharat.
          </p>
        </div>

        {/* 6 Grid Cards */}
        <div className="mt-14 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {WHO_WE_HELP.map((item, index) => (
            <div
              key={item.id}
              className="group flex flex-col justify-between rounded-xl border border-slate-200 bg-white hover:border-slate-300 hover:shadow-md transition-all duration-200 overflow-hidden"
            >
              <div>
                {/* Photo Header */}
                <div className="relative h-48 w-full overflow-hidden bg-slate-100">
                  <img
                    src={item.photoUrl}
                    alt={item.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    loading="lazy"
                  />
                  <div className="absolute top-3 left-3 bg-slate-950/80 backdrop-blur-sm px-2.5 py-1 rounded text-[11px] font-bold text-white tracking-wide">
                    0{index + 1}
                  </div>
                </div>

                {/* Card Body */}
                <div className="p-6">
                  <h3 className="text-xl font-bold text-slate-950 group-hover:text-amber-800 transition-colors">
                    {item.title}
                  </h3>
                  <p className="mt-2 text-sm text-slate-600 leading-relaxed">
                    {item.shortDesc}
                  </p>

                  <div className="mt-4 pt-4 border-t border-slate-100">
                    <span className="text-[11px] font-bold uppercase tracking-wider text-slate-600 block mb-2">
                      Primary Focus Areas
                    </span>
                    <ul className="space-y-1.5 text-xs text-slate-700">
                      {item.solutions.slice(0, 2).map((sol, i) => (
                        <li key={i} className="flex items-start gap-1.5">
                          <Check className="w-3.5 h-3.5 text-amber-700 shrink-0 mt-0.5" />
                          <span>{sol}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>

              {/* Action Button */}
              <div className="p-6 pt-0">
                <button
                  type="button"
                  onClick={() => setSelectedItem(item)}
                  className="w-full inline-flex items-center justify-between px-4 py-2.5 text-xs font-semibold text-slate-900 bg-slate-50 hover:bg-slate-100 border border-slate-200 rounded-md transition-colors cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-amber-500"
                >
                  <span>Discover How We Help</span>
                  <ArrowRight className="w-3.5 h-3.5 text-amber-700 group-hover:translate-x-0.5 transition-transform" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Modal: Detailed Profile Breakdown */}
      {selectedItem && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          <div
            className="fixed inset-0 bg-slate-950/60 backdrop-blur-sm"
            onClick={() => setSelectedItem(null)}
          />
          <div className="relative w-full max-w-2xl bg-white rounded-xl shadow-2xl border border-slate-200 p-6 sm:p-8 max-h-[90vh] overflow-y-auto">
            <div className="flex items-start justify-between pb-4 border-b border-slate-200">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-lg bg-amber-50 border border-amber-200 flex items-center justify-center text-amber-800">
                  <Building2 className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xs font-bold text-amber-800 uppercase tracking-wider">
                    CCB Growth Blueprint
                  </div>
                  <h3 className="text-xl font-bold text-slate-950">
                    {selectedItem.title}
                  </h3>
                </div>
              </div>
              <button
                type="button"
                onClick={() => setSelectedItem(null)}
                className="p-1 rounded-md text-slate-400 hover:text-slate-700 hover:bg-slate-100 cursor-pointer"
                aria-label="Close"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="mt-6 space-y-6">
              <div>
                <h4 className="text-xs font-bold uppercase tracking-wider text-slate-600 mb-1">
                  Context & Common Challenges
                </h4>
                <p className="text-sm text-slate-700 leading-relaxed bg-slate-50 p-3.5 rounded-lg border border-slate-200">
                  {selectedItem.detailedNeeds}
                </p>
              </div>

              <div>
                <h4 className="text-xs font-bold uppercase tracking-wider text-slate-600 mb-2">
                  Tailored Strategic Interventions
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                  {selectedItem.solutions.map((sol, idx) => (
                    <div
                      key={idx}
                      className="flex items-start gap-2 p-3 rounded-lg border border-slate-100 bg-white"
                    >
                      <Check className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                      <span className="text-xs font-medium text-slate-800">{sol}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <h4 className="text-xs font-bold uppercase tracking-wider text-slate-600 mb-2">
                  Target 90-Day Execution Milestones
                </h4>
                <div className="flex flex-col gap-2">
                  {selectedItem.keyMilestones.map((ms, idx) => (
                    <div
                      key={idx}
                      className="flex items-center gap-3 text-xs text-slate-700 py-1.5 px-3 rounded bg-amber-50/50 border border-amber-200/50 font-medium"
                    >
                      <span className="w-5 h-5 rounded-full bg-slate-900 text-amber-400 flex items-center justify-center text-[10px] font-bold shrink-0">
                        {idx + 1}
                      </span>
                      <span>{ms}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Modal Footer CTA */}
            <div className="mt-8 pt-5 border-t border-slate-200 flex flex-col sm:flex-row items-center justify-between gap-3">
              <span className="text-xs text-slate-600">
                Ready to review your numbers with a CCB Mentor?
              </span>
              <button
                type="button"
                onClick={() => {
                  const cat = selectedItem.title;
                  setSelectedItem(null);
                  onSelectCategoryForConsultation(cat);
                }}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-2.5 text-xs font-bold text-white bg-slate-950 hover:bg-slate-900 rounded-md shadow transition-colors cursor-pointer"
              >
                <Sparkles className="w-3.5 h-3.5 text-amber-400" />
                <span>Discuss {selectedItem.title} Roadmap</span>
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
