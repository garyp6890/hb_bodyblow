import React from 'react';
import { FileText, Shield, Users } from 'lucide-react';

export default function ReportOverview() {
  return (
    <div className="max-w-4xl mx-auto mb-20">
      <div className="text-center mb-12">
        <h2 className="text-4xl font-bold mb-6">Annual Impact Reports</h2>
        <p className="text-xl text-gray-600">
          Our annual reports provide comprehensive insights into our programs, impact, and financial 
          stewardship. These reports demonstrate our commitment to transparency and showcase how 
          we're fulfilling our mission to serve the Wabash Valley community.
        </p>
      </div>

      <div className="grid md:grid-cols-3 gap-6">
        <div className="bg-white rounded-xl p-6 shadow-lg">
          <div className="bg-yellow-500 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4">
            <FileText className="w-6 h-6 text-white" />
          </div>
          <h3 className="text-lg font-bold text-center mb-2">Transparency</h3>
          <p className="text-gray-600 text-center">
            Detailed financial reporting and program outcomes
          </p>
        </div>

        <div className="bg-white rounded-xl p-6 shadow-lg">
          <div className="bg-yellow-500 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4">
            <Shield className="w-6 h-6 text-white" />
          </div>
          <h3 className="text-lg font-bold text-center mb-2">Compliance</h3>
          <p className="text-gray-600 text-center">
            Meeting regulatory requirements and standards
          </p>
        </div>

        <div className="bg-white rounded-xl p-6 shadow-lg">
          <div className="bg-yellow-500 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4">
            <Users className="w-6 h-6 text-white" />
          </div>
          <h3 className="text-lg font-bold text-center mb-2">Accountability</h3>
          <p className="text-gray-600 text-center">
            Demonstrating responsible stewardship
          </p>
        </div>
      </div>
    </div>
  );
}