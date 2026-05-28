import React from 'react';
import { BookOpen, Building2, Gift } from 'lucide-react';

const categories = [
  {
    key: 'legacy',
    label: 'Legacy Giving',
    icon: BookOpen,
    color: 'bg-orange-500',
    description: 'Planned giving & estate strategies',
  },
  {
    key: 'corporate',
    label: 'Corporate Giving',
    icon: Building2,
    color: 'bg-blue-500',
    description: 'Business partnerships & matching gifts',
  },
  {
    key: 'gifts-in-kind',
    label: 'Gifts in Kind',
    icon: Gift,
    color: 'bg-green-500',
    description: 'Donate goods, services & expertise',
  },
];

interface CategoriesSectionProps {
  activeCategory: string | null;
  setActiveCategory: (cat: string | null) => void;
}

export default function CategoriesSection({ activeCategory, setActiveCategory }: CategoriesSectionProps) {
  return (
    <div className="max-w-4xl mx-auto mb-16">
      <div className="grid grid-cols-3 gap-4">
        {categories.map(({ key, label, icon: Icon, color, description }) => {
          const active = activeCategory === key;
          return (
            <button
              key={key}
              onClick={() => setActiveCategory(active ? null : key)}
              className={`rounded-xl p-5 text-center transition-all hover:scale-[1.02] ${
                active ? 'ring-2 ring-offset-2 ring-gray-900 shadow-lg' : 'bg-white shadow hover:shadow-md'
              }`}
            >
              <div className={`${color} w-10 h-10 rounded-full flex items-center justify-center mx-auto mb-3`}>
                <Icon className="w-5 h-5 text-white" />
              </div>
              <div className="font-bold text-gray-900 mb-1">{label}</div>
              <div className="text-xs text-gray-500">{description}</div>
            </button>
          );
        })}
      </div>
    </div>
  );
}
