export type BusinessCategory =
  | 'Business Owner'
  | 'Coach'
  | 'Consultant'
  | 'Trainer'
  | 'Startup'
  | 'Agency'
  | 'Education'
  | 'F&B'
  | 'Retail'
  | 'Other';

export type RevenueRange =
  | 'Pre-revenue'
  | 'Below ₹1 lakh/month'
  | '₹1–5 lakh/month'
  | '₹5–10 lakh/month'
  | '₹10–25 lakh/month'
  | 'Above ₹25 lakh/month';

export type GrowthGoal =
  | 'Generate more leads'
  | 'Increase sales'
  | 'Improve profitability'
  | 'Launch a program'
  | 'Automate operations'
  | 'Build a team'
  | 'Expand the business';

export type ConsultationSlot =
  | 'Morning (10:00 AM – 1:00 PM)'
  | 'Afternoon (2:00 PM – 5:00 PM)'
  | 'Evening (6:00 PM – 8:30 PM)'
  | 'Saturday Strategic Slot';

export interface LeadSubmission {
  id: string;
  referenceCode: string;
  submittedAt: string;
  fullName: string;
  businessEmail: string;
  phone: string;
  businessName: string;
  businessCategory: BusinessCategory;
  revenueRange: RevenueRange;
  primaryChallenge: string;
  growthGoal: GrowthGoal;
  preferredTime: ConsultationSlot;
  notes?: string;
  selectedProgram?: string;
  calculatorSnapshot?: {
    targetRevenue: number;
    currentMonthlyRevenue: number;
    ticketSize: number;
    grossMargin: number;
    revenueGap: number;
  };
  status: 'NEW' | 'CONTACTED' | 'SCHEDULED' | 'QUALIFIED' | 'ENROLLED';
}

export interface ConsultingProgram {
  id: string;
  name: string;
  price: number;
  priceFormatted: string;
  tagline: string;
  idealFor: string;
  duration: string;
  cadence: string;
  deliverables: string[];
  supportLimits: string;
  ctaText: string;
  featured?: boolean;
}

export interface FrameworkStep {
  number: number;
  title: string;
  tagline: string;
  summary: string;
  keyDeliverables: string[];
  executionTools: string[];
  timeframe: string;
}

export interface ServiceVertical {
  id: string;
  title: string;
  shortSummary: string;
  deliverables: string[];
  iconName: string;
  outcomeFocus: string;
}

export interface WhoWeHelpItem {
  id: string;
  title: string;
  shortDesc: string;
  detailedNeeds: string;
  solutions: string[];
  keyMilestones: string[];
  photoUrl: string;
}

export interface CaseStudy {
  id: string;
  clientCategory: string;
  startingChallenge: string;
  strategyImplemented: string;
  executionPeriod: string;
  verifiedOutcomes: string[];
  testimonialPlaceholder: string;
  isVerified: boolean;
  industryTag: string;
}

export interface DownloadableResource {
  id: string;
  title: string;
  category: string;
  type: 'Checklist' | 'Framework' | 'Workbook' | 'Toolkit';
  pages: number;
  description: string;
  highlights: string[];
  fileFormat: string;
}

export interface FAQItem {
  id: string;
  question: string;
  answer: string;
  category: 'Programs' | 'Consulting Process' | 'Pricing' | 'Eligibility';
}
