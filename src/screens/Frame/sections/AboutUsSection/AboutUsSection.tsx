import React from "react";
import { Card, CardContent } from "../../../../components/ui/card";

export const AboutUsSection = (): JSX.Element => {
  const paragraphs = [
    "At Constellation Law, we offer a variety of services focused on assisting our clients with U.S. immigration law. Primarily, we help people obtain their green cards (permanent residence), U.S. citizenship, or come to the United States through visas such as the K-1 fiancé visa. U.S. visas are necessary for anyone wishing to enter the country.",
    "From gathering information and documents to completing forms and preparing you for your interview, working with us can make the process easier.",
    "No matter what type of visa or method you choose to come to the U.S., the immigration process involves several steps before obtaining citizenship or even being approved for a visa. It can be complicated and anxiety-inducing.",
    "We are committed to ensuring you understand the process and know what to expect. We are with you every step of the way to answer your questions, set expectations, and help you chart the best path forward.",
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
          PROFESSIONAL AND PERSONALIZED HELP FOR
          <br className="hidden md:block" />
          YOUR IMMIGRATION AND CITIZENSHIP CASE
        </h2>

        <div className="space-y-4 md:space-y-8">
            {paragraphs.map((paragraph, index) => (
              <p
                key={`paragraph-${index}`}
                className="[text-shadow:0px_0px_6px_#00000066] [font-family:'Montserrat',Helvetica] font-medium text-white text-base md:text-lg lg:text-xl text-center tracking-[0] leading-relaxed"
              >
                {paragraph}
              </p>
            ))}
        </div>
      </div>
    </section>
  );
};