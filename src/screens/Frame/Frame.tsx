import React from "react";
import { AboutUsSection } from "./sections/AboutUsSection";
import { ConsultationSection } from "./sections/ConsultationSection";
import { ContactSection } from "./sections/ContactSection";
import { FaqSection } from "./sections/FaqSection";
import { FooterSection } from "./sections/FooterSection";
import { HeaderSection } from "./sections/HeaderSection";
import { HeroSection } from "./sections/HeroSection";
import { PracticeAreasSection } from "./sections/PracticeAreasSection";
import { ServicesSection } from "./sections/ServicesSection";

export const Frame = (): JSX.Element => {
  return (
    <div className="flex flex-col w-full bg-white">
      <HeaderSection />
      <HeroSection />
      <PracticeAreasSection />
      <ServicesSection />
      <AboutUsSection />
      <ConsultationSection />
      <FaqSection />
      <ContactSection />
      <FooterSection />
    </div>
  );
};
