import React, { useState, useEffect } from 'react';
import { Phone, Menu, X, MessageCircle } from 'lucide-react';
import { COMPANY_INFO } from '../data/interiorData';

interface NavbarProps {
  onOpenQuoteModal?: (productTitle?: string) => void;
  onOpenEstimator?: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenQuoteModal, onOpenEstimator }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'LED Panels', href: '#led-panels' },
    { name: 'UV Marble', href: '#uv-marble' },
    { name: 'Kitchen', href: '#modular-kitchen' },
    { name: 'Carpentry', href: '#carpentry' },
    { name: 'Wallpaper', href: '#wallpaper' },
    { name: 'Blinds', href: '#window-blinds' },
    { name: 'Moulding', href: '#wall-moulding' },
    { name: 'Ceiling', href: '#pvc-ceiling' },
    { name: 'Flooring', href: '#flooring' },
    { name: 'ACP', href: '#acp-elevation' },
    { name: 'Glass & Alum', href: '#tuffen-glass' },
    { name: 'CCTV', href: '#cctv-camera' },
    { name: 'Civil', href: '#construction-work' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-[#0B0B0B]/95 backdrop-blur-md border-b border-[#F5C242]/20 py-3 shadow-[0_10px_30px_-10px_rgba(0,0,0,0.8)]'
          : 'bg-gradient-to-b from-[#0B0B0B]/90 via-[#0B0B0B]/60 to-transparent py-4 sm:py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between gap-4">
          {/* Brand Logo & Title */}
          <a
            href="#home"
            className="flex items-center gap-3 group focus:outline-none focus-visible:ring-2 focus-visible:ring-[#F5C242] rounded-lg p-1"
          >
            <div className="relative w-10 h-10 sm:w-11 sm:h-11 rounded-lg overflow-hidden border border-[#F5C242]/40 bg-black flex items-center justify-center shrink-0 group-hover:border-[#F5C242] transition-colors">
              <img
                src={COMPANY_INFO.logo}
                alt="Sohan Construction Company Logo"
                className="w-full h-full object-cover"
                loading="eager"
              />
            </div>
            <div className="flex flex-col">
              <span className="font-display font-extrabold tracking-wider text-sm sm:text-base text-white group-hover:text-[#F5C242] transition-colors leading-tight">
                SOHAN
              </span>
              <span className="text-[10px] sm:text-[11px] font-medium tracking-widest text-[#F5C242] uppercase">
                All Interior
              </span>
            </div>
          </a>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center gap-7">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-sm font-medium text-neutral-300 hover:text-[#F5C242] transition-colors relative py-1 after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-[#F5C242] hover:after:w-full after:transition-all after:duration-300"
              >
                {link.name}
              </a>
            ))}
          </nav>

          {/* Right Action Buttons */}
          <div className="flex items-center gap-3">
            {onOpenEstimator && (
              <button
                onClick={onOpenEstimator}
                className="hidden md:inline-flex items-center text-xs font-semibold px-3 py-2 rounded-lg border border-[#F5C242]/40 text-[#F5C242] hover:bg-[#F5C242]/10 transition-colors"
              >
                Price Calculator
              </button>
            )}

            <a
              href={COMPANY_INFO.phoneHref}
              className="inline-flex items-center gap-2 px-3.5 sm:px-4 py-2 rounded-lg gold-gradient-bg text-black font-semibold text-xs sm:text-sm tracking-wide shadow-md hover:brightness-110 active:scale-95 transition-all"
            >
              <Phone className="w-4 h-4" />
              <span>Call Now</span>
            </a>

            {/* Mobile Hamburger Toggle */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2 rounded-lg text-neutral-300 hover:text-white hover:bg-neutral-900 border border-neutral-800 transition-colors"
              aria-label={mobileMenuOpen ? 'Close navigation menu' : 'Open navigation menu'}
              aria-expanded={mobileMenuOpen}
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-[#0F0F0F]/98 border-b border-[#F5C242]/20 backdrop-blur-xl px-4 pt-3 pb-6 space-y-4 animate-in slide-in-from-top-4 duration-200">
          <nav className="flex flex-col space-y-2 pt-2">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="px-3 py-2.5 rounded-lg text-sm font-medium text-neutral-200 hover:text-[#F5C242] hover:bg-neutral-900/60 transition-colors"
              >
                {link.name}
              </a>
            ))}
          </nav>

          <div className="pt-2 border-t border-neutral-800 flex flex-col gap-2.5">
            {onOpenEstimator && (
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenEstimator();
                }}
                className="w-full text-center py-2.5 text-xs font-semibold rounded-lg border border-[#F5C242]/40 text-[#F5C242] hover:bg-[#F5C242]/10 transition-colors"
              >
                Calculate Estimated Cost (₹ / sq ft)
              </button>
            )}

            <div className="grid grid-cols-2 gap-2">
              <a
                href={COMPANY_INFO.phoneHref}
                className="flex items-center justify-center gap-1.5 py-2.5 rounded-lg gold-gradient-bg text-black font-semibold text-xs tracking-wide shadow"
              >
                <Phone className="w-3.5 h-3.5" />
                <span>Call {COMPANY_INFO.phone}</span>
              </a>
              <a
                href={COMPANY_INFO.whatsappHref}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-1.5 py-2.5 rounded-lg bg-[#25D366] text-white font-semibold text-xs tracking-wide shadow hover:bg-[#20ba59]"
              >
                <MessageCircle className="w-3.5 h-3.5" />
                <span>WhatsApp</span>
              </a>
            </div>

            <div className="text-[11px] text-neutral-400 text-center pt-1">
              📍 Thanesar, Kurukshetra, Haryana
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
