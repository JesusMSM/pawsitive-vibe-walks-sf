
import React, { useState, useEffect } from 'react';
import { Menu, X, Phone, Mail } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMenuOpen(false);
    }
  };

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled ? 'bg-white/95 backdrop-blur-md shadow-lg' : 'bg-transparent'
    }`}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">
          <div className="flex items-center space-x-2">
            <div className="w-10 h-10 rounded-full bg-gradient-to-r from-pawsitive-orange to-pawsitive-blue flex items-center justify-center">
              <span className="text-white font-bold text-lg">🐾</span>
            </div>
            <h1 className="text-xl lg:text-2xl font-bold gradient-text">PawsitiveVibeSF</h1>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <button 
              onClick={() => scrollToSection('services')}
              className="text-gray-700 hover:text-pawsitive-orange transition-colors font-medium"
            >
              Services
            </button>
            <button 
              onClick={() => scrollToSection('about')}
              className="text-gray-700 hover:text-pawsitive-orange transition-colors font-medium"
            >
              About
            </button>
            <button 
              onClick={() => scrollToSection('testimonials')}
              className="text-gray-700 hover:text-pawsitive-orange transition-colors font-medium"
            >
              Testimonials
            </button>
            <button 
              onClick={() => scrollToSection('faq')}
              className="text-gray-700 hover:text-pawsitive-orange transition-colors font-medium"
            >
              FAQ
            </button>
            <div className="flex items-center space-x-4">
              <a href="tel:+1234567890" className="text-pawsitive-blue hover:text-pawsitive-orange transition-colors">
                <Phone size={20} />
              </a>
              <a href="mailto:hello@pawsitivevibeSF.com" className="text-pawsitive-blue hover:text-pawsitive-orange transition-colors">
                <Mail size={20} />
              </a>
            </div>
            <Button 
              onClick={() => scrollToSection('services')}
              className="bg-pawsitive-orange hover:bg-pawsitive-orange/90"
            >
              Book Now
            </Button>
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden absolute top-16 left-0 right-0 bg-white shadow-lg border-t">
            <nav className="flex flex-col p-4 space-y-4">
              <button 
                onClick={() => scrollToSection('services')}
                className="text-left py-2 text-gray-700 hover:text-pawsitive-orange transition-colors font-medium"
              >
                Services
              </button>
              <button 
                onClick={() => scrollToSection('about')}
                className="text-left py-2 text-gray-700 hover:text-pawsitive-orange transition-colors font-medium"
              >
                About
              </button>
              <button 
                onClick={() => scrollToSection('testimonials')}
                className="text-left py-2 text-gray-700 hover:text-pawsitive-orange transition-colors font-medium"
              >
                Testimonials
              </button>
              <button 
                onClick={() => scrollToSection('faq')}
                className="text-left py-2 text-gray-700 hover:text-pawsitive-orange transition-colors font-medium"
              >
                FAQ
              </button>
              <div className="flex items-center space-x-4 py-2">
                <a href="tel:+1234567890" className="text-pawsitive-blue hover:text-pawsitive-orange transition-colors">
                  <Phone size={20} />
                </a>
                <a href="mailto:hello@pawsitivevibeSF.com" className="text-pawsitive-blue hover:text-pawsitive-orange transition-colors">
                  <Mail size={20} />
                </a>
              </div>
              <Button 
                onClick={() => scrollToSection('services')}
                className="bg-pawsitive-orange hover:bg-pawsitive-orange/90 w-full"
              >
                Book Now
              </Button>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
