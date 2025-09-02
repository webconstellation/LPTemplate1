import React from "react";
import { Card, CardContent } from "../../../../components/ui/card";
import { Star, Quote } from "lucide-react";

export const FaqSection = (): JSX.Element => {
  const testimonials = [
    {
      text: "I'm alleged with a false sexual criminal charge by my wife and took up the uphill task of finding an appropriate attorney. Spent almost two months with this exercise but was always confused who to hire or not. But now I'm feeling extremely satisfied and secure by having a couple of consultations with Elena Fast, who comprehended the case fastly just as her last name suggests and which impressed me the most was her vision and strategy which includes out of box solutions also. No attorney ( with utmost respect to the community) despite their lengthy profiles and impressive ratings was able to address my specific and somewhat unique concerns and needs despite my tiring efforts to explain except for Miss Elena Fast. I would suggest all readers to reach Miss Fast as Fastly as possible without wasting their time and money around if they're genuinely looking for a workable strategy and informed expectations of the best disposition of their case. I have made the best possible decision already and would suggest everyone else the same.",
      rating: 5
    },
    {
      text: "I've consulted with Elena on a matter that worried me for a while. She was extremely respectful, listened very attentively, and answered all of my questions. I would never hesitate to hire her as my attorney",
      rating: 5
    },
    {
      text: "Elena is extremely knowledgeable about all aspects of criminal law. She is a tremendous listener and has the ability to break things down in a manner that is very understandable. I literally could not give a higher rating for both a lawyer and a person. Feel extremely lucky to have crossed paths.",
      rating: 5
    },
    {
      text: "Elena is brilliant, talented, extremely professional, experienced and compassionate. She was able in a very short time to understand my situation and give me all the information and advise I needed. I felt so much released and empowered after I spoke with her. I felt I was in the best possible hands. I'm very grateful I found her!",
      rating: 5
    },
    {
      text: "Elena was extremely knowledgeable, heard out my story, gave me clear direction on where I stood in the eyes of the law & what the best next steps were to take in order to have my case resolved. Moreover, she was human and offered compassion & sympathy, going above and beyond what was required of her. Cannot recommend or speak highly enough of our interactions.",
      rating: 5
    }
  ];

  const serviceDescriptions = [];

  return (
    <section className="w-full py-12 md:py-16 bg-gradient-to-br from-white via-gray-50 to-white">
      <div className="container mx-auto max-w-[1130px] px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8 md:mb-12">
          <h2 className="font-bold text-[#1a3770] text-3xl sm:text-4xl md:text-[46px] leading-tight md:leading-[50.6px] [font-family:'Oswald',Helvetica] tracking-[0] mb-4">
            CLIENT TESTIMONIALS
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-[#11b36f] to-[#0ea062] mx-auto mb-6"></div>
          <p className="[font-family:'Poppins',Helvetica] font-medium text-[#1a3770] text-base md:text-lg max-w-3xl mx-auto">
            See what our clients have to say about our criminal defense services:
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="bg-white rounded-xl shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300">
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  <Quote className="w-8 h-8 text-[#11b36f] mr-3" />
                  <div className="flex">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                    ))}
                  </div>
                </div>
                <p className="text-gray-700 text-sm leading-relaxed italic">
                  "{testimonial.text}"
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
        
        <div className="text-center">
          <div className="bg-gradient-to-r from-[#11b36f] to-[#0ea062] rounded-2xl p-8 text-white">
            <h3 className="font-['Oswald',Helvetica] font-bold text-2xl md:text-3xl mb-4">
              Ready to Get Started?
            </h3>
            <p className="text-lg mb-6">
              Contact us today for a confidential consultation about your case.
            </p>
            <button 
              onClick={() => {
                const contactForm = document.getElementById('contact-form');
                if (contactForm) {
                  contactForm.scrollIntoView({ behavior: 'smooth' });
                }
              }}
              className="bg-white text-[#11b36f] font-bold py-3 px-8 rounded-lg hover:bg-gray-100 transition-colors duration-200"
        </div>

        {/* Service descriptions */}
        <div className="space-y-4 text-center">
          {serviceDescriptions.map((description, index) => (
            <p
              key={`description-${index}`}
              className="[font-family:'Poppins',Helvetica] font-normal text-gray-700 text-sm md:text-base leading-relaxed max-w-4xl mx-auto"
            >
              {description}
            </p>
          ))}
        </div>
      </div>
    </section>
  );
};