import React from 'react';
import { Phone, Mail, MapPin, Clock } from 'lucide-react';
import { CONTACT } from '../../../utils/constants';

export default function ContactInfo() {
  return (
    <div className="max-w-4xl mx-auto mb-20">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold mb-4">Get in Touch</h1>
        <p className="text-xl text-gray-600">
          Have questions about our programs or services? We're here to help!
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-8">
        <div className="bg-white rounded-xl p-6 shadow-lg">
          <div className="flex items-center gap-4 mb-6">
            <div className="bg-yellow-500 p-3 rounded-lg">
              <Phone className="w-6 h-6 text-black" />
            </div>
            <div>
              <h3 className="text-lg font-bold">Phone</h3>
              <a 
                href={`tel:${CONTACT.phone}`}
                className="text-gray-600 hover:text-yellow-500 transition-colors"
              >
                {CONTACT.phone}
              </a>
            </div>
          </div>

          <div className="flex items-center gap-4 mb-6">
            <div className="bg-yellow-500 p-3 rounded-lg">
              <Mail className="w-6 h-6 text-black" />
            </div>
            <div>
              <h3 className="text-lg font-bold">Email</h3>
              <a 
                href={`mailto:${CONTACT.email}`}
                className="text-gray-600 hover:text-yellow-500 transition-colors"
              >
                {CONTACT.email}
              </a>
            </div>
          </div>

          <div className="flex items-center gap-4">
            <div className="bg-yellow-500 p-3 rounded-lg">
              <MapPin className="w-6 h-6 text-black" />
            </div>
            <div>
              <h3 className="text-lg font-bold">Address</h3>
              <p className="text-gray-600">{CONTACT.address}</p>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-xl p-6 shadow-lg">
          <div className="flex items-center gap-4 mb-6">
            <div className="bg-yellow-500 p-3 rounded-lg">
              <Clock className="w-6 h-6 text-black" />
            </div>
            <div>
              <h3 className="text-lg font-bold">Hours of Operation</h3>
            </div>
          </div>

          <div className="space-y-2">
            <div className="flex justify-between">
              <span className="font-medium">Monday - Friday</span>
              <span className="text-gray-600">7:30 AM - 5:00 PM</span>
            </div>
            <div className="flex justify-between">
              <span className="font-medium">Saturday - Sunday</span>
              <span className="text-gray-600">Closed</span>
            </div>
            <div className="mt-4 text-sm text-gray-600">
              * Hours may vary for special events and programs
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}