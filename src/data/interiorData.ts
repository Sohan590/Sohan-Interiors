export interface ProductItem {
  id: string;
  title: string;
  category:
    | 'led-panels'
    | 'flooring'
    | 'ceiling'
    | 'construction'
    | 'tuffen-glass'
    | 'aluminium'
    | 'modular-kitchen'
    | 'uv-marble'
    | 'pvc-ceiling'
    | 'pop-ceiling'
    | 'acp-elevation'
    | 'cctv'
    | 'carpentry'
    | 'wallpaper'
    | 'window-blinds'
    | 'wall-moulding';
  categoryLabel: string;
  pricePerSqFt: number;
  priceBadge: string;
  image: string;
  alt: string;
  description: string;
  features: string[];
}

export const COMPANY_INFO = {
  name: "SOHAN CONSTRUCTION COMPANY",
  tagline: "ALL INTERIOR",
  fullTitle: "SOHAN CONSTRUCTION COMPANY – ALL INTERIOR",
  phone: "9468252004",
  phoneFormatted: "+91 94682 52004",
  phoneHref: "tel:+919468252004",
  email: "sohanlal946825@gmail.com",
  emailHref: "mailto:sohanlal946825@gmail.com",
  whatsappHref: "https://wa.me/919468252004?text=Hello%20Sohan%20Construction%20Company,%20I%20am%20interested%20in%20your%20interior%20services.",
  instagramHref: "https://www.instagram.com/sohan.const.co?dlrf=Z3c2M2twdHhhcnhk",
  facebookHref: "https://www.facebook.com/share/1EgWh7bkuZ/",
  youtubeHref: "https://youtube.com/@sohan.const-co?si=RvZWyVtHPXZ2ibXe",
  address: "Near Sunar Dharamshala, Lakshman Colony, Birla Mandir, Thanesar, Kurukshetra, Haryana",
  city: "Thanesar, Kurukshetra",
  state: "Haryana",
  logo: "/assets/aistudio/IMG-20261105-WA0003_e3496f0e.jpg",
};

export const LED_PANEL_ITEMS: ProductItem[] = [
  {
    id: "led-1",
    title: "Chiseled Stone & Built-in Fireplace TV Wall",
    category: "led-panels",
    categoryLabel: "LED Panel / TV Wall",
    pricePerSqFt: 700,
    priceBadge: "Rs. 700 / sq ft",
    image: "/assets/aistudio/IMG-20261105-WA0004_df26f3b0.jpg",
    alt: "Luxury textured stone wall with warm perimeter LED glow, marble panel, and integrated electric fireplace console",
    description: "Handcrafted rustic stone cave texture framed by 360° warm perimeter LED backlight and contemporary linear electric fire unit with floating storage console.",
    features: ["Natural stone texture", "Warm LED halo", "Electric fireplace console", "Floating storage"]
  },
  {
    id: "led-2",
    title: "Bookmatched Marble & Fluted Acoustic Slats",
    category: "led-panels",
    categoryLabel: "LED Panel / TV Wall",
    pricePerSqFt: 700,
    priceBadge: "Rs. 700 / sq ft",
    image: "/assets/aistudio/IMG-20261105-WA0009_a2f8d76e.jpg",
    alt: "High-gloss bookmatched Italian marble center panel flanked by fluted wood louvers and vertical LED channels",
    description: "Symmetrical fluted vertical wooden slats flanking high-gloss bookmatched Italian marble with concealed cove lighting and sleek floating entertainment deck.",
    features: ["Italian marble finish", "Vertical fluted slats", "Concealed cove lighting", "Concealed wiring"]
  },
  {
    id: "led-3",
    title: "Sculpted Marble Slab & Glass Display Curio",
    category: "led-panels",
    categoryLabel: "LED Panel / TV Wall",
    pricePerSqFt: 700,
    priceBadge: "Rs. 700 / sq ft",
    image: "/assets/aistudio/IMG-20261105-WA0005_df5e8917.jpg",
    alt: "Sculpted Italian marble feature wall with charcoal fluting, gold inlays, and illuminated glass curio cabinet",
    description: "Striking 3D sculpted marble effect with charcoal fluted accent, gold inlay strips, integrated LED backlight, and full-height illuminated glass curio display.",
    features: ["Charcoal accent slats", "Glass curio with spotlight", "Gold metal inlays", "Curved base unit"]
  },
  {
    id: "led-4",
    title: "Warm Backlit Slat Wall with Glass Showcase",
    category: "led-panels",
    categoryLabel: "LED Panel / TV Wall",
    pricePerSqFt: 700,
    priceBadge: "Rs. 700 / sq ft",
    image: "/assets/aistudio/IMG-20261105-WA0007_4d7de37f.jpg",
    alt: "Warm fluted wooden slat accent with ambient LED border, floating screen panel, and illuminated glass shelving",
    description: "Nordic fluted wood slats with warm edge illumination, floating matte screen backer, dual downlights, and black framed vertical display shelving.",
    features: ["Warm LED edge glow", "Black-frame display case", "Nordic oak fluting", "Dual top spotlights"]
  },
  {
    id: "led-5",
    title: "Rough Stone Cave Finish with Perimeter Halo",
    category: "led-panels",
    categoryLabel: "LED Panel / TV Wall",
    pricePerSqFt: 700,
    priceBadge: "Rs. 700 / sq ft",
    image: "/assets/aistudio/IMG-20261105-WA0006_5acc7a8b.jpg",
    alt: "Textured cave stone finish with warm gold perimeter LED lighting and 4-drawer floating media console",
    description: "Dramatic organic textured masonry backdrop paired with floating matte white TV panel, 3000K warm gold perimeter glow, and 4-compartment storage.",
    features: ["Organic textured masonry", "3000K warm gold glow", "Floating 4-drawer unit", "Dust-resistant seal"]
  },
  {
    id: "led-6",
    title: "Modern Minimalist White Panel with Oak Fluting",
    category: "led-panels",
    categoryLabel: "LED Panel / TV Wall",
    pricePerSqFt: 700,
    priceBadge: "Rs. 700 / sq ft",
    image: "/assets/aistudio/IMG-20261105-WA0010_67a7a469.jpg",
    alt: "Contemporary white floating TV panel with gold perimeter backlight, subtle wood fluting, and open side bookshelf",
    description: "Clean modern aesthetic featuring vertical fluting, full-perimeter hidden LED illumination, floating white cabinetry, and open side bookshelf.",
    features: ["Full perimeter backlight", "Open tower shelf", "Clean minimalist white", "Floating console"]
  },
  {
    id: "led-7",
    title: "Scandinavian Oak Fluting & Media Console",
    category: "led-panels",
    categoryLabel: "LED Panel / TV Wall",
    pricePerSqFt: 700,
    priceBadge: "Rs. 700 / sq ft",
    image: "/assets/aistudio/IMG-20261105-WA0012_9b7f6595.jpg",
    alt: "Scandinavian oak fluted wall slats with floating white TV panel and tall storage column",
    description: "Natural warm oak louver slats matched with pristine white floating media console, soundbar shelf, and open oak storage column.",
    features: ["Natural oak louvers", "Dedicated soundbar shelf", "Tall open storage column", "Durable matte laminate"]
  }
];

export const FLOORING_ITEMS: ProductItem[] = [
  {
    id: "floor-1",
    title: "European Golden Oak Hardwood Planks",
    category: "flooring",
    categoryLabel: "Wooden Flooring",
    pricePerSqFt: 150,
    priceBadge: "Rs. 150 / sq ft",
    image: "/assets/aistudio/IMG-20261105-WA0017_782df1ff.jpg",
    alt: "Warm golden oak wooden flooring installed in a luxury sunlit living room with modern furnishings",
    description: "Deep, rich golden oak planks with organic grain variation. Anti-scratch UV protective coating, water-resistant core, and silent underlayment for luxury homes.",
    features: ["Anti-scratch UV coat", "Rich golden oak grain", "Acoustic underlayment", "Moisture-resistant core"]
  },
  {
    id: "floor-2",
    title: "Rustic Natural Oak Wide Planks",
    category: "flooring",
    categoryLabel: "Wooden Flooring",
    pricePerSqFt: 150,
    priceBadge: "Rs. 150 / sq ft",
    image: "/assets/aistudio/IMG-20261105-WA0014_68774c68.jpg",
    alt: "Wide plank rustic natural oak wooden flooring in a modern duplex interior with spiral staircase",
    description: "Wide-format architectural planks featuring genuine oak knot texture. Adds architectural warmth and open space definition to living areas and duplexes.",
    features: ["Extra-wide plank format", "Authentic knot texture", "Heavy footfall rating", "Easy-lock seam"]
  },
  {
    id: "floor-3",
    title: "Nordic Honey Oak Bedroom Flooring",
    category: "flooring",
    categoryLabel: "Wooden Flooring",
    pricePerSqFt: 150,
    priceBadge: "Rs. 150 / sq ft",
    image: "/assets/aistudio/IMG-20261105-WA0019_89b859c5.jpg",
    alt: "Light honey oak wooden flooring in a bright modern bedroom with sheer drapery and natural light",
    description: "Bright Scandinavian-inspired light oak flooring that reflects natural sunlight, giving bedrooms and private living areas a calm, spacious ambiance.",
    features: ["Light-reflective finish", "Thermal insulation", "Hypoallergenic surface", "Precision bevel edges"]
  },
  {
    id: "floor-4",
    title: "Precision Interlock Textured Oak",
    category: "flooring",
    categoryLabel: "Wooden Flooring",
    pricePerSqFt: 150,
    priceBadge: "Rs. 150 / sq ft",
    image: "/assets/aistudio/IMG-20261105-WA0020_c115af7c.jpg",
    alt: "Close-up view of precision engineered interlocking natural oak planks showing authentic wood grain",
    description: "High-density fiberboard core with embossed-in-register surface replicating authentic hand-scraped oak. Uniclic lock system for seamless zero-gap installation.",
    features: ["Embossed-in-register grain", "Uniclic zero-gap lock", "Commercial AC4 durability", "Termite & borer proof"]
  }
];

