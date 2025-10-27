import React from 'react';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function ComplianceSection() {
  return (
    <div className="max-w-4xl mx-auto">
      <div className="bg-gray-900 rounded-2xl p-8 text-white">
        <h2 className="text-3xl font-bold mb-6 text-center">Regulatory Compliance</h2>
        <p className="text-xl text-gray-300 mb-8 text-center">
          Our annual reports fulfill requirements for:
        </p>

        <div className="grid md:grid-cols-2 gap-6 mb-8">
          <div className="bg-white/10 rounded-xl p-6">
            <h3 className="font-bold mb-4">State Requirements</h3>
            <ul className="space-y-2">
              <li className="flex items-start gap-2">
                <span className="w-2 h-2 bg-yellow-500 rounded-full mt-2" />
                <span>Indiana Nonprofit Annual Report</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="w-2 h-2 bg-yellow-500 rounded-full mt-2" />
                <span>DDRS Annual Service Report</span>
              </li>
            </ul>
          </div>

          <div className="bg-white/10 rounded-xl p-6">
            <h3 className="font-bold mb-4">Federal Requirements</h3>
            <ul className="space-y-2">
              <li className="flex items-start gap-2">
                <span className="w-2 h-2 bg-yellow-500 rounded-full mt-2" />
                <span>IRS Form 990</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="w-2 h-2 bg-yellow-500 rounded-full mt-2" />
                <span>Federal Grant Reporting</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="text-center">
          <Link
            to="/standards-accreditation"
            className="inline-flex items-center gap-2 bg-yellow-500 hover:bg-yellow-600 text-black px-8 py-4 rounded-full font-semibold transition-all hover:scale-105"
          >
            Learn About Our Standards & Accreditation
            <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </div>
    </div>
  );
}