import React from 'react';
import { Download, Upload } from 'lucide-react';

interface ApplicationSectionProps {
  onDownload: () => void;
  onUpload: () => void;
}

export default function ApplicationSection({ onDownload, onUpload }: ApplicationSectionProps) {
  return (
    <div className="max-w-2xl mx-auto">
      <div className="bg-white rounded-2xl shadow-xl p-8">
        <h2 className="text-3xl font-bold mb-8 text-center">Apply Now</h2>
        <p className="text-gray-600 mb-8 text-center">
          Download our application form, fill it out, and upload it back to us. 
          We'll review your application and get back to you soon!
        </p>
        <div className="flex flex-col sm:flex-row gap-4 sm:gap-6">
          <button
            onClick={onDownload}
            className="w-full sm:flex-1 bg-yellow-500 hover:bg-yellow-600 text-black font-semibold py-4 px-6 rounded-lg transition-all hover:scale-105 flex items-center justify-center gap-2"
          >
            <Download className="w-5 h-5" />
            Download Application
          </button>
          <button
            onClick={onUpload}
            className="w-full sm:flex-1 bg-gray-900 hover:bg-gray-800 text-white font-semibold py-4 px-6 rounded-lg transition-all hover:scale-105 flex items-center justify-center gap-2"
          >
            <Upload className="w-5 h-5" />
            Upload Completed Form
          </button>
        </div>

        <div className="mt-6 text-center text-gray-600">
          <p>Questions about joining our team?</p>
          <a 
            href="mailto:brittnie.barker@happinessbag.org"
            className="text-yellow-500 hover:text-yellow-600 font-medium"
          >
            Contact Brittnie Barker
          </a>
        </div>
      </div>
    </div>
  );
}