import React from "react";
import { Users, FileCheck, Heart, Home } from "lucide-react";
import { Card, CardContent } from "../../../../components/ui/card";

export const PracticeAreasSection = (): JSX.Element => {
  // Service card data for mapping
  const serviceCards = [
    {
      icon: Users,
      title: "U.S. CITIZENSHIP",
      content: `When legal permanent residents wish to become U.S. citizens, Constellation Law can help. We offer a variety of legal services to help non-citizens understand the immigration process and prepare for naturalization. We provide information, guidance, and representation so permanent residents can obtain citizenship quickly.`,
    },
    {
      icon: FileCheck,
      title: "GREEN CARDS",
      content: `Obtaining a green card is also known as permanent residence. Completing the permanent residence process is a key step in the immigration journey. With this status, the green card holder can live and work anywhere in the U.S. and will generally be eligible to apply for U.S. citizenship in a few years.`,
    },
    {
      icon: Heart,
      title: "FIANCÉ VISAS - K-1",
      content: `Fiancé visas (or K-1 visas) are a type of visa within the family-based immigration category. These visas allow a foreign citizen to enter the United States for 90 days to meet their partner's family and get married. Since it's a very specific visa, having the help of a highly experienced immigration attorney is key to ensuring all documentation is completed and submitted correctly.`,
    },
    {
      icon: Home,
      title: "FAMILY IMMIGRATION",
      content: `Family-based immigration, where a family member living in the United States sponsors you for a green card, is one of the most common paths to U.S. residence. Constellation Law can help you with applications, representation, and much more.`,
    },
  ];

  return (
    <section className="w-full bg-gradient-to-b from-gray-50 to-white py-8 md:py-16 relative">
      <div className="container max-w-[1130px] mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header with green border */}
        <div className="pb-4 md:pb-6 mb-6 md:mb-8 border-b-[3px] border-[#11b36f] relative">
          <h2 className="font-['Oswald',Helvetica] font-bold text-[#1a3770] text-2xl sm:text-3xl md:text-4xl text-center leading-tight mb-4">
            Attentive, Compassionate, and Skilled Immigration Attorneys
          </h2>
          <p className="font-['Poppins',Helvetica] font-medium text-black text-sm sm:text-base md:text-lg text-center leading-relaxed">
            Constellation Law serves clients nationwide and around the
            <br className="hidden lg:block" />
            world. We provide comprehensive and expert assistance in many areas of immigration law, including the following:
          </p>
        </div>

        <h3 className="font-['Oswald',Helvetica] font-bold text-[#1a3770] text-2xl md:text-3xl text-center mb-8">
          Our Immigration Services
        </h3>

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