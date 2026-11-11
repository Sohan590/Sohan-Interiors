import React, { useEffect, useCallback } from 'react';
import { X, ChevronLeft, ChevronRight, Phone, MessageCircle } from 'lucide-react';
import { ProductItem, COMPANY_INFO } from '../data/interiorData';

interface LightboxModalProps {
  item: ProductItem | null;
  allItems: ProductItem[];
  onClose: () => void;
  onSelect: (item: ProductItem) => void;
  onOpenQuote: (item: ProductItem) => void;
}

export const LightboxModal: React.FC<LightboxModalProps> = ({
  item,
  allItems,
  onClose,
  onSelect,
  onOpenQuote,
}) => {
  if (!item) return null;

  const currentIndex = allItems.findIndex((i) => i.id === item.id);

  const handleNext = useCallback(() => {
    if (currentIndex < allItems.length - 1) {
      onSelect(allItems[currentIndex + 1]);
    } else {
      onSelect(allItems[0]);
    }
  }, [currentIndex, allItems, onSelect]);

  const handlePrev = useCallback(() => {
    if (currentIndex > 0) {
      onSelect(allItems[currentIndex - 1]);
    } else {
      onSelect(allItems[allItems.length - 1]);
    }
  }, [currentIndex, allItems, onSelect]);

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
      if (e.key === 'ArrowRight') handleNext();
      if (e.key === 'ArrowLeft') handlePrev();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [onClose, handleNext, handlePrev]);

  // Prevent background scrolling
  useEffect(() => {
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = '';
    };
  }, []);

  const whatsappInquiryUrl = `https://wa.me/919468252004?text=${encodeURIComponent(
    `Hello Sohan Construction Company, I am interested in this design: "${item.title}" (${item.priceBadge}). Please share details and availability for measurement in Kurukshetra.`
  )}`;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="lightbox-title"
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/95 backdrop-blur-xl p-2 sm:p-6"
    >
      {/* Close button */}
      <button
        onClick={onClose}
        aria-label="Close full-screen image view"
        className="absolute top-4 right-4 z-50 p-2.5 rounded-full bg-neutral-900/80 border border-neutral-700 text-white hover:text-[#F5C242] hover:border-[#F5C242] transition-colors focus:outline-none"
      >
        <X className="w-6 h-6" />
      </button>

      {/* Navigation Arrows */}
      <button
        onClick={handlePrev}
        aria-label="Previous image"
        className="absolute left-2 sm:left-6 top-1/2 -translate-y-1/2 z-50 p-3 rounded-full bg-neutral-900/80 border border-neutral-700 text-white hover:text-[#F5C242] hover:border-[#F5C242] transition-colors"
      >
        <ChevronLeft className="w-6 h-6" />
      </button>

      <button
        onClick={handleNext}
        aria-label="Next image"
        className="absolute right-2 sm:right-6 top-1/2 -translate-y-1/2 z-50 p-3 rounded-full bg-neutral-900/80 border border-neutral-700 text-white hover:text-[#F5C242] hover:border-[#F5C242] transition-colors"
      >
        <ChevronRight className="w-6 h-6" />
      </button>

      {/* Main Container */}
      <div className="relative max-w-5xl w-full max-h-[92vh] flex flex-col items-center justify-center p-2">
        <div className="relative rounded-2xl overflow-hidden border border-neutral-800 bg-[#0B0B0B] max-h-[72vh] flex items-center justify-center shadow-2xl">
          <img
            src={item.image}
            alt={item.alt}
            className="w-auto h-auto max-h-[72vh] max-w-full object-contain"
          />
          {/* Subtle perimeter glow */}
          <div className="absolute inset-0 ring-1 ring-inset ring-[#F5C242]/20 rounded-2xl pointer-events-none" />
        </div>

        {/* Caption & Quick Inquire Bar */}
        <div className="w-full mt-4 p-4 rounded-xl bg-neutral-900/90 border border-neutral-800 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <div>
            <div className="flex items-center gap-2 mb-1">
              <span className="text-[11px] font-semibold text-[#F5C242] uppercase tracking-wider">
                {item.categoryLabel}
              </span>
              <span className="text-neutral-600">·</span>
              <span className="text-xs font-bold text-white bg-black/60 px-2.5 py-0.5 rounded border border-[#F5C242]/30">
                {item.priceBadge}
              </span>
            </div>
            <h3 id="lightbox-title" className="font-display font-bold text-base sm:text-lg text-white">
              {item.title}
            </h3>
            <p className="text-xs text-neutral-400 font-body hidden sm:block mt-0.5 max-w-xl">
              {item.description}
            </p>
          </div>

          <div className="flex items-center gap-2.5 w-full sm:w-auto shrink-0">
            <button
              onClick={() => {
                onClose();
                onOpenQuote(item);
              }}
              className="flex-1 sm:flex-initial px-4 py-2.5 rounded-lg gold-gradient-bg text-black font-semibold text-xs tracking-wide hover:brightness-110 active:scale-95 transition-all text-center"
            >
              Get Custom Quote
            </button>
            <a
              href={whatsappInquiryUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 sm:flex-initial px-4 py-2.5 rounded-lg bg-[#25D366] text-white font-semibold text-xs tracking-wide hover:bg-[#20ba59] active:scale-95 transition-all inline-flex items-center justify-center gap-1.5"
            >
              <MessageCircle className="w-4 h-4" />
              <span>Ask on WhatsApp</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
