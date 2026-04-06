import React, { useState, useEffect } from 'react';
import { ChevronRight } from 'lucide-react';
import { getHeroSlides, HeroSlide } from '../lib/heroSlides';

export default function Hero() {
  const [slides, setSlides] = useState<HeroSlide[]>([]);
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const loadSlides = async () => {
      const data = await getHeroSlides();
      setSlides(data);
    };
    loadSlides();
  }, []);

  useEffect(() => {
    if (slides.length === 0) return;
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [slides.length]);

  return (
    <div className="relative h-[calc(58vh)] mt-40 border-b-[8px] border-yellow-500">
      {slides.map((slide, index) => (
        <div
          key={slide.id}
          className={`absolute inset-0 transition-opacity duration-1000 ${
            index === currentSlide ? 'opacity-100' : 'opacity-0'
          }`}
        >
          <img
            src={slide.imageUrl}
            alt={slide.altText}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/60" />
        </div>
      ))} 
      <div className="absolute inset-0 flex flex-col items-center justify-center translate-y-8 text-white px-4">
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-black tracking-tighter leading-none text-center mb-0.5 max-w-[18ch]">
          Empowering Lives, Building Community.
        </h1>
        <p className="text-base md:text-lg text-center mb-8 max-w-2xl font-light">
          Empowering individuals with disabilities for over 50 years. 
          Join us as we grow to serve even more friends.
        </p>
        <div className="flex justify-center">
          <button className="bg-yellow-500 hover:bg-yellow-600 hover:scale-105 text-black px-12 py-4 rounded-full font-semibold text-lg transition-all flex items-center">
            Get Involved <ChevronRight className="ml-2 w-5 h-5" />
          </button>
        </div>
      </div>
    </div>
  );
}