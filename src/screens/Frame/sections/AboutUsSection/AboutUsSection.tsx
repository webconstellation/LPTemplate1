import React from "react";
import { Card, CardContent } from "../../../../components/ui/card";
import { Award, Shield, Users, CheckCircle } from "lucide-react";

export const AboutUsSection = (): JSX.Element => {
  const whyChoosePoints = [
    {
      icon: Shield,
      title: "Proven Trial Experience",
      description: "With several courtroom victories, we know how to build a strong defense."
    },
    {
      icon: Award,
      title: "Former Prosecutors & Law Enforcement",
      description: "Our team understands both sides of the legal system, giving you an edge."
    },
    {
      icon: Users,
      title: "Individualized Attention",
      description: "Your case is unique, and we treat it that way. We craft strategies tailored to your situation."
    }
  ];

  return (
    <section className="w-full py-12 md:py-16 bg-gradient-to-br from-[#1a3770] via-[#2a4a8a] to-[#1a3770] relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <img 
          src="https://images.pexels.com/photos/8112198/pexels-photo-8112198.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080&fit=crop" 
          alt="Professional legal consultation" 
          className="w-full h-full object-cover opacity-20"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-[#1a3770]/80 via-[#2a4a8a]/80 to-[#1a3770]/80"></div>
      </div>

      <div className="max-w-[1130px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <h2 className="font-bold text-white text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-center leading-tight md:leading-[66px] [font-family:'Oswald',Helvetica] tracking-[0] mb-6 md:mb-8">
          WHY CHOOSE US?
        </h2>

        <p className="[text-shadow:0px_0px_6px_#00000066] [font-family:'Montserrat',Helvetica] font-medium text-white text-base md:text-lg lg:text-xl text-center tracking-[0] leading-relaxed mb-8">
          When facing criminal charges, you need a legal team with the experience and dedication to fight for you. Here's why we stand out:
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          {whyChoosePoints.map((point, index) => (
            <Card key={index} className="bg-white/10 backdrop-blur-sm border-white/20 rounded-xl overflow-hidden">
              <CardContent className="p-6 text-center">
                <div className="mb-4 flex justify-center">
                  <div className="w-16 h-16 bg-gradient-to-br from-[#11b36f] to-[#0ea062] rounded-full flex items-center justify-center">
                    <point.icon className="w-8 h-8 text-white" />
                  </div>
                </div>
                <h3 className="font-['Oswald',Helvetica] font-bold text-white text-xl mb-4">
                  {point.title}
                </h3>
                <p className="text-white/90 text-sm leading-relaxed">
                  {point.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 md:p-8 mb-8">
          <p className="[text-shadow:0px_0px_6px_#00000066] [font-family:'Montserrat',Helvetica] font-medium text-white text-base md:text-lg text-center tracking-[0] leading-relaxed">
            Even if your case does not make the front page of the paper, you deserve to feel like you are our most important client. Your case is the most important case to you, and therefore it is the most important case to us. Please contact us today to find out if we are a good fit.
          </p>
        </div>

        {/* Badges & Awards Section */}
        <div className="text-center mb-8">
          <h3 className="font-['Oswald',Helvetica] font-bold text-white text-2xl mb-6">
            Awards & Recognition
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4">
              <Award className="w-12 h-12 text-[#11b36f] mx-auto mb-2" />
              <p className="text-white text-sm">Professional Excellence</p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4">
              <Shield className="w-12 h-12 text-[#11b36f] mx-auto mb-2" />
              <p className="text-white text-sm">Client Protection</p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4">
              <CheckCircle className="w-12 h-12 text-[#11b36f] mx-auto mb-2" />
              <p className="text-white text-sm">Proven Results</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};