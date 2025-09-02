import React from "react";
import { Users, FileCheck, Heart, Home } from "lucide-react";
import { Card, CardContent } from "../../../../components/ui/card";

export const IntroductionSection = (): JSX.Element => {
  // Service card data for mapping
  const serviceCards = [
    {
      icon: Users,
      title: "CIUDADANÍA ESTADOUNIDENSE",
      content: `Cuando los residentes permanentes legales desean convertirse en ciudadanos estadounidenses, KC Immigration Lawyers puede ayudar. Ofrecemos una variedad de servicios legales para ayudar a los no ciudadanos a entender el proceso migratorio y prepararse para la naturalización. Brindamos información, asesoría y representación para que los residentes permanentes puedan obtener la ciudadanía rápidamente.`,
    },
    {
      icon: FileCheck,
      title: "TARJETAS VERDES",
      content: `Obtener una tarjeta verde también se conoce como residencia permanente. Completar el proceso de residencia permanente es un paso clave en el camino migratorio. Con este estatus, el titular de la tarjeta verde puede vivir y trabajar en cualquier parte de los EE. UU. y, por lo general, será elegible para solicitar la ciudadanía estadounidense en unos pocos años.`,
    },
    {
      icon: Heart,
      title: "VISAS DE PROMETIDO/A - K-1",
      content: `Las visas de prometido/a (o visas K-1) son un tipo de visa dentro de la categoría de inmigración basada en la familia. Estas visas permiten que un ciudadano extranjero entre a los Estados Unidos por 90 días para conocer a la familia de su pareja y casarse. Dado que es una visa muy específica, contar con la ayuda de un abogado de inmigración altamente experimentado es clave para garantizar que toda la documentación se complete y presente correctamente.`,
    },
    {
      icon: Home,
      title: "INMIGRACIÓN FAMILIAR",
      content: `La inmigración basada en la familia, en la que un familiar vive en los Estados Unidos y te patrocina para obtener una tarjeta verde, es uno de los caminos más comunes hacia la residencia en EE. UU. KC Immigration Lawyers puede ayudarte con las solicitudes, representación y mucho más.`,
    },
  ];

  return (
    <section className="w-full bg-gradient-to-b from-gray-50 to-white py-8 md:py-16 relative">
      <div className="container max-w-[1130px] mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header with green border */}
        <div className="pb-4 md:pb-6 mb-6 md:mb-8 border-b-[3px] border-[#11b36f] relative">
          <h2 className="font-['Oswald',Helvetica] font-bold text-[#1a3770] text-2xl sm:text-3xl md:text-4xl text-center leading-tight mb-4">
            Abogados de inmigración atentos, compasivos y capacitados en Kansas City
          </h2>
          <p className="font-['Poppins',Helvetica] font-medium text-black text-sm sm:text-base md:text-lg text-center leading-relaxed">
            KC Immigration Lawyers atiende al área metropolitana de Kansas City, así como a clientes de inmigración en todo Estados Unidos y alrededor del
            <br className="hidden lg:block" />
            mundo. Brindamos asistencia completa y experta en muchas áreas del derecho de inmigración, incluyendo las siguientes:
          </p>
        </div>

        <h3 className="font-['Oswald',Helvetica] font-bold text-[#1a3770] text-2xl md:text-3xl text-center mb-8">
          Nuestros Servicios de Inmigración
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