import React from 'react';
import {
  Phone,
  MessageCircle,
  Mail,
  Instagram,
  Facebook,
  Youtube,
  MapPin,
  Clock,
  ArrowUp,
  Navigation,
  ExternalLink
} from 'lucide-react';
import { COMPANY_INFO } from '../data/interiorData';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const socialLinks = [
    {
      name: 'Call',
      icon: Phone,
      href: COMPANY_INFO.phoneHref,
      ariaLabel: 'Call Sohan Construction Company directly',
    },
    {
      name: 'WhatsApp',
      icon: MessageCircle,
      href: COMPANY_INFO.whatsappHref,
      ariaLabel: 'Message Sohan Construction Company on WhatsApp',
    },
    {
      name: 'Gmail',
      icon: Mail,
      href: COMPANY_INFO.emailHref,
      ariaLabel: 'Send email to sohanlal946825@gmail.com',
    },
    {
      name: 'Instagram',
      icon: Instagram,
      href: COMPANY_INFO.instagramHref,
      ariaLabel: 'Follow Sohan Construction Company on Instagram',
    },
    {
      name: 'Facebook',
      icon: Facebook,
      href: COMPANY_INFO.facebookHref,
      ariaLabel: 'Visit Sohan Construction Company on Facebook',
    },
    {
      name: 'YouTube',
      icon: Youtube,
      href: COMPANY_INFO.youtubeHref,
      ariaLabel: 'Subscribe to Sohan Construction Company on YouTube',
    },
  ];

  const quickLinks = [
    { name: 'Home', href: '#home' },
    { name: 'LED Panels & TV Walls', href: '#led-panels' },
    { name: 'UV Marble Sheets', href: '#uv-marble' },
    { name: 'Modular Kitchens', href: '#modular-kitchen' },
    { name: 'Carpentry Work', href: '#carpentry' },
    { name: 'Designer Wallpaper', href: '#wallpaper' },
    { name: 'Window Blinds', href: '#window-blinds' },
    { name: 'Wall Moulding', href: '#wall-moulding' },
    { name: 'PVC Ceiling Work', href: '#pvc-ceiling' },
    { name: 'POP & Gypsum Ceilings', href: '#pop-ceiling' },
    { name: 'Wooden Flooring', href: '#flooring' },
    { name: 'Grid Ceiling', href: '#ceiling' },
    { name: 'ACP Front Elevation', href: '#acp-elevation' },
    { name: 'Tuffen Glass Work', href: '#tuffen-glass' },
    { name: 'Aluminium Work', href: '#aluminium-work' },
    { name: 'CCTV Camera', href: '#cctv-camera' },
    { name: 'Construction Work Material', href: '#construction-work' },
  ];

  return (
    <footer id="contact" className="relative bg-[#070707] border-t border-[#F5C242]/30 pt-16 pb-24 md:pb-12 text-neutral-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* 1. SOHAN Construction Logo and Text */}
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6 pb-8 border-b border-neutral-800">
          <div className="flex items-center gap-4">
            <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-2xl overflow-hidden border border-[#F5C242]/50 bg-black p-1 shrink-0 shadow-lg shadow-black/60">
              <img
                src={COMPANY_INFO.logo}
                alt="Sohan Construction Company Logo"
                className="w-full h-full object-cover rounded-xl"
                loading="lazy"
              />
            </div>
            <div>
              <div className="flex flex-wrap items-center gap-2 sm:gap-3">
                <h3 className="font-display font-black text-white text-xl sm:text-2xl tracking-wide">
                  SOHAN <span className="gold-gradient-text">CONSTRUCTION COMPANY</span>
                </h3>
                <span className="px-2.5 py-0.5 rounded-full bg-[#F5C242]/10 border border-[#F5C242]/40 text-[#F5C242] text-[11px] font-semibold tracking-wider uppercase">
                  All Interior
                </span>
              </div>
              <p className="text-xs sm:text-sm text-neutral-400 font-medium mt-1">
                LED Panels • Flooring • Ceiling • Modular Kitchen • UV Marble • Glass & Aluminium
              </p>
              <p className="text-xs text-neutral-500 font-body mt-0.5 max-w-2xl">
                Serving residential & commercial luxury interiors across Thanesar, Kurukshetra, Pehowa, Shahabad, and all Haryana with master craftsmanship.
              </p>
            </div>
          </div>

          <div className="flex items-center gap-3 shrink-0">
            <a
              href={`https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent(
                COMPANY_INFO.fullTitle + ', ' + COMPANY_INFO.address
              )}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl gold-gradient-bg text-black font-semibold text-xs sm:text-sm tracking-wide shadow-md hover:brightness-110 active:scale-95 transition-all"
            >
              <Navigation className="w-4 h-4 fill-black" />
              <span>Get Directions</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>

        {/* 2. Interactive Google Map Location: Below Logo & Text, Above Contact Details */}
        <div className="py-8">
          <div className="relative rounded-2xl overflow-hidden border border-[#F5C242]/30 bg-[#121212] shadow-2xl group">
            {/* Top Bar for Map */}
            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 px-5 py-3.5 bg-[#171717]/95 border-b border-neutral-800 backdrop-blur-md">
              <div className="flex items-center gap-2.5">
                <div className="w-8 h-8 rounded-lg bg-[#F5C242]/10 border border-[#F5C242]/40 flex items-center justify-center text-[#F5C242] shrink-0">
                  <MapPin className="w-4 h-4 text-[#F5C242]" />
                </div>
                <div>
                  <h4 className="font-display font-bold text-sm text-white flex items-center gap-2">
                    <span>Workshop & Office Location</span>
                    <span className="inline-block w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                  </h4>
                  <p className="text-xs text-neutral-400">
                    {COMPANY_INFO.address}
                  </p>
                </div>
              </div>

              <a
                href={`https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent(
                  COMPANY_INFO.fullTitle + ', ' + COMPANY_INFO.address
                )}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-lg border border-[#F5C242]/40 text-[#F5C242] bg-[#F5C242]/5 hover:bg-[#F5C242] hover:text-black transition-all text-xs font-semibold"
              >
                <Navigation className="w-3.5 h-3.5" />
                <span>Open in Google Maps</span>
              </a>
            </div>

            {/* Embedded Interactive Google Map filling the entire space */}
            <div className="relative w-full h-[280px] sm:h-[340px] md:h-[380px] bg-neutral-900">
              <iframe
                title="Sohan Construction Company - Thanesar, Kurukshetra Map Location"
                src={`https://maps.google.com/maps?q=${encodeURIComponent(
                  'Sunar Dharamshala, Birla Mandir, Thanesar, Kurukshetra, Haryana'
                )}&t=&z=15&ie=UTF8&iwloc=&output=embed`}
                className="w-full h-full border-0 filter contrast-105 brightness-95"
                loading="lazy"
                allowFullScreen
                referrerPolicy="no-referrer-when-downgrade"
              />

              {/* Floating Quick Direction Badge overlay */}
              <a
                href={`https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent(
                  COMPANY_INFO.fullTitle + ', ' + COMPANY_INFO.address
                )}`}
                target="_blank"
                rel="noopener noreferrer"
                className="absolute bottom-4 left-4 z-10 hidden sm:flex items-center gap-2 px-3 py-2 rounded-xl bg-black/85 border border-[#F5C242]/40 text-xs text-neutral-200 hover:text-[#F5C242] backdrop-blur-md transition-all hover:bg-black shadow-lg"
              >
                <Navigation className="w-3.5 h-3.5 text-[#F5C242]" />
                <span>Tap for Turn-by-Turn GPS Directions</span>
              </a>
            </div>
          </div>
        </div>

        {/* 3. Contact Details & Information Grid (Below Map) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 lg:gap-8 pt-2 pb-10 border-b border-neutral-800">
          
          {/* Column 1: Contact Details */}
          <div>
            <h4 className="font-display font-bold text-white text-sm uppercase tracking-wider mb-4 flex items-center gap-2">
              <span className="w-2 h-0.5 bg-[#F5C242]" />
              Contact Details
            </h4>
            <div className="space-y-4 text-xs sm:text-sm font-body">
              <div className="flex items-start gap-2.5 text-neutral-300">
                <Phone className="w-4 h-4 text-[#F5C242] shrink-0 mt-0.5" />
                <div>
                  <span className="block text-[10px] text-neutral-500 uppercase tracking-wider">Direct Hotline</span>
                  <a
                    href={COMPANY_INFO.phoneHref}
                    className="font-semibold text-white hover:text-[#F5C242] transition-colors text-base"
                  >
                    {COMPANY_INFO.phone}
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-2.5 text-neutral-300">
                <Mail className="w-4 h-4 text-[#F5C242] shrink-0 mt-0.5" />
                <div>
                  <span className="block text-[10px] text-neutral-500 uppercase tracking-wider">Email Address</span>
                  <a
                    href={COMPANY_INFO.emailHref}
                    className="text-neutral-300 hover:text-[#F5C242] transition-colors break-all"
                  >
                    {COMPANY_INFO.email}
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-2.5 text-neutral-300">
                <MapPin className="w-4 h-4 text-[#F5C242] shrink-0 mt-0.5" />
                <div>
                  <span className="block text-[10px] text-neutral-500 uppercase tracking-wider">Workshop & Office</span>
                  <p className="text-xs text-neutral-400 leading-relaxed">
                    {COMPANY_INFO.address}
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-2.5 text-neutral-300">
                <Clock className="w-4 h-4 text-[#F5C242] shrink-0 mt-0.5" />
                <div>
                  <span className="block text-[10px] text-neutral-500 uppercase tracking-wider">Working Hours</span>
                  <p className="text-xs text-neutral-400 leading-relaxed">
                    Mon – Sun: 8:00 AM – 9:00 PM (Site Visits Available)
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div>
            <h4 className="font-display font-bold text-white text-sm uppercase tracking-wider mb-4 flex items-center gap-2">
              <span className="w-2 h-0.5 bg-[#F5C242]" />
              Quick Links
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-4 gap-y-2 text-xs">
              {quickLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="text-neutral-400 hover:text-[#F5C242] transition-colors flex items-center gap-1.5 group py-0.5"
                >
                  <span className="text-neutral-600 group-hover:text-[#F5C242] transition-colors">›</span>
                  <span className="truncate">{link.name}</span>
                </a>
              ))}
            </div>
          </div>

          {/* Column 3: Connect With Us */}
          <div>
            <h4 className="font-display font-bold text-white text-sm uppercase tracking-wider mb-4 flex items-center gap-2">
              <span className="w-2 h-0.5 bg-[#F5C242]" />
              Connect With Us
            </h4>
            <p className="text-xs text-neutral-400 mb-4 leading-relaxed font-body">
              Follow our latest interior installations on social media or reach out directly for quotes and instant consultations.
            </p>

            {/* One row of equal-sized round gold-outline icon buttons */}
            <div className="flex flex-wrap items-center gap-3">
              {socialLinks.map((item) => {
                const Icon = item.icon;
                return (
                  <a
                    key={item.name}
                    href={item.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={item.ariaLabel}
                    className="w-10 h-10 rounded-full border border-[#F5C242]/50 text-[#F5C242] bg-neutral-900/60 flex items-center justify-center hover:bg-[#F5C242] hover:text-black hover:border-[#F5C242] hover:scale-110 active:scale-95 transition-all shadow-sm focus:outline-none focus:ring-2 focus:ring-[#F5C242]"
                    title={item.name}
                  >
                    <Icon className="w-4 h-4" />
                  </a>
                );
              })}
            </div>

            <div className="mt-5 p-3.5 rounded-xl bg-neutral-900/60 border border-neutral-800 text-[11px] text-neutral-300">
              <span className="text-[#F5C242] font-semibold block mb-1">Direct Consultation Hotline:</span>
              <p className="text-neutral-400">Call or WhatsApp anytime to schedule an on-site interior measurement and quotation.</p>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-neutral-500">
          <p>© 2026 Sohan Construction Company. All rights reserved.</p>
          <div className="flex items-center gap-6">
            <span className="text-neutral-400">Thanesar, Kurukshetra, Haryana</span>
            <button
              onClick={scrollToTop}
              className="inline-flex items-center gap-1.5 text-neutral-400 hover:text-[#F5C242] transition-colors"
            >
              <span>Back to Top</span>
              <ArrowUp className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};
