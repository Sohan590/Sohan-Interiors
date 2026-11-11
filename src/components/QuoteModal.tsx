import React, { useState, useEffect } from 'react';
import { X, Phone, MessageCircle, Calculator, Check } from 'lucide-react';
import { ProductItem, COMPANY_INFO } from '../data/interiorData';

interface QuoteModalProps {
  item: ProductItem | null;
  onClose: () => void;
}

export const QuoteModal: React.FC<QuoteModalProps> = ({ item, onClose }) => {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [sqFt, setSqFt] = useState('');
  const [location, setLocation] = useState('Thanesar, Kurukshetra');
  const [notes, setNotes] = useState('');

  // Close on Escape
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [onClose]);

  if (!item) return null;

  const sqFtNum = parseFloat(sqFt) || 0;
  const estimatedTotal = sqFtNum * item.pricePerSqFt;

  const handleWhatsAppSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const message = `Hello Sohan Construction Company,
I would like to get a quote for:
• Design: ${item.title} (${item.categoryLabel})
• Rate: ${item.priceBadge}
${name ? `• Name: ${name}` : ''}
${phone ? `• Phone: ${phone}` : ''}
${location ? `• Location: ${location}` : ''}
${sqFtNum > 0 ? `• Approx Area: ${sqFtNum} sq ft (Estimated: ₹${estimatedTotal.toLocaleString('en-IN')})` : ''}
${notes ? `• Requirement: ${notes}` : ''}

Please let me know when you can visit for site measurement.`;

    const url = `https://wa.me/919468252004?text=${encodeURIComponent(message)}`;
    window.open(url, '_blank', 'noopener,noreferrer');
    onClose();
  };

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="quote-modal-title"
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/85 backdrop-blur-md p-4 overflow-y-auto"
    >
      <div className="relative w-full max-w-lg rounded-2xl bg-[#141414] border border-[#F5C242]/40 shadow-2xl p-6 sm:p-7 text-neutral-200 animate-in fade-in zoom-in-95 duration-200 my-8">
        {/* Close Button */}
        <button
          onClick={onClose}
          aria-label="Close quote dialog"
          className="absolute top-4 right-4 p-2 rounded-lg bg-neutral-900 text-neutral-400 hover:text-white hover:border-[#F5C242] border border-neutral-800 transition-colors"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Header */}
        <div className="flex items-center gap-3 mb-4">
          <div className="w-14 h-14 rounded-xl overflow-hidden border border-[#F5C242]/40 bg-black shrink-0">
            <img src={item.image} alt={item.alt} className="w-full h-full object-cover" />
          </div>
          <div>
            <span className="text-[11px] font-semibold text-[#F5C242] uppercase tracking-wider">
              {item.categoryLabel}
            </span>
            <h3 id="quote-modal-title" className="font-display font-bold text-base sm:text-lg text-white leading-tight">
              {item.title}
            </h3>
            <span className="text-xs font-semibold text-[#F5C242]">
              Standard Rate: {item.priceBadge}
            </span>
          </div>
        </div>

        {/* Live Calculation Box if sq ft entered */}
        {sqFtNum > 0 && (
          <div className="mb-5 p-3.5 rounded-xl bg-neutral-900 border border-[#F5C242]/30 flex items-center justify-between">
            <div className="flex items-center gap-2">
              <Calculator className="w-4 h-4 text-[#F5C242]" />
              <span className="text-xs text-neutral-300">
                {sqFtNum} sq ft × ₹{item.pricePerSqFt}
              </span>
            </div>
            <div className="text-right">
              <span className="text-xs text-neutral-400 block">Estimated Cost</span>
              <span className="text-base font-bold text-[#F5C242]">
                ₹{estimatedTotal.toLocaleString('en-IN')}
              </span>
            </div>
          </div>
        )}

        <form onSubmit={handleWhatsAppSubmit} className="space-y-4 font-body">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
            <div>
              <label htmlFor="quote-name" className="block text-xs font-medium text-neutral-400 mb-1">
                Your Name
              </label>
              <input
                id="quote-name"
                type="text"
                placeholder="e.g. Ramesh Kumar"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="w-full px-3.5 py-2.5 rounded-lg bg-neutral-900 border border-neutral-700 text-white text-sm focus:border-[#F5C242] focus:outline-none transition-colors"
              />
            </div>
            <div>
              <label htmlFor="quote-phone" className="block text-xs font-medium text-neutral-400 mb-1">
                Phone Number
              </label>
              <input
                id="quote-phone"
                type="tel"
                placeholder="e.g. 9876543210"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                className="w-full px-3.5 py-2.5 rounded-lg bg-neutral-900 border border-neutral-700 text-white text-sm focus:border-[#F5C242] focus:outline-none transition-colors"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
            <div>
              <label htmlFor="quote-sqft" className="block text-xs font-medium text-neutral-400 mb-1">
                Approx Area (sq ft)
              </label>
              <input
                id="quote-sqft"
                type="number"
                placeholder="e.g. 80"
                value={sqFt}
                onChange={(e) => setSqFt(e.target.value)}
                className="w-full px-3.5 py-2.5 rounded-lg bg-neutral-900 border border-neutral-700 text-white text-sm focus:border-[#F5C242] focus:outline-none transition-colors"
              />
            </div>
            <div>
              <label htmlFor="quote-location" className="block text-xs font-medium text-neutral-400 mb-1">
                Location in Kurukshetra
              </label>
              <input
                id="quote-location"
                type="text"
                placeholder="e.g. Sector 7 / Thanesar"
                value={location}
                onChange={(e) => setLocation(e.target.value)}
                className="w-full px-3.5 py-2.5 rounded-lg bg-neutral-900 border border-neutral-700 text-white text-sm focus:border-[#F5C242] focus:outline-none transition-colors"
              />
            </div>
          </div>

          <div>
            <label htmlFor="quote-notes" className="block text-xs font-medium text-neutral-400 mb-1">
              Any Special Request / Requirements
            </label>
            <textarea
              id="quote-notes"
              rows={2}
              placeholder="e.g. need warm LED lighting, glass cabinet on right side..."
              value={notes}
              onChange={(e) => setNotes(e.target.value)}
              className="w-full px-3.5 py-2.5 rounded-lg bg-neutral-900 border border-neutral-700 text-white text-sm focus:border-[#F5C242] focus:outline-none transition-colors"
            />
          </div>

          <div className="pt-2 flex flex-col sm:flex-row gap-3">
            <button
              type="submit"
              className="flex-1 py-3 px-4 rounded-xl bg-[#25D366] text-white font-semibold text-sm flex items-center justify-center gap-2 hover:bg-[#20ba59] active:scale-98 transition-all shadow-md"
            >
              <MessageCircle className="w-4 h-4 fill-white" />
              <span>Send via WhatsApp</span>
            </button>

            <a
              href={COMPANY_INFO.phoneHref}
              className="py-3 px-4 rounded-xl gold-gradient-bg text-black font-semibold text-sm flex items-center justify-center gap-2 hover:brightness-110 active:scale-98 transition-all shadow-md"
            >
              <Phone className="w-4 h-4 fill-black" />
              <span>Call Now</span>
            </a>
          </div>

          <div className="flex items-center justify-center gap-3 text-[11px] text-neutral-400 pt-1">
            <span className="flex items-center gap-1">
              <Check className="w-3.5 h-3.5 text-[#F5C242]" /> Free Site Visit
            </span>
            <span>·</span>
            <span className="flex items-center gap-1">
              <Check className="w-3.5 h-3.5 text-[#F5C242]" /> No Obligation Quote
            </span>
          </div>
        </form>
      </div>
    </div>
  );
};
