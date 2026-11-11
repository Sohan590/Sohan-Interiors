import React, { useState, useRef, useEffect, useCallback } from 'react';
import {
  Play,
  Pause,
  Volume2,
  VolumeX,
  ChevronLeft,
  ChevronRight,
} from 'lucide-react';

export interface VideoReel {
  id: string;
  src: string;
  title: string;
  category: string;
  priceBadge?: string;
  description: string;
}

export const VIDEO_REELS: VideoReel[] = [
  {
    id: 'vid-pvc-ceiling',
    src: '/assets/aistudio/VID-20261106-WA0111_45cbeeb6.mp4',
    title: 'PVC Ceiling & Cove Profile Lighting',
    category: 'PVC Ceiling Work',
    priceBadge: 'Rs. 90 s/f',
    description: 'Multi-tier false ceiling with warm LED cove and magnetic track lighting.',
  },
  {
    id: 'vid-wallpaper-install',
    src: '/assets/aistudio/VID-20261106-WA0112_c910458a.mp4',
    title: 'Designer Wallpaper & Fluted Wall',
    category: 'Designer Wallpaper',
    priceBadge: 'Rs. 500/piece',
    description: 'Master wallpaper application framed by emerald fluted louvers and warm backlight.',
  },
  {
    id: 'vid-wall-moulding',
    src: '/assets/aistudio/VID-20261106-WA0113_6d158ee3.mp4',
    title: 'Wall Moulding & Scenic Landscape Art',
    category: 'Wall Moulding',
    priceBadge: 'Rs. 80/piece',
    description: 'Symmetrical European wall moulding frames encasing illuminated nature murals.',
  },
  {
    id: 'vid-window-blinds',
    src: '/assets/aistudio/VID-20261106-WA0109_9a06d27e.mp4',
    title: 'Custom Printed Blinds in Pooja Mandir',
    category: 'Window Blinds',
    priceBadge: 'Rs. 120 s/f',
    description: 'Smooth rolling devotional window blind integration for home prayer temples.',
  },
  {
    id: 'vid-uv-marble',
    src: '/assets/aistudio/VID-20261106-WA0110_e812e7a2.mp4',
    title: 'UV Marble Sheet & Fluted Louvers',
    category: 'UV Marble Sheets',
    priceBadge: 'Rs. 100 s/f',
    description: 'High-gloss marble texture sheet with gold ambient cove and vertical louvers.',
  },
  {
    id: 'vid-grid-ceiling',
    src: '/assets/aistudio/VID-20261106-WA0108_b47c9a9e.mp4',
    title: 'Commercial 2x2 Grid Ceiling Solutions',
    category: 'Grid Ceiling',
    priceBadge: 'Rs. 75 s/f',
    description: 'Fire-resistant, acoustic 2x2 grid tile installations for offices and institutions.',
  },
  {
    id: 'vid-pvc-walkthrough',
    src: '/assets/aistudio/VID-20261106-WA0107_d3243822.mp4',
    title: 'Complete PVC Ceiling & Wall Walkthrough',
    category: 'PVC Interior Work',
    priceBadge: 'Call 9468252004',
    description: 'Full residential walkthrough of bedroom PVC ceilings, TV panels, and accent walls.',
  },
];

interface ReelCardProps {
  item: VideoReel;
  isPlaying: boolean;
  onTogglePlay: (id: string) => void;
}

const ReelCard: React.FC<ReelCardProps> = ({ item, isPlaying, onTogglePlay }) => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isMuted, setIsMuted] = useState(true);
  const [showControlsOverlay, setShowControlsOverlay] = useState(false);

  useEffect(() => {
    if (!videoRef.current) return;
    if (isPlaying) {
      const playPromise = videoRef.current.play();
      if (playPromise !== undefined) {
        playPromise.catch(() => {
          // Auto-play was prevented, keep silent
        });
      }
    } else {
      videoRef.current.pause();
    }
  }, [isPlaying]);

  const handleCardClick = () => {
    onTogglePlay(item.id);
  };

  const toggleMute = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (!videoRef.current) return;
    videoRef.current.muted = !isMuted;
    setIsMuted(!isMuted);
  };

  return (
    <div
      onClick={handleCardClick}
      onMouseEnter={() => setShowControlsOverlay(true)}
      onMouseLeave={() => setShowControlsOverlay(false)}
      className="relative w-full aspect-[9/16] rounded-xl sm:rounded-2xl overflow-hidden bg-black cursor-pointer shadow-[0_15px_35px_rgba(0,0,0,0.85)] group select-none transition-all duration-300"
    >
      {/* Video Element - no border, no browser controls/timer */}
      <video
        ref={videoRef}
        src={item.src}
        loop
        muted={isMuted}
        playsInline
        className="w-full h-full object-cover block"
      />

      {/* Center YouTube-style Pause / Play Button */}
      <div
        className={`absolute inset-0 flex items-center justify-center transition-all duration-300 pointer-events-none ${
          !isPlaying
            ? 'opacity-100 bg-black/45 backdrop-blur-[1px]'
            : showControlsOverlay
            ? 'opacity-85 bg-black/20'
            : 'opacity-0'
        }`}
      >
        <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-black/80 border border-[#F5C242]/75 text-[#F5C242] flex items-center justify-center shadow-[0_0_25px_rgba(245,194,66,0.35)] transform transition-transform duration-200 group-hover:scale-110">
          {isPlaying ? (
            <Pause className="w-6 h-6 sm:w-7 sm:h-7 fill-current" />
          ) : (
            <Play className="w-6 h-6 sm:w-7 sm:h-7 fill-current translate-x-0.5" />
          )}
        </div>
      </div>

      {/* Discretely placed sound toggle button bottom right (no timer) */}
      <div
        className={`absolute bottom-3 right-3 transition-opacity duration-300 z-20 ${
          showControlsOverlay || !isPlaying ? 'opacity-100' : 'opacity-0'
        }`}
      >
        <button
          onClick={toggleMute}
          aria-label={isMuted ? 'Unmute video audio' : 'Mute video audio'}
          className="p-1.5 sm:p-2 rounded-full bg-black/75 hover:bg-black/95 text-white/90 hover:text-[#F5C242] border border-white/20 transition-all backdrop-blur-md shadow-md"
        >
          {isMuted ? <VolumeX className="w-3.5 h-3.5 sm:w-4 sm:h-4" /> : <Volume2 className="w-3.5 h-3.5 sm:w-4 sm:h-4" />}
        </button>
      </div>
    </div>
  );
};

