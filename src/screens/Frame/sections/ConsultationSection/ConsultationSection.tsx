import React from "react";
import { Button } from "../../../../components/ui/button";
import { Card, CardContent } from "../../../../components/ui/card";
import { Award, Shield, Users2, Clock } from "lucide-react";

export const ConsultationSection = (): JSX.Element => {
  const scrollToContactForm = () => {
    const contactForm = document.getElementById('contact-form');
    if (contactForm) {
      contactForm.scrollIntoView({ behavior: 'smooth' });
    }
  };

  // Content paragraphs for the about section
  const aboutParagraphs = [
    "Attorney John Smith of Constellation Law has years of experience practicing law, specializing in immigration matters across multiple jurisdictions. In 2021, he received the AVVO Client's Choice award in Immigration Law.",
    "Immigration is a complicated process. Having a skilled and experienced attorney can make all the difference. That's where Constellation Law comes in. We will be with you throughout your entire immigration journey.",
    "Constellation Law can guide you through the complex issues that may arise in your immigration process.",
    "Immigration attorney John Smith is committed to using his deep knowledge of the immigration process to provide his clients with a stress-free experience. Contact us today for a free consultation.",
  ];

  const highlights = [
    {
      icon: Award,
      title: "AVVO Award 2021",
      description: "Client's Choice in Immigration Law"
    },
    {
      icon: Shield,
      title: "Proven Experience",
      description: "Years of immigration practice"
    },
    {
      icon: Users2,
      title: "Personalized Attention",
      description: "Support throughout the entire process"
    },
    {
      icon: Clock,
      title: "Free Consultation",
      description: "No initial commitment"
    }
  ];

  return (
    <section className="w-full py-12 md:py-16 bg-gradient-to-br from-gray-50 to-white relative">
      <div className="container max-w-[1130px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8 md:mb-12">
          <h2 className="font-['Oswald',Helvetica] font-bold text-[#1a3770] text-3xl sm:text-4xl md:text-[46px] leading-tight md:leading-[50.6px] mb-4">
            ABOUT US
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-[#11b36f] to-[#0ea062] mx-auto mb-6"></div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-8">
          {/* Attorney Image */}
          <div className="lg:col-span-1">
            <Card className="border-none shadow-lg rounded-2xl overflow-hidden">
              <CardContent className="p-0">
                <div className="relative w-full h-[280px]">
                  <img 
                    src="https://images.pexels.com/photos/5668885/pexels-photo-5668885.jpeg?auto=compress&cs=tinysrgb&w=600&h=800&fit=crop" 
                    alt="Attorney Bill Niffen" 
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#1a3770]/40 via-transparent to-transparent"></div>
                  <div className="absolute bottom-4 left-4 right-4">
                    <div className="bg-white/90 backdrop-blur-sm rounded-lg p-3">
                      <p className="text-[#1a3770] font-semibold">John Smith</p>
                      <p className="text-gray-600 text-sm">Immigration Attorney</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Content */}
          <div className="lg:col-span-2">
            {/* Highlights grid */}
            <div className="grid grid-cols-2 gap-4 mb-6">
              {highlights.map((highlight, index) => (
                <div key={index} className="bg-white rounded-xl p-4 shadow-md border border-gray-100 hover:shadow-lg transition-shadow duration-300">
                  <div className="flex items-center gap-3 mb-2">
                    <div className="w-8 h-8 bg-gradient-to-br from-[#11b36f] to-[#0ea062] rounded-lg flex items-center justify-center">
                      <highlight.icon className="w-4 h-4 text-white" />
                    </div>
                    <h3 className="font-semibold text-[#1a3770] text-sm">{highlight.title}</h3>
                  </div>
                  <p className="text-gray-600 text-xs leading-relaxed">{highlight.description}</p>
                </div>
              ))}
            </div>

            <div className="space-y-4">
              {aboutParagraphs.map((paragraph, index) => (
                <p
                  key={`paragraph-${index}`}
                  className="font-['Poppins',Helvetica] font-normal text-gray-700 text-sm md:text-base leading-relaxed"
                >
                  {paragraph}
                </p>
              ))}
            </div>
          </div>
        </div>

        <div className="text-center">
          <Button 
            onClick={scrollToContactForm}
            className="w-full sm:w-auto sm:max-w-[323px] h-[50px] md:h-[62px] bg-gradient-to-r from-[#11b36f] to-[#0ea062] hover:from-[#0ea062] hover:to-[#11b36f] rounded-xl border-none font-['Oswald',Helvetica] font-medium text-white text-lg md:text-[25px] leading-tight shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 cursor-pointer"
          >
            SCHEDULE A CONSULTATION
          </Button>
        </div>
      </div>
    </section>
  );
};