export type ProjectCategory =
  | "All"
  | "Storefront Signs"
  | "Window Graphics"
  | "Vehicle Wraps"
  | "Banners"
  | "Real Estate"
  | "Printed Materials"
  | "Installations";

export type ProjectItem = {
  id: string;
  title: string;
  category: ProjectCategory;
  image: string;
  description: string;
  substrate: string;
  location: string;
  application: string;
};

export const projectCategories: ProjectCategory[] = [
  "All",
  "Storefront Signs",
  "Window Graphics",
  "Vehicle Wraps",
  "Banners",
  "Real Estate",
  "Printed Materials",
  "Installations",
];

export const projectItems: ProjectItem[] = [
  {
    id: "jp-modern-storefront",
    title: "Commercial Retail Storefront Fascia Sign",
    category: "Storefront Signs",
    image: "/image/hero/jp-modern-storefront.webp",
    description: "Exterior storefront signage featuring high-contrast 3D dimensional lettering, architectural entry branding, and coordinated sidewalk wayfinding.",
    substrate: "Aluminum Composite & Laser-Cut Acrylic",
    location: "Ontario, Canada",
    application: "Commercial Retail Facility",
  },
  {
    id: "storefront-window-installation",
    title: "Storefront Window Graphic Installation",
    category: "Installations",
    image: "/image/projects/installations/storefront-window-graphics-installation.webp",
    description: "On-site wet application of large-format printed vinyl window film, ensuring smooth edge adhesion and crystal-clear bubble-free optical clarity.",
    substrate: "High-Performance Calendered Window Vinyl",
    location: "Ontario, Canada",
    application: "Professional Installation Service",
  },
  {
    id: "jp-branded-box-truck",
    title: "Commercial Box Truck Fleet Graphics",
    category: "Vehicle Wraps",
    image: "/image/hero/vehicle-wrap/jp-branded-box-truck.webp",
    description: "Full commercial box truck side and cab graphics with UV protective overlaminate to withstand heavy daily highway transit.",
    substrate: "Cast Vinyl Wrap with Gloss Overlaminate",
    location: "Ontario, Canada",
    application: "Commercial Delivery Fleet",
  },
  {
    id: "luxury-business-cards",
    title: "Luxury Business Card Finishes Collection",
    category: "Printed Materials",
    image: "/image/products/business-cards/luxury-business-card-finishes.webp",
    description: "Bespoke business cards featuring silk lamination, spot UV varnish, and premium paper textures for distinctive tactile identity.",
    substrate: "16pt & 19pt Silk Laminated Cover Stock",
    location: "Ontario, Canada",
    application: "Executive Stationery Suite",
  },
  {
    id: "botanical-cafe-interior",
    title: "Botanical Café Interior Graphics & Wall Murals",
    category: "Window Graphics",
    image: "/image/services/windows-wall-floor/botanical-cafe-interior-graphics.webp",
    description: "High-resolution architectural vinyl murals and botanical window graphics creating an inviting, nature-inspired dining atmosphere.",
    substrate: "Matte Removable Wall Film & Window Vinyl",
    location: "Ontario, Canada",
    application: "Hospitality & Restaurant Interior",
  },
  {
    id: "modern-home-for-sale",
    title: "Modern Residential Real Estate Signage Package",
    category: "Real Estate",
    image: "/image/services/real-estate-signage/modern-home-for-sale-open-house.webp",
    description: "Complete real estate property marketing set including heavy-duty For Sale post sign, directional open house A-frame, and modular rider clips.",
    substrate: "4mm & 10mm Coroplast with Weather-Proof Post",
    location: "Ontario, Canada",
    application: "Residential Property Listing",
  },
  {
    id: "jp-colourful-delivery-van",
    title: "Full Commercial Delivery Van Wrap",
    category: "Vehicle Wraps",
    image: "/image/hero/vehicle-wrap/jp-colourful-delivery-van.webp",
    description: "Vibrant multi-panel vehicle graphics applied smoothly over complex automotive curves, door handles, and window recesses.",
    substrate: "Premium Cast Wrap Film with Air-Release",
    location: "Ontario, Canada",
    application: "Fleet Logistics & Mobile Promotion",
  },
  {
    id: "promotional-exhibition-banner",
    title: "Modern Trade Show Banner & Display System",
    category: "Banners",
    image: "/image/services/banners-displays/jp-promotional-banner.webp",
    description: "Freestanding retractable pull-up banner display featuring high-saturation CMYK printing on anti-curl blockout vinyl.",
    substrate: "13oz Non-Curl Smooth Polypropylene Film",
    location: "Ontario, Canada",
    application: "Trade Shows & Corporate Seminars",
  },
  {
    id: "construction-site-hoardings",
    title: "Condominium Construction Perimeter Hoardings",
    category: "Storefront Signs",
    image: "/image/services/large-format-signs/construction-site-hoardings.webp",
    description: "Large-format exterior site hoarding panels providing site safety compliance while marketing the upcoming condominium development.",
    substrate: "Aluminum Composite (ACM) with Anti-Graffiti Laminate",
    location: "Ontario, Canada",
    application: "Urban Construction Site",
  },
  {
    id: "storefront-vinyl-installation",
    title: "Commercial Window Film Application in Action",
    category: "Installations",
    image: "/image/projects/installations/storefront-vinyl-installation.webp",
    description: "Skilled technician aligning and trimming perimeter graphics on exterior retail glazing with specialized application squeegees.",
    substrate: "Perforated One-Way Vision & Opaque Cut Vinyl",
    location: "Ontario, Canada",
    application: "Retail Storefront Renovation",
  },
  {
    id: "restaurant-table-vinyl-wrap",
    title: "High-Traffic Restaurant Table Wrap Application",
    category: "Window Graphics",
    image: "/image/services/windows-wall-floor/restaurant-table-vinyl-wrap.webp",
    description: "Custom printed tabletop surface graphics laminated with scratch-resistant, wipeable commercial grade hospitality film.",
    substrate: "Cast Architectural Surface Film & Matte Laminate",
    location: "Ontario, Canada",
    application: "Dining Room Furniture Refurbishment",
  },
  {
    id: "botanical-wedding-invitation-suite",
    title: "Botanical Wedding Invitation & Stationery Suite",
    category: "Printed Materials",
    image: "/image/products/wedding-invitations/botanical-wedding-invitations.webp",
    description: "Multi-piece formal wedding stationery featuring delicate botanical botanical motifs printed on 100lb Classic Linen cardstock.",
    substrate: "100lb Textured Linen & Uncoated Cotton",
    location: "Ontario, Canada",
    application: "Formal Event Paper Goods",
  },
  {
    id: "modern-charcoal-storefront",
    title: "Modern Charcoal Architectural Storefront Entrance",
    category: "Storefront Signs",
    image: "/image/hero/modern-charcoal-storefront.webp",
    description: "Contemporary storefront entrance featuring charcoal fascia panels, bold entryway typography, and clear glass wayfinding.",
    substrate: "Architectural Metal & Exterior Cut Vinyl",
    location: "Ontario, Canada",
    application: "Retail Commercial Plaza",
  },
  {
    id: "modern-wrapped-fleet-van",
    title: "Corporate Transit Van Graphic Wrap",
    category: "Vehicle Wraps",
    image: "/image/hero/vehicle-wrap/modern-wrapped-van.webp",
    description: "Sleek commercial van branding designed for high visibility across parking facilities, corporate office parks, and highways.",
    substrate: "High-Performance Automotive Wrap Film",
    location: "Ontario, Canada",
    application: "Corporate Service Transit",
  },
  {
    id: "real-estate-property-brochure",
    title: "Luxury Real Estate Property Showcase Brochure",
    category: "Printed Materials",
    image: "/image/services/marketing-materials/real-estate-property-brochure.webp",
    description: "Exquisite 4-page property feature sheet with saturated full-bleed architectural photography and crisp floor plan diagrams.",
    substrate: "100lb Gloss Book with Aqueous Gloss Coat",
    location: "Ontario, Canada",
    application: "High-End Residential Open House",
  },
  {
    id: "mountain-themed-exhibition-booth",
    title: "Mountain Themed Trade Show Exhibition Booth",
    category: "Banners",
    image: "/image/services/banners-displays/mountain-themed-exhibition-booth.webp",
    description: "Full modular trade show booth backwall display utilizing high-definition tension fabric graphics with seamless frame integration.",
    substrate: "Dye-Sublimated Stretch Polyester Fabric",
    location: "Ontario, Canada",
    application: "Convention & Trade Show Exhibition",
  },
];

