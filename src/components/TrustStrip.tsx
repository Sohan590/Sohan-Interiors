import React from 'react';
import { Home, ShieldCheck, Tag, Users } from 'lucide-react';
import { TRUST_FEATURES } from '../data/interiorData';

export const TrustStrip: React.FC = () => {
  const iconList = [Home, ShieldCheck, Tag, Users];

  return (
    <section id="trust-strip" className="relative py-12 sm:py-16 bg-[#0E0E0E] border-y border-[#F5C242]/15">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {TRUST_FEATURES.map((item, index) => {
            const Icon = iconList[index % iconList.length];
            return (
              <div
                key={item.title}
                className="group relative p-6 rounded-2xl bg-[#141414] border border-neutral-800/90 hover:border-[#F5C242]/40 transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_12px_24px_-10px_rgba(245,194,66,0.15)] flex flex-col"
              >
                {/* Subtle top gold indicator line on hover */}
                <div className="absolute top-0 left-6 right-6 h-[2px] bg-transparent group-hover:bg-gradient-to-r group-hover:from-transparent group-hover:via-[#F5C242] group-hover:to-transparent transition-all duration-300" />
                
                <div className="w-12 h-12 rounded-xl bg-neutral-900 border border-[#F5C242]/30 flex items-center justify-center text-[#F5C242] mb-4 group-hover:scale-105 group-hover:border-[#F5C242] transition-all">
                  <Icon className="w-6 h-6 stroke-[1.75]" />
                </div>

                <h3 className="font-display font-bold text-lg text-white mb-1 group-hover:text-[#F5C242] transition-colors">
                  {item.title}
                </h3>
                
                <span className="text-xs font-medium text-[#F5C242]/80 uppercase tracking-wider mb-2">
                  {item.subtitle}
                </span>

                <p className="text-xs sm:text-sm text-neutral-400 leading-relaxed font-body">
                  {item.desc}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
