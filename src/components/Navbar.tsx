import React, { useState, useEffect } from 'react';
import { Menu, X, PhoneCall, Shield, ChevronRight } from 'lucide-react';
import { LeadStorageService } from '../services/leadService';

interface NavbarProps {
  onOpenConsultation: () => void;
  onOpenLeadDesk: () => void;
  onSelectSection: (sectionId: string) => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  onOpenConsultation,
  onOpenLeadDesk,
  onSelectSection,
}) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [leadCount, setLeadCount] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    
    // Read current stored leads count
    const leads = LeadStorageService.getLeads();
    setLeadCount(leads.length);

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Who We Help', id: 'who-we-help' },
    { label: 'Growth Framework', id: 'framework' },
    { label: 'Services', id: 'services' },
    { label: 'Programs & Pricing', id: 'programs' },
    { label: '₹1 Cr Planner', id: 'revenue-planner' },
    { label: 'Case Studies', id: 'case-studies' },
    { label: 'Resources', id: 'resources' },
    { label: 'About CCB', id: 'about' },
    { label: 'Contact', id: 'contact' },
  ];

  const handleLinkClick = (id: string) => {
    setMobileMenuOpen(false);
    onSelectSection(id);
  };

  return (
    <>
      <header
        className={`sticky top-0 z-40 w-full transition-all duration-200 ${
          isScrolled
            ? 'bg-white/95 backdrop-blur-md shadow-sm border-b border-slate-200/80 py-3'
            : 'bg-white border-b border-slate-100 py-4'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            {/* Brand Logo & Name */}
            <a
              href="#"
              onClick={(e) => {
                e.preventDefault();
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              className="flex items-center gap-3.5 group focus:outline-none focus-visible:ring-2 focus-visible:ring-amber-500 rounded-lg p-1"
            >
              {/* CCB Crest */}
              <div className="w-10 h-10 rounded-lg bg-slate-900 border border-amber-600/40 flex items-center justify-center text-amber-400 font-bold text-lg tracking-wider shadow-sm group-hover:border-amber-500 transition-colors">
                <span className="font-serif">CCB</span>
              </div>
              <div className="flex flex-col">
                <span className="text-base sm:text-lg font-bold text-slate-950 tracking-tight leading-none group-hover:text-amber-800 transition-colors">
                  Coaching Community of Bharat
                </span>
                <span className="text-[11px] text-slate-500 font-medium tracking-normal mt-1 hidden sm:block">
                  From Business Vision to Your First ₹1 Crore
                </span>
              </div>
            </a>

            {/* Desktop Navigation */}
            <nav className="hidden xl:flex items-center gap-6">
              {navLinks.map((link) => (
                <button
                  key={link.id}
                  onClick={() => handleLinkClick(link.id)}
                  className="text-sm font-medium text-slate-700 hover:text-slate-950 hover:underline underline-offset-8 decoration-amber-500 decoration-2 transition-all cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-amber-500 rounded"
                >
                  {link.label}
                </button>
              ))}
            </nav>

            {/* Right Action Buttons */}
            <div className="flex items-center gap-2 sm:gap-3">
              {/* Lead Desk / Consultant Vault */}
              <button
                onClick={onOpenLeadDesk}
                title="Open Consultant Lead Desk (Admin Vault)"
                className="hidden sm:inline-flex items-center gap-1.5 px-3 py-2 text-xs font-semibold text-slate-700 hover:text-slate-900 bg-slate-100 hover:bg-slate-200 border border-slate-300 rounded-md transition-colors cursor-pointer"
              >
                <Shield className="w-3.5 h-3.5 text-amber-700" />
                <span>Lead Desk</span>
                {leadCount > 0 && (
                  <span className="text-[11px] font-bold text-slate-600 ml-0.5">
                    ({leadCount})
                  </span>
                )}
              </button>

              {/* Book Consultation Primary CTA */}
              <button
                onClick={onOpenConsultation}
                className="hidden sm:inline-flex items-center justify-center gap-2 px-3.5 sm:px-4 py-2 sm:py-2.5 text-xs sm:text-sm font-semibold text-white bg-slate-950 hover:bg-slate-900 active:bg-slate-900 border border-slate-800 hover:border-amber-500 rounded-md shadow-sm transition-all cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-amber-500"
              >
                <PhoneCall className="w-3.5 h-3.5 text-amber-400" />
                <span className="whitespace-nowrap">Book Consultation</span>
              </button>

              {/* Mobile Navigation Button (Clear, prominent button with icon & text) */}
              <button
                type="button"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="xl:hidden inline-flex items-center gap-1.5 px-3 py-2 rounded-md text-xs font-bold text-slate-800 hover:text-slate-950 bg-slate-100 hover:bg-slate-200 border border-slate-300 shadow-xs focus:outline-none focus:ring-2 focus:ring-amber-500 cursor-pointer"
                aria-label="Toggle mobile navigation menu"
              >
                {mobileMenuOpen ? (
                  <>
                    <X className="w-4 h-4 text-slate-900" />
                    <span>Close</span>
                  </>
                ) : (
                  <>
                    <Menu className="w-4 h-4 text-amber-700" />
                    <span>Menu</span>
                  </>
                )}
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Menu Drawer */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-50 xl:hidden">
          {/* Backdrop */}
          <div
            className="fixed inset-0 bg-slate-900/60 backdrop-blur-sm transition-opacity"
            onClick={() => setMobileMenuOpen(false)}
          />

          {/* Drawer content */}
          <div className="fixed inset-y-0 right-0 w-full max-w-sm bg-white shadow-2xl p-6 flex flex-col justify-between overflow-y-auto">
            <div>
              <div className="flex items-center justify-between pb-4 border-b border-slate-200">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-lg bg-slate-900 flex items-center justify-center text-amber-400 font-bold text-sm">
                    CCB
                  </div>
                  <span className="text-sm font-bold text-slate-900">
                    Menu Navigation
                  </span>
                </div>
                <button
                  onClick={() => setMobileMenuOpen(false)}
                  className="p-1.5 rounded-md text-slate-500 hover:text-slate-800 hover:bg-slate-100"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              <div className="mt-4 flex flex-col divide-y divide-slate-100">
                {navLinks.map((link) => (
                  <button
                    key={link.id}
                    onClick={() => handleLinkClick(link.id)}
                    className="flex items-center justify-between py-3.5 text-left text-sm font-medium text-slate-800 hover:text-amber-800 transition-colors"
                  >
                    <span>{link.label}</span>
                    <ChevronRight className="w-4 h-4 text-slate-400" />
                  </button>
                ))}
              </div>
            </div>

            <div className="pt-6 border-t border-slate-200 space-y-3">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenLeadDesk();
                }}
                className="w-full flex items-center justify-center gap-2 px-4 py-2.5 text-xs font-semibold text-slate-800 bg-slate-100 hover:bg-slate-200 border border-slate-200 rounded-md"
              >
                <Shield className="w-4 h-4 text-amber-700" />
                <span>Consultant Lead Desk ({leadCount})</span>
              </button>

              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenConsultation();
                }}
                className="w-full flex items-center justify-center gap-2 px-4 py-3 text-sm font-semibold text-white bg-slate-950 hover:bg-slate-900 rounded-md shadow"
              >
                <PhoneCall className="w-4 h-4 text-amber-400" />
                <span>Book a Consultation</span>
              </button>

              <p className="text-center text-xs text-slate-500 pt-2">
                Coaching Community of Bharat · DLF Cyber Hub & Bengaluru
              </p>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
