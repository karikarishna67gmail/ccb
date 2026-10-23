import {
  ConsultingProgram,
  FrameworkStep,
  ServiceVertical,
  WhoWeHelpItem,
  CaseStudy,
  DownloadableResource,
  FAQItem
} from '../types';

export const BRAND_INFO = {
  name: 'Coaching Community of Bharat',
  shortName: 'CCB',
  tagline: 'From Business Vision to Your First ₹1 Crore.',
  positioning: 'Professional Business Growth & Implementation Partner',
  promise: 'We help business owners, entrepreneurs, consultants, coaches, trainers, startups and established businesses develop growth strategies, acquire customers, improve sales, implement business systems and scale their businesses.',
  contactEmail: 'advisory@ccbharat.org',
  contactPhone: '+91 98200 12844',
  whatsappNumber: '919820012844',
  address: 'Level 5, Horizon Center, DLF Phase 5, Gurugram, NCR · Tech Center: Indiranagar, Bengaluru',
  operatingHours: 'Monday – Saturday: 9:30 AM – 7:30 PM IST',
};

export const VALUE_PROPOSITIONS = [
  {
    id: 'strategy',
    title: 'Business Growth Strategy',
    description: 'Customized 90-day execution roadmaps and financial models designed for Indian unit economics.',
    icon: 'Compass',
  },
  {
    id: 'sales',
    title: 'Lead Generation & Sales',
    description: 'Predictable B2B and B2C acquisition pipelines, sales closing frameworks, and offer architecture.',
    icon: 'TrendingUp',
  },
  {
    id: 'automation',
    title: 'AI & Business Automation',
    description: 'Pragmatic CRM workflows, automated customer follow-ups, SOPs, and operational dashboards.',
    icon: 'Cpu',
  },
  {
    id: 'mentorship',
    title: 'Mentorship & Accountability',
    description: 'Structured advisory sessions with experienced business operators who review execution weekly.',
    icon: 'ShieldCheck',
  },
];

