import React from 'react';
import { ArrowRight } from 'lucide-react'; 
import { Link } from 'react-router-dom';

export default function ApplySection() {
  return (
    <div className="max-w-4xl mx-auto mb-20">
      <div className="bg-yellow-500 rounded-2xl p-8 md:p-12 text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
          Ready to Join Our Programs?
        </h2>
        <p className="text-xl text-gray-800 mb-8 max-w-2xl mx-auto">
          Take the first step towards empowerment and growth. Our team is here to help you 
          find the perfect program that matches your interests and goals.
        </p>
        <Link
          to="/programs/apply"
          className="bg-gray-900 hover:bg-gray-800 text-white px-8 py-4 rounded-full font-semibold text-lg transition-all inline-flex items-center gap-2 hover:scale-105"
        >
          Get Started Today
          <ArrowRight className="w-5 h-5" />
        </Link>
      </div>
      
      <div className="bg-gray-900 rounded-2xl p-8">
        <h2 className="text-2xl font-bold text-yellow-500 mb-4 text-center">Program Standards & Accreditation</h2>
        <p className="text-white mb-6 text-center">
          All programs are Medicaid waiver-based programs, with the option for private pay if not a
          recipient of the Medicaid Waiver (with the exception of Residential Habilitation, PAC & Wellness).
          We are held to the standards established by Division of Disability and Rehabilitative Services (DDRS)
          and the Bureau of Disability Services (BDS) and the Commission on Accreditation of Rehabilitation
          Facilities (CARF) accreditation body.
        </p>
        <div className="text-center">
          <Link
            to="/standards-accreditation"
            className="inline-flex items-center gap-2 text-yellow-500 hover:text-yellow-400 font-semibold"
          >
            Learn More About Our Standards & Accreditation
            <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </div>
    </div>
  );
}