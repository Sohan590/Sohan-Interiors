import React, { useState, useEffect, useRef, useCallback } from 'react';
import { ChevronLeft, ChevronRight, Maximize2, MessageCircle } from 'lucide-react';
import { ProductItem } from '../data/interiorData';

interface ProductCarouselProps {
  id: string;
  title: string;
  subtitle: string;
  categoryTag: string;
  priceBadge: string;
  items: ProductItem[];
  onOpenLightbox: (item: ProductItem) => void;
  onGetQuote: (item: ProductItem) => void;
}

export const ProductCarousel: React.FC<ProductCarouselProps> = ({
  id,
  title,
  subtitle,
  categoryTag,
  priceBadge,
  items,
  onOpenLightbox,
  onGetQuote,
}) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [touchStart, setTouchStart] = useState<number | null>(null);
  const [touchDelta, setTouchDelta] = useState<number>(0);
  const [visibleCount, setVisibleCount] = useState(3);
  const autoPlayRef = useRef<ReturnType<typeof setInterval> | null>(null);

  // Responsive visible count check
  useEffect(() => {
    const updateVisibleCount = () => {
      if (window.innerWidth < 640) {
        setVisibleCount(1);
      } else if (window.innerWidth < 1024) {
        setVisibleCount(2);
      } else {
        setVisibleCount(3);
      }
    };

    updateVisibleCount();
    window.addEventListener('resize', updateVisibleCount);
    return () => window.removeEventListener('resize', updateVisibleCount);
  }, []);

  const maxIndex = Math.max(0, items.length - visibleCount);

  const nextSlide = useCallback(() => {
    setCurrentIndex((prev) => (prev >= maxIndex ? 0 : prev + 1));
  }, [maxIndex]);

  const prevSlide = useCallback(() => {
    setCurrentIndex((prev) => (prev <= 0 ? maxIndex : prev - 1));
  }, [maxIndex]);

  // Autoplay every 4s, pause on hover or touch
  useEffect(() => {
    if (isPaused || items.length <= visibleCount) {
      if (autoPlayRef.current) clearInterval(autoPlayRef.current);
      return;
    }

    autoPlayRef.current = setInterval(() => {
      nextSlide();
    }, 4000);

    return () => {
      if (autoPlayRef.current) clearInterval(autoPlayRef.current);
    };
  }, [isPaused, items.length, visibleCount, nextSlide]);

  // Touch handlers for mobile swipe
  const handleTouchStart = (e: React.TouchEvent) => {
    setIsPaused(true);
    setTouchStart(e.targetTouches[0].clientX);
    setTouchDelta(0);
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    if (touchStart === null) return;
    const currentX = e.targetTouches[0].clientX;
    setTouchDelta(currentX - touchStart);
  };

  const handleTouchEnd = () => {
    if (touchStart === null) return;
    if (touchDelta < -45) {
      nextSlide();
    } else if (touchDelta > 45) {
      prevSlide();
    }
    setTouchStart(null);
    setTouchDelta(0);
    setIsPaused(false);
  };

  // Calculate slide translation percentage:
  // Mobile: card is 85% wide + 4% gap -> peek of next card
  // Tablet: card is 46% wide + 3% gap -> peek
  // Desktop: card is 31% wide + 2% gap -> peek
  const getCardWidthPercentage = () => {
    if (visibleCount === 1) return 86; // 86% width allows 14% peek of the next card
    if (visibleCount === 2) return 47; // 47% width allows peek
    return 31.5; // desktop allows peek
  };

  const cardWidth = getCardWidthPercentage();
  const gapPercentage = visibleCount === 1 ? 3 : 2;
  const stepPercentage = cardWidth + gapPercentage;
  const translateX = -(currentIndex * stepPercentage);

  return (
    <section
      id={id}
      className="py-12 sm:py-16 relative overflow-hidden bg-[#0B0B0B]"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10 sm:mb-12">
          <div>
            <div className="flex items-center gap-2 mb-2">
              <span className="text-xs font-semibold uppercase tracking-widest text-[#F5C242]">
                {categoryTag}
              </span>
              <span className="text-neutral-600">/</span>
              <span className="px-2.5 py-0.5 rounded-full text-xs font-bold bg-[#F5C242]/15 text-[#F5C242] border border-[#F5C242]/30">
                {priceBadge}
              </span>
            </div>
            <h2 className="font-display font-bold text-2xl sm:text-4xl text-white tracking-tight">
              {title}
            </h2>
            <p className="text-sm sm:text-base text-neutral-400 mt-2 max-w-2xl font-body">
              {subtitle}
            </p>
          </div>

          {/* Desktop Controls (Arrows) */}
          <div className="hidden sm:flex items-center gap-3 shrink-0">
            <button
              onClick={prevSlide}
              aria-label={`Previous ${title} slide`}
              className="w-11 h-11 rounded-full border border-neutral-700 bg-neutral-900/80 text-white flex items-center justify-center hover:border-[#F5C242] hover:text-[#F5C242] hover:bg-neutral-800 transition-all active:scale-95"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button
              onClick={nextSlide}
              aria-label={`Next ${title} slide`}
              className="w-11 h-11 rounded-full border border-neutral-700 bg-neutral-900/80 text-white flex items-center justify-center hover:border-[#F5C242] hover:text-[#F5C242] hover:bg-neutral-800 transition-all active:scale-95"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Carousel Viewport with Peek */}
        <div
          className="relative overflow-visible touch-pan-y"
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          onTouchEnd={handleTouchEnd}
        >
          <div
            className="flex transition-transform duration-500 ease-out"
            style={{
              transform: `translateX(${translateX}%)`,
              gap: `${gapPercentage}%`,
            }}
          >
            {items.map((item) => (
              <div
                key={item.id}
                style={{ width: `${cardWidth}%`, flexShrink: 0 }}
                className="group relative rounded-2xl bg-[#141414] border border-neutral-800/90 hover:border-[#F5C242]/50 transition-all duration-300 flex flex-col overflow-hidden shadow-lg hover:shadow-[0_15px_30px_-10px_rgba(245,194,66,0.18)]"
              >
                {/* Image Container with Hover Zoom & Full-screen Lightbox trigger */}
                <div
                  className="relative aspect-[4/3] w-full overflow-hidden bg-black cursor-pointer"
                  onClick={() => onOpenLightbox(item)}
                  title="Click to view full screen"
                >
                  <img
                    src={item.image}
                    alt={item.alt}
                    loading="lazy"
                    className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-108"
                  />

                  {/* Gradient Scrim for card legibility */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/20 pointer-events-none" />

                  {/* Price Badge on Every Card (User requirement) */}
                  <div className="absolute top-3 left-3 z-10">
                    <span className="px-3 py-1 rounded-lg text-xs font-bold bg-[#0B0B0B]/90 backdrop-blur-md text-[#F5C242] border border-[#F5C242]/40 shadow-md">
                      {item.priceBadge}
                    </span>
                  </div>

                  {/* Lightbox Tap Affordance */}
                  <div className="absolute top-3 right-3 z-10 w-8 h-8 rounded-full bg-black/60 backdrop-blur-md border border-white/20 text-white flex items-center justify-center opacity-80 group-hover:opacity-100 group-hover:bg-[#F5C242] group-hover:text-black transition-all">
                    <Maximize2 className="w-4 h-4" />
                  </div>

                  <div className="absolute bottom-3 right-3 text-[11px] text-neutral-300 bg-black/60 px-2 py-0.5 rounded backdrop-blur-sm pointer-events-none">
                    Tap to expand
                  </div>
                </div>

                {/* Card Content */}
                <div className="p-5 sm:p-6 flex flex-col flex-1 justify-between">
                  <div>
                    <h3 className="font-display font-bold text-base sm:text-lg text-white group-hover:text-[#F5C242] transition-colors leading-snug line-clamp-2">
                      {item.title}
                    </h3>

                    <p className="mt-2 text-xs sm:text-sm text-neutral-400 font-body line-clamp-2 leading-relaxed">
                      {item.description}
                    </p>

                    {/* Features list */}
                    <div className="mt-3.5 flex flex-wrap gap-1.5">
                      {item.features.slice(0, 3).map((feat, i) => (
                        <span
                          key={i}
                          className="text-[11px] px-2 py-0.5 rounded bg-neutral-900 text-neutral-300 border border-neutral-800"
                        >
                          {feat}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Action Row */}
                  <div className="mt-5 pt-4 border-t border-neutral-800/80 flex items-center justify-between gap-3">
                    <div className="flex flex-col">
                      <span className="text-[10px] uppercase tracking-wider text-neutral-400">
                        Rate
                      </span>
                      <span className="text-xs sm:text-sm font-bold text-[#F5C242]">
                        {item.priceBadge}
                      </span>
                    </div>

                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        onGetQuote(item);
                      }}
                      className="px-4 py-2 rounded-lg gold-gradient-bg text-black font-semibold text-xs tracking-wide hover:brightness-110 active:scale-95 transition-all shadow"
                    >
                      Get Quote
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Carousel Dots & Mobile Swipe Indicator */}
        <div className="mt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="text-xs text-neutral-400 font-medium">
            Showing {currentIndex + 1} to {Math.min(currentIndex + visibleCount, items.length)} of {items.length} designs
          </div>

          <div className="flex items-center gap-2">
            {Array.from({ length: maxIndex + 1 }).map((_, idx) => (
              <button
                key={idx}
                onClick={() => setCurrentIndex(idx)}
                aria-label={`Go to slide ${idx + 1}`}
                className={`h-2 rounded-full transition-all duration-300 ${
                  currentIndex === idx
                    ? 'w-8 bg-[#F5C242]'
                    : 'w-2 bg-neutral-700 hover:bg-neutral-500'
                }`}
              />
            ))}
          </div>

          {/* Quick Mobile Arrow Controls */}
          <div className="flex sm:hidden items-center gap-2">
            <button
              onClick={prevSlide}
              aria-label="Previous slide"
              className="px-3 py-1.5 rounded-lg border border-neutral-700 bg-neutral-900 text-white text-xs flex items-center gap-1 active:bg-neutral-800"
            >
              <ChevronLeft className="w-3.5 h-3.5" /> Prev
            </button>
            <button
              onClick={nextSlide}
              aria-label="Next slide"
              className="px-3 py-1.5 rounded-lg border border-neutral-700 bg-neutral-900 text-white text-xs flex items-center gap-1 active:bg-neutral-800"
            >
              Next <ChevronRight className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