export const CEILING_ITEMS: ProductItem[] = [
  {
    id: "ceiling-1",
    title: "Acoustic Grid Ceiling with Integrated LED Panels",
    category: "ceiling",
    categoryLabel: "Grid Ceiling",
    pricePerSqFt: 50,
    priceBadge: "Rs. 50 / sq ft",
    image: "/assets/aistudio/IMG-20261105-WA0016_1__cbecbd28.jpg",
    alt: "Commercial false grid ceiling with integrated high-lumen square LED panel lights",
    description: "High-performance moisture-resistant mineral fiber ceiling tiles with seamless recessed 2x2 LED daylight luminaires. Ideal for offices, showrooms, clinics, and modern residences.",
    features: ["Glare-free 2x2 LED panels", "Acoustic sound dampening", "Sag & moisture resistant", "Clean modular T-grid"]
  },
  {
    id: "ceiling-2",
    title: "Modern Architectural Perimeter Frame LED Grid Ceiling",
    category: "ceiling",
    categoryLabel: "Grid Ceiling",
    pricePerSqFt: 50,
    priceBadge: "Rs. 50 / sq ft",
    image: "/assets/aistudio/2x2_1PK_Side_b3b9496b.jpg",
    alt: "Architectural square perimeter light frame LED panels installed in modular acoustic grid ceiling",
    description: "Contemporary border-glow perimeter LED luminaire panels set into acoustic mineral ceiling tiles, creating an ultra-modern geometric lighting aesthetic for corporate spaces and cabins.",
    features: ["Perimeter frame lighting", "Modern minimalist lines", "High energy efficiency", "Acoustic grid integration"]
  },
  {
    id: "ceiling-3",
    title: "Commercial Daylight 2x2 Grid Ceiling Panels",
    category: "ceiling",
    categoryLabel: "Grid Ceiling",
    pricePerSqFt: 50,
    priceBadge: "Rs. 50 / sq ft",
    image: "/assets/aistudio/images_a1a833a8.jpeg",
    alt: "Crisp white commercial grid ceiling with flush square 2x2 LED daylight panels in modern pantry and office space",
    description: "Evenly spaced recessed 2x2 LED ceiling tiles providing uniform, high-CRI shadow-free illumination across commercial kitchens, clinics, workspaces, and conference rooms.",
    features: ["High-CRI daylight output", "Zero glare micro-prismatic lens", "Easy pop-out tile maintenance", "Anti-sag metal grid"]
  },
  {
    id: "ceiling-4",
    title: "Warm Ambient Diffuse LED Modular Grid Ceiling",
    category: "ceiling",
    categoryLabel: "Grid Ceiling",
    pricePerSqFt: 50,
    priceBadge: "Rs. 50 / sq ft",
    image: "/assets/aistudio/dalle-led-plafonnier-gd_e315df59.jpg",
    alt: "Warm ambient diffused 2x2 LED modular ceiling panels recessed in textured acoustic grid tiles",
    description: "Soft warm-white 2x2 LED diffuse panel luminaires paired with sound-absorbing textured acoustic tiles for executive chambers, meeting halls, and luxury residential living spaces.",
    features: ["Warm diffused 3500K glow", "Sound-dampening acoustic tiles", "Flicker-free electronic driver", "Concealed duct & cable access"]
  },
  {
    id: "ceiling-5",
    title: "Modular 2x2 Drop Ceiling & Diffuse Luminaires",
    category: "ceiling",
    categoryLabel: "Grid Ceiling",
    pricePerSqFt: 50,
    priceBadge: "Rs. 50 / sq ft",
    image: "/assets/aistudio/IMG-20261105-WA0018_3805ba24.jpg",
    alt: "Modern office and showroom modular grid false ceiling with energy-efficient diffuse LED lights",
    description: "Precision-aligned galvanized grid system with micro-perforated acoustic panels, providing uniform illumination, thermal insulation, and concealed HVAC/wiring access.",
    features: ["Easy wiring & pipe access", "Even light distribution", "Galvanized anti-rust grid", "Fire-retardant grade"]
  }
];

export const CONSTRUCTION_ITEMS: ProductItem[] = [
  {
    id: "const-1",
    title: "Contemporary Duplex Villa Structural Construction",
    category: "construction",
    categoryLabel: "Construction Work Material",
    pricePerSqFt: 1200,
    priceBadge: "Rs. 1200 / sq ft",
    image: "/assets/aistudio/IMG-20261106-WA0003_c2dc4f53.jpg",
    alt: "Contemporary duplex residential house under construction with external cement plastering and architectural balcony projection",
    description: "Complete turnkey structural construction including heavy RCC column footing, slab casting, brickwork, and precision cement plastering with high-grade Fe550 steel.",
    features: ["A-Grade branded cement & steel", "Laser-leveled RCC frame", "Damp-proof course (DPC)", "Turnkey material + labor"]
  },
  {
    id: "const-2",
    title: "Modern G+1 Residential Elevation & Masonry",
    category: "construction",
    categoryLabel: "Construction Work Material",
    pricePerSqFt: 1200,
    priceBadge: "Rs. 1200 / sq ft",
    image: "/assets/aistudio/IMG-20261106-WA0017_d960fe07.jpg",
    alt: "Modern double-story house structure with geometric facade elevation and front parking porch under construction",
    description: "Architectural residential building structure featuring cantilever balcony slabs, stone texture elevation grooves, and premium red clay brick construction.",
    features: ["Cantilever balcony engineering", "Earthquake-resistant design", "High-density brick masonry", "Precision exterior grooving"]
  },
  {
    id: "const-3",
    title: "Full Structural Frame & Column Casting (Duplex Villa)",
    category: "construction",
    categoryLabel: "Construction Work Material",
    pricePerSqFt: 1200,
    priceBadge: "Rs. 1200 / sq ft",
    image: "/assets/aistudio/IMG-20261106-WA0006_f7fbf994.jpg",
    alt: "Robust concrete column framing and multi-level slab structure of modern residential villa with shuttering materials",
    description: "Heavy-duty structural framework with reinforced column casting, multi-level slab shuttering, and durable foundation work ready for interior & exterior finishing.",
    features: ["M25 grade machine-mixed concrete", "Reinforced beam & slab matrix", "High-load bearing capacity", "On-site quality testing"]
  },
  {
    id: "const-4",
    title: "Exterior Plastering & Architectural Facade Framing",
    category: "construction",
    categoryLabel: "Construction Work Material",
    pricePerSqFt: 1200,
    priceBadge: "Rs. 1200 / sq ft",
    image: "/assets/aistudio/IMG-20261106-WA0004_2dec2204.jpg",
    alt: "Double story house with completed exterior cement plaster, window lintel bands, and integrated tree landscape",
    description: "Double-coat waterproof sand-faced cement plastering with neat window lintels, parapet wall details, and pre-wired internal plumbing and electrical conduits.",
    features: ["Waterproof cement plaster", "Concealed electrical conduit slots", "Weather-resistant curing", "Clean architectural margins"]
  },
  {
    id: "const-5",
    title: "Heavy RCC Beam & Concrete Slab Construction",
    category: "construction",
    categoryLabel: "Construction Work Material",
    pricePerSqFt: 1200,
    priceBadge: "Rs. 1200 / sq ft",
    image: "/assets/aistudio/IMG-20261106-WA0016_cf22469f.jpg",
    alt: "Two-story residential concrete frame structure with steel column bars and front gravel aggregate",
    description: "Engineered reinforced cement concrete structure engineered for long-term structural integrity, thermal resistance, and optimal floor-to-ceiling heights.",
    features: ["Optimal 11ft ceiling heights", "Vibrator-compacted concrete", "Anti-crack reinforcement mesh", "Strict safety compliance"]
  },
  {
    id: "const-6",
    title: "Brickwork Masonry, Scaffolding & Structural Framework",
    category: "construction",
    categoryLabel: "Construction Work Material",
    pricePerSqFt: 1200,
    priceBadge: "Rs. 1200 / sq ft",
    image: "/assets/aistudio/IMG-20261106-WA0007_8d1aff3a.jpg",
    alt: "Full brickwork masonry construction of residential building with steel staging and perimeter scaffolding",
    description: "Thorough 9-inch perimeter brick walls with rich 1:4 cement mortar, lintel casting above all openings, and steel pipe staging for accurate vertical plumb.",
    features: ["9-inch thermal brick walls", "Rich 1:4 cement mortar ratio", "Precision plumb & line check", "Pre-treated anti-termite base"]
  }
];

export const TUFFEN_GLASS_ITEMS: ProductItem[] = [
  {
    id: "glass-1",
    title: "Toughened Glass Conference Cabin with Pivot Door",
    category: "tuffen-glass",
    categoryLabel: "Tuffen Glass Work",
    pricePerSqFt: 180,
    priceBadge: "Rs. 180 / sq ft",
    image: "/assets/aistudio/IMG-20261106-WA0012_1__97da415d.jpg",
    alt: "Modern office meeting room enclosed by clear toughened glass partition with pivot glass door and aluminium floor track",
    description: "High-clarity 10mm/12mm tempered safety glass partition system with stainless steel hydraulic patch fittings, sound-reducing acoustic seals, and sleek pivot door.",
    features: ["12mm Toughened safety glass", "Heavy-duty patch fittings", "Acoustic edge weatherstrip", "Crystal clear transparency"]
  },
  {
    id: "glass-2",
    title: "Curved Architectural Frosted Glass Corridor Partition",
    category: "tuffen-glass",
    categoryLabel: "Tuffen Glass Work",
    pricePerSqFt: 180,
    priceBadge: "Rs. 180 / sq ft",
    image: "/assets/aistudio/IMG-20261106-WA0009_3fbd21ac.jpg",
    alt: "Curved corporate hallway with full-height toughened glass partition wall featuring horizontal privacy frost film",
    description: "Continuous curved glass facade with precision frosted privacy band, custom wooden edge jambs, and concealed ceiling track for luxury corporate floors.",
    features: ["Architectural curved radius", "Frosted privacy film", "Concealed top/bottom channel", "Sound-dampening barrier"]
  },
  {
    id: "glass-3",
    title: "Frameless 12mm Toughened Glass Meeting Room",
    category: "tuffen-glass",
    categoryLabel: "Tuffen Glass Work",
    pricePerSqFt: 180,
    priceBadge: "Rs. 180 / sq ft",
    image: "/assets/aistudio/IMG-20261106-WA0012_97da415d.jpg",
    alt: "Spacious meeting room enclosed with clear toughened glass walls, floor-spring glass door, and acoustic ceiling tiles",
    description: "Zero-profile frameless toughened glass walls with floor springs, locking handles, and silicone butt joints delivering unobstructed panoramic light flow.",
    features: ["Frameless silicone butt joints", "German floor spring mechanism", "Impact-resistant tempering", "Sleek tubular handles"]
  },
  {
    id: "glass-4",
    title: "Executive Glass Boardroom with Acoustic Glazing",
    category: "tuffen-glass",
    categoryLabel: "Tuffen Glass Work",
    pricePerSqFt: 180,
    priceBadge: "Rs. 180 / sq ft",
    image: "/assets/aistudio/IMG-20261106-WA0011_67269160.jpg",
    alt: "Corner executive glass conference room with black slimline frame, warm pendant lights, and conference furniture",
    description: "Slim black anodized profile framing holding toughened architectural glass, designed for executive cabins, private offices, and conference hubs.",
    features: ["Slimline black frame profile", "Scratch-resistant tempered face", "Full-height floor to ceiling", "Clean modern aesthetics"]
  },
  {
    id: "glass-5",
    title: "Full-Height Toughened Glass Office Enclosure",
    category: "tuffen-glass",
    categoryLabel: "Tuffen Glass Work",
    pricePerSqFt: 180,
    priceBadge: "Rs. 180 / sq ft",
    image: "/assets/aistudio/IMG-20261106-WA0010_8fd8f770.jpg",
    alt: "Commercial workspace partitioned with full-height toughened glass panels, grid ceiling, and timber flooring",
    description: "Modular structural glass panels giving open-plan offices dedicated acoustic privacy without sacrificing spatial openness and daylight illumination.",
    features: ["Maximizes natural ambient light", "Anti-shatter thermal tempering", "Custom door lock options", "Quick on-site installation"]
  },
  {
    id: "glass-6",
    title: "Designer Striped Frosted Glass Cabin Partition",
    category: "tuffen-glass",
    categoryLabel: "Tuffen Glass Work",
    pricePerSqFt: 180,
    priceBadge: "Rs. 180 / sq ft",
    image: "/assets/aistudio/IMG-20261106-WA0008_c783ee99.jpg",
    alt: "Corner office glass partition with modern decorative frosted privacy bands and glass sliding entry door",
    description: "Multi-stripe frosted privacy pattern on toughened safety glass with aluminum floor channels and matching glass sliding or swing entry system.",
    features: ["Designer frost pattern", "Custom privacy height", "High load-bearing tracks", "Fingerprint-resistant film"]
  }
];

