import React from 'react';
import { Link } from 'react-router-dom';
import { Users, Heart, Building2, BookOpen, Calendar } from 'lucide-react';

const LEARN_MORE_ITEMS = [
  {
    icon: Users,
    title: "Mission & Vision",
    description: "Our Purpose and Values",
    link: "/mission-vision"
  },
  {
    icon: Building2,
    title: "History",
    description: "Our Journey Through Time",
    link: "/history"
  },
  {
    icon: Heart,
    title: "Leadership",
    description: "Champions of Our Mission",
    link: "/leadership"
  },
  {
    icon: Calendar,
    title: "Careers",
    description: "Join Our Team",
    link: "/careers"
  },
  {
    icon: BookOpen,
    title: "Admin Team",
    description: "Meet Our Staff",
    link: "/admin-team"
  }
];

interface LearnMoreSectionProps {
  page?: string;
}

export default function LearnMoreSection({ page }: LearnMoreSectionProps) {
  // Filter out current page from items
  const filteredItems = LEARN_MORE_ITEMS.filter(item => 
    !page || !item.link.includes(page)
  );

  return (
    <div className="mt-8">
      <h1 className="text-5xl font-black tracking-tighter text-center mb-12">Learn More</h1>
      <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-6 max-w-7xl mx-auto">
        {filteredItems.map((item) => {
          const Icon = item.icon;
          return (
            <Link to={item.link} key={item.title} className="group">
              <div className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-all h-full flex flex-col items-center text-center hover:scale-105">
                <div className="bg-[#991b1b] w-12 h-12 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <Icon className="w-6 h-6 text-white" />
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-bold mb-2 group-hover:text-[#991b1b] transition-colors text-center no-underline">
                    {item.title}
                  </h3>
                  <p className="text-gray-600 text-center">{item.description}</p>
                </div>
              </div>
            </Link>
          );
        })}
      </div>
    </div>
  );
}