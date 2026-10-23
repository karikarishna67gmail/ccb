import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { HeroSection } from './components/HeroSection';
import { WhoWeHelpSection } from './components/WhoWeHelpSection';
import { FrameworkSection } from './components/FrameworkSection';
import { ServicesSection } from './components/ServicesSection';
import { ProgramsSection } from './components/ProgramsSection';
import { RevenuePlannerTool } from './components/RevenuePlannerTool';
import { AssessmentFormSection } from './components/AssessmentFormSection';
import { CaseStudiesSection } from './components/CaseStudiesSection';
import { AboutSection } from './components/AboutSection';
import { ResourcesSection } from './components/ResourcesSection';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { ConsultantPortalModal } from './components/ConsultantPortalModal';
import { ResourceDownloadModal } from './components/ResourceDownloadModal';
import { LegalModals } from './components/LegalModals';
import { MobileNavigation } from './components/MobileNavigation';
import { DownloadableResource, LeadSubmission } from './types';

export default function App() {
  // Modal states
  const [isConsultantDeskOpen, setIsConsultantDeskOpen] = useState(false);
  const [selectedDownloadResource, setSelectedDownloadResource] = useState<DownloadableResource | null>(null);
  const [legalModalType, setLegalModalType] = useState<'privacy' | 'terms' | null>(null);

  // Form pre-fill states
  const [formCategory, setFormCategory] = useState<string>('');
  const [formProgram, setFormProgram] = useState<string>('');
  const [calculatorSnapshot, setCalculatorSnapshot] = useState<{
    targetRevenue: number;
    currentMonthlyRevenue: number;
    ticketSize: number;
    grossMargin: number;
    revenueGap: number;
  } | null>(null);

  const scrollToSection = (sectionId: string) => {
    const el = document.getElementById(sectionId);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  const handleBookAssessment = (presetProgram?: string, presetCategory?: string) => {
    if (presetProgram) setFormProgram(presetProgram);
    if (presetCategory) setFormCategory(presetCategory);
    scrollToSection('assessment');
  };

  const handlePlannerApply = (snapshot: {
    targetRevenue: number;
    currentMonthlyRevenue: number;
    ticketSize: number;
    grossMargin: number;
    revenueGap: number;
  }) => {
    setCalculatorSnapshot(snapshot);
    scrollToSection('assessment');
  };

  return (
    <div className="min-h-screen bg-slate-50 flex flex-col text-slate-900 selection:bg-amber-100 selection:text-amber-900 font-sans pb-16 lg:pb-0">
      
      {/* Sticky Top Navigation */}
      <Navbar
        onOpenConsultation={() => handleBookAssessment()}
        onOpenLeadDesk={() => setIsConsultantDeskOpen(true)}
        onSelectSection={scrollToSection}
      />

      <main className="flex-1">
        {/* Section 3: Hero Section */}
        <HeroSection
          onBookAssessment={() => handleBookAssessment()}
          onExplorePrograms={() => scrollToSection('programs')}
          onOpenPlanner={() => scrollToSection('revenue-planner')}
        />

        {/* Section 4: Who We Help (6 Personas & Cards) */}
        <WhoWeHelpSection
          onSelectCategoryForConsultation={(cat) => handleBookAssessment(undefined, cat)}
        />

        {/* Section 5: Our Business Growth Framework (6 Interactive Steps) */}
        <FrameworkSection
          onStartStepAssessment={(stepTitle) => handleBookAssessment(`Framework Phase: ${stepTitle}`)}
        />

        {/* Section 6: Our Services (6 Core Consulting Verticals) */}
        <ServicesSection
          onDiscussService={(serviceTitle) => handleBookAssessment(serviceTitle)}
        />

        {/* Section 7: Consulting Programs & Transparent Pricing (₹15k, ₹25k, ₹35k) */}
        <ProgramsSection
          onSelectProgram={(programName) => handleBookAssessment(programName)}
        />

        {/* Section 9: Business Growth Tools — ₹1 Crore Revenue Planner */}
        <RevenuePlannerTool
          onApplyPlanToAssessment={handlePlannerApply}
        />

        {/* Section 8: Free Business Growth Assessment (Form & Validation) */}
        <AssessmentFormSection
          initialCategory={formCategory}
          initialProgram={formProgram}
          calculatorSnapshot={calculatorSnapshot}
          onConsultationBooked={(lead) => {
            console.log('New consultation recorded:', lead.referenceCode);
          }}
        />

        {/* Section 10: Case Studies and Testimonials (Verified Documentation) */}
        <CaseStudiesSection />

        {/* Section 11: About CCB (Strategy, Systems, Execution) */}
        <AboutSection
          onBookConsultation={() => handleBookAssessment()}
        />

        {/* Section 12: Resources and Content (Downloadable Playbooks) */}
        <ResourcesSection
          onOpenResourceModal={(resource) => setSelectedDownloadResource(resource)}
        />

        {/* Section 13: Contact and Conversion (WhatsApp, FAQs, Desk) */}
        <ContactSection
          onOpenConsultationModal={() => handleBookAssessment()}
        />
      </main>

      {/* Footer */}
      <Footer
        onOpenPrivacy={() => setLegalModalType('privacy')}
        onOpenTerms={() => setLegalModalType('terms')}
        onOpenConsultantDesk={() => setIsConsultantDeskOpen(true)}
        onSelectSection={scrollToSection}
        onOpenConsultation={() => handleBookAssessment()}
      />

      {/* Consultant Lead Desk Modal */}
      <ConsultantPortalModal
        isOpen={isConsultantDeskOpen}
        onClose={() => setIsConsultantDeskOpen(false)}
      />

      {/* Resource Download & View Modal */}
      <ResourceDownloadModal
        resource={selectedDownloadResource}
        onClose={() => setSelectedDownloadResource(null)}
      />

      {/* Legal & Privacy Modals */}
      <LegalModals
        type={legalModalType}
        onClose={() => setLegalModalType(null)}
      />

      {/* Sticky Mobile Bottom Navigation Bar & Mobile Drawer */}
      <MobileNavigation
        onSelectSection={scrollToSection}
        onOpenConsultation={() => handleBookAssessment()}
        onOpenLeadDesk={() => setIsConsultantDeskOpen(true)}
      />

    </div>
  );
}
