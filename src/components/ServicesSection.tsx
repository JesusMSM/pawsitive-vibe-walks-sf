
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Users, User, Home, Moon, Cat, Badge } from 'lucide-react';

const ServicesSection = () => {
  const services = [
    {
      id: 'pack-walks',
      icon: Users,
      title: 'Pack Walk Services',
      description: 'Regular exercise and outdoor time for your dog, tailored to their needs and energy level. 1-2 hour walk.',
      price: '$35',
      duration: 'Single Walk',
      popular: true,
      bundle: {
        price: '$150',
        description: '5 Walks/Week',
        savings: 'Save $25'
      }
    },
    {
      id: 'solo-walks',
      icon: User,
      title: '1:1 Dog Walking',
      description: 'Personalized one-on-one walks for your dog, ensuring individual attention and care. Perfect for dogs who prefer solo walks.',
      price: '$35',
      duration: '1 Hour Walk',
      altPrice: '$24',
      altDuration: '30 Minutes'
    },
    {
      id: 'house-visits',
      icon: Home,
      title: 'House Visit Services',
      description: 'In-home care for your pets, including feeding, playtime, and medication if needed. Reliable house visits in San Francisco.',
      price: '$25',
      duration: '30 minutes'
    },
    {
      id: 'house-sitting',
      icon: Moon,
      title: 'House Sitting Services',
      description: 'Comfortable care in your home, maintaining your pet\'s routine. Includes walking, feeding, and playing daily.',
      price: '$85',
      duration: '24 hours',
      addon: 'Overnight stay +$15/night'
    },
    {
      id: 'cat-sitting',
      icon: Cat,
      title: 'Cat Sitting Services',
      description: 'Specialized care for your feline friends, including feeding, litter box maintenance, and playtime.',
      price: '$25',
      duration: '30 minutes'
    }
  ];

  return (
    <section id="services" className="py-16 lg:py-24 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            Professional Pet Care Services
            <span className="gradient-text"> in San Francisco</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Comprehensive pet care solutions tailored to your furry friend's needs. 
            From pack walks to overnight sitting, we've got you covered.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3 max-w-7xl mx-auto">
          {services.map((service, index) => {
            const IconComponent = service.icon;
            return (
              <Card 
                key={service.id} 
                className={`relative hover:shadow-xl transition-all duration-300 hover:-translate-y-2 ${
                  service.popular ? 'ring-2 ring-pawsitive-orange shadow-lg' : ''
                }`}
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {service.popular && (
                  <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                    <div className="bg-pawsitive-orange text-white px-4 py-1 rounded-full text-sm font-semibold flex items-center gap-1">
                      <Badge size={14} />
                      Most Popular
                    </div>
                  </div>
                )}
                
                <CardHeader className="text-center pb-4">
                  <div className={`w-16 h-16 mx-auto mb-4 rounded-full flex items-center justify-center ${
                    service.popular ? 'bg-pawsitive-orange' : 'bg-pawsitive-blue'
                  }`}>
                    <IconComponent size={28} className="text-white" />
                  </div>
                  <CardTitle className="text-xl font-bold text-gray-900">
                    {service.title}
                  </CardTitle>
                </CardHeader>
                
                <CardContent className="text-center">
                  <p className="text-gray-600 mb-6 leading-relaxed">
                    {service.description}
                  </p>
                  
                  <div className="space-y-4">
                    <div className="flex items-center justify-center gap-2">
                      <span className="text-3xl font-bold text-pawsitive-orange">
                        {service.price}
                      </span>
                      <span className="text-gray-500">
                        {service.duration}
                      </span>
                    </div>
                    
                    {service.altPrice && (
                      <div className="flex items-center justify-center gap-2 text-sm">
                        <span className="text-2xl font-bold text-gray-700">
                          {service.altPrice}
                        </span>
                        <span className="text-gray-500">
                          {service.altDuration}
                        </span>
                      </div>
                    )}
                    
                    {service.bundle && (
                      <div className="bg-green-50 p-4 rounded-lg border border-green-200">
                        <div className="flex items-center justify-center gap-2 mb-1">
                          <span className="text-2xl font-bold text-green-700">
                            {service.bundle.price}
                          </span>
                          <span className="text-green-600 font-medium">
                            {service.bundle.description}
                          </span>
                        </div>
                        <span className="text-green-600 text-sm font-medium">
                          {service.bundle.savings}
                        </span>
                      </div>
                    )}
                    
                    {service.addon && (
                      <p className="text-sm text-gray-500 font-medium">
                        {service.addon}
                      </p>
                    )}
                  </div>
                  
                  <Button 
                    className={`w-full mt-6 ${
                      service.popular 
                        ? 'bg-pawsitive-orange hover:bg-pawsitive-orange/90' 
                        : 'bg-pawsitive-blue hover:bg-pawsitive-blue/90'
                    } text-white`}
                  >
                    Book {service.title}
                  </Button>
                </CardContent>
              </Card>
            );
          })}
        </div>

        <div className="text-center mt-12">
          <p className="text-gray-600 mb-4">Need a custom package? We offer monthly bundles!</p>
          <Button 
            variant="outline" 
            size="lg"
            className="border-pawsitive-orange text-pawsitive-orange hover:bg-pawsitive-orange hover:text-white"
          >
            Contact for Custom Package
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
