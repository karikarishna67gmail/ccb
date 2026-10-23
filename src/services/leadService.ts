import { LeadSubmission, BusinessCategory, RevenueRange, GrowthGoal, ConsultationSlot } from '../types';

const STORAGE_KEY = 'ccb_consultation_leads_vault_v1';

// Initial verified sample records for internal preview demonstration
const INITIAL_LEADS: LeadSubmission[] = [
  {
    id: 'lead-init-1',
    referenceCode: 'CCB-2026-M4B1',
    submittedAt: new Date(Date.now() - 3600000 * 18).toISOString(),
    fullName: 'Rajesh K. Sharma',
    businessEmail: 'rajesh@sharmatechcomponents.com',
    phone: '+91 98201 44521',
    businessName: 'Sharma Tech Components LLP',
    businessCategory: 'Business Owner',
    revenueRange: '₹5–10 lakh/month',
    primaryChallenge: 'Manual quotes and founder bottlenecks slowing down deliveries.',
    growthGoal: 'Automate operations',
    preferredTime: 'Morning (10:00 AM – 1:00 PM)',
    selectedProgram: 'BUSINESS GROWTH',
    status: 'SCHEDULED',
    calculatorSnapshot: {
      targetRevenue: 10000000,
      currentMonthlyRevenue: 650000,
      ticketSize: 45000,
      grossMargin: 42,
      revenueGap: 2200000,
    },
  },
  {
    id: 'lead-init-2',
    referenceCode: 'CCB-2026-E9T3',
    submittedAt: new Date(Date.now() - 3600000 * 42).toISOString(),
    fullName: 'Ananya Deshmukh',
    businessEmail: 'ananya@scaleupcoaching.in',
    phone: '+91 94220 89104',
    businessName: 'Executive Ascent Mentorship',
    businessCategory: 'Coach',
    revenueRange: '₹1–5 lakh/month',
    primaryChallenge: 'Inconsistent monthly lead flow and underpriced 1-on-1 coaching packages.',
    growthGoal: 'Launch a program',
    preferredTime: 'Evening (6:00 PM – 8:30 PM)',
    selectedProgram: 'BUSINESS CLARITY',
    status: 'CONTACTED',
  },
];

export interface LeadSubmissionInput {
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
}

export interface SubmissionResult {
  success: boolean;
  lead?: LeadSubmission;
  errorMessage?: string;
  isDuplicate?: boolean;
}

export class LeadStorageService {
  private static getStoredData(): LeadSubmission[] {
    try {
      const data = localStorage.getItem(STORAGE_KEY);
      if (!data) {
        localStorage.setItem(STORAGE_KEY, JSON.stringify(INITIAL_LEADS));
        return INITIAL_LEADS;
      }
      return JSON.parse(data);
    } catch {
      return INITIAL_LEADS;
    }
  }

