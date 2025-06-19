
import React from 'react';
import { Button } from '@/components/ui/button';
import { MapPin, Star, Users } from 'lucide-react';

const HeroSection = () => {
  const scrollToServices = () => {
    const element = document.getElementById('services');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative pt-20 pb-16 lg:pt-24 lg:pb-20 overflow-hidden">
      <div className="absolute inset-0 gradient-bg opacity-10"></div>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-4xl mx-auto text-center animate-fade-in">
          <div className="mb-6">
            <span className="inline-flex items-center px-4 py-2 rounded-full bg-pawsitive-orange/10 text-pawsitive-orange font-medium text-sm mb-4">
              <MapPin size={16} className="mr-2" />
              Serving Russian Hill & San Francisco
            </span>
          </div>
          
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
            Professional 
            <span className="gradient-text"> Pack Walk Services</span> 
            <br />in San Francisco
          </h1>
          
          <p className="text-xl lg:text-2xl text-gray-600 mb-8 max-w-3xl mx-auto leading-relaxed">
            Local, women-owned pet care business specializing in pack walks, dog walking, and pet sitting. 
            Your furry friends deserve the best care while you're away.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <Button 
              onClick={scrollToServices}
              size="lg"
              className="bg-pawsitive-orange hover:bg-pawsitive-orange/90 text-white px-8 py-4 text-lg font-semibold rounded-full shadow-lg hover:shadow-xl transition-all duration-300"
            >
              Book Pack Walk - $35
            </Button>
            <Button 
              variant="outline"
              size="lg"
              onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })}
              className="border-pawsitive-blue text-pawsitive-blue hover:bg-pawsitive-blue hover:text-white px-8 py-4 text-lg font-semibold rounded-full"
            >
              Learn More
            </Button>
          </div>

          <div className="flex flex-col sm:flex-row gap-8 justify-center items-center text-center">
            <div className="flex items-center gap-2">
              <div className="flex text-yellow-400">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={20} fill="currentColor" />
                ))}
              </div>
              <span className="text-gray-600 font-medium">5.0 Rating</span>
            </div>
            
            <div className="flex items-center gap-2">
              <Users size={20} className="text-pawsitive-blue" />
              <span className="text-gray-600 font-medium">100+ Happy Pets</span>
            </div>
            
            <div className="flex items-center gap-2">
              <div className="w-5 h-5 bg-green-500 rounded-full flex items-center justify-center">
                <span className="text-white text-xs font-bold">✓</span>
              </div>
              <span className="text-gray-600 font-medium">Fully Insured</span>
            </div>
          </div>
        </div>

        {/* Decorative Elements */}
        <div className="absolute top-20 left-10 w-20 h-20 bg-pawsitive-pink/20 rounded-full blur-xl animate-bounce-gentle"></div>
        <div className="absolute bottom-20 right-10 w-32 h-32 bg-pawsitive-blue/20 rounded-full blur-xl animate-bounce-gentle" style={{ animationDelay: '1s' }}></div>
        <div className="absolute top-1/2 left-1/4 w-16 h-16 bg-pawsitive-yellow/20 rounded-full blur-xl animate-bounce-gentle" style={{ animationDelay: '2s' }}></div>
      </div>
    </section>
  );
};

export default HeroSection;
