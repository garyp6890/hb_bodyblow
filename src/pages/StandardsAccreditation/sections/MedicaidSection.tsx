import React from 'react';
import { FileText, Clock, Users, Download, ArrowRight } from 'lucide-react';

export default function MedicaidSection() {
  return (
    <div className="max-w-4xl mx-auto mb-20">
      <div className="text-center mb-12">
        <h2 className="text-4xl font-bold mb-6">Medicaid Waiver Process</h2>
        <p className="text-xl text-gray-600">
          Understanding the Medicaid Waiver process is crucial for accessing our services.
          Here's what you need to know about eligibility and application.
        </p>
      </div>

      <div className="grid gap-8">
        {/* Important Updates Section */}
        <div className="bg-yellow-500/10 border-l-4 border-yellow-500 p-6 rounded-r-xl">
          <div className="flex flex-col md:flex-row md:items-center gap-4">
            <div className="flex-1">
              <p className="text-gray-800">
                On July 1, 2024, several changes to Indiana's Medicaid Waivers went into effect. Please visit{' '}
                <a 
                  href="https://www.in.gov/medicaid/members/home-and-community-based-services/aged-and-disabled-waiver/#:~:text=On%20July%201%2C%202024%2C%20the,of%20Disability%20and%20Rehabilitative%20Services."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 hover:text-blue-800 font-medium"
                >
                  2024 Medicaid Waiver Changes
                </a>
                {' '}for information and updates.
              </p>
            </div>
          </div>
        </div>

        {/* Application Resources */}
        <div className="bg-white rounded-xl p-6 shadow-lg">
          <div className="flex flex-col items-center md:items-start md:flex-row md:gap-4">
            <div className="bg-blue-500 p-3 rounded-lg mb-4 md:mb-0">
              <FileText className="w-6 h-6 text-white" />
            </div>
            <div>
              <h3 className="text-xl font-bold mb-4 text-center md:text-left">Application Resources</h3>
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <Download className="w-5 h-5 text-blue-500" />
                  <a 
                    href="/guide.pdf"
                    className="text-blue-600 hover:text-blue-800"
                  >
                    A Guide to Indiana's Medicaid Waiver Program for Home & Community Based Services
                  </a>
                </div>
                <div className="flex items-center gap-3">
                  <ArrowRight className="w-5 h-5 text-blue-500" />
                  <a 
                    href="https://bddsgateway.fssa.in.gov/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-600 hover:text-blue-800"
                  >
                    Apply online at BDS Gateway
                  </a>
                </div>
                <div className="flex items-center gap-3">
                  <ArrowRight className="w-5 h-5 text-blue-500" />
                  <a 
                    href="https://www.in.gov/fssa/ddrs/developmental-disability-services/bureau-of-developmental-disabilities-services/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-600 hover:text-blue-800"
                  >
                    Find your local BDS office
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Application Process */}
        <div className="bg-white rounded-xl p-6 shadow-lg">
          <div className="flex flex-col items-center md:items-start md:flex-row md:gap-4">
            <div className="bg-green-500 p-3 rounded-lg mb-4 md:mb-0">
              <Clock className="w-6 h-6 text-white" />
            </div>
            <div>
              <h3 className="text-xl font-bold mb-4 text-center md:text-left">Application Process</h3>
              <ol className="space-y-4">
                <li className="flex items-start gap-4">
                  <span className="bg-green-500/10 w-8 h-8 flex items-center justify-center rounded-full flex-shrink-0">1</span>
                  <p>Apply online through BDS Gateway or visit your local BDS office</p>
                </li>
                <li className="flex items-start gap-4">
                  <span className="bg-green-500/10 w-8 h-8 flex items-center justify-center rounded-full flex-shrink-0">2</span>
                  <p>Complete required documentation and eligibility assessment</p>
                </li>
                <li className="flex items-start gap-4">
                  <span className="bg-green-500/10 w-8 h-8 flex items-center justify-center rounded-full flex-shrink-0">3</span>
                  <p>Work with assigned case manager to develop support plan</p>
                </li>
                <li className="flex items-start gap-4">
                  <span className="bg-green-500/10 w-8 h-8 flex items-center justify-center rounded-full flex-shrink-0">4</span>
                  <p>Choose service providers and begin receiving services</p>
                </li>
              </ol>
            </div>
          </div>
        </div>

        {/* Need Help Section */}
        <div className="bg-yellow-500 rounded-xl p-6 shadow-lg">
          <h3 className="text-xl font-bold mb-4 text-center text-gray-900">Questions? Need Help Applying?</h3>
          <div className="flex flex-col md:flex-row justify-center gap-4">
            <a 
              href="https://www.in.gov/medicaid/members/member-resources/contact-us/"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-gray-900 text-white px-6 py-3 rounded-full hover:bg-gray-800 transition-colors flex items-center justify-center gap-2 text-center w-full md:w-auto"
            >
              Medicaid Contact Resources
              <ArrowRight className="w-4 h-4" />
            </a>
            <a 
              href="/contact"
              className="bg-gray-900 text-white px-6 py-3 rounded-full hover:bg-gray-800 transition-colors flex items-center justify-center gap-2 text-center w-full md:w-auto"
            >
              Contact Us
              <ArrowRight className="w-4 h-4" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}