export const ALUMINIUM_ITEMS: ProductItem[] = [
  {
    id: "alum-1",
    title: "Modular Powder-Coated Aluminium Cabin Enclosure",
    category: "aluminium",
    categoryLabel: "Aluminium Work",
    pricePerSqFt: 270,
    priceBadge: "Rs. 270 / sq ft",
    image: "/assets/aistudio/IMG-20261106-WA0015_9004fcb5.jpg",
    alt: "Modular powder-coated off-white aluminium cabin enclosure with top panels, glass mid-section, and hinged door",
    description: "Heavy-gauge extruded aluminium section partition cabin with powder-coated ivory finish, upper and lower composite board infill, and middle glass view panels.",
    features: ["Heavy extruded aluminium gauge", "Scratch-proof powder coating", "Hinged aluminium door with lock", "Demountable modular frame"]
  },
  {
    id: "alum-2",
    title: "Industrial Aluminium Partition Room with Glass Windows",
    category: "aluminium",
    categoryLabel: "Aluminium Work",
    pricePerSqFt: 270,
    priceBadge: "Rs. 270 / sq ft",
    image: "/assets/aistudio/IMG-20261106-WA0013_cd670fab.jpg",
    alt: "Free-standing aluminium partition room inside an industrial warehouse with glass mid-section and solid panels",
    description: "Free-standing modular office cubicle built inside industrial sheds, factories, or workshops with rigid aluminium frame and pre-laminated infill sheets.",
    features: ["Ideal for factories & warehouses", "Dust-sealed rubber beadings", "Pre-laminated infill boards", "Cost-effective cabin solution"]
  },
  {
    id: "alum-3",
    title: "Demountable Aluminium Modular Office Cubicle",
    category: "aluminium",
    categoryLabel: "Aluminium Work",
    pricePerSqFt: 270,
    priceBadge: "Rs. 270 / sq ft",
    image: "/assets/aistudio/IMG-20261106-WA0015_1__9004fcb5.jpg",
    alt: "Perspective angle of clean aluminium partition cabin structure with door frame and clear glass vision panels",
    description: "Quick-assembly modular aluminium framing system suitable for supervisor cabins, testing labs, billing counters, and secure office enclosures.",
    features: ["Rapid 48-hour installation", "Rust & corrosion resistant", "Built-in wiring channel option", "Easily relocatable"]
  },
  {
    id: "alum-4",
    title: "Heavy-Gauge Aluminium Frame Office Partition with Solid Base",
    category: "aluminium",
    categoryLabel: "Aluminium Work",
    pricePerSqFt: 270,
    priceBadge: "Rs. 270 / sq ft",
    image: "/assets/aistudio/IMG-20261106-WA0014_220608e6.jpg",
    alt: "Two-tone aluminium partition with silver metallic framing, solid opaque lower skirt, and clear glass upper panes",
    description: "Silver anodized heavy aluminium framing paired with acoustic composite board lower base and float glass upper sections for executive workspace division.",
    features: ["Silver anodized aluminium", "Solid composite lower impact base", "Acoustic vision panels", "High structural rigidity"]
  }
];

export const MODULAR_KITCHEN_ITEMS: ProductItem[] = [
  {
    id: "kitchen-1",
    title: "Cashmere Acrylic Modular Kitchen with Fluted Wood Feature Wall",
    category: "modular-kitchen",
    categoryLabel: "Modular Kitchen",
    pricePerSqFt: 1200,
    priceBadge: "Rs. 1200 / sq ft",
    image: "/assets/aistudio/IMG-20261106-WA0023_906d09b9.jpg",
    alt: "Modern cashmere gloss modular kitchen with vertical wood fluted wall, yellow illuminated glass display boxes, and black roller shutter",
    description: "Ultra-luxury modular kitchen layout featuring cashmere acrylic shutters, warm backlit glass display cubes, black roller shutter appliance garage, and fluted louver back wall.",
    features: ["Cashmere gloss acrylic", "Warm illuminated glass display", "Roller shutter appliance garage", "Fluted louver backdrop"]
  },
  {
    id: "kitchen-2",
    title: "Luxury Charcoal Gloss L-Shaped Kitchen with Amber LED Display",
    category: "modular-kitchen",
    categoryLabel: "Modular Kitchen",
    pricePerSqFt: 1200,
    priceBadge: "Rs. 1200 / sq ft",
    image: "/assets/aistudio/IMG-20261106-WA0027_e361b4cf.jpg",
    alt: "Spacious L-shaped modular kitchen with charcoal grey glossy cabinets, amber illuminated open wall shelves, and fluted island counter",
    description: "Sleek dark charcoal acrylic lower cabinets matched with illuminated golden amber upper shelves, marble wall tiling, and fluted breakfast island with ambient cove lighting.",
    features: ["Deep charcoal high-gloss", "Amber LED overhead display", "Fluted breakfast bar", "Soft-close tandem drawers"]
  },
  {
    id: "kitchen-3",
    title: "Designer Charcoal Tall Pantry Unit with Backlit Glass Curio",
    category: "modular-kitchen",
    categoryLabel: "Modular Kitchen",
    pricePerSqFt: 1200,
    priceBadge: "Rs. 1200 / sq ft",
    image: "/assets/aistudio/IMG-20261106-WA0022_6861eab7.jpg",
    alt: "Full-height charcoal tall modular kitchen pantry cabinet with warm interior lit glass curio and amber pendant lights",
    description: "Full-height pantry tower combining refrigerator housing, microwave niche, and bronze tinted glass curio cabinet with warm internal vertical LED strip lighting.",
    features: ["Full-height pantry tower", "Warm interior backlit curio", "Refrigerator housing bay", "Premium Blum/Hettich hardware"]
  },
  {
    id: "kitchen-4",
    title: "High-Gloss Charcoal & White Kitchen with Rose Gold Profiles",
    category: "modular-kitchen",
    categoryLabel: "Modular Kitchen",
    pricePerSqFt: 1200,
    priceBadge: "Rs. 1200 / sq ft",
    image: "/assets/aistudio/IMG-20261106-WA0020_509bf0bf.jpg",
    alt: "Dual-tone modular kitchen with dark grey lower cabinets, rose gold Gola profile handles, white upper cabinets, and chimney opening",
    description: "Contemporary two-tone modular setup featuring high-gloss dark grey base units with rose gold Gola profile handles, polished black granite/quartz top, and frosted glass upper units.",
    features: ["Rose gold Gola profile handles", "Two-tone acrylic finish", "Granite/Quartz platform", "Chimney duct integration"]
  },
  {
    id: "kitchen-5",
    title: "High-Gloss Tall Appliance Column & Illuminated Gold Glass Display",
    category: "modular-kitchen",
    categoryLabel: "Modular Kitchen",
    pricePerSqFt: 1200,
    priceBadge: "Rs. 1200 / sq ft",
    image: "/assets/aistudio/IMG-20261106-WA0024_56cb5058.jpg",
    alt: "Tall modular kitchen appliance cabinet with built-in microwave, wicker basket storage, and full-height glowing glass showcase",
    description: "Custom pantry and appliance unit with integrated microwave oven niche, pull-out vegetable wicker baskets, and full-height bronze glass display with golden glow lighting.",
    features: ["Built-in microwave niche", "Wicker basket pull-outs", "Gold ambient glow glass curio", "Scratch-resistant acrylic"]
  },
  {
    id: "kitchen-6",
    title: "Modern L-Shaped Kitchen with Bronze Glass Overhead Cabinets",
    category: "modular-kitchen",
    categoryLabel: "Modular Kitchen",
    pricePerSqFt: 1200,
    priceBadge: "Rs. 1200 / sq ft",
    image: "/assets/aistudio/IMG-20261106-WA0021_d5f10324.jpg",
    alt: "Warm taupe L-shaped modular kitchen with bronze aluminum glass overhead cabinets and under-cabinet task lighting",
    description: "Warm taupe matte finish L-shaped modular kitchen with slim aluminum profile bronze glass overhead cabinets, concealed task lighting, and white quartz worktop.",
    features: ["Bronze aluminum glass profile", "Seamless quartz countertop", "Under-cabinet task lights", "Corner carousel ready"]
  },
  {
    id: "kitchen-7",
    title: "Ergonomic Cashmere Kitchen with Appliance Garage & Corner Niche",
    category: "modular-kitchen",
    categoryLabel: "Modular Kitchen",
    pricePerSqFt: 1200,
    priceBadge: "Rs. 1200 / sq ft",
    image: "/assets/aistudio/IMG-20261106-WA0026_49d9d1a6.jpg",
    alt: "L-shaped cashmere gloss modular kitchen with window view, sink, under-cabinet lighting, and illuminated open shelf",
    description: "Ergonomic kitchen work triangle with dual stainless sink below the window, high-gloss cashmere drawer fronts, black roller shutter unit, and warm illuminated spice niche.",
    features: ["Optimized work triangle", "Under-cabinet LED strip", "Dedicated appliance garage", "Moisture-proof HDHMR carcass"]
  },
  {
    id: "kitchen-8",
    title: "Gloss Anthracite U-Shaped Kitchen with Dual Sinks & Deep Drawers",
    category: "modular-kitchen",
    categoryLabel: "Modular Kitchen",
    pricePerSqFt: 1200,
    priceBadge: "Rs. 1200 / sq ft",
    image: "/assets/aistudio/IMG-20261106-WA0028_ed0d1223.jpg",
    alt: "Spacious U-shaped anthracite grey modular kitchen with extensive overhead and base cabinetry, double sink, and sleek bar handles",
    description: "High-capacity U-shaped modular kitchen in gloss anthracite grey with stainless steel bar handles, dual-bowl sink, chimney station, and expansive storage.",
    features: ["Expansive U-shaped layout", "High-capacity storage volume", "Dual stainless sink station", "Heavy-gauge drawer runners"]
  }
];

