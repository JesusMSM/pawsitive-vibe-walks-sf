
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { MapPin, Heart, Shield } from 'lucide-react';

const AboutSection = () => {
  const features = [
    {
      icon: MapPin,
      title: 'Local Expertise',
      description: 'Deep knowledge of Russian Hill and surrounding areas including Pacific Heights and Haight-Ashbury'
    },
    {
      icon: Heart,
      title: 'Passionate Care',
      description: 'Genuine love and attention for every pet. Your furry family members are treated like my own'
    },
    {
      icon: Shield,
      title: 'Verified Reviews',
      description: 'Consistently high ratings across multiple platforms with 100% satisfied pet parents'
    }
  ];

  return (
    <section id="about" className="py-16 lg:py-24 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Why Choose <span className="gradient-text">Me?</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              As a local, women-owned business, I understand the unique needs of San Francisco pets and their families. 
              Every service is delivered with personal care and professional expertise.
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-3 mb-16">
            {features.map((feature, index) => {
              const IconComponent = feature.icon;
              return (
                <Card 
                  key={feature.title}
                  className="text-center hover:shadow-lg transition-all duration-300 hover:-translate-y-1 border-none shadow-md"
                  style={{ animationDelay: `${index * 0.2}s` }}
                >
                  <CardContent className="pt-8 pb-8">
                    <div className="w-16 h-16 mx-auto mb-6 bg-gradient-to-r from-pawsitive-orange to-pawsitive-blue rounded-full flex items-center justify-center">
                      <IconComponent size={28} className="text-white" />
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-4">
                      {feature.title}
                    </h3>
                    <p className="text-gray-600 leading-relaxed">
                      {feature.description}
                    </p>
                  </CardContent>
                </Card>
              );
            })}
          </div>

          <div className="bg-gradient-to-r from-pawsitive-orange/10 to-pawsitive-blue/10 rounded-2xl p-8 lg:p-12 text-center">
            <h3 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-6">
              Trusted by San Francisco Pet Parents
            </h3>
            <div className="grid gap-8 md:grid-cols-3 text-center">
              <div>
                <div className="text-3xl lg:text-4xl font-bold gradient-text mb-2">100+</div>
                <p className="text-gray-600 font-medium">Happy Pets Served</p>
              </div>
              <div>
                <div className="text-3xl lg:text-4xl font-bold gradient-text mb-2">5.0★</div>
                <p className="text-gray-600 font-medium">Average Rating</p>
              </div>
              <div>
                <div className="text-3xl lg:text-4xl font-bold gradient-text mb-2">3+</div>
                <p className="text-gray-600 font-medium">Years Experience</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