  private static saveData(leads: LeadSubmission[]): void {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(leads));
    } catch (e) {
      console.error('Failed to write leads to persistent storage', e);
    }
  }

  public static async submitLead(input: LeadSubmissionInput): Promise<SubmissionResult> {
    // Artificial slight latency to guarantee reliable state transitions
    await new Promise((res) => setTimeout(res, 500));

    // 1. Basic Server-side / Service Validation
    if (!input.fullName.trim() || input.fullName.trim().length < 3) {
      return { success: false, errorMessage: 'Please provide your full legal or professional name.' };
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(input.businessEmail.trim())) {
      return { success: false, errorMessage: 'Please enter a valid business email address.' };
    }

    // Clean phone number (strip whitespace and symbols)
    const cleanedPhone = input.phone.replace(/[^\d+]/g, '');
    if (cleanedPhone.length < 10) {
      return { success: false, errorMessage: 'Please enter a valid 10-digit Indian phone number.' };
    }

    if (!input.businessName.trim()) {
      return { success: false, errorMessage: 'Please specify your registered business, venture, or brand name.' };
    }

    if (!input.primaryChallenge.trim() || input.primaryChallenge.trim().length < 10) {
      return { success: false, errorMessage: 'Please briefly describe your primary business challenge (at least 10 characters).' };
    }

    const existingLeads = this.getStoredData();

    // 2. Duplicate Detection (within last 24 hours with exact email or phone)
    const oneDayAgo = Date.now() - 24 * 60 * 60 * 1000;
    const duplicate = existingLeads.find((l) => {
      const leadTime = new Date(l.submittedAt).getTime();
      const sameEmail = l.businessEmail.toLowerCase() === input.businessEmail.toLowerCase();
      const samePhone = l.phone.replace(/[^\d]/g, '').slice(-10) === cleanedPhone.replace(/[^\d]/g, '').slice(-10);
      return leadTime > oneDayAgo && (sameEmail || samePhone);
    });

    if (duplicate) {
      return {
        success: false,
        isDuplicate: true,
        errorMessage: `An active assessment request with Reference ID ${duplicate.referenceCode} was already submitted within the last 24 hours. Our mentor team will contact you shortly.`,
      };
    }

    // 3. Create Unique Reference Code
    const randomSuffix = Math.random().toString(36).substring(2, 6).toUpperCase();
    const referenceCode = `CCB-${new Date().getFullYear()}-${randomSuffix}`;

    const newLead: LeadSubmission = {
      id: 'lead-' + Date.now() + '-' + Math.random().toString(36).substring(2, 5),
      referenceCode,
      submittedAt: new Date().toISOString(),
      fullName: input.fullName.trim(),
      businessEmail: input.businessEmail.trim().toLowerCase(),
      phone: input.phone.trim(),
      businessName: input.businessName.trim(),
      businessCategory: input.businessCategory,
      revenueRange: input.revenueRange,
      primaryChallenge: input.primaryChallenge.trim(),
      growthGoal: input.growthGoal,
      preferredTime: input.preferredTime,
      notes: input.notes?.trim() || '',
      selectedProgram: input.selectedProgram,
      calculatorSnapshot: input.calculatorSnapshot,
      status: 'NEW',
    };

    existingLeads.unshift(newLead);
    this.saveData(existingLeads);

    return {
      success: true,
      lead: newLead,
    };
  }

  public static getLeads(): LeadSubmission[] {
    return this.getStoredData();
  }

  public static updateStatus(id: string, newStatus: LeadSubmission['status']): boolean {
    const leads = this.getStoredData();
    const index = leads.findIndex((l) => l.id === id);
    if (index === -1) return false;
    leads[index].status = newStatus;
    this.saveData(leads);
    return true;
  }

  public static deleteLead(id: string): boolean {
    const leads = this.getStoredData();
    const filtered = leads.filter((l) => l.id !== id);
    if (filtered.length === leads.length) return false;
    this.saveData(filtered);
    return true;
  }

  public static exportToCSV(): string {
    const leads = this.getStoredData();
    const headers = [
      'Reference Code',
      'Submitted At',
      'Full Name',
      'Email',
      'Phone',
      'Business Name',
      'Category',
      'Revenue Range',
      'Growth Goal',
      'Preferred Time',
      'Status',
      'Selected Program',
      'Primary Challenge',
    ];

    const rows = leads.map((l) => [
      `"${l.referenceCode}"`,
      `"${l.submittedAt}"`,
      `"${l.fullName.replace(/"/g, '""')}"`,
      `"${l.businessEmail}"`,
      `"${l.phone}"`,
      `"${l.businessName.replace(/"/g, '""')}"`,
      `"${l.businessCategory}"`,
      `"${l.revenueRange}"`,
      `"${l.growthGoal}"`,
      `"${l.preferredTime}"`,
      `"${l.status}"`,
      `"${l.selectedProgram || 'General'}"`,
      `"${l.primaryChallenge.replace(/"/g, '""')}"`,
    ]);

    return [headers.join(','), ...rows.map((r) => r.join(','))].join('\n');
  }
}
