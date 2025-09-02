import React from "react";
import { Scale, Users, Globe, FileText } from "lucide-react";
import { Button } from "../../../../components/ui/button";

export const HeroSection = (): JSX.Element => {
  const scrollToContactForm = () => {
    const contactForm = document.getElementById('contact-form');
    if (contactForm) {
      contactForm.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative w-full min-h-[500px] md:h-[600px] bg-gradient-to-br from-[#1a3770] via-[#2a4a8a] to-[#1a3770] overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img 
          src="https://images.pexels.com/photos/5668858/pexels-photo-5668858.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080&fit=crop" 
          alt="Immigration law office" 
          className="w-full h-full object-cover opacity-20"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-[#1a3770]/60 via-[#2a4a8a]/60 to-[#1a3770]/60"></div>
      </div>
      
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-10 left-10 transform rotate-12">
          <Scale className="w-16 h-16 text-white" />
        </div>
        <div className="absolute top-20 right-20 transform -rotate-12">
          <Globe className="w-20 h-20 text-white" />
        </div>
        <div className="absolute bottom-20 left-20 transform rotate-45">
          <FileText className="w-12 h-12 text-white" />
        </div>
        <div className="absolute bottom-10 right-10 transform -rotate-45">
          <Users className="w-18 h-18 text-white" />
        </div>
      </div>
      
      {/* Decorative Elements */}
      <div className="absolute top-0 left-0 w-full h-full">
        <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-[#11b36f] rounded-full animate-pulse"></div>
        <div className="absolute top-1/3 right-1/3 w-3 h-3 bg-white rounded-full opacity-60 animate-pulse delay-1000"></div>
        <div className="absolute bottom-1/4 left-1/3 w-1 h-1 bg-[#11b36f] rounded-full animate-pulse delay-500"></div>
      </div>

      <div className="container mx-auto h-full flex items-center justify-center px-4 sm:px-6 lg:px-8">
        <div className="max-w-[1130px] py-16 md:py-24 text-center md:text-left relative z-10">
          <header>
            <h2 className="[text-shadow:0px_0px_6.9px_#00000066] [font-family:'Poppins',Helvetica] font-medium text-[#cbd5e0] text-lg sm:text-xl md:text-[23px] tracking-[0] leading-[25.3px] mb-4 md:mb-6">
              ABOGADOS DE INMIGRACIÓN EN KANSAS CITY
            </h2>

            <h1 className="[text-shadow:0px_0px_18px_#00000066] [font-family:'Oswald',Helvetica] font-bold text-3xl sm:text-4xl md:text-5xl lg:text-6xl tracking-[0] leading-tight md:leading-[66px] mb-6 md:mb-12">
              <span className="text-white">TE AYUDAMOS </span>
              <span className="text-[#11b36f]">CON</span>
              <span className="text-white">
                {" "}EL PROCESO MIENTRAS TE GUIAMOS
                <br className="hidden md:block" />
                {" "}
              </span>
              <span className="text-[#11b36f]">A TRAVÉS</span>
              <span className="text-white"> DEL PROCESO</span>
            </h1>
          </header>

          <p className="[text-shadow:0px_0px_6.9px_#00000066] [font-family:'Poppins',Helvetica] font-light text-white text-lg sm:text-xl md:text-[23px] tracking-[0] leading-relaxed mb-8 md:mb-12 max-w-[843px] mx-auto md:mx-0">
            ¿Estás confundido? ¿Frustrado? ¿Ansioso? ¡Los Abogados de Inmigración de KC pueden ayudarte!
          </p>

          <Button 
            onClick={scrollToContactForm}
            className="w-full sm:w-auto min-w-[280px] sm:min-w-[324px] h-[50px] sm:h-[62px] bg-[#11b36f] rounded-[5px] border-2 border-solid hover:bg-[#0ea062] transition-colors px-4 cursor-pointer"
          >
            <span className="[font-family:'Oswald',Helvetica] font-medium text-white text-lg sm:text-xl md:text-[25px] tracking-[0] leading-tight">
              RESERVA UNA CONSULTA
            </span>
          </Button>
        </div>
      </div>
    </section>
  );
};