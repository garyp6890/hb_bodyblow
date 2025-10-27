import React from 'react';
import { Heart, Building2, Sparkles, ArrowRight } from 'lucide-react';

export default function ImpactSection() {
  return (
    <div className="max-w-6xl mx-auto mb-20">
      <h2 className="text-4xl md:text-5xl lg:text-6xl font-black tracking-tighter leading-none text-center mb-8">
        Impact
      </h2>
      <h3 className="text-3xl md:text-4xl font-bold text-center mb-12">
        How Your Support Transforms Lives
      </h3>
      <div className="grid gap-4 md:gap-6 max-w-4xl mx-auto">
        <div className="grid md:grid-cols-2 gap-4 md:gap-6">
          {/* Recreation Programs */}
          <div className="bg-yellow-500 rounded-xl p-4 md:p-6 text-gray-900 h-full">
            <div className="flex items-center gap-3 md:gap-4 mb-6">
              <Heart className="w-8 h-8 text-gray-900" />
              <h4 className="text-2xl font-bold">Recreation Programs</h4>
            </div>
            <div className="bg-white/50 rounded-lg p-3 md:p-4 mb-4">
              <p className="text-gray-900">
                As the Wabash Valley's ONLY Recreational and Educational Facility for Individuals with Disabilities, 
                recreation is a vital part of our mission.
              </p>
            </div>
            <div className="space-y-3 md:space-y-4">
              <div className="bg-white/50 rounded-lg p-3 md:p-4">
                <p className="text-gray-900 text-sm md:text-base">
                  In January 2023, the Rotary Club of Terre Haute donated $2,900 for volleyball equipment, 
                  keeping our friends engaged in a sport they love.
                </p>
              </div>
              <div className="bg-white/50 rounded-lg p-3 md:p-4">
                <p className="text-gray-900 text-sm md:text-base">
                  In July 2023, fundraising and donor efforts made it possible to break ground on a new 
                  outdoor recreation area, expanding activities for our friends.
                </p>
              </div>
            </div>
          </div>

          {/* Technology Improvements */}
          <div className="bg-[#1a1a3a] rounded-xl p-4 md:p-6 text-white h-full">
            <div className="flex items-center gap-3 md:gap-4 mb-6">
              <Sparkles className="w-8 h-8 text-yellow-500" />
              <h4 className="text-2xl font-bold">Technology Improvements</h4>
            </div>
            <div className="space-y-3 md:space-y-4">
              <div className="rounded-lg p-3 md:p-4">
                <p className="text-white text-sm md:text-base">
                  In April 2020, a grant from Guy's Who Give provided tablets, keeping our friends connected 
                  and engaged in virtual activities during the pandemic.
                </p>
              </div>
              <div className="rounded-lg p-3 md:p-4">
                <p className="text-white text-sm md:text-base">
                  In late 2016, the India Association donated $40,000 to create a computer lab, enabling our friends 
                  to develop essential technical skills tailored to their unique skills.
                </p>
              </div>
              <button className="w-full bg-yellow-500 hover:bg-yellow-600 text-black px-4 md:px-6 py-2 md:py-3 rounded-full font-semibold text-sm md:text-base transition-all flex items-center justify-center gap-2">
                Learn More About Our Programs
                <ArrowRight className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>

        {/* Facility Expansion */}
        <div className="grid md:grid-cols-[1fr_auto] gap-4 md:gap-6 h-full">
          <div className="bg-[#1a1a3a] rounded-xl p-4 md:p-6 text-white h-full">
            <div className="flex items-center gap-3 md:gap-4 mb-6">
              <Building2 className="w-8 h-8 text-yellow-500" />
              <h4 className="text-2xl font-bold">Facility Expansion</h4>
            </div>
            <div className="space-y-3 md:space-y-4">
              <div className="rounded-lg p-3 md:p-4">
                <p className="text-white text-sm md:text-base">
                  In August 2023, the Vigo County Council approved $750,000 in ARPA funds for a 12,000 sq. ft expansion.
                  Construction began in October 2024 with completion expected in late 2025.
                </p>
              </div>
              <div className="flex justify-center">
                <button className="text-yellow-500 hover:text-yellow-400 font-semibold text-sm md:text-base transition-colors flex items-center gap-2">
                Learn More About Our Expansion
                <ArrowRight className="w-5 h-5" />
                </button>
              </div>
            </div>
          </div>

          {/* Support Button Section */}
          <div className="bg-[#1a1a3a] rounded-xl p-4 md:p-6 md:w-80 h-full">
            <div className="flex flex-col justify-center h-full">
              <div className="bg-yellow-500/20 border-l-4 border-yellow-500 rounded-lg p-3 md:p-4 mb-4">
                <p className="text-white font-semibold text-sm md:text-base">
                  We still need to raise $1 million to complete our expansion. 
                  Your Support will help us create more spaces for happiness!
                </p>
              </div>
              <button className="w-full bg-yellow-500 hover:bg-yellow-600 text-black px-4 md:px-6 py-2 md:py-3 rounded-full font-semibold text-sm md:text-base transition-all">
                Support Our Expansion 
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}