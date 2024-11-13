import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const slides = [
  {
    image: 'https://images.unsplash.com/photo-1579372786545-d24232daf58c?auto=format&fit=crop&q=80',
    title: '精緻法式甜點',
    subtitle: '純手工製作，新鮮出爐',
    description: '體驗傳統與創新完美融合的美味饗宴'
  },
  {
    image: 'https://images.unsplash.com/photo-1488477181946-6428a0291777?auto=format&fit=crop&q=80',
    title: '匠心獨具',
    subtitle: '每日手工製作',
    description: '每一道甜點都是味覺與視覺的藝術品'
  },
  {
    image: 'https://images.unsplash.com/photo-1612203985729-70726954388c?auto=format&fit=crop&q=80',
    title: '經典傳承',
    subtitle: '正宗法式工藝',
    description: '傳承百年法式甜點工藝，重現經典風味'
  }
];

const Hero = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  useEffect(() => {
    const timer = setInterval(nextSlide, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="relative h-screen bg-black" id="hero">
      {slides.map((slide, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-opacity duration-1000 ${
            index === currentSlide ? 'opacity-100' : 'opacity-0'
          }`}
        >
          <img
            src={slide.image}
            alt={slide.title}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/60"></div>
        </div>
      ))}

      <div className="absolute inset-0 flex items-center justify-center">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h1 className="text-5xl md:text-7xl font-serif text-[#B87333] mb-4 tracking-wide">
            {slides[currentSlide].title}
          </h1>
          <p className="text-2xl md:text-3xl text-white mb-6 font-serif">
            {slides[currentSlide].subtitle}
          </p>
          <p className="text-lg text-gray-300 mb-8 max-w-2xl mx-auto">
            {slides[currentSlide].description}
          </p>
          <Link 
            to="/products"
            className="inline-block bg-[#B87333] text-white px-8 py-3 rounded-none text-lg hover:bg-[#A66323] transition-colors tracking-wider"
          >
            立即選購
          </Link>
        </div>
      </div>

      <button
        onClick={prevSlide}
        className="absolute left-4 top-1/2 -translate-y-1/2 p-2 text-white hover:text-[#B87333] transition-colors"
      >
        <ChevronLeft className="w-8 h-8" />
      </button>
      <button
        onClick={nextSlide}
        className="absolute right-4 top-1/2 -translate-y-1/2 p-2 text-white hover:text-[#B87333] transition-colors"
      >
        <ChevronRight className="w-8 h-8" />
      </button>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex space-x-2">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`w-2 h-2 rounded-full transition-colors ${
              index === currentSlide ? 'bg-[#B87333]' : 'bg-white/50'
            }`}
          />
        ))}
      </div>
    </div>
  );
};

export default Hero;