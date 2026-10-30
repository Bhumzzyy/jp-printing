export type ProductOption = {
  id: string;
  label: string;
  values: string[];
  defaultValue?: string;
};

export type Product = {
  slug: string;
  name: string;
  category: string;
  tagline: string;
  description: string;
  primaryImage: string;
  gallery: { src: string; alt: string; label?: string }[];
  badge?: string;
  features: string[];
  specs: { label: string; value: string }[];
  options?: ProductOption[];
  isConfigurable?: boolean;
};

export const products: Product[] = [
  {
    slug: "business-cards",
    name: "Custom Business Cards",
    category: "Business Cards",
    tagline: "Premium cards crafted to make lasting first impressions in Ontario.",
    description:
      "Your business card is often the primary physical artifact that remains with a prospective client after a meeting. We offer a comprehensive suite of luxury paper stocks and modern synthetic materials, from ultra-velvety silk lamination and tactile woven linen to heavy 14pt natural cotton and waterproof plastic.",
    primaryImage: "/image/products/business-cards/luxury-business-card-finishes.webp",
    gallery: [
      { src: "/image/products/business-cards/luxury-business-card-finishes.webp", alt: "Luxury Business Card Finish Collection", label: "Finish Overview" },
      { src: "/image/products/business-cards/matte-vs-silk-business-cards.webp", alt: "Silk Laminated and Matte Business Cards", label: "Silk / Matte" },
      { src: "/image/products/business-cards/linen-business-cards.webp", alt: "Classic Textured Linen Business Cards", label: "Classic Linen" },
      { src: "/image/products/business-cards/natural-paper-business-cards.webp", alt: "Natural Uncoated Paper Business Cards", label: "Natural 14pt" },
      { src: "/image/products/business-cards/magnetic-business-cards.webp", alt: "Magnetic Business Cards for Refrigerators", label: "Magnetic" },
      { src: "/image/products/business-cards/plastic-business-cards.webp", alt: "Waterproof Rigid Plastic Cards", label: "Plastic" },
      { src: "/image/products/business-cards/luxury-business-card-studio-still-life.webp", alt: "Business Card Studio Still Life", label: "Studio Detail" },
    ],
    badge: "Most Popular",
    isConfigurable: true,
    features: [
      "Standard North American 3.5\" x 2\" dimensions or custom sizes",
      "Rich CMYK offset printing with deep saturated blacks and fine typography",
      "Six specialized stock types suited for every industry and aesthetic",
      "Optional rounded corners (1/4\" radius) and spot UV gloss accents",
    ],
    specs: [
      { label: "Standard Size", value: "3.5\" x 2.0\"" },
      { label: "Cardstock Weights", value: "14pt, 16pt, 19pt (laminated), 20pt (plastic)" },
      { label: "Finishes Available", value: "Silk Matte, High Gloss UV, Uncoated, Linen Texture" },
      { label: "Minimum Order", value: "100 Units" },
    ],
    options: [
      {
        id: "type",
        label: "Card Type",
        values: [
          "Standard Premium Cardstock",
          "Silk / Matte Laminated",
          "Magnetic Refrigerator Cards",
          "14 PT Uncoated Natural",
          "Classic Woven Linen",
          "Waterproof Plastic",
        ],
        defaultValue: "Standard Premium Cardstock",
      },
      {
        id: "finish",
        label: "Finish / Paper Stock",
        values: [
          "Smooth Matte Finish (No Glare)",
          "High Gloss UV Protective Coat",
          "Velvety Silk Lamination",
          "Tactile Cross-Hatch Linen",
          "Frosted Translucent Plastic",
        ],
        defaultValue: "Smooth Matte Finish (No Glare)",
      },
      {
        id: "quantity",
        label: "Quantity",
        values: ["250 Cards", "500 Cards", "1,000 Cards", "2,500 Cards", "Custom Quantity"],
        defaultValue: "500 Cards",
      },
      {
        id: "corners",
        label: "Corner Style",
        values: ["Standard Square Corners", "Rounded Corners (1/4\" Radius)"],
        defaultValue: "Standard Square Corners",
      },
      {
        id: "sides",
        label: "Printing Sides",
        values: ["Double-Sided (Front & Back)", "Single-Sided (Front Only)"],
        defaultValue: "Double-Sided (Front & Back)",
      },
    ],
  },
  {
    slug: "wedding-invitations",
    name: "Wedding Invitations & Stationery Suites",
    category: "Wedding Invitations",
    tagline: "Elegant botanical suites, RSVP enclosures, and luxury event stationery.",
    description:
      "Craft an enchanting introduction to your wedding day. Printed on fine linen, cotton, and smooth heavy cover stocks with options for delicate floral botanical motifs, custom envelope addressing, and coordinating RSVP reply cards.",
    primaryImage: "/image/products/wedding-invitations/botanical-wedding-invitations.webp",
    gallery: [
      { src: "/image/products/wedding-invitations/botanical-wedding-invitations.webp", alt: "Botanical Wedding Invitation Suite", label: "Full Suite" },
      { src: "/image/products/business-cards/natural-paper-business-cards.webp", alt: "Fine Cotton Uncoated Paper Sample", label: "Paper Detail" },
      { src: "/image/services/marketing-materials/premium-hospitality-brochure.webp", alt: "Enclosure and Program Mockup", label: "Stationery" },
    ],
    badge: "Artisanal",
    isConfigurable: true,
    features: [
      "Heavyweight 100lb Classic Linen, 14pt Cotton, or 16pt Silk Cover",
      "Matching ensemble options: RSVP cards, details enclosures, menus, and place cards",
      "Crisp typography and high-fidelity watercolor botanical illustration reproduction",
      "Complete suite packages or individual custom printed cards",
    ],
    specs: [
      { label: "Standard Invitation Size", value: "5.0\" x 7.0\" (A7)" },
      { label: "RSVP Card Size", value: "3.5\" x 5.0\" (A1)" },
      { label: "Matching Envelopes", value: "Available in White, Cream & Kraft" },
      { label: "Paper Weights", value: "100lb Cover to 32pt Double Thick" },
    ],
    options: [
      {
        id: "type",
        label: "Suite Configuration",
        values: ["4-Piece Complete Suite", "Invitation + RSVP Card", "Invitation Only", "Save the Date Cards"],
        defaultValue: "Invitation + RSVP Card",
      },
      {
        id: "paper",
        label: "Paper Stock",
        values: ["Classic Textured Linen", "Heavy Smooth Matte", "Natural Cotton Uncoated"],
        defaultValue: "Classic Textured Linen",
      },
      {
        id: "quantity",
        label: "Estimated Quantity",
        values: ["50 Sets", "100 Sets", "150 Sets", "200 Sets", "Custom"],
        defaultValue: "100 Sets",
      },
    ],
  },
  {
    slug: "table-tent-cards",
    name: "Table Tent & Dining Cards",
    category: "Table Tent Cards",
    tagline: "Freestanding promotional displays for restaurants, hotels and reception desks.",
    description:
      "Showcase seasonal dishes, craft cocktail selections, dessert menus, or QR codes right in front of dining guests. Built with sturdy scoring and self-standing interlocking bases that require no separate acrylic stands.",
    primaryImage: "/image/products/table-tent-cards/upscale-restaurant-table-tent-cards.webp",
    gallery: [
      { src: "/image/products/table-tent-cards/upscale-restaurant-table-tent-cards.webp", alt: "Upscale Dining Tabletop Cards", label: "Table Display" },
      { src: "/image/services/windows-wall-floor/restaurant-table-vinyl-wrap.webp", alt: "Dining Room Environment Context", label: "Interior Fit" },
    ],
    isConfigurable: true,
    features: [
      "Durable 14pt or 16pt coated cardstock with wipeable protective coating",
      "Die-cut interlocking base holds its shape without tape or glue",
      "Double-sided messaging allows two distinct promotions in one display",
      "Shipped flat for compact storage and assembled in seconds",
    ],
    specs: [
      { label: "Standard Sizes", value: "4\" x 6\" (Per Side) or 5\" x 7\" (Per Side)" },
      { label: "Stock", value: "14pt / 16pt Gloss or Matte Coated" },
      { label: "Assembly", value: "Interlocking Die-Cut Base or Pre-Scored Tent" },
    ],
    options: [
      {
        id: "size",
        label: "Card Size",
        values: ["4\" x 6\" Vertical Tent", "5\" x 7\" Large Tent", "4\" x 4\" Square Tent"],
        defaultValue: "4\" x 6\" Vertical Tent",
      },
      {
        id: "finish",
        label: "Coating",
        values: ["Gloss Aqueous (Wipeable)", "Matte Satin (Anti-Glare)"],
        defaultValue: "Gloss Aqueous (Wipeable)",
      },
      {
        id: "quantity",
        label: "Quantity",
        values: ["50 Units", "100 Units", "250 Units", "500 Units"],
        defaultValue: "100 Units",
      },
    ],
  },
  {
    slug: "banners-displays",
    name: "Promotional & Exhibition Banners",
    category: "Banners & Displays",
    tagline: "Vibrant indoor, outdoor and retractable displays for commercial visibility.",
    description:
      "Engineered for visual prominence at trade shows, sales floors, building facades, and athletic events. We offer retractable pull-up banners with aluminum stands, heavy 15oz reinforced exterior vinyl, and non-glare tension fabric backdrops.",
    primaryImage: "/image/services/banners-displays/jp-promotional-banner.webp",
    gallery: [
      { src: "/image/services/banners-displays/jp-promotional-banner.webp", alt: "Promotional Banner Display", label: "Banner Stand" },
      { src: "/image/services/banners-displays/jp-exhibition-display.webp", alt: "Trade Show Exhibition Display", label: "Expo Booth" },
      { src: "/image/services/banners-displays/jp-showcase-displays.webp", alt: "Rigid Foam Board Showcase", label: "Foam Displays" },
      { src: "/image/services/banners-displays/architectural-exhibition-booth.webp", alt: "Architectural Booth Graphics", label: "Trade Show" },
    ],
    badge: "Versatile",
    isConfigurable: true,
    features: [
      "High-density 1200 DPI wide-format printing for crisp text and vivid color",
      "Available with heat-welded hems, brass grommets, and pole pockets",
      "Retractable units include sturdy aluminum base and padded travel bag",
      "UV-stable outdoor vinyl resists water, rain, wind, and sun fade",
    ],
    specs: [
      { label: "Retractable Stand Size", value: "33\" x 81\" (Standard)" },
      { label: "Custom Outdoor Sizes", value: "Any dimension up to 10ft wide seamless" },
      { label: "Turnaround Time", value: "2–4 Business Days" },
    ],
    options: [
      {
        id: "style",
        label: "Banner Format",
        values: ["Retractable Pull-Up Stand with Carry Bag", "Hanging Vinyl Banner with Grommets", "Tension Fabric Display"],
        defaultValue: "Retractable Pull-Up Stand with Carry Bag",
      },
      {
        id: "environment",
        label: "Intended Environment",
        values: ["Indoor Trade Show / Retail", "Heavy-Duty Outdoor All-Weather"],
        defaultValue: "Indoor Trade Show / Retail",
      },
    ],
  },
  {
    slug: "vehicle-wraps",
    name: "Commercial Vehicle Graphics & Decals",
    category: "Vehicle Graphics",
    tagline: "Turn commercial fleet vehicles, vans and trucks into 24/7 mobile billboards.",
    description:
      "Transform service vans, contractor pickup trucks, box trucks, and delivery vehicles into powerful local advertising. We apply premium cast wrap films with protective overlaminates designed to withstand Canadian road salts, car washes, and harsh weather.",
    primaryImage: "/image/hero/vehicle-wrap/jp-branded-box-truck.webp",
    gallery: [
      { src: "/image/hero/vehicle-wrap/jp-branded-box-truck.webp", alt: "JP Branded Commercial Box Truck", label: "Box Truck" },
      { src: "/image/hero/vehicle-wrap/jp-colourful-delivery-van.webp", alt: "Full Van Commercial Wrap", label: "Delivery Van" },
      { src: "/image/hero/vehicle-wrap/branded-printing-van-office-park.webp", alt: "Branded Service Fleet Van", label: "Fleet Van" },
      { src: "/image/hero/vehicle-wrap/modern-wrapped-van.webp", alt: "Modern Van Wrap at Corporate Facility", label: "Modern Wrap" },
    ],
    badge: "High ROI",
    isConfigurable: true,
    features: [
      "Premium cast vinyl film with air-release channels for bubble-free application",
      "UV and road-salt resistant gloss or matte protective overlaminate",
      "Turnkey service: computer mockups, vinyl printing, and expert installation",
      "Protects original paintwork and removes cleanly when decommissioned",
    ],
    specs: [
      { label: "Vehicle Types", value: "Vans, Pickup Trucks, Box Trucks, Trailers" },
      { label: "Durability Rating", value: "5–7 Years Outdoor Commercial" },
      { label: "Installation", value: "Professional Installation in Ontario" },
    ],
    options: [
      {
        id: "coverage",
        label: "Coverage Level",
        values: ["Door Logo Decals & Lettering", "Partial Wrap (Sides + Rear)", "Full Commercial Vehicle Wrap"],
        defaultValue: "Partial Wrap (Sides + Rear)",
      },
      {
        id: "vehicle",
        label: "Vehicle Type",
        values: ["Cargo / Sprinter Van", "Pickup Truck", "Box Truck (14ft–26ft)", "Service Trailer"],
        defaultValue: "Cargo / Sprinter Van",
      },
    ],
  },
  {
    slug: "storefront-signs",
    name: "Storefront & Architectural Signs",
    category: "Storefront Signs",
    tagline: "High-impact exterior and entrance signage designed for maximum visibility.",
    description:
      "Establish an authoritative presence along Ontario plazas, streets, and business parks. We design and assemble exterior building fascia signs, 3D laser-cut acrylic dimensional lettering, brushed aluminum entrance plaques, and sidewalk A-frame boards.",
    primaryImage: "/image/hero/jp-modern-storefront.webp",
    gallery: [
      { src: "/image/hero/jp-modern-storefront.webp", alt: "Modern Commercial Storefront Signage", label: "Fascia & 3D Letters" },
      { src: "/image/hero/modern-charcoal-storefront.webp", alt: "Modern Charcoal Storefront Entrance", label: "Retail Entrance" },
      { src: "/image/services/storefront-building-signs/cafe-a-frame-signs.webp", alt: "Sidewalk A-Frame Signs", label: "Sidewalk Signs" },
      { src: "/image/about/facility/jp-office-reception.webp", alt: "Interior Lobby Corporate Signage", label: "Lobby Plaque" },
    ],
    isConfigurable: true,
    features: [
      "Engineered for outdoor durability and seasonal Canadian temperature swings",
      "Aluminum composite (ACM), acrylic, and PVC dimensional substrates",
      "Professional site measurement and digital visual proofs prior to fabrication",
      "Clean installation with hidden mounting hardware",
    ],
    specs: [
      { label: "Materials", value: "Aluminum Composite, Acrylic, High-Density PVC" },
      { label: "Mounting", value: "Flush Wall Mount, Standoffs, or Frame" },
      { label: "Warranty", value: "Commercial Grade Outdoor Durability" },
    ],
    options: [
      {
        id: "type",
        label: "Sign Type",
        values: ["Exterior Storefront Fascia Sign", "3D Acrylic Dimensional Letters", "Sidewalk A-Frame Board", "Interior Lobby Sign"],
        defaultValue: "Exterior Storefront Fascia Sign",
      },
    ],
  },
  {
    slug: "real-estate-signs",
    name: "Real Estate Yard Signs & Open House Displays",
    category: "Real Estate Signs",
    tagline: "Durable corrugated and aluminum lawn signs for top agents and brokerages.",
    description:
      "Make property listings unmistakable with weather-resistant 4mm & 10mm Coroplast yard signs, hanging riders, directional open house arrows, and glossy property showcase sheets. Designed to adhere to Canadian real estate advertising guidelines.",
    primaryImage: "/image/services/real-estate-signage/modern-home-for-sale-open-house.webp",
    gallery: [
      { src: "/image/services/real-estate-signage/modern-home-for-sale-open-house.webp", alt: "Modern Home For Sale Yard Sign and Open House A-Frame", label: "Listing Display" },
      { src: "/image/services/real-estate-signage/modern-for-sale-sign.webp", alt: "Modern For Sale Yard Sign", label: "For Sale Sign" },
      { src: "/image/services/real-estate-signage/open-house-yard-sign.webp", alt: "Open House Directional Yard Sign", label: "Directional" },
      { src: "/image/services/real-estate-signage/modern-real-estate-signage.webp", alt: "Listing Sign with Rider Post", label: "Rider Display" },
    ],
    badge: "Agent Choice",
    isConfigurable: true,
    features: [
      "Weatherproof 4mm or 10mm fluted Coroplast with galvanized wire H-stakes",
      "Double-sided high-contrast printing visible from passing vehicles",
      "Modular riders attach to yard posts with standard clips",
      "Fast turnaround on agent starter packages and bulk brokerage reorders",
    ],
    specs: [
      { label: "Yard Sign Dimensions", value: "24\" x 32\" or 24\" x 36\"" },
      { label: "Directional Size", value: "24\" x 18\" with Arrow" },
      { label: "Rider Size", value: "24\" x 6\" or 32\" x 6\"" },
    ],
    options: [
      {
        id: "package",
        label: "Sign Package",
        values: ["Main For Sale Sign (Double-Sided)", "Open House Directional Bundle (5 Signs)", "Modular Rider (Sold, Pool, Just Listed)", "Agent Complete Starter Pack"],
        defaultValue: "Main For Sale Sign (Double-Sided)",
      },
      {
        id: "material",
        label: "Material Thickness",
        values: ["4mm Fluted Coroplast (Standard)", "10mm Heavy-Duty Coroplast", "Aluminum Composite (Rigid Long-Term)"],
        defaultValue: "4mm Fluted Coroplast (Standard)",
      },
    ],
  },
  {
    slug: "window-wall-graphics",
    name: "Window & Wall Architectural Vinyl Graphics",
    category: "Window & Wall Graphics",
    tagline: "Custom vinyl lettering, frosted privacy films, and full-coverage wall murals.",
    description:
      "Transform glass storefronts, interior office partitions, and retail feature walls into captivating visual experiences. We produce high-precision plotted vinyl lettering, translucent etched glass privacy film, and seamless high-tack wall murals.",
    primaryImage: "/image/services/windows-wall-floor/cafe-window-vinyl-graphics.webp",
    gallery: [
      { src: "/image/services/windows-wall-floor/cafe-window-vinyl-graphics.webp", alt: "Café Storefront Window Vinyl Graphics", label: "Window Decals" },
      { src: "/image/services/windows-wall-floor/botanical-cafe-interior-graphics.webp", alt: "Botanical Café Interior Wall Murals", label: "Wall Murals" },
      { src: "/image/services/windows-wall-floor/adhesive-vinyl-printing.webp", alt: "Adhesive Vinyl Printing Workshop", label: "Vinyl Workshop" },
      { src: "/image/services/windows-wall-floor/storefront-floor-wayfinding.webp", alt: "Storefront Floor Graphics & Wayfinding", label: "Floor Wayfinding" },
    ],
    badge: "Architectural",
    isConfigurable: true,
    features: [
      "Precision computer cut lettering, logos, and intricate decorative patterns",
      "Perforated one-way vision film allows visibility from inside while showing graphics outside",
      "Frosted privacy vinyl creates sleek conference room and office partitions",
      "Non-slip certified floor decals engineered for high commercial foot traffic",
    ],
    specs: [
      { label: "Film Options", value: "Cast Vinyl, Frosted Etched Glass, Perforated 60/40" },
      { label: "Durability", value: "3–7 Years Exterior / 10+ Years Interior" },
      { label: "Adhesive Types", value: "Removable, Permanent, Low-Tac Static Cling" },
    ],
    options: [
      {
        id: "type",
        label: "Application Type",
        values: ["Storefront Window Decals", "Frosted Glass Privacy Film", "Full-Wall Commercial Mural", "Durable Floor Decals"],
        defaultValue: "Storefront Window Decals",
      },
      {
        id: "material",
        label: "Finish / Opacity",
        values: ["Opaque Cut Vinyl", "Translucent Frosted Etched", "One-Way Perforated Vision Film"],
        defaultValue: "Opaque Cut Vinyl",
      },
    ],
  },
  {
    slug: "construction-hoardings",
    name: "Construction Hoardings & Development Signage",
    category: "Construction Hoardings",
    tagline: "Heavy-duty perimeter site graphics, development billboards, and safety hoardings.",
    description:
      "Turn construction barriers and site perimeters into premier marketing billboards for upcoming condominium developments, retail builds, and public projects. Printed on weather-tested aluminum composite panels with graffiti-resistant overlaminate.",
    primaryImage: "/image/services/large-format-signs/construction-site-hoardings.webp",
    gallery: [
      { src: "/image/services/large-format-signs/construction-site-hoardings.webp", alt: "Commercial Construction Site Hoarding", label: "Perimeter Hoarding" },
      { src: "/image/services/large-format-signs/condo-construction-hoardings.webp", alt: "Condominium Development Hoarding Signage", label: "Condo Project" },
      { src: "/image/services/large-format-signs/urban-construction-hoardings.webp", alt: "Urban Transit and Sidewalk Hoarding", label: "Urban Transit" },
      { src: "/image/services/large-format-signs/corrugated-signage-showcase.webp", alt: "Corrugated Safety & Warning Signs", label: "Site Safety" },
    ],
    badge: "Heavy Duty",
    isConfigurable: true,
    features: [
      "Mounted on 3mm or 4mm rigid Aluminum Composite Material (ACM) panels",
      "UV-cure inks with protective anti-graffiti and abrasion-resistant overlaminate",
      "Modular panel system aligns seamlessly across hundreds of linear feet",
      "Compliant with Ontario municipal construction and safety hoarding bylaws",
    ],
    specs: [
      { label: "Standard Panel Size", value: "4ft x 8ft Panels (Seamless tiling)" },
      { label: "Substrate", value: "3mm / 4mm Aluminum Composite Panel (ACM)" },
      { label: "Lamination", value: "Anti-Graffiti UV Matte or Gloss" },
    ],
    options: [
      {
        id: "length",
        label: "Perimeter Scope",
        values: ["Small Project (Under 50 Linear Ft)", "Standard Site (50–200 Linear Ft)", "Major Development (200+ Linear Ft)"],
        defaultValue: "Standard Site (50–200 Linear Ft)",
      },
      {
        id: "finish",
        label: "Protective Coating",
        values: ["Standard Matte UV Overlaminate", "Heavy-Duty Anti-Graffiti Lamination"],
        defaultValue: "Heavy-Duty Anti-Graffiti Lamination",
      },
    ],
  },
  {
    slug: "marketing-brochures",
    name: "Marketing Brochures & Presentation Folders",
    category: "Marketing Materials",
    tagline: "High-impact tri-folds, saddle-stitched booklets, and corporate presentation suites.",
    description:
      "Present your company capabilities, luxury real estate listings, and service portfolios with exceptional print fidelity. We offer heavy text and cover stocks, precision scoring, metallic foil touches, and pocket presentation folders with business card slits.",
    primaryImage: "/image/services/marketing-materials/real-estate-property-brochure.webp",
    gallery: [
      { src: "/image/services/marketing-materials/real-estate-property-brochure.webp", alt: "Luxury Real Estate Property Brochure", label: "Property Brochure" },
      { src: "/image/services/marketing-materials/premium-hospitality-brochure.webp", alt: "Premium Hospitality & Resort Folio", label: "Hospitality Folio" },
      { src: "/image/services/marketing-materials/elegant-real-estate-marketing.webp", alt: "Corporate Presentation Folder with Inserts", label: "Folder Suite" },
    ],
    isConfigurable: true,
    features: [
      "Available in 100lb gloss/matte book, 80lb text, and heavy 14pt cover weights",
      "Precision folding styles: Tri-Fold, Z-Fold, Half-Fold, Gate-Fold, and French Fold",
      "Multi-page saddle-stitched booklets and presentation pocket folders",
      "Vibrant high-pigment offset printing with accurate brand colour reproduction",
    ],
    specs: [
      { label: "Standard Sizes", value: "8.5\" x 11\" (Flat), 8.5\" x 14\", 11\" x 17\" (Bi-Fold)" },
      { label: "Paper Weights", value: "100lb Gloss/Matte Book, 14pt Cardstock" },
      { label: "Coating", value: "Aqueous Gloss, Satin Matte, Soft-Touch" },
    ],
    options: [
      {
        id: "format",
        label: "Document Format",
        values: ["Tri-Fold Brochure (8.5\" x 11\")", "Half-Fold Bi-Fold (8.5\" x 11\")", "Multi-Page Saddle-Stitched Booklet", "9\" x 12\" Pocket Presentation Folder"],
        defaultValue: "Tri-Fold Brochure (8.5\" x 11\")",
      },
      {
        id: "stock",
        label: "Paper Weight & Finish",
        values: ["100lb Gloss Book (Standard)", "100lb Silk/Matte Book", "14pt Heavy Cover with Satin Coat"],
        defaultValue: "100lb Gloss Book (Standard)",
      },
      {
        id: "quantity",
        label: "Quantity",
        values: ["250 Copies", "500 Copies", "1,000 Copies", "2,500 Copies", "5,000 Copies"],
        defaultValue: "500 Copies",
      },
    ],
  },
];

export function getProductBySlug(slug: string): Product | undefined {
  return products.find((p) => p.slug.toLowerCase() === slug.toLowerCase());
}

export function getAllProductSlugs(): string[] {
  return products.map((p) => p.slug);
}

