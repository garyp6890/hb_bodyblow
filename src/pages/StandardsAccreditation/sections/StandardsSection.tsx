import React from 'react';
import { Shield, Award, CheckCircle } from 'lucide-react';

export default function StandardsSection() {
  return (
    <div className="max-w-4xl mx-auto mb-20">
      <div className="text-center mb-12">
        <h2 className="text-4xl font-bold mb-6">Regulatory Standards</h2>
        <p className="text-xl text-gray-600">
          At Happiness Bag, we maintain the highest standards of care and service delivery through
          oversight from key regulatory bodies and accreditation organizations.
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-8">
        <div className="bg-white rounded-xl p-6 shadow-lg">
          <div className="flex flex-col items-center md:items-start md:flex-row md:gap-4">
            <div className="bg-blue-500 p-3 rounded-lg mb-4 md:mb-0">
              <Shield className="w-6 h-6 text-white" />
            </div>
            <div>
              <h3 className="text-xl font-bold mb-2 text-center md:text-left">Division of Disability and Rehabilitative Services (DDRS)</h3>
              <p className="text-gray-600 text-center md:text-left">
                DDRS oversees the delivery of services to Indiana residents with developmental disabilities,
                ensuring programs meet state standards for quality and safety. They establish guidelines
                for service delivery and monitor compliance with state regulations.
              </p>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-xl p-6 shadow-lg">
          <div className="flex flex-col items-center md:items-start md:flex-row md:gap-4">
            <div className="bg-green-500 p-3 rounded-lg mb-4 md:mb-0">
              <Award className="w-6 h-6 text-white" />
            </div>
            <div>
              <h3 className="text-xl font-bold mb-2 text-center md:text-left">Bureau of Developmental Disabilities Services (BDDS)</h3>
              <p className="text-gray-600 text-center md:text-left">
                BDDS manages, monitors, and provides technical assistance for the delivery of services
                to individuals with developmental disabilities. They ensure service providers meet
                state requirements and maintain quality standards.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-12 bg-gray-50 rounded-xl p-8">
        <h3 className="text-xl font-bold mb-4">Key Responsibilities</h3>
        <div className="grid md:grid-cols-2 gap-6">
          <ul className="space-y-3">
            <li className="flex items-start gap-2">
              <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
              <span>Service quality monitoring and evaluation</span>
            </li>
            <li className="flex items-start gap-2">
              <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
              <span>Policy development and implementation</span>
            </li>
            <li className="flex items-start gap-2">
              <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
              <span>Provider certification and oversight</span>
            </li>
          </ul>
          <ul className="space-y-3">
            <li className="flex items-start gap-2">
              <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
              <span>Technical assistance and support</span>
            </li>
            <li className="flex items-start gap-2">
              <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
              <span>Compliance monitoring</span>
            </li>
            <li className="flex items-start gap-2">
              <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
              <span>Service coordination and planning</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}