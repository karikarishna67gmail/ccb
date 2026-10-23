import React, { useState } from 'react';
import {
  MessageSquare,
  Mail,
  Phone,
  MapPin,
  Clock,
  ChevronDown,
  ArrowRight,
  ExternalLink,
  Shield,
  Linkedin,
  Youtube,
  Send,
} from 'lucide-react';
import { BRAND_INFO, FAQS } from '../data/mockData';

interface ContactSectionProps {
  onOpenConsultationModal: () => void;
}

export const ContactSection: React.FC<ContactSectionProps> = ({
  onOpenConsultationModal,
}) => {
  const [openFaqId, setOpenFaqId] = useState<string | null>(FAQS[0].id);

  const toggleFaq = (id: string) => {
    setOpenFaqId(openFaqId === id ? null : id);
  };

  const whatsappMessage = encodeURIComponent(
    'Hello CCB Advisory Team, I would like to schedule a Business Growth Consultation regarding scaling to ₹1 Crore.'
  );

  const whatsappUrl = `https://wa.me/${BRAND_INFO.whatsappNumber}?text=${whatsappMessage}`;

  return (
    <section id="contact" className="py-20 bg-slate-50 border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto">
          <div className="text-xs font-bold uppercase tracking-wider text-amber-700 mb-2">
            Advisory Desk & Direct Communication
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-950 tracking-tight">
            Connect With Our Business Mentors
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-600 leading-relaxed">
            Have questions about program suitability, unit economics audits, or execution roadmaps? We are here to support your growth.
          </p>
        </div>

        {/* Two-Column Grid: Contact Channels & FAQ Accordion */}
        <div className="mt-14 grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          
          {/* Left Column: Direct Contact Info & WhatsApp */}
          <div className="lg:col-span-5 space-y-6">
            
            {/* WhatsApp Quick Action Card */}
            <div className="rounded-xl border border-emerald-200 bg-emerald-50/70 p-6 sm:p-7">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-10 h-10 rounded-lg bg-emerald-600 text-white flex items-center justify-center">
                  <MessageSquare className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-[11px] font-bold uppercase tracking-wider text-emerald-800">
                    Fastest Response Channel
                  </span>
                  <h3 className="text-base font-bold text-slate-950">
                    WhatsApp Business Advisory
                  </h3>
                </div>
              </div>
              <p className="text-xs text-slate-700 leading-relaxed">
                Connect directly with our advisory desk for rapid queries about program deliverables, consultation schedules, and intake criteria.
              </p>
              <div className="mt-5">
                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full inline-flex items-center justify-center gap-2 px-5 py-3 text-xs font-bold text-white bg-emerald-700 hover:bg-emerald-800 rounded-md shadow-sm transition-colors"
                >
                  <MessageSquare className="w-4 h-4" />
                  <span>Chat on WhatsApp ({BRAND_INFO.contactPhone})</span>
                  <ExternalLink className="w-3.5 h-3.5 ml-1" />
                </a>
              </div>
            </div>

            {/* Structured Channels Card */}
            <div className="rounded-xl border border-slate-200 bg-white p-6 sm:p-7 space-y-5 shadow-xs">
              <h3 className="text-sm font-bold text-slate-950 uppercase tracking-wider border-b border-slate-100 pb-3">
                Official Business Information
              </h3>

              <div className="flex items-start gap-3 text-xs text-slate-700">
                <Mail className="w-4 h-4 text-amber-700 shrink-0 mt-0.5" />
                <div>
                  <span className="font-bold text-slate-900 block">Business Email</span>
                  <a
                    href={`mailto:${BRAND_INFO.contactEmail}`}
                    className="text-amber-800 hover:underline font-mono"
                  >
                    {BRAND_INFO.contactEmail}
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-3 text-xs text-slate-700">
                <Phone className="w-4 h-4 text-amber-700 shrink-0 mt-0.5" />
                <div>
                  <span className="font-bold text-slate-900 block">Advisory Desk Phone</span>
                  <span className="font-mono text-slate-800">{BRAND_INFO.contactPhone}</span>
                </div>
              </div>

              <div className="flex items-start gap-3 text-xs text-slate-700">
                <MapPin className="w-4 h-4 text-amber-700 shrink-0 mt-0.5" />
                <div>
                  <span className="font-bold text-slate-900 block">Locations (Advisory Hubs)</span>
                  <span>{BRAND_INFO.address}</span>
                </div>
              </div>

              <div className="flex items-start gap-3 text-xs text-slate-700">
                <Clock className="w-4 h-4 text-amber-700 shrink-0 mt-0.5" />
                <div>
                  <span className="font-bold text-slate-900 block">Working Hours</span>
                  <span>{BRAND_INFO.operatingHours}</span>
                </div>
              </div>

              {/* Social Media Links */}
              <div className="pt-4 border-t border-slate-100">
                <span className="text-[11px] font-bold uppercase tracking-wider text-slate-600 block mb-2.5">
                  Official Channels & Thought Leadership
                </span>
                <div className="flex items-center gap-3">
                  <a
                    href="https://linkedin.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 rounded bg-slate-100 hover:bg-slate-200 text-slate-700 hover:text-slate-950 transition-colors"
                    title="LinkedIn"
                  >
                    <Linkedin className="w-4 h-4" />
                  </a>
                  <a
                    href="https://youtube.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 rounded bg-slate-100 hover:bg-slate-200 text-slate-700 hover:text-slate-950 transition-colors"
                    title="YouTube Channel"
                  >
                    <Youtube className="w-4 h-4" />
                  </a>
                  <a
                    href={whatsappUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 rounded bg-slate-100 hover:bg-slate-200 text-emerald-700 hover:text-emerald-800 transition-colors"
                    title="WhatsApp Channel"
                  >
                    <MessageSquare className="w-4 h-4" />
                  </a>
                </div>
              </div>

              {/* Direct Booking CTA */}
              <div className="pt-2">
                <button
                  type="button"
                  onClick={onOpenConsultationModal}
                  className="w-full inline-flex items-center justify-center gap-2 px-4 py-3 text-xs font-bold text-white bg-slate-950 hover:bg-slate-900 rounded-md transition-colors cursor-pointer"
                >
                  <span>Book Your Business Growth Assessment</span>
                  <ArrowRight className="w-3.5 h-3.5 text-amber-400" />
                </button>
              </div>
            </div>

          </div>

          {/* Right Column: Frequently Asked Questions Accordion */}
          <div className="lg:col-span-7">
            <div className="rounded-xl border border-slate-200 bg-white p-6 sm:p-8 shadow-xs">
              <div className="flex items-center justify-between border-b border-slate-200 pb-4 mb-6">
                <div>
                  <span className="text-xs font-bold uppercase tracking-wider text-amber-700">
                    Clarity & Policies
                  </span>
                  <h3 className="text-xl font-bold text-slate-950">
                    Frequently Asked Questions
                  </h3>
                </div>
                <span className="text-xs text-slate-500">
                  {FAQS.length} Articles
                </span>
              </div>

              <div className="divide-y divide-slate-100">
                {FAQS.map((faq) => {
                  const isOpen = openFaqId === faq.id;
                  return (
                    <div key={faq.id} className="py-4">
                      <button
                        type="button"
                        onClick={() => toggleFaq(faq.id)}
                        className="w-full flex items-start justify-between gap-4 text-left group focus:outline-none cursor-pointer"
                      >
                        <span className="text-sm font-bold text-slate-900 group-hover:text-amber-800 transition-colors">
                          {faq.question}
                        </span>
                        <ChevronDown
                          className={`w-4 h-4 text-slate-500 shrink-0 mt-0.5 transition-transform duration-200 ${
                            isOpen ? 'rotate-180 text-amber-700' : ''
                          }`}
                        />
                      </button>

                      {isOpen && (
                        <div className="mt-3 text-xs sm:text-sm text-slate-600 leading-relaxed pr-6 animate-fadeIn">
                          {faq.answer}
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>

              {/* Consultation Prompt */}
              <div className="mt-8 pt-6 border-t border-slate-100 flex items-center justify-between text-xs text-slate-600">
                <span>Have a specific inquiry not listed here?</span>
                <button
                  type="button"
                  onClick={onOpenConsultationModal}
                  className="font-bold text-amber-800 hover:underline cursor-pointer"
                >
                  Talk to a Business Mentor →
                </button>
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
