import { PlusIcon } from "lucide-react";
import React from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "../../../../components/ui/accordion";

export const ContactSection = (): JSX.Element => {
  const faqItems = [
    {
      question: "¿PUEDO SOLICITAR LA INMIGRACIÓN POR MI CUENTA?",
      answer: "Sí, puedes completar el proceso migratorio por tu cuenta. Sin embargo, el proceso puede volverse complicado debido a la gran cantidad de normas, regulaciones y papeleo involucrado. Los errores pueden causar demoras e incluso la negación del caso, lo que resulta en pérdida de tiempo y dinero. Probablemente te beneficiarás del conocimiento y la experiencia de un abogado de inmigración que puede ayudarte a evitar esos errores costosos.",
    },
    {
      question: "¿PUEDE UN ABOGADO DE INMIGRACIÓN ACELERAR EL PROCESO MIGRATORIO?",
      answer: "Un abogado de inmigración es un profesional legal con experiencia en ayudar a las personas a navegar el complejo sistema migratorio de los EE. UU. Con nuestro conocimiento de las leyes migratorias actuales, podemos ayudarte a evitar errores o documentación incompleta, lo cual podría retrasar el proceso y aumentar la probabilidad de que tu solicitud sea rechazada.",
    },
    {
      question: "¿CUÁNTO CUESTA OBTENER UNA TARJETA VERDE CON UN ABOGADO?",
      answer: "Cobramos honorarios fijos, punto. Eso significa que nunca pagarás un centavo más de lo que te informamos desde el principio. Y al tener honorarios fijos, puedes contactarnos con tus preguntas sin preocuparte por pagar más para obtener tranquilidad y seguridad.",
    },
  ];

  return (
    <section className="w-full bg-gradient-to-br from-[#1a3770] via-[#2a4a8a] to-[#1a3770] py-8 md:py-12 relative overflow-hidden">
      <div className="max-w-[1130px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8 md:mb-12">
          <h2 className="font-['Oswald',Helvetica] font-bold text-3xl sm:text-4xl md:text-[46px] text-[#11b36f] text-center leading-tight md:leading-[50.6px] mb-4">
            PREGUNTAS FRECUENTES
          </h2>
          <p className="text-white/80 text-lg max-w-2xl mx-auto">
            Obtén respuestas a preguntas comunes sobre derecho de inmigración de nuestros abogados experimentados
          </p>
        </div>

        <Accordion type="single" collapsible className="space-y-3 md:space-y-4">
          {faqItems.map((item, index) => (
            <AccordionItem
              key={index}
              value={`item-${index}`}
              className="border-none bg-white/5 backdrop-blur-sm rounded-xl overflow-hidden"
            >
              <AccordionTrigger className="bg-white/90 backdrop-blur-sm hover:bg-white rounded-t-xl border-none px-4 md:px-6 py-4 md:py-6 [&>svg]:hidden transition-all duration-300">
                <div className="flex justify-between items-center w-full">
                  <span className="font-['Oswald',Helvetica] font-medium text-[#1a3770] text-lg sm:text-xl md:text-[22px] leading-tight text-left">
                    {item.question}
                  </span>
                  <PlusIcon className="h-5 w-5 md:h-6 md:w-6 shrink-0 text-[#1a3770] transition-transform duration-300" />
                </div>
              </AccordionTrigger>
              <AccordionContent className="bg-white/95 backdrop-blur-sm px-4 md:px-6 py-4 md:py-6 rounded-b-xl">
                <p className="font-['Poppins',Helvetica] text-[#333333] text-sm md:text-base leading-relaxed">
                  {item.answer}
                </p>
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
};