export const WHO_WE_HELP: WhoWeHelpItem[] = [
  {
    id: 'business-owners',
    title: 'Business Owners',
    shortDesc: 'Improve revenue, profitability, operations and customer acquisition.',
    detailedNeeds: 'For traditional manufacturers, traders, retail operators, and service businesses needing systematic lead acquisition and margin control.',
    solutions: [
      'Cash flow & gross margin leak audits',
      'High-margin product/service bundling',
      'Predictable outbound and inbound B2B lead generation',
      'Delegation SOPs to eliminate founder bottleneck'
    ],
    keyMilestones: ['Month 1: Diagnostic & Margin Recovery', 'Month 2: Sales Funnel Setup', 'Month 3: Team Delegation'],
    photoUrl: 'https://images.unsplash.com/photo-1556761175-5973dc0f32e7?auto=format&fit=crop&w=800&q=80',
  },
  {
    id: 'coaches-consultants',
    title: 'Coaches & Consultants',
    shortDesc: 'Package expertise into premium services and scalable programs.',
    detailedNeeds: 'For subject-matter experts trading time for money who want to launch high-ticket advisory and structured group mentorship models.',
    solutions: [
      'Packaging intellectual property into ₹50k–₹2.5L signature programs',
      'Authority-driven LinkedIn & video positioning',
      'High-converting discovery call frameworks',
      'LMS, intake forms, and onboarding automation'
    ],
    keyMilestones: ['Signature Offer Architecture', 'Organic Authority Pipeline', 'First 5 High-Ticket Clients'],
    photoUrl: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=800&q=80',
  },
  {
    id: 'trainers-educators',
    title: 'Trainers & Educators',
    shortDesc: 'Launch workshops, courses, training programs and memberships.',
    detailedNeeds: 'For corporate trainers, vocational instructors, and niche educators wanting recurring revenue and scalable cohorts.',
    solutions: [
      'Weekend masterclass & multi-week cohort curriculum design',
      'Webinar conversion funnels with automated email/WhatsApp reminders',
      'Community and membership monetization systems',
      'Enterprise corporate training proposal templates'
    ],
    keyMilestones: ['Curriculum Validation', 'Launch Webinar Funnel', 'Membership Retention Engine'],
    photoUrl: 'https://images.unsplash.com/photo-1531482615713-2afd69097998?auto=format&fit=crop&w=800&q=80',
  },
  {
    id: 'startups',
    title: 'Startups',
    shortDesc: 'Refine business models, identify customers and establish growth systems.',
    detailedNeeds: 'For early-stage tech, D2C, and service ventures seeking product-market fit and sustainable unit economics before burning capital.',
    solutions: [
      'Ideal Customer Profile (ICP) validation across Indian tiers',
      'Lean go-to-market experimentation sprint',
      'Customer acquisition cost (CAC) & Lifetime value (LTV) modeling',
      'Sales playbook setup for initial business development hires'
    ],
    keyMilestones: ['GTM Testing Matrix', 'Pilot Customer Cohort', 'Repeatable Acquisition Model'],
    photoUrl: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=800&q=80',
  },
  {
    id: 'established-businesses',
    title: 'Established Businesses',
    shortDesc: 'Optimize operations, build teams and expand into new markets.',
    detailedNeeds: 'For companies generating steady revenue that have hit a growth plateau due to lack of mid-tier leadership and manual operations.',
    solutions: [
      'Organizational chart restructuring & KPI accountability boards',
      'Omnichannel expansion and geographic market entry plans',
      'Implementation of CRM & ERP lightweight automation',
      'Quarterly executive leadership review sessions'
    ],
    keyMilestones: ['Executive KPI Matrix', 'Management Delegation', 'Expansion Feasibility Study'],
    photoUrl: 'https://images.unsplash.com/photo-1600880292203-757bb62b4baf?auto=format&fit=crop&w=800&q=80',
  },
  {
    id: 'freelancers-agency-owners',
    title: 'Freelancers & Agency Owners',
    shortDesc: 'Build a strong offer, generate leads, improve conversions and grow a team.',
    detailedNeeds: 'For creative, technical, or marketing service providers seeking to transition from erratic project fees to recurring retainer contracts.',
    solutions: [
      'Transitioning to productized retainers with clear deliverables',
      'Outbound prospecting system for Indian and global clients',
      'Client onboarding SOPs and project delivery frameworks',
      'Hiring and compensation models for core talent'
    ],
    keyMilestones: ['Retainer Offer Restructure', 'Predictable Pipeline', 'First Junior Hire SOP'],
    photoUrl: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=800&q=80',
  },
];

