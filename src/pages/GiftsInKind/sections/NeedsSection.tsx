import React from 'react';
import { Palette, Activity, Droplet, BookOpen } from 'lucide-react';

const needCategories = [
  {
    title: "Art Supplies",
    icon: Palette,
    items: ["Markers", "Crayons", "Coloring books", "Construction paper", "Scissors", "Glue sticks"]
  },
  {
    title: "Sports Equipment",
    icon: Activity,
    items: ["Basketballs", "Bowling equipment", "Flag football gear", "Jump ropes", "Cones", "Exercise bands"]
  },
  {
    title: "Hygiene Products",
    icon: Droplet,
    items: ["Facial tissues", "Hand sanitizers", "Paper towels", "Disinfecting wipes", "Soap", "First aid supplies"]
  },
  {
    title: "Educational Materials",
    icon: BookOpen,
    items: ["Math manipulatives", "Puzzles", "Flash cards", "Educational games", "Sensory toys", "Craft kits"]
  }
];

export default function NeedsSection() {
  return (
    <div className="max-w-6xl mx-auto mb-20">
      <div className="text-center mb-12">
        <h2 className="text-4xl font-bold mb-6">What We Need</h2>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          Our programs benefit from a variety of supplies and equipment. Here are some examples of items
          that help us provide quality services to our friends.
        </p>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
        {needCategories.map((category) => {
          const Icon = category.icon;
          return (
            <div key={category.title} className="bg-white rounded-xl shadow-lg overflow-hidden group hover:shadow-xl transition-all">
              <div className="p-6">
                <div className="bg-green-500 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                  <Icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-bold text-center mb-4">{category.title}</h3>
                <ul className="space-y-2">
                  {category.items.map((item, index) => (
                    <li key={index} className="flex items-center gap-2">
                      <span className="w-2 h-2 bg-green-500 rounded-full"></span>
                      <span className="text-gray-700">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          );
        })}
      </div>
      
      <div className="text-center mt-6 text-gray-500">
        <p>
          Note: Items listed above are examples; please refer to our <a href="https://www.amazon.com/hz/wishlist/ls/2XVAVFE1OH2SN?ref_=wl_share" className="text-green-600 hover:underline">Amazon Wish List</a> for the most current needs.
        </p>
      </div>
    </div>
  );
}