import React, { useState, useEffect } from 'react';
import { X, Calculator, MessageCircle, Phone, Sparkles, Check } from 'lucide-react';
import { COMPANY_INFO } from '../data/interiorData';

interface CostEstimatorModalProps {
  isOpen: boolean;
  onClose: () => void;
}

type ServiceType =
  | 'led'
  | 'uvMarble'
  | 'kitchen'
  | 'wallpaper'
  | 'pvcCeiling'
  | 'popCeiling'
  | 'flooring'
  | 'ceiling'
  | 'acpElevation'
  | 'tuffenGlass'
  | 'aluminium'
  | 'cctv'
  | 'windowBlinds'
  | 'wallMoulding'
  | 'construction';

export const CostEstimatorModal: React.FC<CostEstimatorModalProps> = ({ isOpen, onClose }) => {
  const [selectedService, setSelectedService] = useState<ServiceType>('led');
  const [calcMode, setCalcMode] = useState<'dimensions' | 'direct'>('dimensions');
  const [width, setWidth] = useState('10');
  const [height, setHeight] = useState('8');
  const [directSqFt, setDirectSqFt] = useState('80');

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [onClose]);

  if (!isOpen) return null;

  const services = {
    led: {
      name: 'LED Panel / TV Wall Unit',
      rate: 700,
      unit: 'sq ft',
      popularSizes: [
        { label: '8 × 6 ft (Compact TV Wall)', w: 8, h: 6 },
        { label: '10 × 8 ft (Standard Living Room)', w: 10, h: 8 },
        { label: '12 × 9 ft (Grand Feature Wall)', w: 12, h: 9 },
      ],
      includes: ['Fluted Louvers / Slat Panels', 'Marble / Stone Textured Backer', 'Concealed LED Backlighting', 'Floating Media Console'],
    },
    uvMarble: {
      name: 'UV Marble Sheets',
      rate: 100,
      unit: 'sq ft',
      popularSizes: [
        { label: '8 × 4 ft (Single Feature Sheet)', w: 8, h: 4 },
        { label: '10 × 8 ft (Drawing Room Wall)', w: 10, h: 8 },
        { label: '12 × 10 ft (Grand Marble Wall)', w: 12, h: 10 },
      ],
      includes: ['High-Gloss UV Protective Layer', 'Calacatta / Statuario / Portoro Textures', '100% Waterproof & Termite Proof', 'T-Profile Edge Trimming'],
    },
    kitchen: {
      name: 'Luxury Modular Kitchen',
      rate: 1200,
      unit: 'sq ft',
      popularSizes: [
        { label: '8 × 10 ft (Compact L-Kitchen)', w: 8, h: 10 },
        { label: '10 × 12 ft (Standard Modular Kitchen)', w: 10, h: 12 },
        { label: '12 × 16 ft (Grand Island Kitchen)', w: 12, h: 16 },
      ],
      includes: ['High-Gloss Acrylic / Laminate Shutters', 'Soft-Close Tandem Hardware', 'Illuminated Glass Profile Curio', 'Black Roller Shutter Garage'],
    },
    pvcCeiling: {
      name: 'PVC Ceiling Work',
      rate: 90,
      unit: 'sq ft',
      popularSizes: [
        { label: '10 × 12 ft (Bedroom Ceiling)', w: 10, h: 12 },
        { label: '12 × 16 ft (Drawing Room)', w: 12, h: 16 },
        { label: '15 × 20 ft (Full Living Hall)', w: 15, h: 20 },
      ],
      includes: ['Teak Wood Texture PVC Louvers', 'Indirect Warm LED Cove Lighting', 'Waterproof & Zero Sagging', 'CNC Jali Medallion Provisions'],
    },
    popCeiling: {
      name: 'Pop & Gypsum Ceiling Work',
      rate: 60,
      unit: 'sq ft',
      popularSizes: [
        { label: '10 × 12 ft (Standard Room POP)', w: 10, h: 12 },
        { label: '14 × 18 ft (Drawing Room Tray)', w: 14, h: 18 },
        { label: '16 × 22 ft (Grand Hall Tray)', w: 16, h: 22 },
      ],
      includes: ['Smooth Gypsum Board Finish', 'Linear Magnetic Profile Slots', 'Heavy Fan & Chandelier Hooks', 'Crack-Resistant Joint Treatment'],
    },
    flooring: {
      name: 'Premium Wooden Flooring',
      rate: 150,
      unit: 'sq ft',
      popularSizes: [
        { label: '10 × 12 ft (Small Bedroom)', w: 10, h: 12 },
        { label: '12 × 14 ft (Master Bedroom)', w: 12, h: 14 },
        { label: '16 × 20 ft (Spacious Living Hall)', w: 16, h: 20 },
      ],
      includes: ['AC4 Grade Wear Layer', 'Acoustic Foam Underlayment', 'Precision Interlocking Installation', 'Matching Skirting / Trims'],
    },
    ceiling: {
      name: 'Grid False Ceiling & LED Panels',
      rate: 50,
      unit: 'sq ft',
      popularSizes: [
        { label: '10 × 10 ft (Clinic / Cabin)', w: 10, h: 10 },
        { label: '15 × 20 ft (Office / Showroom)', w: 15, h: 20 },
        { label: '25 × 30 ft (Commercial Floor)', w: 25, h: 30 },
      ],
      includes: ['Galvanized Anti-Rust T-Grid', 'Mineral Fiber Acoustic Tiles', 'Provisions for 2x2 LED Panels', 'Quick Demountable Wiring Access'],
    },
    acpElevation: {
      name: 'ACP Front Elevation',
      rate: 180,
      unit: 'sq ft',
      popularSizes: [
        { label: '15 × 12 ft (Balcony Elevation)', w: 15, h: 12 },
        { label: '20 × 20 ft (Bungalow Facade)', w: 20, h: 20 },
        { label: '30 × 30 ft (Commercial Showroom Front)', w: 30, h: 30 },
      ],
      includes: ['Exterior PVDF Grade ACP Sheets', 'Wood-Grain & Metallic Colors', 'Heavy Aluminium Sub-Framing', '100% Weather & UV Protection'],
    },
    tuffenGlass: {
      name: 'Tuffen Glass Work',
      rate: 180,
      unit: 'sq ft',
      popularSizes: [
        { label: '10 × 9 ft (Executive Cabin Partition)', w: 10, h: 9 },
        { label: '15 × 10 ft (Conference Room Enclosure)', w: 15, h: 10 },
        { label: '20 × 10 ft (Corporate Hallway Facade)', w: 20, h: 10 },
      ],
      includes: ['12mm Toughened Safety Glass', 'Hydraulic Patch Pivot Door', 'Acoustic Edge Weatherseals', 'Optional Frosted Privacy Film'],
    },
    aluminium: {
      name: 'Aluminium Work',
      rate: 270,
      unit: 'sq ft',
      popularSizes: [
        { label: '10 × 8 ft (Office Cubicle Cabin)', w: 10, h: 8 },
        { label: '14 × 10 ft (Industrial Workshop Room)', w: 14, h: 10 },
        { label: '20 × 10 ft (Commercial Shopfront Frame)', w: 20, h: 10 },
      ],
      includes: ['Heavy Powder-Coated Aluminium Section', 'Hinged Aluminium Door with Lock', 'Dual-Tone Glass & Composite Infill', 'Modular Demountable Frame'],
    },
    wallpaper: {
      name: 'Designer Wallpaper & Roller Blinds',
      rate: 500,
      unit: 'piece/roll',
      popularSizes: [
        { label: '1 Roll (Accent Pillar/Niche)', w: 1, h: 1 },
        { label: '3 Rolls (Standard Bedroom Wall)', w: 3, h: 1 },
        { label: '6 Rolls (Full Drawing Room)', w: 6, h: 1 },
      ],
      includes: ['Imported Non-Woven Vinyl Base', 'German Eco-Paste Installation', 'Seamless Pattern Matching', 'Wipeable & Dust-Resistant'],
    },
    cctv: {
      name: 'CCTV Camera Surveillance (CP Plus / Quadra)',
      rate: 1000,
      unit: 'piece/camera',
      popularSizes: [
        { label: '2 Cameras (Home Entry & Gate)', w: 2, h: 1 },
        { label: '4 Cameras (Bungalow Perimeter)', w: 4, h: 1 },
        { label: '8 Cameras (Commercial Complex/Office)', w: 8, h: 1 },
      ],
      includes: ['HD Night Vision Camera (Dome/Bullet)', 'Mobile App Live Streaming Setup', 'Professional Mounting & Wiring', '1 Year Replacement Warranty'],
    },
    windowBlinds: {
      name: 'Window Blinds (Zebra / Roller / Honeycomb)',
      rate: 120,
      unit: 'sq ft',
      popularSizes: [
        { label: '4 × 5 ft (Single Standard Window)', w: 4, h: 5 },
        { label: '6 × 5 ft (Double Bedroom Window)', w: 6, h: 5 },
        { label: '8 × 7 ft (Living Room Picture Window)', w: 8, h: 7 },
      ],
      includes: ['High-Grade UV & Glare Resistant Fabric', 'Aluminium Top Cassette & Roller Channel', 'Smooth Beaded Chain Control', 'Precision Custom Sizing'],
    },
    wallMoulding: {
      name: 'Wall Moulding & Decorative Cornice',
      rate: 80,
      unit: 'piece/strip',
      popularSizes: [
        { label: '6 Strips (Accent Photo Frame Panel)', w: 6, h: 1 },
        { label: '12 Strips (Full Parisian Bedroom Wall)', w: 12, h: 1 },
        { label: '20 Strips (Grand Drawing Room Panels)', w: 20, h: 1 },
      ],
      includes: ['High-Density Polystyrene (PS) Material', 'Pre-Primed Smooth Paintable Face', 'Seamless Miter Cut Installation', '100% Termite & Moisture Proof'],
    },
    construction: {
      name: 'Construction Work Material',
      rate: 1200,
      unit: 'sq ft',
      popularSizes: [
        { label: '25 × 40 ft (1000 sq ft Ground Floor)', w: 25, h: 40 },
        { label: '30 × 50 ft (1500 sq ft Duplex Villa)', w: 30, h: 50 },
        { label: '30 × 60 ft (1800 sq ft Commercial G+1)', w: 30, h: 60 },
      ],
      includes: ['A-Grade Branded Cement & Fe550 Steel', 'RCC Footing, Columns & Beam Casting', '9-Inch Heavy Brick Masonry', 'Waterproof Double-Coat Plastering'],
    },
  };

  const current = services[selectedService];

  const totalSqFt =
    calcMode === 'dimensions'
      ? (parseFloat(width) || 0) * (parseFloat(height) || 0)
      : parseFloat(directSqFt) || 0;

  const estimatedTotal = totalSqFt * current.rate;

  const handleShareWhatsApp = () => {
    const message = `Hello Sohan Ji (Sohan Construction Company),
I calculated an estimate on your website:
• Service: ${current.name}
• Standard Rate: ₹${current.rate} / sq ft
• Total Area: ${totalSqFt} sq ft ${calcMode === 'dimensions' ? `(${width} ft × ${height} ft)` : ''}
• Estimated Cost: ₹${estimatedTotal.toLocaleString('en-IN')}

Please let me know your availability for a free site visit & measurement in Kurukshetra.`;

    const url = `https://wa.me/919468252004?text=${encodeURIComponent(message)}`;
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="estimator-modal-title"
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/85 backdrop-blur-md p-4 overflow-y-auto"
    >
      <div className="relative w-full max-w-3xl rounded-2xl bg-[#141414] border border-[#F5C242]/40 shadow-2xl p-5 sm:p-7 text-neutral-200 animate-in fade-in zoom-in-95 duration-200 my-8">
        {/* Close Button */}
        <button
          onClick={onClose}
          aria-label="Close cost calculator"
          className="absolute top-4 right-4 p-2 rounded-lg bg-neutral-900 text-neutral-400 hover:text-white hover:border-[#F5C242] border border-neutral-800 transition-colors"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Title */}
        <div className="flex items-center gap-2 mb-1">
          <Calculator className="w-5 h-5 text-[#F5C242]" />
          <span className="text-xs font-semibold uppercase tracking-widest text-[#F5C242]">
            Instant Price Calculator
          </span>
        </div>
        <h3 id="estimator-modal-title" className="font-display font-bold text-xl sm:text-2xl text-white mb-1.5">
          Estimate Your Project Cost
        </h3>
        <p className="text-xs sm:text-sm text-neutral-400 font-body mb-5">
          Transparent, fixed square-foot rates for Kurukshetra & Haryana. Select a service below:
        </p>

        {/* Service Selector Tabs */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-1.5 p-1.5 bg-neutral-900 rounded-xl mb-6 border border-neutral-800">
          <button
            onClick={() => {
              setSelectedService('led');
              setWidth('10');
              setHeight('8');
              setDirectSqFt('80');
            }}
            className={`py-2 px-2 text-[11px] font-semibold rounded-lg transition-all text-center ${
              selectedService === 'led'
                ? 'gold-gradient-bg text-black shadow'
                : 'text-neutral-400 hover:text-white'
            }`}
          >
            LED Walls (₹700)
          </button>
          <button
            onClick={() => {
              setSelectedService('uvMarble');
              setWidth('10');
              setHeight('8');
              setDirectSqFt('80');
            }}
            className={`py-2 px-2 text-[11px] font-semibold rounded-lg transition-all text-center ${
              selectedService === 'uvMarble'
                ? 'gold-gradient-bg text-black shadow'
                : 'text-neutral-400 hover:text-white'
            }`}
          >
            UV Marble (₹100)
          </button>
          <button
            onClick={() => {
              setSelectedService('kitchen');
              setWidth('10');
              setHeight('12');
              setDirectSqFt('120');
            }}
            className={`py-2 px-2 text-[11px] font-semibold rounded-lg transition-all text-center ${
              selectedService === 'kitchen'
                ? 'gold-gradient-bg text-black shadow'
                : 'text-neutral-400 hover:text-white'
            }`}
          >
            Kitchen (₹1200)
          </button>
          <button
            onClick={() => {
              setSelectedService('pvcCeiling');
              setWidth('12');
              setHeight('14');
              setDirectSqFt('168');
            }}
            className={`py-2 px-2 text-[11px] font-semibold rounded-lg transition-all text-center ${
              selectedService === 'pvcCeiling'
                ? 'gold-gradient-bg text-black shadow'
                : 'text-neutral-400 hover:text-white'
            }`}
          >
            PVC Ceiling (₹90)
          </button>
          <button
            onClick={() => {
              setSelectedService('popCeiling');
              setWidth('12');
              setHeight('14');
              setDirectSqFt('168');
            }}
            className={`py-2 px-2 text-[11px] font-semibold rounded-lg transition-all text-center ${
              selectedService === 'popCeiling'
                ? 'gold-gradient-bg text-black shadow'
                : 'text-neutral-400 hover:text-white'
            }`}
          >
            POP Ceiling (₹60)
          </button>
          <button
            onClick={() => {
              setSelectedService('flooring');
              setWidth('12');
              setHeight('14');
              setDirectSqFt('168');
            }}
            className={`py-2 px-2 text-[11px] font-semibold rounded-lg transition-all text-center ${
              selectedService === 'flooring'
                ? 'gold-gradient-bg text-black shadow'
                : 'text-neutral-400 hover:text-white'
            }`}
          >
            Flooring (₹150)
          </button>
          <button
            onClick={() => {
              setSelectedService('ceiling');
              setWidth('15');
              setHeight('20');
              setDirectSqFt('300');
            }}
            className={`py-2 px-2 text-[11px] font-semibold rounded-lg transition-all text-center ${
              selectedService === 'ceiling'
                ? 'gold-gradient-bg text-black shadow'
                : 'text-neutral-400 hover:text-white'
            }`}
          >
            Grid Ceiling (₹50)
          </button>
          <button
            onClick={() => {
              setSelectedService('acpElevation');
              setWidth('15');
              setHeight('12');
              setDirectSqFt('180');
            }}
            className={`py-2 px-2 text-[11px] font-semibold rounded-lg transition-all text-center ${
              selectedService === 'acpElevation'
                ? 'gold-gradient-bg text-black shadow'
                : 'text-neutral-400 hover:text-white'
            }`}
          >
            ACP Elevation (₹180)
          </button>
          <button
            onClick={() => {
              setSelectedService('wallpaper');
              setWidth('3');
              setHeight('1');
              setDirectSqFt('3');
            }}
            className={`py-2 px-2 text-[11px] font-semibold rounded-lg transition-all text-center ${
              selectedService === 'wallpaper'
                ? 'gold-gradient-bg text-black shadow'
                : 'text-neutral-400 hover:text-white'
            }`}
          >
            Wallpaper (₹500)
          </button>
          <button
            onClick={() => {
              setSelectedService('windowBlinds');
              setWidth('5');
              setHeight('5');
              setDirectSqFt('25');
            }}
            className={`py-2 px-2 text-[11px] font-semibold rounded-lg transition-all text-center ${
              selectedService === 'windowBlinds'
                ? 'gold-gradient-bg text-black shadow'
                : 'text-neutral-400 hover:text-white'
            }`}
          >
            Blinds (₹120)
          </button>
          <button
            onClick={() => {
              setSelectedService('wallMoulding');
              setWidth('10');
              setHeight('1');
              setDirectSqFt('10');
            }}
            className={`py-2 px-2 text-[11px] font-semibold rounded-lg transition-all text-center ${
              selectedService === 'wallMoulding'
                ? 'gold-gradient-bg text-black shadow'
                : 'text-neutral-400 hover:text-white'
            }`}
          >
            Moulding (₹80)
          </button>
          <button
            onClick={() => {
              setSelectedService('tuffenGlass');
              setWidth('12');
              setHeight('9');
              setDirectSqFt('108');
            }}
            className={`py-2 px-2 text-[11px] font-semibold rounded-lg transition-all text-center ${
              selectedService === 'tuffenGlass'
                ? 'gold-gradient-bg text-black shadow'
                : 'text-neutral-400 hover:text-white'
            }`}
          >
            Tuffen Glass (₹180)
          </button>
          <button
            onClick={() => {
              setSelectedService('aluminium');
              setWidth('12');
              setHeight('8');
              setDirectSqFt('96');
            }}
            className={`py-2 px-2 text-[11px] font-semibold rounded-lg transition-all text-center ${
              selectedService === 'aluminium'
                ? 'gold-gradient-bg text-black shadow'
                : 'text-neutral-400 hover:text-white'
            }`}
          >
            Aluminium (₹270)
          </button>
          <button
            onClick={() => {
              setSelectedService('cctv');
              setWidth('4');
              setHeight('1');
              setDirectSqFt('4');
            }}
            className={`py-2 px-2 text-[11px] font-semibold rounded-lg transition-all text-center ${
              selectedService === 'cctv'
                ? 'gold-gradient-bg text-black shadow'
                : 'text-neutral-400 hover:text-white'
            }`}
          >
            CCTV (₹1000)
          </button>
          <button
            onClick={() => {
              setSelectedService('construction');
              setWidth('25');
              setHeight('40');
              setDirectSqFt('1000');
            }}
            className={`py-2 px-2 text-[11px] font-semibold rounded-lg transition-all text-center col-span-2 sm:col-span-1 ${
              selectedService === 'construction'
                ? 'gold-gradient-bg text-black shadow'
                : 'text-neutral-400 hover:text-white'
            }`}
          >
            Civil (₹1200)
          </button>
        </div>

        {/* Input Controls */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-6">
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <span className="text-xs font-medium text-neutral-300">Input Mode:</span>
              <div className="flex items-center gap-1 text-xs">
                <button
                  onClick={() => setCalcMode('dimensions')}
                  className={`px-2.5 py-1 rounded ${
                    calcMode === 'dimensions'
                      ? 'bg-neutral-800 text-[#F5C242] border border-[#F5C242]/30'
                      : 'text-neutral-400'
                  }`}
                >
                  Length × Height
                </button>
                <button
                  onClick={() => setCalcMode('direct')}
                  className={`px-2.5 py-1 rounded ${
                    calcMode === 'direct'
                      ? 'bg-neutral-800 text-[#F5C242] border border-[#F5C242]/30'
                      : 'text-neutral-400'
                  }`}
                >
                  Direct Sq Ft
                </button>
              </div>
            </div>

            {calcMode === 'dimensions' ? (
              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label htmlFor="est-width" className="block text-xs text-neutral-400 mb-1">
                    Width / Length (ft)
                  </label>
                  <input
                    id="est-width"
                    type="number"
                    value={width}
                    onChange={(e) => setWidth(e.target.value)}
                    className="w-full px-3 py-2 rounded-lg bg-neutral-900 border border-neutral-700 text-white text-sm focus:border-[#F5C242] focus:outline-none"
                  />
                </div>
                <div>
                  <label htmlFor="est-height" className="block text-xs text-neutral-400 mb-1">
                    Height / Breadth (ft)
                  </label>
                  <input
                    id="est-height"
                    type="number"
                    value={height}
                    onChange={(e) => setHeight(e.target.value)}
                    className="w-full px-3 py-2 rounded-lg bg-neutral-900 border border-neutral-700 text-white text-sm focus:border-[#F5C242] focus:outline-none"
                  />
                </div>
              </div>
            ) : (
              <div>
                <label htmlFor="est-direct-sqft" className="block text-xs text-neutral-400 mb-1">
                  Total Area in Square Feet
                </label>
                <input
                  id="est-direct-sqft"
                  type="number"
                  value={directSqFt}
                  onChange={(e) => setDirectSqFt(e.target.value)}
                  className="w-full px-3 py-2 rounded-lg bg-neutral-900 border border-neutral-700 text-white text-sm focus:border-[#F5C242] focus:outline-none"
                />
              </div>
            )}

            {/* Quick popular size presets */}
            <div>
              <span className="text-[11px] text-neutral-500 uppercase tracking-wider block mb-2">
                Popular Room Presets
              </span>
              <div className="flex flex-col gap-1.5">
                {current.popularSizes.map((preset) => (
                  <button
                    key={preset.label}
                    onClick={() => {
                      setCalcMode('dimensions');
                      setWidth(preset.w.toString());
                      setHeight(preset.h.toString());
                    }}
                    className="text-left text-xs px-2.5 py-1.5 rounded bg-neutral-900/60 hover:bg-neutral-800 text-neutral-300 hover:text-[#F5C242] border border-neutral-800 flex items-center justify-between transition-colors"
                  >
                    <span>{preset.label}</span>
                    <span className="text-neutral-500 font-mono text-[11px]">
                      {preset.w * preset.h} sq ft
                    </span>
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Result Card */}
          <div className="p-5 rounded-2xl bg-gradient-to-br from-neutral-900 to-[#121212] border border-[#F5C242]/30 flex flex-col justify-between">
            <div>
              <span className="text-xs font-semibold text-[#F5C242] uppercase tracking-wider block mb-1">
                Estimated Project Cost
              </span>
              <div className="text-3xl sm:text-4xl font-display font-extrabold text-white tracking-tight">
                ₹{estimatedTotal.toLocaleString('en-IN')}
              </div>
              <div className="text-xs text-neutral-400 mt-1 flex items-center gap-2">
                <span>{totalSqFt} sq ft @ ₹{current.rate} / sq ft</span>
              </div>

              {/* What's included checklist */}
              <div className="mt-5 pt-4 border-t border-neutral-800/80">
                <span className="text-[11px] font-semibold text-neutral-300 block mb-2">
                  Package includes:
                </span>
                <ul className="space-y-1.5 text-xs text-neutral-400">
                  {current.includes.map((inc, i) => (
                    <li key={i} className="flex items-center gap-1.5">
                      <Check className="w-3.5 h-3.5 text-[#F5C242] shrink-0" />
                      <span>{inc}</span>
                    </li>
                  ))}
                  <li className="flex items-center gap-1.5 text-[#F5C242]">
                    <Sparkles className="w-3.5 h-3.5 shrink-0" />
                    <span>Free on-site measurement in Kurukshetra</span>
                  </li>
                </ul>
              </div>
            </div>

            <div className="mt-6 pt-4 border-t border-neutral-800 flex flex-col gap-2">
              <button
                onClick={handleShareWhatsApp}
                className="w-full py-3 px-4 rounded-xl bg-[#25D366] text-white font-semibold text-xs sm:text-sm flex items-center justify-center gap-2 hover:bg-[#20ba59] active:scale-98 transition-all shadow"
              >
                <MessageCircle className="w-4 h-4 fill-white" />
                <span>Send Estimate on WhatsApp</span>
              </button>

              <a
                href={COMPANY_INFO.phoneHref}
                className="w-full py-2.5 px-4 rounded-xl gold-gradient-bg text-black font-semibold text-xs sm:text-sm flex items-center justify-center gap-2 hover:brightness-110 active:scale-98 transition-all shadow text-center"
              >
                <Phone className="w-4 h-4 fill-black" />
                <span>Call to Confirm Site Visit</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
