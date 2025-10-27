import React from 'react';
import { ArrowRight } from 'lucide-react';

const programs = [
  { id: 'adp', label: 'Adult Day Program: Facility Based Habilitation' },
  { id: 'rh', label: 'Residential Habilitation' },
  { id: 'rcp', label: 'Respite Care Program' },
  { id: 'pac', label: 'PAC Services' },
  { id: 'sdc', label: 'Summer Day Camp' },
  { id: 'dhi', label: 'DHI Individual and Group: Community Based Habilitation' },
  { id: 'wc', label: 'Wellness Coordination' },
  { id: 'mt', label: 'Music Therapy' },
  { id: 'rso', label: 'Recreational Sports and Special Olympics' }
];

export default function ApplicationForm() {
  return (
    <div className="max-w-4xl mx-auto mb-20">
      <div className="bg-white rounded-2xl shadow-xl p-8">
        <h2 className="text-3xl font-bold mb-8">Program Application</h2>
        <p className="text-gray-600 mb-8">
          This is the first step in the application process. Please fill out the form below and a 
          Happiness Bag team member will reach out to you with further steps and information. 
          We look forward to having you onboard!
        </p>

        <form className="space-y-6">
          {/* Contact Person Information */}
          <div>
            <h3 className="text-xl font-semibold mb-4">Contact Information</h3>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  First Name <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  required
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-500 focus:border-transparent"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Last Name <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  required
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-500 focus:border-transparent"
                />
              </div>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Email
              </label>
              <input
                type="email"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-500 focus:border-transparent"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Phone Number <span className="text-red-500">*</span>
              </label>
              <input
                type="tel"
                required
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-500 focus:border-transparent"
              />
            </div>
          </div>

          {/* Participant Information */}
          <div>
            <h3 className="text-xl font-semibold mb-4">Participant Information</h3>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  First Name <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  required
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-500 focus:border-transparent"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Last Name <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  required
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-500 focus:border-transparent"
                />
              </div>
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Age <span className="text-red-500">*</span>
            </label>
            <input
              type="number"
              required
              min="0"
              max="120"
              className="w-32 px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-500 focus:border-transparent"
            />
          </div>

          {/* Programs Selection */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-4">
              What programs and services are you interested in? Check all that apply. <span className="text-red-500">*</span>
            </label>
            <div className="space-y-3">
              {programs.map((program) => (
                <label key={program.id} className="flex items-start gap-3">
                  <input
                    type="checkbox"
                    name="programs"
                    value={program.id}
                    className="mt-1 h-4 w-4 text-yellow-500 focus:ring-yellow-500 border-gray-300 rounded"
                  />
                  <span className="text-gray-700">{program.label}</span>
                </label>
              ))}
            </div>
          </div>

          <div className="pt-6">
            <button
              type="submit"
              className="bg-yellow-500 hover:bg-yellow-600 text-black px-8 py-4 rounded-full font-semibold transition-all inline-flex items-center gap-2"
            >
              Submit Application
              <ArrowRight className="w-5 h-5" />
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}