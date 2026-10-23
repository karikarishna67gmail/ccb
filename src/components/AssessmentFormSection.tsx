import React, { useState, useEffect } from 'react';
import {
  ShieldCheck,
  CheckCircle2,
  AlertCircle,
  Clock,
  ArrowRight,
  Phone,
  Mail,
  Calendar,
  Building,
  Printer,
  Sparkles,
} from 'lucide-react';
import {
  BusinessCategory,
  RevenueRange,
  GrowthGoal,
  ConsultationSlot,
  LeadSubmission,
} from '../types';
import { LeadStorageService, LeadSubmissionInput } from '../services/leadService';

interface AssessmentFormSectionProps {
  initialCategory?: string;
  initialProgram?: string;
  calculatorSnapshot?: {
    targetRevenue: number;
    currentMonthlyRevenue: number;
    ticketSize: number;
    grossMargin: number;
    revenueGap: number;
  } | null;
  onConsultationBooked?: (lead: LeadSubmission) => void;
}

export const AssessmentFormSection: React.FC<AssessmentFormSectionProps> = ({
  initialCategory,
  initialProgram,
  calculatorSnapshot,
  onConsultationBooked,
}) => {
  // Form State
  const [fullName, setFullName] = useState('');
  const [businessEmail, setBusinessEmail] = useState('');
  const [phone, setPhone] = useState('+91 ');
  const [businessName, setBusinessName] = useState('');
  const [businessCategory, setBusinessCategory] = useState<BusinessCategory>('Business Owner');
  const [revenueRange, setRevenueRange] = useState<RevenueRange>('₹1–5 lakh/month');
  const [primaryChallenge, setPrimaryChallenge] = useState('');
  const [growthGoal, setGrowthGoal] = useState<GrowthGoal>('Generate more leads');
  const [preferredTime, setPreferredTime] = useState<ConsultationSlot>('Morning (10:00 AM – 1:00 PM)');
  const [selectedProgram, setSelectedProgram] = useState(initialProgram || '');

  // Submission Status
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submittedLead, setSubmittedLead] = useState<LeadSubmission | null>(null);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const [fieldErrors, setFieldErrors] = useState<Record<string, string>>({});

  useEffect(() => {
    if (initialCategory) {
      const match = categoryOptions.find(
        (c) => c.toLowerCase() === initialCategory.toLowerCase()
      );
      if (match) setBusinessCategory(match);
    }
  }, [initialCategory]);

  useEffect(() => {
    if (initialProgram) {
      setSelectedProgram(initialProgram);
    }
  }, [initialProgram]);

  const categoryOptions: BusinessCategory[] = [
    'Business Owner',
    'Coach',
    'Consultant',
    'Trainer',
    'Startup',
    'Agency',
    'Education',
    'F&B',
    'Retail',
    'Other',
  ];

  const revenueOptions: RevenueRange[] = [
    'Pre-revenue',
    'Below ₹1 lakh/month',
    '₹1–5 lakh/month',
    '₹5–10 lakh/month',
    '₹10–25 lakh/month',
    'Above ₹25 lakh/month',
  ];

  const growthGoals: GrowthGoal[] = [
    'Generate more leads',
    'Increase sales',
    'Improve profitability',
    'Launch a program',
    'Automate operations',
    'Build a team',
    'Expand the business',
  ];

  const timeSlots: ConsultationSlot[] = [
    'Morning (10:00 AM – 1:00 PM)',
    'Afternoon (2:00 PM – 5:00 PM)',
    'Evening (6:00 PM – 8:30 PM)',
    'Saturday Strategic Slot',
  ];

  const validate = (): boolean => {
    const errors: Record<string, string> = {};

    if (!fullName.trim() || fullName.trim().length < 3) {
      errors.fullName = 'Full legal or business name is required (min 3 chars).';
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(businessEmail.trim())) {
      errors.businessEmail = 'Please provide a valid business email address.';
    }

    const digitsOnly = phone.replace(/[^\d]/g, '');
    if (digitsOnly.length < 10) {
      errors.phone = 'Valid 10-digit Indian phone number is required.';
    }

    if (!businessName.trim()) {
      errors.businessName = 'Business or venture name is required.';
    }

    if (!primaryChallenge.trim() || primaryChallenge.trim().length < 10) {
      errors.primaryChallenge = 'Please describe your key business challenge in at least 10 characters.';
    }

    setFieldErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMessage(null);

    if (!validate()) {
      return;
    }

    setIsSubmitting(true);

    try {
      const input: LeadSubmissionInput = {
        fullName,
        businessEmail,
        phone,
        businessName,
        businessCategory,
        revenueRange,
        primaryChallenge,
        growthGoal,
        preferredTime,
        selectedProgram: selectedProgram || undefined,
        calculatorSnapshot: calculatorSnapshot || undefined,
      };

      const result = await LeadStorageService.submitLead(input);

      if (result.success && result.lead) {
        setSubmittedLead(result.lead);
        if (onConsultationBooked) {
          onConsultationBooked(result.lead);
        }
      } else {
        setErrorMessage(
          result.errorMessage ||
            'Submission could not be completed. Please check your network or try again.'
        );
      }
    } catch {
      setErrorMessage('An unexpected system error occurred. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handlePrintConfirmation = () => {
    window.print();
  };

  return (
    <section id="assessment" className="py-20 bg-slate-50 border-b border-slate-200">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center mb-12">
          <div className="text-xs font-bold uppercase tracking-wider text-amber-700 mb-2">
            Confidential Growth Diagnostic
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-950 tracking-tight">
            Discover What Is Holding Your Business Back.
          </h2>
          <p className="mt-3 text-base sm:text-lg text-slate-600 leading-relaxed max-w-2xl mx-auto">
            Get clarity on your current business challenges and identify practical next steps for growth.
          </p>
        </div>

        {/* Confirmation Screen After Successful Submission */}
        {submittedLead ? (
          <div className="bg-white rounded-2xl border border-slate-200 shadow-xl p-8 sm:p-12">
            <div className="text-center max-w-xl mx-auto">
              <div className="w-14 h-14 bg-emerald-100 rounded-full flex items-center justify-center mx-auto text-emerald-700 mb-4">
                <CheckCircle2 className="w-8 h-8" />
              </div>
              <span className="text-xs font-bold uppercase tracking-wider text-emerald-700">
                Assessment Request Confirmed
              </span>
              <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-950 mt-1">
                Your Growth Assessment Is Registered
              </h3>
              <p className="mt-2 text-sm text-slate-600">
                A CCB Senior Business Growth Mentor has received your business details and will review your unit economics.
              </p>

              {/* Reference ID Banner */}
              <div className="mt-6 p-4 rounded-lg bg-slate-50 border border-slate-200 flex flex-col items-center justify-center">
                <span className="text-[11px] uppercase font-bold text-slate-600 tracking-wider">
                  Assessment Reference ID
                </span>
                <span className="text-2xl font-mono font-extrabold text-slate-950 mt-1 tracking-wider">
                  {submittedLead.referenceCode}
                </span>
                <span className="text-xs text-slate-600 mt-1">
                  Submitted for {submittedLead.businessName} · {submittedLead.businessCategory}
                </span>
              </div>
            </div>

            {/* Next Steps Roadmap */}
            <div className="mt-10 pt-8 border-t border-slate-200">
              <h4 className="text-xs font-bold uppercase tracking-wider text-slate-600 mb-4 text-center">
                What Happens Next (Standard 3-Step Process)
              </h4>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="p-4 rounded-lg bg-slate-50 border border-slate-200 text-left">
                  <div className="text-xs font-bold text-amber-800 mb-1">
                    01 · Diagnostic Review
                  </div>
                  <h5 className="text-sm font-bold text-slate-900">
                    4-Hour Desk Audit
                  </h5>
                  <p className="text-xs text-slate-600 mt-1">
                    Our advisory team evaluates your revenue tier and primary challenge against industry benchmarks.
                  </p>
                </div>

                <div className="p-4 rounded-lg bg-slate-50 border border-slate-200 text-left">
                  <div className="text-xs font-bold text-amber-800 mb-1">
                    02 · Coordination
                  </div>
                  <h5 className="text-sm font-bold text-slate-900">
                    WhatsApp Briefing
                  </h5>
                  <p className="text-xs text-slate-600 mt-1">
                    We reach out to {submittedLead.phone} to confirm your {submittedLead.preferredTime} strategy slot.
                  </p>
                </div>

                <div className="p-4 rounded-lg bg-slate-50 border border-slate-200 text-left">
                  <div className="text-xs font-bold text-amber-800 mb-1">
                    03 · Strategy Session
                  </div>
                  <h5 className="text-sm font-bold text-slate-900">
                    45-Min Video Consultation
                  </h5>
                  <p className="text-xs text-slate-600 mt-1">
                    1-on-1 session with a mentor to map your 90-day execution milestones and sales systems.
                  </p>
                </div>
              </div>
            </div>

            {/* Actions */}
            <div className="mt-8 pt-6 border-t border-slate-200 flex flex-col sm:flex-row items-center justify-center gap-4">
              <button
                type="button"
                onClick={handlePrintConfirmation}
                className="inline-flex items-center gap-2 px-5 py-2.5 text-xs font-semibold text-slate-700 bg-slate-100 hover:bg-slate-200 rounded-md border border-slate-300 cursor-pointer"
              >
                <Printer className="w-4 h-4 text-slate-600" />
                <span>Print Confirmation Receipt</span>
              </button>

              <button
                type="button"
                onClick={() => {
                  setSubmittedLead(null);
                  setFullName('');
                  setBusinessEmail('');
                  setBusinessName('');
                  setPrimaryChallenge('');
                }}
                className="inline-flex items-center gap-2 px-5 py-2.5 text-xs font-bold text-white bg-slate-950 hover:bg-slate-900 rounded-md cursor-pointer"
              >
                <span>Submit Another Request</span>
              </button>
            </div>
          </div>
        ) : (
          /* Main Assessment Form */
          <div className="bg-white rounded-2xl border border-slate-200 shadow-xl p-6 sm:p-10">
            {/* Context Badge if coming from Planner or Program */}
            {(selectedProgram || calculatorSnapshot) && (
              <div className="mb-6 p-3.5 rounded-lg bg-amber-50 border border-amber-200 flex items-center justify-between gap-3 text-xs text-amber-950">
                <div className="flex items-center gap-2">
                  <Sparkles className="w-4 h-4 text-amber-700 shrink-0" />
                  <span>
                    {selectedProgram
                      ? `Pre-selected program: ${selectedProgram}`
                      : 'Revenue Planner Metrics Attached'}
                  </span>
                </div>
                {calculatorSnapshot && (
                  <span className="font-mono font-bold text-amber-900">
                    Target: ₹{(calculatorSnapshot.targetRevenue / 100000).toFixed(0)} Lakhs
                  </span>
                )}
              </div>
            )}

            {/* Error Message if submission failed or duplicate detected */}
            {errorMessage && (
              <div className="mb-6 p-4 rounded-lg bg-red-50 border border-red-200 text-xs text-red-900 flex items-start gap-2.5">
                <AlertCircle className="w-4 h-4 text-red-600 shrink-0 mt-0.5" />
                <div>
                  <span className="font-bold">Submission Notice: </span>
                  {errorMessage}
                </div>
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-6">
              
              {/* Row 1: Full Name & Business Email */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div>
                  <label htmlFor="fullName" className="block text-xs font-bold text-slate-900 mb-1.5">
                    Full Name <span className="text-red-500">*</span>
                  </label>
                  <input
                    id="fullName"
                    type="text"
                    required
                    placeholder="e.g. Vikramaditya Verma"
                    value={fullName}
                    onChange={(e) => setFullName(e.target.value)}
                    className={`w-full px-3.5 py-2.5 text-sm bg-white border rounded-md text-slate-900 focus:outline-none focus:ring-2 ${
                      fieldErrors.fullName
                        ? 'border-red-400 focus:ring-red-400'
                        : 'border-slate-300 focus:ring-amber-500'
                    }`}
                  />
                  {fieldErrors.fullName && (
                    <span className="text-[11px] text-red-600 mt-1 block">
                      {fieldErrors.fullName}
                    </span>
                  )}
                </div>

                <div>
                  <label htmlFor="businessEmail" className="block text-xs font-bold text-slate-900 mb-1.5">
                    Business Email <span className="text-red-500">*</span>
                  </label>
                  <input
                    id="businessEmail"
                    type="email"
                    required
                    placeholder="e.g. vikram@yourcompany.com"
                    value={businessEmail}
                    onChange={(e) => setBusinessEmail(e.target.value)}
                    className={`w-full px-3.5 py-2.5 text-sm bg-white border rounded-md text-slate-900 focus:outline-none focus:ring-2 ${
                      fieldErrors.businessEmail
                        ? 'border-red-400 focus:ring-red-400'
                        : 'border-slate-300 focus:ring-amber-500'
                    }`}
                  />
                  {fieldErrors.businessEmail && (
                    <span className="text-[11px] text-red-600 mt-1 block">
                      {fieldErrors.businessEmail}
                    </span>
                  )}
                </div>
              </div>

              {/* Row 2: Phone with India country code & Business Name */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div>
                  <label htmlFor="phone" className="block text-xs font-bold text-slate-900 mb-1.5">
                    Phone Number (WhatsApp Active) <span className="text-red-500">*</span>
                  </label>
                  <input
                    id="phone"
                    type="tel"
                    required
                    placeholder="+91 98765 43210"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    className={`w-full px-3.5 py-2.5 text-sm bg-white border rounded-md text-slate-900 focus:outline-none focus:ring-2 ${
                      fieldErrors.phone
                        ? 'border-red-400 focus:ring-red-400'
                        : 'border-slate-300 focus:ring-amber-500'
                    }`}
                  />
                  <span className="text-[11px] text-slate-500 mt-1 block">
                    Used strictly for appointment confirmation and diagnostic brief.
                  </span>
                  {fieldErrors.phone && (
                    <span className="text-[11px] text-red-600 mt-1 block">
                      {fieldErrors.phone}
                    </span>
                  )}
                </div>

                <div>
                  <label htmlFor="businessName" className="block text-xs font-bold text-slate-900 mb-1.5">
                    Business / Venture Name <span className="text-red-500">*</span>
                  </label>
                  <input
                    id="businessName"
                    type="text"
                    required
                    placeholder="e.g. Acme Tech Solutions LLP"
                    value={businessName}
                    onChange={(e) => setBusinessName(e.target.value)}
                    className={`w-full px-3.5 py-2.5 text-sm bg-white border rounded-md text-slate-900 focus:outline-none focus:ring-2 ${
                      fieldErrors.businessName
                        ? 'border-red-400 focus:ring-red-400'
                        : 'border-slate-300 focus:ring-amber-500'
                    }`}
                  />
                  {fieldErrors.businessName && (
                    <span className="text-[11px] text-red-600 mt-1 block">
                      {fieldErrors.businessName}
                    </span>
                  )}
                </div>
              </div>

              {/* Row 3: Business Category & Current Monthly Revenue Range */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div>
                  <label htmlFor="category" className="block text-xs font-bold text-slate-900 mb-1.5">
                    Business Category <span className="text-red-500">*</span>
                  </label>
                  <select
                    id="category"
                    value={businessCategory}
                    onChange={(e) => setBusinessCategory(e.target.value as BusinessCategory)}
                    className="w-full px-3.5 py-2.5 text-sm bg-white border border-slate-300 rounded-md text-slate-900 focus:outline-none focus:ring-2 focus:ring-amber-500"
                  >
                    {categoryOptions.map((opt) => (
                      <option key={opt} value={opt}>
                        {opt}
                      </option>
                    ))}
                  </select>
                </div>

                <div>
                  <label htmlFor="revenue" className="block text-xs font-bold text-slate-900 mb-1.5">
                    Current Monthly Revenue Range <span className="text-red-500">*</span>
                  </label>
                  <select
                    id="revenue"
                    value={revenueRange}
                    onChange={(e) => setRevenueRange(e.target.value as RevenueRange)}
                    className="w-full px-3.5 py-2.5 text-sm bg-white border border-slate-300 rounded-md text-slate-900 focus:outline-none focus:ring-2 focus:ring-amber-500"
                  >
                    {revenueOptions.map((rev) => (
                      <option key={rev} value={rev}>
                        {rev}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              {/* Row 4: Primary Business Challenge */}
              <div>
                <label htmlFor="challenge" className="block text-xs font-bold text-slate-900 mb-1.5">
                  Primary Business Challenge <span className="text-red-500">*</span>
                </label>
                <textarea
                  id="challenge"
                  required
                  rows={3}
                  placeholder="Describe your current bottleneck (e.g. erratic inbound leads, pricing sensitivity, founder trapped in daily operations, lack of sales closing scripts...)"
                  value={primaryChallenge}
                  onChange={(e) => setPrimaryChallenge(e.target.value)}
                  className={`w-full px-3.5 py-2.5 text-sm bg-white border rounded-md text-slate-900 focus:outline-none focus:ring-2 ${
                    fieldErrors.primaryChallenge
                      ? 'border-red-400 focus:ring-red-400'
                      : 'border-slate-300 focus:ring-amber-500'
                  }`}
                />
                {fieldErrors.primaryChallenge && (
                  <span className="text-[11px] text-red-600 mt-1 block">
                    {fieldErrors.primaryChallenge}
                  </span>
                )}
              </div>

              {/* Row 5: Growth Goal & Preferred Consultation Slot */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div>
                  <label htmlFor="growthGoal" className="block text-xs font-bold text-slate-900 mb-1.5">
                    Key Business Growth Goal <span className="text-red-500">*</span>
                  </label>
                  <select
                    id="growthGoal"
                    value={growthGoal}
                    onChange={(e) => setGrowthGoal(e.target.value as GrowthGoal)}
                    className="w-full px-3.5 py-2.5 text-sm bg-white border border-slate-300 rounded-md text-slate-900 focus:outline-none focus:ring-2 focus:ring-amber-500"
                  >
                    {growthGoals.map((g) => (
                      <option key={g} value={g}>
                        {g}
                      </option>
                    ))}
                  </select>
                </div>

                <div>
                  <label htmlFor="prefTime" className="block text-xs font-bold text-slate-900 mb-1.5">
                    Preferred Consultation Time <span className="text-red-500">*</span>
                  </label>
                  <select
                    id="prefTime"
                    value={preferredTime}
                    onChange={(e) => setPreferredTime(e.target.value as ConsultationSlot)}
                    className="w-full px-3.5 py-2.5 text-sm bg-white border border-slate-300 rounded-md text-slate-900 focus:outline-none focus:ring-2 focus:ring-amber-500"
                  >
                    {timeSlots.map((slot) => (
                      <option key={slot} value={slot}>
                        {slot}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              {/* Submit CTA Button */}
              <div className="pt-4">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full inline-flex items-center justify-center gap-2.5 px-6 py-4 text-sm font-bold text-white bg-slate-950 hover:bg-slate-900 border border-slate-900 hover:border-amber-400 rounded-md shadow-md transition-all cursor-pointer disabled:opacity-70 disabled:cursor-not-allowed focus:outline-none focus-visible:ring-2 focus-visible:ring-amber-500"
                >
                  {isSubmitting ? (
                    <>
                      <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                      <span>Verifying & Recording Assessment...</span>
                    </>
                  ) : (
                    <>
                      <span>REQUEST MY GROWTH ASSESSMENT</span>
                      <ArrowRight className="w-4 h-4 text-amber-400" />
                    </>
                  )}
                </button>
              </div>

              {/* Privacy and Verification Note */}
              <div className="flex items-center justify-center gap-2 text-xs text-slate-500 pt-2 text-center">
                <ShieldCheck className="w-4 h-4 text-emerald-600 shrink-0" />
                <span>
                  100% Confidential · Strict NDA Privacy Standards · Zero Spam
                </span>
              </div>
            </form>
          </div>
        )}

      </div>
    </section>
  );
};
