import React from 'react';

const reports = [
  {
    year: 2023,
    highlights: [
      { label: "Friends Served", value: "250+" },
      { label: "Service Hours", value: "168,960" },
      { label: "Total Revenue", value: "$2.95M" },
      { label: "Program Expenses", value: "89%" }
    ],
    achievements: [
      "Broke ground on 12,000 sq. ft. expansion project",
      "Launched new life skills curriculum",
      "Expanded Special Olympics programs",
      "Increased community partnerships"
    ]
  },
  {
    year: 2022,
    highlights: [
      { label: "Friends Served", value: "235+" },
      { label: "Service Hours", value: "156,000" },
      { label: "Total Revenue", value: "$2.67M" },
      { label: "Program Expenses", value: "88%" }
    ],
    achievements: [
      "Secured ARPA funding for expansion",
      "Enhanced residential programs",
      "Implemented new wellness initiatives",
      "Strengthened volunteer program"
    ]
  }
];

export default function ReportHighlights() {
  return (
    <div className="max-w-6xl mx-auto mb-20">
      <div className="grid md:grid-cols-2 gap-8">
        {reports.map((report) => (
          <div key={report.year} className="bg-white rounded-xl shadow-lg overflow-hidden">
            <div className="bg-gray-900 p-6">
              <h3 className="text-2xl font-bold text-white text-center">
                {report.year} Annual Report
              </h3>
            </div>

            <div className="p-6">
              <div className="grid grid-cols-2 gap-4 mb-8">
                {report.highlights.map((highlight) => (
                  <div key={highlight.label} className="text-center">
                    <div className="text-2xl font-bold text-yellow-500 mb-1">
                      {highlight.value}
                    </div>
                    <div className="text-sm text-gray-600">{highlight.label}</div>
                  </div>
                ))}
              </div>

              <h4 className="font-bold mb-4">Key Achievements</h4>
              <ul className="space-y-2">
                {report.achievements.map((achievement, index) => (
                  <li key={index} className="flex items-start gap-2">
                    <span className="w-2 h-2 bg-yellow-500 rounded-full mt-2 flex-shrink-0" />
                    <span className="text-gray-600">{achievement}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}