export const UV_MARBLE_ITEMS: ProductItem[] = [
  {
    id: "uv-1",
    title: "Calacatta Arabescato White & Grey Marble UV Sheet",
    category: "uv-marble",
    categoryLabel: "UV Marble Sheets",
    pricePerSqFt: 100,
    priceBadge: "Rs. 100 / sq ft",
    image: "/assets/aistudio/IMG-20261106-WA0037_6dcfe201.jpg",
    alt: "High-gloss Calacatta Arabescato white marble UV sheet with natural grey veining for wall paneling",
    description: "Luxury Italian Calacatta marble replica with ultra-gloss UV protective coating, seamless joint installation, 100% waterproof core, and scratch resistance.",
    features: ["Ultra-gloss UV cured coat", "100% Waterproof & termite proof", "Seamless V-groove joints", "Fire-retardant class A"]
  },
  {
    id: "uv-2",
    title: "Royal Gold Vein Statuario UV Marble Sheet",
    category: "uv-marble",
    categoryLabel: "UV Marble Sheets",
    pricePerSqFt: 100,
    priceBadge: "Rs. 100 / sq ft",
    image: "/assets/aistudio/IMG-20261106-WA0036_12a8354e.jpg",
    alt: "Statuario white UV marble sheet with delicate golden bronze veining on pristine white background",
    description: "Stately white marble pattern infused with radiant gold veins, delivering an opulent Italian stone look for living room feature walls, TV backs, and lobbies.",
    features: ["Radiant gold vein finish", "High-density PVC composite", "Easy wipe-clean gloss surface", "Lightweight wall cladding"]
  },
  {
    id: "uv-3",
    title: "Spider Crack Geometric Veined UV Marble Sheet",
    category: "uv-marble",
    categoryLabel: "UV Marble Sheets",
    pricePerSqFt: 100,
    priceBadge: "Rs. 100 / sq ft",
    image: "/assets/aistudio/IMG-20261106-WA0035_f99d79c3.jpg",
    alt: "Artistic spider crack marble pattern UV sheet with charcoal web veining",
    description: "Contemporary webbed veining evoking exotic natural breccia marble. Ideal for accent walls, pillar wraps, and luxury master bedroom backdrops.",
    features: ["Exotic breccia stone pattern", "Resistant to moisture & mould", "Zero-maintenance polish", "Concealed fastener fit"]
  },
  {
    id: "uv-4",
    title: "Liquid Gold & Smoke Grey Fluid Onyx UV Marble Sheet",
    category: "uv-marble",
    categoryLabel: "UV Marble Sheets",
    pricePerSqFt: 100,
    priceBadge: "Rs. 100 / sq ft",
    image: "/assets/aistudio/IMG-20261106-WA0032_7d7c84e4.jpg",
    alt: "Fluid wave pattern UV marble sheet blending swirling smoke grey, charcoal, and flowing gold highlights",
    description: "Dynamic fluid stone wave featuring rivers of metallic gold and misty grey. Creates a high-impact luxury art statement in dining halls and entry foyers.",
    features: ["Fluid agate marble motion", "Metallic gold leaf sheen", "UV protective hard-coat", "Impact-resistant core"]
  },
  {
    id: "uv-5",
    title: "Luxury Gold Bordered Smoke Marble Wall Sheet",
    category: "uv-marble",
    categoryLabel: "UV Marble Sheets",
    pricePerSqFt: 100,
    priceBadge: "Rs. 100 / sq ft",
    image: "/assets/aistudio/IMG-20261106-WA0032_1__7d7c84e4.jpg",
    alt: "Sleek framed sample of liquid gold and charcoal marble UV sheet with gilded border profile",
    description: "Hand-picked high-clarity marble composite panel display with gold T-profile edge trims for architectural wall panels and boutique installations.",
    features: ["T-profile edge ready", "Rich mirror gloss finish", "Damp-proof wall barrier", "Fast 1-day installation"]
  },
  {
    id: "uv-6",
    title: "Portoro Black & Golden Grid Marble UV Sheet",
    category: "uv-marble",
    categoryLabel: "UV Marble Sheets",
    pricePerSqFt: 100,
    priceBadge: "Rs. 100 / sq ft",
    image: "/assets/aistudio/IMG-20261106-WA0039_f145f90f.jpg",
    alt: "Striking black marble UV sheet with intricate gold grid lines and geometric fissures",
    description: "Deep obsidian black backdrop highlighted by razor-sharp golden geometric fractures. The ultimate luxury backdrop for TV units, bars, and reception desks.",
    features: ["Deep obsidian black depth", "High-contrast golden fissures", "Stain and chemical proof", "No recurring waxing needed"]
  },
  {
    id: "uv-7",
    title: "Champagne Travertine & Gold Shimmer UV Sheet",
    category: "uv-marble",
    categoryLabel: "UV Marble Sheets",
    pricePerSqFt: 100,
    priceBadge: "Rs. 100 / sq ft",
    image: "/assets/aistudio/IMG-20261106-WA0041_e1dda4c7.jpg",
    alt: "Warm beige and champagne travertine marble UV sheet with golden striations",
    description: "Warm earth-toned travertine aesthetic with organic horizontal stone strata and champagne gold shimmer that matches warm LED backlights effortlessly.",
    features: ["Warm travertine strata", "Matches 3000K warm LED", "Non-fading color stability", "Eco-friendly PVC base"]
  },
  {
    id: "uv-8",
    title: "3D Sculpted Botanical Leaf Relief UV Wall Panel",
    category: "uv-marble",
    categoryLabel: "UV Marble Sheets",
    pricePerSqFt: 100,
    priceBadge: "Rs. 100 / sq ft",
    image: "/assets/aistudio/IMG-20261106-WA0029_8ff0db0e.jpg",
    alt: "Sculpted 3D botanical peace lily leaf relief decorative wall panel in warm taupe finish",
    description: "Master-crafted 3D raised botanical leaf relief panel adding sculptural architectural depth and organic elegance to drawing rooms and entry vestibules.",
    features: ["Sculptural 3D embossed relief", "Textured matte-satin finish", "Seamless panel alignment", "Sound-softening profile"]
  },
  {
    id: "uv-9",
    title: "3D Embossed White Feather Art Wall Feature Sheet",
    category: "uv-marble",
    categoryLabel: "UV Marble Sheets",
    pricePerSqFt: 100,
    priceBadge: "Rs. 100 / sq ft",
    image: "/assets/aistudio/IMG-20261106-WA0040_7fdc9712.jpg",
    alt: "3D embossed feather motif decorative panel with smooth sculpted contours",
    description: "Sensuous 3D relief feather motif wall panel designed for master bedroom headboard walls, vanity areas, and modern luxury corridors.",
    features: ["Flowing feather contouring", "Warm light shadow play", "Anti-dust washable surface", "Crack-free durability"]
  },
  {
    id: "uv-10",
    title: "3D Royal Pearl & Gold Floral Relief Panel Sheet",
    category: "uv-marble",
    categoryLabel: "UV Marble Sheets",
    pricePerSqFt: 100,
    priceBadge: "Rs. 100 / sq ft",
    image: "/assets/aistudio/IMG-20261106-WA0030_22e89b12.jpg",
    alt: "3D floral relief decorative wall panel with raised petals and pearl-gold finish",
    description: "Majestic raised floral sculpture sheet with pearl luster and delicate gilded petal accents, creating a grand traditional-modern fusion focal wall.",
    features: ["Intricate petal bas-relief", "Pearl & gold dual luster", "Rigid heavy-duty backing", "Zero termite vulnerability"]
  },
  {
    id: "uv-11",
    title: "High-Gloss Floral Pearl Motif 3D UV Wall Sheet",
    category: "uv-marble",
    categoryLabel: "UV Marble Sheets",
    pricePerSqFt: 100,
    priceBadge: "Rs. 100 / sq ft",
    image: "/assets/aistudio/IMG-20261106-WA0030_1__22e89b12.jpg",
    alt: "Alternative perspective of 3D pearl floral relief wall sheet showing sculpted petal depth",
    description: "High-relief artistic wall sheet engineered for luxury feature walls, niche inlays, temple backdrops, and living room focal points.",
    features: ["High-relief surface depth", "Reflective pearlescent coat", "Moisture-sealed back", "Long-life color retention"]
  }
];

