import React from "react";
import { Shield, Gavel, Building, Heart, Car, Users, Search, Home } from "lucide-react";
import { Card, CardContent } from "../../../../components/ui/card";

export const IntroductionSection = (): JSX.Element => {
  // Service card data for mapping
  const serviceCards = [
    {
      icon: Shield,
      title: "WHITE COLLAR CRIMES",
      content: `The term "white-collar crime" refers to non-violent crimes designed to produce financial gain. Typically, this financial gain is obtained through fraud or deception.`,
    },
    {
      icon: Gavel,
      title: "VIOLENT CRIMES",
      content: `Violent crimes have some of the harshest penalties and the worst collateral consequences. Additionally, simply being accused of a New York violent crime, can derail your life. Moreover, you may lose your job, have to move out of your house, or not be allowed to see your children.`,
    },
    {
      icon: Building,
      title: "FEDERAL CRIMES",
      content: `Undoubtedly, finding out that you are under investigation is terrifying. If you were contacted by federal agents, had a search warrant executed on your home, or been indicted by a federal Grand Jury, contact us without delay. We have successfully defended hundreds of cases.`,
    },
    {
      icon: Home,
      title: "HEALTHCARE FRAUD",
      content: `Under New York and Federal law, Healthcare fraud is a crime that involves improperly and illegally obtaining a benefit from a health plan.`,
    },
    {
      icon: Car,
      title: "VEHICULAR CRIMES",
      content: `New York State DWIs and other vehicular crimes are serious offenses. In addition to jail time on a NYC DWI criminal case, individuals may also lose their driving privileges and face steep fines. We will help with your NYC DWI case and arrest.`,
    },
    {
      icon: Heart,
      title: "SEX CRIMES",
      content: `Both state and federal prosecutors view sex crimes as the most egregious crimes. The mere allegation can destroy someone's life. Our sex crimes attorneys will vigorously defend you and your reputation. We handle several cases that fall under the umbrella of sex crimes.`,
    },
    {
      icon: Search,
      title: "GOVERNMENT INVESTIGATIONS",
      content: `Discovering that the FBI wants to talk to you is unsettling, to say the least. Later, finding yourself as the target of a federal Grand Jury is outright terrifying. Jointly, we will figure out a successful defense strategy. Collectively, we will aim to minimize criminal exposure, if not avoid criminal liability.`,
    },
    {
      icon: Users,
      title: "DOMESTIC VIOLENCE",
      content: `Domestic violence crimes are those that happen within intimate, or familial relationships. Specifically, including assault, menacing, criminal mischief, violations of orders of protection, custodial interference, crimes against children, and elder abuse. Additionally, pretty much any other crime within a family is domestic violence. Our attorneys know how to navigate these emotionally-charged NYC domestic violence cases. Of course, time is of the essence in these cases.`,
    },
    {
      icon: Shield,
      title: "DRUG CRIMES",
      content: `We have a successful track record defending drug charges in federal and state courts. We battled and won against the District Attorney's Offices, Special Narcotics Prosecutors, and the Federal Government on numerous cases. Thus far, we've represented clients on narcotics possession, distribution, trafficking, manufacturing, and continuing criminal enterprises.`,
    },
  ];

  return (
    <section className="w-full bg-gradient-to-b from-gray-50 to-white py-8 md:py-16 relative">
      <div className="container max-w-[1130px] mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header with green border */}
        <div className="pb-4 md:pb-6 mb-6 md:mb-8 border-b-[3px] border-[#11b36f] relative">
          <h2 className="font-['Oswald',Helvetica] font-bold text-[#1a3770] text-2xl sm:text-3xl md:text-4xl text-center leading-tight mb-4">
            Dealing with a criminal case is stressful enough. Chasing your criminal defense attorney for case updates shouldn't add to your stress.
          </h2>
          <p className="font-['Poppins',Helvetica] font-medium text-black text-sm sm:text-base md:text-lg text-center leading-relaxed">
            Federal criminal defense involves a vastly different approach from state-level criminal charges. Finding the right attorney is the most important first step you can take in protecting yourself. While I can't guarantee exactly how your case will resolve itself, I promise you dedication, transparency, and relentlessness in getting the best possible outcome.
          </p>
        </div>

        <h3 className="font-['Oswald',Helvetica] font-bold text-[#1a3770] text-2xl md:text-3xl text-center mb-8">
          Our Practice Areas
        </h3>
        
        <p className="font-['Poppins',Helvetica] font-medium text-black text-base md:text-lg text-center leading-relaxed mb-8">
          If Any of the Above is Relevant to Your Current Legal Needs, Call Our Criminal Defense Attorneys Confidentially:
        </p>
        
        <div className="text-center mb-8">
        </div>

        {/* Service cards grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
          {serviceCards.map((service, index) => (
            <Card key={index} className="border border-gray-200 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 bg-white rounded-xl overflow-hidden group">
              <CardContent className="p-6 text-center">
                <div className="mb-4 flex justify-center">
                  <div className="w-16 h-16 bg-gradient-to-br from-[#11b36f] to-[#0ea062] rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <service.icon className="w-8 h-8 text-white" />
                  </div>
                </div>
                <h2 className="font-['Oswald',Helvetica] font-bold text-[#1a3770] text-xl md:text-[25px] text-center leading-tight mb-4 md:mb-6">
                  {service.title}
                </h2>
                <p className="font-['Montserrat',Helvetica] font-medium text-black text-sm md:text-base lg:text-lg text-center leading-relaxed whitespace-pre-line">
                  {service.content}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};