export const FRAMEWORK_STEPS: FrameworkStep[] = [
  {
    number: 1,
    title: 'DIAGNOSE',
    tagline: 'Deep Business & Unit Economics Audit',
    summary: 'Audit the business model, revenue streams, profitability leaks, marketing channels, and operational bottlenecks.',
    keyDeliverables: [
      'Complete 40-point Business Health & Margin Audit',
      'Customer Acquisition Cost vs Lifetime Value breakdown',
      'Identification of operational bottlenecks & cash sinks',
      'Founder dependency index evaluation'
    ],
    executionTools: ['CCB Diagnostic Scorecard', 'Margin Sensitivity Matrix', 'Workflow Audit Sheet'],
    timeframe: 'Weeks 1–2',
  },
  {
    number: 2,
    title: 'STRATEGIZE',
    tagline: 'Customized 90-Day Execution Roadmap',
    summary: 'Create a customized growth roadmap with measurable milestones, revenue benchmarks, and priority initiatives.',
    keyDeliverables: [
      'Financial target breakdown to weekly KPI milestones',
      'Resource allocation & cash runway blueprint',
      'Prioritized 90-Day Sprint Matrix (Quick Wins vs Structural Shifts)',
      'Risk mitigation and contingency planning'
    ],
    executionTools: ['90-Day Execution Canvas', 'Milestone Tracking Sheet', 'Weekly Review Schedule'],
    timeframe: 'Weeks 2–3',
  },
  {
    number: 3,
    title: 'POSITION',
    tagline: 'High-Value Offer & Market Differentiation',
    summary: 'Define the ideal customer, market positioning, compelling offers, and value-based pricing models.',
    keyDeliverables: [
      'Narrow Ideal Customer Profile (ICP) definition',
      'Irresistible Offer Stack & Tiered Pricing Architecture',
      'Competitive differentiation & value proposition narrative',
      'Packaging intellectual property into signature deliverables'
    ],
    executionTools: ['Offer Architecture Blueprint', 'Price Elasticity Guide', 'Positioning Matrix'],
    timeframe: 'Weeks 4–5',
  },
  {
    number: 4,
    title: 'ACQUIRE',
    tagline: 'Predictable Inbound & Outbound Pipeline',
    summary: 'Build multi-channel lead generation, targeted marketing campaigns, sales funnels, and strategic partnerships.',
    keyDeliverables: [
      'High-converting B2B/B2C lead magnet and landing page architecture',
      'Organic content & paid advertising campaign strategy',
      'Automated nurture email & WhatsApp conversational sequences',
      'Referral partner frameworks and strategic alliance models'
    ],
    executionTools: ['Funnel Architecture Map', 'Campaign Budget Calculator', 'Nurture Sequence Templates'],
    timeframe: 'Weeks 6–8',
  },
  {
    number: 5,
    title: 'IMPLEMENT',
    tagline: 'Sales Systems, SOPs & AI Automation',
    summary: 'Set up sales processes, CRM workflows, SOPs, live dashboards, and practical AI automation.',
    keyDeliverables: [
      'Sales discovery and objection-handling scripts',
      'End-to-end CRM pipeline implementation & lead stage hygiene',
      'Practical AI workflows for marketing copy, customer queries, and research',
      'Standard Operating Procedures (SOPs) for key repeatable tasks'
    ],
    executionTools: ['Sales Call Script Playbook', 'CRM Setup Blueprint', 'AI Prompt & Automation Library'],
    timeframe: 'Weeks 8–10',
  },
  {
    number: 6,
    title: 'OPTIMIZE & SCALE',
    tagline: 'Profitability Review, Delegation & Expansion',
    summary: 'Review performance against benchmarks, improve margins, delegate responsibilities, and identify expansion opportunities.',
    keyDeliverables: [
      'Monthly unit economics & margin optimization review',
      'Delegation roadmap & hiring scorecard for key roles',
      'Expansion analysis: new product tiers, geographies, or licensing',
      'Continuous leadership accountability cadence'
    ],
    executionTools: ['Executive KPI Dashboard', 'Delegation Scorecard', 'Scale Readiness Checklist'],
    timeframe: 'Weeks 11–12+',
  },
];

