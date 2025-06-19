
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Star, Quote } from 'lucide-react';

const TestimonialsSection = () => {
  const testimonials = [
    {
      name: 'Sarah Chen',
      location: 'Russian Hill',
      pet: 'Golden Retriever - Max',
      rating: 5,
      text: 'PawsitiveVibeSF has been a lifesaver! The pack walks are perfect for Max - he comes home so happy and tired. The owner is incredibly reliable and sends updates with photos. Highly recommend!'
    },
    {
      name: 'Michael Rodriguez',
      location: 'Pacific Heights',
      pet: 'French Bulldog - Luna',
      rating: 5,
      text: 'As a busy professional, finding reliable pet care was crucial. Luna loves her walks and the personal attention she gets. The house sitting service is exceptional - I travel worry-free!'
    },
    {
      name: 'Jennifer Park',
      location: 'Haight-Ashbury',
      pet: 'Rescue Mix - Charlie',
      rating: 5,
      text: 'Charlie was anxious with other dogs, but the patient approach and gradual pack introduction worked wonders. Now he has dog friends and I have peace of mind. Amazing service!'
    },
    {
      name: 'David Thompson',
      location: 'Russian Hill',
      pet: 'Cat - Whiskers',
      rating: 5,
      text: 'The cat sitting service is fantastic! Whiskers is usually shy with strangers, but formed an immediate bond. Professional, caring, and trustworthy - exactly what we needed.'
    },
    {
      name: 'Lisa Martinez',
      location: 'Nob Hill',
      pet: 'Labrador - Buddy',
      rating: 5,
      text: 'Buddy has been going on pack walks for 6 months now. The socialization has been incredible for his behavior. The owner clearly loves what she does and it shows in every interaction.'
    },
    {
      name: 'Robert Kim',
      location: 'Russian Hill',
      pet: 'Border Collie - Sage',
      rating: 5,
      text: 'Sage has high energy needs and the customized exercise approach is perfect. The detailed updates and genuine care for each pet sets this service apart. Couldn\'t be happier!'
    }
  ];

  return (
    <section id="testimonials" className="py-16 lg:py-24 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            What Pet Parents Are Saying
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Don't just take our word for it - hear from the amazing pet families 
            we're proud to serve across San Francisco.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3 max-w-7xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <Card 
              key={index}
              className="hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border-none shadow-md relative overflow-hidden"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardContent className="p-6 relative">
                <div className="absolute top-4 right-4 text-pawsitive-orange/20">
                  <Quote size={32} />
                </div>
                
                <div className="flex items-center mb-4">
                  <div className="flex text-yellow-400 mr-3">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} size={16} fill="currentColor" />
                    ))}
                  </div>
                </div>
                
                <p className="text-gray-700 mb-6 leading-relaxed">
                  "{testimonial.text}"
                </p>
                
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-gradient-to-r from-pawsitive-orange to-pawsitive-blue rounded-full flex items-center justify-center mr-4">
                    <span className="text-white font-bold text-lg">
                      {testimonial.name.charAt(0)}
                    </span>
                  </div>
                  <div>
                    <p className="font-semibold text-gray-900">{testimonial.name}</p>
                    <p className="text-sm text-gray-500">{testimonial.location}</p>
                    <p className="text-sm text-pawsitive-blue font-medium">{testimonial.pet}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <div className="inline-flex items-center gap-2 bg-white rounded-full px-6 py-3 shadow-md">
            <div className="flex text-yellow-400">
              {[...Array(5)].map((_, i) => (
                <Star key={i} size={20} fill="currentColor" />
              ))}
            </div>
            <span className="font-semibold text-gray-900">5.0 Average Rating</span>
            <span className="text-gray-500">•</span>
            <span className="text-gray-600">50+ Reviews</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
