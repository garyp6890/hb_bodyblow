import React from 'react';
import { Star, Shield, Award } from 'lucide-react';

export default function CARFSection() {
  return (
    <div className="max-w-4xl mx-auto mb-20">
      <div className="bg-gray-900 rounded-2xl p-8 text-white">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-6">CARF Accreditation</h2>
          <p className="text-xl text-gray-300">
            The Commission on Accreditation of Rehabilitation Facilities (CARF) accreditation
            represents our commitment to continuously improving services, encouraging feedback,
            and serving the community.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 mb-12">
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6">
            <div className="bg-yellow-500 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4">
              <Star className="w-6 h-6 text-gray-900" />
            </div>
            <h3 className="text-lg font-bold text-center mb-2">Quality Standards</h3>
            <p className="text-gray-300 text-center text-sm">
              Meeting internationally recognized service standards and best practices
            </p>
          </div>

          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6">
            <div className="bg-yellow-500 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4">
              <Shield className="w-6 h-6 text-gray-900" />
            </div>
            <h3 className="text-lg font-bold text-center mb-2">Accountability</h3>
            <p className="text-gray-300 text-center text-sm">
              Regular reviews and assessments ensure consistent service quality
            </p>
          </div>

          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6">
            <div className="bg-yellow-500 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4">
              <Award className="w-6 h-6 text-gray-900" />
            </div>
            <h3 className="text-lg font-bold text-center mb-2">Excellence</h3>
            <p className="text-gray-300 text-center text-sm">
              Commitment to continuous improvement and service excellence
            </p>
          </div>
        </div>

        <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6">
          <h3 className="text-xl font-bold mb-4">What CARF Accreditation Means</h3>
          <div className="space-y-4">
            <p className="text-gray-300">
              CARF accreditation demonstrates that our organization meets rigorous guidelines for
              service and quality, and that we commit to continuous improvement and providing
              quality programs.
            </p>
            <p className="text-gray-300">
              This accreditation involves a detailed peer review process and on-site visits by
              surveyors who evaluate our:
            </p>
            <ul className="grid md:grid-cols-2 gap-4">
              <li className="bg-white/5 rounded-lg p-4">
                <span className="text-yellow-500">•</span> Program and service quality
              </li>
              <li className="bg-white/5 rounded-lg p-4">
                <span className="text-yellow-500">•</span> Business and service practices
              </li>
              <li className="bg-white/5 rounded-lg p-4">
                <span className="text-yellow-500">•</span> Organizational policies
              </li>
              <li className="bg-white/5 rounded-lg p-4">
                <span className="text-yellow-500">•</span> Health and safety protocols
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}