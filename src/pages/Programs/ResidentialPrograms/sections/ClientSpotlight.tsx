import React, { useState, useEffect } from 'react';
import { Quote } from 'lucide-react';

const testimonials = [
  {
    quote: "Thanks to Happiness Bag, I've gained the confidence to live on my own!",
    author: "Alex",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80"
  },
  {
    quote: "The respite program gave me the break I needed to recharge and provide better care.",
    author: "Maria",
    role: "caregiver",
    image: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?auto=format&fit=crop&q=80"
  },
  {
    quote: "I love having my own space and learning new things every day.",
    author: "James",
    image: "https://images.unsplash.com/photo-1542190891-2093d38760f2?auto=format&fit=crop&q=80"
  }
];

export default function ClientSpotlight() {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="max-w-4xl mx-auto mb-20">
      <div className="bg-gradient-to-br from-gray-900 to-gray-800 rounded-2xl p-8 md:p-12 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-64 h-64 bg-red-500/10 rounded-full -translate-y-1/2 translate-x-1/2 blur-3xl" />
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-red-500/5 rounded-full translate-y-1/2 -translate-x-1/2 blur-3xl" />
        
        <div className="relative">
          <h2 className="text-3xl font-bold text-center text-white mb-12">Client Spotlight</h2>
          
          <div className="relative h-[300px]">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className={`absolute inset-0 flex flex-col items-center transition-opacity duration-1000 ${
                  index === currentTestimonial ? 'opacity-100' : 'opacity-0'
                }`}
              >
                <div className="w-24 h-24 rounded-full overflow-hidden mb-6">
                  <img
                    src={testimonial.image}
                    alt={testimonial.author}
                    className="w-full h-full object-cover"
                  />
                </div>
                
                <div className="text-center">
                  <Quote className="w-8 h-8 text-red-500 mx-auto mb-4" />
                  <p className="text-xl text-white mb-4">{testimonial.quote}</p>
                  <div className="text-red-500 font-semibold">
                    {testimonial.author}
                    {testimonial.role && (
                      <span className="text-gray-400"> • {testimonial.role}</span>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="flex justify-center gap-2 mt-6">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentTestimonial(index)}
                className={`w-2 h-2 rounded-full transition-all ${
                  index === currentTestimonial
                    ? 'bg-red-500 w-4'
                    : 'bg-gray-600 hover:bg-gray-500'
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}