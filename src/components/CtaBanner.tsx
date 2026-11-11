import React from 'react';
import { Phone, MessageCircle, MapPin, Check } from 'lucide-react';
import { COMPANY_INFO } from '../data/interiorData';

export const CtaBanner: React.FC = () => {
  return (
    <section className="relative py-16 sm:py-20 overflow-hidden bg-black">
      {/* Background with best LED wall photo + dark luxury scrim */}
      <div className="absolute inset-0 pointer-events-none">
        <img
          src="/assets/aistudio/IMG-20261105-WA0004_df26f3b0.jpg"
          alt="Luxury LED Wall Unit with Fireplace"
          className="w-full h-full object-cover scale-105 filter brightness-40 contrast-125"
        />
        {/* Measured scrim for 4.5:1+ WCAG AA contrast */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#0B0B0B] via-[#0B0B0B]/80 to-[#0B0B0B]/90" />
        <div className="absolute inset-0 bg-[#0B0B0B]/60 backdrop-blur-[2px]" />
        
        {/* Warm LED Halo Glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[350px] bg-[#F5C242]/12 rounded-full blur-[140px]" />
      </div>

      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center flex flex-col items-center">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#181818]/90 border border-[#F5C242]/40 text-xs sm:text-sm text-[#F5C242] font-semibold mb-6">
          <MapPin className="w-3.5 h-3.5" />
          <span>Serving All Areas in Thanesar, Kurukshetra & Haryana</span>
        </div>

        <h2 className="font-display font-extrabold text-3xl sm:text-5xl md:text-6xl text-white tracking-tight leading-[1.15] mb-6 text-balance">
          Ready to Transform{' '}
          <span className="gold-gradient-text block sm:inline">Your Home?</span>
        </h2>

        <p className="text-base sm:text-xl text-neutral-300 max-w-2xl font-body mb-8 leading-relaxed">
          Book your free on-site measurement today. Experience custom LED TV panels, premium wooden flooring, and modern grid ceilings at transparent per-sq-ft rates.
        </p>

        {/* Value pills / checklist */}
        <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-6 text-xs sm:text-sm text-neutral-300 mb-10">
          <div className="flex items-center gap-1.5">
            <Check className="w-4 h-4 text-[#F5C242]" />
            <span>Free On-Site Visit</span>
          </div>
          <div className="flex items-center gap-1.5">
            <Check className="w-4 h-4 text-[#F5C242]" />
            <span>Fast 7-10 Day Delivery</span>
          </div>
          <div className="flex items-center gap-1.5">
            <Check className="w-4 h-4 text-[#F5C242]" />
            <span>Fixed Square-Foot Rates</span>
          </div>
        </div>

        {/* Action Buttons: Gold Call & Green WhatsApp */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 w-full sm:w-auto">
          <a
            href={COMPANY_INFO.phoneHref}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-8 py-4 rounded-xl gold-gradient-bg text-black font-display font-bold text-base sm:text-lg tracking-wide shadow-[0_10px_30px_-5px_rgba(245,194,66,0.4)] hover:brightness-110 active:scale-98 transition-all"
          >
            <Phone className="w-5 h-5 fill-black" />
            <span>Call 9468252004</span>
          </a>

          <a
            href={COMPANY_INFO.whatsappHref}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-8 py-4 rounded-xl bg-[#25D366] text-white font-display font-bold text-base sm:text-lg tracking-wide shadow-[0_10px_30px_-5px_rgba(37,211,102,0.3)] hover:bg-[#20ba59] active:scale-98 transition-all"
          >
            <MessageCircle className="w-5 h-5 fill-white" />
            <span>WhatsApp Us Now</span>
          </a>
        </div>
      </div>
    </section>
  );
};
