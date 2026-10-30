export type ServiceCategory = {
  slug: string;
  title: string;
  tagline: string;
  description: string;
  heroImage: string;
  gallery: string[];
  subcategories: string[]; // slugs of subcategories
  benefits: string[];
  applications: string[];
};

export type SubcategoryService = {
  slug: string;
  title: string;
  categorySlug: string;
  categoryTitle: string;
  tagline: string;
  description: string;
  image: string;
  gallery: string[];
  features: string[];
  options: { label: string; values: string[] }[];
  applications: string[];
  relatedSubcategorySlugs: string[];
};

export type Service = {
  slug: string;
  title: string;
  category: string;
  tagline: string;
  description: string;
  image: string;
  art?: string;
  features: string[];
  uses: string[];
  specs: { label: string; value: string }[];
  priceNote: string;
  popular?: boolean;
};

/* ==========================================================================
   8 AUTHORITATIVE SERVICE CATEGORIES
   ========================================================================== */

export const serviceCategories: ServiceCategory[] = [
  {
    slug: "windows-wall-floor-graphics",
    title: "Windows, Wall & Floor Graphics",
    tagline: "Transform everyday surfaces into high-impact branded environments.",
    description:
      "From decorative architectural film and storefront window lettering to durable floor wayfinding and custom vinyl table wraps, our surface graphics bring commercial spaces to life with vibrant colour and rugged durability.",
    heroImage: "/image/services/windows-wall-floor/botanical-cafe-interior-graphics.webp",
    gallery: [
      "/image/services/windows-wall-floor/restaurant-table-vinyl-wrap.webp",
      "/image/services/windows-wall-floor/adhesive-vinyl-printing.webp",
      "/image/services/windows-wall-floor/storefront-floor-wayfinding.webp",
      "/image/services/windows-wall-floor/cafe-window-vinyl-graphics.webp",
    ],
    subcategories: [
      "restaurant-table-wrapping",
      "adhesive-vinyl-printing",
      "floor-vinyl-graphics",
    ],
    benefits: [
      "Scratch-resistant and slip-certified floor laminates",
      "Removable or permanent high-tack adhesive formulations",
      "Precision computer-cut contour graphics and full-bleed prints",
      "UV-stable inks that resist fading under direct indoor & outdoor light",
    ],
    applications: [
      "Café, bistro and restaurant dining tables",
      "Retail storefront windows and entrance doors",
      "Office conference rooms and frosted privacy partitions",
      "Warehouse safety wayfinding and showroom floor graphics",
    ],
  },
  {
    slug: "banners-displays",
    title: "Banners & Displays",
    tagline: "Vibrant promotional displays designed for trade shows, retail & outdoor events.",
    description:
      "Make an unmistakable impression with durable indoor and outdoor banner solutions. We produce heavy-duty vinyl scrim banners, wrinkle-resistant tension fabric displays, and lightweight rigid foam presentation boards.",
    heroImage: "/image/services/banners-displays/jp-promotional-banner.webp",
    gallery: [
      "/image/services/banners-displays/jp-exhibition-display.webp",
      "/image/services/banners-displays/jp-showcase-displays.webp",
      "/image/services/banners-displays/architectural-exhibition-booth.webp",
      "/image/services/banners-displays/mountain-themed-exhibition-booth.webp",
    ],
    subcategories: [
      "fabric-banner",
      "foam-board",
      "indoor-banner",
      "outdoor-banner",
    ],
    benefits: [
      "Heavy-duty 13oz to 18oz blockout scrim vinyl for outdoor weather resilience",
      "High-resolution dye-sublimation printing on non-glare fabric",
      "Reinforced heat-welded hems with industrial brass grommets",
      "Portable, lightweight display hardware for rapid on-site setup",
    ],
    applications: [
      "Trade show exhibition booths and corporate conference backdrops",
      "Retail grand openings, seasonal promotions and sale announcements",
      "Sponsorship signage for sporting events and community festivals",
      "Directional entrance banners for schools, churches and public venues",
    ],
  },
  {
    slug: "storefront-building-signs",
    title: "Storefront & Building Signs",
    tagline: "Architectural exterior signage that establishes credibility and commands attention.",
    description:
      "Your building exterior is the initial touchpoint for every visiting client. We design, fabricate, and assemble premium storefront signs, heavy-duty sidewalk A-frames, durable Coroplast panels, and polished corporate lobby displays.",
    heroImage: "/image/hero/modern-charcoal-storefront.webp",
    gallery: [
      "/image/services/storefront-building-signs/cafe-a-frame-signs.webp",
      "/image/services/storefront-building-signs/cafe-entrance-signage.webp",
      "/image/services/storefront-building-signs/lobby-business-banner.webp",
      "/image/about/facility/jp-office-reception.webp",
    ],
    subcategories: [
      "a-frame-signs",
      "coroplast-signs",
      "lobby-office-signs",
    ],
    benefits: [
      "Weatherproof substrates engineered for harsh Canadian freeze-thaw cycles",
      "Double-sided sidewalk displays with quick-change graphic inserts",
      "Elegant acrylic, brushed aluminum, and dimensional letter options",
      "Turnkey service from initial mockups to final professional assembly",
    ],
    applications: [
      "Pedestrian sidewalk advertising for cafés, bakeries and retail shops",
      "Corporate reception walls, directory boards and conference room signs",
      "Exterior commercial plaza fascia panels and unit identification",
      "Parking, entrance, and curbside pickup wayfinding signs",
    ],
  },
  {
    slug: "vehicle-wraps-graphics",
    title: "Vehicle Wraps & Graphics",
    tagline: "Turn your commercial fleet into 24/7 mobile advertising across Ontario.",
    description:
      "Transform service vans, box trucks, pickup trucks, and trailers into hard-working mobile billboards. We utilize cast vinyl films and protective overlaminates engineered for extended durability and paint protection.",
    heroImage: "/image/hero/vehicle-wrap/jp-branded-box-truck.webp",
    gallery: [
      "/image/hero/vehicle-wrap/jp-colourful-delivery-van.webp",
      "/image/hero/vehicle-wrap/branded-printing-van-office-park.webp",
      "/image/hero/vehicle-wrap/modern-wrapped-van.webp",
    ],
    subcategories: ["truck-decals"],
    benefits: [
      "Premium premium cast wrap films with air-release technology for bubble-free adhesion",
      "UV and road-salt resistant gloss or matte protective overlaminate",
      "Cost-effective commercial exposure generating thousands of daily impressions",
      "Removable without damaging factory automotive paint when professionally stripped",
    ],
    applications: [
      "Commercial delivery vans, contractor trucks and service fleets",
      "Box truck cargo bodies and trailer side panels",
      "Door logos, phone numbers, CVOR numbers and regulatory lettering",
      "Tailgate branding and rear-window perforated one-way vision graphics",
    ],
  },
  {
    slug: "real-estate-signage",
    title: "Real Estate Signage",
    tagline: "Professional for-sale, open house, and directional signage for top agents.",
    description:
      "Help listings stand out in competitive Canadian real estate markets. We produce clean, weather-resistant yard signs, open house A-frames, hanging riders, directional arrows, and high-impact property feature sheets.",
    heroImage: "/image/services/real-estate-signage/modern-home-for-sale-open-house.webp",
    gallery: [
      "/image/services/real-estate-signage/luxury-open-house-signage.webp",
      "/image/services/real-estate-signage/modern-for-sale-sign.webp",
      "/image/services/real-estate-signage/modern-real-estate-signage.webp",
      "/image/services/real-estate-signage/open-house-yard-sign.webp",
      "/image/services/real-estate-signage/open-house-signage.webp",
      "/image/services/real-estate-signage/upscale-suburban-open-house.webp",
    ],
    subcategories: [
      "directional-lawn-signs",
      "for-sale-signs",
      "open-house-signs",
      "real-estate-feature-sheets",
      "riders",
      "real-estate-signs-open-houses",
    ],
    benefits: [
      "Sturdy 4mm & 10mm fluted Coroplast with galvanized wire step stakes",
      "Double-sided high-contrast printing readable from moving vehicles",
      "Standard agent post compatibility with pre-drilled hanging grommets",
      "Modular clip-on riders for quick listing status updates (Sold, Just Listed, Pool)",
    ],
    applications: [
      "Residential property listings and open house directional routes",
      "Commercial lease and development site notice boards",
      "Brokerage yard signs and custom agent branding packages",
      "High-end open house showcase feature presentation sheets",
    ],
  },
  {
    slug: "marketing-materials",
    title: "Marketing Materials",
    tagline: "Premium printed collateral that leaves a tangible, lasting impression.",
    description:
      "From bespoke restaurant table tents and botanical wedding invitation suites to luxury property brochures, our short-run and production offset printing delivers unmatched colour consistency and paper stock feel.",
    heroImage: "/image/services/marketing-materials/real-estate-property-brochure.webp",
    gallery: [
      "/image/products/table-tent-cards/upscale-restaurant-table-tent-cards.webp",
      "/image/products/wedding-invitations/botanical-wedding-invitations.webp",
      "/image/services/marketing-materials/premium-hospitality-brochure.webp",
      "/image/services/marketing-materials/elegant-real-estate-marketing.webp",
    ],
    subcategories: [
      "table-tent-cards",
      "wedding-invitations",
    ],
    benefits: [
      "Heavy cardstocks from 14pt to 32pt with smooth, linen, and uncoated textures",
      "Specialty finishes including soft-touch lamination and metallic foil highlights",
      "Precision die-cutting, scoring, and folding for flawless presentation",
      "Low minimum quantities with flexible proofing options prior to full runs",
    ],
    applications: [
      "Fine dining and casual bistro table promotions, dessert menus and drinks lists",
      "Wedding stationery suites, RSVP cards, save-the-dates and menus",
      "Corporate event collateral, presentation folders and property showcase booklets",
      "Retail point-of-sale promotional displays and loyalty cards",
    ],
  },
  {
    slug: "business-cards",
    title: "Business Cards",
    tagline: "The essential networking tool, elevated with luxury papers and tactile finishes.",
    description:
      "Make handshakes memorable with cards crafted to perfection. Choose from smooth silk lamination, textured classic linen, thick 14pt uncoated stock, refrigerator magnets, or ultra-modern waterproof plastic cards.",
    heroImage: "/image/products/business-cards/luxury-business-card-finishes.webp",
    gallery: [
      "/image/products/business-cards/magnetic-business-cards.webp",
      "/image/products/business-cards/linen-business-cards.webp",
      "/image/products/business-cards/natural-paper-business-cards.webp",
      "/image/products/business-cards/matte-vs-silk-business-cards.webp",
      "/image/products/business-cards/plastic-business-cards.webp",
      "/image/products/business-cards/luxury-business-card-studio-still-life.webp",
    ],
    subcategories: [
      "standard-business-cards",
      "silk-matte-business-cards",
      "magnet-business-cards",
      "14-pt-uncoated-cards",
      "linen-business-cards",
      "plastic-business-cards",
    ],
    benefits: [
      "Standard 3.5\" x 2\" dimensions with optional rounded corners",
      "Rich CMYK offset printing with deep saturated blacks and crisp typography",
      "Six specialized stock types suited for every industry and aesthetic",
      "Fast turnaround times with local pickup or convenient Ontario delivery",
    ],
    applications: [
      "Executive and corporate identity cards for professionals and founders",
      "Contractor, trade and home service magnetic cards for refrigerator placement",
      "Creative agencies and architects seeking understated uncoated paper tactile warmth",
      "Hospitality, membership, VIP and loyalty cards on durable plastic",
    ],
  },
  {
    slug: "large-format-signs",
    title: "Large Format & Signs",
    tagline: "Heavy-duty site signage, development hoardings & high-visibility lawn signs.",
    description:
      "When your message needs to be seen across construction job sites, busy roadways, or community developments, our large-format division provides weather-hardened printing on aluminum composite, wood, and fluted plastic.",
    heroImage: "/image/services/large-format-signs/construction-site-hoardings.webp",
    gallery: [
      "/image/services/large-format-signs/community-yard-signs.webp",
      "/image/services/large-format-signs/corrugated-signage-showcase.webp",
      "/image/services/large-format-signs/urban-construction-hoardings.webp",
      "/image/services/large-format-signs/condo-construction-hoardings.webp",
    ],
    subcategories: [
      "construction-signs-hoarding",
      "election-signs-lawn-signs",
      "sidewalk-sandwich-board-signs",
    ],
    benefits: [
      "Seamless panel tiling for long perimeter construction hoardings",
      "Graffiti-resistant and UV-protective barrier laminates available",
      "High-volume rapid production capacity for election and community campaigns",
      "Direct-to-substrate flatbed UV printing eliminates peeling and bubbles",
    ],
    applications: [
      "Commercial construction site perimeters and condominium development hoardings",
      "Municipal, provincial and federal election campaign lawn signs",
      "Civic infrastructure announcements and safety compliance notice boards",
      "Community event promotion, festivals and directional roadway banners",
    ],
  },
];