export const PVC_CEILING_ITEMS: ProductItem[] = [
  {
    id: "pvc-1",
    title: "Concentric Teak Wood & White PVC False Ceiling with Warm LED Tray",
    category: "pvc-ceiling",
    categoryLabel: "PVC Ceiling Work",
    pricePerSqFt: 90,
    priceBadge: "Rs. 90 / sq ft",
    image: "/assets/aistudio/IMG-20261106-WA0043_42fb6ec2.jpg",
    alt: "Concentric multi-layer false ceiling with teak wood grain PVC border, pristine white center, and warm LED cove lighting",
    description: "Multi-tier layered PVC ceiling combining warm teak wood grain perimeter louvers, recessed white ceiling tray, warm golden cove lighting, and downlights.",
    features: ["Teak wood texture panels", "Indirect warm LED cove tray", "Termite & water immune", "Fast dust-free assembly"]
  },
  {
    id: "pvc-2",
    title: "Curved Contour PVC Ceiling with Ambient Cove Glow & Fluted Feature Wall",
    category: "pvc-ceiling",
    categoryLabel: "PVC Ceiling Work",
    pricePerSqFt: 90,
    priceBadge: "Rs. 90 / sq ft",
    image: "/assets/aistudio/IMG-20261106-WA0044_79908264.jpg",
    alt: "Curved architectural false ceiling with warm hidden LED strips and integrated fluted wood wall panelling",
    description: "Flowing curved cove false ceiling engineered with seamless PVC sheets, hidden amber LED strip lights, and seamless transition to vertical fluted wall slats.",
    features: ["Curved continuous contours", "Warm 3000K ambient glow", "Ceiling-to-wall integrated flow", "Lightweight structural load"]
  },
  {
    id: "pvc-3",
    title: "Geometric PVC Ceiling with Decorative CNC Jali Medallion & Spotlights",
    category: "pvc-ceiling",
    categoryLabel: "PVC Ceiling Work",
    pricePerSqFt: 90,
    priceBadge: "Rs. 90 / sq ft",
    image: "/assets/aistudio/IMG-20261106-WA0049_79040ee9.jpg",
    alt: "Multi-level PVC false ceiling with central geometric CNC cut-out medallion, wooden frame borders, and LED spotlights",
    description: "Custom decorative ceiling design featuring intricate CNC carved center medallion, wooden perimeter casing, and perimeter recessed COB spot lights.",
    features: ["CNC carved medallion center", "Concealed cove lighting", "Pre-finished zero paint needed", "100% Rust-proof framing"]
  },
  {
    id: "pvc-4",
    title: "Dual-Tone Wooden PVC Ceiling with Wall Niches & Intricate Jali Inlays",
    category: "pvc-ceiling",
    categoryLabel: "PVC Ceiling Work",
    pricePerSqFt: 90,
    priceBadge: "Rs. 90 / sq ft",
    image: "/assets/aistudio/IMG-20261106-WA0047_1bc55174.jpg",
    alt: "Dual-tone PVC false ceiling with wooden panel border, white center, backlighting, and decorative CNC wall brackets",
    description: "Harmonious ceiling-and-wall combination utilizing walnut wood PVC border sections, illuminated drop center tray, and decorative CNC accent inlays.",
    features: ["Dual-tone walnut & ivory", "Illuminated center drop", "Integrated wall niche matching", "Anti-sag locking tongue"]
  },
  {
    id: "pvc-5",
    title: "Concentric Circular Fluted PVC Ceiling Panel with 4-Corner Downlights",
    category: "pvc-ceiling",
    categoryLabel: "PVC Ceiling Work",
    pricePerSqFt: 90,
    priceBadge: "Rs. 90 / sq ft",
    image: "/assets/aistudio/IMG-20261106-WA0051_fb2af370.jpg",
    alt: "Circular concentric fluted PVC ceiling medallion with warm rim lighting and four corner LED downlights",
    description: "Statement circular ceiling dome crafted from concentric fluted wood-finish PVC with warm circular perimeter glow, fan mount provision, and corner spotlights.",
    features: ["Circular concentric medallion", "Perimeter LED rim glow", "Dedicated ceiling fan anchor", "Washable PVC surface"]
  },
  {
    id: "pvc-6",
    title: "Multi-Layer Geometric PVC Ceiling with Dual Blue & Gold LED Illumination",
    category: "pvc-ceiling",
    categoryLabel: "PVC Ceiling Work",
    pricePerSqFt: 90,
    priceBadge: "Rs. 90 / sq ft",
    image: "/assets/aistudio/IMG-20261106-WA0046_4e02f4b0.jpg",
    alt: "Geometric PVC false ceiling with dual color LED backlighting, wood trim lines, and central fan fixture",
    description: "Modern multi-layer geometric step ceiling with dual-color LED backlight channels, contrasting wood grain borders, and recessed spotlight grid.",
    features: ["Dual-channel LED effects", "Crisp stepped geometry", "Zero cracking or peeling", "High thermal insulation"]
  },
  {
    id: "pvc-7",
    title: "Traditional Fluted Wood & White PVC False Ceiling with Floral Accent Tiles",
    category: "pvc-ceiling",
    categoryLabel: "PVC Ceiling Work",
    pricePerSqFt: 90,
    priceBadge: "Rs. 90 / sq ft",
    image: "/assets/aistudio/IMG-20261106-WA0042_1175b3e3.jpg",
    alt: "Traditional warm wood PVC false ceiling with decorative corner inlays and warm lighting",
    description: "Rich traditional aesthetic combining warm timber louver planks with embossed decorative tiles, ideal for master bedrooms and puja rooms.",
    features: ["Traditional timber tone", "Embossed accent motifs", "Easy wipe-clean maintenance", "Long-lasting color brilliance"]
  }
];

export const POP_CEILING_ITEMS: ProductItem[] = [
  {
    id: "pop-1",
    title: "Modern Architectural 'H' Pattern POP False Ceiling with Linear Profiles",
    category: "pop-ceiling",
    categoryLabel: "Pop & Gypsum Ceiling Work",
    pricePerSqFt: 60,
    priceBadge: "Rs. 60 / sq ft",
    image: "/assets/aistudio/IMG-20261106-WA0055_1fa67d1a.jpg",
    alt: "Modern architectural H-shape POP false ceiling with warm cove backlighting, magnetic linear lights, and recessed spotlights",
    description: "Sleek geometric 'H' motif POP ceiling with smooth gypsum finish, warm cove perimeter glow, black track lighting channels, and distributed LED downlights.",
    features: ["Smooth gypsum board finish", "Architectural 'H' geometry", "Concealed warm cove glow", "Magnetic track light ready"]
  },
  {
    id: "pop-2",
    title: "Diamond Geometric Gypsum False Ceiling with Integrated LED Strip Lines",
    category: "pop-ceiling",
    categoryLabel: "Pop & Gypsum Ceiling Work",
    pricePerSqFt: 60,
    priceBadge: "Rs. 60 / sq ft",
    image: "/assets/aistudio/IMG-20261106-WA0052_80ae9c85.jpg",
    alt: "Diamond angle false ceiling with illuminated perimeter, central fan, and intersecting geometric LED profile lines",
    description: "Striking 45-degree diamond gypsum tray ceiling featuring continuous perimeter edge lighting, chevron linear profile lines, and heavy-duty ceiling fan mounting.",
    features: ["Diamond 45-degree tray", "Chevron LED line channels", "Heavy ceiling fan anchor", "Seamless joint-compound coat"]
  },
  {
    id: "pop-3",
    title: "Minimalist Stepped Cove POP False Ceiling with Peripheral Spotlights",
    category: "pop-ceiling",
    categoryLabel: "Pop & Gypsum Ceiling Work",
    pricePerSqFt: 60,
    priceBadge: "Rs. 60 / sq ft",
    image: "/assets/aistudio/IMG-20261106-WA0059_4ab3d4ad.jpg",
    alt: "Stepped cove POP false ceiling with rectangular cutouts, concealed perimeter glow, and fan installation",
    description: "Clean minimalist stepped cove design engineered for optimal room height perception, glare-free indirect lighting, and architectural symmetry.",
    features: ["Maximizes ceiling height", "Indirect glare-free cove", "Even spotlight distribution", "Crack-resistant gypsum"]
  },
  {
    id: "pop-4",
    title: "Diagonal Angle Accent POP Ceiling with Continuous Ambient Glow",
    category: "pop-ceiling",
    categoryLabel: "Pop & Gypsum Ceiling Work",
    pricePerSqFt: 60,
    priceBadge: "Rs. 60 / sq ft",
    image: "/assets/aistudio/IMG-20261106-WA0056_0a479aac.jpg",
    alt: "Modern angled POP false ceiling with dual recessed light boxes and diagonal ambient glow lines",
    description: "Asymmetrical diagonal design bringing contemporary dynamism to living rooms, highlighted by continuous concealed LED cove troughs.",
    features: ["Asymmetrical diagonal cut", "Continuous cove lighting", "Pre-engineered GI framing", "Ultra-smooth paintable surface"]
  },
  {
    id: "pop-5",
    title: "Multi-Tier Drawing Room POP & Fluted Wood Tray Ceiling with Chandeliers",
    category: "pop-ceiling",
    categoryLabel: "Pop & Gypsum Ceiling Work",
    pricePerSqFt: 60,
    priceBadge: "Rs. 60 / sq ft",
    image: "/assets/aistudio/IMG-20261106-WA0061_38928a2d.jpg",
    alt: "Grand luxury drawing room false ceiling with POP borders, central wood fluted panel, chandeliers, and multiple fan points",
    description: "Grand drawing hall false ceiling combining pristine white gypsum stepped borders, natural wooden fluted center inlay, dual chandeliers, and warm perimeter coves.",
    features: ["Dual chandelier load hooks", "Fluted wood center inlay", "Multi-tier stepped borders", "Triple-switched circuit ready"]
  },
  {
    id: "pop-6",
    title: "Symmetrical POP Ceiling with Natural Wood Louvers & Indirect Lighting",
    category: "pop-ceiling",
    categoryLabel: "Pop & Gypsum Ceiling Work",
    pricePerSqFt: 60,
    priceBadge: "Rs. 60 / sq ft",
    image: "/assets/aistudio/IMG-20261106-WA0057_39256aa2.jpg",
    alt: "Balanced gypsum false ceiling with natural wooden rafter louvers, warm cove lights, and center fan",
    description: "Perfect balance of organic wooden ceiling louvers and crisp white gypsum bulkheads, delivering warmth and acoustic comfort to dining spaces.",
    features: ["Natural timber rafters", "Acoustic gypsum balance", "Concealed LED light channels", "Anti-sag GI perimeter channels"]
  },
  {
    id: "pop-7",
    title: "Soft Rounded Corner Gypsum Ceiling with Dual Recessed Light Slots",
    category: "pop-ceiling",
    categoryLabel: "Pop & Gypsum Ceiling Work",
    pricePerSqFt: 60,
    priceBadge: "Rs. 60 / sq ft",
    image: "/assets/aistudio/IMG-20261106-WA0054_11a6ad01.jpg",
    alt: "Curved corner false ceiling with parallel recessed LED light slots and downlights",
    description: "Soft curved radius corners with clean linear profile lighting slots, lending a serene modern aesthetic to master bedrooms and luxury lounges.",
    features: ["Soft curved radius edges", "Linear magnetic light slots", "Zero shadow light spread", "Precision laser-aligned frame"]
  },
  {
    id: "pop-8",
    title: "Ultra-Modern Intersecting Linear Profile POP Ceiling",
    category: "pop-ceiling",
    categoryLabel: "Pop & Gypsum Ceiling Work",
    pricePerSqFt: 60,
    priceBadge: "Rs. 60 / sq ft",
    image: "/assets/aistudio/IMG-20261106-WA0053_8e2b8278.jpg",
    alt: "Contemporary false ceiling with intersecting geometric cove lines, linear diffusers, and spotlights",
    description: "High-spec architectural ceiling with intersecting cove trays, flush ceiling diffusers, and recessed spotlights for premium modern homes.",
    features: ["Intersecting geometric coves", "Flush diffuser integration", "High structural rigidity", "Smooth flawless paint finish"]
  }
];

