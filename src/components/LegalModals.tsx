import React from 'react';
import { X, ShieldCheck, FileText, Scale } from 'lucide-react';
import { BRAND_INFO } from '../data/mockData';

interface LegalModalProps {
  type: 'privacy' | 'terms' | null;
  onClose: () => void;
}

export const LegalModals: React.FC<LegalModalProps> = ({ type, onClose }) => {
  if (!type) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      {/* Backdrop */}
      <div className="fixed inset-0 bg-slate-950/70 backdrop-blur-sm" onClick={onClose} />

      {/* Modal Dialog */}
      <div className="relative w-full max-w-2xl bg-white rounded-2xl shadow-2xl border border-slate-300 overflow-hidden max-h-[85vh] flex flex-col">
        
        {/* Header */}
        <div className="px-6 py-4 bg-slate-900 text-white flex items-center justify-between border-b border-slate-800">
          <div className="flex items-center gap-2.5">
            {type === 'privacy' ? (
              <ShieldCheck className="w-5 h-5 text-amber-400" />
            ) : (
              <Scale className="w-5 h-5 text-amber-400" />
            )}
            <h3 className="text-base font-bold text-white">
              {type === 'privacy'
                ? 'CCB Data Privacy & NDA Protocol'
                : 'Terms of Business Consulting & Advisory Engagement'}
            </h3>
          </div>
          <button
            type="button"
            onClick={onClose}
            className="p-1 rounded text-slate-400 hover:text-white hover:bg-slate-800 cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Scrollable Body */}
        <div className="p-6 sm:p-8 overflow-y-auto text-xs sm:text-sm text-slate-700 space-y-4 leading-relaxed">
          {type === 'privacy' ? (
            <>
              <p>
                <strong>Effective Date:</strong> January 2026 · Coaching Community of Bharat (CCB)
              </p>

              <h4 className="font-bold text-slate-950 text-sm mt-4">
                1. Purpose of Data Collection
              </h4>
              <p>
                Information provided through our Business Growth Assessment, consultation request forms, and ₹1 Crore Revenue Planner is gathered solely to diagnose unit economics, evaluate business bottlenecks, and schedule strategy discussions with our qualified mentors.
              </p>

              <h4 className="font-bold text-slate-950 text-sm mt-4">
                2. Non-Disclosure & Business Confidentiality
              </h4>
              <p>
                We treat all client revenue figures, operational workflows, customer lists, and proprietary trade strategies under strict commercial non-disclosure guidelines. We do not sell, rent, or trade your contact information or commercial records to any third-party marketing agency or data broker.
              </p>

              <h4 className="font-bold text-slate-950 text-sm mt-4">
                3. Communications & WhatsApp Policy
              </h4>
              <p>
                By requesting an assessment, you consent to receive direct appointment confirmations, diagnostic briefings, and relevant strategic updates via WhatsApp, phone, and business email. You may opt out or request complete data deletion at any time by contacting{' '}
                <span className="font-mono text-amber-800">{BRAND_INFO.contactEmail}</span>.
              </p>

              <h4 className="font-bold text-slate-950 text-sm mt-4">
                4. Compliance with Indian Law
              </h4>
              <p>
                This privacy charter conforms with the Information Technology Act, 2000 and the Digital Personal Data Protection (DPDP) standards of Bharat.
              </p>
            </>
          ) : (
            <>
              <p>
                <strong>Terms of Consulting & Strategic Advisory:</strong>
              </p>

              <h4 className="font-bold text-slate-950 text-sm mt-4">
                1. Professional Scope of Advisory Services
              </h4>
              <p>
                Coaching Community of Bharat provides strategic business consulting, sales pipeline recommendations, Standard Operating Procedure (SOP) blueprints, and 1-on-1 mentorship. We do not offer financial investment advice, securities underwriting, or wealth management products.
              </p>

              <h4 className="font-bold text-slate-950 text-sm mt-4">
                2. Consulting Fee Structure
              </h4>
              <p>
                Program fees (₹15,000 for Business Clarity, ₹25,000 for Business Growth, and ₹35,000 for Business Scale) are consulting fees for professional advisory time, strategic reviews, and custom deliverables. All fees are denominated in Indian Rupees (INR) and are payable prior to the initiation of advisory sessions.
              </p>

              <h4 className="font-bold text-slate-950 text-sm mt-4">
                3. Non-Guarantee of Financial Earnings
              </h4>
              <p>
                Business results depend fundamentally upon your internal execution velocity, product-market fit, sales competence, and macroeconomic market dynamics. CCB does not guarantee specific monetary returns, revenue multiples, or client acquisition numbers.
              </p>

              <h4 className="font-bold text-slate-950 text-sm mt-4">
                4. Intellectual Property
              </h4>
              <p>
                All templates, SOP worksheets, and calculators provided by CCB are licensed for your business's internal operational use. Redistribution or commercial resale of CCB toolkits is strictly prohibited.
              </p>
            </>
          )}
        </div>

        {/* Footer */}
        <div className="px-6 py-4 bg-slate-50 border-t border-slate-200 flex justify-end">
          <button
            type="button"
            onClick={onClose}
            className="px-5 py-2 text-xs font-bold text-white bg-slate-950 hover:bg-slate-900 rounded-md cursor-pointer"
          >
            Understood & Close
          </button>
        </div>

      </div>
    </div>
  );
};