/* ==========================================================================
   28 AUTHORITATIVE SUBCATEGORIES
   ========================================================================== */

export const subcategoryServices: SubcategoryService[] = [
  /* --- CATEGORY 01: Windows, Wall & Floor Graphics (3 subcategories) --- */
  {
    slug: "restaurant-table-wrapping",
    title: "Restaurant Table Wrapping",
    categorySlug: "windows-wall-floor-graphics",
    categoryTitle: "Windows, Wall & Floor Graphics",
    tagline: "Custom vinyl wraps designed specifically for high-traffic dining furniture.",
    description:
      "Breathe new life into café, restaurant, and bar tables with custom-printed architectural surface wraps. Protected with commercial-grade antimicrobial and heat-resistant overlaminates, these wraps turn plain surfaces into branded visual centerpieces that endure daily cleaning and sanitization.",
    image: "/image/services/windows-wall-floor/restaurant-table-vinyl-wrap.webp",
    gallery: [
      "/image/services/windows-wall-floor/botanical-cafe-interior-graphics.webp",
      "/image/services/windows-wall-floor/adhesive-vinyl-printing.webp",
    ],
    features: [
      "Commercial food-safe and easy-to-sanitize protective overlaminate",
      "Full custom edge wrapping or flush tabletop border cuts",
      "High-resolution photographic, woodgrain, marble, or branded pattern printing",
      "Significantly more cost-effective than replacing commercial furniture",
    ],
    options: [
      { label: "Finish", values: ["Matte Luster", "Gloss Protective", "Textured Satin"] },
      { label: "Application", values: ["Top Surface Only", "Full Edge Wrap"] },
      { label: "Durability", values: ["Heavy Commercial Grade", "Standard Hospitality"] },
    ],
    applications: ["Bistros & Cafés", "Bar Countertops", "Food Hall Tables", "Patio Dining Furniture"],
    relatedSubcategorySlugs: ["adhesive-vinyl-printing", "floor-vinyl-graphics", "table-tent-cards"],
  },
  {
    slug: "adhesive-vinyl-printing",
    title: "Adhesive Vinyl Printing",
    categorySlug: "windows-wall-floor-graphics",
    categoryTitle: "Windows, Wall & Floor Graphics",
    tagline: "High-precision custom cut vinyl for windows, walls and interior surfaces.",
    description:
      "Custom adhesive vinyl provides flexible graphic power across interior drywall, exterior glass, acrylic, and smooth painted metals. Whether you need full-color printed wall murals, die-cut logo decals, or frosted privacy film, we produce clean, bubble-free graphics tailored to your specifications.",
    image: "/image/services/windows-wall-floor/adhesive-vinyl-printing.webp",
    gallery: [
      "/image/services/windows-wall-floor/cafe-window-vinyl-graphics.webp",
      "/image/projects/installations/storefront-window-graphics-installation.webp",
    ],
    features: [
      "Removable or permanent adhesive options suited to your installation duration",
      "Computer-guided contour cutting for intricate lettering and emblems",
      "Vibrant eco-solvent and UV-cured inks with true color accuracy",
      "Available with opaque, translucent, or frosted etch finishes",
    ],
    options: [
      { label: "Material", values: ["White Opaque Vinyl", "Clear Transparent", "Frosted Etch Film"] },
      { label: "Adhesive Type", values: ["Removable (Low Tack)", "Permanent (High Tack)"] },
      { label: "Finish", values: ["Matte", "Gloss", "Anti-Glare"] },
    ],
    applications: ["Office Branding Walls", "Retail Window Decals", "Promotional Glass Displays", "Equipment Labeling"],
    relatedSubcategorySlugs: ["restaurant-table-wrapping", "floor-vinyl-graphics", "storefront-building-signs"],
  },
  {
    slug: "floor-vinyl-graphics",
    title: "Floor Vinyl Graphics",
    categorySlug: "windows-wall-floor-graphics",
    categoryTitle: "Windows, Wall & Floor Graphics",
    tagline: "Slip-resistant floor decals that guide foot traffic and reinforce branding.",
    description:
      "Make use of your floor space with certified slip-resistant vinyl decals. Ideal for retail wayfinding, entrance welcome emblems, safety reminders, and event navigation, these graphics adhere reliably to polished concrete, tile, linoleum, and commercial hardwood.",
    image: "/image/services/windows-wall-floor/storefront-floor-wayfinding.webp",
    gallery: [
      "/image/services/windows-wall-floor/adhesive-vinyl-printing.webp",
      "/image/projects/installations/storefront-vinyl-installation.webp",
    ],
    features: [
      "Certified UL 410 slip-resistant textured overlaminate",
      "Heavy-duty adhesive that stands up to heavy foot traffic, carts, and floor scrubbers",
      "Custom shapes: circles, directional arrows, logos, and custom contour cuts",
      "Clean removal leaves minimal adhesive residue upon decommissioning",
    ],
    options: [
      { label: "Surface Type", values: ["Smooth Tile / Concrete", "Low-Pile Commercial Carpet", "Asphalt / Sidewalk"] },
      { label: "Shape", values: ["Circle", "Square", "Custom Contour Cut", "Directional Arrow"] },
      { label: "Lifespan", values: ["Short-Term Promotional (3-6 mo)", "Long-Term Commercial (1-2 yr)"] },
    ],
    applications: ["Retail Store Wayfinding", "Supermarket Aisles", "Corporate Lobbies", "Trade Show Footpaths"],
    relatedSubcategorySlugs: ["restaurant-table-wrapping", "adhesive-vinyl-printing", "lobby-office-signs"],
  },

  /* --- CATEGORY 02: Banners & Displays (4 subcategories) --- */
  {
    slug: "fabric-banner",
    title: "Fabric Banner",
    categorySlug: "banners-displays",
    categoryTitle: "Banners & Displays",
    tagline: "Seamless, glare-free fabric displays for photography, expos, and interior decor.",
    description:
      "Dye-sublimated fabric banners offer an elegant, soft matte finish with zero light reflection. Perfect for corporate step-and-repeat backdrops, showroom displays, and high-end retail decor, they are lightweight, washable, and wrinkle-resistant for easy transport.",
    image: "/image/services/banners-displays/jp-promotional-banner.webp",
    gallery: [
      "/image/services/banners-displays/architectural-exhibition-booth.webp",
      "/image/services/banners-displays/jp-showcase-displays.webp",
    ],
    features: [
      "100% polyester wrinkle-resistant tension fabric",
      "Deep dye-sublimation ink penetration for washable, vibrant graphics",
      "Anti-glare matte appearance ideal for media interviews and studio lighting",
      "Finished with hemmed edges, pole pockets, or silicone edge beading (SEG)",
    ],
    options: [
      { label: "Fabric Type", values: ["Standard Tension Knit", "Blockout Fabric", "Backlit Fabric"] },
      { label: "Finishing", values: ["Pole Pockets Top & Bottom", "Hemmed with Grommets", "Silicone Edge (SEG)"] },
    ],
    applications: ["Trade Show Backdrops", "Retail Flagship Walls", "Press Conferences", "Stage Displays"],
    relatedSubcategorySlugs: ["foam-board", "indoor-banner", "outdoor-banner"],
  },
  {
    slug: "foam-board",
    title: "Foam Board",
    categorySlug: "banners-displays",
    categoryTitle: "Banners & Displays",
    tagline: "Lightweight rigid foam core boards for presentations, easels, and retail signs.",
    description:
      "Printed directly with UV curable inks or mounted on dense paper-faced polystyrene, our foam board prints deliver sharp text and vivid color in a lightweight, budget-friendly format. Ideal for presentations, courtroom exhibits, tabletop displays, and easel signs.",
    image: "/image/services/banners-displays/jp-showcase-displays.webp",
    gallery: [
      "/image/services/banners-displays/jp-promotional-banner.webp",
      "/image/services/banners-displays/mountain-themed-exhibition-booth.webp",
    ],
    features: [
      "Rigid 3/16\" (5mm) and 1/2\" (12mm) white or black foam core board",
      "Direct-to-board UV flatbed printing with crisp typography",
      "Extremely lightweight for effortless transport and hanging",
      "Available with custom easel backs for freestanding tabletop placement",
    ],
    options: [
      { label: "Thickness", values: ["3/16 Inch (Standard)", "1/2 Inch (Heavy Duty)"] },
      { label: "Core Color", values: ["White Core", "Black Core"] },
      { label: "Mounting", values: ["Freestanding Easel", "Wall Hanging Tabs", "None (Display Only)"] },
    ],
    applications: ["Conference Presentations", "Welcome Signs", "Event Seating Charts", "Retail POP Displays"],
    relatedSubcategorySlugs: ["fabric-banner", "indoor-banner", "table-tent-cards"],
  },
  {
    slug: "indoor-banner",
    title: "Indoor Banner",
    categorySlug: "banners-displays",
    categoryTitle: "Banners & Displays",
    tagline: "Smooth vinyl and retractable roll-up banners for interior marketing and events.",
    description:
      "High-resolution indoor banners provide sharp close-up viewing quality. Available as hanging banners with grommets or as compact pull-up retractable banner stands with carrying bags, they make promoting your business at events fast and convenient.",
    image: "/image/services/banners-displays/jp-exhibition-display.webp",
    gallery: [
      "/image/services/banners-displays/jp-promotional-banner.webp",
      "/image/services/banners-displays/architectural-exhibition-booth.webp",
    ],
    features: [
      "Smooth 13oz non-curl banner vinyl for premium close-range presentation",
      "Sturdy aluminum retractable roll-up hardware with padded travel bag",
      "Quick 30-second setup with no tools required",
      "High-definition 1200 DPI printing captures sharp small text and photography",
    ],
    options: [
      { label: "Style", values: ["Retractable Roll-Up Stand", "Hanging Vinyl Banner with Grommets", "X-Banner Stand"] },
      { label: "Standard Sizes", values: ["33\" x 81\" (Standard)", "36\" x 92\" (Wide)", "48\" x 92\" (Jumbo)"] },
    ],
    applications: ["Exhibition Booths", "Bank & Clinic Lobbies", "Sales Showrooms", "Temporary Event Promotion"],
    relatedSubcategorySlugs: ["fabric-banner", "foam-board", "outdoor-banner"],
  },
  {
    slug: "outdoor-banner",
    title: "Outdoor Banner",
    categorySlug: "banners-displays",
    categoryTitle: "Banners & Displays",
    tagline: "Heavy-duty reinforced vinyl banners engineered to brave rain, wind and sun.",
    description:
      "Built for the unpredictable Canadian outdoors, our heavy-duty exterior banners feature high-tenacity scrim mesh or 15oz blockout vinyl with heat-welded seams and nickel grommets. They resist tearing and fading across seasons.",
    image: "/image/services/banners-displays/mountain-themed-exhibition-booth.webp",
    gallery: [
      "/image/services/banners-displays/jp-promotional-banner.webp",
      "/image/services/large-format-signs/community-yard-signs.webp",
    ],
    features: [
      "15oz heavy-duty scrim vinyl or wind-permeable mesh banner substrate",
      "Heat-welded hems on all four edges for superior tear resistance",
      "Heavy brass grommets spaced every 24 inches for secure bungee or cable tie fastening",
      "UV-inhibited fade-resistant inks tested for outdoor longevity",
    ],
    options: [
      { label: "Material", values: ["15oz Heavy Duty Scrim Vinyl", "18oz Ultra Blockout", "Mesh Wind-Permeable"] },
      { label: "Reinforcement", values: ["Heat-Welded Hems & Grommets", "Rope Sewn Into Hems", "Pole Pockets"] },
    ],
    applications: ["Building Exterior Sale Announcements", "Construction Fence Banners", "Festival Sponsorships", "Sports Field Outfield Signs"],
    relatedSubcategorySlugs: ["fabric-banner", "indoor-banner", "construction-signs-hoarding"],
  },

  /* --- CATEGORY 03: Storefront & Building Signs (3 subcategories) --- */
  {
    slug: "a-frame-signs",
    title: "A-Frame Signs",
    categorySlug: "storefront-building-signs",
    categoryTitle: "Storefront & Building Signs",
    tagline: "Sturdy sidewalk sandwich boards that capture pedestrian and drive-by foot traffic.",
    description:
      "A-frame sidewalk signs provide immediate street-level visibility right outside your business. Available in durable all-weather plastic with ballast-fillable bases or classic black metal frames with slide-in Coroplast graphic inserts for rapid daily updates.",
    image: "/image/services/storefront-building-signs/cafe-a-frame-signs.webp",
    gallery: [
      "/image/services/storefront-building-signs/cafe-entrance-signage.webp",
      "/image/services/large-format-signs/corrugated-signage-showcase.webp",
    ],
    features: [
      "Heavy-duty rustproof frames (Signicade plastic or black powder-coated steel)",
      "Double-sided display panels visible to traffic moving in both directions",
      "Slide-in or screw-mounted interchangeable 4mm Coroplast insert panels",
      "Internal ballast chambers can be filled with dry sand or water for wind stability",
    ],
    options: [
      { label: "Frame Type", values: ["Standard Plastic Signicade (White/Black)", "Deluxe Quick-Change Metal Frame"] },
      { label: "Graphic Size", values: ["24\" x 36\" (Standard)", "24\" x 18\" (Compact)", "32\" x 48\" (Large)"] },
    ],
    applications: ["Cafés & Bakeries Daily Menus", "Retail Sidewalk Promotions", "Valet & Curbside Pickup", "Realtor Open House Directions"],
    relatedSubcategorySlugs: ["coroplast-signs", "lobby-office-signs", "sidewalk-sandwich-board-signs"],
  },
  {
    slug: "coroplast-signs",
    title: "Coroplast Signs",
    categorySlug: "storefront-building-signs",
    categoryTitle: "Storefront & Building Signs",
    tagline: "Economical, weather-resistant fluted plastic signs for temporary and permanent use.",
    description:
      "Coroplast (corrugated polypropylene) is the workhorse of commercial temporary signage. Lightweight, fully waterproof, and cost-effective, it is the ideal choice for exterior directional signs, event notices, parking rules, and insert panels.",
    image: "/image/services/storefront-building-signs/lobby-business-banner.webp",
    gallery: [
      "/image/services/large-format-signs/corrugated-signage-showcase.webp",
      "/image/services/large-format-signs/community-yard-signs.webp",
    ],
    features: [
      "Standard 4mm or rigid 10mm fluted corrugated plastic",
      "100% waterproof and impervious to rain, snow, and moisture",
      "Direct UV flatbed printing with crisp graphics and bright color contrast",
      "Can be mounted with wire step stakes, zip ties, screws, or Velcro",
    ],
    options: [
      { label: "Thickness", values: ["4mm (Standard)", "10mm (Heavy-Duty Rigid)"] },
      { label: "Flute Direction", values: ["Vertical (for Wire Stakes)", "Horizontal"] },
      { label: "Grommets", values: ["Corner Grommets (4)", "None"] },
    ],
    applications: ["Directional Road Signs", "Parking & Towing Warning Signs", "Menu Board Inserts", "Temporary Site Notices"],
    relatedSubcategorySlugs: ["a-frame-signs", "directional-lawn-signs", "election-signs-lawn-signs"],
  },
  {
    slug: "lobby-office-signs",
    title: "Lobby & Office Signs",
    categorySlug: "storefront-building-signs",
    categoryTitle: "Storefront & Building Signs",
    tagline: "Sophisticated interior reception signs, brushed plaques, and dimensional lettering.",
    description:
      "Establish an authoritative, professional corporate environment with custom lobby signs. We craft clear acrylic panels with brushed stainless steel standoffs, 3D laser-cut acrylic letters, and precision vinyl wayfinding plaques.",
    image: "/image/about/facility/jp-office-reception.webp",
    gallery: [
      "/image/services/storefront-building-signs/lobby-business-banner.webp",
      "/image/branding/jp-branding-showcase.webp",
    ],
    features: [
      "Precision laser-cut acrylic, brushed aluminum composite, or PVC dimensional lettering",
      "Sleek architectural brushed metal standoff hardware for dimensional wall float",
      "Custom pantone brand color matching on face or back-painted acrylic",
      "Clean template-guided installation ensures perfect alignment",
    ],
    options: [
      { label: "Material Style", values: ["Acrylic Panel with Standoffs", "3D Cut Letters (No Panel)", "Brushed Metal Composite"] },
      { label: "Hardware", values: ["Brushed Silver Standoffs", "Matte Black Standoffs", "Flush Wall Mount"] },
    ],
    applications: ["Corporate Reception Areas", "Medical & Dental Clinics", "Law Offices & Consultancies", "Executive Boardrooms"],
    relatedSubcategorySlugs: ["a-frame-signs", "coroplast-signs", "adhesive-vinyl-printing"],
  },

  /* --- CATEGORY 04: Vehicle Wraps & Graphics (1 subcategory) --- */
  {
    slug: "truck-decals",
    title: "Truck Decals & Fleet Graphics",
    categorySlug: "vehicle-wraps-graphics",
    categoryTitle: "Vehicle Wraps & Graphics",
    tagline: "Custom vinyl decals, door logos, and fleet lettering for commercial vehicles.",
    description:
      "Upgrade your work vehicles into branded assets with precision-cut vinyl decals and spot graphics. From single pickup door logos to complete fleet matching across vans, box trucks, and trailers, we use premium automotive cast films built to last.",
    image: "/image/hero/vehicle-wrap/jp-branded-box-truck.webp",
    gallery: [
      "/image/hero/vehicle-wrap/jp-colourful-delivery-van.webp",
      "/image/hero/vehicle-wrap/branded-printing-van-office-park.webp",
      "/image/hero/vehicle-wrap/modern-wrapped-van.webp",
    ],
    features: [
      "High-grade automotive cast vinyl designed for compound curves and rivets",
      "UV protective clear overlaminate resists road grime, power washing, and sun fade",
      "Custom packages: door sets, tailgate graphics, and full vehicle sides",
      "Includes regulatory identification (CVOR, USDOT, emergency numbers)",
    ],
    options: [
      { label: "Coverage", values: ["Door Logo Set (2 Doors)", "Partial Vehicle Graphics", "Full Box Truck Sides"] },
      { label: "Finish", values: ["Gloss Protective", "Matte Architectural", "Reflective Commercial"] },
    ],
    applications: ["Plumbers & Electricians Vans", "Courier & Delivery Fleets", "Landscape & Contractor Trucks", "Food Service Vehicles"],
    relatedSubcategorySlugs: ["adhesive-vinyl-printing", "outdoor-banner", "storefront-building-signs"],
  },

  /* --- CATEGORY 05: Real Estate Signage (6 subcategories) --- */
  {
    slug: "directional-lawn-signs",
    title: "Directional / Lawn Signs",
    categorySlug: "real-estate-signage",
    categoryTitle: "Real Estate Signage",
    tagline: "Guide prospective buyers seamlessly from main thoroughfares to your property listing.",
    description:
      "Directional lawn signs are crucial for weekend open houses and new neighborhood listings. Printed on double-sided durable 4mm Coroplast with prominent directional arrows and contact details, they direct traffic efficiently.",
    image: "/image/services/real-estate-signage/open-house-yard-sign.webp",
    gallery: [
      "/image/services/real-estate-signage/open-house-signage.webp",
      "/image/services/real-estate-signage/modern-real-estate-signage.webp",
    ],
    features: [
      "High-visibility directional arrows pointing left, right, or straight",
      "Pre-fluted for standard galvanized H-stakes or heavy beefy stakes",
      "High-contrast color layouts ensure legibility from moving cars",
      "Bundle packs available for multi-intersection open house coverage",
    ],
    options: [
      { label: "Size", values: ["24\" x 18\" (Standard)", "24\" x 12\" (Compact Arrow)", "24\" x 24\" (Square)"] },
      { label: "Stake Option", values: ["Standard H-Stake Included", "Heavy-Duty Beefy Stake", "No Stakes (Sign Only)"] },
    ],
    applications: ["Open House Traffic Direction", "New Subdivision Route Guidance", "Auction & Estate Sales"],
    relatedSubcategorySlugs: ["for-sale-signs", "open-house-signs", "riders"],
  },
  {
    slug: "for-sale-signs",
    title: "For Sale Signs",
    categorySlug: "real-estate-signage",
    categoryTitle: "Real Estate Signage",
    tagline: "The centerpiece of residential real estate marketing that commands neighborhood respect.",
    description:
      "A bold, high-quality For Sale yard sign signals an experienced, professional listing agent. Fabricated on weather-resistant 4mm or 10mm Coroplast or aluminum composite with standard post holes, these signs hold up in all seasons.",
    image: "/image/services/real-estate-signage/modern-for-sale-sign.webp",
    gallery: [
      "/image/services/real-estate-signage/modern-home-for-sale-open-house.webp",
      "/image/services/real-estate-signage/luxury-open-house-signage.webp",
    ],
    features: [
      "Direct UV printing produces vivid agent portraiture and crisp brokerage branding",
      "Standard agent post hole spacing pre-punched for swift installation",
      "Double-sided visibility to capture traffic traveling in both street directions",
      "Grommeted holes at top and bottom for modular rider attachment",
    ],
    options: [
      { label: "Dimensions", values: ["24\" x 32\" (Standard Post)", "24\" x 36\" (Tall Post)", "32\" x 36\" (Estate Size)"] },
      { label: "Material", values: ["4mm Coroplast", "10mm Heavy Coroplast", "Aluminum Composite (ACM)"] },
    ],
    applications: ["Residential Home Sales", "Commercial Property Leases", "Land & Farm Acreage Postings"],
    relatedSubcategorySlugs: ["directional-lawn-signs", "riders", "real-estate-feature-sheets"],
  },
  {
    slug: "open-house-signs",
    title: "Open House Signs",
    categorySlug: "real-estate-signage",
    categoryTitle: "Real Estate Signage",
    tagline: "Catch weekend home shoppers with dynamic, high-contrast open house displays.",
    description:
      "Drive immediate weekend showings with branded Open House A-frames and yard stakes. Designed with bold time callouts, agent phone numbers, and optional dry-erase lamination for reusable date and hour marking.",
    image: "/image/services/real-estate-signage/open-house-signage.webp",
    gallery: [
      "/image/services/real-estate-signage/modern-home-for-sale-open-house.webp",
      "/image/services/real-estate-signage/open-house-yard-sign.webp",
    ],
    features: [
      "Vibrant high-contrast layouts readable from 100+ feet away",
      "Available with reusable dry-erase date/time sections",
      "Lightweight folding A-frame or rigid wire-stake formats for easy car trunk storage",
      "Full custom brokerage branding (colors, logo, agent photo)",
    ],
    options: [
      { label: "Format", values: ["Wire-Stake Coroplast Signs", "Metal Folding A-Frame", "Signicade Plastic Sandwich Board"] },
      { label: "Time Field", values: ["Pre-printed Time Slots", "Dry-Erase Reusable Section"] },
    ],
    applications: ["Weekend Public Open Houses", "Broker Preview Showings", "New Development VIP Tours"],
    relatedSubcategorySlugs: ["directional-lawn-signs", "for-sale-signs", "real-estate-signs-open-houses"],
  },
  {
    slug: "real-estate-feature-sheets",
    title: "Real Estate Feature Sheets",
    categorySlug: "real-estate-signage",
    categoryTitle: "Real Estate Signage",
    tagline: "Glossy, high-end property brochures that buyers take home and share with family.",
    description:
      "Complement your exterior signage with exquisite multi-page feature sheets and property brochures. Printed on thick, coated cover stock with rich saturated photography, detailed floor plans, and comprehensive property highlights.",
    image: "/image/services/marketing-materials/real-estate-property-brochure.webp",
    gallery: [
      "/image/services/marketing-materials/premium-hospitality-brochure.webp",
      "/image/services/marketing-materials/elegant-real-estate-marketing.webp",
    ],
    features: [
      "100lb or 120lb premium gloss or matte text and cover paper stocks",
      "Precision bi-fold, tri-fold, or 4-page booklet formats with crisp scoring",
      "Offset quality photo reproduction showcases architectural finishes in full beauty",
      "Fast next-day turnaround available for urgent weekend open houses",
    ],
    options: [
      { label: "Format", values: ["2-Page Double Sided (8.5\" x 11\")", "4-Page Bi-Fold (11\" x 17\" folded)", "Tri-Fold Brochure"] },
      { label: "Paper Stock", values: ["100lb Gloss Text", "100lb Silk Cover", "12pt Heavy Cardstock"] },
    ],
    applications: ["High-End Property Showings", "Architectural Home Tours", "Condo Sales Centers", "Listing Presentation Folders"],
    relatedSubcategorySlugs: ["for-sale-signs", "open-house-signs", "table-tent-cards"],
  },
  {
    slug: "riders",
    title: "Sign Riders",
    categorySlug: "real-estate-signage",
    categoryTitle: "Real Estate Signage",
    tagline: "Modular top-and-bottom sign riders to highlight listing status and property features.",
    description:
      "Keep existing yard posts current without replacing the main sign. Our riders attach effortlessly using standard metal sign clips and display key selling points like 'Sold Over Asking', 'Pool', 'Coming Soon', or agent cell numbers.",
    image: "/image/services/real-estate-signage/modern-real-estate-signage.webp",
    gallery: [
      "/image/services/real-estate-signage/modern-for-sale-sign.webp",
      "/image/services/real-estate-signage/upscale-suburban-open-house.webp",
    ],
    features: [
      "Standard 24\" x 6\" or 32\" x 6\" dimensions compatible with all agent posts",
      "Durable 4mm Coroplast or 0.040\" aluminum",
      "Pre-drilled mounting holes for top-mounted or bottom-hanging installation",
      "Available individually or in money-saving agent starter bundles",
    ],
    options: [
      { label: "Common Titles", values: ["Sold / Sold Firm", "Just Listed", "Pool / Finished Basement", "Coming Soon", "Custom Text"] },
      { label: "Material", values: ["4mm Coroplast (White)", "Aluminum (High Durability)"] },
    ],
    applications: ["Main Post Status Updates", "Special Feature Announcements", "Agent Team Co-branding"],
    relatedSubcategorySlugs: ["for-sale-signs", "open-house-signs", "directional-lawn-signs"],
  },
  {
    slug: "real-estate-signs-open-houses",
    title: "Real Estate Signs & Open Houses Signage",
    categorySlug: "real-estate-signage",
    categoryTitle: "Real Estate Signage",
    tagline: "Comprehensive signage packages designed specifically for busy real estate brokerages.",
    description:
      "A complete, unified signage package containing everything an active listing agent needs: main yard sign, directional arrow signs, modular riders, and a sturdy open house sidewalk A-frame, all coordinated under your brokerage guidelines.",
    image: "/image/services/real-estate-signage/modern-home-for-sale-open-house.webp",
    gallery: [
      "/image/services/real-estate-signage/luxury-open-house-signage.webp",
      "/image/services/real-estate-signage/upscale-suburban-open-house.webp",
    ],
    features: [
      "Full brand continuity across all listing hardware and substrates",
      "Discounted bulk package pricing for newly licensed agents and broker teams",
      "Fast turnaround on reorders and agent name replacements",
      "Meets all regional real estate board advertising guidelines in Ontario",
    ],
    options: [
      { label: "Package Tier", values: ["Agent Starter Pack (1 Main + 3 Directionals)", "Pro Pack (2 Main + 6 Directionals + 4 Riders)", "Brokerage Fleet Pack"] },
    ],
    applications: ["Brokerage Onboarding Kits", "Team Branding Upgrades", "Seasonal Campaign Refresh"],
    relatedSubcategorySlugs: ["for-sale-signs", "open-house-signs", "directional-lawn-signs"],
  },

  /* --- CATEGORY 06: Marketing Materials (2 subcategories) --- */
  {
    slug: "table-tent-cards",
    title: "Table Tent Cards",
    categorySlug: "marketing-materials",
    categoryTitle: "Marketing Materials",
    tagline: "Freestanding tabletop promotional displays for restaurants, hotels and events.",
    description:
      "Capture customer attention right where they sit. Our table tent cards are printed on sturdy cardstock with interlocking die-cut bases or pre-scored folds, making them perfect for drink specials, dessert menus, QR code ordering, and conference tables.",
    image: "/image/products/table-tent-cards/upscale-restaurant-table-tent-cards.webp",
    gallery: [
      "/image/services/marketing-materials/real-estate-property-brochure.webp",
      "/image/services/windows-wall-floor/restaurant-table-vinyl-wrap.webp",
    ],
    features: [
      "Self-standing interlocking base requires no external plastic holder",
      "Sturdy 14pt or 16pt coated cardstock with protective gloss or matte varnish",
      "Double-sided messaging allows two distinct promotional campaigns per card",
      "Shipped flat for compact storage and assembled in seconds",
    ],
    options: [
      { label: "Style", values: ["Interlocking Die-Cut Base", "Pre-scored Tri-Fold", "Flat Acrylic Insert"] },
      { label: "Coating", values: ["Gloss Aqueous (Wipeable)", "Matte Satin (Understated)"] },
    ],
    applications: ["Restaurant Cocktail & Dessert Menus", "Hotel Guest Room Service Displays", "Corporate Seminar Agendas", "Bar QR Code Ordering"],
    relatedSubcategorySlugs: ["wedding-invitations", "restaurant-table-wrapping", "real-estate-feature-sheets"],
  },
  {
    slug: "wedding-invitations",
    title: "Wedding Invitations & Stationery",
    categorySlug: "marketing-materials",
    categoryTitle: "Marketing Materials",
    tagline: "Bespoke invitation suites, botanical programs and luxury event paper goods.",
    description:
      "Celebrate life's memorable occasions with invitation suites printed on fine cotton, textured linen, and heavyweight card stocks. From modern botanical suites to foil-accented save-the-dates, we offer personalized attention to detail for your special day.",
    image: "/image/products/wedding-invitations/botanical-wedding-invitations.webp",
    gallery: [
      "/image/services/marketing-materials/premium-hospitality-brochure.webp",
      "/image/products/business-cards/natural-paper-business-cards.webp",
    ],
    features: [
      "Luxurious paper stocks including 100lb Classic Linen, 14pt Cotton Uncoated, and Pearl Shimmer",
      "Matching ensemble options: RSVP cards, details cards, envelope addressing, and menus",
      "Rich pigment printing with crisp delicate script and botanical watercolor reproduction",
      "Optional rounded corners, wax seals, and custom die-cut arch shapes",
    ],
    options: [
      { label: "Suite Package", values: ["Invitation + RSVP Enclosure", "Full 4-Piece Suite", "Invitation Only"] },
      { label: "Paper Type", values: ["Classic Textured Linen", "Heavyweight Smooth Matte", "Natural Uncoated Cotton"] },
    ],
    applications: ["Wedding Ceremonies & Receptions", "Anniversary Galas", "Corporate Award Banquets", "Formal Fundraiser Invitations"],
    relatedSubcategorySlugs: ["table-tent-cards", "linen-business-cards", "real-estate-feature-sheets"],
  },

  /* --- CATEGORY 07: Business Cards (6 subcategories) --- */
  {
    slug: "standard-business-cards",
    title: "Standard Business Cards",
    categorySlug: "business-cards",
    categoryTitle: "Business Cards",
    tagline: "High-quality, dependable everyday business cards at exceptional value.",
    description:
      "The classic corporate business card, perfected. Printed on thick 14pt or 16pt cardstock with crisp full-color printing on both sides. Available with subtle matte or high-gloss UV coating for lasting everyday durability.",
    image: "/image/products/business-cards/natural-paper-business-cards.webp",
    gallery: [
      "/image/products/business-cards/matte-vs-silk-business-cards.webp",
      "/image/products/business-cards/luxury-business-card-finishes.webp",
    ],
    features: [
      "Durable 14pt or 16pt premium cardstock base",
      "Vibrant high-resolution full-color printing (Front & Back included)",
      "Protective coating options to prevent scuffing in wallets",
      "Standard 3.5\" x 2\" format with optional smooth rounded corners",
    ],
    options: [
      { label: "Paper Stock", values: ["14pt Premium Cardstock", "16pt Extra Thick Cardstock"] },
      { label: "Coating", values: ["Matte Aqueous", "Gloss UV Coat"] },
      { label: "Quantity", values: ["250", "500", "1,000", "2,500"] },
    ],
    applications: ["Corporate Team Member Cards", "Sales Representative Handouts", "Store Appointment Reminder Cards"],
    relatedSubcategorySlugs: ["silk-matte-business-cards", "14-pt-uncoated-cards", "linen-business-cards"],
  },
  {
    slug: "silk-matte-business-cards",
    title: "Silk / Matte Business Cards",
    categorySlug: "business-cards",
    categoryTitle: "Business Cards",
    tagline: "Silky smooth laminate coating that exudes contemporary elegance and understated luxury.",
    description:
      "Silk-laminated business cards feature an ultra-smooth, velvety surface that immediately signals superior craftsmanship. The protective silk film renders the cards water and tear-resistant while giving colors a refined, non-glare finish.",
    image: "/image/products/business-cards/matte-vs-silk-business-cards.webp",
    gallery: [
      "/image/products/business-cards/luxury-business-card-finishes.webp",
      "/image/products/business-cards/luxury-business-card-studio-still-life.webp",
    ],
    features: [
      "16pt premium card stock laminated on both sides to 19pt thickness",
      "Velvety matte silk texture that feels remarkably soft to the touch",
      "Significantly increased resistance to creasing, moisture, and corner fraying",
      "Optional Spot UV highlights to make logos and text pop against the matte background",
    ],
    options: [
      { label: "Finish", values: ["Silk Matte Lamination", "Silk + Spot UV Highlighting"] },
      { label: "Corners", values: ["Standard Square", "Rounded Corners (1/4\" Radius)"] },
      { label: "Quantity", values: ["250", "500", "1,000", "2,500"] },
    ],
    applications: ["Design Studios & Creative Agencies", "Real Estate Executives", "High-End Retail Boutiques"],
    relatedSubcategorySlugs: ["standard-business-cards", "14-pt-uncoated-cards", "plastic-business-cards"],
  },
  {
    slug: "magnet-business-cards",
    title: "Magnet Business Cards",
    categorySlug: "business-cards",
    categoryTitle: "Business Cards",
    tagline: "Keep your contact info on client refrigerators, filing cabinets and metal desks.",
    description:
      "Unlike paper cards that get filed away in drawers, magnetic business cards stay visible on refrigerators, metal shelving, and toolboxes for years. Ideal for home service contractors, emergency services, realtors, and medical clinics.",
    image: "/image/products/business-cards/magnetic-business-cards.webp",
    gallery: [
      "/image/products/business-cards/natural-paper-business-cards.webp",
      "/image/products/business-cards/luxury-business-card-finishes.webp",
    ],
    features: [
      "Durable 17mil or 25mil commercial magnetic backing",
      "High-gloss UV laminated front face wipes clean effortlessly",
      "Standard 3.5\" x 2\" or custom calendar and schedule shapes",
      "Exceptional multi-year customer retention value",
    ],
    options: [
      { label: "Thickness", values: ["17mil (Indoor Fridge Magnet)", "25mil (Heavy-Duty Magnetic)"] },
      { label: "Quantity", values: ["100", "250", "500", "1,000"] },
    ],
    applications: ["Plumbers, Electricians & HVAC Contractors", "Veterinary & Family Medical Clinics", "Pizza Delivery & Takeout Services"],
    relatedSubcategorySlugs: ["standard-business-cards", "table-tent-cards", "truck-decals"],
  },
  {
    slug: "14-pt-uncoated-cards",
    title: "14 PT Uncoated Cards",
    categorySlug: "business-cards",
    categoryTitle: "Business Cards",
    tagline: "Clean, natural paper texture that is comfortable to write on and hold.",
    description:
      "Crafted from 14pt uncoated stock, these cards offer a warm, natural paper texture. Because they have no coating, they absorb ink readily, making them ideal for loyalty stamp cards, appointment reminders, and minimalist branding.",
    image: "/image/products/business-cards/luxury-business-card-studio-still-life.webp",
    gallery: [
      "/image/products/business-cards/natural-paper-business-cards.webp",
      "/image/products/business-cards/linen-business-cards.webp",
    ],
    features: [
      "14pt premium natural uncoated paper fiber",
      "Pen-friendly surface allows effortless handwritten notes and rubber stamps",
      "Natural warm white or crisp bright white options",
      "Subtle, organic aesthetic favored by boutique brands and coffee roasters",
    ],
    options: [
      { label: "Paper Shade", values: ["Bright White Uncoated", "Natural Warm White Uncoated"] },
      { label: "Quantity", values: ["250", "500", "1,000", "2,500"] },
    ],
    applications: ["Appointment Cards for Salons & Clinics", "Coffee Shop Loyalty Cards", "Artisan Workshops"],
    relatedSubcategorySlugs: ["standard-business-cards", "linen-business-cards", "silk-matte-business-cards"],
  },
  {
    slug: "linen-business-cards",
    title: "Linen Business Cards",
    categorySlug: "business-cards",
    categoryTitle: "Business Cards",
    tagline: "Woven fabric texture that conveys heritage, prestige, and timeless quality.",
    description:
      "Featuring an embossed cross-hatch woven linen pattern, these cards offer a tactile feel. Favored by law firms, financial advisors, CPAs, and luxury consultants who value established tradition and timeless elegance.",
    image: "/image/products/business-cards/linen-business-cards.webp",
    gallery: [
      "/image/products/business-cards/luxury-business-card-finishes.webp",
      "/image/products/wedding-invitations/botanical-wedding-invitations.webp",
    ],
    features: [
      "100lb Classic Linen cover stock with woven cross-hatch texture",
      "Contains 30% post-consumer recycled fiber for environmental sustainability",
      "Refined tactile impression that sets you apart during executive meetings",
      "Available in classic Solar White or Natural Cream paper tones",
    ],
    options: [
      { label: "Paper Color", values: ["Solar White Linen", "Natural Cream Linen"] },
      { label: "Quantity", values: ["250", "500", "1,000", "2,500"] },
    ],
    applications: ["Law Firms & Legal Consultancies", "Financial Advisors & Wealth Managers", "Architects & Heritage Brands"],
    relatedSubcategorySlugs: ["14-pt-uncoated-cards", "wedding-invitations", "silk-matte-business-cards"],
  },
  {
    slug: "plastic-business-cards",
    title: "Plastic Business Cards",
    categorySlug: "business-cards",
    categoryTitle: "Business Cards",
    tagline: "100% waterproof, tear-proof, futuristic cards that customers never throw away.",
    description:
      "Crafted from 20pt transparent, frosted, or solid white plastic, these cards are completely impervious to water and tearing. Their high-tech look and durability make them popular for tech innovators, luxury nightspots, and VIP membership clubs.",
    image: "/image/products/business-cards/plastic-business-cards.webp",
    gallery: [
      "/image/products/business-cards/luxury-business-card-finishes.webp",
      "/image/products/business-cards/matte-vs-silk-business-cards.webp",
    ],
    features: [
      "Heavy 20pt rigid PVC plastic (credit card density)",
      "100% waterproof, smudge-proof, and impossible to tear",
      "Striking frosted, ultra-clear, or solid white finishes",
      "Rounded corners included standard for sleek handling safety",
    ],
    options: [
      { label: "Plastic Type", values: ["Frosted Translucent", "Clear Transparent", "Opaque Solid White"] },
      { label: "Thickness", values: ["20pt Commercial", "30pt Credit Card Heavyweight"] },
      { label: "Quantity", values: ["100", "250", "500", "1,000"] },
    ],
    applications: ["VIP Membership & Access Cards", "High-Tech & Software Startups", "Water Sports & Marine Businesses", "Luxury Nightlife & Clubs"],
    relatedSubcategorySlugs: ["silk-matte-business-cards", "standard-business-cards", "magnetic-business-cards"],
  },

  /* --- CATEGORY 08: Large Format & Signs (3 subcategories) --- */
  {
    slug: "construction-signs-hoarding",
    title: "Construction Signs & Hoarding",
    categorySlug: "large-format-signs",
    categoryTitle: "Large Format & Signs",
    tagline: "Site safety signage, development project boards, and architectural hoarding graphics.",
    description:
      "Comply with municipal safety regulations and generate buzz for upcoming developments. We manufacture heavy-duty aluminum composite signs, perimeter plywood hoarding wraps, and mesh fence banners that endure tough Canadian job site conditions.",
    image: "/image/services/large-format-signs/construction-site-hoardings.webp",
    gallery: [
      "/image/services/large-format-signs/condo-construction-hoardings.webp",
      "/image/services/large-format-signs/urban-construction-hoardings.webp",
    ],
    features: [
      "Rigid 3mm or 6mm Aluminum Composite Panels (Dibond/ACM) or high-density MDO wood",
      "Full perimeter anti-graffiti and UV-barrier overlaminates",
      "High-contrast safety notice signs meeting Ontario OHSA and WSIB guidelines",
      "Seamless graphic alignment across multi-sheet architectural hoarding runs",
    ],
    options: [
      { label: "Substrate", values: ["3mm Aluminum Composite (ACM)", "1/2\" Crezon MDO Wood", "Mesh Wind Fence Banner"] },
      { label: "Protection", values: ["Standard UV Overlaminate", "Anti-Graffiti Washable Laminate"] },
    ],
    applications: ["Condominium & Commercial Development Sites", "General Contractor Job Site Safety Signs", "Demolition & Environmental Notices"],
    relatedSubcategorySlugs: ["election-signs-lawn-signs", "outdoor-banner", "storefront-building-signs"],
  },
  {
    slug: "election-signs-lawn-signs",
    title: "Election Signs / Lawn Signs",
    categorySlug: "large-format-signs",
    categoryTitle: "Large Format & Signs",
    tagline: "High-volume, rapid-turnaround corrugated signs for political campaigns and trade promos.",
    description:
      "When you need hundreds or thousands of signs distributed quickly, our high-speed UV flatbed presses deliver. Printed on durable 4mm fluted Coroplast with galvanized wire step stakes, these signs deliver maximum neighborhood reach per dollar.",
    image: "/image/services/large-format-signs/community-yard-signs.webp",
    gallery: [
      "/image/services/large-format-signs/corrugated-signage-showcase.webp",
      "/image/services/real-estate-signage/open-house-yard-sign.webp",
    ],
    features: [
      "Cost-effective tiered volume pricing on quantities from 50 to 5,000+ units",
      "Fast production cycles meet strict campaign candidate deadlines",
      "Vivid high-saturation colors that remain bold under direct sunlight and rain",
      "Standard 24\" x 16\" or 24\" x 18\" sizes with galvanized wire H-stakes included",
    ],
    options: [
      { label: "Dimensions", values: ["24\" x 18\" (Standard)", "24\" x 16\" (Budget Friendly)", "24\" x 24\" (Square)"] },
      { label: "Stakes Included", values: ["Yes - Galvanized H-Stakes Included", "No Stakes (Signs Only)"] },
    ],
    applications: ["Municipal, Provincial & Federal Election Campaigns", "Roofing, Paving & Contractor Yard Ads", "School & Community Event Announcements"],
    relatedSubcategorySlugs: ["construction-signs-hoarding", "directional-lawn-signs", "coroplast-signs"],
  },
  {
    slug: "sidewalk-sandwich-board-signs",
    title: "Sidewalk & Sandwich Board Signs",
    categorySlug: "large-format-signs",
    categoryTitle: "Large Format & Signs",
    tagline: "Rugged double-sided outdoor sidewalk signs built to withstand heavy pedestrian traffic.",
    description:
      "Capture the attention of passersby with dependable, double-sided sidewalk boards. Featuring weighted all-weather plastic bases or heavy-gauge powder-coated steel frames, our sandwich boards offer quick graphic changeability for seasonal sales and promotions.",
    image: "/image/services/large-format-signs/corrugated-signage-showcase.webp",
    gallery: [
      "/image/services/large-format-signs/urban-construction-hoardings.webp",
      "/image/services/storefront-building-signs/cafe-a-frame-signs.webp",
    ],
    features: [
      "Sturdy heavy-duty plastic or black steel frames with anti-tip geometry",
      "Interchangeable 4mm Coroplast insert panels slide into place in seconds",
      "Wind-resistant ballast options ensure stability in blustery Canadian weather",
      "Convenient molded carrying handles for easy daily morning and evening transport",
    ],
    options: [
      { label: "Frame Model", values: ["Standard White Plastic A-Frame", "Heavy Black Powder-Coated Metal Frame"] },
      { label: "Inserts", values: ["2 Double-Sided Coroplast Inserts Included", "Frame Only (No Graphics)"] },
    ],
    applications: ["Downtown Retail Boutiques", "Plaza Walkway Promotions", "Gyms, Spas & Salons", "Car Dealership Lot Wayfinding"],
    relatedSubcategorySlugs: ["a-frame-signs", "coroplast-signs", "community-yard-signs"],
  },
];