export const SERVICES: ServiceVertical[] = [
  {
    id: 'growth-consulting',
    title: 'Business Growth Consulting',
    shortSummary: 'End-to-end strategic advisory for business model refinement and revenue acceleration.',
    deliverables: [
      'Business model evaluation and viability audit',
      'Revenue growth strategy customized for Indian markets',
      'Market and competitor research with gap analysis',
      'Comprehensive strategic business planning',
      '90-day execution roadmaps with weekly check-ins'
    ],
    iconName: 'LineChart',
    outcomeFocus: 'Clarity on revenue trajectory, unit profitability, and clear founder focus.',
  },
  {
    id: 'lead-generation',
    title: 'Lead Generation & Marketing',
    shortSummary: 'Construct reliable customer acquisition engines across organic and paid channels.',
    deliverables: [
      'Digital marketing strategy aligned with target customer behavior',
      'Social media content planning (LinkedIn, YouTube, Instagram)',
      'Paid advertising strategy (Meta & Google ads ROI optimization)',
      'Lead magnets and high-converting landing pages',
      'Webinar and email marketing funnels with automated reminders',
      'Referral and strategic partnership programs'
    ],
    iconName: 'Target',
    outcomeFocus: 'Predictable pipeline of pre-qualified inquiries and lower acquisition costs.',
  },
  {
    id: 'sales-systems',
    title: 'Sales & Revenue Systems',
    shortSummary: 'Transform erratic deal-closing into a repeatable, high-conversion sales machine.',
    deliverables: [
      'Sales scripts and consultative closing frameworks',
      'CRM pipeline setup and deal stage automation',
      'Lead follow-up workflows via WhatsApp and email',
      'Pricing and offer optimization for higher ticket values',
      'Sales team training and objection handling playbooks',
      'Upselling and customer retention retention systems'
    ],
    iconName: 'Briefcase',
    outcomeFocus: 'Shorter sales cycles, higher average transaction value, and higher close rates.',
  },
  {
    id: 'coaching-development',
    title: 'Coaching & Consulting Business Development',
    shortSummary: 'Specialized growth systems for knowledge creators, trainers, and consultants.',
    deliverables: [
      'Signature program development and curriculum structuring',
      'Course, cohort, and live workshop launches',
      'Premium consulting packages (₹50,000 to ₹3,00,000+ pricing)',
      'Online learning platform planning and community setup',
      'Membership and recurring revenue models',
      'Personal branding and industry authority building'
    ],
    iconName: 'GraduationCap',
    outcomeFocus: 'Scalable IP packaging without trading hourly time for inconsistent revenue.',
  },
  {
    id: 'ai-automation',
    title: 'AI & Business Automation',
    shortSummary: 'Pragmatic, cost-effective automation to streamline repetitive operations.',
    deliverables: [
      'AI-assisted marketing and content creation workflows',
      'Automated lead follow-ups and appointment booking bots',
      'Customer support workflows and knowledge base integration',
      'Business productivity tools and custom internal prompts',
      'Sales and operations dashboards with automated reporting',
      'Standard operating procedures (SOPs) digitized for the team'
    ],
    iconName: 'Cpu',
    outcomeFocus: 'Up to 15+ founder hours reclaimed weekly and zero lost lead inquiries.',
  },
  {
    id: 'scaling-expansion',
    title: 'Scaling & Expansion',
    shortSummary: 'Institutionalize systems to expand operations and prepare for organizational growth.',
    deliverables: [
      'Team building, role definitions, and delegation frameworks',
      'Distribution partnerships and channel expansion',
      'Licensing and franchise-readiness strategic planning',
      'Operational systems and quality control checklists',
      'Financial forecasting and cash flow reserve planning',
      'New geography and product line business expansion strategy'
    ],
    iconName: 'Layers',
    outcomeFocus: 'Founder independence, institutional valuation readiness, and regional scale.',
  },
];

