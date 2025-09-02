import React from "react";
import { Card, CardContent } from "../../../../components/ui/card";
import { CheckCircle, Users, Globe, FileText, Shield, Clock } from "lucide-react";

export const FaqSection = (): JSX.Element => {
  // Service descriptions data
  const serviceDescriptions = [
    "Nuestra oficina brinda respuestas a las preguntas de los inmigrantes y los ayuda con sus trámites migratorios, como permisos de trabajo o solicitudes de residencia permanente.",
    "Con KC Immigration Lawyers, puedes tener la tranquilidad de recibir asesoría legal honesta, defensa y representación en North Kansas City, en todo el área metropolitana de Kansas City, en cualquier parte de los Estados Unidos o del mundo.",
    "Contamos con amplia experiencia en diversos temas migratorios como solicitudes de tarjeta verde, permisos de trabajo, visas familiares, visas por matrimonio, visas de prometido/a y más.",
    "También ofrecemos asistencia con el proceso de ciudadanía y naturalización en los EE. UU. Si tienes preguntas sobre cómo convertirte en ciudadano estadounidense o tienes un familiar que necesita ayuda con su solicitud de visa, contacta a KC Immigration Lawyers de inmediato para obtener una representación legal calificada.",
  ];

  const clientCategories = [
    {
      icon: Users,
      title: "Ciudadanos estadounidenses",
      description: "que desean patrocinar a un cónyuge, hijo, padre o hermano para una tarjeta verde."
    },
    {
      icon: Globe,
      title: "Ciudadanos estadounidenses", 
      description: "que desean traer a sus prometidos/as a los EE. UU."
    },
    {
      icon: FileText,
      title: "Personas no ciudadanas",
      description: "que buscan obtener visas."
    },
    {
      icon: Shield,
      title: "Personas en proceso",
      description: "de obtener la residencia permanente o la ciudadanía estadounidense."
    }
  ];

  const serviceHighlights = [
    {
      icon: CheckCircle,
      text: "Respuestas a preguntas de inmigrantes"
    },
    {
      icon: CheckCircle, 
      text: "Permisos de trabajo"
    },
    {
      icon: CheckCircle,
      text: "Solicitudes de residencia permanente"
    },
    {
      icon: CheckCircle,
      text: "Visas familiares y de matrimonio"
    },
    {
      icon: CheckCircle,
      text: "Proceso de ciudadanía y naturalización"
    }
  ];

  return (
    <section className="w-full py-12 md:py-16 bg-gradient-to-br from-white via-gray-50 to-white">
      <div className="container mx-auto max-w-[1130px] px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8 md:mb-12">
          <h2 className="font-bold text-[#1a3770] text-3xl sm:text-4xl md:text-[46px] leading-tight md:leading-[50.6px] [font-family:'Oswald',Helvetica] tracking-[0] mb-4">
            TRABAJAR CON KC IMMIGRATION LAWYERS
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-[#11b36f] to-[#0ea062] mx-auto mb-6"></div>
          <p className="[font-family:'Poppins',Helvetica] font-medium text-[#1a3770] text-base md:text-lg max-w-3xl mx-auto">
            Nuestra firma ofrece una amplia gama de servicios legales relacionados con inmigración para diferentes categorías de clientes, incluyendo:
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
          {/* Left Column - Content */}
          <div className="space-y-6">
            {/* Client categories grid */}
            <div className="grid grid-cols-1 gap-4">
              {clientCategories.map((category, index) => (
                <div key={index} className="bg-white rounded-xl p-5 shadow-md border border-gray-100 hover:shadow-lg transition-all duration-300">
                  <div className="flex items-start gap-3">
                    <div className="w-10 h-10 bg-gradient-to-br from-[#11b36f] to-[#0ea062] rounded-lg flex items-center justify-center flex-shrink-0 mt-1">
                      <category.icon className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-[#1a3770] text-sm mb-2">{category.title}</h3>
                      <p className="text-gray-600 text-sm leading-relaxed">{category.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Service highlights */}
            <div className="bg-gradient-to-br from-[#1a3770] to-[#2a4a8a] rounded-2xl p-6 text-white">
              <h3 className="font-bold text-xl mb-4">Nuestros Servicios Incluyen:</h3>
              <div className="grid grid-cols-1 gap-3">
                {serviceHighlights.map((highlight, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <highlight.icon className="w-5 h-5 text-[#11b36f] flex-shrink-0" />
                    <span className="text-sm">{highlight.text}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column - Image */}
          <div className="flex items-center">
            <Card className="w-full border-0 rounded-2xl overflow-hidden shadow-lg">
              <CardContent className="p-0">
                <div className="relative w-full h-[350px]">
                  <img 
                    src="https://images.pexels.com/photos/5668858/pexels-photo-5668858.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop" 
                    alt="Immigration law consultation and document review" 
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#1a3770]/40 via-transparent to-transparent"></div>
                  <div className="absolute bottom-4 left-4 right-4">
                    <div className="bg-white/90 backdrop-blur-sm rounded-lg p-3">
                      <p className="text-[#1a3770] font-semibold">Consulta Profesional</p>
                      <p className="text-gray-600 text-sm">Asesoría legal especializada</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Service descriptions */}
        <div className="space-y-4 text-center">
          {serviceDescriptions.map((description, index) => (
            <p
              key={`description-${index}`}
              className="[font-family:'Poppins',Helvetica] font-normal text-gray-700 text-sm md:text-base leading-relaxed max-w-4xl mx-auto"
            >
              {description}
            </p>
          ))}
        </div>
      </div>
    </section>
  );
};