/* ==========================================================================
   LOOKUP HELPERS & LEGACY URL MAPPING
   ========================================================================== */

export function getServiceCategoryBySlug(slug: string): ServiceCategory | undefined {
  return serviceCategories.find((cat) => cat.slug.toLowerCase() === slug.toLowerCase());
}

export function getSubcategoryBySlug(slug: string): SubcategoryService | undefined {
  return subcategoryServices.find((sub) => sub.slug.toLowerCase() === slug.toLowerCase());
}

// Map legacy 24 slugs from previous implementation to their corresponding new subcategory
const legacySlugMapping: Record<string, string> = {
  "calendars": "table-tent-cards",
  "cards": "standard-business-cards",
  "brochure": "real-estate-feature-sheets",
  "menu": "table-tent-cards",
  "folder": "real-estate-feature-sheets",
  "invoice": "standard-business-cards",
  "label": "adhesive-vinyl-printing",
  "tickets": "standard-business-cards",
  "diary": "real-estate-feature-sheets",
  "doorholder": "directional-lawn-signs",
  "boards": "coroplast-signs",
  "invites": "wedding-invitations",
  "window": "adhesive-vinyl-printing",
  "wall": "adhesive-vinyl-printing",
  "lttering": "adhesive-vinyl-printing",
  "banner": "outdoor-banner",
  "sign": "coroplast-signs",
  "signage": "for-sale-signs",
  "decore": "lobby-office-signs",
  "vehicle": "truck-decals",
  "channel": "lobby-office-signs",
  "led": "lobby-office-signs",
  "popup": "indoor-banner",
  "pvc": "coroplast-signs",
  "flyers-brochures-postcards": "real-estate-feature-sheets",
  "take-out-laminated-menus": "table-tent-cards",
  "custom-stickers-labels": "adhesive-vinyl-printing",
  "storefront-signage-letters": "lobby-office-signs"
};

