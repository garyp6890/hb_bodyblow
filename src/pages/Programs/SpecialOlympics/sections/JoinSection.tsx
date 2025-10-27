import React from 'react';
import { ExternalLink, ArrowRight, CheckCircle } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function JoinSection() {
  return (
    <div className="max-w-4xl mx-auto mb-20">
      <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
        <div className="relative h-40 sm:h-48">
          <img
            src="https://images.unsplash.com/photo-1526976668912-1a811878dd37?auto=format&fit=crop&q=80"
            alt="Join Special Olympics"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/30 to-transparent" />
          <div className="absolute bottom-4 sm:bottom-6 left-4 sm:left-6">
            <h2 className="text-2xl sm:text-3xl font-bold text-white mb-2">Join Special Olympics</h2>
            <p className="text-white/90">Begin Your Journey to Excellence</p>
          </div>
        </div>

        <div className="p-4 sm:p-8">
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-xl font-bold mb-4">Participation Requirements</h3>
              <ul className="space-y-3">
                {[
                  "Must be identified as having an intellectual disability",
                  "Medical clearance required through Special Olympics Medical Form",
                  "Age requirements vary by program",
                  "Commitment to regular practice attendance"
                ].map((requirement, index) => (
                  <li key={index} className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700 text-sm sm:text-base">{requirement}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-gray-50 rounded-xl p-6">
              <h3 className="text-xl font-bold mb-4">Get Started Today</h3>
              <p className="text-gray-600 mb-6 text-sm sm:text-base">
                Download and complete the required forms to begin your Special Olympics journey. 
                Once complete, select the "Get Started Today" button below to complete the process.
              </p>
              <div className="space-y-4">
                <a 
                  href="https://medform.specialolympics.org/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full bg-green-500 hover:bg-green-600 text-white px-6 py-3 rounded-full font-semibold transition-all inline-flex items-center justify-center gap-2"
                >
                  <ExternalLink className="w-5 h-5" />
                  <span className="text-sm sm:text-base">Complete Medical Form</span>
                </a>
                <Link
                  to="/programs/apply"
                  className="w-full bg-gray-900 hover:bg-gray-800 text-white px-6 py-3 rounded-full font-semibold transition-all inline-flex items-center justify-center gap-2"
                >
                  <span className="text-sm sm:text-base">Get Started Today</span>
                  <ArrowRight className="w-5 h-5" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}