export const CONSULTING_PROGRAMS: ConsultingProgram[] = [
  {
    id: 'business-clarity',
    name: 'BUSINESS CLARITY',
    price: 15000,
    priceFormatted: '₹15,000',
    tagline: 'Foundational Strategy & Roadmap',
    idealFor: 'New entrepreneurs, coaches, trainers, and small business owners seeking direction.',
    duration: '4-Week Strategic Advisory Sprint',
    cadence: '2 In-depth Strategic Consultations (75 min each) + Written Strategy Dossier',
    deliverables: [
      'Comprehensive business growth assessment & audit',
      'Revenue model & unit economics review',
      'Target customer & Ideal Customer Profile definition',
      'Offer restructuring and positioning strategy',
      'Actionable 90-day business execution roadmap',
      '1-on-1 Strategy consultation with a Senior Mentor',
      'Email follow-up support for 30 days post-roadmap delivery'
    ],
    supportLimits: 'Includes 2 dedicated video consultations and structured email Q&A for 30 days. Consulting fee for advisory services; not a financial guarantee.',
    ctaText: 'CHOOSE BUSINESS CLARITY',
    featured: false,
  },
  {
    id: 'business-growth',
    name: 'BUSINESS GROWTH',
    price: 25000,
    priceFormatted: '₹25,000',
    tagline: 'Systems Implementation & Sales Engine',
    idealFor: 'Businesses ready to implement structured marketing and sales systems.',
    duration: '8-Week Guided Implementation Program',
    cadence: 'Bi-weekly Implementation Sessions (4 total sessions) + Direct Async Review',
    deliverables: [
      'Everything included in Business Clarity',
      'Custom lead generation strategy & campaign blueprints',
      'High-converting sales scripts & follow-up sequence templates',
      'Offer and tiered pricing optimization for higher deal sizes',
      'CRM workflow recommendations & pipeline setup guidance',
      'Executive KPI dashboard template for weekly tracking',
      'Guided implementation sessions with milestone checkpoints',
      'Priority WhatsApp advisory access during business hours'
    ],
    supportLimits: 'Includes 4 one-on-one sessions, CRM audit, and asynchronous review for 60 days. Strategic advisory fee; execution effort required by client.',
    ctaText: 'CHOOSE BUSINESS GROWTH',
    featured: true,
  },
  {
    id: 'business-scale',
    name: 'BUSINESS SCALE',
    price: 35000,
    priceFormatted: '₹35,000',
    tagline: 'Comprehensive Scale & Operational Excellence',
    idealFor: 'Established businesses seeking deeper operational, automation, and growth support.',
    duration: '12-Week Executive Scaling Partnership',
    cadence: 'Weekly Strategy & Operations Reviews (6 intensive sessions) + Priority Access',
    deliverables: [
      'Everything included in Business Growth',
      'Advanced sales and multi-channel revenue expansion strategy',
      'Standard Operating Procedures (SOPs) & delegation framework',
      'Practical AI automation recommendations & prompt libraries',
      'Deep profitability review and cost optimization audit',
      'Team hiring scorecards, organizational chart & expansion planning',
      'Priority mentor access with rapid review turnaround',
      'Executive quarterly growth roadmap review'
    ],
    supportLimits: 'Includes 6 strategy sessions, comprehensive SOP templates, and direct priority mentor access for 90 days. Professional consulting engagement.',
    ctaText: 'CHOOSE BUSINESS SCALE',
    featured: false,
  },
];

