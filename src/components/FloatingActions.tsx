import React from 'react';
import { Phone, MessageCircle } from 'lucide-react';
import { COMPANY_INFO } from '../data/interiorData';

export const FloatingActions: React.FC = () => {
  return (
    <>
      {/* Fixed round WhatsApp button at bottom-right on all devices */}
      <aside aria-label="Quick contact" className="fixed bottom-20 sm:bottom-6 right-4 sm:right-6 z-40">
        <a
          href={COMPANY_INFO.whatsappHref}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Chat with Sohan Construction Company on WhatsApp"
          className="group relative flex items-center justify-center w-14 h-14 rounded-full bg-[#25D366] text-white shadow-[0_10px_25px_-5px_rgba(37,211,102,0.5)] hover:scale-110 active:scale-95 transition-all duration-300 focus:outline-none focus:ring-4 focus:ring-[#25D366]/40"
        >
          {/* Subtle pulse ring */}
          <span className="absolute -inset-1 rounded-full bg-[#25D366] opacity-30 animate-ping pointer-events-none" />
          
          <MessageCircle className="w-7 h-7 fill-white" />

          {/* Desktop hover tooltip */}
          <span className="hidden lg:block absolute right-16 top-1/2 -translate-y-1/2 px-3 py-1.5 rounded-lg bg-neutral-900 border border-neutral-700 text-xs font-medium text-white whitespace-nowrap shadow-xl opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">
            Chat on WhatsApp
          </span>
        </a>
      </aside>

      {/* On mobile: sticky bottom bar with two equal buttons: "Call" and "WhatsApp" */}
      <nav aria-label="Mobile quick actions" className="sm:hidden fixed bottom-0 left-0 right-0 z-40 bg-[#0B0B0B]/95 backdrop-blur-md border-t border-[#F5C242]/30 px-3 py-2.5 shadow-[0_-5px_20px_rgba(0,0,0,0.8)]">
        <div className="grid grid-cols-2 gap-2.5 max-w-md mx-auto">
          {/* Call button */}
          <a
            href={COMPANY_INFO.phoneHref}
            className="flex items-center justify-center gap-2 py-3 px-4 rounded-xl gold-gradient-bg text-black font-display font-bold text-sm tracking-wide shadow-md active:scale-98 transition-transform"
          >
            <Phone className="w-4 h-4 fill-black" />
            <span>Call</span>
          </a>

          {/* WhatsApp button */}
          <a
            href={COMPANY_INFO.whatsappHref}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-2 py-3 px-4 rounded-xl bg-[#25D366] text-white font-display font-bold text-sm tracking-wide shadow-md active:scale-98 transition-transform"
          >
            <MessageCircle className="w-4 h-4 fill-white" />
            <span>WhatsApp</span>
          </a>
        </div>
      </nav>
    </>
  );
};
