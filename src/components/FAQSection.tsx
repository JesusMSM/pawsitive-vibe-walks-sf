
import React from 'react';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';

const FAQSection = () => {
  const faqs = [
    {
      question: 'Are you insured?',
      answer: 'Yes, all our pet sitting and walking services are insured by Pet Care Insurance. This provides peace of mind for both you and your pets, covering various aspects of our services including general liability and pet protection coverage.'
    },
    {
      question: 'Do you only serve Russian Hill area?',
      answer: 'No, while we focus in Russian Hill and surrounding areas, we also serve other neighborhoods including Pacific Heights, Nob Hill, and Haight-Ashbury. We\'re happy to discuss service availability for your specific location in San Francisco.'
    },
    {
      question: 'What makes your pack walks special?',
      answer: 'Our pack walks are carefully curated for compatible dogs, promoting healthy socialization while ensuring safety. Each walk lasts 1-2 hours and is tailored to the energy levels and needs of the participating dogs. We maintain small groups for personalized attention.'
    },
    {
      question: 'How do you handle dogs with special needs?',
      answer: 'We specialize in accommodating dogs with various needs, including anxiety, medication requirements, or specific behavioral considerations. Each pet receives an individual assessment, and we create customized care plans to ensure their comfort and safety.'
    },
    {
      question: 'What happens if there\'s an emergency?',
      answer: 'We maintain detailed emergency contact information and veterinary preferences for each pet. In case of any emergency, we immediately contact you and your designated veterinarian. Our insurance coverage provides additional protection for emergency situations.'
    },
    {
      question: 'Do you provide updates during services?',
      answer: 'Absolutely! We send regular updates with photos and details about your pet\'s activities during walks and visits. You\'ll know exactly how your furry friend is doing and can see them having a great time.'
    },
    {
      question: 'How far in advance should I book?',
      answer: 'We recommend booking at least 48 hours in advance for regular services. For holidays or special occasions, earlier booking is preferred. However, we do our best to accommodate last-minute requests when possible.'
    },
    {
      question: 'What areas of San Francisco do you cover?',
      answer: 'We primarily serve Russian Hill, Pacific Heights, Nob Hill, and Haight-Ashbury. We\'re expanding to other SF neighborhoods - contact us to check if we can serve your area!'
    }
  ];

  return (
    <section id="faq" className="py-16 lg:py-24 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-xl text-gray-600">
              Everything you need to know about our pet care services in San Francisco.
            </p>
          </div>

          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem 
                key={index} 
                value={`item-${index}`}
                className="border border-gray-200 rounded-lg px-6 shadow-sm hover:shadow-md transition-shadow"
              >
                <AccordionTrigger className="text-left font-semibold text-gray-900 hover:text-pawsitive-orange transition-colors py-6">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-gray-600 leading-relaxed pb-6">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>

          <div className="text-center mt-12">
            <p className="text-gray-600 mb-4">
              Still have questions? We'd love to help!
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="tel:+1234567890" 
                className="inline-flex items-center justify-center px-6 py-3 bg-pawsitive-blue text-white rounded-full hover:bg-pawsitive-blue/90 transition-colors font-medium"
              >
                Call Us
              </a>
              <a 
                href="mailto:hello@pawsitivevibeSF.com" 
                className="inline-flex items-center justify-center px-6 py-3 border-2 border-pawsitive-orange text-pawsitive-orange rounded-full hover:bg-pawsitive-orange hover:text-white transition-colors font-medium"
              >
                Email Us
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
