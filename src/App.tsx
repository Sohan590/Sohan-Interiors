/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useMemo } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { TrustStrip } from './components/TrustStrip';
import { ProductCarousel } from './components/ProductCarousel';
import { ProcessStrip } from './components/ProcessStrip';
import { CtaBanner } from './components/CtaBanner';
import { Footer } from './components/Footer';
import { FloatingActions } from './components/FloatingActions';
import { LightboxModal } from './components/LightboxModal';
import { QuoteModal } from './components/QuoteModal';
import { CostEstimatorModal } from './components/CostEstimatorModal';
import {
  LED_PANEL_ITEMS,
  FLOORING_ITEMS,
  CEILING_ITEMS,
  CONSTRUCTION_ITEMS,
  TUFFEN_GLASS_ITEMS,
  ALUMINIUM_ITEMS,
  MODULAR_KITCHEN_ITEMS,
  UV_MARBLE_ITEMS,
  PVC_CEILING_ITEMS,
  POP_CEILING_ITEMS,
  ACP_ELEVATION_ITEMS,
  CCTV_ITEMS,
  CARPENTRY_ITEMS,
  WALLPAPER_ITEMS,
  WINDOW_BLIND_ITEMS,
  WALL_MOULDING_ITEMS,
  ProductItem,
} from './data/interiorData';

