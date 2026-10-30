export type FaqItem = {
  question: string;
  answer: string;
};

export const faq: FaqItem[] = [
  {
    question: "What file formats do you accept for print and signage production?",
    answer:
      "We accept print-ready vector and high-resolution files including PDF, AI (Adobe Illustrator), EPS, and high-resolution TIFF or PNG (300 DPI at 100% scale for print, 150 DPI at full scale for large-format signs). For best results, design in CMYK color mode, convert text fonts to outlines/curves, and include a standard 0.125\" (1/8 inch) bleed around the perimeter.",
  },
  {
    question: "Can I request custom sizes and dimensions not listed on the site?",
    answer:
      "Yes, absolutely. Every project can be produced to your exact architectural or promotional dimensions. Whether you need a non-standard storefront fascia sign, an irregular custom table wrap, or custom-dimensioned banners, we fabricate directly to your specified measurements. Share your required width and height in your quote request.",
  },
  {
    question: "Do you provide design assistance or file preparation support?",
    answer:
      "Yes. If you already have existing artwork, logos, or brand guidelines, our team will review your files free of charge to confirm bleed, resolution, and safe margins prior to production. If you need complete design support from scratch, we collaborate closely with you to produce clean, professional layouts tailored for print and signage.",
  },
  {
    question: "How do I request a quote for my project?",
    answer:
      "You can submit an inquiry through our online quote form on the Contact page, email us directly at jpprint13@gmail.com, or call us at 905 919 1181. Please specify the product or service, desired quantity, estimated dimensions, and preferred paper stock or signage substrate. All quotes are free and provide clear, no-obligation pricing.",
  },
  {
    question: "What printing finishes and paper stocks are available?",
    answer:
      "We offer a broad selection of premium finishes suited to every corporate aesthetic. Options include velvety silk lamination, glare-free matte aqueous coating, high-gloss UV protective coat, tactile classic woven linen, 14pt natural cotton uncoated, magnetic backing, and rigid waterproof plastic. For signage, we offer gloss, matte, anti-glare, and anti-graffiti overlaminates.",
  },
  {
    question: "Do you offer professional signage and vinyl installation in Ontario?",
    answer:
      "Yes. For commercial storefront signage, large window graphics, wall murals, architectural table wraps, and vehicle fleet decals, our experienced installation team provides on-site measurement and professional application throughout Ontario. We ensure surface preparation, precise bubble-free alignment, and durable edge seals.",
  },
];
