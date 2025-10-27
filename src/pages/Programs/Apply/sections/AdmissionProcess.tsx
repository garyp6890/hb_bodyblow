import React from 'react';
import { Users, ClipboardCheck, CalendarClock, FileCheck, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const programContacts = [
  {
    programs: ['Residential Habilitation', 'Respite Services', 'PAC Services'],
    contact: 'Respite/ResHab Program Director'
  },
  {
    programs: ['Facility Based Programming', 'Community Day Habilitation'],
    contact: 'Day Program Coordinator(s)'
  },
  {
    programs: ['Wellness Coordination'],
    contact: 'Executive Director and/or Wellness Coordinator'
  },
  {
    programs: ['Rec Sports', 'Special Olympics'],
    contact: 'Sports Program Director'
  }
];

const steps = [
  {
    icon: Users,
    title: 'Initial Meeting',
    description: 'Meet with the appropriate program director to discuss services, availability, and waiver status.'
  },
  {
    icon: ClipboardCheck,
    title: 'Program Review',
    description: 'Tour facility-based programs and review activities during your visit.'
  },
  {
    icon: FileCheck,
    title: 'Application Process',
    description: 'Complete and submit required application forms and documentation.'
  },
  {
    icon: CalendarClock,
    title: 'Follow-up Meeting',
    description: 'Discuss training, scheduling, and staffing assignments if application is approved.'
  }
];

export default function AdmissionProcess() {
  return (
    <div className="max-w-4xl mx-auto mb-20">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold mb-6">Admission Process</h1>
        <p className="text-xl text-gray-600">
          Our admission process is designed to ensure that each individual receives the appropriate
          programs and support they need to thrive.
        </p>
      </div>

      {/* Program Directors */}
      <div className="bg-white rounded-xl p-8 shadow-lg mb-12">
        <h2 className="text-2xl font-bold mb-6">Initial Contact</h2>
        <p className="text-gray-600 mb-6">
          Depending on the program(s) you're interested in, you'll meet with one of our program directors:
        </p>
        <div className="grid md:grid-cols-2 gap-4 mb-8">
          {programContacts.map((item, index) => (
            <div key={index} className="bg-gray-50 rounded-lg p-4">
              <div className="font-semibold text-gray-900 mb-2">{item.contact}</div>
              <div className="text-gray-600 text-sm">
                For: {item.programs.join(', ')}
              </div>
            </div>
          ))}
        </div>
        <div className="text-center">
          <Link
            to="/admin-team"
            className="inline-flex items-center justify-center gap-2 bg-yellow-500 hover:bg-yellow-600 text-black px-8 py-4 rounded-full font-semibold text-lg transition-all hover:scale-105"
          >
            Meet Our Admin Team
            <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </div>

      {/* Process Steps */}
      <div className="grid md:grid-cols-2 gap-6">
        {steps.map((step, index) => {
          const Icon = step.icon;
          return (
            <div key={index} className="bg-white rounded-xl p-6 shadow-lg">
              <div className="flex items-start gap-4">
                <div className="bg-yellow-500 p-3 rounded-lg">
                  <Icon className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-lg font-bold mb-2">{step.title}</h3>
                  <p className="text-gray-600">{step.description}</p>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* Additional Information */}
      <div className="mt-12 space-y-6">
        <div className="bg-yellow-500/10 border-l-4 border-yellow-500 p-6 rounded-r-xl">
          <h3 className="font-bold mb-2">Important Notes:</h3>
          <ul className="space-y-2 text-gray-700">
            <li>• Submission of an application does not guarantee enrollment</li>
            <li>• Partially completed applications will not be accepted</li>
            <li>• Special Olympics requires additional medical forms and examiner signatures</li>
          </ul>
        </div>

        <div className="bg-blue-500/10 border-l-4 border-blue-500 p-6 rounded-r-xl">
          <h3 className="font-bold mb-2">Waiting List Information:</h3>
          <ul className="space-y-2 text-gray-700">
            <li>• Facility-based programs typically have a 30-day wait period</li>
            <li>• Residential Habilitation wait times vary based on housing options, roommates, and staffing</li>
            <li>• You will be notified of any wait list status during your initial meeting</li>
          </ul>
        </div>

        <div className="bg-green-500/10 border-l-4 border-green-500 p-6 rounded-r-xl">
          <h3 className="font-bold mb-2">Eligibility & Review:</h3>
          <ul className="space-y-2 text-gray-700">
            <li>• Applications are reviewed on a case-by-case basis</li>
            <li>• Medicaid Waiver recipients must provide verification from their case manager</li>
            <li>• Program hours must be adequate to meet individual needs</li>
          </ul>
        </div>
      </div>
    </div>
  );
}