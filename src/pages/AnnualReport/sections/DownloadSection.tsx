import React from 'react';
import { Download, ArrowRight } from 'lucide-react';

export default function DownloadSection() {
  return (
    <div className="max-w-4xl mx-auto mb-20">
      <div className="bg-gradient-to-br from-[#991b1b] to-[#7f1d1d] rounded-2xl p-12 text-center relative overflow-hidden">
        <div className="absolute top-0 right-0 w-64 h-64 bg-yellow-500/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-yellow-500/5 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2" />
        
        <div className="relative">
          <h2 className="text-4xl font-black tracking-tighter text-white mb-6">
            Download Full Reports
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Access detailed financial statements, program outcomes, and impact metrics in our 
            comprehensive annual reports.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white hover:bg-gray-100 text-[#991b1b] px-8 py-4 rounded-full font-semibold transition-all hover:scale-105 inline-flex items-center justify-center gap-2">
              <Download className="w-5 h-5" />
              2023 Annual Report
            </button>
            <button className="bg-white hover:bg-gray-100 text-[#991b1b] px-8 py-4 rounded-full font-semibold transition-all hover:scale-105 inline-flex items-center justify-center gap-2">
              <Download className="w-5 h-5" />
              2022 Annual Report
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}