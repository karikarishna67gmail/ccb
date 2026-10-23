import React, { useState } from 'react';
import {
  Menu,
  X,
  Compass,
  Calculator,
  PhoneCall,
  MessageSquare,
  ChevronRight,
  Shield,
  Layers,
  Sparkles,
  ArrowUp,
  FileText,
  HelpCircle,
} from 'lucide-react';
import { BRAND_INFO } from '../data/mockData';
import { ThemeSelector } from './ThemeSelector';

interface MobileNavigationProps {
  onSelectSection: (sectionId: string) => void;
  onOpenConsultation: () => void;
  onOpenLeadDesk: () => void;
}

export const MobileNavigation: React.FC<MobileNavigationProps> = ({
  onSelectSection,
  onOpenConsultation,
  onOpenLeadDesk,
}) => {
  const [drawerOpen, setDrawerOpen] = useState(false);

  const navLinks = [
    { label: 'Who We Help', id: 'who-we-help', icon: 'Compass' },
    { label: 'Growth Framework', id: 'framework', icon: 'Layers' },
    { label: 'Services & Verticals', id: 'services', icon: 'Sparkles' },
    { label: 'Programs & Pricing', id: 'programs', icon: 'FileText' },
    { label: '₹1 Cr Revenue Planner', id: 'revenue-planner', icon: 'Calculator' },
    { label: 'Case Studies', id: 'case-studies', icon: 'Shield' },
    { label: 'Resources & SOPs', id: 'resources', icon: 'FileText' },
    { label: 'About CCB', id: 'about', icon: 'Compass' },
    { label: 'Contact & FAQ', id: 'contact', icon: 'HelpCircle' },
  ];

  const handleNavClick = (id: string) => {
    setDrawerOpen(false);
    onSelectSection(id);
  };

  const whatsappMessage = encodeURIComponent(
    'Hello CCB Advisory Team, I would like to schedule a Business Growth Consultation.'
  );
  const whatsappUrl = `https://wa.me/${BRAND_INFO.whatsappNumber}?text=${whatsappMessage}`;

  return (
    <>
      {/* Fixed Sticky Mobile Bottom Navigation Bar (Visible on mobile/tablet: lg:hidden) */}
      <nav
        aria-label="Mobile Bottom Navigation"
        className="lg:hidden fixed bottom-0 left-0 right-0 z-40 bg-white/95 backdrop-blur-md border-t border-slate-200 shadow-[0_-4px_16px_rgba(0,0,0,0.06)] px-2 py-1.5 flex items-center justify-around safe-area-bottom"
      >
        {/* Button 1: Full Navigation Drawer */}
        <button
          type="button"
          onClick={() => setDrawerOpen(true)}
          className="flex flex-col items-center justify-center py-1 px-2 text-slate-700 active:text-amber-700 hover:text-slate-950 transition-colors focus:outline-none"
          aria-label="Open navigation menu"
        >
          <Menu className="w-5 h-5 text-slate-700" />
          <span className="text-[10px] font-bold mt-0.5 tracking-tight">Menu</span>
        </button>

        {/* Button 2: Growth Framework */}
        <button
          type="button"
          onClick={() => onSelectSection('framework')}
          className="flex flex-col items-center justify-center py-1 px-2 text-slate-700 active:text-amber-700 hover:text-slate-950 transition-colors focus:outline-none"
        >
          <Layers className="w-5 h-5 text-slate-700" />
          <span className="text-[10px] font-semibold mt-0.5 tracking-tight">Framework</span>
        </button>

        {/* Button 3: ₹1 Cr Planner */}
        <button
          type="button"
          onClick={() => onSelectSection('revenue-planner')}
          className="flex flex-col items-center justify-center py-1 px-2 text-slate-700 active:text-amber-700 hover:text-slate-950 transition-colors focus:outline-none"
        >
          <Calculator className="w-5 h-5 text-amber-700" />
          <span className="text-[10px] font-bold text-amber-800 mt-0.5 tracking-tight">₹1 Cr Tool</span>
        </button>

        {/* Button 4: WhatsApp Direct */}
        <a
          href={whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="flex flex-col items-center justify-center py-1 px-2 text-slate-700 active:text-emerald-700 hover:text-emerald-800 transition-colors focus:outline-none"
          aria-label="Chat on WhatsApp"
        >
          <MessageSquare className="w-5 h-5 text-emerald-600" />
          <span className="text-[10px] font-semibold mt-0.5 tracking-tight">WhatsApp</span>
        </a>

        {/* Button 5: Book Assessment (Primary CTA) */}
        <button
          type="button"
          onClick={onOpenConsultation}
          className="flex items-center gap-1.5 px-3 py-1.5 bg-slate-950 active:bg-slate-900 text-white rounded-md shadow-sm border border-slate-800 font-bold text-xs shrink-0"
        >
          <PhoneCall className="w-3.5 h-3.5 text-amber-400" />
          <span>Book</span>
        </button>
      </nav>

      {/* Slide-over Full Navigation Drawer */}
      {drawerOpen && (
        <div className="fixed inset-0 z-50 lg:hidden">
          {/* Backdrop */}
          <div
            className="fixed inset-0 bg-slate-950/70 backdrop-blur-sm transition-opacity"
            onClick={() => setDrawerOpen(false)}
          />

          {/* Drawer Window */}
          <div className="fixed inset-y-0 right-0 w-full max-w-xs sm:max-w-sm bg-white shadow-2xl flex flex-col justify-between overflow-y-auto animate-in slide-in-from-right duration-200">
            <div>
              {/* Drawer Header */}
              <div className="p-4 bg-slate-900 text-white flex items-center justify-between border-b border-slate-800">
                <div className="flex items-center gap-2.5">
                  <div className="w-8 h-8 rounded bg-slate-800 border border-amber-500/40 flex items-center justify-center text-amber-400 font-bold font-serif text-sm">
                    CCB
                  </div>
                  <div>
                    <span className="text-xs font-bold text-white block">
                      Coaching Community of Bharat
                    </span>
                    <span className="text-[10px] text-slate-400">
                      From Vision to ₹1 Crore
                    </span>
                  </div>
                </div>

                <button
                  type="button"
                  onClick={() => setDrawerOpen(false)}
                  className="p-1.5 rounded text-slate-400 hover:text-white hover:bg-slate-800"
                  aria-label="Close menu"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Quick Action in Drawer */}
              <div className="p-3 bg-amber-50/70 border-b border-amber-200/60 flex items-center justify-between">
                <span className="text-xs font-bold text-amber-900">
                  Quick Navigation
                </span>
                <button
                  onClick={() => {
                    setDrawerOpen(false);
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                  }}
                  className="flex items-center gap-1 text-[11px] text-amber-800 font-semibold"
                >
                  <ArrowUp className="w-3 h-3" />
                  <span>Top of Page</span>
                </button>
              </div>

              {/* Navigation Links */}
              <div className="p-3 divide-y divide-slate-100">
                {navLinks.map((link) => (
                  <button
                    key={link.id}
                    type="button"
                    onClick={() => handleNavClick(link.id)}
                    className="w-full flex items-center justify-between py-3 px-2 text-left text-xs font-semibold text-slate-800 hover:text-amber-800 hover:bg-slate-50 rounded transition-colors"
                  >
                    <span>{link.label}</span>
                    <ChevronRight className="w-4 h-4 text-slate-400" />
                  </button>
                ))}
              </div>
            </div>

            {/* Drawer Bottom Actions */}
            <div className="p-4 bg-slate-50 border-t border-slate-200 space-y-2.5 mb-14">
              {/* Theme Selector Row */}
              <div className="flex items-center justify-between p-2 rounded-lg bg-white border border-slate-200 shadow-2xs">
                <span className="text-xs font-semibold text-slate-800">
                  Select Theme:
                </span>
                <ThemeSelector />
              </div>

              <button
                type="button"
                onClick={() => {
                  setDrawerOpen(false);
                  onOpenLeadDesk();
                }}
                className="w-full flex items-center justify-center gap-2 px-3 py-2 text-xs font-bold text-slate-800 bg-white hover:bg-slate-100 border border-slate-300 rounded-md shadow-xs"
              >
                <Shield className="w-3.5 h-3.5 text-amber-700" />
                <span>Consultant Lead Desk (Vault)</span>
              </button>

              <button
                type="button"
                onClick={() => {
                  setDrawerOpen(false);
                  onOpenConsultation();
                }}
                className="w-full flex items-center justify-center gap-2 px-4 py-2.5 text-xs font-bold text-white bg-slate-950 hover:bg-slate-900 rounded-md shadow-sm"
              >
                <PhoneCall className="w-3.5 h-3.5 text-amber-400" />
                <span>Book Business Assessment</span>
              </button>

              <p className="text-center text-[10px] text-slate-500 pt-1">
                Advisory Desk: {BRAND_INFO.contactPhone}
              </p>
            </div>

          </div>
        </div>
      )}
    </>
  );
};
