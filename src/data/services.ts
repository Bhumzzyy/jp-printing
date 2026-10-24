import type { LucideIcon } from "lucide-react";
import {
  BookOpen,
  Building2,
  Calendar,
  Car,
  CreditCard,
  DoorOpen,
  Flag,
  FolderOpen,
  Heart,
  Inbox,
  Lightbulb,
  Mail,
  Monitor,
  PanelTop,
  Signpost,
  Sticker,
  Store,
  Sun,
  Ticket,
  Type,
  Utensils,
} from "lucide-react";

export type ServiceCategory = "Printing" | "Signs";

export type ServiceSpec = {
  label: string;
  value: string;
};

export type Service = {
  slug: string;
  title: string;
  category: ServiceCategory;
  tagline: string;
  description: string;
  art: string;
  icon: LucideIcon;
  popular?: boolean;
  features: string[];
  specs: ServiceSpec[];
  uses: string[];
  priceNote: string;
};

export const services: Service[] = [
  /* ---------------------------- PRINTING ---------------------------- */
  {
    slug: "calendars",
    title: "Calendars",
    category: "Printing",
    tagline: "Keep your brand on the wall all year round.",
    description:
      "Custom printed calendars put your business in front of customers every single day of the year. Choose from wall calendars, desk calendars and calendar cards, all printed on heavy stock and available with wire-o binding, saddle stitching or a simple hang hole. Add your logo, contact details, key dates and imagery for a practical promotional piece people actually keep.",
    art: "calendar",
    icon: Calendar,
    popular: true,
    features: [
      "Wall, desk and calendar-card formats",
      "Wire-o, saddle-stitch or hang-hole finishing",
      "Full-colour printing on 100lb text to 14pt cover stock",
      "Optional gloss or matte lamination for durability",
      "Pre-printed or custom monthly grids",
    ],
    specs: [
      { label: "Popular sizes", value: "8.5×11in, 11×17in, A4 desk" },
      { label: "Paper", value: "100–130lb gloss or matte text" },
      { label: "Binding", value: "Wire-o, saddle-stitch, hang hole" },
      { label: "Colour", value: "Full colour, one or both sides" },
      { label: "Minimum run", value: "From 100 pieces" },
    ],
    uses: [
      "Year-end client gifts",
      "Real estate & insurance promotions",
      "Fundraising & school calendars",
      "Corporate branded giveaways",
    ],
    priceNote: "Volume pricing available from 100 to 10,000+ copies.",
  },
  {
    slug: "flyers-brochures-postcards",
    title: "Flyers, Brochures & Post Cards",
    category: "Printing",
    tagline: "The workhorse of everyday marketing.",
    description:
      "Flyers, brochures and post cards are the most cost-effective way to spread the word about your business, event or special offer. From single-panel flyers to tri-fold brochures and folded post cards, we print on a range of stocks with optional lamination. Ideal for door-to-door campaigns, in-store handouts, direct mail and trade shows.",
    art: "flyers",
    icon: Inbox,
    popular: true,
    features: [
      "Single, bi-fold and tri-fold formats",
      "Range of stocks from 100lb text to 16pt cover",
      "Gloss, matte or soft-touch lamination",
      "Full-colour, double-sided printing",
      "Direct-mail ready post card sizes",
    ],
    specs: [
      { label: "Popular sizes", value: "4×6in, 5.5×8.5in, 8.5×11in, 8.5×14in" },
      { label: "Paper", value: "100–16pt gloss, matte or uncoated" },
      { label: "Folds", value: "None, roll, tri-fold, Z-fold, gate fold" },
      { label: "Finishing", value: "Lamination, scoring, die-cut" },
      { label: "Minimum run", value: "From 100 pieces" },
    ],
    uses: [
      "Grand-opening announcements",
      "Direct mail campaigns",
      "Event promotion & leafleting",
      "Restaurant & retail offers",
    ],
    priceNote: "Best value at 500, 1,000 and 2,500 quantity breaks.",
  },
  {
    slug: "take-out-laminated-menus",
    title: "Take Out & Laminated Menus",
    category: "Printing",
    tagline: "Durable menus built for the dinner rush.",
    description:
      "Showcase your food and prices with menus designed to last. We print take-out menus on sturdy stock and laminate them for wipe-clean durability, making them perfect for high-traffic restaurants, cafes and catering. Available in single or multi-page formats with custom sizing to fit your brand and your table tops.",
    art: "menu",
    icon: Utensils,
    popular: true,
    features: [
      "Wipe-clean matte or gloss lamination",
      "Single-page, bi-fold and multi-page options",
      "Heavy card stock for everyday handling",
      "Custom sizes and folding layouts",
      "Low-cost reprints when prices change",
    ],
    specs: [
      { label: "Popular sizes", value: "8.5×11in, 8.5×14in, 11×17in" },
      { label: "Stock", value: "14pt–16pt cover, laminated" },
      { label: "Lamination", value: "Gloss or matte, both sides" },
      { label: "Pages", value: "1 to 8+ pages (saddle-stitched)" },
      { label: "Minimum run", value: "From 50 menus" },
    ],
    uses: [
      "Restaurant dine-in menus",
      "Take-out & delivery menus",
      "Cafe, bar & food truck lists",
      "Catering & event packages",
    ],
    priceNote: "Fast turnaround for seasonal price updates.",
  },
  {
    slug: "lawn-signs-feather-flags",
    title: "Lawn Signs & Feather Flags",
    category: "Printing",
    tagline: " roadside visibility that gets you noticed.",
    description:
      "Lawn signs and feather flags are a fast, affordable way to capture roadside attention. Printed on corrugated plastic (coroplast) with ground stakes for lawn use, or as tall feather and teardrop flags for events and storefronts. Weather-resistant and reusable, they are a favourite for real estate, elections, sales and grand openings.",
    art: "lawn-sign",
    icon: Signpost,
    popular: true,
    features: [
      "Coroplast corflute lawn signs with H-stakes",
      "Feather, teardrop and rectangular flags",
      "Weather & UV-resistant inks for outdoor use",
      "Single or double-sided printing",
      "Optional frames, poles and cross bases",
    ],
    specs: [
      { label: "Popular sizes", value: "24×18in, 24×36in, flags to 11.5ft" },
      { label: "Material", value: "4mm corrugated plastic (coroplast)" },
      { label: "Mounting", value: "H-stake, wire frame, cross base" },
      { label: "Durability", value: "Outdoor, weather & UV resistant" },
      { label: "Minimum run", value: "From 1 sign" },
    ],
    uses: [
      "Real estate open houses",
      "Election & campaign signage",
      "Sidewalk & roadside promotions",
      "Events, fairs & grand openings",
    ],
    priceNote: "Single-sign orders welcome with same-week turnaround.",
  },
  {
    slug: "business-cards-stationery",
    title: "Business Cards & Stationery",
    category: "Printing",
    tagline: "First impressions that fit in a pocket.",
    description:
      "A professional business card is still one of the strongest networking tools you can carry. We print business cards on a wide range of premium stocks including matte, silk, soft-touch, linen and metallic finishes, with optional spot UV and rounded corners. Complete your identity with matching letterhead, compliment slips and notecards.",
    art: "business-cards",
    icon: CreditCard,
    popular: true,
    features: [
      "Standard, silk, matte, soft-touch & linen stocks",
      "14pt, 16pt and 17pt premium weights",
      "Spot UV, foil and rounded-corner options",
      "Matching letterhead & compliment slips",
      "Full-colour, double-sided printing",
    ],
    specs: [
      { label: "Card size", value: "3.5×2in (standard)" },
      { label: "Weight", value: "14pt – 17pt cover" },
      { label: "Finishes", value: "Matte, gloss, silk, soft-touch, linen" },
      { label: "Extras", value: "Spot UV, foil, rounded corners" },
      { label: "Minimum run", value: "From 100 cards" },
    ],
    uses: [
      "Networking & sales teams",
      "Branded company stationery",
      "Trade shows & events",
      "Appointment & loyalty cards",
    ],
    priceNote: "Premium finishes available with low minimums.",
  },
  {
    slug: "stickers-labels",
    title: "Stickers & Labels",
    category: "Printing",
    tagline: "Stick your brand anywhere.",
    description:
      "From product labels to promotional decals, stickers are a small but mighty branding tool. We produce die-cut stickers, roll labels, sheet labels and static-cling labels on paper, vinyl and clear materials with gloss or matte finishes. Waterproof vinyl options make them suitable for outdoor and product use.",
    art: "stickers",
    icon: Sticker,
    popular: true,
    features: [
      "Die-cut, kiss-cut, sheet and roll formats",
      "Paper, clear, white and waterproof vinyl",
      "Gloss, matte and transparent finishes",
      "Permanent, removable and static-cling adhesives",
      "Full-colour, any custom shape",
    ],
    specs: [
      { label: "Formats", value: "Sheets, rolls, individual die-cuts" },
      { label: "Materials", value: "Paper, vinyl, clear, BOPP" },
      { label: "Finish", value: "Gloss, matte, transparent" },
      { label: "Adhesive", value: "Permanent, removable, static cling" },
      { label: "Minimum run", value: "From 100 stickers" },
    ],
    uses: [
      "Product & packaging labels",
      "Branded giveaway stickers",
      "Seals, packaging & envelopes",
      "Window & laptop decals",
    ],
    priceNote: "Roll pricing for ongoing product labelling.",
  },
  {
    slug: "presentation-folders",
    title: "Presentation Folders",
    category: "Printing",
    tagline: "Present your business like a pro.",
    description:
      "Presentation folders keep documents organised while putting your brand front and centre. Perfect for proposals, kits, portfolios and trade-show handouts, our folders are printed on heavy card stock with optional business-card slits, gloss or matte lamination and custom die-cut shapes to make a polished impression.",
    art: "folder",
    icon: FolderOpen,
    features: [
      "Two-pocket folders with optional card slits",
      "Heavy 14pt–16pt card stock construction",
      "Gloss, matte or soft-touch lamination",
      "Custom die-cut shapes and sizes",
      "Full-colour inside and out",
    ],
    specs: [
      { label: "Fits", value: "Letter & A4 documents" },
      { label: "Stock", value: "14pt – 16pt card stock" },
      { label: "Pockets", value: "Two-pocket, with or without slits" },
      { label: "Finishing", value: "Lamination, die-cut, scoring" },
      { label: "Minimum run", value: "From 100 folders" },
    ],
    uses: [
      "Sales & marketing kits",
      "Proposals & portfolios",
      "Trade-show handouts",
      "Welcome & onboarding packs",
    ],
    priceNote: "Pair with matching business cards for a full kit.",
  },
  {
    slug: "ncr-envelopes",
    title: "NCR & Envelopes",
    category: "Printing",
    tagline: "Business forms and mailers that work as hard as you do.",
    description:
      "NCR (carbonless) forms are essential for invoices, receipts, delivery notes, order pads and log sheets — producing duplicate copies without carbon paper. We print multi-part NCR sets in 2, 3 or 4 colours, bound into pads or loose sets. Complement them with printed envelopes in a range of sizes and window styles.",
    art: "ncr",
    icon: Mail,
    features: [
      "2, 3 and 4-part carbonless sets",
      "White, yellow, pink and blue copy sheets",
      "Pads, loose sets or booklets with stubs",
      "Sequential numbering & custom fields",
      "Matching printed envelopes",
    ],
    specs: [
      { label: "Parts", value: "2, 3 or 4-part NCR" },
      { label: "Copy colours", value: "White, canary, pink, blue" },
      { label: "Formats", value: "Pads, sets, books, sheets" },
      { label: "Envelope sizes", value: "#9, #10, A4, A6, window" },
      { label: "Minimum run", value: "From 100 sets" },
    ],
    uses: [
      "Invoices & receipts",
      "Delivery & order pads",
      "Job & service logs",
      "Direct-mail envelopes",
    ],
    priceNote: "Numbering and perforation available as add-ons.",
  },
  {
    slug: "event-tickets-bookmarks",
    title: "Event Tickets & Bookmarks",
    category: "Printing",
    tagline: "Details that make your event memorable.",
    description:
      "Event tickets do more than grant entry — they set the tone for your event and double as a keepsake. We print tickets on durable stock with numbering, perforations and stub options. Bookmarks are a charming, low-cost promotional item for libraries, schools, authors and businesses alike.",
    art: "ticket",
    icon: Ticket,
    features: [
      "Numbered & barcoded tickets",
      "Perforated stubs and tear-off sections",
      "Durable 12pt–14pt card stock",
      "Custom shapes and full-colour designs",
      "Gloss or matte lamination options",
    ],
    specs: [
      { label: "Ticket size", value: "2×5.5in, 2.5×6.5in, custom" },
      { label: "Bookmark size", value: "2×7in standard" },
      { label: "Stock", value: "12pt – 14pt cover" },
      { label: "Options", value: "Numbering, perforation, stubs" },
      { label: "Minimum run", value: "From 100 pieces" },
    ],
    uses: [
      "Concerts, galas & fundraisers",
      "Raffles & prize draws",
      "School & library bookmarks",
      "Loyalty & gift coupons",
    ],
    priceNote: "Sequential numbering included on request.",
  },
  {
    slug: "booklets-notepads",
    title: "Booklets & Notepads",
    category: "Printing",
    tagline: "Tell the full story, page by page.",
    description:
      "Booklets let you say more — catalogues, programmes, manuals and lookbooks all benefit from a professionally bound format. We offer saddle-stitched and perfect-bound booklets on a variety of stocks. Notepads make practical branded giveaways, bound with a glued top edge for clean tear-off pages.",
    art: "booklet",
    icon: BookOpen,
    features: [
      "Saddle-stitched & perfect binding",
      "Catalogues, programmes & lookbooks",
      "Glue-bound tear-off notepads",
      "Full-colour inside and out",
      "Range of page counts and finishes",
    ],
    specs: [
      { label: "Binding", value: "Saddle-stitch, perfect bound" },
      { label: "Page counts", value: "8 to 100+ pages" },
      { label: "Sizes", value: "8.5×11in, 5.5×8.5in, A4, custom" },
      { label: "Notepad", value: "Glue-bound top, 25–100 sheets" },
      { label: "Minimum run", value: "From 50 booklets" },
    ],
    uses: [
      "Product catalogues",
      "Event programmes & guidebooks",
      "Branded notepad giveaways",
      " manuals & training books",
    ],
    priceNote: "Page count drives price — ask us for a tailored quote.",
  },
  {
    slug: "door-hangers-car-magnets",
    title: "Door Hangers & Car Magnets",
    category: "Printing",
    tagline: "Marketing that travels and knocks.",
    description:
      "Door hangers put your message directly into the hands of residents, making them perfect for local services, deliveries and promotions. Car magnets turn your vehicle into a moving billboard — a flexible alternative to a full wrap. Both are printed on durable, weather-resistant materials for indoor and outdoor use.",
    art: "door-hanger",
    icon: DoorOpen,
    features: [
      "Custom die-cut door hanger shapes",
      "Weather-resistant card stock & vinyl",
      "Removable, vehicle-safe magnetic vinyl",
      "Full-colour, double-sided printing",
      "Great for local, targeted campaigns",
    ],
    specs: [
      { label: "Hanger size", value: "4×9in standard, custom shapes" },
      { label: "Magnet size", value: "12×18in, 18×24in, custom" },
      { label: "Material", value: "14pt card, magnetic vinyl" },
      { label: "Durability", value: "Outdoor & weather resistant" },
      { label: "Minimum run", value: "From 100 pieces" },
    ],
    uses: [
      "Local service promotions",
      "Real estate & delivery hangers",
      "Contractor vehicle branding",
      "Neighbourhood campaigns",
    ],
    priceNote: "Ideal for hyper-local marketing on a small budget.",
  },
  {
    slug: "greeting-invitation-cards",
    title: "Greeting & Invitation Cards",
    category: "Printing",
    tagline: "Mark the moments that matter.",
    description:
      "From seasonal greetings to wedding and party invitations, beautifully printed cards leave a lasting impression. We print folded and flat cards on premium stocks with envelopes, offering foil accents, embossing and custom shapes to make every invitation feel special — whether for personal celebrations or corporate holiday mailings.",
    art: "card",
    icon: Heart,
    features: [
      "Folded, flat and die-cut card formats",
      "Premium stocks with matching envelopes",
      "Foil, emboss and soft-touch options",
      "Personal & corporate designs",
      "Custom shapes and sizes",
    ],
    specs: [
      { label: "Card sizes", value: "5×7in, 4×6in, A2, custom" },
      { label: "Stock", value: "12pt – 16pt cover, textured" },
      { label: "Envelopes", value: "Matching colours available" },
      { label: "Extras", value: "Foil, emboss, soft-touch, die-cut" },
      { label: "Minimum run", value: "From 25 cards" },
    ],
    uses: [
      "Wedding & party invitations",
      "Holiday & seasonal greetings",
      "Thank-you & save-the-date cards",
      "Corporate holiday mailings",
    ],
    priceNote: "Low minimums perfect for personal events.",
  },

  /* ------------------------------ SIGNS ------------------------------ */
  {
    slug: "window-graphics",
    title: "Window Graphics",
    category: "Signs",
    tagline: "Turn your glass into a storefront statement.",
    description:
      "Window graphics transform plain glass into powerful advertising and privacy. Choose from frosted etched-vinyl for a premium look, one-way vision perforated vinyl that lets you see out while displaying graphics inside, or full-colour window wraps. Ideal for storefronts, offices and restaurants wanting instant impact.",
    art: "window",
    icon: Store,
    popular: true,
    features: [
      "Frosted, etched and sandblast-look vinyl",
      "One-way vision perforated window film",
      "Full-colour printed window wraps",
      "Privacy and decorative glass films",
      "Professional measurement & installation",
    ],
    specs: [
      { label: "Materials", value: "Frosted, perforated, cast vinyl" },
      { label: "Coverage", value: "Partial or full window" },
      { label: "Visibility", value: "One-way vision options" },
      { label: "Finish", value: "Etched, clear, printed" },
      { label: "Minimum order", value: "Single window or full store" },
    ],
    uses: [
      "Storefront branding",
      "Office privacy partitions",
      "Seasonal promotions & sales",
      "Restaurant & café décor",
    ],
    priceNote: "Free site measure available for local projects.",
  },
  {
    slug: "wall-graphics-murals",
    title: "Wall Graphics & Murals",
    category: "Signs",
    tagline: "Make every wall part of your brand.",
    description:
      "Wall graphics and murals turn empty walls into immersive brand experiences. Printed on durable, removable adhesive vinyl or fabric, murals can cover a single accent wall or an entire room. Perfect for offices, restaurants, retail stores and homes looking to add colour, personality and impact to their space.",
    art: "wall",
    icon: PanelTop,
    popular: true,
    features: [
      "Full-colour printed wall murals",
      "Removable & repositionable vinyl",
      "Fabric wallcovering options",
      "Photo, pattern or branded designs",
      "Professional install & site survey",
    ],
    specs: [
      { label: "Materials", value: "Adhesive vinyl, fabric" },
      { label: "Coverage", value: "Accent wall to full room" },
      { label: "Finish", value: "Matte, textured, fabric" },
      { label: "Removability", value: "Removable, wall-safe adhesives" },
      { label: "Minimum order", value: "Single wall or mural" },
    ],
    uses: [
      "Office branding & reception walls",
      "Retail & restaurant interiors",
      "Photo walls & feature backdrops",
      "Home & nursery décor",
    ],
    priceNote: "We can print to any wall size — measured to fit.",
  },
  {
    slug: "vinyl-lettering",
    title: "Vinyl Lettering",
    category: "Signs",
    tagline: "Crisp, cut-lettering for a clean professional look.",
    description:
      "Vinyl lettering is cut from solid-colour vinyl — not printed — giving you razor-sharp text and logos in any colour, including metallic and translucent options. It adheres to windows, walls, doors, vehicles and most smooth surfaces, and is a cost-effective way to add business names, hours and messaging with a clean, painted-on appearance.",
    art: "lettering",
    icon: Type,
    features: [
      "Cut-vinyl text, logos & graphics",
      "Huge range of colours & metallics",
      "Painted-on, professional appearance",
      "Indoor & outdoor durable grades",
      "Removable without surface damage",
    ],
    specs: [
      { label: "Colours", value: "Solid, metallic, translucent, custom" },
      { label: "Durability", value: "3–7 years outdoor grade" },
      { label: "Surfaces", value: "Glass, walls, doors, vehicles" },
      { label: "Application", value: "We install or supply to fit" },
      { label: "Minimum order", value: "Single lettering job" },
    ],
    uses: [
      "Business names on windows",
      "Office door & room labels",
      "Opening hours & information",
      "Vehicle lettering",
    ],
    priceNote: "Priced by size and letter count.",
  },
  {
    slug: "custom-banners",
    title: "Custom Banners",
    category: "Signs",
    tagline: "Big, bold messaging for any occasion.",
    description:
      "Custom banners deliver maximum visibility for events, sales and grand openings. Printed on durable vinyl or fabric with hemming and eyelets, our banners are built to withstand indoor and outdoor use. Retractable and roll-up options make them easy to transport and set up for trade shows and presentations.",
    art: "banner",
    icon: Flag,
    popular: true,
    features: [
      "Vinyl, fabric and mesh banner options",
      "Hemmed edges with reinforced eyelets",
      "Indoor & outdoor weatherproof grades",
      "Retractable / roll-up display stands",
      "Any custom size up to large format",
    ],
    specs: [
      { label: "Materials", value: "Vinyl, fabric, mesh" },
      { label: "Sizes", value: "Custom, up to several metres" },
      { label: "Finishing", value: "Hem, eyelets, pole pockets" },
      { label: "Stands", value: "Retractable, telescopic, X-frame" },
      { label: "Minimum order", value: "Single banner" },
    ],
    uses: [
      "Grand openings & sales",
      "Trade shows & expos",
      "Events, festivals & weddings",
      "Sports & community days",
    ],
    priceNote: "Same-week production on most standard banners.",
  },
  {
    slug: "custom-signs",
    title: "Custom Signs",
    category: "Signs",
    tagline: "Any sign, any size, built around your brand.",
    description:
      "Need something specific? Custom signs are designed and fabricated to your exact requirements — from small indoor plaques to large exterior boards. We work with coroplast, PVC, foam board, aluminium composite and more, with printed, cut-out and illuminated options to suit indoor and outdoor environments.",
    art: "sign",
    icon: PanelTop,
    popular: true,
    features: [
      "Fully bespoke design & sizing",
      "Coroplast, PVC, foam board, ACM panels",
      "Printed, cut-out & dimensional builds",
      "Indoor & weatherproof outdoor grades",
      "Design assistance & proofs included",
    ],
    specs: [
      { label: "Materials", value: "Coroplast, PVC, foam, aluminium" },
      { label: "Sizes", value: "Any — measured to fit" },
      { label: "Types", value: "Flat, panel, dimensional, lit" },
      { label: "Environment", value: "Indoor & outdoor" },
      { label: "Minimum order", value: "Single custom sign" },
    ],
    uses: [
      "Directional & wayfinding signs",
      "Safety & regulatory signage",
      "Information & compliance boards",
      "Bespoke branded displays",
    ],
    priceNote: "Send us your dimensions for a quick quote.",
  },
  {
    slug: "exterior-signage",
    title: "Exterior Signage",
    category: "Signs",
    tagline: "Weather-ready signs that work around the clock.",
    description:
      "Exterior signage is your business's first impression from the street. We fabricate weather-resistant storefront signs, fascia boards, panel signs, A-frames and pylons built to endure sun, rain and snow. Durable materials and UV-stable inks ensure your signage stays sharp and professional year after year.",
    art: "exterior",
    icon: Building2,
    features: [
      "Storefront, fascia & panel signs",
      "Weather & UV-resistant construction",
      "Aluminium composite & aluminium builds",
      "Illuminated & non-illuminated options",
      "Installation service available",
    ],
    specs: [
      { label: "Materials", value: "ACM, aluminium, acrylic, vinyl" },
      { label: "Durability", value: "All-weather outdoor grade" },
      { label: "Lighting", value: "Illuminated or non-illuminated" },
      { label: "Mounting", value: "Wall, post, fascia, pylon" },
      { label: "Minimum order", value: "Single sign" },
    ],
    uses: [
      "Storefront & shop signs",
      "Building & office signage",
      "Parking & directional signs",
      "Restaurant & retail fascia",
    ],
    priceNote: "Site assessment available before installation.",
  },
  {
    slug: "interior-decor-signs",
    title: "Interior Decor Signs",
    category: "Signs",
    tagline: "Elevate the look and feel of your space.",
    description:
      "Interior decor signs combine style with function — reception logos, office nameplates, menu boards and decorative panels that reinforce your brand the moment people walk in. From sleek acrylic and metal finishes to warm wood and dimensional lettering, we craft pieces that make your interior feel considered and professional.",
    art: "interior",
    icon: Lightbulb,
    features: [
      "Reception & lobby logo signs",
      "Office nameplates & door signage",
      "Decorative & motivational panels",
      "Acrylic, metal, wood & PVC finishes",
      "Dimensional & backlit options",
    ],
    specs: [
      { label: "Materials", value: "Acrylic, metal, wood, PVC, foam" },
      { label: "Types", value: "Flat, dimensional, backlit" },
      { label: "Finish", value: "Matte, gloss, brushed, textured" },
      { label: "Mounting", value: "Standoff, flush, adhesive" },
      { label: "Minimum order", value: "Single piece" },
    ],
    uses: [
      "Reception & lobby branding",
      "Office & room identification",
      "Wayfinding & directories",
      "Café & restaurant menu boards",
    ],
    priceNote: "Matched to your brand colours and materials.",
  },
  {
    slug: "popup-signs-banners",
    title: "Pop up Signs & Banners",
    category: "Signs",
    tagline: "Portable displays that set up in seconds.",
    description:
      "Pop up displays and portable banner stands are made for life on the move. Lightweight frames with fabric or vinyl graphics pack down into carry cases for effortless transport — perfect for trade shows, markets, presentations and events. Set up in minutes without tools for a professional backdrop anywhere you go.",
    art: "popup",
    icon: Monitor,
    features: [
      "Fabric & vinyl pop-up displays",
      "Retractable / roll-up banner stands",
      "Lightweight, reusable carry frames",
      "Tool-free, minutes-to-set-up",
      "Carry bags & hard cases available",
    ],
    specs: [
      { label: "Widths", value: "2m, 3m, 4m pop-up frames" },
      { label: "Graphics", value: "Fabric or PVC panel" },
      { label: "Portability", value: "Carry bag / hard case" },
      { label: "Setup", value: "Tool-free, minutes" },
      { label: "Minimum order", value: "Single display" },
    ],
    uses: [
      "Trade shows & expos",
      "Markets & pop-up stalls",
      "Presentations & conferences",
      "Product launches",
    ],
    priceNote: "Bundle stands with banners for event savings.",
  },
  {
    slug: "led-displays",
    title: "LED Displays",
    category: "Signs",
    tagline: "Light up your message, day and night.",
    description:
      "LED displays and light box signs keep your brand glowing around the clock. Backlit acrylic panels, LED letter boxes and digital-ready display frames deliver bright, even illumination that stands out after dark. Energy-efficient LED technology keeps running costs low while maximising visibility and curb appeal.",
    art: "led",
    icon: Sun,
    features: [
      "Backlit LED light box signs",
      "LED-illuminated panels & letters",
      "Energy-efficient, long-life LEDs",
      "Even, bright illumination",
      "Indoor & outdoor rated options",
    ],
    specs: [
      { label: "Lighting", value: "LED, energy-efficient" },
      { label: "Types", value: "Light box, panel, channel, digital" },
      { label: "Environment", value: "Indoor & outdoor rated" },
      { label: "Control", value: "Static or programmable" },
      { label: "Minimum order", value: "Single unit" },
    ],
    uses: [
      "Illuminated storefront signs",
      "Backlit logos & menus",
      "Menu boards & directory displays",
      "Night-time visibility",
    ],
    priceNote: "Ask about energy-efficient LED upgrades.",
  },
  {
    slug: "channel-letters",
    title: "Channel Letters",
    category: "Signs",
    tagline: "Premium 3D letters that define your storefront.",
    description:
      "Channel letters are individual three-dimensional letters — the gold standard for professional storefront signage. Each letter is fabricated from aluminium with an acrylic face and can be front-lit, halo-lit or non-illuminated. They deliver a bold, high-end look that makes your business name unmistakable from a distance.",
    art: "channel",
    icon: Type,
    features: [
      "3D fabricated aluminium letters",
      "Front-lit, halo-lit or non-lit",
      "Acrylic faces with trim caps",
      "Custom fonts, colours & logos",
      "Professional fabrication & install",
    ],
    specs: [
      { label: "Construction", value: "Aluminium can, acrylic face" },
      { label: "Lighting", value: "Front-lit, halo, non-illuminated" },
      { label: "Colours", value: "Custom matched to brand" },
      { label: "Sizes", value: "Custom letter heights" },
      { label: "Minimum order", value: "Single set of letters" },
    ],
    uses: [
      "Storefront business names",
      "Building & tower signage",
      "Reception logo lettering",
      "High-end retail branding",
    ],
    priceNote: "Priced per letter and by overall size.",
  },
  {
    slug: "pvc-acrylic-signs",
    title: "PVC & Acrylic Signs",
    category: "Signs",
    tagline: "Sleek, modern signage with a premium finish.",
    description:
      "PVC and acrylic signs offer a clean, contemporary look suitable for both indoor and outdoor use. Acrylic provides a glossy, glass-like finish with standoff mounts for a floating effect, while PVC is lightweight, rigid and cost-effective. Both are perfect for office signs, directories, plaques and branded displays.",
    art: "acrylic",
    icon: PanelTop,
    features: [
      "Glossy, glass-like acrylic panels",
      "Lightweight, rigid PVC boards",
      "Standoff mounts for a floating look",
      "Printed, frosted or cut designs",
      "Indoor & outdoor durability",
    ],
    specs: [
      { label: "Materials", value: "Acrylic (Perspex), PVC foam" },
      { label: "Thickness", value: "3mm – 6mm panels" },
      { label: "Mounting", value: "Standoffs, flush, adhesive" },
      { label: "Finish", value: "Gloss, frosted, matte, printed" },
      { label: "Minimum order", value: "Single sign" },
    ],
    uses: [
      "Office & lobby signage",
      "Directories & room labels",
      "Plaques & award boards",
      "Point-of-sale displays",
    ],
    priceNote: "Standoff hardware available as an add-on.",
  },
  {
    slug: "vehicle-decals-wraps",
    title: "Vehicle Decal & Car Wraps",
    category: "Signs",
    tagline: "Turn every drive into a marketing opportunity.",
    description:
      "Vehicle decals and wraps turn cars, vans and trucks into mobile billboards seen by thousands of people every day. Choose full wraps for complete transformation, partial wraps for targeted branding, or simple door decals and magnets. Printed on premium cast vinyl with a protective laminate for a durable, professional finish.",
    art: "vehicle",
    icon: Car,
    popular: true,
    features: [
      "Full, partial & spot vehicle wraps",
      "Door decals & removable magnets",
      "Premium cast vinyl with laminate",
      "Custom fit to cars, vans & fleets",
      "Professional installation service",
    ],
    specs: [
      { label: "Coverage", value: "Full, partial, spot, decals" },
      { label: "Material", value: "Cast vinyl + protective laminate" },
      { label: "Vehicles", value: "Cars, vans, trucks, fleets" },
      { label: "Durability", value: "3–5 years outdoor" },
      { label: "Minimum order", value: "Single vehicle" },
    ],
    uses: [
      "Fleet & business branding",
      "Contractor & trades vehicles",
      "Mobile advertising",
      "Removable seasonal promos",
    ],
    priceNote: "Free vehicle measure and design mock-up.",
  },
];

export const categories: ServiceCategory[] = ["Printing", "Signs"];

export const printingServices = services.filter((s) => s.category === "Printing");
export const signsServices = services.filter((s) => s.category === "Signs");
export const popularServices = services.filter((s) => s.popular);

export function getServiceBySlug(slug: string): Service | undefined {
  return services.find((s) => s.slug === slug);
}

export function getServicesByCategory(category: ServiceCategory): Service[] {
  return services.filter((s) => s.category === category);
}
