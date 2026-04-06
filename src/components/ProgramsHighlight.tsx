import React, { useEffect, useState } from 'react';
import { Music, Sun, Users, Trophy, ChevronRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { getPrograms, Program } from '../lib/programs';
import * as LucideIcons from 'lucide-react';

export default function ProgramsHighlight() {
  const [programs, setPrograms] = useState<Program[]>([]);

  useEffect(() => {
    const loadPrograms = async () => {
      const data = await getPrograms();
      setPrograms(data);
    };
    loadPrograms();
  }, []);

  const getIcon = (iconName: string) => {
    const icons: Record<string, any> = {
      Users: LucideIcons.Users,
      Sun: LucideIcons.Sun,
      Music: LucideIcons.Music,
      Trophy: LucideIcons.Trophy,
    };
    return icons[iconName] || LucideIcons.Users;
  };

  return (
    <div className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <p className="text-xl text-gray-600 text-center mb-8">
          Participating in activities with peers is a fundamental part of the human experience.
          Happiness Bag recognizes this need and makes sure to provide a range of opportunities throughout the year for everyone.
        </p>
        <h2 className="text-4xl font-bold text-center mb-12">Our Programs</h2>

        <div className="grid md:grid-cols-4 gap-8 mb-12">
          {programs.map((program) => {
            const Icon = getIcon(program.iconName);
            return (
              <div
                key={program.id}
                className="bg-gray-50 rounded-xl overflow-hidden transition-all hover:scale-105 shadow-xl hover:shadow-2xl"
              >
                <div className="relative h-48">
                  <img
                    src={program.imageUrl}
                    alt={program.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute top-4 right-4 bg-yellow-500 p-2 rounded-full">
                    <Icon className="w-6 h-6" />
                  </div>
                </div>

                <div className="p-6">
                  <h3 className="text-xl font-bold mb-3">{program.title}</h3>
                  <p className="text-gray-600 mb-4">{program.description}</p>
                </div>
              </div>
            );
          })}
        </div>
        
        <div className="text-center">
          <div className="flex items-center justify-center gap-6">
            <Link to="/programs#apply" className="bg-yellow-500 hover:bg-yellow-600 text-black px-8 py-3 rounded-full font-semibold text-lg transition-colors">
              Apply Today!
            </Link>
            <Link to="/programs" className="text-yellow-500 hover:text-yellow-600 font-semibold text-lg transition-colors inline-flex items-center">
              Learn More About Our Programs and Services
              <ChevronRight className="ml-2 w-5 h-5" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}