export const ACP_ELEVATION_ITEMS: ProductItem[] = [
  {
    id: "acp-1",
    title: "Ultra-Luxury Villa Elevation with Wood-Finish ACP Soffits & Glass Railings",
    category: "acp-elevation",
    categoryLabel: "ACP Front Elevation",
    pricePerSqFt: 180,
    priceBadge: "Rs. 180 / sq ft",
    image: "/assets/aistudio/IMG-20261106-WA0064_ed8aa817.jpg",
    alt: "Contemporary luxury bungalow exterior elevation with natural teak wood grain ACP panels, glass balcony railings, and exterior spotlights",
    description: "State-of-the-art residential facade combining exterior-grade PVDF wood-finish ACP paneling on soffits and columns with frameless glass balconies.",
    features: ["Exterior PVDF coating", "Teak wood grain realism", "100% Weather & UV immune", "Concealed rivet framing"]
  },
  {
    id: "acp-2",
    title: "Modern Duplex Facade Cladding with Dark Wood-Grain ACP Panels & Coping",
    category: "acp-elevation",
    categoryLabel: "ACP Front Elevation",
    pricePerSqFt: 180,
    priceBadge: "Rs. 180 / sq ft",
    image: "/assets/aistudio/IMG-20261106-WA0067_f8ea27b3.jpg",
    alt: "Modern double-story facade featuring dark walnut ACP wood panel cladding on balcony fascia and exterior canopy",
    description: "Dark walnut wood-grain ACP cladding on projecting architectural canopies and balcony fascias, giving residential elevations high-end curb appeal.",
    features: ["Dark walnut exterior finish", "Fire-retardant mineral core", "Wind-load resistant framing", "Zero repainting required"]
  },
  {
    id: "acp-3",
    title: "Projecting Box Balcony Elevation with Teak Wood ACP & Vertical Louvers",
    category: "acp-elevation",
    categoryLabel: "ACP Front Elevation",
    pricePerSqFt: 180,
    priceBadge: "Rs. 180 / sq ft",
    image: "/assets/aistudio/IMG-20261106-WA0062_ed907c5d.jpg",
    alt: "Architectural cantilever box balcony clad with teak wood-grain ACP sheets, vertical fins, and exterior warm lighting",
    description: "Cantilever box elevation treated with weather-proof ACP wood panels, vertical architectural louvers, and integrated exterior warm downlights.",
    features: ["Cantilever box cladding", "Integrated exterior downlights", "Heavy aluminium sub-frame", "Corrosion & rust resistant"]
  },
  {
    id: "acp-4",
    title: "Cantilever Architectural Elevation with Wood Texture ACP Sheets & Railings",
    category: "acp-elevation",
    categoryLabel: "ACP Front Elevation",
    pricePerSqFt: 180,
    priceBadge: "Rs. 180 / sq ft",
    image: "/assets/aistudio/IMG-20261106-WA0068_45975dca.jpg",
    alt: "Full view of modern residential bungalow with warm wood ACP cladding across balcony roofs and exterior facade",
    description: "Comprehensive front facade cladding system utilizing natural wood textured ACP sheets across roof overhangs, entrance canopies, and feature pillars.",
    features: ["Full front facade cladding", "Natural grain warmth", "Weatherproof silicone joints", "Long-term color warranty"]
  },
  {
    id: "acp-5",
    title: "Multi-Finish ACP Composite Cladding Panels - Wood, Marble, Grey, Silver",
    category: "acp-elevation",
    categoryLabel: "ACP Front Elevation",
    pricePerSqFt: 180,
    priceBadge: "Rs. 180 / sq ft",
    image: "/assets/aistudio/IMG-20261106-WA0065_1__ce12dc49.jpg",
    alt: "Sample catalog display of architectural ACP sheets in wooden, stone marble, metallic grey, and silver finishes",
    description: "Architectural sample palette offering over 50 exterior-grade finishes including oak, teak, granite, brushed silver, champagne gold, and dark anthracite.",
    features: ["50+ Architectural shades", "Wood, stone & metallic finishes", "High-density mineral core", "Custom panel fabrication"]
  },
  {
    id: "acp-6",
    title: "Premium Exterior Grade ACP Wood-Grain Color Palette - 24+ Shades",
    category: "acp-elevation",
    categoryLabel: "ACP Front Elevation",
    pricePerSqFt: 180,
    priceBadge: "Rs. 180 / sq ft",
    image: "/assets/aistudio/IMG-20261106-WA0066_23a1788b.jpg",
    alt: "Extensive sample range of wood-grain exterior ACP panels showing pine, oak, walnut, teak, and wenge tones",
    description: "Specialized exterior wood-grain collection replicating pine, European oak, smoked walnut, burma teak, and ebony for exterior gates, canopies, and walls.",
    features: ["24+ Wood-grain species", "Authentic grain touch texture", "Resistant to heat & rain", "Certified 4mm exterior grade"]
  }
];

export const CCTV_ITEMS: ProductItem[] = [
  {
    id: "cctv-1",
    title: "CP Plus HD Dome & Bullet Complete Surveillance Kit with DVR",
    category: "cctv",
    categoryLabel: "CCTV Camera",
    pricePerSqFt: 1000,
    priceBadge: "Rs. 1000 per piece",
    image: "/assets/aistudio/IMG-20261106-WA0074_8d67d083.jpg",
    alt: "CP Plus HD surveillance security camera set with PTZ dome, bullet cameras, and multi-channel DVR unit",
    description: "Complete CP Plus smart security camera ecosystem featuring 360-degree PTZ speed dome, outdoor bullet cameras, ceiling indoor domes, and high-capacity digital video recorder.",
    features: ["CP Plus brand security", "Infrared night vision up to 30m", "Mobile app live monitoring", "Motion detection alert"]
  },
  {
    id: "cctv-2",
    title: "Quadra Smart Night Vision High-Definition Surveillance Setup",
    category: "cctv",
    categoryLabel: "CCTV Camera",
    pricePerSqFt: 1000,
    priceBadge: "Rs. 1000 per piece",
    image: "/assets/aistudio/IMG-20261106-WA0070_c09563e7.jpg",
    alt: "Quadra multi-camera security array with high-power infrared LEDs, PTZ dome, and bullet cameras",
    description: "Multi-camera Quadra security array engineered with high-intensity infrared array LEDs for crystal-clear 24/7 day-and-night surveillance across residential and commercial premises.",
    features: ["High-power array infrared LEDs", "Weatherproof IP66 bullet body", "Wide-angle optical lens", "Continuous loop recording"]
  },
  {
    id: "cctv-3",
    title: "CP Plus 8-Channel Complete CCTV Package with 2TB Hard Drive",
    category: "cctv",
    categoryLabel: "CCTV Camera",
    pricePerSqFt: 1000,
    priceBadge: "Rs. 1000 per piece",
    image: "/assets/aistudio/IMG-20261106-WA0069_f47dd0c2.jpg",
    alt: "Full 8-camera CP Plus security kit with 4 bullet cameras, 4 dome cameras, 2TB WD Purple surveillance hard disk, power supply, and BNC connectors",
    description: "Turnkey CCTV package including 4 outdoor bullet cameras, 4 indoor dome cameras, 8-channel DVR, 2TB Western Digital surveillance hard drive, power supply box, and heavy copper cabling.",
    features: ["Includes 2TB WD Purple HDD", "4 Dome + 4 Bullet cameras", "Centralized SMPS power unit", "Pure copper coaxial cable bundle"]
  },
  {
    id: "cctv-4",
    title: "Commercial IP PoE Network Camera System with NVR & Live Display",
    category: "cctv",
    categoryLabel: "CCTV Camera",
    pricePerSqFt: 1000,
    priceBadge: "Rs. 1000 per piece",
    image: "/assets/aistudio/IMG-20261106-WA0072_5f9bf6af.jpg",
    alt: "IP camera network architecture diagram with PoE switch, high-definition IP cameras, NVR recorder, router, and live multi-camera monitor screen",
    description: "Enterprise-grade IP PoE security camera system with dedicated Network Video Recorder, Ethernet PoE switch, router connectivity for remote phone streaming, and live multi-window monitor screen.",
    features: ["PoE single-cable installation", "Dedicated NVR controller", "Live multi-window display ready", "Cloud remote viewing"]
  }
];