export const VideoReelCarousel: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [activePlayingId, setActivePlayingId] = useState<string | null>(VIDEO_REELS[0].id);
  const [visibleCount, setVisibleCount] = useState(3);
  const [touchStart, setTouchStart] = useState<number | null>(null);
  const [touchDelta, setTouchDelta] = useState<number>(0);

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

  const maxIndex = Math.max(0, VIDEO_REELS.length - visibleCount);

  const nextSlide = useCallback(() => {
    setCurrentIndex((prev) => (prev >= maxIndex ? 0 : prev + 1));
  }, [maxIndex]);

  const prevSlide = useCallback(() => {
    setCurrentIndex((prev) => (prev <= 0 ? maxIndex : prev - 1));
  }, [maxIndex]);

  const handleTogglePlay = (id: string) => {
    setActivePlayingId((prev) => (prev === id ? null : id));
  };

  // Touch handlers for mobile swipe
  const handleTouchStart = (e: React.TouchEvent) => {
    setTouchStart(e.targetTouches[0].clientX);
    setTouchDelta(0);
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    if (touchStart === null) return;
    setTouchDelta(e.targetTouches[0].clientX - touchStart);
  };

  const handleTouchEnd = () => {
    if (touchStart === null) return;
    if (touchDelta < -40) {
      nextSlide();
    } else if (touchDelta > 40) {
      prevSlide();
    }
    setTouchStart(null);
    setTouchDelta(0);
  };

  return (
    <div className="relative w-full group/carousel">
      {/* Carousel Track Container */}
      <div
        className="relative overflow-hidden w-full"
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
      >
        <div
          className="flex transition-transform duration-500 ease-out"
          style={{
            transform: `translateX(-${currentIndex * (100 / visibleCount)}%)`,
          }}
        >
          {VIDEO_REELS.map((reel) => (
            <div
              key={reel.id}
              className="flex-shrink-0 px-1.5 sm:px-2 box-border"
              style={{ width: `${100 / visibleCount}%` }}
            >
              <ReelCard
                item={reel}
                isPlaying={activePlayingId === reel.id}
                onTogglePlay={handleTogglePlay}
              />
            </div>
          ))}
        </div>
      </div>

      {/* Floating Prev Button (Left) */}
      {maxIndex > 0 && (
        <button
          onClick={prevSlide}
          aria-label="Previous video"
          className="absolute -left-3 sm:-left-4 top-1/2 -translate-y-1/2 z-30 w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-black/85 hover:bg-[#F5C242] text-[#F5C242] hover:text-black border border-[#F5C242]/50 flex items-center justify-center transition-all active:scale-95 shadow-2xl backdrop-blur-md opacity-90 hover:opacity-100"
        >
          <ChevronLeft className="w-5 h-5" />
        </button>
      )}

      {/* Floating Next Button (Right) */}
      {maxIndex > 0 && (
        <button
          onClick={nextSlide}
          aria-label="Next video"
          className="absolute -right-3 sm:-right-4 top-1/2 -translate-y-1/2 z-30 w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-black/85 hover:bg-[#F5C242] text-[#F5C242] hover:text-black border border-[#F5C242]/50 flex items-center justify-center transition-all active:scale-95 shadow-2xl backdrop-blur-md opacity-90 hover:opacity-100"
        >
          <ChevronRight className="w-5 h-5" />
        </button>
      )}

      {/* Pagination Dots indicator */}
      <div className="flex items-center justify-center gap-1.5 mt-3">
        {Array.from({ length: maxIndex + 1 }).map((_, idx) => (
          <button
            key={idx}
            onClick={() => setCurrentIndex(idx)}
            aria-label={`Go to slide ${idx + 1}`}
            className={`h-1.5 rounded-full transition-all duration-300 ${
              currentIndex === idx
                ? 'w-6 bg-[#F5C242]'
                : 'w-1.5 bg-neutral-700 hover:bg-neutral-500'
            }`}
          />
        ))}
      </div>
    </div>
  );
};

