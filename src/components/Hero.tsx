import React, { useRef, useState } from 'react';
import { Phone, MessageCircle, ChevronDown, Sparkles, Play, Pause, Volume2, VolumeX } from 'lucide-react';
import { COMPANY_INFO } from '../data/interiorData';
import { VideoReelCarousel } from './VideoReelCarousel';

const VIDEO_SRC =
  '/assets/aistudio/Firefly_Cinematic_40-second_product_installation_film__professional_camera_shoot__luxury_modern_inte_47d5a866.mp4';

const HeroVideoPlayer: React.FC = () => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isPlaying, setIsPlaying] = useState(true);
  const [isMuted, setIsMuted] = useState(true);
  const [showControlsOverlay, setShowControlsOverlay] = useState(false);

  const togglePlay = () => {
    if (!videoRef.current) return;
    if (isPlaying) {
      videoRef.current.pause();
      setIsPlaying(false);
    } else {
      videoRef.current.play();
      setIsPlaying(true);
    }
  };

  const toggleMute = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (!videoRef.current) return;
    videoRef.current.muted = !isMuted;
    setIsMuted(!isMuted);
  };

  return (
    <div
      onClick={togglePlay}
      onMouseEnter={() => setShowControlsOverlay(true)}
      onMouseLeave={() => setShowControlsOverlay(false)}
      className="relative w-full aspect-video rounded-xl sm:rounded-2xl overflow-hidden bg-black cursor-pointer shadow-[0_20px_50px_rgba(0,0,0,0.8)] group select-none"
    >
      {/* Video Element - no border, no browser controls/timer */}
      <video
        ref={videoRef}
        src={VIDEO_SRC}
        autoPlay
        loop
        muted
        playsInline
        onPlay={() => setIsPlaying(true)}
        onPause={() => setIsPlaying(false)}
        className="w-full h-full object-cover block"
      />

      {/* Center YouTube-style Pause / Play Button */}
      <div
        className={`absolute inset-0 flex items-center justify-center transition-all duration-300 pointer-events-none ${
          !isPlaying
            ? 'opacity-100 bg-black/40 backdrop-blur-[2px]'
            : showControlsOverlay
            ? 'opacity-80 bg-black/20'
            : 'opacity-0'
        }`}
      >
        <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-black/75 border border-[#F5C242]/70 text-[#F5C242] flex items-center justify-center shadow-[0_0_30px_rgba(245,194,66,0.35)] transform transition-transform duration-200 group-hover:scale-110">
          {isPlaying ? (
            <Pause className="w-8 h-8 sm:w-10 sm:h-10 fill-current" />
          ) : (
            <Play className="w-8 h-8 sm:w-10 sm:h-10 fill-current translate-x-0.5" />
          )}
        </div>
      </div>

      {/* Discretely placed sound toggle button bottom right (no timer) */}
      <div
        className={`absolute bottom-3 right-3 sm:bottom-4 sm:right-4 transition-opacity duration-300 z-20 ${
          showControlsOverlay || !isPlaying ? 'opacity-100' : 'opacity-0'
        }`}
      >
        <button
          onClick={toggleMute}
          aria-label={isMuted ? 'Unmute video audio' : 'Mute video audio'}
          className="p-2 sm:p-2.5 rounded-full bg-black/70 hover:bg-black/90 text-white/90 hover:text-[#F5C242] border border-white/20 transition-all backdrop-blur-md"
        >
          {isMuted ? <VolumeX className="w-4 h-4 sm:w-5 sm:h-5" /> : <Volume2 className="w-4 h-4 sm:w-5 sm:h-5" />}
        </button>
      </div>
    </div>
  );
};

