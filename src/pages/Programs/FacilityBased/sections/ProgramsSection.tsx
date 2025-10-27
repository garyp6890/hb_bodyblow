import React, { useState } from 'react';
import { Building2, Users } from 'lucide-react';

const programs = [
  {
    title: "Adult Day Program",
    description: "The Happiness Bag Commission on Accreditation of Rehabilitation Facilities (CARF)-accredited Adult Day Program provides a structured, supportive environment for adults with disabilities who have completed their formal education. This facility-based habilitation program is designed to enhance and maintain daily living skills, as well as develop adaptive skills for everyday life. Our person-centered activities are tailored to meet the unique needs and goals of each individual. With a daily schedule incorporating social activities, exercise, arts and crafts, and sensory engagement, we ensure a diverse and enriching experience. Our program operates Monday through Friday, from 7:30 am to 5:00 pm, creating a consistent and reliable schedule. We provide direct supervision and training to implement person-centered goals, with staffing ratios of 8:1, 4:1, or 1:1, as needed.",
    image: "https://i.imgur.com/jAz6syE.jpeg",
    features: [
      "Structured daily activities",
      "Person-centered approach",
      "Flexible staffing ratios",
      "Social skill development"
    ]
  },
  {
    title: "Day Habilitation Individual (DHI) and Group",
    description: "Within the Happiness Bag Day Program, we incorporate our Community-Based Habilitation services. These services are available in individual and group settings, and focus on supporting learning and skill development outside of the participant's home. These services include assistance in areas such as self-care, sensory and motor development, socialization, daily living skills, communication, community living, and social skills. Our activities are designed to build relationships and natural supports within the community. We provide opportunities to engage in leisure activities, attend public events, participate in educational activities, explore hobbies, experience unpaid work, and maintain connections with family and friends. Our goal is to assist participants in developing self-advocacy skills, exercising their civil rights, and becoming more independent and productive in the community.",
    image: "https://images.unsplash.com/photo-1517486808906-6ca8b3f04846?auto=format&fit=crop&q=80",
    features: [
      "Individual and group settings",
      "Community integration",
      "Skill development focus",
      "Self-advocacy training"
    ]
  }
];

export default function ProgramsSection() {
  const [activeProgram, setActiveProgram] = useState(0);

  return (
    <div className="max-w-6xl mx-auto mb-20">
      <div className="grid md:grid-cols-5 gap-8">
        {/* Program Navigation */}
        <div className="md:col-span-2">
          <div className="sticky top-4 space-y-4">
            {programs.map((program, index) => (
              <button
                key={index}
                onClick={() => setActiveProgram(index)}
                className={`w-full text-left p-6 rounded-xl transition-all ${
                  activeProgram === index
                    ? 'bg-blue-500 text-white shadow-lg'
                    : 'bg-blue-500/10 hover:bg-blue-500/20'
                }`}
              >
                <div className="flex items-center gap-4">
                  {index === 0 ? (
                    <Building2 className={`w-6 h-6 ${
                      activeProgram === index ? 'text-white' : 'text-blue-500'
                    }`} />
                  ) : (
                    <Users className={`w-6 h-6 ${
                      activeProgram === index ? 'text-white' : 'text-blue-500'
                    }`} />
                  )}
                  <div>
                    <h3 className={`font-bold ${
                      activeProgram === index ? 'text-white' : 'text-blue-700'
                    }`}>
                      {program.title}
                    </h3>
                  </div>
                </div>
              </button>
            ))}
          </div>
        </div>

        {/* Program Details */}
        <div className="md:col-span-3">
          <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
            <div className="relative h-64">
              <img
                src={programs[activeProgram].image}
                alt={programs[activeProgram].title}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/30 to-transparent" />
              <div className="absolute bottom-4 left-4">
                <h2 className="text-2xl font-bold text-white">
                  {programs[activeProgram].title}
                </h2>
              </div>
            </div>

            <div className="p-6">
              <p className="text-gray-700 mb-6 leading-relaxed">
                {programs[activeProgram].description}
              </p>
              
              <div className="grid sm:grid-cols-2 gap-4">
                {programs[activeProgram].features.map((feature, index) => (
                  <div
                    key={index}
                    className="bg-blue-500/10 rounded-lg p-4"
                  >
                    <span className="text-blue-700">{feature}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}