export const CARPENTRY_ITEMS: ProductItem[] = [
  {
    id: "carp-1",
    title: "L-Shaped Walk-In Dressing Wardrobe with Vanity Table & Mirror",
    category: "carpentry",
    categoryLabel: "Carpentry Work",
    pricePerSqFt: 0,
    priceBadge: "Custom Carpentry",
    image: "/assets/aistudio/IMG-20261106-WA0075_37378673.jpg",
    alt: "L-shaped natural wood walk-in wardrobe carcass with built-in dressing vanity table, illuminated mirror frame, and deep drawers under construction",
    description: "Custom floor-to-ceiling corner wardrobe crafted on-site from BWR grade marine plywood, featuring hanging rails, overhead lofts, adjustable linen shelves, and integrated vanity table.",
    features: ["BWR Marine plywood carcass", "Integrated makeup vanity desk", "Smooth soft-close drawer slides", "Full-height corner optimization"]
  },
  {
    id: "carp-2",
    title: "Floor-to-Ceiling Luxury Taupe Acrylic Master Wardrobe",
    category: "carpentry",
    categoryLabel: "Carpentry Work",
    pricePerSqFt: 0,
    priceBadge: "Custom Carpentry",
    image: "/assets/aistudio/WhatsApp_Image_2026-02-13_at_3.57.30_PM__1__c5de324b.jpeg",
    alt: "Floor-to-ceiling modern taupe acrylic wardrobe with slim vertical black handles, warm skirting illumination, and wood grain side gable",
    description: "Master bedroom 6-door bespoke wardrobe with cashmere taupe acrylic shutters, sleek black metal vertical pull handles, warm floor skirting uplighting, and durable wood grain casing.",
    features: ["Cashmere taupe acrylic shutters", "Floor-skirting ambient LED glow", "Slim black architectural handles", "Zero-vibration hinge dampening"]
  },
  {
    id: "carp-3",
    title: "Custom Greenply Dressing Unit & Modular Storage Carcass",
    category: "carpentry",
    categoryLabel: "Carpentry Work",
    pricePerSqFt: 0,
    priceBadge: "Custom Carpentry",
    image: "/assets/aistudio/IMG-20261106-WA0078_3eff392b.jpg",
    alt: "Custom wardrobe carcass built using authentic Greenply calibrated plywood with LED backlit dressing mirror and telescopic drawers",
    description: "Precision on-site carpentry using genuine Greenply commercial grade plywood. Includes illuminated vanity mirror niche, soft-close organizer drawers, and clothes hanging bays.",
    features: ["Genuine Greenply calibrated ply", "LED illuminated dressing mirror", "Heavy Hafele telescopic runners", "Termite & borer proof build"]
  },
  {
    id: "carp-4",
    title: "Minimalist Dual-Section Wardrobe with Natural Oak Veneer Inlay",
    category: "carpentry",
    categoryLabel: "Carpentry Work",
    pricePerSqFt: 0,
    priceBadge: "Custom Carpentry",
    image: "/assets/aistudio/images__1__a569ebb4.jpeg",
    alt: "Interior of modern modular wardrobe showing cubbies, hanging compartments, and sleek grey doors with oak wood recessed grip handle",
    description: "Scandinavian minimalist bedroom wardrobe showcasing internal compartments, shoe shelves, and seamless tall doors with handcrafted oak wood vertical recessed grip handles.",
    features: ["Handcrafted wood recessed handle", "Customized internal compartments", "Concealed German pivot hinges", "Smooth melamine edge-banded finish"]
  },
  {
    id: "carp-5",
    title: "Grand Walk-In Closet with Fluted Glass Sliding Shutters & Shelves",
    category: "carpentry",
    categoryLabel: "Carpentry Work",
    pricePerSqFt: 0,
    priceBadge: "Custom Carpentry",
    image: "/assets/aistudio/images__2__43d4f84e.jpeg",
    alt: "Spacious luxury walk-in closet room with open natural wood shelving, frosted fluted glass sliding doors, and natural light window",
    description: "Bespoke dressing sanctuary featuring floor-to-ceiling open cubbies, deep sweater drawers, and slim aluminium framed fluted frosted glass sliding panels with soft-glide bottom tracks.",
    features: ["Fluted frosted glass sliding doors", "Natural warm wood grain laminates", "Open walk-in dressing layout", "Heavy-load hanging hardware"]
  },
  {
    id: "carp-6",
    title: "Bespoke Wood Cladding Wall with Integrated Warm LED Profile Bands",
    category: "carpentry",
    categoryLabel: "Carpentry Work",
    pricePerSqFt: 0,
    priceBadge: "Custom Carpentry",
    image: "/assets/aistudio/carpentry-works-service-in-dubai_6f50bd1c.jpg",
    alt: "Architectural dark wood wall panelling with horizontal geometric angular cream panels, warm recessed LED lighting strips, and vertical timber louvers",
    description: "Master carpentry feature wall combining deep espresso wood laminate backing, geometric angled floating panels, vertical solid timber louvers, and warm linear LED lighting bands.",
    features: ["Architectural feature wall cladding", "Integrated warm LED light slots", "Vertical solid timber louvers", "Seamless flush door integration"]
  }
];

export const WALLPAPER_ITEMS: ProductItem[] = [
  {
    id: "wall-1",
    title: "Luxury Textured Vinyl & Non-Woven Wallpaper Catalog Collection",
    category: "wallpaper",
    categoryLabel: "Wallpaper",
    pricePerSqFt: 500,
    priceBadge: "Rs. 500 per piece",
    image: "/assets/aistudio/IMG-20261106-WA0079_ae3d768f.jpg",
    alt: "Display rack showing dozens of luxury rolls of designer wallpapers including metallic damask, botanical leaves, marble texture, and mosaic patterns",
    description: "Curated display rack of over 40+ imported luxury wallpaper textures including metallic gold damask, Italian marble, tropical foliage, and modern geometric designs.",
    features: ["Imported non-woven vinyl base", "Washable & scrub-resistant", "Seamless edge pattern matching", "UV colorfast German dyes"]
  },
  {
    id: "wall-2",
    title: "Royal Golden Damask & Antique Filigree Textured Wallpaper",
    category: "wallpaper",
    categoryLabel: "Wallpaper",
    pricePerSqFt: 500,
    priceBadge: "Rs. 500 per piece",
    image: "/assets/aistudio/IMG-20261106-WA0081_08fe5a63.jpg",
    alt: "Close-up of royal antique damask wallpaper with raised embossed gold filigree and plaster texture background",
    description: "Opulent classic European damask pattern with raised gold foil embossing and weathered Venetian plaster background texture, ideal for royal master bedrooms.",
    features: ["Raised gold foil filigree", "Heavy textured Venetian plaster", "Scratch & moisture resistant", "Breathable non-woven layer"]
  },
  {
    id: "wall-3",
    title: "Botanical Banana Palm Leaf Motif with Gold Pinstripe Highlights",
    category: "wallpaper",
    categoryLabel: "Wallpaper",
    pricePerSqFt: 500,
    priceBadge: "Rs. 500 per piece",
    image: "/assets/aistudio/IMG-20261106-WA0080_794f6c5b.jpg",
    alt: "Macro view of contemporary botanical wallpaper with layered palm leaves in warm champagne tones and gilded gold borders",
    description: "Artistic botanical foliage wallpaper featuring layered sage, champagne, and olive palm leaves highlighted with metallic gold outlines for living room accent walls.",
    features: ["Metallic gold leaf outlining", "Earthy warm champagne palette", "Anti-static dust-repellent coat", "Easy dry-peel removal"]
  },
  {
    id: "wall-4",
    title: "Nordic Sage Green Marble Agate Wallpaper with Gilded Line Art",
    category: "wallpaper",
    categoryLabel: "Wallpaper",
    pricePerSqFt: 500,
    priceBadge: "Rs. 500 per piece",
    image: "/assets/aistudio/IMG-20261106-WA0083_efcdfc01.jpg",
    alt: "Sage green fluid marble stone textured wallpaper with flowing linear botanical leaves outlined in gold shimmer",
    description: "Serene Scandinavian aesthetic combining organic fluid sage marble veins with hand-drawn botanical linear leaf silhouettes accented in shimmering gold foil.",
    features: ["Organic sage marble fluid texture", "Shimmering gold line art", "Calming biophilic aesthetic", "100% Odorless eco paste"]
  },
  {
    id: "wall-5",
    title: "Horizontal Ribbed Zebra Blind Fabric & Textured Wall Roll",
    category: "wallpaper",
    categoryLabel: "Wallpaper",
    pricePerSqFt: 500,
    priceBadge: "Rs. 500 per piece",
    image: "/assets/aistudio/IMG-20261106-WA0088_3d41ee25.jpg",
    alt: "Textured horizontal striped translucent and opaque zebra blind roll with pulley chain",
    description: "Dual-layer zebra roller blind featuring alternating translucent sheer filters and natural textured linen vanes for precision privacy and sunlight control.",
    features: ["Dual-layer light regulation", "Natural woven linen texture", "Smooth pearl-chain pulley", "Blocks 85% UV radiation"]
  },
  {
    id: "wall-6",
    title: "Organic Woven Grasscloth Straw & Jute Texture Wall Covering",
    category: "wallpaper",
    categoryLabel: "Wallpaper",
    pricePerSqFt: 500,
    priceBadge: "Rs. 500 per piece",
    image: "/assets/aistudio/IMG-20261106-WA0084_767dd5a5.jpg",
    alt: "Warm earth-tone horizontal grasscloth textured wallpaper roll with natural woven fibers",
    description: "Genuine organic grasscloth texture replication with horizontal earth-toned striations, bringing natural warmth, acoustic absorption, and artisanal elegance.",
    features: ["Organic grasscloth fiber weave", "Sound-dampening acoustic texture", "Rich earthy beige & cocoa tones", "Conceals uneven wall surfaces"]
  },
  {
    id: "wall-7",
    title: "Art Deco Fan Mosaic Tile Wallpaper with Radiant Gold Highlights",
    category: "wallpaper",
    categoryLabel: "Wallpaper",
    pricePerSqFt: 500,
    priceBadge: "Rs. 500 per piece",
    image: "/assets/aistudio/IMG-20261106-WA0085_e93d9907.jpg",
    alt: "Scalloped art deco fan mosaic wallpaper with shimmering gold and mother-of-pearl ceramic tiles",
    description: "Geometric scalloped fan mosaic pattern with shimmering gold leaf and mother-of-pearl miniature tile textures, creating a luxurious boutique hotel ambiance.",
    features: ["Scalloped art deco fan motif", "Gold & pearlescent accents", "Embossed 3D tile texture", "Stain-resistant wipeable face"]
  },
  {
    id: "wall-8",
    title: "Geometric Interlocking Square Outline Blind & Wall Fabric",
    category: "wallpaper",
    categoryLabel: "Wallpaper",
    pricePerSqFt: 500,
    priceBadge: "Rs. 500 per piece",
    image: "/assets/aistudio/IMG-20261106-WA0090_21d53e29.jpg",
    alt: "Modern roller blind with interlocking geometric rectangular outlines in soft warm beige",
    description: "Modern minimalist window covering and feature wall fabric with interlocking geometric outlines on soft beige canvas, diffusing harsh sunlight into soft ambient light.",
    features: ["Modern geometric wireframe", "Soft light-filtering fabric", "Anti-fading pigment coating", "Minimalist contemporary look"]
  }
];

