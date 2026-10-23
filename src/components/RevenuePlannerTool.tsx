import React, { useState, useMemo } from 'react';
import {
  Calculator,
  TrendingUp,
  AlertTriangle,
  ArrowRight,
  HelpCircle,
  RefreshCw,
  PieChart,
  Calendar,
  Sparkles,
} from 'lucide-react';

interface RevenuePlannerToolProps {
  onApplyPlanToAssessment: (snapshot: {
    targetRevenue: number;
    currentMonthlyRevenue: number;
    ticketSize: number;
    grossMargin: number;
    revenueGap: number;
  }) => void;
}

export const RevenuePlannerTool: React.FC<RevenuePlannerToolProps> = ({
  onApplyPlanToAssessment,
}) => {
  // Inputs
  const [targetAnnualRevenue, setTargetAnnualRevenue] = useState<number>(10000000); // 1 Crore default
  const [ticketSize, setTicketSize] = useState<number>(25000); // ₹25,000 average purchase
  const [currentMonthlyRevenue, setCurrentMonthlyRevenue] = useState<number>(150000); // ₹1,50,000
  const [grossMarginPercent, setGrossMarginPercent] = useState<number>(65); // 65%

  // Calculations
  const metrics = useMemo(() => {
    const validTarget = Math.max(0, targetAnnualRevenue);
    const validTicket = Math.max(1, ticketSize);
    const validCurrentMonthly = Math.max(0, currentMonthlyRevenue);
    const validMargin = Math.min(100, Math.max(1, grossMarginPercent));

    // Current annual run-rate = Monthly * 12
    const currentAnnualRunRate = validCurrentMonthly * 12;

    // Monthly revenue target = Target / 12
    const monthlyTarget = Math.round(validTarget / 12);

    // Weekly revenue target = Target / 52
    const weeklyTarget = Math.round(validTarget / 52);

    // Annual transactions required = Target / average ticket size
    const annualTransactionsRequired = Math.ceil(validTarget / validTicket);
    const monthlyTransactionsRequired = Math.ceil(annualTransactionsRequired / 12);

    // Revenue gap compared with current run-rate
    const revenueGap = Math.max(0, validTarget - currentAnnualRunRate);
    const monthlyGap = Math.max(0, monthlyTarget - validCurrentMonthly);

    // Estimated Gross Profit = Target * (margin / 100)
    const estimatedGrossProfit = Math.round(validTarget * (validMargin / 100));

    return {
      monthlyTarget,
      weeklyTarget,
      annualTransactionsRequired,
      monthlyTransactionsRequired,
      currentAnnualRunRate,
      revenueGap,
      monthlyGap,
      estimatedGrossProfit,
    };
  }, [targetAnnualRevenue, ticketSize, currentMonthlyRevenue, grossMarginPercent]);

  const formatINR = (val: number): string => {
    return new Intl.NumberFormat('en-IN', {
      style: 'currency',
      currency: 'INR',
      maximumFractionDigits: 0,
    }).format(val);
  };

  const handlePresetSelect = (target: number, ticket: number, margin: number) => {
    setTargetAnnualRevenue(target);
    setTicketSize(ticket);
    setGrossMarginPercent(margin);
  };

  const handleApplyToPlan = () => {
    onApplyPlanToAssessment({
      targetRevenue: targetAnnualRevenue,
      currentMonthlyRevenue,
      ticketSize,
      grossMargin: grossMarginPercent,
      revenueGap: metrics.revenueGap,
    });
  };

  return (
    <section id="revenue-planner" className="py-20 bg-white border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto">
          <div className="flex items-center justify-center gap-2 text-xs font-bold uppercase tracking-wider text-amber-700 mb-2">
            <Calculator className="w-4 h-4" />
            <span>Interactive Modeling Engine</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-950 tracking-tight">
            ₹1 Crore Revenue Planner
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-600 leading-relaxed">
            Deconstruct your annual growth target into weekly transactions, customer ticket sizes, and margin requirements.
          </p>
        </div>

        {/* Quick Presets */}
        <div className="mt-8 flex flex-wrap items-center justify-center gap-2 text-xs">
          <span className="text-slate-600 font-semibold mr-1">Sample Archetypes:</span>
          <button
            type="button"
            onClick={() => handlePresetSelect(10000000, 50000, 70)}
            className="px-3 py-1.5 rounded-md bg-slate-100 hover:bg-slate-200 text-slate-700 font-medium transition-colors cursor-pointer"
          >
            B2B Consulting (₹50k Ticket)
          </button>
          <button
            type="button"
            onClick={() => handlePresetSelect(10000000, 5000, 50)}
            className="px-3 py-1.5 rounded-md bg-slate-100 hover:bg-slate-200 text-slate-700 font-medium transition-colors cursor-pointer"
          >
            Courses & Workshops (₹5k Ticket)
          </button>
          <button
            type="button"
            onClick={() => handlePresetSelect(25000000, 100000, 45)}
            className="px-3 py-1.5 rounded-md bg-slate-100 hover:bg-slate-200 text-slate-700 font-medium transition-colors cursor-pointer"
          >
            ₹2.5 Cr Agency / Service Model
          </button>
        </div>

        {/* Planner Workspace: Two Columns */}
        <div className="mt-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Column: User Inputs */}
          <div className="lg:col-span-6 rounded-xl border border-slate-200 bg-slate-50/70 p-6 sm:p-8 space-y-6">
            <div className="flex items-center justify-between border-b border-slate-200 pb-4">
              <h3 className="text-lg font-bold text-slate-950">
                1. Input Your Business Parameters
              </h3>
              <button
                type="button"
                onClick={() => {
                  setTargetAnnualRevenue(10000000);
                  setTicketSize(25000);
                  setCurrentMonthlyRevenue(150000);
                  setGrossMarginPercent(65);
                }}
                className="flex items-center gap-1 text-xs text-slate-600 hover:text-slate-900 cursor-pointer"
                title="Reset to Defaults"
              >
                <RefreshCw className="w-3.5 h-3.5" />
                <span>Reset</span>
              </button>
            </div>

            {/* Input 1: Target Annual Revenue */}
            <div>
              <div className="flex items-center justify-between text-xs font-bold text-slate-900 mb-1.5">
                <label htmlFor="targetRev">Target Annual Revenue (INR)</label>
                <span className="text-amber-700 font-mono text-sm">
                  {formatINR(targetAnnualRevenue)}
                </span>
              </div>
              <input
                id="targetRev"
                type="range"
                min="2500000"
                max="50000000"
                step="500000"
                value={targetAnnualRevenue}
                onChange={(e) => setTargetAnnualRevenue(Number(e.target.value))}
                className="w-full accent-amber-600 cursor-pointer h-2 bg-slate-200 rounded-lg"
              />
              <div className="flex justify-between text-[11px] text-slate-600 mt-1 font-mono">
                <span>₹25 Lakhs</span>
                <span className="font-bold text-slate-700">₹1 Crore (Default)</span>
                <span>₹5 Crores</span>
              </div>
            </div>

            {/* Input 2: Average Customer Purchase Value (Ticket Size) */}
            <div>
              <div className="flex items-center justify-between text-xs font-bold text-slate-900 mb-1.5">
                <label htmlFor="ticketSize">Average Customer Purchase Value (Ticket Size)</label>
                <span className="text-slate-900 font-mono text-sm">
                  {formatINR(ticketSize)}
                </span>
              </div>
              <input
                id="ticketSize"
                type="number"
                min="500"
                max="5000000"
                step="1000"
                value={ticketSize}
                onChange={(e) => setTicketSize(Number(e.target.value))}
                className="w-full px-3.5 py-2.5 bg-white border border-slate-300 rounded-md text-sm font-medium text-slate-900 focus:outline-none focus:ring-2 focus:ring-amber-500"
              />
              <span className="text-[11px] text-slate-600 mt-1 block">
                Typical price for your service, program, consulting retainer, or average transaction.
              </span>
            </div>

            {/* Input 3: Current Monthly Revenue */}
            <div>
              <div className="flex items-center justify-between text-xs font-bold text-slate-900 mb-1.5">
                <label htmlFor="currMonthly">Current Monthly Revenue</label>
                <span className="text-slate-900 font-mono text-sm">
                  {formatINR(currentMonthlyRevenue)}
                </span>
              </div>
              <input
                id="currMonthly"
                type="number"
                min="0"
                max="10000000"
                step="25000"
                value={currentMonthlyRevenue}
                onChange={(e) => setCurrentMonthlyRevenue(Number(e.target.value))}
                className="w-full px-3.5 py-2.5 bg-white border border-slate-300 rounded-md text-sm font-medium text-slate-900 focus:outline-none focus:ring-2 focus:ring-amber-500"
              />
              <div className="text-[11px] text-slate-600 mt-1">
                Current annual run rate: <span className="font-semibold text-slate-800">{formatINR(metrics.currentAnnualRunRate)}</span>
              </div>
            </div>

            {/* Input 4: Average Gross Margin Percentage */}
            <div>
              <div className="flex items-center justify-between text-xs font-bold text-slate-900 mb-1.5">
                <label htmlFor="grossMargin">Average Gross Margin Percentage</label>
                <span className="text-slate-900 font-mono text-sm font-bold">
                  {grossMarginPercent}%
                </span>
              </div>
              <input
                id="grossMargin"
                type="range"
                min="10"
                max="95"
                step="1"
                value={grossMarginPercent}
                onChange={(e) => setGrossMarginPercent(Number(e.target.value))}
                className="w-full accent-amber-600 cursor-pointer h-2 bg-slate-200 rounded-lg"
              />
              <div className="flex justify-between text-[11px] text-slate-600 mt-1">
                <span>10% (Low Margin Goods)</span>
                <span>50% (Standard)</span>
                <span>90% (Knowledge & Software)</span>
              </div>
            </div>
          </div>

          {/* Right Column: Calculated Outputs & Breakdown */}
          <div className="lg:col-span-6 rounded-xl border border-slate-200 bg-white p-6 sm:p-8 shadow-sm space-y-6">
            <div className="flex items-center justify-between border-b border-slate-200 pb-4">
              <h3 className="text-lg font-bold text-slate-950">
                2. Operational & Revenue Roadmap
              </h3>
              <span className="text-xs font-semibold text-amber-800 bg-amber-50 px-2.5 py-1 rounded">
                Real-Time Computation
              </span>
            </div>

            {/* Top Key Targets Grid */}
            <div className="grid grid-cols-2 gap-4">
              <div className="p-4 rounded-lg bg-slate-50 border border-slate-200">
                <span className="text-[11px] uppercase font-bold text-slate-600 block mb-1">
                  Monthly Revenue Target
                </span>
                <span className="text-xl sm:text-2xl font-extrabold text-slate-950 block">
                  {formatINR(metrics.monthlyTarget)}
                </span>
                <span className="text-[11px] text-slate-600 mt-1 block">
                  Per 30-day operating cycle
                </span>
              </div>

              <div className="p-4 rounded-lg bg-slate-50 border border-slate-200">
                <span className="text-[11px] uppercase font-bold text-slate-600 block mb-1">
                  Weekly Revenue Target
                </span>
                <span className="text-xl sm:text-2xl font-extrabold text-slate-950 block">
                  {formatINR(metrics.weeklyTarget)}
                </span>
                <span className="text-[11px] text-slate-600 mt-1 block">
                  Paced across 52 weeks
                </span>
              </div>
            </div>

            {/* Transaction & Gap Breakdown */}
            <div className="space-y-3.5">
              <div className="flex items-center justify-between p-3.5 rounded-lg border border-slate-100 bg-slate-50/50">
                <div>
                  <span className="text-xs font-bold text-slate-900 block">
                    Transactions Required Annually
                  </span>
                  <span className="text-[11px] text-slate-600">
                    At your average purchase value of {formatINR(ticketSize)}
                  </span>
                </div>
                <div className="text-right">
                  <span className="text-lg font-bold text-slate-950 font-mono">
                    {metrics.annualTransactionsRequired} sales
                  </span>
                  <span className="text-[11px] text-slate-600 block">
                    (~{metrics.monthlyTransactionsRequired}/month)
                  </span>
                </div>
              </div>

              <div className="flex items-center justify-between p-3.5 rounded-lg border border-slate-100 bg-slate-50/50">
                <div>
                  <span className="text-xs font-bold text-slate-900 block">
                    Annual Revenue Gap to Target
                  </span>
                  <span className="text-[11px] text-slate-600">
                    Target {formatINR(targetAnnualRevenue)} minus Current Run-Rate {formatINR(metrics.currentAnnualRunRate)}
                  </span>
                </div>
                <div className="text-right">
                  <span className="text-lg font-bold text-amber-800 font-mono">
                    {formatINR(metrics.revenueGap)}
                  </span>
                  <span className="text-[11px] text-slate-600 block">
                    Additional revenue needed
                  </span>
                </div>
              </div>

              <div className="flex items-center justify-between p-3.5 rounded-lg border border-emerald-100 bg-emerald-50/40">
                <div>
                  <span className="text-xs font-bold text-emerald-950 block">
                    Estimated Gross Profit at {grossMarginPercent}% Margin
                  </span>
                  <span className="text-[11px] text-emerald-800">
                    Revenue minus direct cost of goods or service delivery
                  </span>
                </div>
                <div className="text-right">
                  <span className="text-lg font-bold text-emerald-900 font-mono">
                    {formatINR(metrics.estimatedGrossProfit)}
                  </span>
                  <span className="text-[11px] text-emerald-700 block">
                    Gross contribution
                  </span>
                </div>
              </div>
            </div>

            {/* Clear Explanation of Assumptions & Distinction */}
            <div className="p-4 rounded-lg bg-slate-50 border border-slate-200 text-xs text-slate-700 space-y-2">
              <div className="font-bold text-slate-900 flex items-center gap-1.5">
                <HelpCircle className="w-3.5 h-3.5 text-amber-700" />
                <span>Financial & Modeling Assumptions:</span>
              </div>
              <p className="leading-relaxed">
                <strong className="text-slate-900">Gross Profit vs Net Profit: </strong>
                Gross profit accounts only for direct fulfillment or delivery costs. Operating expenses (salaries, marketing, rent, taxes, and interest) must be deducted to arrive at net profit before tax.
              </p>
              <p className="leading-relaxed">
                <strong className="text-slate-900">Conversion Funnel Reality: </strong>
                To achieve {metrics.monthlyTransactionsRequired} monthly sales at a realistic 5% sales closing rate, your business requires approximately {metrics.monthlyTransactionsRequired * 20} qualified lead conversations each month.
              </p>
            </div>

            {/* CTA */}
            <button
              type="button"
              onClick={handleApplyToPlan}
              className="w-full inline-flex items-center justify-center gap-2 px-6 py-4 text-sm font-bold text-white bg-slate-950 hover:bg-slate-900 border border-slate-900 hover:border-amber-400 rounded-md shadow-md transition-all cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-amber-500"
            >
              <Sparkles className="w-4 h-4 text-amber-400" />
              <span>GET MY PERSONALIZED GROWTH PLAN</span>
              <ArrowRight className="w-4 h-4 text-white" />
            </button>
          </div>

        </div>

        {/* Mandatory Disclaimer */}
        <div className="mt-8 p-4 rounded-lg bg-slate-100 border border-slate-200 text-xs text-slate-600 text-center max-w-4xl mx-auto leading-relaxed">
          <strong className="text-slate-800">Strategic Calculator Disclaimer: </strong>
          This tool is provided for strategic scenario planning, mathematical modeling, and goal-setting purposes only. It does not constitute a financial forecast, commercial guarantee, or promise of earnings. Actual business performance depends on execution capabilities, market demand, sales competence, and economic factors.
        </div>

      </div>
    </section>
  );
};