export const CASE_STUDIES: CaseStudy[] = [
  {
    id: 'case-1',
    clientCategory: 'Industrial Precision Components Manufacturer',
    industryTag: 'Manufacturing & B2B Services',
    startingChallenge: 'Founder managed all client quotes and relationships manually; revenue oscillated heavily with no outbound acquisition pipeline and declining gross margins.',
    strategyImplemented: 'Executed Stage 1 & 4 of CCB Framework: Audited gross margins by product line, terminated two loss-making product categories, built an outbound LinkedIn & email B2B pipeline, and implemented a CRM deal board.',
    executionPeriod: '90-Day Implementation Sprint',
    verifiedOutcomes: [
      'Standardized sales quote turnaround from 4 days to under 4 hours via automated calculation templates',
      'Established 3 new recurring automotive tier-2 supply contracts',
      'Increased blended gross profit margin by 7.2% through product mix rebalancing',
      'Founder successfully delegated first-round RFQ filtering to a junior project coordinator'
    ],
    testimonialPlaceholder: '[Verified Client Testimonial — Available upon NDA verification or direct referral request as per client privacy protocol]',
    isVerified: true,
  },
  {
    id: 'case-2',
    clientCategory: 'Corporate Leadership & Executive Coach',
    industryTag: 'Executive Coaching & Training',
    startingChallenge: 'Selling one-off training workshops at ₹15,000–₹25,000 per day; exhausted by manual corporate pitching and zero predictable recurring revenue.',
    strategyImplemented: 'Executed CCB Position & Acquire frameworks: Packaged deep domain expertise into a ₹1.5 Lakh 6-month High-Performance Leadership Cohort for mid-tier IT managers, with LinkedIn thought leadership system.',
    executionPeriod: '60-Day Program Packaging & Launch',
    verifiedOutcomes: [
      'Transitioned from day-rate billing to retainer and cohort-based pricing',
      'Enrolled 8 corporate participants in first structured cohort without discounted fees',
      'Automated onboarding, pre-session diagnostic surveys, and session reminders',
      'Reclaimed 12 hours/week previously spent on manual scheduling and follow-ups'
    ],
    testimonialPlaceholder: '[Verified Client Testimonial — Case study documentation archived under CCB Advisory Standards for Educational Practitioners]',
    isVerified: true,
  },
  {
    id: 'case-3',
    clientCategory: 'B2B Digital Marketing & Web Agency',
    industryTag: 'Digital Agency & Freelancers',
    startingChallenge: 'Low-ticket clients demanding out-of-scope work; persistent cash-flow bottlenecks and constant client churn.',
    strategyImplemented: 'Implemented CCB Revenue Systems & Offer Architecture: Shifted from generalist web development to high-intent "Revenue Funnel Optimization for D2C Brands" on a 90-day retainer model.',
    executionPeriod: '90-Day Agency Restructuring',
    verifiedOutcomes: [
      'Increased minimum engagement size from ₹20,000 one-off to ₹65,000/month recurring retainer',
      'Created standard client scope of work (SOP) preventing scope creep and unbilled revisions',
      'Deployed automated WhatsApp lead qualification before initial strategy calls',
      'Achieved 100% on-time milestone delivery with zero client escalations'
    ],
    testimonialPlaceholder: '[Verified Client Testimonial — Identity protected under mutual commercial confidentiality terms]',
    isVerified: true,
  },
  {
    id: 'case-4',
    clientCategory: 'Regional Specialty Food & FMCG Brand',
    industryTag: 'Retail & Consumer Goods',
    startingChallenge: 'High product quality but trapped in local distributor credit cycles with 90-day delayed payments and minimal direct customer relationships.',
    strategyImplemented: 'Applied CCB Diagnose & Scale framework: Audited retail margins, launched a direct-to-consumer corporate gifting channel, and built regional franchise/distributor partner guidelines.',
    executionPeriod: '120-Day Distribution Redesign',
    verifiedOutcomes: [
      'Secured 14 corporate festive supply orders with 50% upfront advance terms',
      'Reduced average receivables collection cycle from 88 days to 28 days',
      'Formalized distributor agreement SOPs and minimum order thresholds',
      'Established transparent inventory & sales reporting dashboard'
    ],
    testimonialPlaceholder: '[Verified Client Testimonial — Documented case record held with CCB Business Advisory Review Board]',
    isVerified: true,
  },
];

