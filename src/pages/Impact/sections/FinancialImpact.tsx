import React from 'react';
import { DollarSign, TrendingUp, PieChart, ArrowRight } from 'lucide-react';

const financialMetrics = {
  // Revenue Breakdown from Form 990
  totalRevenue: 2953559,
  programServices: 2536036,
  grantsContributions: 378336,
  investmentIncome: 12677,
  gainFromAssets: 21134,
  miscRevenue: 5376,

  // Expense Breakdown from Form 990
  totalExpenses: 2905021,
  salariesWages: 2283119,
  employeeBenefits: 79124,
  payrollTaxes: 228396,
  accountingFees: 5200,
  fundraisingFees: 26693,
  investmentFees: 3062,
  otherFees: 388,
  advertising: 2770,
  officeExpenses: 6929,
  occupancy: 77019,
  conferences: 30512,
  depreciation: 32973,
  insurance: 16218,
  otherExpenses: 112618
};

// Calculate percentages for the pie chart
const totalExpenses = financialMetrics.totalExpenses;
const directServices = financialMetrics.salariesWages + financialMetrics.employeeBenefits + financialMetrics.payrollTaxes;
const directServicesPercent = Math.round((directServices / totalExpenses) * 100);
const adminPercent = Math.round(((financialMetrics.accountingFees + financialMetrics.officeExpenses + financialMetrics.otherExpenses) / totalExpenses) * 100);
const facilitiesPercent = 100 - directServicesPercent - adminPercent;

export default function FinancialImpact() {
  return (
    <div className="max-w-6xl mx-auto mb-20">
      <div className="text-center mb-12">
        <h2 className="text-4xl font-bold mb-6">Financial Impact</h2>
        <p className="text-xl text-gray-600">
          Fiscal Year 2023 Financial Overview
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-8">
        {/* Revenue Breakdown */}
        <div className="bg-white rounded-xl shadow-lg p-6">
          <div className="flex items-center gap-3 mb-6">
            <DollarSign className="w-6 h-6 text-green-500" />
            <h3 className="text-xl font-bold">Revenue Sources</h3>
          </div>
          
          <div className="space-y-4">
            {[
              { label: 'Program Services', amount: financialMetrics.programServices },
              { label: 'Grants & Contributions', amount: financialMetrics.grantsContributions },
              { label: 'Investment Income', amount: financialMetrics.investmentIncome },
              { label: 'Asset Sales', amount: financialMetrics.gainFromAssets },
              { label: 'Other Revenue', amount: financialMetrics.miscRevenue }
            ].map(({ label, amount }) => (
              <div key={label} className="flex items-center justify-between">
                <span className="text-gray-600">{label}</span>
                <span className="font-semibold">
                  ${amount.toLocaleString()}
                </span>
              </div>
            ))}
            <div className="pt-4 border-t">
              <div className="flex items-center justify-between font-bold">
                <span>Total Revenue</span>
                <span>${financialMetrics.totalRevenue.toLocaleString()}</span>
              </div>
            </div>
          </div>
        </div>

        {/* Expense Allocation */}
        <div className="bg-white rounded-xl shadow-lg p-6">
          <div className="flex items-center gap-3 mb-6">
            <PieChart className="w-6 h-6 text-blue-500" />
            <h3 className="text-xl font-bold">Expense Allocation</h3>
          </div>
          
          <div className="space-y-4">
            {[
              { 
                program: 'Direct Services & Staffing', 
                percentage: directServicesPercent,
                amount: directServices
              },
              { 
                program: 'Administrative', 
                percentage: adminPercent,
                amount: financialMetrics.accountingFees + financialMetrics.officeExpenses + financialMetrics.otherExpenses
              },
              { 
                program: 'Facilities & Operations', 
                percentage: facilitiesPercent,
                amount: financialMetrics.occupancy + financialMetrics.depreciation + financialMetrics.insurance
              }
            ].map((item) => (
              <div key={item.program}>
                <div className="flex justify-between mb-1">
                  <span className="text-gray-600">{item.program}</span>
                  <span className="font-semibold">{item.percentage}%</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div
                    className="bg-blue-500 rounded-full h-2"
                    style={{ width: `${item.percentage}%` }}
                  />
                </div>
                <div className="text-right text-sm text-gray-500 mt-1">
                  ${item.amount.toLocaleString()}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Additional Financial Highlights */}
      <div className="grid md:grid-cols-3 gap-6 mt-8">
        <div className="bg-white rounded-xl shadow-lg p-6">
          <div className="text-sm text-gray-600 mb-2">Year-Over-Year Growth</div>
          <div className="text-2xl font-bold text-green-500 mb-1">+10.6%</div>
          <div className="text-sm text-gray-500">Total Revenue Growth</div>
        </div>
        
        <div className="bg-white rounded-xl shadow-lg p-6">
          <div className="text-sm text-gray-600 mb-2">Program Efficiency</div>
          <div className="text-2xl font-bold text-blue-500 mb-1">89%</div>
          <div className="text-sm text-gray-500">Program Service Expenses</div>
        </div>
        
        <div className="bg-white rounded-xl shadow-lg p-6">
          <div className="text-sm text-gray-600 mb-2">Total Assets</div>
          <div className="text-2xl font-bold text-purple-500 mb-1">$2.4M</div>
          <div className="text-sm text-gray-500">2.3% Growth from 2022</div>
        </div>
      </div>
    </div>
  );
}