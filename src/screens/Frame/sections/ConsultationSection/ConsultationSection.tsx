import React from "react";
import { Button } from "../../../../components/ui/button";
import { Card, CardContent } from "../../../../components/ui/card";
import { Award, Shield, Users2, Clock, Phone } from "lucide-react";

export const ConsultationSection = (): JSX.Element => {
  const scrollToContactForm = () => {
    const contactForm = document.getElementById('contact-form');
    if (contactForm) {
      contactForm.scrollIntoView({ behavior: 'smooth' });
    }
  };

  // Content paragraphs for the about section
  const aboutParagraphs = [
    "Attorney Emanuel Dressie is a long-time resident of Atlanta, GA and is passionate about helping his fellow Georgians, which is why he decided to attend law school after a successful career in accounting and finance. While attending Georgia State University College of Law, Emanuel clerked for the Honorable Judge Kimberly M. Esmond Adams of the Superior Court of Fulton County and interned at the DeKalb County Public Defender's Office and with the Georgia Justice Project. He graduated law school with distinction for his dedication to community service.",
    "Since graduating law school, Emanuel has quickly become known as one of the most attentive and effective personal injury and workers' compensation attorneys in Atlanta and beyond. He is not afraid to take on challenging cases and prides himself on providing aggressive representation from day one. The firm's clients appreciate the constant communication and his passion for helping people, which is evident in each and every case. The firm has recovered in excess of thirty million dollars for its clients.",
    "Emanuel was recently inducted into the National Trial Lawyers Top 100 Civil Plaintiff Trial Lawyers in Georgia. Inclusion in this exclusive organization is reserved for lawyers with proven skills and qualifications in their filed of law.",
  ];

  const highlights = [
    {
      icon: Award,
      title: "National Trial Lawyers",
      description: "Top 100 Civil Plaintiff Trial Lawyers"
    },
    {
      icon: Shield,
      title: "$30M+ Recovered",
      description: "For clients in excess of thirty million"
    },
    {
      icon: Users2,
      title: "Community Service",
      description: "Graduated with distinction for service"
    }
  ];

  return (
    <section className="w-full py-12 md:py-16 bg-gradient-to-br from-gray-50 to-white relative">
      <div className="container max-w-[1130px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8 md:mb-12">
          <h2 className="font-['Oswald',Helvetica] font-bold text-[#1a3770] text-3xl sm:text-4xl md:text-[46px] leading-tight md:leading-[50.6px] mb-4">
            EMANUELE DRESSIE - FOUNDER AND ATTORNEY
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
                    src="https://images.pexels.com/photos/5668772/pexels-photo-5668772.jpeg?auto=compress&cs=tinysrgb&w=600&h=800&fit=crop" 
                    alt="Attorney Emanuel Dressie" 
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#1a3770]/40 via-transparent to-transparent"></div>
                  <div className="absolute bottom-4 left-4 right-4">
                    <div className="bg-white/90 backdrop-blur-sm rounded-lg p-3">
                      <p className="text-[#1a3770] font-semibold">Emanuel Dressie</p>
                      <p className="text-gray-600 text-sm">Criminal Defense Attorney</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Content */}
          <div className="lg:col-span-2">
            {/* Highlights grid */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
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

        <div className="text-center mb-8">
          <Button 
            onClick={() => window.location.href = 'tel:6782807389'}
            className="w-full sm:w-auto sm:max-w-[323px] h-[50px] md:h-[62px] bg-gradient-to-r from-[#11b36f] to-[#0ea062] hover:from-[#0ea062] hover:to-[#11b36f] rounded-xl border-none font-['Oswald',Helvetica] font-medium text-white text-lg md:text-[25px] leading-tight shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 cursor-pointer"
          >
            <Phone className="w-5 h-5 mr-2" />
            CALL NOW - (678) 280-7389
          </Button>
        </div>
        
        <div className="text-center">
          <Button 
            onClick={scrollToContactForm}
            className="w-full sm:w-auto sm:max-w-[323px] h-[50px] md:h-[62px] bg-white border-2 border-[#11b36f] hover:bg-[#11b36f] hover:text-white text-[#11b36f] rounded-xl font-['Oswald',Helvetica] font-medium text-lg md:text-[25px] leading-tight shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 cursor-pointer"
          >
            BOOK A FREE CONSULTATION NOW
          </Button>
        </div>
      </div>
    </section>
  );
};