export const Hero: React.FC = () => {
  return (
    <section
      id="home"
      className="relative flex flex-col items-center justify-center overflow-hidden pt-20 sm:pt-24 pb-8"
    >
      {/* Background Collage of TV Wall & Interior Photos with Dark Overlay & Blur */}
      <div className="absolute inset-0 pointer-events-none z-0">
        <div className="absolute inset-0 grid grid-cols-2 md:grid-cols-4 h-full w-full opacity-20 filter blur-sm scale-105">
          <img
            src="/assets/aistudio/IMG-20261105-WA0004_df26f3b0.jpg"
            alt="TV Wall Texture"
            className="w-full h-full object-cover"
          />
          <img
            src="/assets/aistudio/IMG-20261105-WA0009_a2f8d76e.jpg"
            alt="Marble Fluted TV Wall"
            className="w-full h-full object-cover hidden sm:block"
          />
          <img
            src="/assets/aistudio/IMG-20261105-WA0017_782df1ff.jpg"
            alt="Wooden Flooring"
            className="w-full h-full object-cover"
          />
          <img
            src="/assets/aistudio/IMG-20261105-WA0007_4d7de37f.jpg"
            alt="LED Backlit Slat Wall"
            className="w-full h-full object-cover hidden md:block"
          />
        </div>

        {/* Gradient Scrims: Dark luxury overlay with soft warm LED glows */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#0B0B0B]/85 via-[#0B0B0B]/90 to-[#0B0B0B]" />
        
        {/* Soft Warm LED Halos matching the ambient TV wall lighting */}
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[500px] h-[500px] bg-[#F5C242]/10 rounded-full blur-[140px] pointer-events-none" />
        <div className="absolute bottom-10 left-1/4 w-[350px] h-[350px] bg-[#C8921A]/8 rounded-full blur-[120px] pointer-events-none" />
      </div>

      {/* Content Container */}
      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center flex flex-col items-center w-full">
        {/* Regional Badge */}
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#181818]/90 border border-[#F5C242]/30 text-xs sm:text-sm text-neutral-300 mb-5 backdrop-blur-sm">
          <Sparkles className="w-3.5 h-3.5 text-[#F5C242]" />
          <span>Thanesar & Kurukshetra's Premier Interior Specialists</span>
        </div>

        {/* Hero Brand Logo (Centered, Crisp, Never Stretched) */}
        <div className="relative group mb-6">
          <div className="absolute -inset-2 bg-gradient-to-r from-[#F5C242]/30 via-[#E5A817]/20 to-[#C8921A]/30 rounded-2xl blur-xl opacity-75 group-hover:opacity-100 transition duration-500" />
          <div className="relative w-36 h-36 sm:w-48 sm:h-48 md:w-52 md:h-52 rounded-2xl overflow-hidden border-2 border-[#F5C242]/40 bg-black shadow-2xl p-1 flex items-center justify-center">
            <img
              src={COMPANY_INFO.logo}
              alt="Sohan Construction Company - All Interior Logo"
              className="w-full h-full object-contain rounded-xl"
              loading="eager"
            />
          </div>
        </div>

        {/* Main Tagline */}
        <h1 className="font-display font-extrabold tracking-tight text-3xl sm:text-5xl md:text-6xl text-white max-w-3xl leading-[1.15] mb-3 text-balance">
          Crafting Interiors That{' '}
          <span className="gold-gradient-text block sm:inline">
            Define Your Space.
          </span>
        </h1>

        {/* Subtext */}
        <p className="font-body text-sm sm:text-lg md:text-xl text-neutral-300 font-medium tracking-wide mb-6 flex flex-wrap items-center justify-center gap-2 sm:gap-3">
          <span className="hover:text-[#F5C242] transition-colors">LED Panels</span>
          <span className="text-[#F5C242] font-bold">·</span>
          <span className="hover:text-[#F5C242] transition-colors">Wooden Flooring</span>
          <span className="text-[#F5C242] font-bold">·</span>
          <span className="hover:text-[#F5C242] transition-colors">Grid Ceiling</span>
        </p>

        {/* Action Buttons: Gold Call & Green WhatsApp */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-3 w-full sm:w-auto">
          <a
            href={COMPANY_INFO.phoneHref}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-7 py-3.5 rounded-xl gold-gradient-bg text-black font-display font-bold text-sm sm:text-base tracking-wide shadow-[0_10px_25px_-5px_rgba(245,194,66,0.4)] hover:brightness-110 active:scale-98 transition-all"
          >
            <Phone className="w-4 h-4 fill-black" />
            <span>Call 9468252004</span>
          </a>

          <a
            href={COMPANY_INFO.whatsappHref}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-7 py-3.5 rounded-xl bg-[#25D366] text-white font-display font-bold text-sm sm:text-base tracking-wide shadow-[0_10px_25px_-5px_rgba(37,211,102,0.3)] hover:bg-[#20ba59] active:scale-98 transition-all"
          >
            <MessageCircle className="w-4 h-4 fill-white" />
            <span>WhatsApp</span>
          </a>
        </div>

        {/* Subtle quick location & transparency note */}
        <div className="mt-4 text-xs text-neutral-400 flex items-center justify-center gap-2">
          <span>📍 Near Sunar Dharamshala, Birla Mandir, Thanesar</span>
          <span className="text-neutral-600 hidden sm:inline">|</span>
          <span className="text-[#F5C242] font-medium hidden sm:inline">Transparent Sq Ft Pricing</span>
        </div>

        {/* Cinematic Video Clip Player filling space cleanly */}
        <div className="w-full mt-7 mb-4 max-w-4xl mx-auto">
          <HeroVideoPlayer />
        </div>

        {/* Video Clips Carousel: Reference Videos One After Another */}
        <div className="w-full mt-3 mb-4 max-w-4xl mx-auto">
          <VideoReelCarousel />
        </div>

        {/* Animated Scroll-Down Cue immediately under the clip with zero dead space */}
        <a
          href="#trust-strip"
          aria-label="Scroll down to explore services"
          className="mt-2 inline-flex flex-col items-center text-neutral-400 hover:text-[#F5C242] transition-colors group cursor-pointer"
        >
          <span className="text-[11px] uppercase tracking-widest font-semibold mb-1 opacity-80 group-hover:opacity-100">
            Explore Work
          </span>
          <div className="w-5 h-8 rounded-full border-2 border-neutral-600 group-hover:border-[#F5C242] flex items-start justify-center p-1 transition-colors">
            <div className="w-1 h-2 bg-[#F5C242] rounded-full animate-bounce" />
          </div>
          <ChevronDown className="w-3.5 h-3.5 mt-0.5 text-[#F5C242] animate-pulse" />
        </a>
      </div>
    </section>
  );
};
