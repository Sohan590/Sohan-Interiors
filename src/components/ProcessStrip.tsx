import React from 'react';
import { Ruler, Palette, Wrench, CheckCircle2, ArrowRight } from 'lucide-react';
import { PROCESS_STEPS } from '../data/interiorData';

export const ProcessStrip: React.FC = () => {
  const stepIcons = [Ruler, Palette, Wrench, CheckCircle2];

  return (
    <section id="process" className="py-14 sm:py-20 relative bg-[#0E0E0E] border-t border-[#F5C242]/15">
      {/* Background ambient lighting */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-[#F5C242]/5 rounded-full blur-[140px] pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16 sm:mb-20">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#181818] border border-[#F5C242]/30 text-xs font-semibold uppercase tracking-widest text-[#F5C242] mb-3">
            Our Proven 4-Step Process
          </div>
          <h2 className="font-display font-extrabold text-3xl sm:text-5xl text-white tracking-tight">
            How We Bring Your Vision To Life
          </h2>
          <p className="mt-3 text-sm sm:text-base text-neutral-400 font-body">
            From initial site measurement in Kurukshetra to final illuminated handover, every step is executed with artisan precision.
          </p>
        </div>

        {/* Process Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 relative">
          {PROCESS_STEPS.map((step, index) => {
            const Icon = stepIcons[index % stepIcons.length];
            return (
              <div
                key={step.step}
                className="group relative p-6 sm:p-7 rounded-2xl bg-[#141414] border border-neutral-800/90 hover:border-[#F5C242]/50 transition-all duration-300 hover:-translate-y-1.5 flex flex-col justify-between shadow-lg"
              >
                {/* Step Number Watermark & Icon */}
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <div className="w-12 h-12 rounded-xl bg-neutral-900 border border-[#F5C242]/30 text-[#F5C242] flex items-center justify-center group-hover:scale-105 group-hover:border-[#F5C242] group-hover:bg-[#F5C242]/10 transition-all">
                      <Icon className="w-6 h-6 stroke-[1.75]" />
                    </div>
                    <span className="font-display font-black text-2xl text-neutral-700 group-hover:text-[#F5C242]/60 transition-colors">
                      {step.step}
                    </span>
                  </div>

                  <h3 className="font-display font-bold text-lg text-white mb-2 group-hover:text-[#F5C242] transition-colors leading-snug">
                    {step.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-neutral-400 font-body leading-relaxed">
                    {step.desc}
                  </p>
                </div>

                {/* Progress arrow indicator for desktop (except last item) */}
                {index < PROCESS_STEPS.length - 1 && (
                  <div className="hidden lg:block absolute -right-3.5 top-1/2 -translate-y-1/2 z-20 text-[#F5C242]/40">
                    <ArrowRight className="w-6 h-6" />
                  </div>
                )}

                <div className="mt-6 pt-4 border-t border-neutral-800/60 flex items-center justify-between text-[11px] text-[#F5C242]/80 font-medium">
                  <span>Step {step.step} of 04</span>
                  <span className="group-hover:translate-x-1 transition-transform">Done right →</span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
