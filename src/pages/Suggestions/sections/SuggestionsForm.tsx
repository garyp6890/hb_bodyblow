import React, { useState } from 'react';
import { Send } from 'lucide-react';

type Relationship = 'current_client' | 'former_client' | 'current_staff' | 'former_staff' | 'volunteer' | 'advocate' | 'parent_guardian_current' | 'parent_guardian_former' | 'other';

export default function SuggestionsForm() {
  const [relationship, setRelationship] = useState<Relationship>('current_client');
  const [otherExplanation, setOtherExplanation] = useState('');
  const [canContact, setCanContact] = useState(true);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
  };

  return (
    <div className="max-w-3xl mx-auto">
      <div className="bg-white rounded-2xl shadow-xl p-8">
        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Suggestions Field */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              What suggestions do you have for potential improvements? <span className="text-red-500">*</span>
            </label>
            <textarea
              required
              rows={4}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-500 focus:border-transparent"
              placeholder="Share your thoughts on how we can improve our accessibility and current offerings..."
            />
          </div>

          {/* Relationship Field */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              What is your current relationship with Happiness Bag? <span className="text-red-500">*</span>
            </label>
            <select
              value={relationship}
              onChange={(e) => setRelationship(e.target.value as Relationship)}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-500 focus:border-transparent"
            >
              <option value="current_client">Current Client</option>
              <option value="current_staff">Current Staff</option>
              <option value="former_client">Former Client</option>
              <option value="former_staff">Former Staff</option>
              <option value="volunteer">Volunteer</option>
              <option value="advocate">Advocate</option>
              <option value="parent_guardian_current">Parent/Guardian of Current Client</option>
              <option value="parent_guardian_former">Parent/Guardian of Former Client</option>
              <option value="other">Other</option>
            </select>
          </div>

          {/* Other Explanation Field */}
          {relationship === 'other' && (
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Please explain your relationship
              </label>
              <input
                type="text"
                value={otherExplanation}
                onChange={(e) => setOtherExplanation(e.target.value)}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-500 focus:border-transparent"
              />
            </div>
          )}

          {/* Contact Permission */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              May we contact you for more details? <span className="text-red-500">*</span>
            </label>
            <div className="flex gap-4">
              <label className="flex items-center gap-2">
                <input
                  type="radio"
                  checked={canContact}
                  onChange={() => setCanContact(true)}
                  className="text-yellow-500 focus:ring-yellow-500"
                />
                <span>Yes</span>
              </label>
              <label className="flex items-center gap-2">
                <input
                  type="radio"
                  checked={!canContact}
                  onChange={() => setCanContact(false)}
                  className="text-yellow-500 focus:ring-yellow-500"
                />
                <span>No</span>
              </label>
            </div>
          </div>

          {/* Contact Information */}
          {canContact && (
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  First Name
                </label>
                <input
                  type="text"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-500 focus:border-transparent"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Last Name
                </label>
                <input
                  type="text"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-500 focus:border-transparent"
                />
              </div>
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
                  Phone Number
                </label>
                <input
                  type="tel"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-500 focus:border-transparent"
                />
              </div>
            </div>
          )}

          <div className="pt-6">
            <button
              type="submit"
              className="w-full bg-yellow-500 hover:bg-yellow-600 text-black px-8 py-4 rounded-full font-semibold transition-all inline-flex items-center justify-center gap-2"
            >
              Submit Suggestion
              <Send className="w-5 h-5" />
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}