export const DOWNLOADABLE_RESOURCES: DownloadableResource[] = [
  {
    id: 'growth-checklist',
    title: 'The Indian Business Growth Checklist',
    category: 'Business Growth',
    type: 'Checklist',
    pages: 14,
    description: 'A 50-point diagnostic checklist covering unit economics, margin leakage, founder time management, and sales process readiness.',
    highlights: [
      'Gross margin vs operating expense health thresholds',
      'Founder dependency score calculator',
      'Sales conversion funnel leak detector',
      'Quarterly compliance & cash reserve guide'
    ],
    fileFormat: 'PDF Reference Guide',
  },
  {
    id: 'action-planner',
    title: '90-Day Execution & Milestone Planner',
    category: 'Business Systems',
    type: 'Workbook',
    pages: 22,
    description: 'A practical, week-by-week execution roadmap template to break down ₹1 Crore annual vision into daily, weekly, and monthly deliverables.',
    highlights: [
      'Weekly revenue target & pipeline tracker',
      'High-priority vs low-impact task filtering matrix',
      'Team accountability delegation log',
      'Monthly review reflection template'
    ],
    fileFormat: 'Interactive Workbook & Template',
  },
  {
    id: 'lead-gen-workbook',
    title: 'B2B & B2C Lead Generation Playbook',
    category: 'Marketing & Lead Generation',
    type: 'Toolkit',
    pages: 18,
    description: 'Proven acquisition frameworks for Indian service businesses, consultants, and agencies seeking high-intent inquiries.',
    highlights: [
      'Authority-driven LinkedIn outbound sequence',
      'High-converting WhatsApp lead qualification workflow',
      'Lead magnet topic selection matrix',
      'Organic webinar structure that drives conversions'
    ],
    fileFormat: 'Implementation Playbook',
  },
  {
    id: 'sales-conversion-checklist',
    title: 'High-Ticket Sales Conversion Script & Checklist',
    category: 'Sales & Revenue',
    type: 'Checklist',
    pages: 12,
    description: 'Consultative questioning frameworks, handling Indian customer price sensitivity, and closing with confidence without discounts.',
    highlights: [
      'The 7-step consultative discovery conversation',
      'How to handle "Your price is too high" professionally',
      'Follow-up cadence for indecisive prospects',
      'Pre-call qualification questionnaire'
    ],
    fileFormat: 'Script & Action Checklist',
  },
  {
    id: 'sop-starter-kit',
    title: 'Business SOP & Delegation Starter Kit',
    category: 'AI & Automation',
    type: 'Framework',
    pages: 16,
    description: 'Standard Operating Procedure (SOP) blueprints and AI automation prompt templates to systematically delegate repeatable tasks.',
    highlights: [
      'Core SOP documentation framework',
      'Customer onboarding workflow checklist',
      'Lead intake to CRM sync automation guide',
      'Essential AI prompts for marketing & customer support'
    ],
    fileFormat: 'System Documentation Kit',
  },
];

export const FAQS: FAQItem[] = [
  {
    id: 'faq-1',
    category: 'Programs',
    question: 'How is CCB different from conventional online coaching programs?',
    answer: 'Coaching Community of Bharat operates as a hands-on Business Growth and Implementation Partner. We do not sell generic motivational videos or hypothetical courses. We audit your specific numbers, write customized 90-day roadmaps, recommend concrete sales frameworks, and assist you in executing systems tailored for Indian market dynamics.',
  },
  {
    id: 'faq-2',
    category: 'Eligibility',
    question: 'Who is the "From Vision to ₹1 Crore" pathway suitable for?',
    answer: 'It is designed for ambitious Indian entrepreneurs, service providers, coaches, trainers, startups, and small business owners who are either pre-revenue with deep domain expertise or currently generating between ₹1 Lakh to ₹10 Lakhs monthly and looking to build structured systems to cross ₹1 Crore annually.',
  },
  {
    id: 'faq-3',
    category: 'Pricing',
    question: 'Are there hidden fees or long-term lock-in contracts?',
    answer: 'No. Our pricing is completely transparent (₹15,000 for Business Clarity, ₹25,000 for Business Growth, and ₹35,000 for Business Scale). These are clear consulting fees for specific deliverables, strategy sessions, and support duration. We do not take equity, charge undisclosed commissions, or trap you in automatic renewals.',
  },
  {
    id: 'faq-4',
    category: 'Consulting Process',
    question: 'What happens after I request a Business Growth Assessment?',
    answer: 'Our advisory team reviews your business category, current revenue range, and growth goals. You receive a unique Reference ID, an introductory briefing via WhatsApp or email, and a scheduled 45-minute strategic consultation with a qualified business mentor to discuss your growth roadmap.',
  },
  {
    id: 'faq-5',
    category: 'Programs',
    question: 'Are results guaranteed?',
    answer: 'No reputable consulting firm guarantees financial outcomes, and CCB is no exception. Business success depends directly on your execution speed, product quality, market demand, and consistency. We provide the strategy, roadmaps, sales systems, and accountability; the execution rests in your hands.',
  },
  {
    id: 'faq-6',
    category: 'Consulting Process',
    question: 'How are the strategy sessions conducted?',
    answer: 'All strategy consultations are conducted 1-on-1 via high-definition video calls (Zoom / Google Meet). Prior to the session, you receive a prep questionnaire so the mentor arrives with thorough context on your business model, metrics, and bottlenecks.',
  },
];
