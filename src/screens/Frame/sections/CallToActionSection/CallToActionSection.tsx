import React from "react";
import { Button } from "../../../../components/ui/button";

export const CallToActionSection = (): JSX.Element => {
  const scrollToContactForm = () => {
    const contactForm = document.getElementById('contact-form');
    if (contactForm) {
      contactForm.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="w-full bg-[#1a3770] py-6 md:py-8">
      <div className="container mx-auto flex flex-col items-center justify-center gap-3 md:gap-4 px-4 sm:px-6 lg:px-8">
        <h2 className="font-['Oswald',Helvetica] font-medium text-white text-2xl md:text-[32px] tracking-[0] leading-tight text-center">
          CALL US TODAY!
        </h2>

        <Button 
          onClick={() => window.location.href = 'tel:5551234567'}
          className="bg-[#11b36f] hover:bg-[#0ea065] rounded-[5px] border-2 border-solid h-auto py-2 md:py-1 px-4 md:px-8 cursor-pointer"
        >
          <span className="font-['Oswald',Helvetica] font-medium text-white text-2xl md:text-[35px] leading-tight whitespace-nowrap">
            (555) 123-4567
          </span>
        </Button>
      </div>
    </section>
  );
};