export default function App() {
  const [selectedLightboxItem, setSelectedLightboxItem] = useState<ProductItem | null>(null);
  const [selectedQuoteItem, setSelectedQuoteItem] = useState<ProductItem | null>(null);
  const [isEstimatorOpen, setIsEstimatorOpen] = useState(false);

  // Combine all items for seamless lightbox browsing
  const allProductItems = useMemo(() => {
    return [
      ...LED_PANEL_ITEMS,
      ...UV_MARBLE_ITEMS,
      ...MODULAR_KITCHEN_ITEMS,
      ...CARPENTRY_ITEMS,
      ...WALLPAPER_ITEMS,
      ...WINDOW_BLIND_ITEMS,
      ...WALL_MOULDING_ITEMS,
      ...PVC_CEILING_ITEMS,
      ...POP_CEILING_ITEMS,
      ...FLOORING_ITEMS,
      ...CEILING_ITEMS,
      ...ACP_ELEVATION_ITEMS,
      ...TUFFEN_GLASS_ITEMS,
      ...ALUMINIUM_ITEMS,
      ...CCTV_ITEMS,
      ...CONSTRUCTION_ITEMS,
    ];
  }, []);

  const handleOpenLightbox = (item: ProductItem) => {
    setSelectedLightboxItem(item);
  };

  const handleCloseLightbox = () => {
    setSelectedLightboxItem(null);
  };

  const handleOpenQuote = (item: ProductItem) => {
    setSelectedQuoteItem(item);
  };

  const handleCloseQuote = () => {
    setSelectedQuoteItem(null);
  };

  return (
    <div className="min-h-screen bg-[#0B0B0B] text-[#F2F2F2] selection:bg-[#F5C242]/30 selection:text-[#F5C242] flex flex-col overflow-x-hidden">
      {/* 1. Sticky Navbar */}
      <Navbar
        onOpenQuoteModal={() => handleOpenQuote(LED_PANEL_ITEMS[0])}
        onOpenEstimator={() => setIsEstimatorOpen(true)}
      />

      {/* Main Content Sections */}
      <main className="flex-grow">
        {/* 2. Hero (Full-Screen) */}
        <Hero />

        {/* 3. Trust Strip */}
        <TrustStrip />

        {/* 4. CAROUSEL 1 – LED Panel / TV Wall Units */}
        <ProductCarousel
          id="led-panels"
          title="LED Panels & TV Wall Units"
          subtitle="Architectural TV backdrops featuring bookmatched Italian marble, acoustic fluted slats, textured stone walls, and warm perimeter LED halo lighting."
          categoryTag="Signature TV Walls"
          priceBadge="Rs. 700 / sq ft"
          items={LED_PANEL_ITEMS}
          onOpenLightbox={handleOpenLightbox}
          onGetQuote={handleOpenQuote}
        />

        {/* Subtle Luxury Divider */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="h-px bg-gradient-to-r from-transparent via-[#F5C242]/25 to-transparent" />
        </div>

        {/* CAROUSEL – UV Marble Sheets */}
        <ProductCarousel
          id="uv-marble"
          title="UV Marble Sheets"
          subtitle="Ultra-high-gloss Italian Calacatta, Statuario gold-veined, Portoro black marble, and 3D sculpted bas-relief wall panels with 100% waterproof protection."
          categoryTag="UV Marble Sheets"
          priceBadge="Rs. 100 / sq ft"
          items={UV_MARBLE_ITEMS}
          onOpenLightbox={handleOpenLightbox}
          onGetQuote={handleOpenQuote}
        />

        {/* Subtle Luxury Divider */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="h-px bg-gradient-to-r from-transparent via-[#F5C242]/25 to-transparent" />
        </div>

        {/* CAROUSEL – Modular Kitchen */}
        <ProductCarousel
          id="modular-kitchen"
          title="Luxury Modular Kitchens"
          subtitle="Precision acrylic & laminate kitchens with soft-close tandem systems, warm illuminated glass profile curio units, roller shutter appliance garages, and quartz countertops."
          categoryTag="Modular Kitchen"
          priceBadge="Rs. 1200 / sq ft"
          items={MODULAR_KITCHEN_ITEMS}
          onOpenLightbox={handleOpenLightbox}
          onGetQuote={handleOpenQuote}
        />

        {/* Subtle Luxury Divider */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="h-px bg-gradient-to-r from-transparent via-[#F5C242]/25 to-transparent" />
        </div>

        {/* CAROUSEL – PVC Ceiling Work */}
        <ProductCarousel
          id="pvc-ceiling"
          title="PVC Ceiling Work"
          subtitle="Multi-tier teak wood grain & white PVC false ceilings with indirect warm LED cove trays, CNC jali medallions, circular fluted domes, and water/termite-proof durability."
          categoryTag="PVC Ceiling Work"
          priceBadge="Rs. 90 / sq ft"
          items={PVC_CEILING_ITEMS}
          onOpenLightbox={handleOpenLightbox}
          onGetQuote={handleOpenQuote}
        />

        {/* Subtle Luxury Divider */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="h-px bg-gradient-to-r from-transparent via-[#F5C242]/25 to-transparent" />
        </div>

        {/* CAROUSEL – Pop & Gypsum Ceiling Work */}
        <ProductCarousel
          id="pop-ceiling"
          title="Pop & Gypsum Ceiling Work"
          subtitle="Designer architectural POP ceilings with modern 'H' patterns, 45-degree diamond coves, fluted wood drawing room trays, linear magnetic tracks, and flawless smooth gypsum."
          categoryTag="POP & Gypsum Ceiling"
          priceBadge="Rs. 60 / sq ft"
          items={POP_CEILING_ITEMS}
          onOpenLightbox={handleOpenLightbox}
          onGetQuote={handleOpenQuote}
        />

        {/* Subtle Luxury Divider */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="h-px bg-gradient-to-r from-transparent via-[#F5C242]/25 to-transparent" />
        </div>

        {/* CAROUSEL – Wooden Flooring */}
        <ProductCarousel
          id="flooring"
          title="Premium Wooden Flooring"
          subtitle="Warm, durable European oak hardwood and high-density laminate planks with scratch-resistant coating for luxury residences and penthouses."
          categoryTag="Luxury Flooring"
          priceBadge="Rs. 150 / sq ft"
          items={FLOORING_ITEMS}
          onOpenLightbox={handleOpenLightbox}
          onGetQuote={handleOpenQuote}
        />

        {/* Subtle Luxury Divider */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="h-px bg-gradient-to-r from-transparent via-[#F5C242]/25 to-transparent" />
        </div>

        {/* CAROUSEL – Grid Ceiling */}
        <ProductCarousel
          id="ceiling"
          title="Modern Grid Ceiling & LED Panelling"
          subtitle="Precision modular acoustic grid false ceilings with integrated 2x2 flush LED daylight luminaires and perimeter frame light panels for offices, clinics, and showrooms."
          categoryTag="Grid Ceiling"
          priceBadge="Rs. 50 / sq ft"
          items={CEILING_ITEMS}
          onOpenLightbox={handleOpenLightbox}
          onGetQuote={handleOpenQuote}
        />

        {/* Subtle Luxury Divider */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="h-px bg-gradient-to-r from-transparent via-[#F5C242]/25 to-transparent" />
        </div>

        {/* CAROUSEL – ACP Front Elevation */}
        <ProductCarousel
          id="acp-elevation"
          title="ACP Front Elevation"
          subtitle="High-grade exterior PVDF wood-finish & metallic ACP facade cladding, projecting balcony boxes, roof soffits, and architectural canopies with 100% weather resistance."
          categoryTag="ACP Front Elevation"
          priceBadge="Rs. 180 / sq ft"
          items={ACP_ELEVATION_ITEMS}
          onOpenLightbox={handleOpenLightbox}
          onGetQuote={handleOpenQuote}
        />

        {/* Subtle Luxury Divider */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="h-px bg-gradient-to-r from-transparent via-[#F5C242]/25 to-transparent" />
        </div>

        {/* CAROUSEL – Tuffen Glass Work */}
        <ProductCarousel
          id="tuffen-glass"
          title="Tuffen Glass Work"
          subtitle="Architectural 10mm & 12mm toughened safety glass partitions, frameless executive conference cabins, curved privacy frosted glass, and heavy-duty hydraulic doors."
          categoryTag="Tuffen Glass Work"
          priceBadge="Rs. 180 / sq ft"
          items={TUFFEN_GLASS_ITEMS}
          onOpenLightbox={handleOpenLightbox}
          onGetQuote={handleOpenQuote}
        />

        {/* Subtle Luxury Divider */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="h-px bg-gradient-to-r from-transparent via-[#F5C242]/25 to-transparent" />
        </div>

        {/* CAROUSEL – Aluminium Work */}
        <ProductCarousel
          id="aluminium-work"
          title="Aluminium Work"
          subtitle="High-gauge powder-coated aluminium partition cabins, industrial modular enclosures, supervisor cubicles, and commercial shopfront frames."
          categoryTag="Aluminium Work"
          priceBadge="Rs. 270 / sq ft"
          items={ALUMINIUM_ITEMS}
          onOpenLightbox={handleOpenLightbox}
          onGetQuote={handleOpenQuote}
        />

        {/* Subtle Luxury Divider */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="h-px bg-gradient-to-r from-transparent via-[#F5C242]/25 to-transparent" />
        </div>

        {/* CAROUSEL – Carpentry Work */}
        <ProductCarousel
          id="carpentry"
          title="Carpentry Work"
          subtitle="Master on-site carpentry using BWR marine plywood & Greenply calibrated boards — custom walk-in wardrobes, vanity dressing tables, fluted glass sliding closets, and architectural wall panelling."
          categoryTag="Custom Carpentry"
          priceBadge="Custom Carpentry"
          items={CARPENTRY_ITEMS}
          onOpenLightbox={handleOpenLightbox}
          onGetQuote={handleOpenQuote}
        />

        {/* Subtle Luxury Divider */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="h-px bg-gradient-to-r from-transparent via-[#F5C242]/25 to-transparent" />
        </div>

        {/* CAROUSEL – Wallpaper */}
        <ProductCarousel
          id="wallpaper"
          title="Designer Wallpaper"
          subtitle="Over 40+ imported luxury non-woven wallpaper rolls, raised gold filigree damask, banana palm leaf prints, sage marble textures, art deco mosaics, and organic grasscloth."
          categoryTag="Designer Wallpaper"
          priceBadge="Rs. 500 per piece"
          items={WALLPAPER_ITEMS}
          onOpenLightbox={handleOpenLightbox}
          onGetQuote={handleOpenQuote}
        />

        {/* Subtle Luxury Divider */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="h-px bg-gradient-to-r from-transparent via-[#F5C242]/25 to-transparent" />
        </div>

        {/* CAROUSEL – Window Blinds */}
        <ProductCarousel
          id="window-blinds"
          title="Window Blinds"
          subtitle="Precision customized window coverings — dual-layer walnut & teak zebra blinds, banana palm blackout roller shades, cellular honeycomb thermal shades, and textured linen blinds."
          categoryTag="Window Blinds"
          priceBadge="Rs. 120 / sq ft"
          items={WINDOW_BLIND_ITEMS}
          onOpenLightbox={handleOpenLightbox}
          onGetQuote={handleOpenQuote}
        />

        {/* Subtle Luxury Divider */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="h-px bg-gradient-to-r from-transparent via-[#F5C242]/25 to-transparent" />
        </div>

        {/* CAROUSEL – Wall Moulding */}
        <ProductCarousel
          id="wall-moulding"
          title="Wall Moulding & Decorative Cornice"
          subtitle="Architectural high-density polystyrene (PS) decorative wall mouldings, classical European Parisian beadings, ornate floral chair rails, baseboard plinths, and ceiling cornices."
          categoryTag="Wall Moulding"
          priceBadge="Rs. 80 per piece"
          items={WALL_MOULDING_ITEMS}
          onOpenLightbox={handleOpenLightbox}
          onGetQuote={handleOpenQuote}
        />

        {/* Subtle Luxury Divider */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="h-px bg-gradient-to-r from-transparent via-[#F5C242]/25 to-transparent" />
        </div>

        {/* CAROUSEL – Construction Work Material */}
        <ProductCarousel
          id="construction-work"
          title="Construction Work Material"
          subtitle="Turnkey residential & commercial building construction with A-grade cement, TMT steel, heavy RCC column-beam framing, 9-inch brick masonry, and waterproof exterior plaster."
          categoryTag="Construction Work Material"
          priceBadge="Rs. 1200 / sq ft"
          items={CONSTRUCTION_ITEMS}
          onOpenLightbox={handleOpenLightbox}
          onGetQuote={handleOpenQuote}
        />

        {/* Subtle Luxury Divider */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="h-px bg-gradient-to-r from-transparent via-[#F5C242]/25 to-transparent" />
        </div>

        {/* CAROUSEL – CCTV Camera */}
        <ProductCarousel
          id="cctv-camera"
          title="CCTV Camera Surveillance"
          subtitle="Complete CP Plus and Quadra HD security ecosystems, infrared night vision domes, IP66 weatherproof bullet cameras, 8-channel DVR kits with 2TB hard drive, and commercial IP PoE network systems."
          categoryTag="CCTV Surveillance"
          priceBadge="Rs. 1000 per piece"
          items={CCTV_ITEMS}
          onOpenLightbox={handleOpenLightbox}
          onGetQuote={handleOpenQuote}
        />

        {/* Subtle Luxury Divider */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="h-px bg-gradient-to-r from-transparent via-[#F5C242]/25 to-transparent" />
        </div>

        {/* 7. Why Choose Us / Process Strip */}
        <ProcessStrip />

        {/* 8. Final CTA Banner */}
        <CtaBanner />
      </main>

      {/* 9. Professional Footer */}
      <Footer />

      {/* FLOATING ELEMENTS: Fixed WhatsApp Button & Mobile Sticky Dual Action Bar */}
      <FloatingActions />

      {/* Full-Screen Lightbox Modal */}
      <LightboxModal
        item={selectedLightboxItem}
        allItems={allProductItems}
        onClose={handleCloseLightbox}
        onSelect={setSelectedLightboxItem}
        onOpenQuote={handleOpenQuote}
      />

      {/* Direct Quote Request Modal */}
      <QuoteModal
        item={selectedQuoteItem}
        onClose={handleCloseQuote}
      />

      {/* Interactive Price Calculator Modal */}
      <CostEstimatorModal
        isOpen={isEstimatorOpen}
        onClose={() => setIsEstimatorOpen(false)}
      />
    </div>
  );
}
