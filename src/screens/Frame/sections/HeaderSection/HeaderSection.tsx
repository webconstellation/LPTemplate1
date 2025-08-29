import React from "react";
import { Phone } from "lucide-react";

export const HeaderSection = (): JSX.Element => {
  return (
    <header className="sticky top-0 z-50 w-full bg-white shadow-sm border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16 md:h-20">
          {/* Logo */}
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

          {/* Phone CTA */}
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
  );
};