export function resolveAnyServiceSlug(slug: string): {
  type: "category" | "subcategory";
  category?: ServiceCategory;
  subcategory?: SubcategoryService;
} | undefined {
  const category = getServiceCategoryBySlug(slug);
  if (category) return { type: "category", category };

  const subcategory = getSubcategoryBySlug(slug);
  if (subcategory) return { type: "subcategory", subcategory };

  const mappedSubSlug = legacySlugMapping[slug.toLowerCase()];
  if (mappedSubSlug) {
    const legacySub = getSubcategoryBySlug(mappedSubSlug);
    if (legacySub) return { type: "subcategory", subcategory: legacySub };
  }

  return undefined;
}

export function getAllServiceSlugs(): string[] {
  const categorySlugs = serviceCategories.map((c) => c.slug);
  const subcategorySlugs = subcategoryServices.map((s) => s.slug);
  const legacySlugs = Object.keys(legacySlugMapping);
  
  return Array.from(new Set([...categorySlugs, ...subcategorySlugs, ...legacySlugs]));
}

// Compatibility exports
export const services: Service[] = subcategoryServices.map((s) => ({
  slug: s.slug,
  title: s.title,
  category: s.categoryTitle,
  tagline: s.tagline,
  description: s.description,
  image: s.image,
  art: s.slug,
  features: s.features,
  uses: s.applications,
  specs: s.options.map(o => ({ label: o.label, value: o.values.join(", ") })),
  priceNote: "Contact for custom quote",
  popular: true,
}));

