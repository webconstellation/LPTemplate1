import React from "react";
import { Button } from "../../../../components/ui/button";
import { Card, CardContent } from "../../../../components/ui/card";
import { Award, Shield, Users2, Clock } from "lucide-react";

export const ConsultationSection = (): JSX.Element => {
  const scrollToContactForm = () => {
    const contactForm = document.getElementById('contact-form');
    if (contactForm) {
      contactForm.scrollIntoView({ behavior: 'smooth' });
    }
  };

  // Content paragraphs for the about section
  const aboutParagraphs = [
    "El abogado Bill Niffen de KC Immigration Lawyers tiene años de experiencia ejerciendo la abogacía en el área metropolitana de Kansas City, incluyendo los condados de Johnson, Leavenworth y Wyandotte en Kansas, y los condados de Clay, Jackson, Platte y Ray en Missouri. En 2021, recibió el premio AVVO Client's Choice en Derecho de Inmigración.",
    "La inmigración es un proceso complicado. Contar con un abogado capacitado y con experiencia puede marcar la diferencia. Ahí es donde entra KC Immigration Lawyers. Estaremos contigo durante todo tu camino migratorio.",
    "KC Immigration Lawyers puede guiarte a través de los asuntos complejos que puedan surgir en tu proceso de inmigración.",
    "El abogado de inmigración Bill Niffen está comprometido a usar su profundo conocimiento del proceso migratorio para brindar a sus clientes una experiencia libre de estrés. Contáctanos hoy para una consulta gratuita.",
  ];

  const highlights = [
    {
      icon: Award,
      title: "Premio AVVO 2021",
      description: "Client's Choice en Derecho de Inmigración"
    },
    {
      icon: Shield,
      title: "Experiencia Comprobada",
      description: "Años de práctica en Kansas City"
    },
    {
      icon: Users2,
      title: "Atención Personalizada",
      description: "Acompañamiento en todo el proceso"
    },
    {
      icon: Clock,
      title: "Consulta Gratuita",
      description: "Sin compromiso inicial"
    }
  ];

  return (
    <section className="w-full py-12 md:py-16 bg-gradient-to-br from-gray-50 to-white relative">
      <div className="container max-w-[1130px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8 md:mb-12">
          <h2 className="font-['Oswald',Helvetica] font-bold text-[#1a3770] text-3xl sm:text-4xl md:text-[46px] leading-tight md:leading-[50.6px] mb-4">
            SOBRE NOSOTROS
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
                    src="https://images.pexels.com/photos/5668885/pexels-photo-5668885.jpeg?auto=compress&cs=tinysrgb&w=600&h=800&fit=crop" 
                    alt="Attorney Bill Niffen" 
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#1a3770]/40 via-transparent to-transparent"></div>
                  <div className="absolute bottom-4 left-4 right-4">
                    <div className="bg-white/90 backdrop-blur-sm rounded-lg p-3">
                      <p className="text-[#1a3770] font-semibold">Bill Niffen</p>
                      <p className="text-gray-600 text-sm">Abogado de Inmigración</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Content */}
          <div className="lg:col-span-2">
            {/* Highlights grid */}
            <div className="grid grid-cols-2 gap-4 mb-6">
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

        <div className="text-center">
          <Button 
            onClick={scrollToContactForm}
            className="w-full sm:w-auto sm:max-w-[323px] h-[50px] md:h-[62px] bg-gradient-to-r from-[#11b36f] to-[#0ea062] hover:from-[#0ea062] hover:to-[#11b36f] rounded-xl border-none font-['Oswald',Helvetica] font-medium text-white text-lg md:text-[25px] leading-tight shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 cursor-pointer"
          >
            AGENDA UNA CONSULTA
          </Button>
        </div>
      </div>
    </section>
  );
};