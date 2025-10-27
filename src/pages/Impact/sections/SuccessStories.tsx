import React, { useState } from 'react';
import { ArrowRight, ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';

const stories = [
  {
    name: "Sarah's Journey",
    program: "Residential Programs",
    image: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?auto=format&fit=crop&q=80",
    quote: "Through Happiness Bag's support, I've gained independence and confidence I never thought possible.",
    achievement: "Now lives independently and works part-time"
  },
  {
    name: "Michael's Victory",
    program: "Special Olympics",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80",
    quote: "Special Olympics at Happiness Bag showed me I can achieve anything I set my mind to.",
    achievement: "Won gold medal in state bowling championship"
  },
  {
    name: "Emily's Growth",
    program: "Day Programs",
    image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&q=80",
    quote: "The day program has helped me learn new skills and make wonderful friends.",
    achievement: "Mastered independent daily living skills"
  }
];

export default function SuccessStories() {
  const [activeStory, setActiveStory] = useState(0);

  const nextStory = () => {
    setActiveStory((prev) => (prev + 1) % stories.length);
  };

  const prevStory = () => {
    setActiveStory((prev) => (prev - 1 + stories.length) % stories.length);
  };

  return (
    <div className="max-w-6xl mx-auto mb-20">
      <div className="text-center mb-12">
        <h2 className="text-4xl font-bold mb-6">Success Stories</h2>
        <p className="text-xl text-gray-600">
          Real stories of growth, achievement, and transformation from our friends and their families.
        </p>
      </div>

      <div className="relative bg-white rounded-2xl shadow-xl overflow-hidden">
        <div className="relative h-96">
          <img
            src={stories[activeStory].image}
            alt={stories[activeStory].name}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/50 to-transparent" />
          
          <div className="absolute bottom-8 left-8 right-8">
            <div className="text-yellow-500 font-semibold mb-2">
              {stories[activeStory].program}
            </div>
            <h3 className="text-3xl font-bold text-white mb-4">
              {stories[activeStory].name}
            </h3>
            <blockquote className="text-white/90 text-lg italic mb-4">
              "{stories[activeStory].quote}"
            </blockquote>
            <div className="text-yellow-500 font-semibold">
              Achievement: {stories[activeStory].achievement}
            </div>
          </div>

          <button
            onClick={prevStory}
            className="absolute left-4 top-1/2 -translate-y-1/2 bg-black/30 hover:bg-black/50 p-2 rounded-full transition-all"
          >
            <ArrowLeft className="w-6 h-6 text-white" />
          </button>
          <button
            onClick={nextStory}
            className="absolute right-4 top-1/2 -translate-y-1/2 bg-black/30 hover:bg-black/50 p-2 rounded-full transition-all"
          >
            <ArrowRight className="w-6 h-6 text-white" />
          </button>
        </div>
      </div>

      <div className="text-center mt-8">
        <Link
          to="/success-stories"
          className="inline-flex items-center gap-2 text-yellow-500 hover:text-yellow-600 font-semibold"
        >
          Read More Success Stories
          <ArrowRight className="w-5 h-5" />
        </Link>
      </div>
    </div>
  );
}