export const WINDOW_BLIND_ITEMS: ProductItem[] = [
  {
    id: "blind-1",
    title: "Gold Banana Palm Leaf Printed Designer Roller Blind",
    category: "window-blinds",
    categoryLabel: "Window Blinds",
    pricePerSqFt: 120,
    priceBadge: "Rs. 120 / sq ft",
    image: "/assets/aistudio/IMG-20261106-WA0091_a89a77ac.jpg",
    alt: "Luxury printed roller blind with golden background and white banana palm leaves in modern bedroom window setting",
    description: "Premium UV-printed fabric roller blind with opulent gilded banana palm fronds, smooth aluminum roller cassette, and blackout privacy lining.",
    features: ["Custom botanical leaf print", "100% Thermal & light control", "Smooth beaded chain mechanism", "Dust-resistant wipeable fabric"]
  },
  {
    id: "blind-2",
    title: "Dual-Layer Walnut Woodgrain Zebra Roller Blind",
    category: "window-blinds",
    categoryLabel: "Window Blinds",
    pricePerSqFt: 120,
    priceBadge: "Rs. 120 / sq ft",
    image: "/assets/aistudio/IMG-20261106-WA0094_9e62e80e.jpg",
    alt: "Dual-tone walnut wood grain textured zebra day-and-night window blind in bright living room",
    description: "Multi-functional day-and-night zebra blind featuring alternating dark walnut timber textured vanes and transparent mesh for versatile sunlight diffusion.",
    features: ["Day-and-night light filtering", "Rich walnut woodgrain texture", "Color-matched top valance", "Blocks up to 85% harsh glare"]
  },
  {
    id: "blind-3",
    title: "Minimalist Natural Oatmeal Linen Blackout Roller Blind",
    category: "window-blinds",
    categoryLabel: "Window Blinds",
    pricePerSqFt: 120,
    priceBadge: "Rs. 120 / sq ft",
    image: "/assets/aistudio/IMG-20261106-WA0092_c73ffba4.jpg",
    alt: "Clean textured oatmeal linen blackout roller blind in serene bright bedroom window",
    description: "Scandinavian style textured woven linen roller blind with acoustic dampening backing, delivering full darkness and calm privacy for master bedrooms.",
    features: ["Textured organic linen weave", "Complete room-darkening blackout", "Weighted lower hem bar", "Smooth whisper-glide roller"]
  },
  {
    id: "blind-4",
    title: "Modern Architectural Slate Grey Blackout Roller Blind",
    category: "window-blinds",
    categoryLabel: "Window Blinds",
    pricePerSqFt: 120,
    priceBadge: "Rs. 120 / sq ft",
    image: "/assets/aistudio/IMG-20261106-WA0093_e4bf42db.jpg",
    alt: "Floor-to-ceiling modern grey blackout roller blind in luxury marble living room lounge",
    description: "High-spec architectural grey blackout blind designed for large picture windows, executive cabins, and marble-clad living halls.",
    features: ["Commercial grade solar fabric", "Total thermal heat rejection", "Full window coverage", "Precision side-track compatible"]
  },
  {
    id: "blind-5",
    title: "Cellular Honeycomb Light-Filtering Translucent Shade Trio",
    category: "window-blinds",
    categoryLabel: "Window Blinds",
    pricePerSqFt: 120,
    priceBadge: "Rs. 120 / sq ft",
    image: "/assets/aistudio/IMG-20261106-WA0096_c7f35ad9.jpg",
    alt: "Three matching crisp white honeycomb cellular window shades in a sunlit master bedroom",
    description: "Energy-efficient cellular pleated shades trapping air within honeycomb pockets for superior year-round climate insulation and soft glare-free daylight.",
    features: ["Honeycomb thermal pocket design", "Soft translucent light dispersion", "Cordless pet & child safe", "Sleek low-profile top rail"]
  },
  {
    id: "blind-6",
    title: "Contemporary Teak Brown Zebra Day-and-Night Living Room Blind",
    category: "window-blinds",
    categoryLabel: "Window Blinds",
    pricePerSqFt: 120,
    priceBadge: "Rs. 120 / sq ft",
    image: "/assets/aistudio/IMG-20261106-WA0095_7133392a.jpg",
    alt: "Warm teak brown zebra blind mounted above modern living room sofa with diffused ambient daylight",
    description: "Horizontally striped zebra blind offering instant transition between view-through openness and solid private shade with an ergonomic side control.",
    features: ["Adjustable vane alignment", "Warm teak brown tones", "Anti-fray ultrasonic sealed edges", "Easy surface wipe-cleaning"]
  }
];

export const WALL_MOULDING_ITEMS: ProductItem[] = [
  {
    id: "mould-1",
    title: "PS High-Quality Cornice, Skirting & Wall Moulding Catalog Board",
    category: "wall-moulding",
    categoryLabel: "Wall Moulding",
    pricePerSqFt: 80,
    priceBadge: "Rs. 80 per piece",
    image: "/assets/aistudio/IMG-20261106-WA0097_e3141ba4.jpg",
    alt: "Showroom display board of polystyrene wall mouldings, gold border trims, skirting profiles, and ornate decorative cornices",
    description: "Exhaustive sample board featuring 18+ high-density polystyrene (PS) decorative wall moulding profiles, golden accent border trims, crown cornices, and baseboard skirtings.",
    features: ["18+ Profile shapes & sizes", "White & gilded gold finishes", "High-density polystyrene core", "Termite & water immune"]
  },
  {
    id: "mould-2",
    title: "Classical European White Wall Beading & Panel Trim Strip",
    category: "wall-moulding",
    categoryLabel: "Wall Moulding",
    pricePerSqFt: 80,
    priceBadge: "Rs. 80 per piece",
    image: "/assets/aistudio/white-wall-moulding-8203040-64_600_2f313f43.jpg",
    alt: "Pair of clean white primed classical European decorative wall beading strips showing contoured profile cross-section",
    description: "Precision-milled classical wall beading designed for creating elegant Parisian wainscoting panels, photo frame wall accents, and decorative door borders.",
    features: ["Pre-primed paintable surface", "Crisp European contour", "Zero warping or shrinking", "Concealed adhesive bonding"]
  },
  {
    id: "mould-3",
    title: "Ornate Embossed Floral Relief Chair Rail Border Moulding",
    category: "wall-moulding",
    categoryLabel: "Wall Moulding",
    pricePerSqFt: 80,
    priceBadge: "Rs. 80 per piece",
    image: "/assets/aistudio/8ca88fe4f93cf515aaa5db2923a42603_53c121ae.jpg",
    alt: "Intricately carved classical floral relief chair rail border moulding with scalloped petal pattern",
    description: "Vintage-inspired decorative chair rail trim showcasing continuous bas-relief floral arches, adding heritage grandeur to drawing rooms and dining hall borders.",
    features: ["Continuous floral bas-relief", "Antique egg-and-dart motif", "Lightweight easy wall mount", "Accepts acrylic & enamel paints"]
  },
  {
    id: "mould-4",
    title: "Classical White Baseboard & Door Architrave Plinth Block",
    category: "wall-moulding",
    categoryLabel: "Wall Moulding",
    pricePerSqFt: 80,
    priceBadge: "Rs. 80 per piece",
    image: "/assets/aistudio/images__3__3c82ff2e.jpeg",
    alt: "Classical architectural door frame casing with fluted pilaster, plinth block transition, and stepped floor skirting baseboard",
    description: "Architectural plinth block and stepped baseboard skirting combination providing smooth transition between vertical fluted door casings and horizontal floor skirtings.",
    features: ["High-impact floor transition", "Protects walls from mop scuffs", "Conceals flooring expansion gaps", "Clean classical stepped profile"]
  },
  {
    id: "mould-5",
    title: "Modern Architectural Stepped Baseboard & Header Trim S4S",
    category: "wall-moulding",
    categoryLabel: "Wall Moulding",
    pricePerSqFt: 80,
    priceBadge: "Rs. 80 per piece",
    image: "/assets/aistudio/white-ponderosa-wood-ponderosa-wood-floor-moulding-pwbb7121116s4s-3-64_600_7f8105df.jpg",
    alt: "Contemporary flat stepped baseboard header trim profile against dark concrete texture wall",
    description: "Minimalist rectangular stepped trim suitable for door headers, wainscot caps, picture frame wall surrounds, and clean transition lines in modern luxury homes.",
    features: ["Crisp geometric 90° reveal", "Smooth primed satin face", "Moisture-resistant core", "Seamless mitered corners"]
  },
  {
    id: "mould-6",
    title: "TP-3003 30mm Fluted Decorative Wall Beading Profile Strip",
    category: "wall-moulding",
    categoryLabel: "Wall Moulding",
    pricePerSqFt: 80,
    priceBadge: "Rs. 80 per piece",
    image: "/assets/aistudio/IMG-20261106-WA0098_8908ddea.jpg",
    alt: "Cross-section of TP-3003 30mm high-density polymer wall beading moulding stick resting on grass background",
    description: "Engineered 30mm high-density polystyrene profile with dual convex contour, ideal for geometric wall grid panels, mirror framing, and headboard focal walls.",
    features: ["Standard 30mm versatile width", "High-density impact polymer", "100% Termite & moisture safe", "Quick adhesive installation"]
  },
  {
    id: "mould-7",
    title: "Architectural Crown Cornice & Fluted Panel Trim Strip",
    category: "wall-moulding",
    categoryLabel: "Wall Moulding",
    pricePerSqFt: 80,
    priceBadge: "Rs. 80 per piece",
    image: "/assets/aistudio/09bef6ca-38c9-4453-a394-0724bb1aa688_1000_db5d9e3b.jpg",
    alt: "Contoured architectural polymer trim strip showing fluted relief channel and back anchor notch",
    description: "Fluted polymer transition trim engineered with anchor groove for effortless alignment along ceilings, chair rails, wall panel perimeters, and door architraves.",
    features: ["Precision alignment groove", "Smooth symmetrical fluting", "Ultra-lightweight polymer", "Ready for spray or brush paint"]
  }
];

export const TRUST_FEATURES = [
  {
    title: "All Interior Solutions",
    subtitle: "Turnkey Design to Delivery",
    desc: "From custom TV walls and false ceilings to premium flooring, we handle your entire space under one trusted roof."
  },
  {
    title: "Premium Quality Material",
    subtitle: "Long-Lasting Craftsmanship",
    desc: "High-density moisture-resistant boards, branded warm LED strips, AC4 grade flooring, and anti-rust galvanized grids."
  },
  {
    title: "Affordable Rates",
    subtitle: "Direct Transparent Pricing",
    desc: "Clear per-square-foot rates (₹700 for LED walls, ₹150 for flooring, ₹50 for ceilings) with zero hidden fees."
  },
  {
    title: "Local Expert Team",
    subtitle: "Based in Thanesar, Kurukshetra",
    desc: "Fast on-site measurements, prompt local installation, and reliable after-service warranty right in Kurukshetra & Haryana."
  }
];

export const PROCESS_STEPS = [
  {
    step: "01",
    title: "Consultation & Measurement",
    desc: "We visit your home or commercial site in Kurukshetra to take laser measurements and understand your vision."
  },
  {
    step: "02",
    title: "Design & Custom Quote",
    desc: "Select fluted louvers, marble textures, wood tones, and lighting temperatures with an itemized square-foot quote."
  },
  {
    step: "03",
    title: "Precision Installation",
    desc: "Our skilled carpenters and electricians assemble your wall units, flooring, and ceilings with clean dust control."
  },
  {
    step: "04",
    title: "Inspection & Handover",
    desc: "Complete walkthrough, electrical testing of all LED drivers, final detailing, and hassle-free warranty handover."
  }
];
