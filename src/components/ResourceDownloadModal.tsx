import React, { useState } from 'react';
import { X, Download, CheckCircle, FileText, Printer, ShieldCheck } from 'lucide-react';
import { DownloadableResource } from '../types';

interface ResourceDownloadModalProps {
  resource: DownloadableResource | null;
  onClose: () => void;
}

export const ResourceDownloadModal: React.FC<ResourceDownloadModalProps> = ({
  resource,
  onClose,
}) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [consent, setConsent] = useState(true);
  const [isUnlocked, setIsUnlocked] = useState(false);

  if (!resource) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim() || !email.trim()) return;
    setIsUnlocked(true);
  };

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      {/* Backdrop */}
      <div className="fixed inset-0 bg-slate-950/70 backdrop-blur-sm" onClick={onClose} />

      {/* Modal Dialog */}
      <div className="relative w-full max-w-xl bg-white rounded-2xl shadow-2xl border border-slate-200 overflow-hidden max-h-[90vh] flex flex-col">
        
        {/* Header */}
        <div className="px-6 py-4 bg-slate-900 text-white flex items-center justify-between border-b border-slate-800">
          <div className="flex items-center gap-2.5">
            <div className="w-8 h-8 rounded bg-amber-500/20 text-amber-400 flex items-center justify-center">
              <FileText className="w-4 h-4" />
            </div>
            <div>
              <span className="text-[10px] font-bold uppercase tracking-wider text-amber-400">
                {resource.category} · {resource.type}
              </span>
              <h3 className="text-base font-bold text-white truncate max-w-xs sm:max-w-sm">
                {resource.title}
              </h3>
            </div>
          </div>
          <button
            type="button"
            onClick={onClose}
            className="p-1 rounded text-slate-400 hover:text-white hover:bg-slate-800 cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content */}
        <div className="p-6 overflow-y-auto">
          {!isUnlocked ? (
            <div>
              <div className="text-xs text-slate-600 mb-6 leading-relaxed bg-slate-50 p-3.5 rounded-lg border border-slate-200">
                <span className="font-bold text-slate-900">Resource Overview: </span>
                {resource.description} (Includes {resource.pages} pages of checklists, execution workflows, and worksheets).
              </div>

              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label htmlFor="resName" className="block text-xs font-bold text-slate-900 mb-1">
                    Your Name
                  </label>
                  <input
                    id="resName"
                    type="text"
                    required
                    placeholder="e.g. Meera Nair"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="w-full px-3.5 py-2 text-xs sm:text-sm bg-white border border-slate-300 rounded-md focus:outline-none focus:ring-2 focus:ring-amber-500"
                  />
                </div>

                <div>
                  <label htmlFor="resEmail" className="block text-xs font-bold text-slate-900 mb-1">
                    Work Email Address
                  </label>
                  <input
                    id="resEmail"
                    type="email"
                    required
                    placeholder="e.g. meera@business.in"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full px-3.5 py-2 text-xs sm:text-sm bg-white border border-slate-300 rounded-md focus:outline-none focus:ring-2 focus:ring-amber-500"
                  />
                </div>

                <div className="flex items-start gap-2 pt-2">
                  <input
                    type="checkbox"
                    id="consentCheck"
                    checked={consent}
                    onChange={(e) => setConsent(e.target.checked)}
                    required
                    className="mt-0.5 accent-amber-600"
                  />
                  <label htmlFor="consentCheck" className="text-[11px] text-slate-600 leading-tight">
                    I agree to access this practical CCB business guide and receive occasional strategic frameworks. (Zero spam; opt-out anytime).
                  </label>
                </div>

                <div className="pt-3">
                  <button
                    type="submit"
                    className="w-full inline-flex items-center justify-center gap-2 px-5 py-3 text-xs font-bold text-white bg-slate-950 hover:bg-slate-900 rounded-md transition-colors cursor-pointer"
                  >
                    <Download className="w-4 h-4 text-amber-400" />
                    <span>Instant Unlock & View Document</span>
                  </button>
                </div>

                <div className="flex items-center justify-center gap-1.5 text-[11px] text-slate-500 pt-1">
                  <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" />
                  <span>Your email is strictly protected under CCB data privacy terms.</span>
                </div>
              </form>
            </div>
          ) : (
            <div className="space-y-6">
              <div className="p-4 rounded-lg bg-emerald-50 border border-emerald-200 text-xs text-emerald-900 flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-emerald-700 shrink-0" />
                  <span>Access unlocked for {name} ({email})</span>
                </div>
                <button
                  type="button"
                  onClick={handlePrint}
                  className="inline-flex items-center gap-1.5 px-3 py-1 bg-white border border-emerald-300 rounded text-[11px] font-bold text-emerald-900 hover:bg-emerald-100 cursor-pointer"
                >
                  <Printer className="w-3.5 h-3.5" />
                  <span>Print Document</span>
                </button>
              </div>

              {/* Document Preview Blueprint */}
              <div className="border border-slate-200 rounded-lg p-5 bg-slate-50 space-y-4">
                <div className="border-b border-slate-200 pb-3 flex items-center justify-between">
                  <span className="font-serif font-bold text-slate-900 text-sm">
                    CCB Operational Blueprint · {resource.title}
                  </span>
                  <span className="text-[10px] font-mono text-slate-500">
                    Doc ID: CCB-RES-{resource.id.toUpperCase()}
                  </span>
                </div>

                <div className="space-y-3">
                  <h4 className="text-xs font-bold text-slate-900 uppercase tracking-wider">
                    Execution Checklist & Direct Frameworks:
                  </h4>
                  <ul className="space-y-2 text-xs text-slate-700">
                    {resource.highlights.map((h, i) => (
                      <li key={i} className="flex items-start gap-2 bg-white p-2.5 rounded border border-slate-200">
                        <CheckCircle className="w-4 h-4 text-amber-600 shrink-0 mt-0.5" />
                        <div>
                          <span className="font-bold text-slate-900 block">Milestone 0{i + 1}: {h}</span>
                          <span className="text-[11px] text-slate-500">
                            Apply this checklist to identify margin leaks and streamline your weekly review cadence.
                          </span>
                        </div>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="p-3 bg-white rounded border border-slate-200 text-xs text-slate-600">
                  <span className="font-bold text-slate-900">Next Step: </span>
                  Bring this completed checklist to your scheduled Business Growth Assessment with your CCB Mentor.
                </div>
              </div>

              <div className="flex items-center justify-between pt-2">
                <button
                  type="button"
                  onClick={onClose}
                  className="text-xs text-slate-600 hover:text-slate-900 cursor-pointer"
                >
                  Close Window
                </button>
                <button
                  type="button"
                  onClick={handlePrint}
                  className="inline-flex items-center gap-2 px-4 py-2 text-xs font-bold text-white bg-slate-950 hover:bg-slate-900 rounded-md cursor-pointer"
                >
                  <Download className="w-3.5 h-3.5 text-amber-400" />
                  <span>Save / Print PDF</span>
                </button>
              </div>
            </div>
          )}
        </div>

      </div>
    </div>
  );
};
