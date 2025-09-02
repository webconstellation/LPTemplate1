import React from "react";
import { Button } from "../../components/ui/button";
import { Card, CardContent } from "../../components/ui/card";
import { CheckCircle, Phone, Mail, MapPin, ArrowLeft } from "lucide-react";

export const ThankYou = (): JSX.Element => {
  const handleBackToHome = () => {
    window.location.href = '/';
  };

  const handleCallNow = () => {
    window.location.href = 'tel:5551234567';
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#1a3770] via-[#2a4a8a] to-[#1a3770] relative overflow-hidden">
      <div className="absolute inset-0">
        <img 
          src="https://images.pexels.com/photos/5668858/pexels-photo-5668858.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080&fit=crop" 
          alt="Immigration law office" 
          className="w-full h-full object-cover opacity-20"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-[#1a3770]/80 via-[#2a4a8a]/80 to-[#1a3770]/80"></div>
      </div>

      {/* Header */}
      <header className="relative z-10 w-full bg-white shadow-sm border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16 md:h-20">
            <div className="flex-shrink-0">
              <div className="h-7 md:h-10 flex items-center">
                <img
                  src="/constellation-law-logo.png"
                  alt="Constellation Law"
                  className="h-full w-auto"
                  onError={(e) => {
                    e.currentTarget.style.display = 'none';
                    e.currentTarget.nextElementSibling.style.display = 'block';
                  }}
                />
                <span className="hidden font-bold text-[#1a3770] text-lg md:text-xl">Constellation Law</span>
              </div>
            </div>
            <a
              href="tel:5551234567"
              className="inline-flex items-center px-4 py-2 md:px-6 md:py-3 bg-[#22c55e] hover:bg-[#16a34a] text-white font-semibold rounded-lg transition-colors duration-200 shadow-md hover:shadow-lg"
            >
              <Phone className="w-4 h-4 md:w-5 md:h-5 mr-2" />
              <span className="hidden sm:inline">Call: </span>
              <span>(555) 123-4567</span>
            </a>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="relative z-10 flex items-center justify-center min-h-[calc(100vh-80px)] py-12">
        <div className="container max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            {/* Success Icon */}
            <div className="flex justify-center mb-6">
              <div className="w-20 h-20 bg-gradient-to-br from-[#11b36f] to-[#0ea062] rounded-full flex items-center justify-center shadow-lg">
                <CheckCircle className="w-12 h-12 text-white" />
              </div>
            </div>

            {/* Main Heading */}
            <h1 className="font-['Oswald',Helvetica] font-bold text-white text-4xl sm:text-5xl md:text-6xl leading-tight mb-6">
              THANK YOU FOR YOUR CONSULTATION REQUEST!
            </h1>

            {/* Subheading */}
            <p className="font-['Poppins',Helvetica] font-light text-white/90 text-xl md:text-2xl leading-relaxed mb-8 max-w-3xl mx-auto">
              We have received your criminal defense consultation request and will contact you soon.
            </p>
          </div>

          {/* Information Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
            {/* Next Steps Card */}
            <Card className="bg-white/10 backdrop-blur-sm border-white/20 rounded-2xl overflow-hidden">
              <CardContent className="p-8 text-center">
                <h2 className="font-['Oswald',Helvetica] font-bold text-white text-2xl mb-4">
                  What Happens Next
                </h2>
                <div className="space-y-3 text-white/90">
                  <p className="flex items-center justify-center gap-2">
                    <span className="w-2 h-2 bg-[#11b36f] rounded-full"></span>
                    We will review your criminal case in detail
                  </p>
                  <p className="flex items-center justify-center gap-2">
                    <span className="w-2 h-2 bg-[#11b36f] rounded-full"></span>
                    We will contact you within 24 hours
                  </p>
                  <p className="flex items-center justify-center gap-2">
                    <span className="w-2 h-2 bg-[#11b36f] rounded-full"></span>
                    We will schedule your free criminal defense consultation
                  </p>
                </div>
              </CardContent>
            </Card>

            {/* Contact Info Card */}
            <Card className="bg-white/10 backdrop-blur-sm border-white/20 rounded-2xl overflow-hidden">
              <CardContent className="p-8 text-center">
                <h2 className="font-['Oswald',Helvetica] font-bold text-white text-2xl mb-4">
                  Urgent Legal Matter?
                </h2>
                <div className="space-y-4">
                  <div className="flex items-center justify-center gap-3 text-white/90">
                    <Phone className="w-5 h-5 text-[#11b36f]" />
                    <span>(678) 280-7389</span>
                  </div>
                  <div className="flex items-center justify-center gap-3 text-white/90">
                    <MapPin className="w-5 h-5 text-[#11b36f]" />
                    <span className="text-sm">521 Fifth Avenue, 17th Floor<br />New York, NY 10175</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button 
              onClick={() => window.location.href = 'tel:6782807389'}
              className="w-full sm:w-auto min-w-[280px] h-[50px] bg-gradient-to-r from-[#11b36f] to-[#0ea062] hover:from-[#0ea062] hover:to-[#11b36f] rounded-xl border-none font-['Oswald',Helvetica] font-medium text-white text-lg shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
            >
              <Phone className="w-5 h-5 mr-2" />
              CALL NOW
            </Button>
            
            <Button 
              onClick={handleBackToHome}
              variant="outline"
              className="w-full sm:w-auto min-w-[280px] h-[50px] bg-white/10 backdrop-blur-sm border-white/30 hover:bg-white/20 rounded-xl font-['Oswald',Helvetica] font-medium text-white text-lg transition-all duration-300"
            >
              <ArrowLeft className="w-5 h-5 mr-2" />
              BACK TO HOME
            </Button>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="relative z-10 border-t border-white/10 py-6">
        <div className="container max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-white/60 text-sm">
            © 2025 Dressie Law Firm. All rights reserved. | Criminal Defense Legal Services
          </p>
        </div>
      </footer>
    </div>
  );
};