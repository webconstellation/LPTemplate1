import React from "react";
import { Button } from "../../../../components/ui/button";
import { Card, CardContent } from "../../../../components/ui/card";
import { Phone, Mail, MapPin, Send } from "lucide-react";

export const FooterSection = (): JSX.Element => {
  // Function to get URL parameters and other tracking info
  const getTrackingInfo = () => {
    const urlParams = new URLSearchParams(window.location.search);
    const referrer = document.referrer;
    const userAgent = navigator.userAgent;
    const timestamp = new Date().toISOString();
    
    return {
      source: urlParams.get('utm_source') || urlParams.get('source') || 'direct',
      medium: urlParams.get('utm_medium') || urlParams.get('medium') || 'organic',
      campaign: urlParams.get('utm_campaign') || urlParams.get('campaign') || '',
      term: urlParams.get('utm_term') || urlParams.get('term') || '',
      content: urlParams.get('utm_content') || urlParams.get('content') || '',
      referrer: referrer || 'direct',
      userAgent: userAgent,
      timestamp: timestamp,
      page: window.location.href
    };
  };

  const handleFormSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const formData = new FormData(form);
    
    // Add tracking information to form data
    const trackingInfo = getTrackingInfo();
    Object.entries(trackingInfo).forEach(([key, value]) => {
      formData.append(key, value);
    });
    
    // Submit to Basin (endpoint to be added later)
    // For now, redirect to thank you page
    window.location.href = '/thank-you';
  };

  const contactInfo = [
    {
      title: "Free Consultation",
      details: "(555) 123-4567",
      titleClass: "w-[217px]",
      detailsClass: "w-[155px]",
    },
    {
      title: "Main Office",
      details: "123 Main Street\nAnytown, State 12345",
      titleClass: "w-[138px]",
      detailsClass: "w-[271px]",
    },
  ];

  return (
    <footer className="w-full bg-gradient-to-b from-neutral-900 to-neutral-950 relative overflow-hidden">
      <div className="mx-auto max-w-[1130px] px-4 sm:px-6 lg:px-8">

        {/* Contact form and information section */}
        <div className="w-full py-12 md:py-16 relative">
          {/* Header section integrated into main content */}
          <div className="text-center mb-12 md:mb-16">
            <h2 className="font-['Oswald',Helvetica] font-bold text-white text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-center tracking-[0] leading-tight md:leading-[66px] mb-4">
              CONTACT US NOW
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-[#11b36f] to-[#0ea062] mx-auto mb-6"></div>
            <p className="text-white/80 text-lg md:text-xl max-w-3xl mx-auto leading-relaxed">
              Ready to start your immigration process? Contact us for expert and personalized legal advice.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12">
            {/* Contact Form */}
            <Card id="contact-form" className="bg-white/10 backdrop-blur-sm border-white/20 rounded-2xl overflow-hidden">
              <CardContent className="p-6 md:p-8">
                <h3 className="font-['Oswald',Helvetica] font-bold text-white text-2xl md:text-3xl mb-6 text-center">
                  Request Your Free Consultation
                </h3>
                <form 
                  onSubmit={handleFormSubmit}
                  method="POST"
                  className="space-y-4"
                >
                  {/* Hidden fields for tracking */}
                  <input type="hidden" name="form_type" value="consultation_request" />
                  <input type="hidden" name="form_source" value="footer_contact_form" />
                  
                  <div>
                    <label htmlFor="fullName" className="block text-white/90 text-sm font-medium mb-2">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      id="fullName"
                      name="fullName"
                      required
                      className="w-full px-4 py-3 bg-white/90 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#11b36f] focus:border-transparent outline-none transition-all duration-200"
                      placeholder="Your full name"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-white/90 text-sm font-medium mb-2">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      className="w-full px-4 py-3 bg-white/90 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#11b36f] focus:border-transparent outline-none transition-all duration-200"
                      placeholder="your@email.com"
                    />
                  </div>
                  <div>
                    <label htmlFor="phone" className="block text-white/90 text-sm font-medium mb-2">
                      Phone *
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      required
                      className="w-full px-4 py-3 bg-white/90 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#11b36f] focus:border-transparent outline-none transition-all duration-200"
                      placeholder="(555) 000-0000"
                    />
                  </div>
                  <div>
                    <label htmlFor="caseSummary" className="block text-white/90 text-sm font-medium mb-2">
                      Brief Summary of Your Case *
                    </label>
                    <textarea
                      id="caseSummary"
                      name="caseSummary"
                      required
                      rows={4}
                      className="w-full px-4 py-3 bg-white/90 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#11b36f] focus:border-transparent outline-none transition-all duration-200 resize-vertical"
                      placeholder="Briefly describe your immigration situation and how we can help you..."
                    ></textarea>
                  </div>
                  <Button 
                    type="submit"
                    className="w-full bg-gradient-to-r from-[#11b36f] to-[#0ea062] hover:from-[#0ea062] hover:to-[#11b36f] text-white font-bold py-3 px-6 rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
                  >
                    <Send className="w-5 h-5 mr-2" />
                    Send Request
                  </Button>
                </form>
              </CardContent>
            </Card>

            {/* Contact Information */}
            <div className="space-y-6">
              <div className="text-center lg:text-left mb-8">
                <h3 className="font-['Oswald',Helvetica] font-bold text-white text-2xl md:text-3xl mb-4">
                  Contact Information
                </h3>
                <p className="text-white/80 text-lg">
                  We're here to help you with your immigration process
                </p>
              </div>

              {contactInfo.map((info, index) => (
                <Card key={index} className="bg-white/10 backdrop-blur-sm border-white/20 rounded-xl overflow-hidden hover:bg-white/15 transition-all duration-300">
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 bg-gradient-to-br from-[#11b36f] to-[#0ea062] rounded-lg flex items-center justify-center flex-shrink-0">
                        {index === 0 ? (
                          <Phone className="w-6 h-6 text-white" />
                        ) : (
                          <MapPin className="w-6 h-6 text-white" />
                        )}
                      </div>
                      <div>
                        <h4 className="font-['Oswald',Helvetica] font-medium text-white text-xl mb-2">
                          {info.title}
                        </h4>
                        <p className="font-['Poppins',Helvetica] font-light text-white/90 text-lg leading-relaxed whitespace-pre-line">
                          {info.details}
                        </p>
                        {index === 0 && (
                          <a
                            href="tel:5551234567"
                            className="inline-flex items-center mt-3 text-[#11b36f] hover:text-[#0ea062] transition-colors duration-200"
                          >
                            <Phone className="w-4 h-4 mr-2" />
                            Call Now
                          </a>
                        )}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}

            </div>
          </div>
        </div>
        
        {/* Copyright */}
        <div className="border-t border-white/10 py-4 text-center">
          <p className="text-white/60 text-sm">
            © 2025 Constellation Law. All rights reserved. | Professional Legal Services
          </p>
        </div>
      </div>
    </footer>
  );
};