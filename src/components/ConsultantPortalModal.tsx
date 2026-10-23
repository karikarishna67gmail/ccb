import React, { useState, useEffect } from 'react';
import {
  X,
  Shield,
  Download,
  Trash2,
  ExternalLink,
  Phone,
  Mail,
  Calendar,
  Search,
  Filter,
  CheckCircle,
  FileSpreadsheet,
  AlertTriangle,
} from 'lucide-react';
import { LeadSubmission } from '../types';
import { LeadStorageService } from '../services/leadService';

interface ConsultantPortalModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ConsultantPortalModal: React.FC<ConsultantPortalModalProps> = ({
  isOpen,
  onClose,
}) => {
  const [leads, setLeads] = useState<LeadSubmission[]>([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [statusFilter, setStatusFilter] = useState<string>('ALL');
  const [selectedLead, setSelectedLead] = useState<LeadSubmission | null>(null);

  useEffect(() => {
    if (isOpen) {
      loadLeads();
    }
  }, [isOpen]);

  const loadLeads = () => {
    const data = LeadStorageService.getLeads();
    setLeads(data);
    if (data.length > 0 && !selectedLead) {
      setSelectedLead(data[0]);
    }
  };

  if (!isOpen) return null;

  const filteredLeads = leads.filter((l) => {
    const matchesSearch =
      l.fullName.toLowerCase().includes(searchQuery.toLowerCase()) ||
      l.businessName.toLowerCase().includes(searchQuery.toLowerCase()) ||
      l.businessEmail.toLowerCase().includes(searchQuery.toLowerCase()) ||
      l.referenceCode.toLowerCase().includes(searchQuery.toLowerCase());

    const matchesStatus = statusFilter === 'ALL' || l.status === statusFilter;

    return matchesSearch && matchesStatus;
  });

  const handleStatusChange = (id: string, newStatus: LeadSubmission['status']) => {
    LeadStorageService.updateStatus(id, newStatus);
    loadLeads();
    if (selectedLead && selectedLead.id === id) {
      setSelectedLead({ ...selectedLead, status: newStatus });
    }
  };

  const handleDelete = (id: string) => {
    if (window.confirm('Delete this assessment record from local vault?')) {
      LeadStorageService.deleteLead(id);
      loadLeads();
      if (selectedLead?.id === id) {
        setSelectedLead(null);
      }
    }
  };

  const handleExportCSV = () => {
    const csvContent = LeadStorageService.exportToCSV();
    const blob = new Blob([csvContent], { type: 'text/csv;charset=utf-8;' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.setAttribute('href', url);
    link.setAttribute('download', `CCB_Leads_Export_${new Date().toISOString().slice(0, 10)}.csv`);
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 overflow-y-auto">
      {/* Backdrop */}
      <div className="fixed inset-0 bg-slate-950/70 backdrop-blur-sm" onClick={onClose} />

      {/* Modal Dialog */}
      <div className="relative w-full max-w-6xl bg-white rounded-2xl shadow-2xl border border-slate-300 flex flex-col h-[90vh] overflow-hidden">
        
        {/* Header */}
        <div className="px-6 py-4 bg-slate-900 text-white flex items-center justify-between border-b border-slate-800">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded bg-amber-500/20 text-amber-400 flex items-center justify-center font-bold text-sm">
              <Shield className="w-4 h-4" />
            </div>
            <div>
              <h3 className="text-base font-bold text-white tracking-tight">
                CCB Advisory Desk — Lead & Assessment Vault
              </h3>
              <p className="text-[11px] text-slate-400">
                Internal review console for registered growth assessments and consultations
              </p>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <button
              type="button"
              onClick={handleExportCSV}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded bg-slate-800 hover:bg-slate-700 text-xs font-semibold text-amber-300 transition-colors cursor-pointer"
            >
              <FileSpreadsheet className="w-3.5 h-3.5" />
              <span>Export CSV ({leads.length})</span>
            </button>
            <button
              type="button"
              onClick={onClose}
              className="p-1.5 rounded text-slate-400 hover:text-white hover:bg-slate-800 cursor-pointer"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Toolbar: Search & Filters */}
        <div className="px-6 py-3 bg-slate-50 border-b border-slate-200 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs">
          <div className="relative w-full sm:w-72">
            <Search className="w-3.5 h-3.5 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              placeholder="Search by name, email, ref code..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-8 pr-3 py-1.5 bg-white border border-slate-300 rounded text-slate-900 text-xs focus:outline-none focus:ring-1 focus:ring-amber-500"
            />
          </div>

          <div className="flex items-center gap-2 w-full sm:w-auto overflow-x-auto">
            <span className="text-slate-500 font-medium">Status Filter:</span>
            {['ALL', 'NEW', 'CONTACTED', 'SCHEDULED', 'QUALIFIED', 'ENROLLED'].map((st) => (
              <button
                key={st}
                onClick={() => setStatusFilter(st)}
                className={`px-2.5 py-1 rounded text-[11px] font-semibold transition-colors cursor-pointer ${
                  statusFilter === st
                    ? 'bg-slate-900 text-white'
                    : 'bg-white text-slate-700 border border-slate-200 hover:bg-slate-100'
                }`}
              >
                {st}
              </button>
            ))}
          </div>
        </div>

        {/* Content Body: Split View (List on left, detail on right) */}
        <div className="flex-1 grid grid-cols-1 lg:grid-cols-12 overflow-hidden">
          
          {/* Left Column: Leads List */}
          <div className="lg:col-span-5 border-r border-slate-200 overflow-y-auto divide-y divide-slate-100">
            {filteredLeads.length === 0 ? (
              <div className="p-8 text-center text-xs text-slate-500">
                No assessments found matching the criteria.
              </div>
            ) : (
              filteredLeads.map((lead) => {
                const isSelected = selectedLead?.id === lead.id;
                return (
                  <button
                    key={lead.id}
                    onClick={() => setSelectedLead(lead)}
                    className={`w-full text-left p-4 transition-colors cursor-pointer block ${
                      isSelected
                        ? 'bg-amber-50/70 border-l-4 border-amber-600'
                        : 'hover:bg-slate-50'
                    }`}
                  >
                    <div className="flex items-center justify-between mb-1">
                      <span className="font-mono text-xs font-bold text-slate-900">
                        {lead.referenceCode}
                      </span>
                      <span
                        className={`text-[10px] font-bold px-2 py-0.5 rounded ${
                          lead.status === 'NEW'
                            ? 'bg-blue-100 text-blue-800'
                            : lead.status === 'SCHEDULED'
                            ? 'bg-amber-100 text-amber-800'
                            : lead.status === 'QUALIFIED'
                            ? 'bg-emerald-100 text-emerald-800'
                            : 'bg-slate-200 text-slate-700'
                        }`}
                      >
                        {lead.status}
                      </span>
                    </div>

                    <div className="text-xs font-bold text-slate-950 truncate">
                      {lead.fullName}
                    </div>

                    <div className="text-[11px] text-slate-500 truncate">
                      {lead.businessName} · {lead.businessCategory}
                    </div>

                    <div className="mt-2 flex items-center justify-between text-[11px] text-slate-500">
                      <span>{lead.revenueRange}</span>
                      <span>
                        {new Date(lead.submittedAt).toLocaleDateString('en-IN', {
                          day: 'numeric',
                          month: 'short',
                        })}
                      </span>
                    </div>
                  </button>
                );
              })
            )}
          </div>

          {/* Right Column: Lead Detail View */}
          <div className="lg:col-span-7 p-6 overflow-y-auto bg-white">
            {selectedLead ? (
              <div className="space-y-6">
                
                {/* Header Info */}
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-4 border-b border-slate-200">
                  <div>
                    <div className="flex items-center gap-2 text-xs text-slate-500">
                      <span className="font-mono font-bold text-amber-800">
                        {selectedLead.referenceCode}
                      </span>
                      <span>·</span>
                      <span>
                        Submitted {new Date(selectedLead.submittedAt).toLocaleString('en-IN')}
                      </span>
                    </div>
                    <h4 className="text-xl font-bold text-slate-950 mt-1">
                      {selectedLead.fullName}
                    </h4>
                    <p className="text-xs text-slate-600 font-medium">
                      {selectedLead.businessName} ({selectedLead.businessCategory})
                    </p>
                  </div>

                  {/* Status Dropdown */}
                  <div className="flex items-center gap-2">
                    <span className="text-xs text-slate-500 font-medium">Stage:</span>
                    <select
                      value={selectedLead.status}
                      onChange={(e) =>
                        handleStatusChange(
                          selectedLead.id,
                          e.target.value as LeadSubmission['status']
                        )
                      }
                      className="text-xs font-bold px-2.5 py-1.5 border border-slate-300 rounded bg-white text-slate-900 focus:outline-none focus:ring-1 focus:ring-amber-500"
                    >
                      <option value="NEW">NEW</option>
                      <option value="CONTACTED">CONTACTED</option>
                      <option value="SCHEDULED">SCHEDULED</option>
                      <option value="QUALIFIED">QUALIFIED</option>
                      <option value="ENROLLED">ENROLLED</option>
                    </select>
                  </div>
                </div>

                {/* Direct Action Bar */}
                <div className="flex flex-wrap items-center gap-3 text-xs">
                  <a
                    href={`tel:${selectedLead.phone}`}
                    className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded bg-slate-100 hover:bg-slate-200 text-slate-800 font-medium"
                  >
                    <Phone className="w-3.5 h-3.5 text-amber-700" />
                    <span>Call {selectedLead.phone}</span>
                  </a>
                  <a
                    href={`mailto:${selectedLead.businessEmail}`}
                    className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded bg-slate-100 hover:bg-slate-200 text-slate-800 font-medium"
                  >
                    <Mail className="w-3.5 h-3.5 text-amber-700" />
                    <span>Email Prospect</span>
                  </a>
                  <a
                    href={`https://wa.me/${selectedLead.phone.replace(/[^\d]/g, '')}?text=${encodeURIComponent(
                      `Hello ${selectedLead.fullName}, this is from Coaching Community of Bharat regarding your Business Growth Assessment (${selectedLead.referenceCode}).`
                    )}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded bg-emerald-100 hover:bg-emerald-200 text-emerald-900 font-medium"
                  >
                    <span>Open WhatsApp</span>
                  </a>
                </div>

                {/* Core Parameters Grid */}
                <div className="grid grid-cols-2 gap-4 text-xs">
                  <div className="p-3 bg-slate-50 rounded-lg border border-slate-200">
                    <span className="text-[10px] uppercase font-bold text-slate-500 block">
                      Revenue Range
                    </span>
                    <span className="font-semibold text-slate-900 text-sm mt-0.5 block">
                      {selectedLead.revenueRange}
                    </span>
                  </div>

                  <div className="p-3 bg-slate-50 rounded-lg border border-slate-200">
                    <span className="text-[10px] uppercase font-bold text-slate-500 block">
                      Growth Goal
                    </span>
                    <span className="font-semibold text-slate-900 text-sm mt-0.5 block">
                      {selectedLead.growthGoal}
                    </span>
                  </div>

                  <div className="p-3 bg-slate-50 rounded-lg border border-slate-200">
                    <span className="text-[10px] uppercase font-bold text-slate-500 block">
                      Preferred Time Slot
                    </span>
                    <span className="font-semibold text-slate-900 mt-0.5 block">
                      {selectedLead.preferredTime}
                    </span>
                  </div>

                  <div className="p-3 bg-slate-50 rounded-lg border border-slate-200">
                    <span className="text-[10px] uppercase font-bold text-slate-500 block">
                      Selected Program
                    </span>
                    <span className="font-semibold text-slate-900 mt-0.5 block">
                      {selectedLead.selectedProgram || 'Standard Assessment'}
                    </span>
                  </div>
                </div>

                {/* Primary Business Challenge Box */}
                <div>
                  <h5 className="text-xs font-bold uppercase tracking-wider text-slate-500 mb-1.5">
                    Client's Primary Stated Bottleneck:
                  </h5>
                  <div className="p-3.5 bg-slate-50 border border-slate-200 rounded-lg text-xs sm:text-sm text-slate-800 leading-relaxed">
                    {selectedLead.primaryChallenge}
                  </div>
                </div>

                {/* Calculator Snapshot if Attached */}
                {selectedLead.calculatorSnapshot && (
                  <div className="p-4 bg-amber-50/70 border border-amber-200 rounded-lg space-y-2">
                    <span className="text-xs font-bold text-amber-900 uppercase tracking-wider block">
                      ₹1 Crore Planner Metrics Attached:
                    </span>
                    <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 text-xs">
                      <div>
                        <span className="text-[10px] text-amber-800 block">Target Rev</span>
                        <span className="font-bold text-slate-900">
                          ₹{(selectedLead.calculatorSnapshot.targetRevenue / 100000).toFixed(0)}L
                        </span>
                      </div>
                      <div>
                        <span className="text-[10px] text-amber-800 block">Ticket Size</span>
                        <span className="font-bold text-slate-900">
                          ₹{selectedLead.calculatorSnapshot.ticketSize.toLocaleString('en-IN')}
                        </span>
                      </div>
                      <div>
                        <span className="text-[10px] text-amber-800 block">Gross Margin</span>
                        <span className="font-bold text-slate-900">
                          {selectedLead.calculatorSnapshot.grossMargin}%
                        </span>
                      </div>
                      <div>
                        <span className="text-[10px] text-amber-800 block">Revenue Gap</span>
                        <span className="font-bold text-slate-900">
                          ₹{(selectedLead.calculatorSnapshot.revenueGap / 100000).toFixed(0)}L
                        </span>
                      </div>
                    </div>
                  </div>
                )}

                {/* Actions Footer */}
                <div className="pt-4 border-t border-slate-200 flex items-center justify-between">
                  <button
                    type="button"
                    onClick={() => handleDelete(selectedLead.id)}
                    className="inline-flex items-center gap-1.5 text-xs text-red-600 hover:text-red-700 cursor-pointer"
                  >
                    <Trash2 className="w-3.5 h-3.5" />
                    <span>Delete Record</span>
                  </button>

                  <span className="text-[11px] text-slate-500">
                    Vault ID: {selectedLead.id}
                  </span>
                </div>

              </div>
            ) : (
              <div className="h-full flex items-center justify-center text-xs text-slate-500">
                Select an assessment from the left pane to view details.
              </div>
            )}
          </div>

        </div>

      </div>
    </div>
  );
};
