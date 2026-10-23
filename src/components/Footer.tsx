import React from 'react';
import { Shield, Lock, FileText, ChevronRight, PhoneCall, Heart } from 'lucide-react';
import { BRAND_INFO } from '../data/mockData';

interface FooterProps {
  onOpenPrivacy: () => void;
  onOpenTerms: () => void;
  onOpenConsultantDesk: () => void;
  onSelectSection: (sectionId: string) => void;
  onOpenConsultation: () => void;
}

export const Footer: React.FC<FooterProps> = ({
  onOpenPrivacy,
  onOpenTerms,
  onOpenConsultantDesk,
  onSelectSection,
  onOpenConsultation,
}) => {
  return (
    <footer className="bg-slate-950 text-slate-400 text-xs border-t border-slate-900">
      
      {/* Pre-Footer Action Banner */}
      <div className="bg-gradient-to-r from-slate-900 via-slate-950 to-slate-900 border-b border-slate-800/80 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <span className="text-amber-400 font-bold uppercase tracking-wider text-[11px]">
              Ready to Scale Beyond Erratic Monthly Revenue?
            </span>
            <h3 className="text-2xl sm:text-3xl font-extrabold text-white mt-1">
              Begin Your Journey to ₹1 Crore with Tested Systems.
            </h3>
            <p className="text-slate-400 text-xs sm:text-sm mt-1 max-w-2xl">
              Book a 45-minute confidential growth consultation to audit your unit economics, packaging, and acquisition funnels.
            </p>
          </div>

          <div className="flex items-center gap-3 shrink-0">
            <button
              type="button"
              onClick={onOpenConsultation}
              className="inline-flex items-center gap-2 px-6 py-3.5 text-xs sm:text-sm font-bold text-slate-950 bg-amber-400 hover:bg-amber-300 rounded-md shadow transition-colors cursor-pointer"
            >
              <PhoneCall className="w-4 h-4 text-slate-950" />
              <span>Book a Consultation</span>
            </button>
          </div>
        </div>
      </div>

      {/* Main Footer Links */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10">
          
          {/* Brand Info (Col 1-4) */}
          <div className="lg:col-span-4 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-lg bg-slate-900 border border-amber-600/40 flex items-center justify-center text-amber-400 font-bold text-base font-serif">
                CCB
              </div>
              <span className="text-base font-bold text-white tracking-tight">
                Coaching Community of Bharat
              </span>
            </div>

            <p className="text-slate-400 leading-relaxed text-xs">
              {BRAND_INFO.positioning}. We partner with ambitious Indian entrepreneurs, coaches, trainers, and startups to build sustainable sales engines and operational excellence.
            </p>

            <div className="pt-2 text-[11px] text-slate-500 space-y-1">
              <p>DLF Cyber Hub, Gurugram, Haryana · Indiranagar, Bengaluru</p>
              <p>Advisory Line: {BRAND_INFO.contactPhone}</p>
              <p>Official Desk: {BRAND_INFO.contactEmail}</p>
            </div>
          </div>

          {/* Quick Navigation (Col 5-7) */}
          <div className="lg:col-span-3 space-y-3">
            <span className="text-xs font-bold uppercase tracking-wider text-white block">
              Core Navigation
            </span>
            <ul className="space-y-2 text-xs">
              <li>
                <button
                  onClick={() => onSelectSection('who-we-help')}
                  className="hover:text-amber-400 transition-colors cursor-pointer"
                >
                  Who We Help (6 Profiles)
                </button>
              </li>
              <li>
                <button
                  onClick={() => onSelectSection('framework')}
                  className="hover:text-amber-400 transition-colors cursor-pointer"
                >
                  The 6-Step Growth Framework
                </button>
              </li>
              <li>
                <button
                  onClick={() => onSelectSection('services')}
                  className="hover:text-amber-400 transition-colors cursor-pointer"
                >
                  Consulting Services & Verticals
                </button>
              </li>
              <li>
                <button
                  onClick={() => onSelectSection('programs')}
                  className="hover:text-amber-400 transition-colors cursor-pointer"
                >
                  Programs & Transparent Pricing
                </button>
              </li>
              <li>
                <button
                  onClick={() => onSelectSection('revenue-planner')}
                  className="hover:text-amber-400 transition-colors cursor-pointer"
                >
                  ₹1 Crore Revenue Planner Tool
                </button>
              </li>
            </ul>
          </div>

          {/* Resources & Case Studies (Col 8-10) */}
          <div className="lg:col-span-3 space-y-3">
            <span className="text-xs font-bold uppercase tracking-wider text-white block">
              Knowledge & Evidence
            </span>
            <ul className="space-y-2 text-xs">
              <li>
                <button
                  onClick={() => onSelectSection('case-studies')}
                  className="hover:text-amber-400 transition-colors cursor-pointer"
                >
                  Verified Case Study Files
                </button>
              </li>
              <li>
                <button
                  onClick={() => onSelectSection('resources')}
                  className="hover:text-amber-400 transition-colors cursor-pointer"
                >
                  Downloadable SOPs & Workbooks
                </button>
              </li>
              <li>
                <button
                  onClick={() => onSelectSection('about')}
                  className="hover:text-amber-400 transition-colors cursor-pointer"
                >
                  About CCB & Mission
                </button>
              </li>
              <li>
                <button
                  onClick={() => onSelectSection('contact')}
                  className="hover:text-amber-400 transition-colors cursor-pointer"
                >
                  FAQ & Advisory Desk
                </button>
              </li>
              <li>
                <button
                  onClick={() => onSelectSection('assessment')}
                  className="hover:text-amber-400 transition-colors cursor-pointer"
                >
                  Free Growth Assessment
                </button>
              </li>
            </ul>
          </div>

          {/* Admin Vault / Consultant Desk (Col 11-12) */}
          <div className="lg:col-span-2 space-y-3">
            <span className="text-xs font-bold uppercase tracking-wider text-white block">
              Internal Portal
            </span>
            <p className="text-[11px] text-slate-500 leading-relaxed">
              For CCB advisory fellows and program managers to review incoming assessments.
            </p>
            <button
              type="button"
              onClick={onOpenConsultantDesk}
              className="inline-flex items-center gap-1.5 px-3 py-2 text-xs font-bold text-slate-300 hover:text-white bg-slate-900 hover:bg-slate-800 border border-slate-800 rounded-md transition-colors cursor-pointer"
            >
              <Shield className="w-3.5 h-3.5 text-amber-500" />
              <span>Consultant Lead Desk</span>
            </button>
          </div>

        </div>

        {/* Disclaimer Bar */}
        <div className="mt-12 pt-8 border-t border-slate-900 text-[11px] text-slate-400 leading-relaxed space-y-2">
          <p>
            <strong>Consulting Ethics & Professional Scope Disclaimer: </strong>
            Coaching Community of Bharat provides strategic consulting, mentorship, standard operating procedures, and sales process design. We do not provide financial investment products, securities advice, or promise guaranteed monetary returns. Client business success is subject to market demand, operational dedication, and execution discipline.
          </p>
        </div>

        {/* Bottom Line */}
        <div className="mt-8 pt-6 border-t border-slate-900/60 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-400">
          <div>
            © {new Date().getFullYear()} Coaching Community of Bharat. All rights reserved.
          </div>

          <div className="flex items-center gap-4">
            <button
              type="button"
              onClick={onOpenPrivacy}
              className="hover:text-white transition-colors cursor-pointer"
            >
              Privacy Policy
            </button>
            <span>·</span>
            <button
              type="button"
              onClick={onOpenTerms}
              className="hover:text-white transition-colors cursor-pointer"
            >
              Terms of Consulting
            </button>
            <span>·</span>
            <span className="text-slate-400">Built for Bharat's Entrepreneurs</span>
          </div>
        </div>

      </div>
    </footer>
  );
};
