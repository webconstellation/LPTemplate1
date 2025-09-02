import React from "react";
import { Card, CardContent } from "../../../../components/ui/card";

export const AboutUsSection = (): JSX.Element => {
  const paragraphs = [
    "En KC Immigration Lawyers, ofrecemos una variedad de servicios enfocados en asistir a nuestros clientes con la ley de inmigración de los EE. UU. Principalmente, ayudamos a las personas a obtener sus tarjetas verdes (residencia permanente), ciudadanía estadounidense o venir a los Estados Unidos mediante visas como la visa de prometido/a K-1. Las visas estadounidenses son necesarias para cualquier persona que desee ingresar al país.",
    "Desde recopilar información y documentos hasta completar formularios y prepararte para tu entrevista, trabajar con nosotros puede hacer que el proceso sea más fácil.",
    "No importa qué tipo de visa o método elijas para venir a EE. UU., el proceso migratorio implica varios pasos antes de obtener la ciudadanía o incluso ser aprobado para una visa. Puede ser complicado y generar ansiedad.",
    "Nos comprometemos a asegurarnos de que comprendas el proceso y sepas qué esperar. Estamos contigo en cada paso del camino para responder tus preguntas, establecer expectativas y ayudarte a trazar el mejor camino hacia adelante.",
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
          AYUDA PROFESIONAL Y CERCANA PARA
          <br className="hidden md:block" />
          TU CASO DE INMIGRACIÓN Y CIUDADANÍA
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