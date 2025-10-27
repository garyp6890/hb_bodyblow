import React from 'react';

export default function EmergencyNotice() {
  return (
    <div className="max-w-4xl mx-auto mb-16">
      <div className="bg-red-50 border-l-4 border-red-500 p-4 rounded">
        <div className="flex">
          <div className="ml-3">
            <p className="text-sm text-red-700">
              <strong>Emergency Notice:</strong> If you need immediate assistance, please contact your local emergency services by dialing 911 or visit your nearest emergency facility.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}