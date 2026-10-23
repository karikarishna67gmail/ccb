import React, { useState } from 'react';
import {
  Download,
  FileText,
  CheckCircle,
  Eye,
  Filter,
  Sparkles,
  Lock,
} from 'lucide-react';
import { DOWNLOADABLE_RESOURCES } from '../data/mockData';
import { DownloadableResource } from '../types';

interface ResourcesSectionProps {
  onOpenResourceModal: (resource: DownloadableResource) => void;
}

export const ResourcesSection: React.FC<ResourcesSectionProps> = ({
  onOpenResourceModal,
}) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');

  const categories = [
    'All',
    'Business Growth',
    'Marketing & Lead Generation',
    'Sales & Revenue',
    'Coaching Business Development',
    'AI & Automation',
    'Startup Strategy',
    'Business Systems',
    'Scaling & Franchising',
  ];

  const filteredResources =
    selectedCategory === 'All'
      ? DOWNLOADABLE_RESOURCES
      : DOWNLOADABLE_RESOURCES.filter(
          (r) => r.category.toLowerCase() === selectedCategory.toLowerCase()
        );

  return (
    <section id="resources" className="py-20 bg-white border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto">
          <div className="text-xs font-bold uppercase tracking-wider text-amber-700 mb-2">
            Practical Execution Knowledge
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-950 tracking-tight">
            Resources & Implementation Playbooks
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-600 leading-relaxed">
            Download our proven templates, 90-day action frameworks, and diagnostic tools used by Indian business owners and consultants.
          </p>
        </div>

        {/* Categories Bar */}
        <div className="mt-10 flex overflow-x-auto gap-2 pb-2 justify-start lg:justify-center scrollbar-none">
          {categories.map((cat) => (
            <button
              key={cat}
              type="button"
              onClick={() => setSelectedCategory(cat)}
              className={`shrink-0 px-3.5 py-1.5 rounded-md text-xs font-semibold transition-all cursor-pointer ${
                selectedCategory === cat
                  ? 'bg-slate-950 text-white shadow-xs'
                  : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Resources Grid */}
        <div className="mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredResources.map((resource) => (
            <div
              key={resource.id}
              className="flex flex-col justify-between rounded-xl border border-slate-200 bg-white hover:border-slate-300 hover:shadow-md transition-all p-6"
            >
              <div>
                {/* Meta details with zero pills */}
                <div className="flex items-center gap-2 text-xs text-slate-500 mb-3">
                  <span className="font-semibold text-amber-800">{resource.category}</span>
                  <span aria-hidden="true">·</span>
                  <span>{resource.type}</span>
                  <span aria-hidden="true">·</span>
                  <span>{resource.pages} pages</span>
                </div>

                <h3 className="text-lg font-bold text-slate-950 leading-snug">
                  {resource.title}
                </h3>

                <p className="mt-2 text-xs sm:text-sm text-slate-600 leading-relaxed">
                  {resource.description}
                </p>

                {/* Highlights */}
                <div className="mt-4 pt-3 border-t border-slate-100">
                  <span className="text-[11px] font-bold uppercase tracking-wider text-slate-600 block mb-2">
                    Key Frameworks Inside:
                  </span>
                  <ul className="space-y-1.5">
                    {resource.highlights.map((item, idx) => (
                      <li key={idx} className="flex items-start gap-1.5 text-xs text-slate-700">
                        <CheckCircle className="w-3.5 h-3.5 text-emerald-600 shrink-0 mt-0.5" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Download CTA */}
              <div className="mt-6 pt-4 border-t border-slate-100">
                <button
                  type="button"
                  onClick={() => onOpenResourceModal(resource)}
                  className="w-full inline-flex items-center justify-center gap-2 px-4 py-2.5 text-xs font-bold text-slate-950 bg-slate-100 hover:bg-slate-200 border border-slate-300 rounded-md transition-colors cursor-pointer"
                >
                  <Download className="w-3.5 h-3.5 text-amber-700" />
                  <span>Download Free Tool ({resource.fileFormat})</span>
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Enterprise Notice */}
        <div className="mt-12 text-center text-xs text-slate-500">
          All CCB playbooks are distributed under educational open-access licenses for registered Bharat business owners.
        </div>

      </div>
    </section>
  );
};