export const categories: string[] = serviceCategories.map(c => c.title);

export const printingServices: Service[] = services.filter(
  s => s.category === "Business Cards" || s.category === "Marketing Materials"
);

export const signsServices: Service[] = services.filter(
  s => s.category !== "Business Cards" && s.category !== "Marketing Materials"
);

export function getServiceBySlug(slug: string) {
  const resolved = resolveAnyServiceSlug(slug);
  if (!resolved) return undefined;
  if (resolved.type === "subcategory" && resolved.subcategory) {
    const s = resolved.subcategory;
    return {
      slug: s.slug,
      title: s.title,
      category: s.categoryTitle,
      tagline: s.tagline,
      description: s.description,
      image: s.image,
      art: s.slug,
      features: s.features,
      uses: s.applications,
      specs: s.options.map(o => ({ label: o.label, value: o.values.join(", ") })),
      priceNote: "Contact for custom quote",
      popular: true,
      gallery: s.gallery,
      options: s.options,
      relatedSubcategorySlugs: s.relatedSubcategorySlugs
    };
  }
  if (resolved.type === "category" && resolved.category) {
    const c = resolved.category;
    return {
      slug: c.slug,
      title: c.title,
      category: "Main Category",
      tagline: c.tagline,
      description: c.description,
      image: c.heroImage,
      art: c.slug,
      features: c.benefits,
      uses: c.applications,
      specs: [],
      priceNote: "Contact for custom quote",
      popular: true,
      gallery: c.gallery,
      subcategories: c.subcategories
    };
  }
  return undefined;
}
