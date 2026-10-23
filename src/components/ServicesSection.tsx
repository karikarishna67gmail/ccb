import React, { useState } from 'react';
import {
  LineChart,
  Target,
  Briefcase,
  GraduationCap,
  Cpu,
  Layers,
  CheckCircle,
  ArrowRight,
  HelpCircle,
} from 'lucide-react';
import { SERVICES } from '../data/mockData';
import { ServiceVertical } from '../types';

interface ServicesSectionProps {
  onDiscussService: (serviceTitle: string) => void;
}

export const ServicesSection: React.FC<ServicesSectionProps> = ({
  onDiscussService,
}) => {
  const [selectedServiceId, setSelectedServiceId] = useState<string>(SERVICES[0].id);

  const getServiceIcon = (iconName: string) => {
    switch (iconName) {
      case 'LineChart':
        return <LineChart className="w-5 h-5" />;
      case 'Target':
        return <Target className="w-5 h-5" />;
      case 'Briefcase':
        return <Briefcase className="w-5 h-5" />;
      case 'GraduationCap':
        return <GraduationCap className="w-5 h-5" />;
      case 'Cpu':
        return <Cpu className="w-5 h-5" />;
      case 'Layers':
        return <Layers className="w-5 h-5" />;
      default:
        return <Briefcase className="w-5 h-5" />;
    }
  };

  return (
    <section id="services" className="py-20 bg-white border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto">
          <div className="text-xs font-bold uppercase tracking-wider text-amber-700 mb-2">
            Advisory & Execution Capabilities
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-950 tracking-tight">
            Our Services
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-600 leading-relaxed">
            Targeted consulting disciplines engineered to remove revenue bottlenecks, install reliable sales engines, and unlock enterprise value.
          </p>
        </div>

        {/* 6 Services Grid */}
        <div className="mt-14 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {SERVICES.map((service, index) => {
            const letter = String.fromCharCode(65 + index); // A, B, C, D, E, F
            return (
              <div
                key={service.id}
                className="flex flex-col justify-between rounded-xl border border-slate-200 bg-white hover:border-slate-300 hover:shadow-lg transition-all duration-200 p-6 sm:p-7"
              >
                <div>
                  {/* Top Bar */}
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-10 h-10 rounded-lg bg-slate-950 text-amber-400 flex items-center justify-center">
                      {getServiceIcon(service.iconName)}
                    </div>
                    <span className="text-xs font-mono font-bold text-slate-600">
                      SERVICE {letter}
                    </span>
                  </div>

                  {/* Title & Short Summary */}
                  <h3 className="text-xl font-bold text-slate-950 tracking-tight">
                    {service.title}
                  </h3>
                  <p className="mt-2 text-xs sm:text-sm text-slate-600 leading-relaxed">
                    {service.shortSummary}
                  </p>

                  {/* Deliverables List */}
                  <div className="mt-5 pt-4 border-t border-slate-100">
                    <span className="text-[11px] font-bold uppercase tracking-wider text-slate-600 block mb-3">
                      Included Work Streams
                    </span>
                    <ul className="space-y-2">
                      {service.deliverables.map((item, i) => (
                        <li key={i} className="flex items-start gap-2 text-xs text-slate-700">
                          <CheckCircle className="w-3.5 h-3.5 text-amber-700 shrink-0 mt-0.5" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Bottom Impact & CTA */}
                <div className="mt-6 pt-4 border-t border-slate-100">
                  <div className="text-[11px] text-slate-600 mb-3 bg-slate-50 p-2.5 rounded border border-slate-200">
                    <span className="font-semibold text-slate-900">Outcome: </span>
                    {service.outcomeFocus}
                  </div>

                  <button
                    type="button"
                    onClick={() => onDiscussService(service.title)}
                    className="w-full inline-flex items-center justify-center gap-2 px-4 py-2.5 text-xs font-bold text-slate-950 bg-slate-100 hover:bg-slate-200 hover:text-slate-950 border border-slate-300 rounded-md transition-colors cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-amber-500"
                  >
                    <span>Discuss Your Business Needs</span>
                    <ArrowRight className="w-3.5 h-3.5 text-amber-700" />
                  </button>
                </div>
              </div>
            );
          })}
        </div>

        {/* Advisory Consultation Banner */}
        <div className="mt-14 p-6 sm:p-8 rounded-xl bg-slate-900 text-white flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <span className="text-xs font-bold text-amber-400 uppercase tracking-wider">
              Need Multi-Disciplinary Consulting?
            </span>
            <h4 className="text-xl sm:text-2xl font-bold mt-1">
              Combine Strategy, Sales Systems, and AI into an Integrated Roadmap
            </h4>
            <p className="mt-1 text-xs sm:text-sm text-slate-300">
              Most businesses scaling to ₹1 Crore require an interconnected approach across offer pricing, lead generation, and SOP automation.
            </p>
          </div>
          <button
            type="button"
            onClick={() => onDiscussService('Integrated Business Scaling Advisory')}
            className="shrink-0 inline-flex items-center gap-2 px-5 py-3 text-xs sm:text-sm font-bold text-slate-950 bg-amber-400 hover:bg-amber-300 rounded-md shadow transition-colors cursor-pointer"
          >
            <span>Request Integrated Assessment</span>
            <ArrowRight className="w-4 h-4 text-slate-950" />
          </button>
        </div>

      </div>
    </section>
  );
};
